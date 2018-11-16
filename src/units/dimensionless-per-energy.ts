import * as UnitDivide from "../unit-divide";
import { One } from "../unit";
import {
  Joule,
  Megajoule,
  Kilojoule,
  Therm,
  MegaBtu,
  Btu,
  KiloWattHour
} from "./energy";
// tslint:disable:variable-name

/// http://www.wolframalpha.com/input/?i=BTU and select 'Show exact conversions'
// Per Energy
export const OnePerKiloWattHour = UnitDivide.dimensionlessByEnergy(
  "OnePerKiloWattHour",
  One,
  KiloWattHour
);
export const OnePerBtu = UnitDivide.dimensionlessByEnergy(
  "OnePerBtu",
  One,
  Btu
);
export const OnePerMegaBtu = UnitDivide.dimensionlessByEnergy(
  "OnePerMegaBtu",
  One,
  MegaBtu
);
export const OnePerTherm = UnitDivide.dimensionlessByEnergy(
  "OnePerTherm",
  One,
  Therm
);
export const OnePerKilojoule = UnitDivide.dimensionlessByEnergy(
  "OnePerKilojoule",
  One,
  Kilojoule
);
export const OnePerMegajoule = UnitDivide.dimensionlessByEnergy(
  "OnePerMegajoule",
  One,
  Megajoule
);
export const OnePerJoule = UnitDivide.dimensionlessByEnergy(
  "OnePerJoule",
  One,
  Joule
);
