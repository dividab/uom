import { Unit, UnitPrefix, BaseUnits } from "../../core";

export type Duration = "Duration";

// Duration / Time
export const Minute = Unit.timesNumber("Minute", 60.0, BaseUnits.Second);
export const Hour = Unit.timesNumber("Hour", 60.0, Minute);
export const Day = Unit.timesNumber("Day", 24.0, Hour);
export const Week = Unit.timesNumber("Week", 7.0, Day);
export const Year = Unit.timesNumber("Year", 8760.0, Hour);
export const MilliSecond = UnitPrefix.Milli("MilliSecond", BaseUnits.Second);
