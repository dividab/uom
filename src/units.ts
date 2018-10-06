import * as Unit from "./unit";
import * as UnitName from "./unit-name";
import * as UnitDivide from "./unit-divide";
import * as UnitTimes from "./unit-times";
import * as q from "./quantity";
// import * as UnitPow from "./unit-pow";

// tslint:disable variable-name max-line-length max-file-line-count

const _unitToString: { [key: string]: string } = {}; // tslint:disable-line
const _stringToUnit: { [key: string]: Unit.Unit } = {}; // tslint:disable-line
const _quantityToUnits: { [key: string]: Array<Unit.Unit> } = {}; // tslint:disable-line

function _register<T extends string>(
  unit: Unit.Unit<T>,
  label: string = ""
): Unit.Unit<T> {
  UnitName.registerLabel(label, unit);
  return unit;
}

export const One: q.Dimensionless = _register(Unit.One, " "); // tslint:disable-line
export const Percent: q.Dimensionless = _register(
  Unit.divideNumber(100.0, One),
  "%"
); // tslint:disable-line
export const PPM: q.Dimensionless = _register(
  Unit.divideNumber(1000000.0, One),
  "ppm"
);

///////////////////
/// SI BASE UNITS //
///////////////////

/**
 * The International System of Units (SI) defines seven units of measure as a basic set from which
 * all other SI units are derived. These SI base units and their physical quantities are:[1]
 * ampere for electric current
 * candela for luminous intensity
 * meter for length
 * kilogram for mass
 * second for time
 * kelvin for temperature
 * mole for the amount of substance
 */

/**
 * The base unit for electric current quantities ( <code>A</code> ).
 * The Ampere is that export constant current which,
 * if maintained in two straight parallel conductors of infinite length,
 * of negligible circular cross-section, and placed 1 metre apart in vacuum,
 * would produce between these conductors a force equal to 2 × 10-7 newton per metre of length.
 * It is named after the French physicist Andre Ampere (1775-1836).
 */
export const Ampere: q.ElectricCurrent = _register(
  Unit.createBase("ElectricCurrent", "A"),
  "A"
);

/**
 * The base unit for luminous intensity quantities ( <code>cd</code> ).
 * The candela is the luminous intensity, in a given direction, of a source
 * that emits monochromatic radiation of frequency 540 × 1012 hertz and that
 * has a radiant intensity in that direction of 1/683 watt per steradian.
 * @see <a href="http://en.wikipedia.org/wiki/Candela">Wikipedia: Candela</a>
 */
export const Candela: q.LuminousIntensity = _register(
  Si(Unit.createBase("LuminousIntensity", "cd")),
  "cd"
);

/**
 * The base unit for thermodynamic temperature quantities ( <code>K</code> ).
 * The kelvin is the 1/273.16th of the thermodynamic temperature of the triple point of water.
 * It is named after the Scottish mathematician and physicist William Thomson 1st Lord Kelvin (1824-1907).
 */
export const Kelvin: q.Temperature = _register(
  Unit.createBase("Temperature", "K"),
  "K"
);

/**
 * The base unit for mass quantities ( <code>kg</code> ).
 * It is the only SI unit with a prefix as part of its name and symbol.
 * The kilogram is equal to the mass of an international prototype in the form
 * of a platinum-iridium cylinder kept at Sevres in France.
 * @see #Gram
 */
export const Kilogram: q.Mass = _register(Unit.createBase("Mass", "kg"), "kg");

/**
 * The base unit for length quantities ( <code>m</code> ).
 * One meter was redefined in 1983 as the distance traveled by light in a vacuum in 1/299,792,458 of a second.
 */
export const Meter: q.Length = _register(Unit.createBase("Length", "m"), "m");

/**
 * The base unit for amount of substance quantities ( <code>mol</code> ).
 * The mole is the amount of substance of a system which contains as many elementary
 * entities as there are atoms in 0.012 kilogram of carbon 12.
 */
export const Mole: q.AmountOfSubstance = _register(
  Si(Unit.createBase("AmountOfSubstance", "mol")),
  "mol"
);

/**
 * The base unit for duration quantities ( <code>s</code> ). It is defined as the duration of 9,192,631,770 cycles of radiation corresponding to the transition between two hyperfine levels of the ground state of cesium (1967 Standard).
 */
export const Second: q.Duration = _register(
  Unit.createBase("Duration", "s"),
  "s"
);

//////////////////////////////
/// SI DERIVED PRODUCT UNITS //
//////////////////////////////

/** The metric unit for velocity quantities ( <code>m/s</code> ). */
export const MeterPerSecond: q.Velocity = _register(
  UnitDivide.lengthByDuration(Meter, Second),
  "m/s"
);

/** The metric unit for acceleration quantities ( <code>m/s²</code> ). */
export const MeterPerSquareSecond: q.Acceleration = _register(
  UnitDivide.velocityBySecond(MeterPerSecond, Second)
);

/** The metric unit for area quantities ( <code>m²</code> ). */
export const SquareMeter: q.Area = _register(Squared(Meter), "m²");

/** The metric unit for volume quantities ( <code>m³</code> ). */
export const CubicMeter: q.Volume = _register(Cubed(Meter), "m³");

/** Equivalent to <code>KILO(METER)</code>. */
export const Kilometer: q.Length = _register(Kilo(Meter), "km");

/** Equivalent to <code>CENTI(METRE)</code>. */
export const CentiMeter: q.Length = _register(Centi(Meter), "cm");

/** Equivalent to <code>MILLI(METRE)</code>. */
export const Millimeter: q.Length = _register(Milli(Meter), "mm");

////////////////////////////////
/// SI DERIVED ALTERNATE UNITS //
////////////////////////////////

/**
 * AlternateUnits seems to be units with names like "Newton", "Celsius" while
 * ProductUnits seem to be units with names like "MeterPerSecond"
 */

/** The derived unit for mass quantities ( <code>g</code> ).
 * The base unit for mass quantity is {@link #Kilogram}.
 */
export const Gram: q.Mass = _register(Unit.divideNumber(1000.0, Kilogram), "g");

/**
 * The unit for plane angle quantities ( <code>rad</code> ).
 * One radian is the angle between two radii of a circle such that the length of the arc between them is equal to the radius.
 */
export const Radian: q.Angle = _register(
  Unit.createAlternate<"Angle">("rad", One as Unit.Unit<any>),
  "rad"
);

/**
 * The unit for solid angle quantities ( <code>sr</code> ).
 * One steradian is the solid angle subtended at the center of a sphere by an area on the
 * surface of the sphere that is equal to the radius squared. The total solid angle of a sphere is 4*Pi steradians.
 */
export const Steradian: q.SolidAngle = _register(
  Unit.createAlternate<"SolidAngle">("sr", One as Unit.Unit<any>),
  "sr"
);

/**
 * The unit for binary information ( <code>bit</code> ).
 */
export const Bit: q.DataAmount = _register(
  Unit.createAlternate<"DataAmount">("bit", One as Unit.Unit<any>),
  "bit"
);

/**
 * The derived unit for frequency ( <code>Hz</code> ).
 * A unit of frequency equal to one cycle per second. After Heinrich Rudolf Hertz (1857-1894),
 * German physicist who was the first to produce radio waves artificially.
 */
export const Hertz: q.Frequency = _register(
  Unit.createAlternate<"Frequency">(
    "Hz",
    UnitDivide.dimentionlessByDuration(One, Second)
  ),
  "Hz"
);

/**
 * The derived unit for force ( <code>N</code> ).
 * One newton is the force required to give a mass of 1 kilogram an Force of 1 metre per second per second.
 * It is named after the English mathematician and physicist Sir Isaac Newton (1642-1727).
 */
export const Newton: q.Force = _register(
  Unit.createAlternate<"Force">(
    "N",
    UnitTimes.massByAcceleration(Kilogram, MeterPerSquareSecond)
  ),
  "N"
);

/**
 * The derived unit for pressure, stress ( <code>Pa</code> ).
 * One pascal is equal to one newton per square meter.
 * It is named after the French philosopher and mathematician Blaise Pascal (1623-1662).
 */
export const Pascal: q.Pressure = _register(
  Unit.createAlternate<"Pressure">(
    "Pa",
    UnitDivide.forceByArea(Newton, Squared(Meter))
  ),
  "Pa"
);

/**
 * The derived unit for energy, work, quantity of heat ( <code>J</code> ).
 * One joule is the amount of work done when an applied force of 1 newton moves
 * through a distance of 1 metre in the direction of the force.
 * It is named after the English physicist James Prescott Joule (1818-1889).
 */
export const Joule: q.Energy = _register(
  Unit.createAlternate<"Energy">("J", UnitTimes.forceByLength(Newton, Meter)),
  "J"
);

/**
 * The derived unit for power, radiant, flux ( <code>W</code> ).
 * One watt is equal to one joule per second.
 * It is named after the British scientist James Watt (1736-1819).
 */
export const Watt: q.Power = _register(
  Unit.createAlternate<"Power">(
    "W",
    UnitDivide.energyByDuration(Joule, Second)
  ),
  "W"
);

/**
 * The derived unit for electric charge, quantity of electricity ( <code>C</code> ).
 * One Coulomb is equal to the quantity of charge transferred in one second by a steady current of one ampere.
 * It is named after the French physicist Charles Augustin de Coulomb (1736-1806).
 */
export const Coulomb: q.ElectricCharge = _register(
  Unit.createAlternate<"ElectricCharge">(
    "C",
    UnitTimes.durationByElectricCurrent(Second, Ampere)
  ),
  "C"
);

/**
 * The derived unit for electric potential difference, electromotive force ( <code>V</code> ).
 * One Volt is equal to the difference of electric potential between two points on a conducting
 * wire carrying a export constant current of one ampere when the power dissipated between the points is one watt.
 * It is named after the Italian physicist Count Alessandro Volta (1745-1827).
 */
export const Volt: q.ElectricPotential = _register(
  Unit.createAlternate<"ElectricPotential">(
    "V",
    UnitDivide.powerByElectricalCurrent(Watt, Ampere)
  ),
  "V"
);

/**
 * The derived unit for capacitance ( <code>F</code> ).
 * One Farad is equal to the capacitance of a capacitor having an equal and opposite charge of 1 coulomb on
 * each plate and a potential difference of 1 volt between the plates.
 * It is named after the British physicist and chemist Michael Faraday (1791-1867).
 */
export const Farad: q.ElectricCapacitance = _register(
  Unit.createAlternate<"ElectricCapacitance">(
    "F",
    UnitDivide.electricChargeByElectricPotential(Coulomb, Volt)
  ),
  "F"
);

/**
 * The derived unit for electric resistance ( <code>Ω</code> or <code>Ohm</code> ).
 * One Ohm is equal to the resistance of a conductor in which a current of one ampere is produced
 * by a potential of one volt across its terminals.
 * It is named after the German physicist Georg Simon Ohm (1789-1854).
 */
export const Ohm: q.ElectricResistance = _register(
  Si(
    Unit.createAlternate<"ElectricResistance">(
      "Ω",
      UnitDivide.electricalPotentialByElectricalCurrent(Volt, Ampere)
    )
  )
);

/**
 * The derived unit for electric conductance ( <code>S</code> ).
 * One Siemens is equal to one ampere per volt.
 * It is named after the German engineer Ernst Werner von Siemens (1816-1892).
 */
export const Siemens: q.ElectricConductance = _register(
  Si(
    Unit.createAlternate<"ElectricConductance">(
      "S",
      UnitDivide.electricalCurrentByElectricalPotential(Ampere, Volt)
    )
  )
);

/**
 * The derived unit for magnetic flux ( <code>Wb</code> ).
 * One Weber is equal to the magnetic flux that in linking a circuit of one turn produces in it an
 * electromotive force of one volt as it is uniformly reduced to zero within one second.
 * It is named after the German physicist Wilhelm Eduard Weber (1804-1891).
 */
export const Weber: q.MagneticFlux = _register(
  Si(
    Unit.createAlternate<"MagneticFlux">(
      "Wb",
      UnitTimes.electricalPotentialByDuration(Volt, Second)
    )
  )
);

/**
 * The derived unit for magnetic flux density ( <code>T</code> ).
 * One Tesla is equal equal to one weber per square meter.
 * It is named after the Serbian-born American electrical engineer and physicist Nikola Tesla (1856-1943).
 */
export const Tesla: q.MagneticFluxDensity = _register(
  Si(
    Unit.createAlternate<"MagneticFluxDensity">(
      "T",
      UnitDivide.magneticFluxByArea(Weber, Squared(Meter))
    )
  )
);

/**
 * The derived unit for inductance ( <code>H</code> ).
 * One Henry is equal to the inductance for which an induced electromotive force of one volt is produced
 * when the current is varied at the rate of one ampere per second.
 * It is named after the American physicist Joseph Henry (1791-1878).
 */
export const Henry: q.ElectricInductance = _register(
  Si(
    Unit.createAlternate<"ElectricInductance">(
      "H",
      UnitDivide.magneticFluxByElectricalCurrent(Weber, Ampere)
    )
  )
);

/**
 * The derived unit for Celsius temperature ( <code>℃</code> ).
 * This is a unit of temperature such as the freezing point of water (at one atmosphere of pressure)
 * is 0 ℃, while the boiling point is 100 ℃.
 */
export const Celsius: q.Temperature = _register(
  Si(Unit.plus(273.15, Kelvin)),
  "°C"
);

/**
 * The derived unit for luminous flux ( <code>lm</code> ).
 * One Lumen is equal to the amount of light given out through a solid angle by a source of one
 * candela intensity radiating equally in all directions.
 */
export const Lumen: q.LuminousFlux = _register(
  Si(
    Unit.createAlternate<"LuminousFlux">(
      "lm",
      UnitTimes.luminousIntensityBySolidAngle(Candela, Steradian)
    )
  )
);

/**
 * The derived unit for illuminance ( <code>lx</code> ).
 * One Lux is equal to one lumen per square meter.
 */
export const Lux: q.Illuminance = _register(
  Si(
    Unit.createAlternate<"Illuminance">(
      "lx",
      UnitDivide.luminousFluxByArea(Lumen, Squared(Meter))
    )
  )
);

/**
 * The derived unit for activity of a radionuclide ( <code>Bq</code> ).
 * One becquerel is the radiation caused by one disintegration per second.
 * It is named after the French physicist, Antoine-Henri Becquerel (1852-1908).
 */
export const Becquerel: q.RadioactiveActivity = _register(
  Si(
    Unit.createAlternate<"RadioactiveActivity">(
      "Bq",
      UnitDivide.dimentionlessByDuration(One, Second) as Unit.Unit<any>
    )
  )
);

/**
 * The derived unit for absorbed dose, specific energy (imparted), kerma ( <code>Gy</code> ).
 * One gray is equal to the dose of one joule of energy absorbed per one kilogram of matter.
 * It is named after the British physician L. H. Gray (1905-1965).
 */
export const Gray: q.RadiationDoseAbsorbed = _register(
  Si(
    Unit.createAlternate<"RadiationDoseAbsorbed">("Gy", UnitDivide.energyByMass(
      Joule,
      Kilogram
    ) as Unit.Unit<any>)
  )
);

/**
 * The derived unit for dose equivalent ( <code>Sv</code> ).
 * One Sievert is equal is equal to the actual dose, in grays, multiplied by a "quality factor" which is
 * larger for more dangerous forms of radiation.
 * It is named after the Swedish physicist Rolf Sievert (1898-1966).
 */
export const Sievert: q.RadiationDoseEffective = _register(
  Si(
    Unit.createAlternate<"RadiationDoseEffective">(
      "Sv",
      UnitDivide.energyByMass(Joule, Kilogram) as Unit.Unit<any>
    )
  )
);

/**
 * The derived unit for catalytic activity ( <code>kat</code> ).
 */
export const Katal: q.CatalyticActivity = _register(
  Si(
    Unit.createAlternate<"CatalyticActivity">(
      "kat",
      UnitDivide.amountOfSubstanceByDuration(Mole, Second)
    )
  )
);

/////////////////
/// SI PREFIXES //
/////////////////

function Giga<T extends string>(u: Unit.Unit<T>): Unit.Unit<T> {
  return Unit.timesNumber(Math.pow(10, 9), u);
}

function Mega<T extends string>(u: Unit.Unit<T>): Unit.Unit<T> {
  return Unit.timesNumber(Math.pow(10, 6), u);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>3</sup></code>
 * @param unit Any unit.
 * @returns <code>unit.multiply(1e3)</code> .
 */
function Kilo<T extends string>(unit: Unit.Unit<T>): Unit.Unit<T> {
  return Unit.timesNumber(Math.pow(10.0, 3), unit);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>2</sup></code>.
 * @param unit any unit.
 * @returns <code>unit.multiply(1e2)</code> .
 */
function Hecto<T extends string>(unit: Unit.Unit<T>): Unit.Unit<T> {
  return Unit.timesNumber(Math.pow(10, 2), unit);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>-1</sup></code>.
 * @param unit any unit.
 * @return <code>unit.multiply(1e-1)</code>.
 */
function Deci<T extends string>(unit: Unit.Unit<T>): Unit.Unit<T> {
  return Unit.timesNumber(Math.pow(10, -1), unit);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>-2</sup></code>.
 * @param unit any unit.
 * @returns <code>unit.multiply(1e-2)</code> .
 */
function Centi<T extends string>(unit: Unit.Unit<T>): Unit.Unit<T> {
  return Unit.timesNumber(Math.pow(10, -2), unit);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>-3</sup></code>.
 * @param unit any unit. @return <code>unit.multiply(1e-3)</code> .
 */
function Milli<T extends string>(unit: Unit.Unit<T>): Unit.Unit<T> {
  return Unit.timesNumber(Math.pow(10, -3), unit);
}

function Si<T extends string>(toAdd: Unit.Unit<T>): Unit.Unit<T> {
  // TODO
  return toAdd;
}

function Squared(u: q.Length): q.Area {
  return UnitTimes.lengthByLength(u, u);
  // TODO was return u.Times <q.Area> (u);
}

function Cubed(u: q.Length): q.Volume {
  const area = UnitTimes.lengthByLength(u, u);
  return UnitTimes.areaByLength(area, u);
  // TODO was return u.Times < IArea > (u).Times < IVolume > (u);
}

////////////////////////////////////////////////////////////////////////////
/// END: System of Units - SI
////////////////////////////////////////////////////////////////////////////

/// Alternative Quantities for Humidity
// export const HumidityFactor: q.RelativeHumidity = _register(Unit.createProductUnit<q.RelativeHumidity>("RelativeHumidity", []), "r.H. factor");
// export const HumidityFactor: q.RelativeHumidity = _register(Unit.createAlternate<"RelativeHumidity">("r.H.", One), "r.H. factor");
export const HumidityFactor: q.RelativeHumidity = _register(
  Unit.createBase("RelativeHumidity", "r.H."),
  "r.H. factor"
);

/** Factor of humidity, eg., 0.01 means 1% */
export const PercentHumidity: q.RelativeHumidity = _register(
  Unit.divideNumber(100.0, HumidityFactor),
  "% r.H."
);

/** Percent of humidity, eg., 10.0 means 10% */
export const CelsiusWet: q.WetTemperature = _register(
  Unit.createBase("WetTemperature", "wb°C"),
  "wb°C"
);
export const FahrenheitWet: q.WetTemperature = _register(
  Unit.minus(32.0, Unit.timesNumber(5.0 / 9.0, CelsiusWet)),
  "wb°F"
);
export const KelvinWet: q.WetTemperature = _register(
  Unit.minus(273.15, CelsiusWet),
  "wb°K"
);
export const CelsiusDewPoint: q.DewPointTemperature = _register(
  Unit.createBase("DewPointTemperature", "dp°C"),
  "dp°C"
);
export const FahrenheitDewPoint: q.DewPointTemperature = _register(
  Unit.minus(32.0, Unit.timesNumber(5.0 / 9.0, CelsiusDewPoint)),
  "dp°F"
);
export const KelvinDewPoint: q.DewPointTemperature = _register(
  Unit.minus(273.15, CelsiusDewPoint),
  "dp°K"
);

/// Mass
export const PoundLb: q.Mass = _register(
  Unit.divideNumber(100000000.0 / 45359237.0, Kilogram),
  "lb"
);

// http://www.wolframalpha.com/input/?i=kg
export const Grain: q.Mass = _register(
  Unit.divideNumber(100000000000.0 / 6479891.0, Kilogram),
  "gr"
);

// http://www.wolframalpha.com/input/?i=grain
export const Slug: q.Mass = _register(
  Unit.timesNumber(14.5939, Kilogram),
  "slug"
);
export const Tonne: q.Mass = _register(Unit.timesNumber(1000.0, Kilogram), "t");
export const MilliGram: q.Mass = _register(Milli(Gram), "mg");

// Per mass
export const OnePerKilogram: q.DimensionlessPerMass = _register(
  UnitDivide.dimensionlessByMass(One, Kilogram),
  "/kg"
);
export const OnePerPoundLb: q.DimensionlessPerMass = _register(
  UnitDivide.dimensionlessByMass(One, PoundLb),
  "/lb"
);

// Length
export const Foot: q.Length = _register(Unit.timesNumber(0.3048, Meter), "ft");
export const Yard: q.Length = _register(Unit.timesNumber(3.0, Foot), "yd");
export const Inch: q.Length = _register(Unit.divideNumber(12.0, Foot), "in");
export const Mile: q.Length = _register(Unit.timesNumber(5280.0, Foot), "mi");
export const Decimeter: q.Length = _register(Deci(Meter), "dm");

// Temperature
export const Rankine: q.Temperature = _register(
  Unit.divideNumber(9.0, Unit.timesNumber(5.0, Kelvin)),
  "Rankine"
);
export const Fahrenheit: q.Temperature = _register(
  Unit.plus(459.67, Unit.divideNumber(9.0, Unit.timesNumber(5.0, Kelvin))),
  "°F"
);

// Delta temperature
export const DeltaCelsius: q.DeltaTemperature = _register(
  Unit.createBase("DeltaTemperature", "°C"),
  "°C"
);
export const DeltaFahrenheit: q.DeltaTemperature = _register(
  Unit.timesNumber(5.0 / 9.0, DeltaCelsius),
  "°F"
);

// Delta temperature
export const DeltaCelsiusDewPoint: q.DeltaDewPointTemperature = _register(
  Unit.createBase("DeltaDewPointTemperature", "dp°C"),
  "dp°C"
);
export const DeltaFahrenheitDewPoint: q.DeltaDewPointTemperature = _register(
  Unit.timesNumber(5.0 / 9.0, DeltaCelsiusDewPoint),
  "dp°F"
);

// Duration / Time
export const Minute: q.Duration = _register(
  Unit.timesNumber(60.0, Second),
  "min"
);
export const Hour: q.Duration = _register(Unit.timesNumber(60.0, Minute), "h");
export const Day: q.Duration = _register(Unit.timesNumber(24.0, Hour), "days");
export const Week: q.Duration = _register(Unit.timesNumber(7.0, Day), "weeks");
export const Year: q.Duration = _register(
  Unit.timesNumber(8760.0, Hour),
  "year"
);
export const MilliSecond: q.Duration = _register(Milli(Second), "ms");

// Frequency
export const RevolutionsPerMinute: q.Frequency = _register(
  Unit.createAlternate<"Frequency">(
    "rpm",
    UnitDivide.dimentionlessByDuration(One, Minute)
  ),
  "rpm"
);
export const RevolutionsPerHour: q.Frequency = _register(
  Unit.createAlternate<"Frequency">(
    "rph",
    UnitDivide.dimentionlessByDuration(One, Hour)
  ),
  "rph"
);

/// Area
export const SquareInch: q.Area = _register(Squared(Inch), "in²");
export const SquareFeet: q.Area = _register(Squared(Foot), "ft²");
export const SquareMillimeter: q.Area = _register(Squared(Millimeter), "mm²");
export const SquareCentimeter: q.Area = _register(Squared(CentiMeter), "cm²");
export const SquareDecimeter: q.Area = _register(Squared(Decimeter), "dm²");

// Angle
export const Degrees: q.Angle = _register(
  Unit.timesNumber(Math.PI / 180.0, Radian),
  "°"
);

// Volume
export const CubicCentiMeter: q.Volume = _register(Cubed(CentiMeter), "cm³");
export const CubicInch: q.Volume = _register(Cubed(Inch), "in³");
export const CubicFeet: q.Volume = _register(Cubed(Foot), "ft³");
export const HundredCubicFeet: q.Volume = _register(
  Unit.timesNumber(100.0, CubicFeet),
  "100 ft³"
);
export const Liter: q.Volume = _register(
  Unit.divideNumber(1000.0, CubicMeter),
  "L"
);
export const MilliLiter: q.Volume = _register(Milli(Liter), "ml");
export const Gallon: q.Volume = _register(
  Unit.timesNumber(3.785, Liter),
  "gal"
);

// Velocity
export const FeetPerSecond: q.Velocity = _register(
  UnitDivide.lengthByDuration(Foot, Second),
  "ft/s"
);
export const FeetPerMinute: q.Velocity = _register(
  UnitDivide.lengthByDuration(Foot, Minute),
  "ft/min"
);
export const MilesPerHour: q.Velocity = _register(
  UnitDivide.lengthByDuration(Mile, Hour),
  "mph"
);
export const KilometerPerHour: q.Velocity = _register(
  UnitDivide.lengthByDuration(Kilometer, Hour),
  "km/h"
);
export const MeterPerHour: q.Velocity = _register(
  UnitDivide.lengthByDuration(Meter, Hour),
  "m/h"
);

// Acceleration

// Density
export const KilogramPerCubicMeter: q.Density = _register(
  UnitDivide.massByVolume(Kilogram, CubicMeter),
  "kg/m³"
);
export const GramPerCubicCentiMeter: q.Density = _register(
  UnitDivide.massByVolume(Gram, CubicCentiMeter),
  "g/cm³"
);
export const SlugPerCubicFeet: q.Density = _register(
  UnitDivide.massByVolume(Slug, CubicFeet),
  "slug/ft³"
);
export const PoundPerCubicFoot: q.Density = _register(
  UnitDivide.massByVolume(PoundLb, CubicFeet),
  "lb/ft³"
);

// Force
export const PoundForce: q.Force = _register(
  Unit.divideNumber(8896443230521.0, Unit.timesNumber(2000000000000.0, Newton)),
  "lb"
);

// Pressure
export const KiloPascal: q.Pressure = _register(Kilo(Pascal), "kPa");
export const HectoPascal: q.Pressure = _register(Hecto(Pascal), "hPa");
export const NewtonPerSquareMeter: q.Pressure = _register(
  UnitDivide.forceByArea(Newton, SquareMeter),
  "N/m²"
);
export const PoundForcePerSquareInch: q.Pressure = _register(
  Unit.divideNumber(1290320000.0, Unit.timesNumber(8896443230521.0, Pascal)),
  "psi"
);
export const PoundForcePerSquareFoot: q.Pressure = _register(
  Unit.timesNumber(144.0, PoundForcePerSquareInch),
  "psf"
);
export const DeciPascal: q.Pressure = _register(Deci(Pascal), "dPa");

// http://www.wolframalpha.com/input/?i=psi and select 'Show exact conversions'
export const InchOfMercury: q.Pressure = _register(
  Unit.divideNumber(152.0, Unit.timesNumber(514731.0, Pascal)),
  "in HG"
);

// http://www.wolframalpha.com/input/?i=inHg and select 'Show exact conversions'
export const InchOfWaterColumn: q.Pressure = _register(
  Unit.timesNumber(249.0889, Pascal),
  "in WC"
);

// http://www.wolframalpha.com/input/?i=inWC
export const FeetOfWaterColumn: q.Pressure = _register(
  Unit.timesNumber(2989.067, Pascal),
  "ft WC"
);
export const Bar: q.Pressure = _register(
  Unit.timesNumber(100000.0, Pascal),
  "bar"
);
export const MilliBar: q.Pressure = _register(Milli(Bar), "mbar");

// Power
export const KiloWatt: q.Power = _register(Kilo(Watt), "kW");
export const MegaWatt: q.Power = _register(Mega(Watt), "MW");
export const GigaWatt: q.Power = _register(Giga(Watt), "GW");
export const BtuPerHour: q.Power = _register(
  Unit.divideNumber(3600.0, Unit.timesNumber(52752792631.0 / 50000000.0, Watt)),
  "BTU/h"
);
export const TonCooling: q.Power = _register(
  Unit.timesNumber(12000.0, BtuPerHour),
  "tons"
);
export const KiloBtuPerHour: q.Power = _register(Kilo(BtuPerHour), "MBH");
export const HorsePower: q.Power = _register(
  Unit.timesNumber(745.699872, Watt),
  "hp"
);
export const VoltAmpere: q.Power = _register(
  Unit.createAlternate<"Power">("VA", Watt),
  "VA"
);

// Energy
export const NewtonMeter: q.Energy = _register(
  UnitTimes.forceByLength(Newton, Meter),
  "Nm"
);
export const Kilojoule: q.Energy = _register(Kilo(Joule), "kJ");
export const Megajoule: q.Energy = _register(Mega(Joule), "MJ");
export const KiloWattHour: q.Energy = _register(
  UnitTimes.powerByDuration(KiloWatt, Hour),
  "kWh"
);
export const MegaWattHour: q.Energy = _register(
  UnitTimes.powerByDuration(MegaWatt, Hour),
  "MWh"
);
export const GigaWattHour: q.Energy = _register(
  UnitTimes.powerByDuration(GigaWatt, Hour),
  "GWh"
);
export const WattHour: q.Energy = _register(
  UnitTimes.powerByDuration(Watt, Hour),
  "Wh"
);
export const WattSecond: q.Energy = _register(
  UnitTimes.powerByDuration(Watt, Second),
  "Ws"
);
export const Btu: q.Energy = _register(
  Unit.timesNumber(52752792631.0 / 50000000.0, Joule),
  "BTU"
);
export const KiloBtu: q.Energy = _register(Kilo(Btu), "MBTU");
export const MegaBtu: q.Energy = _register(Mega(Btu), "MMBTU");
export const Therm: q.Energy = _register(
  Unit.timesNumber(100000, Btu),
  "Therm"
);

/// http://www.wolframalpha.com/input/?i=BTU and select 'Show exact conversions'
// Per Energy
export const OnePerKiloWattHour: q.DimensionlessPerEnergy = _register(
  UnitDivide.dimensionlessByEnergy(One, KiloWattHour),
  "/kWh"
);
export const OnePerBtu: q.DimensionlessPerEnergy = _register(
  UnitDivide.dimensionlessByEnergy(One, Btu),
  "/BTU"
);
export const OnePerMegaBtu: q.DimensionlessPerEnergy = _register(
  UnitDivide.dimensionlessByEnergy(One, MegaBtu),
  "/MMBTU"
);
export const OnePerTherm: q.DimensionlessPerEnergy = _register(
  UnitDivide.dimensionlessByEnergy(One, Therm),
  "/Therm"
);
export const OnePerKilojoule: q.DimensionlessPerEnergy = _register(
  UnitDivide.dimensionlessByEnergy(One, Kilojoule),
  "/kJ"
);
export const OnePerMegajoule: q.DimensionlessPerEnergy = _register(
  UnitDivide.dimensionlessByEnergy(One, Megajoule),
  "/MJ"
);
export const OnePerJoule: q.DimensionlessPerEnergy = _register(
  UnitDivide.dimensionlessByEnergy(One, Joule),
  "/J"
);

// Emission
export const KilogramPerKiloWattHour: q.Emission = _register(
  UnitDivide.massByEnergy(Kilogram, KiloWattHour),
  "kg/kWh"
);
export const GramPerKiloWattHour: q.Emission = _register(
  UnitDivide.massByEnergy(Gram, KiloWattHour),
  "g/kWh"
);
export const PoundLbPerKiloWattHour: q.Emission = _register(
  UnitDivide.massByEnergy(PoundLb, KiloWattHour),
  "lb/kWh"
);

// MassFlow
export const KilogramPerSecond: q.MassFlow = _register(
  UnitDivide.massByDuration(Kilogram, Second),
  "kg/s"
);
export const GramPerSecond: q.MassFlow = _register(
  UnitDivide.massByDuration(Gram, Second),
  "g/s"
);
export const GramPerHour: q.MassFlow = _register(
  UnitDivide.massByDuration(Gram, Hour),
  "g/h"
);
export const KilogramPerHour: q.MassFlow = _register(
  UnitDivide.massByDuration(Kilogram, Hour),
  "kg/h"
);
export const SlugPerSecond: q.MassFlow = _register(
  UnitDivide.massByDuration(Slug, Second),
  "slug/s"
);
export const SlugPerHour: q.MassFlow = _register(
  UnitDivide.massByDuration(Slug, Hour),
  "slug/h"
);
export const PoundLbPerHour: q.MassFlow = _register(
  UnitDivide.massByDuration(PoundLb, Hour),
  "lb/h"
);
export const GrainPerHour: q.MassFlow = _register(
  UnitDivide.massByDuration(Grain, Hour),
  "gr/h"
);
export const StandardCubicMeterPerHour: q.MassFlow = _register(
  Unit.timesNumber(1.2041, KilogramPerHour),
  "Sm³/h"
);
export const StandardCubicFeetPerMinute: q.MassFlow = _register(
  Unit.timesNumber(
    0.02831684660923049289319782819867,
    Unit.timesNumber(60.0, StandardCubicMeterPerHour)
  ),
  "SCFM"
);
export const StandardCubicMeterPerSecond: q.MassFlow = _register(
  Unit.timesNumber(3600.0, StandardCubicMeterPerHour),
  "Sm³/s"
);
export const StandardLiterPerSecond: q.MassFlow = _register(
  Unit.timesNumber(3600.0 * 1000, StandardCubicMeterPerHour),
  "Sl/s"
);

// VolumeFlow
export const CubicMeterPerSecond: q.VolumeFlow = _register(
  UnitDivide.volumeByDuration(CubicMeter, Second),
  "m³/s"
);
export const CubicMeterPerHour: q.VolumeFlow = _register(
  UnitDivide.volumeByDuration(CubicMeter, Hour),
  "m³/h"
);
export const CubicFeetPerMinute: q.VolumeFlow = _register(
  UnitDivide.volumeByDuration(CubicFeet, Minute),
  "acfm"
);
export const CubicFeetPerHour: q.VolumeFlow = _register(
  UnitDivide.volumeByDuration(CubicFeet, Hour),
  "acfh"
);
export const HundredCubicFeetPerHour: q.VolumeFlow = _register(
  UnitDivide.volumeByDuration(HundredCubicFeet, Hour),
  "cch"
);
export const LiterPerSecond: q.VolumeFlow = _register(
  UnitDivide.volumeByDuration(Liter, Second),
  "l/s"
);
export const LiterPerMinute: q.VolumeFlow = _register(
  UnitDivide.volumeByDuration(Liter, Minute),
  "l/m"
);
export const LiterPerHour: q.VolumeFlow = _register(
  UnitDivide.volumeByDuration(Liter, Hour),
  "l/h"
);
export const GallonsPerMinute: q.VolumeFlow = _register(
  UnitDivide.volumeByDuration(Gallon, Minute),
  "gal/min"
);
export const GallonsPerHour: q.VolumeFlow = _register(
  UnitDivide.volumeByDuration(Gallon, Hour),
  "gal/h"
);

// VolumeFlowPerArea
export const CubicMeterPerSecondPerSquareMeter: q.VolumeFlowPerArea = _register(
  UnitDivide.volumeFlowByArea(CubicMeterPerSecond, SquareMeter),
  "m³/s/m²"
);
export const CubicFeetPerMinutePerSquareFeet: q.VolumeFlowPerArea = _register(
  UnitDivide.volumeFlowByArea(CubicFeetPerMinute, SquareFeet),
  "acfm/ft²"
);
export const LiterPerSecondPerSquareMeter: q.VolumeFlowPerArea = _register(
  UnitDivide.volumeFlowByArea(LiterPerSecond, SquareMeter),
  "l/s/m²"
);

// Per Volume
export const OnePerLiter: q.DimensionlessPerVolume = _register(
  UnitDivide.dimensionlessByVolume(One, Liter),
  "/l"
);
export const OnePerCubicMeter: q.DimensionlessPerVolume = _register(
  UnitDivide.dimensionlessByVolume(One, CubicMeter),
  "/m³"
);
export const OnePerGallon: q.DimensionlessPerVolume = _register(
  UnitDivide.dimensionlessByVolume(One, Gallon),
  "/gal"
);
export const OnePerHundredCubicFeet: q.DimensionlessPerVolume = _register(
  UnitDivide.dimensionlessByVolume(One, HundredCubicFeet),
  "/100 ft³"
);

// Per Duration
export const OnePerHour: q.DimensionlessPerDuration = _register(
  UnitDivide.dimensionlessByDuration(One, Hour),
  "/h"
);
export const OnePerSecond: q.DimensionlessPerDuration = _register(
  UnitDivide.dimensionlessByDuration(One, Second),
  "/s"
);

/// Water use efficiency
export const LiterPerKiloWattHour: q.WaterUseEfficiency = _register(
  UnitDivide.volumeByEnergy(Liter, KiloWattHour),
  "l/kWh"
);

export const KilogramPerSquareMeterSecond: q.MassFlowPerArea = _register(
  UnitDivide.massFlowByArea(KilogramPerSecond, SquareMeter),
  "kg/m²s"
);

// Humidity
export const KilogramPerKilogram: q.HumidityRatio = _register(
  UnitDivide.massByMass(Kilogram, Kilogram),
  "kg/kg"
);
export const GramPerKilogram: q.HumidityRatio = _register(
  UnitDivide.massByMass(Gram, Kilogram),
  "g/kg"
);
export const PoundLbPerPoundLb: q.HumidityRatio = _register(
  UnitDivide.massByMass(PoundLb, PoundLb),
  "lb/lb"
);
export const GrainPerPoundLb: q.HumidityRatio = _register(
  UnitDivide.massByMass(Grain, PoundLb),
  "gr/lb"
);
export const GramPerPoundLb: q.HumidityRatio = _register(
  UnitDivide.massByMass(Gram, PoundLb),
  "g/lb"
);

// Specific energy
export const KilojoulePerKilogram: q.SpecificEnthalpy = _register(
  UnitDivide.energyByMass(Kilojoule, Kilogram),
  "kJ/kg"
);
export const KiloWattHourPerKilogram: q.SpecificEnthalpy = _register(
  UnitDivide.energyByMass(KiloWattHour, Kilogram),
  "kWh/kg"
);
export const BtuPerPoundLb: q.SpecificEnthalpy = _register(
  Unit.minus(7.68, Unit.timesNumber(2.326, KilojoulePerKilogram)),
  "BTU/lb"
);

// Energy per volume
export const KiloWattHourPerCubicMeter: q.HeatingValue = _register(
  UnitDivide.energyByVolume(KiloWattHour, CubicMeter),
  "kWh/m³"
);

// Specific heat capacity of air at constant pressure (kJ/kg°C, kWs/kgK, Btu/lb°F)
// Heat capacity is the measurable physical quantity that characterizes the amount of heat required to change a body's temperature by a given amount.
// Check if this really is correct
export const KilojoulePerKilogramKelvin: q.SpecificHeatCapacity = _register(
  UnitTimes.specificEnthalpyByTemperature(KilojoulePerKilogram, Kelvin),
  "kJ/kg°K"
);
export const KilojoulePerKilogramCelsius: q.SpecificHeatCapacity = _register(
  UnitTimes.specificEnthalpyByTemperature(KilojoulePerKilogram, Celsius),
  "kJ/kg°C"
);

// Heat Capacity Rate
export const KilowattPerCelsius: q.HeatCapacityRate = _register(
  UnitDivide.powerByTemperature(KiloWatt, Celsius),
  "kW/°C"
);
export const KilowattPerKelvin: q.HeatCapacityRate = _register(
  UnitDivide.powerByTemperature(KiloWatt, Kelvin),
  "kW/K"
);

/// Moment of inertia
export const KilogramSquareMeter: q.MomentOfInertia = _register(
  UnitTimes.massByArea(Kilogram, SquareMeter),
  "kg·m²"
);

// Intensity
export const WattPerSquareMeter: q.Intensity = _register(
  UnitDivide.powerByArea(Watt, SquareMeter),
  "W/m²"
);

// Specific Fan Power
export const KiloWattPerCubicMeterPerSecond: q.SpecificFanPower = _register(
  UnitDivide.powerByVolumeFlow(KiloWatt, CubicMeterPerSecond),
  "kW/m³/s"
);
export const WattPerCubicMeterPerSecond: q.SpecificFanPower = _register(
  UnitDivide.powerByVolumeFlow(Watt, CubicMeterPerSecond),
  "W/m³/s"
);
export const KiloWattPerCubicFootPerMinute: q.SpecificFanPower = _register(
  UnitDivide.powerByVolumeFlow(KiloWatt, CubicFeetPerMinute),
  "kW/ft³/min"
);

// Sound power level
export const DecibelLw: q.SoundPowerLevel = _register(
  Unit.createAlternate<"SoundPowerLevel">(
    "dB",
    UnitTimes.dimensionlessByDimensionless(One, One) as Unit.Unit<any>
  ),
  "dB"
);

// Sound pressure level
export const Decibel: q.SoundPressureLevel = _register(
  Unit.createAlternate<"SoundPressureLevel">(
    "dB",
    UnitTimes.dimensionlessByDimensionless(One, One)
  ),
  "dB"
);

// Electric resistance
export const KiloOhm: q.ElectricResistance = _register(Kilo(Ohm), "kOhm");

// Electric current
export const MilliAmpere: q.ElectricCurrent = _register(Milli(Ampere), "mA");

// Water hardness
export const MilliGramCalciumPerLiter: q.WaterHardness = _register(
  Unit.createBase("WaterHardness", "mg Ca²⁺/l"),
  "mg Ca²⁺/l"
);
export const FrenchDegree: q.WaterHardness = _register(
  Unit.timesNumber(4.0043, MilliGramCalciumPerLiter),
  "°f"
);

// ElectricPotential
export const MilliVolt: q.ElectricPotential = _register(Milli(Volt), "mV");
export const KiloVolt: q.ElectricPotential = _register(Kilo(Volt), "kV");

// Discrete
// export const Integer: q.Discrete = _register(Unit.createProductUnit<q.Discrete>("Discrete", []), " ");
export const Integer: q.Discrete = _register(
  Unit.createBase("Discrete", " "),
  " "
);

// Text
// export const Text: q.Text = _register(Unit.createProductUnit<q.Text>("Text", []), " ");
export const Text: q.Text = _register(Unit.createBase("Text", " "), " ");

// Alkalinity
export const MilliGramHydrogenCarbonatePerLiter: q.Alkalinity = _register(
  Unit.createBase("Alkalinity", "mg HCO₃⁻/l"),
  "mg HCO₃⁻/l"
);

// Viscosity
export const PascalSecond: q.Viscosity = _register(
  Unit.createBase("Viscosity", "Pa·s")
);

// Thermal Transmittance
export const WattPerSquareMeterPerKelvin: q.ThermalTransmittance = _register(
  UnitDivide.intensityByDeltaTemperature(
    UnitDivide.powerByArea(Watt, SquareMeter),
    DeltaCelsius
  ),
  "W/m²/°K"
);
export const BtuPerHourPerSquareFeetPerFahrenheit: q.ThermalTransmittance = _register(
  UnitDivide.intensityByDeltaTemperature(
    UnitDivide.powerByArea(BtuPerHour, SquareFeet),
    DeltaFahrenheit
  ),
  "BTU/h/ft²/°F"
);

// Thermal conductivity
export const WattPerMeterPerKelvin: q.ThermalConductivity = _register(
  UnitDivide.heatCapacityRateByLength(
    UnitDivide.powerByDeltaTemperature(Watt, DeltaCelsius),
    Meter
  ),
  "W/m/°K"
);
export const BtuPerHourPerFeetPerFahrenheit: q.ThermalConductivity = _register(
  UnitDivide.heatCapacityRateByLength(
    UnitDivide.powerByDeltaTemperature(BtuPerHour, DeltaCelsius),
    Foot
  ),
  "BTU/h/ft/°F"
);

// Volume flow per cooling power
export const GallonsPerMinutePerTonCooling: q.VolumeFlowPerPower = _register(
  UnitDivide.volumeFlowByPower(GallonsPerMinute, TonCooling),
  "gpm/ton"
);
export const LiterPerSecondPerKiloWatt: q.VolumeFlowPerPower = _register(
  UnitDivide.volumeFlowByPower(LiterPerSecond, KiloWatt),
  "l/s/kW"
);

//SquareRootPressure
export const SquareRootPascal: q.SquareRootPressure = _register(
  Unit.createBase("SquareRootPressure", "√Pa"),
  "√Pa"
);
export const SquareRootInchOfWaterColumn: q.SquareRootPressure = _register(
  Unit.timesNumber(1 / 0.06335029447, SquareRootPascal),
  "√in WC"
); //sqrt(Pa/249.0889) = 0.06335029447

//VolumeFlowPerSquareRootPressure
export const LiterPerSecondPerSquareRootPascal: q.VolumeFlowPerSquareRootPressure = _register(
  UnitDivide.volumeFlowBySquareRootPressure(LiterPerSecond, SquareRootPascal)
);
export const CubicFeetPerMinutePerSquareRootInchOfWaterColumn: q.VolumeFlowPerSquareRootPressure = _register(
  UnitDivide.volumeFlowBySquareRootPressure(
    CubicFeetPerMinute,
    SquareRootInchOfWaterColumn
  )
);

export function isUnit(unit: string): boolean {
  _ensureMetaAdded();
  return _stringToUnit.hasOwnProperty(unit.trim().toLowerCase());
}

export function getUnitFromString(
  unitString: string,
  onError?: (unitString: string) => Unit.Unit
): Unit.Unit {
  _ensureMetaAdded();
  let unit = _stringToUnit[unitString.trim().toLowerCase()];
  if (unit === undefined) {
    if (!onError) {
      throw new Error("Unknown unit " + unitString);
    } else {
      return onError(unitString);
    }
  }
  return unit;
}

export function getStringFromUnit(unit: Unit.Unit): string {
  _ensureMetaAdded();
  const name = _unitToString[getUnitKey(unit)];
  if (name === undefined) {
    throw new Error("Unknown Unit " + unit);
  }
  return name;
}

export function getQuantityTypeFromString(quantityString: string): string {
  _ensureMetaAdded();
  const quantityArray = Object.keys(_quantityToUnits);
  const foundIndex = quantityArray.indexOf(quantityString);
  if (foundIndex < 0) {
    throw new Error(`Unknown quantity '${quantityString}'`);
  }
  return quantityString;
}

export function getStringFromQuantityType(quantity: string): string {
  return quantity;
}

export function getUnitsForQuantity(quantityType: string): Array<Unit.Unit> {
  _ensureMetaAdded();
  const units = _quantityToUnits[quantityType];
  if (units === undefined) {
    throw new Error("Unknown quantity type");
  }
  return units;
}

export function getAllUnits(): Array<Unit.Unit> {
  _ensureMetaAdded();
  const unitsArray = Object.keys(_stringToUnit).map(key => _stringToUnit[key]);
  return unitsArray;
}

export function getAllQuantities(): Array<string> {
  _ensureMetaAdded();
  const quantityArray = Object.keys(_quantityToUnits) as Array<string>;
  return quantityArray;
}

// == BEGIN META: Manually added meta data needed becuase reflection does not work ==

let _metaAdded: boolean = false;

function getUnitKey(unit: Unit.Unit): string {
  // Iterates whole array. ES6 doesnt have find
  const foundUnit = getAllUnits().filter(u => Unit.equals(u, unit))[0];
  if (!foundUnit) {
    throw new Error("Unknown Unit " + JSON.stringify(unit));
  }

  return JSON.stringify(foundUnit);
}

function _addMeta(quantity: string, name: string, unit: Unit.Unit): void {
  const lowerName = name.toLowerCase();
  _unitToString[JSON.stringify(unit)] = lowerName;
  _stringToUnit[lowerName] = unit;
  let quantityUnits = _quantityToUnits[quantity];
  if (quantityUnits === undefined) {
    quantityUnits = [];
    _quantityToUnits[quantity] = quantityUnits;
  }
  quantityUnits.push(unit);
}

// Since Dart uses lazy init for static member variables, we need to access them all to make them register.
// While accessing them we also register meta-data for them
function _ensureMetaAdded(): void {
  if (_metaAdded) {
    return;
  }

  _addMeta("Dimensionless", "One", One);
  _addMeta("Dimensionless", "Percent", Percent);
  _addMeta("Dimensionless", "PPM", PPM);
  _addMeta("ElectricCurrent", "Ampere", Ampere);
  _addMeta("LuminousIntensity", "Candela", Candela);
  _addMeta("Temperature", "Kelvin", Kelvin);
  _addMeta("Mass", "Kilogram", Kilogram);
  _addMeta("Length", "Meter", Meter);
  _addMeta("AmountOfSubstance", "Mole", Mole);
  _addMeta("Duration", "Second", Second);
  _addMeta("Mass", "Gram", Gram);
  _addMeta("Angle", "Radian", Radian);
  _addMeta("SolidAngle", "Steradian", Steradian);
  _addMeta("DataAmount", "Bit", Bit);
  _addMeta("Frequency", "Hertz", Hertz);
  _addMeta("Force", "Newton", Newton);
  _addMeta("Pressure", "Pascal", Pascal);
  _addMeta("Energy", "Joule", Joule);
  _addMeta("Power", "Watt", Watt);
  _addMeta("ElectricCharge", "Coulomb", Coulomb);
  _addMeta("ElectricPotential", "Volt", Volt);
  _addMeta("ElectricCapacitance", "Farad", Farad);
  _addMeta("ElectricResistance", "Ohm", Ohm);
  _addMeta("ElectricConductance", "Siemens", Siemens);
  _addMeta("MagneticFlux", "Weber", Weber);
  _addMeta("MagneticFluxDensity", "Tesla", Tesla);
  _addMeta("ElectricInductance", "Henry", Henry);
  _addMeta("Temperature", "Celsius", Celsius);
  _addMeta("LuminousFlux", "Lumen", Lumen);
  _addMeta("Illuminance", "Lux", Lux);
  _addMeta("RadioactiveActivity", "Becquerel", Becquerel);
  _addMeta("RadiationDoseAbsorbed", "Gray", Gray);
  _addMeta("RadiationDoseEffective", "Sievert", Sievert);
  _addMeta("CatalyticActivity", "Katal", Katal);
  _addMeta("Velocity", "MeterPerSecond", MeterPerSecond);
  _addMeta("Acceleration", "MeterPerSquareSecond", MeterPerSquareSecond);
  _addMeta("Area", "SquareMeter", SquareMeter);
  _addMeta("Volume", "CubicMeter", CubicMeter);
  _addMeta("Length", "Kilometer", Kilometer);
  _addMeta("Length", "CentiMeter", CentiMeter);
  _addMeta("Length", "Millimeter", Millimeter);
  _addMeta("RelativeHumidity", "HumidityFactor", HumidityFactor);
  _addMeta("RelativeHumidity", "PercentHumidity", PercentHumidity);
  _addMeta("WetTemperature", "CelsiusWet", CelsiusWet);
  _addMeta("WetTemperature", "FahrenheitWet", FahrenheitWet);
  _addMeta("WetTemperature", "KelvinWet", KelvinWet);
  _addMeta("DewPointTemperature", "CelsiusDewPoint", CelsiusDewPoint);
  _addMeta("DewPointTemperature", "FahrenheitDewPoint", FahrenheitDewPoint);
  _addMeta("DewPointTemperature", "KelvinDewPoint", KelvinDewPoint);
  _addMeta("Mass", "PoundLb", PoundLb);
  _addMeta("Mass", "Grain", Grain);
  _addMeta("Mass", "Slug", Slug);
  _addMeta("Mass", "Tonne", Tonne);
  _addMeta("Mass", "MilliGram", MilliGram);
  _addMeta("DimensionlessPerMass", "OnePerKilogram", OnePerKilogram);
  _addMeta("DimensionlessPerMass", "OnePerPoundLb", OnePerPoundLb);
  _addMeta("Length", "Foot", Foot);
  _addMeta("Length", "Yard", Yard);
  _addMeta("Length", "Inch", Inch);
  _addMeta("Length", "Mile", Mile);
  _addMeta("Length", "Decimeter", Decimeter);
  _addMeta("Temperature", "Rankine", Rankine);
  _addMeta("Temperature", "Fahrenheit", Fahrenheit);
  _addMeta("DeltaTemperature", "DeltaCelsius", DeltaCelsius);
  _addMeta("DeltaTemperature", "DeltaFahrenheit", DeltaFahrenheit);
  _addMeta(
    "DeltaDewPointTemperature",
    "DeltaCelsiusDewPoint",
    DeltaCelsiusDewPoint
  );
  _addMeta(
    "DeltaDewPointTemperature",
    "DeltaFahrenheitDewPoint",
    DeltaFahrenheitDewPoint
  );
  _addMeta("Duration", "Minute", Minute);
  _addMeta("Duration", "Hour", Hour);
  _addMeta("Duration", "Day", Day);
  _addMeta("Duration", "Week", Week);
  _addMeta("Duration", "Year", Year);
  _addMeta("Duration", "MilliSecond", MilliSecond);
  _addMeta("Frequency", "RevolutionsPerMinute", RevolutionsPerMinute);
  _addMeta("Frequency", "RevolutionsPerHour", RevolutionsPerHour);
  _addMeta("Area", "SquareInch", SquareInch);
  _addMeta("Area", "SquareFeet", SquareFeet);
  _addMeta("Area", "SquareMillimeter", SquareMillimeter);
  _addMeta("Area", "SquareCentimeter", SquareCentimeter);
  _addMeta("Area", "SquareDecimeter", SquareDecimeter);
  _addMeta("Angle", "Degrees", Degrees);
  _addMeta("Volume", "CubicCentiMeter", CubicCentiMeter);
  _addMeta("Volume", "CubicInch", CubicInch);
  _addMeta("Volume", "CubicFeet", CubicFeet);
  _addMeta("Volume", "HundredCubicFeet", HundredCubicFeet);
  _addMeta("Volume", "Liter", Liter);
  _addMeta("Volume", "MilliLiter", MilliLiter);
  _addMeta("Volume", "Gallon", Gallon);
  _addMeta("Velocity", "FeetPerSecond", FeetPerSecond);
  _addMeta("Velocity", "FeetPerMinute", FeetPerMinute);
  _addMeta("Velocity", "MilesPerHour", MilesPerHour);
  _addMeta("Velocity", "KilometerPerHour", KilometerPerHour);
  _addMeta("Velocity", "MeterPerHour", MeterPerHour);
  _addMeta("Density", "KilogramPerCubicMeter", KilogramPerCubicMeter);
  _addMeta("Density", "GramPerCubicCentiMeter", GramPerCubicCentiMeter);
  _addMeta("Density", "SlugPerCubicFeet", SlugPerCubicFeet);
  _addMeta("Density", "PoundPerCubicFoot", PoundPerCubicFoot);
  _addMeta("Force", "PoundForce", PoundForce);
  _addMeta("Pressure", "KiloPascal", KiloPascal);
  _addMeta("Pressure", "HectoPascal", HectoPascal);
  _addMeta("Pressure", "NewtonPerSquareMeter", NewtonPerSquareMeter);
  _addMeta("Pressure", "PoundForcePerSquareInch", PoundForcePerSquareInch);
  _addMeta("Pressure", "InchOfMercury", InchOfMercury);
  _addMeta("Pressure", "InchOfWaterColumn", InchOfWaterColumn);
  _addMeta("Pressure", "FeetOfWaterColumn", FeetOfWaterColumn);
  _addMeta("Pressure", "Bar", Bar);
  _addMeta("Pressure", "MilliBar", MilliBar);
  _addMeta("Pressure", "PoundForcePerSquareFoot", PoundForcePerSquareFoot);
  _addMeta("Pressure", "DeciPascal", DeciPascal);
  _addMeta("Power", "KiloWatt", KiloWatt);
  _addMeta("Power", "MegaWatt", MegaWatt);
  _addMeta("Power", "GigaWatt", GigaWatt);
  _addMeta("Power", "BtuPerHour", BtuPerHour);
  _addMeta("Power", "TonCooling", TonCooling);
  _addMeta("Power", "KiloBtuPerHour", KiloBtuPerHour);
  _addMeta("Power", "HorsePower", HorsePower);
  _addMeta("Power", "VoltAmpere", VoltAmpere);
  _addMeta("Energy", "NewtonMeter", NewtonMeter);
  _addMeta("Energy", "Kilojoule", Kilojoule);
  _addMeta("Energy", "Megajoule", Megajoule);
  _addMeta("Energy", "KiloWattHour", KiloWattHour);
  _addMeta("Energy", "MegaWattHour", MegaWattHour);
  _addMeta("Energy", "GigaWattHour", GigaWattHour);
  _addMeta("Energy", "WattHour", WattHour);
  _addMeta("Energy", "WattSecond", WattSecond);
  _addMeta("Energy", "Btu", Btu);
  _addMeta("Energy", "KiloBtu", KiloBtu);
  _addMeta("Energy", "MegaBtu", MegaBtu);
  _addMeta("Energy", "Therm", Therm);
  _addMeta("DimensionlessPerEnergy", "OnePerKiloWattHour", OnePerKiloWattHour);
  _addMeta("DimensionlessPerEnergy", "OnePerBtu", OnePerBtu);
  _addMeta("DimensionlessPerEnergy", "OnePerMegaBtu", OnePerMegaBtu);
  _addMeta("DimensionlessPerEnergy", "OnePerTherm", OnePerTherm);
  _addMeta("DimensionlessPerEnergy", "OnePerKilojoule", OnePerKilojoule);
  _addMeta("DimensionlessPerEnergy", "OnePerMegajoule", OnePerMegajoule);
  _addMeta("DimensionlessPerEnergy", "OnePerJoule", OnePerJoule);
  _addMeta("Emission", "KilogramPerKiloWattHour", KilogramPerKiloWattHour);
  _addMeta("Emission", "PoundLbPerKiloWattHour", PoundLbPerKiloWattHour);
  _addMeta("Emission", "GramPerKiloWattHour", GramPerKiloWattHour);
  _addMeta("MassFlow", "KilogramPerSecond", KilogramPerSecond);
  _addMeta("MassFlow", "GramPerSecond", GramPerSecond);
  _addMeta("MassFlow", "GramPerHour", GramPerHour);
  _addMeta("MassFlow", "KilogramPerHour", KilogramPerHour);
  _addMeta("MassFlow", "SlugPerSecond", SlugPerSecond);
  _addMeta("MassFlow", "SlugPerHour", SlugPerHour);
  _addMeta("MassFlow", "PoundLbPerHour", PoundLbPerHour);
  _addMeta("MassFlow", "GrainPerHour", GrainPerHour);
  _addMeta("MassFlow", "StandardCubicMeterPerHour", StandardCubicMeterPerHour);
  _addMeta(
    "MassFlow",
    "StandardCubicFeetPerMinute",
    StandardCubicFeetPerMinute
  );
  _addMeta(
    "MassFlow",
    "StandardCubicMeterPerSecond",
    StandardCubicMeterPerSecond
  );
  _addMeta("MassFlow", "StandardLiterPerSecond", StandardLiterPerSecond);
  _addMeta("VolumeFlow", "CubicMeterPerSecond", CubicMeterPerSecond);
  _addMeta("VolumeFlow", "CubicMeterPerHour", CubicMeterPerHour);
  _addMeta("VolumeFlow", "CubicFeetPerMinute", CubicFeetPerMinute);
  _addMeta("VolumeFlow", "CubicFeetPerHour", CubicFeetPerHour);
  _addMeta("VolumeFlow", "HundredCubicFeetPerHour", HundredCubicFeetPerHour);
  _addMeta("VolumeFlow", "LiterPerSecond", LiterPerSecond);
  _addMeta("VolumeFlow", "LiterPerMinute", LiterPerMinute);
  _addMeta("VolumeFlow", "LiterPerHour", LiterPerHour);
  _addMeta("VolumeFlow", "GallonsPerMinute", GallonsPerMinute);
  _addMeta("VolumeFlow", "GallonsPerHour", GallonsPerHour);
  _addMeta("DimensionlessPerVolume", "OnePerLiter", OnePerLiter);
  _addMeta("DimensionlessPerVolume", "OnePerCubicMeter", OnePerCubicMeter);
  _addMeta("DimensionlessPerVolume", "OnePerGallon", OnePerGallon);
  _addMeta(
    "DimensionlessPerVolume",
    "OnePerHundredCubicFeet",
    OnePerHundredCubicFeet
  );
  _addMeta("DimensionlessPerDuration", "OnePerHour", OnePerHour);
  _addMeta("DimensionlessPerDuration", "OnePerSecond", OnePerSecond);
  _addMeta("WaterUseEfficiency", "LiterPerKiloWattHour", LiterPerKiloWattHour);
  _addMeta(
    "MassFlowPerArea",
    "KilogramPerSquareMeterSecond",
    KilogramPerSquareMeterSecond
  );
  _addMeta("HumidityRatio", "KilogramPerKilogram", KilogramPerKilogram);
  _addMeta("HumidityRatio", "GramPerKilogram", GramPerKilogram);
  _addMeta("HumidityRatio", "PoundLbPerPoundLb", PoundLbPerPoundLb);
  _addMeta("HumidityRatio", "GrainPerPoundLb", GrainPerPoundLb);
  _addMeta("HumidityRatio", "GramPerPoundLb", GramPerPoundLb);
  _addMeta("SpecificEnthalpy", "KilojoulePerKilogram", KilojoulePerKilogram);
  _addMeta(
    "SpecificEnthalpy",
    "KiloWattHourPerKilogram",
    KiloWattHourPerKilogram
  );
  _addMeta("SpecificEnthalpy", "BtuPerPoundLb", BtuPerPoundLb);
  _addMeta(
    "HeatingValue",
    "KiloWattHourPerCubicMeter",
    KiloWattHourPerCubicMeter
  );
  _addMeta(
    "SpecificHeatCapacity",
    "KilojoulePerKilogramKelvin",
    KilojoulePerKilogramKelvin
  );
  _addMeta(
    "SpecificHeatCapacity",
    "KilojoulePerKilogramCelsius",
    KilojoulePerKilogramCelsius
  );
  _addMeta("HeatCapacityRate", "KilowattPerCelsius", KilowattPerCelsius);
  _addMeta("HeatCapacityRate", "KilowattPerKelvin", KilowattPerKelvin);
  _addMeta("MomentOfInertia", "KilogramSquareMeter", KilogramSquareMeter);
  _addMeta("Intensity", "WattPerSquareMeter", WattPerSquareMeter);
  _addMeta(
    "SpecificFanPower",
    "KiloWattPerCubicMeterPerSecond",
    KiloWattPerCubicMeterPerSecond
  );
  _addMeta(
    "SpecificFanPower",
    "WattPerCubicMeterPerSecond",
    WattPerCubicMeterPerSecond
  );
  _addMeta(
    "SpecificFanPower",
    "KiloWattPerCubicFootPerMinute",
    KiloWattPerCubicFootPerMinute
  );
  _addMeta("SoundPressureLevel", "Decibel", Decibel);
  _addMeta("SoundPowerLevel", "DecibelLw", DecibelLw);
  _addMeta("ElectricResistance", "KiloOhm", KiloOhm);
  _addMeta("ElectricCurrent", "MilliAmpere", MilliAmpere);
  _addMeta(
    "WaterHardness",
    "MilliGramCalciumPerLiter",
    MilliGramCalciumPerLiter
  );
  _addMeta("WaterHardness", "FrenchDegree", FrenchDegree);
  _addMeta("ElectricPotential", "MilliVolt", MilliVolt);
  _addMeta("ElectricPotential", "KiloVolt", KiloVolt);
  _addMeta("Discrete", "Integer", Integer);
  _addMeta("Text", "Text", Text);
  _addMeta(
    "Alkalinity",
    "MilliGramHydrogenCarbonatePerLiter",
    MilliGramHydrogenCarbonatePerLiter
  );
  _addMeta("Viscosity", "PascalSecond", PascalSecond);
  _addMeta(
    "ThermalTransmittance",
    "WattPerSquareMeterPerKelvin",
    WattPerSquareMeterPerKelvin
  );
  _addMeta(
    "ThermalTransmittance",
    "BtuPerHourPerSquareFeetPerFahrenheit",
    BtuPerHourPerSquareFeetPerFahrenheit
  );
  _addMeta(
    "ThermalConductivity",
    "WattPerMeterPerKelvin",
    WattPerMeterPerKelvin
  );
  _addMeta(
    "ThermalConductivity",
    "BtuPerHourPerFeetPerFahrenheit",
    BtuPerHourPerFeetPerFahrenheit
  );
  _addMeta(
    "VolumeFlowPerPower",
    "GallonsPerMinutePerTonCooling",
    GallonsPerMinutePerTonCooling
  );
  _addMeta(
    "VolumeFlowPerPower",
    "LiterPerSecondPerKiloWatt",
    LiterPerSecondPerKiloWatt
  );
  _addMeta(
    "VolumeFlowPerPower",
    "CubicFeetPerMinutePerSquareFeet",
    CubicFeetPerMinutePerSquareFeet
  );
  _addMeta(
    "VolumeFlowPerPower",
    "CubicMeterPerSecondPerSquareMeter",
    CubicMeterPerSecondPerSquareMeter
  );
  _addMeta(
    "VolumeFlowPerPower",
    "LiterPerSecondPerSquareMeter",
    LiterPerSecondPerSquareMeter
  );
  _addMeta(
    "VolumeFlowPerArea",
    "CubicMeterPerSecondPerSquareMeter",
    CubicMeterPerSecondPerSquareMeter
  );
  _addMeta(
    "VolumeFlowPerArea",
    "CubicFeetPerMinutePerSquareFeet",
    CubicFeetPerMinutePerSquareFeet
  );
  _addMeta(
    "VolumeFlowPerArea",
    "LiterPerSecondPerSquareMeter",
    LiterPerSecondPerSquareMeter
  );
  _addMeta("SquareRootPressure", "SquareRootPascal", SquareRootPascal);
  _addMeta(
    "SquareRootPressure",
    "SquareRootInchOfWaterColumn",
    SquareRootInchOfWaterColumn
  );
  _addMeta(
    "VolumeFlowPerSquareRootPressure",
    "LiterPerSecondPerSquareRootPascal",
    LiterPerSecondPerSquareRootPascal
  );
  _addMeta(
    "VolumeFlowPerSquareRootPressure",
    "CubicFeetPerMinutePerSquareRootInchOfWaterColumn",
    CubicFeetPerMinutePerSquareRootInchOfWaterColumn
  );

  _metaAdded = true;
}
