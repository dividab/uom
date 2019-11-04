import { BaseUnits } from "../../core";
import * as UnitDivide from "../unit-divide";
import { KiloWatt } from "./power";
import { Celsius } from "./temperature";

export type HeatCapacityRate = "HeatCapacityRate";

// Heat Capacity Rate
export const KilowattPerCelsius = UnitDivide.powerByTemperature(
  "KilowattPerCelsius",
  KiloWatt,
  Celsius
);
export const KilowattPerKelvin = UnitDivide.powerByTemperature(
  "KilowattPerKelvin",
  KiloWatt,
  BaseUnits.Kelvin
);
