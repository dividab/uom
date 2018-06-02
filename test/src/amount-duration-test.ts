import { assert } from "chai";
import * as Amount from "../../src/amount";
import * as Units from "../../src/units";
import { DurationConversion } from "./test_utils/conversion_helpers/duration_conversion";

describe("amount_duration_test", () => {
  it("ForValue0SecondsWeShouldGetValue0Minutes", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Second);
    const valueInMinutes: number = Amount.valueAs(Units.Minute, amountToTest);
    assert.equal(valueInMinutes, DurationConversion.S2M(value));
  });

  it("ForValue0SecondsWeShouldGetValue0Hours", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Second);
    const valueInHours: number = Amount.valueAs(Units.Hour, amountToTest);
    assert.equal(valueInHours, DurationConversion.S2H(value));
  });

  it("ForValue10SecondsWeShouldGetValue10Seconds", () => {
    const value: number = 10.0;
    const amountToTest = Amount.create(value, Units.Second);
    const valueInSeconds: number = Amount.valueAs(Units.Second, amountToTest);
    assert.equal(value, valueInSeconds);
  });

  it("ForValue15SecondsWeShouldGetValue025Minutes", () => {
    const value: number = 15.0;
    const amountToTest = Amount.create(value, Units.Second);
    const valueInMinutes: number = Amount.valueAs(Units.Minute, amountToTest);
    assert.equal(valueInMinutes, DurationConversion.S2M(value));
  });

  it("ForValue60SecondsWeShouldGetValue1Minute", () => {
    const value: number = 60.0;
    const amountToTest = Amount.create(value, Units.Second);
    const valueInMinutes: number = Amount.valueAs(Units.Minute, amountToTest);
    assert.equal(valueInMinutes, DurationConversion.S2M(value));
  });

  it("ForValue135SecondsWeShouldGetValue225Minutes", () => {
    const value: number = 135.0;
    const amountToTest = Amount.create(value, Units.Second);
    const valueInMinutes: number = Amount.valueAs(Units.Minute, amountToTest);
    assert.equal(valueInMinutes, DurationConversion.S2M(value));
  });

  it("ForValue36SecondsWeShouldGetValue001Hours", () => {
    const value: number = 36.0;
    const amountToTest = Amount.create(value, Units.Second);
    const valueInHours: number = Amount.valueAs(Units.Hour, amountToTest);
    assert.equal(valueInHours, DurationConversion.S2H(value));
  });

  it("ForValue3600SecondsWeShouldGetValue1Hour", () => {
    const value: number = 3600.0;
    const amountToTest = Amount.create(value, Units.Second);
    const valueInHours: number = Amount.valueAs(Units.Hour, amountToTest);
    assert.equal(valueInHours, DurationConversion.S2H(value));
  });

  it("ForValue7236SecondsWeShouldGetValue201Hours", () => {
    const value: number = 7236.0;
    const amountToTest = Amount.create(value, Units.Second);
    const valueInHours: number = Amount.valueAs(Units.Hour, amountToTest);
    assert.equal(valueInHours, DurationConversion.S2H(value));
  });

  it("ForValue15MinutesWeShouldGetValue15Minutes", () => {
    const value: number = 15.0;
    const amountToTest = Amount.create(value, Units.Minute);
    const valueInMinutes: number = Amount.valueAs(Units.Minute, amountToTest);
    assert.equal(valueInMinutes, value);
  });

  it("ForValue0MinutesWeShouldGetValue0Seconds", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Minute);
    const valueInSeconds: number = Amount.valueAs(Units.Second, amountToTest);
    assert.equal(valueInSeconds, DurationConversion.M2S(value));
  });

  it("ForValue01MinutesWeShouldGetValue6Seconds", () => {
    const value: number = 0.1;
    const amountToTest = Amount.create(value, Units.Minute);
    const valueInSeconds: number = Amount.valueAs(Units.Second, amountToTest);
    assert.equal(valueInSeconds, DurationConversion.M2S(value));
  });

  it("ForValue00025MinutesWeShouldGetValue015Seconds", () => {
    const value: number = 0.0025;
    const amountToTest = Amount.create(value, Units.Minute);
    const valueInSeconds: number = Amount.valueAs(Units.Second, amountToTest);
    assert.equal(valueInSeconds, DurationConversion.M2S(value));
  });

  it("ForValue15MinutesWeShouldGetValue900Seconds", () => {
    const value: number = 15.0;
    const amountToTest = Amount.create(value, Units.Minute);
    const valueInSeconds: number = Amount.valueAs(Units.Second, amountToTest);
    assert.equal(valueInSeconds, DurationConversion.M2S(value));
  });

  it("ForValue0MinutesWeShouldGetValue0Hours", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Minute);
    const valueInHours: number = Amount.valueAs(Units.Hour, amountToTest);
    assert.equal(valueInHours, DurationConversion.M2H(value));
  });

  it("ForValue15MinutesWeShouldGetValue025Hours", () => {
    const value: number = 15.0;
    const amountToTest = Amount.create(value, Units.Minute);
    const valueInHours: number = Amount.valueAs(Units.Hour, amountToTest);
    assert.equal(valueInHours, DurationConversion.M2H(value));
  });

  it("ForValue60MinutesWeShouldGetValue1Hour", () => {
    const value: number = 60.0;
    const amountToTest = Amount.create(value, Units.Minute);
    const valueInHours: number = Amount.valueAs(Units.Hour, amountToTest);
    assert.equal(valueInHours, DurationConversion.M2H(value));
  });

  it("ForValue135MinutesWeShouldGetValue225Hours", () => {
    const value: number = 135.0;
    const amountToTest = Amount.create(value, Units.Minute);
    const valueInHours: number = Amount.valueAs(Units.Hour, amountToTest);
    assert.equal(valueInHours, DurationConversion.M2H(value));
  });

  it("ForValue2HoursWeShouldGetValue2Hours", () => {
    const value: number = 2.0;
    const amountToTest = Amount.create(value, Units.Hour);
    const valueInHours: number = Amount.valueAs(Units.Hour, amountToTest);
    assert.equal(valueInHours, value);
  });

  it("ForValue0HoursWeShouldGetValue0Seconds", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Hour);
    const valueInSeconds: number = Amount.valueAs(Units.Second, amountToTest);
    assert.equal(valueInSeconds, DurationConversion.H2S(value));
  });

  it("ForValue1HourWeShouldGetValue3600Seconds", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Hour);
    const valueInSeconds: number = Amount.valueAs(Units.Second, amountToTest);
    assert.equal(valueInSeconds, DurationConversion.H2S(value));
  });

  it("ForValue1HourWeShouldGetValue60Minutes", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Hour);
    const valueInMinutes: number = Amount.valueAs(Units.Minute, amountToTest);
    assert.equal(valueInMinutes, DurationConversion.H2M(value));
  });

  it("ForValue01HoursWeShouldGetValue360Seconds", () => {
    const value: number = 0.1;
    const amountToTest = Amount.create(value, Units.Hour);
    const valueInSeconds: number = Amount.valueAs(Units.Second, amountToTest);
    assert.equal(valueInSeconds, DurationConversion.H2S(value));
  });

  it("ForValue01HoursWeShouldGetValue6Minutes", () => {
    const value: number = 0.1;
    const amountToTest = Amount.create(value, Units.Hour);
    const valueInMinutes: number = Amount.valueAs(Units.Minute, amountToTest);
    assert.equal(valueInMinutes, DurationConversion.H2M(value));
  });
});
