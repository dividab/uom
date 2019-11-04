import { BaseUnits } from "../../core";
import * as UnitDivide from "../unit-divide";
import { CubicMeter, CubicCentiMeter, CubicFeet } from "./volume";
import { Gram, Slug, PoundLb } from "./mass";

export type Density = "Density";

// Density
export const KilogramPerCubicMeter = UnitDivide.massByVolume(
  "KilogramPerCubicMeter",
  BaseUnits.Kilogram,
  CubicMeter
);
export const GramPerCubicCentiMeter = UnitDivide.massByVolume(
  "GramPerCubicCentiMeter",
  Gram,
  CubicCentiMeter
);
export const SlugPerCubicFeet = UnitDivide.massByVolume(
  "SlugPerCubicFeet",
  Slug,
  CubicFeet
);
export const PoundPerCubicFoot = UnitDivide.massByVolume(
  "PoundPerCubicFoot",
  PoundLb,
  CubicFeet
);
