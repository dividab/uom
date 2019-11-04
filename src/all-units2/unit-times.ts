import { Unit } from "../core";
import * as Units from "./units";

export function lengthByLength(
  name: string,
  left: Unit.Unit<Units.Length>,
  right: Unit.Unit<Units.Length>
): Unit.Unit<Units.Area> {
  return Unit.times(name, "Area", left, right);
}

export function areaByLength(
  name: string,
  left: Unit.Unit<Units.Area>,
  right: Unit.Unit<Units.Length>
): Unit.Unit<Units.Volume> {
  return Unit.times(name, "Volume", left, right);
}

export function durationByElectricCurrent(
  name: string,
  left: Unit.Unit<Units.Duration>,
  right: Unit.Unit<Units.ElectricCurrent>
): Unit.Unit<Units.ElectricCharge> {
  return Unit.times(name, "ElectricCharge", left, right);
}

export function massByAcceleration(
  name: string,
  left: Unit.Unit<Units.Mass>,
  right: Unit.Unit<Units.Acceleration>
): Unit.Unit<Units.Force> {
  if (!left || !right) {
    throw new Error("The arguments cannot be undefined");
  }
  return Unit.times(name, "Force", left, right);
}

export function forceByLength(
  name: string,
  left: Unit.Unit<Units.Force>,
  right: Unit.Unit<Units.Length>
): Unit.Unit<Units.Energy> {
  return Unit.times(name, "Energy", left, right);
}

export function electricalPotentialByDuration(
  name: string,
  left: Unit.Unit<Units.ElectricPotential>,
  right: Unit.Unit<Units.Duration>
): Unit.Unit<Units.MagneticFlux> {
  return Unit.times(name, "MagneticFlux", left, right);
}

export function luminousIntensityBySolidAngle(
  name: string,
  left: Unit.Unit<Units.LuminousIntensity>,
  right: Unit.Unit<Units.SolidAngle>
): Unit.Unit<Units.LuminousFlux> {
  return Unit.times(name, "LuminousFlux", left, right);
}

export function massByArea(
  name: string,
  left: Unit.Unit<Units.Mass>,
  right: Unit.Unit<Units.Area>
): Unit.Unit<Units.MomentOfInertia> {
  return Unit.times(name, "MomentOfInertia", left, right);
}

export function dimensionlessByDimensionless(
  name: string,
  left: Unit.Unit<Unit.Dimensionless>,
  right: Unit.Unit<Unit.Dimensionless>
): Unit.Unit<Units.SoundPressureLevel> {
  return Unit.times(name, "SoundPressureLevel", left, right);
}

export function specificEnthalpyByTemperature(
  name: string,
  left: Unit.Unit<Units.SpecificEnthalpy>,
  right: Unit.Unit<Units.Temperature>
): Unit.Unit<Units.SpecificHeatCapacity> {
  return Unit.times(name, "SpecificHeatCapacity", left, right);
}

export function powerByDuration(
  name: string,
  left: Unit.Unit<Units.Power>,
  right: Unit.Unit<Units.Duration>
): Unit.Unit<Units.Energy> {
  return Unit.times(name, "Energy", left, right);
}
