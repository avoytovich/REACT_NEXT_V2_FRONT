// Restart server after
// Name Pattern Page
const URLS = [
  {
    name: 'indexPage',
    pattern: '/',
    path: 'index',
  },
  {
    name: 'test',
    pattern: '/test',
    path: 'test',
  },
  {
    name: 'testWithId',
    pattern: '/test/:id',
    path: 'test',
  },
  {
    name: 'cardholder',
    pattern: '/cardholder/:id',
    path: 'cardholder',
  },
];

module.exports = URLS;
