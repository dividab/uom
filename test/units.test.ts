import { Unit, Serialize } from "../src/core";
import { Units } from "../src/all-units";
// import * as Quantity from "../src/quantity";

// TODO: Add typing tests:
// export const pass: Quantity.Length = Units.CentiMeter;
// export const fail: Quantity.Mass = Units.CentiMeter;

describe("units_test_equals", () => {
  test("Base unit One should be equal", () => {
    const unit = Units.One;
    const unit2 = Serialize.stringToUnit("One")!;
    expect(Unit.equals(unit, unit2)).toBeTruthy();
  });
  test("Base unit One should be equal. Order should not matter", () => {
    const unit = Serialize.unitToString(Unit.One);
    const unit2 = Serialize.unitToString(Unit.One);
    expect(unit).toEqual(unit2);
  });
  test("Alternate unit Radian should be equal", () => {
    const unit = Units.Radian;
    const unit2 = Serialize.stringToUnit("Radian")!;
    expect(Unit.equals(unit, unit2)).toBeTruthy();
  });
  test("Alternate unit compare different object references", () => {
    const unit1 = Units.Watt;
    const unit2 = JSON.parse(JSON.stringify(unit1));

    expect(Unit.equals(unit1, unit2)).toBeTruthy();
  });
  test("Product unit should be equal", () => {
    const unit = Unit.divide("u", "Length", Units.Meter, Units.CentiMeter);
    const unit2 = Unit.divide("u", "Length", Units.Meter, Units.CentiMeter);
    expect(Unit.equals(unit, unit2)).toBeTruthy();
  });
  test("Product unit should not be equal", () => {
    const unit = Unit.divide("u1", "Length", Units.Meter, Units.CentiMeter);
    const unit2 = Unit.divide("u2", "Length", Units.Meter, Units.Millimeter);
    expect(Unit.equals(unit, unit2)).toBeFalsy();
  });
  test("SquareRootPascal and SquareRootInchOfWaterColumn should not be equal", () => {
    const unit1 = Units.SquareRootPascal;
    const unit2 = Units.SquareRootInchOfWaterColumn;
    expect(Unit.equals(unit1, unit2)).toBeFalsy();
  });
  test("Degrees should be quantity Angle", () => {
    expect(Units.Degrees.quantity === "Angle").toBeTruthy();
  });
});

/*


//   describe("getQuantityTypeFromString", () => {
//     it('should not be case sensitive', () => {
//           let length1 = Units.getQuantityTypeFromString("Length");
//           let length2 = Units.getQuantityTypeFromString("length");
//           assert.isTrue(length1 === length2);
//         });
//     it('getUnitsForQuantityshould not be case sensitive', () => {
//       const unit = Units.getUnitsForQuantity("Length")[0];
//       assert.isTrue(unit === Units.Meter);
//     });
//     it('Base should be eUnits not be case sensitive', () => {
//      const unit = Units.getUnitsForQuantity("Length")[0];
//      Units.Ampere
//      assert.isTrue(unit === Units.Meter);
//      });
//   });

*/
