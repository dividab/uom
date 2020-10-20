import * as BaseUnits from "../base-units";
import * as UnitFormat from "../unit-format";

const UnitsFormat = {
  Meter: UnitFormat.createUnitFormat("m", 2),
  Kelvin: UnitFormat.createUnitFormat("°K", 2),
};

describe("format_test", () => {
  test("should get label for Kelvin", (done) => {
    const format = UnitFormat.getUnitFormat(BaseUnits.Kelvin, UnitsFormat);
    if (!format) {
      done.fail();
      done();
    } else {
      expect(format.label).toEqual("°K");
      done();
    }
  });
});
