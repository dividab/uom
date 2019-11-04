import * as Unit from "../unit";

export type WetTemperature = "WetTemperature";

export const CelsiusWet = Unit.createBase(
  "CelsiusWet",
  "WetTemperature",
  "wb°C"
);

export const FahrenheitWet = Unit.minus(
  "FahrenheitWet",
  32.0,
  Unit.timesNumber("", 5.0 / 9.0, CelsiusWet)
);

export const KelvinWet = Unit.minus("KelvinWet", 273.15, CelsiusWet);
