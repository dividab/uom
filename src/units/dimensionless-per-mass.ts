import * as UnitDivide from "../unit-divide";
import { Kilogram } from "./base-units";
import { One } from "../unit";
import { PoundLb } from "./mass";

export type DimensionlessPerMass = "DimensionlessPerMass";

// Per mass
export const OnePerKilogram = UnitDivide.dimensionlessByMass(
  "OnePerKilogram",
  One,
  Kilogram
);

export const OnePerPoundLb = UnitDivide.dimensionlessByMass(
  "OnePerPoundLb",
  One,
  PoundLb
);
