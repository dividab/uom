import * as UnitDivide from "../unit-divide";
import { Meter, Second } from "./base-units";
import { Foot, Mile, Kilometer } from "./length";
import { Minute, Hour } from "./duration";

export type Velocity = "Velocity";

// tslint:disable:variable-name

/** The metric unit for velocity quantities ( <code>m/s</code> ). */
export const MeterPerSecond = UnitDivide.lengthByDuration(
  "MeterPerSecond",
  Meter,
  Second
);

// Velocity
export const FeetPerSecond = UnitDivide.lengthByDuration(
  "FeetPerSecond",
  Foot,
  Second
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
  Meter,
  Hour
);
