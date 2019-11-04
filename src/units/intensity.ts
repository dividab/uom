import * as UnitDivide from "../unit-divide";
import { Watt, BtuPerHour } from "./power";
import { SquareMeter, SquareFeet } from "./area";

export type Intensity = "Intensity";

// Intensity
export const WattPerSquareMeter = UnitDivide.powerByArea(
  "WattPerSquareMeter",
  Watt,
  SquareMeter
);

export const BtuPerHourPerSquareFeet = UnitDivide.powerByArea(
  "BtuPerHourPerSquareFeet",
  BtuPerHour,
  SquareFeet
);
