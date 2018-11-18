import * as Unit from "../unit";

// tslint:disable:variable-name

//SquareRootPressure
export const SquareRootPascal = Unit.createBase(
  "SquareRootPascal",
  "SquareRootPressure",
  "√Pa"
);
export const SquareRootInchOfWaterColumn = Unit.timesNumber(
  "SquareRootInchOfWaterColumn",
  1 / 0.06335029447,
  SquareRootPascal
);
