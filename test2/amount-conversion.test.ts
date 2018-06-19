import * as test from "tape";
import { onlySkip } from "./test-data-utils";
import * as DurationConversion from "./duration-conversion-data";
import * as DeltaTemperatureConversion from "./delta-temperature-conversion-data";
import * as Amount from "../src/amount";

const all = [DurationConversion, DeltaTemperatureConversion];

test("amount_duration_test", t => {
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
