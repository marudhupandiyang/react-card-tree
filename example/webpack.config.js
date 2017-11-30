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
    loaders: [
      { exclude: /node_modules/, loader: 'babel-loader' }
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
