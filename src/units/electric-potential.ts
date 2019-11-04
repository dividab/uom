import * as UnitDivide from "../unit-divide";
import { Ampere } from "./base-units";
import { Watt } from "./power";
import { Milli, Kilo } from "../unit-prefix";

export type ElectricPotential = "ElectricPotential";

/**
 * The derived unit for electric potential difference, electromotive force ( <code>V</code> ).
 * One Volt is equal to the difference of electric potential between two points on a conducting
 * wire carrying a export constant current of one ampere when the power dissipated between the points is one watt.
 * It is named after the Italian physicist Count Alessandro Volta (1745-1827).
 */
export const Volt = UnitDivide.powerByElectricalCurrent("Volt", Watt, Ampere);

// ElectricPotential
export const MilliVolt = Milli("MilliVolt", Volt);
export const KiloVolt = Kilo("KiloVolt", Volt);
