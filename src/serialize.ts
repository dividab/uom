import * as Unit from "./unit";
import * as UnitMap from "./unit-map";
import * as Amount from "./amount";

/**
 * @module Serialize
 */

/**
 * Converts a units serialized representation to it's deserialized representation
 * @param unitString
 */
export function stringToUnit<T>(
  unitString: string,
  unitLookup: UnitMap.UnitLookup
): Unit.Unit<T> | undefined {
  return unitLookup(unitString) as Unit.Unit<T>;
}

/**
 * Converts a unit to it's serialized representation
 * @param unit
 */
export function unitToString(unit: Unit.Unit<unknown>): string {
  return unit.name;
}

/**
 * Convert an amount to it's serialized representation
 * @param amount
 */
export function amountToString(amount: Amount.Amount<unknown>): string {
  if (!amount.value === null || amount.value === undefined) {
    return "";
  }
  const valueString = amount.value.toFixed(amount.decimalCount);
  const unitString = unitToString(amount.unit);
  return `${valueString}:${unitString}`;
}

/**
 * Convert a serialized amount to it's deserialized representation
 * @param amountString
 */
export function stringToAmount(
  amountString: string,
  unitLookup: UnitMap.UnitLookup
): Amount.Amount<unknown> | undefined {
  const parts = amountString.split(":");
  const value = parseFloat(parts[0]);
  const unit = stringToUnit(parts[1], unitLookup);
  if (!unit) {
    return undefined;
  }
  let decimalCount = 0;
  const pointIndex = parts[0].indexOf(".");
  if (pointIndex >= 0) {
    decimalCount = parts[0].length - pointIndex - 1;
  }
  return Amount.create(value, unit, decimalCount);
}
