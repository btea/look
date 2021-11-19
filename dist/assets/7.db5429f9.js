var s={name:"Event Loop",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h1 data-id="heading-0">Event Loop</h1>
<p>\u5728\u524D\u4E24\u7AE0\u8282\u4E2D\u6211\u4EEC\u4E86\u89E3\u4E86 JS \u5F02\u6B65\u76F8\u5173\u7684\u77E5\u8BC6\u3002\u5728\u5B9E\u8DF5\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F60\u662F\u5426\u9047\u5230\u8FC7\u4EE5\u4E0B\u573A\u666F\uFF0C\u4E3A\u4EC0\u4E48 <code>setTimeout</code> \u4F1A\u6BD4 <code>Promise</code> \u540E\u6267\u884C\uFF0C\u660E\u660E\u4EE3\u7801\u5199\u5728 <code>Promise</code> \u4E4B\u524D\u3002\u8FD9\u5176\u5B9E\u6D89\u53CA\u5230\u4E86 Event Loop  \u76F8\u5173\u7684\u77E5\u8BC6\uFF0C\u8FD9\u4E00\u7AE0\u8282\u6211\u4EEC\u4F1A\u6765\u8BE6\u7EC6\u5730\u4E86\u89E3 Event Loop  \u76F8\u5173\u77E5\u8BC6\uFF0C\u77E5\u9053 JS \u5F02\u6B65\u8FD0\u884C\u4EE3\u7801\u7684\u539F\u7406\uFF0C\u5E76\u4E14\u8FD9\u4E00\u7AE0\u8282\u4E5F\u662F\u9762\u8BD5\u5E38\u8003\u77E5\u8BC6\u70B9\u3002</p>
<h2 data-id="heading-1">\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B\u533A\u522B\uFF1FJS \u5355\u7EBF\u7A0B\u5E26\u6765\u7684\u597D\u5904\uFF1F
</code></pre>
<p>\u76F8\u4FE1\u5927\u5BB6\u7ECF\u5E38\u4F1A\u542C\u5230 JS \u662F<strong>\u5355\u7EBF\u7A0B</strong>\u6267\u884C\u7684\uFF0C\u4F46\u662F\u4F60\u662F\u5426\u7591\u60D1\u8FC7\u4EC0\u4E48\u662F\u7EBF\u7A0B\uFF1F</p>
<p>\u8BB2\u5230\u7EBF\u7A0B\uFF0C\u90A3\u4E48\u80AF\u5B9A\u4E5F\u5F97\u8BF4\u4E00\u4E0B\u8FDB\u7A0B\u3002\u672C\u8D28\u4E0A\u6765\u8BF4\uFF0C\u4E24\u4E2A\u540D\u8BCD\u90FD\u662F CPU <strong>\u5DE5\u4F5C\u65F6\u95F4\u7247</strong>\u7684\u4E00\u4E2A\u63CF\u8FF0\u3002</p>
<p>\u8FDB\u7A0B\u63CF\u8FF0\u4E86 CPU \u5728<strong>\u8FD0\u884C\u6307\u4EE4\u53CA\u52A0\u8F7D\u548C\u4FDD\u5B58\u4E0A\u4E0B\u6587\u6240\u9700\u7684\u65F6\u95F4</strong>\uFF0C\u653E\u5728\u5E94\u7528\u4E0A\u6765\u8BF4\u5C31\u4EE3\u8868\u4E86\u4E00\u4E2A\u7A0B\u5E8F\u3002\u7EBF\u7A0B\u662F\u8FDB\u7A0B\u4E2D\u7684\u66F4\u5C0F\u5355\u4F4D\uFF0C\u63CF\u8FF0\u4E86\u6267\u884C\u4E00\u6BB5\u6307\u4EE4\u6240\u9700\u7684\u65F6\u95F4\u3002</p>
<p>\u628A\u8FD9\u4E9B\u6982\u5FF5\u62FF\u5230\u6D4F\u89C8\u5668\u4E2D\u6765\u8BF4\uFF0C\u5F53\u4F60\u6253\u5F00\u4E00\u4E2A Tab \u9875\u65F6\uFF0C\u5176\u5B9E\u5C31\u662F\u521B\u5EFA\u4E86\u4E00\u4E2A\u8FDB\u7A0B\uFF0C\u4E00\u4E2A\u8FDB\u7A0B\u4E2D\u53EF\u4EE5\u6709\u591A\u4E2A\u7EBF\u7A0B\uFF0C\u6BD4\u5982\u6E32\u67D3\u7EBF\u7A0B\u3001JS \u5F15\u64CE\u7EBF\u7A0B\u3001HTTP \u8BF7\u6C42\u7EBF\u7A0B\u7B49\u7B49\u3002\u5F53\u4F60\u53D1\u8D77\u4E00\u4E2A\u8BF7\u6C42\u65F6\uFF0C\u5176\u5B9E\u5C31\u662F\u521B\u5EFA\u4E86\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u5F53\u8BF7\u6C42\u7ED3\u675F\u540E\uFF0C\u8BE5\u7EBF\u7A0B\u53EF\u80FD\u5C31\u4F1A\u88AB\u9500\u6BC1\u3002</p>
<p>\u4E0A\u6587\u8BF4\u5230\u4E86 JS \u5F15\u64CE\u7EBF\u7A0B\u548C\u6E32\u67D3\u7EBF\u7A0B\uFF0C\u5927\u5BB6\u5E94\u8BE5\u90FD\u77E5\u9053\uFF0C\u5728 JS \u8FD0\u884C\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u963B\u6B62 UI \u6E32\u67D3\uFF0C\u8FD9\u8BF4\u660E\u4E86\u4E24\u4E2A\u7EBF\u7A0B\u662F<strong>\u4E92\u65A5</strong>\u7684\u3002\u8FD9\u5176\u4E2D\u7684\u539F\u56E0\u662F\u56E0\u4E3A JS \u53EF\u4EE5\u4FEE\u6539 DOM\uFF0C\u5982\u679C\u5728 JS \u6267\u884C\u7684\u65F6\u5019 UI \u7EBF\u7A0B\u8FD8\u5728\u5DE5\u4F5C\uFF0C\u5C31\u53EF\u80FD\u5BFC\u81F4\u4E0D\u80FD\u5B89\u5168\u7684\u6E32\u67D3 UI\u3002\u8FD9\u5176\u5B9E\u4E5F\u662F\u4E00\u4E2A\u5355\u7EBF\u7A0B\u7684\u597D\u5904\uFF0C\u5F97\u76CA\u4E8E JS \u662F\u5355\u7EBF\u7A0B\u8FD0\u884C\u7684\uFF0C\u53EF\u4EE5\u8FBE\u5230\u8282\u7701\u5185\u5B58\uFF0C\u8282\u7EA6\u4E0A\u4E0B\u6587\u5207\u6362\u65F6\u95F4\uFF0C\u6CA1\u6709\u9501\u7684\u95EE\u9898\u7684\u597D\u5904\u3002\u5F53\u7136\u524D\u9762\u4E24\u70B9\u5728\u670D\u52A1\u7AEF\u4E2D\u66F4\u5BB9\u6613\u4F53\u73B0\uFF0C\u5BF9\u4E8E\u9501\u7684\u95EE\u9898\uFF0C\u5F62\u8C61\u7684\u6765\u8BF4\u5C31\u662F\u5F53\u6211\u8BFB\u53D6\u4E00\u4E2A\u6570\u5B57 15 \u7684\u65F6\u5019\uFF0C\u540C\u65F6\u6709\u4E24\u4E2A\u64CD\u4F5C\u5BF9\u6570\u5B57\u8FDB\u884C\u4E86\u52A0\u51CF\uFF0C\u8FD9\u65F6\u5019\u7ED3\u679C\u5C31\u51FA\u73B0\u4E86\u9519\u8BEF\u3002\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u4E5F\u4E0D\u96BE\uFF0C\u53EA\u9700\u8981\u5728\u8BFB\u53D6\u7684\u65F6\u5019\u52A0\u9501\uFF0C\u76F4\u5230\u8BFB\u53D6\u5B8C\u6BD5\u4E4B\u524D\u90FD\u4E0D\u80FD\u8FDB\u884C\u5199\u5165\u64CD\u4F5C\u3002</p>
<h2 data-id="heading-2">\u6267\u884C\u6808</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u4EC0\u4E48\u662F\u6267\u884C\u6808\uFF1F
</code></pre>
<p>\u53EF\u4EE5\u628A\u6267\u884C\u6808\u8BA4\u4E3A\u662F\u4E00\u4E2A\u5B58\u50A8\u51FD\u6570\u8C03\u7528\u7684<strong>\u6808\u7ED3\u6784</strong>\uFF0C\u9075\u5FAA\u5148\u8FDB\u540E\u51FA\u7684\u539F\u5219\u3002</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/13/1670d2d20ead32ec~tplv-t2oaga2asx-watermark.awebp" alt="" title="\u6267\u884C\u6808\u53EF\u89C6\u5316" loading="lazy" class="medium-zoom-image"></p>
<p>\u5F53\u5F00\u59CB\u6267\u884C JS \u4EE3\u7801\u65F6\uFF0C\u9996\u5148\u4F1A\u6267\u884C\u4E00\u4E2A <code>main</code> \u51FD\u6570\uFF0C\u7136\u540E\u6267\u884C\u6211\u4EEC\u7684\u4EE3\u7801\u3002\u6839\u636E\u5148\u8FDB\u540E\u51FA\u7684\u539F\u5219\uFF0C\u540E\u6267\u884C\u7684\u51FD\u6570\u4F1A\u5148\u5F39\u51FA\u6808\uFF0C\u5728\u56FE\u4E2D\u6211\u4EEC\u4E5F\u53EF\u4EE5\u53D1\u73B0\uFF0C<code>foo</code> \u51FD\u6570\u540E\u6267\u884C\uFF0C\u5F53\u6267\u884C\u5B8C\u6BD5\u540E\u5C31\u4ECE\u6808\u4E2D\u5F39\u51FA\u4E86\u3002</p>
<p>\u5E73\u65F6\u5728\u5F00\u53D1\u4E2D\uFF0C\u5927\u5BB6\u4E5F\u53EF\u4EE5\u5728\u62A5\u9519\u4E2D\u627E\u5230\u6267\u884C\u6808\u7684\u75D5\u8FF9</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">'error'</span>)
}
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) </span>{
  foo()
}
bar()
</code></pre>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/13/1670c0e21540090c~tplv-t2oaga2asx-watermark.awebp" alt="" title="\u51FD\u6570\u6267\u884C\u987A\u5E8F" loading="lazy" class="medium-zoom-image"></p>
<p>\u5927\u5BB6\u53EF\u4EE5\u5728\u4E0A\u56FE\u6E05\u6670\u7684\u770B\u5230\u62A5\u9519\u5728 <code>foo</code> \u51FD\u6570\uFF0C<code>foo</code> \u51FD\u6570\u53C8\u662F\u5728 <code>bar</code> \u51FD\u6570\u4E2D\u8C03\u7528\u7684\u3002</p>
<p>\u5F53\u6211\u4EEC\u4F7F\u7528\u9012\u5F52\u7684\u65F6\u5019\uFF0C\u56E0\u4E3A\u6808\u53EF\u5B58\u653E\u7684\u51FD\u6570\u662F\u6709<strong>\u9650\u5236</strong>\u7684\uFF0C\u4E00\u65E6\u5B58\u653E\u4E86\u8FC7\u591A\u7684\u51FD\u6570\u4E14\u6CA1\u6709\u5F97\u5230\u91CA\u653E\u7684\u8BDD\uFF0C\u5C31\u4F1A\u51FA\u73B0\u7206\u6808\u7684\u95EE\u9898</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) </span>{
  bar()
}
bar()
</code></pre>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/13/1670c128acce975f~tplv-t2oaga2asx-watermark.awebp" alt="" title="\u7206\u6808" loading="lazy" class="medium-zoom-image"></p>
<h2 data-id="heading-3">\u6D4F\u89C8\u5668\u4E2D\u7684 Event Loop</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u5F02\u6B65\u4EE3\u7801\u6267\u884C\u987A\u5E8F\uFF1F\u89E3\u91CA\u4E00\u4E0B\u4EC0\u4E48\u662F Event Loop \uFF1F
</code></pre>
<p>\u4E0A\u4E00\u5C0F\u8282\u6211\u4EEC\u8BB2\u5230\u4E86\u4EC0\u4E48\u662F\u6267\u884C\u6808\uFF0C\u5927\u5BB6\u4E5F\u77E5\u9053\u4E86\u5F53\u6211\u4EEC\u6267\u884C JS \u4EE3\u7801\u7684\u65F6\u5019\u5176\u5B9E\u5C31\u662F\u5F80\u6267\u884C\u6808\u4E2D\u653E\u5165\u51FD\u6570\uFF0C\u90A3\u4E48\u9047\u5230\u5F02\u6B65\u4EE3\u7801\u7684\u65F6\u5019\u8BE5\u600E\u4E48\u529E\uFF1F\u5176\u5B9E\u5F53\u9047\u5230\u5F02\u6B65\u7684\u4EE3\u7801\u65F6\uFF0C\u4F1A\u88AB<strong>\u6302\u8D77</strong>\u5E76\u5728\u9700\u8981\u6267\u884C\u7684\u65F6\u5019\u52A0\u5165\u5230 Task\uFF08\u6709\u591A\u79CD Task\uFF09 \u961F\u5217\u4E2D\u3002\u4E00\u65E6\u6267\u884C\u6808\u4E3A\u7A7A\uFF0CEvent Loop \u5C31\u4F1A\u4ECE Task \u961F\u5217\u4E2D\u62FF\u51FA\u9700\u8981\u6267\u884C\u7684\u4EE3\u7801\u5E76\u653E\u5165\u6267\u884C\u6808\u4E2D\u6267\u884C\uFF0C\u6240\u4EE5\u672C\u8D28\u4E0A\u6765\u8BF4 JS \u4E2D\u7684\u5F02\u6B65\u8FD8\u662F\u540C\u6B65\u884C\u4E3A\u3002</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/23/16740fa4cd9c6937~tplv-t2oaga2asx-watermark.awebp" alt="" title="\u4E8B\u4EF6\u5FAA\u73AF" loading="lazy" class="medium-zoom-image"></p>
<p>\u4E0D\u540C\u7684\u4EFB\u52A1\u6E90\u4F1A\u88AB\u5206\u914D\u5230\u4E0D\u540C\u7684 Task \u961F\u5217\u4E2D\uFF0C\u4EFB\u52A1\u6E90\u53EF\u4EE5\u5206\u4E3A <strong>\u5FAE\u4EFB\u52A1</strong>\uFF08microtask\uFF09 \u548C <strong>\u5B8F\u4EFB\u52A1</strong>\uFF08macrotask\uFF09\u3002\u5728 ES6 \u89C4\u8303\u4E2D\uFF0Cmicrotask \u79F0\u4E3A <code>jobs</code>\uFF0Cmacrotask \u79F0\u4E3A <code>task</code>\u3002\u4E0B\u9762\u6765\u770B\u4EE5\u4E0B\u4EE3\u7801\u7684\u6267\u884C\u987A\u5E8F\uFF1A</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-built_in">console</span>.log(<span class="hljs-string">'script start'</span>)

<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">async1</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">await</span> async2()
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'async1 end'</span>)
}
<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">async2</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'async2 end'</span>)
}
async1()

<span class="hljs-built_in">setTimeout</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'setTimeout'</span>)
}, <span class="hljs-number">0</span>)

<span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-params">resolve</span> =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Promise'</span>)
  resolve()
})
  .then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'promise1'</span>)
  })
  .then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'promise2'</span>)
  })

<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'script end'</span>)
<span class="hljs-comment">// script start =&gt; async2 end =&gt; Promise =&gt; script end =&gt; promise1 =&gt; promise2 =&gt; async1 end =&gt; setTimeout</span>
</code></pre>
<pre><code class="hljs language-!" lang="!">\u6CE8\u610F\uFF1A\u65B0\u7684\u6D4F\u89C8\u5668\u4E2D\u4E0D\u662F\u5982\u4E0A\u6253\u5370\u7684\uFF0C\u56E0\u4E3A await \u53D8\u5FEB\u4E86\uFF0C\u5177\u4F53\u5185\u5BB9\u53EF\u4EE5\u5F80\u4E0B\u770B
</code></pre>
<p>\u9996\u5148\u5148\u6765\u89E3\u91CA\u4E0B\u4E0A\u8FF0\u4EE3\u7801\u7684 <code>async</code> \u548C <code>await</code> \u7684\u6267\u884C\u987A\u5E8F\u3002\u5F53\u6211\u4EEC\u8C03\u7528 <code>async1</code> \u51FD\u6570\u65F6\uFF0C\u4F1A\u9A6C\u4E0A\u8F93\u51FA <code>async2 end</code>\uFF0C\u5E76\u4E14\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A <code>Promise</code>\uFF0C\u63A5\u4E0B\u6765\u5728\u9047\u5230 <code>await</code>\u7684\u65F6\u5019\u4F1A\u5C31\u8BA9\u51FA\u7EBF\u7A0B\u5F00\u59CB\u6267\u884C <code>async1</code> \u5916\u7684\u4EE3\u7801\uFF0C\u6240\u4EE5\u6211\u4EEC\u5B8C\u5168\u53EF\u4EE5\u628A <code>await</code> \u770B\u6210\u662F<strong>\u8BA9\u51FA\u7EBF\u7A0B</strong>\u7684\u6807\u5FD7\u3002</p>
<p>\u7136\u540E\u5F53\u540C\u6B65\u4EE3\u7801\u5168\u90E8\u6267\u884C\u5B8C\u6BD5\u4EE5\u540E\uFF0C\u5C31\u4F1A\u53BB\u6267\u884C\u6240\u6709\u7684\u5F02\u6B65\u4EE3\u7801\uFF0C\u90A3\u4E48\u53C8\u4F1A\u56DE\u5230 <code>await</code> \u7684\u4F4D\u7F6E\u6267\u884C\u8FD4\u56DE\u7684 <code>Promise</code> \u7684 <code>resolve</code> \u51FD\u6570\uFF0C\u8FD9\u53C8\u4F1A\u628A <code>resolve</code> \u4E22\u5230\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\uFF0C\u63A5\u4E0B\u6765\u53BB\u6267\u884C <code>then</code> \u4E2D\u7684\u56DE\u8C03\uFF0C\u5F53\u4E24\u4E2A <code>then</code> \u4E2D\u7684\u56DE\u8C03\u5168\u90E8\u6267\u884C\u5B8C\u6BD5\u4EE5\u540E\uFF0C\u53C8\u4F1A\u56DE\u5230 <code>await</code> \u7684\u4F4D\u7F6E\u5904\u7406\u8FD4\u56DE\u503C\uFF0C\u8FD9\u65F6\u5019\u4F60\u53EF\u4EE5\u770B\u6210\u662F <code>Promise.resolve(\u8FD4\u56DE\u503C).then()</code>\uFF0C\u7136\u540E <code>await</code> \u540E\u7684\u4EE3\u7801\u5168\u90E8\u88AB\u5305\u88F9\u8FDB\u4E86 <code>then</code> \u7684\u56DE\u8C03\u4E2D\uFF0C\u6240\u4EE5 <code>console.log('async1 end')</code> \u4F1A\u4F18\u5148\u6267\u884C\u4E8E <code>setTimeout</code>\u3002</p>
<p>\u5982\u679C\u4F60\u89C9\u5F97\u4E0A\u9762\u8FD9\u6BB5\u89E3\u91CA\u8FD8\u662F\u6709\u70B9\u7ED5\uFF0C\u90A3\u4E48\u6211\u628A <code>async</code> \u7684\u8FD9\u4E24\u4E2A\u51FD\u6570\u6539\u9020\u6210\u4F60\u4E00\u5B9A\u80FD\u7406\u89E3\u7684\u4EE3\u7801</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'async2 end'</span>)
  <span class="hljs-comment">// Promise.resolve() \u5C06\u4EE3\u7801\u63D2\u5165\u5FAE\u4EFB\u52A1\u961F\u5217\u5C3E\u90E8</span>
  <span class="hljs-comment">// resolve \u518D\u6B21\u63D2\u5165\u5FAE\u4EFB\u52A1\u961F\u5217\u5C3E\u90E8</span>
  resolve(<span class="hljs-built_in">Promise</span>.resolve())
}).then(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'async1 end'</span>)
})
</code></pre>
<p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C <code>await</code> \u540E\u9762\u8DDF\u7740 <code>Promise</code> \u7684\u8BDD\uFF0C<code>async1 end</code> \u9700\u8981\u7B49\u5F85\u4E09\u4E2A tick \u624D\u80FD\u6267\u884C\u5230\u3002\u90A3\u4E48\u5176\u5B9E\u8FD9\u4E2A\u6027\u80FD\u76F8\u5BF9\u6765\u8BF4\u8FD8\u662F\u7565\u6162\u7684\uFF0C\u6240\u4EE5 V8 \u56E2\u961F\u501F\u9274\u4E86 Node 8 \u4E2D\u7684\u4E00\u4E2A Bug\uFF0C\u5728\u5F15\u64CE\u5E95\u5C42\u5C06\u4E09\u6B21 tick \u51CF\u5C11\u5230\u4E86\u4E8C\u6B21 tick\u3002\u4F46\u662F\u8FD9\u79CD\u505A\u6CD5\u5176\u5B9E\u662F\u8FDD\u6CD5\u4E86\u89C4\u8303\u7684\uFF0C\u5F53\u7136\u89C4\u8303\u4E5F\u662F\u53EF\u4EE5\u66F4\u6539\u7684\uFF0C\u8FD9\u662F V8 \u56E2\u961F\u7684\u4E00\u4E2A <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Ftc39%2Fecma262%2Fpull%2F1250" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/tc39/ecma262/pull/1250" ref="nofollow noopener noreferrer">PR</a>\uFF0C\u76EE\u524D\u5DF2\u88AB\u540C\u610F\u8FD9\u79CD\u505A\u6CD5\u3002</p>
<p>\u6240\u4EE5 Event Loop \u6267\u884C\u987A\u5E8F\u5982\u4E0B\u6240\u793A\uFF1A</p>
<ul>
<li>\u9996\u5148\u6267\u884C\u540C\u6B65\u4EE3\u7801\uFF0C\u8FD9\u5C5E\u4E8E\u5B8F\u4EFB\u52A1</li>
<li>\u5F53\u6267\u884C\u5B8C\u6240\u6709\u540C\u6B65\u4EE3\u7801\u540E\uFF0C\u6267\u884C\u6808\u4E3A\u7A7A\uFF0C\u67E5\u8BE2\u662F\u5426\u6709\u5F02\u6B65\u4EE3\u7801\u9700\u8981\u6267\u884C</li>
<li>\u6267\u884C\u6240\u6709\u5FAE\u4EFB\u52A1</li>
<li>\u5F53\u6267\u884C\u5B8C\u6240\u6709\u5FAE\u4EFB\u52A1\u540E\uFF0C\u5982\u6709\u5FC5\u8981\u4F1A\u6E32\u67D3\u9875\u9762</li>
<li>\u7136\u540E\u5F00\u59CB\u4E0B\u4E00\u8F6E Event Loop\uFF0C\u6267\u884C\u5B8F\u4EFB\u52A1\u4E2D\u7684\u5F02\u6B65\u4EE3\u7801\uFF0C\u4E5F\u5C31\u662F <code>setTimeout</code> \u4E2D\u7684\u56DE\u8C03\u51FD\u6570</li>
</ul>
<p>\u6240\u4EE5\u4EE5\u4E0A\u4EE3\u7801\u867D\u7136 <code>setTimeout</code> \u5199\u5728 <code>Promise</code> \u4E4B\u524D\uFF0C\u4F46\u662F\u56E0\u4E3A <code>Promise</code> \u5C5E\u4E8E\u5FAE\u4EFB\u52A1\u800C <code>setTimeout</code> \u5C5E\u4E8E\u5B8F\u4EFB\u52A1\uFF0C\u6240\u4EE5\u4F1A\u6709\u4EE5\u4E0A\u7684\u6253\u5370\u3002</p>
<p>\u5FAE\u4EFB\u52A1\u5305\u62EC <code>process.nextTick</code> \uFF0C<code>promise</code> \uFF0C<code>MutationObserver</code>\uFF0C\u5176\u4E2D <code>process.nextTick</code> \u4E3A Node \u72EC\u6709\u3002</p>
<p>\u5B8F\u4EFB\u52A1\u5305\u62EC <code>script</code> \uFF0C <code>setTimeout</code> \uFF0C<code>setInterval</code> \uFF0C<code>setImmediate</code> \uFF0C<code>I/O</code> \uFF0C<code>UI rendering</code>\u3002</p>
<p>\u8FD9\u91CC\u5F88\u591A\u4EBA\u4F1A\u6709\u4E2A\u8BEF\u533A\uFF0C\u8BA4\u4E3A\u5FAE\u4EFB\u52A1\u5FEB\u4E8E\u5B8F\u4EFB\u52A1\uFF0C\u5176\u5B9E\u662F\u9519\u8BEF\u7684\u3002\u56E0\u4E3A\u5B8F\u4EFB\u52A1\u4E2D\u5305\u62EC\u4E86 <code>script</code> \uFF0C\u6D4F\u89C8\u5668\u4F1A<strong>\u5148\u6267\u884C\u4E00\u4E2A\u5B8F\u4EFB\u52A1</strong>\uFF0C\u63A5\u4E0B\u6765\u6709\u5F02\u6B65\u4EE3\u7801\u7684\u8BDD\u624D\u4F1A\u5148\u6267\u884C\u5FAE\u4EFB\u52A1\u3002</p>
<h2 data-id="heading-4">Node \u4E2D\u7684 Event Loop</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1ANode \u4E2D\u7684 Event Loop \u548C\u6D4F\u89C8\u5668\u4E2D\u7684\u6709\u4EC0\u4E48\u533A\u522B\uFF1Fprocess.nexttick \u6267\u884C\u987A\u5E8F\uFF1F
</code></pre>
<p>Node \u4E2D\u7684 Event Loop \u548C\u6D4F\u89C8\u5668\u4E2D\u7684\u662F\u5B8C\u5168\u4E0D\u76F8\u540C\u7684\u4E1C\u897F\u3002</p>
<p>Node \u7684 Event Loop \u5206\u4E3A 6 \u4E2A\u9636\u6BB5\uFF0C\u5B83\u4EEC\u4F1A\u6309\u7167<strong>\u987A\u5E8F</strong>\u53CD\u590D\u8FD0\u884C\u3002\u6BCF\u5F53\u8FDB\u5165\u67D0\u4E00\u4E2A\u9636\u6BB5\u7684\u65F6\u5019\uFF0C\u90FD\u4F1A\u4ECE\u5BF9\u5E94\u7684\u56DE\u8C03\u961F\u5217\u4E2D\u53D6\u51FA\u51FD\u6570\u53BB\u6267\u884C\u3002\u5F53\u961F\u5217\u4E3A\u7A7A\u6216\u8005\u6267\u884C\u7684\u56DE\u8C03\u51FD\u6570\u6570\u91CF\u5230\u8FBE\u7CFB\u7EDF\u8BBE\u5B9A\u7684\u9608\u503C\uFF0C\u5C31\u4F1A\u8FDB\u5165\u4E0B\u4E00\u9636\u6BB5\u3002</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/13/1670c3fe3f9a5e2b~tplv-t2oaga2asx-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<h3 data-id="heading-5">timer</h3>
<p>timers \u9636\u6BB5\u4F1A\u6267\u884C <code>setTimeout</code> \u548C <code>setInterval</code> \u56DE\u8C03\uFF0C\u5E76\u4E14\u662F\u7531 poll \u9636\u6BB5\u63A7\u5236\u7684\u3002</p>
<p>\u540C\u6837\uFF0C\u5728 Node \u4E2D\u5B9A\u65F6\u5668\u6307\u5B9A\u7684\u65F6\u95F4\u4E5F\u4E0D\u662F\u51C6\u786E\u65F6\u95F4\uFF0C\u53EA\u80FD\u662F<strong>\u5C3D\u5FEB</strong>\u6267\u884C\u3002</p>
<h3 data-id="heading-6">I/O</h3>
<p>I/O \u9636\u6BB5\u4F1A\u5904\u7406\u4E00\u4E9B\u4E0A\u4E00\u8F6E\u5FAA\u73AF\u4E2D\u7684<strong>\u5C11\u6570\u672A\u6267\u884C</strong>\u7684 I/O \u56DE\u8C03</p>
<h3 data-id="heading-7">idle, prepare</h3>
<p>idle, prepare \u9636\u6BB5\u5185\u90E8\u5B9E\u73B0\uFF0C\u8FD9\u91CC\u5C31\u5FFD\u7565\u4E0D\u8BB2\u4E86\u3002</p>
<h3 data-id="heading-8">poll</h3>
<p>poll \u662F\u4E00\u4E2A\u81F3\u5173\u91CD\u8981\u7684\u9636\u6BB5\uFF0C\u8FD9\u4E00\u9636\u6BB5\u4E2D\uFF0C\u7CFB\u7EDF\u4F1A\u505A\u4E24\u4EF6\u4E8B\u60C5</p>
<ol>
<li>\u56DE\u5230 timer \u9636\u6BB5\u6267\u884C\u56DE\u8C03</li>
<li>\u6267\u884C I/O \u56DE\u8C03</li>
</ol>
<p>\u5E76\u4E14\u5728\u8FDB\u5165\u8BE5\u9636\u6BB5\u65F6\u5982\u679C\u6CA1\u6709\u8BBE\u5B9A\u4E86 timer \u7684\u8BDD\uFF0C\u4F1A\u53D1\u751F\u4EE5\u4E0B\u4E24\u4EF6\u4E8B\u60C5</p>
<ul>
<li>\u5982\u679C poll \u961F\u5217\u4E0D\u4E3A\u7A7A\uFF0C\u4F1A\u904D\u5386\u56DE\u8C03\u961F\u5217\u5E76\u540C\u6B65\u6267\u884C\uFF0C\u76F4\u5230\u961F\u5217\u4E3A\u7A7A\u6216\u8005\u8FBE\u5230\u7CFB\u7EDF\u9650\u5236</li>
<li>\u5982\u679C poll \u961F\u5217\u4E3A\u7A7A\u65F6\uFF0C\u4F1A\u6709\u4E24\u4EF6\u4E8B\u53D1\u751F
<ul>
<li>\u5982\u679C\u6709 <code>setImmediate</code> \u56DE\u8C03\u9700\u8981\u6267\u884C\uFF0Cpoll \u9636\u6BB5\u4F1A\u505C\u6B62\u5E76\u4E14\u8FDB\u5165\u5230 check \u9636\u6BB5\u6267\u884C\u56DE\u8C03</li>
<li>\u5982\u679C\u6CA1\u6709 <code>setImmediate</code> \u56DE\u8C03\u9700\u8981\u6267\u884C\uFF0C\u4F1A\u7B49\u5F85\u56DE\u8C03\u88AB\u52A0\u5165\u5230\u961F\u5217\u4E2D\u5E76\u7ACB\u5373\u6267\u884C\u56DE\u8C03\uFF0C\u8FD9\u91CC\u540C\u6837\u4F1A\u6709\u4E2A\u8D85\u65F6\u65F6\u95F4\u8BBE\u7F6E\u9632\u6B62\u4E00\u76F4\u7B49\u5F85\u4E0B\u53BB</li>
</ul>
</li>
</ul>
<p>\u5F53\u7136\u8BBE\u5B9A\u4E86 timer \u7684\u8BDD\u4E14 poll \u961F\u5217\u4E3A\u7A7A\uFF0C\u5219\u4F1A\u5224\u65AD\u662F\u5426\u6709 timer \u8D85\u65F6\uFF0C\u5982\u679C\u6709\u7684\u8BDD\u4F1A\u56DE\u5230 timer \u9636\u6BB5\u6267\u884C\u56DE\u8C03\u3002</p>
<h3 data-id="heading-9">check</h3>
<p>check \u9636\u6BB5\u6267\u884C <code>setImmediate</code></p>
<h3 data-id="heading-10">close callbacks</h3>
<p>close callbacks \u9636\u6BB5\u6267\u884C close \u4E8B\u4EF6</p>
<p>\u5728\u4EE5\u4E0A\u7684\u5185\u5BB9\u4E2D\uFF0C\u6211\u4EEC\u4E86\u89E3\u4E86 Node \u4E2D\u7684 Event Loop \u7684\u6267\u884C\u987A\u5E8F\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u4F1A\u901A\u8FC7\u4EE3\u7801\u7684\u65B9\u5F0F\u6765\u6DF1\u5165\u7406\u89E3\u8FD9\u5757\u5185\u5BB9\u3002</p>
<p>\u9996\u5148\u5728\u6709\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5B9A\u65F6\u5668\u7684\u6267\u884C\u987A\u5E8F\u5176\u5B9E\u662F<strong>\u968F\u673A</strong>\u7684</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'setTimeout'</span>)
}, <span class="hljs-number">0</span>)
setImmediate(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'setImmediate'</span>)
})
</code></pre>
<p>\u5BF9\u4E8E\u4EE5\u4E0A\u4EE3\u7801\u6765\u8BF4\uFF0C<code>setTimeout</code> \u53EF\u80FD\u6267\u884C\u5728\u524D\uFF0C\u4E5F\u53EF\u80FD\u6267\u884C\u5728\u540E</p>
<ul>
<li>\u9996\u5148 <code>setTimeout(fn, 0) === setTimeout(fn, 1)</code>\uFF0C\u8FD9\u662F\u7531\u6E90\u7801\u51B3\u5B9A\u7684</li>
<li>\u8FDB\u5165\u4E8B\u4EF6\u5FAA\u73AF\u4E5F\u662F\u9700\u8981\u6210\u672C\u7684\uFF0C\u5982\u679C\u5728\u51C6\u5907\u65F6\u5019\u82B1\u8D39\u4E86\u5927\u4E8E 1ms \u7684\u65F6\u95F4\uFF0C\u90A3\u4E48\u5728 timer \u9636\u6BB5\u5C31\u4F1A\u76F4\u63A5\u6267\u884C <code>setTimeout</code> \u56DE\u8C03</li>
<li>\u90A3\u4E48\u5982\u679C\u51C6\u5907\u65F6\u95F4\u82B1\u8D39\u5C0F\u4E8E 1ms\uFF0C\u90A3\u4E48\u5C31\u662F <code>setImmediate</code> \u56DE\u8C03\u5148\u6267\u884C\u4E86</li>
</ul>
<p>\u5F53\u7136\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4ED6\u4EEC\u7684\u6267\u884C\u987A\u5E8F\u4E00\u5B9A\u662F\u56FA\u5B9A\u7684\uFF0C\u6BD4\u5982\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">'fs'</span>)

fs.readFile(__filename, <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timeout'</span>);
    }, <span class="hljs-number">0</span>)
    setImmediate(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'immediate'</span>)
    })
})
</code></pre>
<p>\u5728\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0C<code>setImmediate</code> \u6C38\u8FDC<strong>\u5148\u6267\u884C</strong>\u3002\u56E0\u4E3A\u4E24\u4E2A\u4EE3\u7801\u5199\u5728 IO \u56DE\u8C03\u4E2D\uFF0CIO \u56DE\u8C03\u662F\u5728 poll \u9636\u6BB5\u6267\u884C\uFF0C\u5F53\u56DE\u8C03\u6267\u884C\u5B8C\u6BD5\u540E\u961F\u5217\u4E3A\u7A7A\uFF0C\u53D1\u73B0\u5B58\u5728 <code>setImmediate</code> \u56DE\u8C03\uFF0C\u6240\u4EE5\u5C31\u76F4\u63A5\u8DF3\u8F6C\u5230 check \u9636\u6BB5\u53BB\u6267\u884C\u56DE\u8C03\u4E86\u3002</p>
<p>\u4E0A\u9762\u4ECB\u7ECD\u7684\u90FD\u662F macrotask \u7684\u6267\u884C\u60C5\u51B5\uFF0C\u5BF9\u4E8E microtask \u6765\u8BF4\uFF0C\u5B83\u4F1A\u5728\u4EE5\u4E0A\u6BCF\u4E2A\u9636\u6BB5\u5B8C\u6210\u524D<strong>\u6E05\u7A7A</strong> microtask \u961F\u5217\uFF0C\u4E0B\u56FE\u4E2D\u7684 Tick \u5C31\u4EE3\u8868\u4E86 microtask</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/14/16710fb80dd42d27~tplv-t2oaga2asx-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timer21'</span>)
}, <span class="hljs-number">0</span>)

<span class="hljs-built_in">Promise</span>.resolve().then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'promise1'</span>)
})
</code></pre>
<p>\u5BF9\u4E8E\u4EE5\u4E0A\u4EE3\u7801\u6765\u8BF4\uFF0C\u5176\u5B9E\u548C\u6D4F\u89C8\u5668\u4E2D\u7684\u8F93\u51FA\u662F\u4E00\u6837\u7684\uFF0Cmicrotask \u6C38\u8FDC\u6267\u884C\u5728 macrotask \u524D\u9762\u3002</p>
<p>\u6700\u540E\u6211\u4EEC\u6765\u8BB2\u8BB2 Node \u4E2D\u7684 <code>process.nextTick</code>\uFF0C\u8FD9\u4E2A\u51FD\u6570\u5176\u5B9E\u662F\u72EC\u7ACB\u4E8E Event Loop \u4E4B\u5916\u7684\uFF0C\u5B83\u6709\u4E00\u4E2A\u81EA\u5DF1\u7684\u961F\u5217\uFF0C\u5F53\u6BCF\u4E2A\u9636\u6BB5\u5B8C\u6210\u540E\uFF0C\u5982\u679C\u5B58\u5728 nextTick \u961F\u5217\uFF0C\u5C31\u4F1A<strong>\u6E05\u7A7A\u961F\u5217\u4E2D\u7684\u6240\u6709\u56DE\u8C03\u51FD\u6570</strong>\uFF0C\u5E76\u4E14\u4F18\u5148\u4E8E\u5176\u4ED6 microtask \u6267\u884C\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
 <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timer1'</span>)

 <span class="hljs-built_in">Promise</span>.resolve().then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
   <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'promise1'</span>)
 })
}, <span class="hljs-number">0</span>)

process.nextTick(<span class="hljs-function">() =&gt;</span> {
 <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'nextTick'</span>)
 process.nextTick(<span class="hljs-function">() =&gt;</span> {
   <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'nextTick'</span>)
   process.nextTick(<span class="hljs-function">() =&gt;</span> {
     <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'nextTick'</span>)
     process.nextTick(<span class="hljs-function">() =&gt;</span> {
       <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'nextTick'</span>)
     })
   })
 })
})
</code></pre>
<p>\u5BF9\u4E8E\u4EE5\u4E0A\u4EE3\u7801\uFF0C\u5927\u5BB6\u53EF\u4EE5\u53D1\u73B0\u65E0\u8BBA\u5982\u4F55\uFF0C\u6C38\u8FDC\u90FD\u662F\u5148\u628A nextTick \u5168\u90E8\u6253\u5370\u51FA\u6765\u3002</p>
<h2 data-id="heading-11">\u5C0F\u7ED3</h2>
<p>\u8FD9\u4E00\u7AE0\u8282\u6211\u4EEC\u5B66\u4E60\u4E86 JS \u5B9E\u73B0\u5F02\u6B65\u7684\u539F\u7406\uFF0C\u5E76\u4E14\u4E86\u89E3\u4E86\u5728\u6D4F\u89C8\u5668\u548C Node \u4E2D Event Loop \u5176\u5B9E\u662F\u4E0D\u76F8\u540C\u7684\u3002Event Loop \u8FD9\u4E2A\u77E5\u8BC6\u70B9\u5BF9\u4E8E\u6211\u4EEC\u7406\u89E3 JS \u662F\u5982\u4F55\u6267\u884C\u7684\u81F3\u5173\u91CD\u8981\uFF0C\u540C\u65F6\u4E5F\u662F\u5E38\u8003\u9898\u3002\u5982\u679C\u5927\u5BB6\u5BF9\u4E8E\u8FD9\u4E2A\u7AE0\u8282\u7684\u5185\u5BB9\u5B58\u5728\u7591\u95EE\uFF0C\u6B22\u8FCE\u5728\u8BC4\u8BBA\u533A\u4E0E\u6211\u4E92\u52A8\u3002</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
