import { createUnitFormat } from "../unit-registry";

// tslint:disable:variable-name

// Thermal conductivity
export const WattPerMeterPerKelvin = createUnitFormat("W/m/°K", "SI", 2);
export const BtuPerHourPerFeetPerFahrenheit = createUnitFormat(
  "BTU/h/ft/°F",
  "IP",
  2
);
