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
