# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

### Added

- Format module.
- Serialize module

### Changed

- Rename `UnitName` module to `UnitLabel`
- Rename `UnitName.getName()` to `UnitLabel.getLabel()`
- The following functions was move from `Units` to `UnitRegistry`: getUnitFromString, isUnit, getStringFromUnit, getUnitsForQuantity, getAllUnits, getAllQuantities
- Amount.toString() now uses buildDerivedSymbol instead of looking up label in the registry. This change was made to make Amount independent on the formatting data.

## Removed

- Some undocumented modules were removed (this functionality is not partly documented in the Format and Serialize modules):
  - unit-info.ts
  - unit-label.ts
  - unit-registry.ts

## [1.0.0] - 2018-05-08

### Added

- Initial Release

[unreleased]: https://github.com/jonaskello/tslint-immutable/compare/v1.0.0...master
[v1.0.0]: https://github.com/jonaskello/tslint-immutable/compare/v0.0.0...v1.0.0
