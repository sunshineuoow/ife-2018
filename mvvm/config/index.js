const path = require('path')

module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    host: 'localhost',
    port: 8080,
    autoOpenBrowser: false,

    devtool: 'cheap-module-eval-source-map'
  },

  build: {
    index: path.resolve(__dirname, '../dist/index.html'),

    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    devtool: '#source-map',

    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  }
}