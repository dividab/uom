import { Unit } from "../../core";

export type Viscosity = "Viscosity";

// Viscosity
export const PascalSecond = Unit.createBase(
  "PascalSecond",
  "Viscosity",
  "Pa·s"
);
