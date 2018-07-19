import dgram from "dgram";
import net from "net";

import {Packet, DISCOVER_BUFFERS, PORT} from "./protocol";

export class Device {
  constructor(
    public address: string,
    public port: number,
    public type: string
  ) {}

  connect() {
    return new Promise((resolve, reject) => {
      let finished = false;
      const socket = new net.Socket();

      function finish(err?: Error) {
        if (finished) {
          return;
        }
        finished = true;
        if (err) {
          socket.end();
          reject(err);
          return;
        }
        resolve();
      }

      socket.setTimeout(1000);
      socket.once("connect", () => finish());
      socket.once("error", err => finish(err));
      socket.once("timeout", () => finish(new Error("connection timed out")));
      socket.connect({host: this.address, port: this.port});
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

export function discover({deviceLimit = Infinity, timeLimit = 1000} = {}) {
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
