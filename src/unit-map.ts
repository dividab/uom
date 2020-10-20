import * as Unit from "./unit";

/**
 * @module UnitMap
 */

export type UnitLookup = (unitString: string) => Unit.Unit<unknown> | undefined;

export type UnitMap = {
  readonly [key: string]: Unit.Unit<unknown>;
};

/**
 * Get all units registered for quantity
 * @param quantity
 */
export function getUnitsForQuantity(
  quantity: string,
  units: UnitMap
): ReadonlyArray<Unit.Unit<unknown>> {
  const quantityToUnits = getUnitsPerQuantity(units);
  const unitsForQuantity = quantityToUnits[quantity.toLowerCase()];
  return unitsForQuantity || [];
}

interface LocalCache {
  readonly input: UnitMap | undefined;
  readonly output: // eslint-disable-next-line functional/prefer-readonly-type
  { readonly [key: string]: Array<Unit.Unit<unknown>> } | undefined;
}

// eslint-disable-next-line functional/no-let
let cache: LocalCache = {
  input: undefined,
  output: undefined,
};
function getUnitsPerQuantity(
  units: UnitMap
): { readonly [key: string]: ReadonlyArray<Unit.Unit<unknown>> } {
  if (cache.input === units && cache.output !== undefined) {
    return cache.output;
  }
  const quantityToUnits: { [key: string]: Array<Unit.Unit<unknown>> } = {};

  for (const unitKey of Object.keys(units)) {
    const unit = units[unitKey];
    const quantityKey = (unit.quantity as string).toLowerCase();
    quantityToUnits[quantityKey] = (quantityToUnits[quantityKey] || []).concat(
      unit
    );
  }

  cache = {
    input: units,
    output: quantityToUnits,
  };

  return quantityToUnits;
}
