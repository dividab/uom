import * as UnitDivide from "../unit-divide";
import { Kilojoule, Btu } from "./energy";
import { KiloWattHour } from "./energy2";
import { CubicMeter, CubicFeet } from "./volume";

export type HeatingValue = "HeatingValue";

// Energy per volume
export const KiloWattHourPerCubicMeter = UnitDivide.energyByVolume(
  "KiloWattHourPerCubicMeter",
  KiloWattHour,
  CubicMeter
);

export const KiloJoulePerCubicMeter = UnitDivide.energyByVolume(
  "KiloJoulePerCubicMeter",
  Kilojoule,
  CubicMeter
);

export const BtuPerCubicFeet = UnitDivide.energyByVolume(
  "BtuPerCubicFeet",
  Btu,
  CubicFeet
);
