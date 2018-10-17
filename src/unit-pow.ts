import * as Unit from "./unit";
import * as q from "./quantity";

export function squareRootPressure(
  name: string,
  unit: Unit.Unit<q.Pressure>
): Unit.Unit<q.SquareRootPressure> {
  return Unit.squareRoot(name, "SquareRootPressure", unit);
}
