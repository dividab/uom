// import { assert } from "chai";
// import * as Amount from "../../src/measure/amount";
// import * as Units from "../../src/measure/units";
// import { TemperatureConversion } from "../test_utils/conversion_helpers/temperature_conversion";

// tslint:disable:no-console
describe("amount_temperature_comparisions_test", () => {
  it("1 SquareRootPascal should equal 33,44169 SquareRootInchOfWaterColumn", () => {
    // const amount = Amount.create(1, Units.SquareRootPascal);
    // const inWc = Amount.valueAs(Units.SquareRootInchOfWaterColumn, amount);
    /*  const pascal = Amount.create(1, Units.SquareRootPascal);
      // console.log(Units.getStringFromUnit(pascal.unit));
      // console.log(Units.getStringFromUnit(Units.SquareRootInchOfWaterColumn));
  
      const inWc = Amount.valueAs(Units.SquareRootInchOfWaterColumn, pascal);
      assert.equal(33.44169, inWc);*/
    //assert.isTrue(Amount.equals(inWc, amount));
  });

  it("", () => {
    // const amount = Amount.create(1, Units.LiterPerSecondPerSquareRootPascal);
    // const value = Amount.valueAs(
    //   Units.CubicFeetPerMinutePerSquareRootInchOfWaterColumn,
    //   amount
    // );
    /*  const cubicMeter = Amount.valueAs(units.Cub)
        assert.equal(chck, cubicFeetinWc);*/
  });

  /*  it('1.0 Celsius should be greater than 273.15 Kelvin', () => {
      assert.isTrue(Amount.greaterThan(Amount.create(1.0, Units.Celsius), Amount.create(273.15, Units.Kelvin)));
    });
  
    it('-1.0 Celsius should be less than 273.15 Kelvin', () => {
      assert.isTrue(Amount.lessThan(Amount.create(-1.0, Units.Celsius), Amount.create(273.15, Units.Kelvin)));
    });*/
});
