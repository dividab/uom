import * as UnitDivide from "../unit-divide";
import { Ampere } from "./base-units";
import { Weber } from "./magnetic-flux";

export type ElectricInductance = "ElectricInductance";

// tslint:disable:variable-name

export const Henry = UnitDivide.magneticFluxByElectricalCurrent(
  "Henry",
  Weber,
  Ampere
);
