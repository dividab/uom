import * as Unit from "./unit";
import * as Units from "./units";
import * as Quantity from "./quantity";

export type MeasureSystem = "SI" | "IP";

export interface UnitInfo {
  readonly measureSystem: MeasureSystem | undefined;
  readonly decimalCount: number;
  readonly coUnit?: Unit.Unit<Quantity.Quantity>;
}

const units: { [key: string]: UnitInfo } = {}; //tslint:disable-line

export function getUnitInfo(
  unit: Unit.Unit<Quantity.Quantity>
): UnitInfo | undefined {
  return units[Units.getStringFromUnit(unit)];
}

function createUnitInfo(
  measureSystem: MeasureSystem | undefined,
  decimalCount: number,
  coUnit?: Unit.Unit<Quantity.Quantity>
): UnitInfo {
  return { measureSystem, decimalCount, coUnit };
}

// The last argument is the corresponding unit which is the closest unit in the other measure system (SI/IP)
function addUnit<T extends Quantity.Quantity>(
  unit: Unit.Unit<T>,
  measureSystem: MeasureSystem | undefined,
  decimalCount: number,
  coUnit?: Unit.Unit<T>
): void {
  units[Units.getStringFromUnit(unit)] = createUnitInfo(
    measureSystem,
    decimalCount,
    coUnit
  );
}

addUnit(Units.Ampere, "SI", 2);
addUnit(Units.Bit, undefined, 0);
addUnit(Units.BtuPerHour, "IP", 0);
addUnit(Units.BtuPerPoundLb, "IP", 3);
addUnit(Units.Btu, "IP", 3);
addUnit(Units.KiloBtu, "IP", 3);
addUnit(Units.MegaBtu, "IP", 3);
addUnit(Units.Therm, "IP", 3);
addUnit(Units.Candela, "SI", 0);
addUnit(Units.Celsius, "SI", 1, Units.Fahrenheit);
addUnit(Units.CelsiusDewPoint, "SI", 2, Units.FahrenheitDewPoint);
addUnit(Units.CelsiusWet, "SI", 2, Units.FahrenheitWet);
addUnit(Units.CentiMeter, "SI", 2, Units.Inch);
addUnit(Units.Coulomb, "SI", 0);
addUnit(Units.CubicFeet, "IP", 0, Units.Liter);
addUnit(Units.CubicFeetPerHour, "IP", 0, Units.LiterPerHour);
addUnit(Units.CubicFeetPerMinute, "IP", 1, Units.CubicMeterPerHour);
addUnit(Units.CubicMeter, "SI", 2, Units.CubicFeet);
addUnit(Units.CubicMeterPerHour, "SI", 1, Units.CubicFeetPerMinute);
addUnit(Units.CubicMeterPerSecond, "SI", 2, Units.CubicFeetPerMinute);
addUnit(Units.Day, undefined, 0);
addUnit(Units.Decibel, "SI", 1);
addUnit(Units.DecibelLw, "SI", 1);
addUnit(Units.Decimeter, "SI", 0, Units.Foot);
addUnit(Units.Degrees, "SI", 2);
addUnit(Units.DeltaCelsius, "SI", 1, Units.DeltaFahrenheit);
addUnit(Units.DeltaCelsiusDewPoint, "SI", 1, Units.DeltaFahrenheitDewPoint);
addUnit(Units.DeltaFahrenheit, "IP", 1, Units.DeltaCelsius);
addUnit(Units.DeltaFahrenheitDewPoint, "IP", 1, Units.DeltaCelsiusDewPoint);
addUnit(Units.Fahrenheit, "IP", 1, Units.Celsius);
addUnit(Units.FahrenheitDewPoint, "SI", 1, Units.CelsiusDewPoint);
addUnit(Units.FahrenheitWet, "SI", 1, Units.CelsiusWet);
addUnit(Units.Farad, "SI", 0);
addUnit(Units.FeetOfWaterColumn, "IP", 2, Units.KiloPascal);
addUnit(Units.FeetPerMinute, "IP", 0, Units.CubicMeterPerHour);
addUnit(Units.FeetPerSecond, "IP", 0, Units.MeterPerSecond);
addUnit(Units.Foot, "IP", 2, Units.Decimeter);
addUnit(Units.FrenchDegree, "IP", 2);
addUnit(Units.Gallon, "IP", 1, Units.Liter);
addUnit(Units.GallonsPerMinute, "IP", 1, Units.LiterPerMinute);
addUnit(Units.GallonsPerMinutePerTonCooling, "IP", 2);
addUnit(Units.GigaWatt, "SI", 0);
addUnit(Units.GigaWattHour, "SI", 0);
addUnit(Units.GrainPerPoundLb, "IP", 1);
addUnit(Units.GramPerPoundLb, "IP", 1);
addUnit(Units.Gram, "SI", 2, Units.Grain);
addUnit(Units.GramPerKilogram, "SI", 2, Units.GrainPerPoundLb);
addUnit(Units.GramPerKiloWattHour, "SI", 1);
addUnit(Units.GramPerSecond, "SI", 2);
addUnit(Units.Henry, "SI", 2);
addUnit(Units.Hertz, "SI", 2);
addUnit(Units.HorsePower, "IP", 1);
addUnit(Units.Hour, undefined, 2);
addUnit(Units.HumidityFactor, "SI", 2);
addUnit(Units.HundredCubicFeet, "IP", 2);
addUnit(Units.HundredCubicFeetPerHour, "IP", 0);
addUnit(Units.Inch, "IP", 2, Units.CentiMeter);
addUnit(Units.InchOfWaterColumn, "IP", 2, Units.Pascal);
addUnit(Units.Integer, undefined, 0);
addUnit(Units.Joule, "SI", 2);
addUnit(Units.Kelvin, "SI", 2);
addUnit(Units.KelvinDewPoint, "SI", 2);
addUnit(Units.KiloBtuPerHour, "IP", 1);
addUnit(Units.Kilogram, "SI", 2, Units.PoundLb);
addUnit(Units.KilogramPerCubicMeter, "SI", 2);
addUnit(Units.KilogramPerHour, "SI", 2, Units.PoundLbPerHour);
addUnit(Units.KilogramPerKilogram, "SI", 2, Units.PoundLbPerPoundLb);
addUnit(Units.KilogramPerKiloWattHour, "SI", 2, Units.PoundLbPerKiloWattHour);
addUnit(Units.PoundLbPerKiloWattHour, "IP", 2, Units.KilogramPerKiloWattHour);
addUnit(Units.KilogramPerSecond, "SI", 2);
addUnit(Units.KilogramPerSquareMeterSecond, "SI", 2);
addUnit(Units.KilogramSquareMeter, "SI", 2);
addUnit(Units.Kilojoule, "SI", 2);
addUnit(Units.KilojoulePerKilogram, "SI", 2);
addUnit(Units.KilojoulePerKilogramCelsius, "SI", 2);
addUnit(Units.Kilometer, "SI", 2, Units.Mile);
addUnit(Units.KilometerPerHour, "SI", 0, Units.MilesPerHour);
addUnit(Units.KiloPascal, "SI", 2, Units.FeetOfWaterColumn);
addUnit(Units.KiloVolt, "SI", 0);
addUnit(Units.KiloWatt, "SI", 2);
addUnit(Units.KiloWattHour, "SI", 1);
addUnit(Units.KiloWattHourPerCubicMeter, "SI", 2);
addUnit(Units.KiloWattHourPerKilogram, "SI", 2);
addUnit(Units.KilowattPerCelsius, "SI", 2);
addUnit(Units.KiloWattPerCubicMeterPerSecond, "SI", 2);
addUnit(Units.KiloWattPerCubicFootPerMinute, "IP", 2);
addUnit(Units.Liter, "SI", 2, Units.Gallon);
addUnit(Units.LiterPerHour, "SI", 2, Units.GallonsPerHour);
addUnit(Units.LiterPerKiloWattHour, "SI", 2);
addUnit(Units.LiterPerMinute, "SI", 2, Units.GallonsPerMinute);
addUnit(Units.LiterPerSecond, "SI", 3, Units.GallonsPerMinute);
addUnit(Units.LiterPerSecondPerKiloWatt, "SI", 2);
addUnit(Units.Lumen, "SI", 0);
addUnit(Units.Lux, "SI", 0);
addUnit(Units.MegaWatt, "SI", 0);
addUnit(Units.MegaWattHour, "SI", 0);
addUnit(Units.Meter, "SI", 2, Units.Yard);
addUnit(Units.MeterPerHour, "SI", 0, Units.FeetPerMinute);
addUnit(Units.MeterPerSecond, "SI", 2, Units.FeetPerMinute);
addUnit(Units.MeterPerSquareSecond, "SI", 2);
addUnit(Units.Mile, "IP", 0, Units.Kilometer);
addUnit(Units.MilesPerHour, "IP", 0, Units.KilometerPerHour);
addUnit(Units.MilliBar, "SI", 2, Units.InchOfWaterColumn);
addUnit(Units.MilliGram, "SI", 0, Units.Grain);
addUnit(Units.MilliGramCalciumPerLiter, "SI", 2);
addUnit(Units.MilliGramHydrogenCarbonatePerLiter, "SI", 2);
addUnit(Units.MilliLiter, "SI", 0);
addUnit(Units.Millimeter, "SI", 2);
addUnit(Units.MilliVolt, "SI", 0);
addUnit(Units.Minute, undefined, 2);
addUnit(Units.Mole, undefined, 2);
addUnit(Units.Newton, "SI", 2, Units.PoundForce);
addUnit(Units.NewtonMeter, "SI", 0);
addUnit(Units.NewtonPerSquareMeter, "SI", 0);
addUnit(Units.Ohm, "SI", 0);
addUnit(Units.One, undefined, 2);
addUnit(Units.OnePerBtu, "IP", 2, Units.OnePerKilojoule);
addUnit(Units.OnePerMegaBtu, "IP", 2);
addUnit(Units.OnePerTherm, "IP", 2);
addUnit(Units.OnePerCubicMeter, "SI", 2, Units.OnePerHundredCubicFeet);
addUnit(Units.OnePerGallon, "IP", 2, Units.OnePerLiter);
addUnit(Units.OnePerHundredCubicFeet, "IP", 2, Units.OnePerCubicMeter);
addUnit(Units.OnePerKilogram, "SI", 2, Units.OnePerPoundLb);
addUnit(Units.OnePerKilojoule, "SI", 2, Units.OnePerBtu);
addUnit(Units.OnePerKiloWattHour, "SI", 2);
addUnit(Units.OnePerLiter, "SI", 2, Units.OnePerGallon);
addUnit(Units.OnePerPoundLb, "IP", 2, Units.OnePerKilogram);
addUnit(Units.Pascal, "SI", 0, Units.InchOfWaterColumn);
addUnit(Units.PascalSecond, "SI", 2);
addUnit(Units.Percent, undefined, 2);
addUnit(Units.PercentHumidity, undefined, 1);
addUnit(Units.PoundForcePerSquareInch, "IP", 2, Units.KiloPascal);
addUnit(Units.PoundLb, "IP", 1, Units.Kilogram);
addUnit(Units.PoundLbPerHour, "IP", 1, Units.KilogramPerHour);
addUnit(Units.PoundForcePerSquareInch, "SI", 2, Units.PoundForcePerSquareInch);
addUnit(Units.PoundForcePerSquareFoot, "SI", 2, Units.PoundForcePerSquareFoot);
addUnit(Units.PPM, undefined, 0);
addUnit(Units.Radian, undefined, 0);
addUnit(Units.Rankine, undefined, 2);
addUnit(Units.RevolutionsPerHour, undefined, 1);
addUnit(Units.RevolutionsPerMinute, undefined, 2);
addUnit(Units.Second, undefined, 2);
addUnit(Units.Siemens, undefined, 1);
addUnit(Units.Slug, "IP", 2, Units.Kilogram);
addUnit(Units.SlugPerCubicFeet, "IP", 3, Units.GramPerCubicCentiMeter);
addUnit(Units.SlugPerHour, "IP", 2, Units.KilogramPerHour);
addUnit(Units.SlugPerSecond, "IP", 2, Units.KilogramPerSecond);
addUnit(Units.SquareCentimeter, "SI", 0, Units.SquareInch);
addUnit(Units.SquareFeet, "IP", 0, Units.SquareDecimeter);
addUnit(Units.SquareInch, "IP", 0, Units.SquareCentimeter);
addUnit(Units.SquareMeter, "SI", 2, Units.SquareFeet);
addUnit(Units.SquareMillimeter, "SI", 4);
addUnit(
  Units.StandardCubicFeetPerMinute,
  "IP",
  0,
  Units.StandardCubicMeterPerHour
);
addUnit(
  Units.StandardCubicMeterPerHour,
  "SI",
  0,
  Units.StandardCubicFeetPerMinute
);
addUnit(Units.Steradian, "SI", 2);
addUnit(Units.Tesla, "SI", 2);
addUnit(Units.TonCooling, "IP", 2, Units.KiloWatt);
addUnit(Units.Tonne, "SI", 0);
addUnit(Units.Volt, "SI", 2);
addUnit(Units.VoltAmpere, "SI", 2);
addUnit(Units.Watt, "SI", 2);
addUnit(Units.WattHour, "SI", 2);
addUnit(Units.WattPerCubicMeterPerSecond, "SI", 0);
addUnit(Units.WattPerSquareMeter, "SI", 2);
addUnit(Units.WattSecond, "SI", 4);
addUnit(Units.Weber, undefined, 2);
addUnit(Units.Week, undefined, 0);
addUnit(Units.Yard, "IP", 2, Units.Meter);
addUnit(Units.Year, undefined, 0);
addUnit(Units.SquareRootPascal, "SI", 2, Units.SquareRootInchOfWaterColumn);
addUnit(Units.SquareRootInchOfWaterColumn, "IP", 2, Units.SquareRootPascal);
