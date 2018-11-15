import * as Unit from "../unit";
import { Cubed, Milli } from "../unit-prefix";
import { Meter } from "./base-units";
import { CentiMeter, Inch, Foot } from "./length";

// tslint:disable:variable-name

/** The metric unit for volume quantities ( <code>m³</code> ). */
export const CubicMeter = Cubed("CubicMeter", Meter);

// Volume
export const CubicCentiMeter = Cubed("CubicCentiMeter", CentiMeter);
export const CubicInch = Cubed("CubicInch", Inch);
export const CubicFeet = Cubed("CubicFeet", Foot);
export const HundredCubicFeet = Unit.timesNumber(
  "HundredCubicFeet",
  100.0,
  CubicFeet
);
export const Liter = Unit.divideNumber("Liter", 1000.0, CubicMeter);
export const MilliLiter = Milli("MilliLiter", Liter);
export const Gallon = Unit.timesNumber("Gallon", 3.785, Liter);
