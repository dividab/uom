import { createUnitFormat } from "../format";
import * as Temperature from "../units/temperature";

// tslint:disable:variable-name

export const Celsius = createUnitFormat("°C", "SI", 1, Temperature.Fahrenheit);

// Temperature
export const Rankine = createUnitFormat("Rankine", undefined, 2);

export const Fahrenheit = createUnitFormat("°F", "IP", 1, Temperature.Celsius);
