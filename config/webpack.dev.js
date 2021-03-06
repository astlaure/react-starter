/* eslint import/no-extraneous-dependencies: 0 */

const webpack = require('webpack'); /* eslint no-unused-vars: 0 */

/**
 * @type {webpack.Configuration}
 */
const configuration = {
  mode: 'development',
  module: {
    rules: [
      { test: /\.(sa|sc|c)ss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'source-map',
};

module.exports = configuration;
