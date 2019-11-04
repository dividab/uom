import { Unit, UnitPrefix } from "../../core";
import * as UnitDivide from "../unit-divide";
import { Newton } from "./force";
import { SquareMeter } from "./area";

export type Pressure = "Pressure";

/**
 * The derived unit for pressure, stress ( <code>Pa</code> ).
 * One pascal is equal to one newton per square meter.
 * It is named after the French philosopher and mathematician Blaise Pascal (1623-1662).
 */
export const Pascal = UnitDivide.forceByArea("Pascal", Newton, SquareMeter);

// Pressure
export const KiloPascal = UnitPrefix.Kilo("KiloPascal", Pascal);
export const HectoPascal = UnitPrefix.Hecto("HectoPascal", Pascal);
export const NewtonPerSquareMeter = UnitDivide.forceByArea(
  "NewtonPerSquareMeter",
  Newton,
  SquareMeter
);
export const PoundForcePerSquareInch = Unit.divideNumber(
  "PoundForcePerSquareInch",
  1290320000.0,
  Unit.timesNumber("", 8896443230521.0, Pascal)
);
export const PoundForcePerSquareFoot = Unit.timesNumber(
  "PoundForcePerSquareFoot",
  144.0,
  PoundForcePerSquareInch
);
export const DeciPascal = UnitPrefix.Deci("DeciPascal", Pascal);

// http://www.wolframalpha.com/input/?i=psi and select 'Show exact conversions'
export const InchOfMercury = Unit.divideNumber(
  "InchOfMercury",
  152.0,
  Unit.timesNumber("", 514731.0, Pascal)
);

// http://www.wolframalpha.com/input/?i=inHg and select 'Show exact conversions'
export const InchOfWaterColumn = Unit.timesNumber(
  "InchOfWaterColumn",
  249.0889,
  Pascal
);

// http://www.wolframalpha.com/input/?i=inWC
export const FeetOfWaterColumn = Unit.timesNumber(
  "FeetOfWaterColumn",
  2989.067,
  Pascal
);
export const Bar = Unit.timesNumber("Bar", 100000.0, Pascal);
export const MilliBar = UnitPrefix.Milli("MilliBar", Bar);
