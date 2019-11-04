import { Unit } from "../core";
import * as q from "./quantity";

export function volumeByDuration(
  name: string,
  left: Unit.Unit<q.Volume>,
  right: Unit.Unit<q.Duration>
): Unit.Unit<q.VolumeFlow> {
  return Unit.divide(name, "VolumeFlow", left, right);
}

export function volumeFlowBySquareRootPressure(
  name: string,
  left: Unit.Unit<q.VolumeFlow>,
  right: Unit.Unit<q.SquareRootPressure>
): Unit.Unit<q.VolumeFlowPerSquareRootPressure> {
  return Unit.divide(name, "VolumeFlowPerSquareRootPressure", left, right);
}

export function lengthByDuration(
  name: string,
  left: Unit.Unit<q.Length>,
  right: Unit.Unit<q.Duration>
): Unit.Unit<q.Velocity> {
  return Unit.divide(name, "Velocity", left, right);
}

export function velocityBySecond(
  name: string,
  left: Unit.Unit<q.Velocity>,
  right: Unit.Unit<q.Duration>
): Unit.Unit<q.Acceleration> {
  return Unit.divide(name, "Acceleration", left, right);
}

export function amountOfSubstanceByDuration(
  name: string,
  left: Unit.Unit<q.AmountOfSubstance>,
  right: Unit.Unit<q.Duration>
): Unit.Unit<q.CatalyticActivity> {
  return Unit.divide(name, "CatalyticActivity", left, right);
}

export function massByVolume(
  name: string,
  left: Unit.Unit<q.Mass>,
  right: Unit.Unit<q.Volume>
): Unit.Unit<q.Density> {
  return Unit.divide(name, "Density", left, right);
}

export function electricChargeByElectricPotential(
  name: string,
  left: Unit.Unit<q.ElectricCharge>,
  right: Unit.Unit<q.ElectricPotential>
): Unit.Unit<q.ElectricCapacitance> {
  return Unit.divide(name, "ElectricCapacitance", left, right);
}

export function energyByDuration(
  name: string,
  left: Unit.Unit<q.Energy>,
  right: Unit.Unit<q.Duration>
): Unit.Unit<q.Power> {
  return Unit.divide(name, "Power", left, right);
}

export function powerByElectricalCurrent(
  name: string,
  left: Unit.Unit<q.Power>,
  right: Unit.Unit<q.ElectricCurrent>
): Unit.Unit<q.ElectricPotential> {
  return Unit.divide(name, "ElectricPotential", left, right);
}

export function electricalCurrentByElectricalPotential(
  name: string,
  left: Unit.Unit<q.ElectricCurrent>,
  right: Unit.Unit<q.ElectricPotential>
): Unit.Unit<q.ElectricConductance> {
  return Unit.divide(name, "ElectricConductance", left, right);
}

export function magneticFluxByElectricalCurrent(
  name: string,
  left: Unit.Unit<q.MagneticFlux>,
  right: Unit.Unit<q.ElectricCurrent>
): Unit.Unit<q.ElectricInductance> {
  return Unit.divide(name, "ElectricInductance", left, right);
}

export function electricalPotentialByElectricalCurrent(
  name: string,
  left: Unit.Unit<q.ElectricPotential>,
  right: Unit.Unit<q.ElectricCurrent>
): Unit.Unit<q.ElectricResistance> {
  return Unit.divide(name, "ElectricResistance", left, right);
}

export function dimentionlessByDuration(
  name: string,
  left: Unit.Unit<q.Dimensionless>,
  right: Unit.Unit<q.Duration>
): Unit.Unit<q.Frequency> {
  return Unit.divide(name, "Frequency", left, right);
}

export function luminousFluxByArea(
  name: string,
  left: Unit.Unit<q.LuminousFlux>,
  right: Unit.Unit<q.Area>
): Unit.Unit<q.Illuminance> {
  return Unit.divide(name, "Illuminance", left, right);
}

export function magneticFluxByArea(
  name: string,
  left: Unit.Unit<q.MagneticFlux>,
  right: Unit.Unit<q.Area>
): Unit.Unit<q.MagneticFluxDensity> {
  return Unit.divide(name, "MagneticFluxDensity", left, right);
}

export function massByDuration(
  name: string,
  left: Unit.Unit<q.Mass>,
  right: Unit.Unit<q.Duration>
): Unit.Unit<q.MassFlow> {
  return Unit.divide(name, "MassFlow", left, right);
}

export function forceByArea(
  name: string,
  left: Unit.Unit<q.Force>,
  right: Unit.Unit<q.Area>
): Unit.Unit<q.Pressure> {
  return Unit.divide(name, "Pressure", left, right);
}

export function energyByMass(
  name: string,
  left: Unit.Unit<q.Energy>,
  right: Unit.Unit<q.Mass>
): Unit.Unit<q.SpecificEnthalpy> {
  return Unit.divide(name, "SpecificEnthalpy", left, right);
}

export function powerByVolumeFlow(
  name: string,
  left: Unit.Unit<q.Power>,
  right: Unit.Unit<q.VolumeFlow>
): Unit.Unit<q.SpecificFanPower> {
  return Unit.divide(name, "SpecificFanPower", left, right);
}

export function powerByTemperature(
  name: string,
  left: Unit.Unit<q.Power>,
  right: Unit.Unit<q.Temperature>
): Unit.Unit<q.HeatCapacityRate> {
  return Unit.divide(name, "HeatCapacityRate", left, right);
}

export function massByMass(
  name: string,
  left: Unit.Unit<q.Mass>,
  right: Unit.Unit<q.Mass>
): Unit.Unit<q.HumidityRatio> {
  return Unit.divide(name, "HumidityRatio", left, right);
}

export function dimensionlessByVolume(
  name: string,
  left: Unit.Unit<q.Dimensionless>,
  right: Unit.Unit<q.Volume>
): Unit.Unit<q.DimensionlessPerVolume> {
  return Unit.divide(name, "DimensionlessPerVolume", left, right);
}

export function dimensionlessByEnergy(
  name: string,
  left: Unit.Unit<q.Dimensionless>,
  right: Unit.Unit<q.Energy>
): Unit.Unit<q.DimensionlessPerEnergy> {
  return Unit.divide(name, "DimensionlessPerEnergy", left, right);
}

export function dimensionlessByDuration(
  name: string,
  left: Unit.Unit<q.Dimensionless>,
  right: Unit.Unit<q.Duration>
): Unit.Unit<q.DimensionlessPerDuration> {
  return Unit.divide(name, "DimensionlessPerDuration", left, right);
}

export function powerByArea(
  name: string,
  left: Unit.Unit<q.Power>,
  right: Unit.Unit<q.Area>
): Unit.Unit<q.Intensity> {
  return Unit.divide(name, "Intensity", left, right);
}

export function volumeByEnergy(
  name: string,
  left: Unit.Unit<q.Volume>,
  right: Unit.Unit<q.Energy>
): Unit.Unit<q.WaterUseEfficiency> {
  return Unit.divide(name, "WaterUseEfficiency", left, right);
}

export function massByEnergy(
  name: string,
  left: Unit.Unit<q.Mass>,
  right: Unit.Unit<q.Energy>
): Unit.Unit<q.Emission> {
  return Unit.divide(name, "Emission", left, right);
}

export function massFlowByArea(
  name: string,
  left: Unit.Unit<q.MassFlow>,
  right: Unit.Unit<q.Area>
): Unit.Unit<q.MassFlowPerArea> {
  return Unit.divide(name, "MassFlowPerArea", left, right);
}

export function energyByVolume(
  name: string,
  left: Unit.Unit<q.Energy>,
  right: Unit.Unit<q.Volume>
): Unit.Unit<q.HeatingValue> {
  return Unit.divide(name, "HeatingValue", left, right);
}

export function volumeFlowByPower(
  name: string,
  left: Unit.Unit<q.VolumeFlow>,
  right: Unit.Unit<q.Power>
): Unit.Unit<q.VolumeFlowPerPower> {
  return Unit.divide(name, "VolumeFlowPerPower", left, right);
}

export function volumeFlowByArea(
  name: string,
  left: Unit.Unit<q.VolumeFlow>,
  right: Unit.Unit<q.Area>
): Unit.Unit<q.VolumeFlowPerArea> {
  return Unit.divide(name, "VolumeFlowPerArea", left, right);
}

export function dimensionlessByMass(
  name: string,
  left: Unit.Unit<q.Dimensionless>,
  right: Unit.Unit<q.Mass>
): Unit.Unit<q.DimensionlessPerMass> {
  return Unit.divide(name, "DimensionlessPerMass", left, right);
}

export function powerByDeltaTemperature(
  name: string,
  left: Unit.Unit<q.Power>,
  right: Unit.Unit<q.DeltaTemperature>
): Unit.Unit<q.HeatCapacityRate> {
  return Unit.divide(name, "HeatCapacityRate", left, right);
}

export function intensityByDeltaTemperature(
  name: string,
  left: Unit.Unit<q.Intensity>,
  right: Unit.Unit<q.DeltaTemperature>
): Unit.Unit<q.ThermalTransmittance> {
  return Unit.divide(name, "ThermalTransmittance", left, right);
}

export function heatCapacityRateByLength(
  name: string,
  left: Unit.Unit<q.HeatCapacityRate>,
  right: Unit.Unit<q.Length>
): Unit.Unit<q.ThermalConductivity> {
  return Unit.divide(name, "ThermalConductivity", left, right);
}
