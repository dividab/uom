import * as test from "tape";

export interface UtilsTest {
  readonly only?: boolean;
  readonly skip?: boolean;
}

/**
 * Helper function to enable only one test to be run
 * in an array of test data
 */
export function onlySkip<T extends UtilsTest>(
  tests: ReadonlyArray<T>
): ReadonlyArray<T> {
  const skips = tests.filter(t => !!!t.skip);
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
  theTest: test.Test,
  failMsg: string = `closeTo, expected: ${expected}, actual: ${actual}, delta: ${delta}`,
  passMsg: string = "closeTo"
) {
  const actualDelta = Math.abs(actual - expected);
  if (actualDelta > delta) {
    theTest.fail(failMsg);
  } else {
    theTest.pass(passMsg);
  }
  return false;
}
