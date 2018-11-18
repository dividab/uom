import * as UnitDivide from "../unit-divide";
import {
  CubicMeterPerSecond,
  CubicFeetPerMinute,
  LiterPerSecond
} from "./volume-flow";
import { SquareMeter, SquareFeet } from "./area";

// tslint:disable:variable-name

// VolumeFlowPerArea
export const CubicMeterPerSecondPerSquareMeter = UnitDivide.volumeFlowByArea(
  "CubicMeterPerSecondPerSquareMeter",
  CubicMeterPerSecond,
  SquareMeter
);
export const CubicFeetPerMinutePerSquareFeet = UnitDivide.volumeFlowByArea(
  "CubicFeetPerMinutePerSquareFeet",
  CubicFeetPerMinute,
  SquareFeet
);
export const LiterPerSecondPerSquareMeter = UnitDivide.volumeFlowByArea(
  "LiterPerSecondPerSquareMeter",
  LiterPerSecond,
  SquareMeter
);
