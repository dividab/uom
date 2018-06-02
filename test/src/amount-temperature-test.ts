//tslint:disable max-file-line-count

import { assert } from "chai";
import * as Amount from "../../src/amount";
import * as Units from "../../src/units";
import { TemperatureConversion } from "./test_utils/conversion_helpers/temperature_conversion";

describe("amount_temperature_comparisions_test", () => {
  it("0.0 Celsius should equal 273.15 Kelvin", () => {
    // const kelvinInCelsius = Amount.valueAs(
    //   Units.Celsius,
    //   Amount.create(273.15, Units.Kelvin)
    // );
    // const celsiusInCelsius = Amount.valueAs(
    //   Units.Celsius,
    //   Amount.create(0.0, Units.Celsius)
    // );

    assert.isTrue(
      Amount.equals(
        Amount.create(0.0, Units.Celsius),
        Amount.create(273.15, Units.Kelvin)
      )
    );
  });

  it("1.0 Celsius should be greater than 273.15 Kelvin", () => {
    assert.isTrue(
      Amount.greaterThan(
        Amount.create(1.0, Units.Celsius),
        Amount.create(273.15, Units.Kelvin)
      )
    );
  });

  it("-1.0 Celsius should be less than 273.15 Kelvin", () => {
    assert.isTrue(
      Amount.lessThan(
        Amount.create(-1.0, Units.Celsius),
        Amount.create(273.15, Units.Kelvin)
      )
    );
  });
});

describe("amount_temperature_conversions_test", () => {
  //kelvin

  //kelvin 2 kelvin

  it("For_Value_0_kelvin_we_should_get_value_0_kelvin", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Kelvin);
    const convertedAmount: number = Amount.valueAs(Units.Kelvin, amountToTest);
    assert.closeTo(convertedAmount, value, 0.00001);
  });

  it("For_Value_10_kelvin_we_should_get_value_10_kelvin", () => {
    const value: number = 10.0;
    const amountToTest = Amount.create(value, Units.Kelvin);
    const convertedAmount: number = Amount.valueAs(Units.Kelvin, amountToTest);
    assert.closeTo(convertedAmount, value, 0.00001);
  });

  it("For_Value_minus_5_kelvin_we_should_get_value_minus_5_kelvin", () => {
    const value: number = -5.0;
    const amountToTest = Amount.create(value, Units.Kelvin);
    const convertedAmount: number = Amount.valueAs(Units.Kelvin, amountToTest);
    assert.closeTo(convertedAmount, value, 0.00001);
  });

  it("For_Value_87_1_kelvin_we_should_get_value_87_1_kelvin", () => {
    const value: number = 87.1;
    const amountToTest = Amount.create(value, Units.Kelvin);
    const convertedAmount: number = Amount.valueAs(Units.Kelvin, amountToTest);
    assert.closeTo(convertedAmount, value, 0.00001);
  });

  //kelvin 2 celsius

  it("For_Value_0_kelvin_we_should_get_value_minus_273_15_celsius", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Kelvin);
    const convertedAmount: number = Amount.valueAs(Units.Celsius, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.K2C(value), 0.00001);
  });

  it("For_Value_354_kelvin_we_should_get_value_80_85_celsius", () => {
    const value: number = 354.0;
    const amountToTest = Amount.create(value, Units.Kelvin);
    const convertedAmount: number = Amount.valueAs(Units.Celsius, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.K2C(value), 0.00001);
  });

  it("For_Value_minus_56_kelvin_we_should_get_value_minus_329_15_celsius", () => {
    const value: number = -56.0;
    const amountToTest = Amount.create(value, Units.Kelvin);
    const convertedAmount: number = Amount.valueAs(Units.Celsius, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.K2C(value), 0.00001);
  });

  //kelvin 2 rankine

  it("For_Value_0_kelvin_we_should_get_value_0_rankine", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Kelvin);
    const convertedAmount: number = Amount.valueAs(Units.Rankine, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.K2R(value), 0.00001);
  });

  it("For_Value_245_kelvin_we_should_get_value_441_rankine", () => {
    const value: number = 245.0;
    const amountToTest = Amount.create(value, Units.Kelvin);
    const convertedAmount: number = Amount.valueAs(Units.Rankine, amountToTest);
    assert.closeTo(convertedAmount, TemperatureConversion.K2R(value), 0.00001);
  });

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
