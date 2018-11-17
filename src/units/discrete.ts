import * as Unit from "../unit";

// tslint:disable:variable-name

// Discrete
// export const Integer = _register(Unit.createProductUnit<q.Discrete>("Discrete", []), " ");
export const Integer = Unit.createBase("Integer", "Discrete", " ");
