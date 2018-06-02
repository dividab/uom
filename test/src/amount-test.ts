import { assert, expect } from "chai";
import { LengthConversion } from "./test_utils/conversion_helpers/length_conversion";
import { DurationConversion } from "./test_utils/conversion_helpers/duration_conversion";
import * as Amount from "../../src/amount";
import * as Units from "../../src/units";

describe("amount_test", () => {
  it("should_not_accept_a_string_as_value", () => {
    const a: any = "12.3"; //tslint:disable-line
    expect(() => Amount.create(a, Units.Celsius)).to.throw();
  });

  it("should_not_accept_a_string_as_unit", () => {
    const a: any = "Celsius"; //tslint:disable-line
    expect(() => Amount.create(12.3, a)).to.throw();
  });

  it("should_not_accept_a_string_as_decimalCount", () => {
    const a: any = "12"; //tslint:disable-line
    expect(() => Amount.create(12.3, Units.Celsius, a)).to.throw();
  });

  it("Multiply_double_to_amount", () => {
    const valueLeft: number = 2.0;
    const valueRight: number = 5.5;
    const amountLeft = Amount.create(valueLeft, Units.Gram);
    const res1 = Amount.times(amountLeft, valueRight);
    assert.closeTo(
      valueLeft * valueRight,
      Amount.valueAs(Units.Gram, res1),
      0.000001
    );
  });

  it("Divide_amount_by_double", () => {
    const valueLeft: number = 55.39;
    const valueRight: number = 58.456;
    const amountLeft = Amount.create(valueLeft, Units.Inch);
    const res1 = Amount.divide(amountLeft, valueRight);
    assert.closeTo(
      valueLeft / valueRight,
      Amount.valueAs(Units.Inch, res1),
      0.00001
    );
  });

  it("Subtract_amounts_with_same_unit", () => {
    const valueLeft: number = 0.8;
    const valueRight: number = 99.56;
    const amountLeft = Amount.create(valueLeft, Units.Kilojoule);
    const amountRight = Amount.create(valueRight, Units.Kilojoule);
    const res1 = Amount.minus(amountLeft, amountRight);
    assert.closeTo(
      valueLeft - valueRight,
      Amount.valueAs(Units.Kilojoule, res1),
      0.00001
    );
  });

  it("Add_amounts_with_same_unit", () => {
    const valueLeft: number = 12.8;
    const valueRight: number = 10.0;
    const amountLeft = Amount.create(valueLeft, Units.Inch);
    const amountRight = Amount.create(valueRight, Units.Inch);
    const res1 = Amount.plus(amountLeft, amountRight);
    assert.closeTo(
      valueLeft + valueRight,
      Amount.valueAs(Units.Inch, res1),
      0.0001
    );
  });

  it("Add_amounts_with_different_units", () => {
    const valueLeft: number = 2.0;
    const valueRight: number = 5.5;
    const amountLeft = Amount.create(valueLeft, Units.Inch);
    const amountRight = Amount.create(valueRight, Units.CentiMeter);
    const res1 = Amount.plus(amountLeft, amountRight);
    assert.closeTo(
      valueLeft + LengthConversion.Cm2In(valueRight),
      Amount.valueAs(Units.Inch, res1),
      0.0001
    );
  });

  it("Subtract_amounts_with_different_units", () => {
    const valueLeft: number = 360.0;
    const valueRight: number = 2.0;
    const amountLeft = Amount.create(valueLeft, Units.Second);
    const amountRight = Amount.create(valueRight, Units.Hour);
    const res1 = Amount.minus(amountLeft, amountRight);
    assert.closeTo(
      valueLeft - DurationConversion.H2S(valueRight),
      Amount.valueAs(Units.Second, res1),
      0.00001
    );
  });

  it("Multiply_amount_to_double", () => {
    const valueLeft: number = 2.0;
    const valueRight: number = 5.5;
    const amountRight = Amount.create(valueRight, Units.Hour);
    const res1 = Amount.times(amountRight, valueLeft);
    assert.equal(valueLeft * valueRight, Amount.valueAs(Units.Hour, res1));
  });

  it("Create_Amount_And_Check_Explicit_Conversion", () => {
    const valueLeft: number = -568.25;
    const valueRight: number = 15.369852;
    const amountLeft = Amount.create(valueLeft, Units.Second);
    const amountRight = Amount.create(valueRight, Units.Hour);
    assert.closeTo(valueLeft, Amount.valueAs(Units.Second, amountLeft), 0.0001);
    assert.closeTo(valueRight, Amount.valueAs(Units.Hour, amountRight), 0.0001);
  });

  it("0.8 Celisius should equal 0.8 Celsius", () => {
    const valueLeft = Amount.create(0.8, Units.Celsius);
    const valueRight = Amount.create(0.8, Units.Celsius);

    assert.equal(Amount.equals(valueLeft, valueRight), true);
  });

  it("should equal 1 m with 100 cm", () => {
    const valueLeft = Amount.create(1, Units.Meter);
    const valueRight = Amount.create(100, Units.CentiMeter);
    assert.equal(true, Amount.equals(valueLeft, valueRight));
  });

  it("Operator_GreaterThan", () => {
    const valueLeft = Amount.create(0.9, Units.Celsius);
    const valueRight = Amount.create(0.8, Units.Celsius);
    assert.equal(true, Amount.greaterThan(valueLeft, valueRight));
  });

  it("Operator_LessThan", () => {
    const valueLeft = Amount.create(0.8, Units.Celsius);
    const valueRight = Amount.create(0.9, Units.Celsius);
    assert.equal(true, Amount.lessThan(valueLeft, valueRight));
  });

  it("Operator_LessThanOrEquals", () => {
    const valueLeft = Amount.create(0.8, Units.Celsius);
    const valueRight = Amount.create(0.9, Units.Celsius);
    assert.equal(true, Amount.lessOrEqualTo(valueLeft, valueRight));
  });

  it("Operator_GreaterThanOrEquals", () => {
    const valueLeft = Amount.create(0.9, Units.Celsius);
    const valueRight = Amount.create(0.8, Units.Celsius);
    assert.equal(true, Amount.greaterOrEqualTo(valueLeft, valueRight));
  });

  it("Assert true for 16.2 Celsius > -200.0 Celsius", () => {
    const left = Amount.create(16.2, Units.Celsius);
    const right = Amount.create(-200.0, Units.Celsius);
    assert.equal(Amount.greaterThan(left, right), true);
  });

  it("Assert true for -200.0 Celsius < 16.2 Celsius", () => {
    const left = Amount.create(-200.0, Units.Celsius);
    const right = Amount.create(16.2, Units.Celsius);
    assert.equal(Amount.lessThan(left, right), true);
  });

  it("Assert true for 0 CubicMeterPerSecond < 36 CubicMeterPerHour", () => {
    const left = Amount.create(0, Units.CubicMeterPerSecond);
    const right = Amount.create(36, Units.CubicMeterPerHour);
    assert.equal(Amount.lessThan(left, right), true);
  });

  it("Assert 32.5 CubicMeterPerHour is larger than 9 LiterPerSecond", () => {
    const a1 = Amount.create(32.5, Units.CubicMeterPerHour);
    const a2 = Amount.create(9, Units.LiterPerSecond);
    const max = Amount.max(a1, a2);
    assert.equal(max, a1);
  });

  it("Assert 33 CubicMeterPerHour is less than 9.2 LiterPerSecond", () => {
    const a1 = Amount.create(33, Units.CubicMeterPerHour);
    const a2 = Amount.create(9.2, Units.LiterPerSecond);
    const max = Amount.min(a1, a2);
    assert.equal(max, a1);
  });

  it("Assert 33 CubicMeterPerHour is less than 9.2 LiterPerSecond", () => {
    const a1 = Amount.create(33, Units.CubicMeterPerHour);
    const a2 = Amount.create(9.2, Units.LiterPerSecond);
    const max = Amount.min(a1, a2);
    assert.equal(max, a1);
  });

  /*
	 it('Operator_Equals_Tolerance', () => {
	 const x1 = Amount.create(44000.000000000065, Units.Celsius);
	 const x2 = Amount.create(44000.000000000007, Units.Celsius);
	 assert.equal(x1 == x2, true);
	 });
*/

  /*

	 const normal1:number = 0.0002777777777777701;
	 const normal2:number = 0.0002777777777777901;
	 const normal3:number = 0.0002777777777778300;

	 it('Test_Amount_Compare_SameRef_True', () => {
	 const a:Amount<IMassFlow> = Amount.exact<IMassFlow>(normal1, Units.KilogramPerSecond);
	 const b:Amount<IMassFlow> = a;

	 const compare:number = a.compareTo(b);
	 assert.equal(compare, 0);
	 });

	 it('Test_Amount_Compare_Null__True', () => {
	 Amount<IMassFlow> a = null;
	 Amount<IMassFlow> b = null;

	 assert.equal(a, b);
	 });

	 it('Test_Amount_Compare_Null_2_True', () => {
	 Amount<IMassFlow> a = new Amount<IMassFlow>.exact (normal1, Units.KilogramPerSecond);
	 Amount<IMassFlow> b = null;

	 int compare = a.compareTo(b);
	 assert.equal(compare, isNot(0));
	 });

	 it('Test_Amount_Compare_Normal_Normal_1_True', () => {

	 Amount<IMassFlow> a = new Amount<IMassFlow>.create(normal1, Units.KilogramPerSecond);
	 Amount<IMassFlow> b = new Amount<IMassFlow>.create(normal2, Units.KilogramPerSecond);

	 int compare = a.compareTo(b);
	 assert.equal(compare, 0);
	 });

	 it('Test_Amount_Compare_Normal_Normal_2_True', () => {
	 Amount<IMassFlow> a = new Amount<IMassFlow>.exact (-normal1, Units.KilogramPerSecond);
	 Amount<IMassFlow> b = new Amount<IMassFlow>.exact (-normal2, Units.KilogramPerSecond);

	 int compare = a.compareTo(b);
	 assert.equal(compare, 0);
	 });

	 it('Test_Amount_Compare_Normal_Normal_1_False', () => {
	 Amount<IMassFlow> a = new Amount<IMassFlow>.exact (normal1, Units.KilogramPerSecond);
	 Amount<IMassFlow> b = new Amount<IMassFlow>.exact (normal3, Units.KilogramPerSecond);

	 int compare = a.compareTo(b);
	 assert.equal(compare, isNot(0));
	 });

	 it('Test_Amount_Compare_Normal_Normal_2_False', () => {
	 Amount<IMassFlow> a = new Amount<IMassFlow> .exact (-normal1, Units.KilogramPerSecond);
	 Amount<IMassFlow> b = new Amount<IMassFlow>.exact (-normal3, Units.KilogramPerSecond);

	 int compare = a.compareTo(b);
	 assert.equal(compare, isNot(0));
	 });

	 const double Normal10 = 2777777777777701.0;
	 const double Normal20 = 2777777777777710.0;
	 const double Normal30 = 2777777777778200.0;

	 it('Test_Amount_Compare_Normal10_Normal20_Positive', () => {
	 Amount<IMassFlow> a = new Amount< IMassFlow >.exact (Normal10, Units.KilogramPerSecond);
	 Amount<IMassFlow> b = new Amount< IMassFlow >.exact (Normal20, Units.KilogramPerSecond);

	 int compare = a.compareTo(b);
	 assert.equal(compare, 0);
	 });

	 it('Test_Amount_Compare_Normal10_Normal_20_Negative', () => {
	 Amount<IMassFlow> a = new Amount< IMassFlow > .exact (-Normal10, Units.KilogramPerSecond);
	 Amount<IMassFlow> b = new Amount< IMassFlow > .exact (-Normal20, Units.KilogramPerSecond);

	 int compare = a.compareTo(b);
	 assert.equal(compare, 0);
	 });

	 it('Test_Amount_Compare_Normal10_Normal30_Positive', () => {
	 Amount<IMassFlow> a = new Amount< IMassFlow >.exact (Normal10, Units.KilogramPerSecond);
	 Amount<IMassFlow> b = new Amount< IMassFlow >.exact (Normal30, Units.KilogramPerSecond);

	 int compare = a.compareTo(b);
	 assert.equal(compare, isNot(0));
	 });

	 it('Test_Amount_Compare_Normal10_Normal30_Negative', () => {
	 Amount<IMassFlow> a = new Amount< IMassFlow >.exact (-Normal10, Units.KilogramPerSecond);
	 Amount<IMassFlow> b = new Amount< IMassFlow > .exact (-Normal30, Units.KilogramPerSecond);

	 int compare = a.compareTo(b);
	 assert.equal(compare, isNot(0));
	 });

	 const double zero0 = 0.0;
	 const double zero1 = 0.0000000000000000077;
	 const double zero2 = 0.0000000000000000079;
	 const double zero3 = 0.0000000000000000080;

	 it('Test_Amount_Compare_Zero0_Zero0_Positive', () => {
	 Amount<IMassFlow> a = new Amount<IMassFlow>.exact (zero0, Units.KilogramPerSecond);
	 Amount<IMassFlow> b = new Amount<IMassFlow>.exact (zero0, Units.KilogramPerSecond);
	 int compare = a.compareTo(b);
	 assert.equal(compare, 0);
	 });

	 it('Test_Amount_Compare_Zero0_Zero0_Negative', () => {
	 Amount<IMassFlow> a = new Amount<IMassFlow>.exact (-zero0, Units.KilogramPerSecond);
	 Amount<IMassFlow> b = new Amount<IMassFlow>.exact (-zero0, Units.KilogramPerSecond);

	 int compare = a.compareTo(b);
	 assert.equal(compare, 0);
	 });

	 it('Test_Amount_Compare_Zero1_Zero2_Positive', () => {
	 Amount<IMassFlow> a = new Amount<IMassFlow>.exact (zero1, Units.KilogramPerSecond);
	 Amount<IMassFlow> b = new Amount<IMassFlow>.exact (zero2, Units.KilogramPerSecond);

	 int compare = a.compareTo(b);
	 assert.equal(compare, isNot(0));
	 });

	 it('Test_Amount_Compare_Zero1_Zero2_Negative', () => {
	 Amount<IMassFlow> a = new Amount<IMassFlow>.exact (-zero1, Units.KilogramPerSecond);
	 Amount<IMassFlow> b = new Amount<IMassFlow>.exact (-zero2, Units.KilogramPerSecond);

	 int compare = a.compareTo(b);
	 assert.equal(compare, isNot(0));
	 });

	 it('Test_Amount_Compare_Zero1_Zero3_Positive', () => {
	 Amount<IMassFlow> a = new Amount<IMassFlow>.exact (zero1, Units.KilogramPerSecond);
	 Amount<IMassFlow> b = new Amount<IMassFlow>.exact (zero3, Units.KilogramPerSecond);

	 int compare = a.compareTo(b);
	 assert.equal(compare, isNot(0));
	 });

	 it('Test_Amount_Compare_Zero1_Zero3_Negative', () => {
	 Amount<IMassFlow> a = new Amount<IMassFlow>.exact (-zero1, Units.KilogramPerSecond);
	 Amount<IMassFlow> b = new Amount<IMassFlow>.exact (-zero3, Units.KilogramPerSecond);

	 int compare = a.compareTo(b);
	 assert.equal(compare, isNot(0));
	 });
	 */

  it("Assert true for PI rad equals 180 °", () => {
    const a1 = Amount.create(Math.PI, Units.Radian);
    const a2 = Amount.create(180, Units.Degrees);
    assert.closeTo(
      Amount.valueAs(Units.Radian, a1),
      Amount.valueAs(Units.Radian, a2),
      0.000001
    );
  });
});

describe("amount_plus_minus_times_divide", () => {
  it("should_give_correct_decimalCount_for_plus", () => {
    // 0.039+0.065=0.10400000000000001
    const a1 = Amount.create(0.039, Units.Celsius, 3);
    const a2 = Amount.create(0.065, Units.Celsius, 3);
    const result = Amount.plus(a1, a2);
    const expected = Amount.create(0.10400000000000001, Units.Celsius, 3);
    assert.deepEqual(result, expected);
  });

  it("should_give_correct_decimalCount_for_minus", () => {
    // 0.2-0.096=0.10400000000000001
    const a1 = Amount.create(0.2, Units.Celsius, 3);
    const a2 = Amount.create(0.096, Units.Celsius, 3);
    const result = Amount.minus(a1, a2);
    const expected = Amount.create(0.10400000000000001, Units.Celsius, 3);
    assert.deepEqual(result, expected);
  });

  it("should_give_correct_decimalCount_for_times", () => {
    const a1 = Amount.create(0.052324234, Units.Celsius, 3);
    const result = Amount.times(a1, 2);
    const expected = Amount.create(0.104648468, Units.Celsius, 3);
    assert.deepEqual(result, expected);
  });

  it("should_give_correct_decimalCount_for_divide", () => {
    const a1 = Amount.create(0.052324234, Units.Celsius, 3);
    const result = Amount.divide(a1, 2);
    const expected = Amount.create(0.026162117, Units.Celsius, 3);
    assert.deepEqual(result, expected);
  });
});
