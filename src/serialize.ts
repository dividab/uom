import * as Unit from "./unit";
import { Quantity } from "./quantity";
import * as Units from "./units";
import { UnitMap } from "./format";

const units: UnitMap = Units;

export function stringToUnit<T extends Quantity>(
  unitString: string
): Unit.Unit<T> | undefined {
  return units[unitString.trim().toLowerCase()] as Unit.Unit<T>;
}

export function unitToString(unit: Unit.Unit): string {
  return unit.name;
}
