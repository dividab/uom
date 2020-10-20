import * as Unit from "../unit";
import * as BaseUnits from "../base-units";

describe("derived units", () => {
  test("Meter times Meter should return unit with 1 element of pow 2", done => {
    const newUnit = Unit.times("", "Length", BaseUnits.Meter, BaseUnits.Meter);
    if (newUnit.unitInfo.type === "product") {
      expect(newUnit.unitInfo.elements.length).toEqual(1); //, "Correct elements length");
      expect(newUnit.unitInfo.elements[0].pow).toEqual(2); //, "Correct pow");
    } else {
      done.fail("Expected the type of unit to be 'product'");
    }
    done();
  });
  test("Meter by Second should return correct product unit", done => {
    const newUnit = Unit.divide(
      "",
      "VolumeFlow",
      BaseUnits.Meter,
      BaseUnits.Second
    );
    if (newUnit.unitInfo.type === "product") {
      expect(newUnit.unitInfo.elements).toEqual(
        [
          {
            pow: 1,
            unit: {
              name: "Meter",
              quantity: "Length",
              unitInfo: { quantity: "Length", type: "base", symbol: "m" }
            }
          },
          {
            pow: -1,
            unit: {
              name: "Second",
              quantity: "Duration",
              unitInfo: { quantity: "Duration", type: "base", symbol: "s" }
            }
          }
        ]
        //"Correct elements"
      );
    } else {
      done.fail("Expected the type of unit to be 'product'");
    }
    done();
  });

  //   test("CubicMeter by Hour should return correct product unit", done => {
  //     const newUnit = Unit.divide("", "VolumeFlow", Units.CubicMeter, Units.Hour);
  //     if (newUnit.unitInfo.type === "product") {
  //       expect(newUnit.unitInfo.elements).toEqual(
  //         [
  //           {
  //             pow: 3,
  //             unit: {
  //               name: "Meter",
  //               quantity: "Length",
  //               unitInfo: { quantity: "Length", type: "base", symbol: "m" }
  //             }
  //           },
  //           {
  //             pow: -1,
  //             unit: {
  //               name: "Hour",
  //               quantity: "Duration",
  //               unitInfo: {
  //                 quantity: "Duration",
  //                 type: "transformed",
  //                 parentUnit: {
  //                   name: "Minute",
  //                   quantity: "Duration",
  //                   unitInfo: {
  //                     quantity: "Duration",
  //                     type: "transformed",
  //                     parentUnit: {
  //                       name: "Second",
  //                       quantity: "Duration",
  //                       unitInfo: {
  //                         quantity: "Duration",
  //                         type: "base",
  //                         symbol: "s"
  //                       }
  //                     },
  //                     toParentUnitConverter: {
  //                       type: "factor",
  //                       factor: 60
  //                     }
  //                   }
  //                 },
  //                 toParentUnitConverter: {
  //                   type: "factor",
  //                   factor: 60
  //                 }
  //               }
  //             }
  //           }
  //         ]
  //         // "Correct elements"
  //       );
  //     } else {
  //       done.fail("Expected the type of unit to be 'product'");
  //     }
  //     done();
  //   });
  // });

  // describe("unit conversions", () => {
  //   test("2CubicMeterPerSecond_7200CubicMeterPerHour", done => {
  //     const value = 2.0;
  //     const convertedValue: number = Unit.convert(
  //       value,
  //       Units.CubicMeterPerSecond,
  //       Units.CubicMeterPerHour
  //     );
  //     closeTo(convertedValue, 7200.0, 0.00001, done);
  //     done();
  //   });
});
