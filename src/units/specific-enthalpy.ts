import * as UnitDivide from "../unit-divide";
import { Kilogram } from "./base-units";
import { Joule } from "./energy";

// tslint:disable:variable-name

/**
 * The derived unit for absorbed dose, specific energy (imparted), kerma ( <code>Gy</code> ).
 * One gray is equal to the dose of one joule of energy absorbed per one kilogram of matter.
 * It is named after the British physician L. H. Gray (1905-1965).
 */
export const Gray = UnitDivide.energyByMass("Gray", Joule, Kilogram);

/**
 * The derived unit for dose equivalent ( <code>Sv</code> ).
 * One Sievert is equal is equal to the actual dose, in grays, multiplied by a "quality factor" which is
 * larger for more dangerous forms of radiation.
 * It is named after the Swedish physicist Rolf Sievert (1898-1966).
 */
export const Sievert = UnitDivide.energyByMass("Sievert", Joule, Kilogram);
