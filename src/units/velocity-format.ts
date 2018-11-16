import { createUnitFormat } from "../unit-registry";
import * as Velocity from "./velocity";

// tslint:disable:variable-name

/** The metric unit for velocity quantities ( <code>m/s</code> ). */
export const MeterPerSecond = createUnitFormat("m/s", "SI", 0);

// Velocity
export const FeetPerSecond = createUnitFormat(
  "ft/s",
  "IP",
  0,
  Velocity.MeterPerSecond
);

export const FeetPerMinute = createUnitFormat(
  "ft/min",
  "IP",
  0,
  Velocity.CubicMeterPerHour
);

export const MilesPerHour = createUnitFormat(
  "mph",
  "IP",
  0,
  Velocity.KilometerPerHour
);

export const KilometerPerHour = createUnitFormat(
  "km/h",
  "SI",
  0,
  Velocity.MilesPerHour
);

export const MeterPerHour = createUnitFormat(
  "m/h",
  "SI",
  0,
  Velocity.FeetPerMinute
);
