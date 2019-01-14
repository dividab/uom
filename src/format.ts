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
const unitsFormatMap: UnitFormatMap<typeof Units> = UnitsFormat;

/**
 * Get formatting info from unit
 * @param unit
 */
export function getUnitFormat(
  unit: Unit.Unit,
  unitsFormat: { readonly [key: string]: UnitFormat } = unitsFormatMap
): UnitFormat | undefined {
  return unitsFormat[unit.name];
}

// export function getAllUnits(): ReadonlyArray<Unit.Unit> {
//   return Object.keys(Units).map(e => {
//     return units[e];
//   });
// }

const _quantityToUnits: { [key: string]: Array<Unit.Unit> } = {}; // tslint:disable-line

for (const unitKey of Object.keys(Units)) {
  const unit = units[unitKey];
  const quantityKey = unit.quantity.toLowerCase();
  _quantityToUnits[quantityKey] = (_quantityToUnits[quantityKey] || []).concat(
    unit
  );
}
console.dir(_quantityToUnits["Length"]);

/**
 * Get all units registered for quantity
 * @param quantity
 */
export function getUnitsForQuantity(
  quantity: string,
  quantityToUnits: {
    readonly [key: string]: Array<Unit.Unit>;
  } = _quantityToUnits
): Array<Unit.Unit> {
  const unitsForQuantity = quantityToUnits[quantity.toLowerCase()];
  return unitsForQuantity || [];
}
