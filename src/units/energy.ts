import * as UnitTimes from "../unit-times";
import * as Unit from "../unit";
import { Meter } from "./base-units";
import { Newton } from "./force";
import { Kilo, Mega } from "../unit-prefix";

export type Energy = "Energy";

// tslint:disable:variable-name

/**
 * The derived unit for energy, work, quantity of heat ( <code>J</code> ).
 * One joule is the amount of work done when an applied force of 1 newton moves
 * through a distance of 1 metre in the direction of the force.
 * It is named after the English physicist James Prescott Joule (1818-1889).
 */
export const Joule = UnitTimes.forceByLength("Joule", Newton, Meter);

// Energy
export const NewtonMeter = UnitTimes.forceByLength(
  "NewtonMeter",
  Newton,
  Meter
);
export const Kilojoule = Kilo("Kilojoule", Joule);
export const Megajoule = Mega("Megajoule", Joule);

export const Btu = Unit.timesNumber("Btu", 52752792631.0 / 50000000.0, Joule);
export const KiloBtu = Kilo("KiloBtu", Btu);
export const MegaBtu = Mega("MegaBtu", Btu);
export const Therm = Unit.timesNumber("Therm", 100000, Btu);
