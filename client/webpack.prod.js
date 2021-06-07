const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js", 
    path: path.resolve(__dirname, "dist")
  }, 
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(), // minify JS
      new TerserPlugin() // minify JS
    ]
  },
  plugins: [  
    new MiniCssExtractPlugin({filename: "[name].[contenthash].css"}), // extract css into its own bundle
    new CleanWebpackPlugin() // replaces dist folder when changed after build
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