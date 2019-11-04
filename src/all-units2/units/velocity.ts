// import { Meter, Second } from "./base-units";
import { BaseUnits } from "../../core";
import * as UnitDivide from "../unit-divide";
import { Foot, Mile, Kilometer } from "./length";
import { Minute, Hour } from "./duration";

export type Velocity = "Velocity";

/** The metric unit for velocity quantities ( <code>m/s</code> ). */
export const MeterPerSecond = UnitDivide.lengthByDuration(
  "MeterPerSecond",
  BaseUnits.Meter,
  BaseUnits.Second
);

// Velocity
export const FeetPerSecond = UnitDivide.lengthByDuration(
  "FeetPerSecond",
  Foot,
  BaseUnits.Second
);
export const FeetPerMinute = UnitDivide.lengthByDuration(
  "FeetPerMinute",
  Foot,
  Minute
);
export const MilesPerHour = UnitDivide.lengthByDuration(
  "MilesPerHour",
  Mile,
  Hour
);
export const KilometerPerHour = UnitDivide.lengthByDuration(
  "KilometerPerHour",
  Kilometer,
  Hour
);
export const MeterPerHour = UnitDivide.lengthByDuration(
  "MeterPerHour",
  BaseUnits.Meter,
  Hour
);
