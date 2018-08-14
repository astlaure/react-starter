const webpack = require('webpack');

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
