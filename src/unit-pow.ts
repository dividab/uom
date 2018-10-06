import * as Unit from "./unit";
import * as q from "./quantity";

export function squareRootPressure(unit: q.Pressure): q.SquareRootPressure {
  return Unit.squareRoot("SquareRootPressure", unit);
}
