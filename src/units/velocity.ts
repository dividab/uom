import * as UnitDivide from "../unit-divide";
import { Meter, Second } from "./base-units";

// tslint:disable:variable-name

/** The metric unit for velocity quantities ( <code>m/s</code> ). */
export const MeterPerSecond = UnitDivide.lengthByDuration(
  "MeterPerSecond",
  Meter,
  Second
);
