import { createUnitFormat } from "../format";
import * as Emission from "../units/emission";

// tslint:disable:variable-name

// Emission
export const KilogramPerKiloWattHour = createUnitFormat(
  "kg/kWh",
  "SI",
  2,
  Emission.PoundLbPerKiloWattHour
);

export const GramPerKiloWattHour = createUnitFormat("g/kWh", "SI", 1);

export const PoundLbPerKiloWattHour = createUnitFormat(
  "lb/kWh",
  "IP",
  2,
  Emission.KilogramPerKiloWattHour
);