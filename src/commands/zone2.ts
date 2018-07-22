import { Packet } from "../protocol";

/**
 * Listening Mode Command (LMZ)
 */
export function listeningMode(value: string) {
  return new Packet("LMZ", value);
}
export namespace listeningMode {
  /** sets STEREO */
  export const stereo = () => listeningMode("00");

  /** sets DIRECT */
  export const direct = () => listeningMode("01");

  /** sets MONO */
  export const mono = () => listeningMode("0F");

  /** sets MULTIPLEX */
  export const multiplex = () => listeningMode("12");

  /** sets DVS(Pl2) */
  export const dvsPl2 = () => listeningMode("87");

  /** sets DVS(NEO6) */
  export const dvsNeo6 = () => listeningMode("88");
}

/**
 * Late Night Command (LTZ)
 */
export function lateNight(value: string) {
  return new Packet("LTZ", value);
}
export namespace lateNight {
  /** sets Late Night Off */
  export const off = () => lateNight("00");

  /** sets Late Night Low */
  export const low = () => lateNight("01");

  /** sets Late Night High */
  export const high = () => lateNight("02");

  /** gets The Late Night Level */
  export const query = () => lateNight("QSTN");

  /** sets Late Night State Wrap-Around Up */
  export const up = () => lateNight("UP");
}

/**
 * Internet Radio Preset Command (Network Model Only) (NPZ)
 */
export function internetRadioPreset(value: string) {
  return new Packet("NPZ", value);
}
export namespace internetRadioPreset {

}

/**
 * Net-Tune/Network Operation Command(Net-Tune Model Only) (NTC)
 */
export function netTuneNetwork(value: string) {
  return new Packet("NTC", value);
}
export namespace netTuneNetwork {
  /** PAUSE KEY */
  export const pausez = () => netTuneNetwork("PAUSEz");

  /** PLAY KEY */
  export const playz = () => netTuneNetwork("PLAYz");

  /** STOP KEY */
  export const stopz = () => netTuneNetwork("STOPz");

  /** TRACK DOWN KEY */
  export const trdnz = () => netTuneNetwork("TRDNz");

  /** TRACK UP KEY */
  export const trupz = () => netTuneNetwork("TRUPz");
}

/**
 * Net-Tune/Network Operation Command(Network Model Only) (NTZ)
 */
export function netTuneNetworkZone(value: string) {
  return new Packet("NTZ", value);
}
export namespace netTuneNetworkZone {
  /** CH DOWN(for iRadio) */
  export const chdn = () => netTuneNetworkZone("CHDN");

  /** CH UP(for iRadio) */
  export const chup = () => netTuneNetworkZone("CHUP");

  /** DISPLAY KEY(for iPod 1wire) */
  export const display = () => netTuneNetworkZone("DISPLAY");

  /** DOWN KEY(for iPod 1wire) */
  export const down = () => netTuneNetworkZone("DOWN");

  /** FF KEY (CONTINUOUS*) (for iPod 1wire) */
  export const ff = () => netTuneNetworkZone("FF");

  /** LEFT KEY(for iPod 1wire) */
  export const left = () => netTuneNetworkZone("LEFT");

  /** MEMORY KEY */
  export const memory = () => netTuneNetworkZone("MEMORY");

  /** MODE KEY */
  export const mode = () => netTuneNetworkZone("MODE");

  /** PLAY / PAUSE KEY */
  export const playPause = () => netTuneNetworkZone("P/P");

  /** PAUSE KEY */
  export const pause = () => netTuneNetworkZone("PAUSE");

  /** PLAY KEY */
  export const play = () => netTuneNetworkZone("PLAY");

  /** RANDOM KEY(for iPod 1wire) */
  export const random = () => netTuneNetworkZone("RANDOM");

  /** REPEAT / SHUFFLE KEY */
  export const repeatShuffle = () => netTuneNetworkZone("REP/SHF");

  /** REPEAT KEY(for iPod 1wire) */
  export const repeat = () => netTuneNetworkZone("REPEAT");

  /** RETURN KEY(for iPod 1wire) */
  export const return_ = () => netTuneNetworkZone("RETURN");

  /** REW KEY (CONTINUOUS*) (for iPod 1wire) */
  export const rew = () => netTuneNetworkZone("REW");

  /** RIGHT KEY(for iPod 1wire) */
  export const right = () => netTuneNetworkZone("RIGHT");

  /** SELECT KEY(for iPod 1wire) */
  export const select = () => netTuneNetworkZone("SELECT");

  /** STOP KEY */
  export const stop = () => netTuneNetworkZone("STOP");

  /** TRACK DOWN KEY */
  export const trdn = () => netTuneNetworkZone("TRDN");

  /** TRACK UP KEY */
  export const trup = () => netTuneNetworkZone("TRUP");

  /** UP KEY(for iPod 1wire) */
  export const up = () => netTuneNetworkZone("UP");
}

/**
 * Preset Command (PRS)
 */
export function preset(value: string) {
  return new Packet("PRS", value);
}
export namespace preset {
  /** sets Preset No. Wrap-Around Down */
  export const down = () => preset("DOWN");

  /** gets The Preset No. */
  export const query = () => preset("QSTN");

  /** sets Preset No. Wrap-Around Up */
  export const up = () => preset("UP");
}

/**
 * Preset Command (PRZ)
 */
export function presetZone(value: string) {
  return new Packet("PRZ", value);
}
export namespace presetZone {
  /** sets Preset No. Wrap-Around Down */
  export const down = () => presetZone("DOWN");

  /** gets The Preset No. */
  export const query = () => presetZone("QSTN");

  /** sets Preset No. Wrap-Around Up */
  export const up = () => presetZone("UP");
}

/**
 * Re-EQ/Academy Filter Command (RAZ)
 */
export function reEqAcademyFilter(value: string) {
  return new Packet("RAZ", value);
}
export namespace reEqAcademyFilter {
  /** sets Both Off */
  export const bothOff = () => reEqAcademyFilter("00");

  /** sets Re-EQ On */
  export const reEqOn = () => reEqAcademyFilter("01");

  /** sets Academy On */
  export const academyOn = () => reEqAcademyFilter("02");

  /** gets The Re-EQ/Academy State */
  export const query = () => reEqAcademyFilter("QSTN");

  /** sets Re-EQ/Academy State Wrap-Around Up */
  export const up = () => reEqAcademyFilter("UP");
}

/**
 * ZONE2 Selector Command (SLZ)
 */
export function selector(value: string) {
  return new Packet("SLZ", value);
}
export namespace selector {
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

  /** sets DVD, BD/DVD */
  export const dvd = () => selector("10");

  /** sets STRM BOX */
  export const strmBox = () => selector("11");

  /** sets TV */
  export const tv = () => selector("12");

  /** sets TAPE(1) */
  export const tape = () => selector("20");

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

  /** sets HDMI 5 */
  export const hdmi5 = () => selector("55");

  /** sets HDMI 6 */
  export const hdmi6 = () => selector("56");

  /** sets HDMI 7 */
  export const hdmi7 = () => selector("57");

  /** sets OFF */
  export const off = () => selector("7F");

  /** sets SOURCE */
  export const source = () => selector("80");

  /** sets Selector Position Wrap-Around Down */
  export const down = () => selector("DOWN");

  /** gets The Selector Position */
  export const query = () => selector("QSTN");

  /** sets Selector Position Wrap-Around Up */
  export const up = () => selector("UP");
}

/**
 * Tuning Command (TUN)
 */
export function tuning(value: string) {
  return new Packet("TUN", value);
}
export namespace tuning {
  /** sets Tuning Frequency Wrap-Around Down */
  export const down = () => tuning("DOWN");

  /** gets The Tuning Frequency */
  export const query = () => tuning("QSTN");

  /** sets Tuning Frequency Wrap-Around Up */
  export const up = () => tuning("UP");
}

/**
 * Tuning Command (TUZ)
 */
export function tuningZone(value: string) {
  return new Packet("TUZ", value);
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

  /** Change BAND */
  export const band = () => tuningZone("BAND");

  /** starts/restarts Direct Tuning Mode */
  export const direct = () => tuningZone("DIRECT");

  /** sets Tuning Frequency Wrap-Around Down */
  export const down = () => tuningZone("DOWN");

  /** gets The Tuning Frequency */
  export const query = () => tuningZone("QSTN");

  /** sets Tuning Frequency Wrap-Around Up */
  export const up = () => tuningZone("UP");
}

/**
 * Zone2 Balance Command (ZBL)
 */
export function balance(value: string) {
  return new Packet("ZBL", value);
}
export namespace balance {
  /** sets Balance Down (to L 1 Step) */
  export const down = () => balance("DOWN");

  /** gets Zone2 Balance */
  export const query = () => balance("QSTN");

  /** sets Balance Up (to R 1 Step) */
  export const up = () => balance("UP");
}

/**
 * Zone2 Muting Command (ZMT)
 */
export function muting(value: string) {
  return new Packet("ZMT", value);
}
export namespace muting {
  /** sets Zone2 Muting Off */
  export const off = () => muting("00");

  /** sets Zone2 Muting On */
  export const on = () => muting("01");

  /** gets the Zone2 Muting Status */
  export const query = () => muting("QSTN");

  /** sets Zone2 Muting Wrap-Around */
  export const toggle = () => muting("TG");
}

/**
 * Zone 2 A Command (ZPA)
 */
export function zone2A(value: string) {
  return new Packet("ZPA", value);
}
export namespace zone2A {
  /** sets Zone 2 A Off */
  export const off = () => zone2A("00");

  /** sets Zone 2 A On */
  export const on = () => zone2A("01");

  /** gets the Speaker State */
  export const query = () => zone2A("QSTN");
}

/**
 * Zone 2 B Command (ZPB)
 */
export function zone2B(value: string) {
  return new Packet("ZPB", value);
}
export namespace zone2B {
  /** sets Zone 2 B Off */
  export const off = () => zone2B("00");

  /** sets Zone 2 B On */
  export const on = () => zone2B("01");

  /** gets the Speaker State */
  export const query = () => zone2B("QSTN");
}

/**
 * Zone2 Power Command (ZPW)
 */
export function power(value: string) {
  return new Packet("ZPW", value);
}
export namespace power {
  /** sets Zone2 Standby */
  export const standby = () => power("00");

  /** sets Zone2 On */
  export const on = () => power("01");

  /** gets the Zone2 Power Status */
  export const query = () => power("QSTN");
}

/**
 * Zone2 Tone Command (ZTN)
 */
export function tone(value: string) {
  return new Packet("ZTN", value);
}
export namespace tone {
  /** sets Bass Down (1 Step) */
  export const bassDown = () => tone("BDOWN");

  /** sets Bass Up (1 Step) */
  export const bassUp = () => tone("BUP");

  /** gets Zone2 Tone ("BxxTxx") */
  export const query = () => tone("QSTN");

  /** sets Treble Down (1 Step) */
  export const trebleDown = () => tone("TDOWN");

  /** sets Treble Up (1 Step) */
  export const trebleUp = () => tone("TUP");
}

/**
 * Zone2 Volume Command (ZVL)
 */
export function volume(value: string) {
  return new Packet("ZVL", value);
}
export namespace volume {
  /** sets Volume Level Down */
  export const levelDown = () => volume("DOWN");

  /** sets Volume Level Down 1dB Step */
  export const levelDown1dbStep = () => volume("DOWN1");

  /** gets the Volume Level */
  export const query = () => volume("QSTN");

  /** sets Volume Level Up */
  export const levelUp = () => volume("UP");

  /** sets Volume Level Up 1dB Step */
  export const levelUp1dbStep = () => volume("UP1");
}
