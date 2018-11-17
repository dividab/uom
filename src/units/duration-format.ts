import { createUnitFormat } from "../format";

// tslint:disable:variable-name

export const Minute = createUnitFormat("min", undefined, 2);

export const Hour = createUnitFormat("h", undefined, 2);

export const Day = createUnitFormat("days", undefined, 0);

export const Week = createUnitFormat("weeks", undefined, 0);

export const Year = createUnitFormat("year", undefined, 0);

export const MilliSecond = createUnitFormat("ms", undefined, 0);
