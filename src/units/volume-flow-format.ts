import { createUnitFormat } from "../unit-registry";
import * as VolumeFlow from "./volume-flow";

// tslint:disable:variable-name

// VolumeFlow
export const CubicMeterPerSecond = createUnitFormat(
  "m³/s",
  "SI",
  2,
  VolumeFlow.CubicFeetPerMinute
);

export const CubicMeterPerHour = createUnitFormat(
  "m³/h",
  "SI",
  1,
  VolumeFlow.CubicFeetPerMinute
);

export const CubicFeetPerMinute = createUnitFormat(
  "acfm",
  "IP",
  1,
  VolumeFlow.CubicMeterPerHour
);

export const CubicFeetPerHour = createUnitFormat(
  "acfh",
  "IP",
  0,
  VolumeFlow.LiterPerHour
);

export const HundredCubicFeetPerHour = createUnitFormat("cch", "IP", 0);

export const LiterPerSecond = createUnitFormat(
  "l/s",
  "SI",
  3,
  VolumeFlow.GallonsPerMinute
);

export const LiterPerMinute = createUnitFormat(
  "l/m",
  "SI",
  2,
  VolumeFlow.GallonsPerMinute
);

export const LiterPerHour = createUnitFormat(
  "l/h",
  "SI",
  2,
  VolumeFlow.GallonsPerHour
);

export const GallonsPerMinute = createUnitFormat(
  "gal/min",
  "IP",
  1,
  VolumeFlow.LiterPerMinute
);

export const GallonsPerHour = createUnitFormat("gal/h", "IP", 2);
