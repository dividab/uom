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

```ts
import { Amount, Units } from "uom";

const amount = Amount.create(10, Units.Meter);
const inch = Amount.valueAs(Units.Inch, amount);
```

## Prior art

This library was inspired by [JSR-275](http://download.oracle.com/otn-pub/jcp/untis-0.6-edr-oth-JSpec/Units-v0.6_edr.pdf?AuthParam=1527941513_89b45d975b743c799d22105ff16f961b). See also this [repo](http://code.google.com/p/unitsofmeasure/), this [article](https://www.javaworld.com/article/2077770/core-java/introduction-to-jsr-275--measures-and-units.html). Altough JSR-275 was not accepted but it evolved into [JSR-363](http://www.baeldung.com/javax-measure) which is now accepted.

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
