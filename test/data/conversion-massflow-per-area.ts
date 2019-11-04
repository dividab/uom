import { ConversionTest } from "./conversion-test";
import { Units } from "../../src/all-units";

export const tests: ReadonlyArray<ConversionTest> = [
  {
    name: "10SCFM3/M2_0.55SCFM/F2",
    fromUnit: Units.StandardCubicMeterPerHourPerSquareMeter,
    fromValue: 10.0,
    toUnit: Units.StandardCubicFootPerMinutePerSquareFeet,
    toValue: 0.5468066494554816,
    delta: 0.0000001
  },
  {
    name: "10SCFM3/M2_0.003344KG/M2S",
    fromUnit: Units.StandardCubicMeterPerHourPerSquareMeter,
    fromValue: 10.0,
    toUnit: Units.KilogramPerSquareMeterSecond,
    toValue: 0.003344,
    delta: 0.000001
  }
];
