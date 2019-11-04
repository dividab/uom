import { Unit } from "../../core";

export type SolidAngle = "SolidAngle";

/**
 * The unit for solid angle quantities ( <code>sr</code> ).
 * One steradian is the solid angle subtended at the center of a sphere by an area on the
 * surface of the sphere that is equal to the radius squared. The total solid angle of a sphere is 4*Pi steradians.
 */
export const Steradian = Unit.createBase<"SolidAngle">(
  "Steradian",
  "SolidAngle",
  "sr"
);
