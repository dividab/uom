import * as Unit from "./unit";
import * as UnitLabel from "./unit-label";
import { Quantity } from "./quantity";

// const _unitToString: { [key: string]: string } = {}; // tslint:disable-line
const _stringToUnit: { [key: string]: Unit.Unit } = {}; // tslint:disable-line
const _quantityToUnits: { [key: string]: Array<Unit.Unit> } = {}; // tslint:disable-line

export function isUnit(unit: string): boolean {
  return _stringToUnit[unit.trim().toLowerCase()] !== undefined;
}

export function getUnitFromString<T extends Quantity>(
  unitString: string,
  onError?: (unitString: string) => Unit.Unit<T>
): Unit.Unit<T> {
  const unit = _stringToUnit[unitString.trim().toLowerCase()];
  if (unit === undefined) {
    if (!onError) {
      throw new Error("Unknown unit " + unitString);
    } else {
      return onError(unitString);
    }
  }
  return unit as Unit.Unit<T>;
}

export function getStringFromUnit(unit: Unit.Unit): string {
  return unit.name;
}

export function getQuantityTypeFromString(quantityString: string): string {
  if (_quantityToUnits[quantityString] === undefined) {
    throw new Error(`Unknown quantity '${quantityString}'`);
  }
  return quantityString;
}

export function getStringFromQuantityType(quantity: string): string {
  return quantity;
}

export function getUnitsForQuantity(quantityType: string): Array<Unit.Unit> {
  const units = _quantityToUnits[quantityType];
  if (units === undefined) {
    throw new Error("Unknown quantity type");
  }
  return units;
}

export function getAllUnits(): Array<Unit.Unit> {
  const unitsArray = Object.keys(_stringToUnit).map(key => _stringToUnit[key]);
  return unitsArray;
}

export function getAllQuantities(): Array<string> {
  const quantityArray = Object.keys(_quantityToUnits);
  return quantityArray;
}

export function registerUnit<T extends Quantity>(
  unit: Unit.Unit<T>,
  label: string
): Unit.Unit<T> {
  if (label) {
    UnitLabel.registerLabel(label, unit);
  }
  const lowerName = unit.name.toLowerCase();
  // _unitToString[lowerName] = lowerName;
  _stringToUnit[lowerName] = unit;
  if (_quantityToUnits[unit.quantity] === undefined) {
    _quantityToUnits[unit.quantity] = [];
  }
  _quantityToUnits[unit.quantity].push(unit);

  return unit;
}