export default function arrayMerge (array, type) {
  const newArray = [];
  array.forEach(item => newArray.push(item));
  return type === 'flat' ? newArray.flat(Infinity) : newArray;
}