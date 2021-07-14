### **对于 html5 新标签兼容处理？**

日常开发中我们一般采用通过检测 IE 浏览器版本来加载一个第三方的 JS 库 _[html5shiv](https://github.com/aFarkas/html5shiv)_ 来解决浏览器兼容性问题。

**为什么引入这个库就能解决 html5 标签的兼容问题呢？**  
带着这个问题，我打开了`html5shiv`的仓库。  
首先，让我们来看看 _[html5shiv 的故事](https://www.paulirish.com/2011/the-history-of-the-html5-shiv/)_......

在这篇文章里，我们得到了一段重要的话：

```text
Btw, if you want CSS rules to apply to unknown elements in IE, you just have to do document.createElement(elementName).This somehow lets the CSS engine know that elements with that name exist
```

简单翻译一下：

```text
在IE浏览器中，想要把CSS样式应用到未知元素上，需要去调用 document.createElement(elementName) 方法来告知CSS引擎，该未知元素的存在。
```

根据这段话可知，对于低版本 IE 浏览器不兼容的 html5 标签实现兼容，主要依赖于 API [document.createElement](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement)。

**_document.createElement_**  
`document.createElement`是一个比较常见的方法，我们都知道这是用于创建一个由标签名称 tagName 指定的 HTML 标签。

### 语法

> var element = document.createElement(tagName[, options]);

### 参数

_tagName_

```js
document.createElement('div'); // 创建一个div标签
```

对于上面的用法，大家应该都司空见惯了。不过，这个方法还有第二个参数，对于它表示的意义以及使用方法，想必不少人都比较陌生。接下来，让我们一起看看...

<!-- 打开仓库[源码](https://github.com/aFarkas/html5shiv/blob/master/src/html5shiv.js)，我们能看到，代码并不多，加上注释也不过三百来行。 -->

### 参考资料：

-   [createElement 方法标准](https://dom.spec.whatwg.org/#dom-document-createelement)
-   [createElement MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement)
-   [html5shiv 仓库](https://github.com/aFarkas/html5shiv)
-   [The Story of the HTML5 Shiv](https://www.paulirish.com/2011/the-history-of-the-html5-shiv/)
-   [HTML5 enabling script](https://remysharp.com/2009/01/07/html5-enabling-script/)
