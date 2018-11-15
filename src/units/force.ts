import * as UnitTimes from "../unit-times";
import { Kilogram } from "./base-units";
import { MeterPerSquareSecond } from "./acceleration";

// tslint:disable:variable-name

/**
 * The derived unit for force ( <code>N</code> ).
 * One newton is the force required to give a mass of 1 kilogram an Force of 1 metre per second per second.
 * It is named after the English mathematician and physicist Sir Isaac Newton (1642-1727).
 */
export const Newton = UnitTimes.massByAcceleration(
  "Newton",
  Kilogram,
  MeterPerSquareSecond
);
