# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased](https://github.com/dividab/uom/compare/v5.0.0...master)

## [v6.0.0](https://github.com/dividab/uom/compare/v5.0.0...v6.0.0)

- Moved `Format.getUnitsForQuantity` to `UnitMap.getUnitsForQuantity`.
- Moved `Format.getUnitFormat` to `UnitFormat.getUnitFormat`.
- Removed extra paramter in `UnitMap.getUnitsForQuantity`.
- Remove `Format` module.
- Moved `Unit.UnitMap` to `UnitMap.UnitMap`.
- Moved `Unit.UnitLookup` to `UnitMap.UnitLookup`.
- Refactor tests, move to `__tests__` folder

## [v5.0.0](https://github.com/dividab/uom/compare/v4.1.0...v5.0.0) - 2020-10-08

### Changed

- The consumer of the package is responsible for sending in a unit lookup function. See PR [#51](https://github.com/dividab/uom/pull/51).

## [v4.1.0](https://github.com/dividab/uom/compare/v4.0.0...v4.1.0) - 2020-03-29

### Added

- Include typescript source from `src/` in published npm package. See PR [#50](https://github.com/dividab/uom/pull/50) for more info.

## [v4.0.0](https://github.com/dividab/uom/compare/v3.0.0...v4.0.0) - 2020-01-09

### Changed

- The consumer of the package is responsible for sending in units with the correct case. See issue [#48](https://github.com/dividab/uom/issues/48) and PR [#49](https://github.com/dividab/uom/pull/49).

## [v3.0.0](https://github.com/dividab/uom/compare/v2.5.0...v3.0.0) - 2019-11-05

### Changed

- All unit definitions (expect base SI units) moved to separate package [uom-units](https://www.npmjs.com/package/uom-units).
- Passing explicit `UnitMap` and `UnitFormatMap` is now required in Format and Serialize module functions.

## [v2.5.0](https://github.com/dividab/uom/compare/v2.4.0...v2.5.0) - 2019-11-01

### Added

- Added Units `PoundLbPerSecond`, `GrainPerSecond`, `KilogramPerSquareMeterHour`, `GramPerSquareMeterHour`, `GramPerSquareMeterSecond`, `StandardCubicMeterPerHourPerSquareMeter`, `PoundLbPerSquareFeetHour`, `PoundLbPerSquareFeetSecond`, `GrainPerSquareFeetHour`, `GrainPerSquareFeetSecond`, `StandardCubicFootPerMinutePerSquareFeet`.

## [v2.4.0](https://github.com/dividab/uom/compare/v2.3.0...v2.4.0) - 2019-10-17

### Added

- Added Units `KiloJoulePerCubicMeter` and `BtuPerCubicFeet`.

### Changed

- `Format.getUnitsForQuantity()` now accepts parameter for units. Default value is the registred units in this library.

## [v2.3.0](https://github.com/dividab/uom/compare/v2.2.1...v2.3.0) - 2019-04-09

### Changed

- Capitalize ACFM and ACFH labels

### Added

- Added Units `StandardCubicFeetPerMinutePerSquareFeet` and `StandardCubicMeterPerHourPerSquareMeter`.

## [v2.2.1](https://github.com/dividab/uom/compare/v2.2.0...v2.2.1) - 2019-03-06

### Changed

- Republish package because tags were out of sync.

## [v2.2.0](https://github.com/dividab/uom/compare/v2.1.0...v2.2.0) - 2019-03-06

### Changed

- All `Amount` compare functions now accepts a custom compare function as parameter.

## [v2.1.0](https://github.com/dividab/uom/compare/v2.0.0...v2.1.0) - 2019-01-10

### Changed

- Format module functions now takes an optional argument units map for application specific subset of units.

## [v2.0.0](https://github.com/dividab/uom/compare/v1.0.0...v2.0.0) - 2019-01-10

### Added

- `Format` module, see readme.
- `Serialize` module, see readme.
- `Unit.buildDerivedSymbol()`.

### Changed

- Amount.toString() now uses buildDerivedSymbol instead of looking up the formatted label. This change was made to make Amount independent on the formatting data.

## Removed

- Some undocumented modules were removed (this functionality is partly documented in the added Format and Serialize modules):
  - unit-info.ts
  - unit-label.ts
  - unit-registry.ts

## [v1.0.0](https://github.com/dividab/uom/compare/v0.0.0...v1.0.0) - 2018-05-08

### Added

- Initial Release
