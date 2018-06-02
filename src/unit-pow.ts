import * as Unit from "./unit";
import * as q from "./quantity";

export function squareRootPressure(
  unit: Unit.Unit<q.Pressure>
): Unit.Unit<q.SquareRootPressure> {
  return Unit.squareRoot("SquareRootPressure", unit);
}
