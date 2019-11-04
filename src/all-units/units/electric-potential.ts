import { UnitPrefix, BaseUnits } from "../../core";
import * as UnitDivide from "../unit-divide";
import { Watt } from "./power";

export type ElectricPotential = "ElectricPotential";

/**
 * The derived unit for electric potential difference, electromotive force ( <code>V</code> ).
 * One Volt is equal to the difference of electric potential between two points on a conducting
 * wire carrying a export constant current of one ampere when the power dissipated between the points is one watt.
 * It is named after the Italian physicist Count Alessandro Volta (1745-1827).
 */
export const Volt = UnitDivide.powerByElectricalCurrent(
  "Volt",
  Watt,
  BaseUnits.Ampere
);

// ElectricPotential
export const MilliVolt = UnitPrefix.Milli("MilliVolt", Volt);
export const KiloVolt = UnitPrefix.Kilo("KiloVolt", Volt);
