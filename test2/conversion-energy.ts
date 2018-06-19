import { ConversionTest } from "./conversion-test";
import * as Units from "../src/units";
import { Duration } from "../src/quantity";

export const tests: ReadonlyArray<ConversionTest<Duration>> = [
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
  }
];

/*

  it("ForValue0JouleWeShouldGetValue0Kilojoules", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Joule);
    const valueInKilojoules: number = Amount.valueAs(
      Units.Kilojoule,
      amountToTest
    );
    assert.equal(valueInKilojoules, EnergyConversion.J2Kj(value));
  });

  it("ForValue0KilojouleWeShouldGetValue0Joules", () => {
    const value: number = 0.0;
    const amountToTest = Amount.create(value, Units.Kilojoule);
    const valueInJoules: number = Amount.valueAs(Units.Joule, amountToTest);
    assert.equal(valueInJoules, EnergyConversion.Kj2J(value));
  });

  it("ForValue1JouleWeShouldGetValue1Joule", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Joule);
    const valueInJoules: number = Amount.valueAs(Units.Joule, amountToTest);
    assert.equal(valueInJoules, value);
  });

  it("ForValue1KilojouleWeShouldGetValue1Kilojoule", () => {
    const value: number = 1.0;
    const amountToTest = Amount.create(value, Units.Kilojoule);
    const valueInKilojoules: number = Amount.valueAs(
      Units.Kilojoule,
      amountToTest
    );
    assert.equal(valueInKilojoules, value);
  });

  it("ForValue063JouleWeShouldGetValue000063Kilojoules", () => {
    const value: number = 0.63;
    const amountToTest = Amount.create(value, Units.Joule);
    const valueInKilojoules: number = Amount.valueAs(
      Units.Kilojoule,
      amountToTest
    );
    assert.equal(valueInKilojoules, EnergyConversion.J2Kj(value));
  });

  it("ForValue589KilojouleWeShouldGetValue5890Joules", () => {
    const value: number = 5.89;
    const amountToTest = Amount.create(value, Units.Kilojoule);
    const valueInJoules: number = Amount.valueAs(Units.Joule, amountToTest);
    assert.equal(valueInJoules, EnergyConversion.Kj2J(value));
  });

  it("ForValue1BtuWeShouldGetValue1055Joules", () => {
    // http://www.wolframalpha.com/input/?i=btu

    // Arrange
    const p = Amount.create(1.0, Units.Btu);

    // Act
    const result: number = Amount.valueAs(Units.Joule, p);

    // Assert
    assert.closeTo(result, 1055.0, 1.0);
  });

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
});

*/
