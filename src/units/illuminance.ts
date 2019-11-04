import * as UnitDivide from "../unit-divide";
import { Lumen } from "./luminous-flux";
import { SquareMeter } from "./area";

export type Illuminance = "Illuminance";

/**
 * The derived unit for illuminance ( <code>lx</code> ).
 * One Lux is equal to one lumen per square meter.
 */
export const Lux = UnitDivide.luminousFluxByArea("Lux", Lumen, SquareMeter);
