import * as test from "tape";
import * as Units from "../src/units";
import * as Serialize from "../src/serialize";

test("serialize_test", t => {
  t.test("For PPM should return Units.PPM", st => {
    const unit = Serialize.stringToUnit("PPM");
    st.equal(unit, Units.PPM);
    st.end();
  });
  t.test("For ppm should return Units.PPM", st => {
    const unit = Serialize.stringToUnit("ppm");
    st.equal(unit, Units.PPM);
    st.end();
  });
});
