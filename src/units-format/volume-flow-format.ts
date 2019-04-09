import { createUnitFormat } from "../unit-format";

// tslint:disable:variable-name

// VolumeFlow
export const CubicMeterPerSecond = createUnitFormat("m³/s", 2);
export const CubicMeterPerHour = createUnitFormat("m³/h", 1);
export const CubicFeetPerMinute = createUnitFormat("ACFM", 1);
export const CubicFeetPerHour = createUnitFormat("ACFH", 0);
export const HundredCubicFeetPerHour = createUnitFormat("cch", 0);
export const LiterPerSecond = createUnitFormat("l/s", 3);
export const LiterPerMinute = createUnitFormat("l/m", 2);
export const LiterPerHour = createUnitFormat("l/h", 2);
export const GallonsPerMinute = createUnitFormat("gal/min", 1);
export const GallonsPerHour = createUnitFormat("gal/h", 2);
