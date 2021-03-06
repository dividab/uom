/* eslint-disable no-restricted-properties */
/**
 * @module Amount
 */

import * as Unit from "./unit";

export interface Amount<T> {
  readonly value: number;
  readonly unit: Unit.Unit<T>;
  readonly decimalCount: number;
}

export type Comparer = <T1, T2 extends T1>(
  left: Amount<T1>,
  right: Amount<T2>
) => number;

/**
 * Default comparer
 * @param left {Amount} The left-hand amount
 * @param right {Amount} The right-hand amount
 * @returns {number} Comparer value
 */
export const defaultComparer: Comparer = <T1, T2 extends T1>(
  left: Amount<T1>,
  right: Amount<T2>
) => _comparison(left, right);

/**
 * Creates an amount that represents the an exact/absolute value in the specified
 * unit. For example if you create an exact amount of 2 degrees Fahrenheit that
 * will represent -16.6666667 degrees Celsius.
 * @param value {number} The numeric value of the amount.
 * @param unit {Unit<T>} The unit of the amount.
 * @param decimalCount {number | undefined} The decimalCount of the amount.
 * @returns {Amount<T>} The created amount.
 */
export function create<T>(
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

/**
 * Returns a string representation of an Amount.
 * @param amount {Amount} The amount.
 * @returns {string} String representation of the Amount.
 */
export function toString<T>(amount: Amount<T>): string {
  const unitname = Unit.buildDerivedSymbol(amount.unit);
  if (unitname.length > 0) {
    return amount.value.toString() + " " + unitname;
  }
  return amount.value.toString();
}

/**
 * Negation unary operator.
 * @param amount {Amount<T>} The amount.
 */
export function neg<T>(amount: Amount<T>): Amount<T> {
  return create<T>(-amount.value, amount.unit);
}

/**
 * Determines if an Amount is of a quantity.
 * @param quantity {Quantity} Quantity to check for.
 * @param amount {Amount<T>} The amount to check.
 */
export function isQuantity<T>(quantity: T, amount: Amount<T>): boolean {
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
export function plus<T1, T2 extends T1>(
  left: Amount<T1>,
  right: Amount<T2>
): Amount<T1> {
  const mostGranularAmount = getMostGranularAmount(left, right);
  return _factory<T1>(
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
export function minus<T1, T2 extends T1>(
  left: Amount<T1>,
  right: Amount<T2>
): Amount<T1> {
  const mostGranularAmount = getMostGranularAmount(left, right);
  return _factory<T1>(
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
export function times<T>(
  left: Amount<T>,
  right: number | Amount<Unit.Dimensionless>
): Amount<T> {
  if (typeof right === "number") {
    return _factory<T>(left.value * right, left.unit, left.decimalCount);
  } else if (right.unit.quantity === "Dimensionless") {
    return _factory<T>(
      left.value * valueAs(Unit.One, right),
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
export function divide<T>(
  left: Amount<T>,
  right: number | Amount<Unit.Dimensionless>
): Amount<T> {
  if (typeof right === "number") {
    return _factory<T>(left.value / right, left.unit, left.decimalCount);
  } else if (right.unit.quantity === "Dimensionless") {
    return _factory<T>(
      left.value / valueAs(Unit.One, right),
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

/**
 * Compares to amounts for equality
 * @param left {Amount} The left-hand Amount.
 * @param right {Amount} The right-hand Amount.
 * @returns {boolean} True if the amounts are equal, false otherwise.
 */
export function equals<T1, T2 extends T1>(
  left: Amount<T1>,
  right: Amount<T2>,
  comparer: Comparer = defaultComparer
): boolean {
  return compareAfterNullAndUndefinedCheck(left, right, true, comparer) === 0;
}

/**
 * Checks if one Amount is less than another.
 * @param left {Amount} The left-hand Amount.
 * @param right {Amount} The right-hand Amount.
 * @returns {boolean} True if the left-hand is less than the right-hand, false otherwise.
 */
export function lessThan<T1, T2 extends T1>(
  left: Amount<T1>,
  right: Amount<T2>,
  comparer: Comparer = defaultComparer
): boolean {
  return compareAfterNullAndUndefinedCheck(left, right, false, comparer) < 0;
}

/**
 * Checks if one Amount is greater than another.
 * @param left {Amount} The left-hand Amount.
 * @param right {Amount} The right-hand Amount.
 * @returns {boolean} True if the left-hand is less than the right-hand, false otherwise.
 */
export function greaterThan<T1, T2 extends T1>(
  left: Amount<T1>,
  right: Amount<T2>,
  comparer: Comparer = defaultComparer
): boolean {
  return compareAfterNullAndUndefinedCheck(left, right, false, comparer) > 0;
}

export const lessOrEqualTo = <T1, T2 extends T1>(
  left: Amount<T1>,
  right: Amount<T2>,
  comparer: Comparer = defaultComparer
): boolean =>
  compareAfterNullAndUndefinedCheck(left, right, false, comparer) <= 0;

export const greaterOrEqualTo = <T1, T2 extends T1>(
  left: Amount<T1>,
  right: Amount<T2>,
  comparer: Comparer = defaultComparer
): boolean =>
  compareAfterNullAndUndefinedCheck(left, right, false, comparer) >= 0;

export function clamp<T1, T2 extends T1>(
  minAmount: Amount<T1>,
  maxAmount: Amount<T1>,
  amount: Amount<T2>,
  comparer: Comparer = defaultComparer
): Amount<T1> {
  return min(maxAmount, max(minAmount, amount, comparer), comparer);
}

export function max<T1, T2 extends T1>(
  a1: Amount<T1>,
  a2: Amount<T2>,
  comparer: Comparer = defaultComparer
): Amount<T1> {
  if (!a2) {
    return a1;
  }
  if (!a1) {
    return a2;
  }
  return greaterThan(a1, a2, comparer) ? a1 : a2;
}

export function min<T1, T2 extends T1>(
  a1: Amount<T1>,
  a2: Amount<T2>,
  comparer: Comparer = defaultComparer
): Amount<T1> {
  if (!a2) {
    return a1;
  }
  if (!a1) {
    return a2;
  }
  return lessThan(a1, a2, comparer) ? a1 : a2;
}

/**
 * @param step Rounding step, for example 5.0 Celsius will round 23 to 20.
 * @param amount  Amount to round.
 */
export function roundDown<T1, T2 extends T1>(
  step: Amount<T1>,
  amount: Amount<T2>
): Amount<T1> {
  const div = amount.value / step.value;
  return _factory<T1>(
    Math.floor(div) * step.value,
    amount.unit,
    step.decimalCount
  );
}

/**
 * @param step Rounding step, for example 5.0 Celsius will round 23 to 25.
 * @param amount  Amount to round.
 */
export function roundUp<T1, T2 extends T1>(
  step: Amount<T1>,
  amount: Amount<T2>
): Amount<T1> {
  const div = amount.value / step.value;
  return _factory<T1>(
    Math.ceil(div) * step.value,
    amount.unit,
    step.decimalCount
  );
}

export function compareTo<T1, T2 extends T1>(
  left: Amount<T1>,
  right: Amount<T2>,
  comparer: Comparer = defaultComparer
): number {
  return compareAfterNullAndUndefinedCheck(left, right, true, comparer);
}

/**
 * Gets the absolute amount (equivalent of Math.Abs())
 * @param amount The amount to get the aboslute amount from.
 */
export function abs<T>(amount: Amount<T>): Amount<T> {
  return _factory<T>(Math.abs(amount.value), amount.unit, amount.decimalCount);
}

/**
 * Gets the value of the amount as a number in the specified unit
 * @param toUnit The unit to get the amount in.
 * @param amount The amount to get the value from.
 */
export function valueAs<T1, T2 extends T1>(
  toUnit: Unit.Unit<T1>,
  amount: Amount<T2>
): number {
  if (Unit.equals(amount.unit, toUnit)) {
    return amount.value;
  }
  return Unit.convert(amount.value, amount.unit, toUnit);
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
 * @private
 */
export function getMostGranularUnit<T>(
  leftUnit: Unit.Unit<T>,
  rightUnit: Unit.Unit<T>
): Unit.Unit<T> {
  if (Unit.equals(leftUnit, rightUnit)) {
    return leftUnit;
  }
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

///////////////////////////////
/// BEGIN PRIVATE DECLARATIONS
///////////////////////////////

function _factory<T>(
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
    decimalCount: decimalCount,
  };
}

function _comparison<T>(left: Amount<T>, right: Amount<T>): number {
  // To handle decimals correctly when the units are different
  // we need to know which unit is the most granular.
  // Eg. when comparing 0:CubicMeterPerSecond with 36:CubicMeterPerHour,
  // both with 0 decimal places.
  const mostGranularUnit = getMostGranularUnit(left.unit, right.unit);
  const decimalCount = Math.max(left.decimalCount, right.decimalCount);
  const leftValue = valueAs(mostGranularUnit, left);
  const rightValue = valueAs(mostGranularUnit, right);

  const f = Math.round(leftValue * Math.pow(10, decimalCount));
  const s = Math.round(rightValue * Math.pow(10, decimalCount));

  if (f === s) {
    return 0;
  }
  if (f < s) {
    return -1;
  } else {
    return 1;
  }
}

/**
 * Gets the most granular amount
 * Takes into account both the unit and the decimalCount.
 * @param leftUnit
 * @param rightUnit
 * @private
 */
function getMostGranularAmount<T>(
  left: Amount<T>,
  right: Amount<T>
): Amount<T> {
  const rightSmallest = create(Math.pow(10, -right.decimalCount), right.unit);
  const rightSmallestInLeftUnit = valueAs(left.unit, rightSmallest);
  const leftSmallestInLeftUnit = Math.pow(10, -left.decimalCount);
  if (leftSmallestInLeftUnit < rightSmallestInLeftUnit) {
    return left;
  }
  return right;
}

function compareAfterNullAndUndefinedCheck<T1, T2 extends T1>(
  left: Amount<T1>,
  right: Amount<T2>,
  allowNullOrUndefined: boolean,
  comparer: Comparer
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

  return comparer(left, right);
}
