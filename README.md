# Oink

[![Build Status](https://travis-ci.org/bsdavidson/oink.svg?branch=master)](https://travis-ci.org/bsdavidson/oink) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bsdavidson/oink/blob/master/LICENSE)

Oink is a Node library for controlling Onkyo receivers. This was inspired by the
Python [onkyo-eiscp] library. Oink also makes use of a customized version of
onkyo-eiscp's YAML file for code generation.

Oink provides:

- A device class to communicate with receivers, and the ability to automatically
  discover receivers on a local network.
- An HTTP handler to provide a REST API to communicate with a device.
- A generated module of [helper functions] to make it easier
  to send commands to a device.

[onkyo-eiscp]: https://github.com/miracle2k/onkyo-eiscp
[helper functions]: https://github.com/bsdavidson/oink/tree/master/src/commands

## Installation

```bash
yarn add @bsdavidson/oink
```

## Example

```javascript
const http = require("http");
const {createDeviceHandler, discover} = require("oink");

async function main() {
  // Oink's discover method will search for devices on the network and return
  // an array of DiscoveredDevice objects.
  let discovered;
  do {
    discovered = await discover({deviceLimit: 1});
  } while (!discovered.length);

  // If you already know the host and port of your reciever,
  // you can call new Device() to create a Device instance
  // manually, rather than use discovery. For example:
  //
  //     const device = new Device("10.0.0.120", 60128, "1");
  //
  // But in this case, since we used discovery, you can call toDevice() on a
  // DiscoveredDevice instance to create a Device instance that can be used to
  // communicate with the receiver.
  const device = discovered[0].toDevice();

  // Device instances emit a data event for packets from the receiver.
  // Each incoming packet is a Packet instance containing the
  // command (e.g. PWR, MVL, ...), a parameter (e.g. "01", "somestring", ...),
  // and the device type (typically "1")
  device.on("data", packet => {
    console.log(packet);
  });

  // Call connect on a device to establish a persistant connection.
  await device.connect();

  // Send a command to a device by creating a command packet and passing it to
  // the send() method.
  //
  // Send an UP command to the Main Volume Level (MVL)
  const response = await device.sendCommand("MVL", "UP");
  console.log(response); // Packet { command: 'MVL', parameter: '1F', deviceType: '1' }

  // Oink also provides a way to create a standard HTTP handler which provides a
  // simple REST API to send and recieve commands to a device. For example,
  // to query the current master volume level (MVL), make a GET request like the
  // following:
  //
  //    $ curl http://127.0.0.1:3000/MVL
  //    {"command":"MVL","parameter":"1F","deviceType":"1"}
  http.createServer(createDeviceHandler(device)).listen(3000);
}

main();
```

[Oink.](http://gph.is/1OoF29s)
