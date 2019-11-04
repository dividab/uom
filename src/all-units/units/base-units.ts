import { Unit } from "../../core";

///////////////////
/// SI BASE UNITS //
///////////////////

/**
 * The International System of Units (SI) defines seven units of measure as a basic set from which
 * all other SI units are derived. These SI base units and their physical quantities are:
 * ampere for electric current
 * candela for luminous intensity
 * meter for length
 * kilogram for mass
 * second for time
 * kelvin for temperature
 * mole for the amount of substance
 */

/**
 * The base unit for electric current quantities ( <code>A</code> ).
 * The Ampere is that export constant current which,
 * if maintained in two straight parallel conductors of infinite length,
 * of negligible circular cross-section, and placed 1 metre apart in vacuum,
 * would produce between these conductors a force equal to 2 × 10-7 newton per metre of length.
 * It is named after the French physicist Andre Ampere (1775-1836).
 */
export const Ampere = Unit.createBase("Ampere", "ElectricCurrent", "A");

/**
 * The base unit for luminous intensity quantities ( <code>cd</code> ).
 * The candela is the luminous intensity, in a given direction, of a source
 * that emits monochromatic radiation of frequency 540 × 1012 hertz and that
 * has a radiant intensity in that direction of 1/683 watt per steradian.
 * @see <a href="http://en.wikipedia.org/wiki/Candela">Wikipedia: Candela</a>
 */
export const Candela = Unit.createBase("Candela", "LuminousIntensity", "cd");

/**
 * The base unit for thermodynamic temperature quantities ( <code>K</code> ).
 * The kelvin is the 1/273.16th of the thermodynamic temperature of the triple point of water.
 * It is named after the Scottish mathematician and physicist William Thomson 1st Lord Kelvin (1824-1907).
 */
export const Kelvin = Unit.createBase("Kelvin", "Temperature", "K");

/**
 * The base unit for mass quantities ( <code>kg</code> ).
 * It is the only SI unit with a prefix as part of its name and symbol.
 * The kilogram is equal to the mass of an international prototype in the form
 * of a platinum-iridium cylinder kept at Sevres in France.
 * @see #Gram
 */
export const Kilogram = Unit.createBase("Kilogram", "Mass", "kg");

/**
 * The base unit for length quantities ( <code>m</code> ).
 * One meter was redefined in 1983 as the distance traveled by light in a vacuum in 1/299,792,458 of a second.
 */
export const Meter = Unit.createBase("Meter", "Length", "m");

/**
 * The base unit for amount of substance quantities ( <code>mol</code> ).
 * The mole is the amount of substance of a system which contains as many elementary
 * entities as there are atoms in 0.012 kilogram of carbon 12.
 */
export const Mole = Unit.createBase("Mole", "AmountOfSubstance", "mol");

/**
 * The base unit for duration quantities ( <code>s</code> ). It is defined as the duration of 9,192,631,770 cycles of radiation corresponding to the transition between two hyperfine levels of the ground state of cesium (1967 Standard).
 */
export const Second = Unit.createBase("Second", "Duration", "s");
