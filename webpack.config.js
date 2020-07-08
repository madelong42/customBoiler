var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    './client/index.js'
  ],
  output: {
    filename: 'appBundle.js',
    path: __dirname + '/public/',
    publicPath: '/'
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
            }
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      { test: /\.txt$/,
        use: 'raw-loader'
      }
    ],
  }
};