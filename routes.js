const Routes = require('next-routes');
const frontRoutes = require('./constants/frontUrls');

let routes = Routes();

frontRoutes.forEach(route => {
  routes.add(route.name, route.pattern, route.path);
});

module.exports = routes;