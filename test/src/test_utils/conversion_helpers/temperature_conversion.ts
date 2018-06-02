// tslint:disable no-class

export class TemperatureConversion {
  static K2C(k: number): number {
    return k - 273.15;
  }

  static K2R(k: number): number {
    return k * 9.0 / 5.0;
  }

  static K2F(k: number): number {
    return TemperatureConversion.R2F(TemperatureConversion.K2R(k));
  }

  static C2K(c: number): number {
    return c + 273.15;
  }

  static C2R(c: number): number {
    return TemperatureConversion.K2R(TemperatureConversion.C2K(c));
  }

  static C2F(c: number): number {
    return TemperatureConversion.R2F(TemperatureConversion.C2R(c));
  }

  static R2K(r: number): number {
    return r * 5.0 / 9.0;
  }

  static R2C(r: number): number {
    return TemperatureConversion.K2C(TemperatureConversion.R2K(r));
  }

  static R2F(r: number): number {
    return r - 459.67;
  }

  static F2K(f: number): number {
    return TemperatureConversion.R2K(TemperatureConversion.F2R(f));
  }

  static F2C(f: number): number {
    return TemperatureConversion.R2C(TemperatureConversion.F2R(f));
  }

  static F2R(f: number): number {
    return f + 459.67;
  }
}
