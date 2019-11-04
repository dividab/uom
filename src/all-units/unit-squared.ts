import { Unit } from "../core";
import { Length, Area } from "./units";
import * as UnitTimes from "./unit-times";

export function Squared(name: string, u: Unit.Unit<Length>): Unit.Unit<Area> {
  return UnitTimes.lengthByLength(name, u, u);
  // TODO was return u.Times <q.Area> (u);
}
