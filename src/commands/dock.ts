import { Packet } from "../protocol";

/**
 * Network/USB Operation Command (Network Model Only after TX-NR905)
 */
export function networkUsb(value: string) {
  return new Packet("NTC", value);
}
export namespace networkUsb {
  /** PLAY KEY */
  export const play = () => networkUsb("PLAY");

  /** STOP KEY */
  export const stop = () => networkUsb("STOP");

  /** PAUSE KEY */
  export const pause = () => networkUsb("PAUSE");

  /** PLAY/PAUSE KEY */
  export const playPause = () => networkUsb("P/P");

  /** TRACK UP KEY */
  export const trup = () => networkUsb("TRUP");

  /** TRACK DOWN KEY */
  export const trdn = () => networkUsb("TRDN");

  /** FF KEY (CONTINUOUS*) */
  export const ff = () => networkUsb("FF");

  /** REW KEY (CONTINUOUS*) */
  export const rew = () => networkUsb("REW");

  /** REPEAT KEY */
  export const repeat = () => networkUsb("REPEAT");

  /** RANDOM KEY */
  export const random = () => networkUsb("RANDOM");

  /** REPEAT/SHUFFLE KEY */
  export const repeatShuffle = () => networkUsb("REP/SHF");

  /** DISPLAY KEY */
  export const display = () => networkUsb("DISPLAY");

  /** ALBUM KEY */
  export const album = () => networkUsb("ALBUM");

  /** ARTIST KEY */
  export const artist = () => networkUsb("ARTIST");

  /** GENRE KEY */
  export const genre = () => networkUsb("GENRE");

  /** PLAYLIST KEY */
  export const playlist = () => networkUsb("PLAYLIST");

  /** RIGHT KEY */
  export const right = () => networkUsb("RIGHT");

  /** LEFT KEY */
  export const left = () => networkUsb("LEFT");

  /** UP KEY */
  export const up = () => networkUsb("UP");

  /** DOWN KEY */
  export const down = () => networkUsb("DOWN");

  /** SELECT KEY */
  export const select = () => networkUsb("SELECT");

  /** DELETE KEY */
  export const delete_ = () => networkUsb("DELETE");

  /** CAPS KEY */
  export const caps = () => networkUsb("CAPS");

  /** LOCATION KEY */
  export const location = () => networkUsb("LOCATION");

  /** LANGUAGE KEY */
  export const language = () => networkUsb("LANGUAGE");

  /** SETUP KEY */
  export const setup = () => networkUsb("SETUP");

  /** RETURN KEY */
  export const return_ = () => networkUsb("RETURN");

  /** CH UP(for iRadio) */
  export const chup = () => networkUsb("CHUP");

  /** CH DOWN(for iRadio) */
  export const chdn = () => networkUsb("CHDN");

  /** MENU */
  export const menu = () => networkUsb("MENU");

  /** TOP MENU */
  export const top = () => networkUsb("TOP");

  /** MODE(for iPod) STD<->EXT */
  export const mode = () => networkUsb("MODE");

  /** LIST <-> PLAYBACK */
  export const list = () => networkUsb("LIST");

  /** MEMORY (add Favorite) */
  export const memory = () => networkUsb("MEMORY");

  /** Positive Feed or Mark/Unmark  */
  export const f1 = () => networkUsb("F1");

  /** Negative Feed  */
  export const f2 = () => networkUsb("F2");
}

/**
 * Bluetooth(Internal) Operation Command
 */
export function bluetoothInternal(value: string) {
  return new Packet("NBT", value);
}
export namespace bluetoothInternal {
  /** PAIRING */
  export const pairing = () => bluetoothInternal("PAIRING");

  /** CLEAR PAIRING INFORMATION */
  export const clear = () => bluetoothInternal("CLEAR");
}

/**
 * NET/USB Artist Name Info
 */
export function netUsbArtistNameInfo(value: string) {
  return new Packet("NAT", value);
}
export namespace netUsbArtistNameInfo {
  /** gets NET/USB Artist Name */
  export const query = () => netUsbArtistNameInfo("QSTN");
}

/**
 * NET/USB Album Name Info
 */
export function netUsbAlbumNameInfo(value: string) {
  return new Packet("NAL", value);
}
export namespace netUsbAlbumNameInfo {
  /** gets NET/USB Album Name */
  export const query = () => netUsbAlbumNameInfo("QSTN");
}

/**
 * NET/USB Title Name
 */
export function netUsbTitleName(value: string) {
  return new Packet("NTI", value);
}
export namespace netUsbTitleName {
  /** gets NET/USB Title Name */
  export const query = () => netUsbTitleName("QSTN");
}

/**
 * NET/USB Time Info
 */
export function netUsbTimeInfo(value: string) {
  return new Packet("NTM", value);
}
export namespace netUsbTimeInfo {
  /** gets NET/USB Time Info */
  export const query = () => netUsbTimeInfo("QSTN");
}

/**
 * NET/USB Track Info
 */
export function netUsbTrackInfo(value: string) {
  return new Packet("NTR", value);
}
export namespace netUsbTrackInfo {
  /** NET/USB Track Info (Current Track/Toral Track Max 9999. If Track is unknown, this response is ----) */
  export const ccccTttt = () => netUsbTrackInfo("cccc/tttt");

  /** gets NET/USB Track Info */
  export const query = () => netUsbTrackInfo("QSTN");
}

/**
 * NET/USB Play Status
 */
export function netUsbPlayStatus(value: string) {
  return new Packet("NST", value);
}
export namespace netUsbPlayStatus {
  /** NET/USB Play Status (3 letters)
p -> Play Status: "S": STOP, "P": Play, "p": Pause, "F": FF, "R": FR, "E": EOF
r -> Repeat Status: "-": Off, "R": All, "F": Folder, "1": Repeat 1, "x": disable
s -> Shuffle Status: "-": Off, "S": All , "A": Album, "F": Folder, "x": disable */
  export const prs = () => netUsbPlayStatus("prs");

  /** gets the Net/USB Play Status */
  export const query = () => netUsbPlayStatus("QSTN");
}

/**
 * NET/USB Menu Status
 */
export function netUsbMenuStatus(value: string) {
  return new Packet("NMS", value);
}
export namespace netUsbMenuStatus {
  /** NET/USB Menu Status (9 letters)
m -> Track Menu: "M": Menu is enable, "x": Menu is disable
aa -> F1 button icon (Positive Feed or Mark/Unmark)
bb -> F2 button icon (Negative Feed)
 aa or bb : "xx":disable, "01":Like, "02":don't like, "03":Love, "04":Ban,
                  "05":episode, "06":ratings, "07":Ban(black), "08":Ban(white),
                  "09":Favorite(black), "0A":Favorite(white), "0B":Favorite(yellow)
s -> Time Seek "S": Time Seek is enable "x": Time Seek is disable
t -> Time Display "1": Elapsed Time/Total Time, "2": Elapsed Time, "x": disable
ii-> Service icon
 ii : "00":Music Server (DLNA), "01":My Favorite, "02":vTuner, 
      "03":SiriusXM, "04":Pandora,
      "05":Rhapsody, "06":Last.fm, "08":Slacker, "0A":Spotify, "0B":AUPEO!,
      "0C":radiko, "0D":e-onkyo, "0E":TuneIn, "0F":MP3tunes, "10":Simfy,
      "11":Home Media, "12":Deezer, "13":iHeartRadio, "18":Airplay,
      "F0": USB/USB(Front), "F1: USB(Rear), "F2":Internet Radio
      "F3":NET, "F4":Bluetooth */
  export const maabbstii = () => netUsbMenuStatus("maabbstii");

  /** gets the Net/USB Menu Status */
  export const query = () => netUsbMenuStatus("QSTN");
}

/**
 * NET/USB Time Seek
 */
export function netUsbTimeSeek(value: string) {
  return new Packet("NTS", value);
}
export namespace netUsbTimeSeek {

}

/**
 * Internet Radio Preset Command
 */
export function internetRadioPreset(value: string) {
  return new Packet("NPR", value);
}
export namespace internetRadioPreset {
  /** preset memory current station */
  export const set = () => internetRadioPreset("SET");
}

/**
 * NET Connection/USB Device Status
 */
export function netConnectionUsbDeviceStatus(value: string) {
  return new Packet("NDS", value);
}
export namespace netConnectionUsbDeviceStatus {
  /** NET Connection/USB Device Status (3 letters)
n -> NET Connection status: "-": no connection, "E": Ether, "W": Wireless
f -> Front USB(USB1) Device Status: "-": no device, "i": iPod/iPhone, 
      "M": Memory/NAS, "W": Wireless Adaptor, "B": Bluetooth Adaptor,
      "x": disable
r -> Rear USB(USB2) Device Status: "-": no device, "i": iPod/iPhone, 
      "M": Memory/NAS, "W": Wireless Adaptor, "B": Bluetooth Adaptor, 
      "x": disable */
  export const nfr = () => netConnectionUsbDeviceStatus("nfr");

  /** gets the Net/USB Status */
  export const query = () => netConnectionUsbDeviceStatus("QSTN");
}

/**
 * NET/USB List Info
 */
export function netUsbListInfo(value: string) {
  return new Packet("NLS", value);
}
export namespace netUsbListInfo {
  /** select the listed item
 t -> Index Type (L : Line, I : Index)
when t = L,
  i -> Line number (0-9 : 1st to 10th Line [1 digit] )
when t = I,
  iiiii -> Index number (00001-99999 : 1st to 99999th Item [5 digits] ) */
  export const ti = () => netUsbListInfo("ti");
}

/**
 * NET/USB List Info(All item, need processing XML data, for Network Control Only)
 */
export function netUsbListInfoAll(value: string) {
  return new Packet("NLA", value);
}
export namespace netUsbListInfoAll {

}

/**
 * NET/USB Jacket Art (When Jacket Art is available and Output for Network Control Only)
 */
export function netUsbJacketArt(value: string) {
  return new Packet("NJA", value);
}
export namespace netUsbJacketArt {
  /** sets Jacket Art disable */
  export const disable = () => netUsbJacketArt("DIS");

  /** sets Jacket Art enable */
  export const enable = () => netUsbJacketArt("ENA");

  /** sets Jacket Art enable and Image type BMP */
  export const enableAndImageTypeBmp = () => netUsbJacketArt("BMP");

  /** sets Jacket Art enable and Image type LINK */
  export const enableAndImageTypeLink = () => netUsbJacketArt("LINK");

  /** sets Jacket Art Wrap-Around Up */
  export const up = () => netUsbJacketArt("UP");

  /** gets Jacket Art data */
  export const req = () => netUsbJacketArt("REQ");

  /** gets Jacket Art enable/disable */
  export const query = () => netUsbJacketArt("QSTN");
}

/**
 * NET Service(for Network Control Only)
 */
export function netService(value: string) {
  return new Packet("NSV", value);
}
export namespace netService {

}

/**
 * NET Keyboard(for Network Control Only)
 */
export function netKeyboard(value: string) {
  return new Packet("NKY", value);
}
export namespace netKeyboard {
  /** waiting Keyboard Input
ll -> category
 00: Off ( Exit Keyboard Input )
 01: User Name
 02: Password
 03: Artist Name
 04: Album Name
 05: Song Name
 06: Station Name
 07: Tag Name
 08: Artist or Song
 09: Episode Name
 0A: Pin Code (some digit Number [0-9])
 0B: User Name (available ISO 8859-1 character set)
 0C: Password (available ISO 8859-1 character set)
 0D: URL */
  export const ll = () => netKeyboard("ll");
}

/**
 * NET Popup Message(for Network Control Only)
 */
export function netPopupMessage(value: string) {
  return new Packet("NPU", value);
}
export namespace netPopupMessage {

}

/**
 * NET/USB List Title Info(for Network Control Only)
 */
export function netUsbListTitleInfo(value: string) {
  return new Packet("NLT", value);
}
export namespace netUsbListTitleInfo {
  /** gets List Title Info */
  export const query = () => netUsbListTitleInfo("QSTN");
}

/**
 * iPod Mode Change (with USB Connection Only)
 */
export function ipodModeChange(value: string) {
  return new Packet("NMD", value);
}
export namespace ipodModeChange {
  /** Standerd Mode */
  export const std = () => ipodModeChange("STD");

  /** Extend Mode(If available) */
  export const ext = () => ipodModeChange("EXT");

  /** Video Contents in Extended Mode */
  export const vdc = () => ipodModeChange("VDC");

  /** gets iPod Mode Status */
  export const query = () => ipodModeChange("QSTN");
}

/**
 * Network Standby Settings (for Network Control Only and Available in AVR is PowerOn)
 */
export function networkStandbySettings(value: string) {
  return new Packet("NSB", value);
}
export namespace networkStandbySettings {
  /** sets Network Standby is Off */
  export const isOff = () => networkStandbySettings("OFF");

  /** sets Network Standby is On */
  export const isOn = () => networkStandbySettings("ON");

  /** gets Network Standby Setting */
  export const query = () => networkStandbySettings("QSTN");
}

/**
 * Receiver Information (for Network Control Only)
 */
export function receiverInformation(value: string) {
  return new Packet("NRI", value);
}
export namespace receiverInformation {
  /** gets the Receiver Information Status */
  export const query = () => receiverInformation("QSTN");
}

/**
 * NET/USB List Info (Update item, need processing XML data, for Network Control Only)
 */
export function netUsbListInfoUpdate(value: string) {
  return new Packet("NLU", value);
}
export namespace netUsbListInfoUpdate {

}

/**
 * NET/USB Playback view Button
 */
export function netUsbPlaybackViewButton(value: string) {
  return new Packet("NPB", value);
}
export namespace netUsbPlaybackViewButton {
  /** NET/USB Playback view Status (5 letters)
p -> Play/Pause button: "1": button is enable, "0": button is disable
u ->  Skip up button : "1": button is enable, "0": button is disable
d -> Skip down button : "1": button is enable, "0": button is disable
t -> Timer button : "1": button is enable, "0": button is disable
s -> Preset button : "1": button is enable, "0": button is disable
 rrr-> reserved */
  export const pudtsrrr = () => netUsbPlaybackViewButton("pudtsrrr");

  /** gets the Net/USB Playback view Button */
  export const query = () => netUsbPlaybackViewButton("QSTN");
}

/**
 * NET/USB Add Favorite List in List View
 */
export function netUsbAddFavoriteListInListView(value: string) {
  return new Packet("NAF", value);
}
export namespace netUsbAddFavoriteListInListView {

}

/**
 * NET/USB Remove Favorite List
 */
export function netUsbRemoveFavoriteList(value: string) {
  return new Packet("NRF", value);
}
export namespace netUsbRemoveFavoriteList {

}

/**
 * NET/USB Music Server(DLNA) Search List
 */
export function netUsbMusicServerDlnaSearchList(value: string) {
  return new Packet("NSD", value);
}
export namespace netUsbMusicServerDlnaSearchList {

}

/**
 * Airplay Artist Name Info (Airplay Model Only)
 */
export function airplayArtistNameInfo(value: string) {
  return new Packet("AAT", value);
}
export namespace airplayArtistNameInfo {
  /** gets iPod Artist Name */
  export const query = () => airplayArtistNameInfo("QSTN");
}

/**
 * Airplay Album Name Info (Airplay Model Only)
 */
export function airplayAlbumNameInfo(value: string) {
  return new Packet("AAL", value);
}
export namespace airplayAlbumNameInfo {
  /** gets iPod Album Name */
  export const query = () => airplayAlbumNameInfo("QSTN");
}

/**
 * Airplay Title Name (Airplay Model Only)
 */
export function airplayTitleName(value: string) {
  return new Packet("ATI", value);
}
export namespace airplayTitleName {
  /** gets HD Radio Title */
  export const query = () => airplayTitleName("QSTN");
}

/**
 * Airplay Time Info (Airplay Model Only)
 */
export function airplayTimeInfo(value: string) {
  return new Packet("ATM", value);
}
export namespace airplayTimeInfo {
  /** gets iPod Time Info */
  export const query = () => airplayTimeInfo("QSTN");
}

/**
 * Airplay Play Status (Airplay Model Only)
 */
export function airplayPlayStatus(value: string) {
  return new Packet("AST", value);
}
export namespace airplayPlayStatus {
  /** NET/USB Play Status (3 letters)
p -> Play Status: "S": STOP, "P": Play, "p": Pause
r -> Repeat Status: "-": Off
s -> Shuffle Status: "-": Off */
  export const prs = () => airplayPlayStatus("prs");

  /** gets the Net/USB Status */
  export const query = () => airplayPlayStatus("QSTN");
}
