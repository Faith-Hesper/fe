'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
    devServer: {
        proxy: {
            // 在这里配置如下代码
            '/interface.sina.cn': {
                target: 'https://interface.sina.cn', // 你请求的第三方接口
                changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    // 路径重写，
                    '^/interface.sina.cn': '', // 替换target中的请求地址，也就是说以后你在请求http://api.qingyunke.com/api.php这个地址的时候直接写成/api即可。
                },
            },
        },
    }
}
