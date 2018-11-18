# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

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

## [1.0.0] - 2018-05-08

### Added

- Initial Release

[unreleased]: https://github.com/jonaskello/tslint-immutable/compare/v1.0.0...master
[v1.0.0]: https://github.com/jonaskello/tslint-immutable/compare/v0.0.0...v1.0.0
