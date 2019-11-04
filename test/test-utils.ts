import { ConversionTest } from "./data/conversion-test";

/**
 * Helper function to enable only one test to be run
 * in an array of test data
 */
export function onlySkip(
  tests: ReadonlyArray<ConversionTest>
): ReadonlyArray<ConversionTest> {
  const skips = tests.filter(t => !t.skip);
  const onlys = skips.filter(t => t.only === true);
  if (onlys.length > 0) {
    return onlys;
  }
  return skips;
}

export function closeTo(
  actual: number,
  expected: number,
  delta: number,
  theTest: jest.DoneCallback,
  failMsg: string = `closeTo, expected: ${expected}, actual: ${actual}, delta: ${delta}`
  // passMsg: string = "closeTo"
): boolean {
  const actualDelta = Math.abs(actual - expected);
  if (actualDelta > delta) {
    theTest.fail(failMsg);
  } else {
    // theTest.pass(passMsg);
  }
  return false;
}
