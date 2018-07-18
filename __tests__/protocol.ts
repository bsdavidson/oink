import {Packet} from "../src/protocol";

function createPacketBuffer({
  data = "!1MVLQSTN\x1a\r",
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

test("Packet.toBuffer() should encode a packet", () => {
  const buf = new Packet("MVL", "QSTN").toBuffer();
  const expected = createPacketBuffer({data: "!1MVLQSTN\r"});
  expect(buf).toEqual(expected);
});

test("Packet.fromBuffer() should decode a packet", () => {
  const packet = Packet.fromBuffer(createPacketBuffer());
  expect(packet).toEqual(new Packet("MVL", "QSTN"));
});

test("Packet.fromBuffer() should throw when magic is wrong", () => {
  expect(() => {
    Packet.fromBuffer(createPacketBuffer({magic: "BAAD"}));
  }).toThrowError("bad magic value (expected ISCP, got BAAD)");
});

test("Packet.fromBuffer() should throw when headerSize is wrong", () => {
  expect(() => {
    Packet.fromBuffer(createPacketBuffer({headerSize: 99}));
  }).toThrowError("bad headerSize value (expected 16, got 99)");
});

test("Packet.fromBuffer() should throw when version is wrong", () => {
  expect(() => {
    Packet.fromBuffer(createPacketBuffer({version: 99}));
  }).toThrowError("bad version value (expected 1, got 99)");
});

test("Packet.fromBuffer() should throw when data length is wrong", () => {
  expect(() => {
    Packet.fromBuffer(createPacketBuffer({dataSize: 99}));
  }).toThrowError("not enough data (expected 99 bytes, got 11 bytes)");
});

test("Packet.fromBuffer() should throw when data format is wrong", () => {
  expect(() => {
    Packet.fromBuffer(createPacketBuffer({data: "PICKLERICK!"}));
  }).toThrowError("invalid data (PICKLERICK!)");
});
