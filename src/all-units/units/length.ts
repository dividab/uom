import { Unit, UnitPrefix, BaseUnits } from "../../core";

/** Equivalent to <code>KILO(METER)</code>. */
export const Kilometer = UnitPrefix.Kilo("Kilometer", BaseUnits.Meter);

export type Length = "Length";

/** Equivalent to <code>CENTI(METRE)</code>. */
export const CentiMeter = UnitPrefix.Centi("CentiMeter", BaseUnits.Meter);

/** Equivalent to <code>MILLI(METRE)</code>. */
export const Millimeter = UnitPrefix.Milli("Millimeter", BaseUnits.Meter);

// Length
export const Foot = Unit.timesNumber("Foot", 0.3048, BaseUnits.Meter);
export const Yard = Unit.timesNumber("Yard", 3.0, Foot);
export const Inch = Unit.divideNumber("Inch", 12.0, Foot);
export const Mile = Unit.timesNumber("Mile", 5280.0, Foot);
export const Decimeter = UnitPrefix.Deci("Decimeter", BaseUnits.Meter);
