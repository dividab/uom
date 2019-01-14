/**
 * @module UnitFormat
 */

export interface UnitFormat {
  readonly label: string;
  readonly decimalCount: number;
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
    decimalCount
  };
}
