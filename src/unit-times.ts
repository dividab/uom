import * as Unit from "./unit";
import * as q from "./quantity";

export function lengthByLength(
  left: Unit.Unit<q.Length>,
  right: Unit.Unit<q.Length>
): Unit.Unit<q.Area> {
  return Unit.times("Area", left, right);
}

export function areaByLength(
  left: Unit.Unit<q.Area>,
  right: Unit.Unit<q.Length>
): Unit.Unit<q.Volume> {
  return Unit.times("Volume", left, right);
}

export function durationByElectricCurrent(
  left: Unit.Unit<q.Duration>,
  right: Unit.Unit<q.ElectricCurrent>
): Unit.Unit<q.ElectricCharge> {
  return Unit.times("ElectricCharge", left, right);
}

export function massByAcceleration(
  left: Unit.Unit<q.Mass>,
  right: Unit.Unit<q.Acceleration>
): Unit.Unit<q.Force> {
  if (!left || !right) {
    throw new Error("The arguments cannot be undefined");
  }
  return Unit.times("Force", left, right);
}

export function forceByLength(
  left: Unit.Unit<q.Force>,
  right: Unit.Unit<q.Length>
): Unit.Unit<q.Energy> {
  return Unit.times("Energy", left, right);
}

export function electricalPotentialByDuration(
  left: Unit.Unit<q.ElectricPotential>,
  right: Unit.Unit<q.Duration>
): Unit.Unit<q.MagneticFlux> {
  return Unit.times("MagneticFlux", left, right);
}

export function luminousIntensityBySolidAngle(
  left: Unit.Unit<q.LuminousIntensity>,
  right: Unit.Unit<q.SolidAngle>
): Unit.Unit<q.LuminousFlux> {
  return Unit.times("LuminousFlux", left, right);
}

export function massByArea(
  left: Unit.Unit<q.Mass>,
  right: Unit.Unit<q.Area>
): Unit.Unit<q.MomentOfInertia> {
  return Unit.times("MomentOfInertia", left, right);
}

export function dimensionlessByDimensionless(
  left: Unit.Unit<q.Dimensionless>,
  right: Unit.Unit<q.Dimensionless>
): Unit.Unit<q.SoundPressureLevel> {
  return Unit.times("SoundPressureLevel", left, right);
}

export function specificEnthalpyByTemperature(
  left: Unit.Unit<q.SpecificEnthalpy>,
  right: Unit.Unit<q.Temperature>
): Unit.Unit<q.SpecificHeatCapacity> {
  return Unit.times("SpecificHeatCapacity", left, right);
}

export function powerByDuration(
  left: Unit.Unit<q.Power>,
  right: Unit.Unit<q.Duration>
): Unit.Unit<q.Energy> {
  return Unit.times("Energy", left, right);
}
