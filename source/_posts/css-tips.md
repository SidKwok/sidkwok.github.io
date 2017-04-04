---
title: CSS-技巧集
date: 2017-04-04 17:00:32
tags: [css, tech]
---

## 优化显示文本

```css
html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
}
```
*效果(上是优化前，下是优化后)：*

![1](/images/css-tips/css-tips-1.png)

## 表格单元格等宽

这个可以使保持单元格等宽

```css
.calendar {
    table-layout: fixed;
}
```

### 使用属性选择器用于空链接

当a标签文本值为空时，使用`href`里的链接作为文本值

```css
a[href^="http"]:empty::before {
    content: attr(href);
}
```

### 禁用鼠标事件

```css
.disabled {
    pointer-events: none;
}
```

### 模糊文本

```css
.blur {
   color: transparent;
   text-shadow: 0 0 5px rgba(0,0,0,0.5);
}
```

### 垂直对齐

这种方法用了`transform`，ie9以上才支持

```css
.verticalcenter{
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
}
```

### 伸展一个元素到窗口高度

要设置html和body的高度为100%之后，元素的高度100%才会沾满屏幕

```css
html,
body {
    height: 100%;
}

div {
    height: 100%;
}
```

### 表格列宽自适用

表格会适当地换行

```css
td {
    white-space: nowrap;
}
```

### 媒体查询

```css
/* Smartphones (portrait and landscape) ----------- */
@media only screen
and (min-device-width : 320px) and (max-device-width : 480px) {
  /* Styles */
}

/* Smartphones (landscape) ----------- */
@media only screen and (min-width : 321px) {
  /* Styles */
}

/* Smartphones (portrait) ----------- */
@media only screen and (max-width : 320px) {
  /* Styles */
}

/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
  /* Styles */
}

/* iPads (landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
  /* Styles */
}

/* iPads (portrait) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
  /* Styles */
}

/* Desktops and laptops ----------- */
@media only screen and (min-width : 1224px) {
  /* Styles */
}

/* Large screens ----------- */
@media only screen and (min-width : 1824px) {
  /* Styles */
}

/* iPhone 4 ----------- */
@media only screen and (-webkit-min-device-pixel-ratio:1.5), only screen and (min-device-pixel-ratio:1.5) {
  /* Styles */
}
```

### 自定义文本选择

选中文本的时候生成不同的颜色

```css
::selection { background: #e2eae2; }
::-moz-selection { background: #e2eae2; }
::-webkit-selection { background: #e2eae2; }
```

![2](/images/css-tips/css-tips-2.png)

#### 参考资料
* [20个很有用的CSS技巧](http://caibaojian.com/useful-css-tips.html)
* [60个有用CSS代码片段](https://segmentfault.com/a/1190000002773955)
