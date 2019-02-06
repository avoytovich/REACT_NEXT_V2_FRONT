// server.js
const next = require('next');
const express = require('express');

const compression = require('compression');
const routes = require('./routes');


const isDev = process.env.NODE_ENV !== 'production';
const app = next({ dev: isDev });
const handler = routes.getRequestHandler(app);

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';


  const getPort = env => {
    switch (env) {
      case 'production':
        return 443;
      default:
        return 3000;
    }
  };

  // With express
  const port = getPort(process.env.NODE_ENV);
  console.warn('PORT: ', port);
  console.warn('process.env.NODE_ENV: ', process.env.NODE_ENV);
  app.prepare().then(() => {
    const server = express();
    server.get('/sw.js', (req, res) => {
      app.serveStatic(req, res, path.resolve('./static/sw.js'));
    });
    server
      .use(compression())
      .use(express.static('static'))
      .use(handler)
      server.listen(port);
  });

