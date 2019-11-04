import * as UnitTimes from "../unit-times";
import { SquareMeter } from "./area";
import { Kilogram } from "./base-units";

export type MomentOfInertia = "MomentOfInertia";

/// Moment of inertia
export const KilogramSquareMeter = UnitTimes.massByArea(
  "KilogramSquareMeter",
  Kilogram,
  SquareMeter
);
