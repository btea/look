var s={name:"\u624B\u5199 Promise",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h1 data-id="heading-0">\u624B\u5199 Promise</h1>
<p>\u5728\u4E0A\u4E00\u7AE0\u8282\u4E2D\u6211\u4EEC\u4E86\u89E3\u4E86 <code>Promise</code> \u7684\u4E00\u4E9B\u6613\u9519\u70B9\uFF0C\u5728\u8FD9\u4E00\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u901A\u8FC7\u624B\u5199\u4E00\u4E2A\u7B26\u5408 Promise/A+ \u89C4\u8303\u7684 <code>Promise</code> \u6765\u6DF1\u5165\u7406\u89E3\u5B83\uFF0C\u5E76\u4E14\u624B\u5199 <code>Promise</code> \u4E5F\u662F\u4E00\u9053\u5927\u5382\u5E38\u8003\u9898\uFF0C\u5728\u8FDB\u5165\u6B63\u9898\u4E4B\u524D\uFF0C\u63A8\u8350\u5404\u4F4D\u9605\u8BFB\u4E00\u4E0B <a href="https://link.juejin.cn?target=http%3A%2F%2Fwww.ituring.com.cn%2Farticle%2F66566" target="_blank" rel="nofollow noopener noreferrer" title="http://www.ituring.com.cn/article/66566" ref="nofollow noopener noreferrer">Promise/A+ \u89C4\u8303</a>\uFF0C\u8FD9\u6837\u624D\u80FD\u66F4\u597D\u5730\u7406\u89E3\u8FD9\u4E2A\u7AE0\u8282\u7684\u4EE3\u7801\u3002</p>
<h2 data-id="heading-1">\u5B9E\u73B0\u4E00\u4E2A\u7B80\u6613\u7248 Promise</h2>
<p>\u5728\u5B8C\u6210\u7B26\u5408 Promise/A+ \u89C4\u8303\u7684\u4EE3\u7801\u4E4B\u524D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5148\u6765\u5B9E\u73B0\u4E00\u4E2A\u7B80\u6613\u7248 <code>Promise</code>\uFF0C\u56E0\u4E3A\u5728\u9762\u8BD5\u4E2D\uFF0C\u5982\u679C\u4F60\u80FD\u5B9E\u73B0\u51FA\u4E00\u4E2A\u7B80\u6613\u7248\u7684 <code>Promise</code> \u57FA\u672C\u53EF\u4EE5\u8FC7\u5173\u4E86\u3002</p>
<p>\u90A3\u4E48\u6211\u4EEC\u5148\u6765\u642D\u5EFA\u6784\u5EFA\u51FD\u6570\u7684\u5927\u4F53\u6846\u67B6</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">const</span> PENDING = <span class="hljs-string">'pending'</span>
<span class="hljs-keyword">const</span> RESOLVED = <span class="hljs-string">'resolved'</span>
<span class="hljs-keyword">const</span> REJECTED = <span class="hljs-string">'rejected'</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">MyPromise</span>(<span class="hljs-params">fn</span>) </span>{
  <span class="hljs-keyword">const</span> that = <span class="hljs-built_in">this</span>
  that.state = PENDING
  that.value = <span class="hljs-literal">null</span>
  that.resolvedCallbacks = []
  that.rejectedCallbacks = []
  <span class="hljs-comment">// \u5F85\u5B8C\u5584 resolve \u548C reject \u51FD\u6570</span>
  <span class="hljs-comment">// \u5F85\u5B8C\u5584\u6267\u884C fn \u51FD\u6570</span>
}
</code></pre>
<ul>
<li>\u9996\u5148\u6211\u4EEC\u521B\u5EFA\u4E86\u4E09\u4E2A\u5E38\u91CF\u7528\u4E8E\u8868\u793A\u72B6\u6001\uFF0C\u5BF9\u4E8E\u7ECF\u5E38\u4F7F\u7528\u7684\u4E00\u4E9B\u503C\u90FD\u5E94\u8BE5\u901A\u8FC7\u5E38\u91CF\u6765\u7BA1\u7406\uFF0C\u4FBF\u4E8E\u5F00\u53D1\u53CA\u540E\u671F\u7EF4\u62A4</li>
<li>\u5728\u51FD\u6570\u4F53\u5185\u90E8\u9996\u5148\u521B\u5EFA\u4E86\u5E38\u91CF <code>that</code>\uFF0C\u56E0\u4E3A\u4EE3\u7801\u53EF\u80FD\u4F1A\u5F02\u6B65\u6267\u884C\uFF0C\u7528\u4E8E\u83B7\u53D6\u6B63\u786E\u7684 <code>this</code> \u5BF9\u8C61</li>
<li>\u4E00\u5F00\u59CB <code>Promise</code> \u7684\u72B6\u6001\u5E94\u8BE5\u662F <code>pending</code></li>
<li><code>value</code> \u53D8\u91CF\u7528\u4E8E\u4FDD\u5B58 <code>resolve</code> \u6216\u8005 <code>reject</code> \u4E2D\u4F20\u5165\u7684\u503C</li>
<li><code>resolvedCallbacks</code> \u548C <code>rejectedCallbacks</code> \u7528\u4E8E\u4FDD\u5B58 <code>then</code> \u4E2D\u7684\u56DE\u8C03\uFF0C\u56E0\u4E3A\u5F53\u6267\u884C\u5B8C <code>Promise</code> \u65F6\u72B6\u6001\u53EF\u80FD\u8FD8\u662F\u7B49\u5F85\u4E2D\uFF0C\u8FD9\u65F6\u5019\u5E94\u8BE5\u628A <code>then</code> \u4E2D\u7684\u56DE\u8C03\u4FDD\u5B58\u8D77\u6765\u7528\u4E8E\u72B6\u6001\u6539\u53D8\u65F6\u4F7F\u7528</li>
</ul>
<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u5B8C\u5584 <code>resolve</code> \u548C <code>reject</code> \u51FD\u6570\uFF0C\u6DFB\u52A0\u5728 <code>MyPromise</code> \u51FD\u6570\u4F53\u5185\u90E8</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">resolve</span>(<span class="hljs-params">value</span>) </span>{
  <span class="hljs-keyword">if</span> (that.state === PENDING) {
    that.state = RESOLVED
    that.value = value
    that.resolvedCallbacks.map(<span class="hljs-function"><span class="hljs-params">cb</span> =&gt;</span> cb(that.value))
  }
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">reject</span>(<span class="hljs-params">value</span>) </span>{
  <span class="hljs-keyword">if</span> (that.state === PENDING) {
    that.state = REJECTED
    that.value = value
    that.rejectedCallbacks.map(<span class="hljs-function"><span class="hljs-params">cb</span> =&gt;</span> cb(that.value))
  }
}
</code></pre>
<p>\u8FD9\u4E24\u4E2A\u51FD\u6570\u4EE3\u7801\u7C7B\u4F3C\uFF0C\u5C31\u4E00\u8D77\u89E3\u6790\u4E86</p>
<ul>
<li>\u9996\u5148\u4E24\u4E2A\u51FD\u6570\u90FD\u5F97\u5224\u65AD\u5F53\u524D\u72B6\u6001\u662F\u5426\u4E3A\u7B49\u5F85\u4E2D\uFF0C\u56E0\u4E3A\u89C4\u8303\u89C4\u5B9A\u53EA\u6709\u7B49\u5F85\u6001\u624D\u53EF\u4EE5\u6539\u53D8\u72B6\u6001</li>
<li>\u5C06\u5F53\u524D\u72B6\u6001\u66F4\u6539\u4E3A\u5BF9\u5E94\u72B6\u6001\uFF0C\u5E76\u4E14\u5C06\u4F20\u5165\u7684\u503C\u8D4B\u503C\u7ED9 <code>value</code></li>
<li>\u904D\u5386\u56DE\u8C03\u6570\u7EC4\u5E76\u6267\u884C</li>
</ul>
<p>\u5B8C\u6210\u4EE5\u4E0A\u4E24\u4E2A\u51FD\u6570\u4EE5\u540E\uFF0C\u6211\u4EEC\u5C31\u8BE5\u5B9E\u73B0\u5982\u4F55\u6267\u884C <code>Promise</code> \u4E2D\u4F20\u5165\u7684\u51FD\u6570\u4E86</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">try</span> {
  fn(resolve, reject)
} <span class="hljs-keyword">catch</span> (e) {
  reject(e)
}
</code></pre>
<ul>
<li>\u5B9E\u73B0\u5F88\u7B80\u5355\uFF0C\u6267\u884C\u4F20\u5165\u7684\u53C2\u6570\u5E76\u4E14\u5C06\u4E4B\u524D\u4E24\u4E2A\u51FD\u6570\u5F53\u505A\u53C2\u6570\u4F20\u8FDB\u53BB</li>
<li>\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u53EF\u80FD\u6267\u884C\u51FD\u6570\u8FC7\u7A0B\u4E2D\u4F1A\u9047\u5230\u9519\u8BEF\uFF0C\u9700\u8981\u6355\u83B7\u9519\u8BEF\u5E76\u4E14\u6267\u884C <code>reject</code> \u51FD\u6570</li>
</ul>
<p>\u6700\u540E\u6211\u4EEC\u6765\u5B9E\u73B0\u8F83\u4E3A\u590D\u6742\u7684 <code>then</code> \u51FD\u6570</p>
<pre><code class="hljs language-js" lang="js">MyPromise.prototype.then = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">onFulfilled, onRejected</span>) </span>{
  <span class="hljs-keyword">const</span> that = <span class="hljs-built_in">this</span>
  onFulfilled = <span class="hljs-keyword">typeof</span> onFulfilled === <span class="hljs-string">'function'</span> ? onFulfilled : <span class="hljs-function"><span class="hljs-params">v</span> =&gt;</span> v
  onRejected =
    <span class="hljs-keyword">typeof</span> onRejected === <span class="hljs-string">'function'</span>
      ? onRejected
      : <span class="hljs-function"><span class="hljs-params">r</span> =&gt;</span> {
          <span class="hljs-keyword">throw</span> r
        }
  <span class="hljs-keyword">if</span> (that.state === PENDING) {
    that.resolvedCallbacks.push(onFulfilled)
    that.rejectedCallbacks.push(onRejected)
  }
  <span class="hljs-keyword">if</span> (that.state === RESOLVED) {
    onFulfilled(that.value)
  }
  <span class="hljs-keyword">if</span> (that.state === REJECTED) {
    onRejected(that.value)
  }
}
</code></pre>
<ul>
<li>
<p>\u9996\u5148\u5224\u65AD\u4E24\u4E2A\u53C2\u6570\u662F\u5426\u4E3A\u51FD\u6570\u7C7B\u578B\uFF0C\u56E0\u4E3A\u8FD9\u4E24\u4E2A\u53C2\u6570\u662F\u53EF\u9009\u53C2\u6570</p>
</li>
<li>
<p>\u5F53\u53C2\u6570\u4E0D\u662F\u51FD\u6570\u7C7B\u578B\u65F6\uFF0C\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\u8D4B\u503C\u7ED9\u5BF9\u5E94\u7684\u53C2\u6570\uFF0C\u540C\u65F6\u4E5F\u5B9E\u73B0\u4E86\u900F\u4F20\uFF0C\u6BD4\u5982\u5982\u4E0B\u4EE3\u7801</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-comment">// \u8BE5\u4EE3\u7801\u76EE\u524D\u5728\u7B80\u5355\u7248\u4E2D\u4F1A\u62A5\u9519</span>
<span class="hljs-comment">// \u53EA\u662F\u4F5C\u4E3A\u4E00\u4E2A\u900F\u4F20\u7684\u4F8B\u5B50</span>
<span class="hljs-built_in">Promise</span>.resolve(<span class="hljs-number">4</span>).then().then(<span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(value))
</code></pre>
</li>
<li>
<p>\u63A5\u4E0B\u6765\u5C31\u662F\u4E00\u7CFB\u5217\u5224\u65AD\u72B6\u6001\u7684\u903B\u8F91\uFF0C\u5F53\u72B6\u6001\u4E0D\u662F\u7B49\u5F85\u6001\u65F6\uFF0C\u5C31\u53BB\u6267\u884C\u76F8\u5BF9\u5E94\u7684\u51FD\u6570\u3002\u5982\u679C\u72B6\u6001\u662F\u7B49\u5F85\u6001\u7684\u8BDD\uFF0C\u5C31\u5F80\u56DE\u8C03\u51FD\u6570\u4E2D <code>push</code> \u51FD\u6570\uFF0C\u6BD4\u5982\u5982\u4E0B\u4EE3\u7801\u5C31\u4F1A\u8FDB\u5165\u7B49\u5F85\u6001\u7684\u903B\u8F91</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">new</span> MyPromise(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
  <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
    resolve(<span class="hljs-number">1</span>)
  }, <span class="hljs-number">0</span>)
}).then(<span class="hljs-function"><span class="hljs-params">value</span> =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(value)
})
</code></pre>
</li>
</ul>
<p>\u4EE5\u4E0A\u5C31\u662F\u7B80\u5355\u7248 <code>Promise</code> \u5B9E\u73B0\uFF0C\u63A5\u4E0B\u6765\u4E00\u5C0F\u8282\u662F\u5B9E\u73B0\u5B8C\u6574\u7248 <code>Promise</code> \u7684\u89E3\u6790\uFF0C\u76F8\u4FE1\u770B\u5B8C\u5B8C\u6574\u7248\u7684\u4F60\uFF0C\u4E00\u5B9A\u4F1A\u5BF9\u4E8E <code>Promise</code> \u7684\u7406\u89E3\u66F4\u4E0A\u4E00\u5C42\u697C\u3002</p>
<h2 data-id="heading-2">\u5B9E\u73B0\u4E00\u4E2A\u7B26\u5408 Promise/A+ \u89C4\u8303\u7684 Promise</h2>
<p>\u8FD9\u5C0F\u8282\u4EE3\u7801\u9700\u8981\u5927\u5BB6\u914D\u5408\u89C4\u8303\u9605\u8BFB\uFF0C\u56E0\u4E3A\u5927\u90E8\u5206\u4EE3\u7801\u90FD\u662F\u6839\u636E\u89C4\u8303\u53BB\u5B9E\u73B0\u7684\u3002</p>
<p>\u6211\u4EEC\u5148\u6765\u6539\u9020\u4E00\u4E0B <code>resolve</code> \u548C <code>reject</code> \u51FD\u6570</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">resolve</span>(<span class="hljs-params">value</span>) </span>{
  <span class="hljs-keyword">if</span> (value <span class="hljs-keyword">instanceof</span> MyPromise) {
    <span class="hljs-keyword">return</span> value.then(resolve, reject)
  }
  <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">if</span> (that.state === PENDING) {
      that.state = RESOLVED
      that.value = value
      that.resolvedCallbacks.map(<span class="hljs-function"><span class="hljs-params">cb</span> =&gt;</span> cb(that.value))
    }
  }, <span class="hljs-number">0</span>)
}
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">reject</span>(<span class="hljs-params">value</span>) </span>{
  <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">if</span> (that.state === PENDING) {
      that.state = REJECTED
      that.value = value
      that.rejectedCallbacks.map(<span class="hljs-function"><span class="hljs-params">cb</span> =&gt;</span> cb(that.value))
    }
  }, <span class="hljs-number">0</span>)
}
</code></pre>
<ul>
<li>\u5BF9\u4E8E <code>resolve</code> \u51FD\u6570\u6765\u8BF4\uFF0C\u9996\u5148\u9700\u8981\u5224\u65AD\u4F20\u5165\u7684\u503C\u662F\u5426\u4E3A <code>Promise</code> \u7C7B\u578B</li>
<li>\u4E3A\u4E86\u4FDD\u8BC1\u51FD\u6570\u6267\u884C\u987A\u5E8F\uFF0C\u9700\u8981\u5C06\u4E24\u4E2A\u51FD\u6570\u4F53\u4EE3\u7801\u4F7F\u7528 <code>setTimeout</code> \u5305\u88F9\u8D77\u6765</li>
</ul>
<p>\u63A5\u4E0B\u6765\u7EE7\u7EED\u6539\u9020 <code>then</code> \u51FD\u6570\u4E2D\u7684\u4EE3\u7801\uFF0C\u9996\u5148\u6211\u4EEC\u9700\u8981\u65B0\u589E\u4E00\u4E2A\u53D8\u91CF <code>promise2</code>\uFF0C\u56E0\u4E3A\u6BCF\u4E2A <code>then</code> \u51FD\u6570\u90FD\u9700\u8981\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 <code>Promise</code> \u5BF9\u8C61\uFF0C\u8BE5\u53D8\u91CF\u7528\u4E8E\u4FDD\u5B58\u65B0\u7684\u8FD4\u56DE\u5BF9\u8C61\uFF0C\u7136\u540E\u6211\u4EEC\u5148\u6765\u6539\u9020\u5224\u65AD\u7B49\u5F85\u6001\u7684\u903B\u8F91</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">if</span> (that.state === PENDING) {
  <span class="hljs-keyword">return</span> (promise2 = <span class="hljs-keyword">new</span> MyPromise(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
    that.resolvedCallbacks.push(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">try</span> {
        <span class="hljs-keyword">const</span> x = onFulfilled(that.value)
        resolutionProcedure(promise2, x, resolve, reject)
      } <span class="hljs-keyword">catch</span> (r) {
        reject(r)
      }
    })

    that.rejectedCallbacks.push(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">try</span> {
        <span class="hljs-keyword">const</span> x = onRejected(that.value)
        resolutionProcedure(promise2, x, resolve, reject)
      } <span class="hljs-keyword">catch</span> (r) {
        reject(r)
      }
    })
  }))
}
</code></pre>
<ul>
<li>\u9996\u5148\u6211\u4EEC\u8FD4\u56DE\u4E86\u4E00\u4E2A\u65B0\u7684 <code>Promise</code> \u5BF9\u8C61\uFF0C\u5E76\u5728 <code>Promise</code> \u4E2D\u4F20\u5165\u4E86\u4E00\u4E2A\u51FD\u6570</li>
<li>\u51FD\u6570\u7684\u57FA\u672C\u903B\u8F91\u8FD8\u662F\u548C\u4E4B\u524D\u4E00\u6837\uFF0C\u5F80\u56DE\u8C03\u6570\u7EC4\u4E2D <code>push</code> \u51FD\u6570</li>
<li>\u540C\u6837\uFF0C\u5728\u6267\u884C\u51FD\u6570\u7684\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u9047\u5230\u9519\u8BEF\uFF0C\u6240\u4EE5\u4F7F\u7528\u4E86 <code>try...catch</code> \u5305\u88F9</li>
<li>\u89C4\u8303\u89C4\u5B9A\uFF0C\u6267\u884C <code>onFulfilled</code> \u6216\u8005 <code>onRejected</code> \u51FD\u6570\u65F6\u4F1A\u8FD4\u56DE\u4E00\u4E2A <code>x</code>\uFF0C\u5E76\u4E14\u6267\u884C <code>Promise</code> \u89E3\u51B3\u8FC7\u7A0B\uFF0C\u8FD9\u662F\u4E3A\u4E86\u4E0D\u540C\u7684 <code>Promise</code> \u90FD\u53EF\u4EE5\u517C\u5BB9\u4F7F\u7528\uFF0C\u6BD4\u5982 JQuery \u7684 <code>Promise</code> \u80FD\u517C\u5BB9 ES6 \u7684 <code>Promise</code></li>
</ul>
<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u6539\u9020\u5224\u65AD\u6267\u884C\u6001\u7684\u903B\u8F91</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">if</span> (that.state === RESOLVED) {
  <span class="hljs-keyword">return</span> (promise2 = <span class="hljs-keyword">new</span> MyPromise(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">try</span> {
        <span class="hljs-keyword">const</span> x = onFulfilled(that.value)
        resolutionProcedure(promise2, x, resolve, reject)
      } <span class="hljs-keyword">catch</span> (reason) {
        reject(reason)
      }
    })
  }))
}
</code></pre>
<ul>
<li>\u5176\u5B9E\u5927\u5BB6\u53EF\u4EE5\u53D1\u73B0\u8FD9\u6BB5\u4EE3\u7801\u548C\u5224\u65AD\u7B49\u5F85\u6001\u7684\u903B\u8F91\u57FA\u672C\u4E00\u81F4\uFF0C\u65E0\u975E\u662F\u4F20\u5165\u7684\u51FD\u6570\u7684\u51FD\u6570\u4F53\u9700\u8981\u5F02\u6B65\u6267\u884C\uFF0C\u8FD9\u4E5F\u662F\u89C4\u8303\u89C4\u5B9A\u7684</li>
<li>\u5BF9\u4E8E\u5224\u65AD\u62D2\u7EDD\u6001\u7684\u903B\u8F91\u8FD9\u91CC\u5C31\u4E0D\u4E00\u4E00\u8D58\u8FF0\u4E86\uFF0C\u7559\u7ED9\u5927\u5BB6\u81EA\u5DF1\u5B8C\u6210\u8FD9\u4E2A\u4F5C\u4E1A</li>
</ul>
<p>\u6700\u540E\uFF0C\u5F53\u7136\u4E5F\u662F\u6700\u96BE\u7684\u4E00\u90E8\u5206\uFF0C\u4E5F\u5C31\u662F\u5B9E\u73B0\u517C\u5BB9\u591A\u79CD <code>Promise</code> \u7684 <code>resolutionProcedure</code> \u51FD\u6570</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">resolutionProcedure</span>(<span class="hljs-params">promise2, x, resolve, reject</span>) </span>{
  <span class="hljs-keyword">if</span> (promise2 === x) {
    <span class="hljs-keyword">return</span> reject(<span class="hljs-keyword">new</span> <span class="hljs-built_in">TypeError</span>(<span class="hljs-string">'Error'</span>))
  }
}
</code></pre>
<p>\u9996\u5148\u89C4\u8303\u89C4\u5B9A\u4E86 <code>x</code> \u4E0D\u80FD\u4E0E <code>promise2</code> \u76F8\u7B49\uFF0C\u8FD9\u6837\u4F1A\u53D1\u751F\u5FAA\u73AF\u5F15\u7528\u7684\u95EE\u9898\uFF0C\u6BD4\u5982\u5982\u4E0B\u4EE3\u7801</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">let</span> p = <span class="hljs-keyword">new</span> MyPromise(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
  resolve(<span class="hljs-number">1</span>)
})
<span class="hljs-keyword">let</span> p1 = p.then(<span class="hljs-function"><span class="hljs-params">value</span> =&gt;</span> {
  <span class="hljs-keyword">return</span> p1
})
</code></pre>
<p>\u7136\u540E\u9700\u8981\u5224\u65AD <code>x</code> \u7684\u7C7B\u578B</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">if</span> (x <span class="hljs-keyword">instanceof</span> MyPromise) {
    x.then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">value</span>) </span>{
        resolutionProcedure(promise2, value, resolve, reject)
    }, reject)
}
</code></pre>
<p>\u8FD9\u91CC\u7684\u4EE3\u7801\u662F\u5B8C\u5168\u6309\u7167\u89C4\u8303\u5B9E\u73B0\u7684\u3002\u5982\u679C <code>x</code> \u4E3A <code>Promise</code> \u7684\u8BDD\uFF0C\u9700\u8981\u5224\u65AD\u4EE5\u4E0B\u51E0\u4E2A\u60C5\u51B5\uFF1A</p>
<ol>
<li>\u5982\u679C <code>x</code> \u5904\u4E8E\u7B49\u5F85\u6001\uFF0C<code>Promise</code> \u9700\u4FDD\u6301\u4E3A\u7B49\u5F85\u6001\u76F4\u81F3 <code>x</code> \u88AB\u6267\u884C\u6216\u62D2\u7EDD</li>
<li>\u5982\u679C <code>x</code> \u5904\u4E8E\u5176\u4ED6\u72B6\u6001\uFF0C\u5219\u7528\u76F8\u540C\u7684\u503C\u5904\u7406 <code>Promise</code></li>
</ol>
<p>\u5F53\u7136\u4EE5\u4E0A\u8FD9\u4E9B\u662F\u89C4\u8303\u9700\u8981\u6211\u4EEC\u5224\u65AD\u7684\u60C5\u51B5\uFF0C\u5B9E\u9645\u4E0A\u6211\u4EEC\u4E0D\u5224\u65AD\u72B6\u6001\u4E5F\u662F\u53EF\u884C\u7684\u3002</p>
<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u7EE7\u7EED\u6309\u7167\u89C4\u8303\u6765\u5B9E\u73B0\u5269\u4F59\u7684\u4EE3\u7801</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">let</span> called = <span class="hljs-literal">false</span>
<span class="hljs-keyword">if</span> (x !== <span class="hljs-literal">null</span> &amp;&amp; (<span class="hljs-keyword">typeof</span> x === <span class="hljs-string">'object'</span> || <span class="hljs-keyword">typeof</span> x === <span class="hljs-string">'function'</span>)) {
  <span class="hljs-keyword">try</span> {
    <span class="hljs-keyword">let</span> then = x.then
    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> then === <span class="hljs-string">'function'</span>) {
      then.call(
        x,
        <span class="hljs-function"><span class="hljs-params">y</span> =&gt;</span> {
          <span class="hljs-keyword">if</span> (called) <span class="hljs-keyword">return</span>
          called = <span class="hljs-literal">true</span>
          resolutionProcedure(promise2, y, resolve, reject)
        },
        <span class="hljs-function"><span class="hljs-params">e</span> =&gt;</span> {
          <span class="hljs-keyword">if</span> (called) <span class="hljs-keyword">return</span>
          called = <span class="hljs-literal">true</span>
          reject(e)
        }
      )
    } <span class="hljs-keyword">else</span> {
      resolve(x)
    }
  } <span class="hljs-keyword">catch</span> (e) {
    <span class="hljs-keyword">if</span> (called) <span class="hljs-keyword">return</span>
    called = <span class="hljs-literal">true</span>
    reject(e)
  }
} <span class="hljs-keyword">else</span> {
  resolve(x)
}
</code></pre>
<ul>
<li>\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u53D8\u91CF <code>called</code> \u7528\u4E8E\u5224\u65AD\u662F\u5426\u5DF2\u7ECF\u8C03\u7528\u8FC7\u51FD\u6570</li>
<li>\u7136\u540E\u5224\u65AD <code>x</code> \u662F\u5426\u4E3A\u5BF9\u8C61\u6216\u8005\u51FD\u6570\uFF0C\u5982\u679C\u90FD\u4E0D\u662F\u7684\u8BDD\uFF0C\u5C06 <code>x</code> \u4F20\u5165 <code>resolve</code> \u4E2D</li>
<li>\u5982\u679C <code>x</code> \u662F\u5BF9\u8C61\u6216\u8005\u51FD\u6570\u7684\u8BDD\uFF0C\u5148\u628A <code>x.then</code> \u8D4B\u503C\u7ED9 <code>then</code>\uFF0C\u7136\u540E\u5224\u65AD <code>then</code> \u7684\u7C7B\u578B\uFF0C\u5982\u679C\u4E0D\u662F\u51FD\u6570\u7C7B\u578B\u7684\u8BDD\uFF0C\u5C31\u5C06 <code>x</code> \u4F20\u5165 <code>resolve</code> \u4E2D</li>
<li>\u5982\u679C <code>then</code> \u662F\u51FD\u6570\u7C7B\u578B\u7684\u8BDD\uFF0C\u5C31\u5C06 <code>x</code> \u4F5C\u4E3A\u51FD\u6570\u7684\u4F5C\u7528\u57DF <code>this</code> \u8C03\u7528\u4E4B\uFF0C\u5E76\u4E14\u4F20\u9012\u4E24\u4E2A\u56DE\u8C03\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u53EB\u505A <code>resolvePromise</code> \uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u53EB\u505A <code>rejectPromise</code>\uFF0C\u4E24\u4E2A\u56DE\u8C03\u51FD\u6570\u90FD\u9700\u8981\u5224\u65AD\u662F\u5426\u5DF2\u7ECF\u6267\u884C\u8FC7\u51FD\u6570\uFF0C\u7136\u540E\u8FDB\u884C\u76F8\u5E94\u7684\u903B\u8F91</li>
<li>\u4EE5\u4E0A\u4EE3\u7801\u5728\u6267\u884C\u7684\u8FC7\u7A0B\u4E2D\u5982\u679C\u629B\u9519\u4E86\uFF0C\u5C06\u9519\u8BEF\u4F20\u5165 <code>reject</code> \u51FD\u6570\u4E2D</li>
</ul>
<p>\u4EE5\u4E0A\u5C31\u662F\u7B26\u5408 Promise/A+ \u89C4\u8303\u7684\u5B9E\u73B0\u4E86\uFF0C\u5982\u679C\u4F60\u5BF9\u4E8E\u8FD9\u90E8\u5206\u4EE3\u7801\u5C1A\u6709\u7591\u95EE\uFF0C\u6B22\u8FCE\u5728\u8BC4\u8BBA\u4E2D\u4E0E\u6211\u4E92\u52A8\u3002</p>
<h2 data-id="heading-3">\u5C0F\u7ED3</h2>
<p>\u8FD9\u4E00\u7AE0\u8282\u6211\u4EEC\u5206\u522B\u5B9E\u73B0\u4E86\u7B80\u5355\u7248\u548C\u7B26\u5408 Promise/A+ \u89C4\u8303\u7684 <code>Promise</code>\uFF0C\u524D\u8005\u5DF2\u7ECF\u8DB3\u591F\u5E94\u4ED8\u5927\u90E8\u5206\u9762\u8BD5\u7684\u624B\u5199\u9898\u76EE\uFF0C\u6BD5\u7ADF\u5199\u51FA\u4E00\u4E2A\u7B26\u5408\u89C4\u8303\u7684 <code>Promise</code> \u5728\u9762\u8BD5\u4E2D\u4E0D\u5927\u73B0\u5B9E\u3002\u540E\u8005\u80FD\u8BA9\u4F60\u66F4\u52A0\u6DF1\u5165\u5730\u7406\u89E3 <code>Promise</code> \u7684\u8FD0\u884C\u539F\u7406\uFF0C\u505A\u6280\u672F\u7684\u6DF1\u6316\u8005\u3002</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
