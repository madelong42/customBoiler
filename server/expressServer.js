/* eslint-disable global-require */
const express = require('express');
const open = require('open');

console.log(`ENV: ${process.env.NODE_ENV}`);

const port = 6969;
const app = express();

if (process.env.NODE_ENV.trim() === 'dev') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../webpack.config.js');
  const webpackCompiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath
    // ...webpackConfig.stats
  }));
  app.use(webpackHotMiddleware(webpackCompiler, {
    log: console.log,
    path: '/__webpack_hmr'
  }));
}

app.use(express.static(`${__dirname}/../public/`));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}.\n`);
  if (process.env.NODE_ENV.trim() === 'dev') {
    open(`http://localhost:${port}`);
  }
});
