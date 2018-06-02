// tslint:disable no-class

export class VolumeFlowConversion {
  static M3PerSec2M3PerHour(m3PerSec: number): number {
    return m3PerSec * 3600.0;
  }

  static M3PerHour2M3PerSec(m3PerHour: number): number {
    return m3PerHour / 3600.0;
  }
}
