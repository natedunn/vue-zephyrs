import splitString from './splitString';

const filterClasses = function (arrays, removeClass) {
  const array = arrays.flat(Infinity);
  return array.map(item => {
    return typeof item === "string"
      ? splitString(item)
      : item;
  })
    // Make it completely flat
    .flat(Infinity)
    // Remove nulls or booleans
    .filter(Boolean)
    // Remove dupes
    .reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], [])
    // Remove classes
    .filter(className => {
      const classes = Array.isArray(removeClass)
        ? removeClass
        : typeof removeClass === 'string'
          ? splitString(removeClass)
          : [removeClass];
      return !classes.includes(className);
    });
}

export default filterClasses;