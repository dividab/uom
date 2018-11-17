import * as UnitDivide from "../unit-divide";
import { GallonsPerMinute, LiterPerSecond } from "./volume-flow";
import { TonCooling, KiloWatt } from "./power";

// tslint:disable:variable-name

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
