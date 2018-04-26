var webpack = require('webpack')
var merge = require('webpack-merge')

var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var prodWebpackConfig = {

}

module.export = merge(baseWebpackConfig,  prodWebpackConfig)