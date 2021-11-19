var s={name:"JS \u5F02\u6B65\u7F16\u7A0B\u53CA\u5E38\u8003\u9762\u8BD5\u9898",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h1 data-id="heading-0">JS \u5F02\u6B65\u7F16\u7A0B\u53CA\u5E38\u8003\u9762\u8BD5\u9898</h1>
<p>\u5728\u4E0A\u4E00\u7AE0\u8282\u4E2D\u6211\u4EEC\u4E86\u89E3\u4E86\u5E38\u89C1 ES6 \u8BED\u6CD5\u7684\u4E00\u4E9B\u77E5\u8BC6\u70B9\u3002\u8FD9\u4E00\u7AE0\u8282\u6211\u4EEC\u5C06\u4F1A\u5B66\u4E60\u5F02\u6B65\u7F16\u7A0B\u8FD9\u4E00\u5757\u7684\u5185\u5BB9\uFF0C\u9274\u4E8E\u5F02\u6B65\u7F16\u7A0B\u662F JS \u4E2D\u81F3\u5173\u91CD\u8981\u7684\u5185\u5BB9\uFF0C\u6240\u4EE5\u6211\u4EEC\u5C06\u4F1A\u7528\u4E09\u4E2A\u7AE0\u8282\u6765\u5B66\u4E60\u5F02\u6B65\u7F16\u7A0B\u6D89\u53CA\u5230\u7684\u91CD\u70B9\u548C\u96BE\u70B9\uFF0C\u540C\u65F6\u8FD9\u4E00\u5757\u5185\u5BB9\u4E5F\u662F\u9762\u8BD5\u5E38\u8003\u8303\u56F4\uFF0C\u5E0C\u671B\u5927\u5BB6\u8BA4\u771F\u5B66\u4E60\u3002</p>
<h2 data-id="heading-1">\u5E76\u53D1\uFF08concurrency\uFF09\u548C\u5E76\u884C\uFF08parallelism\uFF09\u533A\u522B</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u5E76\u53D1\u4E0E\u5E76\u884C\u7684\u533A\u522B\uFF1F
</code></pre>
<p>\u5F02\u6B65\u548C\u8FD9\u5C0F\u8282\u7684\u77E5\u8BC6\u70B9\u5176\u5B9E\u5E76\u4E0D\u662F\u4E00\u4E2A\u6982\u5FF5\uFF0C\u4F46\u662F\u8FD9\u4E24\u4E2A\u540D\u8BCD\u786E\u5B9E\u662F\u5F88\u591A\u4EBA\u90FD\u5E38\u4F1A\u6DF7\u6DC6\u7684\u77E5\u8BC6\u70B9\u3002\u5176\u5B9E\u6DF7\u6DC6\u7684\u539F\u56E0\u53EF\u80FD\u53EA\u662F\u4E24\u4E2A\u540D\u8BCD\u5728\u4E2D\u6587\u4E0A\u7684\u76F8\u4F3C\uFF0C\u5728\u82F1\u6587\u4E0A\u6765\u8BF4\u5B8C\u5168\u662F\u4E0D\u540C\u7684\u5355\u8BCD\u3002</p>
<p>\u5E76\u53D1\u662F\u5B8F\u89C2\u6982\u5FF5\uFF0C\u6211\u5206\u522B\u6709\u4EFB\u52A1 A \u548C\u4EFB\u52A1 B\uFF0C\u5728\u4E00\u6BB5\u65F6\u95F4\u5185\u901A\u8FC7\u4EFB\u52A1\u95F4\u7684\u5207\u6362\u5B8C\u6210\u4E86\u8FD9\u4E24\u4E2A\u4EFB\u52A1\uFF0C\u8FD9\u79CD\u60C5\u51B5\u5C31\u53EF\u4EE5\u79F0\u4E4B\u4E3A\u5E76\u53D1\u3002</p>
<p>\u5E76\u884C\u662F\u5FAE\u89C2\u6982\u5FF5\uFF0C\u5047\u8BBE CPU \u4E2D\u5B58\u5728\u4E24\u4E2A\u6838\u5FC3\uFF0C\u90A3\u4E48\u6211\u5C31\u53EF\u4EE5\u540C\u65F6\u5B8C\u6210\u4EFB\u52A1 A\u3001B\u3002\u540C\u65F6\u5B8C\u6210\u591A\u4E2A\u4EFB\u52A1\u7684\u60C5\u51B5\u5C31\u53EF\u4EE5\u79F0\u4E4B\u4E3A\u5E76\u884C\u3002</p>
<h2 data-id="heading-2">\u56DE\u8C03\u51FD\u6570\uFF08Callback\uFF09</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u4EC0\u4E48\u662F\u56DE\u8C03\u51FD\u6570\uFF1F\u56DE\u8C03\u51FD\u6570\u6709\u4EC0\u4E48\u7F3A\u70B9\uFF1F\u5982\u4F55\u89E3\u51B3\u56DE\u8C03\u5730\u72F1\u95EE\u9898\uFF1F
</code></pre>
<p>\u56DE\u8C03\u51FD\u6570\u5E94\u8BE5\u662F\u5927\u5BB6\u7ECF\u5E38\u4F7F\u7528\u5230\u7684\uFF0C\u4EE5\u4E0B\u4EE3\u7801\u5C31\u662F\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u7684\u4F8B\u5B50\uFF1A</p>
<pre><code class="hljs language-js" lang="js">ajax(url, <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// \u5904\u7406\u903B\u8F91</span>
})
</code></pre>
<p>\u4F46\u662F\u56DE\u8C03\u51FD\u6570\u6709\u4E00\u4E2A\u81F4\u547D\u7684\u5F31\u70B9\uFF0C\u5C31\u662F\u5BB9\u6613\u5199\u51FA\u56DE\u8C03\u5730\u72F1\uFF08Callback hell\uFF09\u3002\u5047\u8BBE\u591A\u4E2A\u8BF7\u6C42\u5B58\u5728\u4F9D\u8D56\u6027\uFF0C\u4F60\u53EF\u80FD\u5C31\u4F1A\u5199\u51FA\u5982\u4E0B\u4EE3\u7801\uFF1A</p>
<pre><code class="hljs language-js" lang="js">ajax(url, <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// \u5904\u7406\u903B\u8F91</span>
    ajax(url1, <span class="hljs-function">() =&gt;</span> {
        <span class="hljs-comment">// \u5904\u7406\u903B\u8F91</span>
        ajax(url2, <span class="hljs-function">() =&gt;</span> {
            <span class="hljs-comment">// \u5904\u7406\u903B\u8F91</span>
        })
    })
})
</code></pre>
<p>\u4EE5\u4E0A\u4EE3\u7801\u770B\u8D77\u6765\u4E0D\u5229\u4E8E\u9605\u8BFB\u548C\u7EF4\u62A4\uFF0C\u5F53\u7136\uFF0C\u4F60\u53EF\u80FD\u4F1A\u60F3\u8BF4\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u8FD8\u4E0D\u7B80\u5355\uFF0C\u628A\u51FD\u6570\u5206\u5F00\u6765\u5199\u4E0D\u5C31\u5F97\u4E86</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">firstAjax</span>(<span class="hljs-params"></span>) </span>{
  ajax(url1, <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// \u5904\u7406\u903B\u8F91</span>
    secondAjax()
  })
}
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">secondAjax</span>(<span class="hljs-params"></span>) </span>{
  ajax(url2, <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// \u5904\u7406\u903B\u8F91</span>
  })
}
ajax(url, <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-comment">// \u5904\u7406\u903B\u8F91</span>
  firstAjax()
})
</code></pre>
<p>\u4EE5\u4E0A\u7684\u4EE3\u7801\u867D\u7136\u770B\u4E0A\u53BB\u5229\u4E8E\u9605\u8BFB\u4E86\uFF0C\u4F46\u662F\u8FD8\u662F\u6CA1\u6709\u89E3\u51B3\u6839\u672C\u95EE\u9898\u3002</p>
<p>\u56DE\u8C03\u5730\u72F1\u7684\u6839\u672C\u95EE\u9898\u5C31\u662F\uFF1A</p>
<ol>
<li>\u5D4C\u5957\u51FD\u6570\u5B58\u5728\u8026\u5408\u6027\uFF0C\u4E00\u65E6\u6709\u6240\u6539\u52A8\uFF0C\u5C31\u4F1A\u7275\u4E00\u53D1\u800C\u52A8\u5168\u8EAB</li>
<li>\u5D4C\u5957\u51FD\u6570\u4E00\u591A\uFF0C\u5C31\u5F88\u96BE\u5904\u7406\u9519\u8BEF</li>
</ol>
<p>\u5F53\u7136\uFF0C\u56DE\u8C03\u51FD\u6570\u8FD8\u5B58\u5728\u7740\u522B\u7684\u51E0\u4E2A\u7F3A\u70B9\uFF0C\u6BD4\u5982\u4E0D\u80FD\u4F7F\u7528 <code>try catch</code> \u6355\u83B7\u9519\u8BEF\uFF0C\u4E0D\u80FD\u76F4\u63A5 <code>return</code>\u3002\u5728\u63A5\u4E0B\u6765\u7684\u51E0\u5C0F\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u6765\u5B66\u4E60\u901A\u8FC7\u522B\u7684\u6280\u672F\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898\u3002</p>
<h2 data-id="heading-3">Generator</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u4F60\u7406\u89E3\u7684 Generator \u662F\u4EC0\u4E48\uFF1F
</code></pre>
<p><code>Generator</code> \u7B97\u662F ES6 \u4E2D\u96BE\u7406\u89E3\u7684\u6982\u5FF5\u4E4B\u4E00\u4E86\uFF0C<code>Generator</code> \u6700\u5927\u7684\u7279\u70B9\u5C31\u662F\u53EF\u4EE5\u63A7\u5236\u51FD\u6570\u7684\u6267\u884C\u3002\u5728\u8FD9\u4E00\u5C0F\u8282\u4E2D\u6211\u4EEC\u4E0D\u4F1A\u53BB\u8BB2\u4EC0\u4E48\u662F <code>Generator</code>\uFF0C\u800C\u662F\u628A\u91CD\u70B9\u653E\u5728 <code>Generator</code> \u7684\u4E00\u4E9B\u5BB9\u6613\u56F0\u60D1\u7684\u5730\u65B9\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> *<span class="hljs-title">foo</span>(<span class="hljs-params">x</span>) </span>{
  <span class="hljs-keyword">let</span> y = <span class="hljs-number">2</span> * (<span class="hljs-keyword">yield</span> (x + <span class="hljs-number">1</span>))
  <span class="hljs-keyword">let</span> z = <span class="hljs-keyword">yield</span> (y / <span class="hljs-number">3</span>)
  <span class="hljs-keyword">return</span> (x + y + z)
}
<span class="hljs-keyword">let</span> it = foo(<span class="hljs-number">5</span>)
<span class="hljs-built_in">console</span>.log(it.next())   <span class="hljs-comment">// =&gt; {value: 6, done: false}</span>
<span class="hljs-built_in">console</span>.log(it.next(<span class="hljs-number">12</span>)) <span class="hljs-comment">// =&gt; {value: 8, done: false}</span>
<span class="hljs-built_in">console</span>.log(it.next(<span class="hljs-number">13</span>)) <span class="hljs-comment">// =&gt; {value: 42, done: true}</span>

</code></pre>
<p>\u4F60\u4E5F\u8BB8\u4F1A\u7591\u60D1\u4E3A\u4EC0\u4E48\u4F1A\u4EA7\u751F\u4E0E\u4F60\u9884\u60F3\u4E0D\u540C\u7684\u503C\uFF0C\u63A5\u4E0B\u6765\u5C31\u8BA9\u6211\u4E3A\u4F60\u9010\u884C\u4EE3\u7801\u5206\u6790\u539F\u56E0</p>
<ul>
<li>\u9996\u5148 <code>Generator</code> \u51FD\u6570\u8C03\u7528\u548C\u666E\u901A\u51FD\u6570\u4E0D\u540C\uFF0C\u5B83\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u8FED\u4EE3\u5668</li>
<li>\u5F53\u6267\u884C\u7B2C\u4E00\u6B21 <code>next</code> \u65F6\uFF0C\u4F20\u53C2\u4F1A\u88AB\u5FFD\u7565\uFF0C\u5E76\u4E14\u51FD\u6570\u6682\u505C\u5728 <code>yield (x + 1)</code> \u5904\uFF0C\u6240\u4EE5\u8FD4\u56DE <code>5 + 1 = 6</code></li>
<li>\u5F53\u6267\u884C\u7B2C\u4E8C\u6B21 <code>next</code> \u65F6\uFF0C\u4F20\u5165\u7684\u53C2\u6570\u7B49\u4E8E\u4E0A\u4E00\u4E2A <code>yield</code> \u7684\u8FD4\u56DE\u503C\uFF0C\u5982\u679C\u4F60\u4E0D\u4F20\u53C2\uFF0C<code>yield</code> \u6C38\u8FDC\u8FD4\u56DE <code>undefined</code>\u3002\u6B64\u65F6 <code>let y = 2 * 12</code>\uFF0C\u6240\u4EE5\u7B2C\u4E8C\u4E2A <code>yield</code> \u7B49\u4E8E <code>2 * 12 / 3 = 8</code></li>
<li>\u5F53\u6267\u884C\u7B2C\u4E09\u6B21 <code>next</code> \u65F6\uFF0C\u4F20\u5165\u7684\u53C2\u6570\u4F1A\u4F20\u9012\u7ED9 <code>z</code>\uFF0C\u6240\u4EE5 <code>z = 13, x = 5, y = 24</code>\uFF0C\u76F8\u52A0\u7B49\u4E8E <code>42</code></li>
</ul>
<p><code>Generator</code> \u51FD\u6570\u4E00\u822C\u89C1\u5230\u7684\u4E0D\u591A\uFF0C\u5176\u5B9E\u4E5F\u4E8E\u4ED6\u6709\u70B9\u7ED5\u6709\u5173\u7CFB\uFF0C\u5E76\u4E14\u4E00\u822C\u4F1A\u914D\u5408 co \u5E93\u53BB\u4F7F\u7528\u3002\u5F53\u7136\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <code>Generator</code> \u51FD\u6570\u89E3\u51B3\u56DE\u8C03\u5730\u72F1\u7684\u95EE\u9898\uFF0C\u53EF\u4EE5\u628A\u4E4B\u524D\u7684\u56DE\u8C03\u5730\u72F1\u4F8B\u5B50\u6539\u5199\u4E3A\u5982\u4E0B\u4EE3\u7801\uFF1A</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> *<span class="hljs-title">fetch</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">yield</span> ajax(url, <span class="hljs-function">() =&gt;</span> {})
    <span class="hljs-keyword">yield</span> ajax(url1, <span class="hljs-function">() =&gt;</span> {})
    <span class="hljs-keyword">yield</span> ajax(url2, <span class="hljs-function">() =&gt;</span> {})
}
<span class="hljs-keyword">let</span> it = fetch()
<span class="hljs-keyword">let</span> result1 = it.next()
<span class="hljs-keyword">let</span> result2 = it.next()
<span class="hljs-keyword">let</span> result3 = it.next()

</code></pre>
<h2 data-id="heading-4">Promise</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1APromise \u7684\u7279\u70B9\u662F\u4EC0\u4E48\uFF0C\u5206\u522B\u6709\u4EC0\u4E48\u4F18\u7F3A\u70B9\uFF1F\u4EC0\u4E48\u662F Promise \u94FE\uFF1FPromise \u6784\u9020\u51FD\u6570\u6267\u884C\u548C then \u51FD\u6570\u6267\u884C\u6709\u4EC0\u4E48\u533A\u522B\uFF1F
</code></pre>
<p><code>Promise</code> \u7FFB\u8BD1\u8FC7\u6765\u5C31\u662F\u627F\u8BFA\u7684\u610F\u601D\uFF0C\u8FD9\u4E2A\u627F\u8BFA\u4F1A\u5728\u672A\u6765\u6709\u4E00\u4E2A\u786E\u5207\u7684\u7B54\u590D\uFF0C\u5E76\u4E14\u8BE5\u627F\u8BFA\u6709\u4E09\u79CD\u72B6\u6001\uFF0C\u5206\u522B\u662F\uFF1A</p>
<ol>
<li>\u7B49\u5F85\u4E2D\uFF08pending\uFF09</li>
<li>\u5B8C\u6210\u4E86 \uFF08resolved\uFF09</li>
<li>\u62D2\u7EDD\u4E86\uFF08rejected\uFF09</li>
</ol>
<p>\u8FD9\u4E2A\u627F\u8BFA\u4E00\u65E6\u4ECE\u7B49\u5F85\u72B6\u6001\u53D8\u6210\u4E3A\u5176\u4ED6\u72B6\u6001\u5C31\u6C38\u8FDC\u4E0D\u80FD\u66F4\u6539\u72B6\u6001\u4E86\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4E00\u65E6\u72B6\u6001\u53D8\u4E3A resolved \u540E\uFF0C\u5C31\u4E0D\u80FD\u518D\u6B21\u6539\u53D8</p>
<pre><code class="">new Promise((resolve, reject) =&gt; {
  resolve('success')
  // \u65E0\u6548
  reject('reject')
})

</code></pre>
<p>\u5F53\u6211\u4EEC\u5728\u6784\u9020 <code>Promise</code> \u7684\u65F6\u5019\uFF0C\u6784\u9020\u51FD\u6570\u5185\u90E8\u7684\u4EE3\u7801\u662F\u7ACB\u5373\u6267\u884C\u7684</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'new Promise'</span>)
  resolve(<span class="hljs-string">'success'</span>)
})
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'finifsh'</span>)
<span class="hljs-comment">// new Promise -&gt; finifsh</span>
</code></pre>
<p><code>Promise</code> \u5B9E\u73B0\u4E86\u94FE\u5F0F\u8C03\u7528\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6BCF\u6B21\u8C03\u7528 <code>then</code> \u4E4B\u540E\u8FD4\u56DE\u7684\u90FD\u662F\u4E00\u4E2A <code>Promise</code>\uFF0C\u5E76\u4E14\u662F\u4E00\u4E2A\u5168\u65B0\u7684 <code>Promise</code>\uFF0C\u539F\u56E0\u4E5F\u662F\u56E0\u4E3A\u72B6\u6001\u4E0D\u53EF\u53D8\u3002\u5982\u679C\u4F60\u5728 <code>then</code> \u4E2D \u4F7F\u7528\u4E86 <code>return</code>\uFF0C\u90A3\u4E48 <code>return</code> \u7684\u503C\u4F1A\u88AB <code>Promise.resolve()</code> \u5305\u88C5</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-built_in">Promise</span>.resolve(<span class="hljs-number">1</span>)
  .then(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(res) <span class="hljs-comment">// =&gt; 1</span>
    <span class="hljs-keyword">return</span> <span class="hljs-number">2</span> <span class="hljs-comment">// \u5305\u88C5\u6210 Promise.resolve(2)</span>
  })
  .then(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(res) <span class="hljs-comment">// =&gt; 2</span>
  })
</code></pre>
<p>\u5F53\u7136\u4E86\uFF0C<code>Promise</code> \u4E5F\u5F88\u597D\u5730\u89E3\u51B3\u4E86\u56DE\u8C03\u5730\u72F1\u7684\u95EE\u9898\uFF0C\u53EF\u4EE5\u628A\u4E4B\u524D\u7684\u56DE\u8C03\u5730\u72F1\u4F8B\u5B50\u6539\u5199\u4E3A\u5982\u4E0B\u4EE3\u7801\uFF1A</p>
<pre><code class="hljs language-js" lang="js">ajax(url)
  .then(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(res)
      <span class="hljs-keyword">return</span> ajax(url1)
  }).then(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(res)
      <span class="hljs-keyword">return</span> ajax(url2)
  }).then(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(res))
</code></pre>
<p>\u524D\u9762\u90FD\u662F\u5728\u8BB2\u8FF0 <code>Promise</code> \u7684\u4E00\u4E9B\u4F18\u70B9\u548C\u7279\u70B9\uFF0C\u5176\u5B9E\u5B83\u4E5F\u662F\u5B58\u5728\u4E00\u4E9B\u7F3A\u70B9\u7684\uFF0C\u6BD4\u5982\u65E0\u6CD5\u53D6\u6D88 <code>Promise</code>\uFF0C\u9519\u8BEF\u9700\u8981\u901A\u8FC7\u56DE\u8C03\u51FD\u6570\u6355\u83B7\u3002</p>
<h2 data-id="heading-5">async \u53CA await</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1Aasync \u53CA await \u7684\u7279\u70B9\uFF0C\u5B83\u4EEC\u7684\u4F18\u70B9\u548C\u7F3A\u70B9\u5206\u522B\u662F\u4EC0\u4E48\uFF1Fawait \u539F\u7406\u662F\u4EC0\u4E48\uFF1F
</code></pre>
<p>\u4E00\u4E2A\u51FD\u6570\u5982\u679C\u52A0\u4E0A <code>async</code> \uFF0C\u90A3\u4E48\u8BE5\u51FD\u6570\u5C31\u4F1A\u8FD4\u56DE\u4E00\u4E2A <code>Promise</code></p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-string">"1"</span>
}
<span class="hljs-built_in">console</span>.log(test()) <span class="hljs-comment">// -&gt; Promise {&lt;resolved&gt;: "1"}</span>
</code></pre>
<p><code>async</code> \u5C31\u662F\u5C06\u51FD\u6570\u8FD4\u56DE\u503C\u4F7F\u7528 <code>Promise.resolve()</code> \u5305\u88F9\u4E86\u4E0B\uFF0C\u548C <code>then</code> \u4E2D\u5904\u7406\u8FD4\u56DE\u503C\u4E00\u6837\uFF0C\u5E76\u4E14 <code>await</code> \u53EA\u80FD\u914D\u5957 <code>async</code> \u4F7F\u7528</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">let</span> value = <span class="hljs-keyword">await</span> sleep()
}
</code></pre>
<p><code>async</code> \u548C <code>await</code> \u53EF\u4EE5\u8BF4\u662F\u5F02\u6B65\u7EC8\u6781\u89E3\u51B3\u65B9\u6848\u4E86\uFF0C\u76F8\u6BD4\u76F4\u63A5\u4F7F\u7528 <code>Promise</code> \u6765\u8BF4\uFF0C\u4F18\u52BF\u5728\u4E8E\u5904\u7406 <code>then</code> \u7684\u8C03\u7528\u94FE\uFF0C\u80FD\u591F\u66F4\u6E05\u6670\u51C6\u786E\u7684\u5199\u51FA\u4EE3\u7801\uFF0C\u6BD5\u7ADF\u5199\u4E00\u5927\u5806 <code>then</code> \u4E5F\u5F88\u6076\u5FC3\uFF0C\u5E76\u4E14\u4E5F\u80FD\u4F18\u96C5\u5730\u89E3\u51B3\u56DE\u8C03\u5730\u72F1\u95EE\u9898\u3002\u5F53\u7136\u4E5F\u5B58\u5728\u4E00\u4E9B\u7F3A\u70B9\uFF0C\u56E0\u4E3A <code>await</code> \u5C06\u5F02\u6B65\u4EE3\u7801\u6539\u9020\u6210\u4E86\u540C\u6B65\u4EE3\u7801\uFF0C\u5982\u679C\u591A\u4E2A\u5F02\u6B65\u4EE3\u7801\u6CA1\u6709\u4F9D\u8D56\u6027\u5374\u4F7F\u7528\u4E86 <code>await</code> \u4F1A\u5BFC\u81F4\u6027\u80FD\u4E0A\u7684\u964D\u4F4E\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-comment">// \u4EE5\u4E0B\u4EE3\u7801\u6CA1\u6709\u4F9D\u8D56\u6027\u7684\u8BDD\uFF0C\u5B8C\u5168\u53EF\u4EE5\u4F7F\u7528 Promise.all \u7684\u65B9\u5F0F</span>
  <span class="hljs-comment">// \u5982\u679C\u6709\u4F9D\u8D56\u6027\u7684\u8BDD\uFF0C\u5176\u5B9E\u5C31\u662F\u89E3\u51B3\u56DE\u8C03\u5730\u72F1\u7684\u4F8B\u5B50\u4E86</span>
  <span class="hljs-keyword">await</span> fetch(url)
  <span class="hljs-keyword">await</span> fetch(url1)
  <span class="hljs-keyword">await</span> fetch(url2)
}
</code></pre>
<p>\u4E0B\u9762\u6765\u770B\u4E00\u4E2A\u4F7F\u7528 <code>await</code> \u7684\u4F8B\u5B50\uFF1A</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">let</span> a = <span class="hljs-number">0</span>
<span class="hljs-keyword">let</span> b = <span class="hljs-keyword">async</span> () =&gt; {
  a = a + <span class="hljs-keyword">await</span> <span class="hljs-number">10</span>
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'2'</span>, a) <span class="hljs-comment">// -&gt; '2' 10</span>
}
b()
a++
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'1'</span>, a) <span class="hljs-comment">// -&gt; '1' 1</span>
</code></pre>
<p>\u5BF9\u4E8E\u4EE5\u4E0A\u4EE3\u7801\u4F60\u53EF\u80FD\u4F1A\u6709\u7591\u60D1\uFF0C\u8BA9\u6211\u6765\u89E3\u91CA\u4E0B\u539F\u56E0</p>
<ul>
<li>\u9996\u5148\u51FD\u6570 <code>b</code> \u5148\u6267\u884C\uFF0C\u5728\u6267\u884C\u5230 <code>await 10</code> \u4E4B\u524D\u53D8\u91CF <code>a</code> \u8FD8\u662F 0\uFF0C\u56E0\u4E3A <code>await</code> \u5185\u90E8\u5B9E\u73B0\u4E86 <code>generator</code> \uFF0C<code>generator</code> \u4F1A\u4FDD\u7559\u5806\u6808\u4E2D\u4E1C\u897F\uFF0C\u6240\u4EE5\u8FD9\u65F6\u5019 <code>a = 0</code> \u88AB\u4FDD\u5B58\u4E86\u4E0B\u6765</li>
<li>\u56E0\u4E3A <code>await</code> \u662F\u5F02\u6B65\u64CD\u4F5C\uFF0C\u540E\u6765\u7684\u8868\u8FBE\u5F0F\u4E0D\u8FD4\u56DE <code>Promise</code> \u7684\u8BDD\uFF0C\u5C31\u4F1A\u5305\u88C5\u6210 <code>Promise.reslove(\u8FD4\u56DE\u503C)</code>\uFF0C\u7136\u540E\u4F1A\u53BB\u6267\u884C\u51FD\u6570\u5916\u7684\u540C\u6B65\u4EE3\u7801</li>
<li>\u540C\u6B65\u4EE3\u7801\u6267\u884C\u5B8C\u6BD5\u540E\u5F00\u59CB\u6267\u884C\u5F02\u6B65\u4EE3\u7801\uFF0C\u5C06\u4FDD\u5B58\u4E0B\u6765\u7684\u503C\u62FF\u51FA\u6765\u4F7F\u7528\uFF0C\u8FD9\u65F6\u5019 <code>a = 0 + 10</code></li>
</ul>
<p>\u4E0A\u8FF0\u89E3\u91CA\u4E2D\u63D0\u5230\u4E86 <code>await</code> \u5185\u90E8\u5B9E\u73B0\u4E86 <code>generator</code>\uFF0C\u5176\u5B9E <code>await</code> \u5C31\u662F <code>generator</code> \u52A0\u4E0A <code>Promise</code> \u7684\u8BED\u6CD5\u7CD6\uFF0C\u4E14\u5185\u90E8\u5B9E\u73B0\u4E86\u81EA\u52A8\u6267\u884C <code>generator</code>\u3002\u5982\u679C\u4F60\u719F\u6089 co \u7684\u8BDD\uFF0C\u5176\u5B9E\u81EA\u5DF1\u5C31\u53EF\u4EE5\u5B9E\u73B0\u8FD9\u6837\u7684\u8BED\u6CD5\u7CD6\u3002</p>
<h2 data-id="heading-6">\u5E38\u7528\u5B9A\u65F6\u5668\u51FD\u6570</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1AsetTimeout\u3001setInterval\u3001requestAnimationFrame \u5404\u6709\u4EC0\u4E48\u7279\u70B9\uFF1F
</code></pre>
<p>\u5F02\u6B65\u7F16\u7A0B\u5F53\u7136\u5C11\u4E0D\u4E86\u5B9A\u65F6\u5668\u4E86\uFF0C\u5E38\u89C1\u7684\u5B9A\u65F6\u5668\u51FD\u6570\u6709 <code>setTimeout</code>\u3001<code>setInterval</code>\u3001<code>requestAnimationFrame</code>\u3002\u6211\u4EEC\u5148\u6765\u8BB2\u8BB2\u6700\u5E38\u7528\u7684<code>setTimeout</code>\uFF0C\u5F88\u591A\u4EBA\u8BA4\u4E3A <code>setTimeout</code> \u662F\u5EF6\u65F6\u591A\u4E45\uFF0C\u90A3\u5C31\u5E94\u8BE5\u662F\u591A\u4E45\u540E\u6267\u884C\u3002</p>
<p>\u5176\u5B9E\u8FD9\u4E2A\u89C2\u70B9\u662F\u9519\u8BEF\u7684\uFF0C\u56E0\u4E3A JS \u662F\u5355\u7EBF\u7A0B\u6267\u884C\u7684\uFF0C\u5982\u679C\u524D\u9762\u7684\u4EE3\u7801\u5F71\u54CD\u4E86\u6027\u80FD\uFF0C\u5C31\u4F1A\u5BFC\u81F4 <code>setTimeout</code> \u4E0D\u4F1A\u6309\u671F\u6267\u884C\u3002\u5F53\u7136\u4E86\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EE3\u7801\u53BB\u4FEE\u6B63 <code>setTimeout</code>\uFF0C\u4ECE\u800C\u4F7F\u5B9A\u65F6\u5668\u76F8\u5BF9\u51C6\u786E</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">let</span> period = <span class="hljs-number">60</span> * <span class="hljs-number">1000</span> * <span class="hljs-number">60</span> * <span class="hljs-number">2</span>
<span class="hljs-keyword">let</span> startTime = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().getTime()
<span class="hljs-keyword">let</span> count = <span class="hljs-number">0</span>
<span class="hljs-keyword">let</span> end = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().getTime() + period
<span class="hljs-keyword">let</span> interval = <span class="hljs-number">1000</span>
<span class="hljs-keyword">let</span> currentInterval = interval

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">loop</span>(<span class="hljs-params"></span>) </span>{
  count++
  <span class="hljs-comment">// \u4EE3\u7801\u6267\u884C\u6240\u6D88\u8017\u7684\u65F6\u95F4</span>
  <span class="hljs-keyword">let</span> offset = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().getTime() - (startTime + count * interval);
  <span class="hljs-keyword">let</span> diff = end - <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().getTime()
  <span class="hljs-keyword">let</span> h = <span class="hljs-built_in">Math</span>.floor(diff / (<span class="hljs-number">60</span> * <span class="hljs-number">1000</span> * <span class="hljs-number">60</span>))
  <span class="hljs-keyword">let</span> hdiff = diff % (<span class="hljs-number">60</span> * <span class="hljs-number">1000</span> * <span class="hljs-number">60</span>)
  <span class="hljs-keyword">let</span> m = <span class="hljs-built_in">Math</span>.floor(hdiff / (<span class="hljs-number">60</span> * <span class="hljs-number">1000</span>))
  <span class="hljs-keyword">let</span> mdiff = hdiff % (<span class="hljs-number">60</span> * <span class="hljs-number">1000</span>)
  <span class="hljs-keyword">let</span> s = mdiff / (<span class="hljs-number">1000</span>)
  <span class="hljs-keyword">let</span> sCeil = <span class="hljs-built_in">Math</span>.ceil(s)
  <span class="hljs-keyword">let</span> sFloor = <span class="hljs-built_in">Math</span>.floor(s)
  <span class="hljs-comment">// \u5F97\u5230\u4E0B\u4E00\u6B21\u5FAA\u73AF\u6240\u6D88\u8017\u7684\u65F6\u95F4</span>
  currentInterval = interval - offset 
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'\u65F6\uFF1A'</span>+h, <span class="hljs-string">'\u5206\uFF1A'</span>+m, <span class="hljs-string">'\u6BEB\u79D2\uFF1A'</span>+s, <span class="hljs-string">'\u79D2\u5411\u4E0A\u53D6\u6574\uFF1A'</span>+sCeil, <span class="hljs-string">'\u4EE3\u7801\u6267\u884C\u65F6\u95F4\uFF1A'</span>+offset, <span class="hljs-string">'\u4E0B\u6B21\u5FAA\u73AF\u95F4\u9694'</span>+currentInterval) 

  <span class="hljs-built_in">setTimeout</span>(loop, currentInterval)
}

<span class="hljs-built_in">setTimeout</span>(loop, currentInterval)
</code></pre>
<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u770B <code>setInterval</code>\uFF0C\u5176\u5B9E\u8FD9\u4E2A\u51FD\u6570\u4F5C\u7528\u548C <code>setTimeout</code> \u57FA\u672C\u4E00\u81F4\uFF0C\u53EA\u662F\u8BE5\u51FD\u6570\u662F\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u6267\u884C\u4E00\u6B21\u56DE\u8C03\u51FD\u6570\u3002</p>
<p>\u901A\u5E38\u6765\u8BF4\u4E0D\u5EFA\u8BAE\u4F7F\u7528 <code>setInterval</code>\u3002\u7B2C\u4E00\uFF0C\u5B83\u548C <code>setTimeout</code> \u4E00\u6837\uFF0C\u4E0D\u80FD\u4FDD\u8BC1\u5728\u9884\u671F\u7684\u65F6\u95F4\u6267\u884C\u4EFB\u52A1\u3002\u7B2C\u4E8C\uFF0C\u5B83\u5B58\u5728\u6267\u884C\u7D2F\u79EF\u7684\u95EE\u9898\uFF0C\u8BF7\u770B\u4EE5\u4E0B\u4F2A\u4EE3\u7801</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">demo</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-built_in">setInterval</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">2</span>)
  },<span class="hljs-number">1000</span>)
  sleep(<span class="hljs-number">2000</span>)
}
demo()
</code></pre>
<p>\u4EE5\u4E0A\u4EE3\u7801\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\uFF0C\u5982\u679C\u5B9A\u65F6\u5668\u6267\u884C\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u4E86\u8017\u65F6\u64CD\u4F5C\uFF0C\u591A\u4E2A\u56DE\u8C03\u51FD\u6570\u4F1A\u5728\u8017\u65F6\u64CD\u4F5C\u7ED3\u675F\u4EE5\u540E\u540C\u65F6\u6267\u884C\uFF0C\u8FD9\u6837\u53EF\u80FD\u5C31\u4F1A\u5E26\u6765\u6027\u80FD\u4E0A\u7684\u95EE\u9898\u3002</p>
<p>\u5982\u679C\u4F60\u6709\u5FAA\u73AF\u5B9A\u65F6\u5668\u7684\u9700\u6C42\uFF0C\u5176\u5B9E\u5B8C\u5168\u53EF\u4EE5\u901A\u8FC7 <code>requestAnimationFrame</code> \u6765\u5B9E\u73B0</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setInterval</span>(<span class="hljs-params">callback, interval</span>) </span>{
  <span class="hljs-keyword">let</span> timer
  <span class="hljs-keyword">const</span> now = <span class="hljs-built_in">Date</span>.now
  <span class="hljs-keyword">let</span> startTime = now()
  <span class="hljs-keyword">let</span> endTime = startTime
  <span class="hljs-keyword">const</span> loop = <span class="hljs-function">() =&gt;</span> {
    timer = <span class="hljs-built_in">window</span>.requestAnimationFrame(loop)
    endTime = now()
    <span class="hljs-keyword">if</span> (endTime - startTime &gt;= interval) {
      startTime = endTime = now()
      callback(timer)
    }
  }
  timer = <span class="hljs-built_in">window</span>.requestAnimationFrame(loop)
  <span class="hljs-keyword">return</span> timer
}

<span class="hljs-keyword">let</span> a = <span class="hljs-number">0</span>
<span class="hljs-built_in">setInterval</span>(<span class="hljs-function"><span class="hljs-params">timer</span> =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(<span class="hljs-number">1</span>)
  a++
  <span class="hljs-keyword">if</span> (a === <span class="hljs-number">3</span>) cancelAnimationFrame(timer)
}, <span class="hljs-number">1000</span>)
</code></pre>
<p>\u9996\u5148 <code>requestAnimationFrame</code> \u81EA\u5E26\u51FD\u6570\u8282\u6D41\u529F\u80FD\uFF0C\u57FA\u672C\u53EF\u4EE5\u4FDD\u8BC1\u5728 16.6 \u6BEB\u79D2\u5185\u53EA\u6267\u884C\u4E00\u6B21\uFF08\u4E0D\u6389\u5E27\u7684\u60C5\u51B5\u4E0B\uFF09\uFF0C\u5E76\u4E14\u8BE5\u51FD\u6570\u7684\u5EF6\u65F6\u6548\u679C\u662F\u7CBE\u786E\u7684\uFF0C\u6CA1\u6709\u5176\u4ED6\u5B9A\u65F6\u5668\u65F6\u95F4\u4E0D\u51C6\u7684\u95EE\u9898\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8BE5\u51FD\u6570\u6765\u5B9E\u73B0 <code>setTimeout</code>\u3002</p>
<h2 data-id="heading-7">\u5C0F\u7ED3</h2>
<p>\u5F02\u6B65\u7F16\u7A0B\u662F JS \u4E2D\u8F83\u96BE\u638C\u63E1\u7684\u5185\u5BB9\uFF0C\u540C\u65F6\u4E5F\u662F\u5F88\u91CD\u8981\u7684\u77E5\u8BC6\u70B9\u3002\u4EE5\u4E0A\u63D0\u5230\u7684\u6BCF\u4E2A\u77E5\u8BC6\u70B9\u5176\u5B9E\u90FD\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u9053\u9762\u8BD5\u9898\uFF0C\u5E0C\u671B\u5927\u5BB6\u53EF\u4EE5\u597D\u597D\u638C\u63E1\u4EE5\u4E0A\u5185\u5BB9\u5982\u679C\u5927\u5BB6\u5BF9\u4E8E\u8FD9\u4E2A\u7AE0\u8282\u7684\u5185\u5BB9\u5B58\u5728\u7591\u95EE\uFF0C\u6B22\u8FCE\u5728\u8BC4\u8BBA\u533A\u4E0E\u6211\u4E92\u52A8\u3002</p>
<pre><code class="hljs language-!" lang="!">\u5F02\u6B65\u7F16\u7A0B\u76F8\u5173\u5185\u5BB9\u5E76\u975E\u4E00\u7AE0\u8282\u5C31\u80FD\u8BB2\u5B8C\uFF0C\u9700\u8981\u7EE7\u7EED\u6D4F\u89C8\u540E\u7EED\u7AE0\u8282\u3002
</code></pre><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
