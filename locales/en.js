/* eslint-disable */
import objKeys2Strings from 'services/objKeys2Strings';

export default {
  messages: objKeys2Strings({
    test: {
      testString: 'test string',
    },
    menu: {
      team: 'Team',
      clickMe: 'Click me',
      searchBy: 'Search by',
      otherCards: 'Other Cards'
    }
  }),
  // formats: object,
  // messages: object,
  // textComponent: any,
  locale: 'en',
};
