import { Unit } from "../../core";

export type SquareRootPressure = "SquareRootPressure";

//SquareRootPressure
export const SquareRootPascal = Unit.createBase<"SquareRootPressure">(
  "SquareRootPascal",
  "SquareRootPressure",
  "√Pa"
);
export const SquareRootInchOfWaterColumn = Unit.timesNumber(
  "SquareRootInchOfWaterColumn",
  1 / 0.06335029447,
  SquareRootPascal
);
