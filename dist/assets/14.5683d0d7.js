var s={name:"\u5B89\u5168\u9632\u8303\u77E5\u8BC6\u70B9",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h1 data-id="heading-0">\u5B89\u5168\u9632\u8303\u77E5\u8BC6\u70B9</h1>
<p>\u8FD9\u4E00\u7AE0\u6211\u4EEC\u5C06\u6765\u5B66\u4E60\u5B89\u5168\u9632\u8303\u8FD9\u4E00\u5757\u7684\u77E5\u8BC6\u70B9\u3002\u603B\u7684\u6765\u8BF4\u5B89\u5168\u662F\u5F88\u590D\u6742\u7684\u4E00\u4E2A\u9886\u57DF\uFF0C\u4E0D\u53EF\u80FD\u901A\u8FC7\u4E00\u4E2A\u7AE0\u8282\u5C31\u80FD\u5B66\u4E60\u5230\u8FD9\u90E8\u5206\u7684\u5185\u5BB9\u3002\u5728\u8FD9\u4E00\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u5B66\u4E60\u5230\u5E38\u89C1\u7684\u4E00\u4E9B\u5B89\u5168\u95EE\u9898\u53CA\u5982\u4F55\u9632\u8303\u7684\u5185\u5BB9\uFF0C\u5728\u5F53\u4E0B\u5176\u5B9E\u5B89\u5168\u95EE\u9898\u8D8A\u6765\u8D8A\u91CD\u8981\uFF0C\u5DF2\u7ECF\u9010\u6E10\u6210\u4E3A\u524D\u7AEF\u5F00\u53D1\u5FC5\u5907\u7684\u6280\u80FD\u4E86\u3002</p>
<h2 data-id="heading-1">XSS</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u4EC0\u4E48\u662F XSS \u653B\u51FB\uFF1F\u5982\u4F55\u9632\u8303 XSS \u653B\u51FB\uFF1F\u4EC0\u4E48\u662F CSP\uFF1F
</code></pre>
<p>XSS \u7B80\u5355\u70B9\u6765\u8BF4\uFF0C\u5C31\u662F\u653B\u51FB\u8005\u60F3\u5C3D\u4E00\u5207\u529E\u6CD5\u5C06\u53EF\u4EE5\u6267\u884C\u7684\u4EE3\u7801\u6CE8\u5165\u5230\u7F51\u9875\u4E2D\u3002</p>
<p>XSS \u53EF\u4EE5\u5206\u4E3A\u591A\u79CD\u7C7B\u578B\uFF0C\u4F46\u662F\u603B\u4F53\u4E0A\u6211\u8BA4\u4E3A\u5206\u4E3A\u4E24\u7C7B\uFF1A<strong>\u6301\u4E45\u578B\u548C\u975E\u6301\u4E45\u578B</strong>\u3002</p>
<p>\u6301\u4E45\u578B\u4E5F\u5C31\u662F\u653B\u51FB\u7684\u4EE3\u7801\u88AB\u670D\u52A1\u7AEF\u5199\u5165\u8FDB<strong>\u6570\u636E\u5E93</strong>\u4E2D\uFF0C\u8FD9\u79CD\u653B\u51FB\u5371\u5BB3\u6027\u5F88\u5927\uFF0C\u56E0\u4E3A\u5982\u679C\u7F51\u7AD9\u8BBF\u95EE\u91CF\u5F88\u5927\u7684\u8BDD\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u5927\u91CF\u6B63\u5E38\u8BBF\u95EE\u9875\u9762\u7684\u7528\u6237\u90FD\u53D7\u5230\u653B\u51FB\u3002</p>
<p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5BF9\u4E8E\u8BC4\u8BBA\u529F\u80FD\u6765\u8BF4\uFF0C\u5C31\u5F97\u9632\u8303\u6301\u4E45\u578B XSS \u653B\u51FB\uFF0C\u56E0\u4E3A\u6211\u53EF\u4EE5\u5728\u8BC4\u8BBA\u4E2D\u8F93\u5165\u4EE5\u4E0B\u5185\u5BB9</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/2/1676a843648d488c~tplv-t2oaga2asx-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u8FD9\u79CD\u60C5\u51B5\u5982\u679C\u524D\u540E\u7AEF\u6CA1\u6709\u505A\u597D\u9632\u5FA1\u7684\u8BDD\uFF0C\u8FD9\u6BB5\u8BC4\u8BBA\u5C31\u4F1A\u88AB\u5B58\u50A8\u5230\u6570\u636E\u5E93\u4E2D\uFF0C\u8FD9\u6837\u6BCF\u4E2A\u6253\u5F00\u8BE5\u9875\u9762\u7684\u7528\u6237\u90FD\u4F1A\u88AB\u653B\u51FB\u5230\u3002</p>
<p>\u975E\u6301\u4E45\u578B\u76F8\u6BD4\u4E8E\u524D\u8005\u5371\u5BB3\u5C31\u5C0F\u7684\u591A\u4E86\uFF0C\u4E00\u822C\u901A\u8FC7<strong>\u4FEE\u6539 URL \u53C2\u6570</strong>\u7684\u65B9\u5F0F\u52A0\u5165\u653B\u51FB\u4EE3\u7801\uFF0C\u8BF1\u5BFC\u7528\u6237\u8BBF\u95EE\u94FE\u63A5\u4ECE\u800C\u8FDB\u884C\u653B\u51FB\u3002</p>
<p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5982\u679C\u9875\u9762\u9700\u8981\u4ECE URL \u4E2D\u83B7\u53D6\u67D0\u4E9B\u53C2\u6570\u4F5C\u4E3A\u5185\u5BB9\u7684\u8BDD\uFF0C\u4E0D\u7ECF\u8FC7\u8FC7\u6EE4\u5C31\u4F1A\u5BFC\u81F4\u653B\u51FB\u4EE3\u7801\u88AB\u6267\u884C</p>
<pre><code class="hljs language-html" lang="html"><span class="hljs-comment">&lt;!-- http://www.domain.com?name=&lt;script&gt;alert(1)&lt;/script&gt; --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{{name}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>                                                  
</code></pre>
<p>\u4F46\u662F\u5BF9\u4E8E\u8FD9\u79CD\u653B\u51FB\u65B9\u5F0F\u6765\u8BF4\uFF0C\u5982\u679C\u7528\u6237\u4F7F\u7528 Chrome \u8FD9\u7C7B\u6D4F\u89C8\u5668\u7684\u8BDD\uFF0C\u6D4F\u89C8\u5668\u5C31\u80FD\u81EA\u52A8\u5E2E\u52A9\u7528\u6237\u9632\u5FA1\u653B\u51FB\u3002\u4F46\u662F\u6211\u4EEC\u4E0D\u80FD\u56E0\u6B64\u5C31\u4E0D\u9632\u5FA1\u6B64\u7C7B\u653B\u51FB\u4E86\uFF0C\u56E0\u4E3A\u6211\u4E0D\u80FD\u786E\u4FDD\u7528\u6237\u90FD\u4F7F\u7528\u4E86\u8BE5\u7C7B\u6D4F\u89C8\u5668\u3002</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/2/1676d5e1a09c8367~tplv-t2oaga2asx-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u5BF9\u4E8E XSS \u653B\u51FB\u6765\u8BF4\uFF0C\u901A\u5E38\u6709\u4E24\u79CD\u65B9\u5F0F\u53EF\u4EE5\u7528\u6765\u9632\u5FA1\u3002</p>
<h3 data-id="heading-2">\u8F6C\u4E49\u5B57\u7B26</h3>
<p>\u9996\u5148\uFF0C\u5BF9\u4E8E\u7528\u6237\u7684\u8F93\u5165\u5E94\u8BE5\u662F\u6C38\u8FDC\u4E0D\u4FE1\u4EFB\u7684\u3002\u6700\u666E\u904D\u7684\u505A\u6CD5\u5C31\u662F\u8F6C\u4E49\u8F93\u5165\u8F93\u51FA\u7684\u5185\u5BB9\uFF0C\u5BF9\u4E8E\u5F15\u53F7\u3001\u5C16\u62EC\u53F7\u3001\u659C\u6760\u8FDB\u884C\u8F6C\u4E49</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">escape</span>(<span class="hljs-params">str</span>) </span>{
  str = str.replace(<span class="hljs-regexp">/&amp;/g</span>, <span class="hljs-string">'&amp;amp;'</span>)
  str = str.replace(<span class="hljs-regexp">/&lt;/g</span>, <span class="hljs-string">'&amp;lt;'</span>)
  str = str.replace(<span class="hljs-regexp">/&gt;/g</span>, <span class="hljs-string">'&amp;gt;'</span>)
  str = str.replace(<span class="hljs-regexp">/"/g</span>, <span class="hljs-string">'&amp;quto;'</span>)
  str = str.replace(<span class="hljs-regexp">/'/g</span>, <span class="hljs-string">'&amp;#39;'</span>)
  str = str.replace(<span class="hljs-regexp">/\`/g</span>, <span class="hljs-string">'&amp;#96;'</span>)
  str = str.replace(<span class="hljs-regexp">/\\//g</span>, <span class="hljs-string">'&amp;#x2F;'</span>)
  <span class="hljs-keyword">return</span> str
}
</code></pre>
<p>\u901A\u8FC7\u8F6C\u4E49\u53EF\u4EE5\u5C06\u653B\u51FB\u4EE3\u7801 <code>&lt;script&gt;alert(1)&lt;/script&gt;</code> \u53D8\u6210</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-comment">// -&gt; &amp;lt;script&amp;gt;alert(1)&amp;lt;&amp;#x2F;script&amp;gt;</span>
<span class="hljs-built_in">escape</span>(<span class="hljs-string">'&lt;script&gt;alert(1)&lt;/script&gt;'</span>)
</code></pre>
<p>\u4F46\u662F\u5BF9\u4E8E\u663E\u793A\u5BCC\u6587\u672C\u6765\u8BF4\uFF0C\u663E\u7136\u4E0D\u80FD\u901A\u8FC7\u4E0A\u9762\u7684\u529E\u6CD5\u6765\u8F6C\u4E49\u6240\u6709\u5B57\u7B26\uFF0C\u56E0\u4E3A\u8FD9\u6837\u4F1A\u628A\u9700\u8981\u7684\u683C\u5F0F\u4E5F\u8FC7\u6EE4\u6389\u3002\u5BF9\u4E8E\u8FD9\u79CD\u60C5\u51B5\uFF0C\u901A\u5E38\u91C7\u7528\u767D\u540D\u5355\u8FC7\u6EE4\u7684\u529E\u6CD5\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u901A\u8FC7\u9ED1\u540D\u5355\u8FC7\u6EE4\uFF0C\u4F46\u662F\u8003\u8651\u5230\u9700\u8981\u8FC7\u6EE4\u7684\u6807\u7B7E\u548C\u6807\u7B7E\u5C5E\u6027\u5B9E\u5728\u592A\u591A\uFF0C\u66F4\u52A0\u63A8\u8350\u4F7F\u7528\u767D\u540D\u5355\u7684\u65B9\u5F0F\u3002</p>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">const</span> xss = <span class="hljs-built_in">require</span>(<span class="hljs-string">'xss'</span>)
<span class="hljs-keyword">let</span> html = xss(<span class="hljs-string">'&lt;h1 id="title"&gt;XSS Demo&lt;/h1&gt;&lt;script&gt;alert("xss");&lt;/script&gt;'</span>)
<span class="hljs-comment">// -&gt; &lt;h1&gt;XSS Demo&lt;/h1&gt;&amp;lt;script&amp;gt;alert("xss");&amp;lt;/script&amp;gt;</span>
<span class="hljs-built_in">console</span>.log(html)
</code></pre>
<p>\u4EE5\u4E0A\u793A\u4F8B\u4F7F\u7528\u4E86 <code>js-xss</code> \u6765\u5B9E\u73B0\uFF0C\u53EF\u4EE5\u770B\u5230\u5728\u8F93\u51FA\u4E2D\u4FDD\u7559\u4E86 <code>h1</code> \u6807\u7B7E\u4E14\u8FC7\u6EE4\u4E86 <code>script</code> \u6807\u7B7E\u3002</p>
<h3 data-id="heading-3">CSP</h3>
<p>CSP \u672C\u8D28\u4E0A\u5C31\u662F\u5EFA\u7ACB\u767D\u540D\u5355\uFF0C\u5F00\u53D1\u8005\u660E\u786E\u544A\u8BC9\u6D4F\u89C8\u5668\u54EA\u4E9B\u5916\u90E8\u8D44\u6E90\u53EF\u4EE5\u52A0\u8F7D\u548C\u6267\u884C\u3002\u6211\u4EEC\u53EA\u9700\u8981\u914D\u7F6E\u89C4\u5219\uFF0C\u5982\u4F55\u62E6\u622A\u662F\u7531\u6D4F\u89C8\u5668\u81EA\u5DF1\u5B9E\u73B0\u7684\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u6765\u5C3D\u91CF\u51CF\u5C11 XSS \u653B\u51FB\u3002</p>
<p>\u901A\u5E38\u53EF\u4EE5\u901A\u8FC7\u4E24\u79CD\u65B9\u5F0F\u6765\u5F00\u542F CSP\uFF1A</p>
<ol>
<li>\u8BBE\u7F6E HTTP Header \u4E2D\u7684 <code>Content-Security-Policy</code></li>
<li>\u8BBE\u7F6E <code>meta</code> \u6807\u7B7E\u7684\u65B9\u5F0F <code>&lt;meta http-equiv="Content-Security-Policy"&gt;</code></li>
</ol>
<p>\u8FD9\u91CC\u4EE5\u8BBE\u7F6E HTTP Header \u6765\u4E3E\u4F8B</p>
<ul>
<li>
<p>\u53EA\u5141\u8BB8\u52A0\u8F7D\u672C\u7AD9\u8D44\u6E90</p>
<pre><code class="hljs language-http" lang="http"><span class="hljs-attribute">Content-Security-Policy</span><span class="hljs-punctuation">: </span>default-src \u2018self\u2019
</code></pre>
</li>
<li>
<p>\u53EA\u5141\u8BB8\u52A0\u8F7D HTTPS \u534F\u8BAE\u56FE\u7247</p>
<pre><code class="hljs language-http" lang="http"><span class="hljs-attribute">Content-Security-Policy</span><span class="hljs-punctuation">: </span>img-src https://*
</code></pre>
</li>
<li>
<p>\u5141\u8BB8\u52A0\u8F7D\u4EFB\u4F55\u6765\u6E90\u6846\u67B6</p>
<pre><code class="hljs language-http" lang="http"><span class="hljs-attribute">Content-Security-Policy</span><span class="hljs-punctuation">: </span>child-src 'none'
</code></pre>
</li>
</ul>
<p>\u5F53\u7136\u53EF\u4EE5\u8BBE\u7F6E\u7684\u5C5E\u6027\u8FDC\u4E0D\u6B62\u8FD9\u4E9B\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u67E5\u9605 <a href="https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTTP%2FHeaders%2FContent-Security-Policy" target="_blank" rel="nofollow noopener noreferrer" title="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy" ref="nofollow noopener noreferrer">\u6587\u6863</a> \u7684\u65B9\u5F0F\u6765\u5B66\u4E60\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u8FC7\u591A\u8D58\u8FF0\u5176\u4ED6\u7684\u5C5E\u6027\u4E86\u3002</p>
<p>\u5BF9\u4E8E\u8FD9\u79CD\u65B9\u5F0F\u6765\u8BF4\uFF0C\u53EA\u8981\u5F00\u53D1\u8005\u914D\u7F6E\u4E86\u6B63\u786E\u7684\u89C4\u5219\uFF0C\u90A3\u4E48\u5373\u4F7F\u7F51\u7AD9\u5B58\u5728\u6F0F\u6D1E\uFF0C\u653B\u51FB\u8005\u4E5F\u4E0D\u80FD\u6267\u884C\u5B83\u7684\u653B\u51FB\u4EE3\u7801\uFF0C\u5E76\u4E14 CSP \u7684\u517C\u5BB9\u6027\u4E5F\u4E0D\u9519\u3002</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/2/1676d8215a3d1f5b~tplv-t2oaga2asx-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<h2 data-id="heading-4">CSRF</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u4EC0\u4E48\u662F CSRF \u653B\u51FB\uFF1F\u5982\u4F55\u9632\u8303 CSRF \u653B\u51FB\uFF1F
</code></pre>
<p>CSRF \u4E2D\u6587\u540D\u4E3A\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020\u3002\u539F\u7406\u5C31\u662F\u653B\u51FB\u8005\u6784\u9020\u51FA\u4E00\u4E2A\u540E\u7AEF\u8BF7\u6C42\u5730\u5740\uFF0C\u8BF1\u5BFC\u7528\u6237\u70B9\u51FB\u6216\u8005\u901A\u8FC7\u67D0\u4E9B\u9014\u5F84\u81EA\u52A8\u53D1\u8D77\u8BF7\u6C42\u3002\u5982\u679C\u7528\u6237\u662F\u5728\u767B\u5F55\u72B6\u6001\u4E0B\u7684\u8BDD\uFF0C\u540E\u7AEF\u5C31\u4EE5\u4E3A\u662F\u7528\u6237\u5728\u64CD\u4F5C\uFF0C\u4ECE\u800C\u8FDB\u884C\u76F8\u5E94\u7684\u903B\u8F91\u3002</p>
<p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5047\u8BBE\u7F51\u7AD9\u4E2D\u6709\u4E00\u4E2A\u901A\u8FC7 <code>GET</code> \u8BF7\u6C42\u63D0\u4EA4\u7528\u6237\u8BC4\u8BBA\u7684\u63A5\u53E3\uFF0C\u90A3\u4E48\u653B\u51FB\u8005\u5C31\u53EF\u4EE5\u5728\u9493\u9C7C\u7F51\u7AD9\u4E2D\u52A0\u5165\u4E00\u4E2A\u56FE\u7247\uFF0C\u56FE\u7247\u7684\u5730\u5740\u5C31\u662F\u8BC4\u8BBA\u63A5\u53E3</p>
<pre><code class="hljs language-html" lang="html"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://www.domain.com/xxx?comment='attack'"</span>/&gt;</span>
</code></pre>
<p>\u90A3\u4E48\u4F60\u662F\u5426\u4F1A\u60F3\u5230\u4F7F\u7528 <code>POST</code> \u65B9\u5F0F\u63D0\u4EA4\u8BF7\u6C42\u662F\u4E0D\u662F\u5C31\u6CA1\u6709\u8FD9\u4E2A\u95EE\u9898\u4E86\u5462\uFF1F\u5176\u5B9E\u5E76\u4E0D\u662F\uFF0C\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u4E5F\u4E0D\u662F\u767E\u5206\u767E\u5B89\u5168\u7684\uFF0C\u653B\u51FB\u8005\u540C\u6837\u53EF\u4EE5\u8BF1\u5BFC\u7528\u6237\u8FDB\u5165\u67D0\u4E2A\u9875\u9762\uFF0C\u5728\u9875\u9762\u4E2D\u901A\u8FC7\u8868\u5355\u63D0\u4EA4 <code>POST</code> \u8BF7\u6C42\u3002</p>
<h3 data-id="heading-5">\u5982\u4F55\u9632\u5FA1</h3>
<p>\u9632\u8303 CSRF \u653B\u51FB\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u51E0\u79CD\u89C4\u5219\uFF1A</p>
<ol>
<li>Get \u8BF7\u6C42\u4E0D\u5BF9\u6570\u636E\u8FDB\u884C\u4FEE\u6539</li>
<li>\u4E0D\u8BA9\u7B2C\u4E09\u65B9\u7F51\u7AD9\u8BBF\u95EE\u5230\u7528\u6237 Cookie</li>
<li>\u963B\u6B62\u7B2C\u4E09\u65B9\u7F51\u7AD9\u8BF7\u6C42\u63A5\u53E3</li>
<li>\u8BF7\u6C42\u65F6\u9644\u5E26\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u6BD4\u5982\u9A8C\u8BC1\u7801\u6216\u8005 Token</li>
</ol>
<h4 data-id="heading-6">SameSite</h4>
<p>\u53EF\u4EE5\u5BF9 Cookie \u8BBE\u7F6E <code>SameSite</code> \u5C5E\u6027\u3002\u8BE5\u5C5E\u6027\u8868\u793A Cookie \u4E0D\u968F\u7740\u8DE8\u57DF\u8BF7\u6C42\u53D1\u9001\uFF0C\u53EF\u4EE5\u5F88\u5927\u7A0B\u5EA6\u51CF\u5C11 CSRF \u7684\u653B\u51FB\uFF0C\u4F46\u662F\u8BE5\u5C5E\u6027\u76EE\u524D\u5E76\u4E0D\u662F\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u517C\u5BB9\u3002</p>
<h4 data-id="heading-7">\u9A8C\u8BC1 Referer</h4>
<p>\u5BF9\u4E8E\u9700\u8981\u9632\u8303 CSRF \u7684\u8BF7\u6C42\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u9A8C\u8BC1 Referer \u6765\u5224\u65AD\u8BE5\u8BF7\u6C42\u662F\u5426\u4E3A\u7B2C\u4E09\u65B9\u7F51\u7AD9\u53D1\u8D77\u7684\u3002</p>
<h4 data-id="heading-8">Token</h4>
<p>\u670D\u52A1\u5668\u4E0B\u53D1\u4E00\u4E2A\u968F\u673A Token\uFF0C\u6BCF\u6B21\u53D1\u8D77\u8BF7\u6C42\u65F6\u5C06 Token \u643A\u5E26\u4E0A\uFF0C\u670D\u52A1\u5668\u9A8C\u8BC1 Token \u662F\u5426\u6709\u6548\u3002</p>
<h2 data-id="heading-9">\u70B9\u51FB\u52AB\u6301</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u4EC0\u4E48\u662F\u70B9\u51FB\u52AB\u6301\uFF1F\u5982\u4F55\u9632\u8303\u70B9\u51FB\u52AB\u6301\uFF1F
</code></pre>
<p>\u70B9\u51FB\u52AB\u6301\u662F\u4E00\u79CD\u89C6\u89C9\u6B3A\u9A97\u7684\u653B\u51FB\u624B\u6BB5\u3002\u653B\u51FB\u8005\u5C06\u9700\u8981\u653B\u51FB\u7684\u7F51\u7AD9\u901A\u8FC7 <code>iframe</code> \u5D4C\u5957\u7684\u65B9\u5F0F\u5D4C\u5165\u81EA\u5DF1\u7684\u7F51\u9875\u4E2D\uFF0C\u5E76\u5C06 <code>iframe</code> \u8BBE\u7F6E\u4E3A\u900F\u660E\uFF0C\u5728\u9875\u9762\u4E2D\u900F\u51FA\u4E00\u4E2A\u6309\u94AE\u8BF1\u5BFC\u7528\u6237\u70B9\u51FB\u3002</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/1/16768734d57c5f47~tplv-t2oaga2asx-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u5BF9\u4E8E\u8FD9\u79CD\u653B\u51FB\u65B9\u5F0F\uFF0C\u63A8\u8350\u9632\u5FA1\u7684\u65B9\u6CD5\u6709\u4E24\u79CD\u3002</p>
<h3 data-id="heading-10">X-FRAME-OPTIONS</h3>
<p><code>X-FRAME-OPTIONS</code> \u662F\u4E00\u4E2A HTTP \u54CD\u5E94\u5934\uFF0C\u5728\u73B0\u4EE3\u6D4F\u89C8\u5668\u6709\u4E00\u4E2A\u5F88\u597D\u7684\u652F\u6301\u3002\u8FD9\u4E2A HTTP \u54CD\u5E94\u5934 \u5C31\u662F\u4E3A\u4E86\u9632\u5FA1\u7528 <code>iframe</code> \u5D4C\u5957\u7684\u70B9\u51FB\u52AB\u6301\u653B\u51FB\u3002</p>
<p>\u8BE5\u54CD\u5E94\u5934\u6709\u4E09\u4E2A\u503C\u53EF\u9009\uFF0C\u5206\u522B\u662F</p>
<ul>
<li><code>DENY</code>\uFF0C\u8868\u793A\u9875\u9762\u4E0D\u5141\u8BB8\u901A\u8FC7 <code>iframe</code> \u7684\u65B9\u5F0F\u5C55\u793A</li>
<li><code>SAMEORIGIN</code>\uFF0C\u8868\u793A\u9875\u9762\u53EF\u4EE5\u5728\u76F8\u540C\u57DF\u540D\u4E0B\u901A\u8FC7 <code>iframe</code> \u7684\u65B9\u5F0F\u5C55\u793A</li>
<li><code>ALLOW-FROM</code>\uFF0C\u8868\u793A\u9875\u9762\u53EF\u4EE5\u5728\u6307\u5B9A\u6765\u6E90\u7684 <code>iframe</code> \u4E2D\u5C55\u793A</li>
</ul>
<h3 data-id="heading-11">JS \u9632\u5FA1</h3>
<p>\u5BF9\u4E8E\u67D0\u4E9B\u8FDC\u53E4\u6D4F\u89C8\u5668\u6765\u8BF4\uFF0C\u5E76\u4E0D\u80FD\u652F\u6301\u4E0A\u9762\u7684\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u90A3\u6211\u4EEC\u53EA\u6709\u901A\u8FC7 JS \u7684\u65B9\u5F0F\u6765\u9632\u5FA1\u70B9\u51FB\u52AB\u6301\u4E86\u3002</p>
<pre><code class="hljs language-html" lang="html"><span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"click-jack"</span>&gt;</span><span class="css">
    <span class="hljs-selector-tag">html</span> {
      <span class="hljs-attribute">display</span>: none <span class="hljs-meta">!important</span>;
    }
  </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">if</span> (self == top) {
      <span class="hljs-keyword">var</span> style = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">'click-jack'</span>)
      <span class="hljs-built_in">document</span>.body.removeChild(style)
    } <span class="hljs-keyword">else</span> {
      top.location = self.location
    }
  </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
</code></pre>
<p>\u4EE5\u4E0A\u4EE3\u7801\u7684\u4F5C\u7528\u5C31\u662F\u5F53\u901A\u8FC7 <code>iframe</code> \u7684\u65B9\u5F0F\u52A0\u8F7D\u9875\u9762\u65F6\uFF0C\u653B\u51FB\u8005\u7684\u7F51\u9875\u76F4\u63A5\u4E0D\u663E\u793A\u6240\u6709\u5185\u5BB9\u4E86\u3002</p>
<h2 data-id="heading-12">\u4E2D\u95F4\u4EBA\u653B\u51FB</h2>
<pre><code class="hljs language-!" lang="!">\u6D89\u53CA\u9762\u8BD5\u9898\uFF1A\u4EC0\u4E48\u662F\u4E2D\u95F4\u4EBA\u653B\u51FB\uFF1F\u5982\u4F55\u9632\u8303\u4E2D\u95F4\u4EBA\u653B\u51FB\uFF1F
</code></pre>
<p>\u4E2D\u95F4\u4EBA\u653B\u51FB\u662F\u653B\u51FB\u65B9\u540C\u65F6\u4E0E\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u5EFA\u7ACB\u8D77\u4E86\u8FDE\u63A5\uFF0C\u5E76\u8BA9\u5BF9\u65B9\u8BA4\u4E3A\u8FDE\u63A5\u662F\u5B89\u5168\u7684\uFF0C\u4F46\u662F\u5B9E\u9645\u4E0A\u6574\u4E2A\u901A\u4FE1\u8FC7\u7A0B\u90FD\u88AB\u653B\u51FB\u8005\u63A7\u5236\u4E86\u3002\u653B\u51FB\u8005\u4E0D\u4EC5\u80FD\u83B7\u5F97\u53CC\u65B9\u7684\u901A\u4FE1\u4FE1\u606F\uFF0C\u8FD8\u80FD\u4FEE\u6539\u901A\u4FE1\u4FE1\u606F\u3002</p>
<p>\u901A\u5E38\u6765\u8BF4\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u516C\u5171\u7684 Wi-Fi\uFF0C\u56E0\u4E3A\u5F88\u53EF\u80FD\u5C31\u4F1A\u53D1\u751F\u4E2D\u95F4\u4EBA\u653B\u51FB\u7684\u60C5\u51B5\u3002\u5982\u679C\u4F60\u5728\u901A\u4FE1\u7684\u8FC7\u7A0B\u4E2D\u6D89\u53CA\u5230\u4E86\u67D0\u4E9B\u654F\u611F\u4FE1\u606F\uFF0C\u5C31\u5B8C\u5168\u66B4\u9732\u7ED9\u653B\u51FB\u65B9\u4E86\u3002</p>
<p>\u5F53\u7136\u9632\u5FA1\u4E2D\u95F4\u4EBA\u653B\u51FB\u5176\u5B9E\u5E76\u4E0D\u96BE\uFF0C\u53EA\u9700\u8981\u589E\u52A0\u4E00\u4E2A\u5B89\u5168\u901A\u9053\u6765\u4F20\u8F93\u4FE1\u606F\u3002HTTPS \u5C31\u53EF\u4EE5\u7528\u6765\u9632\u5FA1\u4E2D\u95F4\u4EBA\u653B\u51FB\uFF0C\u4F46\u662F\u5E76\u4E0D\u662F\u8BF4\u4F7F\u7528\u4E86 HTTPS \u5C31\u53EF\u4EE5\u9AD8\u6795\u65E0\u5FE7\u4E86\uFF0C\u56E0\u4E3A\u5982\u679C\u4F60\u6CA1\u6709\u5B8C\u5168\u5173\u95ED HTTP \u8BBF\u95EE\u7684\u8BDD\uFF0C\u653B\u51FB\u65B9\u53EF\u4EE5\u901A\u8FC7\u67D0\u4E9B\u65B9\u5F0F\u5C06 HTTPS \u964D\u7EA7\u4E3A HTTP \u4ECE\u800C\u5B9E\u73B0\u4E2D\u95F4\u4EBA\u653B\u51FB\u3002</p>
<h2 data-id="heading-13">\u5C0F\u7ED3</h2>
<p>\u5728\u8FD9\u4E00\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u5B66\u4E60\u5230\u4E86\u4E00\u4E9B\u5E38\u89C1\u7684\u524D\u7AEF\u5B89\u5168\u65B9\u9762\u7684\u77E5\u8BC6\u53CA\u5982\u4F55\u9632\u5FA1\u8FD9\u4E9B\u653B\u51FB\u3002\u4F46\u662F\u5B89\u5168\u7684\u9886\u57DF\u76F8\u5F53\u5927\uFF0C\u8FD9\u4E9B\u5185\u5BB9\u53EA\u662F\u6CA7\u6D77\u4E00\u7C9F\uFF0C\u5982\u679C\u5927\u5BB6\u5BF9\u4E8E\u5B89\u5168\u6709\u5174\u8DA3\u7684\u8BDD\uFF0C\u53EF\u4EE5\u9605\u8BFB <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Ftrimstray%2Fthe-book-of-secret-knowledge" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/trimstray/the-book-of-secret-knowledge" ref="nofollow noopener noreferrer">\u8FD9\u4E2A\u4ED3\u5E93\u7684\u5185\u5BB9</a> \u6765\u5B66\u4E60\u548C\u5B9E\u8DF5\u8FD9\u65B9\u9762\u7684\u77E5\u8BC6\u3002</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
