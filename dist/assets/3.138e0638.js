var s={name:"JS \u57FA\u7840\u77E5\u8BC6\u70B9\u53CA\u5E38\u8003\u9762\u8BD5\u9898\uFF08\u4E8C\uFF09",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h1 data-id="heading-0">JS \u57FA\u7840\u77E5\u8BC6\u70B9\u53CA\u5E38\u8003\u9762\u8BD5\u9898\uFF08\u4E8C\uFF09</h1>
<p>\u5728\u8FD9\u4E00\u7AE0\u8282\u4E2D\u6211\u4EEC\u7EE7\u7EED\u6765\u4E86\u89E3 JS \u7684\u4E00\u4E9B\u5E38\u8003\u548C\u5BB9\u6613\u6DF7\u4E71\u7684\u57FA\u7840\u77E5\u8BC6\u70B9\u3002</p>
<h2 data-id="heading-1">== vs ===</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A== \u548C === \u6709\u4EC0\u4E48\u533A\u522B\uFF1F
</code></pre>
<p>\u5BF9\u4E8E <code>==</code> \u6765\u8BF4\uFF0C\u5982\u679C\u5BF9\u6BD4\u53CC\u65B9\u7684\u7C7B\u578B<strong>\u4E0D\u4E00\u6837</strong>\u7684\u8BDD\uFF0C\u5C31\u4F1A\u8FDB\u884C<strong>\u7C7B\u578B\u8F6C\u6362</strong>\uFF0C\u8FD9\u4E5F\u5C31\u7528\u5230\u4E86\u6211\u4EEC\u4E0A\u4E00\u7AE0\u8282\u8BB2\u7684\u5185\u5BB9\u3002</p>
<p>\u5047\u5982\u6211\u4EEC\u9700\u8981\u5BF9\u6BD4 <code>x</code> \u548C <code>y</code> \u662F\u5426\u76F8\u540C\uFF0C\u5C31\u4F1A\u8FDB\u884C\u5982\u4E0B\u5224\u65AD\u6D41\u7A0B\uFF1A</p>
<ol>
<li>\u9996\u5148\u4F1A\u5224\u65AD\u4E24\u8005\u7C7B\u578B\u662F\u5426<strong>\u76F8\u540C</strong>\u3002\u76F8\u540C\u7684\u8BDD\u5C31\u662F\u6BD4\u5927\u5C0F\u4E86</li>
<li>\u7C7B\u578B\u4E0D\u76F8\u540C\u7684\u8BDD\uFF0C\u90A3\u4E48\u5C31\u4F1A\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362</li>
<li>\u4F1A\u5148\u5224\u65AD\u662F\u5426\u5728\u5BF9\u6BD4 <code>null</code> \u548C <code>undefined</code>\uFF0C\u662F\u7684\u8BDD\u5C31\u4F1A\u8FD4\u56DE <code>true</code></li>
<li>\u5224\u65AD\u4E24\u8005\u7C7B\u578B\u662F\u5426\u4E3A <code>string</code> \u548C <code>number</code>\uFF0C\u662F\u7684\u8BDD\u5C31\u4F1A\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A <code>number</code>
<pre><code class="hljs language-js" lang="js"><span class="hljs-number">1</span> == <span class="hljs-string">'1'</span>
      \u2193
<span class="hljs-number">1</span> ==  <span class="hljs-number">1</span>
</code></pre>
</li>
<li>\u5224\u65AD\u5176\u4E2D\u4E00\u65B9\u662F\u5426\u4E3A <code>boolean</code>\uFF0C\u662F\u7684\u8BDD\u5C31\u4F1A\u628A <code>boolean</code> \u8F6C\u4E3A <code>number</code> \u518D\u8FDB\u884C\u5224\u65AD
<pre><code class="hljs language-js" lang="js"><span class="hljs-string">'1'</span> == <span class="hljs-literal">true</span>
        \u2193
<span class="hljs-string">'1'</span> ==  <span class="hljs-number">1</span>
        \u2193
 <span class="hljs-number">1</span>  ==  <span class="hljs-number">1</span>
</code></pre>
</li>
<li>\u5224\u65AD\u5176\u4E2D\u4E00\u65B9\u662F\u5426\u4E3A <code>object</code> \u4E14\u53E6\u4E00\u65B9\u4E3A <code>string</code>\u3001<code>number</code> \u6216\u8005 <code>symbol</code>\uFF0C\u662F\u7684\u8BDD\u5C31\u4F1A\u628A <code>object</code> \u8F6C\u4E3A\u539F\u59CB\u7C7B\u578B\u518D\u8FDB\u884C\u5224\u65AD
<pre><code class="hljs language-js" lang="js"><span class="hljs-string">'1'</span> == { <span class="hljs-attr">name</span>: <span class="hljs-string">'yck'</span> }
        \u2193
<span class="hljs-string">'1'</span> == <span class="hljs-string">'[object Object]'</span>
</code></pre>
</li>
</ol>
<pre><code class="hljs language-!" lang="!">\u601D\u8003\u9898\uFF1A\u770B\u5B8C\u4E86\u4E0A\u9762\u7684\u6B65\u9AA4\uFF0C\u5BF9\u4E8E [] == ![] \u4F60\u662F\u5426\u80FD\u6B63\u786E\u5199\u51FA\u7B54\u6848\u5462\uFF1F
</code></pre>
<p>\u5982\u679C\u4F60\u89C9\u5F97\u8BB0\u5FC6\u6B65\u9AA4\u592A\u9EBB\u70E6\u7684\u8BDD\uFF0C\u6211\u8FD8\u63D0\u4F9B\u4E86\u6D41\u7A0B\u56FE\u4F9B\u5927\u5BB6\u4F7F\u7528\uFF1A</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/19/167c4a2627fe55f1~tplv-t2oaga2asx-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u5F53\u7136\u4E86\uFF0C\u8FD9\u4E2A\u6D41\u7A0B\u56FE\u5E76\u6CA1\u6709\u5C06\u6240\u6709\u7684\u60C5\u51B5\u90FD\u5217\u4E3E\u51FA\u6765\uFF0C\u6211\u8FD9\u91CC\u53EA\u5C06\u5E38\u7528\u5230\u7684\u60C5\u51B5\u5217\u4E3E\u4E86\uFF0C\u5982\u679C\u4F60\u60F3\u4E86\u89E3\u66F4\u591A\u7684\u5185\u5BB9\u53EF\u4EE5\u53C2\u8003 <a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.ecma-international.org%2Fecma-262%2F5.1%2F%23sec-11.9.1" target="_blank" rel="nofollow noopener noreferrer" title="https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.1" ref="nofollow noopener noreferrer">\u6807\u51C6\u6587\u6863</a>\u3002</p>
<p>\u5BF9\u4E8E <code>===</code> \u6765\u8BF4\u5C31\u7B80\u5355\u591A\u4E86\uFF0C\u5C31\u662F\u5224\u65AD\u4E24\u8005\u7C7B\u578B\u548C\u503C\u662F\u5426\u76F8\u540C\u3002</p>
<p>\u66F4\u591A\u7684\u5BF9\u6BD4\u53EF\u4EE5\u9605\u8BFB\u8FD9\u7BC7 <a href="https://link.juejin.cn?target=https%3A%2F%2Ffelix-kling.de%2Fjs-loose-comparison%2F" target="_blank" rel="nofollow noopener noreferrer" title="https://felix-kling.de/js-loose-comparison/" ref="nofollow noopener noreferrer">\u6587\u7AE0</a></p>
<h2 data-id="heading-2">\u95ED\u5305</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u4EC0\u4E48\u662F\u95ED\u5305\uFF1F
</code></pre>
<p>\u95ED\u5305\u7684\u5B9A\u4E49\u5176\u5B9E\u5F88\u7B80\u5355\uFF1A\u51FD\u6570 A \u5185\u90E8\u6709\u4E00\u4E2A\u51FD\u6570 B\uFF0C\u51FD\u6570 B \u53EF\u4EE5\u8BBF\u95EE\u5230\u51FD\u6570 A \u4E2D\u7684\u53D8\u91CF\uFF0C\u90A3\u4E48\u51FD\u6570 B \u5C31\u662F\u95ED\u5305\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">A</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">let</span> a = <span class="hljs-number">1</span>
  <span class="hljs-built_in">window</span>.B = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
      <span class="hljs-built_in">console</span>.log(a)
  }
}
A()
B() <span class="hljs-comment">// 1</span>
</code></pre>
<p>\u5F88\u591A\u4EBA\u5BF9\u4E8E\u95ED\u5305\u7684\u89E3\u91CA\u53EF\u80FD\u662F\u51FD\u6570\u5D4C\u5957\u4E86\u51FD\u6570\uFF0C\u7136\u540E\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\u3002\u5176\u5B9E\u8FD9\u4E2A\u89E3\u91CA\u662F\u4E0D\u5B8C\u6574\u7684\uFF0C\u5C31\u6BD4\u5982\u6211\u4E0A\u9762\u8FD9\u4E2A\u4F8B\u5B50\u5C31\u53EF\u4EE5\u53CD\u9A73\u8FD9\u4E2A\u89C2\u70B9\u3002</p>
<p>\u5728 JS \u4E2D\uFF0C\u95ED\u5305\u5B58\u5728\u7684\u610F\u4E49\u5C31\u662F\u8BA9\u6211\u4EEC\u53EF\u4EE5\u95F4\u63A5\u8BBF\u95EE\u51FD\u6570\u5185\u90E8\u7684\u53D8\u91CF\u3002</p>
<pre><code class="hljs language-!" lang="!">\u7ECF\u5178\u9762\u8BD5\u9898\uFF0C\u5FAA\u73AF\u4E2D\u4F7F\u7528\u95ED\u5305\u89E3\u51B3 \`var\` \u5B9A\u4E49\u51FD\u6570\u7684\u95EE\u9898
</code></pre>
<pre><code class="hljs language-Js" lang="Js"><span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">1</span>; i &lt;= <span class="hljs-number">5</span>; i++) {
  <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">timer</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(i)
  }, i * <span class="hljs-number">1000</span>)
}
</code></pre>
<p>\u9996\u5148\u56E0\u4E3A <code>setTimeout</code> \u662F\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u6240\u4EE5\u4F1A\u5148\u628A\u5FAA\u73AF\u5168\u90E8\u6267\u884C\u5B8C\u6BD5\uFF0C\u8FD9\u65F6\u5019 <code>i</code> \u5C31\u662F 6 \u4E86\uFF0C\u6240\u4EE5\u4F1A\u8F93\u51FA\u4E00\u5806 6\u3002</p>
<p>\u89E3\u51B3\u529E\u6CD5\u6709\u4E09\u79CD\uFF0C\u7B2C\u4E00\u79CD\u662F\u4F7F\u7528\u95ED\u5305\u7684\u65B9\u5F0F</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">1</span>; i &lt;= <span class="hljs-number">5</span>; i++) {
  ;(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">j</span>) </span>{
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">timer</span>(<span class="hljs-params"></span>) </span>{
      <span class="hljs-built_in">console</span>.log(j)
    }, j * <span class="hljs-number">1000</span>)
  })(i)
}
</code></pre>
<p>\u5728\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u9996\u5148\u4F7F\u7528\u4E86\u7ACB\u5373\u6267\u884C\u51FD\u6570\u5C06 <code>i</code> \u4F20\u5165\u51FD\u6570\u5185\u90E8\uFF0C\u8FD9\u4E2A\u65F6\u5019\u503C\u5C31\u88AB\u56FA\u5B9A\u5728\u4E86\u53C2\u6570 <code>j</code> \u4E0A\u9762\u4E0D\u4F1A\u6539\u53D8\uFF0C\u5F53\u4E0B\u6B21\u6267\u884C <code>timer</code> \u8FD9\u4E2A\u95ED\u5305\u7684\u65F6\u5019\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u5916\u90E8\u51FD\u6570\u7684\u53D8\u91CF <code>j</code>\uFF0C\u4ECE\u800C\u8FBE\u5230\u76EE\u7684\u3002</p>
<p>\u7B2C\u4E8C\u79CD\u5C31\u662F\u4F7F\u7528 <code>setTimeout </code> \u7684\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u8FD9\u4E2A\u53C2\u6570\u4F1A\u88AB\u5F53\u6210 <code>timer</code> \u51FD\u6570\u7684\u53C2\u6570\u4F20\u5165\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">1</span>; i &lt;= <span class="hljs-number">5</span>; i++) {
  <span class="hljs-built_in">setTimeout</span>(
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">timer</span>(<span class="hljs-params">j</span>) </span>{
      <span class="hljs-built_in">console</span>.log(j)
    },
    i * <span class="hljs-number">1000</span>,
    i
  )
}
</code></pre>
<p>\u7B2C\u4E09\u79CD\u5C31\u662F\u4F7F\u7528 <code>let</code> \u5B9A\u4E49 <code>i</code> \u4E86\u6765\u89E3\u51B3\u95EE\u9898\u4E86\uFF0C\u8FD9\u4E2A\u4E5F\u662F\u6700\u4E3A\u63A8\u8350\u7684\u65B9\u5F0F</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">1</span>; i &lt;= <span class="hljs-number">5</span>; i++) {
  <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">timer</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(i)
  }, i * <span class="hljs-number">1000</span>)
}
</code></pre>
<h2 data-id="heading-3">\u6DF1\u6D45\u62F7\u8D1D</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u4EC0\u4E48\u662F\u6D45\u62F7\u8D1D\uFF1F\u5982\u4F55\u5B9E\u73B0\u6D45\u62F7\u8D1D\uFF1F\u4EC0\u4E48\u662F\u6DF1\u62F7\u8D1D\uFF1F\u5982\u4F55\u5B9E\u73B0\u6DF1\u62F7\u8D1D\uFF1F
</code></pre>
<p>\u5728\u4E0A\u4E00\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u4E86\u89E3\u4E86\u5BF9\u8C61\u7C7B\u578B\u5728\u8D4B\u503C\u7684\u8FC7\u7A0B\u4E2D\u5176\u5B9E\u662F\u590D\u5236\u4E86\u5730\u5740\uFF0C\u4ECE\u800C\u4F1A\u5BFC\u81F4\u6539\u53D8\u4E86\u4E00\u65B9\u5176\u4ED6\u4E5F\u90FD\u88AB\u6539\u53D8\u7684\u60C5\u51B5\u3002\u901A\u5E38\u5728\u5F00\u53D1\u4E2D\u6211\u4EEC\u4E0D\u5E0C\u671B\u51FA\u73B0\u8FD9\u6837\u7684\u95EE\u9898\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u6D45\u62F7\u8D1D\u6765\u89E3\u51B3\u8FD9\u4E2A\u60C5\u51B5\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">let</span> a = {
  <span class="hljs-attr">age</span>: <span class="hljs-number">1</span>
}
<span class="hljs-keyword">let</span> b = a
a.age = <span class="hljs-number">2</span>
<span class="hljs-built_in">console</span>.log(b.age) <span class="hljs-comment">// 2</span>
</code></pre>
<h3 data-id="heading-4">\u6D45\u62F7\u8D1D</h3>
<p>\u9996\u5148\u53EF\u4EE5\u901A\u8FC7 <code>Object.assign</code> \u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5F88\u591A\u4EBA\u8BA4\u4E3A\u8FD9\u4E2A\u51FD\u6570\u662F\u7528\u6765\u6DF1\u62F7\u8D1D\u7684\u3002\u5176\u5B9E\u5E76\u4E0D\u662F\uFF0C<code>Object.assign</code> \u53EA\u4F1A\u62F7\u8D1D\u6240\u6709\u7684\u5C5E\u6027\u503C\u5230\u65B0\u7684\u5BF9\u8C61\u4E2D\uFF0C\u5982\u679C\u5C5E\u6027\u503C\u662F\u5BF9\u8C61\u7684\u8BDD\uFF0C\u62F7\u8D1D\u7684\u662F\u5730\u5740\uFF0C\u6240\u4EE5\u5E76\u4E0D\u662F\u6DF1\u62F7\u8D1D\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">let</span> a = {
  <span class="hljs-attr">age</span>: <span class="hljs-number">1</span>
}
<span class="hljs-keyword">let</span> b = <span class="hljs-built_in">Object</span>.assign({}, a)
a.age = <span class="hljs-number">2</span>
<span class="hljs-built_in">console</span>.log(b.age) <span class="hljs-comment">// 1</span>
</code></pre>
<p>\u53E6\u5916\u6211\u4EEC\u8FD8\u53EF\u4EE5\u901A\u8FC7\u5C55\u5F00\u8FD0\u7B97\u7B26 <code>...</code> \u6765\u5B9E\u73B0\u6D45\u62F7\u8D1D</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">let</span> a = {
  <span class="hljs-attr">age</span>: <span class="hljs-number">1</span>
}
<span class="hljs-keyword">let</span> b = { ...a }
a.age = <span class="hljs-number">2</span>
<span class="hljs-built_in">console</span>.log(b.age) <span class="hljs-comment">// 1</span>
</code></pre>
<p>\u901A\u5E38\u6D45\u62F7\u8D1D\u5C31\u80FD\u89E3\u51B3\u5927\u90E8\u5206\u95EE\u9898\u4E86\uFF0C\u4F46\u662F\u5F53\u6211\u4EEC\u9047\u5230\u5982\u4E0B\u60C5\u51B5\u5C31\u53EF\u80FD\u9700\u8981\u4F7F\u7528\u5230\u6DF1\u62F7\u8D1D\u4E86</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">let</span> a = {
  <span class="hljs-attr">age</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">jobs</span>: {
    <span class="hljs-attr">first</span>: <span class="hljs-string">'FE'</span>
  }
}
<span class="hljs-keyword">let</span> b = { ...a }
a.jobs.first = <span class="hljs-string">'native'</span>
<span class="hljs-built_in">console</span>.log(b.jobs.first) <span class="hljs-comment">// native</span>
</code></pre>
<p>\u6D45\u62F7\u8D1D\u53EA\u89E3\u51B3\u4E86\u7B2C\u4E00\u5C42\u7684\u95EE\u9898\uFF0C\u5982\u679C\u63A5\u4E0B\u53BB\u7684\u503C\u4E2D\u8FD8\u6709\u5BF9\u8C61\u7684\u8BDD\uFF0C\u90A3\u4E48\u5C31\u53C8\u56DE\u5230\u6700\u5F00\u59CB\u7684\u8BDD\u9898\u4E86\uFF0C\u4E24\u8005\u4EAB\u6709\u76F8\u540C\u7684\u5730\u5740\u3002\u8981\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u5C31\u5F97\u4F7F\u7528\u6DF1\u62F7\u8D1D\u4E86\u3002</p>
<h3 data-id="heading-5">\u6DF1\u62F7\u8D1D</h3>
<p>\u8FD9\u4E2A\u95EE\u9898\u901A\u5E38\u53EF\u4EE5\u901A\u8FC7 <code>JSON.parse(JSON.stringify(object))</code> \u6765\u89E3\u51B3\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">let</span> a = {
  <span class="hljs-attr">age</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">jobs</span>: {
    <span class="hljs-attr">first</span>: <span class="hljs-string">'FE'</span>
  }
}
<span class="hljs-keyword">let</span> b = <span class="hljs-built_in">JSON</span>.parse(<span class="hljs-built_in">JSON</span>.stringify(a))
a.jobs.first = <span class="hljs-string">'native'</span>
<span class="hljs-built_in">console</span>.log(b.jobs.first) <span class="hljs-comment">// FE</span>
</code></pre>
<p>\u4F46\u662F\u8BE5\u65B9\u6CD5\u4E5F\u662F\u6709\u5C40\u9650\u6027\u7684\uFF1A</p>
<ul>
<li>\u4F1A\u5FFD\u7565 <code>undefined</code></li>
<li>\u4F1A\u5FFD\u7565 <code>symbol</code></li>
<li>\u4E0D\u80FD\u5E8F\u5217\u5316\u51FD\u6570</li>
<li>\u4E0D\u80FD\u89E3\u51B3\u5FAA\u73AF\u5F15\u7528\u7684\u5BF9\u8C61</li>
</ul>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">let</span> obj = {
  <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">b</span>: {
    <span class="hljs-attr">c</span>: <span class="hljs-number">2</span>,
    <span class="hljs-attr">d</span>: <span class="hljs-number">3</span>,
  },
}
obj.c = obj.b
obj.e = obj.a
obj.b.c = obj.c
obj.b.d = obj.b
obj.b.e = obj.b.c
<span class="hljs-keyword">let</span> newObj = <span class="hljs-built_in">JSON</span>.parse(<span class="hljs-built_in">JSON</span>.stringify(obj))
<span class="hljs-built_in">console</span>.log(newObj)
</code></pre>
<p>\u5982\u679C\u4F60\u6709\u8FD9\u4E48\u4E00\u4E2A\u5FAA\u73AF\u5F15\u7528\u5BF9\u8C61\uFF0C\u4F60\u4F1A\u53D1\u73B0\u5E76\u4E0D\u80FD\u901A\u8FC7\u8BE5\u65B9\u6CD5\u5B9E\u73B0\u6DF1\u62F7\u8D1D</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/3/28/1626b1ec2d3f9e41~tplv-t2oaga2asx-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u5728\u9047\u5230\u51FD\u6570\u3001 <code>undefined</code> \u6216\u8005 <code>symbol</code> \u7684\u65F6\u5019\uFF0C\u8BE5\u5BF9\u8C61\u4E5F\u4E0D\u80FD\u6B63\u5E38\u7684\u5E8F\u5217\u5316</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">let</span> a = {
  <span class="hljs-attr">age</span>: <span class="hljs-literal">undefined</span>,
  <span class="hljs-attr">sex</span>: <span class="hljs-built_in">Symbol</span>(<span class="hljs-string">'male'</span>),
  <span class="hljs-attr">jobs</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{},
  <span class="hljs-attr">name</span>: <span class="hljs-string">'yck'</span>
}
<span class="hljs-keyword">let</span> b = <span class="hljs-built_in">JSON</span>.parse(<span class="hljs-built_in">JSON</span>.stringify(a))
<span class="hljs-built_in">console</span>.log(b) <span class="hljs-comment">// {name: "yck"}</span>
</code></pre>
<p>\u4F60\u4F1A\u53D1\u73B0\u5728\u4E0A\u8FF0\u60C5\u51B5\u4E2D\uFF0C\u8BE5\u65B9\u6CD5\u4F1A\u5FFD\u7565\u6389\u51FD\u6570\u548C <code>undefined</code> \u3002</p>
<p>\u4F46\u662F\u5728\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u590D\u6742\u6570\u636E\u90FD\u662F\u53EF\u4EE5\u5E8F\u5217\u5316\u7684\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u51FD\u6570\u53EF\u4EE5\u89E3\u51B3\u5927\u90E8\u5206\u95EE\u9898\u3002</p>
<p>\u5982\u679C\u4F60\u6240\u9700\u62F7\u8D1D\u7684\u5BF9\u8C61\u542B\u6709\u5185\u7F6E\u7C7B\u578B\u5E76\u4E14\u4E0D\u5305\u542B\u51FD\u6570\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>MessageChannel</code></p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">structuralClone</span>(<span class="hljs-params">obj</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-params">resolve</span> =&gt;</span> {
    <span class="hljs-keyword">const</span> { port1, port2 } = <span class="hljs-keyword">new</span> MessageChannel()
    port2.onmessage = <span class="hljs-function"><span class="hljs-params">ev</span> =&gt;</span> resolve(ev.data)
    port1.postMessage(obj)
  })
}

<span class="hljs-keyword">var</span> obj = {
  <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">b</span>: {
    <span class="hljs-attr">c</span>: <span class="hljs-number">2</span>
  }
}

obj.b.d = obj.b

<span class="hljs-comment">// \u6CE8\u610F\u8BE5\u65B9\u6CD5\u662F\u5F02\u6B65\u7684</span>
<span class="hljs-comment">// \u53EF\u4EE5\u5904\u7406 undefined \u548C\u5FAA\u73AF\u5F15\u7528\u5BF9\u8C61</span>
<span class="hljs-keyword">const</span> test = <span class="hljs-keyword">async</span> () =&gt; {
  <span class="hljs-keyword">const</span> clone = <span class="hljs-keyword">await</span> structuralClone(obj)
  <span class="hljs-built_in">console</span>.log(clone)
}
test()
</code></pre>
<p>\u5F53\u7136\u4F60\u53EF\u80FD\u60F3\u81EA\u5DF1\u6765\u5B9E\u73B0\u4E00\u4E2A\u6DF1\u62F7\u8D1D\uFF0C\u4F46\u662F\u5176\u5B9E\u5B9E\u73B0\u4E00\u4E2A\u6DF1\u62F7\u8D1D\u662F\u5F88\u56F0\u96BE\u7684\uFF0C\u9700\u8981\u6211\u4EEC\u8003\u8651\u597D\u591A\u79CD\u8FB9\u754C\u60C5\u51B5\uFF0C\u6BD4\u5982\u539F\u578B\u94FE\u5982\u4F55\u5904\u7406\u3001DOM \u5982\u4F55\u5904\u7406\u7B49\u7B49\uFF0C\u6240\u4EE5\u8FD9\u91CC\u6211\u4EEC\u5B9E\u73B0\u7684\u6DF1\u62F7\u8D1D\u53EA\u662F\u7B80\u6613\u7248\uFF0C\u5E76\u4E14\u6211\u5176\u5B9E\u66F4\u63A8\u8350\u4F7F\u7528 <a href="https://link.juejin.cn?target=https%3A%2F%2Flodash.com%2Fdocs%23cloneDeep" target="_blank" rel="nofollow noopener noreferrer" title="https://lodash.com/docs#cloneDeep" ref="nofollow noopener noreferrer">lodash \u7684\u6DF1\u62F7\u8D1D\u51FD\u6570</a>\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deepClone</span>(<span class="hljs-params">obj</span>) </span>{
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isObject</span>(<span class="hljs-params">o</span>) </span>{
    <span class="hljs-keyword">return</span> (<span class="hljs-keyword">typeof</span> o === <span class="hljs-string">'object'</span> || <span class="hljs-keyword">typeof</span> o === <span class="hljs-string">'function'</span>) &amp;&amp; o !== <span class="hljs-literal">null</span>
  }

  <span class="hljs-keyword">if</span> (!isObject(obj)) {
    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">'\u975E\u5BF9\u8C61'</span>)
  }

  <span class="hljs-keyword">let</span> isArray = <span class="hljs-built_in">Array</span>.isArray(obj)
  <span class="hljs-keyword">let</span> newObj = isArray ? [...obj] : { ...obj }
  <span class="hljs-built_in">Reflect</span>.ownKeys(newObj).forEach(<span class="hljs-function"><span class="hljs-params">key</span> =&gt;</span> {
    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
  })

  <span class="hljs-keyword">return</span> newObj
}

<span class="hljs-keyword">let</span> obj = {
  <span class="hljs-attr">a</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>],
  <span class="hljs-attr">b</span>: {
    <span class="hljs-attr">c</span>: <span class="hljs-number">2</span>,
    <span class="hljs-attr">d</span>: <span class="hljs-number">3</span>
  }
}
<span class="hljs-keyword">let</span> newObj = deepClone(obj)
newObj.b.c = <span class="hljs-number">1</span>
<span class="hljs-built_in">console</span>.log(obj.b.c) <span class="hljs-comment">// 2</span>
</code></pre>
<h2 data-id="heading-6">\u539F\u578B</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u5982\u4F55\u7406\u89E3\u539F\u578B\uFF1F\u5982\u4F55\u7406\u89E3\u539F\u578B\u94FE\uFF1F
</code></pre>
<p>\u5F53\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u65F6 <code>let obj = { age: 25 }</code>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\u80FD\u4F7F\u7528\u5F88\u591A\u79CD\u51FD\u6570\uFF0C\u4F46\u662F\u6211\u4EEC\u660E\u660E\u6CA1\u6709\u5B9A\u4E49\u8FC7\u5B83\u4EEC\uFF0C\u5BF9\u4E8E\u8FD9\u79CD\u60C5\u51B5\u4F60\u662F\u5426\u6709\u8FC7\u7591\u60D1\uFF1F</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/16/1671d15f45fcedea~tplv-t2oaga2asx-watermark.awebp****&amp;h=73&amp;f=png&amp;s=8860" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u5F53\u6211\u4EEC\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5370 <code>obj</code> \u65F6\u4F60\u4F1A\u53D1\u73B0\uFF0C\u5728 <code>obj</code> \u4E0A\u5C45\u7136\u8FD8\u6709\u4E00\u4E2A <code>__proto__</code> \u5C5E\u6027\uFF0C\u90A3\u4E48\u770B\u6765\u4E4B\u524D\u7684\u7591\u95EE\u5C31\u548C\u8FD9\u4E2A\u5C5E\u6027\u6709\u5173\u7CFB\u4E86\u3002</p>
<p>\u5176\u5B9E\u6BCF\u4E2A JS \u5BF9\u8C61\u90FD\u6709 <code>__proto__</code> \u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u6307\u5411\u4E86\u539F\u578B\u3002\u8FD9\u4E2A\u5C5E\u6027\u5728\u73B0\u5728\u6765\u8BF4\u5DF2\u7ECF\u4E0D\u63A8\u8350\u76F4\u63A5\u53BB\u4F7F\u7528\u5B83\u4E86\uFF0C\u8FD9\u53EA\u662F\u6D4F\u89C8\u5668\u5728\u65E9\u671F\u4E3A\u4E86\u8BA9\u6211\u4EEC\u8BBF\u95EE\u5230\u5185\u90E8\u5C5E\u6027 <code>[[prototype]]</code> \u6765\u5B9E\u73B0\u7684\u4E00\u4E2A\u4E1C\u897F\u3002</p>
<p>\u8BB2\u5230\u8FD9\u91CC\u597D\u50CF\u8FD8\u662F\u6CA1\u6709\u5F04\u660E\u767D\u4EC0\u4E48\u662F\u539F\u578B\uFF0C\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u518D\u770B\u770B <code>__proto__</code> \u91CC\u9762\u6709\u4EC0\u4E48\u5427\u3002</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/16/1671d2c5a6bcccc4~tplv-t2oaga2asx-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u770B\u5230\u8FD9\u91CC\u4F60\u5E94\u8BE5\u660E\u767D\u4E86\uFF0C\u539F\u578B\u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u5BF9\u8C61\u4E2D\u5305\u542B\u4E86\u5F88\u591A\u51FD\u6570\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u5F97\u51FA\u4E00\u4E2A\u7ED3\u8BBA\uFF1A\u5BF9\u4E8E <code>obj</code> \u6765\u8BF4\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>__proto__</code> \u627E\u5230\u4E00\u4E2A\u539F\u578B\u5BF9\u8C61\uFF0C\u5728\u8BE5\u5BF9\u8C61\u4E2D\u5B9A\u4E49\u4E86\u5F88\u591A\u51FD\u6570\u8BA9\u6211\u4EEC\u6765\u4F7F\u7528\u3002</p>
<p>\u5728\u4E0A\u9762\u7684\u56FE\u4E2D\u6211\u4EEC\u8FD8\u53EF\u4EE5\u53D1\u73B0\u4E00\u4E2A <code>constructor</code> \u5C5E\u6027\uFF0C\u4E5F\u5C31\u662F\u6784\u9020\u51FD\u6570</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/16/1671d329ec98ec0b~tplv-t2oaga2asx-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u6253\u5F00 <code>constructor</code> \u5C5E\u6027\u6211\u4EEC\u53C8\u53EF\u4EE5\u53D1\u73B0\u5176\u4E2D\u8FD8\u6709\u4E00\u4E2A <code>prototype</code> \u5C5E\u6027\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u5C5E\u6027\u5BF9\u5E94\u7684\u503C\u548C\u5148\u524D\u6211\u4EEC\u5728 <code>__proto__</code> \u4E2D\u770B\u5230\u7684\u4E00\u6A21\u4E00\u6837\u3002\u6240\u4EE5\u6211\u4EEC\u53C8\u53EF\u4EE5\u5F97\u51FA\u4E00\u4E2A\u7ED3\u8BBA\uFF1A\u539F\u578B\u7684 <code>constructor</code> \u5C5E\u6027\u6307\u5411\u6784\u9020\u51FD\u6570\uFF0C\u6784\u9020\u51FD\u6570\u53C8\u901A\u8FC7 <code>prototype</code> \u5C5E\u6027\u6307\u56DE\u539F\u578B\uFF0C\u4F46\u662F\u5E76\u4E0D\u662F\u6240\u6709\u51FD\u6570\u90FD\u5177\u6709\u8FD9\u4E2A\u5C5E\u6027\uFF0C<code>Function.prototype.bind()</code> \u5C31\u6CA1\u6709\u8FD9\u4E2A\u5C5E\u6027\u3002</p>
<p>\u5176\u5B9E\u539F\u578B\u5C31\u662F\u90A3\u4E48\u7B80\u5355\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u518D\u6765\u770B\u4E00\u5F20\u56FE\uFF0C\u76F8\u4FE1\u8FD9\u5F20\u56FE\u80FD\u8BA9\u4F60\u5F7B\u5E95\u660E\u767D\u539F\u578B\u548C\u539F\u578B\u94FE</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/16/1671d387e4189ec8~tplv-t2oaga2asx-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u770B\u5B8C\u8FD9\u5F20\u56FE\uFF0C\u6211\u518D\u6765\u89E3\u91CA\u4E0B\u4EC0\u4E48\u662F\u539F\u578B\u94FE\u5427\u3002\u5176\u5B9E\u539F\u578B\u94FE\u5C31\u662F\u591A\u4E2A\u5BF9\u8C61\u901A\u8FC7 <code>__proto__</code> \u7684\u65B9\u5F0F\u8FDE\u63A5\u4E86\u8D77\u6765\u3002\u4E3A\u4EC0\u4E48 <code>obj</code> \u53EF\u4EE5\u8BBF\u95EE\u5230 <code>valueOf</code> \u51FD\u6570\uFF0C\u5C31\u662F\u56E0\u4E3A <code>obj</code> \u901A\u8FC7\u539F\u578B\u94FE\u627E\u5230\u4E86 <code>valueOf</code> \u51FD\u6570\u3002</p>
<p>\u5BF9\u4E8E\u8FD9\u4E00\u5C0F\u8282\u7684\u77E5\u8BC6\u70B9\uFF0C\u603B\u7ED3\u8D77\u6765\u5C31\u662F\u4EE5\u4E0B\u51E0\u70B9\uFF1A</p>
<ul>
<li><code>Object</code> \u662F\u6240\u6709\u5BF9\u8C61\u7684\u7238\u7238\uFF0C\u6240\u6709\u5BF9\u8C61\u90FD\u53EF\u4EE5\u901A\u8FC7 <code>__proto__</code> \u627E\u5230\u5B83</li>
<li><code>Function</code> \u662F\u6240\u6709\u51FD\u6570\u7684\u7238\u7238\uFF0C\u6240\u6709\u51FD\u6570\u90FD\u53EF\u4EE5\u901A\u8FC7 <code>__proto__</code> \u627E\u5230\u5B83</li>
<li>\u51FD\u6570\u7684 <code>prototype</code> \u662F\u4E00\u4E2A\u5BF9\u8C61</li>
<li>\u5BF9\u8C61\u7684 <code>__proto__</code> \u5C5E\u6027\u6307\u5411\u539F\u578B\uFF0C <code>__proto__</code> \u5C06\u5BF9\u8C61\u548C\u539F\u578B\u8FDE\u63A5\u8D77\u6765\u7EC4\u6210\u4E86\u539F\u578B\u94FE</li>
</ul>
<p>\u5982\u679C\u4F60\u8FD8\u60F3\u6DF1\u5165\u5B66\u4E60\u539F\u578B\u8FD9\u90E8\u5206\u7684\u5185\u5BB9\uFF0C\u53EF\u4EE5\u9605\u8BFB\u6211\u4E4B\u524D\u5199\u7684<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FKieSun%2FDream%2Fissues%2F2" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/KieSun/Dream/issues/2" ref="nofollow noopener noreferrer">\u6587\u7AE0</a></p>
<h2 data-id="heading-7">\u5C0F\u7ED3</h2>
<p>\u4EE5\u4E0A\u5C31\u662F\u5168\u90E8\u7684\u5E38\u8003\u548C\u5BB9\u6613\u6DF7\u4E71\u7684\u57FA\u7840\u77E5\u8BC6\u70B9\u4E86\uFF0C\u4E0B\u4E00\u7AE0\u8282\u6211\u4EEC\u5C06\u4F1A\u5B66\u4E60 ES6 \u90E8\u5206\u7684\u77E5\u8BC6\u3002\u5982\u679C\u5927\u5BB6\u5BF9\u4E8E\u8FD9\u4E2A\u7AE0\u8282\u7684\u5185\u5BB9\u5B58\u5728\u7591\u95EE\uFF0C\u6B22\u8FCE\u5728\u8BC4\u8BBA\u533A\u4E0E\u6211\u4E92\u52A8\u3002</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
