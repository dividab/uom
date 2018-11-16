import * as UnitTimes from "../unit-times";
import { SquareMeter } from "./area";
import { Kilogram } from "./base-units";

// tslint:disable:variable-name

/// Moment of inertia
export const KilogramSquareMeter = UnitTimes.massByArea(
  "KilogramSquareMeter",
  Kilogram,
  SquareMeter
);
