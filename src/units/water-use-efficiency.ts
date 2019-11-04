import * as UnitDivide from "../unit-divide";
import { Liter } from "./volume";
import { KiloWattHour } from "./energy2";

export type WaterUseEfficiency = "WaterUseEfficiency";

/// Water use efficiency
export const LiterPerKiloWattHour = UnitDivide.volumeByEnergy(
  "LiterPerKiloWattHour",
  Liter,
  KiloWattHour
);
