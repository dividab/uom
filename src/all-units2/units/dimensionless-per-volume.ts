import * as UnitDivide from "../unit-divide";
import { Liter, CubicMeter, Gallon, HundredCubicFeet } from "./volume";
import { Unit } from "../../core";

export type DimensionlessPerVolume = "DimensionlessPerVolume";

// Per Volume
export const OnePerLiter = UnitDivide.dimensionlessByVolume(
  "OnePerLiter",
  Unit.One,
  Liter
);
export const OnePerCubicMeter = UnitDivide.dimensionlessByVolume(
  "OnePerCubicMeter",
  Unit.One,
  CubicMeter
);
export const OnePerGallon = UnitDivide.dimensionlessByVolume(
  "OnePerGallon",
  Unit.One,
  Gallon
);
export const OnePerHundredCubicFeet = UnitDivide.dimensionlessByVolume(
  "OnePerHundredCubicFeet",
  Unit.One,
  HundredCubicFeet
);
