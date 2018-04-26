// 基础版，不分测试环境和生产环境

var path = require("path")
var webpack = require("webpack")

var HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin")


var webpackConfig = {
    entry:{
        index:'./src/index.js'      // 该名字是实际打包过去的文件名，
    },
    output:{
        path:path.join(__dirname,'dist' ),
        publicPath:'./'  , // 作用于js css img
        filename :'js/[name][hash].js'
    },
    module:{
        // rules:[
        //     {
        //         test:/(\.jsx|\.js)$/,
        //         use:{
        //             loader:"babel-loader"
        //         },
        //         excluded:/node_modules/
        //     }
        //
        // ]
    },
    plugins:[

        // 更改代码自动刷新
        new webpack.HotModuleReplacementPlugin(),

        // new CleanWebpackPlugin(path.join(__dirname,'dist')),
        // 自动生成一个html文件
        new HtmlWebpackPlugin({
            title:'webpack1.0',
            template:'./src/index.html',
            filename:'index.html',  // script引用的js文件路径（src）会受publicPath的影响
            minify:true

        })

        // 实现
        // webpack-dev-server  生成的包并没有在真实目录中，而是放在内存中（提供虚拟服务器, 非内置插件）
        // 默认当前目录为基本目录
    ],
    devtool: 'inline-source-map',
    node:{
      fs:'empty'
    },
    devServer: {
        host: '127.0.0.1',    // 默认localhost
        port: 8080,
        contentBase: path.join(__dirname, './src'),     // 提供给虚拟机的内容,监听的文件
        open:true,    // 自动打开浏览器
        // proxy: {
        //     '/proxy':{           //  127.0.0.1:8080/proxy/list.json
        //         target:'http://target.com',
        //         changeOrigin:true,         // http://target.com/proxy/list.json
        //         pathRewhite:{
        //             '^/proxy':''    // 正则匹配      ==>  http://target.com/list
        //         }
        //     }
        // },

        /**
         * watchOptions:{          // 添加自定义监听
         *  aggregateTimeout:200,
         *   poll:false,            // 每隔多少时间进行检查
         *  ignored:/node_modules/
         *  },
         */

        // overlay:{
        //     errors:true,
        //     warnings:false
        // },
        // publicPath:'./',  // url = ‘host ' +  'publicPath' + 'path'
        // disableHostCheck: true,
        // historyApiFallback: true, // true,页面出错不会出现404页面
        hot: true,
        inline: true,
        progress: true,
        // compress:true,      // 代码压缩
        stats: {
            colors: true
        }
    }

}





module.exports = webpackConfig