import { ConversionTest } from "./conversion-test";
import { Units } from "../../src/all-units";

export const tests: ReadonlyArray<ConversionTest> = [
  {
    name: "0gram_0kilogram",
    fromUnit: Units.Gram,
    fromValue: 0.0,
    toUnit: Units.Kilogram,
    toValue: 0.0
  },
  {
    name: "3gram_0_003kilogram",
    fromUnit: Units.Gram,
    fromValue: 3.0,
    toUnit: Units.Kilogram,
    toValue: 0.003
  },
  {
    name: "78945gram_78_945kilogram",
    fromUnit: Units.Gram,
    fromValue: 78945.0,
    toUnit: Units.Kilogram,
    toValue: 78.945,
    delta: 0.000000001
  },
  {
    name: "0_5gram_0_0005kilogram",
    fromUnit: Units.Gram,
    fromValue: 0.5,
    toUnit: Units.Kilogram,
    toValue: 0.0005
  },
  {
    name: "0kilogram_0gram",
    fromUnit: Units.Kilogram,
    fromValue: 0.0,
    toUnit: Units.Gram,
    toValue: 0.0
  },
  {
    name: "5kilogram_5000gram",
    fromUnit: Units.Kilogram,
    fromValue: 5.0,
    toUnit: Units.Gram,
    toValue: 5000.0
  },
  {
    name: "0_865kilogram_865gram",
    fromUnit: Units.Kilogram,
    fromValue: 0.865,
    toUnit: Units.Gram,
    toValue: 865
  },
  {
    name: "0_0007kilogram_0_7gram",
    fromUnit: Units.Kilogram,
    fromValue: 0.0007,
    toUnit: Units.Gram,
    toValue: 0.7
  },
  {
    name: "For_Value_0_gram_we_should_get_value_0_gram",
    fromUnit: Units.Gram,
    fromValue: 0.0,
    toUnit: Units.Gram,
    toValue: 0.0
  },
  {
    name: "3gram_3gram",
    fromUnit: Units.Gram,
    fromValue: 3.0,
    toUnit: Units.Gram,
    toValue: 3.0
  },
  {
    name: "5_34gram_5_34gram",
    fromUnit: Units.Gram,
    fromValue: 5.34,
    toUnit: Units.Gram,
    toValue: 5.34
  },
  {
    name: "0kilogram_0kilogram",
    fromUnit: Units.Kilogram,
    fromValue: 0.0,
    toUnit: Units.Kilogram,
    toValue: 0.0
  },
  {
    name: "3kilogram_3kilogram",
    fromUnit: Units.Kilogram,
    fromValue: 3.0,
    toUnit: Units.Kilogram,
    toValue: 3.0
  },
  {
    name: "5_34kilogram_5_34kilogram",
    fromUnit: Units.Kilogram,
    fromValue: 5.34,
    toUnit: Units.Kilogram,
    toValue: 5.34
  }
];
