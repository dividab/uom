import * as UnitDivide from "../unit-divide";
import { Weber } from "./magnetic-flux";
import { SquareMeter } from "./area";

export type MagneticFluxDensity = "MagneticFluxDensity";

/**
 * The derived unit for magnetic flux density ( <code>T</code> ).
 * One Tesla is equal equal to one weber per square meter.
 * It is named after the Serbian-born American electrical engineer and physicist Nikola Tesla (1856-1943).
 */
export const Tesla = UnitDivide.magneticFluxByArea("Tesla", Weber, SquareMeter);
