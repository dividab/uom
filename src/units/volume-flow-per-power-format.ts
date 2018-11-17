import { createUnitFormat } from "../unit-registry";

// tslint:disable:variable-name

// Volume flow per cooling power
export const GallonsPerMinutePerTonCooling = createUnitFormat(
  "gpm/ton",
  "IP",
  2
);

export const LiterPerSecondPerKiloWatt = createUnitFormat("l/s/kW", "SI", 2);
