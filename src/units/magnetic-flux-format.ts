import { createUnitFormat } from "../unit-registry";

// tslint:disable:variable-name

/**
 * The derived unit for magnetic flux ( <code>Wb</code> ).
 * One Weber is equal to the magnetic flux that in linking a circuit of one turn produces in it an
 * electromotive force of one volt as it is uniformly reduced to zero within one second.
 * It is named after the German physicist Wilhelm Eduard Weber (1804-1891).
 */
export const Weber = createUnitFormat("Wb", undefined, 2);
