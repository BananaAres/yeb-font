let proxyObj = {}
//代理所有'/'
proxyObj['/'] = {
    //websocket
    ws: false,
    //目标地址
    target: 'http://localhost:8081',
    //发送请求头host会被设置成target
    changeOrigin: true,
    //不重写请求地址
    pathRewrite: {
        '^/': '/'
    }
}


proxyObj['/ws'] = {
    //websocket
    ws: true,
    //目标地址
    target: 'http://localhost:8081',
}

module.exports = {
    publicPath: './',
    devServer: {
        host: 'localhost',
        port: 80,
        proxy: proxyObj,
    }
}
