import * as Unit from "../unit";

export type Text = "Text";

// tslint:disable:variable-name

// Text
// export const Text = _register(Unit.createProductUnit<q.Text>("Text", []), " ");
export const Text = Unit.createBase("Text", "Text", " ");
