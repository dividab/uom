import * as UnitDivide from "../unit-divide";
import { Watt, BtuPerHour } from "./power";
import { SquareMeter, SquareFeet } from "./area";
import { DeltaCelsius, DeltaFahrenheit } from "./delta-temperature";

export type ThermalTransmittance = "ThermalTransmittance";

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
