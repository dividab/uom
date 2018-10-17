import * as Unit from "./unit";
import * as q from "./quantity";

export function lengthByLength(
  name: string,
  left: Unit.Unit<q.Length>,
  right: Unit.Unit<q.Length>
): Unit.Unit<q.Area> {
  return Unit.times(name, "Area", left, right);
}

export function areaByLength(
  name: string,
  left: Unit.Unit<q.Area>,
  right: Unit.Unit<q.Length>
): Unit.Unit<q.Volume> {
  return Unit.times(name, "Volume", left, right);
}

export function durationByElectricCurrent(
  name: string,
  left: Unit.Unit<q.Duration>,
  right: Unit.Unit<q.ElectricCurrent>
): Unit.Unit<q.ElectricCharge> {
  return Unit.times(name, "ElectricCharge", left, right);
}

export function massByAcceleration(
  name: string,
  left: Unit.Unit<q.Mass>,
  right: Unit.Unit<q.Acceleration>
): Unit.Unit<q.Force> {
  if (!left || !right) {
    throw new Error("The arguments cannot be undefined");
  }
  return Unit.times(name, "Force", left, right);
}

export function forceByLength(
  name: string,
  left: Unit.Unit<q.Force>,
  right: Unit.Unit<q.Length>
): Unit.Unit<q.Energy> {
  return Unit.times(name, "Energy", left, right);
}

export function electricalPotentialByDuration(
  name: string,
  left: Unit.Unit<q.ElectricPotential>,
  right: Unit.Unit<q.Duration>
): Unit.Unit<q.MagneticFlux> {
  return Unit.times(name, "MagneticFlux", left, right);
}

export function luminousIntensityBySolidAngle(
  name: string,
  left: Unit.Unit<q.LuminousIntensity>,
  right: Unit.Unit<q.SolidAngle>
): Unit.Unit<q.LuminousFlux> {
  return Unit.times(name, "LuminousFlux", left, right);
}

export function massByArea(
  name: string,
  left: Unit.Unit<q.Mass>,
  right: Unit.Unit<q.Area>
): Unit.Unit<q.MomentOfInertia> {
  return Unit.times(name, "MomentOfInertia", left, right);
}

export function dimensionlessByDimensionless(
  name: string,
  left: Unit.Unit<q.Dimensionless>,
  right: Unit.Unit<q.Dimensionless>
): Unit.Unit<q.SoundPressureLevel> {
  return Unit.times(name, "SoundPressureLevel", left, right);
}

export function specificEnthalpyByTemperature(
  name: string,
  left: Unit.Unit<q.SpecificEnthalpy>,
  right: Unit.Unit<q.Temperature>
): Unit.Unit<q.SpecificHeatCapacity> {
  return Unit.times(name, "SpecificHeatCapacity", left, right);
}

export function powerByDuration(
  name: string,
  left: Unit.Unit<q.Power>,
  right: Unit.Unit<q.Duration>
): Unit.Unit<q.Energy> {
  return Unit.times(name, "Energy", left, right);
}
