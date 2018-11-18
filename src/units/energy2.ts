import * as UnitTimes from "../unit-times";
import { Second } from "./base-units";
import { KiloWatt, MegaWatt, GigaWatt, Watt } from "./power";
import { Hour } from "./duration";

// tslint:disable:variable-name

// These units have a dependency on power, but power has a dependency on energy so we need a separate module for them.

export const KiloWattHour = UnitTimes.powerByDuration(
  "KiloWattHour",
  KiloWatt,
  Hour
);
export const MegaWattHour = UnitTimes.powerByDuration(
  "MegaWattHour",
  MegaWatt,
  Hour
);
export const GigaWattHour = UnitTimes.powerByDuration(
  "GigaWattHour",
  GigaWatt,
  Hour
);
export const WattHour = UnitTimes.powerByDuration("WattHour", Watt, Hour);
export const WattSecond = UnitTimes.powerByDuration("WattSecond", Watt, Second);
