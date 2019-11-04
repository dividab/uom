import { Kilogram } from "./base-units";
import { KiloWattHour } from "./energy2";
import { Gram, PoundLb } from "./mass";
import { massByEnergy } from "../unit-divide";

export type Emission = "Emission";

// Emission
export const KilogramPerKiloWattHour = massByEnergy(
  "KilogramPerKiloWattHour",
  Kilogram,
  KiloWattHour
);
export const GramPerKiloWattHour = massByEnergy(
  "GramPerKiloWattHour",
  Gram,
  KiloWattHour
);
export const PoundLbPerKiloWattHour = massByEnergy(
  "PoundLbPerKiloWattHour",
  PoundLb,
  KiloWattHour
);
