const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js", 
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3. Inject styles into DOM
          "css-loader", // 2. Turn css into js
          "sass-loader" // 1. Turns sass into css
        ]
      }
    ]
  }
});