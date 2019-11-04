import { Unit, UnitPrefix, BaseUnits } from "../../core";
import { CentiMeter, Inch, Foot } from "./length";

export type Volume = "Volume";

/** The metric unit for volume quantities ( <code>m³</code> ). */
export const CubicMeter = UnitPrefix.Cubed("CubicMeter", BaseUnits.Meter);

// Volume
export const CubicCentiMeter = UnitPrefix.Cubed("CubicCentiMeter", CentiMeter);
export const CubicInch = UnitPrefix.Cubed("CubicInch", Inch);
export const CubicFeet = UnitPrefix.Cubed("CubicFeet", Foot);
export const HundredCubicFeet = Unit.timesNumber(
  "HundredCubicFeet",
  100.0,
  CubicFeet
);
export const Liter = Unit.divideNumber("Liter", 1000.0, CubicMeter);
export const MilliLiter = UnitPrefix.Milli("MilliLiter", Liter);
export const Gallon = Unit.timesNumber("Gallon", 3.785, Liter);
