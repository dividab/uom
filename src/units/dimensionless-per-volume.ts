import * as UnitDivide from "../unit-divide";
import { Liter, CubicMeter, Gallon, HundredCubicFeet } from "./volume";
import { One } from "../unit";

export type DimensionlessPerVolume = "DimensionlessPerVolume";

// Per Volume
export const OnePerLiter = UnitDivide.dimensionlessByVolume(
  "OnePerLiter",
  One,
  Liter
);
export const OnePerCubicMeter = UnitDivide.dimensionlessByVolume(
  "OnePerCubicMeter",
  One,
  CubicMeter
);
export const OnePerGallon = UnitDivide.dimensionlessByVolume(
  "OnePerGallon",
  One,
  Gallon
);
export const OnePerHundredCubicFeet = UnitDivide.dimensionlessByVolume(
  "OnePerHundredCubicFeet",
  One,
  HundredCubicFeet
);
