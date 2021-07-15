const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js", 
    path: path.resolve(__dirname, "build"),
    clean: true
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
  },
  optimization: {
    concatenateModules: true // hoist scope of all modules into one closure (enabled by default in production)
  },
  plugins: [
    new Dotenv({
      path: `./.env.development`
    })
  ],
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