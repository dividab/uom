import * as Amount from "../amount";
import * as BaseUnits from "../base-units";

describe("amount_compare_test", () => {
  test("default_comparer_true", () => {
    const a = Amount.create(100, BaseUnits.Kelvin);
    const b = Amount.create(100, BaseUnits.Kelvin);

    const c = Amount.equals(a, b);
    expect(c).toBeTruthy();
  });

  test("default_comparer_false", () => {
    const a = Amount.create(100, BaseUnits.Kelvin);
    const b = Amount.create(1234, BaseUnits.Kelvin);

    const c = Amount.equals(a, b);
    expect(c).toBeFalsy();
  });

  test("custom_comparer_equals", () => {
    const a = Amount.create(100, BaseUnits.Kelvin);
    const b = Amount.create(1234, BaseUnits.Kelvin);
    const comparer: Amount.Comparer = () => 0;

    const c = Amount.equals(a, b, comparer);
    expect(c).toBeTruthy();
  });

  test("custom_comparer_less_than", () => {
    const a = Amount.create(100, BaseUnits.Kelvin);
    const b = Amount.create(100, BaseUnits.Kelvin);
    const comparer: Amount.Comparer = () => -1;

    const c = Amount.lessThan(a, b, comparer);
    expect(c).toBeTruthy();
  });

  test("custom_comparer_greater_than", () => {
    const a = Amount.create(100, BaseUnits.Kelvin);
    const b = Amount.create(100, BaseUnits.Kelvin);
    const comparer: Amount.Comparer = () => 1;

    const c = Amount.greaterThan(a, b, comparer);
    expect(c).toBeTruthy();
  });
});
