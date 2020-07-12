import fetchThemeClasses from './fetchThemeClasses';

export default function themer (request) {
  if (typeof request === 'object' && Array.isArray(request)) {
    return request.map(item => fetchThemeClasses(item))
  } else if (typeof request === 'string') {
    return fetchThemeClasses(request);
  }
  return null;
}