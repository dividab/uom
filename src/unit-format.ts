import * as Unit from "./unit";

/**
 * @module UnitFormat
 */

export interface UnitFormat {
  readonly label: string;
  readonly decimalCount: number;
}

export type UnitFormatMap = { readonly [key: string]: UnitFormat };

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
 * Creates a unit format
 * @param label
 * @param decimalCount
 */
export function createUnitFormat(
  label: string,
  decimalCount: number
): UnitFormat {
  return {
    label,
    decimalCount,
  };
}
