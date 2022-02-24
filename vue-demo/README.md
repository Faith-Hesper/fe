# vue-demo
    丁香医生项目
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
### 接口
    ```
    econNum 现有确诊
    conNum 累积确诊
    deathNum 累积死亡
    cureNum 累积治愈
    jwsrNum 境外输入
    ```
### 部署
1. 配置vue
   在vue.config.js中填好相应的配置,
   ```javascript
    publicPath: './',   //设置成相对路径
    outputDir: "dist",  //文件输出目录
    assetsDir: 'static',    //放置生成的静态资源 (js、css、img、fonts) 的目录
    indexPath: "index.html",
    productionSourceMap: false, //生产环境是否生成 sourceMap 文件
    devServer: {
    // 以/interface代替/interface.sina.cn,将所有https://interface.sina.cn请求重写为https:/interface
   '/interface': {
        target: 'https://interface.sina.cn', //API服务器的地址
        ws: true, //代理websockets
        changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
        secure: true,
        pathRewrite: {
            // '^/interface.sina.cn'是一个正则表达式，表示要匹配请求的url中，全部'http://localhost:8081/interface.sina.cn' 转接为 http://localhost:8081/
        '^/interface': 'https://interface.sina.cn',
            }
        }
    ```
2. npm run build
3. 上传
   生成的dist文件到服务器
4. Nginx配置跨域
   根据vue.config.js中的proxy设置跨域
   ```javascript
   // 后面带/与不带有区别
   location /interface {	
        proxy_pass https://interface.sina.cn/;
        add_header Access-Control-Allow-Origin $http_origin;
        add_header Access-Control-Allow-Headers $http_access_control_request_headers;
        add_header 'Access-Control-Allow-Methods' '*';
	    }
   ```