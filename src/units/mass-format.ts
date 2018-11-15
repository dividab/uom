import { createUnitFormat } from "../unit-registry";

// tslint:disable:variable-name

/** The derived unit for mass quantities ( <code>g</code> ).
 * The base unit for mass quantity is {@link #Kilogram}.
 */
export const Gram = createUnitFormat("g", "SI", 2, Grain);
