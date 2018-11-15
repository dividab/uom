import * as UnitDivide from "../unit-divide";
import { Ampere } from "./base-units";
import { Volt } from "./electric-potential";

// tslint:disable:variable-name

/**
 * The derived unit for electric resistance ( <code>Ω</code> or <code>Ohm</code> ).
 * One Ohm is equal to the resistance of a conductor in which a current of one ampere is produced
 * by a potential of one volt across its terminals.
 * It is named after the German physicist Georg Simon Ohm (1789-1854).
 */
export const Ohm = UnitDivide.electricalPotentialByElectricalCurrent(
  "Ohm",
  Volt,
  Ampere
);
