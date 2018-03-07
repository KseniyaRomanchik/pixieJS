const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PRODUCTION = process.env.WEBPACK_MODE === 'production'

module.exports = {
    entry: PRODUCTION ? 'index.js' : [
    'webpack-dev-server/client',
    path.resolve(__dirname, 'index.js')
  ],
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}