/* eslint-disable prefer-named-capture-group */
/* eslint-disable sort-keys */
const webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    './client/index.js'
  ],
  mode: 'development',
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
    path: `${__dirname}/public/`,
    publicPath: '/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['*', '.js', '.jsx']
  }
};
