import { Unit } from "../../src/core";

export interface ConversionTest<TQuantity = unknown> {
  readonly name: string;
  readonly only?: boolean;
  readonly skip?: boolean;
  readonly fromUnit: Unit.Unit<TQuantity>;
  readonly fromValue: number;
  readonly toUnit: Unit.Unit<TQuantity>;
  readonly toValue: number;
  readonly delta?: number;
}
