import * as Unit from "./unit";
import * as q from "./quantity";

export function volumeByDuration(
  left: Unit.Unit<q.Volume>,
  right: Unit.Unit<q.Duration>
): Unit.Unit<q.VolumeFlow> {
  return Unit.divide("VolumeFlow", left, right);
}

export function volumeFlowBySquareRootPressure(
  left: Unit.Unit<q.VolumeFlow>,
  right: Unit.Unit<q.SquareRootPressure>
): Unit.Unit<q.VolumeFlowPerSquareRootPressure> {
  return Unit.divide("VolumeFlowPerSquareRootPressure", left, right);
}

export function lengthByDuration(
  left: Unit.Unit<q.Length>,
  right: Unit.Unit<q.Duration>
): Unit.Unit<q.Velocity> {
  return Unit.divide("Velocity", left, right);
}

export function velocityBySecond(
  left: Unit.Unit<q.Velocity>,
  right: Unit.Unit<q.Duration>
): Unit.Unit<q.Acceleration> {
  return Unit.divide("Acceleration", left, right);
}

export function amountOfSubstanceByDuration(
  left: Unit.Unit<q.AmountOfSubstance>,
  right: Unit.Unit<q.Duration>
): Unit.Unit<q.CatalyticActivity> {
  return Unit.divide("CatalyticActivity", left, right);
}

export function massByVolume(
  left: Unit.Unit<q.Mass>,
  right: Unit.Unit<q.Volume>
): Unit.Unit<q.Density> {
  return Unit.divide("Density", left, right);
}

export function electricChargeByElectricPotential(
  left: Unit.Unit<q.ElectricCharge>,
  right: Unit.Unit<q.ElectricPotential>
): Unit.Unit<q.ElectricCapacitance> {
  return Unit.divide("ElectricCapacitance", left, right);
}

export function energyByDuration(
  left: Unit.Unit<q.Energy>,
  right: Unit.Unit<q.Duration>
): Unit.Unit<q.Power> {
  return Unit.divide("Power", left, right);
}

export function powerByElectricalCurrent(
  left: Unit.Unit<q.Power>,
  right: Unit.Unit<q.ElectricCurrent>
): Unit.Unit<q.ElectricPotential> {
  return Unit.divide("ElectricPotential", left, right);
}

export function electricalCurrentByElectricalPotential(
  left: Unit.Unit<q.ElectricCurrent>,
  right: Unit.Unit<q.ElectricPotential>
): Unit.Unit<q.ElectricConductance> {
  return Unit.divide("ElectricConductance", left, right);
}

export function magneticFluxByElectricalCurrent(
  left: Unit.Unit<q.MagneticFlux>,
  right: Unit.Unit<q.ElectricCurrent>
): Unit.Unit<q.ElectricInductance> {
  return Unit.divide("ElectricInductance", left, right);
}

export function electricalPotentialByElectricalCurrent(
  left: Unit.Unit<q.ElectricPotential>,
  right: Unit.Unit<q.ElectricCurrent>
): Unit.Unit<q.ElectricResistance> {
  return Unit.divide("ElectricResistance", left, right);
}

export function dimentionlessByDuration(
  left: Unit.Unit<q.Dimensionless>,
  right: Unit.Unit<q.Duration>
): Unit.Unit<q.Frequency> {
  return Unit.divide("Frequency", left, right);
}

export function luminousFluxByArea(
  left: Unit.Unit<q.LuminousFlux>,
  right: Unit.Unit<q.Area>
): Unit.Unit<q.Illuminance> {
  return Unit.divide("Illuminance", left, right);
}

export function magneticFluxByArea(
  left: Unit.Unit<q.MagneticFlux>,
  right: Unit.Unit<q.Area>
): Unit.Unit<q.MagneticFluxDensity> {
  return Unit.divide("MagneticFluxDensity", left, right);
}

export function massByDuration(
  left: Unit.Unit<q.Mass>,
  right: Unit.Unit<q.Duration>
): Unit.Unit<q.MassFlow> {
  return Unit.divide("MassFlow", left, right);
}

export function forceByArea(
  left: Unit.Unit<q.Force>,
  right: Unit.Unit<q.Area>
): Unit.Unit<q.Pressure> {
  return Unit.divide("Pressure", left, right);
}

export function energyByMass(
  left: Unit.Unit<q.Energy>,
  right: Unit.Unit<q.Mass>
): Unit.Unit<q.SpecificEnthalpy> {
  return Unit.divide("SpecificEnthalpy", left, right);
}

export function powerByVolumeFlow(
  left: Unit.Unit<q.Power>,
  right: Unit.Unit<q.VolumeFlow>
): Unit.Unit<q.SpecificFanPower> {
  return Unit.divide("SpecificFanPower", left, right);
}

export function powerByTemperature(
  left: Unit.Unit<q.Power>,
  right: Unit.Unit<q.Temperature>
): Unit.Unit<q.HeatCapacityRate> {
  return Unit.divide("HeatCapacityRate", left, right);
}

export function massByMass(
  left: Unit.Unit<q.Mass>,
  right: Unit.Unit<q.Mass>
): Unit.Unit<q.HumidityRatio> {
  return Unit.divide("HumidityRatio", left, right);
}

export function dimensionlessByVolume(
  left: Unit.Unit<q.Dimensionless>,
  right: Unit.Unit<q.Volume>
): Unit.Unit<q.DimensionlessPerVolume> {
  return Unit.divide("DimensionlessPerVolume", left, right);
}

export function dimensionlessByEnergy(
  left: Unit.Unit<q.Dimensionless>,
  right: Unit.Unit<q.Energy>
): Unit.Unit<q.DimensionlessPerEnergy> {
  return Unit.divide("DimensionlessPerEnergy", left, right);
}

export function dimensionlessByDuration(
  left: Unit.Unit<q.Dimensionless>,
  right: Unit.Unit<q.Duration>
): Unit.Unit<q.DimensionlessPerDuration> {
  return Unit.divide("DimensionlessPerDuration", left, right);
}

export function powerByArea(
  left: Unit.Unit<q.Power>,
  right: Unit.Unit<q.Area>
): Unit.Unit<q.Intensity> {
  return Unit.divide("Intensity", left, right);
}

export function volumeByEnergy(
  left: Unit.Unit<q.Volume>,
  right: Unit.Unit<q.Energy>
): Unit.Unit<q.WaterUseEfficiency> {
  return Unit.divide("WaterUseEfficiency", left, right);
}

export function massByEnergy(
  left: Unit.Unit<q.Mass>,
  right: Unit.Unit<q.Energy>
): Unit.Unit<q.Emission> {
  return Unit.divide("Emission", left, right);
}

export function massFlowByArea(
  left: Unit.Unit<q.MassFlow>,
  right: Unit.Unit<q.Area>
): Unit.Unit<q.MassFlowPerArea> {
  return Unit.divide("MassFlowPerArea", left, right);
}

export function energyByVolume(
  left: Unit.Unit<q.Energy>,
  right: Unit.Unit<q.Volume>
): Unit.Unit<q.HeatingValue> {
  return Unit.divide("HeatingValue", left, right);
}

export function volumeFlowByPower(
  left: Unit.Unit<q.VolumeFlow>,
  right: Unit.Unit<q.Power>
): Unit.Unit<q.VolumeFlowPerPower> {
  return Unit.divide("VolumeFlowPerPower", left, right);
}

export function volumeFlowByArea(
  left: Unit.Unit<q.VolumeFlow>,
  right: Unit.Unit<q.Area>
): Unit.Unit<q.VolumeFlowPerArea> {
  return Unit.divide("VolumeFlowPerArea", left, right);
}

export function dimensionlessByMass(
  left: Unit.Unit<q.Dimensionless>,
  right: Unit.Unit<q.Mass>
): Unit.Unit<q.DimensionlessPerMass> {
  return Unit.divide("DimensionlessPerMass", left, right);
}

export function powerByDeltaTemperature(
  left: Unit.Unit<q.Power>,
  right: Unit.Unit<q.DeltaTemperature>
): Unit.Unit<q.HeatCapacityRate> {
  return Unit.divide("HeatCapacityRate", left, right);
}

export function intensityByDeltaTemperature(
  left: Unit.Unit<q.Intensity>,
  right: Unit.Unit<q.DeltaTemperature>
): Unit.Unit<q.ThermalTransmittance> {
  return Unit.divide("ThermalTransmittance", left, right);
}

export function heatCapacityRateByLength(
  left: Unit.Unit<q.HeatCapacityRate>,
  right: Unit.Unit<q.Length>
): Unit.Unit<q.ThermalConductivity> {
  return Unit.divide("ThermalConductivity", left, right);
}
