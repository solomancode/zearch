const path = require("path")
const HtmlPlugin = require("html-webpack-plugin")

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'zearch.bundle.js',
    path: path.resolve(__dirname,'build'),
    libraryTarget: 'umd'
  },

  devtool: 'source-map',

  devServer: {
    contentBase: './build',
    watchContentBase: true
  },

  plugins: [
    new HtmlPlugin({
      title: 'Zearch',
      template: './src/main.html'
    })
  ],

  module: {
    rules: [{
      test: /\.(jsx?|styled)$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins: ["transform-react-jsx"]
        }
      }
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.(ascii|txt)$/,
      use: [
        'raw-loader'
      ]
    }]
  }
  
}