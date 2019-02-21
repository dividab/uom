/**
 * @module FloatN
 */

export type Precision =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51;

export interface FloatN<T extends Precision = Precision> {
  readonly bitPrecision: T;
}

/**
 * Creates a FloatN with the specified number of significant bits used for the numbers mantissa.
 * @param precision {Precision} The number of bits.
 * @returns {FloatN<T>} The created FloatN.
 */
export function create<T extends Precision = Precision>(
  precision: T
): FloatN<T> {
  return {
    bitPrecision: precision
  };
}
