var webpack = require('webpack')

module.exports = {

  entry: [
    './src/index.jsx'
  ],
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {}
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ]
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  devServer: {
    contentBase: './public',
  }

}
