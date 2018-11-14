import * as Unit from "./unit";
import { Quantity } from "./quantity";

// We keep a global repository of Labels becasue if a Unit object is derived from arithmetic operations
// it may still be considered equal to an existing unit and thus should have the same label.
const _unitLabels: { [unit: string]: string } = {}; //tslint:disable-line

export function registerLabel<T extends Quantity>(
  label: string,
  unit: Unit.Unit<T>
): void {
  _unitLabels[unit.name] = label;
}

export function getLabel<T extends Quantity>(unit: Unit.Unit<T>): string {
  const label = _unitLabels[unit.name];
  if (label === undefined) {
    return Unit.buildDerivedSymbol(unit, getLabel);
  }
  return label;
}
