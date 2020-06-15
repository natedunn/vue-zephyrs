import Theme from '../../z.theme';
import stringToDot from './stringToDot';
import findMagicKey from './findMagicKey';
import arrayMerge from './arrayMerge';

export default function fetchThemeClasses (request) {
  const { components } = Theme;
  const bases = findMagicKey(components, request, '_base');

  const requested = typeof stringToDot(components, request) === 'object'
    ? stringToDot(components, `${request}._default`)
    : stringToDot(components, request);

  return arrayMerge([bases, requested], 'flat');
}