import * as Unit from "./unit";
import * as UnitsFormat from "./units-format";
import * as Units from "./units";

export type UnitMap = {
  readonly [key: string]: Unit.Unit;
};
export type UnitFormatMap<TUnitMap> = { [P in keyof TUnitMap]: UnitFormat };

export interface UnitFormat {
  readonly label: string;
  readonly decimalCount: number;
}

const units: UnitMap = Units;
const unitsFormat: UnitFormatMap<typeof Units> = UnitsFormat;

export function createUnitFormat(
  label: string,
  decimalCount: number
): UnitFormat {
  return {
    label,
    decimalCount
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
