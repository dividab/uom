import * as Serialize from "../serialize";
import * as BaseUnits from "../base-units";
import { UnitMap } from "../unit";

const baseUnitsLower = Object.keys(BaseUnits).reduce<UnitMap>(
  (soFar, current) => {
    return {
      ...soFar,
      [current.toLowerCase()]: (BaseUnits as UnitMap)[current],
    };
  },
  {}
);
describe("serialize_test", () => {
  test("For Kelvin should return BaseUnits.Kelvin", () => {
    const unit = Serialize.stringToUnit(
      "Kelvin",
      (unitString) => (BaseUnits as UnitMap)[unitString]
    );
    expect(unit).toEqual(BaseUnits.Kelvin);
  });
  test("For kelvin should return BaseUnits.Kelvin", () => {
    const unit = Serialize.stringToUnit(
      "kelvin",
      (unitString) => baseUnitsLower[unitString]
    );
    expect(unit).toEqual(BaseUnits.Kelvin);
  });
});
