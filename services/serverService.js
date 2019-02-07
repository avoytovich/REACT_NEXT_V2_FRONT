import qs from 'qs';
import { isEmpty, isArray } from 'lodash';

export default function isServer() {
  if (!process.browser) return true;
  return false;
}

export function setLocale(key, value) {
  if (!isServer()) localStorage.setItem(key, value);
}

export function getLocale(key) {
  if (!isServer()) return localStorage.getItem(key);
  return undefined;
}

export function clear(key) {
  if (!isServer()) return localStorage.clear(key);
  return undefined;
}

export function changeQuery(router, name = 'modal', newValue) {
  const path =
    router.asPath === '/help-center/#contact-us'
      ? '/help-center'
      : router.asPath;
  const index = path.indexOf('?');
  const query = index !== -1 ? qs.parse(path.substring(index + 1)) : {};
  if (isArray(name)) {
    name.forEach(item => {
      query[item] && delete query[item];
    });
  } else {
    query[name] && delete query[name];
  }
  if (newValue) query[name] = newValue;
  const newUrl =
    index !== -1
      ? `${path.substring(0, index)}${
          !isEmpty(query) ? `?${qs.stringify(query)}` : ''
        }`
      : `${path}${!isEmpty(query) ? `?${qs.stringify(query)}` : ''}`;
  return newUrl;
}
