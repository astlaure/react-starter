const TARGET = process.env.npm_lifecycle_event;

const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @type {webpack.Configuration}
 */
const common = {
  entry: './src/index.jsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'bin'),
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(svg|png|jpg)$/, loader: 'file-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
					name: "vendor",
					priority: 10,
          enforce: true,
        }
      }
    }
  }
};

if (TARGET === 'start') {
  module.exports = merge(common, require('./config/webpack.dev'));
}

if (TARGET === 'build') {
  module.exports = merge(common, require('./config/webpack.prod'));
}
