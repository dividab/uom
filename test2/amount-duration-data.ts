import * as Unit from "../src/unit";
import * as Units from "../src/units";
import { Duration, Quantity } from "../src/quantity";
import { DurationConversion } from "../test/src/test_utils/conversion_helpers/duration_conversion";

export interface ConversionTest<TQuantity extends Quantity> {
  readonly name: string;
  readonly only?: boolean;
  readonly skip?: boolean;
  readonly fromUnit: Unit.Unit<TQuantity>;
  readonly fromValue: number;
  readonly toUnit: Unit.Unit<TQuantity>;
  readonly toValue: number;
}

// const value: number = 0.0;
// const amountToTest = Amount.create(value, Units.Second);
// const valueInMinutes: number = Amount.valueAs(Units.Minute, amountToTest);
// assert.equal(valueInMinutes, DurationConversion.S2M(value));

export const tests: ReadonlyArray<ConversionTest<Duration>> = [
  {
    name: "ForValue0SecondsWeShouldGetValue0Minutes",
    fromUnit: Units.Second,
    fromValue: 0.0,
    toUnit: Units.Minute,
    toValue: DurationConversion.S2M(0.0)
  }
];
