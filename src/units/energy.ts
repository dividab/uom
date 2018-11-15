import * as UnitTimes from "../unit-times";
import { Meter } from "./base-units";
import { Newton } from "./force";

// tslint:disable:variable-name

/**
 * The derived unit for energy, work, quantity of heat ( <code>J</code> ).
 * One joule is the amount of work done when an applied force of 1 newton moves
 * through a distance of 1 metre in the direction of the force.
 * It is named after the English physicist James Prescott Joule (1818-1889).
 */
export const Joule = UnitTimes.forceByLength("Joule", Newton, Meter);
