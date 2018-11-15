import { createUnitFormat } from "../unit-registry";
import * as DewPointTemperature from "./dew-point-temperature";

// tslint:disable:variable-name

export const CelsiusDewPoint = createUnitFormat(
  "dp°C",
  "SI",
  2,
  DewPointTemperature.FahrenheitDewPoint
);

export const FahrenheitDewPoint = createUnitFormat(
  "dp°F",
  "SI",
  1,
  DewPointTemperature.CelsiusDewPoint
);

export const KelvinDewPoint = createUnitFormat("dp°K", "SI", 2);
