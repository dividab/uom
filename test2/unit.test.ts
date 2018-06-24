import * as test from "tape";
import * as Unit from "../src/unit";
import * as Units from "../src/units";
import { closeTo } from "./test-utils";

test("derived units", t => {
  t.test("Meter times Meter should return unit with 1 element of pow 2", st => {
    const newUnit = Unit.times("Length", Units.Meter, Units.Meter);
    if (newUnit.type === "product") {
      st.equal(newUnit.elements.length, 1, "Correct elements length");
      st.equal(newUnit.elements[0].pow, 2, "Correct pow");
    } else {
      st.fail("Expected the type of unit to be 'product'");
    }
    st.end();
  });
  t.test("CubicMeter by Second should return correct product unit", st => {
    const newUnit = Unit.divide("VolumeFlow", Units.CubicMeter, Units.Second);
    if (newUnit.type === "product") {
      st.deepEqual(
        newUnit.elements,
        [
          { pow: 3, unit: { quantity: "Length", type: "base", symbol: "m" } },
          { pow: -1, unit: { quantity: "Duration", type: "base", symbol: "s" } }
        ],
        "Correct elements"
      );
    } else {
      st.fail("Expected the type of unit to be 'product'");
    }
    st.end();
  });
  t.test("CubicMeter by Hour should return correct product unit", st => {
    const newUnit = Unit.divide("VolumeFlow", Units.CubicMeter, Units.Hour);
    if (newUnit.type === "product") {
      st.deepEqual(
        newUnit.elements,
        [
          { pow: 3, unit: { quantity: "Length", type: "base", symbol: "m" } },
          {
            pow: -1,
            unit: {
              quantity: "Duration",
              type: "transformed",
              parentUnit: {
                quantity: "Duration",
                type: "transformed",
                parentUnit: {
                  quantity: "Duration",
                  type: "base",
                  symbol: "s"
                },
                toParentUnitConverter: {
                  type: "factor",
                  factor: 60
                }
              },
              toParentUnitConverter: {
                type: "factor",
                factor: 60
              }
            }
          }
        ],
        "Correct elements"
      );
    } else {
      st.fail("Expected the type of unit to be 'product'");
    }
    st.end();
  });
});

test("unit conversions", t => {
  t.test("2CubicMeterPerSecond_7200CubicMeterPerHour", st => {
    const value = 2.0;
    const convertedValue: number = Unit.convert(
      value,
      Units.CubicMeterPerSecond,
      Units.CubicMeterPerHour
    );
    closeTo(convertedValue, 7200.0, 0.00001, st);
    st.end();
  });
});
