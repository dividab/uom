import * as UnitDivide from "../unit-divide";
import { Watt, BtuPerHour } from "./power";
import { SquareMeter, SquareFeet } from "./area";
import { DeltaCelsius, DeltaFahrenheit } from "./delta-temperature";

// tslint:disable:variable-name

// Thermal Transmittance
export const WattPerSquareMeterPerKelvin = UnitDivide.intensityByDeltaTemperature(
  "WattPerSquareMeterPerKelvin",
  UnitDivide.powerByArea("", Watt, SquareMeter),
  DeltaCelsius
);
export const BtuPerHourPerSquareFeetPerFahrenheit = UnitDivide.intensityByDeltaTemperature(
  "BtuPerHourPerSquareFeetPerFahrenheit",
  UnitDivide.powerByArea("", BtuPerHour, SquareFeet),
  DeltaFahrenheit
);
