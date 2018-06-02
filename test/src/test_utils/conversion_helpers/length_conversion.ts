// tslint:disable no-class

export class LengthConversion {
  static Cm2Km(cm: number): number {
    return cm / 100000.0;
  }

  static Cm2M(cm: number): number {
    return cm / 100.0;
  }

  static Cm2Ft(cm: number): number {
    return LengthConversion.M2Ft(LengthConversion.Cm2M(cm));
  }

  static In2Cm(inch: number): number {
    return LengthConversion.M2Cm(LengthConversion.In2M(inch));
  }

  static In2M(inch: number): number {
    return LengthConversion.Ft2M(LengthConversion.In2Ft(inch));
  }

  static In2Km(inch: number): number {
    return LengthConversion.M2Km(LengthConversion.In2M(inch));
  }

  static Yd2In(yd: number): number {
    return LengthConversion.Ft2In(LengthConversion.Yd2Ft(yd));
  }

  static Yd2Km(yd: number): number {
    return LengthConversion.M2Km(LengthConversion.Yd2M(yd));
  }

  static Yd2Cm(yd: number): number {
    return LengthConversion.M2Cm(LengthConversion.Yd2M(yd));
  }

  static Yd2M(yd: number): number {
    return LengthConversion.Ft2M(LengthConversion.Yd2Ft(yd));
  }

  static Yd2Ft(yd: number): number {
    return yd * 3;
  }

  static In2Yd(inch: number): number {
    return LengthConversion.Ft2Yd(LengthConversion.In2Ft(inch));
  }

  static Ft2Km(ft: number): number {
    return LengthConversion.M2Km(LengthConversion.Ft2M(ft));
  }

  static Ft2Cm(ft: number): number {
    return LengthConversion.M2Cm(LengthConversion.Ft2M(ft));
  }

  static In2Ft(inch: number): number {
    return inch / 12.0;
  }

  static Ft2M(ft: number): number {
    return ft * 0.3048;
  }

  static M2Ft(m: number): number {
    return m / 0.3048;
  }

  static M2Km(m: number): number {
    return m / 1000.0;
  }

  static Ft2In(ft: number): number {
    return ft * 12;
  }

  static Ft2Yd(ft: number): number {
    return ft / 3.0;
  }

  static Cm2Yd(cm: number): number {
    return LengthConversion.Ft2Yd(
      LengthConversion.M2Ft(LengthConversion.Cm2M(cm))
    );
  }

  static Km2Cm(km: number): number {
    return LengthConversion.M2Cm(LengthConversion.Km2M(km));
  }

  static Km2M(km: number): number {
    return km * 1000.0;
  }

  static Km2Ft(km: number): number {
    return LengthConversion.M2Ft(LengthConversion.Km2M(km));
  }

  static Km2In(km: number): number {
    return LengthConversion.Ft2In(
      LengthConversion.M2Ft(LengthConversion.Km2M(km))
    );
  }

  static Km2Yd(km: number): number {
    return LengthConversion.M2Yd(LengthConversion.Km2M(km));
  }

  static M2Cm(m: number): number {
    return m * 100;
  }

  static M2In(m: number): number {
    return LengthConversion.Ft2In(LengthConversion.M2Ft(m));
  }

  static M2Yd(m: number): number {
    return LengthConversion.Ft2Yd(LengthConversion.M2Ft(m));
  }

  static Cm2In(cm: number): number {
    return LengthConversion.M2In(LengthConversion.Cm2M(cm));
  }
}
