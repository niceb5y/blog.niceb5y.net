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
        '_site/*.html',
        '_site/page*/index.html'
      ],
      stripPrefix: '_site/',
      staticFileGlobsIgnorePatterns: [/script\.js/],
      runtimeCaching: [
        {
          handler: 'cacheFirst',
          urlPattern: /^https:\/\/cdn\.shk\.im\/.*/
        },
        {
          handler: 'cacheFirst',
          urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/
        },
        {
          handler: 'cacheFirst',
          urlPattern: /^https:\/\/.*\.cloudfront\.net\/.*/
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
