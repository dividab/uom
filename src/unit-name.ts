import * as Unit from "./unit";
import { exhaustiveCheck } from "./utils/exhaustive-check";

// We keep a global repository of Labels becasue if a Unit object is derived from arithmetic operations
// it may still be considered equal to an existing unit and thus should have the same label.
// const _typeLabels: Map<Unit.Unit<Quantity>, string> = new Map();
const _typeLabels: { [unit: string]: string } = {}; //tslint:disable-line

export function registerLabel<T extends string>(
  label: string,
  unit: Unit.Unit<T>
): void {
  _typeLabels[unit.name] = label;
}

export function getName<T extends string>(unit: Unit.Unit<T>): string {
  const label = _typeLabels[unit.name];
  if (label === undefined) {
    return buildDerivedName(unit);
  }
  return label;
}

function buildDerivedName<T extends string>(unit: Unit.Unit<T>): string {
  switch (unit.unitInfo.type) {
    case "alternate":
      return unit.unitInfo.symbol;
    case "base":
      return unit.unitInfo.symbol;
    case "product":
      return productUnitBuildDerivedName(unit);
    case "transformed":
      return "";
    default:
      return exhaustiveCheck(unit.unitInfo, true);
  }
  // throw new Error(`Unknown innerUnit ${JSON.stringify(unit)}`);
}

function productUnitBuildDerivedName<T extends string>(
  unit: Unit.Unit<T>
): string {
  const comparePow = (a: Unit.Element, b: Unit.Element) => {
    if (a.pow > b.pow) {
      return 1;
    } else if (a.pow < b.pow) {
      return -1;
    } else {
      return 0;
    }
  };

  const pospow = getElements(unit).filter(e => e.pow > 0);
  pospow.sort(comparePow); // orderby e.Pow descending select e;
  const posname = productUnitBuildNameFromElements(pospow);
  const negpow = getElements(unit).filter(e => e.pow < 0);
  negpow.sort(comparePow); // orderby e.Pow ascending select e;
  const negname = productUnitBuildNameFromElements(negpow);

  let name: string = posname;
  if (negname.length > 0) {
    if (name.length === 0) {
      name += "1";
    }

    name += "/" + negname;
  }

  return name;
}

function getElements(unit: Unit.Unit): Array<Unit.Element> {
  if (unit.unitInfo.type === "product") {
    return unit.unitInfo.elements;
  }
  return [];
}

function productUnitBuildNameFromElements(
  elements: Array<Unit.Element>
): string {
  let name: string = "";
  for (let e of elements) {
    name += getName(e.unit);

    switch (Math.abs(e.pow)) {
      case 1:
        break;
      case 2:
        name += "²";
        break;
      case 3:
        name += "³";
        break;
      default:
        name += "^" + Math.abs(e.pow).toString();
        break;
    }
  }

  return name;
}
