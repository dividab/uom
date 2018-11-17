import { createUnitFormat } from "../format";
import * as Pressure from "./pressure";

// tslint:disable:variable-name

export const Pascal = createUnitFormat(
  "Pa",
  "SI",
  0,
  Pressure.InchOfWaterColumn
);

// Pressure
export const KiloPascal = createUnitFormat(
  "kPa",
  "SI",
  2,
  Pressure.FeetOfWaterColumn
);

export const HectoPascal = createUnitFormat("hPa", "SI", 2);

export const NewtonPerSquareMeter = createUnitFormat("N/m²", "SI", 0);

export const PoundForcePerSquareInch = createUnitFormat(
  "psi",
  "IP",
  2,
  Pressure.KiloPascal
);

export const PoundForcePerSquareFoot = createUnitFormat(
  "psf",
  "SI",
  2,
  Pressure.PoundForcePerSquareFoot
);

export const InchOfMercury = createUnitFormat("in HG", "IP", 2);

export const InchOfWaterColumn = createUnitFormat(
  "in WC",
  "IP",
  2,
  Pressure.Pascal
);

export const FeetOfWaterColumn = createUnitFormat(
  "ft WC",
  "IP",
  2,
  Pressure.KiloPascal
);

export const Bar = createUnitFormat("bar", "SI", 2);

export const MilliBar = createUnitFormat(
  "mbar",
  "SI",
  2,
  Pressure.InchOfWaterColumn
);
