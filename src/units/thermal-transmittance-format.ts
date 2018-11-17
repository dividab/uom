import { createUnitFormat } from "../unit-registry";

// tslint:disable:variable-name

// Thermal Transmittance
export const WattPerSquareMeterPerKelvin = createUnitFormat("W/m²/°K", "SI", 2);
export const BtuPerHourPerSquareFeetPerFahrenheit = createUnitFormat(
  "BTU/h/ft²/°F",
  "IP",
  2
);
