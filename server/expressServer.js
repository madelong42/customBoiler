/* eslint-disable sort-keys */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config.js');
const webpackCompiler = webpack(webpackConfig);

const app = express();

app.use(webpackDevMiddleware(webpackCompiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: { ...webpackConfig.stats }
}));

app.use(webpackHotMiddleware(webpackCompiler, {
  log: console.log,
  path: '/__webpack_hmr'
}));

app.use(express.static(`${__dirname}/../public/`));

app.listen(3001, () => {

  console.log('Example app listening on port 3001!\n');

});
