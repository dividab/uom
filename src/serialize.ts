import * as Unit from "./unit";
import { Quantity } from "./quantity";
import * as Units from "./units";
import { UnitMap } from "./format";
import * as Amount from "./amount";

const units: UnitMap = Units;

export function stringToUnit<T extends Quantity>(
  unitString: string
): Unit.Unit<T> | undefined {
  return units[unitString] as Unit.Unit<T>;
}

export function unitToString(unit: Unit.Unit): string {
  return unit.name;
}

export function amountToString(amount: Amount.Amount<Quantity>): string {
  if (!amount.value === null || amount.value === undefined) {
    return "";
  }
  const valueString = amount.value.toFixed(amount.decimalCount);
  const unitString = unitToString(amount.unit);
  return `${valueString}:${unitString}`;
}

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
