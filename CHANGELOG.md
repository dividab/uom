# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

- Capitalize ACFM and ACFH labels

## [v2.2.1] - 2019-03-06

### Changed

- Republish package because tags were out of sync.

## [v2.2.0] - 2019-03-06

### Changed

- All `Amount` compare functions now accepts a custom compare function as parameter.

## [v2.1.0] - 2019-01-10

### Changed

- Format module functions now takes an optional argument units map for application specific subset of units.

## [v2.0.0] - 2019-01-10

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

## [v1.0.0] - 2018-05-08

### Added

- Initial Release

[unreleased]: https://github.com/dividab/uom/compare/v2.2.1...master
[v2.2.1]: https://github.com/dividab/uom/compare/v2.2.0...v2.2.1
[v2.2.0]: https://github.com/dividab/uom/compare/v2.1.0...v2.2.0
[v2.1.0]: https://github.com/dividab/uom/compare/v2.0.0...v2.1.0
[v2.0.0]: https://github.com/dividab/uom/compare/v1.0.0...v2.0.0
[v1.0.0]: https://github.com/dividab/uom/compare/v0.0.0...v1.0.0
