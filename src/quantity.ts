import * as Units from "./units";

export { Acceleration } from "./units/acceleration";
export { Alkalinity } from "./units/alkalinity";
export { AmountOfSubstance } from "./units/amount-of-substance";
export { Angle } from "./units/angle";
export { Area } from "./units/area";
export { CatalyticActivity } from "./units/catalytic-activity";
export { DataAmount } from "./units/data-amount";
export { DeltaDewPointTemperature } from "./units/delta-dew-point-temperature";
export { DeltaTemperature } from "./units/delta-temperature";
export { Density } from "./units/density";
export { DewPointTemperature } from "./units/dew-point-temperature";
export { Dimensionless } from "./units/dimensionless";
export { DimensionlessPerEnergy } from "./units/dimensionless-per-energy";
export { DimensionlessPerMass } from "./units/dimensionless-per-mass";
export { DimensionlessPerVolume } from "./units/dimensionless-per-volume";
export { DimensionlessPerDuration } from "./units/dimensionless-per-duration";
export { Discrete } from "./units/discrete";
export { Duration } from "./units/duration";
export { ElectricCapacitance } from "./units/electric-capacitance";
export { ElectricCharge } from "./units/electric-charge";
export { ElectricConductance } from "./units/electric-conductance";
export { ElectricInductance } from "./units/electric-inductance";
export { ElectricCurrent } from "./units/electric-current";
export { ElectricPotential } from "./units/electric-potential";
export { ElectricResistance } from "./units/electric-resistance";
export { Emission } from "./units/emission";
export { Energy } from "./units/energy";
export { Force } from "./units/force";
export { Frequency } from "./units/frequency";
export { HeatCapacityRate } from "./units/heat-capacity-rate";
export { HeatingValue } from "./units/heating-value";
export { HumidityRatio } from "./units/humidity-ratio";
export { Illuminance } from "./units/illuminance";
export { Intensity } from "./units/intensity";
export { Length } from "./units/length";
export { LuminousFlux } from "./units/luminous-flux";
export { LuminousIntensity } from "./units/luminous-intensity";
export { MagneticFlux } from "./units/magnetic-flux";
export { MagneticFluxDensity } from "./units/magnetic-flux-density";
export { Mass } from "./units/mass";
export { MassFlow } from "./units/mass-flow";
export { MassFlowPerArea } from "./units/mass-flow-per-area";
export { MomentOfInertia } from "./units/moment-of-inertia";
export { Power } from "./units/power";
export { Pressure } from "./units/pressure";

export type RelativeHumidity = "RelativeHumidity";
export type SolidAngle = "SolidAngle";
export type SoundPowerLevel = "SoundPowerLevel";
export type SoundPressureLevel = "SoundPressureLevel";
export type SpecificEnthalpy = "SpecificEnthalpy";
export type SpecificFanPower = "SpecificFanPower";
export type SpecificHeatCapacity = "SpecificHeatCapacity";
export type SquareRootPressure = "SquareRootPressure";
export type Temperature = "Temperature";
export type Text = "Text";
export type Velocity = "Velocity";
export type Viscosity = "Viscosity";
export type Volume = "Volume";
export type VolumeFlow = "VolumeFlow";
export type VolumeFlowPerArea = "VolumeFlowPerArea";
export type VolumeFlowPerPower = "VolumeFlowPerPower";
export type VolumeFlowPerSquareRootPressure = "VolumeFlowPerSquareRootPressure";
export type WaterHardness = "WaterHardness";
export type WaterUseEfficiency = "WaterUseEfficiency";
export type WetTemperature = "WetTemperature";
export type ThermalTransmittance = "ThermalTransmittance";
export type ThermalConductivity = "ThermalConductivity";

export type Quantity =
  | Units.Acceleration
  | Units.Alkalinity
  | Units.AmountOfSubstance
  | Units.Angle
  | Units.Area
  | Units.CatalyticActivity
  | Units.DataAmount
  | Units.DeltaDewPointTemperature
  | Units.DeltaTemperature
  | Units.Density
  | Units.DewPointTemperature
  | Units.Dimensionless
  | Units.DimensionlessPerEnergy
  | Units.DimensionlessPerMass
  | Units.DimensionlessPerVolume
  | Units.DimensionlessPerDuration
  | Units.Discrete
  | Units.Duration
  | Units.ElectricCapacitance
  | Units.ElectricCharge
  | Units.ElectricConductance
  | Units.ElectricInductance
  | Units.ElectricCurrent
  | Units.ElectricPotential
  | Units.ElectricResistance
  | Units.Emission
  | Units.Energy
  | Units.Force
  | Units.Frequency
  | Units.HeatCapacityRate
  | Units.HeatingValue
  | Units.HumidityRatio
  | Units.Illuminance
  | Units.Intensity
  | Units.Length
  | Units.LuminousFlux
  | Units.LuminousIntensity
  | Units.MagneticFlux
  | Units.MagneticFluxDensity
  | Units.Mass
  | Units.MassFlow
  | Units.MassFlowPerArea
  | Units.MomentOfInertia
  | Units.Power
  | Units.Pressure
  | RelativeHumidity
  | SolidAngle
  | SoundPowerLevel
  | SoundPressureLevel
  | SpecificEnthalpy
  | SpecificFanPower
  | SpecificHeatCapacity
  | SquareRootPressure
  | Temperature
  | Text
  | Velocity
  | Viscosity
  | Volume
  | VolumeFlow
  | VolumeFlowPerArea
  | VolumeFlowPerPower
  | VolumeFlowPerSquareRootPressure
  | WaterHardness
  | WaterUseEfficiency
  | WetTemperature
  | ThermalTransmittance
  | ThermalConductivity;
