import getThemeClasses from './getThemeClasses';

export default function getStatusClasses (element, requestedStatus) {
  if (Array.isArray(requestedStatus)) {
    return requestedStatus.map(status =>
      getThemeClasses(element, `status.${status}`)
    );
  }
  return getThemeClasses(element, `status.${requestedStatus}`);
}