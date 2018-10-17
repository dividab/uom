import { ConversionTest } from "./conversion-test";
import * as Units from "../../src/units";

export const tests: ReadonlyArray<ConversionTest> = [
  {
    name: "1Joule_0001Kilojoules",
    fromUnit: Units.Joule,
    fromValue: 1.0,
    toUnit: Units.Kilojoule,
    toValue: 0.001
  },
  {
    name: "1Kilojoule_1000Joules",
    fromUnit: Units.Kilojoule,
    fromValue: 1.0,
    toUnit: Units.Joule,
    toValue: 1000.0
  },
  {
    name: "0Joule_0Kilojoules",
    fromUnit: Units.Joule,
    fromValue: 0.0,
    toUnit: Units.Kilojoule,
    toValue: 0.0
  },
  {
    name: "0Kilojoule_0Joules",
    fromUnit: Units.Kilojoule,
    fromValue: 0.0,
    toUnit: Units.Joule,
    toValue: 0.0
  },
  {
    name: "1Joule_1Joule",
    fromUnit: Units.Joule,
    fromValue: 1.0,
    toUnit: Units.Joule,
    toValue: 1.0
  },
  {
    name: "1Kilojoule_1Kilojoule",
    fromUnit: Units.Kilojoule,
    fromValue: 1.0,
    toUnit: Units.Kilojoule,
    toValue: 1.0
  },
  {
    name: "063Joule_000063Kilojoules",
    fromUnit: Units.Joule,
    fromValue: 0.63,
    toUnit: Units.Kilojoule,
    toValue: 0.00063
  },
  {
    name: "589Kilojoule_5890Joules",
    fromUnit: Units.Kilojoule,
    fromValue: 5.89,
    toUnit: Units.Joule,
    toValue: 5890.0
  },
  {
    // http://www.wolframalpha.com/input/?i=btu
    name: "1Btu_1055Joules",
    fromUnit: Units.Btu,
    fromValue: 1.0,
    toUnit: Units.Joule,
    toValue: 1055.0,
    delta: 0.06
  }
];

//[TestMethod]
//public void ForValue1BtuPerPoundlbWeShouldGetValue2326KilojoulesPerKilogram()
//{
//  // http://www.wolframalpha.com/input/?i=btu+per+lb

//  // Arrange
//  Amount<ISpecificEnthalpy> p = Amount.Exact(1.0, Units.BtuPerPoundLb);

//  // Act
//  double result = p.ValueAs(Units.KilojoulePerKilogram);

//  // Assert
//  assert.equal(2.326, result, 0.001);
//}

//[TestMethod]
//public void ForValue970BtuPerPoundlbWeShouldGetValue2256KiloJoules()
//{
//  // http://www.wolframalpha.com/input/?i=970+BTU%2Flb+to+kJ%2Fkg+

//  // Arrange
//  Amount<ISpecificEnthalpy> p = Amount.Exact(970.0, Units.BtuPerPoundLb);

//  // Act
//  double result = p.ValueAs(Units.KilojoulePerKilogram);

//  // Assert
//  assert.equal(2256, result, 1.0);
//}

//[TestMethod]
//public void ForValue2501KilojoulesPerKilogramWeShouldGetValue1075BtuPerPoundlb()
//{
//  // http://www.wolframalpha.com/input/?i=2501%20kJ%2Fkg%20to%20BTU%2Flb&t=wvg01

//  // Arrange
//  Amount<ISpecificEnthalpy> p = Amount.Exact(2501.0, Units.KilojoulePerKilogram);

//  // Act
//  double result = p.ValueAs(Units.BtuPerPoundLb);

//  // Assert
//  assert.equal(1075, result, 1.0);
//}
