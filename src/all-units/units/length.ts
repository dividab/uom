import { Unit, UnitPrefix } from "../../core";
import { Meter } from "./base-units";

/** Equivalent to <code>KILO(METER)</code>. */
export const Kilometer = UnitPrefix.Kilo("Kilometer", Meter);

export type Length = "Length";

/** Equivalent to <code>CENTI(METRE)</code>. */
export const CentiMeter = UnitPrefix.Centi("CentiMeter", Meter);

/** Equivalent to <code>MILLI(METRE)</code>. */
export const Millimeter = UnitPrefix.Milli("Millimeter", Meter);

// Length
export const Foot = Unit.timesNumber("Foot", 0.3048, Meter);
export const Yard = Unit.timesNumber("Yard", 3.0, Foot);
export const Inch = Unit.divideNumber("Inch", 12.0, Foot);
export const Mile = Unit.timesNumber("Mile", 5280.0, Foot);
export const Decimeter = UnitPrefix.Deci("Decimeter", Meter);