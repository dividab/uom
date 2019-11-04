import * as Unit from "../unit";

export type Discrete = "Discrete";

// Discrete
// export const Integer = _register(Unit.createProductUnit<q.Discrete>("Discrete", []), " ");
export const Integer = Unit.createBase("Integer", "Discrete", " ");
