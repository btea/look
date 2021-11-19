var s={name:"JS \u57FA\u7840\u77E5\u8BC6\u70B9\u53CA\u5E38\u8003\u9762\u8BD5\u9898\uFF08\u4E00\uFF09",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h1 data-id="heading-0">JS \u57FA\u7840\u77E5\u8BC6\u70B9\u53CA\u5E38\u8003\u9762\u8BD5\u9898\uFF08\u4E00\uFF09</h1>
<p>JS \u5BF9\u4E8E\u6BCF\u4F4D\u524D\u7AEF\u5F00\u53D1\u90FD\u662F\u5FC5\u5907\u6280\u80FD\uFF0C\u5728\u5C0F\u518C\u4E2D\u6211\u4EEC\u4E5F\u4F1A\u6709\u591A\u4E2A\u7AE0\u8282\u53BB\u8BB2\u8FF0\u8FD9\u90E8\u5206\u7684\u77E5\u8BC6\u3002\u9996\u5148\u6211\u4EEC\u5148\u6765\u719F\u6089\u4E0B JS \u7684\u4E00\u4E9B\u5E38\u8003\u548C\u5BB9\u6613\u6DF7\u4E71\u7684\u57FA\u7840\u77E5\u8BC6\u70B9\u3002</p>
<h2 data-id="heading-1">\u539F\u59CB\uFF08Primitive\uFF09\u7C7B\u578B</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u539F\u59CB\u7C7B\u578B\u6709\u54EA\u51E0\u79CD\uFF1Fnull \u662F\u5BF9\u8C61\u561B\uFF1F
</code></pre>
<p>\u5728 JS \u4E2D\uFF0C\u5B58\u5728\u7740 6 \u79CD\u539F\u59CB\u503C\uFF0C\u5206\u522B\u662F\uFF1A</p>
<ul>
<li><code>boolean</code></li>
<li><code>null</code></li>
<li><code>undefined</code></li>
<li><code>number</code></li>
<li><code>string</code></li>
<li><code>symbol</code></li>
</ul>
<p>\u9996\u5148\u539F\u59CB\u7C7B\u578B\u5B58\u50A8\u7684\u90FD\u662F\u503C\uFF0C\u662F\u6CA1\u6709\u51FD\u6570\u53EF\u4EE5\u8C03\u7528\u7684\uFF0C\u6BD4\u5982 <code>undefined.toString()</code></p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/14/16711c4f991c73ac~tplv-t2oaga2asx-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u6B64\u65F6\u4F60\u80AF\u5B9A\u4F1A\u6709\u7591\u95EE\uFF0C\u8FD9\u4E0D\u5BF9\u5440\uFF0C\u660E\u660E <code>'1'.toString()</code> \u662F\u53EF\u4EE5\u4F7F\u7528\u7684\u3002\u5176\u5B9E\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C<code>'1'</code> \u5DF2\u7ECF\u4E0D\u662F\u539F\u59CB\u7C7B\u578B\u4E86\uFF0C\u800C\u662F\u88AB\u5F3A\u5236\u8F6C\u6362\u6210\u4E86 <code>String</code> \u7C7B\u578B\u4E5F\u5C31\u662F\u5BF9\u8C61\u7C7B\u578B\uFF0C\u6240\u4EE5\u53EF\u4EE5\u8C03\u7528 <code>toString</code> \u51FD\u6570\u3002</p>
<p>\u9664\u4E86\u4F1A\u5728\u5FC5\u8981\u7684\u60C5\u51B5\u4E0B\u5F3A\u8F6C\u7C7B\u578B\u4EE5\u5916\uFF0C\u539F\u59CB\u7C7B\u578B\u8FD8\u6709\u4E00\u4E9B\u5751\u3002</p>
<p>\u5176\u4E2D JS \u7684 <code>number</code> \u7C7B\u578B\u662F\u6D6E\u70B9\u7C7B\u578B\u7684\uFF0C\u5728\u4F7F\u7528\u4E2D\u4F1A\u9047\u5230\u67D0\u4E9B Bug\uFF0C\u6BD4\u5982 <code>0.1 + 0.2 !== 0.3</code>\uFF0C\u4F46\u662F\u8FD9\u4E00\u5757\u7684\u5185\u5BB9\u4F1A\u5728\u8FDB\u9636\u90E8\u5206\u8BB2\u5230\u3002<code>string</code> \u7C7B\u578B\u662F\u4E0D\u53EF\u53D8\u7684\uFF0C\u65E0\u8BBA\u4F60\u5728 <code>string</code> \u7C7B\u578B\u4E0A\u8C03\u7528\u4F55\u79CD\u65B9\u6CD5\uFF0C\u90FD\u4E0D\u4F1A\u5BF9\u503C\u6709\u6539\u53D8\u3002</p>
<p>\u53E6\u5916\u5BF9\u4E8E <code>null</code> \u6765\u8BF4\uFF0C\u5F88\u591A\u4EBA\u4F1A\u8BA4\u4E3A\u4ED6\u662F\u4E2A\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5176\u5B9E\u8FD9\u662F\u9519\u8BEF\u7684\u3002\u867D\u7136 <code>typeof null</code> \u4F1A\u8F93\u51FA <code>object</code>\uFF0C\u4F46\u662F\u8FD9\u53EA\u662F JS \u5B58\u5728\u7684\u4E00\u4E2A\u60A0\u4E45 Bug\u3002\u5728 JS \u7684\u6700\u521D\u7248\u672C\u4E2D\u4F7F\u7528\u7684\u662F 32 \u4F4D\u7CFB\u7EDF\uFF0C\u4E3A\u4E86\u6027\u80FD\u8003\u8651\u4F7F\u7528\u4F4E\u4F4D\u5B58\u50A8\u53D8\u91CF\u7684\u7C7B\u578B\u4FE1\u606F\uFF0C<code>000</code> \u5F00\u5934\u4EE3\u8868\u662F\u5BF9\u8C61\uFF0C\u7136\u800C <code>null</code> \u8868\u793A\u4E3A\u5168\u96F6\uFF0C\u6240\u4EE5\u5C06\u5B83\u9519\u8BEF\u7684\u5224\u65AD\u4E3A <code>object</code> \u3002\u867D\u7136\u73B0\u5728\u7684\u5185\u90E8\u7C7B\u578B\u5224\u65AD\u4EE3\u7801\u5DF2\u7ECF\u6539\u53D8\u4E86\uFF0C\u4F46\u662F\u5BF9\u4E8E\u8FD9\u4E2A Bug \u5374\u662F\u4E00\u76F4\u6D41\u4F20\u4E0B\u6765\u3002</p>
<h2 data-id="heading-2">\u5BF9\u8C61\uFF08Object\uFF09\u7C7B\u578B</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u5BF9\u8C61\u7C7B\u578B\u548C\u539F\u59CB\u7C7B\u578B\u7684\u4E0D\u540C\u4E4B\u5904\uFF1F\u51FD\u6570\u53C2\u6570\u662F\u5BF9\u8C61\u4F1A\u53D1\u751F\u4EC0\u4E48\u95EE\u9898\uFF1F
</code></pre>
<p>\u5728 JS \u4E2D\uFF0C\u9664\u4E86\u539F\u59CB\u7C7B\u578B\u90A3\u4E48\u5176\u4ED6\u7684\u90FD\u662F\u5BF9\u8C61\u7C7B\u578B\u4E86\u3002\u5BF9\u8C61\u7C7B\u578B\u548C\u539F\u59CB\u7C7B\u578B\u4E0D\u540C\u7684\u662F\uFF0C\u539F\u59CB\u7C7B\u578B\u5B58\u50A8\u7684\u662F\u503C\uFF0C\u5BF9\u8C61\u7C7B\u578B\u5B58\u50A8\u7684\u662F\u5730\u5740\uFF08\u6307\u9488\uFF09\u3002\u5F53\u4F60\u521B\u5EFA\u4E86\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u8BA1\u7B97\u673A\u4F1A\u5728\u5185\u5B58\u4E2D\u5E2E\u6211\u4EEC\u5F00\u8F9F\u4E00\u4E2A\u7A7A\u95F4\u6765\u5B58\u653E\u503C\uFF0C\u4F46\u662F\u6211\u4EEC\u9700\u8981\u627E\u5230\u8FD9\u4E2A\u7A7A\u95F4\uFF0C\u8FD9\u4E2A\u7A7A\u95F4\u4F1A\u62E5\u6709\u4E00\u4E2A\u5730\u5740\uFF08\u6307\u9488\uFF09\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">const</span> a = []
</code></pre>
<p>\u5BF9\u4E8E\u5E38\u91CF <code>a</code> \u6765\u8BF4\uFF0C\u5047\u8BBE\u5185\u5B58\u5730\u5740\uFF08\u6307\u9488\uFF09\u4E3A <code>#001</code>\uFF0C\u90A3\u4E48\u5728\u5730\u5740 <code>#001</code> \u7684\u4F4D\u7F6E\u5B58\u653E\u4E86\u503C <code>[]</code>\uFF0C\u5E38\u91CF <code>a</code> \u5B58\u653E\u4E86\u5730\u5740\uFF08\u6307\u9488\uFF09 <code>#001</code>\uFF0C\u518D\u770B\u4EE5\u4E0B\u4EE3\u7801</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">const</span> a = []
<span class="hljs-keyword">const</span> b = a
b.push(<span class="hljs-number">1</span>)
</code></pre>
<p>\u5F53\u6211\u4EEC\u5C06\u53D8\u91CF\u8D4B\u503C\u7ED9\u53E6\u5916\u4E00\u4E2A\u53D8\u91CF\u65F6\uFF0C\u590D\u5236\u7684\u662F\u539F\u672C\u53D8\u91CF\u7684\u5730\u5740\uFF08\u6307\u9488\uFF09\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5F53\u524D\u53D8\u91CF <code>b</code> \u5B58\u653E\u7684\u5730\u5740\uFF08\u6307\u9488\uFF09\u4E5F\u662F <code>#001</code>\uFF0C\u5F53\u6211\u4EEC\u8FDB\u884C\u6570\u636E\u4FEE\u6539\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u4FEE\u6539\u5B58\u653E\u5728\u5730\u5740\uFF08\u6307\u9488\uFF09 <code>#001</code> \u4E0A\u7684\u503C\uFF0C\u4E5F\u5C31\u5BFC\u81F4\u4E86\u4E24\u4E2A\u53D8\u91CF\u7684\u503C\u90FD\u53D1\u751F\u4E86\u6539\u53D8\u3002</p>
<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u770B\u51FD\u6570\u53C2\u6570\u662F\u5BF9\u8C61\u7684\u60C5\u51B5</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params">person</span>) </span>{
  person.age = <span class="hljs-number">26</span>
  person = {
    <span class="hljs-attr">name</span>: <span class="hljs-string">'yyy'</span>,
    <span class="hljs-attr">age</span>: <span class="hljs-number">30</span>
  }

  <span class="hljs-keyword">return</span> person
}
<span class="hljs-keyword">const</span> p1 = {
  <span class="hljs-attr">name</span>: <span class="hljs-string">'yck'</span>,
  <span class="hljs-attr">age</span>: <span class="hljs-number">25</span>
}
<span class="hljs-keyword">const</span> p2 = test(p1)
<span class="hljs-built_in">console</span>.log(p1) <span class="hljs-comment">// -&gt; ?</span>
<span class="hljs-built_in">console</span>.log(p2) <span class="hljs-comment">// -&gt; ?</span>
</code></pre>
<p>\u5BF9\u4E8E\u4EE5\u4E0A\u4EE3\u7801\uFF0C\u4F60\u662F\u5426\u80FD\u6B63\u786E\u7684\u5199\u51FA\u7ED3\u679C\u5462\uFF1F\u63A5\u4E0B\u6765\u8BA9\u6211\u4E3A\u4F60\u89E3\u6790\u4E00\u756A\uFF1A</p>
<ul>
<li>\u9996\u5148\uFF0C\u51FD\u6570\u4F20\u53C2\u662F\u4F20\u9012\u5BF9\u8C61\u6307\u9488\u7684\u526F\u672C</li>
<li>\u5230\u51FD\u6570\u5185\u90E8\u4FEE\u6539\u53C2\u6570\u7684\u5C5E\u6027\u8FD9\u6B65\uFF0C\u6211\u76F8\u4FE1\u5927\u5BB6\u90FD\u77E5\u9053\uFF0C\u5F53\u524D <code>p1</code> \u7684\u503C\u4E5F\u88AB\u4FEE\u6539\u4E86</li>
<li>\u4F46\u662F\u5F53\u6211\u4EEC\u91CD\u65B0\u4E3A <code>person</code> \u5206\u914D\u4E86\u4E00\u4E2A\u5BF9\u8C61\u65F6\u5C31\u51FA\u73B0\u4E86\u5206\u6B67\uFF0C\u8BF7\u770B\u4E0B\u56FE</li>
</ul>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/14/16712ce155afef8c~tplv-t2oaga2asx-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u6240\u4EE5\u6700\u540E <code>person</code> \u62E5\u6709\u4E86\u4E00\u4E2A\u65B0\u7684\u5730\u5740\uFF08\u6307\u9488\uFF09\uFF0C\u4E5F\u5C31\u548C <code>p1</code> \u6CA1\u6709\u4EFB\u4F55\u5173\u7CFB\u4E86\uFF0C\u5BFC\u81F4\u4E86\u6700\u7EC8\u4E24\u4E2A\u53D8\u91CF\u7684\u503C\u662F\u4E0D\u76F8\u540C\u7684\u3002</p>
<h2 data-id="heading-3">typeof vs instanceof</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1Atypeof \u662F\u5426\u80FD\u6B63\u786E\u5224\u65AD\u7C7B\u578B\uFF1Finstanceof \u80FD\u6B63\u786E\u5224\u65AD\u5BF9\u8C61\u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF1F
</code></pre>
<p><code>typeof</code> \u5BF9\u4E8E\u539F\u59CB\u7C7B\u578B\u6765\u8BF4\uFF0C\u9664\u4E86 <code>null</code> \u90FD\u53EF\u4EE5\u663E\u793A\u6B63\u786E\u7684\u7C7B\u578B</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">typeof</span> <span class="hljs-number">1</span> <span class="hljs-comment">// 'number'</span>
<span class="hljs-keyword">typeof</span> <span class="hljs-string">'1'</span> <span class="hljs-comment">// 'string'</span>
<span class="hljs-keyword">typeof</span> <span class="hljs-literal">undefined</span> <span class="hljs-comment">// 'undefined'</span>
<span class="hljs-keyword">typeof</span> <span class="hljs-literal">true</span> <span class="hljs-comment">// 'boolean'</span>
<span class="hljs-keyword">typeof</span> <span class="hljs-built_in">Symbol</span>() <span class="hljs-comment">// 'symbol'</span>
</code></pre>
<p><code>typeof</code> \u5BF9\u4E8E\u5BF9\u8C61\u6765\u8BF4\uFF0C\u9664\u4E86\u51FD\u6570\u90FD\u4F1A\u663E\u793A <code>object</code>\uFF0C\u6240\u4EE5\u8BF4 <code>typeof</code> \u5E76\u4E0D\u80FD\u51C6\u786E\u5224\u65AD\u53D8\u91CF\u5230\u5E95\u662F\u4EC0\u4E48\u7C7B\u578B</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">typeof</span> [] <span class="hljs-comment">// 'object'</span>
<span class="hljs-keyword">typeof</span> {} <span class="hljs-comment">// 'object'</span>
<span class="hljs-keyword">typeof</span> <span class="hljs-built_in">console</span>.log <span class="hljs-comment">// 'function'</span>
</code></pre>
<p>\u5982\u679C\u6211\u4EEC\u60F3\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u7684\u6B63\u786E\u7C7B\u578B\uFF0C\u8FD9\u65F6\u5019\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 <code>instanceof</code>\uFF0C\u56E0\u4E3A\u5185\u90E8\u673A\u5236\u662F\u901A\u8FC7\u539F\u578B\u94FE\u6765\u5224\u65AD\u7684\uFF0C\u5728\u540E\u9762\u7684\u7AE0\u8282\u4E2D\u6211\u4EEC\u4E5F\u4F1A\u81EA\u5DF1\u53BB\u5B9E\u73B0\u4E00\u4E2A <code>instanceof</code>\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">const</span> Person = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{}
<span class="hljs-keyword">const</span> p1 = <span class="hljs-keyword">new</span> Person()
p1 <span class="hljs-keyword">instanceof</span> Person <span class="hljs-comment">// true</span>

<span class="hljs-keyword">var</span> str = <span class="hljs-string">'hello world'</span>
str <span class="hljs-keyword">instanceof</span> <span class="hljs-built_in">String</span> <span class="hljs-comment">// false</span>

<span class="hljs-keyword">var</span> str1 = <span class="hljs-keyword">new</span> <span class="hljs-built_in">String</span>(<span class="hljs-string">'hello world'</span>)
str1 <span class="hljs-keyword">instanceof</span> <span class="hljs-built_in">String</span> <span class="hljs-comment">// true</span>
</code></pre>
<p>\u5BF9\u4E8E\u539F\u59CB\u7C7B\u578B\u6765\u8BF4\uFF0C\u4F60\u60F3\u76F4\u63A5\u901A\u8FC7 <code>instanceof</code> \u6765\u5224\u65AD\u7C7B\u578B\u662F\u4E0D\u884C\u7684\uFF0C\u5F53\u7136\u6211\u4EEC\u8FD8\u662F\u6709\u529E\u6CD5\u8BA9 <code>instanceof</code> \u5224\u65AD\u539F\u59CB\u7C7B\u578B\u7684</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">PrimitiveString</span> </span>{
  <span class="hljs-keyword">static</span> [<span class="hljs-built_in">Symbol</span>.hasInstance](x) {
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">typeof</span> x === <span class="hljs-string">'string'</span>
  }
}
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'hello world'</span> <span class="hljs-keyword">instanceof</span> PrimitiveString) <span class="hljs-comment">// true</span>
</code></pre>
<p>\u4F60\u53EF\u80FD\u4E0D\u77E5\u9053 <code>Symbol.hasInstance</code> \u662F\u4EC0\u4E48\u4E1C\u897F\uFF0C\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u80FD\u8BA9\u6211\u4EEC\u81EA\u5B9A\u4E49 <code>instanceof</code> \u884C\u4E3A\u7684\u4E1C\u897F\uFF0C\u4EE5\u4E0A\u4EE3\u7801\u7B49\u540C\u4E8E <code>typeof 'hello world' === 'string'</code>\uFF0C\u6240\u4EE5\u7ED3\u679C\u81EA\u7136\u662F <code>true</code> \u4E86\u3002\u8FD9\u5176\u5B9E\u4E5F\u4FA7\u9762\u53CD\u6620\u4E86\u4E00\u4E2A\u95EE\u9898\uFF0C <code>instanceof</code> \u4E5F\u4E0D\u662F\u767E\u5206\u4E4B\u767E\u53EF\u4FE1\u7684\u3002</p>
<h2 data-id="heading-4">\u7C7B\u578B\u8F6C\u6362</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u8BE5\u77E5\u8BC6\u70B9\u5E38\u5728\u7B14\u8BD5\u9898\u4E2D\u89C1\u5230\uFF0C\u719F\u6089\u4E86\u8F6C\u6362\u89C4\u5219\u5C31\u4E0D\u60E7\u6015\u6B64\u7C7B\u9898\u76EE\u4E86\u3002
</code></pre>
<p>\u9996\u5148\u6211\u4EEC\u8981\u77E5\u9053\uFF0C\u5728 JS \u4E2D\u7C7B\u578B\u8F6C\u6362\u53EA\u6709\u4E09\u79CD\u60C5\u51B5\uFF0C\u5206\u522B\u662F\uFF1A</p>
<ul>
<li>\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C</li>
<li>\u8F6C\u6362\u4E3A\u6570\u5B57</li>
<li>\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32</li>
</ul>
<p>\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E2A\u7C7B\u578B\u8F6C\u6362\u8868\u683C\uFF0C\u7136\u540E\u518D\u8FDB\u5165\u6B63\u9898</p>
<pre><code class="hljs language-!" lang="!">\u6CE8\u610F\u56FE\u4E2D\u6709\u4E00\u4E2A\u9519\u8BEF\uFF0CBoolean \u8F6C\u5B57\u7B26\u4E32\u8FD9\u884C\u7ED3\u679C\u6211\u6307\u7684\u662F true \u8F6C\u5B57\u7B26\u4E32\u7684\u4F8B\u5B50\uFF0C\u4E0D\u662F\u8BF4 Boolean\u3001\u51FD\u6570\u3001Symblo \u8F6C\u5B57\u7B26\u4E32\u90FD\u662F \`true\`
</code></pre>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/15/16716dec14421e47~tplv-t2oaga2asx-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<h3 data-id="heading-5">\u8F6CBoolean</h3>
<p>\u5728\u6761\u4EF6\u5224\u65AD\u65F6\uFF0C\u9664\u4E86 <code>undefined</code>\uFF0C <code>null</code>\uFF0C <code>false</code>\uFF0C <code>NaN</code>\uFF0C <code>''</code>\uFF0C <code>0</code>\uFF0C <code>-0</code>\uFF0C\u5176\u4ED6\u6240\u6709\u503C\u90FD\u8F6C\u4E3A <code>true</code>\uFF0C\u5305\u62EC\u6240\u6709\u5BF9\u8C61\u3002</p>
<h3 data-id="heading-6">\u5BF9\u8C61\u8F6C\u539F\u59CB\u7C7B\u578B</h3>
<p>\u5BF9\u8C61\u5728\u8F6C\u6362\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u4F1A\u8C03\u7528\u5185\u7F6E\u7684 <code>[[ToPrimitive]]</code> \u51FD\u6570\uFF0C\u5BF9\u4E8E\u8BE5\u51FD\u6570\u6765\u8BF4\uFF0C\u7B97\u6CD5\u903B\u8F91\u4E00\u822C\u6765\u8BF4\u5982\u4E0B\uFF1A</p>
<ul>
<li>\u5982\u679C\u5DF2\u7ECF\u662F\u539F\u59CB\u7C7B\u578B\u4E86\uFF0C\u90A3\u5C31\u4E0D\u9700\u8981\u8F6C\u6362\u4E86</li>
<li>\u5982\u679C\u9700\u8981\u8F6C\u5B57\u7B26\u4E32\u7C7B\u578B\u5C31\u8C03\u7528 <code>x.toString()</code>\uFF0C\u8F6C\u6362\u4E3A\u57FA\u7840\u7C7B\u578B\u7684\u8BDD\u5C31\u8FD4\u56DE\u8F6C\u6362\u7684\u503C\u3002\u4E0D\u662F\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u8BDD\u5C31\u5148\u8C03\u7528 <code>valueOf</code>\uFF0C\u7ED3\u679C\u4E0D\u662F\u57FA\u7840\u7C7B\u578B\u7684\u8BDD\u518D\u8C03\u7528 <code>toString</code></li>
<li>\u8C03\u7528 <code>x.valueOf()</code>\uFF0C\u5982\u679C\u8F6C\u6362\u4E3A\u57FA\u7840\u7C7B\u578B\uFF0C\u5C31\u8FD4\u56DE\u8F6C\u6362\u7684\u503C</li>
<li>\u5982\u679C\u90FD\u6CA1\u6709\u8FD4\u56DE\u539F\u59CB\u7C7B\u578B\uFF0C\u5C31\u4F1A\u62A5\u9519</li>
</ul>
<p>\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u91CD\u5199 <code>Symbol.toPrimitive</code> \uFF0C\u8BE5\u65B9\u6CD5\u5728\u8F6C\u539F\u59CB\u7C7B\u578B\u65F6\u8C03\u7528\u4F18\u5148\u7EA7\u6700\u9AD8\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">let</span> a = {
  <span class="hljs-function"><span class="hljs-title">valueOf</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>
  },
  <span class="hljs-function"><span class="hljs-title">toString</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-string">'1'</span>
  },
  [<span class="hljs-built_in">Symbol</span>.toPrimitive]() {
    <span class="hljs-keyword">return</span> <span class="hljs-number">2</span>
  }
}
<span class="hljs-number">1</span> + a <span class="hljs-comment">// =&gt; 3</span>
</code></pre>
<h3 data-id="heading-7">\u56DB\u5219\u8FD0\u7B97\u7B26</h3>
<p>\u52A0\u6CD5\u8FD0\u7B97\u7B26\u4E0D\u540C\u4E8E\u5176\u4ED6\u51E0\u4E2A\u8FD0\u7B97\u7B26\uFF0C\u5B83\u6709\u4EE5\u4E0B\u51E0\u4E2A\u7279\u70B9\uFF1A</p>
<ul>
<li>\u8FD0\u7B97\u4E2D\u5176\u4E2D\u4E00\u65B9\u4E3A\u5B57\u7B26\u4E32\uFF0C\u90A3\u4E48\u5C31\u4F1A\u628A\u53E6\u4E00\u65B9\u4E5F\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32</li>
<li>\u5982\u679C\u4E00\u65B9\u4E0D\u662F\u5B57\u7B26\u4E32\u6216\u8005\u6570\u5B57\uFF0C\u90A3\u4E48\u4F1A\u5C06\u5B83\u8F6C\u6362\u4E3A\u6570\u5B57\u6216\u8005\u5B57\u7B26\u4E32</li>
</ul>
<pre><code class="hljs language-js" lang="js"><span class="hljs-number">1</span> + <span class="hljs-string">'1'</span> <span class="hljs-comment">// '11'</span>
<span class="hljs-literal">true</span> + <span class="hljs-literal">true</span> <span class="hljs-comment">// 2</span>
<span class="hljs-number">4</span> + [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>] <span class="hljs-comment">// "41,2,3"</span>
</code></pre>
<p>\u5982\u679C\u4F60\u5BF9\u4E8E\u7B54\u6848\u6709\u7591\u95EE\u7684\u8BDD\uFF0C\u8BF7\u770B\u89E3\u6790\uFF1A</p>
<ul>
<li>\u5BF9\u4E8E\u7B2C\u4E00\u884C\u4EE3\u7801\u6765\u8BF4\uFF0C\u89E6\u53D1\u7279\u70B9\u4E00\uFF0C\u6240\u4EE5\u5C06\u6570\u5B57 <code>1</code> \u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF0C\u5F97\u5230\u7ED3\u679C <code>'11'</code></li>
<li>\u5BF9\u4E8E\u7B2C\u4E8C\u884C\u4EE3\u7801\u6765\u8BF4\uFF0C\u89E6\u53D1\u7279\u70B9\u4E8C\uFF0C\u6240\u4EE5\u5C06 <code>true</code> \u8F6C\u4E3A\u6570\u5B57 <code>1</code></li>
<li>\u5BF9\u4E8E\u7B2C\u4E09\u884C\u4EE3\u7801\u6765\u8BF4\uFF0C\u89E6\u53D1\u7279\u70B9\u4E8C\uFF0C\u6240\u4EE5\u5C06\u6570\u7EC4\u901A\u8FC7 <code>toString</code> \u8F6C\u4E3A\u5B57\u7B26\u4E32 <code>1,2,3</code>\uFF0C\u5F97\u5230\u7ED3\u679C <code>41,2,3</code></li>
</ul>
<p>\u53E6\u5916\u5BF9\u4E8E\u52A0\u6CD5\u8FD8\u9700\u8981\u6CE8\u610F\u8FD9\u4E2A\u8868\u8FBE\u5F0F <code>'a' + + 'b'</code></p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-string">'a'</span> + + <span class="hljs-string">'b'</span> <span class="hljs-comment">// -&gt; "aNaN"</span>
</code></pre>
<p>\u56E0\u4E3A <code>+ 'b'</code> \u7B49\u4E8E <code>NaN</code>\uFF0C\u6240\u4EE5\u7ED3\u679C\u4E3A <code>"aNaN"</code>\uFF0C\u4F60\u53EF\u80FD\u4E5F\u4F1A\u5728\u4E00\u4E9B\u4EE3\u7801\u4E2D\u770B\u5230\u8FC7 <code>+ '1'</code> \u7684\u5F62\u5F0F\u6765\u5FEB\u901F\u83B7\u53D6 <code>number</code> \u7C7B\u578B\u3002</p>
<p>\u90A3\u4E48\u5BF9\u4E8E\u9664\u4E86\u52A0\u6CD5\u7684\u8FD0\u7B97\u7B26\u6765\u8BF4\uFF0C\u53EA\u8981\u5176\u4E2D\u4E00\u65B9\u662F\u6570\u5B57\uFF0C\u90A3\u4E48\u53E6\u4E00\u65B9\u5C31\u4F1A\u88AB\u8F6C\u4E3A\u6570\u5B57</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-number">4</span> * <span class="hljs-string">'3'</span> <span class="hljs-comment">// 12</span>
<span class="hljs-number">4</span> * [] <span class="hljs-comment">// 0</span>
<span class="hljs-number">4</span> * [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>] <span class="hljs-comment">// NaN</span>
</code></pre>
<h3 data-id="heading-8">\u6BD4\u8F83\u8FD0\u7B97\u7B26</h3>
<ol>
<li>\u5982\u679C\u662F\u5BF9\u8C61\uFF0C\u5C31\u901A\u8FC7 <code>toPrimitive</code> \u8F6C\u6362\u5BF9\u8C61</li>
<li>\u5982\u679C\u662F\u5B57\u7B26\u4E32\uFF0C\u5C31\u901A\u8FC7 <code>unicode</code> \u5B57\u7B26\u7D22\u5F15\u6765\u6BD4\u8F83</li>
</ol>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">let</span> a = {
  <span class="hljs-function"><span class="hljs-title">valueOf</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>
  },
  <span class="hljs-function"><span class="hljs-title">toString</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-string">'1'</span>
  }
}
a &gt; -<span class="hljs-number">1</span> <span class="hljs-comment">// true</span>
</code></pre>
<p>\u5728\u4EE5\u4E0A\u4EE3\u7801\u4E2D\uFF0C\u56E0\u4E3A <code>a</code> \u662F\u5BF9\u8C61\uFF0C\u6240\u4EE5\u4F1A\u901A\u8FC7 <code>valueOf</code> \u8F6C\u6362\u4E3A\u539F\u59CB\u7C7B\u578B\u518D\u6BD4\u8F83\u503C\u3002</p>
<h2 data-id="heading-9">this</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u5982\u4F55\u6B63\u786E\u5224\u65AD this\uFF1F\u7BAD\u5934\u51FD\u6570\u7684 this \u662F\u4EC0\u4E48\uFF1F
</code></pre>
<p><code>this</code> \u662F\u5F88\u591A\u4EBA\u4F1A\u6DF7\u6DC6\u7684\u6982\u5FF5\uFF0C\u4F46\u662F\u5176\u5B9E\u5B83\u4E00\u70B9\u90FD\u4E0D\u96BE\uFF0C\u53EA\u662F\u7F51\u4E0A\u5F88\u591A\u6587\u7AE0\u628A\u7B80\u5355\u7684\u4E1C\u897F\u8BF4\u590D\u6742\u4E86\u3002\u5728\u8FD9\u4E00\u5C0F\u8282\u4E2D\uFF0C\u4F60\u4E00\u5B9A\u4F1A\u5F7B\u5E95\u660E\u767D <code>this</code> \u8FD9\u4E2A\u6982\u5FF5\u7684\u3002</p>
<p>\u6211\u4EEC\u5148\u6765\u770B\u51E0\u4E2A\u51FD\u6570\u8C03\u7528\u7684\u573A\u666F</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>.a)
}
<span class="hljs-keyword">var</span> a = <span class="hljs-number">1</span>
foo()

<span class="hljs-keyword">const</span> obj = {
  <span class="hljs-attr">a</span>: <span class="hljs-number">2</span>,
  <span class="hljs-attr">foo</span>: foo
}
obj.foo()

<span class="hljs-keyword">const</span> c = <span class="hljs-keyword">new</span> foo()
</code></pre>
<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u4E00\u4E2A\u4E2A\u5206\u6790\u4E0A\u9762\u51E0\u4E2A\u573A\u666F</p>
<ul>
<li>\u5BF9\u4E8E\u76F4\u63A5\u8C03\u7528 <code>foo</code> \u6765\u8BF4\uFF0C\u4E0D\u7BA1 <code>foo</code> \u51FD\u6570\u88AB\u653E\u5728\u4E86\u4EC0\u4E48\u5730\u65B9\uFF0C<code>this</code> \u4E00\u5B9A\u662F <code>window</code></li>
<li>\u5BF9\u4E8E <code>obj.foo()</code> \u6765\u8BF4\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u8BB0\u4F4F\uFF0C\u8C01\u8C03\u7528\u4E86\u51FD\u6570\uFF0C\u8C01\u5C31\u662F <code>this</code>\uFF0C\u6240\u4EE5\u5728\u8FD9\u4E2A\u573A\u666F\u4E0B <code>foo</code> \u51FD\u6570\u4E2D\u7684 <code>this</code> \u5C31\u662F <code>obj</code> \u5BF9\u8C61</li>
<li>\u5BF9\u4E8E <code>new</code> \u7684\u65B9\u5F0F\u6765\u8BF4\uFF0C<code>this</code> \u88AB\u6C38\u8FDC\u7ED1\u5B9A\u5728\u4E86 <code>c</code> \u4E0A\u9762\uFF0C\u4E0D\u4F1A\u88AB\u4EFB\u4F55\u65B9\u5F0F\u6539\u53D8 <code>this</code></li>
</ul>
<p>\u8BF4\u5B8C\u4E86\u4EE5\u4E0A\u51E0\u79CD\u60C5\u51B5\uFF0C\u5176\u5B9E\u5F88\u591A\u4EE3\u7801\u4E2D\u7684 <code>this</code> \u5E94\u8BE5\u5C31\u6CA1\u4EC0\u4E48\u95EE\u9898\u4E86\uFF0C\u4E0B\u9762\u8BA9\u6211\u4EEC\u770B\u770B\u7BAD\u5934\u51FD\u6570\u4E2D\u7684 <code>this</code></p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>)
    }
  }
}
<span class="hljs-built_in">console</span>.log(a()()())
</code></pre>
<p>\u9996\u5148\u7BAD\u5934\u51FD\u6570\u5176\u5B9E\u662F\u6CA1\u6709 <code>this</code> \u7684\uFF0C\u7BAD\u5934\u51FD\u6570\u4E2D\u7684 <code>this</code> \u53EA\u53D6\u51B3\u5305\u88F9\u7BAD\u5934\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u666E\u901A\u51FD\u6570\u7684 <code>this</code>\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u56E0\u4E3A\u5305\u88F9\u7BAD\u5934\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u666E\u901A\u51FD\u6570\u662F <code>a</code>\uFF0C\u6240\u4EE5\u6B64\u65F6\u7684 <code>this</code> \u662F <code>window</code>\u3002\u53E6\u5916\u5BF9\u7BAD\u5934\u51FD\u6570\u4F7F\u7528 <code>bind</code> \u8FD9\u7C7B\u51FD\u6570\u662F\u65E0\u6548\u7684\u3002</p>
<p>\u6700\u540E\u79CD\u60C5\u51B5\u4E5F\u5C31\u662F <code>bind</code> \u8FD9\u4E9B\u6539\u53D8\u4E0A\u4E0B\u6587\u7684 API \u4E86\uFF0C\u5BF9\u4E8E\u8FD9\u4E9B\u51FD\u6570\u6765\u8BF4\uFF0C<code>this</code> \u53D6\u51B3\u4E8E\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5982\u679C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u7A7A\uFF0C\u90A3\u4E48\u5C31\u662F <code>window</code>\u3002</p>
<p>\u90A3\u4E48\u8BF4\u5230 <code>bind</code>\uFF0C\u4E0D\u77E5\u9053\u5927\u5BB6\u662F\u5426\u8003\u8651\u8FC7\uFF0C\u5982\u679C\u5BF9\u4E00\u4E2A\u51FD\u6570\u8FDB\u884C\u591A\u6B21 <code>bind</code>\uFF0C\u90A3\u4E48\u4E0A\u4E0B\u6587\u4F1A\u662F\u4EC0\u4E48\u5462\uFF1F</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">let</span> a = {}
<span class="hljs-keyword">let</span> fn = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{ <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>) }
fn.bind().bind(a)() <span class="hljs-comment">// =&gt; ?</span>
</code></pre>
<p>\u5982\u679C\u4F60\u8BA4\u4E3A\u8F93\u51FA\u7ED3\u679C\u662F <code>a</code>\uFF0C\u90A3\u4E48\u4F60\u5C31\u9519\u4E86\uFF0C\u5176\u5B9E\u6211\u4EEC\u53EF\u4EE5\u628A\u4E0A\u8FF0\u4EE3\u7801\u8F6C\u6362\u6210\u53E6\u4E00\u79CD\u5F62\u5F0F</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-comment">// fn.bind().bind(a) \u7B49\u4E8E</span>
<span class="hljs-keyword">let</span> fn2 = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fn1</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">return</span> fn.apply()
  }.apply(a)
}
fn2()
</code></pre>
<p>\u53EF\u4EE5\u4ECE\u4E0A\u8FF0\u4EE3\u7801\u4E2D\u53D1\u73B0\uFF0C\u4E0D\u7BA1\u6211\u4EEC\u7ED9\u51FD\u6570 <code>bind</code> \u51E0\u6B21\uFF0C<code>fn</code> \u4E2D\u7684 <code>this</code> \u6C38\u8FDC\u7531\u7B2C\u4E00\u6B21 <code>bind</code> \u51B3\u5B9A\uFF0C\u6240\u4EE5\u7ED3\u679C\u6C38\u8FDC\u662F <code>window</code>\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">let</span> a = { <span class="hljs-attr">name</span>: <span class="hljs-string">'yck'</span> }
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>.name)
}
foo.bind(a)() <span class="hljs-comment">// =&gt; 'yck'</span>
</code></pre>
<p>\u4EE5\u4E0A\u5C31\u662F <code>this</code> \u7684\u89C4\u5219\u4E86\uFF0C\u4F46\u662F\u53EF\u80FD\u4F1A\u53D1\u751F\u591A\u4E2A\u89C4\u5219\u540C\u65F6\u51FA\u73B0\u7684\u60C5\u51B5\uFF0C\u8FD9\u65F6\u5019\u4E0D\u540C\u7684\u89C4\u5219\u4E4B\u95F4\u4F1A\u6839\u636E\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u6765\u51B3\u5B9A <code>this</code> \u6700\u7EC8\u6307\u5411\u54EA\u91CC\u3002</p>
<p>\u9996\u5148\uFF0C<code>new</code> \u7684\u65B9\u5F0F\u4F18\u5148\u7EA7\u6700\u9AD8\uFF0C\u63A5\u4E0B\u6765\u662F <code>bind</code> \u8FD9\u4E9B\u51FD\u6570\uFF0C\u7136\u540E\u662F <code>obj.foo()</code> \u8FD9\u79CD\u8C03\u7528\u65B9\u5F0F\uFF0C\u6700\u540E\u662F <code>foo</code> \u8FD9\u79CD\u8C03\u7528\u65B9\u5F0F\uFF0C\u540C\u65F6\uFF0C\u7BAD\u5934\u51FD\u6570\u7684 <code>this</code> \u4E00\u65E6\u88AB\u7ED1\u5B9A\uFF0C\u5C31\u4E0D\u4F1A\u518D\u88AB\u4EFB\u4F55\u65B9\u5F0F\u6240\u6539\u53D8\u3002</p>
<p>\u5982\u679C\u4F60\u8FD8\u662F\u89C9\u5F97\u6709\u70B9\u7ED5\uFF0C\u90A3\u4E48\u5C31\u770B\u4EE5\u4E0B\u7684\u8FD9\u5F20\u6D41\u7A0B\u56FE\u5427\uFF0C\u56FE\u4E2D\u7684\u6D41\u7A0B\u53EA\u9488\u5BF9\u4E8E\u5355\u4E2A\u89C4\u5219\u3002</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/15/16717eaf3383aae8~tplv-t2oaga2asx-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<h2 data-id="heading-10">\u5C0F\u7ED3</h2>
<p>\u4EE5\u4E0A\u5C31\u662F\u6211\u4EEC JS \u57FA\u7840\u77E5\u8BC6\u70B9\u7684\u7B2C\u4E00\u90E8\u5206\u5185\u5BB9\u4E86\u3002\u8FD9\u4E00\u5C0F\u8282\u4E2D\u6D89\u53CA\u5230\u7684\u77E5\u8BC6\u70B9\u5728\u6211\u4EEC\u65E5\u5E38\u7684\u5F00\u53D1\u4E2D\u7ECF\u5E38\u53EF\u4EE5\u770B\u5230\uFF0C\u5E76\u4E14\u5F88\u591A\u5BB9\u6613\u51FA\u73B0\u7684\u5751 \u4E5F\u51FA\u81EA\u4E8E\u8FD9\u4E9B\u77E5\u8BC6\u70B9\uFF0C\u76F8\u4FE1\u8BA4\u771F\u8BFB\u5B8C\u7684\u4F60\u4E00\u5B9A\u4F1A\u5728\u65E5\u540E\u7684\u5F00\u53D1\u4E2D\u5C11\u8E29\u5F88\u591A\u5751\u3002\u5982\u679C\u5927\u5BB6\u5BF9\u4E8E\u8FD9\u4E2A\u7AE0\u8282\u7684\u5185\u5BB9\u5B58\u5728\u7591\u95EE\uFF0C\u6B22\u8FCE\u5728\u8BC4\u8BBA\u533A\u4E0E\u6211\u4E92\u52A8\u3002</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
