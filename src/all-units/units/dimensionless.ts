import { Unit } from "../../core";

//export type Dimensionless = "Dimensionless";

export { Dimensionless } from "../../core/base-units";

export const One = Unit.One;
export const Percent = Unit.divideNumber("Percent", 100.0, Unit.One);
export const PPM = Unit.divideNumber("PPM", 1000000.0, Unit.One);
