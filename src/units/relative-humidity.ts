import * as Unit from "../unit";

export type RelativeHumidity = "RelativeHumidity";

export const HumidityFactor = Unit.createBase(
  "HumidityFactor",
  "RelativeHumidity",
  "r.H."
);

/** Factor of humidity, eg., 0.01 means 1% */
export const PercentHumidity = Unit.divideNumber(
  "PercentHumidity",
  100.0,
  HumidityFactor
);
