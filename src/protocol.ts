const MAGIC = "ISCP";
const HEADER_SIZE = 16;
const VERSION = 1;
const RESERVED = "\x00\x00\x00";

// \x1a is Onkyo's EOF byte
const dataRegexp = /!1(...)(.*)\x1a(?:\r|\n|\r\n)/;

export class Packet {
  public command: string;
  public parameter: string;

  constructor(command: string, parameter: string) {
    this.command = command;
    this.parameter = parameter;
  }

  /**
   * Creates a new Buffer from the Packet to be sent to the device.
   */
  toBuffer() {
    const data = `!1${this.command}${this.parameter}\r`;
    const buf = Buffer.alloc(HEADER_SIZE + data.length);
    buf.write(MAGIC, 0, 4, "ascii");
    buf.writeUInt32BE(HEADER_SIZE, 4);
    buf.writeUInt32BE(data.length, 8);
    buf.writeUInt8(VERSION, 12);
    buf.write(RESERVED, 13, 3, "ascii");
    buf.write(data, 16, data.length, "ascii");
    return buf;
  }

  /**
   * Creates a new Packet from a buffer of bytes received from a device.
   */
  static fromBuffer(buf: Buffer) {
    const magic = buf.toString("ascii", 0, 4);
    const headerSize = buf.readUInt32BE(4);
    const dataSize = buf.readUInt32BE(8);
    const version = buf.readUInt8(12);
    const data = buf.toString("ascii", 16, 16 + dataSize);
    const matches = data.match(dataRegexp);

    if (magic !== MAGIC) {
      throw new Error(`bad magic value (expected ${MAGIC}, got ${magic})`);
    } else if (headerSize !== HEADER_SIZE) {
      throw new Error(
        `bad headerSize value (expected ${HEADER_SIZE}, got ${headerSize})`
      );
    } else if (version !== VERSION) {
      throw new Error(
        `bad version value (expected ${VERSION}, got ${version})`
      );
    } else if (data.length < dataSize) {
      throw new Error(
        `not enough data (expected ${dataSize} bytes, got ${data.length} bytes)`
      );
    } else if (!matches) {
      throw new Error(`invalid data (${data})`);
    }

    return new Packet(matches[1], matches[2]);
  }
}
