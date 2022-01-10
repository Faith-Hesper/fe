div置于底部
```html
<div style="position: absolute; z-index: 55; bottom: 5px; text-align: center; overflow: hidden; width: 100%; height: auto;">
    <input type="button" value="后续处理" style="width: 350px; height: 45px; color: black;">
</div>
```

setAttribute 设置标签属性

```javascript
div.setAttribute('order-state', 'canceled');
```

getAttribute 获取标签属性

```javascript
input.getAttribute('id')
```

textContent元素内文本

```javascript
input.textContent = "Hello World"
```

classList添加单个类

```javascript
document.body.classList.add('article');
```

随机数

```javascript
// 绝对值 取整 随机数
Math.abs(minutes - Math.floor(Math.random() * 60))
```

jQuery 设置Cookie

```html
// 引入脚本
<script src="https://cdn.staticfile.org/jquery/3.4.0/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
<script>
    $.cookie("姓名", data[0], {path: "/",expires: 3600}); // 设置cookie
    $.cookie('leave_time') // 取cookie
</script>
```

ajax一般步骤

```javascript
// 创建Ajax对象
var xhr = new XMLHttpRequest();
// 请求方式、请求方法
xhr.open('get','https://lntano.top/wechat/random.php')
// 发送请求
xhr.send()
// 获取响应
xhr.onload = function (){
    // xhr.status  // http状态码
    console.log(xhr.responseText) // 响应体
    var responseText = xhr.responseText;
    var data = responseText.split(";");
    //console.log(data)
    // console.log(JSON.parse(xhr.responseText)) // json字符串转换成json对象
}
```

