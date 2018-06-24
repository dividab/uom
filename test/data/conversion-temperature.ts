// tslint:disable:max-file-line-count

import { ConversionTest } from "./conversion-test";
import * as Units from "../../src/units";
import { Temperature } from "../../src/quantity";

export const tests: ReadonlyArray<ConversionTest<Temperature>> = [
  {
    name: "0Celsius_273_15Kelvin",
    fromUnit: Units.Celsius,
    fromValue: 0.0,
    toUnit: Units.Kelvin,
    toValue: 273.15
  },
  {
    name: "1Celsius_274_15Kelvin",
    fromUnit: Units.Celsius,
    fromValue: 1.0,
    toUnit: Units.Kelvin,
    toValue: 274.15
  },
  {
    name: "-1Celsius_272_15Kelvin",
    fromUnit: Units.Celsius,
    fromValue: -1.0,
    toUnit: Units.Kelvin,
    toValue: 272.15
  },
  {
    name: "0_kelvin_0_kelvin",
    fromUnit: Units.Kelvin,
    fromValue: 0.0,
    toUnit: Units.Kelvin,
    toValue: 0.0
  },
  {
    name: "10_kelvin_10_kelvin",
    fromUnit: Units.Kelvin,
    fromValue: 10.0,
    toUnit: Units.Kelvin,
    toValue: 10.0
  },
  {
    name: "-5kelvin_-5kelvin",
    fromUnit: Units.Kelvin,
    fromValue: -5.0,
    toUnit: Units.Kelvin,
    toValue: -5.0
  },
  {
    name: "87_1kelvin_87_1kelvin",
    fromUnit: Units.Kelvin,
    fromValue: 87.1,
    toUnit: Units.Kelvin,
    toValue: 87.1
  },
  {
    name: "0kelvin_-273_15celsius",
    fromUnit: Units.Kelvin,
    fromValue: 0.0,
    toUnit: Units.Celsius,
    toValue: -273.15
  },
  {
    name: "354kelvin_80_85celsius",
    fromUnit: Units.Kelvin,
    fromValue: 354.0,
    toUnit: Units.Celsius,
    toValue: 80.85,
    delta: 0.00000001
  },
  {
    name: "-56kelvin_-329_15celsius",
    fromUnit: Units.Kelvin,
    fromValue: -56.0,
    toUnit: Units.Celsius,
    toValue: -329.15
  },
  {
    name: "0kelvin_0rankine",
    fromUnit: Units.Kelvin,
    fromValue: 0.0,
    toUnit: Units.Rankine,
    toValue: 0.0
  },
  {
    name: "245kelvin_441rankine",
    fromUnit: Units.Kelvin,
    fromValue: 245.0,
    toUnit: Units.Rankine,
    toValue: 441.0
  }
];

/*



  it("For_Value_56_8_kelvin_we_should_get_value_102_24_rankine", () => {
    const value: number = 56.8;
    const amountToTest = Amount.create(value, Units.Kelvin);
    const convertedAmount: number = Amount.valueAs(Units.Rankine, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.K2R(value), 0.00001);
  });

  it("For_Value_minus_143_4_kelvin_we_should_get_value_minus_258_12_rankine", () => {
    const value: number = -143.4;
    const amountToTest = Amount.create(value, Units.Kelvin);
    const convertedAmount: number = Amount.valueAs(Units.Rankine, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.K2R(value), 0.00001);
  });

  //kelvin 2 fahrenheit

  it("For_Value_0_kelvin_we_should_get_value_minus_459_67_fahrenheit", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Kelvin);
    const convertedAmount: number = Amount.valueAs(
      Units.Fahrenheit,
      amountToTest
    );
    assert.closeTo(convertedAmount, TemperatureConversion.K2F(value), 0.00001);
  });

  it("For_Value_459_67_kelvin_we_should_get_value_367_736_fahrenheit", () => {
    const value: number = 459.67;
    const amountToTest = Amount.create(value, Units.Kelvin);
    const convertedAmount: number = Amount.valueAs(
      Units.Fahrenheit,
      amountToTest
    );
    assert.closeTo(convertedAmount, TemperatureConversion.K2F(value), 0.00001);
  });

  it("For_Value_minus_10_kelvin_we_should_get_value_minus_477_67_fahrenheit", () => {
    const value: number = -10.0;
    const amountToTest = Amount.create(value, Units.Kelvin);
    const convertedAmount: number = Amount.valueAs(
      Units.Fahrenheit,
      amountToTest
    );
    assert.closeTo(convertedAmount, TemperatureConversion.K2F(value), 0.00001);
  });

  //celsius

  //celsius 2 kelvin

  it("For_Value_0_celsius_we_should_get_value_273_15_kelvin", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Celsius);
    const convertedAmount: number = Amount.valueAs(Units.Kelvin, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.C2K(value), 0.00001);
  });

  it("For_Value_50_celsius_we_should_get_value_323_15_kelvin", () => {
    const value: number = 50.0;
    const amountToTest = Amount.create(value, Units.Celsius);
    const convertedAmount: number = Amount.valueAs(Units.Kelvin, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.C2K(value), 0.00001);
  });

  it("For_Value_minus_20_celsius_we_should_get_value_253_15_kelvin", () => {
    const value: number = -20.0;
    const amountToTest = Amount.create(value, Units.Celsius);
    const convertedAmount: number = Amount.valueAs(Units.Kelvin, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.C2K(value), 0.00001);
  });

  it("For_Value_13_58_celsius_we_should_get_value_286_73_kelvin", () => {
    const value: number = 13.58;
    const amountToTest = Amount.create(value, Units.Celsius);
    const convertedAmount: number = Amount.valueAs(Units.Kelvin, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.C2K(value), 0.00001);
  });

  //celsius 2 celsius

  it("For_Value_0_celsius_we_should_get_value_0_celsius", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Celsius);
    const convertedAmount: number = Amount.valueAs(Units.Celsius, amountToTest);
    assert.closeTo(convertedAmount, value, 0.00001);
  });

  it("For_Value_minus_30_celsius_we_should_get_value_minus_30_celsius", () => {
    const value: number = -30.0;
    const amountToTest = Amount.create(value, Units.Celsius);
    const convertedAmount: number = Amount.valueAs(Units.Celsius, amountToTest);
    assert.closeTo(convertedAmount, value, 0.00001);
  });

  it("For_Value_42_8_celsius_we_should_get_value_42_8_celsius", () => {
    const value: number = 42.8;
    const amountToTest = Amount.create(value, Units.Celsius);
    const convertedAmount: number = Amount.valueAs(Units.Celsius, amountToTest);
    assert.closeTo(convertedAmount, value, 0.00001);
  });

  //celsius 2 rankine

  it("For_Value_0_celsius_we_should_get_value_491_67_rankine", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Celsius);
    const convertedAmount: number = Amount.valueAs(Units.Rankine, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.C2R(value), 0.00001);
  });

  it("For_Value_500_celsius_we_should_get_value_1391_67_rankine", () => {
    const value: number = 500.0;
    const amountToTest = Amount.create(value, Units.Celsius);
    const convertedAmount: number = Amount.valueAs(Units.Rankine, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.C2R(value), 0.00001);
  });

  it("For_Value_minus_50_celsius_we_should_get_value_401_67_rankine", () => {
    const value: number = -50.0;
    const amountToTest = Amount.create(value, Units.Celsius);
    const convertedAmount: number = Amount.valueAs(Units.Rankine, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.C2R(value), 0.00001);
  });

  it("For_Value_minus_204_97_celsius_we_should_get_value_122_724_rankine", () => {
    const value: number = -204.97;
    const amountToTest = Amount.create(value, Units.Celsius);
    const convertedAmount: number = Amount.valueAs(Units.Rankine, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.C2R(value), 0.00001);
  });

  //celsius 2 fahrenheit

  it("For_Value_0_celsius_we_should_get_value_32_fahrenheit", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Celsius);
    const convertedAmount: number = Amount.valueAs(
      Units.Fahrenheit,
      amountToTest
    );
    assert.closeTo(convertedAmount, TemperatureConversion.C2F(value), 0.00001);
  });

  it("For_Value_35_celsius_we_should_get_value_95_fahrenheit", () => {
    const value: number = 35.0;
    const amountToTest = Amount.create(value, Units.Celsius);
    const convertedAmount: number = Amount.valueAs(
      Units.Fahrenheit,
      amountToTest
    );
    assert.closeTo(convertedAmount, TemperatureConversion.C2F(value), 0.00001);
  });

  it("For_Value_104_587_celsius_we_should_get_value_220_2566_fahrenheit", () => {
    const value: number = 104.587;
    const amountToTest = Amount.create(value, Units.Celsius);
    const convertedAmount: number = Amount.valueAs(
      Units.Fahrenheit,
      amountToTest
    );
    assert.closeTo(convertedAmount, TemperatureConversion.C2F(value), 0.00001);
  });

  it("For_Value_minus_51_45_celsius_we_should_get_value_minus_60_61_fahrenheit", () => {
    const value: number = -51.45;
    const amountToTest = Amount.create(value, Units.Celsius);
    const convertedAmount: number = Amount.valueAs(
      Units.Fahrenheit,
      amountToTest
    );
    assert.closeTo(convertedAmount, TemperatureConversion.C2F(value), 0.00001);
  });

  //rankine

  //rankine 2 kelvin

  it("For_Value_0_rankine_we_should_get_value_0_kelvin", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Rankine);
    const convertedAmount: number = Amount.valueAs(Units.Kelvin, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.R2K(value), 0.00001);
  });

  it("For_Value_38_rankine_we_should_get_value_21_11111_kelvin", () => {
    const value: number = 38.0;
    const amountToTest = Amount.create(value, Units.Rankine);
    const convertedAmount: number = Amount.valueAs(Units.Kelvin, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.R2K(value), 0.00001);
  });

  it("For_Value_204_569_rankine_we_should_get_value_113_66056_kelvin", () => {
    const value: number = 204.589;
    const amountToTest = Amount.create(value, Units.Rankine);
    const convertedAmount: number = Amount.valueAs(Units.Kelvin, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.R2K(value), 0.00001);
  });

  it("For_Value_minus_45_rankine_we_should_get_value_minus_25_kelvin", () => {
    const value: number = -45.0;
    const amountToTest = Amount.create(value, Units.Rankine);
    const convertedAmount: number = Amount.valueAs(Units.Kelvin, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.R2K(value), 0.00001);
  });

  it("For_Value_minus_1_18_rankine_we_should_get_value_minus_0_65556_kelvin", () => {
    const value: number = -1.18;
    const amountToTest = Amount.create(value, Units.Rankine);
    const convertedAmount: number = Amount.valueAs(Units.Kelvin, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.R2K(value), 0.00001);
  });

  //rankine 2 celsius

  it("For_Value_0_rankine_we_should_get_value_minus_273_15_celcius", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Rankine);
    const convertedAmount: number = Amount.valueAs(Units.Celsius, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.R2C(value), 0.00001);
  });

  it("For_Value_300_rankine_we_should_get_value_minus_106_48333_celcius", () => {
    const value: number = 300.0;
    const amountToTest = Amount.create(value, Units.Rankine);
    const convertedAmount: number = Amount.valueAs(Units.Celsius, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.R2C(value), 0.00001);
  });

  it("For_Value_521_03_rankine_we_should_get_value_16_31111_celcius", () => {
    const value: number = 521.03;
    const amountToTest = Amount.create(value, Units.Rankine);
    const convertedAmount: number = Amount.valueAs(Units.Celsius, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.R2C(value), 0.00001);
  });

  it("For_Value_minus_98_rankine_we_should_get_value_minus_327_59444_celcius", () => {
    const value: number = -98.0;
    const amountToTest = Amount.create(value, Units.Rankine);
    const convertedAmount: number = Amount.valueAs(Units.Celsius, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.R2C(value), 0.00001);
  });

  it("For_Value_minus_0_01_rankine_we_should_get_value_minus_273_15556_celcius", () => {
    const value: number = -0.01;
    const amountToTest = Amount.create(value, Units.Rankine);
    const convertedAmount: number = Amount.valueAs(Units.Celsius, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.R2C(value), 0.00001);
  });

  //rankine 2 rankine

  it("For_Value_0_rankine_we_should_get_value_0_rankine", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Rankine);
    const convertedAmount: number = Amount.valueAs(Units.Rankine, amountToTest);
    assert.closeTo(convertedAmount, value, 0.00001);
  });

  it("For_Value_3_3_rankine_we_should_get_value_3_3_rankine", () => {
    const value: number = 3.3;
    const amountToTest = Amount.create(value, Units.Rankine);
    const convertedAmount: number = Amount.valueAs(Units.Rankine, amountToTest);
    assert.closeTo(convertedAmount, value, 0.00001);
  });

  it("For_Value_minus_10_18_rankine_we_should_get_value_minus_10_18_rankine", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Rankine);
    const convertedAmount: number = Amount.valueAs(Units.Rankine, amountToTest);
    assert.closeTo(convertedAmount, value, 0.00001);
  });

  //rankine 2 fahrenheit

  it("For_Value_0_rankine_we_should_get_value_minus_459_67_fahrenheit", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Rankine);
    const convertedAmount: number = Amount.valueAs(
      Units.Fahrenheit,
      amountToTest
    );
    assert.closeTo(convertedAmount, TemperatureConversion.R2F(value), 0.00001);
  });

  it("For_Value_895_2_rankine_we_should_get_value_435_53_fahrenheit", () => {
    const value: number = 895.2;
    const amountToTest = Amount.create(value, Units.Rankine);
    const convertedAmount: number = Amount.valueAs(
      Units.Fahrenheit,
      amountToTest
    );
    assert.closeTo(convertedAmount, TemperatureConversion.R2F(value), 0.00001);
  });

  it("For_Value_minus_108_236_rankine_we_should_get_value_minus_567_906_fahrenheit", () => {
    const value: number = -108.236;
    const amountToTest = Amount.create(value, Units.Rankine);
    const convertedAmount: number = Amount.valueAs(
      Units.Fahrenheit,
      amountToTest
    );
    assert.closeTo(convertedAmount, TemperatureConversion.R2F(value), 0.00001);
  });

  //fahrenheit

  //fahrenheit 2 kelvin

  it("For_Value_0_fahrenheit_we_should_get_value_255_37222_kelvin", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Fahrenheit);
    const convertedAmount: number = Amount.valueAs(Units.Kelvin, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.F2K(value), 0.00001);
  });

  it("For_Value_114_fahrenheit_we_should_get_value_318_70556_kelvin", () => {
    const value: number = 114.0;
    const amountToTest = Amount.create(value, Units.Fahrenheit);
    const convertedAmount: number = Amount.valueAs(Units.Kelvin, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.F2K(value), 0.00001);
  });

  it("For_Value_5_05_fahrenheit_we_should_get_value_258_17778_kelvin", () => {
    const value: number = 5.05;
    const amountToTest = Amount.create(value, Units.Fahrenheit);
    const convertedAmount: number = Amount.valueAs(Units.Kelvin, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.F2K(value), 0.00001);
  });

  it("For_Value_minus_222_fahrenheit_we_should_get_value_132_03889_kelvin", () => {
    const value: number = -222.0;
    const amountToTest = Amount.create(value, Units.Fahrenheit);
    const convertedAmount: number = Amount.valueAs(Units.Kelvin, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.F2K(value), 0.00001);
  });

  it("For_Value_minus_547_123_fahrenheit_we_should_get_value_minus_48_585_kelvin", () => {
    const value: number = -547.123;
    const amountToTest = Amount.create(value, Units.Fahrenheit);
    const convertedAmount: number = Amount.valueAs(Units.Kelvin, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.F2K(value), 0.00001);
  });

  //fahrenheit 2 celcius

  it("For_Value_0_fahrenheit_we_should_get_value_minus_17_77778_celcius", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Fahrenheit);
    const convertedAmount: number = Amount.valueAs(Units.Celsius, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.F2C(value), 0.00001);
  });

  it("For_Value_74_fahrenheit_we_should_get_value_23_33333_celcius", () => {
    const value: number = 74.0;
    const amountToTest = Amount.create(value, Units.Fahrenheit);
    const convertedAmount: number = Amount.valueAs(Units.Celsius, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.F2C(value), 0.00001);
  });

  it("For_Value_88_88_fahrenheit_we_should_get_value_31_6_celcius", () => {
    const value: number = 88.88;
    const amountToTest = Amount.create(value, Units.Fahrenheit);
    const convertedAmount: number = Amount.valueAs(Units.Celsius, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.F2C(value), 0.00001);
  });

  it("For_Value_minus_5_fahrenheit_we_should_get_value_minus_20_55556_celcius", () => {
    const value: number = -5.0;
    const amountToTest = Amount.create(value, Units.Fahrenheit);
    const convertedAmount: number = Amount.valueAs(Units.Celsius, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.F2C(value), 0.00001);
  });

  it("For_Value_minus_200_66_fahrenheit_we_should_get_value_minus_129_25556_celcius", () => {
    const value: number = -200.66;
    const amountToTest = Amount.create(value, Units.Fahrenheit);
    const convertedAmount: number = Amount.valueAs(Units.Celsius, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.F2C(value), 0.00001);
  });

  //fahrenheit 2 rankine

  it("For_Value_0_fahrenheit_we_should_get_value_minus_459_67_rankine", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Fahrenheit);
    const convertedAmount: number = Amount.valueAs(Units.Rankine, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.F2R(value), 0.00001);
  });

  it("For_Value_55_fahrenheit_we_should_get_value_514_67_rankine", () => {
    const value: number = 55.0;
    const amountToTest = Amount.create(value, Units.Fahrenheit);
    const convertedAmount: number = Amount.valueAs(Units.Rankine, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.F2R(value), 0.00001);
  });

  it("For_Value_2_033_fahrenheit_we_should_get_value_461_703_rankine", () => {
    const value: number = 2.033;
    const amountToTest = Amount.create(value, Units.Fahrenheit);
    const convertedAmount: number = Amount.valueAs(Units.Rankine, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.F2R(value), 0.00001);
  });

  it("For_Value_minus_5_fahrenheit_we_should_get_value_454_67_rankine", () => {
    const value: number = -5.0;
    const amountToTest = Amount.create(value, Units.Fahrenheit);
    const convertedAmount: number = Amount.valueAs(Units.Rankine, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.F2R(value), 0.00001);
  });

  it("For_Value_minus_879_65_fahrenheit_we_should_get_value_minus_419_98_rankine", () => {
    const value: number = -879.65;
    const amountToTest = Amount.create(value, Units.Fahrenheit);
    const convertedAmount: number = Amount.valueAs(Units.Rankine, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.F2R(value), 0.00001);
  });

  //fahrenheit 2 fahrenheit

  it("For_Value_0_fahrenheit_we_should_get_value_0_fahrenheit", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Fahrenheit);
    const convertedAmount: number = Amount.valueAs(
      Units.Fahrenheit,
      amountToTest
    );
    assert.closeTo(convertedAmount, value, 0.00001);
  });

  it("For_Value_7_fahrenheit_we_should_get_value_0_fahrenheit", () => {
    const value: number = 7.0;
    const amountToTest = Amount.create(value, Units.Fahrenheit);
    const convertedAmount: number = Amount.valueAs(
      Units.Fahrenheit,
      amountToTest
    );
    assert.closeTo(convertedAmount, value, 0.00001);
  });

  it("For_Value_minus_20_fahrenheit_we_should_get_value_minus_20_fahrenheit", () => {
    const value: number = -20.0;
    const amountToTest = Amount.create(value, Units.Fahrenheit);
    const convertedAmount: number = Amount.valueAs(
      Units.Fahrenheit,
      amountToTest
    );
    assert.closeTo(convertedAmount, value, 0.00001);
  });

  //[TestMethod]
  //public void Make_sure_31_6_Celsius_minus_neg_30_Fahrenheit_equals_118_88_Fahrenheit_temperature_difference()
  //{
  //  // Arrange
  //  Amount<ITemperature> c = Amount.Create(31.6, Units.Celsius);
  //  Amount<ITemperature> f = Amount.Create(-30.0, Units.Fahrenheit);

  //  // Act
  //  double result = (c - f).ValueAs(Units.Fahrenheit);

  //  // Assert
  //  assert.equal(118.88, result, 0.01);
  //}

  //[TestMethod]
  //public void Make_sure_31_6_Celsius_minus_neg_30_Fahrenheit_equals_66_04_Celsius_temperature_difference()
  //{
  //  // Arrange
  //  Amount<ITemperature> c = Amount.Create(31.6, Units.Celsius);
  //  Amount<ITemperature> f = Amount.Create(-30.0, Units.Fahrenheit);

  //  // Act
  //  double result = (c - f).ValueAs(Units.Celsius);

  //  // Assert
  //  assert.equal(66.04, result, 0.01);
  //}

  it("Make_sure_20_Celsius_plus_60_Fahrenheit_equals_35_556_Celsius", () => {
    // Arrange
    const c = Amount.create(20.0, Units.Celsius);
    const f = Amount.create(60.0, Units.Fahrenheit);

    // Act
    const result = Amount.valueAs(Units.Celsius, Amount.plus(c, f));

    // Assert
    // assert.closeTo(result, 35.556, 0.001);
    assert.closeTo(result, 53.333, 0.001);
  });

  it("Make_sure_20_Celsius_plus_60_Fahrenheit_equals_96_Fahrenheit", () => {
    // Arrange
    const c = Amount.create(20.0, Units.Celsius);
    const f = Amount.create(60.0, Units.Fahrenheit);

    // Act
    const result = Amount.valueAs(Units.Fahrenheit, Amount.plus(c, f));

    // Assert
    assert.closeTo(result, 127.9, 0.1);
  });

  it("Compare greater than", () => {
    // Arrange
    const a = Amount.create(5.0, Units.Celsius);
    const b = Amount.create(2.0, Units.Celsius);

    // Act
    const result = Amount.greaterThan(a, b);

    // Assert
    assert.isTrue(result);
  });
});

*/
