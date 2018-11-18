import * as UnitDivide from "../unit-divide";
import { KilogramPerSecond } from "./mass-flow";
import { SquareMeter } from "./area";

// tslint:disable:variable-name

export const KilogramPerSquareMeterSecond = UnitDivide.massFlowByArea(
  "KilogramPerSquareMeterSecond",
  KilogramPerSecond,
  SquareMeter
);
