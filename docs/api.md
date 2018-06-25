## Modules

<dl>
<dt><a href="#module_Amount">Amount</a></dt>
<dd></dd>
<dt><a href="#module_Unit">Unit</a></dt>
<dd></dd>
</dl>

<a name="module_Amount"></a>

## Amount

* [Amount](#module_Amount)
    * [.create(value, unit, decimalCount)](#module_Amount.create) ⇒ <code>Amount.&lt;T&gt;</code>
    * [.toString(amount)](#module_Amount.toString) ⇒ <code>string</code>
    * [.neg(amount)](#module_Amount.neg)
    * [.isQuantity(quantity, amount)](#module_Amount.isQuantity)
    * [.plus(left, right)](#module_Amount.plus) ⇒
    * [.minus(left, right)](#module_Amount.minus) ⇒
    * [.times(left, right)](#module_Amount.times)
    * [.divide(left, right)](#module_Amount.divide)
    * [.equals(left, right)](#module_Amount.equals) ⇒ <code>boolean</code>
    * [.lessThan(left, right)](#module_Amount.lessThan) ⇒ <code>boolean</code>
    * [.greaterThan(left, right)](#module_Amount.greaterThan) ⇒ <code>boolean</code>
    * [.roundDown(step, amount)](#module_Amount.roundDown)
    * [.roundUp(step, amount)](#module_Amount.roundUp)
    * [.abs(amount)](#module_Amount.abs)
    * [.valueAs(toUnit, amount)](#module_Amount.valueAs)

<a name="module_Amount.create"></a>

### Amount.create(value, unit, decimalCount) ⇒ <code>Amount.&lt;T&gt;</code>
Creates an amount that represents the an exact/absolute value in the specified
unit. For example if you create an exact amount of 2 degrees Fahrenheit that
will represent -16.6666667 degrees Celsius.

**Kind**: static method of [<code>Amount</code>](#module_Amount)  
**Returns**: <code>Amount.&lt;T&gt;</code> - The created amount.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The numeric value of the amount. |
| unit | <code>Unit.&lt;T&gt;</code> | The unit of the amount. |
| decimalCount | <code>number</code> \| <code>undefined</code> | The decimalCount of the amount. |

<a name="module_Amount.toString"></a>

### Amount.toString(amount) ⇒ <code>string</code>
Returns a string representation of an Amount.

**Kind**: static method of [<code>Amount</code>](#module_Amount)  
**Returns**: <code>string</code> - String representation of the Amount.  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>Amount</code> | The amount. |

<a name="module_Amount.neg"></a>

### Amount.neg(amount)
Negation unary operator.

**Kind**: static method of [<code>Amount</code>](#module_Amount)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>Amount.&lt;T&gt;</code> | The amount. |

<a name="module_Amount.isQuantity"></a>

### Amount.isQuantity(quantity, amount)
Determines if an Amount is of a quantity.

**Kind**: static method of [<code>Amount</code>](#module_Amount)  

| Param | Type | Description |
| --- | --- | --- |
| quantity | <code>Quantity</code> | Quantity to check for. |
| amount | <code>Amount.&lt;T&gt;</code> | The amount to check. |

<a name="module_Amount.plus"></a>

### Amount.plus(left, right) ⇒
Adds two amounts together.
The two amounts amounts must have the same quantity.
The resulting amount will be of the same quantity as the two amounts.
The resulting amount will have it's decimal count set from the
most granular amount.

**Kind**: static method of [<code>Amount</code>](#module_Amount)  
**Returns**: left + right  

| Param | Description |
| --- | --- |
| left | The left-hand amount. |
| right | The right-hand |

<a name="module_Amount.minus"></a>

### Amount.minus(left, right) ⇒
Substracts two amounts from each other.
The two amounts amounts must have the same quantity.
The resulting amount will be of the same quantity as the two amounts.
The resulting amount will have it's decimal count set from the
most granular amount.

**Kind**: static method of [<code>Amount</code>](#module_Amount)  
**Returns**: left + right  

| Param | Description |
| --- | --- |
| left | The left-hand amount. |
| right | The right-hand |

<a name="module_Amount.times"></a>

### Amount.times(left, right)
Multiplies an amount with a number.
The resulting amount has the same unit and decimal count as the original amount.

**Kind**: static method of [<code>Amount</code>](#module_Amount)  

| Param | Description |
| --- | --- |
| left | The amount to multiply |
| right | The number to multiply with |

<a name="module_Amount.divide"></a>

### Amount.divide(left, right)
Divides an amount with a number.
The resulting amount has the same unit and decimal count as the original amount.

**Kind**: static method of [<code>Amount</code>](#module_Amount)  

| Param | Description |
| --- | --- |
| left | The amount to divide |
| right | The number to divide by |

<a name="module_Amount.equals"></a>

### Amount.equals(left, right) ⇒ <code>boolean</code>
Compares to amounts for equality

**Kind**: static method of [<code>Amount</code>](#module_Amount)  
**Returns**: <code>boolean</code> - True if the amounts are equal, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| left | <code>Amount</code> | The left-hand Amount. |
| right | <code>Amount</code> | The right-hand Amount. |

<a name="module_Amount.lessThan"></a>

### Amount.lessThan(left, right) ⇒ <code>boolean</code>
Checks if one Amount is less than another.

**Kind**: static method of [<code>Amount</code>](#module_Amount)  
**Returns**: <code>boolean</code> - True if the left-hand is less than the right-hand, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| left | <code>Amount</code> | The left-hand Amount. |
| right | <code>Amount</code> | The right-hand Amount. |

<a name="module_Amount.greaterThan"></a>

### Amount.greaterThan(left, right) ⇒ <code>boolean</code>
Checks if one Amount is greater than another.

**Kind**: static method of [<code>Amount</code>](#module_Amount)  
**Returns**: <code>boolean</code> - True if the left-hand is less than the right-hand, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| left | <code>Amount</code> | The left-hand Amount. |
| right | <code>Amount</code> | The right-hand Amount. |

<a name="module_Amount.roundDown"></a>

### Amount.roundDown(step, amount)
**Kind**: static method of [<code>Amount</code>](#module_Amount)  

| Param | Description |
| --- | --- |
| step | Rounding step, for example 5.0 Celsius will round 23 to 20. |
| amount | Amount to round. |

<a name="module_Amount.roundUp"></a>

### Amount.roundUp(step, amount)
**Kind**: static method of [<code>Amount</code>](#module_Amount)  

| Param | Description |
| --- | --- |
| step | Rounding step, for example 5.0 Celsius will round 23 to 25. |
| amount | Amount to round. |

<a name="module_Amount.abs"></a>

### Amount.abs(amount)
Gets the absolute amount (equivalent of Math.Abs())

**Kind**: static method of [<code>Amount</code>](#module_Amount)  

| Param | Description |
| --- | --- |
| amount | The amount to get the aboslute amount from. |

<a name="module_Amount.valueAs"></a>

### Amount.valueAs(toUnit, amount)
Gets the value of the amount as a number in the specified unit

**Kind**: static method of [<code>Amount</code>](#module_Amount)  

| Param | Description |
| --- | --- |
| toUnit | The unit to get the amount in. |
| amount | The amount to get the value from. |

<a name="module_Unit"></a>

## Unit

* [Unit](#module_Unit)
    * _static_
        * [.One](#module_Unit.One)
        * [.createBase(quantity, symbol)](#module_Unit.createBase)
        * [.createAlternate(symbol, parent)](#module_Unit.createAlternate)
        * [.times(quantity, left, right)](#module_Unit.times) ⇒
        * [.divide(quantity, left, right)](#module_Unit.divide) ⇒
        * [.convert(value, fromUnit, toUnit)](#module_Unit.convert) ⇒
    * _inner_
        * [~identityConverter](#module_Unit..identityConverter)
        * [~transform(operation, unit)](#module_Unit..transform) ⇒
        * [~fromProduct(quantity, leftElems, rightElems)](#module_Unit..fromProduct)
        * [~createCompoundConverter(first, second)](#module_Unit..createCompoundConverter)
        * [~inverseConverter()](#module_Unit..inverseConverter)
        * [~concatenateConverters(concatConverter, converter)](#module_Unit..concatenateConverters) ⇒
        * [~createOne()](#module_Unit..createOne)

<a name="module_Unit.One"></a>

### Unit.One
Holds the dimensionless unit ONE

**Kind**: static property of [<code>Unit</code>](#module_Unit)  
<a name="module_Unit.createBase"></a>

### Unit.createBase(quantity, symbol)
Creates a base unit having the specified symbol.

**Kind**: static method of [<code>Unit</code>](#module_Unit)  

| Param | Description |
| --- | --- |
| quantity | The quantity of the resulting unit. |
| symbol | The symbol of this base unit. |

<a name="module_Unit.createAlternate"></a>

### Unit.createAlternate(symbol, parent)
Creates an alternate unit for the specified unit identified by the
specified symbol.

**Kind**: static method of [<code>Unit</code>](#module_Unit)  

| Param | Description |
| --- | --- |
| symbol | The symbol for this alternate unit. |
| parent | Parent the system unit from which this alternate unit is derived. |

<a name="module_Unit.times"></a>

### Unit.times(quantity, left, right) ⇒
Returns the product of the specified units.

**Kind**: static method of [<code>Unit</code>](#module_Unit)  
**Returns**: left * right  

| Param | Description |
| --- | --- |
| quantity | The quantity of the resulting unit. |
| left | The left unit operand. |
| right | The right unit operand.</param> |

<a name="module_Unit.divide"></a>

### Unit.divide(quantity, left, right) ⇒
Returns the quotient of the specified units.

**Kind**: static method of [<code>Unit</code>](#module_Unit)  
**Returns**: left / right  

| Param | Description |
| --- | --- |
| quantity | The quantity of the resulting unit. |
| left | The dividend unit operand. |
| right | The divisor unit operand. |

<a name="module_Unit.convert"></a>

### Unit.convert(value, fromUnit, toUnit) ⇒
Converts numeric values from a unit to another unit.

**Kind**: static method of [<code>Unit</code>](#module_Unit)  
**Returns**: The converted numeric value.  

| Param | Description |
| --- | --- |
| value | The numeric value to convert. |
| fromUnit | The unit from which to convert the numeric value. |
| toUnit | The unit to which to convert the numeric value. |

<a name="module_Unit..identityConverter"></a>

### Unit~identityConverter
Holds the identity converter (unique). This converter does nothing (ONE.convert(x) == x).

**Kind**: inner property of [<code>Unit</code>](#module_Unit)  
<a name="module_Unit..transform"></a>

### Unit~transform(operation, unit) ⇒
Returns the unit derived from the specified unit using the specified converter.
The converter does not need to be linear.

**Kind**: inner method of [<code>Unit</code>](#module_Unit)  
**Returns**: The unit after the specified transformation.  

| Param | Description |
| --- | --- |
| operation | The converter from the transformed unit to this unit. |
| unit | The unit. |

<a name="module_Unit..fromProduct"></a>

### Unit~fromProduct(quantity, leftElems, rightElems)
Creates the unit defined from the product of the specifed elements.

**Kind**: inner method of [<code>Unit</code>](#module_Unit)  

| Param | Description |
| --- | --- |
| quantity | Quantity of the resulting unit. |
| leftElems | Left multiplicand elements. |
| rightElems | Right multiplicand elements. |

<a name="module_Unit..createCompoundConverter"></a>

### Unit~createCompoundConverter(first, second)
Creates a compound converter resulting from the combined
transformation of the specified converters.

**Kind**: inner method of [<code>Unit</code>](#module_Unit)  

| Param | Description |
| --- | --- |
| first | The first converter. |
| second | Second the second converter. |

<a name="module_Unit..inverseConverter"></a>

### Unit~inverseConverter()
Returns the inverse of this converter. If x is a valid
value, then x == inverse().convert(convert(x)) to within
the accuracy of computer arithmetic.

**Kind**: inner method of [<code>Unit</code>](#module_Unit)  
<a name="module_Unit..concatenateConverters"></a>

### Unit~concatenateConverters(concatConverter, converter) ⇒
Concatenates this converter with another converter. The resulting
converter is equivalent to first converting by the specified converter,
and then converting by this converter.

Note: Implementations must ensure that the IDENTITY instance
      is returned if the resulting converter is an identity
      converter.

**Kind**: inner method of [<code>Unit</code>](#module_Unit)  
**Returns**: The concatenation of this converter with the other converter.  

| Param | Description |
| --- | --- |
| concatConverter | This converter. |
| converter | The other converter. |

<a name="module_Unit..createOne"></a>

### Unit~createOne()
Used solely to create ONE instance.

**Kind**: inner method of [<code>Unit</code>](#module_Unit)  
