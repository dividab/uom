import * as UnitDivide from "../unit-divide";
import { Newton } from "./force";
import { SquareMeter } from "./area";

// tslint:disable:variable-name

/**
 * The derived unit for pressure, stress ( <code>Pa</code> ).
 * One pascal is equal to one newton per square meter.
 * It is named after the French philosopher and mathematician Blaise Pascal (1623-1662).
 */
export const Pascal = UnitDivide.forceByArea("Pascal", Newton, SquareMeter);
