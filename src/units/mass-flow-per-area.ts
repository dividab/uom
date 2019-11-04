import * as UnitDivide from "../unit-divide";
import {
  KilogramPerSecond,
  GramPerSecond,
  StandardCubicMeterPerHour,
  StandardCubicFeetPerMinute,
  PoundLbPerHour,
  PoundLbPerSecond,
  GramPerHour,
  GrainPerHour,
  GrainPerSecond,
  KilogramPerHour
} from "./mass-flow";
import { SquareMeter, SquareFeet } from "./area";

export type MassFlowPerArea = "MassFlowPerArea";

export const KilogramPerSquareMeterHour = UnitDivide.massFlowByArea(
  "KilogramPerSquareMeterHour",
  KilogramPerHour,
  SquareMeter
);

export const KilogramPerSquareMeterSecond = UnitDivide.massFlowByArea(
  "KilogramPerSquareMeterSecond",
  KilogramPerSecond,
  SquareMeter
);
export const GramPerSquareMeterHour = UnitDivide.massFlowByArea(
  "GramPerSquareMeterHour",
  GramPerHour,
  SquareMeter
);
export const GramPerSquareMeterSecond = UnitDivide.massFlowByArea(
  "GramPerSquareMeterSecond",
  GramPerSecond,
  SquareMeter
);

export const StandardCubicMeterPerHourPerSquareMeter = UnitDivide.massFlowByArea(
  "StandardCubicMeterPerHourPerSquareMeter",
  StandardCubicMeterPerHour,
  SquareMeter
);

export const PoundLbPerSquareFeetHour = UnitDivide.massFlowByArea(
  "PoundLbPerSquareFeetHour",
  PoundLbPerHour,
  SquareFeet
);
export const PoundLbPerSquareFeetSecond = UnitDivide.massFlowByArea(
  "PoundLbPerSquareFeetSecond",
  PoundLbPerSecond,
  SquareFeet
);
export const GrainPerSquareFeetHour = UnitDivide.massFlowByArea(
  "GrainPerSquareFeetHour",
  GrainPerHour,
  SquareFeet
);
export const GrainPerSquareFeetSecond = UnitDivide.massFlowByArea(
  "GrainPerSquareFeetSecond",
  GrainPerSecond,
  SquareFeet
);
export const StandardCubicFootPerMinutePerSquareFeet = UnitDivide.massFlowByArea(
  "StandardCubicFootPerMinutePerSquareFeet",
  StandardCubicFeetPerMinute,
  SquareFeet
);
