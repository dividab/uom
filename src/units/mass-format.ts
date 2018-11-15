import { createUnitFormat } from "../unit-registry";
import * as Mass from "./mass";
import { Kilogram } from "./base-units";

// tslint:disable:variable-name

export const Gram = createUnitFormat("g", "SI", 2, Mass.Grain);

export const PoundLb = createUnitFormat("lb", "IP", 1, Kilogram);

export const Grain = createUnitFormat("gr", "IP", 2);

export const Slug = createUnitFormat("slug", "IP", 2, Kilogram);

export const Tonne = createUnitFormat("t", "SI", 0);

export const MilliGram = createUnitFormat("mg", "SI", 0, Mass.Grain);
