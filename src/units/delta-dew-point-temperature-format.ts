import { createUnitFormat } from "../format";
import * as DeltaDewPointTemperature from "./delta-dew-point-temperature";

// tslint:disable:variable-name

export const DeltaCelsiusDewPoint = createUnitFormat(
  "dp°C",
  "SI",
  1,
  DeltaDewPointTemperature.DeltaFahrenheitDewPoint
);
export const DeltaFahrenheitDewPoint = createUnitFormat(
  "dp°F",
  "IP",
  1,
  DeltaDewPointTemperature.DeltaCelsiusDewPoint
);
