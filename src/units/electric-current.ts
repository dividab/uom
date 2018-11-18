import { Ampere } from "./base-units";
import { Milli } from "../unit-prefix";

export type ElectricCurrent = "ElectricCurrent";

// tslint:disable:variable-name

// Electric current
export const MilliAmpere = Milli("MilliAmpere", Ampere);
