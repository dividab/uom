import * as Units from "../src/units";
import * as UnitsFormat from "../src/units-format";
import * as Format from "../src/format";

const containsAll = <T>(arr1: ReadonlyArray<T>, arr2: ReadonlyArray<T>) =>
  arr2.every(arr2Item => arr1.indexOf(arr2Item) !== -1);
const sameMembers = <T>(arr1: ReadonlyArray<T>, arr2: ReadonlyArray<T>) =>
  containsAll(arr1, arr2) && containsAll(arr2, arr1);

describe("format_test", () => {
  test("should get label for Pascal", done => {
    const format = Format.getUnitFormat(Units.Pascal);
    if (!format) {
      done.fail();
      done();
    } else {
      expect(format.label).toEqual("Pa");
      done();
    }
  });
  test("Should get units for Length", () => {
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
    expect(actual.length).toEqual(expected.length);
    expect(sameMembers(actual, expected)).toBeTruthy();
  });
  test("Should get units for length", () => {
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
    expect(actual.length).toEqual(expected.length);
    expect(sameMembers(actual, expected)).toBeTruthy();
  });

  test("Should get units for length subset", () => {
    const expected = [Units.Meter];
    const actual = Format.getUnitsForQuantity("length", {
      Meter: UnitsFormat.Meter
    });
    expect(actual.length).toEqual(expected.length);
    console.dir(actual);
    expect(sameMembers(actual, expected)).toBeTruthy();
  });
});
