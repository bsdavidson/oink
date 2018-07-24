jest.mock("../src/device");

import http from "http";
import net from "net";
import {sendCommand, sendQuery, handleCommand} from "../src/api";
import {Device} from "../src/device";

test("sendQuery should call device.sendCommand with a Query", async () => {
  const mockDevice = new Device("1.2.3.4", 60000, "1");
  await sendQuery(mockDevice, "MVL", 1001);
  expect(mockDevice.sendCommand.mock.calls).toEqual([["MVL", "QSTN", 1001]]);
});

test("sendCommand should call device.sendCommand", async () => {
  const mockDevice = new Device("1.2.3.4", 60000, "1");
  await sendCommand(mockDevice, "MVL", "UP", 1001);
  expect(mockDevice.sendCommand.mock.calls).toEqual([["MVL", "UP", 1001]]);
});

test("sendCommand should throw if parameter is missing", async () => {
  expect.assertions(1);
  const mockDevice = new Device("1.2.3.4", 60000, "1");
  try {
    await sendCommand(mockDevice, "MVL");
  } catch (err) {
    expect(err).toEqual(new Error("Parameter is required"));
  }
});

test("handleCommand should call sendQuery on a valid GET request", async () => {
  const mockDevice = new Device("1.2.3.4", 60000, "1");

  const socket = new net.Socket();
  const mockReq = new http.IncomingMessage(socket);
  mockReq.method = "GET";
  mockReq.url = "/MVL?timeout=1001";
  const mockRes = new http.ServerResponse(mockReq);

  const mockContext = {req: mockReq, res: mockRes, body: undefined};
  await handleCommand(mockContext, mockDevice);

  expect(mockDevice.sendCommand.mock.calls).toEqual([["MVL", "QSTN", 1001]]);
});

test("handleCommand should throw on an invalid GET request", async () => {
  expect.assertions(1);
  const mockDevice = new Device("1.2.3.4", 60000, "1");

  const socket = new net.Socket();
  const mockReq = new http.IncomingMessage(socket);
  mockReq.method = "GET";
  mockReq.url = "/PR!";
  const mockRes = new http.ServerResponse(mockReq);
  const mockContext = {req: mockReq, res: mockRes, body: undefined};

  try {
    await handleCommand(mockContext, mockDevice);
  } catch (err) {
    expect(err).toEqual(new Error("Missing or invalid command"));
  }
});

test("handleCommand should call sendQuery on a valid POST request", async () => {
  const mockDevice = new Device("1.2.3.4", 60000, "1");

  const socket = new net.Socket();
  const mockReq = new http.IncomingMessage(socket);
  mockReq.method = "POST";
  mockReq.url = "/PWR?timeout=1001";
  const mockRes = new http.ServerResponse(mockReq);

  const mockContext = {req: mockReq, res: mockRes, body: {parameter: "ON"}};
  await handleCommand(mockContext, mockDevice);

  expect(mockDevice.sendCommand.mock.calls).toEqual([["PWR", "ON", 1001]]);
});

test("handleCommand should throw on an invalid POST request", async () => {
  expect.assertions(1);
  const mockDevice = new Device("1.2.3.4", 60000, "1");

  const socket = new net.Socket();
  const mockReq = new http.IncomingMessage(socket);
  mockReq.method = "POST";
  mockReq.url = "/PWR";
  const mockRes = new http.ServerResponse(mockReq);
  const mockContext = {req: mockReq, res: mockRes, body: {badparam: "what?"}};

  try {
    await handleCommand(mockContext, mockDevice);
  } catch (err) {
    expect(err).toEqual(new Error("Parameter is required"));
  }
});

test("handleCommand should throw on an unsupported Method", async () => {
  expect.assertions(1);
  const mockDevice = new Device("1.2.3.4", 60000, "1");

  const socket = new net.Socket();
  const mockReq = new http.IncomingMessage(socket);
  mockReq.method = "BADMETHOD";
  mockReq.url = "/PWR";
  const mockRes = new http.ServerResponse(mockReq);
  const mockContext = {req: mockReq, res: mockRes, body: undefined};

  try {
    await handleCommand(mockContext, mockDevice);
  } catch (err) {
    expect(err).toEqual(new Error("Invalid request method"));
  }
});
