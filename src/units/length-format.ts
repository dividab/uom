import { createUnitFormat } from "../unit-registry";
import * as Length from "./length";
import { Meter } from "./base-units";

// tslint:disable:variable-name

export const Kilometer = createUnitFormat("km", "SI", 2, Length.Mile);
export const Decimeter = createUnitFormat("dm", "SI", 0, Length.Foot);
export const CentiMeter = createUnitFormat("cm", "SI", 2, Length.Inch);
export const Millimeter = createUnitFormat("mm", "SI", 2);

// Length
export const Foot = createUnitFormat("ft", "IP", 2, Length.Decimeter);
export const Yard = createUnitFormat("yd", "IP", 2, Meter);
export const Inch = createUnitFormat("in", "IP", 2, Length.CentiMeter);
export const Mile = createUnitFormat("mi", "IP", 0, Length.Kilometer);
