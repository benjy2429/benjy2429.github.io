var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './_assets/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets')
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      output: {
        comments: false
      }
    })
  ]
};