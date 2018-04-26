var path = require("path")
var express = require('express')
var webpack = require('webpack')
// 自动打开页面插件
var opn = require('opn')
/**
 * 作用： 生成一个中间件， 与webpack的compiler绑定, 在express启动服务app中调用这个中间件
 * 1. 监听资源变更，自动打包
 * 2. 走内存快速便宜
 * 3. 返回支持expres use格式的中间件
 *  使用原因 ： 走内存，速度更快
 * @type {*|(function(): webpackDevMiddleware)}
 */
var webpackMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

// 相当于创建一个小型的服务器
var app = express()

// 引入webpack配置
var config = require('../webpack.config')

// 创建一个用来传给webpack-middle-ware 的对象，并传入一个参数
var compiler = webpack(config)
var port = 8080
var devMiddleware = webpackMiddleware(compiler,{
        publicPath:config.output.publicPath,
        stats:{color:true}
    }
)
app.use(devMiddleware)

// 需搭配webpackDevMiddleware使用
var hotMiddleware = webpackHotMiddleware(compiler,{
    heartbeat:2000
})
app.use(hotMiddleware)

// 访问静态文件的路径
app.use(express.static(path.join(__dirname, "src")))

// 首次执行的函数
devMiddleware.waitUntilValid(function() {
    console.log("listen at localhost:" + port);
    //auto open browser
    opn('http://localhost:' + port);
});


// 监听事件
app.listen(8080, function(){
    console.log('test')
})






















