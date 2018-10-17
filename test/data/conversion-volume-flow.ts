import { ConversionTest } from "./conversion-test";
import * as Units from "../../src/units";

export const tests: ReadonlyArray<ConversionTest> = [
  {
    name: "0CubicMeterPerSecond_0CubicMeterPerHour",
    fromUnit: Units.CubicMeterPerSecond,
    fromValue: 0.0,
    toUnit: Units.CubicMeterPerHour,
    toValue: 0.0
  },
  {
    name: "2CubicMeterPerSecond_7200CubicMeterPerHour",
    fromUnit: Units.CubicMeterPerSecond,
    fromValue: 2.0,
    toUnit: Units.CubicMeterPerHour,
    toValue: 7200.0
  },
  {
    name: "1_23CubicMeterPerSecond_4428CubicMeterPerHour",
    fromUnit: Units.CubicMeterPerSecond,
    fromValue: 1.23,
    toUnit: Units.CubicMeterPerHour,
    toValue: 4428.0
  },
  {
    name: "0CubicMeterPerSecond_0CubicMeterPerHour",
    fromUnit: Units.CubicMeterPerSecond,
    fromValue: 0.0,
    toUnit: Units.CubicMeterPerHour,
    toValue: 0.0
  },
  {
    name: "7200CubicMeterPerHour_2CubicMeterPerSecond",
    fromUnit: Units.CubicMeterPerHour,
    fromValue: 7200.0,
    toUnit: Units.CubicMeterPerSecond,
    toValue: 2.0
  },
  {
    name: "1500_85CubicMeterPerHour_0_4169CubicMeterPerSecond",
    fromUnit: Units.CubicMeterPerHour,
    fromValue: 1500.85,
    toUnit: Units.CubicMeterPerSecond,
    toValue: 0.4169,
    delta: 0.00001
  },
  {
    name: "0CubicMeterPerSecond_0CubicMeterPerSecond",
    fromUnit: Units.CubicMeterPerSecond,
    fromValue: 0.0,
    toUnit: Units.CubicMeterPerSecond,
    toValue: 0.0
  },
  {
    name: "4CubicMeterPerSecondc_4CubicMeterPerSecond",
    fromUnit: Units.CubicMeterPerSecond,
    fromValue: 4.0,
    toUnit: Units.CubicMeterPerSecond,
    toValue: 4.0
  },
  {
    name: "1_2CubicMeterPerSecond_1_2CubicMeterPerSecond",
    fromUnit: Units.CubicMeterPerSecond,
    fromValue: 1.2,
    toUnit: Units.CubicMeterPerSecond,
    toValue: 1.2
  },
  {
    name: "0CubicMeterPerSecond_0CubicMeterPerHour",
    fromUnit: Units.CubicMeterPerSecond,
    fromValue: 0.0,
    toUnit: Units.CubicMeterPerHour,
    toValue: 0.0
  },
  {
    name: "0CubicMeterPerHour_0CubicMeterPerHour",
    fromUnit: Units.CubicMeterPerHour,
    fromValue: 0.0,
    toUnit: Units.CubicMeterPerHour,
    toValue: 0.0
  },
  {
    name: "3000CubicMeterPerHour_3000CubicMeterPerHour",
    fromUnit: Units.CubicMeterPerHour,
    fromValue: 3000.0,
    toUnit: Units.CubicMeterPerHour,
    toValue: 3000.0
  },
  {
    name: "896_8CubicMeterPerHour_896_8CubicMeterPerHour",
    fromUnit: Units.CubicMeterPerHour,
    fromValue: 896.8,
    toUnit: Units.CubicMeterPerHour,
    toValue: 896.8
  },
  {
    // Test values from
    //http://www.wolframalpha.com/input/?i=1+cubic+meter+per+second
    name: "1CubicMeterPerSecond_3600CubicMeterPerHour",
    fromUnit: Units.CubicMeterPerSecond,
    fromValue: 1.0,
    toUnit: Units.CubicMeterPerHour,
    toValue: 3600.0
  },
  {
    // Test values from
    // http://www.wolframalpha.com/input/?i=77.14+grain%2Flb+in+g%2Fkg
    name: "3975CubicFeetPerMinute__6754CubicMeterPerHour",
    fromUnit: Units.CubicFeetPerMinute,
    fromValue: 3975.0,
    toUnit: Units.CubicMeterPerHour,
    toValue: 6754.0,
    delta: 1
  },
  {
    // Test values from
    // http://www.wolframalpha.com/input/?i=77.14+grain%2Flb+in+g%2Fkg
    name: "8000CubicMeterPerHour_4709CubicFeetPerMinute",
    fromUnit: Units.CubicMeterPerHour,
    fromValue: 8000.0,
    toUnit: Units.CubicFeetPerMinute,
    toValue: 4709.0,
    delta: 1
  }
];
