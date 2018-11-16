import * as UnitDivide from "../unit-divide";
import { KiloWattHour } from "./energy";
import { CubicMeter } from "./volume";

// tslint:disable:variable-name

// Energy per volume
export const KiloWattHourPerCubicMeter = UnitDivide.energyByVolume(
  "KiloWattHourPerCubicMeter",
  KiloWattHour,
  CubicMeter
);
