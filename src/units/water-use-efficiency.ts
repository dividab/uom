import * as UnitDivide from "../unit-divide";
import { Liter } from "./volume";
import { KiloWattHour } from "./energy";

// tslint:disable:variable-name

/// Water use efficiency
export const LiterPerKiloWattHour = UnitDivide.volumeByEnergy(
  "LiterPerKiloWattHour",
  Liter,
  KiloWattHour
);
