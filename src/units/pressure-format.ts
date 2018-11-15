import { createUnitFormat } from "../unit-registry";
import * as Pressure from "./pressure";

// tslint:disable:variable-name

export const Pascal = createUnitFormat(
  "Pa",
  "SI",
  0,
  Pressure.InchOfWaterColumn
);
