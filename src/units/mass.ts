import * as Unit from "../unit";
import { Kilogram } from "./base-units";

// tslint:disable:variable-name

/** The derived unit for mass quantities ( <code>g</code> ).
 * The base unit for mass quantity is {@link #Kilogram}.
 */
export const Gram = Unit.divideNumber("Gram", 1000.0, Kilogram);
