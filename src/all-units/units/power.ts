import * as UnitDivide from "../unit-divide";
import { Unit, UnitPrefix, BaseUnits } from "../../core";
import { Joule } from "./energy";

export type Power = "Power";

/**
 * The derived unit for power, radiant, flux ( <code>W</code> ).
 * One watt is equal to one joule per second.
 * It is named after the British scientist James Watt (1736-1819).
 */
export const Watt = UnitDivide.energyByDuration(
  "Watt",
  Joule,
  BaseUnits.Second
);

// Power
export const KiloWatt = UnitPrefix.Kilo("KiloWatt", Watt);
export const MegaWatt = UnitPrefix.Mega("MegaWatt", Watt);
export const GigaWatt = UnitPrefix.Giga("GigaWatt", Watt);
export const BtuPerHour = Unit.divideNumber(
  "BtuPerHour",
  3600.0,
  Unit.timesNumber("", 52752792631.0 / 50000000.0, Watt)
);
export const TonCooling = Unit.timesNumber("TonCooling", 12000.0, BtuPerHour);
export const KiloBtuPerHour = UnitPrefix.Kilo("KiloBtuPerHour", BtuPerHour);
export const HorsePower = Unit.timesNumber("HorsePower", 745.699872, Watt);
export const VoltAmpere = Unit.createAlternate<"Power">(
  "VoltAmpere",
  "VA",
  Watt
);
