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
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.mode = 'production';
            config["performance"] = {
                "maxEntrypointSize": 10000000,
                "maxAssetSize": 30000000
            }
        }
    },
    devServer: {
        proxy: {
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
