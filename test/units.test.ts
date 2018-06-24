import * as test from "tape";
import * as Unit from "../src/unit";
import * as Units from "../src/units";

test("units_test_equals", t => {
  t.test("Base unit One should be equal", st => {
    const unit = Units.One;
    const unit2 = Units.getUnitFromString("One");
    st.true(Unit.equals(unit, unit2));
    st.end();
  });
  t.test("Base unit One should be equal. Order should not matter", st => {
    const unit = Units.getStringFromUnit(Unit.One);
    const unit2 = Units.getStringFromUnit(
      JSON.parse('{"type":"product","elements":[],"quantity":"Dimensionless"}')
    );
    st.equal(unit, unit2);
    st.end();
  });
  t.test("Alternate unit Radian should be equal", st => {
    const unit = Units.Radian;
    const unit2 = Units.getUnitFromString("Radian");
    st.true(Unit.equals(unit, unit2));
    st.end();
  });
  t.test("Alternate unit compare different object references", st => {
    const unit1 = JSON.parse(
      // tslint:disable-next-line:max-line-length
      '{"quantity":"Power","type":"alternate","symbol":"W","parent":{"quantity":"Power","type":"product","elements":[{"unit":{"quantity":"Energy","type":"alternate","symbol":"J","parent":{"quantity":"Energy","type":"product","elements":[{"unit":{"quantity":"Force","type":"alternate","symbol":"N","parent":{"quantity":"Force","type":"product","elements":[{"unit":{"quantity":"Mass","type":"base","symbol":"kg"},"pow":1},{"unit":{"quantity":"Length","type":"base","symbol":"m"},"pow":1},{"unit":{"quantity":"Duration","type":"base","symbol":"s"},"pow":-2}]}},"pow":1},{"unit":{"quantity":"Length","type":"base","symbol":"m"},"pow":1}]}},"pow":1},{"unit":{"quantity":"Duration","type":"base","symbol":"s"},"pow":-1}]}}'
    ); //tslint:disable-line
    const unit2 = JSON.parse(
      // tslint:disable-next-line:max-line-length
      '{"quantity":"Power","type":"alternate","symbol":"W","parent":{"quantity":"Power","type":"product","elements":[{"unit":{"quantity":"Energy","type":"alternate","symbol":"J","parent":{"quantity":"Energy","type":"product","elements":[{"unit":{"quantity":"Force","type":"alternate","symbol":"N","parent":{"quantity":"Force","type":"product","elements":[{"unit":{"quantity":"Mass","type":"base","symbol":"kg"},"pow":1},{"unit":{"quantity":"Length","type":"base","symbol":"m"},"pow":1},{"unit":{"quantity":"Duration","type":"base","symbol":"s"},"pow":-2}]}},"pow":1},{"unit":{"quantity":"Length","type":"base","symbol":"m"},"pow":1}]}},"pow":1},{"unit":{"quantity":"Duration","type":"base","symbol":"s"},"pow":-1}]}}'
    ); //tslint:disable-line
    st.true(Unit.equals(unit1, unit2));
    st.end();
  });
  t.test("Product unit should be equal", st => {
    const unit = Unit.divide("Length", Units.Meter, Units.CentiMeter);
    const unit2 = Unit.divide("Length", Units.Meter, Units.CentiMeter);
    st.true(Unit.equals(unit, unit2));
    st.end();
  });
  t.test("Product unit should not be equal", st => {
    const unit = Unit.divide("Length", Units.Meter, Units.CentiMeter);
    const unit2 = Unit.divide("Length", Units.Meter, Units.Millimeter);
    st.false(Unit.equals(unit, unit2));
    st.end();
  });
  t.test(
    "SquareRootPascal and SquareRootInchOfWaterColumn should not be equal",
    st => {
      const unit1 = Units.SquareRootPascal;
      const unit2 = Units.SquareRootInchOfWaterColumn;
      st.false(Unit.equals(unit1, unit2));
      st.end();
    }
  );
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
