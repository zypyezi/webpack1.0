var path = require("path")
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = require('../config/index')


var SrcPath = path.join(_dirname, '..','src')
var DistPath = path.join(_dirname, '..', 'dist')

// 绝对路径
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}


var webpackConfig = {
    entry:{
        index : path.join(SrcPath, '/index.js')
    },
    output:{
        path : DistPath,
        filename : '[name].[' + process.env.NODE_ENV === 'dev' ? 'hash' : 'chunkhash' + ':5].js' ,
        publicPath : process.env.NODE_ENV == 'dev'
            ? config.dev.publicPath
            : config.build.publicPath
    },
    resolve :{
        extensions:['.js','.vue','.json'],
        alias:{
            '@':resolve('src')  // 为根目录添加别名
        }
    },
    module:{
        rules:[
            {
                test:/\.scss/,  // 正则匹配
                // include:,
                exclude: /node_modules/,  // 排除文件
                use:[ // use:["style-loader"]
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            noIeCompat: true
                        }
                    }
                ],
                // loader:,   // 是使用use的简便写法
                // options:{
                //
                // },
            }
        ]
    },
    plugins:[

    ]
}

module.export = webpackConfig