import { Unit } from "../core";
import { Length, Volume } from "./units";
import * as UnitTimes from "./unit-times";

export function Cubed(name: string, u: Unit.Unit<Length>): Unit.Unit<Volume> {
  const area = UnitTimes.lengthByLength(name, u, u);
  return UnitTimes.areaByLength(name, area, u);
  // TODO was return u.Times < IArea > (u).Times < IVolume > (u);
}
