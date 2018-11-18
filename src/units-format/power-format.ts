import { createUnitFormat } from "../format";

// tslint:disable:variable-name

export const Watt = createUnitFormat("W", 2);
export const KiloWatt = createUnitFormat("kW", 2);
export const MegaWatt = createUnitFormat("MW", 0);
export const GigaWatt = createUnitFormat("GW", 0);
export const BtuPerHour = createUnitFormat("BTU/h", 0);
export const TonCooling = createUnitFormat("tons", 2);
export const KiloBtuPerHour = createUnitFormat("MBH", 1);
export const HorsePower = createUnitFormat("hp", 1);
export const VoltAmpere = createUnitFormat("VA", 2);
