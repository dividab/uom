import * as UnitDivide from "../unit-divide";
import { Watt, BtuPerHour } from "./power";
import { SquareMeter, SquareFeet } from "./area";

export type Intensity = "Intensity";

// tslint:disable:variable-name

// Intensity
export const WattPerSquareMeter = UnitDivide.powerByArea(
  "WattPerSquareMeter",
  Watt,
  SquareMeter
);

export const BTUPerHourPerSquareFeet = UnitDivide.powerByArea(
  "BtuPerHourPerSquareFeet",
  BtuPerHour,
  SquareFeet
);
