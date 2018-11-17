import * as UnitDivide from "../unit-divide";
import { Watt, BtuPerHour } from "./power";
import { Meter } from "./base-units";
import { DeltaCelsius } from "./delta-temperature";
import { Foot } from "./length";

// tslint:disable:variable-name

// Thermal conductivity
export const WattPerMeterPerKelvin = UnitDivide.heatCapacityRateByLength(
  "WattPerMeterPerKelvin",
  UnitDivide.powerByDeltaTemperature("", Watt, DeltaCelsius),
  Meter
);
export const BtuPerHourPerFeetPerFahrenheit = UnitDivide.heatCapacityRateByLength(
  "BtuPerHourPerFeetPerFahrenheit",
  UnitDivide.powerByDeltaTemperature("", BtuPerHour, DeltaCelsius),
  Foot
);
