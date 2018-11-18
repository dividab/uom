import { createUnitFormat } from "../format";
import * as Power from "../units/power";

// tslint:disable:variable-name

export const Watt = createUnitFormat("W", "SI", 2);

// Power
export const KiloWatt = createUnitFormat("kW", "SI", 2);

export const MegaWatt = createUnitFormat("MW", "SI", 0);

export const GigaWatt = createUnitFormat("GW", "SI", 0);

export const BtuPerHour = createUnitFormat("BTU/h", "IP", 0);

export const TonCooling = createUnitFormat("tons", "IP", 2, Power.KiloWatt);

export const KiloBtuPerHour = createUnitFormat("MBH", "IP", 1);

export const HorsePower = createUnitFormat("hp", "IP", 1);

export const VoltAmpere = createUnitFormat("VA", "SI", 2);
