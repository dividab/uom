import * as UnitDivide from "../unit-divide";
import { Second } from "./base-units";
import { Joule } from "./energy";

// tslint:disable:variable-name

/**
 * The derived unit for power, radiant, flux ( <code>W</code> ).
 * One watt is equal to one joule per second.
 * It is named after the British scientist James Watt (1736-1819).
 */
export const Watt = UnitDivide.energyByDuration("Watt", Joule, Second);
