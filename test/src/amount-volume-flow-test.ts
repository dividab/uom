import { assert } from "chai";
import { VolumeFlowConversion } from "./test_utils/conversion_helpers/volume_flow_conversion";
import * as Amount from "../../src/amount";
import * as Units from "../../src/units";

describe("amount_volume_flow_test", () => {
  //m3/sec 2 m3/h

  it("For_Value_0_m3persec_we_should_get_value_0_m3perhour", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.CubicMeterPerSecond);
    const convertedAmount: number = Amount.valueAs(
      Units.CubicMeterPerHour,
      amountToTest
    );
    assert.closeTo(
      convertedAmount,
      VolumeFlowConversion.M3PerSec2M3PerHour(value),
      0.00001
    );
  });

  it("For_Value_2_m3persec_we_should_get_value_7200_m3perhour", () => {
    const value: number = 2.0;
    const amountToTest = Amount.create(value, Units.CubicMeterPerSecond);
    const convertedAmount: number = Amount.valueAs(
      Units.CubicMeterPerHour,
      amountToTest
    );
    assert.closeTo(
      convertedAmount,
      VolumeFlowConversion.M3PerSec2M3PerHour(value),
      0.00001
    );
  });

  it("For_Value_1_23_m3persec_we_should_get_value_4428_m3perhour", () => {
    const value: number = 1.23;
    const amountToTest = Amount.create(value, Units.CubicMeterPerSecond);
    const convertedAmount: number = Amount.valueAs(
      Units.CubicMeterPerHour,
      amountToTest
    );
    assert.closeTo(
      convertedAmount,
      VolumeFlowConversion.M3PerSec2M3PerHour(value),
      0.00001
    );
  });

  //m3/h 2 m3/sec

  it("For_Value_0_m3perhour_we_should_get_value_0_m3persec", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.CubicMeterPerHour);
    const convertedAmount: number = Amount.valueAs(
      Units.CubicMeterPerSecond,
      amountToTest
    );
    assert.closeTo(convertedAmount, value, 0.00001);
  });

  it("For_Value_7200_m3perhour_we_should_get_value_2_m3persec", () => {
    const value: number = 7200.0;
    const amountToTest = Amount.create(value, Units.CubicMeterPerHour);
    const convertedAmount: number = Amount.valueAs(
      Units.CubicMeterPerSecond,
      amountToTest
    );
    assert.closeTo(
      convertedAmount,
      VolumeFlowConversion.M3PerHour2M3PerSec(value),
      0.00001
    );
  });

  it("For_Value_1500_85_m3perhour_we_should_get_value_0_4169_m3persec", () => {
    const value: number = 1500.85;
    const amountToTest = Amount.create(value, Units.CubicMeterPerHour);
    const convertedAmount: number = Amount.valueAs(
      Units.CubicMeterPerSecond,
      amountToTest
    );
    assert.closeTo(
      convertedAmount,
      VolumeFlowConversion.M3PerHour2M3PerSec(value),
      0.00001
    );
  });

  //m3/sec 2 m3/sec

  it("For_Value_0_m3persec_we_should_get_value_0_m3persec", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.CubicMeterPerSecond);
    const convertedAmount: number = Amount.valueAs(
      Units.CubicMeterPerSecond,
      amountToTest
    );
    assert.closeTo(convertedAmount, value, 0.00001);
  });

  it("For_Value_4_m3persec_we_should_get_value_4_m3persec", () => {
    const value: number = 4.0;
    const amountToTest = Amount.create(value, Units.CubicMeterPerSecond);
    const convertedAmount: number = Amount.valueAs(
      Units.CubicMeterPerSecond,
      amountToTest
    );
    assert.closeTo(convertedAmount, value, 0.00001);
  });

  it("For_Value_1_2_m3persec_we_should_get_value_1_2_m3persec", () => {
    const value: number = 1.2;
    const amountToTest = Amount.create(value, Units.CubicMeterPerSecond);
    const convertedAmount: number = Amount.valueAs(
      Units.CubicMeterPerSecond,
      amountToTest
    );
    assert.closeTo(convertedAmount, value, 0.00001);
  });

  //m3/h 2 m3/h

  it("For_Value_0_m3perhour_we_should_get_value_0_m3perhour", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.CubicMeterPerHour);
    const convertedAmount: number = Amount.valueAs(
      Units.CubicMeterPerHour,
      amountToTest
    );
    assert.closeTo(convertedAmount, value, 0.00001);
  });

  it("For_Value_3000_m3perhour_we_should_get_value_3000_m3perhour", () => {
    const value: number = 3000.0;
    const amountToTest = Amount.create(value, Units.CubicMeterPerHour);
    const convertedAmount: number = Amount.valueAs(
      Units.CubicMeterPerHour,
      amountToTest
    );
    assert.closeTo(convertedAmount, value, 0.00001);
  });

  it("For_Value_896_8_m3perhour_we_should_get_value_896_8_m3perhour", () => {
    const value: number = 896.8;
    const amountToTest = Amount.create(value, Units.CubicMeterPerHour);
    const convertedAmount: number = Amount.valueAs(
      Units.CubicMeterPerHour,
      amountToTest
    );
    assert.closeTo(convertedAmount, value, 0.00001);
  });

  it("For_Value_1_m3persecond_we_should_get_value_3600_m3perhour", () => {
    // Test values from
    //http://www.wolframalpha.com/input/?i=1+cubic+meter+per+second

    // Arrange
    const a = Amount.create(1.0, Units.CubicMeterPerSecond);

    // Act
    const cmph: number = Amount.valueAs(Units.CubicMeterPerHour, a);

    // Assert
    assert.closeTo(cmph, 3600, 0.01);
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

  it("For_Value_3795_cfm_we_should_get_value_6754_m3perhour", () => {
    // Test values from
    // http://www.wolframalpha.com/input/?i=77.14+grain%2Flb+in+g%2Fkg

    // Arrange
    const a = Amount.create(3975.0, Units.CubicFeetPerMinute);

    // Act
    const m3ph: number = Amount.valueAs(Units.CubicMeterPerHour, a);

    // Assert
    assert.closeTo(m3ph, 6754.0, 1);
  });

  it("For_Value_8000_m3perh_we_should_get_value_4709_cfm", () => {
    const value: number = 8000.0;
    const amountToTest = Amount.create(value, Units.CubicMeterPerHour);
    const convertedAmount: number = Amount.valueAs(
      Units.CubicFeetPerMinute,
      amountToTest
    );
    assert.closeTo(convertedAmount, 4709.0, 1);
  });
});
