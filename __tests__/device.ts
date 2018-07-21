jest.mock("dgram");
jest.mock("net");

import dgram from "dgram";
import net from "net";

import {DISCOVER_BUFFERS, PORT, Packet} from "../src/protocol";
import {discover, DiscoveredDevice, Device} from "../src/device";
import {EventEmitter} from "events";

function createPacketBuffer({
  data = "!1ECNDRX-3/60128/DX/001422012345\x19\r",
  magic = "ISCP",
  headerSize = 16,
  version = 1,
  dataSize = undefined
} = {}) {
  const buf = Buffer.alloc(headerSize + data.length);
  buf.write(magic, 0, 4, "ascii");
  buf.writeUInt32BE(headerSize, 4);
  buf.writeUInt32BE(dataSize || data.length, 8);
  buf.writeUInt8(version, 12);
  buf.write("\x00\x00\x00", 13, 3, "ascii");
  buf.write(data, 16, data.length, "ascii");
  return buf;
}

class MockDatagramSocket extends EventEmitter {
  public bind = jest.fn((_, callback) => {
    callback();
  });
  public close = jest.fn();
  public setBroadcast = jest.fn();
  public send = jest.fn(() => {
    if (this.err) {
      this.emit("error", this.err);
      return;
    }
    this.emit("message", createPacketBuffer(), {address: "1.2.3.4"});
  });

  constructor(public err?: Error) {
    super();
  }
}

test("discover() should resolve with a list of discovered devices", async () => {
  const socket = new MockDatagramSocket();
  dgram.createSocket.mockReturnValueOnce(socket);

  const discovered = await discover({deviceLimit: 1});
  expect(dgram.createSocket.mock.calls).toEqual([["udp4"]]);
  expect(socket.bind.mock.calls.length).toBe(1);
  expect(socket.bind.mock.calls[0][0]).toBe(0);
  expect(socket.setBroadcast.mock.calls).toEqual([[true]]);
  expect(socket.send.mock.calls).toEqual(
    DISCOVER_BUFFERS.map(buf => [buf, 0, buf.length, PORT, "255.255.255.255"])
  );
  expect(socket.close.mock.calls.length).toBe(1);

  expect(discovered).toEqual([
    new DiscoveredDevice("1.2.3.4", PORT, "1", "DRX-3", "DX", "001422012345")
  ]);
});

test("discover() should timeout waiting for devices", async () => {
  dgram.createSocket.mockReturnValueOnce(new MockDatagramSocket());
  const discovered = await discover({deviceLimit: 3, timeLimit: 50});
  expect(discovered).toEqual([
    new DiscoveredDevice("1.2.3.4", PORT, "1", "DRX-3", "DX", "001422012345"),
    new DiscoveredDevice("1.2.3.4", PORT, "1", "DRX-3", "DX", "001422012345")
  ]);
});

test("discover() should reject if there is an error", async () => {
  expect.assertions(1);
  const expectedErr = new Error("🥒 PICKLERICK!");
  dgram.createSocket.mockReturnValueOnce(new MockDatagramSocket(expectedErr));
  try {
    await discover();
  } catch (err) {
    expect(err).toEqual(expectedErr);
  }
});

class MockSocket extends EventEmitter {
  public connect = jest.fn();
  public setTimeout = jest.fn();
  public end = jest.fn();
  public write = jest.fn();
}

test("DiscoveredDevice.toDevice() should return a device", () => {
  const discovered = new DiscoveredDevice(
    "1.2.3.4",
    PORT,
    "1",
    "DRX-3",
    "DX",
    "001422012345"
  );
  const device = discovered.toDevice();
  expect(device).toEqual(new Device("1.2.3.4", PORT, "1"));
});

test("Device.connect() should resolve when connected", async () => {
  const socket = new MockSocket();
  socket.connect.mockImplementationOnce(() => socket.emit("connect"));
  net.Socket.mockImplementationOnce(() => socket);

  const device = new Device("1.2.3.4", PORT, "1");

  await device.connect();

  expect(socket.connect.mock.calls).toEqual([
    [
      {
        port: PORT,
        host: "1.2.3.4"
      }
    ]
  ]);
  expect(socket.setTimeout.mock.calls).toEqual([[1000]]);
});

test("Device.connect() should reject when timed out", async () => {
  expect.assertions(2);

  const socket = new MockSocket();
  socket.connect.mockImplementationOnce(() => socket.emit("timeout"));
  net.Socket.mockImplementationOnce(() => socket);

  const device = new Device("1.2.3.4", PORT, "1");

  try {
    await device.connect();
  } catch (err) {
    expect(err).toEqual(new Error("connection timed out"));
    expect(socket.end.mock.calls.length).toBe(1);
  }
});

test("Device.connect() should reject when errored", async () => {
  expect.assertions(2);

  const socket = new MockSocket();
  socket.connect.mockImplementationOnce(() =>
    socket.emit("error", new Error("🥒 PICKLERICK!"))
  );
  net.Socket.mockImplementationOnce(() => socket);

  const device = new Device("1.2.3.4", PORT, "1");

  try {
    await device.connect();
  } catch (err) {
    expect(err).toEqual(new Error("🥒 PICKLERICK!"));
    expect(socket.end.mock.calls.length).toBe(1);
  }
});

test("Device.send() should emit a packet to send to the connected socket", async () => {
  const socket = new MockSocket();
  socket.connect.mockImplementationOnce(() => socket.emit("connect"));
  net.Socket.mockImplementationOnce(() => socket);

  const device = new Device("1.2.3.4", PORT, "1");

  await device.connect();
  device.send("MVL", "01", "1");
  expect(socket.write.mock.calls).toEqual([
    [new Packet("MVL", "01", "1").toBuffer()]
  ]);
});

test("Device should handle broken data", async () => {
  const socket = new MockSocket();
  socket.connect.mockImplementationOnce(() => socket.emit("connect"));
  net.Socket.mockImplementationOnce(() => socket);

  const device = new Device("1.2.3.4", PORT, "1");
  await device.connect();

  device.on("data", data => {
    expect(data.command).toEqual("ECN");
    expect(data.parameter).toEqual("DRX-3/60128/DX/001422012345");
    expect(data.deviceType).toEqual("1");
  });

  const packet = createPacketBuffer();
  socket.emit("data", packet.slice(0, 10));
  socket.emit("data", packet.slice(10, 20));
  socket.emit("data", packet.slice(20, packet.length));
});
