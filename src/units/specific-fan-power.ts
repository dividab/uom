import * as UnitDivide from "../unit-divide";
import { KiloWatt, Watt } from "./power";
import { CubicMeterPerSecond, CubicFeetPerMinute } from "./volume-flow";

// tslint:disable:variable-name

// Specific Fan Power
export const KiloWattPerCubicMeterPerSecond = UnitDivide.powerByVolumeFlow(
  "KiloWattPerCubicMeterPerSecond",
  KiloWatt,
  CubicMeterPerSecond
);
export const WattPerCubicMeterPerSecond = UnitDivide.powerByVolumeFlow(
  "WattPerCubicMeterPerSecond",
  Watt,
  CubicMeterPerSecond
);
export const KiloWattPerCubicFootPerMinute = UnitDivide.powerByVolumeFlow(
  "KiloWattPerCubicFootPerMinute",
  KiloWatt,
  CubicFeetPerMinute
);
