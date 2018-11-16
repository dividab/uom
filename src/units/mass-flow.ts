import * as UnitDivide from "../unit-divide";
import * as Unit from "../unit";
import { Second, Kilogram } from "./base-units";
import { Gram, Slug, PoundLb, Grain } from "./mass";
import { Hour } from "./duration";

// tslint:disable:variable-name

// MassFlow
export const KilogramPerSecond = UnitDivide.massByDuration(
  "KilogramPerSecond",
  Kilogram,
  Second
);
export const GramPerSecond = UnitDivide.massByDuration(
  "GramPerSecond",
  Gram,
  Second
);
export const GramPerHour = UnitDivide.massByDuration("GramPerHour", Gram, Hour);
export const KilogramPerHour = UnitDivide.massByDuration(
  "KilogramPerHour",
  Kilogram,
  Hour
);
export const SlugPerSecond = UnitDivide.massByDuration(
  "SlugPerSecond",
  Slug,
  Second
);
export const SlugPerHour = UnitDivide.massByDuration("SlugPerHour", Slug, Hour);
export const PoundLbPerHour = UnitDivide.massByDuration(
  "PoundLbPerHour",
  PoundLb,
  Hour
);
export const GrainPerHour = UnitDivide.massByDuration(
  "GrainPerHour",
  Grain,
  Hour
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
  3600.0 * 1000,
  StandardCubicMeterPerHour
);
