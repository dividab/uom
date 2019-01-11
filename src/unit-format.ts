export interface UnitFormat {
  readonly label: string;
  readonly decimalCount: number;
}

export function createUnitFormat(
  label: string,
  decimalCount: number
): UnitFormat {
  return {
    label,
    decimalCount
  };
}
