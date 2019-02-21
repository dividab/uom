import * as FloatN from "./floatN";

/**
 * Compare two numbers with same or different number of decimals. If
 * the numbers have different amount of decimals they are both "padded"
 * to use the same number as the one with the most decimals.
 *
 * @param  {number} first                       - First number to compare.
 * @param  {number} second                      - Second number to compare.
 * @param  {number} firstDecimals               - Number of decimals for first number.
 * @param  {number} secondDecimals              - Number of decimals for second number.
 * @param  {FloatN | undefined} floatPrecision  - The bit precision.
 * @return {number}                             - 0, -1 or 1 depending on if the numbers are
 *                                                  0  = equal
 *                                                  -1 = first < second
 *                                                  1  = second > first
 *
 */
export function compareNumbers(
  first: number,
  second: number,
  firstDecimals: number,
  secondDecimals: number,
  floatPrecision?: FloatN.FloatN
): number {
  const d = Math.max(firstDecimals, secondDecimals); // use the highest number of decimals

  let f = Math.round(first * Math.pow(10, d));
  let s = Math.round(second * Math.pow(10, d));

  if (floatPrecision !== undefined && floatPrecision !== null) {
    f = numberToFloatNNumber(f, floatPrecision);
    s = numberToFloatNNumber(s, floatPrecision);
  }

  if (f === s) {
    return 0;
  }
  if (f < s) {
    return -1;
  } else {
    return 1;
  }
}

function numberToFloatNNumber(num: number, floatN: FloatN.FloatN) {
  return toFloatNNumber(to64BitBinaryString(num), floatN);
}

function to64BitBinaryString(num: number): string {
  const numberWriter = new DataView(new ArrayBuffer(8));
  numberWriter.setFloat64(0, num, false);

  let bitStr = "";
  for (let i = 0; i < 8; i++) {
    let bits = numberWriter.getUint8(i).toString(2);
    if (bits.length < 8) {
      let subBits = "";
      for (let j = 0; j < 8 - bits.length; j++) {
        subBits += "0";
      }
      bits = subBits + bits;
    }
    bitStr += bits;
  }
  return bitStr;
}

function toFloatNNumber(binary: string, floatN: FloatN.FloatN): number {
  const sign = parseInt(binary[0], 10);
  const exponent = parseInt(binary.substr(1, 11), 2);

  const mantissaStr = binary.substr(12, floatN.bitPrecision);
  let mantissa = 0;
  for (let i = 0; i < mantissaStr.length; i++) {
    const bin = mantissaStr[i] === "0" ? 0 : 1;
    mantissa += bin * Math.pow(2, -(i + 1));
  }

  return Math.pow(-1, sign) * (1 + mantissa) * Math.pow(2, exponent - 1023);
}
