import { createUnitFormat } from "../unit-registry";

// tslint:disable:variable-name

export const Kilometer = createUnitFormat("km", "SI", 2, Mile);
export const CentiMeter = createUnitFormat("cm", "SI", 2, Inch);
export const Millimeter = createUnitFormat("mm", "SI", 2);
