import { cloneDeep } from 'lodash';
import Cookies from 'js-cookie';

import { CHANGE_LANGUAGE } from 'constants/actions';
import isServer from 'services/serverService';

const lang = 'en';

if (!isServer()) {
  // lang = navigator.language.slice(0, 2) === 'de' ? 'de' : lang;
  // lang = Cookies.get('lang') ? Cookies.get('lang') : lang;

  Cookies.set('lang', lang);
}

const defState = { lang };

export default function localization(state = cloneDeep(defState), action) {
  if (action.type === CHANGE_LANGUAGE) {
    if (!isServer()) {
      Cookies.set('lang', action.lang);
    }
    return { lang: action.lang };
  }
  if (isServer()) {
    return state;
  }
  return defState;
}
