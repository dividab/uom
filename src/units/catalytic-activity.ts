import * as UnitDivide from "../unit-divide";
import { Second, Mole } from "./base-units";

export type CatalyticActivity = "CatalyticActivity";

// tslint:disable:variable-name

/**
 * The derived unit for catalytic activity ( <code>kat</code> ).
 */
export const Katal = UnitDivide.amountOfSubstanceByDuration(
  "Katal",
  Mole,
  Second
);
