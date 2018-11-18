import * as Unit from "./unit";
import { Quantity } from "./quantity";
import * as UnitsFormat from "./units-format";
import * as Units from "./units";

export type UnitMap = {
  readonly [key: string]: Unit.Unit;
};
export type UnitFormatMap<TUnitMap> = { [P in keyof TUnitMap]: UnitFormat };

export type MeasureSystem = "SI" | "IP";

export interface UnitFormat {
  readonly label: string;
  readonly measureSystem: MeasureSystem | undefined;
  readonly decimalCount: number;
  // The corresponding unit which is the closest unit in the other measure system (SI/IP)
  readonly coUnit?: Unit.Unit<Quantity>;
}

const units: UnitMap = Units;
const unitsFormat: UnitFormatMap<typeof Units> = UnitsFormat;

export function createUnitFormat<T extends Quantity>(
  label: string,
  measureSystem: MeasureSystem | undefined,
  decimalCount: number,
  coUnit?: Unit.Unit<T>
): UnitFormat {
  return {
    label,
    measureSystem,
    decimalCount,
    coUnit
  };
}

export function getUnitFormat(unit: Unit.Unit): UnitFormat | undefined {
  return (unitsFormat as { readonly [key: string]: UnitFormat })[unit.name];
}

export function getAllUnits(): ReadonlyArray<Unit.Unit> {
  return Object.keys(Units).map(e => {
    return units[e];
  });
}

const _quantityToUnits: { [key: string]: Array<Unit.Unit> } = {}; // tslint:disable-line

export function getUnitsForQuantity(quantity: string): Array<Unit.Unit> {
  const units = _quantityToUnits[quantity];
  if (units === undefined) {
    throw new Error("Unknown quantity type");
  }
  return units;
}

export function getAllQuantities(): Array<string> {
  const quantityArray = Object.keys(_quantityToUnits);
  return quantityArray;
}
