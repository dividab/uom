//tslint:disable max-file-line-count

import { assert } from "chai";
import * as Units from "../../src/units";
import * as Amount from "../../src/amount";
import { LengthConversion } from "./test_utils/conversion_helpers/length_conversion";

describe("amount_length_test", () => {
  it("For_Value_0_centimeters_we_should_get_value_0_centimeters", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.equal(value, convertedAmount);
  });

  it("For_Value_10_centimeters_we_should_get_value_10_centimeters", () => {
    const value: number = 10.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.equal(value, convertedAmount);
  });

  it("For_Value_0_centimeters_we_should_get_value_0_meters", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_centimeter_we_should_get_value_0_01_meter", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    //      assert.equal(closeTo(LengthConversion.Cm2M(value), 0.00001), convertedAmount);
    assert.closeTo(convertedAmount, LengthConversion.Cm2M(value), 0.000001);
  });

  it("For_Value_12_centimeters_we_should_get_value_0_12_meters", () => {
    const value: number = 12.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Cm2M(value), 0.000001);
  });

  it("For_Value_357_centimeter_we_should_get_value_3_57_meter", () => {
    const value: number = 357.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Cm2M(value), 0.000001);
  });

  it("For_Value_0_56_centimeters_we_should_get_value_0_0056_meters", () => {
    const value: number = 0.56;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.equal(convertedAmount, LengthConversion.Cm2M(value));
  });

  it("For_Value_0_centimeters_we_should_get_value_0_kilometers", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.equal(convertedAmount, value);
  });

  it("For_Value_1_centimeter_we_should_get_value_0_00001_kilometers", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Cm2Km(value), 0.000001);
  });

  it("For_Value_120000_centimeters_we_should_get_value_1_2_kilometers", () => {
    const value: number = 120000.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Cm2Km(value), 0.00001);
  });

  it("For_Value_78_centimeters_we_should_get_value_0_00078_kilometers", () => {
    const value: number = 78.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Cm2Km(value), 0.00001);
  });

  it("For_Value_0_centimeter_we_should_get_value_0_inch", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.equal(convertedAmount, value);
  });

  it("For_Value_1_centimeter_we_should_get_value_0_3937_inch", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Cm2In(value), 0.00001);
  });

  it("For_Value_10_centimeter_we_should_get_value_3_937_inch", () => {
    const value: number = 10.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Cm2In(value), 0.00001);
  });

  it("For_Value_0_87_centimeter_we_should_get_value_0_34252_inch", () => {
    const value: number = 0.87;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Cm2In(value), 0.00001);
  });

  it("For_Value_245_centimeter_we_should_get_value_96_45669_inch", () => {
    const value: number = 245.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Cm2In(value), 0.00001);
  });

  it("For_Value_0_3_centimeter_we_should_get_value_0_11811_inch", () => {
    const value: number = 0.3;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Cm2In(value), 0.00001);
  });

  it("For_Value_0_centimeter_we_should_get_value_0_foot", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.equal(convertedAmount, value);
  });

  it("For_Value_1_centimeter_we_should_get_value_0_03281_foot", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Cm2Ft(value), 0.00001);
  });

  it("For_Value_10_centimeter_we_should_get_value_0_328_foot", () => {
    const value: number = 10.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Cm2Ft(value), 0.00001);
  });

  it("For_Value_378_centimeter_we_should_get_value_12_40157_foot", () => {
    const value: number = 378.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Cm2Ft(value), 0.00001);
  });

  it("For_Value_0_9_centimeter_we_should_get_value_0_02953_foot", () => {
    const value: number = 0.9;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Cm2Ft(value), 0.00001);
  });

  it("For_Value_0_centimeter_we_should_get_value_0_yard", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_centimeter_we_should_get_value_0_01094_yard", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Cm2Yd(value), 0.00001);
  });

  it("For_Value_100_centimeter_we_should_get_value_1_09361_yard", () => {
    const value: number = 100.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Cm2Yd(value), 0.00001);
  });

  it("For_Value_501_centimeter_we_should_get_value_5_479_yard", () => {
    const value: number = 501.0;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Cm2Yd(value), 0.00001);
  });

  it("For_Value_0_5_centimeter_we_should_get_value_0_00547_yard", () => {
    const value: number = 0.5;
    const amountToTest = Amount.create(value, Units.CentiMeter);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Cm2Yd(value), 0.00001);
  });

  // meter

  //meter2meter

  it("For_Value_0_meter_we_should_get_value_0_meter", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.equal(convertedAmount, value);
  });

  it("For_Value_10_meter_we_should_get_value_10_meter", () => {
    const value: number = 10.0;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.equal(convertedAmount, value);
  });

  //meter2centimeter

  it("For_Value_0_meter_we_should_get_value_0_centimeter", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.equal(convertedAmount, value);
  });

  it("For_Value_1_meter_we_should_get_value_100_centimeter", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.M2Cm(value), 0.00001);
  });

  it("For_Value_12_meter_we_should_get_value_1200_centimeter", () => {
    const value: number = 12.0;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.M2Cm(value), 0.00001);
  });

  it("For_Value_0_56_meter_we_should_get_value_56_centimeter", () => {
    const value: number = 0.56;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.M2Cm(value), 0.00001);
  });

  it("For_Value_0_001_meter_we_should_get_value_0_1_centimeter", () => {
    const value: number = 0.001;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.M2Cm(value), 0.00001);
  });

  it("For_Value_0_meter_we_should_get_value_0_kilometer", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.equal(convertedAmount, value);
  });

  it("For_Value_1_meter_we_should_get_value_0_001_kilometer", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.M2Km(value), 0.00001);
  });

  it("For_Value_1200_meter_we_should_get_value_1_2_kilometer", () => {
    const value: number = 1200.0;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.M2Km(value), 0.00001);
  });

  it("For_Value_0_78_meter_we_should_get_value_0_00078_kilometer", () => {
    const value: number = 0.78;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.M2Km(value), 0.00001);
  });

  it("For_Value_0_meter_we_should_get_value_0_inch", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.equal(convertedAmount, value);
  });

  it("For_Value_1_meter_we_should_get_value_39_37008_inch", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.M2In(value), 0.00001);
  });

  it("For_Value_0_1_meter_we_should_get_value_3_93701_inch", () => {
    const value: number = 0.1;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.M2In(value), 0.00001);
  });

  it("For_Value_0_0087_meter_we_should_get_value_0_34252_inch", () => {
    const value: number = 0.0087;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.M2In(value), 0.00001);
  });

  it("For_Value_2_45_meter_we_should_get_value_96_45669_inch", () => {
    const value: number = 2.45;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.M2In(value), 0.00001);
  });

  it("For_Value_0_003_meter_we_should_get_value_0_11811_inch", () => {
    const value: number = 0.003;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.M2In(value), 0.00001);
  });

  it("For_Value_0_meter_we_should_get_value_0_foot", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.equal(convertedAmount, value);
  });

  it("For_Value_1_meter_we_should_get_value_3_28084_foot", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.M2Ft(value), 0.00001);
  });

  it("For_Value_0_1_meter_we_should_get_value_0_32808_foot", () => {
    const value: number = 0.1;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.M2Ft(value), 0.00001);
  });

  it("For_Value_3_78_meter_we_should_get_value_12_40157_foot", () => {
    const value: number = 3.78;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.M2Ft(value), 0.00001);
  });

  it("For_Value_0_009_meter_we_should_get_value_0_02953_foot", () => {
    const value: number = 0.009;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.M2Ft(value), 0.00001);
  });

  it("For_Value_0_meter_we_should_get_value_0_yard", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_meter_we_should_get_value_1_09361_yard", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.M2Yd(value), 0.00001);
  });

  it("For_Value_5_01_meter_we_should_get_value_5_479_yard", () => {
    const value: number = 5.01;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.M2Yd(value), 0.00001);
  });

  it("For_Value_0_005_meter_we_should_get_value_0_00547_yard", () => {
    const value: number = 0.005;
    const amountToTest = Amount.create(value, Units.Meter);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.M2Yd(value), 0.00001);
  });

  //kilometer

  //kilometer to centimeter

  it("For_Value_0_kilometer_we_should_get_value_0_centimeter", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_kilometer_we_should_get_value_100000_centimeter", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Km2Cm(value), 0.00001);
  });

  it("For_Value_35_kilometer_we_should_get_value_3500000_centimeter", () => {
    const value: number = 35.0;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Km2Cm(value), 0.00001);
  });

  it("For_Value_2_56_kilometer_we_should_get_value_256000_centimeter", () => {
    const value: number = 2.56;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Km2Cm(value), 0.00001);
  });

  it("For_Value_0_33_kilometer_we_should_get_value_33000_centimeter", () => {
    const value: number = 0.33;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Km2Cm(value), 0.00001);
  });

  it("For_Value_0_000001_kilometer_we_should_get_value_0_1_centimeter", () => {
    const value: number = 0.000001;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Km2Cm(value), 0.00001);
  });

  //kilometer 2 meter

  it("For_Value_0_kilometer_we_should_get_value_0_meter", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_kilometer_we_should_get_value_1000_meter", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2M(value), 0.00001);
  });

  it("For_Value_11_kilometer_we_should_get_value_11000_meter", () => {
    const value: number = 11.0;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2M(value), 0.00001);
  });

  it("For_Value_2_78_kilometer_we_should_get_value_2780_meter", () => {
    const value: number = 2.78;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2M(value), 0.00001);
  });

  it("For_Value_3_5478_kilometer_we_should_get_value_3547_8_meter", () => {
    const value: number = 3.5478;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2M(value), 0.00001);
  });

  it("For_Value_0_52_kilometer_we_should_get_value_520_meter", () => {
    const value: number = 0.52;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2M(value), 0.00001);
  });

  it("For_Value_0_00084_kilometer_we_should_get_value_0_84_meter", () => {
    const value: number = 0.00084;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2M(value), 0.00001);
  });

  //kilometer 2 kilometer

  it("For_Value_0_kilometer_we_should_get_value_0_kilometer", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_kilometer_we_should_get_value_1_kilometer", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.equal(value, convertedAmount);
  });

  //kilometer 2 inch

  it("For_Value_0_kilometer_we_should_get_value_0_inch", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_kilometer_we_should_get_value_39370_07874_inch", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2In(value), 0.00001);
  });

  it("For_Value_5_kilometer_we_should_get_value_196850_3937_inch", () => {
    const value: number = 5.0;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2In(value), 0.00001);
  });

  it("For_Value_2_34_kilometer_we_should_get_value_92125_98425_inch", () => {
    const value: number = 2.34;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2In(value), 0.00001);
  });

  it("For_Value_0_0004_kilometer_we_should_get_value_15_74803_inch", () => {
    const value: number = 0.0004;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2In(value), 0.00001);
  });

  it("For_Value_0_00002_kilometer_we_should_get_value_0_7874_inch", () => {
    const value: number = 0.00002;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2In(value), 0.00001);
  });

  //kilometer 2 foot

  it("For_Value_0_kilometer_we_should_get_value_0_foot", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_kilometer_we_should_get_value_3280_8399_foot", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2Ft(value), 0.00001);
  });

  it("For_Value_4_kilometer_we_should_get_value_13123_35958_foot", () => {
    const value: number = 4.0;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2Ft(value), 0.00001);
  });

  it("For_Value_2_11_kilometer_we_should_get_value_6922_57218_foot", () => {
    const value: number = 2.11;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2Ft(value), 0.00001);
  });

  it("For_Value_0_0023_kilometer_we_should_get_value_7_54593_foot", () => {
    const value: number = 0.0023;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2Ft(value), 0.00001);
  });

  it("For_Value_0_00014_kilometer_we_should_get_value_0_45932_foot", () => {
    const value: number = 0.00014;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2Ft(value), 0.00001);
  });

  //kilometer 2 yard

  it("For_Value_0_kilometer_we_should_get_value_0_yard", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_kilometer_we_should_get_value_1093_6133_yard", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2Yd(value), 0.00001);
  });

  it("For_Value_5_kilometer_we_should_get_value_5468_06649_yard", () => {
    const value: number = 5.0;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2Yd(value), 0.00001);
  });

  it("For_Value_1_2_kilometer_we_should_get_value_1312_33596_yard", () => {
    const value: number = 1.2;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2Yd(value), 0.00001);
  });

  it("For_Value_0_3_kilometer_we_should_get_value_328_08399_yard", () => {
    const value: number = 0.3;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2Yd(value), 0.00001);
  });

  it("For_Value_0_0002_kilometer_we_should_get_value_0_21872_yard", () => {
    const value: number = 0.0002;
    const amountToTest = Amount.create(value, Units.Kilometer);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Km2Yd(value), 0.00001);
  });

  //inch

  //inch 2 centimeter

  it("For_Value_0_inch_we_should_get_value_0_centimeter", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_inch_we_should_get_value_2_54_centimeter", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.In2Cm(value), 0.00001);
  });

  it("For_Value_3_inch_we_should_get_value_7_62_centimeter", () => {
    const value: number = 3.0;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.In2Cm(value), 0.00001);
  });

  it("For_Value_2_5_inch_we_should_get_value_6_35_centimeter", () => {
    const value: number = 2.5;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.In2Cm(value), 0.00001);
  });

  it("For_Value_0_4_inch_we_should_get_value_1_016_centimeter", () => {
    const value: number = 0.4;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.In2Cm(value), 0.00001);
  });

  it("For_Value_0_21_inch_we_should_get_value_0_5334_centimeter", () => {
    const value: number = 0.21;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.In2Cm(value), 0.00001);
  });

  //inch 2 meter

  it("For_Value_0_inch_we_should_get_value_0_meter", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_inch_we_should_get_value_0_0254_meter", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.In2M(value), 0.00001);
  });

  it("For_Value_6_inch_we_should_get_value_0_1524_meter", () => {
    const value: number = 6.0;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.In2M(value), 0.00001);
  });

  it("For_Value_3_4_inch_we_should_get_value_0_08636_meter", () => {
    const value: number = 3.4;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.In2M(value), 0.00001);
  });

  it("For_Value_0_9_inch_we_should_get_value_0_02286_meter", () => {
    const value: number = 0.9;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.In2M(value), 0.00001);
  });

  //inch 2 kilometer

  it("For_Value_0_inch_we_should_get_value_0_kilometer", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_inch_we_should_get_value_0_0000254_kilometer", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.In2Km(value), 0.00001);
  });

  it("For_Value_158_inch_we_should_get_value_0_00401_kilometer", () => {
    const value: number = 158.0;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.In2Km(value), 0.00001);
  });

  it("For_Value_1024_5_inch_we_should_get_value_0_02602_kilometer", () => {
    const value: number = 1024.5;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.In2Km(value), 0.00001);
  });

  //inch 2 inch

  it("For_Value_0_inch_we_should_get_value_0_inch", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.equal(value, convertedAmount);
  });

  it("For_Value_5_inch_we_should_get_value_5_inch", () => {
    const value: number = 5.0;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.equal(value, convertedAmount);
  });

  //inch 2 foot

  it("For_Value_0_inch_we_should_get_value_0_foot", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_inch_we_should_get_value_0_08333_foot", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.In2Ft(value), 0.00001);
  });

  it("For_Value_13_inch_we_should_get_value_1_08333_foot", () => {
    const value: number = 13.0;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.In2Ft(value), 0.00001);
  });

  it("For_Value_100_8_inch_we_should_get_value_8_4_foot", () => {
    const value: number = 100.8;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.In2Ft(value), 0.00001);
  });

  it("For_Value_0_99_inch_we_should_get_value_0_0825_foot", () => {
    const value: number = 0.99;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.In2Ft(value), 0.00001);
  });

  //inch 2 yard

  it("For_Value_0_inch_we_should_get_value_0_yard", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_inch_we_should_get_value_0_02778_yard", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.In2Yd(value), 0.00001);
  });

  it("For_Value_12_inch_we_should_get_value_0_33333_yard", () => {
    const value: number = 12.0;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.In2Yd(value), 0.00001);
  });

  it("For_Value_0_2_inch_we_should_get_value_0_00556_yard", () => {
    const value: number = 0.2;
    const amountToTest = Amount.create(value, Units.Inch);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.In2Yd(value), 0.00001);
  });

  //foot to cm

  it("For_Value_0_foot_we_should_get_value_0_centimeter", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.equal(0, convertedAmount);
  });

  it("For_Value_1_foot_we_should_get_value_30_48_centimeter", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Ft2Cm(value), 0.00001);
  });

  it("For_Value_89_foot_we_should_get_value_2712_72_centimeter", () => {
    const value: number = 89.0;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Ft2Cm(value), 0.00001);
  });

  it("For_Value_30_53_foot_we_should_get_value_930_5544_centimeter", () => {
    const value: number = 30.53;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Ft2Cm(value), 0.00001);
  });

  //foot 2 meter

  it("For_Value_0_foot_we_should_get_value_0_meter", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_foot_we_should_get_value_0_3048_meter", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Ft2M(value), 0.00001);
  });

  it("For_Value_29_foot_we_should_get_value_8_8392_meter", () => {
    const value: number = 29.0;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Ft2M(value), 0.00001);
  });

  it("For_Value_53_5_foot_we_should_get_value_16_3068_meter", () => {
    const value: number = 53.5;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Ft2M(value), 0.00001);
  });

  it("For_Value_0_8_foot_we_should_get_value_0_24384_meter", () => {
    const value: number = 0.8;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Ft2M(value), 0.00001);
  });

  //foot to kilometer

  it("For_Value_0_foot_we_should_get_value_0_kilometer", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_foot_we_should_get_value_0_0003_kilometer", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Ft2Km(value), 0.00001);
  });

  it("For_Value_1080_foot_we_should_get_value_0_32918_kilometer", () => {
    const value: number = 1080.0;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Ft2Km(value), 0.00001);
  });

  it("For_Value_38574_7_foot_we_should_get_value_11_75757_kilometer", () => {
    const value: number = 38574.7;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Ft2Km(value), 0.00001);
  });

  //foot to inch

  it("For_Value_0_foot_we_should_get_value_0_inch", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_foot_we_should_get_value_12_inch", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Ft2In(value), 0.00001);
  });

  it("For_Value_50_foot_we_should_get_value_600_inch", () => {
    const value: number = 50.0;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Ft2In(value), 0.00001);
  });

  it("For_Value_3_7_foot_we_should_get_value_44_4_inch", () => {
    const value: number = 3.7;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Ft2In(value), 0.00001);
  });

  it("For_Value_0_5_foot_we_should_get_value_6_inch", () => {
    const value: number = 0.5;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Ft2In(value), 0.00001);
  });

  it("For_Value_0_007_foot_we_should_get_value_0_084_inch", () => {
    const value: number = 0.007;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Ft2In(value), 0.00001);
  });

  //foot 2 foot

  it("For_Value_0_foot_we_should_get_value_0_foot", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.equal(value, convertedAmount);
  });

  it("For_Value_4_foot_we_should_get_value_4_foot", () => {
    const value: number = 4.0;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(value, convertedAmount, 0.000001);
  });

  it("For_Value_2_5_foot_we_should_get_value_2_5_foot", () => {
    const value: number = 2.5;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(value, convertedAmount, 0.00001);
  });

  //foot 2 yard

  it("For_Value_0_foot_we_should_get_value_0_yard", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_foot_we_should_get_value_0_33333_yard", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Ft2Yd(value), 0.00001);
  });

  it("For_Value_15_foot_we_should_get_value_5_yard", () => {
    const value: number = 15.0;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Ft2Yd(value), 0.00001);
  });

  it("For_Value_20_4_foot_we_should_get_value_6_8_yard", () => {
    const value: number = 20.4;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Ft2Yd(value), 0.00001);
  });

  it("For_Value_0_5_foot_we_should_get_value_0_16667_yard", () => {
    const value: number = 0.5;
    const amountToTest = Amount.create(value, Units.Foot);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Ft2Yd(value), 0.00001);
  });

  //yard
  //yard 2 centimeter

  it("For_Value_0_yard_we_should_get_value_0_centimeter", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_yard_we_should_get_value_91_44_centimeter", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Yd2Cm(value), 0.00001);
  });

  it("For_Value_3_yard_we_should_get_value_274_32_centimeter", () => {
    const value: number = 3.0;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Yd2Cm(value), 0.00001);
  });

  it("For_Value_1_1_yard_we_should_get_value_100_584_centimeter", () => {
    const value: number = 1.1;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Yd2Cm(value), 0.00001);
  });

  it("For_Value_0_008_yard_we_should_get_value_0_73152_centimeter", () => {
    const value: number = 0.008;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(
      Units.CentiMeter,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Yd2Cm(value), 0.00001);
  });

  //yard 2 meter

  it("For_Value_0_yard_we_should_get_value_0_meter", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_yard_we_should_get_value_0_9144_meter", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Yd2M(value), 0.00001);
  });

  it("For_Value_48_yard_we_should_get_value_43_8912_meter", () => {
    const value: number = 48.0;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Yd2M(value), 0.00001);
  });

  it("For_Value_10_5_yard_we_should_get_value_9_6012_meter", () => {
    const value: number = 10.5;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Yd2M(value), 0.00001);
  });

  it("For_Value_0_8_yard_we_should_get_value_0_73152_meter", () => {
    const value: number = 0.8;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(Units.Meter, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Yd2M(value), 0.00001);
  });

  //yard 2 kilometer

  it("For_Value_0_yard_we_should_get_value_0_kilometer", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_yard_we_should_get_value_0_00091_kilometer", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Yd2Km(value), 0.00001);
  });

  it("For_Value_69_yard_we_should_get_value_0_06309_kilometer", () => {
    const value: number = 69.0;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Yd2Km(value), 0.00001);
  });

  it("For_Value_127_5_yard_we_should_get_value_0_11659_kilometer", () => {
    const value: number = 127.5;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Yd2Km(value), 0.00001);
  });

  it("For_Value_0_88_yard_we_should_get_value_0_0008_kilometer", () => {
    const value: number = 0.88;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(
      Units.Kilometer,
      amountToTest
    );
    assert.closeTo(convertedAmount, LengthConversion.Yd2Km(value), 0.00001);
  });

  //yard 2 inch

  it("For_Value_0_yard_we_should_get_value_0_inch", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_yard_we_should_get_value_36_inch", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Yd2In(value), 0.00001);
  });

  it("For_Value_5_yard_we_should_get_value_180_inch", () => {
    const value: number = 5.0;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Yd2In(value), 0.00001);
  });

  it("For_Value_2_4_yard_we_should_get_value_86_4_inch", () => {
    const value: number = 2.4;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Yd2In(value), 0.00001);
  });

  it("For_Value_0_03_yard_we_should_get_value_1_08_inch", () => {
    const value: number = 0.03;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(Units.Inch, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Yd2In(value), 0.00001);
  });

  //yard 2 foot

  it("For_Value_0_yard_we_should_get_value_0_foot", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.equal(value, convertedAmount);
  });

  it("For_Value_1_yard_we_should_get_value_3_foot", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Yd2Ft(value), 0.00001);
  });

  it("For_Value_15_yard_we_should_get_value_65_foot", () => {
    const value: number = 15.0;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Yd2Ft(value), 0.00001);
  });

  it("For_Value_5_8_yard_we_should_get_value_17_4_foot", () => {
    const value: number = 5.8;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Yd2Ft(value), 0.00001);
  });

  it("For_Value_0_1_yard_we_should_get_value_0_3_foot", () => {
    const value: number = 0.1;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(Units.Foot, amountToTest);
    assert.closeTo(convertedAmount, LengthConversion.Yd2Ft(value), 0.00001);
  });

  //yard 2 yard

  it("For_Value_0_yard_we_should_get_value_0_yard", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.equal(value, convertedAmount);
  });

  it("For_Value_4_yard_we_should_get_value_4_yard", () => {
    const value: number = 4.0;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, value, 0.000001);
  });

  it("For_Value_1_2_yard_we_should_get_value_1_2_yard", () => {
    const value: number = 1.2;
    const amountToTest = Amount.create(value, Units.Yard);
    const convertedAmount: number = Amount.valueAs(Units.Yard, amountToTest);
    assert.closeTo(convertedAmount, value, 0.000001);
  });
});
