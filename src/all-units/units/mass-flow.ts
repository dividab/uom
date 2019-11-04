import { Unit, BaseUnits } from "../../core";
import * as UnitDivide from "../unit-divide";
// import { Second, Kilogram } from "./base-units";
import { Gram, Slug, PoundLb, Grain } from "./mass";
import { Hour } from "./duration";

export type MassFlow = "MassFlow";

// MassFlow
export const KilogramPerSecond = UnitDivide.massByDuration(
  "KilogramPerSecond",
  BaseUnits.Kilogram,
  BaseUnits.Second
);
export const GramPerSecond = UnitDivide.massByDuration(
  "GramPerSecond",
  Gram,
  BaseUnits.Second
);
export const GramPerHour = UnitDivide.massByDuration("GramPerHour", Gram, Hour);
export const KilogramPerHour = UnitDivide.massByDuration(
  "KilogramPerHour",
  BaseUnits.Kilogram,
  Hour
);
export const SlugPerSecond = UnitDivide.massByDuration(
  "SlugPerSecond",
  Slug,
  BaseUnits.Second
);
export const SlugPerHour = UnitDivide.massByDuration("SlugPerHour", Slug, Hour);
export const PoundLbPerHour = UnitDivide.massByDuration(
  "PoundLbPerHour",
  PoundLb,
  Hour
);
export const PoundLbPerSecond = UnitDivide.massByDuration(
  "PoundLbPerSecond",
  PoundLb,
  BaseUnits.Second
);

export const GrainPerHour = UnitDivide.massByDuration(
  "GrainPerHour",
  Grain,
  Hour
);

export const GrainPerSecond = UnitDivide.massByDuration(
  "GrainPerSecond",
  Grain,
  BaseUnits.Second
);

export const StandardCubicMeterPerHour = Unit.timesNumber(
  "StandardCubicMeterPerHour",
  1.2041,
  KilogramPerHour
);
export const StandardCubicFeetPerMinute = Unit.timesNumber(
  "StandardCubicFeetPerMinute",
  0.02831684660923049289319782819867,
  Unit.timesNumber("", 60.0, StandardCubicMeterPerHour)
);
export const StandardCubicMeterPerSecond = Unit.timesNumber(
  "StandardCubicMeterPerSecond",
  3600.0,
  StandardCubicMeterPerHour
);
export const StandardLiterPerSecond = Unit.timesNumber(
  "StandardLiterPerSecond",
  3600 / 1000,
  StandardCubicMeterPerHour
);
