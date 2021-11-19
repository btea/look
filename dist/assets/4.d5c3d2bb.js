var s={name:"ES6 \u77E5\u8BC6\u70B9\u53CA\u5E38\u8003\u9762\u8BD5\u9898",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h1 data-id="heading-0">ES6 \u77E5\u8BC6\u70B9\u53CA\u5E38\u8003\u9762\u8BD5\u9898</h1>
<p>\u672C\u7AE0\u8282\u6211\u4EEC\u5C06\u6765\u5B66\u4E60 ES6 \u90E8\u5206\u7684\u5185\u5BB9\u3002</p>
<h2 data-id="heading-1">var\u3001let \u53CA const \u533A\u522B</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u4EC0\u4E48\u662F\u63D0\u5347\uFF1F\u4EC0\u4E48\u662F\u6682\u65F6\u6027\u6B7B\u533A\uFF1Fvar\u3001let \u53CA const \u533A\u522B\uFF1F
</code></pre>
<p>\u5BF9\u4E8E\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u5E94\u8BE5\u5148\u6765\u4E86\u89E3\u63D0\u5347\uFF08hoisting\uFF09\u8FD9\u4E2A\u6982\u5FF5\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-built_in">console</span>.log(a) <span class="hljs-comment">// undefined</span>
<span class="hljs-keyword">var</span> a = <span class="hljs-number">1</span>
</code></pre>
<p>\u4ECE\u4E0A\u8FF0\u4EE3\u7801\u4E2D\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0C\u867D\u7136\u53D8\u91CF\u8FD8\u6CA1\u6709\u88AB\u58F0\u660E\uFF0C\u4F46\u662F\u6211\u4EEC\u5374\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u672A\u88AB\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u8FD9\u79CD\u60C5\u51B5\u5C31\u53EB\u505A\u63D0\u5347\uFF0C\u5E76\u4E14\u63D0\u5347\u7684\u662F\u58F0\u660E\u3002</p>
<p>\u5BF9\u4E8E\u8FD9\u79CD\u60C5\u51B5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u4EE3\u7801\u8FD9\u6837\u6765\u770B</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">var</span> a
<span class="hljs-built_in">console</span>.log(a) <span class="hljs-comment">// undefined</span>
a = <span class="hljs-number">1</span>
</code></pre>
<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u518D\u6765\u770B\u4E00\u4E2A\u4F8B\u5B50</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">var</span> a = <span class="hljs-number">10</span>
<span class="hljs-keyword">var</span> a
<span class="hljs-built_in">console</span>.log(a)
</code></pre>
<p>\u5BF9\u4E8E\u8FD9\u4E2A\u4F8B\u5B50\uFF0C\u5982\u679C\u4F60\u8BA4\u4E3A\u6253\u5370\u7684\u503C\u4E3A <code>undefined</code> \u90A3\u4E48\u5C31\u9519\u4E86\uFF0C\u7B54\u6848\u5E94\u8BE5\u662F <code>10</code>\uFF0C\u5BF9\u4E8E\u8FD9\u79CD\u60C5\u51B5\uFF0C\u6211\u4EEC\u8FD9\u6837\u6765\u770B\u4EE3\u7801</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">var</span> a
<span class="hljs-keyword">var</span> a
a = <span class="hljs-number">10</span>
<span class="hljs-built_in">console</span>.log(a)
</code></pre>
<p>\u5230\u8FD9\u91CC\u4E3A\u6B62\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u4E86\u89E3\u4E86 <code>var</code> \u58F0\u660E\u7684\u53D8\u91CF\u4F1A\u53D1\u751F\u63D0\u5347\u7684\u60C5\u51B5\uFF0C\u5176\u5B9E\u4E0D\u4EC5\u53D8\u91CF\u4F1A\u63D0\u5347\u51FD\u6570\u4E5F\u4F1A\u88AB\u63D0\u5347\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-built_in">console</span>.log(a) <span class="hljs-comment">// \u0192 a() {}</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{}
<span class="hljs-keyword">var</span> a = <span class="hljs-number">1</span>
</code></pre>
<p>\u5BF9\u4E8E\u4E0A\u8FF0\u4EE3\u7801\uFF0C\u6253\u5370\u7ED3\u679C\u4F1A\u662F <code>\u0192 a() {}</code>\uFF0C\u5373\u4F7F\u53D8\u91CF\u58F0\u660E\u5728\u51FD\u6570\u4E4B\u540E\uFF0C\u8FD9\u4E5F\u8BF4\u660E\u4E86\u51FD\u6570\u4F1A\u88AB\u63D0\u5347\uFF0C\u5E76\u4E14\u4F18\u5148\u4E8E\u53D8\u91CF\u63D0\u5347\u3002</p>
<p>\u8BF4\u5B8C\u4E86\u8FD9\u4E9B\uFF0C\u60F3\u5FC5\u5927\u5BB6\u4E5F\u77E5\u9053 <code>var</code> \u5B58\u5728\u7684\u95EE\u9898\u4E86\uFF0C\u4F7F\u7528 <code>var</code> \u58F0\u660E\u7684\u53D8\u91CF\u4F1A\u88AB\u63D0\u5347\u5230\u4F5C\u7528\u57DF\u7684\u9876\u90E8\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u518D\u6765\u770B <code>let</code> \u548C <code>const</code> \u3002</p>
<p>\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">var</span> a = <span class="hljs-number">1</span>
<span class="hljs-keyword">let</span> b = <span class="hljs-number">1</span>
<span class="hljs-keyword">const</span> c = <span class="hljs-number">1</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">window</span>.b) <span class="hljs-comment">// undefined</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">window</span>. c) <span class="hljs-comment">// undefined</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>)</span>{
  <span class="hljs-built_in">console</span>.log(a)
  <span class="hljs-keyword">let</span> a
}
test()
</code></pre>
<p>\u9996\u5148\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E0B\u4F7F\u7528 <code>let</code> \u548C <code>const</code> \u58F0\u660E\u53D8\u91CF\uFF0C\u53D8\u91CF\u5E76\u4E0D\u4F1A\u88AB\u6302\u8F7D\u5230 <code>window</code> \u4E0A\uFF0C\u8FD9\u4E00\u70B9\u5C31\u548C <code>var</code> \u58F0\u660E\u6709\u4E86\u533A\u522B\u3002</p>
<p>\u518D\u8005\u5F53\u6211\u4EEC\u5728\u58F0\u660E <code>a</code> \u4E4B\u524D\u5982\u679C\u4F7F\u7528\u4E86 <code>a</code>\uFF0C\u5C31\u4F1A\u51FA\u73B0\u62A5\u9519\u7684\u60C5\u51B5</p>
<p><img src="//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/055a1c2d23c24cdbaa45308f4ac55c30~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u4F60\u53EF\u80FD\u4F1A\u8BA4\u4E3A\u8FD9\u91CC\u4E5F\u51FA\u73B0\u4E86\u63D0\u5347\u7684\u60C5\u51B5\uFF0C\u4F46\u662F\u56E0\u4E3A\u67D0\u4E9B\u539F\u56E0\u5BFC\u81F4\u4E0D\u80FD\u8BBF\u95EE\u3002</p>
<p>\u9996\u5148\u62A5\u9519\u7684\u539F\u56E0\u662F\u56E0\u4E3A\u5B58\u5728\u6682\u65F6\u6027\u6B7B\u533A\uFF0C\u6211\u4EEC\u4E0D\u80FD\u5728\u58F0\u660E\u524D\u5C31\u4F7F\u7528\u53D8\u91CF\uFF0C\u8FD9\u4E5F\u662F <code>let</code> \u548C <code>const</code> \u4F18\u4E8E <code>var</code> \u7684\u4E00\u70B9\u3002\u7136\u540E\u8FD9\u91CC\u4F60\u8BA4\u4E3A\u7684\u63D0\u5347\u548C <code>var</code> \u7684\u63D0\u5347\u662F\u6709\u533A\u522B\u7684\uFF0C\u867D\u7136\u53D8\u91CF\u5728\u7F16\u8BD1\u7684\u73AF\u8282\u4E2D\u88AB\u544A\u77E5\u5728\u8FD9\u5757\u4F5C\u7528\u57DF\u4E2D\u53EF\u4EE5\u8BBF\u95EE\uFF0C\u4F46\u662F\u8BBF\u95EE\u662F\u53D7\u9650\u5236\u7684\u3002</p>
<p>\u90A3\u4E48\u5230\u8FD9\u91CC\uFF0C\u60F3\u5FC5\u5927\u5BB6\u4E5F\u90FD\u660E\u767D <code>var</code>\u3001<code>let</code> \u53CA <code>const</code> \u533A\u522B\u4E86\uFF0C\u4E0D\u77E5\u9053\u4F60\u662F\u5426\u4F1A\u6709\u8FD9\u4E48\u4E00\u4E2A\u7591\u95EE\uFF0C\u4E3A\u4EC0\u4E48\u8981\u5B58\u5728\u63D0\u5347\u8FD9\u4E2A\u4E8B\u60C5\u5462\uFF0C\u5176\u5B9E\u63D0\u5347\u5B58\u5728\u7684\u6839\u672C\u539F\u56E0\u5C31\u662F\u4E3A\u4E86\u89E3\u51B3\u51FD\u6570\u95F4\u4E92\u76F8\u8C03\u7528\u7684\u60C5\u51B5</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test1</span>(<span class="hljs-params"></span>) </span>{
    test2()
}
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test2</span>(<span class="hljs-params"></span>) </span>{
    test1()
}
test1()
</code></pre>
<p>\u5047\u5982\u4E0D\u5B58\u5728\u63D0\u5347\u8FD9\u4E2A\u60C5\u51B5\uFF0C\u90A3\u4E48\u5C31\u5B9E\u73B0\u4E0D\u4E86\u4E0A\u8FF0\u7684\u4EE3\u7801\uFF0C\u56E0\u4E3A\u4E0D\u53EF\u80FD\u5B58\u5728 <code>test1</code> \u5728 <code>test2</code> \u524D\u9762\u7136\u540E <code>test2</code> \u53C8\u5728 <code>test1</code> \u524D\u9762\u3002</p>
<p>\u90A3\u4E48\u6700\u540E\u6211\u4EEC\u603B\u7ED3\u4E0B\u8FD9\u5C0F\u8282\u7684\u5185\u5BB9\uFF1A</p>
<ul>
<li>\u51FD\u6570\u63D0\u5347\u4F18\u5148\u4E8E\u53D8\u91CF\u63D0\u5347\uFF0C\u51FD\u6570\u63D0\u5347\u4F1A\u628A\u6574\u4E2A\u51FD\u6570\u632A\u5230\u4F5C\u7528\u57DF\u9876\u90E8\uFF0C\u53D8\u91CF\u63D0\u5347\u53EA\u4F1A\u628A\u58F0\u660E\u632A\u5230\u4F5C\u7528\u57DF\u9876\u90E8</li>
<li><code>var</code> \u5B58\u5728\u63D0\u5347\uFF0C\u6211\u4EEC\u80FD\u5728\u58F0\u660E\u4E4B\u524D\u4F7F\u7528\u3002<code>let</code>\u3001<code>const</code> \u56E0\u4E3A\u6682\u65F6\u6027\u6B7B\u533A\u7684\u539F\u56E0\uFF0C\u4E0D\u80FD\u5728\u58F0\u660E\u524D\u4F7F\u7528</li>
<li><code>var</code> \u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E0B\u58F0\u660E\u53D8\u91CF\u4F1A\u5BFC\u81F4\u53D8\u91CF\u6302\u8F7D\u5728 <code>window</code> \u4E0A\uFF0C\u5176\u4ED6\u4E24\u8005\u4E0D\u4F1A</li>
<li><code>let</code> \u548C <code>const</code> \u4F5C\u7528\u57FA\u672C\u4E00\u81F4\uFF0C\u4F46\u662F\u540E\u8005\u58F0\u660E\u7684\u53D8\u91CF\u4E0D\u80FD\u518D\u6B21\u8D4B\u503C</li>
</ul>
<h2 data-id="heading-2">\u539F\u578B\u7EE7\u627F\u548C Class \u7EE7\u627F</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u539F\u578B\u5982\u4F55\u5B9E\u73B0\u7EE7\u627F\uFF1FClass \u5982\u4F55\u5B9E\u73B0\u7EE7\u627F\uFF1FClass \u672C\u8D28\u662F\u4EC0\u4E48\uFF1F
</code></pre>
<p>\u9996\u5148\u5148\u6765\u8BB2\u4E0B <code>class</code>\uFF0C\u5176\u5B9E\u5728 JS \u4E2D\u5E76\u4E0D\u5B58\u5728\u7C7B\uFF0C<code>class</code> \u53EA\u662F\u8BED\u6CD5\u7CD6\uFF0C\u672C\u8D28\u8FD8\u662F\u51FD\u6570\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Person</span> </span>{}
Person <span class="hljs-keyword">instanceof</span> <span class="hljs-built_in">Function</span> <span class="hljs-comment">// true</span>
</code></pre>
<p>\u5728\u4E0A\u4E00\u7AE0\u8282\u4E2D\u6211\u4EEC\u8BB2\u89E3\u4E86\u539F\u578B\u7684\u77E5\u8BC6\u70B9\uFF0C\u5728\u8FD9\u4E00\u5C0F\u8282\u4E2D\u6211\u4EEC\u5C06\u4F1A\u5206\u522B\u4F7F\u7528\u539F\u578B\u548C <code>class</code> \u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u7EE7\u627F\u3002</p>
<h3 data-id="heading-3">\u7EC4\u5408\u7EE7\u627F</h3>
<p>\u7EC4\u5408\u7EE7\u627F\u662F\u6700\u5E38\u7528\u7684\u7EE7\u627F\u65B9\u5F0F\uFF0C</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Parent</span>(<span class="hljs-params">value</span>) </span>{
  <span class="hljs-built_in">this</span>.val = value
}
Parent.prototype.getValue = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>.val)
}
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Child</span>(<span class="hljs-params">value</span>) </span>{
  Parent.call(<span class="hljs-built_in">this</span>, value)
}
Child.prototype = <span class="hljs-keyword">new</span> Parent()

<span class="hljs-keyword">const</span> child = <span class="hljs-keyword">new</span> Child(<span class="hljs-number">1</span>)

child.getValue() <span class="hljs-comment">// 1</span>
child <span class="hljs-keyword">instanceof</span> Parent <span class="hljs-comment">// true</span>
</code></pre>
<p>\u4EE5\u4E0A\u7EE7\u627F\u7684\u65B9\u5F0F\u6838\u5FC3\u662F\u5728\u5B50\u7C7B\u7684\u6784\u9020\u51FD\u6570\u4E2D\u901A\u8FC7 <code>Parent.call(this)</code> \u7EE7\u627F\u7236\u7C7B\u7684\u5C5E\u6027\uFF0C\u7136\u540E\u6539\u53D8\u5B50\u7C7B\u7684\u539F\u578B\u4E3A <code>new Parent()</code> \u6765\u7EE7\u627F\u7236\u7C7B\u7684\u51FD\u6570\u3002</p>
<p>\u8FD9\u79CD\u7EE7\u627F\u65B9\u5F0F\u4F18\u70B9\u5728\u4E8E\u6784\u9020\u51FD\u6570\u53EF\u4EE5\u4F20\u53C2\uFF0C\u4E0D\u4F1A\u4E0E\u7236\u7C7B\u5F15\u7528\u5C5E\u6027\u5171\u4EAB\uFF0C\u53EF\u4EE5\u590D\u7528\u7236\u7C7B\u7684\u51FD\u6570\uFF0C\u4F46\u662F\u4E5F\u5B58\u5728\u4E00\u4E2A\u7F3A\u70B9\u5C31\u662F\u5728\u7EE7\u627F\u7236\u7C7B\u51FD\u6570\u7684\u65F6\u5019\u8C03\u7528\u4E86\u7236\u7C7B\u6784\u9020\u51FD\u6570\uFF0C\u5BFC\u81F4\u5B50\u7C7B\u7684\u539F\u578B\u4E0A\u591A\u4E86\u4E0D\u9700\u8981\u7684\u7236\u7C7B\u5C5E\u6027\uFF0C\u5B58\u5728\u5185\u5B58\u4E0A\u7684\u6D6A\u8D39\u3002</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/31d2239e7e374239afdedee4ee79289a~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<h3 data-id="heading-4">\u5BC4\u751F\u7EC4\u5408\u7EE7\u627F</h3>
<p>\u8FD9\u79CD\u7EE7\u627F\u65B9\u5F0F\u5BF9\u7EC4\u5408\u7EE7\u627F\u8FDB\u884C\u4E86\u4F18\u5316\uFF0C\u7EC4\u5408\u7EE7\u627F\u7F3A\u70B9\u5728\u4E8E\u7EE7\u627F\u7236\u7C7B\u51FD\u6570\u65F6\u8C03\u7528\u4E86\u6784\u9020\u51FD\u6570\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u4F18\u5316\u6389\u8FD9\u70B9\u5C31\u884C\u4E86\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Parent</span>(<span class="hljs-params">value</span>) </span>{
  <span class="hljs-built_in">this</span>.val = value
}
Parent.prototype.getValue = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>.val)
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Child</span>(<span class="hljs-params">value</span>) </span>{
  Parent.call(<span class="hljs-built_in">this</span>, value)
}
Child.prototype = <span class="hljs-built_in">Object</span>.create(Parent.prototype, {
  <span class="hljs-attr">constructor</span>: {
    <span class="hljs-attr">value</span>: Child,
    <span class="hljs-attr">enumerable</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">writable</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">configurable</span>: <span class="hljs-literal">true</span>
  }
})

<span class="hljs-keyword">const</span> child = <span class="hljs-keyword">new</span> Child(<span class="hljs-number">1</span>)

child.getValue() <span class="hljs-comment">// 1</span>
child <span class="hljs-keyword">instanceof</span> Parent <span class="hljs-comment">// true</span>
</code></pre>
<p>\u4EE5\u4E0A\u7EE7\u627F\u5B9E\u73B0\u7684\u6838\u5FC3\u5C31\u662F\u5C06\u7236\u7C7B\u7684\u539F\u578B\u8D4B\u503C\u7ED9\u4E86\u5B50\u7C7B\uFF0C\u5E76\u4E14\u5C06\u6784\u9020\u51FD\u6570\u8BBE\u7F6E\u4E3A\u5B50\u7C7B\uFF0C\u8FD9\u6837\u65E2\u89E3\u51B3\u4E86\u65E0\u7528\u7684\u7236\u7C7B\u5C5E\u6027\u95EE\u9898\uFF0C\u8FD8\u80FD\u6B63\u786E\u7684\u627E\u5230\u5B50\u7C7B\u7684\u6784\u9020\u51FD\u6570\u3002</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8dbe8a77119e4c03b56f8044c5ca10c5~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<h3 data-id="heading-5">Class \u7EE7\u627F</h3>
<p>\u4EE5\u4E0A\u4E24\u79CD\u7EE7\u627F\u65B9\u5F0F\u90FD\u662F\u901A\u8FC7\u539F\u578B\u53BB\u89E3\u51B3\u7684\uFF0C\u5728 ES6 \u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>class</code> \u53BB\u5B9E\u73B0\u7EE7\u627F\uFF0C\u5E76\u4E14\u5B9E\u73B0\u8D77\u6765\u5F88\u7B80\u5355</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Parent</span> </span>{
  <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params">value</span>)</span> {
    <span class="hljs-built_in">this</span>.val = value
  }
  <span class="hljs-function"><span class="hljs-title">getValue</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>.val)
  }
}
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Child</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Parent</span> </span>{
  <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params">value</span>)</span> {
    <span class="hljs-built_in">super</span>(value)
  }
}
<span class="hljs-keyword">let</span> child = <span class="hljs-keyword">new</span> Child(<span class="hljs-number">1</span>)
child.getValue() <span class="hljs-comment">// 1</span>
child <span class="hljs-keyword">instanceof</span> Parent <span class="hljs-comment">// true</span>
</code></pre>
<p><code>class</code> \u5B9E\u73B0\u7EE7\u627F\u7684\u6838\u5FC3\u5728\u4E8E\u4F7F\u7528 <code>extends</code> \u8868\u660E\u7EE7\u627F\u81EA\u54EA\u4E2A\u7236\u7C7B\uFF0C\u5E76\u4E14\u5728\u5B50\u7C7B\u6784\u9020\u51FD\u6570\u4E2D\u5FC5\u987B\u8C03\u7528 <code>super</code>\uFF0C\u56E0\u4E3A\u8FD9\u6BB5\u4EE3\u7801\u53EF\u4EE5\u770B\u6210 <code>Parent.call(this, value)</code>\u3002</p>
<p>\u5F53\u7136\u4E86\uFF0C\u4E4B\u524D\u4E5F\u8BF4\u4E86\u5728 JS \u4E2D\u5E76\u4E0D\u5B58\u5728\u7C7B\uFF0C<code>class</code> \u7684\u672C\u8D28\u5C31\u662F\u51FD\u6570\u3002</p>
<h2 data-id="heading-6">\u6A21\u5757\u5316</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u6A21\u5757\u5316\uFF1F\u90FD\u6709\u54EA\u51E0\u79CD\u65B9\u5F0F\u53EF\u4EE5\u5B9E\u73B0\u6A21\u5757\u5316\uFF0C\u5404\u6709\u4EC0\u4E48\u7279\u70B9\uFF1F
</code></pre>
<p>\u4F7F\u7528\u4E00\u4E2A\u6280\u672F\u80AF\u5B9A\u662F\u6709\u539F\u56E0\u7684\uFF0C\u90A3\u4E48\u4F7F\u7528\u6A21\u5757\u5316\u53EF\u4EE5\u7ED9\u6211\u4EEC\u5E26\u6765\u4EE5\u4E0B\u597D\u5904</p>
<ul>
<li>\u89E3\u51B3\u547D\u540D\u51B2\u7A81</li>
<li>\u63D0\u4F9B\u590D\u7528\u6027</li>
<li>\u63D0\u9AD8\u4EE3\u7801\u53EF\u7EF4\u62A4\u6027</li>
</ul>
<h3 data-id="heading-7">\u7ACB\u5373\u6267\u884C\u51FD\u6570</h3>
<p>\u5728\u65E9\u671F\uFF0C\u4F7F\u7528\u7ACB\u5373\u6267\u884C\u51FD\u6570\u5B9E\u73B0\u6A21\u5757\u5316\u662F\u5E38\u89C1\u7684\u624B\u6BB5\uFF0C\u901A\u8FC7\u51FD\u6570\u4F5C\u7528\u57DF\u89E3\u51B3\u4E86\u547D\u540D\u51B2\u7A81\u3001\u6C61\u67D3\u5168\u5C40\u4F5C\u7528\u57DF\u7684\u95EE\u9898</p>
<pre><code class="hljs language-js" lang="js">(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">globalVariable</span>)</span>{
   globalVariable.test = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{}
   <span class="hljs-comment">// ... \u58F0\u660E\u5404\u79CD\u53D8\u91CF\u3001\u51FD\u6570\u90FD\u4E0D\u4F1A\u6C61\u67D3\u5168\u5C40\u4F5C\u7528\u57DF</span>
})(globalVariable)
</code></pre>
<h3 data-id="heading-8">AMD \u548C CMD</h3>
<p>\u9274\u4E8E\u76EE\u524D\u8FD9\u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F\u5DF2\u7ECF\u5F88\u5C11\u89C1\u5230\uFF0C\u6240\u4EE5\u4E0D\u518D\u5BF9\u5177\u4F53\u7279\u6027\u7EC6\u804A\uFF0C\u53EA\u9700\u8981\u4E86\u89E3\u8FD9\u4E24\u8005\u662F\u5982\u4F55\u4F7F\u7528\u7684\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-comment">// AMD</span>
define([<span class="hljs-string">'./a'</span>, <span class="hljs-string">'./b'</span>], <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">a, b</span>) </span>{
  <span class="hljs-comment">// \u52A0\u8F7D\u6A21\u5757\u5B8C\u6BD5\u53EF\u4EE5\u4F7F\u7528</span>
  a.do()
  b.do()
})
<span class="hljs-comment">// CMD</span>
define(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"><span class="hljs-built_in">require</span>, <span class="hljs-built_in">exports</span>, <span class="hljs-built_in">module</span></span>) </span>{
  <span class="hljs-comment">// \u52A0\u8F7D\u6A21\u5757</span>
  <span class="hljs-comment">// \u53EF\u4EE5\u628A require \u5199\u5728\u51FD\u6570\u4F53\u7684\u4EFB\u610F\u5730\u65B9\u5B9E\u73B0\u5EF6\u8FDF\u52A0\u8F7D</span>
  <span class="hljs-keyword">var</span> a = <span class="hljs-built_in">require</span>(<span class="hljs-string">'./a'</span>)
  a.doSomething()
})
</code></pre>
<h3 data-id="heading-9">CommonJS</h3>
<p>CommonJS \u6700\u65E9\u662F Node \u5728\u4F7F\u7528\uFF0C\u76EE\u524D\u4E5F\u4ECD\u7136\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u6BD4\u5982\u5728 Webpack \u4E2D\u4F60\u5C31\u80FD\u89C1\u5230\u5B83\uFF0C\u5F53\u7136\u76EE\u524D\u5728 Node \u4E2D\u7684\u6A21\u5757\u7BA1\u7406\u5DF2\u7ECF\u548C CommonJS \u6709\u4E00\u4E9B\u533A\u522B\u4E86\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-comment">// a.js</span>
<span class="hljs-built_in">module</span>.exports = {
    <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>
}
<span class="hljs-comment">// or </span>
<span class="hljs-built_in">exports</span>.a = <span class="hljs-number">1</span>

<span class="hljs-comment">// b.js</span>
<span class="hljs-keyword">var</span> <span class="hljs-built_in">module</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">'./a.js'</span>)
<span class="hljs-built_in">module</span>.a <span class="hljs-comment">// -&gt; log 1</span>
</code></pre>
<p>\u56E0\u4E3A CommonJS \u8FD8\u662F\u4F1A\u4F7F\u7528\u5230\u7684\uFF0C\u6240\u4EE5\u8FD9\u91CC\u4F1A\u5BF9\u4E00\u4E9B\u7591\u96BE\u70B9\u8FDB\u884C\u89E3\u6790</p>
<p>\u5148\u8BF4 <code>require</code> \u5427</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">var</span> <span class="hljs-built_in">module</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">'./a.js'</span>)
<span class="hljs-built_in">module</span>.a 
<span class="hljs-comment">// \u8FD9\u91CC\u5176\u5B9E\u5C31\u662F\u5305\u88C5\u4E86\u4E00\u5C42\u7ACB\u5373\u6267\u884C\u51FD\u6570\uFF0C\u8FD9\u6837\u5C31\u4E0D\u4F1A\u6C61\u67D3\u5168\u5C40\u53D8\u91CF\u4E86\uFF0C</span>
<span class="hljs-comment">// \u91CD\u8981\u7684\u662F module \u8FD9\u91CC\uFF0Cmodule \u662F Node \u72EC\u6709\u7684\u4E00\u4E2A\u53D8\u91CF</span>
<span class="hljs-built_in">module</span>.exports = {
    <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>
}
<span class="hljs-comment">// module \u57FA\u672C\u5B9E\u73B0</span>
<span class="hljs-keyword">var</span> <span class="hljs-built_in">module</span> = {
  <span class="hljs-attr">id</span>: <span class="hljs-string">'xxxx'</span>, <span class="hljs-comment">// \u6211\u603B\u5F97\u77E5\u9053\u600E\u4E48\u53BB\u627E\u5230\u4ED6\u5427</span>
  <span class="hljs-attr">exports</span>: {} <span class="hljs-comment">// exports \u5C31\u662F\u4E2A\u7A7A\u5BF9\u8C61</span>
}
<span class="hljs-comment">// \u8FD9\u4E2A\u662F\u4E3A\u4EC0\u4E48 exports \u548C module.exports \u7528\u6CD5\u76F8\u4F3C\u7684\u539F\u56E0</span>
<span class="hljs-keyword">var</span> <span class="hljs-built_in">exports</span> = <span class="hljs-built_in">module</span>.exports 
<span class="hljs-keyword">var</span> load = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"><span class="hljs-built_in">module</span></span>) </span>{
    <span class="hljs-comment">// \u5BFC\u51FA\u7684\u4E1C\u897F</span>
    <span class="hljs-keyword">var</span> a = <span class="hljs-number">1</span>
    <span class="hljs-built_in">module</span>.exports = a
    <span class="hljs-keyword">return</span> <span class="hljs-built_in">module</span>.exports
};
<span class="hljs-comment">// \u7136\u540E\u5F53\u6211 require \u7684\u65F6\u5019\u53BB\u627E\u5230\u72EC\u7279\u7684</span>
<span class="hljs-comment">// id\uFF0C\u7136\u540E\u5C06\u8981\u4F7F\u7528\u7684\u4E1C\u897F\u7528\u7ACB\u5373\u6267\u884C\u51FD\u6570\u5305\u88C5\u4E0B\uFF0Cover</span>
</code></pre>
<p>\u53E6\u5916\u867D\u7136 <code>exports</code> \u548C <code>module.exports</code> \u7528\u6CD5\u76F8\u4F3C\uFF0C\u4F46\u662F\u4E0D\u80FD\u5BF9 <code>exports</code> \u76F4\u63A5\u8D4B\u503C\u3002\u56E0\u4E3A <code>var exports = module.exports </code> \u8FD9\u53E5\u4EE3\u7801\u8868\u660E\u4E86 <code>exports</code> \u548C <code>module.exports</code> \u4EAB\u6709\u76F8\u540C\u5730\u5740\uFF0C\u901A\u8FC7\u6539\u53D8\u5BF9\u8C61\u7684\u5C5E\u6027\u503C\u4F1A\u5BF9\u4E24\u8005\u90FD\u8D77\u6548\uFF0C\u4F46\u662F\u5982\u679C\u76F4\u63A5\u5BF9 <code>exports</code> \u8D4B\u503C\u5C31\u4F1A\u5BFC\u81F4\u4E24\u8005\u4E0D\u518D\u6307\u5411\u540C\u4E00\u4E2A\u5185\u5B58\u5730\u5740\uFF0C\u4FEE\u6539\u5E76\u4E0D\u4F1A\u5BF9 <code>module.exports</code> \u8D77\u6548\u3002</p>
<h3 data-id="heading-10">ES Module</h3>
<p>ES Module \u662F\u539F\u751F\u5B9E\u73B0\u7684\u6A21\u5757\u5316\u65B9\u6848\uFF0C\u4E0E CommonJS \u6709\u4EE5\u4E0B\u51E0\u4E2A\u533A\u522B</p>
<ul>
<li>CommonJS \u652F\u6301\u52A8\u6001\u5BFC\u5165\uFF0C\u4E5F\u5C31\u662F <code>require(\${path}/xx.js)</code>\uFF0C\u540E\u8005\u76EE\u524D\u4E0D\u652F\u6301\uFF0C\u4F46\u662F\u5DF2\u6709\u63D0\u6848</li>
<li>CommonJS \u662F\u540C\u6B65\u5BFC\u5165\uFF0C\u56E0\u4E3A\u7528\u4E8E\u670D\u52A1\u7AEF\uFF0C\u6587\u4EF6\u90FD\u5728\u672C\u5730\uFF0C\u540C\u6B65\u5BFC\u5165\u5373\u4F7F\u5361\u4F4F\u4E3B\u7EBF\u7A0B\u5F71\u54CD\u4E5F\u4E0D\u5927\u3002\u800C\u540E\u8005\u662F\u5F02\u6B65\u5BFC\u5165\uFF0C\u56E0\u4E3A\u7528\u4E8E\u6D4F\u89C8\u5668\uFF0C\u9700\u8981\u4E0B\u8F7D\u6587\u4EF6\uFF0C\u5982\u679C\u4E5F\u91C7\u7528\u540C\u6B65\u5BFC\u5165\u4F1A\u5BF9\u6E32\u67D3\u6709\u5F88\u5927\u5F71\u54CD</li>
<li>CommonJS \u5728\u5BFC\u51FA\u65F6\u90FD\u662F\u503C\u62F7\u8D1D\uFF0C\u5C31\u7B97\u5BFC\u51FA\u7684\u503C\u53D8\u4E86\uFF0C\u5BFC\u5165\u7684\u503C\u4E5F\u4E0D\u4F1A\u6539\u53D8\uFF0C\u6240\u4EE5\u5982\u679C\u60F3\u66F4\u65B0\u503C\uFF0C\u5FC5\u987B\u91CD\u65B0\u5BFC\u5165\u4E00\u6B21\u3002\u4F46\u662F ES Module \u91C7\u7528\u5B9E\u65F6\u7ED1\u5B9A\u7684\u65B9\u5F0F\uFF0C\u5BFC\u5165\u5BFC\u51FA\u7684\u503C\u90FD\u6307\u5411\u540C\u4E00\u4E2A\u5185\u5B58\u5730\u5740\uFF0C\u6240\u4EE5\u5BFC\u5165\u503C\u4F1A\u8DDF\u968F\u5BFC\u51FA\u503C\u53D8\u5316</li>
<li>ES Module \u4F1A\u7F16\u8BD1\u6210 <code>require/exports</code> \u6765\u6267\u884C\u7684</li>
</ul>
<pre><code class="hljs language-js" lang="js"><span class="hljs-comment">// \u5F15\u5165\u6A21\u5757 API</span>
<span class="hljs-keyword">import</span> XXX <span class="hljs-keyword">from</span> <span class="hljs-string">'./a.js'</span>
<span class="hljs-keyword">import</span> { XXX } <span class="hljs-keyword">from</span> <span class="hljs-string">'./a.js'</span>
<span class="hljs-comment">// \u5BFC\u51FA\u6A21\u5757 API</span>
<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{}
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{}
</code></pre>
<h2 data-id="heading-11">Proxy</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1AProxy \u53EF\u4EE5\u5B9E\u73B0\u4EC0\u4E48\u529F\u80FD\uFF1F
</code></pre>
<p>\u5982\u679C\u4F60\u5E73\u65F6\u6709\u5173\u6CE8 Vue \u7684\u8FDB\u5C55\u7684\u8BDD\uFF0C\u53EF\u80FD\u5DF2\u7ECF\u77E5\u9053\u4E86\u5728 Vue3.0 \u4E2D\u5C06\u4F1A\u901A\u8FC7 <code>Proxy</code> \u6765\u66FF\u6362\u539F\u672C\u7684 <code>Object.defineProperty</code> \u6765\u5B9E\u73B0\u6570\u636E\u54CD\u5E94\u5F0F\u3002
Proxy \u662F ES6 \u4E2D\u65B0\u589E\u7684\u529F\u80FD\uFF0C\u5B83\u53EF\u4EE5\u7528\u6765\u81EA\u5B9A\u4E49\u5BF9\u8C61\u4E2D\u7684\u64CD\u4F5C\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">let</span> p = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Proxy</span>(target, handler)
</code></pre>
<p><code>target</code> \u4EE3\u8868\u9700\u8981\u6DFB\u52A0\u4EE3\u7406\u7684\u5BF9\u8C61\uFF0C<code>handler</code> \u7528\u6765\u81EA\u5B9A\u4E49\u5BF9\u8C61\u4E2D\u7684\u64CD\u4F5C\uFF0C\u6BD4\u5982\u53EF\u4EE5\u7528\u6765\u81EA\u5B9A\u4E49 <code>set</code> \u6216\u8005 <code>get</code> \u51FD\u6570\u3002</p>
<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u901A\u8FC7 <code>Proxy</code> \u6765\u5B9E\u73B0\u4E00\u4E2A\u6570\u636E\u54CD\u5E94\u5F0F</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">let</span> onWatch = <span class="hljs-function">(<span class="hljs-params">obj, setBind, getLogger</span>) =&gt;</span> {
  <span class="hljs-keyword">let</span> handler = {
    <span class="hljs-function"><span class="hljs-title">get</span>(<span class="hljs-params">target, property, receiver</span>)</span> {
      getLogger(target, property)
      <span class="hljs-keyword">return</span> <span class="hljs-built_in">Reflect</span>.get(target, property, receiver)
    },
    <span class="hljs-function"><span class="hljs-title">set</span>(<span class="hljs-params">target, property, value, receiver</span>)</span> {
      setBind(value, property)
      <span class="hljs-keyword">return</span> <span class="hljs-built_in">Reflect</span>.set(target, property, value)
    }
  }
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Proxy</span>(obj, handler)
}

<span class="hljs-keyword">let</span> obj = { <span class="hljs-attr">a</span>: <span class="hljs-number">1</span> }
<span class="hljs-keyword">let</span> p = onWatch(
  obj,
  <span class="hljs-function">(<span class="hljs-params">v, property</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`\u76D1\u542C\u5230\u5C5E\u6027<span class="hljs-subst">\${property}</span>\u6539\u53D8\u4E3A<span class="hljs-subst">\${v}</span>\`</span>)
  },
  <span class="hljs-function">(<span class="hljs-params">target, property</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`'<span class="hljs-subst">\${property}</span>' = <span class="hljs-subst">\${target[property]}</span>\`</span>)
  }
)
p.a = <span class="hljs-number">2</span> <span class="hljs-comment">// \u76D1\u542C\u5230\u5C5E\u6027a\u6539\u53D8</span>
p.a <span class="hljs-comment">// 'a' = 2</span>
</code></pre>
<p>\u5728\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7\u81EA\u5B9A\u4E49 <code>set</code> \u548C <code>get</code> \u51FD\u6570\u7684\u65B9\u5F0F\uFF0C\u5728\u539F\u672C\u7684\u903B\u8F91\u4E2D\u63D2\u5165\u4E86\u6211\u4EEC\u7684\u51FD\u6570\u903B\u8F91\uFF0C\u5B9E\u73B0\u4E86\u5728\u5BF9\u5BF9\u8C61\u4EFB\u4F55\u5C5E\u6027\u8FDB\u884C\u8BFB\u5199\u65F6\u53D1\u51FA\u901A\u77E5\u3002</p>
<p>\u5F53\u7136\u8FD9\u662F\u7B80\u5355\u7248\u7684\u54CD\u5E94\u5F0F\u5B9E\u73B0\uFF0C\u5982\u679C\u9700\u8981\u5B9E\u73B0\u4E00\u4E2A Vue \u4E2D\u7684\u54CD\u5E94\u5F0F\uFF0C\u9700\u8981\u6211\u4EEC\u5728 <code>get</code> \u4E2D\u6536\u96C6\u4F9D\u8D56\uFF0C\u5728 <code>set</code> \u6D3E\u53D1\u66F4\u65B0\uFF0C\u4E4B\u6240\u4EE5 Vue3.0 \u8981\u4F7F\u7528 <code>Proxy</code> \u66FF\u6362\u539F\u672C\u7684 API \u539F\u56E0\u5728\u4E8E <code>Proxy</code> \u65E0\u9700\u4E00\u5C42\u5C42\u9012\u5F52\u4E3A\u6BCF\u4E2A\u5C5E\u6027\u6DFB\u52A0\u4EE3\u7406\uFF0C\u4E00\u6B21\u5373\u53EF\u5B8C\u6210\u4EE5\u4E0A\u64CD\u4F5C\uFF0C\u6027\u80FD\u4E0A\u66F4\u597D\uFF0C\u5E76\u4E14\u539F\u672C\u7684\u5B9E\u73B0\u6709\u4E00\u4E9B\u6570\u636E\u66F4\u65B0\u4E0D\u80FD\u76D1\u542C\u5230\uFF0C\u4F46\u662F <code>Proxy</code> \u53EF\u4EE5\u5B8C\u7F8E\u76D1\u542C\u5230\u4EFB\u4F55\u65B9\u5F0F\u7684\u6570\u636E\u6539\u53D8\uFF0C\u552F\u4E00\u7F3A\u9677\u53EF\u80FD\u5C31\u662F\u6D4F\u89C8\u5668\u7684\u517C\u5BB9\u6027\u4E0D\u597D\u4E86\u3002</p>
<pre><code class="hljs language-!" lang="!">\u66F4\u65B0\uFF1A\u8BC4\u8BBA\u4E2D\u6709\u540C\u5B66\u5BF9\u4E8E Proxy \u65E0\u9700\u4E00\u5C42\u5C42\u9012\u5F52\u4E3A\u6BCF\u4E2A\u5C5E\u6027\u6DFB\u52A0\u4EE3\u7406\u6709\u7591\u95EE\uFF0C\u4EE5\u4E0B\u662F\u5B9E\u73B0\u4EE3\u7801\u3002
</code></pre>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-title">get</span>(<span class="hljs-params">target, property, receiver</span>)</span> {
    getLogger(target, property)
    <span class="hljs-comment">// \u8FD9\u53E5\u5224\u65AD\u4EE3\u7801\u662F\u65B0\u589E\u7684</span>
    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> target[property] === <span class="hljs-string">'object'</span> &amp;&amp; target[property] !== <span class="hljs-literal">null</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Proxy</span>(target[property], handler);
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">Reflect</span>.get(target, property);
    }
}
</code></pre>
<h2 data-id="heading-12">map, filter, reduce</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1Amap, filter, reduce \u5404\u81EA\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F
</code></pre>
<p><code>map</code> \u4F5C\u7528\u662F\u751F\u6210\u4E00\u4E2A\u65B0\u6570\u7EC4\uFF0C\u904D\u5386\u539F\u6570\u7EC4\uFF0C\u5C06\u6BCF\u4E2A\u5143\u7D20\u62FF\u51FA\u6765\u505A\u4E00\u4E9B\u53D8\u6362\u7136\u540E\u653E\u5165\u5230\u65B0\u7684\u6570\u7EC4\u4E2D\u3002</p>
<pre><code class="hljs language-js" lang="js">[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map(<span class="hljs-function"><span class="hljs-params">v</span> =&gt;</span> v + <span class="hljs-number">1</span>) <span class="hljs-comment">// -&gt; [2, 3, 4]</span>
</code></pre>
<p>\u53E6\u5916 <code>map</code> \u7684\u56DE\u8C03\u51FD\u6570\u63A5\u53D7\u4E09\u4E2A\u53C2\u6570\uFF0C\u5206\u522B\u662F\u5F53\u524D\u7D22\u5F15\u5143\u7D20\uFF0C\u7D22\u5F15\uFF0C\u539F\u6570\u7EC4</p>
<pre><code class="hljs language-js" lang="js">[<span class="hljs-string">'1'</span>,<span class="hljs-string">'2'</span>,<span class="hljs-string">'3'</span>].map(<span class="hljs-built_in">parseInt</span>)
</code></pre>
<ul>
<li>\u7B2C\u4E00\u8F6E\u904D\u5386 <code>parseInt('1', 0) -&gt; 1</code></li>
<li>\u7B2C\u4E8C\u8F6E\u904D\u5386 <code>parseInt('2', 1) -&gt; NaN</code></li>
<li>\u7B2C\u4E09\u8F6E\u904D\u5386 <code>parseInt('3', 2) -&gt; NaN</code></li>
</ul>
<p><code>filter</code> \u7684\u4F5C\u7528\u4E5F\u662F\u751F\u6210\u4E00\u4E2A\u65B0\u6570\u7EC4\uFF0C\u5728\u904D\u5386\u6570\u7EC4\u7684\u65F6\u5019\u5C06\u8FD4\u56DE\u503C\u4E3A <code>true</code> \u7684\u5143\u7D20\u653E\u5165\u65B0\u6570\u7EC4\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u8FD9\u4E2A\u51FD\u6570\u5220\u9664\u4E00\u4E9B\u4E0D\u9700\u8981\u7684\u5143\u7D20</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">let</span> array = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">6</span>]
<span class="hljs-keyword">let</span> newArray = array.filter(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item !== <span class="hljs-number">6</span>)
<span class="hljs-built_in">console</span>.log(newArray) <span class="hljs-comment">// [1, 2, 4]</span>
</code></pre>
<p>\u548C <code>map</code> \u4E00\u6837\uFF0C<code>filter</code> \u7684\u56DE\u8C03\u51FD\u6570\u4E5F\u63A5\u53D7\u4E09\u4E2A\u53C2\u6570\uFF0C\u7528\u5904\u4E5F\u76F8\u540C\u3002</p>
<p>\u6700\u540E\u6211\u4EEC\u6765\u8BB2\u89E3 <code>reduce</code> \u8FD9\u5757\u7684\u5185\u5BB9\uFF0C\u540C\u65F6\u4E5F\u662F\u6700\u96BE\u7406\u89E3\u7684\u4E00\u5757\u5185\u5BB9\u3002<code>reduce</code> \u53EF\u4EE5\u5C06\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u901A\u8FC7\u56DE\u8C03\u51FD\u6570\u6700\u7EC8\u8F6C\u6362\u4E3A\u4E00\u4E2A\u503C\u3002</p>
<p>\u5982\u679C\u6211\u4EEC\u60F3\u5B9E\u73B0\u4E00\u4E2A\u529F\u80FD\u5C06\u51FD\u6570\u91CC\u7684\u5143\u7D20\u5168\u90E8\u76F8\u52A0\u5F97\u5230\u4E00\u4E2A\u503C\uFF0C\u53EF\u80FD\u4F1A\u8FD9\u6837\u5199\u4EE3\u7801</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">const</span> arr = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]
<span class="hljs-keyword">let</span> total = <span class="hljs-number">0</span>
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; arr.length; i++) {
  total += arr[i]
}
<span class="hljs-built_in">console</span>.log(total) <span class="hljs-comment">//6 </span>
</code></pre>
<p>\u4F46\u662F\u5982\u679C\u6211\u4EEC\u4F7F\u7528 <code>reduce</code> \u7684\u8BDD\u5C31\u53EF\u4EE5\u5C06\u904D\u5386\u90E8\u5206\u7684\u4EE3\u7801\u4F18\u5316\u4E3A\u4E00\u884C\u4EE3\u7801</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">const</span> arr = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]
<span class="hljs-keyword">const</span> sum = arr.reduce(<span class="hljs-function">(<span class="hljs-params">acc, current</span>) =&gt;</span> acc + current, <span class="hljs-number">0</span>)
<span class="hljs-built_in">console</span>.log(sum)
</code></pre>
<p>\u5BF9\u4E8E <code>reduce</code> \u6765\u8BF4\uFF0C\u5B83\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u5206\u522B\u662F\u56DE\u8C03\u51FD\u6570\u548C\u521D\u59CB\u503C\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u5206\u89E3\u4E0A\u8FF0\u4EE3\u7801\u4E2D <code>reduce</code> \u7684\u8FC7\u7A0B</p>
<ul>
<li>\u9996\u5148\u521D\u59CB\u503C\u4E3A <code>0</code>\uFF0C\u8BE5\u503C\u4F1A\u5728\u6267\u884C\u7B2C\u4E00\u6B21\u56DE\u8C03\u51FD\u6570\u65F6\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u5165</li>
<li>\u56DE\u8C03\u51FD\u6570\u63A5\u53D7\u56DB\u4E2A\u53C2\u6570\uFF0C\u5206\u522B\u4E3A\u7D2F\u8BA1\u503C\u3001\u5F53\u524D\u5143\u7D20\u3001\u5F53\u524D\u7D22\u5F15\u3001\u539F\u6570\u7EC4\uFF0C\u540E\u4E09\u8005\u60F3\u5FC5\u5927\u5BB6\u90FD\u53EF\u4EE5\u660E\u767D\u4F5C\u7528\uFF0C\u8FD9\u91CC\u7740\u91CD\u5206\u6790\u7B2C\u4E00\u4E2A\u53C2\u6570</li>
<li>\u5728\u4E00\u6B21\u6267\u884C\u56DE\u8C03\u51FD\u6570\u65F6\uFF0C\u5F53\u524D\u503C\u548C\u521D\u59CB\u503C\u76F8\u52A0\u5F97\u51FA\u7ED3\u679C <code>1</code>\uFF0C\u8BE5\u7ED3\u679C\u4F1A\u5728\u7B2C\u4E8C\u6B21\u6267\u884C\u56DE\u8C03\u51FD\u6570\u65F6\u5F53\u505A\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u5165</li>
<li>\u6240\u4EE5\u5728\u7B2C\u4E8C\u6B21\u6267\u884C\u56DE\u8C03\u51FD\u6570\u65F6\uFF0C\u76F8\u52A0\u7684\u503C\u5C31\u5206\u522B\u662F <code>1</code> \u548C <code>2</code>\uFF0C\u4EE5\u6B64\u7C7B\u63A8\uFF0C\u5FAA\u73AF\u7ED3\u675F\u540E\u5F97\u5230\u7ED3\u679C <code>6</code></li>
</ul>
<p>\u60F3\u5FC5\u901A\u8FC7\u4EE5\u4E0A\u7684\u89E3\u6790\u5927\u5BB6\u5E94\u8BE5\u660E\u767D <code>reduce</code> \u662F\u5982\u4F55\u901A\u8FC7\u56DE\u8C03\u51FD\u6570\u5C06\u6240\u6709\u5143\u7D20\u6700\u7EC8\u8F6C\u6362\u4E3A\u4E00\u4E2A\u503C\u7684\uFF0C\u5F53\u7136 <code>reduce</code> \u8FD8\u53EF\u4EE5\u5B9E\u73B0\u5F88\u591A\u529F\u80FD\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u901A\u8FC7 <code>reduce</code> \u6765\u5B9E\u73B0 <code>map</code> \u51FD\u6570</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">const</span> arr = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]
<span class="hljs-keyword">const</span> mapArray = arr.map(<span class="hljs-function"><span class="hljs-params">value</span> =&gt;</span> value * <span class="hljs-number">2</span>)
<span class="hljs-keyword">const</span> reduceArray = arr.reduce(<span class="hljs-function">(<span class="hljs-params">acc, current</span>) =&gt;</span> {
  acc.push(current * <span class="hljs-number">2</span>)
  <span class="hljs-keyword">return</span> acc
}, [])
<span class="hljs-built_in">console</span>.log(mapArray, reduceArray) <span class="hljs-comment">// [2, 4, 6]</span>
</code></pre>
<p>\u5982\u679C\u4F60\u5BF9\u8FD9\u4E2A\u5B9E\u73B0\u8FD8\u6709\u56F0\u60D1\u7684\u8BDD\uFF0C\u53EF\u4EE5\u6839\u636E\u4E0A\u4E00\u6B65\u7684\u89E3\u6790\u6B65\u9AA4\u6765\u5206\u6790\u8FC7\u7A0B\u3002</p>
<h2 data-id="heading-13">\u5C0F\u7ED3</h2>
<p>\u8FD9\u4E00\u7AE0\u8282\u6211\u4EEC\u4E86\u89E3\u4E86\u90E8\u5206 ES6 \u5E38\u8003\u7684\u77E5\u8BC6\u70B9\uFF0C\u5176\u4ED6\u7684\u4E00\u4E9B\u5F02\u6B65\u5185\u5BB9\u6211\u4EEC\u4F1A\u653E\u5728\u4E0B\u4E00\u7AE0\u8282\u53BB\u8BB2\u3002\u5982\u679C\u5927\u5BB6\u5BF9\u4E8E\u8FD9\u4E2A\u7AE0\u8282\u7684\u5185\u5BB9\u5B58\u5728\u7591\u95EE\uFF0C\u6B22\u8FCE\u5728\u8BC4\u8BBA\u533A\u4E0E\u6211\u4E92\u52A8\u3002</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
