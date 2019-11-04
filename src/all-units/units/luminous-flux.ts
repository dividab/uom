import { BaseUnits } from "../../core";
import * as UnitTimes from "../unit-times";
import { Steradian } from "./solid-angle";

export type LuminousFlux = "LuminousFlux";

/**
 * The derived unit for luminous flux ( <code>lm</code> ).
 * One Lumen is equal to the amount of light given out through a solid angle by a source of one
 * candela intensity radiating equally in all directions.
 */
export const Lumen = UnitTimes.luminousIntensityBySolidAngle(
  "Lumen",
  BaseUnits.Candela,
  Steradian
);
