import * as UnitDivide from "../unit-divide";
import { Kilogram } from "./base-units";
import { CubicMeter, CubicCentiMeter, CubicFeet } from "./volume";
import { Gram, Slug, PoundLb } from "./mass";

// tslint:disable:variable-name

// Density
export const KilogramPerCubicMeter = UnitDivide.massByVolume(
  "KilogramPerCubicMeter",
  Kilogram,
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
