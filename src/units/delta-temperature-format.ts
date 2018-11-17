import { createUnitFormat } from "../format";
import * as DeltaTemperature from "./delta-temperature";

// tslint:disable:variable-name

export const DeltaCelsius = createUnitFormat(
  "°C",
  "SI",
  1,
  DeltaTemperature.DeltaFahrenheit
);
export const DeltaFahrenheit = createUnitFormat(
  "°F",
  "IP",
  1,
  DeltaTemperature.DeltaCelsius
);
