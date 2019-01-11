import * as Unit from "./unit";
import * as UnitsFormat from "./units-format";
import * as Units from "./units";
import { UnitFormat } from "./unit-format";

export type UnitMap = {
  readonly [key: string]: Unit.Unit;
};
export type UnitFormatMap<TUnitMap> = { [P in keyof TUnitMap]: UnitFormat };

/**
 * @module Format
 */

const units: UnitMap = Units;
const unitsFormat: UnitFormatMap<typeof Units> = UnitsFormat;

/**
 * Get formatting info from unit
 * @param unit 
 */
export function getUnitFormat(unit: Unit.Unit): UnitFormat | undefined {
  return (unitsFormat as { readonly [key: string]: UnitFormat })[unit.name];
}

// export function getAllUnits(): ReadonlyArray<Unit.Unit> {
//   return Object.keys(Units).map(e => {
//     return units[e];
//   });
// }

const _quantityToUnits: { [key: string]: Array<Unit.Unit> } = {}; // tslint:disable-line

/**
 * Get all units registered for quantity
 * @param quantity 
 */
export function getUnitsForQuantity(quantity: string): Array<Unit.Unit> {
  const unitsForQuantity = _quantityToUnits[quantity];
  if (unitsForQuantity === undefined) {
    const unitsFound = Object.keys(Units)
      .map(e => {
        return units[e];
      })
      .filter(u => u.quantity.toLowerCase() === quantity.toLowerCase());
    _quantityToUnits[quantity] = unitsFound;
    return unitsFound;
  }
  return unitsForQuantity;
}

// export function getAllQuantities(): Array<string> {
//   const quantityArray = Object.keys(_quantityToUnits);
//   return quantityArray;
// }
