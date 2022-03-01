'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
    publicPath: './',//基本路径
    outputDir: "dist",
    assetsDir: 'static',//放置生成的静态资源 (js、css、img、fonts) 的目录
    indexPath: "index.html",
    productionSourceMap: false,//生产环境是否生成 sourceMap 文件
    devServer: {
        proxy: {
            // 以/interface代替/interface.sina.cn,将所有https://interface.sina.cn请求重写为https:/interface
            '/interface': {
                target: 'https://interface.sina.cn', // 将/interface.sina.cn代理为https://interface.sina.cn/
                ws: true,
                changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                secure: true,
                pathRewrite: {
                    // 路径重写，
                    '^/interface': 'https://interface.sina.cn', // 替换target中的请求地址，也就是说以后你在请求http://api.qingyunke.com/api.php这个地址的时候直接写成/api即可。
                },
            },
            '/api': {
                target: 'https://api.tianapi.com', //API服务器的地址
                ws: true, //代理websockets
                changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
                secure: true,
                pathRewrite: {
                    // '^/api'是一个正则表达式，表示要匹配请求的url中，全部'http://localhost:8081/api' 转接为 http://localhost:8081/
                    '^/api.tianapi.com': '',
                }
            },
            '/ncov': {
                target: 'https://ncov.dxy.cn',
                changeOrigin: true,
                secure: true,
                pathRewrite: {
                    '^/ncov': 'https://ncov.dxy.cn'
                }
            },
            '/juhe': {
                target: 'https://apis.juhe.cn',
                ws: true,
                changeOrigin: true,
                secure: true,
                pathRewrite: {
                    '^/juhe': 'https://apis.juhe.cn'
                }
            },
            '/bili': {
                target: 'https://api.bilibili.com',
                ws: true,
                changeOrigin: true,
                secure: true,
                pathRewrite: {
                    '^/bili': 'https://api.bilibili.com'
                }
            }
        },
    }
}
