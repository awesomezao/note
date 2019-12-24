[参考](https://juejin.im/post/5c1f8e52f265da6170071e43)

## 1.开启服务

```javascript
// 1. 引入 http 模块
var http = require("http");

// 2. 用 http 模块创建服务
/**
 * req 获取 url 信息 (request)
 * res 浏览器返回响应信息 (response)
 */
http.createServer(function (req, res) {
  // 设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
  res.writeHead(200, {
    "Content-Type": "text/html;charset=UTF-8"
  });

  // 往页面打印值
  res.write('<h1 style="text-align:center">Hello NodeJS</h1>');

  // 结束响应
  res.end();

}).listen(3000); // 监听的端口

```

## 2.URL模块

`Url`、`parse`、`resolve`、`resolveObject`、`format`、`URL`、`URLSearchParams`、`domainToASCII`、`domainToUnicod`

```javascript
// 1. 引入 url 模块
var url = require("url");

// 2. 引入 http 模块
var http = require("http");

// 3. 用 http 模块创建服务
/**
 * req 获取 url 信息 (request)
 * res 浏览器返回响应信息 (response)
 */
http.createServer(function (req, res) {

  // 4. 获取服务器请求
  /**
   * 访问地址是：http://localhost:3000/?userName=jsliang&userAge=23
   * 如果你执行 console.log(req.url)，它将执行两次，分别返回下面的信息：
   * /  ?userName=jsliang&userAge=23
   * /  /favicon.ico
   * 这里为了防止重复执行，所以排除 req.url == /favicon.ico 的情况
   */
  if(req.url != "/favicon.ico") {
    
    // 5. 使用 url 的 parse 方法
    /**
     * parse 方法需要两个参数：
     * 第一个参数是地址
     * 第二个参数是 true 的话表示把 get 传值转换成对象
     */ 
    var result = url.parse(req.url, true);
    console.log(result);
    /**
     * Url {
     *   protocol: null,
     *   slashes: null,
     *   auth: null,
     *   host: null,
     *   port: null,
     *   hostname: null,
     *   hash: null,
     *   search: '?userName=jsliang&userAge=23',
     *   query: { userName: 'jsliang', userAge: '23' },
     *   pathname: '/',
     *   path: '/?userName=jsliang&userAge=23',
     *   href: '/?userName=jsliang&userAge=23' }
     */

    console.log(result.query.userName); // jsliang

    console.log(result.query.userAge); // 23
  }

  // 设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
  res.writeHead(200, {
    "Content-Type": "text/html;charset=UTF-8"
  });

  // 往页面打印值
  res.write('<h1 style="text-align:center">Hello NodeJS</h1>');

  // 结束响应
  res.end();

}).listen(3000);

```

## 3.fs文件管理

`fs.stat` 检测是文件还是目录

`fs.mkdir` 创建目录

`fs.writeFile` 创建写入文件

`fs.appendFile` 追加文件

`fs.readFile` 读取文件

`fs.readdir` 读取目录

`fs.rename` 重命名

`fs.rmdir` 删除目录

`fs.unlink` 删除文件

1. 通过`fs.stat`检查一个读取的是文件还是目录

   ```javascript
   //  1. fs.stat
   let fs = require('fs');
   fs.stat('index.js', (error, stats) => {
     if(error) {
       console.log(error);
       return false;
     } else {
       console.log(stats);
       /**
        * Console：
        * Stats {
        *  dev: 886875,
        *  mode: 33206,
        *  nlink: 1,
        *  uid: 0,
        *  gid: 0,
        *  rdev: 0,
        *  blksize: undefined,
        *  ino: 844424931461390,
        *  size: 284,
        *  blocks: undefined,
        *  atimeMs: 1542847157494,
        *  mtimeMs: 1543887546361.2158,
        *  ctimeMs: 1543887546361.2158,
        *  birthtimeMs: 1542847157493.663,
        *  atime: 2018-11-22T00:39:17.494Z,
        *  mtime: 2018-12-04T01:39:06.361Z,
        *  ctime: 2018-12-04T01:39:06.361Z,
        *  birthtime: 2018-11-22T00:39:17.494Z }
        */
   
       console.log(`文件：${stats.isFile()}`); 
       // Console：文件：true
       
       console.log(`目录：${stats.isDirectory()}`); 
       // Console：目录：false
   
       return false;
     }
   })
   ```
   
2. `fs.mkdir`创建目录

   ```javascript
   //  2. fs.mkdir
   let fs = require('fs');
   
   /**
    * 接收参数
    * path - 将创建的目录路径
    * mode - 目录权限（读写权限），默认 0777
    * callback - 回调，传递异常参数 err
    */
   fs.mkdir('css', (err) => {
     if(err) {
       console.log(err);
       return false;
     } else {
       console.log("创建目录成功！");
       // Console：创建目录成功！
     }
   })
   
   ```

3. `fs.rmdir`删除目录

4. `fs.unlink`删除文件

5. `fs.writeFile`创建写入文件(覆盖)

   ```javascript
   //  3. fs.writeFile
   let fs = require('fs');
   
   /**
    * filename (String) 文件名称
    * data (String | Buffer) 将要写入的内容，可以是字符串或者 buffer 数据。
    * · encoding (String) 可选。默认 'utf-8'，当 data 是 buffer 时，该值应该为 ignored。
    * · mode (Number) 文件读写权限，默认 438。
    * · flag (String) 默认值 'w'。
    * callback { Function } 回调，传递一个异常参数 err。
    */
   fs.writeFile('index.js', 'Hello jsliang', (err) => {
     if(err) {
       console.log(err);
       return false;
     } else {
       console.log('写入成功！');
     }
   })
   
   ```

6. `fs.appendFile`追加文件内容

7. `fs.readFile`读取文件，`fs.readdir`读取目录

   ```javascript
   let fs = require('fs');
   
   // 5. fs.readFile
   fs.readFile('index.js', (err, data) => {
     if(err) {
       console.log(err);
       return false;
     } else {
       console.log("读取文件成功！");
       console.log(data);
       // Console：
       // 读取文件成功！
       // <Buffer 48 65 6c 6c 6f 20 6a 73 6c 69 61 6e 67 e8 bf 99 e6 ae b5 e6 96 87 e6 9c ac e6 98 af e8 a6 81 e8 bf bd e5 8a a0 e7 9a 84 e5 86 85 e5 ae b9>
     }
   })
   
   // 6. fs.readdir 读取目录
   fs.readdir('node_modules', (err, data) => {
     if(err) {
       console.log(err);
       return false;
     } else {
       console.log("读取目录成功！");
       console.log(data);
       // Console：
       // 读取目录成功！
       // [ '03_tool-multiply.js', 'jsliang-module' ]
     }
   })
   
   ```

8. `fs.rename`重命名

      ```javascript
      let fs = require('fs');
      
      // 7. fs.rename 重命名
      fs.rename('index.js', 'jsliang.js', (err) => {
        if(err) {
          console.log(err);
          return false;
        } else {
          console.log("重命名成功！");
        }
      })
      
      ```


## 4.fs流

`fs.createReadStream`创建读取流

`fs.createWriteStream`创建写入流

```javascript
// 新建 fs
const fs = require('fs');
// 流的方式读取文件
let fileReadStream = fs.createReadStream('index.js');
// 读取次数
let count = 0;
// 保存数据
let str = '';
// 开始读取
fileReadStream.on('data', (chunk) => {
  console.log(`${++count} 接收到：${chunk.length}`);
  // Console：1 接收到：30
  str += chunk;
})
// 读取完成
fileReadStream.on('end', () => {
  console.log("——结束——");
  console.log(count);
  console.log(str);

  // Console：——结束——
  // 1
  // console.log("Hello World！");
})
// 读取失败
fileReadStream.on('error', (error) => {
  console.log(error);
})

```

```javascript
let fs = require('fs');
let data = 'console.log("Hello World! 我要存入数据！")';

// 创建一个可以写入的流，写入到文件 index.js 中
let writeStream = fs.createWriteStream('index.js');
// 开始写入
writeStream.write(data, 'utf8');
// 写入完成
writeStream.end();
writeStream.on('finish', () => {
  console.log('写入完成！');
  // Console：写入完成
});

```

