import * as Unit from "./unit";
import * as UnitName from "./unit-name";
import { Dimensionless, Quantity } from "./quantity";
import * as Units from "./units";
import * as CompareUtils from "./utils/compare-utils";

export interface Amount<T extends Quantity> {
  readonly value: number;
  readonly unit: Unit.Unit<T>;
  readonly decimalCount: number;
}

/**
 * Creates an amount that represents the an exact/absolute value in the specified
 * unit. For example if you create an exact amount of 2 degrees Fahrenheit that
 * will represent -16.6666667 degrees Celsius.
 * @param value {number} The numeric value of the amount.
 * @param unit {Unit<T>} The unit of the amount.
 * @param decimalCount {number | undefined} The decimalCount of the amount.
 * @returns {Amount<T>} The created amount.
 */
export function create<T extends Quantity>(
  value: number,
  unit: Unit.Unit<T>,
  decimalCount: number | undefined = undefined
): Amount<T> {
  if (decimalCount === undefined) {
    decimalCount = 0;
    const stringValue = value.toString();
    const pointIndex = stringValue.indexOf(".");
    if (pointIndex >= 0) {
      decimalCount = stringValue.length - pointIndex - 1;
    }
  }

  return _factory<T>(value, unit, decimalCount);
}

export function toString<T extends Quantity>(amount: Amount<T>): string {
  const unitname = UnitName.getName(amount.unit);
  if (unitname.length > 0) {
    return amount.value.toString() + " " + unitname;
  }
  return amount.value.toString();
}

/** Simulate negation unary operator. */
export function neg<T extends Quantity>(amount: Amount<T>): Amount<T> {
  return create<T>(-amount.value, amount.unit);
}

export function isQuantity<T extends Quantity>(
  quantity: T,
  amount: Amount<T>
): boolean {
  // Amount does not store the quanitty but Unit does
  // return Unit.getQuantityType(amount.unit) === quantityType;
  return amount.unit.quantity === quantity;
}

/**
 * Adds two amounts together.
 * The two amounts amounts must have the same quantity.
 * The resulting amount will be of the same quantity as the two amounts.
 * The resulting amount will have it's decimal count set from the
 * most granular amount.
 * @param left The left-hand amount.
 * @param right The right-hand
 * @returns left + right
 */
export function plus<T extends Quantity>(
  left: Amount<T>,
  right: Amount<T>
): Amount<T> {
  const mostGranularAmount = getMostGranularAmount(left, right);
  return _factory<T>(
    valueAs(mostGranularAmount.unit, left) +
      valueAs(mostGranularAmount.unit, right),
    mostGranularAmount.unit,
    mostGranularAmount.decimalCount
  );
}

/**
 * Substracts two amounts from each other.
 * The two amounts amounts must have the same quantity.
 * The resulting amount will be of the same quantity as the two amounts.
 * The resulting amount will have it's decimal count set from the
 * most granular amount.
 * @param left The left-hand amount.
 * @param right The right-hand
 * @returns left + right
 */
export function minus<T extends Quantity>(
  left: Amount<T>,
  right: Amount<T>
): Amount<T> {
  const mostGranularAmount = getMostGranularAmount(left, right);
  return _factory<T>(
    valueAs(mostGranularAmount.unit, left) -
      valueAs(mostGranularAmount.unit, right),
    mostGranularAmount.unit,
    mostGranularAmount.decimalCount
  );
}

/**
 * Multiplies an amount with a number.
 * The resulting amount has the same unit and decimal count as the original amount.
 * @param left The amount to multiply
 * @param right The number to multiply with
 */
export function times<T extends Quantity>(
  left: Amount<T>,
  right: number | Amount<Dimensionless>
): Amount<T> {
  if (typeof right === "number") {
    return _factory<T>(left.value * right, left.unit, left.decimalCount);
  } else if (right.unit.quantity === "Dimensionless") {
    return _factory<T>(
      left.value * valueAs(Units.One, right),
      left.unit,
      left.decimalCount
    );
  } else {
    throw new Error(
      `Cannot perform '*' operation with value of type '${right}'.`
    );
  }
}

/**
 * Divides an amount with a number.
 * The resulting amount has the same unit and decimal count as the original amount.
 * @param left The amount to divide
 * @param right The number to divide by
 */
export function divide<T extends Quantity>(
  left: Amount<T>,
  right: number | Amount<Dimensionless>
): Amount<T> {
  if (typeof right === "number") {
    return _factory<T>(left.value / right, left.unit, left.decimalCount);
  } else if (right.unit.quantity === "Dimensionless") {
    return _factory<T>(
      left.value / valueAs(Units.One, right),
      left.unit,
      left.decimalCount
    );
  } else {
    throw new Error(
      `Cannot perform '*' operation with value of type '${right}'.`
    );
  }
}

/// Comparsion operators

export const equals = <T extends Quantity>(
  left: Amount<T>,
  right: Amount<T>
): boolean => _comparison(left, right, true) === 0;

export const lessThan = <T extends Quantity>(
  left: Amount<T>,
  right: Amount<T>
): boolean => _comparison(left, right, false) < 0;

export const greaterThan = <T extends Quantity>(
  left: Amount<T>,
  right: Amount<T>
): boolean => _comparison(left, right, false) > 0;

export const lessOrEqualTo = <T extends Quantity>(
  left: Amount<T>,
  right: Amount<T>
): boolean => _comparison(left, right, false) <= 0;

export const greaterOrEqualTo = <T extends Quantity>(
  left: Amount<T>,
  right: Amount<T>
): boolean => _comparison(left, right, false) >= 0;

export function clamp<T extends Quantity>(
  minAmount: Amount<T>,
  maxAmount: Amount<T>,
  amount: Amount<T>
): Amount<T> {
  return min(maxAmount, max(minAmount, amount));
}

export function max<T extends Quantity>(
  a1: Amount<T>,
  a2: Amount<T>
): Amount<T> {
  if (!a2) {
    return a1;
  }
  if (!a1) {
    return a2;
  }
  return greaterThan(a1, a2) ? a1 : a2;
}

export function min<T extends Quantity>(
  a1: Amount<T>,
  a2: Amount<T>
): Amount<T> {
  if (!a2) {
    return a1;
  }
  if (!a1) {
    return a2;
  }
  return lessThan(a1, a2) ? a1 : a2;
}

/**
 * @param step Rounding step, for example 5.0 Celsius will round 23 to 20.
 * @param amount  Amount to round.
 */
export function roundDown<T extends Quantity>(
  step: Amount<T>,
  amount: Amount<T>
): Amount<T> {
  const div = amount.value / step.value;
  return _factory<T>(
    Math.floor(div) * step.value,
    amount.unit,
    step.decimalCount
  );
}

/**
 * @param step Rounding step, for example 5.0 Celsius will round 23 to 25.
 * @param amount  Amount to round.
 */
export function roundUp<T extends Quantity>(
  step: Amount<T>,
  amount: Amount<T>
): Amount<T> {
  const div = amount.value / step.value;
  return _factory<T>(
    Math.ceil(div) * step.value,
    amount.unit,
    step.decimalCount
  );
}

export function compareTo<T extends Quantity>(
  left: Amount<T>,
  right: Amount<T>
): number {
  return _comparison(left, right, true);
}

/**
 * Gets the absolute amount (equivalent of Math.Abs())
 * @param amount The amount to get the aboslute amount from.
 */
export function abs<T extends Quantity>(amount: Amount<T>): Amount<T> {
  return _factory<T>(Math.abs(amount.value), amount.unit, amount.decimalCount);
}

/**
 * Gets the value of the amount as a number in the specified unit
 * @param toUnit The unit to get the amount in.
 * @param amount The amount to get the value from.
 */
export function valueAs(
  toUnit: Unit.Unit<Quantity>,
  amount: Amount<Quantity>
): number {
  if (Unit.equals(amount.unit, toUnit)) {
    return amount.value;
  }
  return Unit.convert(amount.value, amount.unit, toUnit);
}

///////////////////////////////
/// BEGIN PRIVATE DECLARATIONS
///////////////////////////////

function _factory<T extends Quantity>(
  value: number,
  unit: Unit.Unit<T>,
  decimalCount: number
): Amount<T> {
  if (typeof value !== "number") {
    throw new Error("value must be a number.");
  }
  if (typeof unit !== "object") {
    throw new Error("unit must be an object.");
  }
  if (decimalCount !== undefined && typeof decimalCount !== "number") {
    throw new Error("decimalCount must be an undefined or a number.");
  }

  return {
    value: value,
    unit: unit,
    decimalCount: decimalCount
  };
}

function _comparison<T1 extends Quantity, T2 extends Quantity>(
  left: Amount<T1>,
  right: Amount<T2>,
  allowNullOrUndefined: boolean
): number {
  if (!allowNullOrUndefined) {
    // We don't allow nulls for < and > because it would cause strange behavior, e.g. 1 < null would work which it shouldn't
    if (left === null || left === undefined) {
      throw new Error("ArgumentNull: left");
    }
    if (right === null || right === undefined) {
      throw new Error("ArgumentNull: right");
    }
  } else {
    // Handle nulls
    if (
      (left === null && right === null) ||
      (left === undefined && right === undefined)
    ) {
      return 0;
    }
    if (left === null || left === undefined) {
      return 1;
    }
    if (right === null || right === undefined) {
      return 2;
    }
  }

  // If the units are the same we can just use the highest decimal count
  if (Unit.equals(left.unit, right.unit)) {
    return CompareUtils.compareNumbers(
      left.value,
      right.value,
      left.decimalCount,
      right.decimalCount
    );
  }

  // To handle decimals correctly when the units are different
  // we need to know which unit is the most granular.
  // Eg. when comparing 0:CubicMeterPerSecond with 36:CubicMeterPerHour,
  // both with 0 decimal places.
  const mostGranularUnit = getMostGranularUnit(left.unit, right.unit);
  const decimalCount = Math.max(left.decimalCount, right.decimalCount);
  const leftValue = valueAs(mostGranularUnit, left);
  const rightValue = valueAs(mostGranularUnit, right);
  return CompareUtils.compareNumbers(
    leftValue,
    rightValue,
    decimalCount,
    decimalCount
  );
}

/**
 * Gets the most granular amount
 * Takes into account both the unit and the decimalCount.
 * @param leftUnit
 * @param rightUnit
 */
function getMostGranularAmount(
  left: Amount<Quantity>,
  right: Amount<Quantity>
): Amount<Quantity> {
  const rightSmallest = create(Math.pow(10, -right.decimalCount), right.unit);
  const rightSmallestInLeftUnit = valueAs(left.unit, rightSmallest);
  const leftSmallestInLeftUnit = Math.pow(10, -left.decimalCount);
  if (leftSmallestInLeftUnit < rightSmallestInLeftUnit) {
    return left;
  }
  return right;
}

/**
 * Gets the most granular unit
 * For example Millimeter is more granular than Meter so in that case
 * both units should be converted to millimeter before being compared and
 * we should use the decimal count of the amount which was specified in Millimeter
 * To find which is the most granular unit, we find the difference between 1 and 2
 * in the units. The one with the highest difference is the most granular.
 * @param leftUnit
 * @param rightUnit
 * @returns The most granular unit.
 */
function getMostGranularUnit(
  leftUnit: Unit.Unit<Quantity>,
  rightUnit: Unit.Unit<Quantity>
): Unit.Unit<Quantity> {
  const rightDelta = valueAs(
    leftUnit,
    minus(create(2, rightUnit), create(1, rightUnit))
  );
  if (rightDelta > 1) {
    return leftUnit;
  } else {
    return rightUnit;
  }
}
