import stringToDot from './stringToDot';

export default function getThemeClasses (element, request) {

  function findMagicKey (element, request, key) {
    const items = request.split(".");
    typeof stringToDot(element, request) === 'object' ? items.push('._default') : null;

    function iterate (item, index) {
      const newItems = items.slice(0, index);
      newItems.push(key);
      return stringToDot(element, newItems.join('.'));
    }

    return items.map(iterate).filter(el => el != null);
  }

  function arrayMergeFlat (arrays) {
    const newArray = [];
    arrays.forEach(array => newArray.push(array));
    return newArray.flat(Infinity);
  }

  function requested (element, request) {
    const requestedItem = stringToDot(element, request);
    if (typeof requestedItem === 'object') {
      return stringToDot(element, request + '._default');
    }
    return requestedItem;
  }

  const bases = findMagicKey(element, request, '_base');
  const requestedClasses = requested(element, request);
  return arrayMergeFlat([bases, requestedClasses]);
}