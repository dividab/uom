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

/**
 * Get formatting info from unit
 * @param unit
 */
export function getUnitFormat(
  unit: Unit.Unit,
  unitsFormat: { readonly [key: string]: UnitFormat } = UnitsFormat
): UnitFormat | undefined {
  return unitsFormat[unit.name];
}

/**
 * Get all units registered for quantity
 * @param quantity
 */
export function getUnitsForQuantity(
  quantity: string,
  unitsFormat: { readonly [key: string]: UnitFormat } = UnitsFormat
): Array<Unit.Unit> {
  const quantityToUnits = getUnitsPerQuantity(unitsFormat);
  const unitsForQuantity = quantityToUnits[quantity.toLowerCase()];
  return unitsForQuantity || [];
}

interface LocalCache {
  readonly input:
    | {
        readonly [key: string]: UnitFormat;
      }
    | undefined;
  readonly output: { readonly [key: string]: Array<Unit.Unit> } | undefined;
}

let cache: LocalCache = {
  input: undefined,
  output: undefined
};
function getUnitsPerQuantity(unitsFormat: {
  readonly [key: string]: UnitFormat;
}): { readonly [key: string]: Array<Unit.Unit> } {
  if (cache.input === unitsFormat && cache.output !== undefined) {
    return cache.output;
  }
  const quantityToUnits: { [key: string]: Array<Unit.Unit> } = {}; // tslint:disable-line

  for (const unitKey of Object.keys(Units)) {
    const unit = units[unitKey];
    const quantityKey = unit.quantity.toLowerCase();
    quantityToUnits[quantityKey] = (quantityToUnits[quantityKey] || []).concat(
      unit
    );
  }

  cache = {
    input: unitsFormat,
    output: quantityToUnits
  };
  return quantityToUnits;
}
