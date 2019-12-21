# CSS书写规范和顺序

### 前言

对于项目，那就是我们的亲儿子啊，作为一个前端菜鸟，面向用户就是将自己的儿子介绍给别人认识，肯定要让他白白净净，漂漂亮亮的啦，给别人一眼就喜欢上的感觉咯，哈哈哈~

常在河边走，哪有不湿鞋，在我们编程的工程中，尤其是前端的同学，肯定少不了跟Css打交道，命名、缩写、书写顺序等都是有一定规范，这个规范可能来源于你、我、或者浏览器等不定向人群（这个规范是我瞎编的），今天自己整合收集，以及个人项目用到的html+css的书写规范送给在"编程界"奋斗的小伙伴，你 不是一个人在战斗。

话不多说，锅烧空气，锅热放油，放入写好的html+css炸一遍，捞出，控油，裹上鸡蛋液，粘上面包糠，再炸，隔壁小孩都馋哭了，不好吃你来打我。

**切入主题↓↓↓**

#### 1、命名规则说明

- 1、所有的命名`最好都小写`
- 2、属性的值一定要用`双引号("")`括起来，且一定要有值如`class="app",id="app"`
- 3、每个标签都要有开始和结束，且要有正确的层次，排版有规律工整例如：`<div></div>`
- 4、空元素要有结束的tag或于开始的tag后加上"/" `<br />、<img />`
- 5、表现与结构完全分离，代码中不涉及任何的表现元素，如`style、font、bgColor、border`等
- 6、`<h1>到<h6>`的定义，应遵循从大到小的原则，体现文档的结构，并有利于搜索引擎的查询,因此，请不要利用标题标签来改变同一行中的字体大小。相反，我们应当使用层叠样式表定义来达到漂亮的显示效果。
- 7、给每一个表格和表单加上一个唯一的、结构标记`id`
- 8、给图片加上alt标签,`alt`属性是一个必需的属性，它规定在图像无法显示时的替代文本。假设由于下列原因用户无法查看图像，alt 属性可以为图像提供替代的信息：`网速太慢`、`src 属性中的错误`、`浏览器禁用图像`、`用户使用的是屏幕阅读器`。
- 9、尽量使用英文命名原则
- 10、尽量不缩写，除非一看就明白的单词如`btn`。
- 11、命名方式(**BEM**)：类-体（例：`g-head`）、类-体-修饰符（例：`u-btn-active`）。
- 12、scss中的变量、函数、混合、placeholder采用驼峰式命名
- 13、后代选择器：体-修饰符即可（例：.m-page .cut{}）注：后代选择器不要在页面布局中使用，因为污染的可能性较大；
- 14、减少id命名，id在JS是唯一的，不能多次使用，id的优先级优先与class，所以id应该按需使用，而不能滥用。

#### 2、网页外层重要部分CSS样式命名

```
  wrap ------------------ 用于最外层
  header ---------------- 用于头部
  main ------------------ 用于主体内容（中部）
  main-left ------------- 左侧布局
  main-right ------------ 右侧布局
  nav ------------------- 网页菜单导航条
  content --------------- 用于网页中部主体
  footer ---------------- 用于底部
复制代码
```



![Alt](https://user-gold-cdn.xitu.io/2019/8/15/16c94a2ec9ff1c44?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



#### 3、样式属性顺序

- 1、定位：`position` `z-index` `left` `right` `top` `bottom` `clip`等。
- 2、自身属性：`width` `height` `min-height` `max-height` `min-width` `max-width`等。
- 3、文字样式：`color` `font-size` `letter-spacing`, `color` `text-align`等。
- 4、背景：`background-image` `border`等。
- 5、文本属性: `text-align` `vertical-align` `text-wrap` `text-transform` `text-indent` `text-decoration`  `letter-spacing` `word-spacing` `white-space` `text-overflow`等。
- 6、css3中属性：`content`、`box-shadow`、`animation`、`border-radius`、`transform`等

```
/* yes */                             /* no */
.example {                            .example {   
  z-index: -1;                          color: red;
  display: inline-block;                background-color: #eee;
  font-size: 16px;                      display: inline-block;
  color: red;                           z-index: -1;
  background-color: #eee;               font-size: 16px;
}                                     }
复制代码
```

**目的**：减少浏览器reflow(回流)，提升浏览器渲染dom的性能。

文档加载完成到完全显示之间浏览器的渲染流程为：

> 1）浏览器解析html构建dom树，解析css构建cssom树即`css rule tree`：将html和css都解析成树形的数据结构； dom树的构建过程是一个深度遍历过程：当前节点的所有子节点都构建好后才会去构建当前节点的下一个兄弟节点。

> 2）构建render树：DOM树和cssom树合并之后形成render树。为了构建渲染树，浏览器大体完成了下列工作：从DOM树的根节点开始遍历每个可见节点。对于每个可见节点，为其找到适配的CSSOM规则并应用它们。发射可见节点，连同其内容和计算的样式。渲染树中包含了屏幕上所有可见内容及其样式信息。

> 3）布局render树：有了render树，浏览器已经知道网页中有哪些节点，各个节点的css定义以及它们的从属关系，接着就开始布局，计算出每个节点在屏幕中的位置和大小。(html采用了一种流式布局的布局模型，从上到下，从左到右顺序布局，布局的起点是从render树的根节点开始的，对应dom树的document节点，其初始位置为(0,0)，详细的布局过程为：每个renderer的宽度由父节点的renderer确定。父节点遍历子节点，确定子节点的位置(x,y)，调用子节点的layout方法确定其高度，父节点根据子节点的height, margin, padding确定自身的高度)。

> 4）渲染，绘制render树：浏览器已经知道啦哪些节点要显示，每个节点的css属性是什么，每个节点在屏幕中的位置是哪里。就进入啦最后一步，按照计算出来的规则，通过显卡把内容画在屏幕上。



![Alt](https://user-gold-cdn.xitu.io/2019/8/15/16c9499933082abd?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



> 浏览器并不是一获取到css样式就立马开始解析而是根据css样式的书写顺序按照dom树的结构分布render样式，完成第（2）步，然后开始遍历每个树节点的css样式进行解析，此时的css样式的遍历顺序完全是按照之前的的书写顺序，在解析过程中，`一旦浏览器发现某个元素的定位变化影响布局`，则需要倒回去重新渲染。

> 例如css样式：`{width: 100px; height: 100px; background-color: red; position: absolute;}`当浏览器解析到position的时候突然发现该元素是绝对定位元素需要脱离文档流，而之前却是按照普通元素进行解析的，所以不得不重新渲染，解除该元素在文档中所占位置，然而由于该元素的占位发生变化，其他元素也可能会受到回流的影响而重新排位，最终导致（3）步骤花费时间太久而影响到（4）步骤的显示，影响了用户体验。

**注：render树的结构不等同于DOM树的结构，一些设置display:none的节点不会被放在render树中，但会在dom树中。**

> 有些情况，比如修改了`元素的样式`，浏览器并不会立刻`回流(reflow)`或`重绘(repaint)`，而是把这些操作积攒一批，然后做一次**reflow**，这也叫做异步**reflow**。但是在有些情况下，比如改变窗口大小，改变页面默认字体等浏览器会马上进行reflow。

> 为了更好的用户体验，渲染引擎将会尽可能早的将内容呈现在屏幕上，并不会等到所有html都解析完成之后再去构建和布局render树。它是解析完一部分内容就显示一部分内容，同时，可能还在网络上下载其余内容。

#### 4、 css样式书写规范

**一、使用CSS缩写属性**

CSS有些属性是可以缩写的，比如`padding,margin,font`等等，这样精简代码同时又能提高用户的阅读体验。



![Alt](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="500" height="250"></svg>)



**去掉小数点前的“0”**



![Alt](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="500" height="250"></svg>)



**简写命名(前提是要让人看懂你的命名才能简写哦)**



![Alt](https://user-gold-cdn.xitu.io/2019/8/15/16c949766c6badf4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



**16进制颜色代码缩写**

![Alt](https://user-gold-cdn.xitu.io/2019/8/15/16c9497d20e1bf8a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



**连字符CSS选择器命名规范**

> 1.长名称或词组可以使用中横线来为选择器命名。

> 2.不建议使用“_”下划线来命名CSS选择器，为什么呢？

- 输入的时候少按一个shift键；
- 浏览器兼容问题 （比如使用_tips的选择器命名，在IE6是无效的）
- 能良好区分JavaScript变量命名（JS变量命名是用“_”）



![img](https://user-gold-cdn.xitu.io/2019/8/15/16c949817a55954a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



- **功能**

| 语义     | 命名                  | 简写 |
| :------- | :-------------------- | :--: |
| 清除浮动 | `clearboth`           |  cb  |
| 左浮动   | `floatleft`           |  fl  |
| 内联     | `inlineblock`         |  ib  |
| 文本居中 | `textaligncenter`     | tac  |
| 垂直居中 | `verticalalignmiddle` | vam  |
| 溢出隐藏 | `overflowhidden`      |  oh  |
| 完全消失 | `displaynone`         |  dn  |
| 字体大小 | `fontsize`            |  fz  |
| 字体粗细 | `fontweight`          |  fs  |

- **状态**

| 语义   | 命名       |  简写  |
| :----- | :--------- | :----: |
| 选中   | `selected` |  sel   |
| 当前   | `current`  |  crt   |
| 显示   | `show`     |  show  |
| 隐藏   | `hide`     |  hide  |
| 打开   | `open`     |  open  |
| 关闭   | `close`    | vclose |
| 出错   | `error`    |  err   |
| 不可用 | `disabled` |  dis   |

**注释的写法:**

```
/* Header */
内容区
/* End Header */
复制代码
```

**id的命名:**

1)页面结构

- 容器: `container`
- 页头：`header`
- 内容：`content/container`
- 页面主体：`main`
- 页尾：`footer`
- 导航：`nav`
- 侧栏：`sidebar`
- 栏目：`column`
- 页面外围控制整体佈局宽度：`wrapper`
- 左右中：`left right center` (2)导航
- 导航：`nav`
- 主导航：`mainnav`
- 子导航：`subnav`
- 顶导航：`topnav`
- 边导航：`sidebar`
- 左导航：`leftsidebar`
- 右导航：`rightsidebar`
- 菜单：`menu`
- 子菜单：`submenu`
- 标题: `title`
- 摘要: `summary`

(3)功能

- 标志：`logo`
- 广告：`banner`
- 登陆：`login`
- 登录条：`loginbar`
- 注册：`register`
- 搜索：`search`
- 功能区：`shop`
- 标题：`title`
- 加入：`joinus`
- 状态：`status`
- 按钮：`btn`
- 滚动：`scroll`
- 标籤页：`tab`
- 文章列表：`list`
- 提示信息：`msg`
- 当前的: `current`
- 小技巧：`tips`
- 图标: `icon`
- 注释：`note`
- 指南：`guild`
- 服务：`service`
- 热点：`hot`
- 新闻：`news`
- 下载：`download`
- 投票：`vote`
- 合作伙伴：`partner`
- 友情链接：`link`
- 版权：`copyright`

**CSS样式表文件命名**

- 主要的 **master.css**
- 模块 **module.css**
- 基本共用 **base.css**
- 布局、版面 **layout.css**
- 主题 **themes.css**
- 专栏 **columns.css**
- 文字 **font.css**
- 表单 **forms.css**
- 补丁 **mend.css**
- 打印 **print.css**

既然说到了这里，那就多句嘴，说一下html5的语义化,继续往下瞅

#### 5、HTML5-语义化

> 距HTML5标准规范制定完成并公开发布已经有好些年了，但是多数公司还是用的不是很多，可能一部分原因是部分用户在使用低版本浏览器吧。

[什么是语义化](https://baike.baidu.com/item/语义化/1811394)？就是用合理、正确的标签来展示内容，比如h1~h6定义标题。

**语义化优点：**

> - 易于用户阅读，样式丢失的时候能让页面呈现清晰的结构。
> - 有利于SEO，搜索引擎根据标签来确定上下文和各个关键字的权重。
> - 方便其他设备解析，如盲人阅读器根据语义渲染网页
> - 有利于开发和维护，语义化更具可读性，代码更好维护，与CSS3关系更和谐。



![Alt](https://user-gold-cdn.xitu.io/2019/8/15/16c9498bc8378da4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



***1、header***

> `<header>`定义文档或者文档的部分区域的页眉，应作为介绍内容或者导航链接栏的容器。在一个文档中，您可以定义多个`<header>`元素，但需要注意的是`<header>`元素不能作为`<address>`、`<footer>` 或 `<header>` 元素的子元素。

***2、nav***

> `<nav>`描述一个含有多个超链接的区域，该区域包含跳转到其他页面或页面内部其他部分的链接列表。在一个文档中，可定义多个
>
> 元素。

***3、main***

> `<main>` 定义文档的主要内容，该内容在文档中应当是独一无二的，不包含任何在文档中重复的内容，比如侧边栏，导航栏链接，版权信息，网站logo，搜索框（除非搜索框作为文档的主要功能）。`需要注意的是在一个文档中不能出现多个<main>标签`。

***4、article***

> `<article>`元素表示文档、页面、应用或网站中的独立结构，是可独立分配的、可复用的结构，如在发布中，它可能是论坛帖子、杂志或新闻文章、博客、用户提交的评论、交互式组件，或者其他独立的内容项目。当`<article>`元素嵌套使用时，则该元素代表与外层元素有关的文章。例如，代表博客评论的
>
> 元素可嵌套在代表博客文章的
>
> 元素中。

***5、aside***

> `<aside>` 元素表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分且可以被单独的拆分出来而不会影响整体。通常表现为侧边栏或嵌入内容。

***6、footer***

> `<footer>`定义最近一个章节内容或者根节点元素的页脚。一个页脚通常包含该章节作者、版权数据或者与文档相关的链接等信息。使用footer插入联系信息时，应在 footer 元素内使用
>
> 元素。`注意不能包含<footer>或者<header>`

***7、section***

`<section>`表示文档中的一个区域（或节），比如，内容中的一个专题组。

> 如果元素内容可以分为几个部分的话，应该使用 `<article>` 而不是 `<section>`。不要把 `<section>`元素作为一个普通的容器来使用，特别是当`<section>`仅仅是为了美化样式或方便脚本使用的时候，应使用`<div>`。