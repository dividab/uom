import { createUnitFormat } from "../format";
import * as MassFlow from "../units/mass-flow";

// tslint:disable:variable-name

// MassFlow
export const KilogramPerSecond = createUnitFormat("kg/s", "SI", 2);

export const GramPerSecond = createUnitFormat("g/s", "SI", 2);

export const GramPerHour = createUnitFormat("g/h", "SI", 2);

export const KilogramPerHour = createUnitFormat(
  "kg/h",
  "SI",
  2,
  MassFlow.PoundLbPerHour
);

export const SlugPerSecond = createUnitFormat(
  "slug/s",
  "IP",
  2,
  MassFlow.KilogramPerSecond
);

export const SlugPerHour = createUnitFormat(
  "slug/h",
  "IP",
  2,
  MassFlow.KilogramPerHour
);

export const PoundLbPerHour = createUnitFormat(
  "lb/h",
  "IP",
  1,
  MassFlow.KilogramPerHour
);

export const GrainPerHour = createUnitFormat("gr/h", "IP", 2);

export const StandardCubicMeterPerHour = createUnitFormat(
  "Sm³/h",
  "SI",
  0,
  MassFlow.StandardCubicFeetPerMinute
);

export const StandardCubicFeetPerMinute = createUnitFormat(
  "SCFM",
  "IP",
  0,
  MassFlow.StandardCubicMeterPerHour
);

export const StandardCubicMeterPerSecond = createUnitFormat("Sm³/s", "SI", 2);

export const StandardLiterPerSecond = createUnitFormat("Sl/s", "IP", 2);
