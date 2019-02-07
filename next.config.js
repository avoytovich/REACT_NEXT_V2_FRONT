const withSass = require('@zeit/next-sass');
const path = require('path');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = withSass({
  webpack: function(cfg, { dev }) {
    const originalEntry = cfg.entry;
    cfg.entry = async () => {
      const entries = await originalEntry();
      if (entries['main.js']) {
        entries['main.js'].unshift('./client/polyfills.js');
        !dev && entries['main.js'].push('./utils/offline');
      }
      return entries;
    };
    if (!dev) {
      cfg.plugins.push(
        new SWPrecacheWebpackPlugin({
          cacheId: 'myp-test',
          filepath: path.resolve('./static/sw.js'),
          staticFileGlobs: ['static/**/*'],
          minify: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          runtimeCaching: [
            {
              handler: 'fastest',
              urlPattern: /[.](png|jpg|css)/,
            },
            {
              handler: 'networkFirst',
              urlPattern: /^http.*/,
            },
          ],
        }),
      );
      // cfg.plugins = cfg.plugins.filter(
      //   plugin => plugin.constructor.name !== 'UglifyJsPlugin',
      // );
      cfg.optimization.minimize = true;
    }
    cfg.node = { fs: 'empty' };
    cfg.resolve = {
      alias: {
        services: path.resolve('./services'),
        pages: path.resolve('./pages'),
        static: path.resolve('./static'),
        utils: path.resolve('./utils'),
        constants: path.resolve('./constants'),
        client: path.resolve('./client'),
        containers: path.resolve('./containers'),
        locales: path.resolve('./locales'),
        config: path.resolve('./config'),
      },
    };
    return cfg;
  },
});
