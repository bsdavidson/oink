import http from "http";
import url from "url";
import querystring from "querystring";

import {Device} from "./device";
import {isArray} from "util";

export interface Context {
  req: http.IncomingMessage;
  res: http.ServerResponse;
  body: {[key: string]: any};
}

export class ContextError extends Error {
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
  res.end(JSON.stringify({error: err.toString()}));
}

/**
 * Validate that the POST body is valid JSON
 */
export function requireBody(req: http.IncomingMessage): Promise<any> {
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

/**
 * Convience method that makes a query on a device for the passed in command.
 *
 * @param device An instance of a Device that will receive and send responses.
 * @param command The command to be issued the request. (e.g. "MVL", "AMT", ...)
 * @param timeout An optional integer that specifies a timeout (in ms) to wait
 *    for a response before timing out. (default is 1000).
 */
export async function sendQuery(
  device: Device,
  command: string,
  timeout?: number
) {
  return device.sendCommand(command, "QSTN", timeout);
}

/**
 * Calls the sendCommand method on a device with the passed in parameters.
 *
 * @param device An instance of a Device that will receive and send responses.
 * @param command The command to be issued the request. (e.g. "MVL", "AMT", ...)
 * @param parameter An optional value that specifies a value/action to be
 *    applied to a command. (e.g. "01", "UP", ...)
 * @param timeout An optional integer that specifies a timeout (in ms) to wait
 *    for a response before timing out. (default is 1000).
 */
export async function sendCommand(
  device: Device,
  command: string,
  parameter?: string,
  timeout?: number
) {
  if (!parameter) {
    throw new ContextError("Parameter is required", 400);
  }
  return device.sendCommand(command, parameter, timeout);
}

/**
 * Parses incoming HTTP requests and passes the request parameters to an
 * appropriate function.
 *
 * @param ctx Contains the req, res, and optional body.
 * @param device An instance of a Device that will receive and send responses.
 * @returns A promise that is resolved with a device response. It will reject
 *    with an error if the request times out or the device responds with an
 *    error.
 */
export async function handleCommand(
  ctx: Context,
  device: Device
): Promise<any> {
  var url_parts = url.parse(ctx.req.url || "");
  const command = (
    (url_parts.pathname || "").split("/").pop() || ""
  ).toUpperCase();

  if (!command.match(/[A-Z0-9]{3}/) || command.length !== 3) {
    throw new ContextError("Missing or invalid command", 400);
  }

  const query = querystring.parse(url_parts.query || "");
  let timeout: number | undefined =
    query.timeout && !isArray(query.timeout)
      ? parseInt(query.timeout)
      : undefined;

  switch (ctx.req.method) {
    case "GET":
      // GET requests are only for queries.
      return await sendQuery(device, command, timeout);

    case "POST":
      return await sendCommand(device, command, ctx.body.parameter, timeout);

    default:
      throw new ContextError("Invalid request method", 405);
  }
}

/**
 * Generates an HTTP handler that has access to a Device instance. It does some
 * minimal validation on a request before passing a Context and the Device
 * instance to the passed in callback.
 *
 * @param device An instance of a Device that will receive and send responses
 * @param callback A function that accepts a Context and Device instance and
 *    should return a promise that resolves to a value that will be sent back
 *    to the client.
 * @returns An HTTP handler
 */
export function createDeviceHandler(device: Device, callback = handleCommand) {
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
      const value = JSON.stringify(await callback(context, device));

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
