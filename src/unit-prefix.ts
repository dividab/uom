/* eslint-disable no-restricted-properties */
import * as Unit from "./unit";

/////////////////
/// SI PREFIXES //
/////////////////

export function Giga<T>(name: string, u: Unit.Unit<T>): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10, 9), u);
}

export function Mega<T>(name: string, u: Unit.Unit<T>): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10, 6), u);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>3</sup></code>
 * @param unit Any unit.
 * @returns <code>unit.multiply(1e3)</code> .
 */
export function Kilo<T>(name: string, unit: Unit.Unit<T>): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10.0, 3), unit);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>2</sup></code>.
 * @param unit any unit.
 * @returns <code>unit.multiply(1e2)</code> .
 */
export function Hecto<T>(name: string, unit: Unit.Unit<T>): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10, 2), unit);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>-1</sup></code>.
 * @param unit any unit.
 * @return <code>unit.multiply(1e-1)</code>.
 */
export function Deci<T>(name: string, unit: Unit.Unit<T>): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10, -1), unit);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>-2</sup></code>.
 * @param unit any unit.
 * @returns <code>unit.multiply(1e-2)</code> .
 */
export function Centi<T>(name: string, unit: Unit.Unit<T>): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10, -2), unit);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>-3</sup></code>.
 * @param unit any unit. @return <code>unit.multiply(1e-3)</code> .
 */
export function Milli<T>(name: string, unit: Unit.Unit<T>): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10, -3), unit);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>-6</sup></code>.
 * @param unit any unit. @return <code>unit.multiply(1e-6)</code> .
 */
export function Micro<T>(name: string, unit: Unit.Unit<T>): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10, -6), unit);
}

// export function Si<T extends Quantity>(toAdd: Unit.Unit<T>): Unit.Unit<T> {
//   // TODO
//   return toAdd;
// }
