// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: {
      import: "./src/index.js"
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
				test: /\.(js|jsx?)$/,
				exclude: [/node_modules/, /phaser-lib-custom/],
				use: {
					loader: "babel-loader",
				},
			},
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp3)$/i,
        type: 'asset/resource',
      },
    ]
  }
};