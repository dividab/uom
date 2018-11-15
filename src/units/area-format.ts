import { createUnitFormat } from "../unit-registry";

import * as Area from "./area";

// tslint:disable:variable-name

/** The metric unit for area quantities ( <code>m²</code> ). */
export const SquareMeter = createUnitFormat("m²", "SI", 2, Area.SquareFeet);

export const SquareInch = createUnitFormat(
  "in²",
  "IP",
  0,
  Area.SquareCentimeter
);

export const SquareFeet = createUnitFormat(
  "ft²",
  "IP",
  0,
  Area.SquareDecimeter
);

export const SquareMillimeter = createUnitFormat("mm²", "SI", 4);

export const SquareCentimeter = createUnitFormat(
  "cm²",
  "SI",
  0,
  Area.SquareInch
);

export const SquareDecimeter = createUnitFormat("dm²", "SI", 2);
