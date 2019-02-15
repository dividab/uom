import * as test from "tape";
// import * as Amount from "../src/amount";
// import * as Units from "../src/units";
import * as CompareUtils from "../src/utils/compare-utils";

// Test for amount compare, to be used later
// test("amount_precision_test", t => {
//   t.test("Difference should be insignificant enough (1)", st => {
//     const a = Amount.create(6.81926300043489, Units.KilogramPerSecond);
//     const b = Amount.create(6.819263000434886, Units.KilogramPerSecond);
//     st.true(Amount.equals(a, b));
//     st.end();
//   });
//   t.test("Difference should be insignificant enough (2)", st => {
//     const a = Amount.create(
//       40000000000.0001,
//       Units.StandardCubicMeterPerSecond
//     );
//     const b = Amount.create(
//       40000000000.0002,
//       Units.StandardCubicMeterPerSecond
//     );
//     st.true(Amount.equals(a, b));
//     st.end();
//   });
// });

test("number_precision_test", t => {
  t.test("Normal compare (1)", st => {
    const a = 6.81926300043489;
    const b = 6.819263000434886;
    st.false(CompareUtils.compareNumbers(a, b, 14, 15) === 0);
    st.end();
  });
  t.test("Float54 compare (1)", st => {
    const a = 6.81926300043489;
    const b = 6.819263000434886;
    st.true(CompareUtils.compareNumbersUsingFloat54(a, b, 14, 15) === 0);
    st.end();
  });

  t.test("Normal compare (2)", st => {
    const a = 40000000000.0001;
    const b = 40000000000.0002;
    st.false(CompareUtils.compareNumbers(a, b, 14, 15) === 0);
    st.end();
  });
  t.test("Float54 compare (1)", st => {
    const a = 40000000000.0001;
    const b = 40000000000.0002;
    st.true(CompareUtils.compareNumbersUsingFloat54(a, b, 14, 15) === 0);
    st.end();
  });
});
