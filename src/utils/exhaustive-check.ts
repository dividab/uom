// See https://basarat.gitbooks.io/typescript/content/docs/types/discriminated-unions.html
// and https://github.com/Microsoft/TypeScript/issues/6155
export function exhaustiveCheck(
  x: never,
  throwError: boolean = false,
  match: string = ""
): never {
  //tslint:disable-line
  if (throwError) {
    throw new Error(
      `ERROR! Trying to match '${match}', the value ${JSON.stringify(
        x
      )} should be of type never.`
    ); //tslint:disable-line
  }
  return x;
}
