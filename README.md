# uom

[![npm version][version-image]][version-url]
[![travis build][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]
[![code style: prettier][prettier-image]][prettier-url]
[![MIT license][license-image]][license-url]

Extensible unit of measure conversion with type safety for typescript

## Introduction

This package has functions to handle unit of measures. It works particulary well with typescript in which case it can provice some type safety for amounts of different quantity.

## Installation

`npm install --save uom`

The library is compiled to ES5 and no polyfills are required.

## Features

### Conversion

This feature allows you to convert amounts into different units.

```js
import { Amount, Units } from "uom";

const amount = Amount.create(10, Units.Meter);
const inch = Amount.valueAs(Units.Inch, amount);
```

### Extension (create your own unit)

A measure system has a number of `BaseUnit`s which is used to create all other derived units in the system which are represented as `ProductUnit` or `TransformedUnit`. For example in the SI measure system, `m` and `s` are `BaseUnits`s and they can be used to create the `m/s` `ProductUnit`.

In the case that a derived unit can be known by a different name, an `AlternateUnit` can be used. For example in the SI system the derived unit `N/m2` is also known as `Pascal`.

By using the base units you can create any unit.

```js
import { Amount, Unit, Units } from "uom";

const myInchUnit = Unit.divideNumber(12.0, Units.Foot);
const amount = Amount.create(10, myInchUnit);
const meter = Amount.valueAs(Units.Meter, amount);
```

### Type safety (typescript only)

By declaring your functions with a signature of typed Amount you can make sure the right type of amounts are inputs to the function.

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

### Formatting

Asosciating formatting directly with an `Unit` or `Quantity` is generally not a good idea. Formatting is application specific and should be implemented within application code. For example, an application may have air flows and water flows that both are of `VolumeFlow` quantity. In this case you may want separate labels and default units for air flow and water flow. Associating formatting directly with `VolumeFlow` or its units will not solve this. Instead, try tagging each `VolumeFlow` field within the application with either `air_flow`, or `water_flow` and provide different labels and default units per tag.

However if you are just building something smaller and want quick formatting, this package has some opinionated formatting that is directly associated with each `Unit` built-in. Specifically you can get the label and number of decimals for each unit.

```ts
import { Amount, Units, Format } from "uom";

const length = Amount.create(10, Units.Meter);
const format = Format.getUnitFormat(length);
console.log(
  "The amount is " +
    Math.round(Amount.valueAs(Units.Inch, amount), format.decimalCount) +
    " " +
    format.label
);
```

There is also the `buildDerivedSymbol()` function which will derive a symbol for a unit by looking at which base units the unit was created:

```ts
import { Amount, Units, Format } from "uom";

const length = Amount.create(10, Units.MeterPerSecond);
const label = Unit.buildDerivedSymbol(length);
console.log(label); // m/s
```

### Serialization

This feature can be used to serialize the units for persisting to/from for example a database.

```ts
import { Amount, Units, Serialize } from "uom";

const length = Amount.create(10, Units.Meter);
const serialized = Serialize.amountToString(length);
const deserialized = Serialize.stringToAmount(serialized);
```

## API

The API is divided into modules, where each module contains functions that operate on a type that is exported from that module. For example the `Amount` module exports the type `Amount.Amount` and has functions like `Amount.plus()`.

For more information, see the [full API docs](docs/api.md).

## How to publish

```
yarn publish-npm
```

## Prior art

This library was inspired by [JSR-275](http://download.oracle.com/otn-pub/jcp/untis-0.6-edr-oth-JSpec/Units-v0.6_edr.pdf?AuthParam=1527941513_89b45d975b743c799d22105ff16f961b). See also this [repo](http://code.google.com/p/unitsofmeasure/), this [article](https://www.javaworld.com/article/2077770/core-java/introduction-to-jsr-275--measures-and-units.html). Altough JSR-275 was not accepted it evolved into [JSR-363](http://www.baeldung.com/javax-measure) which is now accepted.

[version-image]: https://img.shields.io/npm/v/uom.svg?style=flat
[version-url]: https://www.npmjs.com/package/uom
[travis-image]: https://travis-ci.com/dividab/uom.svg?branch=master&style=flat
[travis-url]: https://travis-ci.com/dividab/uom
[codecov-image]: https://codecov.io/gh/dividab/uom/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/dividab/uom
[license-image]: https://img.shields.io/github/license/dividab/uom.svg?style=flat
[license-url]: https://opensource.org/licenses/MIT
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat
[prettier-url]: https://github.com/prettier/prettier
