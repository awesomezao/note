# [HTTP消息头（HTTP headers）－常用的HTTP请求头与响应头](https://www.cnblogs.com/honghong87/p/6941436.html)



`HTTP消息头`是指，在超文本传输协议（ Hypertext Transfer Protocol ，HTTP）的请求和响应消息中，协议头部分的那些组件。HTTP消息头用来准确描述正在获取的资源、服务器或者客户端的行为，定义了HTTP事务中的具体操作参数。

1. [关于HTTP消息头](https://itbilu.com/other/relate/EJ3fKUwUx.html#about)
2. [常用的`HTTP请求头`](https://itbilu.com/other/relate/EJ3fKUwUx.html#http-request-headers)
3. [常用的`HTTP响应头`](https://itbilu.com/other/relate/EJ3fKUwUx.html#http-response-headers)

 

### 1. 关于HTTP消息头

`HTTP消息头`是在，客户端请求（Request）或服务器响应（Response）时传递的，位请求或响应的第一行，`HTTP消息体`（请求或响应的内容）是其后传输。`HTTP消息头`，以明文的字符串格式传送，是以冒号分隔的键/值对，如：`Accept-Charset: utf-8`，每一个消息头最后以回车符(`CR`)和换行符(`LF`)结尾。`HTTP消息头`结束后，会用一个空白的字段来标识，这样就会出现两个连续的`CR-LF`。

`HTTP消息头`由IANA（The Internet Assigned Numbers Authority，互联网数字分配机构）来整理和维护。其标准最早来源于[RFC 4229](http://tools.ietf.org/html/rfc4229)。IANA将其整理到了[消息头](http://www.iana.org/assignments/message-headers/perm-headers.html)文档，文档中还包括了[一些新提出的信息头](http://www.iana.org/assignments/message-headers/message-headers.xhtml#prov-headersl)。

`HTTP消息头`支持自定义， 自定义的专用消息头一般会添加`'X-'`前缀。

 

### 2. 常用的`HTTP请求头`

| 协议头              | 说明                                                         | 示例                                                    | 状态       |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------- | ---------- |
| Accept              | 可接受的响应内容类型（`Content-Types`）。                    | `Accept: text/plain`                                    | 固定       |
| Accept-Charset      | 可接受的字符集                                               | `Accept-Charset: utf-8`                                 | 固定       |
| Accept-Encoding     | 可接受的响应内容的编码方式。                                 | `Accept-Encoding: gzip, deflate`                        | 固定       |
| Accept-Language     | 可接受的响应内容语言列表。                                   | `Accept-Language: en-US`                                | 固定       |
| Accept-Datetime     | 可接受的按照时间来表示的响应内容版本                         | Accept-Datetime: Sat, 26 Dec 2015 17:30:00 GMT          | 临时       |
| Authorization       | 用于表示HTTP协议中需要认证资源的认证信息                     | Authorization: Basic OSdjJGRpbjpvcGVuIANlc2SdDE==       | 固定       |
| Cache-Control       | 用来指定当前的请求/回复中的，是否使用缓存机制。              | `Cache-Control: no-cache`                               | 固定       |
| Connection          | 客户端（浏览器）想要优先使用的连接类型                       | `Connection: keep-alive``Connection: Upgrade`           | 固定       |
| Cookie              | 由之前服务器通过`Set-Cookie`（见下文）设置的一个HTTP协议Cookie | `Cookie: $Version=1; Skin=new;`                         | 固定：标准 |
| Content-Length      | 以8进制表示的请求体的长度                                    | `Content-Length: 348`                                   | 固定       |
| Content-MD5         | 请求体的内容的二进制 MD5 散列值（数字签名），以 Base64 编码的结果 | Content-MD5: oD8dH2sgSW50ZWdyaIEd9D==                   | 废弃       |
| Content-Type        | 请求体的MIME类型 （用于POST和PUT请求中）                     | Content-Type: application/x-www-form-urlencoded         | 固定       |
| Date                | 发送该消息的日期和时间（以[RFC 7231](http://tools.ietf.org/html/rfc7231#section-7.1.1.1)中定义的"HTTP日期"格式来发送） | Date: Dec, 26 Dec 2015 17:30:00 GMT                     | 固定       |
| Expect              | 表示客户端要求服务器做出特定的行为                           | `Expect: 100-continue`                                  | 固定       |
| From                | 发起此请求的用户的邮件地址                                   | `From: user@itbilu.com`                                 | 固定       |
| Host                | 表示服务器的域名以及服务器所监听的端口号。如果所请求的端口是对应的服务的标准端口（80），则端口号可以省略。 | `Host: www.itbilu.com:80``Host: www.itbilu.com`         | 固定       |
| If-Match            | 仅当客户端提供的实体与服务器上对应的实体相匹配时，才进行对应的操作。主要用于像 PUT 这样的方法中，仅当从用户上次更新某个资源后，该资源未被修改的情况下，才更新该资源。 | If-Match: "9jd00cdj34pss9ejqiw39d82f20d0ikd"            | 固定       |
| If-Modified-Since   | 允许在对应的资源未被修改的情况下返回304未修改                | If-Modified-Since: Dec, 26 Dec 2015 17:30:00 GMT        | 固定       |
| If-None-Match       | 允许在对应的内容未被修改的情况下返回304未修改（ 304 Not Modified ），参考 超文本传输协议 的实体标记 | If-None-Match: "9jd00cdj34pss9ejqiw39d82f20d0ikd"       | 固定       |
| If-Range            | 如果该实体未被修改过，则向返回所缺少的那一个或多个部分。否则，返回整个新的实体 | If-Range: "9jd00cdj34pss9ejqiw39d82f20d0ikd"            | 固定       |
| If-Unmodified-Since | 仅当该实体自某个特定时间以来未被修改的情况下，才发送回应。   | If-Unmodified-Since: Dec, 26 Dec 2015 17:30:00 GMT      | 固定       |
| Max-Forwards        | 限制该消息可被代理及网关转发的次数。                         | `Max-Forwards: 10`                                      | 固定       |
| Origin              | 发起一个针对[跨域资源共享](http://itbilu.com/javascript/js/VkiXuUcC.html)的请求（该请求要求服务器在响应中加入一个`Access-Control-Allow-Origin`的消息头，表示访问控制所允许的来源）。 | `Origin: http://www.itbilu.com`                         | 固定: 标准 |
| Pragma              | 与具体的实现相关，这些字段可能在请求/回应链中的任何时候产生。 | `Pragma: no-cache`                                      | 固定       |
| Proxy-Authorization | 用于向代理进行认证的认证信息。                               | Proxy-Authorization: Basic IOoDZRgDOi0vcGVuIHNlNidJi2== | 固定       |
| Range               | 表示请求某个实体的一部分，字节偏移以0开始。                  | `Range: bytes=500-999`                                  | 固定       |
| Referer             | 表示浏览器所访问的前一个页面，可以认为是之前访问页面的链接将浏览器带到了当前页面。`Referer`其实是`Referrer`这个单词，但RFC制作标准时给拼错了，后来也就将错就错使用`Referer`了。 | Referer: http://itbilu.com/nodejs                       | 固定       |
| TE                  | 浏览器预期接受的传输时的编码方式：可使用回应协议头`Transfer-Encoding`中的值（还可以使用"trailers"表示数据传输时的分块方式）用来表示浏览器希望在最后一个大小为0的块之后还接收到一些额外的字段。 | `TE: trailers,deflate`                                  | 固定       |
| User-Agent          | 浏览器的身份标识字符串                                       | `User-Agent: Mozilla/……`                                | 固定       |
| Upgrade             | 要求服务器升级到一个高版本协议。                             | Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11          | 固定       |
| Via                 | 告诉服务器，这个请求是由哪些代理发出的。                     | Via: 1.0 fred, 1.1 itbilu.com.com (Apache/1.1)          | 固定       |
| Warning             | 一个一般性的警告，表示在实体内容体中可能存在错误。           | Warning: 199 Miscellaneous warning                      | 固定       |

 

### 3. 常用的`HTTP响应头`

| 响应头                      | 说明                                                         | 示例                                                         | 状态       |
| --------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ---------- |
| Access-Control-Allow-Origin | 指定哪些网站可以`跨域源资源共享`                             | `Access-Control-Allow-Origin: *`                             | 临时       |
| Accept-Patch                | 指定服务器所支持的文档补丁格式                               | Accept-Patch: text/example;charset=utf-8                     | 固定       |
| Accept-Ranges               | 服务器所支持的内容范围                                       | `Accept-Ranges: bytes`                                       | 固定       |
| Age                         | 响应对象在代理缓存中存在的时间，以秒为单位                   | `Age: 12`                                                    | 固定       |
| Allow                       | 对于特定资源的有效动作;                                      | `Allow: GET, HEAD`                                           | 固定       |
| Cache-Control               | 通知从服务器到客户端内的所有缓存机制，表示它们是否可以缓存这个对象及缓存有效时间。其单位为秒 | `Cache-Control: max-age=3600`                                | 固定       |
| Connection                  | 针对该连接所预期的选项                                       | `Connection: close`                                          | 固定       |
| Content-Disposition         | 对已知MIME类型资源的描述，浏览器可以根据这个响应头决定是对返回资源的动作，如：将其下载或是打开。 | Content-Disposition: attachment; filename="fname.ext"        | 固定       |
| Content-Encoding            | 响应资源所使用的编码类型。                                   | `Content-Encoding: gzip`                                     | 固定       |
| Content-Language            | 响就内容所使用的语言                                         | `Content-Language: zh-cn`                                    | 固定       |
| Content-Length              | 响应消息体的长度，用8进制字节表示                            | `Content-Length: 348`                                        | 固定       |
| Content-Location            | 所返回的数据的一个候选位置                                   | `Content-Location: /index.htm`                               | 固定       |
| Content-MD5                 | 响应内容的二进制 MD5 散列值，以 Base64 方式编码              | Content-MD5: IDK0iSsgSW50ZWd0DiJUi==                         | 已淘汰     |
| Content-Range               | 如果是响应部分消息，表示属于完整消息的哪个部分               | Content-Range: bytes 21010-47021/47022                       | 固定       |
| Content-Type                | 当前内容的`MIME`类型                                         | Content-Type: text/html; charset=utf-8                       | 固定       |
| Date                        | 此条消息被发送时的日期和时间(以[RFC 7231](http://tools.ietf.org/html/rfc7231#section-7.1.1.1)中定义的"HTTP日期"格式来表示) | Date: Tue, 15 Nov 1994 08:12:31 GMT                          | 固定       |
| ETag                        | 对于某个资源的某个特定版本的一个标识符，通常是一个 消息散列  | ETag: "737060cd8c284d8af7ad3082f209582d"                     | 固定       |
| Expires                     | 指定一个日期/时间，超过该时间则认为此回应已经过期            | Expires: Thu, 01 Dec 1994 16:00:00 GMT                       | 固定: 标准 |
| Last-Modified               | 所请求的对象的最后修改日期(按照 RFC 7231 中定义的“超文本传输协议日期”格式来表示) | Last-Modified: Dec, 26 Dec 2015 17:30:00 GMT                 | 固定       |
| Link                        | 用来表示与另一个资源之间的类型关系，此类型关系是在[RFC 5988](https://tools.ietf.org/html/rfc5988)中定义 | `Link: `; rel="alternate"                                    | 固定       |
| Location                    | 用于在进行重定向，或在创建了某个新资源时使用。               | Location: http://www.itbilu.com/nodejs                       | 固定       |
| P3P                         | P3P策略相关设置                                              | P3P: CP="This is not a P3P policy!                           | 固定       |
| Pragma                      | 与具体的实现相关，这些响应头可能在请求/回应链中的不同时候产生不同的效果 | `Pragma: no-cache`                                           | 固定       |
| Proxy-Authenticate          | 要求在访问代理时提供身份认证信息。                           | `Proxy-Authenticate: Basic`                                  | 固定       |
| Public-Key-Pins             | 用于防止中间攻击，声明网站认证中传输层安全协议的证书散列值   | Public-Key-Pins: max-age=2592000; pin-sha256="……";           | 固定       |
| Refresh                     | 用于重定向，或者当一个新的资源被创建时。默认会在5秒后刷新重定向。 | Refresh: 5; url=http://itbilu.com                            |            |
| Retry-After                 | 如果某个实体临时不可用，那么此协议头用于告知客户端稍后重试。其值可以是一个特定的时间段(以秒为单位)或一个超文本传输协议日期。 | 示例1:Retry-After: 120示例2: Retry-After: Dec, 26 Dec 2015 17:30:00 GMT | 固定       |
| Server                      | 服务器的名称                                                 | `Server: nginx/1.6.3`                                        | 固定       |
| Set-Cookie                  | 设置`HTTP cookie`                                            | Set-Cookie: UserID=itbilu; Max-Age=3600; Version=1           | 固定: 标准 |
| Status                      | 通用网关接口的响应头字段，用来说明当前HTTP连接的响应状态。   | `Status: 200 OK`                                             |            |
| Trailer                     | `Trailer`用户说明传输中分块编码的编码信息                    | `Trailer: Max-Forwards`                                      | 固定       |
| Transfer-Encoding           | 用表示实体传输给用户的编码形式。包括：`chunked`、`compress`、 `deflate`、`gzip`、`identity`。 | Transfer-Encoding: chunked                                   | 固定       |
| Upgrade                     | 要求客户端升级到另一个高版本协议。                           | Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11               | 固定       |
| Vary                        | 告知下游的代理服务器，应当如何对以后的请求协议头进行匹配，以决定是否可使用已缓存的响应内容而不是重新从原服务器请求新的内容。 | `Vary: *`                                                    | 固定       |
| Via                         | 告知代理服务器的客户端，当前响应是通过什么途径发送的。       | Via: 1.0 fred, 1.1 itbilu.com (nginx/1.6.3)                  | 固定       |
| Warning                     | 一般性警告，告知在实体内容体中可能存在错误。                 | Warning: 199 Miscellaneous warning                           | 固定       |
| WWW-Authenticate            | 表示在请求获取这个实体时应当使用的认证模式。                 | `WWW-Authenticate: Basic`                                    | 固定       |

 