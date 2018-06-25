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

**Returns**: <code>Amount.&lt;T&gt;</code> - The created amount.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The numeric value of the amount. |
| unit | <code>Unit.&lt;T&gt;</code> | The unit of the amount. |
| decimalCount | <code>number</code> \| <code>undefined</code> | The decimalCount of the amount. |

<a name="module_Amount.toString"></a>

### Amount.toString(amount) ⇒ <code>string</code>
Returns a string representation of an Amount.

**Returns**: <code>string</code> - String representation of the Amount.  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>Amount</code> | The amount. |

<a name="module_Amount.neg"></a>

### Amount.neg(amount)
Negation unary operator.


| Param | Type | Description |
| --- | --- | --- |
| amount | <code>Amount.&lt;T&gt;</code> | The amount. |

<a name="module_Amount.isQuantity"></a>

### Amount.isQuantity(quantity, amount)
Determines if an Amount is of a quantity.


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

**Returns**: left + right  

| Param | Description |
| --- | --- |
| left | The left-hand amount. |
| right | The right-hand |

<a name="module_Amount.times"></a>

### Amount.times(left, right)
Multiplies an amount with a number.
The resulting amount has the same unit and decimal count as the original amount.


| Param | Description |
| --- | --- |
| left | The amount to multiply |
| right | The number to multiply with |

<a name="module_Amount.divide"></a>

### Amount.divide(left, right)
Divides an amount with a number.
The resulting amount has the same unit and decimal count as the original amount.


| Param | Description |
| --- | --- |
| left | The amount to divide |
| right | The number to divide by |

<a name="module_Amount.equals"></a>

### Amount.equals(left, right) ⇒ <code>boolean</code>
Compares to amounts for equality

**Returns**: <code>boolean</code> - True if the amounts are equal, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| left | <code>Amount</code> | The left-hand Amount. |
| right | <code>Amount</code> | The right-hand Amount. |

<a name="module_Amount.lessThan"></a>

### Amount.lessThan(left, right) ⇒ <code>boolean</code>
Checks if one Amount is less than another.

**Returns**: <code>boolean</code> - True if the left-hand is less than the right-hand, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| left | <code>Amount</code> | The left-hand Amount. |
| right | <code>Amount</code> | The right-hand Amount. |

<a name="module_Amount.greaterThan"></a>

### Amount.greaterThan(left, right) ⇒ <code>boolean</code>
Checks if one Amount is greater than another.

**Returns**: <code>boolean</code> - True if the left-hand is less than the right-hand, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| left | <code>Amount</code> | The left-hand Amount. |
| right | <code>Amount</code> | The right-hand Amount. |

<a name="module_Amount.roundDown"></a>

### Amount.roundDown(step, amount)

| Param | Description |
| --- | --- |
| step | Rounding step, for example 5.0 Celsius will round 23 to 20. |
| amount | Amount to round. |

<a name="module_Amount.roundUp"></a>

### Amount.roundUp(step, amount)

| Param | Description |
| --- | --- |
| step | Rounding step, for example 5.0 Celsius will round 23 to 25. |
| amount | Amount to round. |

<a name="module_Amount.abs"></a>

### Amount.abs(amount)
Gets the absolute amount (equivalent of Math.Abs())


| Param | Description |
| --- | --- |
| amount | The amount to get the aboslute amount from. |

<a name="module_Amount.valueAs"></a>

### Amount.valueAs(toUnit, amount)
Gets the value of the amount as a number in the specified unit


| Param | Description |
| --- | --- |
| toUnit | The unit to get the amount in. |
| amount | The amount to get the value from. |

<a name="module_Unit"></a>

## Unit

* [Unit](#module_Unit)
    * [.One](#module_Unit.One) : <code>Unit</code>
    * [.createBase(quantity, symbol)](#module_Unit.createBase)
    * [.createAlternate(symbol, parent)](#module_Unit.createAlternate)
    * [.times(quantity, left, right)](#module_Unit.times) ⇒
    * [.divide(quantity, left, right)](#module_Unit.divide) ⇒
    * [.convert(value, fromUnit, toUnit)](#module_Unit.convert) ⇒

<a name="module_Unit.One"></a>

### Unit.One : <code>Unit</code>
Holds the dimensionless unit ONE

<a name="module_Unit.createBase"></a>

### Unit.createBase(quantity, symbol)
Creates a base unit having the specified symbol.


| Param | Description |
| --- | --- |
| quantity | The quantity of the resulting unit. |
| symbol | The symbol of this base unit. |

<a name="module_Unit.createAlternate"></a>

### Unit.createAlternate(symbol, parent)
Creates an alternate unit for the specified unit identified by the
specified symbol.


| Param | Description |
| --- | --- |
| symbol | The symbol for this alternate unit. |
| parent | Parent the system unit from which this alternate unit is derived. |

<a name="module_Unit.times"></a>

### Unit.times(quantity, left, right) ⇒
Returns the product of the specified units.

**Returns**: left * right  

| Param | Description |
| --- | --- |
| quantity | The quantity of the resulting unit. |
| left | The left unit operand. |
| right | The right unit operand.</param> |

<a name="module_Unit.divide"></a>

### Unit.divide(quantity, left, right) ⇒
Returns the quotient of the specified units.

**Returns**: left / right  

| Param | Description |
| --- | --- |
| quantity | The quantity of the resulting unit. |
| left | The dividend unit operand. |
| right | The divisor unit operand. |

<a name="module_Unit.convert"></a>

### Unit.convert(value, fromUnit, toUnit) ⇒
Converts numeric values from a unit to another unit.

**Returns**: The converted numeric value.  

| Param | Description |
| --- | --- |
| value | The numeric value to convert. |
| fromUnit | The unit from which to convert the numeric value. |
| toUnit | The unit to which to convert the numeric value. |

