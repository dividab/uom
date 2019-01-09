import * as test from "tape";
import * as Units from "../src/units";
import * as Format from "../src/format";

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
});
