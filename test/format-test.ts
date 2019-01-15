import * as test from "tape";
import * as Units from "../src/units";
import * as UnitsFormat from "../src/units-format";
import * as Format from "../src/format";

const containsAll = <T>(arr1: ReadonlyArray<T>, arr2: ReadonlyArray<T>) =>
  arr2.every(arr2Item => arr1.indexOf(arr2Item) !== -1);
const sameMembers = <T>(arr1: ReadonlyArray<T>, arr2: ReadonlyArray<T>) =>
  containsAll(arr1, arr2) && containsAll(arr2, arr1);

test("format_test", t => {
  t.test("should get label for Pascal", st => {
    const format = Format.getUnitFormat(Units.Pascal);
    if (!format) {
      st.fail();
      st.end();
    } else {
      st.equal(format.label, "Pa");
      st.end();
    }
  });
  t.test("Should get units for Length", st => {
    const expected = [
      Units.Meter,
      Units.Kilometer,
      Units.Decimeter,
      Units.CentiMeter,
      Units.Millimeter,
      Units.Foot,
      Units.Yard,
      Units.Inch,
      Units.Mile
    ];
    const actual = Format.getUnitsForQuantity("Length");
    st.equal(actual.length, expected.length);
    st.true(sameMembers(actual, expected));
    st.end();
  });
  t.test("Should get units for length", st => {
    const expected = [
      Units.Meter,
      Units.Kilometer,
      Units.Decimeter,
      Units.CentiMeter,
      Units.Millimeter,
      Units.Foot,
      Units.Yard,
      Units.Inch,
      Units.Mile
    ];
    const actual = Format.getUnitsForQuantity("length");
    st.equal(actual.length, expected.length);
    st.true(sameMembers(actual, expected));
    st.end();
  });

  t.test("Should get units for length subset", st => {
    const expected = [Units.Meter];
    const actual = Format.getUnitsForQuantity("length", {
      Meter: UnitsFormat.Meter
    });
    st.equal(actual.length, expected.length);
    console.dir(actual);
    st.true(sameMembers(actual, expected));
    st.end();
  });
});
