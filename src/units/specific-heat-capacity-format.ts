import { createUnitFormat } from "../unit-registry";

// tslint:disable:variable-name

// Specific heat capacity of air at constant pressure (kJ/kg°C, kWs/kgK, Btu/lb°F)
// Heat capacity is the measurable physical quantity that characterizes the amount of heat required to change a body's temperature by a given amount.
// Check if this really is correct
export const KilojoulePerKilogramKelvin = createUnitFormat("kJ/kg°K", "IP", 2);
export const KilojoulePerKilogramCelsius = createUnitFormat("kJ/kg°C", "SI", 2);
