import * as Unit from "../unit";
import { Kelvin } from "./base-units";

// tslint:disable:variable-name

/**
 * The derived unit for Celsius temperature ( <code>℃</code> ).
 * This is a unit of temperature such as the freezing point of water (at one atmosphere of pressure)
 * is 0 ℃, while the boiling point is 100 ℃.
 */
export const Celsius = Unit.plus("Celsius", 273.15, Kelvin);

export const Rankine = Unit.divideNumber(
  "Rankine",
  9.0,
  Unit.timesNumber("", 5.0, Kelvin)
);

export const Fahrenheit = Unit.plus(
  "Fahrenheit",
  459.67,
  Unit.divideNumber("", 9.0, Unit.timesNumber("", 5.0, Kelvin))
);
