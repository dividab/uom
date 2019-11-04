// import { Meter } from "./base-units";
import { BaseUnits } from "../../core";
import * as UnitDivide from "../unit-divide";
import { Watt, BtuPerHour } from "./power";
import { DeltaCelsius } from "./delta-temperature";
import { Foot } from "./length";

export type ThermalConductivity = "ThermalConductivity";

// Thermal conductivity
export const WattPerMeterPerKelvin = UnitDivide.heatCapacityRateByLength(
  "WattPerMeterPerKelvin",
  UnitDivide.powerByDeltaTemperature("", Watt, DeltaCelsius),
  BaseUnits.Meter
);
export const BtuPerHourPerFeetPerFahrenheit = UnitDivide.heatCapacityRateByLength(
  "BtuPerHourPerFeetPerFahrenheit",
  UnitDivide.powerByDeltaTemperature("", BtuPerHour, DeltaCelsius),
  Foot
);
