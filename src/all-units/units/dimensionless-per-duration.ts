import * as UnitDivide from "../unit-divide";
import { Unit, BaseUnits } from "../../core";
import { Hour } from "./duration";

export type DimensionlessPerDuration = "DimensionlessPerDuration";

// Per Duration
export const OnePerHour = UnitDivide.dimensionlessByDuration(
  "OnePerHour",
  Unit.One,
  Hour
);
export const OnePerSecond = UnitDivide.dimensionlessByDuration(
  "OnePerSecond",
  Unit.One,
  BaseUnits.Second
);
