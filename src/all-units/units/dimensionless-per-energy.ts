import * as UnitDivide from "../unit-divide";
import { Unit } from "../../core";
import { Joule, Megajoule, Kilojoule, Therm, MegaBtu, Btu } from "./energy";
import { KiloWattHour } from "./energy2";

export type DimensionlessPerEnergy = "DimensionlessPerEnergy";

/// http://www.wolframalpha.com/input/?i=BTU and select 'Show exact conversions'
// Per Energy
export const OnePerKiloWattHour = UnitDivide.dimensionlessByEnergy(
  "OnePerKiloWattHour",
  Unit.One,
  KiloWattHour
);
export const OnePerBtu = UnitDivide.dimensionlessByEnergy(
  "OnePerBtu",
  Unit.One,
  Btu
);
export const OnePerMegaBtu = UnitDivide.dimensionlessByEnergy(
  "OnePerMegaBtu",
  Unit.One,
  MegaBtu
);
export const OnePerTherm = UnitDivide.dimensionlessByEnergy(
  "OnePerTherm",
  Unit.One,
  Therm
);
export const OnePerKilojoule = UnitDivide.dimensionlessByEnergy(
  "OnePerKilojoule",
  Unit.One,
  Kilojoule
);
export const OnePerMegajoule = UnitDivide.dimensionlessByEnergy(
  "OnePerMegajoule",
  Unit.One,
  Megajoule
);
export const OnePerJoule = UnitDivide.dimensionlessByEnergy(
  "OnePerJoule",
  Unit.One,
  Joule
);
