import { BaseUnits } from "../../core";
import { Inch, Foot, Millimeter, CentiMeter, Decimeter } from "./length";
import { Squared } from "../unit-squared";

export type Area = "Area";

/** The metric unit for area quantities ( <code>m²</code> ). */
export const SquareMeter = Squared("SquareMeter", BaseUnits.Meter);

/// Area
export const SquareInch = Squared("SquareInch", Inch);
export const SquareFeet = Squared("SquareFeet", Foot);
export const SquareMillimeter = Squared("SquareMillimeter", Millimeter);
export const SquareCentimeter = Squared("SquareCentimeter", CentiMeter);
export const SquareDecimeter = Squared("SquareDecimeter", Decimeter);
