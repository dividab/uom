import * as Unit from "../unit";
import { Second } from "./base-units";
import { Milli } from "../unit-prefix";

// tslint:disable:variable-name

// Duration / Time
export const Minute = Unit.timesNumber("Minute", 60.0, Second);
export const Hour = Unit.timesNumber("Hour", 60.0, Minute);
export const Day = Unit.timesNumber("Day", 24.0, Hour);
export const Week = Unit.timesNumber("Week", 7.0, Day);
export const Year = Unit.timesNumber("Year", 8760.0, Hour);
export const MilliSecond = Milli("MilliSecond", Second);
