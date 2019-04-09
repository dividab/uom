import * as UnitDivide from "../unit-divide";
import {
  KilogramPerSecond,
  StandardCubicMeterPerHour,
  StandardCubicFeetPerMinute
} from "./mass-flow";
import { SquareMeter, SquareFeet } from "./area";

export type MassFlowPerArea = "MassFlowPerArea";

// tslint:disable:variable-name

export const KilogramPerSquareMeterSecond = UnitDivide.massFlowByArea(
  "KilogramPerSquareMeterSecond",
  KilogramPerSecond,
  SquareMeter
);

export const StandardCubicMeterPerHourPerSquareMeter = UnitDivide.massFlowByArea(
  "StandardCubicMeterPerHourPerSquareMeter",
  StandardCubicMeterPerHour,
  SquareMeter
);

export const StandardCubicFootPerMinutePerSquareFeet = UnitDivide.massFlowByArea(
  "StandardCubicFootPerMinutePerSquareFeet",
  StandardCubicFeetPerMinute,
  SquareFeet
);
