import { ConversionTest } from "./conversion-test";
import * as Units from "../../src/units";
import { Volume } from "../../src/quantity";

export const tests: ReadonlyArray<ConversionTest<Volume>> = [
  {
    name: "0Liter_0CubicMeter",
    fromUnit: Units.Liter,
    fromValue: 0.0,
    toUnit: Units.CubicMeter,
    toValue: 0.0
  },
  {
    name: "3liter_0_003cubic_meter",
    fromUnit: Units.Liter,
    fromValue: 3.0,
    toUnit: Units.CubicMeter,
    toValue: 0.003
  }
];

/*

  it("For_Value_78945_liter_we_should_get_value_78_945_cubic_meter", () => {
    const value: number = 78945.0;
    const amountToTest: Amount.Amount<Volume> = Amount.create(
      value,
      Units.Liter
    );
    const convertedAmount: number = Amount.valueAs(
      Units.CubicMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, VolumeConversion.L2M3(value), 0.00001);
  });

  it("For_Value_0_5_liter_we_should_get_value_0_0005_cubic_meter", () => {
    const value: number = 0.5;
    const amountToTest: Amount.Amount<Volume> = Amount.create(
      value,
      Units.Liter
    );
    const convertedAmount: number = Amount.valueAs(
      Units.CubicMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, VolumeConversion.L2M3(value), 0.00001);
  });

  //cubic_meter 2 liter

  it("For_Value_0_cubic_meter_we_should_get_value_0_liter", () => {
    const value: number = 0.0;
    const amountToTest: Amount.Amount<Volume> = Amount.create(
      value,
      Units.CubicMeter
    );
    const convertedAmount: number = Amount.valueAs(Units.Liter, amountToTest);
    assert.equal(convertedAmount, VolumeConversion.M32L(value));
  });

  it("For_Value_5_cubic_meter_we_should_get_value_5000_liter", () => {
    const value: number = 5.0;
    const amountToTest: Amount.Amount<Volume> = Amount.create(
      value,
      Units.CubicMeter
    );
    const convertedAmount: number = Amount.valueAs(Units.Liter, amountToTest);
    assert.equal(convertedAmount, VolumeConversion.M32L(value));
  });

  it("For_Value_100_hcf_we_should_get_value_10000_ft3", () => {
    const value: number = 100.0;
    const amountToTest: Amount.Amount<Volume> = Amount.create(
      value,
      Units.HundredCubicFeet
    );
    const convertedAmount: number = Amount.valueAs(
      Units.CubicFeet,
      amountToTest
    );
    assert.closeTo(convertedAmount, 10000.0, 0.001);
  });

  it("For_Value_0_865_cubic_meter_we_should_get_value_865_liter", () => {
    const value: number = 0.865;
    const amountToTest: Amount.Amount<Volume> = Amount.create(
      value,
      Units.CubicMeter
    );
    const convertedAmount: number = Amount.valueAs(Units.Liter, amountToTest);
    assert.equal(convertedAmount, VolumeConversion.M32L(value));
  });

  it("For_Value_0_0007_cubic_meter_we_should_get_value_0_7_liter", () => {
    const value: number = 0.0007;
    const amountToTest: Amount.Amount<Volume> = Amount.create(
      value,
      Units.CubicMeter
    );
    const convertedAmount: number = Amount.valueAs(Units.Liter, amountToTest);
    assert.equal(convertedAmount, VolumeConversion.M32L(value));
  });

  //liter 2 liter

  it("For_Value_0_liter_we_should_get_value_0_liter", () => {
    const value: number = 0.0;
    const amountToTest: Amount.Amount<Volume> = Amount.create(
      value,
      Units.Liter
    );
    const convertedAmount: number = Amount.valueAs(Units.Liter, amountToTest);
    assert.equal(convertedAmount, value);
  });

  it("For_Value_3_liter_we_should_get_value_3_liter", () => {
    const value: number = 3.0;
    const amountToTest: Amount.Amount<Volume> = Amount.create(
      value,
      Units.Liter
    );
    const convertedAmount: number = Amount.valueAs(Units.Liter, amountToTest);
    assert.equal(convertedAmount, value);
  });

  it("For_Value_5_34_liter_we_should_get_value_5_34_liter", () => {
    const value: number = 5.34;
    const amountToTest: Amount.Amount<Volume> = Amount.create(
      value,
      Units.Liter
    );
    const convertedAmount: number = Amount.valueAs(Units.Liter, amountToTest);
    assert.equal(convertedAmount, value);
  });

  //cubic_meter 2 cubic_meter

  it("For_Value_0_cubic_meter_we_should_get_value_0_cubic_meter", () => {
    const value: number = 0.0;
    const amountToTest: Amount.Amount<Volume> = Amount.create(
      value,
      Units.CubicMeter
    );
    const convertedAmount: number = Amount.valueAs(
      Units.CubicMeter,
      amountToTest
    );
    assert.equal(convertedAmount, value);
  });

  it("For_Value_3_cubic_meter_we_should_get_value_3_cubic_meter", () => {
    const value: number = 3.0;
    const amountToTest: Amount.Amount<Volume> = Amount.create(
      value,
      Units.CubicMeter
    );
    const convertedAmount: number = Amount.valueAs(
      Units.CubicMeter,
      amountToTest
    );
    assert.equal(convertedAmount, value);
  });

  it("For_Value_5_34_cubic_meter_we_should_get_value_5_34_cubic_meter", () => {
    const value: number = 5.34;
    const amountToTest: Amount.Amount<Volume> = Amount.create(
      value,
      Units.CubicMeter
    );
    const convertedAmount: number = Amount.valueAs(
      Units.CubicMeter,
      amountToTest
    );
    assert.equal(convertedAmount, value);
  });
});



  it("For_Value_100_cf_we_should_get_value_2_point_832_m3", () => {
    // Test values from
    // http://www.wolframalpha.com/input/?i=100+cf

    // Arrange
    const a = Amount.create(100.0, Units.CubicFeet);

    // Act
    const m3: number = Amount.valueAs(Units.CubicMeter, a);

    // Assert
    assert.closeTo(m3, 2.832, 0.001);
  });

  */
