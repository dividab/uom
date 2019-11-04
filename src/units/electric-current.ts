import { Ampere } from "./base-units";
import { Milli } from "../unit-prefix";

export type ElectricCurrent = "ElectricCurrent";

// Electric current
export const MilliAmpere = Milli("MilliAmpere", Ampere);
