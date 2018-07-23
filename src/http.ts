import http from "http";
import {Device} from "./device";
import {Packet} from "./protocol";

interface Context {
  req: http.IncomingMessage;
  res: http.ServerResponse;
  body: {[key: string]: any};
}

class ContextError extends Error {
  constructor(message: string, public code: number = 500) {
    super(message);
  }
}

function writeError(
  res: http.ServerResponse,
  err: string,
  statusCode: number = 500
): void {
  res.writeHead(statusCode, {"Content-Type": "application/json"});
  res.end(JSON.stringify({error: err}));
}

function requireBody(req: http.IncomingMessage): Promise<any> {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", buf => {
      body += buf.toString();
    });

    req.on("end", () => {
      try {
        const parsedBody = JSON.parse(body);
        if (parsedBody !== Object(parsedBody)) {
          throw new ContextError("Invalid post body", 400);
        }
        resolve(parsedBody);
      } catch (err) {
        reject(err);
      }
    });
  });
}

function sendQuery(device: Device, command: string) {
  return new Promise((resolve, reject) => {
    let timeout = setTimeout(() => {
      device.off("data", handleData);
      reject(new ContextError("command timeout", 504));
    }, 1000);

    function handleData(data: Packet) {
      if (data.command === command) {
        clearTimeout(timeout);
        device.off("data", handleData);
        resolve(data.parameter);
      }
    }

    device.on("data", handleData);
    device.send(command, "QSTN");
  });
}

function sendCommand(device: Device, command: string, parameter?: string) {
  if (!parameter) {
    throw new ContextError("Parameter is required", 400);
  }

  device.send(command, parameter);
  return true;
}

async function handleCommand(ctx: Context, device: Device) {
  const command = ((ctx.req.url || "").split("/").pop() || "").toUpperCase();
  if (!command.match(/[A-Z0-9]{3}/)) {
    throw new ContextError("Missing or invalid command", 400);
  }

  switch (ctx.req.method) {
    case "GET":
      return await sendQuery(device, command);

    case "POST":
      return sendCommand(device, command, ctx.body.parameter);

    default:
      throw new ContextError("Invalid request method", 405);
  }
}

export function createDeviceHandler(device: Device, handler = handleCommand) {
  return async (req: http.IncomingMessage, res: http.ServerResponse) => {
    let body;
    switch (req.method) {
      case "POST":
      case "PUT":
        try {
          body = await requireBody(req);
        } catch (err) {
          return writeError(res, "Invalid request body", 400);
        }
        break;
    }

    try {
      const context = {req, res, body};
      const value = JSON.stringify(await handler(context, device));

      res.writeHead(200, {"Content-Type": "application/json"});
      res.end(value);
    } catch (err) {
      if (err instanceof ContextError) {
        writeError(res, err.toString(), err.code);
      } else {
        writeError(res, "Unexpected error", 500);
      }
    }
  };
}
