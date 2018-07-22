import { Packet } from "../protocol";

/**
 * Zone4 Power Command
 */
export function power(value: string) {
  return new Packet("PW4", value);
}
export namespace power {
  /** sets Zone4 Standby */
  export const standby = () => power("00");

  /** sets Zone4 On */
  export const on = () => power("01");

  /** gets the Zone4 Power Status */
  export const query = () => power("QSTN");
}

/**
 * Zone4 Muting Command
 */
export function muting(value: string) {
  return new Packet("MT4", value);
}
export namespace muting {
  /** sets Zone4 Muting Off */
  export const off = () => muting("00");

  /** sets Zone4 Muting On */
  export const on = () => muting("01");

  /** sets Zone4 Muting Wrap-Around */
  export const toggle = () => muting("TG");

  /** gets the Zone4 Muting Status */
  export const query = () => muting("QSTN");
}

/**
 * Zone4 Volume Command
 */
export function volume(value: string) {
  return new Packet("VL4", value);
}
export namespace volume {
  /** sets Volume Level Up */
  export const levelUp = () => volume("UP");

  /** sets Volume Level Down */
  export const levelDown = () => volume("DOWN");

  /** gets the Volume Level */
  export const query = () => volume("QSTN");
}

/**
 * ZONE4 Selector Command
 */
export function selector(value: string) {
  return new Packet("SL4", value);
}
export namespace selector {
  /** sets DVD, BD/DVD */
  export const dvd = () => selector("10");

  /** sets TAPE(1), TV/TAPE */
  export const tape1 = () => selector("20");

  /** sets TAPE2 */
  export const tape2 = () => selector("21");

  /** sets PHONO */
  export const phono = () => selector("22");

  /** sets CD, TV/CD */
  export const cd = () => selector("23");

  /** sets FM */
  export const fm = () => selector("24");

  /** sets AM */
  export const am = () => selector("25");

  /** sets TUNER */
  export const tuner = () => selector("26");

  /** sets MUSIC SERVER, P4S, DLNA */
  export const musicServer = () => selector("27");

  /** sets INTERNET RADIO, iRadio Favorite */
  export const internetRadio = () => selector("28");

  /** sets USB/USB(Front) */
  export const usbFront = () => selector("29");

  /** sets MULTI CH */
  export const multiCh = () => selector("30");

  /** sets XM */
  export const xm = () => selector("31");

  /** sets SIRIUS */
  export const sirius = () => selector("32");

  /** sets DAB  */
  export const dab = () => selector("33");

  /** sets Universal PORT */
  export const universalPort = () => selector("40");

  /** sets SOURCE */
  export const source = () => selector("80");

  /** sets VIDEO1, VCR/DVR, STB/DVR */
  export const video1 = () => selector("00");

  /** sets VIDEO2, CBL/SAT */
  export const video2 = () => selector("01");

  /** sets VIDEO3, GAME/TV, GAME, GAME1 */
  export const video3 = () => selector("02");

  /** sets VIDEO4, AUX1(AUX) */
  export const video4 = () => selector("03");

  /** sets VIDEO5, AUX2, GAME2 */
  export const video5 = () => selector("04");

  /** sets VIDEO6, PC */
  export const video6 = () => selector("05");

  /** sets VIDEO7 */
  export const video7 = () => selector("06");

  /** sets Hidden1, EXTRA1 */
  export const hidden1 = () => selector("07");

  /** sets Hidden2, EXTRA2 */
  export const hidden2 = () => selector("08");

  /** sets Hidden3, EXTRA3 */
  export const hidden3 = () => selector("09");

  /** sets USB(Rear) */
  export const usbRear = () => selector("2A");

  /** sets NETWORK, NET */
  export const network = () => selector("2B");

  /** sets USB(toggle) */
  export const usbToggle = () => selector("2C");

  /** sets Airplay */
  export const airplay = () => selector("2D");

  /** sets Bluetooth */
  export const bluetooth = () => selector("2E");

  /** sets Selector Position Wrap-Around Up */
  export const up = () => selector("UP");

  /** sets Selector Position Wrap-Around Down */
  export const down = () => selector("DOWN");

  /** gets The Selector Position */
  export const query = () => selector("QSTN");
}

/**
 * Tuning Command
 */
export function tuning(value: string) {
  return new Packet("TUN", value);
}
export namespace tuning {
  /** sets Tuning Frequency Wrap-Around Up */
  export const up = () => tuning("UP");

  /** sets Tuning Frequency Wrap-Around Down */
  export const down = () => tuning("DOWN");

  /** gets The Tuning Frequency */
  export const query = () => tuning("QSTN");
}

/**
 * Tuning Command
 */
export function tuningZone(value: string) {
  return new Packet("TU4", value);
}
export namespace tuningZone {
  /** sets 0 in Direct Tuning Mode */
  export const direct0 = () => tuningZone("0");

  /** sets 1 in Direct Tuning Mode */
  export const direct1 = () => tuningZone("1");

  /** sets 2 in Direct Tuning Mode */
  export const direct2 = () => tuningZone("2");

  /** sets 3 in Direct Tuning Mode */
  export const direct3 = () => tuningZone("3");

  /** sets 4 in Direct Tuning Mode */
  export const direct4 = () => tuningZone("4");

  /** sets 5 in Direct Tuning Mode */
  export const direct5 = () => tuningZone("5");

  /** sets 6 in Direct Tuning Mode */
  export const direct6 = () => tuningZone("6");

  /** sets 7 in Direct Tuning Mode */
  export const direct7 = () => tuningZone("7");

  /** sets 8 in Direct Tuning Mode */
  export const direct8 = () => tuningZone("8");

  /** sets 9 in Direct Tuning Mode */
  export const direct9 = () => tuningZone("9");

  /** starts/restarts Direct Tuning Mode */
  export const direct = () => tuningZone("DIRECT");

  /** sets Tuning Frequency Wrap-Around Up */
  export const up = () => tuningZone("UP");

  /** sets Tuning Frequency Wrap-Around Down */
  export const down = () => tuningZone("DOWN");

  /** gets The Tuning Frequency */
  export const query = () => tuningZone("QSTN");
}

/**
 * Preset Command
 */
export function preset(value: string) {
  return new Packet("PRS", value);
}
export namespace preset {
  /** sets Preset No. Wrap-Around Up */
  export const up = () => preset("UP");

  /** sets Preset No. Wrap-Around Down */
  export const down = () => preset("DOWN");

  /** gets The Preset No. */
  export const query = () => preset("QSTN");
}

/**
 * Preset Command
 */
export function presetZone(value: string) {
  return new Packet("PR4", value);
}
export namespace presetZone {
  /** sets Preset No. Wrap-Around Up */
  export const up = () => presetZone("UP");

  /** sets Preset No. Wrap-Around Down */
  export const down = () => presetZone("DOWN");

  /** gets The Preset No. */
  export const query = () => presetZone("QSTN");
}

/**
 * Net-Tune/Network Operation Command(Net-Tune Model Only)
 */
export function netTuneNetwork(value: string) {
  return new Packet("NTC", value);
}
export namespace netTuneNetwork {
  /** PLAY KEY */
  export const playz = () => netTuneNetwork("PLAYz");

  /** STOP KEY */
  export const stopz = () => netTuneNetwork("STOPz");

  /** PAUSE KEY */
  export const pausez = () => netTuneNetwork("PAUSEz");

  /** TRACK UP KEY */
  export const trupz = () => netTuneNetwork("TRUPz");

  /** TRACK DOWN KEY */
  export const trdnz = () => netTuneNetwork("TRDNz");
}

/**
 * Net-Tune/Network Operation Command(Network Model Only)
 */
export function netTuneNetworkZone(value: string) {
  return new Packet("NT4", value);
}
export namespace netTuneNetworkZone {
  /** PLAY KEY */
  export const play = () => netTuneNetworkZone("PLAY");

  /** STOP KEY */
  export const stop = () => netTuneNetworkZone("STOP");

  /** PAUSE KEY */
  export const pause = () => netTuneNetworkZone("PAUSE");

  /** TRACK UP KEY */
  export const trup = () => netTuneNetworkZone("TRUP");

  /** TRACK DOWN KEY */
  export const trdn = () => netTuneNetworkZone("TRDN");

  /** FF KEY (CONTINUOUS*) (for iPod 1wire) */
  export const ff = () => netTuneNetworkZone("FF");

  /** REW KEY (CONTINUOUS*) (for iPod 1wire) */
  export const rew = () => netTuneNetworkZone("REW");

  /** REPEAT KEY(for iPod 1wire) */
  export const repeat = () => netTuneNetworkZone("REPEAT");

  /** RANDOM KEY(for iPod 1wire) */
  export const random = () => netTuneNetworkZone("RANDOM");

  /** DISPLAY KEY(for iPod 1wire) */
  export const display = () => netTuneNetworkZone("DISPLAY");

  /** RIGHT KEY(for iPod 1wire) */
  export const right = () => netTuneNetworkZone("RIGHT");

  /** LEFT KEY(for iPod 1wire) */
  export const left = () => netTuneNetworkZone("LEFT");

  /** UP KEY(for iPod 1wire) */
  export const up = () => netTuneNetworkZone("UP");

  /** DOWN KEY(for iPod 1wire) */
  export const down = () => netTuneNetworkZone("DOWN");

  /** SELECT KEY(for iPod 1wire) */
  export const select = () => netTuneNetworkZone("SELECT");

  /** RETURN KEY(for iPod 1wire) */
  export const return_ = () => netTuneNetworkZone("RETURN");
}

/**
 * Internet Radio Preset Command (Network Model Only)
 */
export function internetRadioPreset(value: string) {
  return new Packet("NP4", value);
}
export namespace internetRadioPreset {

}
