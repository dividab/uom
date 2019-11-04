import * as UnitDivide from "../unit-divide";
import { BaseUnits } from "../../core";
import { Weber } from "./magnetic-flux";

export type ElectricInductance = "ElectricInductance";

export const Henry = UnitDivide.magneticFluxByElectricalCurrent(
  "Henry",
  Weber,
  BaseUnits.Ampere
);
