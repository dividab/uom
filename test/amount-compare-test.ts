import * as test from "tape";
import * as Amount from "../src/amount";
import * as Units from "../src/units";

test("amount_compare_test", t => {
  t.test("default_comparer_true", st => {
    const a = Amount.create(100, Units.Watt);
    const b = Amount.create(100, Units.Watt);

    const c = Amount.equals(a, b);
    st.true(c);
    st.end();
  });

  t.test("default_comparer_false", st => {
    const a = Amount.create(100, Units.Watt);
    const b = Amount.create(1234, Units.Watt);

    const c = Amount.equals(a, b);
    st.false(c);
    st.end();
  });

  t.test("custom_comparer_equals", st => {
    const a = Amount.create(100, Units.Watt);
    const b = Amount.create(1234, Units.Watt);
    const comparer: Amount.Comparer = () => 0;

    const c = Amount.equals(a, b, comparer);
    st.true(c);
    st.end();
  });

  t.test("custom_comparer_less_than", st => {
    const a = Amount.create(100, Units.Watt);
    const b = Amount.create(100, Units.Watt);
    const comparer: Amount.Comparer = () => -1;

    const c = Amount.lessThan(a, b, comparer);
    st.true(c);
    st.end();
  });

  t.test("custom_comparer_greater_than", st => {
    const a = Amount.create(100, Units.Watt);
    const b = Amount.create(100, Units.Watt);
    const comparer: Amount.Comparer = () => 1;

    const c = Amount.greaterThan(a, b, comparer);
    st.true(c);
    st.end();
  });
});
