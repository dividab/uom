import * as UnitDivide from "../unit-divide";
import { LiterPerSecond, CubicFeetPerMinute } from "./volume-flow";
import {
  SquareRootPascal,
  SquareRootInchOfWaterColumn
} from "./square-root-pressure";

export type VolumeFlowPerSquareRootPressure = "VolumeFlowPerSquareRootPressure";

//VolumeFlowPerSquareRootPressure
export const LiterPerSecondPerSquareRootPascal = UnitDivide.volumeFlowBySquareRootPressure(
  "LiterPerSecondPerSquareRootPascal",
  LiterPerSecond,
  SquareRootPascal
);
export const CubicFeetPerMinutePerSquareRootInchOfWaterColumn = UnitDivide.volumeFlowBySquareRootPressure(
  "CubicFeetPerMinutePerSquareRootInchOfWaterColumn",
  CubicFeetPerMinute,
  SquareRootInchOfWaterColumn
);
