app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,HEAD,OPTIONS");
    if (req.method === 'OPTIONS') {
        res.send('OK!');
        return;
    }
    next();
});

axios.defaults.baseURL = 'http://127.0.0.1:8888';
axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = function (data) {
  if (!data) return data;
  let result = ``;
  for (let attr in data) {
    if (!data.hasOwnProperty(attr)) break;
    result += `&${attr}=${data[attr]}`;
  }
  return result.substring(1);
};
axios.interceptors.response.use(function onFulfilled(response) {
  return response.data;
}, function onRejected(reason) {
  return Promise.reject(reason);
});
axios.defaults.validateStatus = function (status) {
  return /^(2|3)\d{2}$/.test(status);
}

==============

### document.domain + iframe
只能实现：同一个主域，不同子域之间的操作
v.qq.com
sports.qq.com

父页面A  http://www.zhufengpeixun.cn/A.html
```
<iframe src="http://school.zhufengpeixun.cn/B.html"></iframe>
<script>
    document.domain = 'zhufengpeixun.cn';
    var user = 'admin';
</script>
```
子页面B  http://school.zhufengpeixun.cn/B.html
```
<script>
    document.domain = 'zhufengpeixun.cn';
    alert(window.parent.user);
</script>
```


### location.hash + iframe
A和C同源
A和B非同源

页面A
```
<iframe id="iframe" src="http://127.0.0.1:1002/B.html" style="display:none;"></iframe>
<script>
    let iframe = document.getElementById('iframe');
    //=>向B.html传hash值
    iframe.onload=function(){
       iframe.src = 'http://127.0.0.1:1002/B.html#msg=zhufengpeixun';
    }
    
    //=>开放给同域C.html的回调方法
    function func(res) {
        alert(res);
    }
</script>
```

页面B
```
<iframe id="iframe" src="http://127.0.0.1:1001/C.html" style="display:none;"></iframe>
<script>
    let iframe = document.getElementById('iframe');
    //=>监听A传来的HASH值改变，再传给C.html
    window.onhashchange = function () {
        iframe.src = "http://127.0.0.1:1001/C.html"+ location.hash;
    }
</script>
```

页面C
```
<script>
    //=>监听B传来的HASH值
    window.onhashchange = function () {
        //=>再通过操作同域A的js回调，将结果传回
        window.parent.parent.func(location.hash);
    };
</script>
```


### window.name + iframe
页面A
```
let proxy = function(url, callback) {
    let count = 0;
    let iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.onload = function() {
        if(count===0){
          iframe.contentWindow.location = 'http://www.zhufengpeixun.cn/proxy.html';
          count++;
          return;
        }
        callback(iframe.contentWindow.name);
    };
    document.body.appendChild(iframe);
};

//请求跨域B页面数据
proxy('http://www.zhufengpeixun.cn/B.html', function(data){
    alert(data);
});
```

B页面
```
window.name = 'zhufengpeixun';
```

proxy.html是空页面


=============================
### postMessage
https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage

A页面
```
<iframe src="http://www.zhufengpeixun.com/B.html"></iframe>
<script>
    let iframe = document.querySelector('iframe');
    iframe.onload = function () {
        iframe.contentWindow.postMessage('zhufengpeixun', 'http://www.zhufengpeixun.com/');
    }
    window.onmessage = function (ev) {
        console.log(ev.data);
    }
</script>
```

B页面
```
window.onmessage = function (ev) {
    console.log(ev.data);
    ev.source.postMessage(ev.data+'@@', ev.origin);
}
```

==========================
### WebSocket协议跨域
前端处理
```
<script src="./socket.io.js"></script>
<script>
let socket = io('http://127.0.0.1:3001/');
//=>连接成功处理
socket.on('connect', function() {
    //=>监听服务端消息
    socket.on('message', function(msg) {
        console.log('data from server:' + msg); 
    });
    //=>监听服务端关闭
    socket.on('disconnect', function() { 
        console.log('server socket has closed!');
    });
});
//=>发送消息给服务器端
socket.send("zhufengpeixun");
</script>
```

服务器端处理
```
//=>监听socket连接：server是服务器创建的服务
socket.listen(server).on('connection', function(client) {
    //=>接收信息
    client.on('message', function(msg) {
        //=>msg客户端传递的信息
        //...
        client.send(msg+'@@');
    });
    //=>断开处理
    client.on('disconnect', function() {
        console.log('client socket has closed!');
    });
});
```

==========================
### nginx反向代理
www.zhufengpeixun.cn -> www.zhufengpeixun.com
```
#proxy服务器
server {
    listen       80;
    server_name  www.zhufengpeixun.com;
    location / {
        proxy_pass   www.zhufengpeixun.cn; #反向代理
        proxy_cookie_demo www.zhufengpeixun.cn www.zhufengpeixun.com;
        add_header Access-Control-Allow-Origin www.zhufengpeixun.cn;
        add_header Access-Control-Allow-Credentials true;
    }
}
```

===========================