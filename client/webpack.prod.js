const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js", 
    path: path.resolve(__dirname, "build"),
    clean: true // replaces/cleans build folder when changed after build
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(), // minify JS
      new TerserPlugin() // minify JS
    ]
  },
  plugins: [  
    new Dotenv(), // expose "process.env" to client
    new MiniCssExtractPlugin({filename: "[name].[contenthash].css"}) // extract css into its own bundle
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // 3. Extract css into files
          "css-loader", // 2. Turn css into js
          "sass-loader" // 1. Turns sass into css
        ]
      }
    ]
  } 
});