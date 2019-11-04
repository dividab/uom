import { ConversionTest } from "./conversion-test";
import { Units } from "../../src/all-units";

export const tests: ReadonlyArray<ConversionTest> = [
  {
    name: "0pascal_0kilopascal",
    fromUnit: Units.Pascal,
    fromValue: 0.0,
    toUnit: Units.KiloPascal,
    toValue: 0.0
  },
  {
    name: "3pascal_0_003kilopascal",
    fromUnit: Units.Pascal,
    fromValue: 3.0,
    toUnit: Units.KiloPascal,
    toValue: 0.003
  },
  {
    name: "78945pascal_78_945kilopascal",
    fromUnit: Units.Pascal,
    fromValue: 78945.0,
    toUnit: Units.KiloPascal,
    toValue: 78.945,
    delta: 0.0000000001
  },
  {
    name: "0_5pascal_0_0005kilopascal",
    fromUnit: Units.Pascal,
    fromValue: 0.5,
    toUnit: Units.KiloPascal,
    toValue: 0.0005
  },
  {
    name: "0kilopascal_0pascal",
    fromUnit: Units.KiloPascal,
    fromValue: 0.0,
    toUnit: Units.Pascal,
    toValue: 0.0
  },
  {
    name: "5kilopascal_5000pascal",
    fromUnit: Units.KiloPascal,
    fromValue: 5.0,
    toUnit: Units.Pascal,
    toValue: 5000.0
  },
  {
    name: "0_865kilopascal_865pascal",
    fromUnit: Units.KiloPascal,
    fromValue: 0.865,
    toUnit: Units.Pascal,
    toValue: 865.0
  },
  {
    name: "0_0007kilopascal_0_7pascal",
    fromUnit: Units.KiloPascal,
    fromValue: 0.0007,
    toUnit: Units.Pascal,
    toValue: 0.7
  },
  {
    name: "0pascal_0pascal",
    fromUnit: Units.Pascal,
    fromValue: 0.0,
    toUnit: Units.Pascal,
    toValue: 0.0
  },
  {
    name: "3pascal_3pascal",
    fromUnit: Units.Pascal,
    fromValue: 3.0,
    toUnit: Units.Pascal,
    toValue: 3.0
  },
  {
    name: "5_34pascal_5_34pascal",
    fromUnit: Units.Pascal,
    fromValue: 5.34,
    toUnit: Units.Pascal,
    toValue: 5.34
  },
  {
    name: "0kilopascal_0kilopascal",
    fromUnit: Units.KiloPascal,
    fromValue: 0.0,
    toUnit: Units.KiloPascal,
    toValue: 0.0
  },
  {
    name: "3kilopascal_3kilopascal",
    fromUnit: Units.KiloPascal,
    fromValue: 3.0,
    toUnit: Units.KiloPascal,
    toValue: 3.0
  },
  {
    name: "5_34kilopascal_5_34kilopascal",
    fromUnit: Units.KiloPascal,
    fromValue: 5.34,
    toUnit: Units.KiloPascal,
    toValue: 5.34
  },
  {
    name: "29_921InchOfMercury_101_325kilopascal",
    fromUnit: Units.InchOfMercury,
    fromValue: 29.921,
    toUnit: Units.KiloPascal,
    toValue: 101.325,
    delta: 0.001
  },
  {
    name: "1psi_6895pascal",
    fromUnit: Units.PoundForcePerSquareInch,
    fromValue: 1.0,
    toUnit: Units.Pascal,
    toValue: 6895,
    delta: 0.5
  }
];
