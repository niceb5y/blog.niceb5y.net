'use strict'

const webpack = require('webpack')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = {
  entry: {
    script: __dirname + '/src/js/script.js'
  },
  output: {
    path: __dirname + '/assets',
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new SWPrecacheWebpackPlugin({
      filename: 'service-worker.js',
      filepath: './service-worker.js',
      minify: true,
      staticFileGlobs: [
        '_site/assets/*',
        '_site/images/*',
        '_site/*.html',
        '_site/*/index.html'
      ],
      stripPrefix: '_site/',
      runtimeCaching: [
        {
          handler: 'cacheFirst',
          urlPattern: /^https:\/\/cdn\.shk\.im\/.*/
        },
        {
          handler: 'cacheFirst',
          urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/
        }
      ],
      mergeStaticsConfig: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['latest']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}
