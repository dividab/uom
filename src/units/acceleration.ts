import * as UnitDivide from "../unit-divide";
import { MeterPerSecond } from "./velocity";
import { Second } from "./base-units";

export type Acceleration = "Acceleration";

// tslint:disable:variable-name

/** The metric unit for acceleration quantities ( <code>m/s²</code> ). */
export const MeterPerSquareSecond = UnitDivide.velocityBySecond(
  "MeterPerSquareSecond",
  MeterPerSecond,
  Second
);
