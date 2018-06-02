import { Quantity, Dimensionless } from "./quantity";
import { exhaustiveCheck } from "./utils/exhaustive-check";

/**
 * This record represents a determinate quantity (as of length, time, heat, or value)
 * adopted as a standard of measurement.
 *
 * It is helpful to think of instances of this record as recording the history by which
 * they are created. Thus, for example, the string "g/kg" (which is a dimensionless unit)
 * would result from invoking the method toString() on a unit that was created by
 * dividing a gram unit by a kilogram unit. Yet, "kg" divided by "kg" returns ONE and
 * not "kg/kg" due to automatic unit factorization.
 *
 * This record supports the multiplication of offsets units. The result is usually a unit
 * not convertible to its standard unit. Such units may appear in derivative quantities.
 * For example °C/m is an unit of gradient, which is common in atmospheric and oceanographic research.
 *
 * Units raised at rational powers are also supported. For example the cubic root of liter
 * is a unit compatible with meter.
 */
// export interface Unit<T extends Quantity> {
//   readonly quantity: Quantity,
//   readonly innerUnit: InnerUnit<T>,
// }

export type Unit<T extends Quantity> =
  | AlternateUnit<T>
  | BaseUnit<T>
  | ProductUnit<T>
  | TransformedUnit<T>;

/**
 * This record represents the building blocks on top of which all others
 * units are created.
 * This record represents the "standard base units" which includes SI base
 * units and possibly others user-defined base units. It does not represent
 * the base units of any specific System Of Units (they would have
 * be base units accross all possible systems otherwise).
 */
export interface BaseUnit<_T extends Quantity> {
  readonly type: "base";
  readonly quantity: Quantity;
  /** Holds the unique symbol for this base unit. */
  readonly symbol: string;
}

/**
 * This record represents the units used in expressions to distinguish
 * between quantities of a different nature but of the same dimensions.
 */
export interface AlternateUnit<_T extends Quantity> {
  readonly type: "alternate";
  readonly quantity: Quantity;
  readonly symbol: string;
  /** Holds the parent unit (a system unit). */
  readonly parent: Unit<Quantity>;
}

/**
 * This record represents the units derived from other units using
 * UnitConverter converters.
 *
 * Examples of transformed units:
 *       CELSIUS = KELVIN.add(273.15);
 *       FOOT = METER.multiply(0.3048);
 *       MILLISECOND = MILLI(SECOND);
 *
 * Transformed units have no label. But like any other units,
 *  they may have labels attached to them:
 *       UnitFormat.getStandardInstance().label(FOOT, "ft");
 *
 *   or aliases:
 *       UnitFormat.getStandardInstance().alias(CENTI(METER)), "centimeter");
 *       UnitFormat.getStandardInstance().alias(CENTI(METER)), "centimetre");
 */
export interface TransformedUnit<T extends Quantity> {
  readonly type: "transformed";
  readonly quantity: Quantity;
  /** Holds the parent unit (not a transformed unit). */
  readonly parentUnit: Unit<T>;
  /** Holds the converter to the parent unit. */
  readonly toParentUnitConverter: UnitConverter;
}

/**
 * This record represents units formed by the product of rational powers of
 * existing units.
 * This record maintains the canonical form of this product (simplest
 * form after factorization). For example:
 * METER.pow(2).divide(METER) returns METER.
 */
export interface ProductUnit<_T extends Quantity> {
  readonly type: "product";
  readonly quantity: Quantity;
  /// Holds the units composing this product unit.
  readonly elements: Array<Element>;
}

/** Represents a rational power of a single unit. */
export interface Element {
  /** Holds the single unit. */
  readonly unit: Unit<Quantity>;
  /** Holds the power exponent. */
  readonly pow: number;
}

/**
 * This type represents a converter of numeric values.
 * Sub-types must ensure unicity of the identity
 * converter. In other words, if the result of an operation is equivalent
 * to the identity converter, then the unique IDENTITY instance
 * should be returned.
 */
export type UnitConverter =
  | OffsetConverter
  | CompoundConverter
  | FactorConverter
  | IdentityConverter;

/** This record represents a compound converter. */
export interface CompoundConverter {
  readonly type: "compound";
  /** Holds the first converter. */
  readonly first: UnitConverter;
  /** Holds the second converter. */
  readonly second: UnitConverter;
}

export interface FactorConverter {
  readonly type: "factor";
  readonly factor: number;
}

/** This record represents the identity converter (singleton). */
export interface IdentityConverter {
  readonly type: "identity";
}

export interface OffsetConverter {
  readonly type: "offset";
  readonly offset: number;
}

/** Holds the dimensionless unit ONE */
export const One: Unit<Dimensionless> = createOne(); //tslint:disable-line

/** Holds the identity converter (unique). This converter does nothing (ONE.convert(x) == x). */
const identityConverter: UnitConverter = createIdentityConverter();

/**
 * Creates a base unit having the specified symbol.
 * @param quantity The quantity of the resulting unit.
 * @param symbol The symbol of this base unit.
 */
export function createBase<T extends Quantity>(
  quantity: T,
  symbol: string
): Unit<T> {
  return { quantity, type: "base", symbol };
}

/**
 * Creates an alternate unit for the specified unit identified by the
 * specified symbol.
 * @param symbol The symbol for this alternate unit.
 * @param parent Parent the system unit from which this alternate unit is derived.
 */
export function createAlternate<T extends Quantity>(
  symbol: string,
  parent: Unit<Quantity>
): Unit<T> {
  return { quantity: parent.quantity, type: "alternate", symbol, parent };
}

/**
 * Returns the product of the specified units.
 * @param quantity The quantity of the resulting unit.
 * @param left The left unit operand.
 * @param right The right unit operand.</param>
 * @returns left * right
 */
export function times<T extends Quantity>(
  quantity: T,
  left: Unit<Quantity>,
  right: Unit<Quantity>
): Unit<T> {
  return product(quantity, left, right);
}

/**
 * Returns the quotient of the specified units.
 * @param quantity The quantity of the resulting unit.
 * @param left The dividend unit operand.
 * @param right The divisor unit operand.
 * @returns left / right
 */
export function divide<T extends Quantity>(
  quantity: T,
  left: Unit<Quantity>,
  right: Unit<Quantity>
): Unit<T> {
  return quotient(quantity, left, right);
}

export function squareRoot<T extends Quantity>(
  quantity: T,
  unit: Unit<T>
): Unit<T> {
  return pow(quantity, unit, 0.5);
}

export function timesNumber<T extends Quantity>(
  factor: number,
  unit: Unit<T>
): Unit<T> {
  return transform(createFactorConverter(factor), unit);
}

export function divideNumber<T extends Quantity>(
  factor: number,
  unit: Unit<T>
): Unit<T> {
  return transform(createFactorConverter(1.0 / factor), unit);
}

export function plus<T extends Quantity>(
  offset: number,
  unit: Unit<T>
): Unit<T> {
  return transform(createOffsetConverter(offset), unit);
}

export function minus<T extends Quantity>(
  offset: number,
  unit: Unit<T>
): Unit<T> {
  return transform(createOffsetConverter(-offset), unit);
}

/**
 * Converts numeric values from a unit to another unit.
 * @param value The numeric value to convert.
 * @param fromUnit The unit from which to convert the numeric value.
 * @param toUnit The unit to which to convert the numeric value.
 * @returns The converted numeric value.
 */
export function convert(
  value: number,
  fromUnit: Unit<Quantity>,
  toUnit: Unit<Quantity>
): number {
  const converter = getConverter(fromUnit, toUnit);
  return convertWithConverter(value, converter);
}

export function equals<T1 extends Quantity, T2 extends Quantity>(
  left: Unit<T1>,
  right: Unit<T2>
): boolean {
  if (left.type !== right.type || left.quantity !== right.quantity) {
    return false;
  }

  switch (left.type) {
    case "base":
      return left.symbol === (right as BaseUnit<Quantity>).symbol;
    case "alternate":
      const alternateRight = right as AlternateUnit<Quantity>;
      return (
        left.symbol === alternateRight.symbol &&
        equals(left.parent, alternateRight.parent)
      );
    case "transformed":
      const transformedRight = right as TransformedUnit<Quantity>;
      return (
        equals(left.parentUnit, transformedRight.parentUnit) &&
        unitConvertersIsEqual(
          left.toParentUnitConverter,
          transformedRight.toParentUnitConverter
        )
      );
    case "product":
      const productRight = right as ProductUnit<Quantity>;
      if (left.elements.length !== productRight.elements.length) {
        return false;
      }
      return left.elements.every((leftElement, index) => {
        return (
          leftElement.pow === productRight.elements[index].pow &&
          equals(leftElement.unit, productRight.elements[index].unit)
        );
      });
    default:
      return exhaustiveCheck(left, true);
  }
}

function unitConvertersIsEqual(
  left: UnitConverter,
  right: UnitConverter
): boolean {
  if (left.type !== right.type) {
    return false;
  }

  switch (left.type) {
    case "compound":
      const compoundRight = right as CompoundConverter;
      return unitConvertersIsEqual(left.first, compoundRight.first);
    case "factor":
      const factorRight = right as FactorConverter;
      return left.factor === factorRight.factor;
    case "identity":
      return true;
    case "offset":
      const offsetRight = right as OffsetConverter;
      return left.offset === offsetRight.offset;
    default:
      return exhaustiveCheck(left, true);
  }
}

///////////////////////////////
/// BEGIN PRIVATE DECLARATIONS
///////////////////////////////

function getConverter<T extends Quantity>(
  fromUnit: Unit<T>,
  toUnit: Unit<Quantity>
): UnitConverter {
  if (equals(fromUnit, toUnit)) {
    return identityConverter;
  }
  const standardFromUnit = toStandardUnitConverter(fromUnit);
  const standardToUnit = toStandardUnitConverter(toUnit);
  return concatenateConverters(
    standardFromUnit,
    inverseConverter(standardToUnit)
  );
}

// Returns the converter from this unit to its system unit.
function toStandardUnitConverter<T extends Quantity>(
  unit: Unit<T>
): UnitConverter {
  switch (unit.type) {
    case "alternate":
      return toStandardUnitConverter(unit.parent);
    case "base":
      return identityConverter;
    case "product":
      return productUnitToStandardUnit(unit);
    case "transformed":
      return concatenateConverters(
        unit.toParentUnitConverter,
        toStandardUnitConverter(unit.parentUnit)
      );
    default:
      return exhaustiveCheck(unit, true);
  }
  // throw new Error(`Unknown innerUnit ${JSON.stringify(unit)}`);
}

/**
 * Returns the unit derived from the specified unit using the specified converter.
 * The converter does not need to be linear.
 * @param operation The converter from the transformed unit to this unit.
 * @param unit The unit.
 * @returns The unit after the specified transformation.
 */
function transform<T extends Quantity>(
  operation: UnitConverter,
  unit: Unit<T>
): Unit<T> {
  if (operation === identityConverter) {
    return unit;
  }
  return createTransformedUnit(unit, operation);
}

/// Creates a transformed unit from the specified parent unit.
/// <param name="parentUnit">the untransformed unit from which this unit is derived.</param>
/// <param name="toParentUnitConverter">the converter to the parent units.</param>
function createTransformedUnit<T extends Quantity>(
  parentUnit: Unit<T>,
  toParentUnitConverter: UnitConverter
): TransformedUnit<T> {
  return {
    quantity: parentUnit.quantity,
    type: "transformed",
    parentUnit,
    toParentUnitConverter
  };
}

// function create<T extends Quantity>(quantity: T, innerUnit: Unit<T>): Unit<T> {
//   return {quantity, innerUnit}
// }

/**
 * Creates the unit defined from the product of the specifed elements.
 * @param quantity Quantity of the resulting unit.
 * @param leftElems Left multiplicand elements.
 * @param rightElems Right multiplicand elements.
 */
function fromProduct<T extends Quantity>(
  quantity: T,
  leftElems: Array<Element>,
  rightElems: Array<Element>
): ProductUnit<T> {
  // If we have several elements of the same unit then we can merge them by summing their power
  let allElements: Array<Element> = [];
  allElements.push(...leftElems);
  allElements.push(...rightElems);
  let resultElements: Array<Element> = [];

  // let unitGroups: Map<Unit<any>, Array<Element>> = new Map<Unit<any>, Array<Element>>();
  // allElements.forEach((v: Element) => {
  //   const group = unitGroups.get(v.unit);
  //   if (group === undefined)
  //     unitGroups.set(v.unit, [v]);
  //   else
  //     group.push(v);
  // });

  // unitGroups.forEach((unitGroup: Array<Element>, unit: Unit<any>)=> {
  //   let sumpow: number = unitGroup.reduce((prev: number, element: Element) => prev + element.pow, 0);
  //   if (sumpow != 0) {
  //     resultElements.push(createElement(unit, sumpow));
  //   }
  // });

  let unitGroups: { [key: string]: Array<Element> } = {}; // tslint:disable-line
  for (let v of allElements) {
    const group = unitGroups[JSON.stringify(v.unit)];
    if (group === undefined) {
      unitGroups[JSON.stringify(v.unit)] = [v];
    } else {
      group.push(v);
    }
  }

  Object.keys(unitGroups).forEach((unitJson: string) => {
    const unit: Unit<Quantity> = JSON.parse(unitJson);
    const unitGroup: Array<Element> = unitGroups[unitJson];
    let sumpow: number = unitGroup.reduce(
      (prev: number, element: Element) => prev + element.pow,
      0
    );
    if (sumpow !== 0) {
      resultElements.push(createElement(unit, sumpow));
    }
  });

  return createProductUnit(quantity, resultElements);
}

function createElement(unit: Unit<Quantity>, pow: number): Element {
  return { unit, pow };
}

function product<T extends Quantity>(
  quantity: T,
  left: Unit<Quantity>,
  right: Unit<Quantity>
): ProductUnit<T> {
  const leftelements = getElements(left);
  const rightelements = getElements(right);
  return fromProduct<T>(quantity, leftelements, rightelements);
}

function quotient<T extends Quantity>(
  quantity: T,
  left: Unit<Quantity>,
  right: Unit<Quantity>
): ProductUnit<T> {
  const leftelements = getElements(left);
  let invertedRightelements: Array<Element> = [];
  for (let element of getElements(right)) {
    invertedRightelements.push(createElement(element.unit, -element.pow));
  }
  return fromProduct<T>(quantity, leftelements, invertedRightelements);
}

function pow<T extends Quantity>(
  quantity: T,
  unit: Unit<Quantity>,
  exponent: number
): ProductUnit<T> {
  let squareRootedRightelements: Array<Element> = [];
  for (let element of getElements(unit)) {
    squareRootedRightelements.push(
      createElement(element.unit, element.pow * exponent)
    );
  }
  return fromProduct<T>(quantity, [], squareRootedRightelements);
}

function getElements(unit: Unit<Quantity>): Array<Element> {
  if (unit.type === "product") {
    return unit.elements;
  } else if (
    unit.type === "base" ||
    unit.type === "transformed" ||
    unit.type === "alternate"
  ) {
    // Base units has one implicit element of the unit which they describe
    return [createElement(unit, 1)];
  } else {
    return exhaustiveCheck(unit, true);
  }
}

function productUnitToStandardUnit<T extends Quantity>(
  unit: Unit<T>
): UnitConverter {
  let converter = identityConverter;
  for (let element of getElements(unit)) {
    let conv = toStandardUnitConverter(element.unit);
    let pow = element.pow;
    if (pow < 0) {
      pow = -pow;
      conv = inverseConverter(conv);
    }
    for (let i = 1; i <= pow; i++) {
      converter = concatenateConverters(conv, converter);
    }
  }
  return converter;
}

function createProductUnit<T extends Quantity>(
  quantity: T,
  elements: Array<Element>
): ProductUnit<T> {
  return { quantity, type: "product", elements };
}

/**
 * Creates a compound converter resulting from the combined
 * transformation of the specified converters.
 * @param first The first converter.
 * @param second Second the second converter.
 */
function createCompoundConverter(
  first: UnitConverter,
  second: UnitConverter
): CompoundConverter {
  return { type: "compound", first, second };
}

function createIdentityConverter(): IdentityConverter {
  return { type: "identity" };
}

function createOffsetConverter(offset: number): OffsetConverter {
  return { type: "offset", offset };
}

function createFactorConverter(factor: number): FactorConverter {
  if (factor === 1.0) {
    throw new Error("Argument: factor " + factor.toString());
  }
  return { type: "factor", factor };
}

/**
 * Returns the inverse of this converter. If x is a valid
 * value, then x == inverse().convert(convert(x)) to within
 * the accuracy of computer arithmetic.
 */
function inverseConverter(converter: UnitConverter): UnitConverter {
  switch (converter.type) {
    case "compound":
      return createCompoundConverter(
        inverseConverter(converter.second),
        inverseConverter(converter.first)
      );
    case "factor":
      return createFactorConverter(1.0 / converter.factor);
    case "identity":
      return converter;
    case "offset":
      return createOffsetConverter(-converter.offset);
    default:
      return exhaustiveCheck(converter, true);
  }
  // throw new Error("Unknown unit converter");
}

function convertWithConverter(value: number, converter: UnitConverter): number {
  switch (converter.type) {
    case "compound":
      return convertWithConverter(
        convertWithConverter(value, converter.first),
        converter.second
      );
    case "factor":
      return value * converter.factor;
    case "identity":
      return value;
    case "offset":
      return value + converter.offset;
    default:
      return exhaustiveCheck(converter, true);
  }
  // throw new Error("Unknown unit converter");
}

/**
 * Concatenates this converter with another converter. The resulting
 * converter is equivalent to first converting by the specified converter,
 * and then converting by this converter.
 *
 * Note: Implementations must ensure that the IDENTITY instance
 *       is returned if the resulting converter is an identity
 *       converter.
 * @param concatConverter This converter.
 * @param converter The other converter.
 * @returns The concatenation of this converter with the other converter.
 */
function concatenateConverters(
  concatConverter: UnitConverter,
  converter: UnitConverter
): UnitConverter {
  return concatConverter === identityConverter
    ? converter
    : createCompoundConverter(concatConverter, converter);
}

/** Used solely to create ONE instance. */
function createOne(): Unit<Dimensionless> {
  return { quantity: "Dimensionless", type: "product", elements: [] };
}
