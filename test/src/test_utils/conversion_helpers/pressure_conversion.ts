// tslint:disable no-class

export class PressureConversion {
  static Pa2KPa(pa: number): number {
    return pa / 1000.0;
  }

  static KPa2Pa(kPa: number): number {
    return kPa * 1000.0;
  }
}
