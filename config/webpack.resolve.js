/* eslint import/no-extraneous-dependencies: 0 */

const webpack = require('webpack'); /* eslint no-unused-vars: 0 */
const path = require('path');

/**
 * @type {webpack.Configuration}
 */
const configuration = {
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      Components: path.resolve(__dirname, '../src/app'),
      // Add other top level folders
    },
  },
};

module.exports = configuration;
