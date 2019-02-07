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
];

module.exports = URLS;
