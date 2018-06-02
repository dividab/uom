import { assert } from "chai";
import * as Amount from "../../src/amount";
import * as Units from "../../src/units";
import { PressureConversion } from "./test_utils/conversion_helpers/pressure_conversion";

describe("amount_pressure_test", () => {
  //pascal 2 kilopascal

  it("For_Value_0_pascal_we_should_get_value_0_kilopascal", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Pascal);
    const convertedAmount: number = Amount.valueAs(
      Units.KiloPascal,
      amountToTest
    );
    assert.equal(convertedAmount, PressureConversion.Pa2KPa(value));
  });

  it("For_Value_3_pascal_we_should_get_value_0_003_kilopascal", () => {
    const value: number = 3.0;
    const amountToTest = Amount.create(value, Units.Pascal);
    const convertedAmount: number = Amount.valueAs(
      Units.KiloPascal,
      amountToTest
    );
    assert.equal(convertedAmount, PressureConversion.Pa2KPa(value));
  });

  it("For_Value_78945_pascal_we_should_get_value_78_945_kilopascal", () => {
    const value: number = 78945.0;
    const amountToTest = Amount.create(value, Units.Pascal);
    const convertedAmount: number = Amount.valueAs(
      Units.KiloPascal,
      amountToTest
    );
    assert.closeTo(convertedAmount, PressureConversion.Pa2KPa(value), 0.00001);
  });

  it("For_Value_0_5_pascal_we_should_get_value_0_0005_kilopascal", () => {
    const value: number = 0.5;
    const amountToTest = Amount.create(value, Units.Pascal);
    const convertedAmount: number = Amount.valueAs(
      Units.KiloPascal,
      amountToTest
    );
    assert.closeTo(convertedAmount, PressureConversion.Pa2KPa(value), 0.00001);
  });

  //kilopascal 2 pascal

  it("For_Value_0_kilopascal_we_should_get_value_0_pascal", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.KiloPascal);
    const convertedAmount: number = Amount.valueAs(Units.Pascal, amountToTest);
    assert.equal(convertedAmount, PressureConversion.KPa2Pa(value));
  });

  it("For_Value_5_kilopascal_we_should_get_value_5000_pascal", () => {
    const value: number = 5.0;
    const amountToTest = Amount.create(value, Units.KiloPascal);
    const convertedAmount: number = Amount.valueAs(Units.Pascal, amountToTest);
    assert.equal(convertedAmount, PressureConversion.KPa2Pa(value));
  });

  it("For_Value_0_865_kilopascal_we_should_get_value_865_pascal", () => {
    const value: number = 0.865;
    const amountToTest = Amount.create(value, Units.KiloPascal);
    const convertedAmount: number = Amount.valueAs(Units.Pascal, amountToTest);
    assert.equal(convertedAmount, PressureConversion.KPa2Pa(value));
  });

  it("For_Value_0_0007_kilopascal_we_should_get_value_0_7_pascal", () => {
    const value: number = 0.0007;
    const amountToTest = Amount.create(value, Units.KiloPascal);
    const convertedAmount: number = Amount.valueAs(Units.Pascal, amountToTest);
    assert.equal(convertedAmount, PressureConversion.KPa2Pa(value));
  });

  //pascal 2 pascal

  it("For_Value_0_pascal_we_should_get_value_0_pascal", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Pascal);
    const convertedAmount: number = Amount.valueAs(Units.Pascal, amountToTest);
    assert.equal(convertedAmount, value);
  });

  it("For_Value_3_pascal_we_should_get_value_3_pascal", () => {
    const value: number = 3.0;
    const amountToTest = Amount.create(value, Units.Pascal);
    const convertedAmount: number = Amount.valueAs(Units.Pascal, amountToTest);
    assert.equal(convertedAmount, value);
  });

  it("For_Value_5_34_pascal_we_should_get_value_5_34_pascal", () => {
    const value: number = 5.34;
    const amountToTest = Amount.create(value, Units.Pascal);
    const convertedAmount: number = Amount.valueAs(Units.Pascal, amountToTest);
    assert.equal(convertedAmount, value);
  });

  //kilopascal 2 kilopascal

  it("For_Value_0_kilopascal_we_should_get_value_0_kilopascal", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.KiloPascal);
    const convertedAmount: number = Amount.valueAs(
      Units.KiloPascal,
      amountToTest
    );
    assert.equal(convertedAmount, value);
  });

  it("For_Value_3_kilopascal_we_should_get_value_3_kilopascal", () => {
    const value: number = 3.0;
    const amountToTest = Amount.create(value, Units.KiloPascal);
    const convertedAmount: number = Amount.valueAs(
      Units.KiloPascal,
      amountToTest
    );
    assert.equal(convertedAmount, value);
  });

  it("For_Value_5_34_kilopascal_we_should_get_value_5_34_kilopascal", () => {
    const value: number = 5.34;
    const amountToTest = Amount.create(value, Units.KiloPascal);
    const convertedAmount: number = Amount.valueAs(
      Units.KiloPascal,
      amountToTest
    );
    assert.equal(convertedAmount, value);
  });

  it("For_Value_29_921_inHG_we_should_get_value_101_325_kilopascal", () => {
    // Arrange
    const p = Amount.create(29.921, Units.InchOfMercury);

    // Act
    const result: number = Amount.valueAs(Units.KiloPascal, p);

    // Assert
    assert.closeTo(result, 101.325, 0.001);
  });

  it("For_Value_1_psi_we_should_get_value_6895_pascal", () => {
    // Arrange
    const p = Amount.create(1.0, Units.PoundForcePerSquareInch);

    // Act
    const result: number = Amount.valueAs(Units.Pascal, p);

    // Assert
    assert.closeTo(result, 6895, 0.5);
  });
});
