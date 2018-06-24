import * as test from "tape";
import * as Amount from "../src/amount";
import { onlySkip } from "./test-data-utils";
import * as ConversionDuration from "./data/conversion-duration";
import * as ConversionDeltaTemperature from "./data/conversion-delta-temperature";
import * as ConversionEnergy from "./data/conversion-energy";
import * as ConversionLength from "./data/conversion-length";
import * as ConversionMass from "./data/conversion-mass";
import * as ConversionPressure from "./data/conversion-pressure";
import * as ConversionTemperature from "./data/conversion-temperature";
import * as ConversionVolumeFlow from "./data/conversion-volume-flow";
import * as ConversionVolume from "./data/conversion-volume";

const all = [
  ConversionDuration,
  ConversionDeltaTemperature,
  ConversionEnergy,
  ConversionLength,
  ConversionMass,
  ConversionPressure,
  ConversionTemperature,
  ConversionVolumeFlow,
  ConversionVolume
];

test("amount_conversion_test", t => {
  all.forEach(a => {
    onlySkip(a.tests).forEach(item => {
      t.test(item.name, st => {
        const amountToTest = Amount.create(item.fromValue, item.fromUnit);
        const actualToValue: number = Amount.valueAs(item.toUnit, amountToTest);
        if (item.delta) {
          closeTo(
            actualToValue,
            item.toValue,
            item.delta,
            () =>
              st.fail(
                `Conversion valid, expected: ${
                  item.toValue
                }, actual: ${actualToValue}, delta: ${item.delta}`
              ),
            () => st.pass("Conversion valid")
          );
        } else {
          st.equal(actualToValue, item.toValue, "Conversion valid");
        }
        st.end();
      });
    });
  });
});

function closeTo(
  actual: number,
  expected: number,
  delta: number,
  fail: () => void,
  pass: () => void
) {
  const actualDelta = Math.abs(actual - expected);
  if (actualDelta > delta) {
    fail();
  } else {
    pass();
  }
  return false;
}
