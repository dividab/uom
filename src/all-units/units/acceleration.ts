import * as BaseUnits from "../../core/base-units";
import * as UnitDivide from "../unit-divide";
import { MeterPerSecond } from "./velocity";

export type Acceleration = "Acceleration";

/** The metric unit for acceleration quantities ( <code>m/s²</code> ). */
export const MeterPerSquareSecond = UnitDivide.velocityBySecond(
  "MeterPerSquareSecond",
  MeterPerSecond,
  BaseUnits.Second
);
