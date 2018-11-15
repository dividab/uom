import { createUnitFormat } from "../unit-registry";

// tslint:disable:variable-name

export const CelsiusWet = createUnitFormat("wb°C", "SI", 2, FahrenheitWet);

export const FahrenheitWet = createUnitFormat("wb°F", "SI", 1, CelsiusWet);

export const KelvinWet = createUnitFormat("wb°K");
