import { createUnitFormat } from "../format";
import * as WetTemperature from "./wet-temperature";

// tslint:disable:variable-name

export const CelsiusWet = createUnitFormat(
  "wb°C",
  "SI",
  2,
  WetTemperature.FahrenheitWet
);

export const FahrenheitWet = createUnitFormat(
  "wb°F",
  "SI",
  1,
  WetTemperature.CelsiusWet
);

export const KelvinWet = createUnitFormat("wb°K", "SI", 2);
