import { createUnitFormat } from "../format";

// tslint:disable:variable-name

// Specific Fan Power
export const KiloWattPerCubicMeterPerSecond = createUnitFormat(
  "kW/m³/s",
  "SI",
  2
);

export const WattPerCubicMeterPerSecond = createUnitFormat("W/m³/s", "SI", 0);

export const KiloWattPerCubicFootPerMinute = createUnitFormat(
  "kW/ft³/min",
  "IP",
  2
);
