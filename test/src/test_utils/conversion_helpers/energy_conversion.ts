// tslint:disable no-class

export class EnergyConversion {
  static J2Kj(j: number): number {
    return j / 1000.0;
  }

  static Kj2J(kj: number): number {
    return kj * 1000.0;
  }
}
