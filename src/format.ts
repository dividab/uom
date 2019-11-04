import * as Unit from "./unit";
import { UnitFormat, UnitFormatMap } from "./unit-format";

// export type UnitFormatMap<TUnitMap> = { [P in keyof TUnitMap]: UnitFormat };

/**
 * @module Format
 */

/**
 * Get formatting info from unit
 * @param unit
 */
export function getUnitFormat(
  unit: Unit.Unit<unknown>,
  unitsFormat: UnitFormatMap
): UnitFormat | undefined {
  return unitsFormat[unit.name];
}

/**
 * Get all units registered for quantity
 * @param quantity
 */
export function getUnitsForQuantity(
  quantity: string,
  unitsFormat: UnitFormatMap,
  units: Unit.UnitMap
): Array<Unit.Unit<unknown>> {
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
  readonly output: // eslint-disable-next-line functional/prefer-readonly-type
  { readonly [key: string]: Array<Unit.Unit<unknown>> } | undefined;
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
  units: Unit.UnitMap
): { readonly [key: string]: Array<Unit.Unit<unknown>> } {
  if (cache.input === unitsFormat && cache.output !== undefined) {
    return cache.output;
  }
  const quantityToUnits: { [key: string]: Array<Unit.Unit<unknown>> } = {};

  for (const unitKey of Object.keys(unitsFormat)) {
    const unit = units[unitKey];
    const quantityKey = (unit.quantity as string).toLowerCase();
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
