import { UnitPrefix, BaseUnits } from "../../core";
import { Inch, Foot, Millimeter, CentiMeter, Decimeter } from "./length";

export type Area = "Area";

/** The metric unit for area quantities ( <code>m²</code> ). */
export const SquareMeter = UnitPrefix.Squared("SquareMeter", BaseUnits.Meter);

/// Area
export const SquareInch = UnitPrefix.Squared("SquareInch", Inch);
export const SquareFeet = UnitPrefix.Squared("SquareFeet", Foot);
export const SquareMillimeter = UnitPrefix.Squared(
  "SquareMillimeter",
  Millimeter
);
export const SquareCentimeter = UnitPrefix.Squared(
  "SquareCentimeter",
  CentiMeter
);
export const SquareDecimeter = UnitPrefix.Squared("SquareDecimeter", Decimeter);
