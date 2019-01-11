import * as Unit from "./unit";
import { Quantity } from "./quantity";
import * as Units from "./units";
import { UnitMap } from "./format";
import * as Amount from "./amount";

/**
 * @module Serialize
 */


const units: UnitMap = toLowerCaseMap(Units);

function toLowerCaseMap(mixedCaseUnits: UnitMap): UnitMap {
  type MutableUnitMap = {
    // tslint:disable-next-line:readonly-keyword
    [key: string]: Unit.Unit;
  };
  const lowerCaseMap: MutableUnitMap = {};
  for (const key of Object.keys(mixedCaseUnits)) {
    lowerCaseMap[key.toLowerCase()] = mixedCaseUnits[key];
  }
  return lowerCaseMap;
}

/**
 * Converts a units serialized representation to it's deserialized representation
 * @param unitString
 */
export function stringToUnit<T extends Quantity>(
  unitString: string
): Unit.Unit<T> | undefined {
  return units[unitString.toLowerCase()] as Unit.Unit<T>;
}

/**
 * Converts a unit to it's serialized representation
 * @param unit
 */
export function unitToString(unit: Unit.Unit): string {
  return unit.name;
}

/**
 * Convert an amount to it's serialized representation
 * @param amount
 */
export function amountToString(amount: Amount.Amount<Quantity>): string {
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
  amountString: string
): Amount.Amount<Quantity> | undefined {
  const parts = amountString.split(":");
  const value = parseFloat(parts[0]);
  const unit = stringToUnit(parts[1]);
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
