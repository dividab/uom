import { Unit, BaseUnits } from "../../core";
import * as UnitDivide from "../unit-divide";
import { Joule, Kilojoule } from "./energy";
import { KiloWattHour } from "./energy2";

export type SpecificEnthalpy = "SpecificEnthalpy";

/**
 * The derived unit for absorbed dose, specific energy (imparted), kerma ( <code>Gy</code> ).
 * One gray is equal to the dose of one joule of energy absorbed per one kilogram of matter.
 * It is named after the British physician L. H. Gray (1905-1965).
 */
export const Gray = UnitDivide.energyByMass("Gray", Joule, BaseUnits.Kilogram);

/**
 * The derived unit for dose equivalent ( <code>Sv</code> ).
 * One Sievert is equal is equal to the actual dose, in grays, multiplied by a "quality factor" which is
 * larger for more dangerous forms of radiation.
 * It is named after the Swedish physicist Rolf Sievert (1898-1966).
 */
export const Sievert = UnitDivide.energyByMass(
  "Sievert",
  Joule,
  BaseUnits.Kilogram
);

// Specific energy
export const KilojoulePerKilogram = UnitDivide.energyByMass(
  "KilojoulePerKilogram",
  Kilojoule,
  BaseUnits.Kilogram
);
export const KiloWattHourPerKilogram = UnitDivide.energyByMass(
  "KiloWattHourPerKilogram",
  KiloWattHour,
  BaseUnits.Kilogram
);
export const BtuPerPoundLb = Unit.minus(
  "BtuPerPoundLb",
  7.68,
  Unit.timesNumber("", 2.326, KilojoulePerKilogram)
);
