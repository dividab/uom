import { Unit } from "../../core";
import * as UnitDivide from "../unit-divide";
import { Kilogram } from "./base-units";
import { PoundLb } from "./mass";

export type DimensionlessPerMass = "DimensionlessPerMass";

// Per mass
export const OnePerKilogram = UnitDivide.dimensionlessByMass(
  "OnePerKilogram",
  Unit.One,
  Kilogram
);

export const OnePerPoundLb = UnitDivide.dimensionlessByMass(
  "OnePerPoundLb",
  Unit.One,
  PoundLb
);
