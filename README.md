# @promaster/uom

## Introduction

This package has functions to handle unit of measures. It works particulary well with typescript in which case it can provice some type safety for amounts of different quantity.

## Installation

`npm install --save @promaster/uom`

The library is compiled to ES5 and no polyfills are required.

## Usage

```ts
import { Amount, Units } from "@promaster/uom";

const amount = Amount.create(10, Units.Meter);
const inch = Amount.valueAs(Units.Inch, amount);
```

## Prior art

This library was inspired by [JSR-275](http://download.oracle.com/otn-pub/jcp/untis-0.6-edr-oth-JSpec/Units-v0.6_edr.pdf?AuthParam=1527941513_89b45d975b743c799d22105ff16f961b). See also this [repo](http://code.google.com/p/unitsofmeasure/), this [article](https://www.javaworld.com/article/2077770/core-java/introduction-to-jsr-275--measures-and-units.html). Altough JSR-275 was not accepted but it evolved into [JSR-363](http://www.baeldung.com/javax-measure) which is now accepted.
