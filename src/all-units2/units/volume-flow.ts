import { BaseUnits } from "../../core";
import * as UnitDivide from "../unit-divide";
import {
  CubicMeter,
  CubicFeet,
  HundredCubicFeet,
  Liter,
  Gallon
} from "./volume";
import { Hour, Minute } from "./duration";

export type VolumeFlow = "VolumeFlow";

// VolumeFlow
export const CubicMeterPerSecond = UnitDivide.volumeByDuration(
  "CubicMeterPerSecond",
  CubicMeter,
  BaseUnits.Second
);
export const CubicMeterPerHour = UnitDivide.volumeByDuration(
  "CubicMeterPerHour",
  CubicMeter,
  Hour
);
export const CubicFeetPerMinute = UnitDivide.volumeByDuration(
  "CubicFeetPerMinute",
  CubicFeet,
  Minute
);
export const CubicFeetPerHour = UnitDivide.volumeByDuration(
  "CubicFeetPerHour",
  CubicFeet,
  Hour
);
export const HundredCubicFeetPerHour = UnitDivide.volumeByDuration(
  "HundredCubicFeetPerHour",
  HundredCubicFeet,
  Hour
);
export const LiterPerSecond = UnitDivide.volumeByDuration(
  "LiterPerSecond",
  Liter,
  BaseUnits.Second
);
export const LiterPerMinute = UnitDivide.volumeByDuration(
  "LiterPerMinute",
  Liter,
  Minute
);
export const LiterPerHour = UnitDivide.volumeByDuration(
  "LiterPerHour",
  Liter,
  Hour
);
export const GallonsPerMinute = UnitDivide.volumeByDuration(
  "GallonsPerMinute",
  Gallon,
  Minute
);
export const GallonsPerHour = UnitDivide.volumeByDuration(
  "GallonsPerHour",
  Gallon,
  Hour
);
