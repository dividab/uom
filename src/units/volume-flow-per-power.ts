import * as UnitDivide from "../unit-divide";
import { GallonsPerMinute, LiterPerSecond } from "./volume-flow";
import { TonCooling, KiloWatt } from "./power";

export type VolumeFlowPerPower = "VolumeFlowPerPower";

// Volume flow per cooling power
export const GallonsPerMinutePerTonCooling = UnitDivide.volumeFlowByPower(
  "GallonsPerMinutePerTonCooling",
  GallonsPerMinute,
  TonCooling
);
export const LiterPerSecondPerKiloWatt = UnitDivide.volumeFlowByPower(
  "LiterPerSecondPerKiloWatt",
  LiterPerSecond,
  KiloWatt
);
