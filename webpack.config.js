'use strict';

const path = require('path');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const html = require('html-webpack-plugin');
const babel = require('./webpack/babel');
const extractCSS = require('./webpack/css.extract');
const files = require('./webpack/files');
const progressBar = require('progress-bar-webpack-plugin');
const PATHS = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'dist')
};

const common = merge([
  {
    entry: {
      'index': PATHS.source + '/index.js',
    },
    output: {
      path: PATHS.build,
      filename: 'js/[name].js'
    },
    devtool: '#cheap-module-source-map',
    plugins: [
      new progressBar()
    ]
  },
  babel(),
  files()
]);

module.exports = function (env) {
  if (env === 'production') {
    return merge([
      common,
      extractCSS()
    ]);
  }
  if (env === 'development') {
    return merge([
      common,
      devserver(),
      sass()
    ]);
  }
};