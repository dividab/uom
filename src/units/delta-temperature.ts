import * as Unit from "../unit";

// tslint:disable:variable-name

// Delta temperature
export const DeltaCelsius = Unit.createBase(
  "DeltaCelsius",
  "DeltaTemperature",
  "°C"
);
export const DeltaFahrenheit = Unit.timesNumber(
  "DeltaFahrenheit",
  5.0 / 9.0,
  DeltaCelsius
);
