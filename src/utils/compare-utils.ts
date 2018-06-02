/**
 * Compare two numbers with same or different number of decimals. If
 * the numbers have different amount of decimals they are both "padded"
 * to use the same number as the one with the most decimals.
 *
 * @param  {number} first          - First number to compare.
 * @param  {number} second         - Second number to compare.
 * @param  {number} firstDecimals  - Number of decimals for first number.
 * @param  {number} secondDecimals - Number of decimals for second number.
 * @return {number}                - 0, -1 or 1 depending on if the numbers are
 *                                      0  = equal
 *                                      -1 = first < second
 *                                      1  = second > first
 *
 */
export function compareNumbers(
  first: number,
  second: number,
  firstDecimals: number,
  secondDecimals: number
): number {
  const d = Math.max(firstDecimals, secondDecimals); // use the highest number of decimals

  const f = Math.round(first * Math.pow(10, d));
  const s = Math.round(second * Math.pow(10, d));

  if (f === s) {
    return 0;
  }
  if (f < s) {
    return -1;
  } else {
    return 1;
  }
}

export function compareIgnoreCase(a: string, b: string): number {
  return a.toLowerCase().localeCompare(b.toLowerCase());
}

export function arraysEqual<T>(array1: Array<T>, array2: Array<T>): boolean {
  // if the other array is a falsy value, return
  if (!array2) {
    return false;
  }

  // compare lengths - can save a lot of time
  if (array1.length !== array2.length) {
    return false;
  }
  let l = array1.length;
  for (let i = 0; i < l; i++) {
    // Check if we have nested arrays
    if (array1[i] instanceof Array && array2[i] instanceof Array) {
      // recurse into the nested arrays
      // tslint:disable-next-line:no-any
      if (!arraysEqual<any>(array1[i] as any, array2[i] as any)) {
        //tslint:disable-line
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
}
