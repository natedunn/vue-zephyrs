import stringToDot from './stringToDot';

function themeClasses (element, status, variants, events) {

  function isolateObject (string, object) {
    const keys = string.split(".");
    let newObject = {};
    newObject[keys[0]] = object[keys[0]];
    return newObject;
  }

  function arrayMerge (firstArray, secondArray) {
    firstArray.push(secondArray);
    return firstArray;
  }

  function getEvents (variantBase) {
    return events
      .map(event => {
        if (variantBase[`$${event}`]) return variantBase[`$${event}`];
      })
      .flat(Infinity)
      .filter(Boolean)
      .filter(function (el) {
        return el != null;
      });
  }
  function findAllBases (obj) {
    const foundBases = Object.entries(obj).reduce(
      (acc, [key, value]) =>
        key === "_base"
          ? acc.concat(value)
          : typeof value === "object"
            ? acc.concat(findAllBases(value, "_base"))
            : acc,
      []
    );
    const rootBase = element["_base"] || null;
    return rootBase ? rootBase + " " + foundBases : foundBases;
  }

  function getAutoClasses (obj) {
    if (obj['_auto']) {
      return Object.keys(obj['_auto']).map(child => {
        let variant = obj['_auto'][child] || null;
        let value = [];

        if (typeof variant === "object") {
          const activeEvents = getEvents(variant);
          if (Array.isArray(activeEvents) && activeEvents.length) {
            value.push(activeEvents);
          } else {
            value.push(variant["_default"])
          }
        } else {
          value.push(variant);
        }

        return value || null;

      }).flat(Infinity)
        .filter(Boolean);
    }
  }

  // Get each variant (separated by +)
  let variantValue = variants.split("+").map(variantString => {
    let variantBase = null;
    let variantObj = isolateObject(variantString, element);
    let value = findAllBases(variantObj);
    let primaryVariant = variantString.substring(0, variantString.lastIndexOf('.')) || variantString;

    variantBase = status
      ? stringToDot(variantString, variantObj)[status]
      || stringToDot(`${primaryVariant}.${status}`, variantObj)
      || stringToDot(variantString, variantObj)
      : stringToDot(variantString, variantObj);

    if (typeof variantBase === "object") {
      const activeEvents = getEvents(variantBase);
      if (Array.isArray(activeEvents) && activeEvents.length) {
        value.push(activeEvents);
      } else {
        value.push(variantBase["_default"])
      }
    } else {
      value.push(variantBase);
    }

    return value;
  });

  return arrayMerge(variantValue, getAutoClasses(element))
    .flat(Infinity)
    .filter(Boolean);
}

export default themeClasses;