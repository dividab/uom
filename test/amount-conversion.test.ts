import { Amount } from "../src/core";
import { onlySkip, closeTo } from "./test-utils";
import * as ConversionDuration from "./data/conversion-duration";
import * as ConversionDeltaTemperature from "./data/conversion-delta-temperature";
import * as ConversionEnergy from "./data/conversion-energy";
import * as ConversionLength from "./data/conversion-length";
import * as ConversionMass from "./data/conversion-mass";
import * as ConversionPressure from "./data/conversion-pressure";
import * as ConversionTemperature from "./data/conversion-temperature";
import * as ConversionVolumeFlow from "./data/conversion-volume-flow";
import * as ConversionVolume from "./data/conversion-volume";
import * as ConversionMassFlow from "./data/conversion-mass-flow";
import * as ConversionMassFlowPerArea from "./data/conversion-massflow-per-area";

const all = [
  ConversionDuration,
  ConversionDeltaTemperature,
  ConversionEnergy,
  ConversionLength,
  ConversionMass,
  ConversionPressure,
  ConversionTemperature,
  ConversionVolumeFlow,
  ConversionVolume,
  ConversionMassFlow,
  ConversionMassFlowPerArea
];

// describe("denormalize() with shared test data", () => {
//   onlySkip(SharedTests.tests).forEach(item => {
//     test(item.name, done => {
//       const actual = denormalize(item.query, item.variables, item.normMap);
//       expect(actual.data).toEqual(item.data);
//       done();
//     });
//   });
// });

describe("amount_conversion_test", () => {
  all.forEach(a => {
    onlySkip(a.tests).forEach(item => {
      test(item.name, done => {
        const amountToTest = Amount.create(item.fromValue, item.fromUnit);
        const actualToValue: number = Amount.valueAs(item.toUnit, amountToTest);
        if (item.delta) {
          closeTo(
            actualToValue,
            item.toValue,
            item.delta,
            done
            // `Conversion valid, expected: ${
            //   item.toValue
            // }, actual: ${actualToValue}, delta: ${item.delta}`,
            // "Conversion valid"
          );
        } else {
          // st.equal(actualToValue, item.toValue, "Conversion valid");
          expect(actualToValue).toEqual(item.toValue);
        }
        done();
      });
    });
  });
});

// function closeTo(
//   actual: number,
//   expected: number,
//   delta: number,
//   fail: () => void,
//   pass: () => void
// ) {
//   const actualDelta = Math.abs(actual - expected);
//   if (actualDelta > delta) {
//     fail();
//   } else {
//     pass();
//   }
//   return false;
// }
