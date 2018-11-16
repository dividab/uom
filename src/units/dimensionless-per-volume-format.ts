import { createUnitFormat } from "../unit-registry";
import * as DimensionlessPerVolume from "./dimensionless-per-volume";

// tslint:disable:variable-name

// Per Volume
export const OnePerLiter = createUnitFormat(
  "/l",
  "SI",
  2,
  DimensionlessPerVolume.OnePerGallon
);

export const OnePerCubicMeter = createUnitFormat(
  "/m³",
  "SI",
  2,
  DimensionlessPerVolume.OnePerHundredCubicFeet
);

export const OnePerGallon = createUnitFormat(
  "/gal",
  "IP",
  2,
  DimensionlessPerVolume.OnePerLiter
);

export const OnePerHundredCubicFeet = createUnitFormat(
  "/100 ft³",
  "IP",
  2,
  DimensionlessPerVolume.OnePerCubicMeter
);
