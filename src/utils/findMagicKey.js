import stringToDot from './stringToDot';

export default function findMagicKey (element, request, key) {
  const items = request.split(".");
  typeof stringToDot(element, request) === 'object' ? items.push('._default') : null;

  function iterate (item, index) {
    const newItems = items.slice(0, index);
    newItems.push(key);
    return stringToDot(element, newItems.join('.'));
  }

  return items.map(iterate).filter(el => el != null);
}