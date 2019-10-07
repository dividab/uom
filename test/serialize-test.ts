import * as Units from "../src/units";
import * as Serialize from "../src/serialize";

describe("serialize_test", () => {
  test("For PPM should return Units.PPM", () => {
    const unit = Serialize.stringToUnit("PPM");
    expect(unit).toEqual(Units.PPM);
  });
  test("For ppm should return Units.PPM", () => {
    const unit = Serialize.stringToUnit("ppm");
    expect(unit).toEqual(Units.PPM);
  });
});
