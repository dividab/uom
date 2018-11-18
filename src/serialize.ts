import * as Unit from "./unit";
import { Quantity } from "./quantity";
import * as Units from "./units";
import { UnitMap } from "./format";

const units: UnitMap = Units;

export function getUnitFromString<T extends Quantity>(
  unitString: string
): Unit.Unit<T> | undefined {
  return units[unitString.trim().toLowerCase()] as Unit.Unit<T>;
}

export function getStringFromUnit(unit: Unit.Unit): string {
  return unit.name;
}
