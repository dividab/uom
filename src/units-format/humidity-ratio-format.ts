import { createUnitFormat } from "../format";
import * as HumidityRatio from "../units/humidity-ratio";

// tslint:disable:variable-name

// Humidity
export const KilogramPerKilogram = createUnitFormat(
  "kg/kg",
  "SI",
  2,
  HumidityRatio.PoundLbPerPoundLb
);

export const GramPerKilogram = createUnitFormat(
  "g/kg",
  "SI",
  2,
  HumidityRatio.GrainPerPoundLb
);

export const PoundLbPerPoundLb = createUnitFormat("lb/lb", "IP", 2);

export const GrainPerPoundLb = createUnitFormat("gr/lb", "IP", 1);

export const GramPerPoundLb = createUnitFormat("g/lb", "IP", 1);
