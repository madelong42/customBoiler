/* eslint-disable sort-keys */
const webpack = require('webpack');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// windows adds extra space to NODE_ENV variable when set through command line.... shitty
const isProd = process.env.NODE_ENV.trim() === 'prod';

module.exports = {
  devtool: !isProd && 'eval-source-map',
  entry: isProd ? './client/index.js' : [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=3000&reload=true&overlay=true',
    'react-hot-loader/patch',
    './client/index.js'
  ],
  mode: isProd ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  },
  output: {
    filename: 'appBundle.js',
    path: `${__dirname}\\public\\`,
    publicPath: '/'
  },
  plugins: [
    isProd ?
      new ImageMinimizerPlugin({
        minimizerOptions: {
          plugins: [
            'gifsicle',
            'jpegtran',
            'optipng',
            [
              'svgo',
              {
                plugins: [
                  {
                    removeViewBox: false
                  }
                ]
              }
            ]
          ]
        }
      })
      : new webpack.HotModuleReplacementPlugin()
    // new ESLintPlugin() if u want eslint in output  (REDUNDANT webpacks hot loader outputs errors to browser window)
    // new CleanWebpackPlugin()   cleans outdir (only needed if using webpack provided html)
  ],
  resolve: {
    modules: [`${__dirname}\\client`, 'node_modules'],
    alias: isProd ? {} : { 'react-dom': '@hot-loader/react-dom' },
    extensions: ['*', '.js', '.jsx']
  },
  performance: { hints: 'warning' },
  stats: {
    preset: 'errors-warnings',
    colors: true,
    ids: true,

    env: true,
    // include value of --env in the output
    outputPath: true,
    // include absolute output path in the output
    publicPath: true,
    // include public path in the output

    // asset settings
    assets: true,
    // show list of assets in output
    assetsSort: 'size',
    // sorting of assets
    assetsSpace: 50,
    // number of asset lines to display
    cachedAssets: false,
    // show assets that are caching in output
    // excludeAssets: /\\.png$/,
    // hide some assets
    groupAssetsByPath: true,
    // group assets by their path in the output directory
    groupAssetsByExtension: true,
    // group assets by their extension
    groupAssetsByEmitStatus: true,
    // group assets depending if they are cached, emitted or compared
    groupAssetsByChunk: true,
    // group assets by how they relate to chunks
    groupAssetsByInfo: true,
    // group assets by meta information like immutable, development, etc.
    relatedAssets: true,
    // show assets that are related to other assets, like SourceMaps, compressed version, etc.
    performance: true,
    // show performance hints next to assets and modules
    // end asset settings

    children: true,
    // show stats for child compilations

    // logging: true,
    // show logging in output
    // loggingDebug: /webpack/,
    // show debug type logging for some loggers
    // loggingTrace: true,
    // show stack traces for warnings and errors in logging output

    warnings: true,
    // show warnings

    errors: true,
    // show errors
    errorDetails: true,
    // show details for errors
    errorStack: true,
    // show internal stack trace for errors
    moduleTrace: true,
    // show module trace for errors
    // (why was causing module referenced)

    builtAt: true,
    // show timestamp in summary
    errorsCount: true,
    // show errors count in summary
    warningsCount: true,
    // show warnings count in summary
    timings: true,
    // show build timing in summary
    version: true,
    // show webpack version in summary
    hash: true
    // show build hash in summary
  },
  optimization: {
    minimize: isProd,
    minimizer: [new CssMinimizerPlugin()]
  }
};
