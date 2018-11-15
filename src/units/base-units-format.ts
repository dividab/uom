import * as Units from "../units";
import { createUnitFormat } from "../unit-registry";

// tslint:disable:variable-name

export const Ampere = createUnitFormat("A", "SI", 2);
export const Candela = createUnitFormat("cd", "SI", 0);
export const Kelvin = createUnitFormat("K", "SI", 2);
export const Kilogram = createUnitFormat("kg", "SI", 2, Units.PoundLb);
export const Meter = createUnitFormat("m", "SI", 2, Units.Yard);
export const Mole = createUnitFormat("mol", undefined, 2);
export const Second = createUnitFormat("s", undefined, 2);
