import splitString from './splitString';

const filterClasses = function (array, removeClass) {
  return array.map(item => {
    return typeof item === "string"
      ? splitString(item)
      : item;
  })
    .flat(Infinity)
    .filter(Boolean)
    .filter(className => {
      const classes = Array.isArray(removeClass)
        ? removeClass
        : splitString(removeClass);
      return !classes.includes(className);
    });
}

export default filterClasses;