import * as UnitTimes from "../unit-times";
import { Second } from "./base-units";
import { Volt } from "./electric-potential";

export type MagneticFlux = "MagneticFlux";

// tslint:disable:variable-name

/**
 * The derived unit for magnetic flux ( <code>Wb</code> ).
 * One Weber is equal to the magnetic flux that in linking a circuit of one turn produces in it an
 * electromotive force of one volt as it is uniformly reduced to zero within one second.
 * It is named after the German physicist Wilhelm Eduard Weber (1804-1891).
 */
export const Weber = UnitTimes.electricalPotentialByDuration(
  "Weber",
  Volt,
  Second
);
