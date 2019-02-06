const withSass = require('@zeit/next-sass');
const path = require('path');
const webpack = require('webpack');
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
      cfg.plugins = cfg.plugins.filter(
        plugin => plugin.constructor.name !== 'UglifyJsPlugin',
      );
      cfg.plugins.push(new webpack.optimize.UglifyJsPlugin());
    }
    cfg.node = { fs: 'empty' };
    return cfg;
  },
});
