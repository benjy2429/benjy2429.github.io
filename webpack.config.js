const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './_assets/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets')
  },
  module: {
    rules: [
      {
        test: /main.scss$/,
        use: ExtractTextPlugin.extract(['sass-loader'])
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      output: {
        comments: false
      }
    }),
    new ExtractTextPlugin('main.css')
  ]
};
