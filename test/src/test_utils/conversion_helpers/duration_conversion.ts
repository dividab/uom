// tslint:disable no-class

export class DurationConversion {
  static S2M(s: number): number {
    return s / 60.0;
  }

  static S2H(s: number): number {
    return DurationConversion.M2H(DurationConversion.S2M(s));
  }

  static M2S(m: number): number {
    return m * 60.0;
  }

  static M2H(m: number): number {
    return m / 60.0;
  }

  static H2S(h: number): number {
    return DurationConversion.M2S(DurationConversion.H2M(h));
  }

  static H2M(h: number): number {
    return h * 60.0;
  }
}
