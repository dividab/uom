import * as Unit from "../unit";

export type WaterHardness = "WaterHardness";

// Water hardness
export const MilliGramCalciumPerLiter = Unit.createBase(
  "MilliGramCalciumPerLiter",
  "WaterHardness",
  "mg Ca²⁺/l"
);
export const FrenchDegree = Unit.timesNumber(
  "FrenchDegree",
  4.0043,
  MilliGramCalciumPerLiter
);
