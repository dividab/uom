import * as UnitDivide from "../unit-divide";
import { Second } from "./base-units";
import { One } from "../unit";
import { Hour } from "./duration";

export type DimensionlessPerDuration = "DimensionlessPerDuration";

// Per Duration
export const OnePerHour = UnitDivide.dimensionlessByDuration(
  "OnePerHour",
  One,
  Hour
);
export const OnePerSecond = UnitDivide.dimensionlessByDuration(
  "OnePerSecond",
  One,
  Second
);
