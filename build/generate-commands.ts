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

function toIdentifier(name: string | string[]) {
  if (name instanceof Array) {
    name = name[0];
  }
  if (renames[name]) {
    return renames[name];
  }
  return name.replace(/-./g, match => match.charAt(1).toUpperCase());
}

type OnkyoDataCommandMap = {
  [command: string]: {
    name: string;
    description: string;
    values: {
      [value: string]: {
        name: string;
        description: string;
        models: string;
      };
    };
  };
};

enum OnkyoDataZone {
  Main = "main",
  Zone2 = "zone2",
  Zone3 = "zone3",
  Zone4 = "zone4",
  Dock = "dock"
}

interface OnkyoData {
  commands: {[zone in OnkyoDataZone]: OnkyoDataCommandMap};
  modelsets: any;
  // command_mappings: any;
  // vault_mappings: any;
}

function renderCommands(name: string, zoneCommands: OnkyoDataCommandMap) {
  const lines = Object.keys(zoneCommands).map(ck => {
    const command = zoneCommands[ck];
    const commandFuncName = toIdentifier(command.name);
    if (!commandFuncName.match(/^[a-z][a-z0-9]*$/i)) {
      console.log(`bad command name ${command.name} (${name} ${ck})`);
      return;
    }

    const lines = Object.keys(command.values).map(vk => {
      if (vk.match(/[^a-z0-9/]/i)) {
        console.log(`bad value key (${name} ${ck} ${vk})`);
        return;
      }

      const value = command.values[vk];
      if (!value.name) {
        console.log(`missing value name (${name} ${ck} ${vk})`);
        return;
      }

      const valueFuncName = toIdentifier(value.name);

      if (!valueFuncName.match(/^[a-z][a-z0-9]*_?$/i)) {
        console.log(`bad value name ${value.name} (${name} ${ck} ${vk})`);
        return;
      }

      return `
      /** ${value.description} */
      export const ${valueFuncName} = () => ${commandFuncName}("${vk}");
      `;
    });

    return `
    /**
     * ${command.description}
     */
    export function ${commandFuncName}(value: string){
      return new Packet("${ck}", value);
    }
    export namespace ${commandFuncName} {
        ${lines.filter(l => l).join("\n")}
    }`;
  });

  const zone = `
  import {Packet} from "../protocol";
  ${lines.join("\n")}
    `;

  return prettier.format(zone, {parser: "typescript"});
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

async function xmain() {
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

  await Promise.all(
    zones.map(zone => {
      writeFile(
        path.join(commandsDir, `${zone}.ts`),
        renderCommands(zone, onkyoData.commands[zone]),
        {mode: 0o644}
      );
    })
  );
}

xmain();
