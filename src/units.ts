import * as Unit from "./unit";
import * as UnitDivide from "./unit-divide";
import { registerUnit } from "./unit-registry";

import { Meter } from "./units/base-units";

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
export * from "./units/dimensionless-per-duration";
export * from "./units/mass-flow-per-area";
export * from "./units/water-use-efficiency";
export * from "./units/humidity-ratio";
export * from "./units/heating-value";
export * from "./units/specific-heat-capacity";
export * from "./units/heat-capacity-rate";
export * from "./units/moment-of-inertia";
export * from "./units/sound-power-level";
export * from "./units/sound-pressure-level";
export * from "./units/electric-current";
export * from "./units/water-hardness";
export * from "./units/discrete";
export * from "./units/text";
export * from "./units/alkalinity";
export * from "./units/viscosity";

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
