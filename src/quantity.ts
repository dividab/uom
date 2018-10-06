import { Unit } from "./unit";

export type Acceleration = Unit<"Acceleration">;
export type Alkalinity = Unit<"Alkalinity">;
export type AmountOfSubstance = Unit<"AmountOfSubstance">;
export type Angle = Unit<"Angle">;
export type Area = Unit<"Area">;
export type CatalyticActivity = Unit<"CatalyticActivity">;
export type DataAmount = Unit<"DataAmount">;
export type DeltaDewPointTemperature = Unit<"DeltaDewPointTemperature">;
export type DeltaTemperature = Unit<"DeltaTemperature">;
export type Density = Unit<"Density">;
export type DewPointTemperature = Unit<"DewPointTemperature">;
export type Dimensionless = Unit<"Dimensionless">;
export type DimensionlessPerEnergy = Unit<"DimensionlessPerEnergy">;
export type DimensionlessPerMass = Unit<"DimensionlessPerMass">;
export type DimensionlessPerVolume = Unit<"DimensionlessPerVolume">;
export type DimensionlessPerDuration = Unit<"DimensionlessPerDuration">;
export type Discrete = Unit<"Discrete">;
export type Duration = Unit<"Duration">;
export type ElectricCapacitance = Unit<"ElectricCapacitance">;
export type ElectricCharge = Unit<"ElectricCharge">;
export type ElectricConductance = Unit<"ElectricConductance">;
export type ElectricInductance = Unit<"ElectricInductance">;
export type ElectricCurrent = Unit<"ElectricCurrent">;
export type ElectricPotential = Unit<"ElectricPotential">;
export type ElectricResistance = Unit<"ElectricResistance">;
export type Emission = Unit<"Emission">;
export type Energy = Unit<"Energy">;
export type Force = Unit<"Force">;
export type Frequency = Unit<"Frequency">;
export type HeatCapacityRate = Unit<"HeatCapacityRate">;
export type HeatingValue = Unit<"HeatingValue">;
export type HumidityRatio = Unit<"HumidityRatio">;
export type Illuminance = Unit<"Illuminance">;
export type Intensity = Unit<"Intensity">;
export type Length = Unit<"Length">;
export type LuminousFlux = Unit<"LuminousFlux">;
export type LuminousIntensity = Unit<"LuminousIntensity">;
export type MagneticFlux = Unit<"MagneticFlux">;
export type MagneticFluxDensity = Unit<"MagneticFluxDensity">;
export type Mass = Unit<"Mass">;
export type MassFlow = Unit<"MassFlow">;
export type MassFlowPerArea = Unit<"MassFlowPerArea">;
export type MomentOfInertia = Unit<"MomentOfInertia">;
export type Power = Unit<"Power">;
export type Pressure = Unit<"Pressure">;
export type RadiationDoseAbsorbed = Unit<"RadiationDoseAbsorbed">;
export type RadiationDoseEffective = Unit<"RadiationDoseEffective">;
export type RadioactiveActivity = Unit<"RadioactiveActivity">;
export type RelativeHumidity = Unit<"RelativeHumidity">;
export type SolidAngle = Unit<"SolidAngle">;
export type SoundPowerLevel = Unit<"SoundPowerLevel">;
export type SoundPressureLevel = Unit<"SoundPressureLevel">;
export type SpecificEnthalpy = Unit<"SpecificEnthalpy">;
export type SpecificFanPower = Unit<"SpecificFanPower">;
export type SpecificHeatCapacity = Unit<"SpecificHeatCapacity">;
export type SquareRootPressure = Unit<"SquareRootPressure">;
export type Temperature = Unit<"Temperature">;
export type Text = Unit<"Text">;
export type Velocity = Unit<"Velocity">;
export type Viscosity = Unit<"Viscosity">;
export type Volume = Unit<"Volume">;
export type VolumeFlow = Unit<"VolumeFlow">;
export type VolumeFlowPerArea = Unit<"VolumeFlowPerArea">;
export type VolumeFlowPerPower = Unit<"VolumeFlowPerPower">;
export type VolumeFlowPerSquareRootPressure = Unit<
  "VolumeFlowPerSquareRootPressure"
>;
export type WaterHardness = Unit<"WaterHardness">;
export type WaterUseEfficiency = Unit<"WaterUseEfficiency">;
export type WetTemperature = Unit<"WetTemperature">;
export type ThermalTransmittance = Unit<"ThermalTransmittance">;
export type ThermalConductivity = Unit<"ThermalConductivity">;

export type Quantity =
  | Acceleration
  | Alkalinity
  | AmountOfSubstance
  | Angle
  | Area
  | CatalyticActivity
  | DataAmount
  | DeltaDewPointTemperature
  | DeltaTemperature
  | Density
  | DewPointTemperature
  | Dimensionless
  | DimensionlessPerEnergy
  | DimensionlessPerMass
  | DimensionlessPerVolume
  | DimensionlessPerDuration
  | Discrete
  | Duration
  | ElectricCapacitance
  | ElectricCharge
  | ElectricConductance
  | ElectricInductance
  | ElectricCurrent
  | ElectricPotential
  | ElectricResistance
  | Emission
  | Energy
  | Force
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
