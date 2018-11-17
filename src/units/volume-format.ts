import { createUnitFormat } from "../format";
import * as Volume from "./volume";

// tslint:disable:variable-name

export const CubicMeter = createUnitFormat("m³", "SI", 2, Volume.CubicFeet);

// Volume
export const CubicCentiMeter = createUnitFormat("cm³", "SI", 2);

export const CubicInch = createUnitFormat("in³", "IP", 2);
export const CubicFeet = createUnitFormat("ft³", "IP", 0, Volume.Liter);

export const HundredCubicFeet = createUnitFormat("100 ft³", "IP", 2);

export const Liter = createUnitFormat("L", "SI", 2, Volume.Gallon);

export const MilliLiter = createUnitFormat("ml", "SI", 0);

export const Gallon = createUnitFormat("gal", "IP", 1, Volume.Liter);
