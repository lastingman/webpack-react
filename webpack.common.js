const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js',
  },

  plugins: [
    new CleanWebpackPlugin(['docs']),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
    })
  ],

};
