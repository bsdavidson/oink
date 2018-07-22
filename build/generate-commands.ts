import fs from "fs";
import util from "util";
import yaml from "js-yaml";
import path from "path";
import prettier from "prettier";

const readFile = util.promisify(fs.readFile);
const mkdir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);

const renames: {[s: string]: string} = {
  delete: "delete_",
  return: "return_",
  "12v-trigger-a": "triggerA",
  "12v-trigger-b": "triggerB",
  "12v-trigger-c": "triggerC",
  "1680x720p": "to1680x720p",
  "2560x1080p": "to2560x1080p",
  "480p": "to480p",
  "720p": "to720p",
  "1080i": "to1080i",
  "1080p": "to1080p",
  "1080p-24fs": "to1080p24fs",
  "4k-upscaling": "to4kUpscaling",
  "0-in-direct-mode": "direct0",
  "1-in-direct-mode": "direct1",
  "2-in-direct-mode": "direct2",
  "3-in-direct-mode": "direct3",
  "4-in-direct-mode": "direct4",
  "5-in-direct-mode": "direct5",
  "6-in-direct-mode": "direct6",
  "7-in-direct-mode": "direct7",
  "8-in-direct-mode": "direct8",
  "9-in-direct-mode": "direct9",
  "p-p": "playPause",
  "rep-shf": "repeatShuffle"
};

/**
 * Converts a name from the YAML file (e.g. system-power) to a valid JavaScript
 * identifier (e.g. systemPower). If the name is defined in the renames map,
 * the value there will be used instead of generating one.
 *
 * @param name A name defined in the YAML file for a command or value. If an
 *    array of names is passed, only the first name will be used.
 */
function toIdentifier(name: string | string[]) {
  if (Array.isArray(name)) {
    name = name[0];
  }
  if (renames[name]) {
    return renames[name];
  }
  return name.replace(/-./g, match => match.charAt(1).toUpperCase());
}

/**
 * Describes an individual parameter value for a command in the YAML file.
 */
type OnkyoDataCommandValue = {
  name: string;
  description: string;
  models: string;
};

/**
 * Describes a command in the YAML file.
 */
type OnkyoDataCommand = {
  name: string;
  description: string;
  values: {
    [value: string]: OnkyoDataCommandValue;
  };
};

/**
 * A dictionary of commands and their possible values.
 */
type OnkyoDataCommandMap = {
  [command: string]: OnkyoDataCommand;
};

/**
 * The possible values for zones in the YAML file.
 */
enum OnkyoDataZone {
  Main = "main",
  Zone2 = "zone2",
  Zone3 = "zone3",
  Zone4 = "zone4",
  Dock = "dock"
}

/**
 * Represents the top level data loaded from the YAML file.
 */
interface OnkyoData {
  commands: {[zone in OnkyoDataZone]: OnkyoDataCommandMap};
  modelsets: any;
}

/**
 * Generates a string of JavaScript code defining a function for this value.
 * The function, when called, will return a Packet object for this value.
 *
 * @param value The value to render.
 * @param valueKey The key in the map of values. This is also the string
 *    that is sent to the device as a command parameter. ex "00", "QSTN", ...
 * @param commandKey The key in the map of commands. This is also the string
 *    that is sent to the device as a command. ex "PWR", "AMT", ...
 * @param commandFuncName The name of the generated function for the command.
 *    ex. systemPower, audioMuting, ...
 * @param zoneName The name of the zone the command belongs to.
 *    ex "main", "zone2", ...
 * @returns Returns a string of code or undefined if code cannot be generated
 *    for this value.
 */
function renderValue(
  value: OnkyoDataCommandValue,
  valueKey: string,
  commandKey: string,
  commandFuncName: string,
  zoneName: string
): string | undefined {
  if (valueKey.match(/[^a-z0-9/]/i)) {
    console.log(`bad value key (${zoneName} ${commandKey} ${valueKey})`);
    return;
  } else if (!value.name) {
    console.log(`missing value name (${zoneName} ${commandKey} ${valueKey})`);
    return;
  }
  const valueFuncName = toIdentifier(value.name);
  if (!valueFuncName.match(/^[a-z][a-z0-9]*_?$/i)) {
    console.log(
      `bad value name ${value.name} (${zoneName} ${commandKey} ${valueKey})`
    );
    return;
  }

  return `
    /** ${value.description} */
    export const ${valueFuncName} = () => ${commandFuncName}("${valueKey}");
  `;
}

/**
 * Generates a string of JavaScript code defining a function for this command.
 * The function, when called, creates a Packet to be sent to a device.
 *
 * @param command The command to be rendered.
 * @param commandKey The key in the map of commands. This is also the string
 *    that is sent to the device as a command. ex "PWR", "AMT", ...
 * @param zoneName The name of the zone the command belongs to.
 *    ex "main", "zone2", ...
 * @returns Returns a string of code or undefined if code cannot be generated
 *    for this value.
 */
function renderCommand(
  command: OnkyoDataCommand,
  commandKey: string,
  zoneName: string
): string | undefined {
  const funcName = toIdentifier(command.name);
  if (!funcName.match(/^[a-z][a-z0-9]*$/i)) {
    console.log(`bad command name ${command.name} (${zoneName} ${commandKey})`);
    return;
  }

  const lines = Object.keys(command.values)
    .map(k => renderValue(command.values[k], k, commandKey, funcName, zoneName))
    .filter(l => l);

  return `
    /**
      * ${command.description}
      */
    export function ${funcName}(value: string){
      return new Packet("${commandKey}", value);
    }
    export namespace ${funcName} {
      ${lines.join("\n")}
    }
  `;
}

/**
 * Generates a string of JavaScript code defining a module for this zone.
 *
 * @param name The name of the zone the command belongs to.
 *    ex "main", "zone2", ..
 * @param commands A map of valid commands for a zone.
 */
function renderZone(name: string, commands: OnkyoDataCommandMap): string {
  const lines = Object.keys(commands)
    .map(k => renderCommand(commands[k], k, name))
    .filter(l => l);

  return prettier.format(
    `
      import {Packet} from "../protocol";
      ${lines.join("\n")}
    `,
    {parser: "typescript"}
  );
}

function getOnkyoData(): Promise<OnkyoData> {
  return readFile(path.join(__dirname, "eiscp-commands.yaml"), "utf8")
    .then(data => yaml.safeLoad(data))
    .then(commands => {
      const {modelsets} = commands;
      delete commands.modelsets;
      return {commands, modelsets};
    });
}

async function main() {
  const onkyoData = await getOnkyoData();

  const zones = <OnkyoDataZone[]>Object.keys(onkyoData.commands);
  const commandsDir = path.join(__dirname, "..", "src", "commands");
  try {
    await mkdir(commandsDir, 0o755);
  } catch (err) {
    if (err.code !== "EEXIST") {
      throw err;
    }
  }

  await Promise.all([
    ...zones.map(zone => {
      writeFile(
        path.join(commandsDir, `${zone}.ts`),
        renderZone(zone, onkyoData.commands[zone]),
        {mode: 0o644}
      );
    }),
    writeFile(
      path.join(commandsDir, "index.ts"),
      zones.map(zone => `import * as ${zone} from "./${zone}";`).join("\n") +
        `\nexport {${zones.join(", ")}};\n`,
      {mode: 0o644}
    )
  ]);
}

main();
