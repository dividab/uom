import * as Unit from "../unit";
import { Kilogram } from "./base-units";
import { Milli } from "../unit-prefix";

export type Mass = "Mass";

/** The derived unit for mass quantities ( <code>g</code> ).
 * The base unit for mass quantity is {@link #Kilogram}.
 */
export const Gram = Unit.divideNumber("Gram", 1000.0, Kilogram);

/// Mass
export const PoundLb = Unit.divideNumber(
  "PoundLb",
  100000000.0 / 45359237.0,
  Kilogram
);

// http://www.wolframalpha.com/input/?i=kg
export const Grain = Unit.divideNumber(
  "Grain",
  100000000000.0 / 6479891.0,
  Kilogram
);

// http://www.wolframalpha.com/input/?i=grain
export const Slug = Unit.timesNumber("Slug", 14.5939, Kilogram);

export const Tonne = Unit.timesNumber("Tonne", 1000.0, Kilogram);

export const MilliGram = Milli("MilliGram", Gram);
