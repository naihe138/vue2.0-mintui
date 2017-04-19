/**
 * @file 公共文件打包配置
 * @author 何文林
 * @date 2017/4/19
 */
var path = require('path')
var webpack = require('webpack')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var env = config.build.env;
var projectRoot = path.resolve(__dirname, '../')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    public: [
      './src/public/js/serverConfig.js',
      './src/public/js/nativeApi.js'
    ]
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name]/js/[name].js',
    publicPath: '../',
    library: '[name]'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'src': path.resolve(__dirname, './src'),
      'nativeApi': path.resolve(__dirname, './src/public/js/nativeApi.js'),
      'serverConfig': path.resolve(__dirname, './src/public/js/serverConfig.js'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          formatter: require('eslint-friendly-formatter')
        },
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          name: utils.assetsPath('img/[name].[ext]')
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          name: utils.assetsPath('fonts/[name].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, "/dist/public/js/manifest.json"),
      name: "[name]",
      context: projectRoot
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
}
