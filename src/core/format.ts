import * as Unit from "./unit";
import * as UnitsFormat from "../all-units/units-format";
import * as Units from "../all-units/units";
import { UnitFormat } from "./unit-format";

export type UnitMap = {
  readonly [key: string]: Unit.Unit;
};
export type UnitFormatMap<TUnitMap> = { [P in keyof TUnitMap]: UnitFormat };

/**
 * @module Format
 */

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
  unitsFormat: { readonly [key: string]: UnitFormat } = UnitsFormat,
  units: UnitMap = Units
): Array<Unit.Unit> {
  const quantityToUnits = getUnitsPerQuantity(unitsFormat, units);
  const unitsForQuantity = quantityToUnits[quantity.toLowerCase()];
  return unitsForQuantity || [];
}

interface LocalCache {
  readonly input:
    | {
        readonly [key: string]: UnitFormat;
      }
    | undefined;
  // eslint-disable-next-line functional/prefer-readonly-type
  readonly output: { readonly [key: string]: Array<Unit.Unit> } | undefined;
}

// eslint-disable-next-line functional/no-let
let cache: LocalCache = {
  input: undefined,
  output: undefined
};
function getUnitsPerQuantity(
  unitsFormat: {
    readonly [key: string]: UnitFormat;
  },
  units: UnitMap
): { readonly [key: string]: Array<Unit.Unit> } {
  if (cache.input === unitsFormat && cache.output !== undefined) {
    return cache.output;
  }
  const quantityToUnits: { [key: string]: Array<Unit.Unit> } = {};

  for (const unitKey of Object.keys(unitsFormat)) {
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
