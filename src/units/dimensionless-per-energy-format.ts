import { createUnitFormat } from "../format";
import * as DimensionlessPerEnerge from "./dimensionless-per-energy";

// tslint:disable:variable-name

/// http://www.wolframalpha.com/input/?i=BTU and select 'Show exact conversions'
// Per Energy
export const OnePerKiloWattHour = createUnitFormat("/kWh", "SI", 2);

export const OnePerBtu = createUnitFormat(
  "/BTU",
  "IP",
  2,
  DimensionlessPerEnerge.OnePerKilojoule
);

export const OnePerMegaBtu = createUnitFormat("/MMBTU", "IP", 2);

export const OnePerTherm = createUnitFormat("/Therm", "IP", 2);

export const OnePerKilojoule = createUnitFormat(
  "/kJ",
  "SI",
  2,
  DimensionlessPerEnerge.OnePerBtu
);

export const OnePerMegajoule = createUnitFormat("/MJ", "SI", 0);

export const OnePerJoule = createUnitFormat("/J", "SI", 2);
