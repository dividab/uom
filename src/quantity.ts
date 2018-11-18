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

export type Frequency = "Frequency";
export type HeatCapacityRate = "HeatCapacityRate";
export type HeatingValue = "HeatingValue";
export type HumidityRatio = "HumidityRatio";
export type Illuminance = "Illuminance";
export type Intensity = "Intensity";
export type Length = "Length";
export type LuminousFlux = "LuminousFlux";
export type LuminousIntensity = "LuminousIntensity";
export type MagneticFlux = "MagneticFlux";
export type MagneticFluxDensity = "MagneticFluxDensity";
export type Mass = "Mass";
export type MassFlow = "MassFlow";
export type MassFlowPerArea = "MassFlowPerArea";
export type MomentOfInertia = "MomentOfInertia";
export type Power = "Power";
export type Pressure = "Pressure";
export type RadiationDoseAbsorbed = "RadiationDoseAbsorbed";
export type RadiationDoseEffective = "RadiationDoseEffective";
export type RadioactiveActivity = "RadioactiveActivity";
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
  | Frequency
  | HeatCapacityRate
  | HeatingValue
  | HumidityRatio
  | Illuminance
  | Intensity
  | Length
  | LuminousFlux
  | LuminousIntensity
  | MagneticFlux
  | MagneticFluxDensity
  | Mass
  | MassFlow
  | MassFlowPerArea
  | MomentOfInertia
  | Power
  | Pressure
  | RadiationDoseAbsorbed
  | RadiationDoseEffective
  | RadioactiveActivity
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
