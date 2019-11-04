import { Format, BaseUnits } from "../src/core";
import { Units, UnitsFormat } from "../src/all-units";

const containsAll = <T>(
  arr1: ReadonlyArray<T>,
  arr2: ReadonlyArray<T>
): boolean => arr2.every(arr2Item => arr1.indexOf(arr2Item) !== -1);
const sameMembers = <T>(
  arr1: ReadonlyArray<T>,
  arr2: ReadonlyArray<T>
): boolean => containsAll(arr1, arr2) && containsAll(arr2, arr1);

describe("format_test", () => {
  test("should get label for Pascal", done => {
    const format = Format.getUnitFormat(Units.Pascal, UnitsFormat);
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
      BaseUnits.Meter,
      Units.Kilometer,
      Units.Decimeter,
      Units.CentiMeter,
      Units.Millimeter,
      Units.Foot,
      Units.Yard,
      Units.Inch,
      Units.Mile
    ];
    const actual = Format.getUnitsForQuantity("Length", UnitsFormat, Units);
    expect(actual.length).toEqual(expected.length);
    expect(sameMembers(actual, expected)).toBeTruthy();
  });
  test("Should get units for length", () => {
    const expected = [
      BaseUnits.Meter,
      Units.Kilometer,
      Units.Decimeter,
      Units.CentiMeter,
      Units.Millimeter,
      Units.Foot,
      Units.Yard,
      Units.Inch,
      Units.Mile
    ];
    const actual = Format.getUnitsForQuantity("length", UnitsFormat, Units);
    expect(actual.length).toEqual(expected.length);
    expect(sameMembers(actual, expected)).toBeTruthy();
  });

  test("Should get units for length subset", () => {
    const expected = [BaseUnits.Meter];
    const actual = Format.getUnitsForQuantity(
      "length",
      {
        Meter: UnitsFormat.Meter
      },
      Units
    );
    expect(actual.length).toEqual(expected.length);
    console.dir(actual);
    expect(sameMembers(actual, expected)).toBeTruthy();
  });
});
