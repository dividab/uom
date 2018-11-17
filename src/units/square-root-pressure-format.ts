import { createUnitFormat } from "../format";
import * as SquareRootPressre from "./square-root-pressure";

// tslint:disable:variable-name

//SquareRootPressure
export const SquareRootPascal = createUnitFormat(
  "√Pa",
  "SI",
  2,
  SquareRootPressre.SquareRootInchOfWaterColumn
);

export const SquareRootInchOfWaterColumn = createUnitFormat(
  "√in WC",
  "IP",
  2,
  SquareRootPressre.SquareRootPascal
); //sqrt(Pa/249.0889) = 0.06335029447
