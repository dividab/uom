import { createUnitFormat } from "../unit-registry";

// tslint:disable:variable-name

export const Joule = createUnitFormat("J", "SI", 2);

// Energy
export const NewtonMeter = createUnitFormat("Nm", "SI", 0);

export const Kilojoule = createUnitFormat("kJ", "SI", 2);

export const Megajoule = createUnitFormat("MJ", "SI", 0);

export const KiloWattHour = createUnitFormat("kWh", "SI", 1);

export const MegaWattHour = createUnitFormat("MWh", "SI", 0);

export const GigaWattHour = createUnitFormat("GWh", "SI", 0);

export const WattHour = createUnitFormat("Wh", "SI", 2);

export const WattSecond = createUnitFormat("Ws", "SI", 4);

export const Btu = createUnitFormat("BTU", "IP", 3);

export const KiloBtu = createUnitFormat("MBTU", "IP", 3);

export const MegaBtu = createUnitFormat("MMBTU", "IP", 3);

export const Therm = createUnitFormat("Therm", "IP", 3);
