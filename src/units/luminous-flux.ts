import * as UnitTimes from "../unit-times";
import { Candela } from "./base-units";
import { Steradian } from "./solid-angle";

export type LuminousFlux = "LuminousFlux";

// tslint:disable:variable-name

/**
 * The derived unit for luminous flux ( <code>lm</code> ).
 * One Lumen is equal to the amount of light given out through a solid angle by a source of one
 * candela intensity radiating equally in all directions.
 */
export const Lumen = UnitTimes.luminousIntensityBySolidAngle(
  "Lumen",
  Candela,
  Steradian
);
