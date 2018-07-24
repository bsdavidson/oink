import http from "http";
import net from "net";

import {createDeviceHandler, requireBody} from "../src/api";
import {Device} from "../src/device";

const volumeQuery =
  "ISCP\x00\x00\x00\x10\x00\x00\x00\x0A\x01\x00\x00\x00!1MVLQSTN\r";
const volumeChange =
  "ISCP\x00\x00\x00\x10\x00\x00\x00\x0A\x01\x00\x00\x00!1MVLDOWN\r";
const volumeResponse =
  "ISCP\x00\x00\x00\x10\x00\x00\x00\x09\x01\x00\x00\x00!1MVL01\x1a\r";

class IntegrationHarness {
  private sockets: net.Socket[] = [];
  private onkyo: net.Server;
  private device: Device;
  private server: http.Server;

  async setup() {
    this.onkyo = await this.createOnkyoServer();
    this.device = new Device(
      "localhost",
      (<net.AddressInfo>this.onkyo.address()).port,
      "1"
    );
    await this.device.connect();
    this.server = await this.createTestServer(this.device);
  }

  teardown() {
    this.server.close();
    this.onkyo.close();
    this.sockets.forEach(s => {
      s.destroy();
    });
  }

  private createOnkyoServer() {
    return new Promise<net.Server>(resolve => {
      const onkyo = net
        .createServer(socket => {
          socket.on("data", buf => {
            const s = buf.toString("ascii");
            if (s === volumeQuery || s === volumeChange) {
              socket.write(volumeResponse);
            }
          });
          this.sockets.push(socket);
        })
        .listen(0, () => {
          resolve(onkyo);
        });
    });
  }

  private createTestServer(device: Device) {
    return new Promise<http.Server>(resolve => {
      const server = http
        .createServer(createDeviceHandler(device))
        .listen(0, () => resolve(server));
    });
  }

  request(method: string, path: string, body?: string) {
    return new Promise<{body: string; statusCode: number}>(
      (resolve, reject) => {
        const options: http.RequestOptions = {
          host: "localhost",
          port: (<net.AddressInfo>this.server.address()).port,
          path: path,
          method: method
        };

        if (method === "POST") {
          options.headers = {
            "Content-Type": "application/json",
            "Content-Length": body.length
          };
        }

        const req = http.request(options, async res => {
          let responseBody;
          try {
            responseBody = await requireBody(res);
          } catch (err) {
            reject(err);
            return;
          }
          resolve({body: responseBody, statusCode: res.statusCode});
        });

        if (method === "POST") {
          req.write(body);
        }
        req.end();
      }
    );
  }
}

describe("createDeviceHandler", () => {
  var harness;
  beforeAll(async () => {
    harness = new IntegrationHarness();
    await harness.setup();
  });

  afterAll(() => {
    harness.teardown();
  });

  describe("GET", () => {
    test("should allow you to query a command", async () => {
      const response = await harness.request("GET", "/MVL?timeout=100");
      expect(response).toEqual({
        body: {command: "MVL", deviceType: "1", parameter: "01"},
        statusCode: 200
      });
    });

    test("should raise 400 error if command is invalid", async () => {
      const response = await harness.request("GET", "/PICKLERICK?timeout=100");
      expect(response).toEqual({
        statusCode: 400,
        body: {error: "Error: Missing or invalid command"}
      });
    });
  });

  describe("POST", () => {
    test("should allow you to query a command", async () => {
      const response = await harness.request(
        "POST",
        "/MVL",
        JSON.stringify({parameter: "DOWN"})
      );
      expect(response).toEqual({
        body: {command: "MVL", deviceType: "1", parameter: "01"},
        statusCode: 200
      });
    });

    test("should raise 400 error if post body is invalid JSON", async () => {
      const response = await harness.request("POST", "/MVL", "BAD");
      expect(response).toEqual({
        statusCode: 400,
        body: {error: "Invalid request body"}
      });
    });

    test("should raise 400 error if post body is not a JSON object", async () => {
      const response = await harness.request("POST", "/MVL", "true");
      expect(response).toEqual({
        statusCode: 400,
        body: {error: "Invalid request body"}
      });
    });

    test("should raise 400 error if command is invalid", async () => {
      const response = await harness.request(
        "POST",
        "/PICKLERICK",
        JSON.stringify({parameter: "DOWN"})
      );
      expect(response).toEqual({
        statusCode: 400,
        body: {error: "Error: Missing or invalid command"}
      });
    });
  });
});
