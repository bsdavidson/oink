const MAGIC = "ISCP";
const HEADER_SIZE = 16;
const VERSION = 1;
const RESERVED = "\x00\x00\x00";

// \x19 and \x1a are Onkyo's terminator bytes
const dataRegexp = /!(.)(...)(.*)[\x19\x1a](?:\r|\n|\r\n)/;
export const PORT = 60128;

export class Packet {
  public command: string;
  public parameter: string;
  public deviceType: string;

  constructor(command: string, parameter: string, deviceType: string = "1") {
    this.command = command;
    this.parameter = parameter;
    this.deviceType = deviceType;
  }

  /**
   * Creates a new Buffer from the Packet to be sent to the device.
   */
  toBuffer() {
    const data = `!${this.deviceType}${this.command}${this.parameter}\r`;
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

    const [_, deviceType, command, parameter] = matches;
    return new Packet(command, parameter, deviceType);
  }
}

export const DISCOVER_BUFFERS = [
  new Packet("ECN", "QSTN", "x").toBuffer(),
  new Packet("ECN", "QSTN", "p").toBuffer()
];
