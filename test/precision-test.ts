import * as test from "tape";
import * as Amount from "../src/amount";
import * as Units from "../src/units";
import * as FloatN from "../src/utils/floatN";

// Test for amount compare, to be used later
test("amount_precision_test", t => {
  t.test(
    "2^x should be equals to any amount between 2^x and 2^(x+1)-1 when using 0 bit precision",
    st => {
      const a = Amount.create(1024, Units.Watt);
      const b = Amount.create(2047, Units.Watt);
      const c = Amount.create(2048, Units.Watt);
      const p = FloatN.create(0);
      st.true(Amount.equals(a, b, p));
      st.false(Amount.equals(a, c, p));
      st.end();
    }
  );
  t.test(
    "2^x should be equals to any amount between 2^x and 2^(x+1)*0.75-1 when using 1 bit precision",
    st => {
      const a = Amount.create(1024, Units.Watt);
      const b = Amount.create(1535, Units.Watt);
      const c = Amount.create(1536, Units.Watt);
      const p = FloatN.create(1);
      st.true(Amount.equals(a, b, p));
      st.false(Amount.equals(a, c, p));
      st.end();
    }
  );
  t.test(
    "Difference should be insignificant enough when using 42 bit precision",
    st => {
      const a = Amount.create(6.81926300043489, Units.KilogramPerSecond);
      const b = Amount.create(6.819263000434886, Units.KilogramPerSecond);
      const p = FloatN.create(42);
      st.true(Amount.equals(a, b, p));
      st.end();
    }
  );
});
