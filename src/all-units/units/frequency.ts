import { BaseUnits } from "../../core";
import * as UnitDivide from "../unit-divide";
import { One } from "./dimensionless";
import { Minute, Hour } from "./duration";

export type Frequency = "Frequency";

/**
 * The derived unit for frequency ( <code>Hz</code> ).
 * A unit of frequency equal to one cycle per second. After Heinrich Rudolf Hertz (1857-1894),
 * German physicist who was the first to produce radio waves artificially.
 */
export const Hertz = UnitDivide.dimentionlessByDuration(
  "Hertz",
  One,
  BaseUnits.Second
);

/**
 * The derived unit for activity of a radionuclide ( <code>Bq</code> ).
 * One becquerel is the radiation caused by one disintegration per second.
 * It is named after the French physicist, Antoine-Henri Becquerel (1852-1908).
 */
export const Becquerel = UnitDivide.dimentionlessByDuration(
  "Becquerel",
  One,
  BaseUnits.Second
);

// Frequency
export const RevolutionsPerMinute = UnitDivide.dimentionlessByDuration(
  "RevolutionsPerMinute",
  One,
  Minute
);

export const RevolutionsPerHour = UnitDivide.dimentionlessByDuration(
  "RevolutionsPerHour",
  One,
  Hour
);
