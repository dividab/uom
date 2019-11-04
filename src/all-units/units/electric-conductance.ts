import * as UnitDivide from "../unit-divide";
import { Ampere } from "./base-units";
import { Volt } from "./electric-potential";

export type ElectricConductance = "ElectricConductance";

/**
 * The derived unit for electric conductance ( <code>S</code> ).
 * One Siemens is equal to one ampere per volt.
 * It is named after the German engineer Ernst Werner von Siemens (1816-1892).
 */
export const Siemens = UnitDivide.electricalCurrentByElectricalPotential(
  "Siemens",
  Ampere,
  Volt
);
