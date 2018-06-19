import * as test from "tape";
import { onlySkip } from "./test-data-utils";
import * as ConversionDuration from "./conversion-duration";
import * as ConversionDeltaTemperature from "./conversion-delta-temperature";
import * as ConversionEnergy from "./conversion-energy";
import * as Amount from "../src/amount";

const all = [ConversionDuration, ConversionDeltaTemperature, ConversionEnergy];

test("amount_conversion_test", t => {
  all.forEach(a => {
    onlySkip(a.tests).forEach(item => {
      t.test(item.name, st => {
        const amountToTest = Amount.create(item.fromValue, item.fromUnit);
        const actualToValue: number = Amount.valueAs(item.toUnit, amountToTest);
        st.equal(actualToValue, item.toValue, "Conversion valid");
        st.end();
      });
    });
  });
});
