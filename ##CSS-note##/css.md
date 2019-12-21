## 1.介绍下BFC及其应用

BFC 就是块级格式上下文，是页面盒模型布局中的一种 CSS 渲染模式，相当于一个独立的容器，里面的元素和外部的元素相互不影响。创建 BFC 的方式有：

1. html 根元素
2. float 浮动
3. 绝对定位
4. overflow 不为 visiable
5. display 为表格布局或者弹性布局

BFC 主要的作用是：

1. 清除浮动

2. 防止同一 BFC 容器中的相邻元素间的外边距重叠问题

   [网络链接](https://zhuanlan.zhihu.com/p/25321647)
   
   [本地链接](./详细/BFC.md)
   

---

## 2.怎么让一个 div 水平垂直居中

```html
<div class="parent">
  <div class="child"></div>
</div>
```

1. 

```css
div.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

2. 这里也可以用计算calc属性

```css
div.parent {
    position: relative; 
}
div.child {
    position: absolute; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  
}
/* 或者 */
div.child {
    width: 50px;
    height: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -25px;
    margin-top: -5px;
}
/* 或 */
div.child {
    width: 50px;
    height: 10px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
```

3. 

```css
div.parent {
    display: grid;
}
div.child {
    justify-self: center;
    align-self: center;
}
```

4. 

```js
div.parent {
    font-size: 0;
    text-align: center;
    &::before {
        content: "";
        display: inline-block;
        width: 0;
        height: 100%;
        vertical-align: middle;
    }
}
div.child{
  display: inline-block;
  vertical-align: middle;
}
```

5. 

```css
div.parent{
  display:flex;
}
div.child{
  margin:auto;
}
```

## 3.分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景。

> 1. display: none (不占空间，不能点击, 会发生回流)（场景，显示出原来这里不存在的结构）
> 2. visibility: hidden（占据空间，不能点击, 会发生重绘）（场景：显示不会导致页面结构发生变动，不会撑开）
> 3. opacity: 0（占据空间，可以点击）（场景：可以跟transition搭配）

```
补充：株连性
如果祖先元素遭遇某祸害，则其子孙孙无一例外也要遭殃，比如：
opacity:0和display:none，若父节点元素应用了opacity:0和display:none，无论其子孙元素如何挣扎都不会再出现在大众视野；
而若父节点元素应用visibility:hidden，子孙元素应用visibility:visible，那么其就会毫无意外的显现出来。
```

- `display: none;`

1. **DOM 结构**：浏览器不会渲染 `display` 属性为 `none` 的元素，不占据空间；
2. **事件监听**：无法进行 DOM 事件监听；
3. **性能**：动态改变此属性时会引起重排，性能较差；
4. **继承**：不会被子元素继承，毕竟子类也不会被渲染；
5. **transition**：`transition` 不支持 `display`。

- `visibility: hidden;`

1. **DOM 结构**：元素被隐藏，但是会被渲染不会消失，占据空间；
2. **事件监听**：无法进行 DOM 事件监听；
3. **性 能**：动态改变此属性时会引起重绘，性能较高；
4. **继 承**：会被子元素继承，子元素可以通过设置 `visibility: visible;` 来取消隐藏；
5. **transition**：`transition` 支持 `display`。

- opacity: 0;

1. **DOM 结构**：透明度为 100%，元素隐藏，占据空间；
2. **事件监听**：可以进行 DOM 事件监听；
3. **性 能**：提升为合成层，不会触发重绘，性能较高；
4. **继 承**：会被子元素继承,且，子元素并不能通过 `opacity: 1` 来取消隐藏；
5. **transition**：`transition` 支持 `opacity`。

## 4.已知如下代码，如何修改才能让图片宽度为 300px ？注意下面代码不可修改。

`<img src="1.jpg" style="width:480px!important;”>`



1. `<img src="1.jpg" style="width:480px!important; max-width: 300px">`
2. `<img src="1.jpg" style="width:480px!important; transform: scale(0.625, 1);" >`
3. `<img src="1.jpg" style="width:480px!important; width:300px!important;">`
4. `js修改`

## 5、如何解决移动端 Retina 屏 1px 像素问题

viewport + rem 实现 box-shadow background-image 0.5px transformY:scale(.5)

## 6、介绍下 BFC、IFC、GFC 和 FFC

### 基本盒模型

[https://wz71014q.github.io/2019/03/23/CSS-%E5%8F%AF%E8%A7%86%E5%8C%96%E6%A0%BC%E5%BC%8F%E6%A8%A1%E5%9E%8B/#more](https://wz71014q.github.io/2019/03/23/CSS-可视化格式模型/#more)

每个人在学习CSS时一定会接触到盒模型，比如最基本的IE盒模型和W3C标准盒模型。文档进行布局（lay out）的时候，浏览器的渲染引擎会根据标准之一的 CSS 基础框盒模型（CSS basic box model），将所有元素表示为一个个矩形的盒子（box）。CSS 决定这些盒子的大小、位置以及属性（例如颜色、背景、边框尺寸…）。每个盒子由四个部分（或称区域）组成，其效用由它们各自的边界（Edge）所定义。每个盒子有四个边界：内容边界 Content edge、内边距边界 Padding Edge、边框边界 Border Edge、外边框边界 Margin Edge。

- 其中，两种盒模型都由内容、内边距、边框和外边距组成，可以用box-sizing属性进行切换；
- 区别点是W3C标准盒模型的width和height只包含内容区Content，IE盒模型的width和height包含内容区、内边距Padding和边框Border。
- 注意：background同时作用于内容区、内边距和边框！

如图给一个div设置宽高都是100px，W3C标准盒模型跟IE盒模型表现出的实际的盒子内容区大小是不一样的

![W3CBox](https://raw.githubusercontent.com/wz71014q/img/master/cssbox/W3CBox.png)
![IEBox](https://raw.githubusercontent.com/wz71014q/img/master/cssbox/IEBox.png)

基本的盒模型可以帮助我们进行更准确的布局，但是页面渲染用到的盒模型可不止这些。最近看到一种以前不知道的垂直居中布局的代码：

复制

```
<div class="main">我是居中的元素</div>
```



复制

```
css:.main{   width: 100px;   height: 100px;}.main::after{  content: '';  width: 0;  height: 100%;  display: inline-block;  vertical-align: middle;}
```

本来伪元素和伪类用的就不怎么样，看到这个就很不理解了。向大佬们请教，进而得知“可视化格式模型”这种东西。想起之前看到浏览器渲染页面的视频，确实是一个一个的框框堆积起来:

![img](https://raw.githubusercontent.com/wz71014q/img/master/render.gif)

### 什么是可视化格式模型？

官方解释是：它规定了客户端（浏览器）如何在媒介（显示器）中渲染文档树(document tree)。如上图，每个节点、元素都有属于自己的可见或不可见、有名或匿名的盒模型，可视化格式模型即规定了这些盒、框框如何整齐地排列在页面中，还有盒子之间的相互作用。

### 可视化格式模型

1. 包含块CB(Containing block)
2. 控制框：块框、行框
3. FC(Formatting Context, 格式化上下文)

- 1. BFC(Block Formatting Context, 块级格式化上下文)
- 1. IFC(Inline Formatting Context, 行内格式上下文)
- 1. GFC(Grid Formatting Context, 网格布局格式化上下文)
- 1. FFC(Flex formatting contexts, 自适应格式上下文)

1. 定位体系(普通流、定位流、浮动流)
2. 浮动体系

### 包含块

1. 根元素的包含块是一个被称为初始包含块的矩形
2. 如果 position 属性为 static 或 relative ，包含块就是由它的最近的祖先块元素（比如说inline-block, block 或 list-item元素）或格式化上下文的内容区(只有content)的边缘组成的。
3. 如果position属性为 absolute，包含块就是最近的position属性不为static值的祖先块元素的内边距区的边缘(content + padding)组成(padding框)。



<iframe name="cp_embed_1" src="https://codepen.io/wz71014q/embed/yWbxjp?height=265&amp;theme-id=0&amp;default-tab=html%2Cresult&amp;user=wz71014q&amp;slug-hash=yWbxjp&amp;pen-title=yWbxjp&amp;name=cp_embed_1" scrolling="no" frameborder="0" height="265" allowtransparency="true" allowfullscreen="true" allowpaymentrequest="true" title="yWbxjp" class="cp_embed_iframe " id="cp_embed_yWbxjp" style="width: 828px; overflow: hidden; display: block;"></iframe>
1. 如果 position 属性是 absolute 或 fixed，包含块也可能是由满足以下条件的最近父级元素的内边距区的边缘组成的：

   > transform 或 perspective 值不为 none；
   > will-change 值是 transform 或 perspective
   > filter 值不为 none 或 will-change 值是 filter (Firefox下).

2. 如果 position 属性是 fixed，包含块就是由 viewport (in the case of continuous media) 或是组成的。

3. CSS中的百分比是根据生成的框的包含块的高度计算的。如果未明确指定包含块的高度（即要使用百分比，包含块必须有宽度和高度），并且此元素未绝对定位，则百分比值将被视为“0”（对于“min-height”）或“none” （’max-height’）。

4. 如果要计算 height top 及 bottom 中的百分值，是通过包含块的 height 的值。如果包含块的 height 值会根据它的内容变化，而且包含块的 position 属性的值被赋予 relative 或 static ，那么，这些值的计算值为 0。要计算 width, left, right, padding, margin 这些属性由包含块的 width 属性的值来计算它的百分值。

5. 以百分比为单位时，包含块大小跟盒模型有关，主要受其padding属性影响。给两种盒模型的子元素设置width=50%，不同的盒模型，子元素的width是不同的。

### 控制框

#### 块框

1. 块级元素会生成一个块框（Block Box），块框会占据一整行，用来包含子box和生成的内容；
2. 块框同时也是一个块包含框（Containing Box），里面要么只包含块框，要么只包含行内框（不能混杂）；
3. 如果块框内部有块级元素也有行内元素，那么行内元素会被匿名块框包围。也就是说如果一个块框在其中包含另一个块框，那么我们强迫它只能包含块框，因此其他文本内容生成出来的都是匿名块框（而不是匿名行内框）

如下，div为一个块框、p是另一个块框。上一行文本被包含在一个匿名块框内

复制

```
<div>   I'm some text!   <p>I'm included by p!</p></div>
```

#### 行内框

- 一个行内元素生成一个行内框；行内元素能排在一行，允许左右有其他元素。

### FC

- 格式化上下文定义框内部的元素渲染规则，它可以将框内部与外部隔开，外部样式不会影响内部
- 包含块级格式化上下文BFC、行内格式化上下文IFC、网格布局格式化上下文GFC、自适应格式上下文FFC(Flex formatting contexts)

#### BFC

常用的创建块级格式化上下文的方式有：

- 根元素或包含根元素的元素
- overflow不为visible的块元素。
- 行内块元素(display = inline-bloc 会在元素外层产生IFC（所以这个元素可以通过text-align水平居中），当然，它的内部则按照BFC规则渲染)
- 浮动元素
- 绝对定位元素
- 弹性元素(flex)
  完整内容见[MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

BFC特点：

- 清除浮动。内部box在垂直方向，一个接一个的放置，BFC区域不会与float box重叠
- 外边距塌陷。box的垂直方向由margin决定，属于同一个BFC的两个box间的margin会重叠
- BFC就是页面上的一个隔离的独立容器，容器里的子元素不会影响到外面的元素，反之也是如此；
- 计算BFC的高度时，浮动元素也参与计算（不会浮动塌陷如overflow：hidden清除浮动就是这个原理）；



<iframe name="cp_embed_2" src="https://codepen.io/wz71014q/embed/JqNeVL?height=265&amp;theme-id=0&amp;default-tab=html%2Cresult&amp;user=wz71014q&amp;slug-hash=JqNeVL&amp;pen-title=JqNeVL&amp;name=cp_embed_2" scrolling="no" frameborder="0" height="265" allowtransparency="true" allowfullscreen="true" allowpaymentrequest="true" title="JqNeVL" class="cp_embed_iframe " id="cp_embed_JqNeVL" style="width: 828px; overflow: hidden; display: block;"></iframe>
#### IFC

- 行内元素可以产生行内格式化上下文
- 行内框是水平方向一个接一个排列，起点是包含块的顶部。
- 行内格式化上下文高度由其包含行内元素中最高的实际高度计算而来(不受到竖直方向的padding/margin影响）。水平方向上的margin，border和padding在框之间会保留。框在垂直方向上可以以不同的方式对齐：顶部、底部对齐或根据其中文字的基线对齐)
- 最高的元素高度未设置时，行内框的高度由line-height决定，而其内部的包含块之间的可以高度各不相同(比如只含文本的行框高度与包含图片的行框高度之间)。line-height是上下两行文本的基线之间的距离

#### FFC

自适应格式化上下文，当设置display为flex时，内部生成一个BFC。设置display为inline-flex时，内部生成一个IFC

#### GFC

网格布局格式化上下文，当为一个元素设置display值为grid的时候，此元素将会获得一个独立的渲染区域

最后，解释一下为什么上面的元素可以居中。行内框的高度能够容纳它包含的所有框,当框的高度小于行内框的高度(例如,如果框是baseline对齐)时,框的竖直对齐方式由vertical-align属性决定。所以class = main的div的伪元素跟“我是居中的元素”形成了一个行内框，而设置行内框的对齐方式为middle，就居中了。

## 7、如何用 css 或 js 实现多行文本溢出省略效果，考虑兼容性 

单行：
```css
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
```
多行：
```css
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3; //行数
overflow: hidden;
```
兼容：
```css
p{
  position: relative; 
  line-height: 20px;
  max-height: 40px;
  overflow: hidden;
}
p::after{
  content: "..."; 
  position: absolute;
  bottom: 0; 
  right: 0;
  padding-left: 40px;
  background: -webkit-linear-gradient(left, transparent, #fff 55%);
  background: -o-linear-gradient(right, transparent, #fff 55%);
  background: -moz-linear-gradient(right, transparent, #fff 55%);
  background: linear-gradient(to right, transparent, #fff 55%);
}
```