# uom

[![npm version][version-image]][version-url]
[![travis build][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![code style: prettier][prettier-image]][prettier-url]
[![MIT license][license-image]][license-url]

Extensible unit of measure conversion with type safety for typescript

## Introduction

This package has functions to handle unit of measures. It works particulary well with typescript in which case it can provice some type safety for amounts of different quantity.

## Installation

`npm install --save uom`

The library is compiled to ES5 and no polyfills are required.

## Usage

### Conversion

```js
import { Amount, Units } from "uom";

const amount = Amount.create(10, Units.Meter);
const inch = Amount.valueAs(Units.Inch, amount);
```

### Extension (create your own unit)

```js
import { Amount, Unit, Units } from "uom";

const myInchUnit = Unit.divideNumber(12.0, Units.Foot);
const amount = Amount.create(10, myInchUnit);
const meter = Amount.valueAs(Units.Meter, amount);
```

### Type safety (typescript only)

```ts
import { Amount, Units } from "uom";

const length1 = Amount.create(10, Units.Meter);
const length2 = Amount.create(10, Units.Inch);
const volume1 = Amount.create(10, Units.CubicMeter);

const result = calculate(length1, length2); // OK
const result = calculate(volume1, length2); // Compile error

function calculate(Amount<Length> length1, Amount<Length> length2): Amount<Length> {
    return Amount.plus(length1, length2);
}
```

## API

The API is divided into modules, where each module contains functions that operate on a type that is exported from that module. For example the `Amount` module exports the type `Amount.Amount` and has functions like `Amount.plus()`.

For more information, see the [full API docs](docs/api.md).

## Internal Design

The package is designed around the idea of measure systems. A measure system has a number of `BaseUnit`s which is used to create all other derived units in the system which are represented as `ProductUnit` or `TransformedUnit`. For example in the SI measure system, `m` and `s` are `BaseUnits`s and they can be used to create the `m/s` `ProductUnit`.

In the case that a derived unit can be known by a different name, an `AlternateUnit` can be used. For example in the SI system the derived unit `N/m2` is also known as `Pascal`.

## Prior art

This library was inspired by [JSR-275](http://download.oracle.com/otn-pub/jcp/untis-0.6-edr-oth-JSpec/Units-v0.6_edr.pdf?AuthParam=1527941513_89b45d975b743c799d22105ff16f961b). See also this [repo](http://code.google.com/p/unitsofmeasure/), this [article](https://www.javaworld.com/article/2077770/core-java/introduction-to-jsr-275--measures-and-units.html). Altough JSR-275 was not accepted it evolved into [JSR-363](http://www.baeldung.com/javax-measure) which is now accepted.

[version-image]: https://img.shields.io/npm/v/uom.svg?style=flat
[version-url]: https://www.npmjs.com/package/uom
[travis-image]: https://travis-ci.org/dividab/uom.svg?branch=master&style=flat
[travis-url]: https://travis-ci.org/dividab/uom
[coveralls-image]: https://coveralls.io/repos/github/dividab/uom/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/dividab/uom?branch=master
[license-image]: https://img.shields.io/github/license/dividab/uom.svg?style=flat
[license-url]: https://opensource.org/licenses/MIT
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat
[prettier-url]: https://github.com/prettier/prettier
