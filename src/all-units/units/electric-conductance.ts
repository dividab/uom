import { BaseUnits } from "../../core";
import * as UnitDivide from "../unit-divide";
import { Volt } from "./electric-potential";

export type ElectricConductance = "ElectricConductance";

/**
 * The derived unit for electric conductance ( <code>S</code> ).
 * One Siemens is equal to one ampere per volt.
 * It is named after the German engineer Ernst Werner von Siemens (1816-1892).
 */
export const Siemens = UnitDivide.electricalCurrentByElectricalPotential(
  "Siemens",
  BaseUnits.Ampere,
  Volt
);
