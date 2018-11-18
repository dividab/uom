import * as UnitDivide from "../unit-divide";
import { Watt } from "./power";
import { SquareMeter } from "./area";

export type Intensity = "Intensity";

// tslint:disable:variable-name

// Intensity
export const WattPerSquareMeter = UnitDivide.powerByArea(
  "WattPerSquareMeter",
  Watt,
  SquareMeter
);
