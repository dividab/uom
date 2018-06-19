import { ConversionTest } from "./conversion-test";
import * as Units from "../src/units";
import { DeltaTemperature } from "../src/quantity";

export const tests: ReadonlyArray<ConversionTest<DeltaTemperature>> = [
  {
    name: "0Celsius_0Fahrenheit",
    fromUnit: Units.DeltaCelsius,
    fromValue: 0.0,
    toUnit: Units.DeltaFahrenheit,
    toValue: 0.0
  }
];
