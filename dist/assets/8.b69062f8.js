var s={name:"JS \u8FDB\u9636\u77E5\u8BC6\u70B9\u53CA\u5E38\u8003\u9762\u8BD5\u9898",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h1 data-id="heading-0">JS \u8FDB\u9636\u77E5\u8BC6\u70B9\u53CA\u5E38\u8003\u9762\u8BD5\u9898</h1>
<p>\u5728\u8FD9\u4E00\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u4F1A\u5B66\u4E60\u5230\u4E00\u4E9B\u539F\u7406\u76F8\u5173\u7684\u77E5\u8BC6\uFF0C\u4E0D\u4F1A\u89E3\u91CA\u6D89\u53CA\u5230\u7684\u77E5\u8BC6\u70B9\u7684\u4F5C\u7528\u53CA\u7528\u6CD5\uFF0C\u5982\u679C\u5927\u5BB6\u5BF9\u4E8E\u8FD9\u4E9B\u5185\u5BB9\u8FD8\u4E0D\u600E\u4E48\u719F\u6089\uFF0C\u63A8\u8350\u5148\u53BB\u5B66\u4E60\u76F8\u5173\u7684\u77E5\u8BC6\u70B9\u5185\u5BB9\u518D\u6765\u5B66\u4E60\u539F\u7406\u77E5\u8BC6\u3002</p>
<h2 data-id="heading-1">\u624B\u5199 call\u3001apply \u53CA bind \u51FD\u6570</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1Acall\u3001apply \u53CA bind \u51FD\u6570\u5185\u90E8\u5B9E\u73B0\u662F\u600E\u4E48\u6837\u7684\uFF1F
</code></pre>
<p>\u9996\u5148\u4ECE\u4EE5\u4E0B\u51E0\u70B9\u6765\u8003\u8651\u5982\u4F55\u5B9E\u73B0\u8FD9\u51E0\u4E2A\u51FD\u6570</p>
<ul>
<li>\u4E0D\u4F20\u5165\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u90A3\u4E48\u4E0A\u4E0B\u6587\u9ED8\u8BA4\u4E3A <code>window</code></li>
<li>\u6539\u53D8\u4E86 <code>this</code> \u6307\u5411\uFF0C\u8BA9\u65B0\u7684\u5BF9\u8C61\u53EF\u4EE5\u6267\u884C\u8BE5\u51FD\u6570\uFF0C\u5E76\u80FD\u63A5\u53D7\u53C2\u6570</li>
</ul>
<p>\u90A3\u4E48\u6211\u4EEC\u5148\u6765\u5B9E\u73B0 <code>call</code></p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-built_in">Function</span>.prototype.myCall = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">context</span>) </span>{
  <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> <span class="hljs-built_in">this</span> !== <span class="hljs-string">'function'</span>) {
    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">TypeError</span>(<span class="hljs-string">'Error'</span>)
  }
  context = context || <span class="hljs-built_in">window</span>
  context.fn = <span class="hljs-built_in">this</span>
  <span class="hljs-keyword">const</span> args = [...arguments].slice(<span class="hljs-number">1</span>)
  <span class="hljs-keyword">const</span> result = context.fn(...args)
  <span class="hljs-keyword">delete</span> context.fn
  <span class="hljs-keyword">return</span> result
}
</code></pre>
<p>\u4EE5\u4E0B\u662F\u5BF9\u5B9E\u73B0\u7684\u5206\u6790\uFF1A</p>
<ul>
<li>\u9996\u5148 <code>context</code> \u4E3A\u53EF\u9009\u53C2\u6570\uFF0C\u5982\u679C\u4E0D\u4F20\u7684\u8BDD\u9ED8\u8BA4\u4E0A\u4E0B\u6587\u4E3A <code>window</code></li>
<li>\u63A5\u4E0B\u6765\u7ED9 <code>context</code> \u521B\u5EFA\u4E00\u4E2A <code>fn</code> \u5C5E\u6027\uFF0C\u5E76\u5C06\u503C\u8BBE\u7F6E\u4E3A\u9700\u8981\u8C03\u7528\u7684\u51FD\u6570</li>
<li>\u56E0\u4E3A <code>call</code> \u53EF\u4EE5\u4F20\u5165\u591A\u4E2A\u53C2\u6570\u4F5C\u4E3A\u8C03\u7528\u51FD\u6570\u7684\u53C2\u6570\uFF0C\u6240\u4EE5\u9700\u8981\u5C06\u53C2\u6570\u5265\u79BB\u51FA\u6765</li>
<li>\u7136\u540E\u8C03\u7528\u51FD\u6570\u5E76\u5C06\u5BF9\u8C61\u4E0A\u7684\u51FD\u6570\u5220\u9664</li>
</ul>
<p>\u4EE5\u4E0A\u5C31\u662F\u5B9E\u73B0 <code>call</code> \u7684\u601D\u8DEF\uFF0C<code>apply</code> \u7684\u5B9E\u73B0\u4E5F\u7C7B\u4F3C\uFF0C\u533A\u522B\u5728\u4E8E\u5BF9\u53C2\u6570\u7684\u5904\u7406\uFF0C\u6240\u4EE5\u5C31\u4E0D\u4E00\u4E00\u5206\u6790\u601D\u8DEF\u4E86</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-built_in">Function</span>.prototype.myApply = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">context</span>) </span>{
  <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> <span class="hljs-built_in">this</span> !== <span class="hljs-string">'function'</span>) {
    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">TypeError</span>(<span class="hljs-string">'Error'</span>)
  }
  context = context || <span class="hljs-built_in">window</span>
  context.fn = <span class="hljs-built_in">this</span>
  <span class="hljs-keyword">let</span> result
  <span class="hljs-comment">// \u5904\u7406\u53C2\u6570\u548C call \u6709\u533A\u522B</span>
  <span class="hljs-keyword">if</span> (<span class="hljs-built_in">arguments</span>[<span class="hljs-number">1</span>]) {
    result = context.fn(...arguments[<span class="hljs-number">1</span>])
  } <span class="hljs-keyword">else</span> {
    result = context.fn()
  }
  <span class="hljs-keyword">delete</span> context.fn
  <span class="hljs-keyword">return</span> result
}
</code></pre>
<p><code>bind</code> \u7684\u5B9E\u73B0\u5BF9\u6BD4\u5176\u4ED6\u4E24\u4E2A\u51FD\u6570\u7565\u5FAE\u5730\u590D\u6742\u4E86\u4E00\u70B9\uFF0C\u56E0\u4E3A <code>bind</code> \u9700\u8981\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u9700\u8981\u5224\u65AD\u4E00\u4E9B\u8FB9\u754C\u95EE\u9898\uFF0C\u4EE5\u4E0B\u662F <code>bind</code> \u7684\u5B9E\u73B0</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-built_in">Function</span>.prototype.myBind = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">context</span>) </span>{
  <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> <span class="hljs-built_in">this</span> !== <span class="hljs-string">'function'</span>) {
    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">TypeError</span>(<span class="hljs-string">'Error'</span>)
  }
  <span class="hljs-keyword">const</span> _this = <span class="hljs-built_in">this</span>
  <span class="hljs-keyword">const</span> args = [...arguments].slice(<span class="hljs-number">1</span>)
  <span class="hljs-comment">// \u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570</span>
  <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">F</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-comment">// \u56E0\u4E3A\u8FD4\u56DE\u4E86\u4E00\u4E2A\u51FD\u6570\uFF0C\u6211\u4EEC\u53EF\u4EE5 new F()\uFF0C\u6240\u4EE5\u9700\u8981\u5224\u65AD</span>
    <span class="hljs-keyword">if</span> (<span class="hljs-built_in">this</span> <span class="hljs-keyword">instanceof</span> F) {
      <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> _this(...args, ...arguments)
    }
    <span class="hljs-keyword">return</span> _this.apply(context, args.concat(...arguments))
  }
}
</code></pre>
<p>\u4EE5\u4E0B\u662F\u5BF9\u5B9E\u73B0\u7684\u5206\u6790\uFF1A</p>
<ul>
<li>\u524D\u51E0\u6B65\u548C\u4E4B\u524D\u7684\u5B9E\u73B0\u5DEE\u4E0D\u591A\uFF0C\u5C31\u4E0D\u8D58\u8FF0\u4E86</li>
<li><code>bind</code> \u8FD4\u56DE\u4E86\u4E00\u4E2A\u51FD\u6570\uFF0C\u5BF9\u4E8E\u51FD\u6570\u6765\u8BF4\u6709\u4E24\u79CD\u65B9\u5F0F\u8C03\u7528\uFF0C\u4E00\u79CD\u662F\u76F4\u63A5\u8C03\u7528\uFF0C\u4E00\u79CD\u662F\u901A\u8FC7 <code>new</code> \u7684\u65B9\u5F0F\uFF0C\u6211\u4EEC\u5148\u6765\u8BF4\u76F4\u63A5\u8C03\u7528\u7684\u65B9\u5F0F</li>
<li>\u5BF9\u4E8E\u76F4\u63A5\u8C03\u7528\u6765\u8BF4\uFF0C\u8FD9\u91CC\u9009\u62E9\u4E86 <code>apply</code> \u7684\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u4F46\u662F\u5BF9\u4E8E\u53C2\u6570\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u60C5\u51B5\uFF1A\u56E0\u4E3A <code>bind</code> \u53EF\u4EE5\u5B9E\u73B0\u7C7B\u4F3C\u8FD9\u6837\u7684\u4EE3\u7801 <code>f.bind(obj, 1)(2)</code>\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5C06\u4E24\u8FB9\u7684\u53C2\u6570\u62FC\u63A5\u8D77\u6765\uFF0C\u4E8E\u662F\u5C31\u6709\u4E86\u8FD9\u6837\u7684\u5B9E\u73B0 <code>args.concat(...arguments)</code></li>
<li>\u6700\u540E\u6765\u8BF4\u901A\u8FC7 <code>new</code> \u7684\u65B9\u5F0F\uFF0C\u5728\u4E4B\u524D\u7684\u7AE0\u8282\u4E2D\u6211\u4EEC\u5B66\u4E60\u8FC7\u5982\u4F55\u5224\u65AD <code>this</code>\uFF0C\u5BF9\u4E8E <code>new</code> \u7684\u60C5\u51B5\u6765\u8BF4\uFF0C\u4E0D\u4F1A\u88AB\u4EFB\u4F55\u65B9\u5F0F\u6539\u53D8 <code>this</code>\uFF0C\u6240\u4EE5\u5BF9\u4E8E\u8FD9\u79CD\u60C5\u51B5\u6211\u4EEC\u9700\u8981\u5FFD\u7565\u4F20\u5165\u7684 <code>this</code></li>
</ul>
<h2 data-id="heading-2">new</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1Anew \u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF1F\u901A\u8FC7 new \u7684\u65B9\u5F0F\u521B\u5EFA\u5BF9\u8C61\u548C\u901A\u8FC7\u5B57\u9762\u91CF\u521B\u5EFA\u6709\u4EC0\u4E48\u533A\u522B\uFF1F
</code></pre>
<p>\u5728\u8C03\u7528 <code>new</code> \u7684\u8FC7\u7A0B\u4E2D\u4F1A\u53D1\u751F\u4EE5\u4E0A\u56DB\u4EF6\u4E8B\u60C5\uFF1A</p>
<ol>
<li>\u65B0\u751F\u6210\u4E86\u4E00\u4E2A\u5BF9\u8C61</li>
<li>\u94FE\u63A5\u5230\u539F\u578B</li>
<li>\u7ED1\u5B9A this</li>
<li>\u8FD4\u56DE\u65B0\u5BF9\u8C61</li>
</ol>
<p>\u6839\u636E\u4EE5\u4E0A\u51E0\u4E2A\u8FC7\u7A0B\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u8BD5\u7740\u6765\u81EA\u5DF1\u5B9E\u73B0\u4E00\u4E2A <code>new</code></p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">create</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">let</span> obj = {}
  <span class="hljs-keyword">let</span> Con = [].shift.call(<span class="hljs-built_in">arguments</span>)
  obj.__proto__ = Con.prototype
  <span class="hljs-keyword">let</span> result = Con.apply(obj, <span class="hljs-built_in">arguments</span>)
  <span class="hljs-keyword">return</span> result <span class="hljs-keyword">instanceof</span> <span class="hljs-built_in">Object</span> ? result : obj
}
</code></pre>
<p>\u4EE5\u4E0B\u662F\u5BF9\u5B9E\u73B0\u7684\u5206\u6790\uFF1A</p>
<ul>
<li>\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5BF9\u8C61</li>
<li>\u83B7\u53D6\u6784\u9020\u51FD\u6570</li>
<li>\u8BBE\u7F6E\u7A7A\u5BF9\u8C61\u7684\u539F\u578B</li>
<li>\u7ED1\u5B9A <code>this</code> \u5E76\u6267\u884C\u6784\u9020\u51FD\u6570</li>
<li>\u786E\u4FDD\u8FD4\u56DE\u503C\u4E3A\u5BF9\u8C61</li>
</ul>
<p>\u5BF9\u4E8E\u5BF9\u8C61\u6765\u8BF4\uFF0C\u5176\u5B9E\u90FD\u662F\u901A\u8FC7 <code>new</code> \u4EA7\u751F\u7684\uFF0C\u65E0\u8BBA\u662F <code>function Foo()</code> \u8FD8\u662F <code>let a = { b : 1 }</code> \u3002</p>
<p>\u5BF9\u4E8E\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u6765\u8BF4\uFF0C\u66F4\u63A8\u8350\u4F7F\u7528\u5B57\u9762\u91CF\u7684\u65B9\u5F0F\u521B\u5EFA\u5BF9\u8C61\uFF08\u65E0\u8BBA\u6027\u80FD\u4E0A\u8FD8\u662F\u53EF\u8BFB\u6027\uFF09\u3002\u56E0\u4E3A\u4F60\u4F7F\u7528 <code>new Object()</code> \u7684\u65B9\u5F0F\u521B\u5EFA\u5BF9\u8C61\u9700\u8981\u901A\u8FC7\u4F5C\u7528\u57DF\u94FE\u4E00\u5C42\u5C42\u627E\u5230 <code>Object</code>\uFF0C\u4F46\u662F\u4F60\u4F7F\u7528\u5B57\u9762\u91CF\u7684\u65B9\u5F0F\u5C31\u6CA1\u8FD9\u4E2A\u95EE\u9898\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Foo</span>(<span class="hljs-params"></span>) </span>{}
<span class="hljs-comment">// function \u5C31\u662F\u4E2A\u8BED\u6CD5\u7CD6</span>
<span class="hljs-comment">// \u5185\u90E8\u7B49\u540C\u4E8E new Function()</span>
<span class="hljs-keyword">let</span> a = { <span class="hljs-attr">b</span>: <span class="hljs-number">1</span> }
<span class="hljs-comment">// \u8FD9\u4E2A\u5B57\u9762\u91CF\u5185\u90E8\u4E5F\u662F\u4F7F\u7528\u4E86 new Object()</span>
</code></pre>
<p>\u66F4\u591A\u5173\u4E8E <code>new</code> \u7684\u5185\u5BB9\u53EF\u4EE5\u9605\u8BFB\u6211\u5199\u7684\u6587\u7AE0 <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FKieSun%2FDream%2Fissues%2F14" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/KieSun/Dream/issues/14" ref="nofollow noopener noreferrer">\u804A\u804A new \u64CD\u4F5C\u7B26</a>\u3002</p>
<h2 data-id="heading-3">instanceof \u7684\u539F\u7406</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1Ainstanceof \u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF1F
</code></pre>
<p><code>instanceof</code> \u53EF\u4EE5\u6B63\u786E\u7684\u5224\u65AD\u5BF9\u8C61\u7684\u7C7B\u578B\uFF0C\u56E0\u4E3A\u5185\u90E8\u673A\u5236\u662F\u901A\u8FC7\u5224\u65AD\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E2D\u662F\u4E0D\u662F\u80FD\u627E\u5230\u7C7B\u578B\u7684 <code>prototype</code>\u3002</p>
<p>\u6211\u4EEC\u4E5F\u53EF\u4EE5\u8BD5\u7740\u5B9E\u73B0\u4E00\u4E0B <code>instanceof</code></p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">myInstanceof</span>(<span class="hljs-params">left, right</span>) </span>{
  <span class="hljs-keyword">let</span> prototype = right.prototype
  left = left.__proto__
  <span class="hljs-keyword">while</span> (<span class="hljs-literal">true</span>) {
    <span class="hljs-keyword">if</span> (left === <span class="hljs-literal">null</span> || left === <span class="hljs-literal">undefined</span>)
      <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
    <span class="hljs-keyword">if</span> (prototype === left)
      <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>
    left = left.__proto__
  }
}
</code></pre>
<p>\u4EE5\u4E0B\u662F\u5BF9\u5B9E\u73B0\u7684\u5206\u6790\uFF1A</p>
<ul>
<li>\u9996\u5148\u83B7\u53D6\u7C7B\u578B\u7684\u539F\u578B</li>
<li>\u7136\u540E\u83B7\u5F97\u5BF9\u8C61\u7684\u539F\u578B</li>
<li>\u7136\u540E\u4E00\u76F4\u5FAA\u73AF\u5224\u65AD\u5BF9\u8C61\u7684\u539F\u578B\u662F\u5426\u7B49\u4E8E\u7C7B\u578B\u7684\u539F\u578B\uFF0C\u76F4\u5230\u5BF9\u8C61\u539F\u578B\u4E3A <code>null</code>\uFF0C\u56E0\u4E3A\u539F\u578B\u94FE\u6700\u7EC8\u4E3A <code>null</code></li>
</ul>
<h2 data-id="heading-4">\u4E3A\u4EC0\u4E48 0.1 + 0.2 != 0.3</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u4E3A\u4EC0\u4E48 0.1 + 0.2 != 0.3\uFF1F\u5982\u4F55\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF1F
</code></pre>
<p>\u5148\u8BF4\u539F\u56E0\uFF0C\u56E0\u4E3A JS \u91C7\u7528 IEEE 754 \u53CC\u7CBE\u5EA6\u7248\u672C\uFF0864\u4F4D\uFF09\uFF0C\u5E76\u4E14\u53EA\u8981\u91C7\u7528 IEEE 754 \u7684\u8BED\u8A00\u90FD\u6709\u8BE5\u95EE\u9898\u3002</p>
<p>\u6211\u4EEC\u90FD\u77E5\u9053\u8BA1\u7B97\u673A\u662F\u901A\u8FC7\u4E8C\u8FDB\u5236\u6765\u5B58\u50A8\u4E1C\u897F\u7684\uFF0C\u90A3\u4E48 <code>0.1</code> \u5728\u4E8C\u8FDB\u5236\u4E2D\u4F1A\u8868\u793A\u4E3A</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-comment">// (0011) \u8868\u793A\u5FAA\u73AF</span>
<span class="hljs-number">0.1</span> = <span class="hljs-number">2</span>^-<span class="hljs-number">4</span> * <span class="hljs-number">1.10011</span>(<span class="hljs-number">0011</span>)
</code></pre>
<p>\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0C<code>0.1</code> \u5728\u4E8C\u8FDB\u5236\u4E2D\u662F\u65E0\u9650\u5FAA\u73AF\u7684\u4E00\u4E9B\u6570\u5B57\uFF0C\u5176\u5B9E\u4E0D\u53EA\u662F <code>0.1</code>\uFF0C\u5176\u5B9E\u5F88\u591A\u5341\u8FDB\u5236\u5C0F\u6570\u7528\u4E8C\u8FDB\u5236\u8868\u793A\u90FD\u662F\u65E0\u9650\u5FAA\u73AF\u7684\u3002\u8FD9\u6837\u5176\u5B9E\u6CA1\u4EC0\u4E48\u95EE\u9898\uFF0C\u4F46\u662F JS \u91C7\u7528\u7684\u6D6E\u70B9\u6570\u6807\u51C6\u5374\u4F1A\u88C1\u526A\u6389\u6211\u4EEC\u7684\u6570\u5B57\u3002</p>
<p>IEEE 754 \u53CC\u7CBE\u5EA6\u7248\u672C\uFF0864\u4F4D\uFF09\u5C06 64 \u4F4D\u5206\u4E3A\u4E86\u4E09\u6BB5</p>
<ul>
<li>\u7B2C\u4E00\u4F4D\u7528\u6765\u8868\u793A\u7B26\u53F7</li>
<li>\u63A5\u4E0B\u53BB\u7684 11 \u4F4D\u7528\u6765\u8868\u793A\u6307\u6570</li>
<li>\u5176\u4ED6\u7684\u4F4D\u6570\u7528\u6765\u8868\u793A\u6709\u6548\u4F4D\uFF0C\u4E5F\u5C31\u662F\u7528\u4E8C\u8FDB\u5236\u8868\u793A <code>0.1</code> \u4E2D\u7684 <code>10011(0011)</code></li>
</ul>
<p>\u90A3\u4E48\u8FD9\u4E9B\u5FAA\u73AF\u7684\u6570\u5B57\u88AB\u88C1\u526A\u4E86\uFF0C\u5C31\u4F1A\u51FA\u73B0\u7CBE\u5EA6\u4E22\u5931\u7684\u95EE\u9898\uFF0C\u4E5F\u5C31\u9020\u6210\u4E86 <code>0.1</code> \u4E0D\u518D\u662F <code>0.1</code> \u4E86\uFF0C\u800C\u662F\u53D8\u6210\u4E86 <code>0.100000000000000002</code></p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-number">0.100000000000000002</span> === <span class="hljs-number">0.1</span> <span class="hljs-comment">// true</span>
</code></pre>
<p>\u90A3\u4E48\u540C\u6837\u7684\uFF0C<code>0.2</code> \u5728\u4E8C\u8FDB\u5236\u4E5F\u662F\u65E0\u9650\u5FAA\u73AF\u7684\uFF0C\u88AB\u88C1\u526A\u540E\u4E5F\u5931\u53BB\u4E86\u7CBE\u5EA6\u53D8\u6210\u4E86 <code>0.200000000000000002</code></p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-number">0.200000000000000002</span> === <span class="hljs-number">0.2</span> <span class="hljs-comment">// true</span>
</code></pre>
<p>\u6240\u4EE5\u8FD9\u4E24\u8005\u76F8\u52A0\u4E0D\u7B49\u4E8E <code>0.3</code> \u800C\u662F <code>0.300000000000000004</code></p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-number">0.1</span> + <span class="hljs-number">0.2</span> === <span class="hljs-number">0.30000000000000004</span> <span class="hljs-comment">// true</span>
</code></pre>
<p>\u90A3\u4E48\u53EF\u80FD\u4F60\u53C8\u4F1A\u6709\u4E00\u4E2A\u7591\u95EE\uFF0C\u65E2\u7136 <code>0.1</code> \u4E0D\u662F <code>0.1</code>\uFF0C\u90A3\u4E3A\u4EC0\u4E48 <code>console.log(0.1)</code> \u5374\u662F\u6B63\u786E\u7684\u5462\uFF1F</p>
<p>\u56E0\u4E3A\u5728\u8F93\u5165\u5185\u5BB9\u7684\u65F6\u5019\uFF0C\u4E8C\u8FDB\u5236\u88AB\u8F6C\u6362\u4E3A\u4E86\u5341\u8FDB\u5236\uFF0C\u5341\u8FDB\u5236\u53C8\u88AB\u8F6C\u6362\u4E3A\u4E86\u5B57\u7B26\u4E32\uFF0C\u5728\u8FD9\u4E2A\u8F6C\u6362\u7684\u8FC7\u7A0B\u4E2D\u53D1\u751F\u4E86\u53D6\u8FD1\u4F3C\u503C\u7684\u8FC7\u7A0B\uFF0C\u6240\u4EE5\u6253\u5370\u51FA\u6765\u7684\u5176\u5B9E\u662F\u4E00\u4E2A\u8FD1\u4F3C\u503C\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4EE3\u7801\u6765\u9A8C\u8BC1</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-built_in">console</span>.log(<span class="hljs-number">0.100000000000000002</span>) <span class="hljs-comment">// 0.1</span>
</code></pre>
<p>\u90A3\u4E48\u8BF4\u5B8C\u4E86\u4E3A\u4EC0\u4E48\uFF0C\u6700\u540E\u6765\u8BF4\u8BF4\u600E\u4E48\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u5427\u3002\u5176\u5B9E\u89E3\u51B3\u7684\u529E\u6CD5\u6709\u5F88\u591A\uFF0C\u8FD9\u91CC\u6211\u4EEC\u9009\u7528\u539F\u751F\u63D0\u4F9B\u7684\u65B9\u5F0F\u6765\u6700\u7B80\u5355\u7684\u89E3\u51B3\u95EE\u9898</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-built_in">parseFloat</span>((<span class="hljs-number">0.1</span> + <span class="hljs-number">0.2</span>).toFixed(<span class="hljs-number">10</span>)) === <span class="hljs-number">0.3</span> <span class="hljs-comment">// true</span>
</code></pre>
<h2 data-id="heading-5">\u5783\u573E\u56DE\u6536\u673A\u5236</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1AV8 \u4E0B\u7684\u5783\u573E\u56DE\u6536\u673A\u5236\u662F\u600E\u4E48\u6837\u7684\uFF1F
</code></pre>
<p>V8 \u5B9E\u73B0\u4E86\u51C6\u786E\u5F0F GC\uFF0CGC \u7B97\u6CD5\u91C7\u7528\u4E86\u5206\u4EE3\u5F0F\u5783\u573E\u56DE\u6536\u673A\u5236\u3002\u56E0\u6B64\uFF0CV8 \u5C06\u5185\u5B58\uFF08\u5806\uFF09\u5206\u4E3A\u65B0\u751F\u4EE3\u548C\u8001\u751F\u4EE3\u4E24\u90E8\u5206\u3002</p>
<h2 data-id="heading-6">\u65B0\u751F\u4EE3\u7B97\u6CD5</h2>
<p>\u65B0\u751F\u4EE3\u4E2D\u7684\u5BF9\u8C61\u4E00\u822C\u5B58\u6D3B\u65F6\u95F4\u8F83\u77ED\uFF0C\u4F7F\u7528 Scavenge GC \u7B97\u6CD5\u3002</p>
<p>\u5728\u65B0\u751F\u4EE3\u7A7A\u95F4\u4E2D\uFF0C\u5185\u5B58\u7A7A\u95F4\u5206\u4E3A\u4E24\u90E8\u5206\uFF0C\u5206\u522B\u4E3A From \u7A7A\u95F4\u548C To \u7A7A\u95F4\u3002\u5728\u8FD9\u4E24\u4E2A\u7A7A\u95F4\u4E2D\uFF0C\u5FC5\u5B9A\u6709\u4E00\u4E2A\u7A7A\u95F4\u662F\u4F7F\u7528\u7684\uFF0C\u53E6\u4E00\u4E2A\u7A7A\u95F4\u662F\u7A7A\u95F2\u7684\u3002\u65B0\u5206\u914D\u7684\u5BF9\u8C61\u4F1A\u88AB\u653E\u5165 From \u7A7A\u95F4\u4E2D\uFF0C\u5F53 From \u7A7A\u95F4\u88AB\u5360\u6EE1\u65F6\uFF0C\u65B0\u751F\u4EE3 GC \u5C31\u4F1A\u542F\u52A8\u4E86\u3002\u7B97\u6CD5\u4F1A\u68C0\u67E5 From \u7A7A\u95F4\u4E2D\u5B58\u6D3B\u7684\u5BF9\u8C61\u5E76\u590D\u5236\u5230 To \u7A7A\u95F4\u4E2D\uFF0C\u5982\u679C\u6709\u5931\u6D3B\u7684\u5BF9\u8C61\u5C31\u4F1A\u9500\u6BC1\u3002\u5F53\u590D\u5236\u5B8C\u6210\u540E\u5C06 From \u7A7A\u95F4\u548C To \u7A7A\u95F4\u4E92\u6362\uFF0C\u8FD9\u6837 GC \u5C31\u7ED3\u675F\u4E86\u3002</p>
<h2 data-id="heading-7">\u8001\u751F\u4EE3\u7B97\u6CD5</h2>
<p>\u8001\u751F\u4EE3\u4E2D\u7684\u5BF9\u8C61\u4E00\u822C\u5B58\u6D3B\u65F6\u95F4\u8F83\u957F\u4E14\u6570\u91CF\u4E5F\u591A\uFF0C\u4F7F\u7528\u4E86\u4E24\u4E2A\u7B97\u6CD5\uFF0C\u5206\u522B\u662F\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\u548C\u6807\u8BB0\u538B\u7F29\u7B97\u6CD5\u3002</p>
<p>\u5728\u8BB2\u7B97\u6CD5\u524D\uFF0C\u5148\u6765\u8BF4\u4E0B\u4EC0\u4E48\u60C5\u51B5\u4E0B\u5BF9\u8C61\u4F1A\u51FA\u73B0\u5728\u8001\u751F\u4EE3\u7A7A\u95F4\u4E2D\uFF1A</p>
<ul>
<li>\u65B0\u751F\u4EE3\u4E2D\u7684\u5BF9\u8C61\u662F\u5426\u5DF2\u7ECF\u7ECF\u5386\u8FC7\u4E00\u6B21 Scavenge \u7B97\u6CD5\uFF0C\u5982\u679C\u7ECF\u5386\u8FC7\u7684\u8BDD\uFF0C\u4F1A\u5C06\u5BF9\u8C61\u4ECE\u65B0\u751F\u4EE3\u7A7A\u95F4\u79FB\u5230\u8001\u751F\u4EE3\u7A7A\u95F4\u4E2D\u3002</li>
<li>To \u7A7A\u95F4\u7684\u5BF9\u8C61\u5360\u6BD4\u5927\u5C0F\u8D85\u8FC7 25 %\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4E3A\u4E86\u4E0D\u5F71\u54CD\u5230\u5185\u5B58\u5206\u914D\uFF0C\u4F1A\u5C06\u5BF9\u8C61\u4ECE\u65B0\u751F\u4EE3\u7A7A\u95F4\u79FB\u5230\u8001\u751F\u4EE3\u7A7A\u95F4\u4E2D\u3002</li>
</ul>
<p>\u8001\u751F\u4EE3\u4E2D\u7684\u7A7A\u95F4\u5F88\u590D\u6742\uFF0C\u6709\u5982\u4E0B\u51E0\u4E2A\u7A7A\u95F4</p>
<pre><code class="hljs language-c++" lang="c++"><span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">AllocationSpace</span> {</span>
  <span class="hljs-comment">// TODO(v8:7464): Actually map this space's memory as read-only.</span>
  RO_SPACE,    <span class="hljs-comment">// \u4E0D\u53D8\u7684\u5BF9\u8C61\u7A7A\u95F4</span>
  NEW_SPACE,   <span class="hljs-comment">// \u65B0\u751F\u4EE3\u7528\u4E8E GC \u590D\u5236\u7B97\u6CD5\u7684\u7A7A\u95F4</span>
  OLD_SPACE,   <span class="hljs-comment">// \u8001\u751F\u4EE3\u5E38\u9A7B\u5BF9\u8C61\u7A7A\u95F4</span>
  CODE_SPACE,  <span class="hljs-comment">// \u8001\u751F\u4EE3\u4EE3\u7801\u5BF9\u8C61\u7A7A\u95F4</span>
  MAP_SPACE,   <span class="hljs-comment">// \u8001\u751F\u4EE3 map \u5BF9\u8C61</span>
  LO_SPACE,    <span class="hljs-comment">// \u8001\u751F\u4EE3\u5927\u7A7A\u95F4\u5BF9\u8C61</span>
  NEW_LO_SPACE,  <span class="hljs-comment">// \u65B0\u751F\u4EE3\u5927\u7A7A\u95F4\u5BF9\u8C61</span>

  FIRST_SPACE = RO_SPACE,
  LAST_SPACE = NEW_LO_SPACE,
  FIRST_GROWABLE_PAGED_SPACE = OLD_SPACE,
  LAST_GROWABLE_PAGED_SPACE = MAP_SPACE
};
</code></pre>
<p>\u5728\u8001\u751F\u4EE3\u4E2D\uFF0C\u4EE5\u4E0B\u60C5\u51B5\u4F1A\u5148\u542F\u52A8\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\uFF1A</p>
<ul>
<li>\u67D0\u4E00\u4E2A\u7A7A\u95F4\u6CA1\u6709\u5206\u5757\u7684\u65F6\u5019</li>
<li>\u7A7A\u95F4\u4E2D\u88AB\u5BF9\u8C61\u8D85\u8FC7\u4E00\u5B9A\u9650\u5236</li>
<li>\u7A7A\u95F4\u4E0D\u80FD\u4FDD\u8BC1\u65B0\u751F\u4EE3\u4E2D\u7684\u5BF9\u8C61\u79FB\u52A8\u5230\u8001\u751F\u4EE3\u4E2D</li>
</ul>
<p>\u5728\u8FD9\u4E2A\u9636\u6BB5\u4E2D\uFF0C\u4F1A\u904D\u5386\u5806\u4E2D\u6240\u6709\u7684\u5BF9\u8C61\uFF0C\u7136\u540E\u6807\u8BB0\u6D3B\u7684\u5BF9\u8C61\uFF0C\u5728\u6807\u8BB0\u5B8C\u6210\u540E\uFF0C\u9500\u6BC1\u6240\u6709\u6CA1\u6709\u88AB\u6807\u8BB0\u7684\u5BF9\u8C61\u3002\u5728\u6807\u8BB0\u5927\u578B\u5BF9\u5185\u5B58\u65F6\uFF0C\u53EF\u80FD\u9700\u8981\u51E0\u767E\u6BEB\u79D2\u624D\u80FD\u5B8C\u6210\u4E00\u6B21\u6807\u8BB0\u3002\u8FD9\u5C31\u4F1A\u5BFC\u81F4\u4E00\u4E9B\u6027\u80FD\u4E0A\u7684\u95EE\u9898\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C2011 \u5E74\uFF0CV8 \u4ECE stop-the-world \u6807\u8BB0\u5207\u6362\u5230\u589E\u91CF\u6807\u5FD7\u3002\u5728\u589E\u91CF\u6807\u8BB0\u671F\u95F4\uFF0CGC \u5C06\u6807\u8BB0\u5DE5\u4F5C\u5206\u89E3\u4E3A\u66F4\u5C0F\u7684\u6A21\u5757\uFF0C\u53EF\u4EE5\u8BA9 JS \u5E94\u7528\u903B\u8F91\u5728\u6A21\u5757\u95F4\u9699\u6267\u884C\u4E00\u4F1A\uFF0C\u4ECE\u800C\u4E0D\u81F3\u4E8E\u8BA9\u5E94\u7528\u51FA\u73B0\u505C\u987F\u60C5\u51B5\u3002\u4F46\u5728 2018 \u5E74\uFF0CGC \u6280\u672F\u53C8\u6709\u4E86\u4E00\u4E2A\u91CD\u5927\u7A81\u7834\uFF0C\u8FD9\u9879\u6280\u672F\u540D\u4E3A\u5E76\u53D1\u6807\u8BB0\u3002\u8BE5\u6280\u672F\u53EF\u4EE5\u8BA9 GC \u626B\u63CF\u548C\u6807\u8BB0\u5BF9\u8C61\u65F6\uFF0C\u540C\u65F6\u5141\u8BB8 JS \u8FD0\u884C\uFF0C\u4F60\u53EF\u4EE5\u70B9\u51FB <a href="https://link.juejin.cn?target=https%3A%2F%2Fv8project.blogspot.com%2F2018%2F06%2Fconcurrent-marking.html" target="_blank" rel="nofollow noopener noreferrer" title="https://v8project.blogspot.com/2018/06/concurrent-marking.html" ref="nofollow noopener noreferrer">\u8BE5\u535A\u5BA2</a> \u8BE6\u7EC6\u9605\u8BFB\u3002</p>
<p>\u6E05\u9664\u5BF9\u8C61\u540E\u4F1A\u9020\u6210\u5806\u5185\u5B58\u51FA\u73B0\u788E\u7247\u7684\u60C5\u51B5\uFF0C\u5F53\u788E\u7247\u8D85\u8FC7\u4E00\u5B9A\u9650\u5236\u540E\u4F1A\u542F\u52A8\u538B\u7F29\u7B97\u6CD5\u3002\u5728\u538B\u7F29\u8FC7\u7A0B\u4E2D\uFF0C\u5C06\u6D3B\u7684\u5BF9\u8C61\u50CF\u4E00\u7AEF\u79FB\u52A8\uFF0C\u76F4\u5230\u6240\u6709\u5BF9\u8C61\u90FD\u79FB\u52A8\u5B8C\u6210\u7136\u540E\u6E05\u7406\u6389\u4E0D\u9700\u8981\u7684\u5185\u5B58\u3002</p>
<h2 data-id="heading-8">\u5C0F\u7ED3</h2>
<p>\u4EE5\u4E0A\u5C31\u662F JS \u8FDB\u9636\u77E5\u8BC6\u70B9\u7684\u5185\u5BB9\u4E86\uFF0C\u8FD9\u90E8\u5206\u7684\u77E5\u8BC6\u76F8\u6BD4\u4E8E\u4E4B\u524D\u7684\u5185\u5BB9\u66F4\u52A0\u6DF1\u5165\u4E5F\u66F4\u52A0\u7684\u7406\u8BBA\uFF0C\u4E5F\u662F\u5728\u9762\u8BD5\u4E2D\u80FD\u591F\u4E8E\u522B\u7684\u5019\u9009\u8005\u62C9\u5F00\u5DEE\u8DDD\u7684\u4E00\u5757\u5185\u5BB9\u3002\u5982\u679C\u5927\u5BB6\u5BF9\u4E8E\u8FD9\u4E2A\u7AE0\u8282\u7684\u5185\u5BB9\u5B58\u5728\u7591\u95EE\uFF0C\u6B22\u8FCE\u5728\u8BC4\u8BBA\u533A\u4E0E\u6211\u4E92\u52A8\u3002</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
