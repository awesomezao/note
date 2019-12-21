## 一、常见定位方案

在讲 BFC 之前，我们先来了解一下常见的定位方案，定位方案是控制元素的布局，有三种常见方案:

- 普通流 (normal flow)

> 在普通流中，元素按照其在 HTML 中的先后位置至上而下布局，在这个过程中，行内元素水平排列，直到当行被占满然后换行，块级元素则会被渲染为完整的一个新行，除非另外指定，否则所有元素默认都是普通流定位，也可以说，普通流中元素的位置由该元素在 HTML 文档中的位置决定。

- 浮动 (float)

> 在浮动布局中，元素首先按照普通流的位置出现，然后根据浮动的方向尽可能的向左边或右边偏移，其效果与印刷排版中的文本环绕相似。

- 绝对定位 (absolute positioning)

> 在绝对定位布局中，元素会整体脱离普通流，因此绝对定位元素不会对其兄弟元素造成影响，而元素具体的位置由绝对定位的坐标决定。

## 二、BFC 概念

Formatting context(格式化上下文) 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。



那么 BFC 是什么呢？

BFC 即 Block Formatting Contexts (块级格式化上下文)，它属于上述定位方案的普通流。

**具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。**

通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。

## 三、触发 BFC

只要元素满足下面任一条件即可触发 BFC 特性：

- body 根元素
- 浮动元素：float 除 none 以外的值
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- overflow 除了 visible 以外的值 (hidden、auto、scroll)

## 四、BFC 特性及应用

**1. 同一个 BFC 下外边距会发生折叠**



```html
<head>
div{
    width: 100px;
    height: 100px;
    background: lightblue;
    margin: 100px;
}
</head>
<body>
    <div></div>
    <div></div>
</body>
```

![img](https://pic4.zhimg.com/80/v2-0a9ca8952c83141250a2d9002e6d2047_hd.png)

从效果上看，因为两个 div 元素都处于同一个 BFC 容器下 (这里指 body 元素) 所以第一个 div 的下边距和第二个 div 的上边距发生了重叠，所以两个盒子之间距离只有 100px，而不是 200px。

首先这不是 CSS 的 bug，我们可以理解为一种规范，**如果想要避免外边距的重叠，可以将其放在不同的 BFC 容器中。**

```html
<div class="container">
    <p></p>
</div>
<div class="container">
    <p></p>
</div>
.container {
    overflow: hidden;
}
p {
    width: 100px;
    height: 100px;
    background: lightblue;
    margin: 100px;
}
```

这时候，两个盒子边距就变成了 200px



![img](https://pic2.zhimg.com/80/v2-5b8d6e8b2b507352900c1ece00018855_hd.png)

**2. BFC 可以包含浮动的元素（清除浮动）**



我们都知道，浮动的元素会脱离普通文档流，来看下下面一个例子

```html
<div style="border: 1px solid #000;">
    <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
</div>
```



![img](https://pic4.zhimg.com/80/v2-371eb702274af831df909b2c55d6a14b_hd.png)

由于容器内元素浮动，脱离了文档流，所以容器只剩下 2px 的边距高度。如果使触发容器的 BFC，那么容器将会包裹着浮动元素。



```html
<div style="border: 1px solid #000;overflow: hidden">
    <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
</div>
```

效果如图：



![img](https://pic4.zhimg.com/80/v2-cc8365db5c9cc5ca003ce9afe88592e7_hd.png)

**3. BFC 可以阻止元素被浮动元素覆盖**



先来看一个文字环绕效果：

```html
<div style="height: 100px;width: 100px;float: left;background: lightblue">我是一个左浮动的元素</div>
<div style="width: 200px; height: 200px;background: #eee">我是一个没有设置浮动, 
也没有触发 BFC 元素, width: 200px; height:200px; background: #eee;</div>
```

![img](https://pic4.zhimg.com/80/v2-dd3e636d73682140bf4a781bcd6f576b_hd.png)

这时候其实第二个元素有部分被浮动元素所覆盖，(但是文本信息不会被浮动元素所覆盖) 如果想避免元素被覆盖，可触第二个元素的 BFC 特性，在第二个元素中加入 **overflow: hidden**，就会变成：



![img](https://pic3.zhimg.com/80/v2-5ebd48f09fac875f0bd25823c76ba7fa_hd.png)

这个方法可以用来实现两列自适应布局，效果不错，这时候左边的宽度固定，右边的内容自适应宽度(去掉上面右边内容的宽度)。



补：

1. 内部box会在垂直方向，一个接一个地放置。
2. Box垂直方向的距离由margin决定，在一个BFC中，两个相邻的块级盒子的垂直外边距会产生折叠。
3. 在BFC中，每一个盒子的左外边缘（margin-left）会触碰到容器的左边缘(border-left)（对于从右到左的格式来说，则触碰到右边缘）
4. 形成了BFC的区域不会与float box重叠
5. 计算BFC高度时，浮动元素也参与计算

生成BFC除了 @webproblem 童鞋所说的还有：行内块元素、网格布局、contain值为layout、content或 strict的元素等。 更多生成BFC的方法：[传送门](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

BFC作用：

1. 利用特性4可实现左图右文之类的效果：

```html
<img src='image.png'>
<p>我是超长的文字<p>
img {
    float:left
}
p {
    overflow:hidden
}
```

1. 利用特性5可以解决浮动元素造成的父元素高度塌陷问题：

```html
<div class='parent'>
    <div class='float'>浮动元素</div>
</div>
.parent {
    overflow:hidden;
}
.float {
    float:left;
}
```