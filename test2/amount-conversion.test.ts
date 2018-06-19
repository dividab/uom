import * as test from "tape";
import { onlySkip } from "./test-data-utils";
import * as DurationConversion from "./duration-conversion-data";
import * as Amount from "../src/amount";

test("amount_duration_test", t => {
  onlySkip(DurationConversion.tests).forEach(item => {
    t.test(item.name, st => {
      const amountToTest = Amount.create(item.fromValue, item.fromUnit);
      const actualToValue: number = Amount.valueAs(item.toUnit, amountToTest);
      st.equal(actualToValue, item.toValue, "Conversion valid");
      st.end();
    });
  });
});
