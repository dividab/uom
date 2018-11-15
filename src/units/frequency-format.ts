import { createUnitFormat } from "../unit-registry";

// tslint:disable:variable-name

export const Hertz = createUnitFormat("Hz", "SI", 2);

/**
 * The derived unit for activity of a radionuclide ( <code>Bq</code> ).
 * One becquerel is the radiation caused by one disintegration per second.
 * It is named after the French physicist, Antoine-Henri Becquerel (1852-1908).
 */
export const Becquerel = createUnitFormat("Bq", undefined, 0);

// Frequency
export const RevolutionsPerMinute = createUnitFormat("rpm", undefined, 2);

export const RevolutionsPerHour = createUnitFormat("rph", undefined, 1);
