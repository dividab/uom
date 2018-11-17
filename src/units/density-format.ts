import { createUnitFormat } from "../format";
import * as Density from "./density";

// tslint:disable:variable-name

// Density
export const KilogramPerCubicMeter = createUnitFormat("kg/m³", "SI", 2);

export const GramPerCubicCentiMeter = createUnitFormat("g/cm³", "SI", 2);

export const SlugPerCubicFeet = createUnitFormat(
  "slug/ft³",
  "IP",
  3,
  Density.GramPerCubicCentiMeter
);

export const PoundPerCubicFoot = createUnitFormat(
  "lb/ft³",
  "IP",
  3,
  Density.GramPerCubicCentiMeter
);
