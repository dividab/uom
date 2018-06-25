<a name="module_Amount"></a>

## Amount

* [Amount](#module_Amount)
    * [.equals](#module_Amount.equals)
    * [.lessThan](#module_Amount.lessThan)
    * [.greaterThan](#module_Amount.greaterThan)
    * [.create(value, unit, decimalCount)](#module_Amount.create) ⇒ <code>Amount.&lt;T&gt;</code>
    * [.toString(amount)](#module_Amount.toString) ⇒ <code>string</code>
    * [.neg(amount)](#module_Amount.neg)
    * [.isQuantity(quantity, amount)](#module_Amount.isQuantity)
    * [.plus(left, right)](#module_Amount.plus) ⇒
    * [.minus(left, right)](#module_Amount.minus) ⇒
    * [.times(left, right)](#module_Amount.times)
    * [.divide(left, right)](#module_Amount.divide)
    * [.roundDown(step, amount)](#module_Amount.roundDown)
    * [.roundUp(step, amount)](#module_Amount.roundUp)
    * [.abs(amount)](#module_Amount.abs)
    * [.valueAs(toUnit, amount)](#module_Amount.valueAs)

<a name="module_Amount.equals"></a>

### Amount.equals
Compares to amounts for equality

**Kind**: static property of [<code>Amount</code>](#module_Amount)  

| Param | Description |
| --- | --- |
| left | The left-hand Amount. |
| right | The right-hand Amount. |

<a name="module_Amount.lessThan"></a>

### Amount.lessThan
Checks if one Amount is less than another.

**Kind**: static property of [<code>Amount</code>](#module_Amount)  

| Param | Description |
| --- | --- |
| left | The left-hand Amount. |
| right | The right-hand Amount. |

<a name="module_Amount.greaterThan"></a>

### Amount.greaterThan
Checks if one Amount is greater than another.

**Kind**: static property of [<code>Amount</code>](#module_Amount)  

| Param | Description |
| --- | --- |
| left | The left-hand Amount. |
| right | The right-hand Amount. |

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

