// tslint:disable no-class

export class VolumeConversion {
  static M32L(m3: number): number {
    return m3 * 1000.0;
  }

  static L2M3(l: number): number {
    return l / 1000.0;
  }
}
