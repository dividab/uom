import { BaseUnits } from "../../core";
import * as UnitTimes from "../unit-times";
import { SquareMeter } from "./area";

export type MomentOfInertia = "MomentOfInertia";

/// Moment of inertia
export const KilogramSquareMeter = UnitTimes.massByArea(
  "KilogramSquareMeter",
  BaseUnits.Kilogram,
  SquareMeter
);
