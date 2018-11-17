import * as Unit from "./unit";
import { Quantity } from "./quantity";
import * as UnitsFormat from "./units-format";
import * as Units from "./units";

const units: UnitMap = Units;
const unitsFormat: UnitFormatMap<typeof Units> = UnitsFormat;

export type UnitMap = { readonly [key: string]: Unit.Unit };
export type UnitFormatMap<TUnitMap> = { [P in keyof TUnitMap]: UnitFormat };

export type MeasureSystem = "SI" | "IP";

export interface UnitFormat {
  readonly label: string;
  readonly measureSystem: MeasureSystem | undefined;
  readonly decimalCount: number;
  // The corresponding unit which is the closest unit in the other measure system (SI/IP)
  readonly coUnit?: Unit.Unit<Quantity>;
}

export function createUnitFormat<T extends Quantity>(
  label: string,
  measureSystem: MeasureSystem | undefined,
  decimalCount: number,
  coUnit?: Unit.Unit<T>
): UnitFormat {
  return {
    label,
    measureSystem,
    decimalCount,
    coUnit
  };
}

export function getUnitFormat(unit: Unit.Unit): UnitFormat | undefined {
  return unitsFormat[unit.name];
}

// const _unitToString: { [key: string]: string } = {}; // tslint:disable-line
// const _stringToUnit: { [key: string]: Unit.Unit } = {}; // tslint:disable-line
const _quantityToUnits: { [key: string]: Array<Unit.Unit> } = {}; // tslint:disable-line

export function isUnit(unitName: string): boolean {
  return units[unitName.trim().toLowerCase()] !== undefined;
}

export function getUnitFromString<T extends Quantity>(
  unitString: string
): Unit.Unit<T> | undefined {
  return units[unitString.trim().toLowerCase()] as Unit.Unit<T>;
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

export function getUnitsForQuantity(quantityType: string): Array<Unit.Unit> {
  const units = _quantityToUnits[quantityType];
  if (units === undefined) {
    throw new Error("Unknown quantity type");
  }
  return units;
}

export function getAllUnits(): ReadonlyArray<Unit.Unit> {
  return Object.keys(Units).map(e => {
    return units[e];
  });
}

export function getAllQuantities(): Array<string> {
  const quantityArray = Object.keys(_quantityToUnits);
  return quantityArray;
}

// const x = {
//   olle: Unit.createBase("asdf", "Length", "dsfadf")
// };

// registerUnits(x, { olle: { label: "", decimalCount: 2, measureSystem: "SI" } });

// const _formats: { [key: string]: UnitFormat } = {}; //tslint:disable-line

// /**
//  * Used to check that both modules have the same keys
//  * @param units
//  * @param unitsFormat
//  */
// export function registerUnits<TUnits extends UnitMap>(
//   units: TUnits,
//   unitsFormat: UnitFormatMap<TUnits>
// ): void {
//   //   for (const unitKey of Object.keys(units)) {
//   //     const unit = units[unitKey];
//   //     const unitInfo = unitsFormat[unitKey];
//   //     registerUnit(unit, unitInfo.label);
//   //     registerUnitFormat(unit, unitInfo);
//   //   }
// }
