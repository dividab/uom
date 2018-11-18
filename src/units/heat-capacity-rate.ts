import * as UnitDivide from "../unit-divide";
import { Kelvin } from "./base-units";
import { KiloWatt } from "./power";
import { Celsius } from "./temperature";

// tslint:disable:variable-name

// Heat Capacity Rate
export const KilowattPerCelsius = UnitDivide.powerByTemperature(
  "KilowattPerCelsius",
  KiloWatt,
  Celsius
);
export const KilowattPerKelvin = UnitDivide.powerByTemperature(
  "KilowattPerKelvin",
  KiloWatt,
  Kelvin
);
