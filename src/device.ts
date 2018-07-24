import dgram from "dgram";
import net from "net";

import {ContextError} from "./api";
import {Packet, DISCOVER_BUFFERS, PORT} from "./protocol";
import {EventEmitter} from "events";

type ReadPacketCallback = (packet: Packet) => void;

function readPackets(socket: net.Socket, callback: ReadPacketCallback) {
  const buffer = Buffer.alloc(256);
  let offset = 0;
  socket.on("data", buf => {
    const oldOffset = offset;
    buffer.set(buf, offset);
    offset += buf.length;

    if (!buf.slice(oldOffset, offset).includes("\x0d", 0)) {
      return;
    }
    const packet = Packet.fromBuffer(buffer.slice(0, offset));
    if (packet) {
      callback(packet);
    }
    offset = 0;
  });
}

export class Device extends EventEmitter {
  public socket?: net.Socket;
  public connectPromise?: Promise<net.Socket>;

  constructor(
    public address: string,
    public port: number,
    public type: string
  ) {
    super();
  }

  get connected(): boolean {
    return this.socket !== undefined;
  }

  connect(): Promise<net.Socket> {
    if (this.connectPromise) {
      return this.connectPromise;
    } else if (this.socket) {
      return Promise.resolve(this.socket);
    }

    this.connectPromise = new Promise((resolve, reject) => {
      let finished = false;
      const socket = new net.Socket();

      const finish = (err?: Error) => {
        if (finished) {
          return;
        }
        finished = true;
        this.connectPromise = undefined;
        if (err) {
          this.socket = undefined;
          socket.end();
          reject(err);
          return;
        }
        this.socket = socket;
        resolve();
        readPackets(this.socket, packet => {
          this.emit("data", packet);
        });
      };

      socket.setTimeout(1000);
      socket.once("connect", () => finish());
      socket.once("error", err => finish(err));
      socket.once("timeout", () => finish(new Error("connection timed out")));

      socket.connect({host: this.address, port: this.port});
    });

    return this.connectPromise;
  }

  sendCommand(
    command: string,
    parameter: string,
    timeoutLength?: number
  ): Promise<any> {
    const packet = new Packet(command, parameter);
    return this.send(packet, timeoutLength);
  }

  send(packet: Packet, timeoutLength: number = 1000): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.socket) {
        reject(new ContextError("device not connected", 500));
        return;
      }
      let timeout = setTimeout(() => {
        this.off("data", handleData);
        reject(new ContextError("command timed out", 504));
      }, timeoutLength);

      const handleData = (data: Packet) => {
        if (data.command === packet.command) {
          clearTimeout(timeout);
          this.off("data", handleData);
          resolve(data);
        }
      };

      this.on("data", handleData);
      const buf = packet.toBuffer(this.type);
      if (buf) {
        this.socket.write(buf);
      }
    });
  }
}

export class DiscoveredDevice {
  constructor(
    public address: string,
    public port: number,
    public type: string,
    public model: string,
    public region: string,
    public identifier: string
  ) {}

  toDevice() {
    return new Device(this.address, this.port, this.type);
  }

  static fromBuffer(buf: Buffer, address: string) {
    const packet = Packet.fromBuffer(buf);
    const fields = packet.parameter.split("/");
    if (fields.length !== 4) {
      throw new Error(
        `invalid parameter "${packet.parameter}" (expected 4 items, got ${
          fields.length
        })`
      );
    }
    const [model, rawPort, region, identifier] = fields;
    const port = parseInt(rawPort, 10);
    if (isNaN(port)) {
      throw new Error(`invalid port "${rawPort}"`);
    }

    return new DiscoveredDevice(
      address,
      port,
      packet.deviceType,
      model,
      region,
      identifier
    );
  }
}

export function discover({
  deviceLimit = Infinity,
  timeLimit = 1000
} = {}): Promise<DiscoveredDevice[]> {
  return new Promise((resolve, reject) => {
    const socket = dgram.createSocket("udp4");
    const devices: DiscoveredDevice[] = [];
    let finished = false;
    let timeout: any;

    function finish(err?: Error) {
      if (finished) {
        return;
      }
      finished = true;
      clearTimeout(timeout);
      socket.close();
      if (err) {
        reject(err);
        return;
      }
      resolve(devices);
    }

    socket.once("error", err => finish(err));
    socket.on("message", (msg, rinfo) => {
      if (finished) {
        return;
      }
      devices.push(DiscoveredDevice.fromBuffer(msg, rinfo.address));
      if (devices.length >= deviceLimit) {
        finish();
      }
    });
    socket.bind(0, () => {
      socket.setBroadcast(true);
      timeout = setTimeout(finish, timeLimit);
      DISCOVER_BUFFERS.forEach(buf => {
        socket.send(buf, 0, buf.length, PORT, "255.255.255.255");
      });
    });
  });
}
