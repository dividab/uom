import * as UnitDivide from "../unit-divide";
import { KiloWattHour } from "./energy2";
import { CubicMeter } from "./volume";

export type HeatingValue = "HeatingValue";

// tslint:disable:variable-name

// Energy per volume
export const KiloWattHourPerCubicMeter = UnitDivide.energyByVolume(
  "KiloWattHourPerCubicMeter",
  KiloWattHour,
  CubicMeter
);
