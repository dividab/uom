/* eslint-disable no-restricted-properties */
import * as Unit from "./unit";
import * as UnitTimes from "./unit-times";
import * as q from "./quantity";

/////////////////
/// SI PREFIXES //
/////////////////

export function Giga<T extends q.Quantity>(
  name: string,
  u: Unit.Unit<T>
): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10, 9), u);
}

export function Mega<T extends q.Quantity>(
  name: string,
  u: Unit.Unit<T>
): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10, 6), u);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>3</sup></code>
 * @param unit Any unit.
 * @returns <code>unit.multiply(1e3)</code> .
 */
export function Kilo<T extends q.Quantity>(
  name: string,
  unit: Unit.Unit<T>
): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10.0, 3), unit);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>2</sup></code>.
 * @param unit any unit.
 * @returns <code>unit.multiply(1e2)</code> .
 */
export function Hecto<T extends q.Quantity>(
  name: string,
  unit: Unit.Unit<T>
): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10, 2), unit);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>-1</sup></code>.
 * @param unit any unit.
 * @return <code>unit.multiply(1e-1)</code>.
 */
export function Deci<T extends q.Quantity>(
  name: string,
  unit: Unit.Unit<T>
): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10, -1), unit);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>-2</sup></code>.
 * @param unit any unit.
 * @returns <code>unit.multiply(1e-2)</code> .
 */
export function Centi<T extends q.Quantity>(
  name: string,
  unit: Unit.Unit<T>
): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10, -2), unit);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>-3</sup></code>.
 * @param unit any unit. @return <code>unit.multiply(1e-3)</code> .
 */
export function Milli<T extends q.Quantity>(
  name: string,
  unit: Unit.Unit<T>
): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10, -3), unit);
}

// export function Si<T extends Quantity>(toAdd: Unit.Unit<T>): Unit.Unit<T> {
//   // TODO
//   return toAdd;
// }

export function Squared(
  name: string,
  u: Unit.Unit<q.Length>
): Unit.Unit<q.Area> {
  return UnitTimes.lengthByLength(name, u, u);
  // TODO was return u.Times <q.Area> (u);
}

export function Cubed(
  name: string,
  u: Unit.Unit<q.Length>
): Unit.Unit<q.Volume> {
  const area = UnitTimes.lengthByLength(name, u, u);
  return UnitTimes.areaByLength(name, area, u);
  // TODO was return u.Times < IArea > (u).Times < IVolume > (u);
}
