import { createUnitFormat } from "../format";
import * as DimensionlessPerMass from "./dimensionless-per-mass";

// tslint:disable:variable-name

export const OnePerKilogram = createUnitFormat(
  "/kg",
  "SI",
  2,
  DimensionlessPerMass.OnePerPoundLb
);

export const OnePerPoundLb = createUnitFormat(
  "/lb",
  "IP",
  2,
  DimensionlessPerMass.OnePerKilogram
);
