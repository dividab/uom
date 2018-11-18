import { Squared } from "../unit-prefix";
import { Meter } from "./base-units";
import { Inch, Foot, Millimeter, CentiMeter, Decimeter } from "./length";

export type Area = "Area";

// tslint:disable:variable-name

/** The metric unit for area quantities ( <code>m²</code> ). */
export const SquareMeter = Squared("SquareMeter", Meter);

/// Area
export const SquareInch = Squared("SquareInch", Inch);
export const SquareFeet = Squared("SquareFeet", Foot);
export const SquareMillimeter = Squared("SquareMillimeter", Millimeter);
export const SquareCentimeter = Squared("SquareCentimeter", CentiMeter);
export const SquareDecimeter = Squared("SquareDecimeter", Decimeter);
