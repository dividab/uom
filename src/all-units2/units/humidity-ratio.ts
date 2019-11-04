import { BaseUnits } from "../../core";
import * as UnitDivide from "../unit-divide";
import { Gram, PoundLb, Grain } from "./mass";

export type HumidityRatio = "HumidityRatio";

// Humidity
export const KilogramPerKilogram = UnitDivide.massByMass(
  "KilogramPerKilogram",
  BaseUnits.Kilogram,
  BaseUnits.Kilogram
);
export const GramPerKilogram = UnitDivide.massByMass(
  "GramPerKilogram",
  Gram,
  BaseUnits.Kilogram
);
export const PoundLbPerPoundLb = UnitDivide.massByMass(
  "PoundLbPerPoundLb",
  PoundLb,
  PoundLb
);
export const GrainPerPoundLb = UnitDivide.massByMass(
  "GrainPerPoundLb",
  Grain,
  PoundLb
);
export const GramPerPoundLb = UnitDivide.massByMass(
  "GramPerPoundLb",
  Gram,
  PoundLb
);
