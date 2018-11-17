import { createUnitFormat } from "../format";

// tslint:disable:variable-name

// VolumeFlowPerArea
export const CubicMeterPerSecondPerSquareMeter = createUnitFormat(
  "m³/s/m²",
  "SI",
  2
);
export const CubicFeetPerMinutePerSquareFeet = createUnitFormat(
  "acfm/ft²",
  "IP",
  2
);
export const LiterPerSecondPerSquareMeter = createUnitFormat("l/s/m²", "SI", 2);
