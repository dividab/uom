import { Kilo, Centi, Milli } from "../unit-prefix";
import { Meter } from "./base-units";

// tslint:disable:variable-name

/** Equivalent to <code>KILO(METER)</code>. */
export const Kilometer = Kilo("Kilometer", Meter);

/** Equivalent to <code>CENTI(METRE)</code>. */
export const CentiMeter = Centi("CentiMeter", Meter);

/** Equivalent to <code>MILLI(METRE)</code>. */
export const Millimeter = Milli("Millimeter", Meter);
