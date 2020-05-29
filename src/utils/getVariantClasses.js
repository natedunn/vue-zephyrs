import getThemeClasses from './getThemeClasses';

export default function getVariantClasses (element, variantToCheck) {
  if (Array.isArray(variantToCheck)) {
    return variantToCheck.map(variant =>
      getThemeClasses(element, `variant.${variant}`)
    );
  }
  return getThemeClasses(element, `variant.${variantToCheck}`);
}