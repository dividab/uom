import * as Unit from "./unit";
import * as q from "./quantity";

export function volumeByDuration(
  left: q.Volume,
  right: q.Duration
): q.VolumeFlow {
  return Unit.divide("VolumeFlow", left, right);
}

export function volumeFlowBySquareRootPressure(
  left: q.VolumeFlow,
  right: q.SquareRootPressure
): q.VolumeFlowPerSquareRootPressure {
  return Unit.divide("VolumeFlowPerSquareRootPressure", left, right);
}

export function lengthByDuration(
  left: q.Length,
  right: q.Duration
): q.Velocity {
  return Unit.divide("Velocity", left, right);
}

export function velocityBySecond(
  left: q.Velocity,
  right: q.Duration
): q.Acceleration {
  return Unit.divide("Acceleration", left, right);
}

export function amountOfSubstanceByDuration(
  left: q.AmountOfSubstance,
  right: q.Duration
): q.CatalyticActivity {
  return Unit.divide("CatalyticActivity", left, right);
}

export function massByVolume(left: q.Mass, right: q.Volume): q.Density {
  return Unit.divide("Density", left, right);
}

export function electricChargeByElectricPotential(
  left: q.ElectricCharge,
  right: q.ElectricPotential
): q.ElectricCapacitance {
  return Unit.divide("ElectricCapacitance", left, right);
}

export function energyByDuration(left: q.Energy, right: q.Duration): q.Power {
  return Unit.divide("Power", left, right);
}

export function powerByElectricalCurrent(
  left: q.Power,
  right: q.ElectricCurrent
): q.ElectricPotential {
  return Unit.divide("ElectricPotential", left, right);
}

export function electricalCurrentByElectricalPotential(
  left: q.ElectricCurrent,
  right: q.ElectricPotential
): q.ElectricConductance {
  return Unit.divide("ElectricConductance", left, right);
}

export function magneticFluxByElectricalCurrent(
  left: q.MagneticFlux,
  right: q.ElectricCurrent
): q.ElectricInductance {
  return Unit.divide("ElectricInductance", left, right);
}

export function electricalPotentialByElectricalCurrent(
  left: q.ElectricPotential,
  right: q.ElectricCurrent
): q.ElectricResistance {
  return Unit.divide("ElectricResistance", left, right);
}

export function dimentionlessByDuration(
  left: q.Dimensionless,
  right: q.Duration
): q.Frequency {
  return Unit.divide("Frequency", left, right);
}

export function luminousFluxByArea(
  left: q.LuminousFlux,
  right: q.Area
): q.Illuminance {
  return Unit.divide("Illuminance", left, right);
}

export function magneticFluxByArea(
  left: q.MagneticFlux,
  right: q.Area
): q.MagneticFluxDensity {
  return Unit.divide("MagneticFluxDensity", left, right);
}

export function massByDuration(left: q.Mass, right: q.Duration): q.MassFlow {
  return Unit.divide("MassFlow", left, right);
}

export function forceByArea(left: q.Force, right: q.Area): q.Pressure {
  return Unit.divide("Pressure", left, right);
}

export function energyByMass(
  left: q.Energy,
  right: q.Mass
): q.SpecificEnthalpy {
  return Unit.divide("SpecificEnthalpy", left, right);
}

export function powerByVolumeFlow(
  left: q.Power,
  right: q.VolumeFlow
): q.SpecificFanPower {
  return Unit.divide("SpecificFanPower", left, right);
}

export function powerByTemperature(
  left: q.Power,
  right: q.Temperature
): q.HeatCapacityRate {
  return Unit.divide("HeatCapacityRate", left, right);
}

export function massByMass(left: q.Mass, right: q.Mass): q.HumidityRatio {
  return Unit.divide("HumidityRatio", left, right);
}

export function dimensionlessByVolume(
  left: q.Dimensionless,
  right: q.Volume
): q.DimensionlessPerVolume {
  return Unit.divide("DimensionlessPerVolume", left, right);
}

export function dimensionlessByEnergy(
  left: q.Dimensionless,
  right: q.Energy
): q.DimensionlessPerEnergy {
  return Unit.divide("DimensionlessPerEnergy", left, right);
}

export function dimensionlessByDuration(
  left: q.Dimensionless,
  right: q.Duration
): q.DimensionlessPerDuration {
  return Unit.divide("DimensionlessPerDuration", left, right);
}

export function powerByArea(left: q.Power, right: q.Area): q.Intensity {
  return Unit.divide("Intensity", left, right);
}

export function volumeByEnergy(
  left: q.Volume,
  right: q.Energy
): q.WaterUseEfficiency {
  return Unit.divide("WaterUseEfficiency", left, right);
}

export function massByEnergy(left: q.Mass, right: q.Energy): q.Emission {
  return Unit.divide("Emission", left, right);
}

export function massFlowByArea(
  left: q.MassFlow,
  right: q.Area
): q.MassFlowPerArea {
  return Unit.divide("MassFlowPerArea", left, right);
}

export function energyByVolume(
  left: q.Energy,
  right: q.Volume
): q.HeatingValue {
  return Unit.divide("HeatingValue", left, right);
}

export function volumeFlowByPower(
  left: q.VolumeFlow,
  right: q.Power
): q.VolumeFlowPerPower {
  return Unit.divide("VolumeFlowPerPower", left, right);
}

export function volumeFlowByArea(
  left: q.VolumeFlow,
  right: q.Area
): q.VolumeFlowPerArea {
  return Unit.divide("VolumeFlowPerArea", left, right);
}

export function dimensionlessByMass(
  left: q.Dimensionless,
  right: q.Mass
): q.DimensionlessPerMass {
  return Unit.divide("DimensionlessPerMass", left, right);
}

export function powerByDeltaTemperature(
  left: q.Power,
  right: q.DeltaTemperature
): q.HeatCapacityRate {
  return Unit.divide("HeatCapacityRate", left, right);
}

export function intensityByDeltaTemperature(
  left: q.Intensity,
  right: q.DeltaTemperature
): q.ThermalTransmittance {
  return Unit.divide("ThermalTransmittance", left, right);
}

export function heatCapacityRateByLength(
  left: q.HeatCapacityRate,
  right: q.Length
): q.ThermalConductivity {
  return Unit.divide("ThermalConductivity", left, right);
}
