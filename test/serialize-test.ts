// import { Units } from "../src/all-units";
import { Serialize, BaseUnits } from "../src";

describe("serialize_test", () => {
  test("For Kelvin should return BaseUnits.Kelvin", () => {
    const unit = Serialize.stringToUnit("Kelvin", BaseUnits);
    expect(unit).toEqual(BaseUnits.Kelvin);
  });
  test("For kelvin should return BaseUnits.Kelvin", () => {
    const unit = Serialize.stringToUnit("kelvin", BaseUnits);
    expect(unit).toEqual(BaseUnits.Kelvin);
  });
});
