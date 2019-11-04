import { ConversionTest } from "./conversion-test";
import { Units } from "../../src/all-units";

export const tests: ReadonlyArray<ConversionTest> = [
  {
    name: "10StandardCubicMeterPerSecond_10000StandardLiterPerSecond",
    fromUnit: Units.StandardCubicMeterPerSecond,
    fromValue: 10,
    toUnit: Units.StandardLiterPerSecond,
    toValue: 10000,
    delta: 0.0000001
  },
  {
    name: "36000StandardCubicMeterPerHour_10StandardCubicMeterPerSecond",
    fromUnit: Units.StandardCubicMeterPerHour,
    fromValue: 36000,
    toUnit: Units.StandardCubicMeterPerSecond,
    toValue: 10,
    delta: 0.0000001
  },
  {
    name: "3600StandardCubicMeterPerHour_1000StandardLiterPerSecond",
    fromUnit: Units.StandardCubicMeterPerHour,
    fromValue: 3600,
    toUnit: Units.StandardLiterPerSecond,
    toValue: 1000,
    delta: 0.0000001
  },
  {
    name: "1KilogramPerSecond_2990StandardCubicMeterPerHour",
    fromUnit: Units.KilogramPerSecond,
    fromValue: 1,
    toUnit: Units.StandardCubicMeterPerHour,
    toValue: 2990,
    delta: 1
  }
];
