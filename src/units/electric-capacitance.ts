import * as UnitDivide from "../unit-divide";
import { Coulomb } from "./electric-charge";
import { Volt } from "./electric-potential";

export type ElectricCapacitance = "ElectricCapacitance";

/**
 * The derived unit for capacitance ( <code>F</code> ).
 * One Farad is equal to the capacitance of a capacitor having an equal and opposite charge of 1 coulomb on
 * each plate and a potential difference of 1 volt between the plates.
 * It is named after the British physicist and chemist Michael Faraday (1791-1867).
 */
export const Farad = UnitDivide.electricChargeByElectricPotential(
  "Farad",
  Coulomb,
  Volt
);
