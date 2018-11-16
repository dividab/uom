import * as Unit from "./unit";
import * as UnitDivide from "./unit-divide";
import * as UnitTimes from "./unit-times";
import { registerUnit } from "./unit-registry";

import { Second, Meter, Kilogram, Ampere, Kelvin } from "./units/base-units";
import { One } from "./units/dimensionless";
import { Kilo, Milli } from "./unit-prefix";

export * from "./units/base-units";
export * from "./units/dimensionless";
export * from "./units/velocity";
export * from "./units/acceleration";
export * from "./units/angle";
export * from "./units/length";
export * from "./units/mass";
export * from "./units/area";
export * from "./units/volume";
export * from "./units/solid-angle";
export * from "./units/frequency";
export * from "./units/force";
export * from "./units/pressure";
export * from "./units/energy";
export * from "./units/electric-charge";
export * from "./units/electric-potential";
export * from "./units/electric-capacitance";
export * from "./units/electric-resistance";
export * from "./units/magnetic-flux";
export * from "./units/magnetic-flux-density";
export * from "./units/electric-conductance";
export * from "./units/electric-inductance";
export * from "./units/luminous-flux";
export * from "./units/illuminance";
export * from "./units/specific-enthalpy";
export * from "./units/catalytic-activity";
export * from "./units/relative-humidity";
export * from "./units/wet-temperature";
export * from "./units/duration";
export * from "./units/density";
export * from "./units/dimensionless-per-energy";
export * from "./units/emission";
export * from "./units/mass-flow";
export * from "./units/volume-flow";
export * from "./units/volume-flow-per-area";
export * from "./units/dimensionless-per-mass";
export * from "./units/dimensionless-per-volume";

// tslint:disable variable-name max-line-length max-file-line-count

////////////////////////////////
/// SI DERIVED ALTERNATE UNITS //
////////////////////////////////

/**
 * AlternateUnits seems to be units with names like "Newton", "Celsius" while
 * ProductUnits seem to be units with names like "MeterPerSecond"
 */

////////////////////////////////////////////////////////////////////////////
/// END: System of Units - SI
////////////////////////////////////////////////////////////////////////////

// Per Duration
export const OnePerHour = registerUnit(
  UnitDivide.dimensionlessByDuration("OnePerHour", One, Hour),
  "/h"
);
export const OnePerSecond = registerUnit(
  UnitDivide.dimensionlessByDuration("OnePerSecond", One, Second),
  "/s"
);

/// Water use efficiency
export const LiterPerKiloWattHour = registerUnit(
  UnitDivide.volumeByEnergy("LiterPerKiloWattHour", Liter, KiloWattHour),
  "l/kWh"
);

export const KilogramPerSquareMeterSecond = registerUnit(
  UnitDivide.massFlowByArea(
    "KilogramPerSquareMeterSecond",
    KilogramPerSecond,
    SquareMeter
  ),
  "kg/m²s"
);

// Humidity
export const KilogramPerKilogram = registerUnit(
  UnitDivide.massByMass("KilogramPerKilogram", Kilogram, Kilogram),
  "kg/kg"
);
export const GramPerKilogram = registerUnit(
  UnitDivide.massByMass("GramPerKilogram", Gram, Kilogram),
  "g/kg"
);
export const PoundLbPerPoundLb = registerUnit(
  UnitDivide.massByMass("PoundLbPerPoundLb", PoundLb, PoundLb),
  "lb/lb"
);
export const GrainPerPoundLb = registerUnit(
  UnitDivide.massByMass("GrainPerPoundLb", Grain, PoundLb),
  "gr/lb"
);
export const GramPerPoundLb = registerUnit(
  UnitDivide.massByMass("GramPerPoundLb", Gram, PoundLb),
  "g/lb"
);

// Specific energy
export const KilojoulePerKilogram = registerUnit(
  UnitDivide.energyByMass("KilojoulePerKilogram", Kilojoule, Kilogram),
  "kJ/kg"
);
export const KiloWattHourPerKilogram = registerUnit(
  UnitDivide.energyByMass("KiloWattHourPerKilogram", KiloWattHour, Kilogram),
  "kWh/kg"
);
export const BtuPerPoundLb = registerUnit(
  Unit.minus(
    "BtuPerPoundLb",
    7.68,
    Unit.timesNumber("", 2.326, KilojoulePerKilogram)
  ),
  "BTU/lb"
);

// Energy per volume
export const KiloWattHourPerCubicMeter = registerUnit(
  UnitDivide.energyByVolume(
    "KiloWattHourPerCubicMeter",
    KiloWattHour,
    CubicMeter
  ),
  "kWh/m³"
);

// Specific heat capacity of air at constant pressure (kJ/kg°C, kWs/kgK, Btu/lb°F)
// Heat capacity is the measurable physical quantity that characterizes the amount of heat required to change a body's temperature by a given amount.
// Check if this really is correct
export const KilojoulePerKilogramKelvin = registerUnit(
  UnitTimes.specificEnthalpyByTemperature(
    "KilojoulePerKilogramKelvin",
    KilojoulePerKilogram,
    Kelvin
  ),
  "kJ/kg°K"
);
export const KilojoulePerKilogramCelsius = registerUnit(
  UnitTimes.specificEnthalpyByTemperature(
    "KilojoulePerKilogramCelsius",
    KilojoulePerKilogram,
    Celsius
  ),
  "kJ/kg°C"
);

// Heat Capacity Rate
export const KilowattPerCelsius = registerUnit(
  UnitDivide.powerByTemperature("KilowattPerCelsius", KiloWatt, Celsius),
  "kW/°C"
);
export const KilowattPerKelvin = registerUnit(
  UnitDivide.powerByTemperature("KilowattPerKelvin", KiloWatt, Kelvin),
  "kW/K"
);

/// Moment of inertia
export const KilogramSquareMeter = registerUnit(
  UnitTimes.massByArea("KilogramSquareMeter", Kilogram, SquareMeter),
  "kg·m²"
);

// Intensity
export const WattPerSquareMeter = registerUnit(
  UnitDivide.powerByArea("WattPerSquareMeter", Watt, SquareMeter),
  "W/m²"
);

// Specific Fan Power
export const KiloWattPerCubicMeterPerSecond = registerUnit(
  UnitDivide.powerByVolumeFlow(
    "KiloWattPerCubicMeterPerSecond",
    KiloWatt,
    CubicMeterPerSecond
  ),
  "kW/m³/s"
);
export const WattPerCubicMeterPerSecond = registerUnit(
  UnitDivide.powerByVolumeFlow(
    "WattPerCubicMeterPerSecond",
    Watt,
    CubicMeterPerSecond
  ),
  "W/m³/s"
);
export const KiloWattPerCubicFootPerMinute = registerUnit(
  UnitDivide.powerByVolumeFlow(
    "KiloWattPerCubicFootPerMinute",
    KiloWatt,
    CubicFeetPerMinute
  ),
  "kW/ft³/min"
);

// Sound power level
export const DecibelLw = registerUnit(
  Unit.createBase("DecibelLw", "SoundPowerLevel", "dB"),
  "dB"
);

// Sound pressure level
export const Decibel = registerUnit(
  Unit.createBase("Decibel", "SoundPressureLevel", "dB"),
  "dB"
);

// Electric resistance
export const KiloOhm = registerUnit(Kilo("KiloOhm", Ohm), "kOhm");

// Electric current
export const MilliAmpere = registerUnit(Milli("MilliAmpere", Ampere), "mA");

// Water hardness
export const MilliGramCalciumPerLiter = registerUnit(
  Unit.createBase("MilliGramCalciumPerLiter", "WaterHardness", "mg Ca²⁺/l"),
  "mg Ca²⁺/l"
);
export const FrenchDegree = registerUnit(
  Unit.timesNumber("FrenchDegree", 4.0043, MilliGramCalciumPerLiter),
  "°f"
);

// ElectricPotential
export const MilliVolt = registerUnit(Milli("MilliVolt", Volt), "mV");
export const KiloVolt = registerUnit(Kilo("KiloVolt", Volt), "kV");

// Discrete
// export const Integer = _register(Unit.createProductUnit<q.Discrete>("Discrete", []), " ");
export const Integer = registerUnit(
  Unit.createBase("Integer", "Discrete", " "),
  " "
);

// Text
// export const Text = _register(Unit.createProductUnit<q.Text>("Text", []), " ");
export const Text = registerUnit(Unit.createBase("Text", "Text", " "), " ");

// Alkalinity
export const MilliGramHydrogenCarbonatePerLiter = registerUnit(
  Unit.createBase(
    "MilliGramHydrogenCarbonatePerLiter",
    "Alkalinity",
    "mg HCO₃⁻/l"
  ),
  "mg HCO₃⁻/l"
);

// Viscosity
export const PascalSecond = registerUnit(
  Unit.createBase("PascalSecond", "Viscosity", "Pa·s"),
  "Pa·s"
);

// Thermal Transmittance
export const WattPerSquareMeterPerKelvin = registerUnit(
  UnitDivide.intensityByDeltaTemperature(
    "WattPerSquareMeterPerKelvin",
    UnitDivide.powerByArea("", Watt, SquareMeter),
    DeltaCelsius
  ),
  "W/m²/°K"
);
export const BtuPerHourPerSquareFeetPerFahrenheit = registerUnit(
  UnitDivide.intensityByDeltaTemperature(
    "BtuPerHourPerSquareFeetPerFahrenheit",
    UnitDivide.powerByArea("", BtuPerHour, SquareFeet),
    DeltaFahrenheit
  ),
  "BTU/h/ft²/°F"
);

// Thermal conductivity
export const WattPerMeterPerKelvin = registerUnit(
  UnitDivide.heatCapacityRateByLength(
    "WattPerMeterPerKelvin",
    UnitDivide.powerByDeltaTemperature("", Watt, DeltaCelsius),
    Meter
  ),
  "W/m/°K"
);
export const BtuPerHourPerFeetPerFahrenheit = registerUnit(
  UnitDivide.heatCapacityRateByLength(
    "BtuPerHourPerFeetPerFahrenheit",
    UnitDivide.powerByDeltaTemperature("", BtuPerHour, DeltaCelsius),
    Foot
  ),
  "BTU/h/ft/°F"
);

// Volume flow per cooling power
export const GallonsPerMinutePerTonCooling = registerUnit(
  UnitDivide.volumeFlowByPower(
    "GallonsPerMinutePerTonCooling",
    GallonsPerMinute,
    TonCooling
  ),
  "gpm/ton"
);
export const LiterPerSecondPerKiloWatt = registerUnit(
  UnitDivide.volumeFlowByPower(
    "LiterPerSecondPerKiloWatt",
    LiterPerSecond,
    KiloWatt
  ),
  "l/s/kW"
);

//SquareRootPressure
export const SquareRootPascal = registerUnit(
  Unit.createBase("SquareRootPascal", "SquareRootPressure", "√Pa"),
  "√Pa"
);
export const SquareRootInchOfWaterColumn = registerUnit(
  Unit.timesNumber(
    "SquareRootInchOfWaterColumn",
    1 / 0.06335029447,
    SquareRootPascal
  ),
  "√in WC"
); //sqrt(Pa/249.0889) = 0.06335029447

//VolumeFlowPerSquareRootPressure
export const LiterPerSecondPerSquareRootPascal = registerUnit(
  UnitDivide.volumeFlowBySquareRootPressure(
    "LiterPerSecondPerSquareRootPascal",
    LiterPerSecond,
    SquareRootPascal
  ),
  "l/s/√Pa"
);
export const CubicFeetPerMinutePerSquareRootInchOfWaterColumn = registerUnit(
  UnitDivide.volumeFlowBySquareRootPressure(
    "CubicFeetPerMinutePerSquareRootInchOfWaterColumn",
    CubicFeetPerMinute,
    SquareRootInchOfWaterColumn
  ),
  "ft³/min/√in WC"
);
