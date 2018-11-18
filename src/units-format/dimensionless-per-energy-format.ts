import { createUnitFormat } from "../format";

// tslint:disable:variable-name

export const OnePerKiloWattHour = createUnitFormat("/kWh", 2);
export const OnePerBtu = createUnitFormat("/BTU", 2);
export const OnePerMegaBtu = createUnitFormat("/MMBTU", 2);
export const OnePerTherm = createUnitFormat("/Therm", 2);
export const OnePerKilojoule = createUnitFormat("/kJ", 2);
export const OnePerMegajoule = createUnitFormat("/MJ", 0);
export const OnePerJoule = createUnitFormat("/J", 2);
