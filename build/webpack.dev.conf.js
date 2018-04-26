var webpack = require('webpack')
var merge = require('webpack-merge')
const express = require("express")
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// 本地需要支持热加载(手机端)
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")

const app = express()

var devWebpackConfig = {

    // ??
    devtool : 'inline-source-map',

    plugins : [],

    // 等价于express 相关的配置
    // 使用http-proxy-middleware 包
    devServer :{

    }

}

module.export = merge(baseWebpackConfig, devWebpackConfig )
