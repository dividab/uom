function to64BitBinaryString(num: number) {
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

function toFloat54(binary: string) {
  const significantBinary = binary.substr(0, 54);
  const sign = parseInt(significantBinary[0], 10);
  const exponent = parseInt(significantBinary.substr(1, 11), 2);

  const mantissaStr = significantBinary.substr(12);
  let mantissa = 0;
  for (let i = 0; i < mantissaStr.length; i++) {
    const bin = mantissaStr[i] === "0" ? 0 : 1;
    mantissa += bin * Math.pow(2, -(i + 1));
  }

  return Math.pow(-1, sign) * (1 + mantissa) * Math.pow(2, exponent - 1023);
}

export function numberToFloat54(num: number) {
  return toFloat54(to64BitBinaryString(num));
}
