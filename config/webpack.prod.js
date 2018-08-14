const webpack = require('webpack');
const MiniCssWebpackPlugin = require('mini-css-extract-plugin');

/**
 * @type {webpack.Configuration}
 */
const configuration = {
  mode: 'production',
  module: {
    rules: [
      { test: /\.(sa|sc|c)ss$/, loaders: [MiniCssWebpackPlugin.loader, 'css-loader', 'sass-loader'] },
    ],
  },
  plugins: [
    new MiniCssWebpackPlugin({
      filename: '[name].css',
    }),
  ],
};

module.exports = configuration;
