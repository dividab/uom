import { ConversionTest } from "./conversion-test";
import * as Units from "../../src/units";

export const tests: ReadonlyArray<ConversionTest> = [
  {
    name: "0Seconds_0Minutes",
    fromUnit: Units.Second,
    fromValue: 0.0,
    toUnit: Units.Minute,
    toValue: 0.0
  },
  {
    name: "0Seconds_0Hours",
    fromUnit: Units.Second,
    fromValue: 0.0,
    toUnit: Units.Minute,
    toValue: 0.0
  },
  {
    name: "10Seconds_10Seconds",
    fromUnit: Units.Second,
    fromValue: 10.0,
    toUnit: Units.Second,
    toValue: 10.0
  },
  {
    name: "15Seconds_025Minutes",
    fromUnit: Units.Second,
    fromValue: 15.0,
    toUnit: Units.Minute,
    toValue: 0.25
  },
  {
    name: "60Seconds_1Minute",
    fromUnit: Units.Second,
    fromValue: 60.0,
    toUnit: Units.Minute,
    toValue: 1.0
  },
  {
    name: "135Seconds_225Minutes",
    fromUnit: Units.Second,
    fromValue: 135.0,
    toUnit: Units.Minute,
    toValue: 2.25
  },
  {
    name: "36Seconds_001Hours",
    fromUnit: Units.Second,
    fromValue: 36.0,
    toUnit: Units.Hour,
    toValue: 0.01
  },
  {
    name: "3600Seconds_1Hour",
    fromUnit: Units.Second,
    fromValue: 3600.0,
    toUnit: Units.Hour,
    toValue: 1.0
  },
  {
    name: "7236Seconds_201Hours",
    fromUnit: Units.Second,
    fromValue: 7236.0,
    toUnit: Units.Hour,
    toValue: 2.01
  },
  {
    name: "15Minutes_15Minutes",
    fromUnit: Units.Minute,
    fromValue: 15.0,
    toUnit: Units.Minute,
    toValue: 15.0
  },
  {
    name: "ForValue0MinutesWeShouldGetValue0Seconds",
    fromUnit: Units.Minute,
    fromValue: 0.0,
    toUnit: Units.Second,
    toValue: 0.0
  },
  {
    name: "01Minutes_6Seconds",
    fromUnit: Units.Minute,
    fromValue: 0.1,
    toUnit: Units.Second,
    toValue: 6.0
  },
  {
    name: "00025Minutes_015Seconds",
    fromUnit: Units.Minute,
    fromValue: 0.0025,
    toUnit: Units.Second,
    toValue: 0.15
  },
  {
    name: "15Minutes_900Seconds",
    fromUnit: Units.Minute,
    fromValue: 15.0,
    toUnit: Units.Second,
    toValue: 900.0
  },
  {
    name: "0Minutes_0Hours",
    fromUnit: Units.Minute,
    fromValue: 0.0,
    toUnit: Units.Hour,
    toValue: 0.0
  },
  {
    name: "15Minutes_025Hours",
    fromUnit: Units.Minute,
    fromValue: 15.0,
    toUnit: Units.Hour,
    toValue: 0.25
  },
  {
    name: "60Minutes_1Hour",
    fromUnit: Units.Minute,
    fromValue: 60.0,
    toUnit: Units.Hour,
    toValue: 1.0
  },
  {
    name: "135Minutes_225Hours",
    fromUnit: Units.Minute,
    fromValue: 135.0,
    toUnit: Units.Hour,
    toValue: 2.25
  },
  {
    name: "2Hours_2Hours",
    fromUnit: Units.Hour,
    fromValue: 2.0,
    toUnit: Units.Hour,
    toValue: 2.0
  },
  {
    name: "0Hours_0Seconds",
    fromUnit: Units.Hour,
    fromValue: 0.0,
    toUnit: Units.Second,
    toValue: 0.0
  },
  {
    name: "1Hour_3600Seconds",
    fromUnit: Units.Hour,
    fromValue: 1.0,
    toUnit: Units.Second,
    toValue: 3600.0
  },
  {
    name: "1Hour_60Minutes",
    fromUnit: Units.Hour,
    fromValue: 1.0,
    toUnit: Units.Minute,
    toValue: 60.0
  },
  {
    name: "01Hours_360Seconds",
    fromUnit: Units.Hour,
    fromValue: 0.1,
    toUnit: Units.Second,
    toValue: 360.0
  },
  {
    name: "01Hours_6Minutes",
    fromUnit: Units.Hour,
    fromValue: 0.1,
    toUnit: Units.Minute,
    toValue: 6.0
  }
];
