import { Packet } from "../protocol";

/**
 * All Channel EQ (ACE)
 */
export function allChannelEq(value: string) {
  return new Packet("ACE", value);
}
export namespace allChannelEq {
  /** gets The Phase Control */
  export const query = () => allChannelEq("QSTN");
}

/**
 * Audyssey Dynamic EQ (ADQ)
 */
export function audysseyDynamicEq(value: string) {
  return new Packet("ADQ", value);
}
export namespace audysseyDynamicEq {
  /** sets Audyssey Dynamic EQ Off */
  export const off = () => audysseyDynamicEq("00");

  /** sets Audyssey Dynamic EQ On */
  export const on = () => audysseyDynamicEq("01");

  /** gets The Audyssey Dynamic EQ State */
  export const query = () => audysseyDynamicEq("QSTN");

  /** sets Audyssey Dynamic EQ State Wrap-Around Up */
  export const up = () => audysseyDynamicEq("UP");
}

/**
 * Audyssey Dynamic Volume (ADV)
 */
export function audysseyDynamicVolume(value: string) {
  return new Packet("ADV", value);
}
export namespace audysseyDynamicVolume {
  /** sets Audyssey Dynamic Volume Off */
  export const off = () => audysseyDynamicVolume("00");

  /** sets Audyssey Dynamic Volume Light */
  export const light = () => audysseyDynamicVolume("01");

  /** sets Audyssey Dynamic Volume Medium */
  export const medium = () => audysseyDynamicVolume("02");

  /** sets Audyssey Dynamic Volume Heavy */
  export const heavy = () => audysseyDynamicVolume("03");

  /** gets The Audyssey Dynamic Volume State */
  export const query = () => audysseyDynamicVolume("QSTN");

  /** sets Audyssey Dynamic Volume State Wrap-Around Up */
  export const up = () => audysseyDynamicVolume("UP");
}

/**
 * Audyssey 2EQ/MultEQ/MultEQ XT (ADY)
 */
export function audyssey2eqMulteqMulteqXt(value: string) {
  return new Packet("ADY", value);
}
export namespace audyssey2eqMulteqMulteqXt {
  /** sets Audyssey 2EQ/MultEQ/MultEQ XT Off */
  export const off = () => audyssey2eqMulteqMulteqXt("00");

  /** sets Audyssey 2EQ/MultEQ/MultEQ XT On/Movie */
  export const on = () => audyssey2eqMulteqMulteqXt("01");

  /** sets Audyssey 2EQ/MultEQ/MultEQ XT Music */
  export const music = () => audyssey2eqMulteqMulteqXt("02");

  /** gets The Audyssey 2EQ/MultEQ/MultEQ XT State */
  export const query = () => audyssey2eqMulteqMulteqXt("QSTN");

  /** sets Audyssey 2EQ/MultEQ/MultEQ XT State Wrap-Around Up */
  export const up = () => audyssey2eqMulteqMulteqXt("UP");
}

/**
 * AccuEQ (AEQ)
 */
export function accueq(value: string) {
  return new Packet("AEQ", value);
}
export namespace accueq {
  /** sets AccuEQ Off */
  export const off = () => accueq("00");

  /** sets AccuEQ On, On(All Ch) */
  export const on = () => accueq("01");

  /** sets AccuEQ, On(ex. Front L/R) */
  export const onFront = () => accueq("02");

  /** gets The AccuEQ State */
  export const query = () => accueq("QSTN");

  /** sets AccuEQ State Wrap-Around Up */
  export const up = () => accueq("UP");
}

/**
 * Audio Muting Command (AMT)
 */
export function audioMuting(value: string) {
  return new Packet("AMT", value);
}
export namespace audioMuting {
  /** sets Audio Muting Off */
  export const off = () => audioMuting("00");

  /** sets Audio Muting On */
  export const on = () => audioMuting("01");

  /** gets the Audio Muting State */
  export const query = () => audioMuting("QSTN");

  /** sets Audio Muting Wrap-Around */
  export const toggle = () => audioMuting("TG");
}

/**
 * Auto Power Down (APD)
 */
export function autoPowerDown(value: string) {
  return new Packet("APD", value);
}
export namespace autoPowerDown {
  /** sets Auto Power Down Off */
  export const off = () => autoPowerDown("00");

  /** sets Auto Power Down On */
  export const on = () => autoPowerDown("01");

  /** gets The Auto Power Down State */
  export const query = () => autoPowerDown("QSTN");

  /** sets Auto Power Down Wrap-Around */
  export const up = () => autoPowerDown("UP");
}

/**
 * Audio Return Channel (ARC)
 */
export function audioReturnChannel(value: string) {
  return new Packet("ARC", value);
}
export namespace audioReturnChannel {
  /** sets Audio Return Channel Off */
  export const off = () => audioReturnChannel("00");

  /** sets Audio Return Channel Auto */
  export const auto = () => audioReturnChannel("01");

  /** gets The Audio Return Channel State */
  export const query = () => audioReturnChannel("QSTN");

  /** sets Audio Return Channel Wrap-Around */
  export const up = () => audioReturnChannel("UP");
}

/**
 * Audio Scalar (ASC)
 */
export function audioScalar(value: string) {
  return new Packet("ASC", value);
}
export namespace audioScalar {
  /** sets Audio Scalar Auto */
  export const auto = () => audioScalar("00");

  /** sets Audio Scalar Manual */
  export const manual = () => audioScalar("01");

  /** gets The Audio Scalar State */
  export const query = () => audioScalar("QSTN");

  /** sets Audio Scalar Wrap-Around */
  export const up = () => audioScalar("UP");
}

/**
 * A/V Sync (AVS)
 */
export function aVSync(value: string) {
  return new Packet("AVS", value);
}
export namespace aVSync {
  /** sets A/V Sync is decreased (step is depend on model) */
  export const isDecreased = () => aVSync("DOWN");

  /** gets A/V Sync Value */
  export const query = () => aVSync("QSTN");

  /** sets A/V Sync is increased (step is depend on model) */
  export const isIncreased = () => aVSync("UP");
}

/**
 * HDMI CEC Control Monitor (CCM)
 */
export function hdmiCecControlMonitor(value: string) {
  return new Packet("CCM", value);
}
export namespace hdmiCecControlMonitor {
  /** sets Main */
  export const main = () => hdmiCecControlMonitor("01");

  /** sets Zone2 */
  export const zone2 = () => hdmiCecControlMonitor("02");

  /** sets Sub */
  export const sub = () => hdmiCecControlMonitor("10");

  /** gets Control Monitor */
  export const query = () => hdmiCecControlMonitor("QSTN");

  /** sets Control Monitor Wrap-Around Up */
  export const up = () => hdmiCecControlMonitor("UP");
}

/**
 * HDMI CEC (CEC)
 */
export function hdmiCec(value: string) {
  return new Packet("CEC", value);
}
export namespace hdmiCec {
  /** sets Off */
  export const off = () => hdmiCec("00");

  /** sets On */
  export const on = () => hdmiCec("01");

  /** gets HDMI CEC */
  export const query = () => hdmiCec("QSTN");

  /** sets HDMI CEC Wrap-Around Up */
  export const up = () => hdmiCec("UP");
}

/**
 * Audio Muting by Channel Command (CMT)
 */
export function audioMutingByChannel(value: string) {
  return new Packet("CMT", value);
}
export namespace audioMutingByChannel {
  /** gets the Audio Muting State */
  export const query = () => audioMutingByChannel("QSTN");

  /** sets Audio Muting by Channel
xx=00 Muting Off
xx=01 Muting On
xx=TG Muting Wrap-Around
for not exist channel is always 00.

aa:Front Left
bb:Front Right
cc:Center
dd:Surround Left
ee:Surround Right
ff:Surround Back Left
gg:Surround Back Right
hh:Subwoofer 1
ii:Height 1 Left
jj:Height 1 Right
kk:Height 2 Left
ll:Height2 Right
mm:Subwoofer 2 */
  export const aabbccddeeffgghhiijjkkllmm = () =>
    audioMutingByChannel("aabbccddeeffgghhiijjkkllmm");
}

/**
 * Center Image for Neo:6 Music (CTI)
 */
export function centerImageForNeo6Music(value: string) {
  return new Packet("CTI", value);
}
export namespace centerImageForNeo6Music {
  /** sets Center Image Down */
  export const down = () => centerImageForNeo6Music("DOWN");

  /** gets The Center Image State */
  export const query = () => centerImageForNeo6Music("QSTN");

  /** sets Center Image Up */
  export const up = () => centerImageForNeo6Music("UP");
}

/**
 * Center (temporary) Level Command (CTL)
 */
export function centerTemporaryLevel(value: string) {
  return new Packet("CTL", value);
}
export namespace centerTemporaryLevel {
  /** LEVEL – KEY */
  export const down = () => centerTemporaryLevel("DOWN");

  /** gets the Subwoofer Level */
  export const query = () => centerTemporaryLevel("QSTN");

  /** LEVEL + Key */
  export const up = () => centerTemporaryLevel("UP");
}

/**
 * Cener Spread for Dolby Surround (CTS)
 */
export function cenerSpreadForDolbySurround(value: string) {
  return new Packet("CTS", value);
}
export namespace cenerSpreadForDolbySurround {
  /** sets Center Spread Off */
  export const centerOff = () => cenerSpreadForDolbySurround("00");

  /** sets Center Spread On */
  export const centerOn = () => cenerSpreadForDolbySurround("01");

  /** gets The Center Spread State */
  export const query = () => cenerSpreadForDolbySurround("QSTN");

  /** sets Center Spread Wrap-Around */
  export const toggle = () => cenerSpreadForDolbySurround("TG");
}

/**
 * Center Width for PLII Music (CTW)
 */
export function centerWidthForPliiMusic(value: string) {
  return new Packet("CTW", value);
}
export namespace centerWidthForPliiMusic {
  /** sets Center Width Down */
  export const down = () => centerWidthForPliiMusic("DOWN");

  /** gets The Center Width State */
  export const query = () => centerWidthForPliiMusic("QSTN");

  /** sets Center Width Up */
  export const up = () => centerWidthForPliiMusic("UP");
}

/**
 * Digital Filter (DGF)
 */
export function digitalFilter(value: string) {
  return new Packet("DGF", value);
}
export namespace digitalFilter {
  /** sets Digital Filter Slow */
  export const slow = () => digitalFilter("00");

  /** sets Digital Filter Sharp */
  export const sharp = () => digitalFilter("01");

  /** gets The Digital Filter State */
  export const query = () => digitalFilter("QSTN");

  /** sets Digital Filter Wrap-Around */
  export const up = () => digitalFilter("UP");
}

/**
 * Display Mode Command (DIF)
 */
export function displayMode(value: string) {
  return new Packet("DIF", value);
}
export namespace displayMode {
  /** sets Selector + Volume Display Mode@1line, Default@2line */
  export const selectorVolume1line = () => displayMode("00");

  /** sets Selector + Listening Mode Display Mode@1line */
  export const selectorListening1line = () => displayMode("01");

  /** Display Digital Format(temporary display) */
  export const digitalFormat = () => displayMode("02");

  /** Display Video Format(temporary display) */
  export const videoFormat = () => displayMode("03");

  /** gets The Display Mode */
  export const query = () => displayMode("QSTN");

  /** sets Display Mode Wrap-Around Up */
  export const toggle = () => displayMode("TG");
}

/**
 * Dimmer Level Command (DIM)
 */
export function dimmerLevel(value: string) {
  return new Packet("DIM", value);
}
export namespace dimmerLevel {
  /** sets Dimmer Level "Bright" */
  export const bright = () => dimmerLevel("00");

  /** sets Dimmer Level "Dim" */
  export const dim = () => dimmerLevel("01");

  /** sets Dimmer Level "Dark" */
  export const dark = () => dimmerLevel("02");

  /** sets Dimmer Level "Shut-Off" */
  export const shutOff = () => dimmerLevel("03");

  /** sets Dimmer Level "Bright & LED OFF" */
  export const brightLedOff = () => dimmerLevel("08");

  /** sets Dimmer Level Wrap-Around Up */
  export const cycle = () => dimmerLevel("DIM");

  /** gets The Dimmer Level */
  export const query = () => dimmerLevel("QSTN");
}

/**
 * Dialog Control (DLC)
 */
export function dialogControl(value: string) {
  return new Packet("DLC", value);
}
export namespace dialogControl {
  /** sets Dialog Control Down */
  export const down = () => dialogControl("DOWN");

  /** gets The Dialog Control State */
  export const query = () => dialogControl("QSTN");

  /** sets Dialog Control Up */
  export const up = () => dialogControl("UP");
}

/**
 * Input Channel (Multiplex) / Dual Mono (DMN)
 */
export function inputChannelMultiplexDualMono(value: string) {
  return new Packet("DMN", value);
}
export namespace inputChannelMultiplexDualMono {
  /** sets DUAL MONO MAIN */
  export const monoMain = () => inputChannelMultiplexDualMono("00");

  /** sets DUAL MONO SUB */
  export const monoSub = () => inputChannelMultiplexDualMono("01");

  /** sets DUAL MONO MAIN+SUB */
  export const monoMainAndSub = () => inputChannelMultiplexDualMono("02");

  /** gets The Panorama State */
  export const query = () => inputChannelMultiplexDualMono("QSTN");

  /** sets Panorama Wrap-Around */
  export const cycle = () => inputChannelMultiplexDualMono("UP");
}

/**
 * Dimension for PLII Music (DMS)
 */
export function dimensionForPliiMusic(value: string) {
  return new Packet("DMS", value);
}
export namespace dimensionForPliiMusic {
  /** sets Dimension Down */
  export const down = () => dimensionForPliiMusic("DOWN");

  /** gets The Dimension State */
  export const query = () => dimensionForPliiMusic("QSTN");

  /** sets Dimension Up */
  export const up = () => dimensionForPliiMusic("UP");
}

/**
 * Dolby Volume (DVL)
 */
export function dolbyVolume(value: string) {
  return new Packet("DVL", value);
}
export namespace dolbyVolume {
  /** sets Dolby Volume Off */
  export const off = () => dolbyVolume("00");

  /** sets Dolby Volume Low/On */
  export const low = () => dolbyVolume("01");

  /** sets Dolby Volume Mid */
  export const mid = () => dolbyVolume("02");

  /** sets Dolby Volume High */
  export const high = () => dolbyVolume("03");

  /** gets The Dolby Volume State */
  export const query = () => dolbyVolume("QSTN");

  /** sets Dolby Volume State Wrap-Around Up */
  export const up = () => dolbyVolume("UP");
}

/**
 * for Smart Grid Command (ECO)
 */
export function forSmartGrid(value: string) {
  return new Packet("ECO", value);
}
export namespace forSmartGrid {
  /** sets Volume 1dB down and Dimmer Level "Dark" */
  export const volume1dbDownAndDimmerLevelDark = () => forSmartGrid("01");

  /** sets Volume 3dB down and Dimmer Level "Dark" */
  export const volume3dbDownAndDimmerLevelDark = () => forSmartGrid("03");

  /** sets Volume 6dB down and Dimmer Level "Dark" */
  export const volume6dbDownAndDimmerLevelDark = () => forSmartGrid("06");
}

/**
 * FL Display Information Command (FLD)
 */
export function flDisplayInformation(value: string) {
  return new Packet("FLD", value);
}
export namespace flDisplayInformation {
  /** gets FL Display Information */
  export const query = () => flDisplayInformation("QSTN");
}

/**
 * Firmware Version (FWV)
 */
export function firmwareVersion(value: string) {
  return new Packet("FWV", value);
}
export namespace firmwareVersion {
  /** gets The Firmware Version State */
  export const query = () => firmwareVersion("QSTN");
}

/**
 * PCM Fixed Mode / Fixed PCM Mode (FXP)
 */
export function pcmFixedModeFixedPcmMode(value: string) {
  return new Packet("FXP", value);
}
export namespace pcmFixedModeFixedPcmMode {
  /** sets PCM Fixed Mode Off */
  export const off = () => pcmFixedModeFixedPcmMode("00");

  /** sets PCM Fixed Mode On */
  export const on = () => pcmFixedModeFixedPcmMode("01");

  /** gets The PCM Fixed Mode State */
  export const query = () => pcmFixedModeFixedPcmMode("QSTN");

  /** sets PCM Fixed Mode Wrap-Around */
  export const up = () => pcmFixedModeFixedPcmMode("UP");
}

/**
 * HDMI Audio Out (Main) (HAO)
 */
export function hdmiAudioOutMain(value: string) {
  return new Packet("HAO", value);
}
export namespace hdmiAudioOutMain {
  /** sets Off */
  export const off = () => hdmiAudioOutMain("00");

  /** sets On */
  export const on = () => hdmiAudioOutMain("01");

  /** sets Auto */
  export const auto = () => hdmiAudioOutMain("02");

  /** gets HDMI Audio Out */
  export const query = () => hdmiAudioOutMain("QSTN");

  /** sets HDMI Audio Out Wrap-Around Up */
  export const up = () => hdmiAudioOutMain("UP");
}

/**
 * HDMI Audio Out (Sub) (HAS)
 */
export function hdmiAudioOutSub(value: string) {
  return new Packet("HAS", value);
}
export namespace hdmiAudioOutSub {
  /** sets Off */
  export const off = () => hdmiAudioOutSub("00");

  /** sets On */
  export const on = () => hdmiAudioOutSub("01");

  /** gets HDMI Audio Out */
  export const query = () => hdmiAudioOutSub("QSTN");

  /** sets HDMI Audio Out Wrap-Around Up */
  export const up = () => hdmiAudioOutSub("UP");
}

/**
 * HD Radio Artist Name Info (HD Radio Model Only) (HAT)
 */
export function hdRadioArtistNameInfo(value: string) {
  return new Packet("HAT", value);
}
export namespace hdRadioArtistNameInfo {
  /** gets HD Radio Artist Name */
  export const query = () => hdRadioArtistNameInfo("QSTN");
}

/**
 * HD Radio Blend Mode Command (HD Radio Model Only) (HBL)
 */
export function hdRadioBlendMode(value: string) {
  return new Packet("HBL", value);
}
export namespace hdRadioBlendMode {
  /** sets HD Radio Blend Mode "Auto" */
  export const auto = () => hdRadioBlendMode("00");

  /** sets HD Radio Blend Mode "Analog" */
  export const analog = () => hdRadioBlendMode("01");

  /** gets the HD Radio Blend Mode Status */
  export const query = () => hdRadioBlendMode("QSTN");
}

/**
 * Hi-Bit (HBT)
 */
export function hiBit(value: string) {
  return new Packet("HBT", value);
}
export namespace hiBit {
  /** sets Hi-Bit Off */
  export const off = () => hiBit("00");

  /** sets Hi-Bit On */
  export const on = () => hiBit("01");

  /** gets The Hi-Bit State */
  export const query = () => hiBit("QSTN");

  /** sets Hi-Bit Wrap-Around Up */
  export const up = () => hiBit("UP");
}

/**
 * HD Radio Channel Name Info (HD Radio Model Only) (HCN)
 */
export function hdRadioChannelNameInfo(value: string) {
  return new Packet("HCN", value);
}
export namespace hdRadioChannelNameInfo {
  /** gets HD Radio Channel Name */
  export const query = () => hdRadioChannelNameInfo("QSTN");
}

/**
 * HDMI Output Selector (HDO)
 */
export function hdmiOutputSelector(value: string) {
  return new Packet("HDO", value);
}
export namespace hdmiOutputSelector {
  /** sets No, Analog */
  export const analog = () => hdmiOutputSelector("00");

  /** sets Yes/Out Main, HDMI Main, HDMI */
  export const hdmiMain = () => hdmiOutputSelector("01");

  /** sets Out Sub, HDMI Sub, HDBaseT */
  export const hdmiSub = () => hdmiOutputSelector("02");

  /** sets, Both, Main+Sub */
  export const bothMainAndSub = () => hdmiOutputSelector("03");

  /** sets, Both(Main) */
  export const bothMain = () => hdmiOutputSelector("04");

  /** sets, Both(Sub) */
  export const bothSub = () => hdmiOutputSelector("05");

  /** gets The HDMI Out Selector */
  export const query = () => hdmiOutputSelector("QSTN");

  /** sets HDMI Out Selector Wrap-Around Up */
  export const up = () => hdmiOutputSelector("UP");
}

/**
 * HD Radio Detail Info (HD Radio Model Only) (HDS)
 */
export function hdRadioDetailInfo(value: string) {
  return new Packet("HDS", value);
}
export namespace hdRadioDetailInfo {
  /** gets HD Radio Title */
  export const query = () => hdRadioDetailInfo("QSTN");
}

/**
 * HDMI Out Information (HOI)
 */
export function hdmiOutInformation(value: string) {
  return new Packet("HOI", value);
}
export namespace hdmiOutInformation {
  /** gets The HDMI Out Information State */
  export const query = () => hdmiOutInformation("QSTN");

  /** sets HDMI Information
a:HDMI Out MAIN 1:for Main Zone
b:HDMI Out SUB 0:None,1:for Main Zone,2:for Zone 2 */
  export const a1ForZoneBSub0None = () => hdmiOutInformation("ab");
}

/**
 * HD Radio Channel Program Command (HD Radio Model Only) (HPR)
 */
export function hdRadioChannelProgram(value: string) {
  return new Packet("HPR", value);
}
export namespace hdRadioChannelProgram {
  /** gets HD Radio Channel Program */
  export const query = () => hdRadioChannelProgram("QSTN");
}

/**
 * HDMI Standby Through (HST)
 */
export function hdmiStandbyThrough(value: string) {
  return new Packet("HST", value);
}
export namespace hdmiStandbyThrough {
  /** sets HDMI Standby Throguh Auto */
  export const throguhAuto = () => hdmiStandbyThrough("AT");

  /** sets HDMI Standby Through Auto(Eco) */
  export const auto = () => hdmiStandbyThrough("ATE");

  /** sets HDMI Standby Through Last */
  export const last = () => hdmiStandbyThrough("LAST");

  /** sets HDMI Standby Through Off */
  export const off = () => hdmiStandbyThrough("OFF");

  /** gets The HDMI Standby Through State */
  export const query = () => hdmiStandbyThrough("QSTN");

  /** sets HDMI Standby Through Wrap-Around */
  export const up = () => hdmiStandbyThrough("UP");

  /** sets HDMI Standby Through xx=SLI Number */
  export const xxSliNumber = () => hdmiStandbyThrough("xx");
}

/**
 * HD Radio Title Info (HD Radio Model Only) (HTI)
 */
export function hdRadioTitleInfo(value: string) {
  return new Packet("HTI", value);
}
export namespace hdRadioTitleInfo {
  /** gets HD Radio Title */
  export const query = () => hdRadioTitleInfo("QSTN");
}

/**
 * HD Radio Tuner Status (HD Radio Model Only) (HTS)
 */
export function hdRadioTunerStatus(value: string) {
  return new Packet("HTS", value);
}
export namespace hdRadioTunerStatus {
  /** gets the HD Radio Tuner Status */
  export const query = () => hdRadioTunerStatus("QSTN");

  /** HD Radio Tuner Status (3 bytes)
mm -> "00" not HD, "01" HD
nn -> current Program "01"-"08"
oo -> receivable Program (8 bits are represented in hexadecimal notation. Each bit shows receivable or not.) */
  export const mmnnoo = () => hdRadioTunerStatus("mmnnoo");
}

/**
 * Audio Information Command (IFA)
 */
export function audioInformation(value: string) {
  return new Packet("IFA", value);
}
export namespace audioInformation {
  /** gets Infomation of Audio */
  export const query = () => audioInformation("QSTN");
}

/**
 * Video Information Command (IFV)
 */
export function videoInformation(value: string) {
  return new Packet("IFV", value);
}
export namespace videoInformation {
  /** gets Information of Video */
  export const query = () => videoInformation("QSTN");
}

/**
 * Input Selector Rename / Input Function Rename (IRN)
 */
export function inputSelectorRenameInputFunctionRename(value: string) {
  return new Packet("IRN", value);
}
export namespace inputSelectorRenameInputFunctionRename {
  /** sets Input Selector Name (10 characters)
ii: Selector Number (the same as for SLI command)
xxxxxxxxxx: Name(Max 10 characters) */
  export const name10CharactersIiNumberTheSameAsForSliCommandXxxxxxxxxxName = () =>
    inputSelectorRenameInputFunctionRename("iixxxxxxxxxx");
}

/**
 * ISF Mode (ISF)
 */
export function isfMode(value: string) {
  return new Packet("ISF", value);
}
export namespace isfMode {
  /** sets ISF Mode Custom */
  export const custom = () => isfMode("00");

  /** sets ISF Mode Day */
  export const day = () => isfMode("01");

  /** sets ISF Mode Night */
  export const night = () => isfMode("02");

  /** gets The ISF Mode State */
  export const query = () => isfMode("QSTN");

  /** sets ISF Mode State Wrap-Around Up */
  export const up = () => isfMode("UP");
}

/**
 * IntelliVolume / Input Level Absorber (ITV)
 */
export function intellivolumeInputLevelAbsorber(value: string) {
  return new Packet("ITV", value);
}
export namespace intellivolumeInputLevelAbsorber {
  /** sets IntelliVolume Down */
  export const down = () => intellivolumeInputLevelAbsorber("DOWN");

  /** gets The IntelliVolume State */
  export const query = () => intellivolumeInputLevelAbsorber("QSTN");

  /** sets IntelliVolume Up */
  export const up = () => intellivolumeInputLevelAbsorber("UP");
}

/**
 * Loudness Management (LDM)
 */
export function loudnessManagement(value: string) {
  return new Packet("LDM", value);
}
export namespace loudnessManagement {
  /** sets Loudness Management Off */
  export const off = () => loudnessManagement("00");

  /** sets Loudness management On */
  export const on = () => loudnessManagement("01");

  /** gets The Panorama State */
  export const query = () => loudnessManagement("QSTN");

  /** sets Panorama Wrap-Around */
  export const up = () => loudnessManagement("UP");
}

/**
 * LFE Level / LFE Mute Level (LFE)
 */
export function lfeLevelLfeMuteLevel(value: string) {
  return new Packet("LFE", value);
}
export namespace lfeLevelLfeMuteLevel {
  /** sets LFE Mute Level Down */
  export const down = () => lfeLevelLfeMuteLevel("DOWN");

  /** gets The LFE Mute Level */
  export const query = () => lfeLevelLfeMuteLevel("QSTN");

  /** sets LFE Mute Level Up */
  export const up = () => lfeLevelLfeMuteLevel("UP");
}

/**
 * Listening Mode Command (LMD)
 */
export function listeningMode(value: string) {
  return new Packet("LMD", value);
}
export namespace listeningMode {
  /** sets STEREO */
  export const stereo = () => listeningMode("00");

  /** sets DIRECT */
  export const direct = () => listeningMode("01");

  /** sets SURROUND */
  export const surround = () => listeningMode("02");

  /** sets FILM, Game-RPG */
  export const film = () => listeningMode("03");

  /** sets THX */
  export const thx = () => listeningMode("04");

  /** sets ACTION, Game-Action */
  export const action = () => listeningMode("05");

  /** sets MUSICAL, Game-Rock */
  export const musical = () => listeningMode("06");

  /** sets MONO MOVIE */
  export const monoMovie = () => listeningMode("07");

  /** sets ORCHESTRA */
  export const orchestra = () => listeningMode("08");

  /** sets UNPLUGGED */
  export const unplugged = () => listeningMode("09");

  /** sets STUDIO-MIX */
  export const studioMix = () => listeningMode("0A");

  /** sets TV LOGIC */
  export const tvLogic = () => listeningMode("0B");

  /** sets ALL CH STEREO */
  export const allChStereo = () => listeningMode("0C");

  /** sets THEATER-DIMENSIONAL */
  export const theaterDimensional = () => listeningMode("0D");

  /** sets ENHANCED 7/ENHANCE, Game-Sports */
  export const enhanced7 = () => listeningMode("0E");

  /** sets MONO */
  export const mono = () => listeningMode("0F");

  /** sets PURE AUDIO */
  export const pureAudio = () => listeningMode("11");

  /** sets MULTIPLEX */
  export const multiplex = () => listeningMode("12");

  /** sets FULL MONO */
  export const fullMono = () => listeningMode("13");

  /** sets DOLBY VIRTUAL */
  export const dolbyVirtual = () => listeningMode("14");

  /** sets DTS Surround Sensation */
  export const dtsSurroundSensation = () => listeningMode("15");

  /** sets Audyssey DSX */
  export const audysseyDsx = () => listeningMode("16");

  /** sets Whole House Mode */
  export const wholeHouse = () => listeningMode("1F");

  /** sets Stage (when Genre Control is Enable in Japan Model) */
  export const stageJapan = () => listeningMode("23");

  /** sets Action (when Genre Control is Enable in Japan Model) */
  export const actionJapan = () => listeningMode("25");

  /** sets Music (when Genre Contorl is Enable in Japan Model) */
  export const musicJapan = () => listeningMode("26");

  /** sets Sports (when Genre Control is Enable in Japan Model) */
  export const sportsJapan = () => listeningMode("2E");

  /** sets Straight Decode */
  export const straightDecode = () => listeningMode("40");

  /** sets Dolby EX */
  export const dolbyEx = () => listeningMode("41");

  /** sets THX Cinema */
  export const thxCinema = () => listeningMode("42");

  /** sets THX Surround EX */
  export const thxSurroundEx = () => listeningMode("43");

  /** sets THX Music */
  export const thxMusic = () => listeningMode("44");

  /** sets THX Games */
  export const thxGames = () => listeningMode("45");

  /** sets THX U2/S2/I/S Cinema/Cinema2 */
  export const thxUltra2Cinema = () => listeningMode("50");

  /** sets THX MusicMode,THX U2/S2/I/S Music */
  export const thxUltra2Music = () => listeningMode("51");

  /** sets THX Games Mode,THX U2/S2/I/S Games */
  export const thxUltra2Games = () => listeningMode("52");

  /** sets PLII/PLIIx Movie, Dolby Atmos/Dolby Surround */
  export const pliiMovie = () => listeningMode("80");

  /** sets PLII/PLIIx Music */
  export const pliiMusic = () => listeningMode("81");

  /** sets Neo:6 Cinema/Neo:X Cinema, DTS:X/Neural:X */
  export const neo6Cinema = () => listeningMode("82");

  /** sets Neo:6 Music/Neo:X Music */
  export const neo6Music = () => listeningMode("83");

  /** sets PLII/PLIIx THX Cinema, Dolby Surround THX Cinema */
  export const pliiThxCinema = () => listeningMode("84");

  /** sets Neo:6/Neo:X THX Cinema, DTS Neural:X THX Cinema */
  export const neo6ThxCinema = () => listeningMode("85");

  /** sets PLII/PLIIx Game */
  export const pliiGame = () => listeningMode("86");

  /** sets Neural Surr */
  export const neuralSurr = () => listeningMode("87");

  /** sets Neural THX/Neural Surround */
  export const neuralThx = () => listeningMode("88");

  /** sets PLII/PLIIx THX Games, Dolby Surround THX Games */
  export const pliiThxGames = () => listeningMode("89");

  /** sets Neo:6/Neo:X THX Games, DTS Neural:X THX Games */
  export const neo6ThxGames = () => listeningMode("8A");

  /** sets PLII/PLIIx THX Music, Dolby Surround THX Music */
  export const pliiThxMusic = () => listeningMode("8B");

  /** sets Neo:6/Neo:X THX Music, DTS Neural:X THX Music */
  export const neo6ThxMusic = () => listeningMode("8C");

  /** sets Neural THX Cinema */
  export const neuralThxCinema = () => listeningMode("8D");

  /** sets Neural THX Music */
  export const neuralThxMusic = () => listeningMode("8E");

  /** sets Neural THX Games */
  export const neuralThxGames = () => listeningMode("8F");

  /** sets PLIIz Height */
  export const pliizHeight = () => listeningMode("90");

  /** sets Neo:6 Cinema DTS Surround Sensation */
  export const neo6CinemaDtsSurroundSensation = () => listeningMode("91");

  /** sets Neo:6 Music DTS Surround Sensation */
  export const neo6MusicDtsSurroundSensation = () => listeningMode("92");

  /** sets Neural Digital Music */
  export const neuralDigitalMusic = () => listeningMode("93");

  /** sets PLIIz Height + THX Cinema */
  export const pliizHeightThxCinema = () => listeningMode("94");

  /** sets PLIIz Height + THX Music */
  export const pliizHeightThxMusic = () => listeningMode("95");

  /** sets PLIIz Height + THX Games */
  export const pliizHeightThxGames = () => listeningMode("96");

  /** sets PLIIz Height + THX U2/S2 Cinema */
  export const pliizHeightThxU2Cinema = () => listeningMode("97");

  /** sets PLIIz Height + THX U2/S2 Music */
  export const pliizHeightThxU2Music = () => listeningMode("98");

  /** sets PLIIz Height + THX U2/S2 Games */
  export const pliizHeightThxU2Games = () => listeningMode("99");

  /** sets Neo:X Game */
  export const neoXGame = () => listeningMode("9A");

  /** sets PLIIx/PLII Movie + Audyssey DSX */
  export const pliixMovieAudysseyDsx = () => listeningMode("A0");

  /** sets PLIIx/PLII Music + Audyssey DSX */
  export const pliixMusicAudysseyDsx = () => listeningMode("A1");

  /** sets PLIIx/PLII Game + Audyssey DSX */
  export const pliixGameAudysseyDsx = () => listeningMode("A2");

  /** sets Neo:6 Cinema + Audyssey DSX */
  export const neo6CinemaAudysseyDsx = () => listeningMode("A3");

  /** sets Neo:6 Music + Audyssey DSX */
  export const neo6MusicAudysseyDsx = () => listeningMode("A4");

  /** sets Neural Surround + Audyssey DSX */
  export const neuralSurroundAudysseyDsx = () => listeningMode("A5");

  /** sets Neural Digital Music + Audyssey DSX */
  export const neuralDigitalMusicAudysseyDsx = () => listeningMode("A6");

  /** sets Dolby EX + Audyssey DSX */
  export const dolbyExAudysseyDsx = () => listeningMode("A7");

  /** sets Listening Mode Wrap-Around Up */
  export const cycleAuto = () => listeningMode("AUTO");

  /** sets Listening Mode Wrap-Around Down */
  export const cycleDown = () => listeningMode("DOWN");

  /** sets Auto Surround */
  export const autoSurround = () => listeningMode("FF");

  /** sets Listening Mode Wrap-Around Up */
  export const cycleGame = () => listeningMode("GAME");

  /** sets Listening Mode Wrap-Around Up */
  export const cycleMovie = () => listeningMode("MOVIE");

  /** sets Listening Mode Wrap-Around Up */
  export const cycleMusic = () => listeningMode("MUSIC");

  /** gets The Listening Mode */
  export const query = () => listeningMode("QSTN");

  /** sets Listening Mode Wrap-Around Up */
  export const cycleStereo = () => listeningMode("STEREO");

  /** sets Listening Mode Wrap-Around Up */
  export const cycleSurround = () => listeningMode("SURR");

  /** sets Listening Mode Wrap-Around Up */
  export const cycleThx = () => listeningMode("THX");

  /** sets Listening Mode Wrap-Around Up */
  export const cycleUp = () => listeningMode("UP");
}

/**
 * Lip Sync / Auto Delay (LPS)
 */
export function lipSyncAutoDelay(value: string) {
  return new Packet("LPS", value);
}
export namespace lipSyncAutoDelay {
  /** sets Lip Sync Off */
  export const off = () => lipSyncAutoDelay("00");

  /** sets Lip Sync On */
  export const on = () => lipSyncAutoDelay("01");

  /** gets The Lip Sync State */
  export const query = () => lipSyncAutoDelay("QSTN");

  /** sets Lip Sync Wrap-Around */
  export const up = () => lipSyncAutoDelay("UP");
}

/**
 * Late Night Command (LTN)
 */
export function lateNight(value: string) {
  return new Packet("LTN", value);
}
export namespace lateNight {
  /** sets Late Night Off */
  export const off = () => lateNight("00");

  /** sets Late Night Low@DolbyDigital,On@Dolby TrueHD */
  export const lowDolbydigital = () => lateNight("01");

  /** sets Late Night High@DolbyDigital,(On@Dolby TrueHD) */
  export const highDolbydigital = () => lateNight("02");

  /** sets Late Night Auto@Dolby TrueHD */
  export const autoDolbyTruehd = () => lateNight("03");

  /** gets The Late Night Level */
  export const query = () => lateNight("QSTN");

  /** sets Late Night State Wrap-Around Up */
  export const up = () => lateNight("UP");
}

/**
 * MCACC Calibration (MCC)
 */
export function mcaccCalibration(value: string) {
  return new Packet("MCC", value);
}
export namespace mcaccCalibration {
  /** gets The MCACC calibration */
  export const query = () => mcaccCalibration("QSTN");
}

/**
 * MCACC MEMORY (MCM)
 */
export function mcaccMemory(value: string) {
  return new Packet("MCM", value);
}
export namespace mcaccMemory {
  /** sets MCACC MEMORY Wrap-Around Down */
  export const down = () => mcaccMemory("DOWN");

  /** gets The MCACC MEMORY */
  export const query = () => mcaccMemory("QSTN");

  /** sets MCACC MEMORY Wrap-Around Up */
  export const up = () => mcaccMemory("UP");
}

/**
 * Memory Setup Command (MEM)
 */
export function memorySetup(value: string) {
  return new Packet("MEM", value);
}
export namespace memorySetup {
  /** locks memory */
  export const lock = () => memorySetup("LOCK");

  /** recalls memory */
  export const rcl = () => memorySetup("RCL");

  /** stores memory */
  export const str = () => memorySetup("STR");

  /** unlocks memory */
  export const unlk = () => memorySetup("UNLK");
}

/**
 * Fullband MCACC Calibration (MFB)
 */
export function fullbandMcaccCalibration(value: string) {
  return new Packet("MFB", value);
}
export namespace fullbandMcaccCalibration {
  /** not complete Fullband MCACC calibration or
   not have Fullband MCACC function */
  export const incomplete = () => fullbandMcaccCalibration("00");

  /** complete Fullband MCACC calibration */
  export const complete = () => fullbandMcaccCalibration("01");

  /** gets The Fullband MCACC calibration */
  export const query = () => fullbandMcaccCalibration("QSTN");
}

/**
 * Music Optimizer / Sound Retriever (MOT)
 */
export function musicOptimizerSoundRetriever(value: string) {
  return new Packet("MOT", value);
}
export namespace musicOptimizerSoundRetriever {
  /** sets Music Optimizer Off */
  export const off = () => musicOptimizerSoundRetriever("00");

  /** sets Music Optimizer On */
  export const on = () => musicOptimizerSoundRetriever("01");

  /** gets The Music Optimizer State */
  export const query = () => musicOptimizerSoundRetriever("QSTN");

  /** sets Music Optimizer State Wrap-Around Up */
  export const up = () => musicOptimizerSoundRetriever("UP");
}

/**
 * Master Volume Command (MVL)
 */
export function masterVolume(value: string) {
  return new Packet("MVL", value);
}
export namespace masterVolume {
  /** sets Volume Level Down */
  export const levelDown = () => masterVolume("DOWN");

  /** sets Volume Level Down 1dB Step */
  export const levelDown1dbStep = () => masterVolume("DOWN1");

  /** gets the Volume Level */
  export const query = () => masterVolume("QSTN");

  /** sets Volume Level Up */
  export const levelUp = () => masterVolume("UP");

  /** sets Volume Level Up 1dB Step */
  export const levelUp1dbStep = () => masterVolume("UP1");
}

/**
 * Setup Operation Command (OSD)
 */
export function setup(value: string) {
  return new Packet("OSD", value);
}
export namespace setup {
  /** Audio Adjust Key */
  export const audio = () => setup("AUDIO");

  /** Down Key */
  export const down = () => setup("DOWN");

  /** Enter Key */
  export const enter = () => setup("ENTER");

  /** Exit Key */
  export const exit = () => setup("EXIT");

  /** Home Key */
  export const home = () => setup("HOME");

  /** Instaprevue Key */
  export const ipv = () => setup("IPV");

  /** Left Key */
  export const left = () => setup("LEFT");

  /** Menu Key */
  export const menu = () => setup("MENU");

  /** Quick Setup Key */
  export const quick = () => setup("QUICK");

  /** Right Key */
  export const right = () => setup("RIGHT");

  /** Up Key */
  export const up = () => setup("UP");

  /** Video Adjust Key */
  export const video = () => setup("VIDEO");
}

/**
 * Pre Amp Mode / AMP Mode (PAM)
 */
export function preAmpModeAmpMode(value: string) {
  return new Packet("PAM", value);
}
export namespace preAmpModeAmpMode {
  /** sets Pre Amp Mode Off */
  export const off = () => preAmpModeAmpMode("00");

  /** sets Pre Amp Mode Front */
  export const front = () => preAmpModeAmpMode("01");

  /** sets Pre Amp Mode Front+Center */
  export const frontCenter = () => preAmpModeAmpMode("03");

  /** sets Pre Amp Mode All */
  export const all = () => preAmpModeAmpMode("07");

  /** gets The Auto Power Down State */
  export const query = () => preAmpModeAmpMode("QSTN");

  /** sets Auto Power Down Wrap-Around */
  export const up = () => preAmpModeAmpMode("UP");
}

/**
 * Phase Control Plus (PCP)
 */
export function phaseControlPlus(value: string) {
  return new Packet("PCP", value);
}
export namespace phaseControlPlus {
  /** sets Auto Phase Control Plus */
  export const auto = () => phaseControlPlus("AT");

  /** sets Phase Control Plus Down */
  export const down = () => phaseControlPlus("DOWN");

  /** gets The Phase Control Plus */
  export const query = () => phaseControlPlus("QSTN");

  /** sets Phase Control Plus Up */
  export const up = () => phaseControlPlus("UP");
}

/**
 * Phase Control (PCT)
 */
export function phaseControl(value: string) {
  return new Packet("PCT", value);
}
export namespace phaseControl {
  /** sets Phase Control Off */
  export const off = () => phaseControl("00");

  /** sets Phase Control On */
  export const on = () => phaseControl("01");

  /** sets Full Band Phase Control On */
  export const fullBandOn = () => phaseControl("02");

  /** gets The Phase Control */
  export const query = () => phaseControl("QSTN");

  /** sets Phase Control Wrap-Around Up */
  export const up = () => phaseControl("UP");
}

/**
 * Phase Matching Bass Command (PMB)
 */
export function phaseMatchingBass(value: string) {
  return new Packet("PMB", value);
}
export namespace phaseMatchingBass {
  /** sets Off */
  export const off = () => phaseMatchingBass("00");

  /** sets On */
  export const on = () => phaseMatchingBass("01");

  /** gets Phase Matching Bass */
  export const query = () => phaseMatchingBass("QSTN");

  /** sets Phase Matching Bass Wrap-Around Up */
  export const toggle = () => phaseMatchingBass("TG");
}

/**
 * Panorama for PLII Music (PNR)
 */
export function panoramaForPliiMusic(value: string) {
  return new Packet("PNR", value);
}
export namespace panoramaForPliiMusic {
  /** sets Panorama Off */
  export const off = () => panoramaForPliiMusic("00");

  /** sets Panorama On */
  export const on = () => panoramaForPliiMusic("01");

  /** gets The Panorama State */
  export const query = () => panoramaForPliiMusic("QSTN");

  /** sets Panorama Wrap-Around */
  export const toggle = () => panoramaForPliiMusic("TG");
}

/**
 * Popup Message (POP)
 */
export function popupMessage(value: string) {
  return new Packet("POP", value);
}
export namespace popupMessage {

}

/**
 * PQLS (PQL)
 */
export function pqls(value: string) {
  return new Packet("PQL", value);
}
export namespace pqls {
  /** sets PQLS Off */
  export const off = () => pqls("00");

  /** sets PQLS On */
  export const on = () => pqls("01");

  /** gets The PQLS State */
  export const query = () => pqls("QSTN");

  /** sets PQLS Wrap-Around */
  export const up = () => pqls("UP");
}

/**
 * Preset Memory Command (Include Tuner Pack Model Only) (PRM)
 */
export function presetMemory(value: string) {
  return new Packet("PRM", value);
}
export namespace presetMemory {

}

/**
 * Preset Command (Include Tuner Pack Model Only) (PRS)
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
 * PTY Scan Command (RDS Model Only) (PTS)
 */
export function ptyScan(value: string) {
  return new Packet("PTS", value);
}
export namespace ptyScan {
  /** Finish PTY Scan */
  export const enter = () => ptyScan("ENTER");
}

/**
 * System Power Command (PWR)
 */
export function systemPower(value: string) {
  return new Packet("PWR", value);
}
export namespace systemPower {
  /** sets System Standby */
  export const standby = () => systemPower("00");

  /** sets System On */
  export const on = () => systemPower("01");

  /** gets the System Power Status */
  export const query = () => systemPower("QSTN");
}

/**
 * Cinema Filter Command (RAS)
 */
export function cinemaFilter(value: string) {
  return new Packet("RAS", value);
}
export namespace cinemaFilter {
  /** sets Cinema Filter Off */
  export const off = () => cinemaFilter("00");

  /** sets Cinema Filter On */
  export const on = () => cinemaFilter("01");

  /** gets The Cinema Filter State */
  export const query = () => cinemaFilter("QSTN");

  /** sets Cinema Filter State Wrap-Around Up */
  export const up = () => cinemaFilter("UP");
}

/**
 * RDS Information Command (RDS Model Only) (RDS)
 */
export function rdsInformation(value: string) {
  return new Packet("RDS", value);
}
export namespace rdsInformation {
  /** Display RT Information */
  export const rt = () => rdsInformation("00");

  /** Display PTY Information */
  export const pty = () => rdsInformation("01");

  /** Display TP Information */
  export const tp = () => rdsInformation("02");

  /** Display RDS Information Wrap-Around Change */
  export const up = () => rdsInformation("UP");
}

/**
 * Monitor Out Resolution (RES)
 */
export function monitorOutResolution(value: string) {
  return new Packet("RES", value);
}
export namespace monitorOutResolution {
  /** sets Through */
  export const through = () => monitorOutResolution("00");

  /** sets Auto(HDMI Output Only) */
  export const auto = () => monitorOutResolution("01");

  /** sets 480p */
  export const to480p = () => monitorOutResolution("02");

  /** sets 720p */
  export const to720p = () => monitorOutResolution("03");

  /** sets 1080i */
  export const to1080i = () => monitorOutResolution("04");

  /** sets 1080p(HDMI Output Only) */
  export const to1080p = () => monitorOutResolution("05");

  /** sets Source */
  export const source = () => monitorOutResolution("06");

  /** sets 1080p/24fs(HDMI Output Only) */
  export const to1080p24fs = () => monitorOutResolution("07");

  /** sets 4K Upscaling(HDMI Output Only) 4K(HDMI Output Only) */
  export const to4kUpscaling = () => monitorOutResolution("08");

  /** sets 1680x720p */
  export const to1680x720p = () => monitorOutResolution("13");

  /** sets 2560x1080p */
  export const to2560x1080p = () => monitorOutResolution("15");

  /** gets The Monitor Out Resolution */
  export const query = () => monitorOutResolution("QSTN");

  /** sets Monitor Out Resolution Wrap-Around Up */
  export const up = () => monitorOutResolution("UP");
}

/**
 * Reset Command (RST)
 */
export function reset(value: string) {
  return new Packet("RST", value);
}
export namespace reset {
  /** Reset All */
  export const all = () => reset("ALL");
}

/**
 * SIRIUS Artist Name Info (SIRIUS Model Only) (SAT)
 */
export function siriusArtistNameInfo(value: string) {
  return new Packet("SAT", value);
}
export namespace siriusArtistNameInfo {
  /** gets SIRIUS Artist Name */
  export const query = () => siriusArtistNameInfo("QSTN");
}

/**
 * Screen Centered Dialog / Dialog Enahncement (SCD)
 */
export function screenCenteredDialogDialogEnahncement(value: string) {
  return new Packet("SCD", value);
}
export namespace screenCenteredDialogDialogEnahncement {
  /** sets Dialog Enhancement Off */
  export const enhancementOff = () =>
    screenCenteredDialogDialogEnahncement("00");

  /** sets Dialog Enhancement On */
  export const enhancementOn = () =>
    screenCenteredDialogDialogEnahncement("01");

  /** gets The Dialog Enhancement State */
  export const query = () => screenCenteredDialogDialogEnahncement("QSTN");

  /** sets Dialog Enhancement Wrap-Around */
  export const up = () => screenCenteredDialogDialogEnahncement("UP");
}

/**
 * SIRIUS Channel Number Command (SIRIUS Model Only) (SCH)
 */
export function siriusChannelNumber(value: string) {
  return new Packet("SCH", value);
}
export namespace siriusChannelNumber {
  /** sets SIRIUS Channel Wrap-Around Down */
  export const down = () => siriusChannelNumber("DOWN");

  /** gets SIRIUS Channel Number */
  export const query = () => siriusChannelNumber("QSTN");

  /** sets SIRIUS Channel Wrap-Around Up */
  export const up = () => siriusChannelNumber("UP");
}

/**
 * SIRIUS Channel Name Info (SIRIUS Model Only) (SCN)
 */
export function siriusChannelNameInfo(value: string) {
  return new Packet("SCN", value);
}
export namespace siriusChannelNameInfo {
  /** gets SIRIUS Channel Name */
  export const query = () => siriusChannelNameInfo("QSTN");
}

/**
 * SIRIUS Category Command (SIRIUS Model Only) (SCT)
 */
export function siriusCategory(value: string) {
  return new Packet("SCT", value);
}
export namespace siriusCategory {
  /** sets SIRIUS Category Wrap-Around Down */
  export const down = () => siriusCategory("DOWN");

  /** gets SIRIUS Category */
  export const query = () => siriusCategory("QSTN");

  /** sets SIRIUS Category Wrap-Around Up */
  export const up = () => siriusCategory("UP");
}

/**
 * Audio Selector Command (SLA)
 */
export function audioSelector(value: string) {
  return new Packet("SLA", value);
}
export namespace audioSelector {
  /** sets AUTO */
  export const auto = () => audioSelector("00");

  /** sets MULTI-CHANNEL */
  export const multiChannel = () => audioSelector("01");

  /** sets ANALOG */
  export const analog = () => audioSelector("02");

  /** sets iLINK */
  export const ilink = () => audioSelector("03");

  /** sets HDMI */
  export const hdmi = () => audioSelector("04");

  /** sets COAX/OPT */
  export const coax = () => audioSelector("05");

  /** sets BALANCE */
  export const balance = () => audioSelector("06");

  /** sets ARC */
  export const arc = () => audioSelector("07");

  /** sets None */
  export const none = () => audioSelector("0F");

  /** gets The Audio Selector Status */
  export const query = () => audioSelector("QSTN");

  /** sets Audio Selector Wrap-Around Up */
  export const up = () => audioSelector("UP");
}

/**
 * Speaker Level Calibration Command (SLC)
 */
export function speakerLevelCalibration(value: string) {
  return new Packet("SLC", value);
}
export namespace speakerLevelCalibration {
  /** CH SEL Key */
  export const chsel = () => speakerLevelCalibration("CHSEL");

  /** LEVEL – KEY */
  export const down = () => speakerLevelCalibration("DOWN");

  /** sets TEST TONE OFF */
  export const testToneOff = () => speakerLevelCalibration("OFF");

  /** TEST Key */
  export const test = () => speakerLevelCalibration("TEST");

  /** LEVEL + Key */
  export const up = () => speakerLevelCalibration("UP");
}

/**
 * Input Selector Command (SLI)
 */
export function inputSelector(value: string) {
  return new Packet("SLI", value);
}
export namespace inputSelector {
  /** sets VIDEO1, VCR/DVR, STB/DVR */
  export const video1 = () => inputSelector("00");

  /** sets VIDEO2, CBL/SAT */
  export const video2 = () => inputSelector("01");

  /** sets VIDEO3, GAME/TV, GAME, GAME1 */
  export const video3 = () => inputSelector("02");

  /** sets VIDEO4, AUX1(AUX) */
  export const video4 = () => inputSelector("03");

  /** sets VIDEO5, AUX2, GAME2 */
  export const video5 = () => inputSelector("04");

  /** sets VIDEO6, PC */
  export const video6 = () => inputSelector("05");

  /** sets VIDEO7 */
  export const video7 = () => inputSelector("06");

  /** Hidden1     EXTRA1 */
  export const extra1 = () => inputSelector("07");

  /** Hidden2     EXTRA2 */
  export const extra2 = () => inputSelector("08");

  /** Hidden3     EXTRA3 */
  export const extra3 = () => inputSelector("09");

  /** sets DVD, BD/DVD */
  export const dvd = () => inputSelector("10");

  /** sets STRM BOX */
  export const strmBox = () => inputSelector("11");

  /** sets TV */
  export const tv = () => inputSelector("12");

  /** sets TAPE(1), TV/TAPE */
  export const tape1 = () => inputSelector("20");

  /** sets TAPE2 */
  export const tape2 = () => inputSelector("21");

  /** sets PHONO */
  export const phono = () => inputSelector("22");

  /** sets CD, TV/CD */
  export const cd = () => inputSelector("23");

  /** sets FM */
  export const fm = () => inputSelector("24");

  /** sets AM */
  export const am = () => inputSelector("25");

  /** sets TUNER */
  export const tuner = () => inputSelector("26");

  /** sets MUSIC SERVER, P4S, DLNA */
  export const musicServer = () => inputSelector("27");

  /** sets INTERNET RADIO, iRadio Favorite */
  export const internetRadio = () => inputSelector("28");

  /** sets USB/USB(Front) */
  export const usbFront = () => inputSelector("29");

  /** sets USB(Rear) */
  export const usbRear = () => inputSelector("2A");

  /** sets NETWORK, NET */
  export const network = () => inputSelector("2B");

  /** sets USB(toggle) */
  export const usbToggle = () => inputSelector("2C");

  /** sets Airplay */
  export const airplay = () => inputSelector("2D");

  /** sets Bluetooth */
  export const bluetooth = () => inputSelector("2E");

  /** sets MULTI CH */
  export const multiCh = () => inputSelector("30");

  /** sets XM */
  export const xm = () => inputSelector("31");

  /** sets SIRIUS */
  export const sirius = () => inputSelector("32");

  /** sets DAB  */
  export const dab = () => inputSelector("33");

  /** sets Universal PORT */
  export const universalPort = () => inputSelector("40");

  /** sets HDMI 5 */
  export const hdmi5 = () => inputSelector("55");

  /** sets HDMI 6 */
  export const hdmi6 = () => inputSelector("56");

  /** sets HDMI 7 */
  export const hdmi7 = () => inputSelector("57");

  /** sets Selector Position Wrap-Around Down */
  export const down = () => inputSelector("DOWN");

  /** gets The Selector Position */
  export const query = () => inputSelector("QSTN");

  /** sets Selector Position Wrap-Around Up */
  export const up = () => inputSelector("UP");
}

/**
 * SIRIUS Parental Lock Command (SIRIUS Model Only) (SLK)
 */
export function siriusParentalLock(value: string) {
  return new Packet("SLK", value);
}
export namespace siriusParentalLock {
  /** displays "Please input the Lock password" */
  export const input = () => siriusParentalLock("INPUT");

  /** displays "The Lock password is wrong" */
  export const wrong = () => siriusParentalLock("WRONG");
}

/**
 * Sleep Set Command (SLP)
 */
export function sleepSet(value: string) {
  return new Packet("SLP", value);
}
export namespace sleepSet {
  /** sets Sleep Time Off */
  export const timeOff = () => sleepSet("OFF");

  /** gets The Sleep Time */
  export const qstn = () => sleepSet("QSTN");

  /** sets Sleep Time Wrap-Around UP */
  export const up = () => sleepSet("UP");
}

/**
 * RECOUT Selector Command (SLR)
 */
export function recoutSelector(value: string) {
  return new Packet("SLR", value);
}
export namespace recoutSelector {
  /** sets VIDEO1 */
  export const video1 = () => recoutSelector("00");

  /** sets VIDEO2 */
  export const video2 = () => recoutSelector("01");

  /** sets VIDEO3 */
  export const video3 = () => recoutSelector("02");

  /** sets VIDEO4 */
  export const video4 = () => recoutSelector("03");

  /** sets VIDEO5 */
  export const video5 = () => recoutSelector("04");

  /** sets VIDEO6 */
  export const video6 = () => recoutSelector("05");

  /** sets VIDEO7 */
  export const video7 = () => recoutSelector("06");

  /** sets DVD */
  export const dvd = () => recoutSelector("10");

  /** sets TAPE(1) */
  export const tape = () => recoutSelector("20");

  /** sets TAPE2 */
  export const tape2 = () => recoutSelector("21");

  /** sets PHONO */
  export const phono = () => recoutSelector("22");

  /** sets CD */
  export const cd = () => recoutSelector("23");

  /** sets FM */
  export const fm = () => recoutSelector("24");

  /** sets AM */
  export const am = () => recoutSelector("25");

  /** sets TUNER */
  export const tuner = () => recoutSelector("26");

  /** sets MUSIC SERVER */
  export const musicServer = () => recoutSelector("27");

  /** sets INTERNET RADIO */
  export const internetRadio = () => recoutSelector("28");

  /** sets MULTI CH */
  export const multiCh = () => recoutSelector("30");

  /** sets XM */
  export const xm = () => recoutSelector("31");

  /** sets OFF */
  export const off = () => recoutSelector("7F");

  /** sets SOURCE */
  export const source = () => recoutSelector("80");

  /** gets The Selector Position */
  export const query = () => recoutSelector("QSTN");
}

/**
 * Speaker A Command (SPA)
 */
export function speakerA(value: string) {
  return new Packet("SPA", value);
}
export namespace speakerA {
  /** sets Speaker Off */
  export const off = () => speakerA("00");

  /** sets Speaker On */
  export const on = () => speakerA("01");

  /** gets the Speaker State */
  export const query = () => speakerA("QSTN");

  /** sets Speaker Switch Wrap-Around */
  export const up = () => speakerA("UP");
}

/**
 * Speaker B Command (SPB)
 */
export function speakerB(value: string) {
  return new Packet("SPB", value);
}
export namespace speakerB {
  /** sets Speaker Off */
  export const off = () => speakerB("00");

  /** sets Speaker On */
  export const on = () => speakerB("01");

  /** gets the Speaker State */
  export const query = () => speakerB("QSTN");

  /** sets Speaker Switch Wrap-Around */
  export const up = () => speakerB("UP");
}

/**
 * Speaker Distance Command (SPD)
 */
export function speakerDistance(value: string) {
  return new Packet("SPD", value);
}
export namespace speakerDistance {
  /** gets the Speaker Distance */
  export const query = () => speakerDistance("QSTN");
}

/**
 * Speaker Information (SPI)
 */
export function speakerInformation(value: string) {
  return new Packet("SPI", value);
}
export namespace speakerInformation {
  /** gets The Speaker Information */
  export const query = () => speakerInformation("QSTN");

  /** sets Speaker Information

a:Subwoofer 0:No,1:Yes/1ch,2:2ch
b:Front 1:Small,2:Large
c:Center 0:None,1:Small,2:Lage
d:Surround 0:None,1:Small,2:Lage
e:Surround Back 0:None,1:Small,2:Lage
f:Height 1 0:None,1:Small,2:Lage
g:Height 2 0:None,1:Small,2:Lage
hhh:Crossover 50,80,100,150,200
i:Height 1 Position 0:No,1:FH,2:TF,3:TM,4:TR,5:RH,6:DD SP(F),7:DD SP(S),8:DD SP(B)
j:Height 2 Position 0:No,1:FH,2:TF,3:TM,4:TR,5:RH,6:DD SP(F),7:DD SP(S),8:DD SP(B)
k:Bi-Amp 0:No,1:F,3:F+C,5:F+S,6:C+S,7:F+C+S */
  export const aSubwoofer0No = () => speakerInformation("abcdefghhhijk");
}

/**
 * Speaker Layout Command (SPL)
 */
export function speakerLayout(value: string) {
  return new Packet("SPL", value);
}
export namespace speakerLayout {
  /** sets Speakers A */
  export const speakersA = () => speakerLayout("A");

  /** sets Speakers A+B */
  export const speakersAB = () => speakerLayout("AB");

  /** sets Speakers B */
  export const speakersB = () => speakerLayout("B");

  /** sets Back+Height1 Speakers */
  export const backHeight1Speakers = () => speakerLayout("BH");

  /** sets Back+Wide Speakers */
  export const backWideSpeakers = () => speakerLayout("BW");

  /** sets Front High Speaker / SurrBack+Front High Speakers */
  export const frontHigh = () => speakerLayout("FH");

  /** sets Front Wide Speaker / SurrBack+Front Wide Speakers */
  export const frontWide = () => speakerLayout("FW");

  /** sets Height1 Speakers */
  export const height1Speakers = () => speakerLayout("H1");

  /** sets Height2 Speakers */
  export const height2Speakers = () => speakerLayout("H2");

  /** sets Height1+Height2 Speakers */
  export const height1Height2Speakers = () => speakerLayout("HH");

  /** sets, Front High+Front Wide Speakers */
  export const frontHighFrontWideSpeakers = () => speakerLayout("HW");

  /** gets the Speaker State */
  export const query = () => speakerLayout("QSTN");

  /** sets SurrBack Speaker */
  export const surrback = () => speakerLayout("SB");

  /** sets Speaker Switch Wrap-Around */
  export const up = () => speakerLayout("UP");
}

/**
 * Super Resolution (SPR)
 */
export function superResolution(value: string) {
  return new Packet("SPR", value);
}
export namespace superResolution {
  /** sets Super Resolution Wrap-Around DOWN */
  export const down = () => superResolution("DOWN");

  /** gets The Super Resolution State */
  export const query = () => superResolution("QSTN");

  /** sets Super Resolution Wrap-Around Up */
  export const up = () => superResolution("UP");
}

/**
 * SIRIUS Title Info (SIRIUS Model Only) (STI)
 */
export function siriusTitleInfo(value: string) {
  return new Packet("STI", value);
}
export namespace siriusTitleInfo {
  /** gets SIRIUS Title */
  export const query = () => siriusTitleInfo("QSTN");
}

/**
 * EQ for Standing Wave / Standing Wave (STW)
 */
export function eqForStandingWaveStandingWave(value: string) {
  return new Packet("STW", value);
}
export namespace eqForStandingWaveStandingWave {
  /** sets Standing Wave Off */
  export const off = () => eqForStandingWaveStandingWave("00");

  /** sets Standing Wave On */
  export const on = () => eqForStandingWaveStandingWave("01");

  /** gets The Standing Wave */
  export const query = () => eqForStandingWaveStandingWave("QSTN");

  /** sets Standing Wave Wrap-Around Up */
  export const up = () => eqForStandingWaveStandingWave("UP");
}

/**
 * Subwoofer 2 (temporary) Level Command (SW2)
 */
export function subwoofer2TemporaryLevel(value: string) {
  return new Packet("SW2", value);
}
export namespace subwoofer2TemporaryLevel {
  /** LEVEL – KEY */
  export const down = () => subwoofer2TemporaryLevel("DOWN");

  /** gets the Subwoofer Level */
  export const query = () => subwoofer2TemporaryLevel("QSTN");

  /** LEVEL + Key */
  export const up = () => subwoofer2TemporaryLevel("UP");
}

/**
 * Subwoofer (temporary) Level Command (SWL)
 */
export function subwooferTemporaryLevel(value: string) {
  return new Packet("SWL", value);
}
export namespace subwooferTemporaryLevel {
  /** LEVEL – KEY */
  export const down = () => subwooferTemporaryLevel("DOWN");

  /** gets the Subwoofer Level */
  export const query = () => subwooferTemporaryLevel("QSTN");

  /** LEVEL + Key */
  export const up = () => subwooferTemporaryLevel("UP");
}

/**
 * Temporary Channel Level Command (TCL)
 */
export function temporaryChannelLevel(value: string) {
  return new Packet("TCL", value);
}
export namespace temporaryChannelLevel {
  /** gets the Subwoofer Level */
  export const query = () => temporaryChannelLevel("QSTN");
}

/**
 * Tone(Center) Command (TCT)
 */
export function toneCenter(value: string) {
  return new Packet("TCT", value);
}
export namespace toneCenter {
  /** sets Center Bass down(2 step) */
  export const bassDown = () => toneCenter("BDOWN");

  /** sets Center Bass up(2 step) */
  export const bassUp = () => toneCenter("BUP");

  /** gets Cetner Tone ("BxxTxx") */
  export const query = () => toneCenter("QSTN");

  /** sets Center Treble down(2 step) */
  export const trebleDown = () => toneCenter("TDOWN");

  /** sets Center Treble up(2 step) */
  export const trebleUp = () => toneCenter("TUP");
}

/**
 * Tone(Front High) Command (TFH)
 */
export function toneFrontHigh(value: string) {
  return new Packet("TFH", value);
}
export namespace toneFrontHigh {
  /** sets Front High Bass down(2 step) */
  export const bassDown = () => toneFrontHigh("BDOWN");

  /** sets Front High Bass up(2 step) */
  export const bassUp = () => toneFrontHigh("BUP");

  /** gets Front High Tone ("BxxTxx") */
  export const query = () => toneFrontHigh("QSTN");

  /** sets Front High Treble down(2 step) */
  export const trebleDown = () => toneFrontHigh("TDOWN");

  /** sets Front High Treble up(2 step) */
  export const trebleUp = () => toneFrontHigh("TUP");
}

/**
 * Tone(Front) Command (TFR)
 */
export function toneFront(value: string) {
  return new Packet("TFR", value);
}
export namespace toneFront {
  /** sets Front Bass down(1 step) */
  export const bassDown = () => toneFront("BDOWN");

  /** sets Front Bass up(1 step) */
  export const bassUp = () => toneFront("BUP");

  /** gets Front Tone ("BxxTxx") */
  export const query = () => toneFront("QSTN");

  /** sets Front Treble down(1 step) */
  export const trebleDown = () => toneFront("TDOWN");

  /** sets Front Treble up(1 step) */
  export const trebleUp = () => toneFront("TUP");
}

/**
 * Tone(Front Wide) Command (TFW)
 */
export function toneFrontWide(value: string) {
  return new Packet("TFW", value);
}
export namespace toneFrontWide {
  /** sets Front Wide Bass down(2 step) */
  export const bassDown = () => toneFrontWide("BDOWN");

  /** sets Front Wide Bass up(2 step) */
  export const bassUp = () => toneFrontWide("BUP");

  /** gets Front Wide Tone ("BxxTxx") */
  export const query = () => toneFrontWide("QSTN");

  /** sets Front Wide Treble down(2 step) */
  export const trebleDown = () => toneFrontWide("TDOWN");

  /** sets Front Wide Treble up(2 step) */
  export const trebleUp = () => toneFrontWide("TUP");
}

/**
 * 12V Trigger A Command (TGA)
 */
export function triggerA(value: string) {
  return new Packet("TGA", value);
}
export namespace triggerA {
  /** sets 12V Trigger A Off */
  export const off = () => triggerA("00");

  /** sets 12V Trigger A On */
  export const on = () => triggerA("01");

  /** gets 12V Trigger A Status */
  export const query = () => triggerA("QSTN");
}

/**
 * 12V Trigger B Command (TGB)
 */
export function triggerB(value: string) {
  return new Packet("TGB", value);
}
export namespace triggerB {
  /** sets 12V Trigger B Off */
  export const off = () => triggerB("00");

  /** sets 12V Trigger B On */
  export const on = () => triggerB("01");

  /** gets 12V Trigger B Status */
  export const query = () => triggerB("QSTN");
}

/**
 * 12V Trigger C Command (TGC)
 */
export function triggerC(value: string) {
  return new Packet("TGC", value);
}
export namespace triggerC {
  /** sets 12V Trigger C Off */
  export const off = () => triggerC("00");

  /** sets 12V Trigger C On */
  export const on = () => triggerC("01");

  /** gets 12V Trigger C Status */
  export const query = () => triggerC("QSTN");
}

/**
 * TP Scan Command (RDS Model Only) (TPS)
 */
export function tpScan(value: string) {
  return new Packet("TPS", value);
}
export namespace tpScan {
  /** Start TP Scan (When Don't Have Parameter) */
  export const start = () => tpScan("");

  /** Finish TP Scan */
  export const stop = () => tpScan("ENTER");
}

/**
 * Tone(Surround Back) Command (TSB)
 */
export function toneSurroundBack(value: string) {
  return new Packet("TSB", value);
}
export namespace toneSurroundBack {
  /** sets Surround Back Bass down(2 step) */
  export const bassDown = () => toneSurroundBack("BDOWN");

  /** sets Surround Back Bass up(2 step) */
  export const bassUp = () => toneSurroundBack("BUP");

  /** gets Surround Back Tone ("BxxTxx") */
  export const query = () => toneSurroundBack("QSTN");

  /** sets Surround Back Treble down(2 step) */
  export const trebleDown = () => toneSurroundBack("TDOWN");

  /** sets Surround Back Treble up(2 step) */
  export const trebleUp = () => toneSurroundBack("TUP");
}

/**
 * Tone(Surround) Command (TSR)
 */
export function toneSurround(value: string) {
  return new Packet("TSR", value);
}
export namespace toneSurround {
  /** sets Surround Bass down(2 step) */
  export const bassDown = () => toneSurround("BDOWN");

  /** sets Surround Bass up(2 step) */
  export const bassUp = () => toneSurround("BUP");

  /** gets Surround Tone ("BxxTxx") */
  export const query = () => toneSurround("QSTN");

  /** sets Surround Treble down(2 step) */
  export const trebleDown = () => toneSurround("TDOWN");

  /** sets Surround Treble up(2 step) */
  export const trebleUp = () => toneSurround("TUP");
}

/**
 * Tone(Subwoofer) Command (TSW)
 */
export function toneSubwoofer(value: string) {
  return new Packet("TSW", value);
}
export namespace toneSubwoofer {
  /** sets Subwoofer Bass down(2 step) */
  export const bassDown = () => toneSubwoofer("BDOWN");

  /** sets Subwoofer Bass up(2 step) */
  export const bassUp = () => toneSubwoofer("BUP");

  /** gets Subwoofer Tone ("BxxTxx") */
  export const query = () => toneSubwoofer("QSTN");
}

/**
 * Tuning Command (Include Tuner Pack Model Only) (TUN)
 */
export function tuning(value: string) {
  return new Packet("TUN", value);
}
export namespace tuning {
  /** sets 0 in Direct Tuning Mode */
  export const direct0 = () => tuning("0");

  /** sets 1 in Direct Tuning Mode */
  export const direct1 = () => tuning("1");

  /** sets 2 in Direct Tuning Mode */
  export const direct2 = () => tuning("2");

  /** sets 3 in Direct Tuning Mode */
  export const direct3 = () => tuning("3");

  /** sets 4 in Direct Tuning Mode */
  export const direct4 = () => tuning("4");

  /** sets 5 in Direct Tuning Mode */
  export const direct5 = () => tuning("5");

  /** sets 6 in Direct Tuning Mode */
  export const direct6 = () => tuning("6");

  /** sets 7 in Direct Tuning Mode */
  export const direct7 = () => tuning("7");

  /** sets 8 in Direct Tuning Mode */
  export const direct8 = () => tuning("8");

  /** sets 9 in Direct Tuning Mode */
  export const direct9 = () => tuning("9");

  /** Change BAND */
  export const band = () => tuning("BAND");

  /** starts/restarts Direct Tuning Mode */
  export const direct = () => tuning("DIRECT");

  /** sets Tuning Frequency Wrap-Around Down */
  export const down = () => tuning("DOWN");

  /** gets The Tuning Frequency */
  export const query = () => tuning("QSTN");

  /** sets Tuning Frequency Wrap-Around Up */
  export const up = () => tuning("UP");
}

/**
 * Update (UPD)
 */
export function update(value: string) {
  return new Packet("UPD", value);
}
export namespace update {
  /** not exist new firmware */
  export const notExists = () => update("00");

  /** exist new firmware */
  export const exists = () => update("01");

  /** Device Update is completed */
  export const cmp = () => update("CMP");

  /** start Device Update via Network */
  export const net = () => update("NET");

  /** gets exist new firmware */
  export const query = () => update("QSTN");

  /** start Device Update via USB */
  export const usb = () => update("USB");
}

/**
 * Upsampling (UPS)
 */
export function upsampling(value: string) {
  return new Packet("UPS", value);
}
export namespace upsampling {
  /** sets Upsampling x1 */
  export const x1 = () => upsampling("00");

  /** sets Upsampling x2 */
  export const x2 = () => upsampling("01");

  /** sets Upsampling x4 */
  export const x4 = () => upsampling("02");

  /** gets The Upscaling State */
  export const query = () => upsampling("QSTN");

  /** sets Upsampling Wrap-Around */
  export const up = () => upsampling("UP");
}

/**
 * Video Output Selector (Japanese Model Only) (VOS)
 */
export function videoOutputSelector(value: string) {
  return new Packet("VOS", value);
}
export namespace videoOutputSelector {
  /** sets D4 */
  export const d4 = () => videoOutputSelector("00");

  /** sets Component */
  export const component = () => videoOutputSelector("01");

  /** gets The Selector Position */
  export const query = () => videoOutputSelector("QSTN");
}

/**
 * Video Picture Mode (VPM)
 */
export function videoPictureMode(value: string) {
  return new Packet("VPM", value);
}
export namespace videoPictureMode {
  /** sets Through, Standard */
  export const through = () => videoPictureMode("00");

  /** sets Custom */
  export const custom = () => videoPictureMode("01");

  /** sets Cinema */
  export const cinema = () => videoPictureMode("02");

  /** sets Game */
  export const game = () => videoPictureMode("03");

  /** sets ISF Day */
  export const isfDay = () => videoPictureMode("05");

  /** sets ISF Night */
  export const isfNight = () => videoPictureMode("06");

  /** sets Streaming */
  export const streaming = () => videoPictureMode("07");

  /** sets Direct, Bypass */
  export const direct = () => videoPictureMode("08");

  /** gets Video Zoom Mode */
  export const query = () => videoPictureMode("QSTN");

  /** sets Video Zoom Mode Wrap-Around Up */
  export const up = () => videoPictureMode("UP");
}

/**
 * Video Wide Mode (VWM)
 */
export function videoWideMode(value: string) {
  return new Packet("VWM", value);
}
export namespace videoWideMode {
  /** sets Auto */
  export const auto = () => videoWideMode("00");

  /** sets Full */
  export const full = () => videoWideMode("02");

  /** sets Zoom */
  export const zoom = () => videoWideMode("03");

  /** sets Wide Zoom */
  export const wideZoom = () => videoWideMode("04");

  /** sets Smart Zoom */
  export const smartZoom = () => videoWideMode("05");

  /** gets Video Zoom Mode */
  export const query = () => videoWideMode("QSTN");

  /** sets Video Zoom Mode Wrap-Around Up */
  export const up = () => videoWideMode("UP");
}

/**
 * XM Artist Name Info (XM Model Only) (XAT)
 */
export function xmArtistNameInfo(value: string) {
  return new Packet("XAT", value);
}
export namespace xmArtistNameInfo {
  /** gets XM Artist Name */
  export const query = () => xmArtistNameInfo("QSTN");
}

/**
 * XM Channel Number Command (XM Model Only) (XCH)
 */
export function xmChannelNumber(value: string) {
  return new Packet("XCH", value);
}
export namespace xmChannelNumber {
  /** sets XM Channel Wrap-Around Down */
  export const down = () => xmChannelNumber("DOWN");

  /** gets XM Channel Number */
  export const query = () => xmChannelNumber("QSTN");

  /** sets XM Channel Wrap-Around Up */
  export const up = () => xmChannelNumber("UP");
}

/**
 * XM Channel Name Info (XM Model Only) (XCN)
 */
export function xmChannelNameInfo(value: string) {
  return new Packet("XCN", value);
}
export namespace xmChannelNameInfo {
  /** gets XM Channel Name */
  export const query = () => xmChannelNameInfo("QSTN");
}

/**
 * XM Category Command (XM Model Only) (XCT)
 */
export function xmCategory(value: string) {
  return new Packet("XCT", value);
}
export namespace xmCategory {
  /** sets XM Category Wrap-Around Down */
  export const down = () => xmCategory("DOWN");

  /** gets XM Category */
  export const query = () => xmCategory("QSTN");

  /** sets XM Category Wrap-Around Up */
  export const up = () => xmCategory("UP");
}

/**
 * XM Title Info (XM Model Only) (XTI)
 */
export function xmTitleInfo(value: string) {
  return new Packet("XTI", value);
}
export namespace xmTitleInfo {
  /** gets XM Title */
  export const query = () => xmTitleInfo("QSTN");
}
