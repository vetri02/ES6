const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app.js',
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
        },
      //   {
      //     test: /\.css$/,
      //     use: ['style-loader', 'css-loader'],
      //   },

      {
        test: /\.jpe?g$/,
        use: [
          'file-loader',
          //   {
          //     loader: 'image-webpack-loader',
          //     options: {},
          //   },
        ],
      },
    ],
  },
  plugins: [],
};