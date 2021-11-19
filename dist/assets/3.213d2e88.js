var a={name:"3\u3001Babel \u7684 AST",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>babel \u7F16\u8BD1\u7684\u7B2C\u4E00\u6B65\u662F\u628A\u6E90\u7801 parse \u6210\u62BD\u8C61\u8BED\u6CD5\u6811 AST \uFF08Abstract Syntax Tree\uFF09\uFF0C\u540E\u7EED\u5BF9\u8FD9\u4E2A AST \u8FDB\u884C\u8F6C\u6362\u3002\uFF08\u4E4B\u6240\u4EE5\u53EB\u62BD\u8C61\u8BED\u6CD5\u6811\u662F\u56E0\u4E3A\u7701\u7565\u6389\u4E86\u6E90\u7801\u4E2D\u7684\u5206\u9694\u7B26\u3001\u6CE8\u91CA\u7B49\u5185\u5BB9\uFF09</p>
<p>AST \u4E5F\u662F\u6709\u6807\u51C6\u7684\uFF0CJS parser \u7684 AST \u5927\u591A\u662F <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Festree%2Festree" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/estree/estree" ref="nofollow noopener noreferrer">estree \u6807\u51C6</a>\uFF0C\u4ECE SpiderMonkey \u7684 AST \u6807\u51C6\u6269\u5C55\u800C\u6765\u3002babel \u7684\u6574\u4E2A\u7F16\u8BD1\u6D41\u7A0B\u90FD\u662F\u56F4\u7ED5 AST \u6765\u7684\uFF0C\u8FD9\u4E00\u8282\u6211\u4EEC\u6765\u5B66\u4E00\u4E0B AST\u3002</p>
<p>\u719F\u6089\u4E86 AST\uFF0C\u4E5F\u5C31\u662F\u77E5\u9053\u8F6C\u8BD1\u5668\u548C JS \u5F15\u64CE\u662F\u600E\u4E48\u7406\u89E3\u4EE3\u7801\u7684\uFF0C\u5BF9\u6DF1\u5165\u638C\u63E1 Javascript \u4E5F\u6709\u5F88\u5927\u7684\u597D\u5904\u3002</p>
<h2 data-id="heading-0">\u5E38\u89C1\u7684 AST \u8282\u70B9</h2>
<p>AST \u662F\u5BF9\u6E90\u7801\u7684\u62BD\u8C61\uFF0C\u5B57\u9762\u91CF\u3001\u6807\u8BC6\u7B26\u3001\u8868\u8FBE\u5F0F\u3001\u8BED\u53E5\u3001\u6A21\u5757\u8BED\u6CD5\u3001class \u8BED\u6CD5\u90FD\u6709\u5404\u81EA\u7684 AST\u3002\u6211\u4EEC\u5206\u522B\u6765\u4E86\u89E3\u4E00\u4E0B\uFF1A</p>
<h3 data-id="heading-1">Literal</h3>
<p>Literal \u662F\u5B57\u9762\u91CF\u7684\u610F\u601D\uFF0C\u6BD4\u5982 <code>let name = 'guang'</code>\u4E2D\uFF0C<code>'guang'</code>\u5C31\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u5B57\u9762\u91CF StringLiteral\uFF0C\u76F8\u5E94\u7684\u8FD8\u6709\u6570\u5B57\u5B57\u9762\u91CF NumericLiteral\uFF0C\u5E03\u5C14\u5B57\u9762\u91CF BooleanLiteral\uFF0C\u5B57\u7B26\u4E32\u5B57\u9762\u91CF  StringLiteral\uFF0C\u6B63\u5219\u8868\u8FBE\u5F0F\u5B57\u9762\u91CF RegExpLiteral \u7B49\u3002</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29185815036a4ea1878484ba773a3b6e~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u4EE3\u7801\u4E2D\u7684\u5B57\u9762\u91CF\u5F88\u591A\uFF0Cbabel \u5C31\u662F\u901A\u8FC7 xxLiteral \u6765\u62BD\u8C61\u8FD9\u90E8\u5206\u5185\u5BB9\u7684\u3002</p>
<h3 data-id="heading-2">Identifier</h3>
<p>Identifer \u662F\u6807\u8BC6\u7B26\u7684\u610F\u601D\uFF0C\u53D8\u91CF\u540D\u3001\u5C5E\u6027\u540D\u3001\u53C2\u6570\u540D\u7B49\u5404\u79CD\u58F0\u660E\u548C\u5F15\u7528\u7684\u540D\u5B57\uFF0C\u90FD\u662FIdentifer\u3002\u6211\u4EEC\u77E5\u9053\uFF0CJS \u4E2D\u7684\u6807\u8BC6\u7B26\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u6216\u6570\u5B57\u6216\u4E0B\u5212\u7EBF\uFF08\u201C_\u201D\uFF09\u6216\u7F8E\u5143\u7B26\u53F7\uFF08\u201C$\u201D\uFF09\uFF0C\u4E14\u4E0D\u80FD\u4EE5\u6570\u5B57\u5F00\u5934\u3002\u8FD9\u662F Identifier \u7684\u8BCD\u6CD5\u7279\u70B9\u3002</p>
<p>\u6765\u5C1D\u8BD5\u5206\u6790\u4E00\u4E0B\uFF0C\u4E0B\u9762\u8FD9\u4E00\u6BB5\u4EE3\u7801\u91CC\u9762\u6709\u591A\u5C11 Identifier \u5462\uFF1F</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> name = <span class="hljs-string">'guang'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">say</span>(<span class="hljs-params">name</span>) </span>{
  <span class="hljs-built_in">console</span>.log(name);
}

<span class="hljs-keyword">const</span> obj = {
  <span class="hljs-attr">name</span>: <span class="hljs-string">'guang'</span>
}
</code></pre>
<p>\u7B54\u6848\u662F\u8FD9\u4E9B</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a4b54e6512a4da7ad5c99e7a61a62e9~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<h3 data-id="heading-3">Statement</h3>
<p>statement \u662F\u8BED\u53E5\uFF0C\u5B83\u662F\u53EF\u4EE5\u72EC\u7ACB\u6267\u884C\u7684\u5355\u4F4D\uFF0C\u6BD4\u5982 break\u3001continue\u3001debugger\u3001return \u6216\u8005 if \u8BED\u53E5\u3001while \u8BED\u53E5\u3001for \u8BED\u53E5\uFF0C\u8FD8\u6709\u58F0\u660E\u8BED\u53E5\uFF0C\u8868\u8FBE\u5F0F\u8BED\u53E5\u7B49\u3002\u6211\u4EEC\u5199\u7684\u6BCF\u4E00\u6761\u53EF\u4EE5\u72EC\u7ACB\u6267\u884C\u7684\u4EE3\u7801\u90FD\u662F\u8BED\u53E5\u3002</p>
<p>\u8BED\u53E5\u672B\u5C3E\u4E00\u822C\u4F1A\u52A0\u4E00\u4E2A\u5206\u53F7\u5206\u9694\uFF0C\u6216\u8005\u7528\u6362\u884C\u5206\u9694\u3002</p>
<p>\u4E0B\u9762\u8FD9\u4E9B\u6211\u4EEC\u7ECF\u5E38\u5199\u7684\u4EE3\u7801\uFF0C\u6BCF\u4E00\u884C\u90FD\u662F\u4E00\u4E2A Statement\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">break</span>;
<span class="hljs-keyword">continue</span>;
<span class="hljs-keyword">return</span>;
<span class="hljs-keyword">debugger</span>;
<span class="hljs-keyword">throw</span> <span class="hljs-built_in">Error</span>();
{}
<span class="hljs-keyword">try</span> {} <span class="hljs-keyword">catch</span>(e) {} <span class="hljs-keyword">finally</span>{}
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> key <span class="hljs-keyword">in</span> obj) {}
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>;i &lt; <span class="hljs-number">10</span>;i ++) {}
<span class="hljs-keyword">while</span> (<span class="hljs-literal">true</span>) {}
<span class="hljs-keyword">do</span> {} <span class="hljs-keyword">while</span> (<span class="hljs-literal">true</span>)
<span class="hljs-keyword">switch</span> (v){<span class="hljs-keyword">case</span> <span class="hljs-number">1</span>: <span class="hljs-keyword">break</span>;<span class="hljs-keyword">default</span>:;}
<span class="hljs-attr">label</span>: <span class="hljs-built_in">console</span>.log();
<span class="hljs-keyword">with</span> (a){}
</code></pre>
<p>\u5B83\u4EEC\u5BF9\u5E94\u7684 AST \u8282\u70B9\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d711045e21bb44b68495088df6a9a60b~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u8BED\u53E5\u662F\u4EE3\u7801\u6267\u884C\u7684\u6700\u5C0F\u5355\u4F4D\uFF0C\u53EF\u4EE5\u8BF4\uFF0C\u4EE3\u7801\u662F\u7531\u8BED\u53E5\uFF08Statement\uFF09\u6784\u6210\u7684\u3002</p>
<h3 data-id="heading-4">Declaration</h3>
<p>\u58F0\u660E\u8BED\u53E5\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u8BED\u53E5\uFF0C\u5B83\u6267\u884C\u7684\u903B\u8F91\u662F\u5728\u4F5C\u7528\u57DF\u5185\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\u3001\u51FD\u6570\u3001class\u3001import\u3001export \u7B49\u3002</p>
<p>\u6BD4\u5982\u4E0B\u9762\u8FD9\u4E9B\u58F0\u660E\u8BED\u53E5\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> a = <span class="hljs-number">1</span>;
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">b</span>(<span class="hljs-params"></span>)</span>{}
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">C</span> </span>{}

<span class="hljs-keyword">import</span> d <span class="hljs-keyword">from</span> <span class="hljs-string">'e'</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> e = <span class="hljs-number">1</span>;
<span class="hljs-keyword">export</span> {e};
<span class="hljs-keyword">export</span> * <span class="hljs-keyword">from</span> <span class="hljs-string">'e'</span>;
</code></pre>
<p>\u5B83\u4EEC\u5BF9\u5E94\u7684 AST \u8282\u70B9\u5982\u4E0B\u56FE\uFF1A</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5303fa5530944a638d6b3d1af93f0e3f~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u58F0\u660E\u8BED\u53E5\u7528\u4E8E\u5B9A\u4E49\u53D8\u91CF\uFF0C\u53D8\u91CF\u58F0\u660E\u4E5F\u662F\u4EE3\u7801\u4E2D\u4E00\u4E2A\u57FA\u7840\u7684\u90E8\u5206\u3002</p>
<h3 data-id="heading-5">Expression</h3>
<p>expression \u662F\u8868\u8FBE\u5F0F\uFF0C\u7279\u70B9\u662F\u6267\u884C\u5B8C\u4EE5\u540E\u6709\u8FD4\u56DE\u503C\uFF0C\u8FD9\u662F\u548C\u8BED\u53E5 (statement) \u7684\u533A\u522B\u3002</p>
<p>\u4E0B\u9762\u662F\u4E00\u4E9B\u5E38\u89C1\u7684\u8868\u8FBE\u5F0F</p>
<pre><code class="hljs language-javascript" lang="javascript">[<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]
a = <span class="hljs-number">1</span>
<span class="hljs-number">1</span> + <span class="hljs-number">2</span>;
-<span class="hljs-number">1</span>;
<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{};
<span class="hljs-function">() =&gt;</span> {};
<span class="hljs-class"><span class="hljs-keyword">class</span></span>{};
a;
<span class="hljs-built_in">this</span>;
<span class="hljs-built_in">super</span>;
a::b;
</code></pre>
<p>\u5B83\u4EEC\u5BF9\u5E94\u7684AST\u5982\u56FE\uFF1A</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/feabcb940982409b911dcbb6066e8aa7~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u7EC6\u5FC3\u7684\u540C\u5B66\u53EF\u80FD\u4F1A\u95EE identifier \u548C super \u600E\u4E48\u4E5F\u662F\u8868\u8FBE\u5F0F\u5462\uFF1F</p>
<p>\u5176\u5B9E\u6709\u7684\u8282\u70B9\u53EF\u80FD\u4F1A\u662F\u591A\u79CD\u7C7B\u578B\uFF0Cidentifier\u3001super \u6709\u8FD4\u56DE\u503C\uFF0C\u7B26\u5408\u8868\u8FBE\u5F0F\u7684\u7279\u70B9\uFF0C\u6240\u4EE5\u4E5F\u662F expression\u3002</p>
<p>\u6211\u4EEC\u5224\u65AD AST \u8282\u70B9\u662F\u4E0D\u662F\u67D0\u79CD\u7C7B\u578B\u8981\u770B\u5B83\u662F\u4E0D\u662F\u7B26\u5408\u8BE5\u79CD\u7C7B\u578B\u7684\u7279\u70B9\uFF0C\u6BD4\u5982\u8BED\u53E5\u7684\u7279\u70B9\u662F\u80FD\u591F\u5355\u72EC\u6267\u884C\uFF0C\u8868\u8FBE\u5F0F\u7684\u7279\u70B9\u662F\u6709\u8FD4\u56DE\u503C\u3002</p>
<p>\u6709\u7684\u8868\u8FBE\u5F0F\u53EF\u4EE5\u5355\u72EC\u6267\u884C\uFF0C\u7B26\u5408\u8BED\u53E5\u7684\u7279\u70B9\uFF0C\u6240\u4EE5\u4E5F\u662F\u8BED\u53E5\uFF0C\u6BD4\u5982\u8D4B\u503C\u8868\u8FBE\u5F0F\u3001\u6570\u7EC4\u8868\u8FBE\u5F0F\u7B49\uFF0C\u4F46\u6709\u7684\u8868\u8FBE\u5F0F\u4E0D\u80FD\u5355\u72EC\u6267\u884C\uFF0C\u9700\u8981\u548C\u5176\u4ED6\u7C7B\u578B\u7684\u8282\u70B9\u7EC4\u5408\u5728\u4E00\u8D77\u6784\u6210\u8BED\u53E5\u3002\u6BD4\u5982\u533F\u540D\u51FD\u6570\u8868\u8FBE\u5F0F\u548C\u533F\u540D class \u8868\u8FBE\u5F0F\u5355\u72EC\u6267\u884C\u4F1A\u62A5\u9519</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{};
<span class="hljs-class"><span class="hljs-keyword">class</span></span>{}
</code></pre>
<p>\u9700\u8981\u548C\u5176\u4ED6\u90E8\u5206\u4E00\u8D77\u6784\u6210\u4E00\u6761\u8BED\u53E5\uFF0C\u6BD4\u5982\u7EC4\u6210\u8D4B\u503C\u8BED\u53E5</p>
<pre><code class="hljs language-javascript" lang="javascript">a = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{}
b = <span class="hljs-class"><span class="hljs-keyword">class</span></span>{}
</code></pre>
<p>\u8868\u8FBE\u5F0F\u8BED\u53E5\u89E3\u6790\u6210 AST \u7684\u65F6\u5019\u4F1A\u5305\u88F9\u4E00\u5C42 ExpressionStatement \u8282\u70B9\uFF0C\u4EE3\u8868\u8FD9\u4E2A\u8868\u8FBE\u5F0F\u662F\u88AB\u5F53\u6210\u8BED\u53E5\u6267\u884C\u7684\u3002</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/07a3f1e392f649adb764ada46ee48602~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p><strong>\u5C0F\u7ED3</strong>\uFF1A\u8868\u8FBE\u5F0F\u7684\u7279\u70B9\u662F\u6709\u8FD4\u56DE\u503C\uFF0C\u6709\u7684\u8868\u8FBE\u5F0F\u53EF\u4EE5\u72EC\u7ACB\u4F5C\u4E3A\u8BED\u53E5\u6267\u884C\uFF0C\u4F1A\u5305\u88F9\u4E00\u5C42 ExpressionStatement\u3002</p>
<h3 data-id="heading-6">Class</h3>
<p>class \u7684\u8BED\u6CD5\u4E5F\u6709\u4E13\u95E8\u7684 AST \u8282\u70B9\u6765\u8868\u793A\u3002</p>
<p>\u6574\u4E2A class \u7684\u5185\u5BB9\u662F ClassBody\uFF0C\u5C5E\u6027\u662F ClassProperty\uFF0C\u65B9\u6CD5\u662FClassMethod\uFF08\u901A\u8FC7 kind \u5C5E\u6027\u6765\u533A\u5206\u662F constructor \u8FD8\u662F method\uFF09\u3002</p>
<p>\u6BD4\u5982\u4E0B\u9762\u7684\u4EE3\u7801</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Guang</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Person</span></span>{
    name = <span class="hljs-string">'guang'</span>;
    <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params"></span>)</span> {}
    <span class="hljs-function"><span class="hljs-title">eat</span>(<span class="hljs-params"></span>)</span> {}
}
</code></pre>
<p>\u5BF9\u5E94\u7684AST\u662F\u8FD9\u6837\u7684</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0c62ec375157488780e2beae39e7620d~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>class \u662F es next \u7684\u8BED\u6CD5\uFF0Cbabel \u4E2D\u6709\u4E13\u95E8\u7684 AST \u6765\u8868\u793A\u5B83\u7684\u5185\u5BB9\u3002</p>
<h3 data-id="heading-7">Modules</h3>
<p>es module \u662F\u8BED\u6CD5\u7EA7\u522B\u7684\u6A21\u5757\u89C4\u8303\uFF0C\u6240\u4EE5\u4E5F\u6709\u4E13\u95E8\u7684 AST \u8282\u70B9\u3002</p>
<h4 data-id="heading-8">import</h4>
<p>import \u6709 3 \u79CD\u8BED\u6CD5\uFF1A</p>
<p>named import\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">import</span> {c, d} <span class="hljs-keyword">from</span> <span class="hljs-string">'c'</span>;
</code></pre>
<p>default import\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">import</span> a <span class="hljs-keyword">from</span> <span class="hljs-string">'a'</span>;
</code></pre>
<p>namespaced import:</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> b <span class="hljs-keyword">from</span> <span class="hljs-string">'b'</span>;
</code></pre>
<p>\u8FD9 3 \u79CD\u8BED\u6CD5\u90FD\u5BF9\u5E94 ImportDeclaration \u8282\u70B9\uFF0C\u4F46\u662F specifiers \u5C5E\u6027\u4E0D\u540C\uFF0C\u5206\u522B\u5BF9\u5E94 ImportSpicifier\u3001ImportDefaultSpecifier\u3001ImportNamespaceSpcifier\u3002</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e501a0dfcce043c184e6320e22a4211c~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u56FE\u4E2D\u9EC4\u6846\u6807\u51FA\u7684\u662F specifier \u90E8\u5206\u3002\u53EF\u4EE5\u76F4\u89C2\u7684\u770B\u51FA\u6574\u4F53\u7ED3\u6784\u76F8\u540C\uFF0C\u53EA\u662Fspecifier \u90E8\u5206\u4E0D\u540C\uFF0C\u6240\u4EE5 import \u8BED\u6CD5\u7684 AST \u7684\u7ED3\u6784\u662FImportDeclaration \u5305\u542B\u7740\u5404\u79CD import specifier\u3002</p>
<h4 data-id="heading-9">export</h4>
<p>export \u4E5F\u67093\u79CD\u8BED\u6CD5\uFF1A</p>
<p>named export\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">export</span> { b, d};
</code></pre>
<p>default export\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> a;
</code></pre>
<p>all export\uFF1A</p>
<pre><code class="">export * from 'c';
</code></pre>
<p>\u5206\u522B\u5BF9\u5E94 ExportNamedDeclaration\u3001ExportDefaultDeclaration\u3001ExportAllDeclaration \u7684\u8282\u70B9</p>
<p>\u5176\u4E2D ExportNamedDeclaration \u624D\u6709 specifiers \u5C5E\u6027\uFF0C\u5176\u4F59\u4E24\u79CD\u90FD\u6CA1\u6709\u8FD9\u90E8\u5206\uFF08\u4E5F\u6BD4\u8F83\u597D\u7406\u89E3\uFF0Cexport \u4E0D\u50CF import \u90A3\u6837\u7ED3\u6784\u7C7B\u4F3C\uFF0C\u8FD9\u4E09\u79CD export \u8BED\u6CD5\u7ED3\u6784\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u6240\u4EE5\u4E0D\u662F\u90FD\u5305\u542B specifier\uFF09\u3002</p>
<p>\u6BD4\u5982\u8FD9\u4E09\u79CD export</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">export</span> { b, d};
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> a;
<span class="hljs-keyword">export</span> * <span class="hljs-keyword">from</span> <span class="hljs-string">'c'</span>;
</code></pre>
<p>\u5BF9\u5E94\u7684 AST \u8282\u70B9\u4E3A</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c3ccde25491e42199088fe1f050469ab~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<h3 data-id="heading-10">Program &amp; Directive</h3>
<p>program \u662F\u4EE3\u8868\u6574\u4E2A\u7A0B\u5E8F\u7684\u8282\u70B9\uFF0C\u5B83\u6709 body \u5C5E\u6027\u4EE3\u8868\u7A0B\u5E8F\u4F53\uFF0C\u5B58\u653E statement \u6570\u7EC4\uFF0C\u5C31\u662F\u5177\u4F53\u6267\u884C\u7684\u8BED\u53E5\u7684\u96C6\u5408\u3002\u8FD8\u6709 directives \u5C5E\u6027\uFF0C\u5B58\u653EDirective \u8282\u70B9\uFF0C\u6BD4\u5982<code>"use strict"</code> \u8FD9\u79CD\u6307\u4EE4\u4F1A\u4F7F\u7528 Directive \u8282\u70B9\u8868\u793A\u3002</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/154a6b04020047a0aa8eec9a29ae2d7f~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>Program \u662F\u5305\u88F9\u5177\u4F53\u6267\u884C\u8BED\u53E5\u7684\u8282\u70B9\uFF0C\u800C Directive \u5219\u662F\u4EE3\u7801\u4E2D\u7684\u6307\u4EE4\u90E8\u5206\u3002</p>
<h3 data-id="heading-11">File &amp; Comment</h3>
<p>babel \u7684 AST \u6700\u5916\u5C42\u8282\u70B9\u662F File\uFF0C\u5B83\u6709 program\u3001comments\u3001tokens \u7B49\u5C5E\u6027\uFF0C\u5206\u522B\u5B58\u653E Program \u7A0B\u5E8F\u4F53\u3001\u6CE8\u91CA\u3001token \u7B49\uFF0C\u662F\u6700\u5916\u5C42\u8282\u70B9\u3002</p>
<p>\u6CE8\u91CA\u5206\u4E3A\u5757\u6CE8\u91CA\u548C\u884C\u5185\u6CE8\u91CA\uFF0C\u5BF9\u5E94 CommentBlock \u548C CommentLine \u8282\u70B9\u3002</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/54eb07649db14476a27d61b4265fe547~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u4E0A\u9762 6 \u79CD\u5C31\u662F\u5E38\u89C1\u7684\u4E00\u4E9B AST \u8282\u70B9\u7C7B\u578B\uFF0Cbabel \u5C31\u662F\u901A\u8FC7\u8FD9\u4E9B\u8282\u70B9\u6765\u62BD\u8C61\u6E90\u7801\u4E2D\u4E0D\u540C\u7684\u90E8\u5206\u3002</p>
<h2 data-id="heading-12">AST \u53EF\u89C6\u5316\u67E5\u770B\u5DE5\u5177</h2>
<p>\u5F53\u7136\uFF0C\u6211\u4EEC\u5E76\u4E0D\u9700\u8981\u8BB0\u4EC0\u4E48\u5185\u5BB9\u5BF9\u5E94\u4EC0\u4E48 AST \u8282\u70B9\uFF0C\u53EF\u4EE5\u901A\u8FC7 <a href="https://link.juejin.cn?target=https%3A%2F%2Fastexplorer.net%2F" target="_blank" rel="nofollow noopener noreferrer" title="https://astexplorer.net/" ref="nofollow noopener noreferrer">axtexplorer.net</a>  \u8FD9\u4E2A\u7F51\u7AD9\u6765\u76F4\u89C2\u7684\u67E5\u770B\u3002</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c26502def1b84a36a54ab09c7b071e73~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u8FD9\u4E2A\u7F51\u7AD9\u53EF\u4EE5\u67E5\u770B\u4EE3\u7801 parse \u4EE5\u540E\u7684\u7ED3\u679C\uFF0C\u4F46\u662F\u5982\u679C\u60F3\u67E5\u770B\u5168\u90E8\u7684 AST \u53EF\u4EE5\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel%2Fblob%2Fmain%2Fpackages%2Fbabel-parser%2Fast%2Fspec.md" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/babel/babel/blob/main/packages/babel-parser/ast/spec.md" ref="nofollow noopener noreferrer">babel parser \u4ED3\u5E93\u91CC\u7684 AST \u6587\u6863</a>\u91CC\u67E5\uFF0C\u6216\u8005\u76F4\u63A5\u53BB\u770B @babel/types \u7684<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel%2Fblob%2Fmain%2Fpackages%2Fbabel-types%2Fsrc%2Fast-types%2Fgenerated%2Findex.ts" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/babel/babel/blob/main/packages/babel-types/src/ast-types/generated/index.ts" ref="nofollow noopener noreferrer"> typescript \u7C7B\u578B\u5B9A\u4E49</a>\u3002</p>
<h2 data-id="heading-13">AST \u7684\u516C\u5171\u5C5E\u6027</h2>
<p>\u6BCF\u79CD AST \u90FD\u6709\u81EA\u5DF1\u7684\u5C5E\u6027\uFF0C\u4F46\u662F\u5B83\u4EEC\u4E5F\u6709\u4E00\u4E9B\u516C\u5171\u5C5E\u6027\uFF1A</p>
<ul>
<li><code>type</code>\uFF1A AST \u8282\u70B9\u7684\u7C7B\u578B</li>
<li><code>start\u3001end\u3001loc</code>\uFF1Astart \u548C end \u4EE3\u8868\u8BE5\u8282\u70B9\u5BF9\u5E94\u7684\u6E90\u7801\u5B57\u7B26\u4E32\u7684\u5F00\u59CB\u548C\u7ED3\u675F\u4E0B\u6807\uFF0C\u4E0D\u533A\u5206\u884C\u5217\u3002\u800C loc \u5C5E\u6027\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6709 line \u548C column \u5C5E\u6027\u5206\u522B\u8BB0\u5F55\u5F00\u59CB\u548C\u7ED3\u675F\u884C\u5217\u53F7\u3002</li>
<li><code>leadingComments\u3001innerComments\u3001trailingComments</code>\uFF1A \u8868\u793A\u5F00\u59CB\u7684\u6CE8\u91CA\u3001\u4E2D\u95F4\u7684\u6CE8\u91CA\u3001\u7ED3\u5C3E\u7684\u6CE8\u91CA\uFF0C\u56E0\u4E3A\u6BCF\u4E2A AST \u8282\u70B9\u4E2D\u90FD\u53EF\u80FD\u5B58\u5728\u6CE8\u91CA\uFF0C\u800C\u4E14\u53EF\u80FD\u5728\u5F00\u59CB\u3001\u4E2D\u95F4\u3001\u7ED3\u675F\u8FD9\u4E09\u79CD\u4F4D\u7F6E\uFF0C\u901A\u8FC7\u8FD9\u4E09\u4E2A\u5C5E\u6027\u6765\u8BB0\u5F55\u548C Comment \u7684\u5173\u8054\u3002</li>
<li><code>extra</code>\uFF1A\u8BB0\u5F55\u4E00\u4E9B\u989D\u5916\u7684\u4FE1\u606F\uFF0C\u7528\u4E8E\u5904\u7406\u4E00\u4E9B\u7279\u6B8A\u60C5\u51B5\u3002\u6BD4\u5982 StringLiteral \u4FEE\u6539 value \u53EA\u662F\u503C\u7684\u4FEE\u6539\uFF0C\u800C\u4FEE\u6539 extra.raw \u5219\u53EF\u4EE5\u8FDE\u540C\u5355\u53CC\u5F15\u53F7\u4E00\u8D77\u4FEE\u6539\u3002</li>
</ul>
<h2 data-id="heading-14">\u603B\u7ED3</h2>
<p>\u8FD9\u4E00\u8282\u6211\u4EEC\u5B66\u4E60\u4E86\u4EE3\u7801\u4E2D\u5E38\u89C1\u7684\u8BED\u6CD5\u5728 babel \u7684 AST \u4E2D\u5BF9\u5E94\u7684\u8282\u70B9\u3002</p>
<p>\u6211\u4EEC\u5B66\u4E60\u4E86\uFF1A \u6807\u8BC6\u7B26 Identifer\u3001\u5404\u79CD\u5B57\u9762\u91CF xxLiteral\u3001\u5404\u79CD\u8BED\u53E5 xxStatement\uFF0C\u5404\u79CD\u58F0\u660E\u8BED\u53E5 xxDeclaration\uFF0C\u5404\u79CD\u8868\u8FBE\u5F0F xxExpression\uFF0C\u4EE5\u53CA Class\u3001Modules\u3001File\u3001Program\u3001Directive\u3001Comment \u8FD9\u4E9B AST \u8282\u70B9\u3002</p>
<p>\u4E86\u89E3\u4E86\u8FD9\u4E9B\u8282\u70B9\uFF0C\u5C31\u80FD\u77E5\u9053\u5E73\u65F6\u5199\u7684\u4EE3\u7801\u662F\u600E\u4E48\u7528 AST \u8868\u793A\u7684\uFF0C\u5F53\u7136\u4E5F\u4E0D\u9700\u8981\u8BB0\uFF0C\u53EF\u4EE5\u7528 (<a href="https://link.juejin.cn?target=https%3A%2F%2Fastexplorer.net%2F" target="_blank" rel="nofollow noopener noreferrer" title="https://astexplorer.net/" ref="nofollow noopener noreferrer">astexpoler.net</a>) \u53EF\u89C6\u5316\u7684\u67E5\u770B\u3002</p>
<p>AST \u8282\u70B9\u53EF\u80FD\u540C\u65F6\u6709\u591A\u79CD\u7C7B\u578B\uFF0C\u786E\u5B9A\u4E00\u79CD AST \u8282\u70B9\u662F\u4EC0\u4E48\u7C7B\u578B\u4E3B\u8981\u770B\u5B83\u7684\u7279\u70B9\uFF0C\u6BD4\u5982 Statement \u7684\u7279\u70B9\u662F\u53EF\u4EE5\u5355\u72EC\u6267\u884C\uFF0CExpression \u7684\u7279\u70B9\u662F\u6709\u8FD4\u56DE\u503C\uFF0C\u6240\u4EE5\u4E00\u4E9B\u53EF\u4EE5\u5355\u72EC\u6267\u884C\u7684 Expression \u4F1A\u5305\u4E00\u5C42 ExpressionStatement\u3002</p>
<p>\u4E0D\u540C AST \u8282\u70B9\u6709\u4E0D\u540C\u7684\u5C5E\u6027\u6765\u5B58\u653E\u5404\u81EA\u5BF9\u5E94\u7684\u6E90\u7801\u5185\u5BB9\uFF0C\u4F46\u662F\u90FD\u6709\u4E00\u4E9B\u516C\u5171\u5C5E\u6027\u5982 type\u3001xxComments\u3001loc \u7B49\u3002</p>
<p>\u5B66\u4F1A\u4E86 AST\uFF0C\u5C31\u53EF\u4EE5\u628A\u5BF9\u4EE3\u7801\u7684\u64CD\u4F5C\u8F6C\u4E3A\u5BF9 AST \u7684\u64CD\u4F5C\u4E86\u3002</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{a as default};
