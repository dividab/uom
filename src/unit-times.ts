import * as Unit from "./unit";
import * as q from "./quantity";

export function lengthByLength(left: q.Length, right: q.Length): q.Area {
  return Unit.times("Area", left, right);
}

export function areaByLength(left: q.Area, right: q.Length): q.Volume {
  return Unit.times("Volume", left, right);
}

export function durationByElectricCurrent(
  left: q.Duration,
  right: q.ElectricCurrent
): q.ElectricCharge {
  return Unit.times("ElectricCharge", left, right);
}

export function massByAcceleration(
  left: q.Mass,
  right: q.Acceleration
): q.Force {
  if (!left || !right) {
    throw new Error("The arguments cannot be undefined");
  }
  return Unit.times("Force", left, right);
}

export function forceByLength(left: q.Force, right: q.Length): q.Energy {
  return Unit.times("Energy", left, right);
}

export function electricalPotentialByDuration(
  left: q.ElectricPotential,
  right: q.Duration
): q.MagneticFlux {
  return Unit.times("MagneticFlux", left, right);
}

export function luminousIntensityBySolidAngle(
  left: q.LuminousIntensity,
  right: q.SolidAngle
): q.LuminousFlux {
  return Unit.times("LuminousFlux", left, right);
}

export function massByArea(left: q.Mass, right: q.Area): q.MomentOfInertia {
  return Unit.times("MomentOfInertia", left, right);
}

export function dimensionlessByDimensionless(
  left: q.Dimensionless,
  right: q.Dimensionless
): q.SoundPressureLevel {
  return Unit.times("SoundPressureLevel", left, right);
}

export function specificEnthalpyByTemperature(
  left: q.SpecificEnthalpy,
  right: q.Temperature
): q.SpecificHeatCapacity {
  return Unit.times("SpecificHeatCapacity", left, right);
}

export function powerByDuration(left: q.Power, right: q.Duration): q.Energy {
  return Unit.times("Energy", left, right);
}
