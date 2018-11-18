import * as UnitTimes from "../unit-times";
import { Second, Ampere } from "./base-units";

export type ElectricCharge = "ElectricCharge";

// tslint:disable:variable-name

/**
 * The derived unit for electric charge, quantity of electricity ( <code>C</code> ).
 * One Coulomb is equal to the quantity of charge transferred in one second by a steady current of one ampere.
 * It is named after the French physicist Charles Augustin de Coulomb (1736-1806).
 */
export const Coulomb = UnitTimes.durationByElectricCurrent(
  "Coulomb",
  Second,
  Ampere
);
