import * as Unit from "./unit";
import * as UnitName from "./unit-name";
import * as UnitDivide from "./unit-divide";
import * as UnitTimes from "./unit-times";
import * as q from "./quantity";
import { Quantity } from "./quantity";
// import * as UnitPow from "./unit-pow";

// tslint:disable variable-name max-line-length max-file-line-count

const _unitToString: { [key: string]: string } = {}; // tslint:disable-line
const _stringToUnit: { [key: string]: Unit.Unit } = {}; // tslint:disable-line
const _quantityToUnits: { [key: string]: Array<Unit.Unit> } = {}; // tslint:disable-line

export const One = registerUnit(Unit.One, " "); // tslint:disable-line
export const Percent = registerUnit(
  Unit.divideNumber("Percent", 100.0, One),
  "%"
); // tslint:disable-line
export const PPM = registerUnit(
  Unit.divideNumber("PPM", 1000000.0, One),
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
export const Ampere = registerUnit(
  Unit.createBase("Ampere", "ElectricCurrent", "A"),
  "A"
);

/**
 * The base unit for luminous intensity quantities ( <code>cd</code> ).
 * The candela is the luminous intensity, in a given direction, of a source
 * that emits monochromatic radiation of frequency 540 × 1012 hertz and that
 * has a radiant intensity in that direction of 1/683 watt per steradian.
 * @see <a href="http://en.wikipedia.org/wiki/Candela">Wikipedia: Candela</a>
 */
export const Candela = registerUnit(
  Si(Unit.createBase("Candela", "LuminousIntensity", "cd")),
  "cd"
);

/**
 * The base unit for thermodynamic temperature quantities ( <code>K</code> ).
 * The kelvin is the 1/273.16th of the thermodynamic temperature of the triple point of water.
 * It is named after the Scottish mathematician and physicist William Thomson 1st Lord Kelvin (1824-1907).
 */
export const Kelvin = registerUnit(
  Unit.createBase("Kelvin", "Temperature", "K"),
  "K"
);

/**
 * The base unit for mass quantities ( <code>kg</code> ).
 * It is the only SI unit with a prefix as part of its name and symbol.
 * The kilogram is equal to the mass of an international prototype in the form
 * of a platinum-iridium cylinder kept at Sevres in France.
 * @see #Gram
 */
export const Kilogram = registerUnit(
  Unit.createBase("Kilogram", "Mass", "kg"),
  "kg"
);

/**
 * The base unit for length quantities ( <code>m</code> ).
 * One meter was redefined in 1983 as the distance traveled by light in a vacuum in 1/299,792,458 of a second.
 */
export const Meter = registerUnit(Unit.createBase("Meter", "Length", "m"), "m");

/**
 * The base unit for amount of substance quantities ( <code>mol</code> ).
 * The mole is the amount of substance of a system which contains as many elementary
 * entities as there are atoms in 0.012 kilogram of carbon 12.
 */
export const Mole = registerUnit(
  Si(Unit.createBase("Mole", "AmountOfSubstance", "mol")),
  "mol"
);

/**
 * The base unit for duration quantities ( <code>s</code> ). It is defined as the duration of 9,192,631,770 cycles of radiation corresponding to the transition between two hyperfine levels of the ground state of cesium (1967 Standard).
 */
export const Second = registerUnit(
  Unit.createBase("Second", "Duration", "s"),
  "s"
);

//////////////////////////////
/// SI DERIVED PRODUCT UNITS //
//////////////////////////////

/** The metric unit for velocity quantities ( <code>m/s</code> ). */
export const MeterPerSecond = registerUnit(
  UnitDivide.lengthByDuration("MeterPerSecond", Meter, Second),
  "m/s"
);

/** The metric unit for acceleration quantities ( <code>m/s²</code> ). */
export const MeterPerSquareSecond = registerUnit(
  UnitDivide.velocityBySecond("MeterPerSquareSecond", MeterPerSecond, Second)
);

/** The metric unit for area quantities ( <code>m²</code> ). */
export const SquareMeter = registerUnit(Squared("SquareMeter", Meter), "m²");

/** The metric unit for volume quantities ( <code>m³</code> ). */
export const CubicMeter = registerUnit(Cubed("CubicMeter", Meter), "m³");

/** Equivalent to <code>KILO(METER)</code>. */
export const Kilometer = registerUnit(Kilo("Kilometer", Meter), "km");

/** Equivalent to <code>CENTI(METRE)</code>. */
export const CentiMeter = registerUnit(Centi("CentiMeter", Meter), "cm");

/** Equivalent to <code>MILLI(METRE)</code>. */
export const Millimeter = registerUnit(Milli("Millimeter", Meter), "mm");

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
export const Gram = registerUnit(
  Unit.divideNumber("Gram", 1000.0, Kilogram),
  "g"
);

/**
 * The unit for plane angle quantities ( <code>rad</code> ).
 * One radian is the angle between two radii of a circle such that the length of the arc between them is equal to the radius.
 */
export const Radian = registerUnit(
  Unit.createAlternate<"Angle">("Radian", "rad", One as Unit.Unit<any>),
  "rad"
);

/**
 * The unit for solid angle quantities ( <code>sr</code> ).
 * One steradian is the solid angle subtended at the center of a sphere by an area on the
 * surface of the sphere that is equal to the radius squared. The total solid angle of a sphere is 4*Pi steradians.
 */
export const Steradian = registerUnit(
  Unit.createAlternate<"SolidAngle">("Steradian", "sr", One as Unit.Unit<any>),
  "sr"
);

/**
 * The unit for binary information ( <code>bit</code> ).
 */
export const Bit = registerUnit(
  Unit.createAlternate<"DataAmount">("Bit", "bit", One as Unit.Unit<any>),
  "bit"
);

/**
 * The derived unit for frequency ( <code>Hz</code> ).
 * A unit of frequency equal to one cycle per second. After Heinrich Rudolf Hertz (1857-1894),
 * German physicist who was the first to produce radio waves artificially.
 */
export const Hertz = registerUnit(
  Unit.createAlternate<"Frequency">(
    "Hertz",
    "Hz",
    UnitDivide.dimentionlessByDuration("Hertz", One, Second)
  ),
  "Hz"
);

/**
 * The derived unit for force ( <code>N</code> ).
 * One newton is the force required to give a mass of 1 kilogram an Force of 1 metre per second per second.
 * It is named after the English mathematician and physicist Sir Isaac Newton (1642-1727).
 */
export const Newton = registerUnit(
  Unit.createAlternate<"Force">(
    "Newton",
    "N",
    UnitTimes.massByAcceleration("Newton", Kilogram, MeterPerSquareSecond)
  ),
  "N"
);

/**
 * The derived unit for pressure, stress ( <code>Pa</code> ).
 * One pascal is equal to one newton per square meter.
 * It is named after the French philosopher and mathematician Blaise Pascal (1623-1662).
 */
export const Pascal = registerUnit(
  Unit.createAlternate<"Pressure">(
    "Pascal",
    "Pa",
    UnitDivide.forceByArea("Pascal", Newton, SquareMeter)
  ),
  "Pa"
);

/**
 * The derived unit for energy, work, quantity of heat ( <code>J</code> ).
 * One joule is the amount of work done when an applied force of 1 newton moves
 * through a distance of 1 metre in the direction of the force.
 * It is named after the English physicist James Prescott Joule (1818-1889).
 */
export const Joule = registerUnit(
  Unit.createAlternate<"Energy">(
    "Joule",
    "J",
    UnitTimes.forceByLength("Joule", Newton, Meter)
  ),
  "J"
);

/**
 * The derived unit for power, radiant, flux ( <code>W</code> ).
 * One watt is equal to one joule per second.
 * It is named after the British scientist James Watt (1736-1819).
 */
export const Watt = registerUnit(
  Unit.createAlternate<"Power">(
    "Watt",
    "W",
    UnitDivide.energyByDuration("Watt", Joule, Second)
  ),
  "W"
);

/**
 * The derived unit for electric charge, quantity of electricity ( <code>C</code> ).
 * One Coulomb is equal to the quantity of charge transferred in one second by a steady current of one ampere.
 * It is named after the French physicist Charles Augustin de Coulomb (1736-1806).
 */
export const Coulomb = registerUnit(
  Unit.createAlternate<"ElectricCharge">(
    "Coulomb",
    "C",
    UnitTimes.durationByElectricCurrent("Coulomb", Second, Ampere)
  ),
  "C"
);

/**
 * The derived unit for electric potential difference, electromotive force ( <code>V</code> ).
 * One Volt is equal to the difference of electric potential between two points on a conducting
 * wire carrying a export constant current of one ampere when the power dissipated between the points is one watt.
 * It is named after the Italian physicist Count Alessandro Volta (1745-1827).
 */
export const Volt = registerUnit(
  Unit.createAlternate<"ElectricPotential">(
    "Volt",
    "V",
    UnitDivide.powerByElectricalCurrent("Volt", Watt, Ampere)
  ),
  "V"
);

/**
 * The derived unit for capacitance ( <code>F</code> ).
 * One Farad is equal to the capacitance of a capacitor having an equal and opposite charge of 1 coulomb on
 * each plate and a potential difference of 1 volt between the plates.
 * It is named after the British physicist and chemist Michael Faraday (1791-1867).
 */
export const Farad = registerUnit(
  Unit.createAlternate<"ElectricCapacitance">(
    "Farad",
    "F",
    UnitDivide.electricChargeByElectricPotential("Farad", Coulomb, Volt)
  ),
  "F"
);

/**
 * The derived unit for electric resistance ( <code>Ω</code> or <code>Ohm</code> ).
 * One Ohm is equal to the resistance of a conductor in which a current of one ampere is produced
 * by a potential of one volt across its terminals.
 * It is named after the German physicist Georg Simon Ohm (1789-1854).
 */
export const Ohm = registerUnit(
  Si(
    Unit.createAlternate<"ElectricResistance">(
      "Ohm",
      "Ω",
      UnitDivide.electricalPotentialByElectricalCurrent("Ohm", Volt, Ampere)
    )
  )
);

/**
 * The derived unit for electric conductance ( <code>S</code> ).
 * One Siemens is equal to one ampere per volt.
 * It is named after the German engineer Ernst Werner von Siemens (1816-1892).
 */
export const Siemens = registerUnit(
  Si(
    Unit.createAlternate<"ElectricConductance">(
      "Siemens",
      "S",
      UnitDivide.electricalCurrentByElectricalPotential("Siemens", Ampere, Volt)
    )
  )
);

/**
 * The derived unit for magnetic flux ( <code>Wb</code> ).
 * One Weber is equal to the magnetic flux that in linking a circuit of one turn produces in it an
 * electromotive force of one volt as it is uniformly reduced to zero within one second.
 * It is named after the German physicist Wilhelm Eduard Weber (1804-1891).
 */
export const Weber = registerUnit(
  Si(
    Unit.createAlternate<"MagneticFlux">(
      "Weber",
      "Wb",
      UnitTimes.electricalPotentialByDuration("Weber", Volt, Second)
    )
  )
);

/**
 * The derived unit for magnetic flux density ( <code>T</code> ).
 * One Tesla is equal equal to one weber per square meter.
 * It is named after the Serbian-born American electrical engineer and physicist Nikola Tesla (1856-1943).
 */
export const Tesla = registerUnit(
  Si(
    Unit.createAlternate<"MagneticFluxDensity">(
      "Tesla",
      "T",
      UnitDivide.magneticFluxByArea("Tesla", Weber, SquareMeter)
    )
  )
);

/**
 * The derived unit for inductance ( <code>H</code> ).
 * One Henry is equal to the inductance for which an induced electromotive force of one volt is produced
 * when the current is varied at the rate of one ampere per second.
 * It is named after the American physicist Joseph Henry (1791-1878).
 */
export const Henry = registerUnit(
  Si(
    Unit.createAlternate<"ElectricInductance">(
      "Henry",
      "H",
      UnitDivide.magneticFluxByElectricalCurrent("Henry", Weber, Ampere)
    )
  )
);

/**
 * The derived unit for Celsius temperature ( <code>℃</code> ).
 * This is a unit of temperature such as the freezing point of water (at one atmosphere of pressure)
 * is 0 ℃, while the boiling point is 100 ℃.
 */
export const Celsius = registerUnit(
  Si(Unit.plus("Celsius", 273.15, Kelvin)),
  "°C"
);

/**
 * The derived unit for luminous flux ( <code>lm</code> ).
 * One Lumen is equal to the amount of light given out through a solid angle by a source of one
 * candela intensity radiating equally in all directions.
 */
export const Lumen = registerUnit(
  Si(
    Unit.createAlternate<"LuminousFlux">(
      "Lumen",
      "lm",
      UnitTimes.luminousIntensityBySolidAngle("Lumen", Candela, Steradian)
    )
  )
);

/**
 * The derived unit for illuminance ( <code>lx</code> ).
 * One Lux is equal to one lumen per square meter.
 */
export const Lux = registerUnit(
  Si(
    Unit.createAlternate<"Illuminance">(
      "Lux",
      "lx",
      UnitDivide.luminousFluxByArea("Lux", Lumen, SquareMeter)
    )
  )
);

/**
 * The derived unit for activity of a radionuclide ( <code>Bq</code> ).
 * One becquerel is the radiation caused by one disintegration per second.
 * It is named after the French physicist, Antoine-Henri Becquerel (1852-1908).
 */
export const Becquerel = registerUnit(
  Si(
    Unit.createAlternate<"RadioactiveActivity">(
      "Becquerel",
      "Bq",
      UnitDivide.dimentionlessByDuration("Becquerel", One, Second) as Unit.Unit<
        any
      >
    )
  )
);

/**
 * The derived unit for absorbed dose, specific energy (imparted), kerma ( <code>Gy</code> ).
 * One gray is equal to the dose of one joule of energy absorbed per one kilogram of matter.
 * It is named after the British physician L. H. Gray (1905-1965).
 */
export const Gray = registerUnit(
  Si(
    Unit.createAlternate<"RadiationDoseAbsorbed">(
      "Gray",
      "Gy",
      UnitDivide.energyByMass("Gray", Joule, Kilogram) as Unit.Unit<any>
    )
  )
);

/**
 * The derived unit for dose equivalent ( <code>Sv</code> ).
 * One Sievert is equal is equal to the actual dose, in grays, multiplied by a "quality factor" which is
 * larger for more dangerous forms of radiation.
 * It is named after the Swedish physicist Rolf Sievert (1898-1966).
 */
export const Sievert = registerUnit(
  Si(
    Unit.createAlternate<"RadiationDoseEffective">(
      "Sievert",
      "Sv",
      UnitDivide.energyByMass("Sievert", Joule, Kilogram) as Unit.Unit<any>
    )
  )
);

/**
 * The derived unit for catalytic activity ( <code>kat</code> ).
 */
export const Katal = registerUnit(
  Si(
    Unit.createAlternate<"CatalyticActivity">(
      "Katal",
      "kat",
      UnitDivide.amountOfSubstanceByDuration("Katal", Mole, Second)
    )
  )
);

/////////////////
/// SI PREFIXES //
/////////////////

function Giga<T extends Quantity>(name: string, u: Unit.Unit<T>): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10, 9), u);
}

function Mega<T extends Quantity>(name: string, u: Unit.Unit<T>): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10, 6), u);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>3</sup></code>
 * @param unit Any unit.
 * @returns <code>unit.multiply(1e3)</code> .
 */
function Kilo<T extends Quantity>(
  name: string,
  unit: Unit.Unit<T>
): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10.0, 3), unit);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>2</sup></code>.
 * @param unit any unit.
 * @returns <code>unit.multiply(1e2)</code> .
 */
function Hecto<T extends Quantity>(
  name: string,
  unit: Unit.Unit<T>
): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10, 2), unit);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>-1</sup></code>.
 * @param unit any unit.
 * @return <code>unit.multiply(1e-1)</code>.
 */
function Deci<T extends Quantity>(
  name: string,
  unit: Unit.Unit<T>
): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10, -1), unit);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>-2</sup></code>.
 * @param unit any unit.
 * @returns <code>unit.multiply(1e-2)</code> .
 */
function Centi<T extends Quantity>(
  name: string,
  unit: Unit.Unit<T>
): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10, -2), unit);
}

/**
 * Returns the specified unit multiplied by the factor <code>10<sup>-3</sup></code>.
 * @param unit any unit. @return <code>unit.multiply(1e-3)</code> .
 */
function Milli<T extends Quantity>(
  name: string,
  unit: Unit.Unit<T>
): Unit.Unit<T> {
  return Unit.timesNumber(name, Math.pow(10, -3), unit);
}

function Si<T extends Quantity>(toAdd: Unit.Unit<T>): Unit.Unit<T> {
  // TODO
  return toAdd;
}

function Squared(name: string, u: Unit.Unit<q.Length>): Unit.Unit<q.Area> {
  return UnitTimes.lengthByLength(name, u, u);
  // TODO was return u.Times <q.Area> (u);
}

function Cubed(name: string, u: Unit.Unit<q.Length>): Unit.Unit<q.Volume> {
  const area = UnitTimes.lengthByLength(name, u, u);
  return UnitTimes.areaByLength(name, area, u);
  // TODO was return u.Times < IArea > (u).Times < IVolume > (u);
}

////////////////////////////////////////////////////////////////////////////
/// END: System of Units - SI
////////////////////////////////////////////////////////////////////////////

/// Alternative Quantities for Humidity
// export const HumidityFactor = _register(Unit.createProductUnit<q.RelativeHumidity>("RelativeHumidity", []), "r.H. factor");
// export const HumidityFactor = _register(Unit.createAlternate<"RelativeHumidity">("r.H.", One), "r.H. factor");
export const HumidityFactor = registerUnit(
  Unit.createBase("HumidityFactor", "RelativeHumidity", "r.H."),
  "r.H. factor"
);

/** Factor of humidity, eg., 0.01 means 1% */
export const PercentHumidity = registerUnit(
  Unit.divideNumber("PercentHumidity", 100.0, HumidityFactor),
  "% r.H."
);

/** Percent of humidity, eg., 10.0 means 10% */
export const CelsiusWet = registerUnit(
  Unit.createBase("CelsiusWet", "WetTemperature", "wb°C"),
  "wb°C"
);
export const FahrenheitWet = registerUnit(
  Unit.minus(
    "FahrenheitWet",
    32.0,
    Unit.timesNumber("", 5.0 / 9.0, CelsiusWet)
  ),
  "wb°F"
);
export const KelvinWet = registerUnit(
  Unit.minus("KelvinWet", 273.15, CelsiusWet),
  "wb°K"
);
export const CelsiusDewPoint = registerUnit(
  Unit.createBase("CelsiusDewPoint", "DewPointTemperature", "dp°C"),
  "dp°C"
);
export const FahrenheitDewPoint = registerUnit(
  Unit.minus(
    "FahrenheitDewPoint",
    32.0,
    Unit.timesNumber("", 5.0 / 9.0, CelsiusDewPoint)
  ),
  "dp°F"
);
export const KelvinDewPoint = registerUnit(
  Unit.minus("KelvinDewPoint", 273.15, CelsiusDewPoint),
  "dp°K"
);

/// Mass
export const PoundLb = registerUnit(
  Unit.divideNumber("PoundLb", 100000000.0 / 45359237.0, Kilogram),
  "lb"
);

// http://www.wolframalpha.com/input/?i=kg
export const Grain = registerUnit(
  Unit.divideNumber("Grain", 100000000000.0 / 6479891.0, Kilogram),
  "gr"
);

// http://www.wolframalpha.com/input/?i=grain
export const Slug = registerUnit(
  Unit.timesNumber("Slug", 14.5939, Kilogram),
  "slug"
);
export const Tonne = registerUnit(
  Unit.timesNumber("Tonne", 1000.0, Kilogram),
  "t"
);
export const MilliGram = registerUnit(Milli("MilliGram", Gram), "mg");

// Per mass
export const OnePerKilogram = registerUnit(
  UnitDivide.dimensionlessByMass("OnePerKilogram", One, Kilogram),
  "/kg"
);
export const OnePerPoundLb = registerUnit(
  UnitDivide.dimensionlessByMass("OnePerPoundLb", One, PoundLb),
  "/lb"
);

// Length
export const Foot = registerUnit(Unit.timesNumber("Foot", 0.3048, Meter), "ft");
export const Yard = registerUnit(Unit.timesNumber("Yard", 3.0, Foot), "yd");
export const Inch = registerUnit(Unit.divideNumber("Inch", 12.0, Foot), "in");
export const Mile = registerUnit(Unit.timesNumber("Mile", 5280.0, Foot), "mi");
export const Decimeter = registerUnit(Deci("Decimeter", Meter), "dm");

// Temperature
export const Rankine = registerUnit(
  Unit.divideNumber("Rankine", 9.0, Unit.timesNumber("", 5.0, Kelvin)),
  "Rankine"
);
export const Fahrenheit = registerUnit(
  Unit.plus(
    "Fahrenheit",
    459.67,
    Unit.divideNumber("", 9.0, Unit.timesNumber("", 5.0, Kelvin))
  ),
  "°F"
);

// Delta temperature
export const DeltaCelsius = registerUnit(
  Unit.createBase("DeltaCelsius", "DeltaTemperature", "°C"),
  "°C"
);
export const DeltaFahrenheit = registerUnit(
  Unit.timesNumber("DeltaFahrenheit", 5.0 / 9.0, DeltaCelsius),
  "°F"
);

// Delta temperature
export const DeltaCelsiusDewPoint = registerUnit(
  Unit.createBase("DeltaCelsiusDewPoint", "DeltaDewPointTemperature", "dp°C"),
  "dp°C"
);
export const DeltaFahrenheitDewPoint = registerUnit(
  Unit.timesNumber("DeltaFahrenheitDewPoint", 5.0 / 9.0, DeltaCelsiusDewPoint),
  "dp°F"
);

// Duration / Time
export const Minute = registerUnit(
  Unit.timesNumber("Minute", 60.0, Second),
  "min"
);
export const Hour = registerUnit(Unit.timesNumber("Hour", 60.0, Minute), "h");
export const Day = registerUnit(Unit.timesNumber("Day", 24.0, Hour), "days");
export const Week = registerUnit(Unit.timesNumber("Week", 7.0, Day), "weeks");
export const Year = registerUnit(
  Unit.timesNumber("Year", 8760.0, Hour),
  "year"
);
export const MilliSecond = registerUnit(Milli("MilliSecond", Second), "ms");

// Frequency
export const RevolutionsPerMinute = registerUnit(
  Unit.createAlternate<"Frequency">(
    "RevolutionsPerMinute",
    "rpm",
    UnitDivide.dimentionlessByDuration("", One, Minute)
  ),
  "rpm"
);
export const RevolutionsPerHour = registerUnit(
  Unit.createAlternate<"Frequency">(
    "RevolutionsPerHour",
    "rph",
    UnitDivide.dimentionlessByDuration("", One, Hour)
  ),
  "rph"
);

/// Area
export const SquareInch = registerUnit(Squared("SquareInch", Inch), "in²");
export const SquareFeet = registerUnit(Squared("SquareFeet", Foot), "ft²");
export const SquareMillimeter = registerUnit(
  Squared("SquareMillimeter", Millimeter),
  "mm²"
);
export const SquareCentimeter = registerUnit(
  Squared("SquareCentimeter", CentiMeter),
  "cm²"
);
export const SquareDecimeter = registerUnit(
  Squared("SquareDecimeter", Decimeter),
  "dm²"
);

// Angle
export const Degrees = registerUnit(
  Unit.timesNumber("Degrees", Math.PI / 180.0, Radian),
  "°"
);

// Volume
export const CubicCentiMeter = registerUnit(
  Cubed("CubicCentiMeter", CentiMeter),
  "cm³"
);
export const CubicInch = registerUnit(Cubed("CubicInch", Inch), "in³");
export const CubicFeet = registerUnit(Cubed("CubicFeet", Foot), "ft³");
export const HundredCubicFeet = registerUnit(
  Unit.timesNumber("HundredCubicFeet", 100.0, CubicFeet),
  "100 ft³"
);
export const Liter = registerUnit(
  Unit.divideNumber("Liter", 1000.0, CubicMeter),
  "L"
);
export const MilliLiter = registerUnit(Milli("MilliLiter", Liter), "ml");
export const Gallon = registerUnit(
  Unit.timesNumber("Gallon", 3.785, Liter),
  "gal"
);

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
  Unit.createAlternate<"SoundPowerLevel">(
    "DecibelLw",
    "dB",
    UnitTimes.dimensionlessByDimensionless("", One, One) as Unit.Unit<any>
  ),
  "dB"
);

// Sound pressure level
export const Decibel = registerUnit(
  Unit.createAlternate<"SoundPressureLevel">(
    "Decibel",
    "dB",
    UnitTimes.dimensionlessByDimensionless("", One, One)
  ),
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
  )
);
export const CubicFeetPerMinutePerSquareRootInchOfWaterColumn = registerUnit(
  UnitDivide.volumeFlowBySquareRootPressure(
    "CubicFeetPerMinutePerSquareRootInchOfWaterColumn",
    CubicFeetPerMinute,
    SquareRootInchOfWaterColumn
  )
);

export function isUnit(unit: string): boolean {
  return _stringToUnit[unit.trim().toLowerCase()] !== undefined;
}

export function getUnitFromString<T extends Quantity>(
  unitString: string,
  onError?: (unitString: string) => Unit.Unit<T>
): Unit.Unit<T> {
  const unit = _stringToUnit[unitString.trim().toLowerCase()];
  if (unit === undefined) {
    if (!onError) {
      throw new Error("Unknown unit " + unitString);
    } else {
      return onError(unitString);
    }
  }
  return unit as Unit.Unit<T>;
}

export function getStringFromUnit(unit: Unit.Unit): string {
  return unit.name;
}

export function getQuantityTypeFromString(quantityString: string): string {
  if (_quantityToUnits[quantityString] === undefined) {
    throw new Error(`Unknown quantity '${quantityString}'`);
  }
  return quantityString;
}

export function getStringFromQuantityType(quantity: string): string {
  return quantity;
}

export function getUnitsForQuantity(quantityType: string): Array<Unit.Unit> {
  const units = _quantityToUnits[quantityType];
  if (units === undefined) {
    throw new Error("Unknown quantity type");
  }
  return units;
}

export function getAllUnits(): Array<Unit.Unit> {
  const unitsArray = Object.keys(_stringToUnit).map(key => _stringToUnit[key]);
  return unitsArray;
}

export function getAllQuantities(): Array<string> {
  const quantityArray = Object.keys(_quantityToUnits);
  return quantityArray;
}

export function registerUnit<T extends Quantity>(
  unit: Unit.Unit<T>,
  label?: string
): Unit.Unit<T> {
  if (label) {
    UnitName.registerLabel(label, unit);
  }
  const lowerName = unit.name.toLowerCase();
  _unitToString[lowerName] = lowerName;
  _stringToUnit[lowerName] = unit;
  if (_quantityToUnits[unit.quantity] === undefined) {
    _quantityToUnits[unit.quantity] = [];
  }
  _quantityToUnits[unit.quantity].push(unit);

  return unit;
}
