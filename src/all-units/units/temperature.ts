import { Unit, BaseUnits } from "../../core";

export type Temperature = "Temperature";

/**
 * The derived unit for Celsius temperature ( <code>℃</code> ).
 * This is a unit of temperature such as the freezing point of water (at one atmosphere of pressure)
 * is 0 ℃, while the boiling point is 100 ℃.
 */
export const Celsius = Unit.plus("Celsius", 273.15, BaseUnits.Kelvin);

export const Rankine = Unit.divideNumber(
  "Rankine",
  9.0,
  Unit.timesNumber("", 5.0, BaseUnits.Kelvin)
);

export const Fahrenheit = Unit.plus(
  "Fahrenheit",
  459.67,
  Unit.divideNumber("", 9.0, Unit.timesNumber("", 5.0, BaseUnits.Kelvin))
);
