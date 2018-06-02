import { assert } from "chai";
import * as Amount from "../../src/amount";
import * as Units from "../../src/units";
import { MassConversion } from "./test_utils/conversion_helpers/mass_conversion";

describe("amount_mass_test", () => {
  //gram 2 kilogram

  it("For_Value_0_gram_we_should_get_value_0_kilogram", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Gram);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilogram,
      amountToTest
    );
    assert.equal(convertedAmount, MassConversion.G2Kg(value));
  });

  it("For_Value_3_gram_we_should_get_value_0_003_kilogram", () => {
    const value: number = 3.0;
    const amountToTest = Amount.create(value, Units.Gram);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilogram,
      amountToTest
    );
    assert.equal(convertedAmount, MassConversion.G2Kg(value));
  });

  it("For_Value_78945_gram_we_should_get_value_78_945_kilogram", () => {
    const value: number = 78945.0;
    const amountToTest = Amount.create(value, Units.Gram);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilogram,
      amountToTest
    );
    assert.closeTo(convertedAmount, MassConversion.G2Kg(value), 0.00001);
  });

  it("For_Value_0_5_gram_we_should_get_value_0_0005_kilogram", () => {
    const value: number = 0.5;
    const amountToTest = Amount.create(value, Units.Gram);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilogram,
      amountToTest
    );
    assert.closeTo(convertedAmount, MassConversion.G2Kg(value), 0.00001);
  });

  //kilogram 2 gram

  it("For_Value_0_kilogram_we_should_get_value_0_gram", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Kilogram);
    const convertedAmount: number = Amount.valueAs(Units.Gram, amountToTest);
    assert.equal(convertedAmount, MassConversion.Kg2G(value));
  });

  it("For_Value_5_kilogram_we_should_get_value_5000_gram", () => {
    const value: number = 5.0;
    const amountToTest = Amount.create(value, Units.Kilogram);
    const convertedAmount: number = Amount.valueAs(Units.Gram, amountToTest);
    assert.equal(convertedAmount, MassConversion.Kg2G(value));
  });

  it("For_Value_0_865_kilogram_we_should_get_value_865_gram", () => {
    const value: number = 0.865;
    const amountToTest = Amount.create(value, Units.Kilogram);
    const convertedAmount: number = Amount.valueAs(Units.Gram, amountToTest);
    assert.equal(convertedAmount, MassConversion.Kg2G(value));
  });

  it("For_Value_0_0007_kilogram_we_should_get_value_0_7_gram", () => {
    const value: number = 0.0007;
    const amountToTest = Amount.create(value, Units.Kilogram);
    const convertedAmount: number = Amount.valueAs(Units.Gram, amountToTest);
    assert.equal(convertedAmount, MassConversion.Kg2G(value));
  });

  //gram 2 gram

  it("For_Value_0_gram_we_should_get_value_0_gram", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Gram);
    const convertedAmount: number = Amount.valueAs(Units.Gram, amountToTest);
    assert.equal(convertedAmount, value);
  });

  it("For_Value_3_gram_we_should_get_value_3_gram", () => {
    const value: number = 3.0;
    const amountToTest = Amount.create(value, Units.Gram);
    const convertedAmount: number = Amount.valueAs(Units.Gram, amountToTest);
    assert.equal(convertedAmount, value);
  });

  it("For_Value_5_34_gram_we_should_get_value_5_34_gram", () => {
    const value: number = 5.34;
    const amountToTest = Amount.create(value, Units.Gram);
    const convertedAmount: number = Amount.valueAs(Units.Gram, amountToTest);
    assert.equal(convertedAmount, value);
  });

  //kilogram 2 kilogram

  it("For_Value_0_kilogram_we_should_get_value_0_kilogram", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Kilogram);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilogram,
      amountToTest
    );
    assert.equal(convertedAmount, value);
  });

  it("For_Value_3_kilogram_we_should_get_value_3_kilogram", () => {
    const value: number = 3.0;
    const amountToTest = Amount.create(value, Units.Kilogram);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilogram,
      amountToTest
    );
    assert.equal(convertedAmount, value);
  });

  it("For_Value_5_34_kilogram_we_should_get_value_5_34_kilogram", () => {
    const value: number = 5.34;
    const amountToTest = Amount.create(value, Units.Kilogram);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilogram,
      amountToTest
    );
    assert.equal(convertedAmount, value);
  });
});
