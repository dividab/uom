import * as UnitTimes from "../unit-times";
import { SquareMeter } from "./area";
import { Kilogram } from "./base-units";

export type MomentOfInertia = "MomentOfInertia";

// tslint:disable:variable-name

/// Moment of inertia
export const KilogramSquareMeter = UnitTimes.massByArea(
  "KilogramSquareMeter",
  Kilogram,
  SquareMeter
);
