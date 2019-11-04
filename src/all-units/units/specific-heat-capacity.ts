// import { Kelvin } from "./base-units";
import { BaseUnits } from "../../core";
import * as UnitTimes from "../unit-times";
import { Celsius } from "./temperature";
import { KilojoulePerKilogram } from "./specific-enthalpy";

export type SpecificHeatCapacity = "SpecificHeatCapacity";

// Specific heat capacity of air at constant pressure (kJ/kg°C, kWs/kgK, Btu/lb°F)
// Heat capacity is the measurable physical quantity that characterizes the amount of heat required to change a body's temperature by a given amount.
// Check if this really is correct
export const KilojoulePerKilogramKelvin = UnitTimes.specificEnthalpyByTemperature(
  "KilojoulePerKilogramKelvin",
  KilojoulePerKilogram,
  BaseUnits.Kelvin
);
export const KilojoulePerKilogramCelsius = UnitTimes.specificEnthalpyByTemperature(
  "KilojoulePerKilogramCelsius",
  KilojoulePerKilogram,
  Celsius
);
