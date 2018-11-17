import { createUnitFormat } from "../format";

// tslint:disable:variable-name

export const Gray = createUnitFormat("Gy", "SI", 2);

export const Sievert = createUnitFormat("Sv", "SI", 2);

// Specific energy
export const KilojoulePerKilogram = createUnitFormat("kJ/kg", "SI", 2);

export const KiloWattHourPerKilogram = createUnitFormat("kWh/kg", "SI", 2);

export const BtuPerPoundLb = createUnitFormat("BTU/lb", "IP", 3);
