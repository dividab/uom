import { Unit } from "../core";
import * as Units from "./units";

export function volumeByDuration(
  name: string,
  left: Unit.Unit<Units.Volume>,
  right: Unit.Unit<Units.Duration>
): Unit.Unit<Units.VolumeFlow> {
  return Unit.divide(name, "VolumeFlow", left, right);
}

export function volumeFlowBySquareRootPressure(
  name: string,
  left: Unit.Unit<Units.VolumeFlow>,
  right: Unit.Unit<Units.SquareRootPressure>
): Unit.Unit<Units.VolumeFlowPerSquareRootPressure> {
  return Unit.divide(name, "VolumeFlowPerSquareRootPressure", left, right);
}

export function lengthByDuration(
  name: string,
  left: Unit.Unit<Units.Length>,
  right: Unit.Unit<Units.Duration>
): Unit.Unit<Units.Velocity> {
  return Unit.divide(name, "Velocity", left, right);
}

export function velocityBySecond(
  name: string,
  left: Unit.Unit<Units.Velocity>,
  right: Unit.Unit<Units.Duration>
): Unit.Unit<Units.Acceleration> {
  return Unit.divide(name, "Acceleration", left, right);
}

export function amountOfSubstanceByDuration(
  name: string,
  left: Unit.Unit<Units.AmountOfSubstance>,
  right: Unit.Unit<Units.Duration>
): Unit.Unit<Units.CatalyticActivity> {
  return Unit.divide(name, "CatalyticActivity", left, right);
}

export function massByVolume(
  name: string,
  left: Unit.Unit<Units.Mass>,
  right: Unit.Unit<Units.Volume>
): Unit.Unit<Units.Density> {
  return Unit.divide(name, "Density", left, right);
}

export function electricChargeByElectricPotential(
  name: string,
  left: Unit.Unit<Units.ElectricCharge>,
  right: Unit.Unit<Units.ElectricPotential>
): Unit.Unit<Units.ElectricCapacitance> {
  return Unit.divide(name, "ElectricCapacitance", left, right);
}

export function energyByDuration(
  name: string,
  left: Unit.Unit<Units.Energy>,
  right: Unit.Unit<Units.Duration>
): Unit.Unit<Units.Power> {
  return Unit.divide(name, "Power", left, right);
}

export function powerByElectricalCurrent(
  name: string,
  left: Unit.Unit<Units.Power>,
  right: Unit.Unit<Units.ElectricCurrent>
): Unit.Unit<Units.ElectricPotential> {
  return Unit.divide(name, "ElectricPotential", left, right);
}

export function electricalCurrentByElectricalPotential(
  name: string,
  left: Unit.Unit<Units.ElectricCurrent>,
  right: Unit.Unit<Units.ElectricPotential>
): Unit.Unit<Units.ElectricConductance> {
  return Unit.divide(name, "ElectricConductance", left, right);
}

export function magneticFluxByElectricalCurrent(
  name: string,
  left: Unit.Unit<Units.MagneticFlux>,
  right: Unit.Unit<Units.ElectricCurrent>
): Unit.Unit<Units.ElectricInductance> {
  return Unit.divide(name, "ElectricInductance", left, right);
}

export function electricalPotentialByElectricalCurrent(
  name: string,
  left: Unit.Unit<Units.ElectricPotential>,
  right: Unit.Unit<Units.ElectricCurrent>
): Unit.Unit<Units.ElectricResistance> {
  return Unit.divide(name, "ElectricResistance", left, right);
}

export function dimentionlessByDuration(
  name: string,
  left: Unit.Unit<Unit.Dimensionless>,
  right: Unit.Unit<Units.Duration>
): Unit.Unit<Units.Frequency> {
  return Unit.divide(name, "Frequency", left, right);
}

export function luminousFluxByArea(
  name: string,
  left: Unit.Unit<Units.LuminousFlux>,
  right: Unit.Unit<Units.Area>
): Unit.Unit<Units.Illuminance> {
  return Unit.divide(name, "Illuminance", left, right);
}

export function magneticFluxByArea(
  name: string,
  left: Unit.Unit<Units.MagneticFlux>,
  right: Unit.Unit<Units.Area>
): Unit.Unit<Units.MagneticFluxDensity> {
  return Unit.divide(name, "MagneticFluxDensity", left, right);
}

export function massByDuration(
  name: string,
  left: Unit.Unit<Units.Mass>,
  right: Unit.Unit<Units.Duration>
): Unit.Unit<Units.MassFlow> {
  return Unit.divide(name, "MassFlow", left, right);
}

export function forceByArea(
  name: string,
  left: Unit.Unit<Units.Force>,
  right: Unit.Unit<Units.Area>
): Unit.Unit<Units.Pressure> {
  return Unit.divide(name, "Pressure", left, right);
}

export function energyByMass(
  name: string,
  left: Unit.Unit<Units.Energy>,
  right: Unit.Unit<Units.Mass>
): Unit.Unit<Units.SpecificEnthalpy> {
  return Unit.divide(name, "SpecificEnthalpy", left, right);
}

export function powerByVolumeFlow(
  name: string,
  left: Unit.Unit<Units.Power>,
  right: Unit.Unit<Units.VolumeFlow>
): Unit.Unit<Units.SpecificFanPower> {
  return Unit.divide(name, "SpecificFanPower", left, right);
}

export function powerByTemperature(
  name: string,
  left: Unit.Unit<Units.Power>,
  right: Unit.Unit<Units.Temperature>
): Unit.Unit<Units.HeatCapacityRate> {
  return Unit.divide(name, "HeatCapacityRate", left, right);
}

export function massByMass(
  name: string,
  left: Unit.Unit<Units.Mass>,
  right: Unit.Unit<Units.Mass>
): Unit.Unit<Units.HumidityRatio> {
  return Unit.divide(name, "HumidityRatio", left, right);
}

export function dimensionlessByVolume(
  name: string,
  left: Unit.Unit<Unit.Dimensionless>,
  right: Unit.Unit<Units.Volume>
): Unit.Unit<Units.DimensionlessPerVolume> {
  return Unit.divide(name, "DimensionlessPerVolume", left, right);
}

export function dimensionlessByEnergy(
  name: string,
  left: Unit.Unit<Unit.Dimensionless>,
  right: Unit.Unit<Units.Energy>
): Unit.Unit<Units.DimensionlessPerEnergy> {
  return Unit.divide(name, "DimensionlessPerEnergy", left, right);
}

export function dimensionlessByDuration(
  name: string,
  left: Unit.Unit<Unit.Dimensionless>,
  right: Unit.Unit<Units.Duration>
): Unit.Unit<Units.DimensionlessPerDuration> {
  return Unit.divide(name, "DimensionlessPerDuration", left, right);
}

export function powerByArea(
  name: string,
  left: Unit.Unit<Units.Power>,
  right: Unit.Unit<Units.Area>
): Unit.Unit<Units.Intensity> {
  return Unit.divide(name, "Intensity", left, right);
}

export function volumeByEnergy(
  name: string,
  left: Unit.Unit<Units.Volume>,
  right: Unit.Unit<Units.Energy>
): Unit.Unit<Units.WaterUseEfficiency> {
  return Unit.divide(name, "WaterUseEfficiency", left, right);
}

export function massByEnergy(
  name: string,
  left: Unit.Unit<Units.Mass>,
  right: Unit.Unit<Units.Energy>
): Unit.Unit<Units.Emission> {
  return Unit.divide(name, "Emission", left, right);
}

export function massFlowByArea(
  name: string,
  left: Unit.Unit<Units.MassFlow>,
  right: Unit.Unit<Units.Area>
): Unit.Unit<Units.MassFlowPerArea> {
  return Unit.divide(name, "MassFlowPerArea", left, right);
}

export function energyByVolume(
  name: string,
  left: Unit.Unit<Units.Energy>,
  right: Unit.Unit<Units.Volume>
): Unit.Unit<Units.HeatingValue> {
  return Unit.divide(name, "HeatingValue", left, right);
}

export function volumeFlowByPower(
  name: string,
  left: Unit.Unit<Units.VolumeFlow>,
  right: Unit.Unit<Units.Power>
): Unit.Unit<Units.VolumeFlowPerPower> {
  return Unit.divide(name, "VolumeFlowPerPower", left, right);
}

export function volumeFlowByArea(
  name: string,
  left: Unit.Unit<Units.VolumeFlow>,
  right: Unit.Unit<Units.Area>
): Unit.Unit<Units.VolumeFlowPerArea> {
  return Unit.divide(name, "VolumeFlowPerArea", left, right);
}

export function dimensionlessByMass(
  name: string,
  left: Unit.Unit<Unit.Dimensionless>,
  right: Unit.Unit<Units.Mass>
): Unit.Unit<Units.DimensionlessPerMass> {
  return Unit.divide(name, "DimensionlessPerMass", left, right);
}

export function powerByDeltaTemperature(
  name: string,
  left: Unit.Unit<Units.Power>,
  right: Unit.Unit<Units.DeltaTemperature>
): Unit.Unit<Units.HeatCapacityRate> {
  return Unit.divide(name, "HeatCapacityRate", left, right);
}

export function intensityByDeltaTemperature(
  name: string,
  left: Unit.Unit<Units.Intensity>,
  right: Unit.Unit<Units.DeltaTemperature>
): Unit.Unit<Units.ThermalTransmittance> {
  return Unit.divide(name, "ThermalTransmittance", left, right);
}

export function heatCapacityRateByLength(
  name: string,
  left: Unit.Unit<Units.HeatCapacityRate>,
  right: Unit.Unit<Units.Length>
): Unit.Unit<Units.ThermalConductivity> {
  return Unit.divide(name, "ThermalConductivity", left, right);
}
