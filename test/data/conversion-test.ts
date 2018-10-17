import * as Unit from "../../src/unit";
import { Quantity } from "../../src/quantity";

export interface ConversionTest<TQuantity extends Quantity = Quantity> {
  readonly name: string;
  readonly only?: boolean;
  readonly skip?: boolean;
  readonly fromUnit: Unit.Unit<TQuantity>;
  readonly fromValue: number;
  readonly toUnit: Unit.Unit<TQuantity>;
  readonly toValue: number;
  readonly delta?: number;
}
