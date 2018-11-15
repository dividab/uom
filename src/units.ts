import * as Unit from "./unit";
import * as UnitDivide from "./unit-divide";
import * as UnitTimes from "./unit-times";
import { registerUnit } from "./unit-registry";

import { Second, Meter, Kilogram, Ampere, Kelvin } from "./units/base-units";
import { One } from "./units/dimensionless";
import { Cubed, Kilo, Milli, Squared, Mega, Giga } from "./unit-prefix";

export * from "./units/base-units";
export * from "./units/dimensionless";
export * from "./units/velocity";
export * from "./units/acceleration";
export * from "./units/angle";
export * from "./units/length";
export * from "./units/mass";
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

// Velocity
export const FeetPerSecond = registerUnit(
  UnitDivide.lengthByDuration("FeetPerSecond", Foot, Second),
  "ft/s"
);
export const FeetPerMinute = registerUnit(
  UnitDivide.lengthByDuration("FeetPerMinute", Foot, Minute),
  "ft/min"
);
export const MilesPerHour = registerUnit(
  UnitDivide.lengthByDuration("MilesPerHour", Mile, Hour),
  "mph"
);
export const KilometerPerHour = registerUnit(
  UnitDivide.lengthByDuration("KilometerPerHour", Kilometer, Hour),
  "km/h"
);
export const MeterPerHour = registerUnit(
  UnitDivide.lengthByDuration("MeterPerHour", Meter, Hour),
  "m/h"
);

// Acceleration

// Density
export const KilogramPerCubicMeter = registerUnit(
  UnitDivide.massByVolume("KilogramPerCubicMeter", Kilogram, CubicMeter),
  "kg/m³"
);
export const GramPerCubicCentiMeter = registerUnit(
  UnitDivide.massByVolume("GramPerCubicCentiMeter", Gram, CubicCentiMeter),
  "g/cm³"
);
export const SlugPerCubicFeet = registerUnit(
  UnitDivide.massByVolume("SlugPerCubicFeet", Slug, CubicFeet),
  "slug/ft³"
);
export const PoundPerCubicFoot = registerUnit(
  UnitDivide.massByVolume("PoundPerCubicFoot", PoundLb, CubicFeet),
  "lb/ft³"
);

// Force
export const PoundForce = registerUnit(
  Unit.divideNumber(
    "PoundForce",
    8896443230521.0,
    Unit.timesNumber("", 2000000000000.0, Newton)
  ),
  "lb"
);

// Pressure
export const KiloPascal = registerUnit(Kilo("KiloPascal", Pascal), "kPa");
export const HectoPascal = registerUnit(Hecto("HectoPascal", Pascal), "hPa");
export const NewtonPerSquareMeter = registerUnit(
  UnitDivide.forceByArea("NewtonPerSquareMeter", Newton, SquareMeter),
  "N/m²"
);
export const PoundForcePerSquareInch = registerUnit(
  Unit.divideNumber(
    "PoundForcePerSquareInch",
    1290320000.0,
    Unit.timesNumber("", 8896443230521.0, Pascal)
  ),
  "psi"
);
export const PoundForcePerSquareFoot = registerUnit(
  Unit.timesNumber("PoundForcePerSquareFoot", 144.0, PoundForcePerSquareInch),
  "psf"
);
export const DeciPascal = registerUnit(Deci("DeciPascal", Pascal), "dPa");

// http://www.wolframalpha.com/input/?i=psi and select 'Show exact conversions'
export const InchOfMercury = registerUnit(
  Unit.divideNumber(
    "InchOfMercury",
    152.0,
    Unit.timesNumber("", 514731.0, Pascal)
  ),
  "in HG"
);

// http://www.wolframalpha.com/input/?i=inHg and select 'Show exact conversions'
export const InchOfWaterColumn = registerUnit(
  Unit.timesNumber("InchOfWaterColumn", 249.0889, Pascal),
  "in WC"
);

// http://www.wolframalpha.com/input/?i=inWC
export const FeetOfWaterColumn = registerUnit(
  Unit.timesNumber("FeetOfWaterColumn", 2989.067, Pascal),
  "ft WC"
);
export const Bar = registerUnit(
  Unit.timesNumber("Bar", 100000.0, Pascal),
  "bar"
);
export const MilliBar = registerUnit(Milli("MilliBar", Bar), "mbar");

// Power
export const KiloWatt = registerUnit(Kilo("KiloWatt", Watt), "kW");
export const MegaWatt = registerUnit(Mega("MegaWatt", Watt), "MW");
export const GigaWatt = registerUnit(Giga("GigaWatt", Watt), "GW");
export const BtuPerHour = registerUnit(
  Unit.divideNumber(
    "BtuPerHour",
    3600.0,
    Unit.timesNumber("", 52752792631.0 / 50000000.0, Watt)
  ),
  "BTU/h"
);
export const TonCooling = registerUnit(
  Unit.timesNumber("TonCooling", 12000.0, BtuPerHour),
  "tons"
);
export const KiloBtuPerHour = registerUnit(
  Kilo("KiloBtuPerHour", BtuPerHour),
  "MBH"
);
export const HorsePower = registerUnit(
  Unit.timesNumber("HorsePower", 745.699872, Watt),
  "hp"
);
export const VoltAmpere = registerUnit(
  Unit.createAlternate<"Power">("VoltAmpere", "VA", Watt),
  "VA"
);

// Energy
export const NewtonMeter = registerUnit(
  UnitTimes.forceByLength("NewtonMeter", Newton, Meter),
  "Nm"
);
export const Kilojoule = registerUnit(Kilo("Kilojoule", Joule), "kJ");
export const Megajoule = registerUnit(Mega("Megajoule", Joule), "MJ");
export const KiloWattHour = registerUnit(
  UnitTimes.powerByDuration("KiloWattHour", KiloWatt, Hour),
  "kWh"
);
export const MegaWattHour = registerUnit(
  UnitTimes.powerByDuration("MegaWattHour", MegaWatt, Hour),
  "MWh"
);
export const GigaWattHour = registerUnit(
  UnitTimes.powerByDuration("GigaWattHour", GigaWatt, Hour),
  "GWh"
);
export const WattHour = registerUnit(
  UnitTimes.powerByDuration("WattHour", Watt, Hour),
  "Wh"
);
export const WattSecond = registerUnit(
  UnitTimes.powerByDuration("WattSecond", Watt, Second),
  "Ws"
);
export const Btu = registerUnit(
  Unit.timesNumber("Btu", 52752792631.0 / 50000000.0, Joule),
  "BTU"
);
export const KiloBtu = registerUnit(Kilo("KiloBtu", Btu), "MBTU");
export const MegaBtu = registerUnit(Mega("MegaBtu", Btu), "MMBTU");
export const Therm = registerUnit(
  Unit.timesNumber("Therm", 100000, Btu),
  "Therm"
);

/// http://www.wolframalpha.com/input/?i=BTU and select 'Show exact conversions'
// Per Energy
export const OnePerKiloWattHour = registerUnit(
  UnitDivide.dimensionlessByEnergy("OnePerKiloWattHour", One, KiloWattHour),
  "/kWh"
);
export const OnePerBtu = registerUnit(
  UnitDivide.dimensionlessByEnergy("OnePerBtu", One, Btu),
  "/BTU"
);
export const OnePerMegaBtu = registerUnit(
  UnitDivide.dimensionlessByEnergy("OnePerMegaBtu", One, MegaBtu),
  "/MMBTU"
);
export const OnePerTherm = registerUnit(
  UnitDivide.dimensionlessByEnergy("OnePerTherm", One, Therm),
  "/Therm"
);
export const OnePerKilojoule = registerUnit(
  UnitDivide.dimensionlessByEnergy("OnePerKilojoule", One, Kilojoule),
  "/kJ"
);
export const OnePerMegajoule = registerUnit(
  UnitDivide.dimensionlessByEnergy("OnePerMegajoule", One, Megajoule),
  "/MJ"
);
export const OnePerJoule = registerUnit(
  UnitDivide.dimensionlessByEnergy("OnePerJoule", One, Joule),
  "/J"
);

// Emission
export const KilogramPerKiloWattHour = registerUnit(
  UnitDivide.massByEnergy("KilogramPerKiloWattHour", Kilogram, KiloWattHour),
  "kg/kWh"
);
export const GramPerKiloWattHour = registerUnit(
  UnitDivide.massByEnergy("GramPerKiloWattHour", Gram, KiloWattHour),
  "g/kWh"
);
export const PoundLbPerKiloWattHour = registerUnit(
  UnitDivide.massByEnergy("PoundLbPerKiloWattHour", PoundLb, KiloWattHour),
  "lb/kWh"
);

// MassFlow
export const KilogramPerSecond = registerUnit(
  UnitDivide.massByDuration("KilogramPerSecond", Kilogram, Second),
  "kg/s"
);
export const GramPerSecond = registerUnit(
  UnitDivide.massByDuration("GramPerSecond", Gram, Second),
  "g/s"
);
export const GramPerHour = registerUnit(
  UnitDivide.massByDuration("GramPerHour", Gram, Hour),
  "g/h"
);
export const KilogramPerHour = registerUnit(
  UnitDivide.massByDuration("KilogramPerHour", Kilogram, Hour),
  "kg/h"
);
export const SlugPerSecond = registerUnit(
  UnitDivide.massByDuration("SlugPerSecond", Slug, Second),
  "slug/s"
);
export const SlugPerHour = registerUnit(
  UnitDivide.massByDuration("SlugPerHour", Slug, Hour),
  "slug/h"
);
export const PoundLbPerHour = registerUnit(
  UnitDivide.massByDuration("PoundLbPerHour", PoundLb, Hour),
  "lb/h"
);
export const GrainPerHour = registerUnit(
  UnitDivide.massByDuration("GrainPerHour", Grain, Hour),
  "gr/h"
);
export const StandardCubicMeterPerHour = registerUnit(
  Unit.timesNumber("StandardCubicMeterPerHour", 1.2041, KilogramPerHour),
  "Sm³/h"
);
export const StandardCubicFeetPerMinute = registerUnit(
  Unit.timesNumber(
    "StandardCubicFeetPerMinute",
    0.02831684660923049289319782819867,
    Unit.timesNumber("", 60.0, StandardCubicMeterPerHour)
  ),
  "SCFM"
);
export const StandardCubicMeterPerSecond = registerUnit(
  Unit.timesNumber(
    "StandardCubicMeterPerSecond",
    3600.0,
    StandardCubicMeterPerHour
  ),
  "Sm³/s"
);
export const StandardLiterPerSecond = registerUnit(
  Unit.timesNumber(
    "StandardLiterPerSecond",
    3600.0 * 1000,
    StandardCubicMeterPerHour
  ),
  "Sl/s"
);

// VolumeFlow
export const CubicMeterPerSecond = registerUnit(
  UnitDivide.volumeByDuration("CubicMeterPerSecond", CubicMeter, Second),
  "m³/s"
);
export const CubicMeterPerHour = registerUnit(
  UnitDivide.volumeByDuration("CubicMeterPerHour", CubicMeter, Hour),
  "m³/h"
);
export const CubicFeetPerMinute = registerUnit(
  UnitDivide.volumeByDuration("CubicFeetPerMinute", CubicFeet, Minute),
  "acfm"
);
export const CubicFeetPerHour = registerUnit(
  UnitDivide.volumeByDuration("CubicFeetPerHour", CubicFeet, Hour),
  "acfh"
);
export const HundredCubicFeetPerHour = registerUnit(
  UnitDivide.volumeByDuration(
    "HundredCubicFeetPerHour",
    HundredCubicFeet,
    Hour
  ),
  "cch"
);
export const LiterPerSecond = registerUnit(
  UnitDivide.volumeByDuration("LiterPerSecond", Liter, Second),
  "l/s"
);
export const LiterPerMinute = registerUnit(
  UnitDivide.volumeByDuration("LiterPerMinute", Liter, Minute),
  "l/m"
);
export const LiterPerHour = registerUnit(
  UnitDivide.volumeByDuration("LiterPerHour", Liter, Hour),
  "l/h"
);
export const GallonsPerMinute = registerUnit(
  UnitDivide.volumeByDuration("GallonsPerMinute", Gallon, Minute),
  "gal/min"
);
export const GallonsPerHour = registerUnit(
  UnitDivide.volumeByDuration("GallonsPerHour", Gallon, Hour),
  "gal/h"
);

// VolumeFlowPerArea
export const CubicMeterPerSecondPerSquareMeter = registerUnit(
  UnitDivide.volumeFlowByArea(
    "CubicMeterPerSecondPerSquareMeter",
    CubicMeterPerSecond,
    SquareMeter
  ),
  "m³/s/m²"
);
export const CubicFeetPerMinutePerSquareFeet = registerUnit(
  UnitDivide.volumeFlowByArea(
    "CubicFeetPerMinutePerSquareFeet",
    CubicFeetPerMinute,
    SquareFeet
  ),
  "acfm/ft²"
);
export const LiterPerSecondPerSquareMeter = registerUnit(
  UnitDivide.volumeFlowByArea(
    "LiterPerSecondPerSquareMeter",
    LiterPerSecond,
    SquareMeter
  ),
  "l/s/m²"
);

// Per Volume
export const OnePerLiter = registerUnit(
  UnitDivide.dimensionlessByVolume("OnePerLiter", One, Liter),
  "/l"
);
export const OnePerCubicMeter = registerUnit(
  UnitDivide.dimensionlessByVolume("OnePerCubicMeter", One, CubicMeter),
  "/m³"
);
export const OnePerGallon = registerUnit(
  UnitDivide.dimensionlessByVolume("OnePerGallon", One, Gallon),
  "/gal"
);
export const OnePerHundredCubicFeet = registerUnit(
  UnitDivide.dimensionlessByVolume(
    "OnePerHundredCubicFeet",
    One,
    HundredCubicFeet
  ),
  "/100 ft³"
);

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
