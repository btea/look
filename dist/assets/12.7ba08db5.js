var s={name:"12\u3001Babel \u7684\u5185\u7F6E\u529F\u80FD\uFF08\u4E0A\uFF09",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>babel \u6700\u5F00\u59CB\u7684\u540D\u5B57\u53EB 6to5\uFF0C\u4E3B\u8981\u662F\u505A es6 \u5230 es5 \u8BED\u6CD5\u7684\u8F6C\u6362\u548C polyfill\uFF0C\u540E\u6765\u5728 4.0 \u65F6\u6539\u540D\u4E3A\u4E86 babel\u3002\u867D\u7136\u4ECE 6to5 \u6539\u540D\u5230\u4E86 babel\uFF0C\u4F46\u662F\u505A\u7684\u4E8B\u60C5\u5E76\u6CA1\u6709\u53D8\uFF0C\u4F9D\u7136\u662F\u4ECE\u9AD8\u7248\u672C\u8BED\u6CD5\u548C api \u8F6C\u6362\u6210\u4F4E\u7248\u672C\u7684\u8BED\u6CD5\u5E76\u81EA\u52A8 polyfill \u7F3A\u5C11\u7684 api\u3002</p>
<p>babel \u662F\u600E\u4E48\u5B9E\u73B0\u8FD9\u4E9B\u529F\u80FD\u7684\u5462\uFF1F\u5982\u679C\u8BA9\u6211\u4EEC\u57FA\u4E8E\u63D2\u4EF6\u673A\u5236\u5B9E\u73B0 babel \u5185\u7F6E\u7684\u8F6C\u6362\u529F\u80FD\uFF0C\u8BE5\u4F1A\u5982\u4F55\u8BBE\u8BA1\u5462\uFF1F</p>
<h2 data-id="heading-0">\u4ECE\u63D2\u4EF6\u5230 preset</h2>
<h3 data-id="heading-1">\u6620\u5C04\u5173\u7CFB</h3>
<p>\u8981\u5B9E\u73B0\u8F6C\u6362\uFF0C\u7B2C\u4E00\u6B65\u8981\u660E\u786E\u8F6C\u6362\u4EC0\u4E48\uFF1A \u5212\u5B9A\u4E00\u4E2A\u96C6\u5408\u653E\u8981\u8F6C\u6362\u7684\u7279\u6027\uFF0C\u518D\u5212\u5B9A\u4E00\u4E2A\u96C6\u5408\u653E\u8F6C\u6362\u5230\u7684\u76EE\u6807\u7279\u6027\uFF0C\u4E24\u8005\u5EFA\u7ACB\u4E00\u4E00\u6620\u5C04\u5173\u7CFB\u3002\u5C31\u786E\u5B9A\u4E86\u6211\u4EEC\u8981\u505A\u54EA\u4E9B\u8F6C\u6362\u3002</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4595dd98016e4ffe9e23ad7b7e6cc838~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<h4 data-id="heading-2">exponentiation operator</h4>
<p>\u6BD4\u5982\u4E58\u65B9\u8FD0\u7B97\u7B26\uFF0C\u6211\u4EEC\u4F1A\u7528 Math.pow \u6765\u5B9E\u73B0</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">let</span> x = <span class="hljs-number">10</span> ** <span class="hljs-number">2</span>;

x **= <span class="hljs-number">3</span>;
</code></pre>
<p>\u8F6C\u6362\u4E3A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">let</span> x = <span class="hljs-built_in">Math</span>.pow(<span class="hljs-number">10</span>, <span class="hljs-number">2</span>);

x = <span class="hljs-built_in">Math</span>.pow(x, <span class="hljs-number">3</span>);
</code></pre>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/58f0c8a649e44b95aa37fce92bb83adc~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<h4 data-id="heading-3">class</h4>
<p>\u518D\u6BD4\u5982 class\uFF0C\u6211\u4EEC\u4F1A\u7528 function\u3001prototype \u6765\u5B9E\u73B0</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Test</span> </span>{
  <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params">name</span>)</span> {
    <span class="hljs-built_in">this</span>.name = name;
  }

  <span class="hljs-function"><span class="hljs-title">logger</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"Hello"</span>, <span class="hljs-built_in">this</span>.name);
  }
}
</code></pre>
<p>\u8F6C\u6362\u4E3A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_classCallCheck</span>(<span class="hljs-params">instance, Constructor</span>) </span>{
  <span class="hljs-keyword">if</span> (!(instance <span class="hljs-keyword">instanceof</span> Constructor)) {
    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">TypeError</span>(<span class="hljs-string">"Cannot call a class as a function"</span>);
  }
}

<span class="hljs-keyword">var</span> Test = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Test</span>(<span class="hljs-params">name</span>) </span>{
    _classCallCheck(<span class="hljs-built_in">this</span>, Test);

    <span class="hljs-built_in">this</span>.name = name;
  }

  Test.prototype.logger = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">logger</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"Hello"</span>, <span class="hljs-built_in">this</span>.name);
  };

  <span class="hljs-keyword">return</span> Test;
})();
</code></pre>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a9f48760579f4defafbcb94dbcaea84e~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u6BCF\u4E00\u4E2A\u8BED\u6CD5\u90FD\u53EF\u4EE5\u8FD9\u6837\u8F6C\u6362\u4E3A\u4F4E\u7248\u672C\u7684\u8BED\u6CD5\uFF0C\u6839\u636E\u56FE\u7075\u5B8C\u5907\u7684\u8BED\u8A00\u7684\u7279\u70B9\uFF08\u56FE\u7075\u5B8C\u5907\u7684\u8BED\u8A00\u53EF\u4EE5\u63CF\u8FF0\u4EFB\u4F55\u53EF\u8BA1\u7B97\u95EE\u9898\uFF09\uFF0C\u7406\u8BBA\u4E0A\u6240\u6709\u7684\u8BED\u6CD5\u90FD\u53EF\u4EE5\u7528\u4F4E\u7248\u672C\u7684\u8BED\u6CD5\u6765\u5B9E\u73B0\u3002</p>
<p>\u4F46\u662F\u53EA\u662F\u8F6C\u6362\u5E76\u4E0D\u80FD\u89E3\u51B3\u6240\u6709\u95EE\u9898\uFF0C\u6D89\u53CA\u5230\u67D0\u4E2A\u5BF9\u8C61\u7684 api\uFF0C\u6BD4\u5982 Array.prototype.find\uFF0C\u8FD9\u79CD api \u7684\u517C\u5BB9\u5E76\u4E0D\u662F\u9700\u8981\u8F6C\u6362\u8BED\u6CD5\uFF0C\u800C\u662F\u8981\u5728\u73AF\u5883\u4E2D\u6CE8\u5165\u6211\u4EEC\u5B9E\u73B0\u7684 api\uFF0C\u4E5F\u5C31\u662F polyfill \uFF08\u57AB\u7247\uFF09\u3002</p>
<p><strong>\u901A\u8FC7 <code>syntax transform</code> + <code>api polyfill</code>\uFF0C\u6211\u4EEC\u5C31\u80FD\u5728\u76EE\u6807\u73AF\u5883\u7528\u9AD8\u7248\u672C javascript \u7684\u8BED\u6CD5\u548C api\u3002</strong></p>
<h3 data-id="heading-4">\u9700\u8981\u8F6C\u6362\u7684\u8BED\u8A00\u7279\u6027</h3>
<p>babel \u63D2\u4EF6\u9700\u8981\u8F6C\u6362\u7684\u7279\u6027\u5305\u62EC es \u6807\u51C6\u3001proposal\uFF0C\u8FD8\u6709 react\u3001flow\u3001typescript \u7B49</p>
<h4 data-id="heading-5">es spec</h4>
<p>\u6211\u4EEC\u77E5\u9053\uFF0C<a href="https://link.juejin.cn?target=https%3A%2F%2F262.ecma-international.org%2F" target="_blank" rel="nofollow noopener noreferrer" title="https://262.ecma-international.org/" ref="nofollow noopener noreferrer">TC39</a> \u662F\u5236\u5B9A javascript \u8BED\u8A00\u6807\u51C6\u7684\u7EC4\u7EC7\uFF0C\u6BCF\u5E74\u90FD\u4F1A\u516C\u5E03\u52A0\u5165\u5230\u8BED\u8A00\u6807\u51C6\u7684\u7279\u6027\uFF0C<a href="https://link.juejin.cn?target=https%3A%2F%2F262.ecma-international.org%2F6.0" target="_blank" rel="nofollow noopener noreferrer" title="https://262.ecma-international.org/6.0" ref="nofollow noopener noreferrer">es2015</a>\u3001es2016\u3001es2017 \u7B49\u3002\u8FD9\u4E9B\u662F\u6211\u4EEC\u8981\u8F6C\u6362\u7684\u8BED\u8A00\u7279\u6027\u8303\u56F4\u3002</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/93c2bdc9c5b34079ad607989f6a24233~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u5728 babel6 \u65F6\uFF0C\u5206\u522B\u7528 preset-es2015\u3001 preset-es2016 \u7B49\u6765\u7EF4\u62A4\u76F8\u5E94\u7684 transform plugin\uFF0C\u4F46\u5728 babel7 \u7684\u65F6\u5019\u5C31\u6539\u4E3A preset env \u4E86\u3002</p>
<h4 data-id="heading-6">proposal</h4>
<p>babel \u8981\u8F6C\u6362\u7684\u4E0D\u53EA\u662F\u52A0\u5165\u6807\u51C6\u7684\u7279\u6027\uFF0C\u8BED\u8A00\u7279\u6027\u4ECE\u63D0\u51FA\u5230\u6807\u51C6\u4F1A\u6709\u4E00\u4E2A\u8FC7\u7A0B\uFF0C\u5206\u4E3A<a href="https://link.juejin.cn?target=https%3A%2F%2Ftc39.es%2Fprocess-document%2F" target="_blank" rel="nofollow noopener noreferrer" title="https://tc39.es/process-document/" ref="nofollow noopener noreferrer">\u51E0\u4E2A\u9636\u6BB5</a>\u3002</p>
<ul>
<li>\u9636\u6BB5 0 - Strawman: \u53EA\u662F\u4E00\u4E2A\u60F3\u6CD5\uFF0C\u53EF\u80FD\u7528 babel plugin \u5B9E\u73B0</li>
<li>\u9636\u6BB5 1 - Proposal: \u503C\u5F97\u7EE7\u7EED\u7684\u5EFA\u8BAE</li>
<li>\u9636\u6BB5 2 - Draft: \u5EFA\u7ACB spec</li>
<li>\u9636\u6BB5 3 - Candidate: \u5B8C\u6210 spec \u5E76\u4E14\u5728\u6D4F\u89C8\u5668\u5B9E\u73B0</li>
<li>\u9636\u6BB5 4 - Finished: \u4F1A\u52A0\u5165\u5230\u4E0B\u4E00\u5E74\u7684 es20xx spec</li>
</ul>
<p>\u8FD9\u4E9B\u8FD8\u672A\u52A0\u5165\u5230\u8BED\u8A00\u6807\u51C6\u7684\u7279\u6027\u4E5F\u662F\u8981\u652F\u6301\u7684\u3002</p>
<p>babel6 \u7684\u65F6\u5019\u6709 babel-state-x \u7684 preset\uFF0C\u5206\u522B\u653E\u4E0D\u540C\u9636\u6BB5\u7684\u7279\u6027\uFF0C\u4F46\u662F\u8FD9\u4E2Apreset\u662F\u53D8\u5316\u7684\uFF08\u6BCF\u5E74\u90FD\u5728\u53D8\uFF09\uFF0C\u6BD4\u8F83\u96BE\u4EE5\u7EF4\u62A4\uFF0C\u6240\u4EE5 babel7 \u4EE5\u540E\u5C31\u6539\u6210 plugin-proposal-xxx \u4E86\u3002</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/81dc5ce433a849328527d430d23eda88~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<h4 data-id="heading-7">react\u3001flow\u3001typescript</h4>
<p>\u53EA\u662F\u8F6C\u6362 javascript \u672C\u8EAB\u7684 es spec \u548C proposal \u7684\u7279\u6027\u7279\u6027\u5E76\u4E0D\u591F\uFF0C\u73B0\u5728\u6211\u4EEC\u5F00\u53D1\u7684\u65F6\u5019 jsx\u3001typescript\u3001flow \u8FD9\u4E9B\u90FD\u662F\u4F1A\u7528\u7684\uFF0Cbabel \u80AF\u5B9A\u4E5F\u5F97\u652F\u6301\u3002</p>
<p>\u8FD9\u4E9B\u8F6C\u6362\u5BF9\u5E94\u7684 plugin \u5206\u522B\u653E\u5728\u4E0D\u540C preset \u91CC\uFF1A preset-jsx\u3001preset-typescript\u3001preset-flow\u3002</p>
<p>\u6211\u4EEC\u8981\u8F6C\u6362\u7684\u8303\u56F4\u53C8\u5927\u4E86\u4E00\u4E9B\u3002</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/66cfad5e339648afbcfcf973119be0a8~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<h3 data-id="heading-8">\u63D2\u4EF6\u5206\u7C7B</h3>
<p>\u4E0A\u9762\u662F\u63D2\u4EF6\u8981\u8F6C\u6362\u7684\u8BED\u8A00\u7279\u6027\uFF0Cbabel7 \u5185\u7F6E\u7684\u5B9E\u73B0\u8FD9\u4E9B\u7279\u6027\u7684\u63D2\u4EF6\u5206\u4E3A syntax\u3001transform\u3001proposal 3\u7C7B\u3002</p>
<h4 data-id="heading-9">syntax plugin</h4>
<p>syntax plugin \u53EA\u662F\u5728 parserOptions \u4E2D\u653E\u5165\u4E00\u4E2A flag \u8BA9 parser \u77E5\u9053\u8981 parse \u4EC0\u4E48\u8BED\u6CD5\uFF0C\u6700\u7EC8\u7684 parse \u903B\u8F91\u8FD8\u662F babel parser\uFF08babylon\uFF09 \u5B9E\u73B0\u7684\u3002</p>
<p>\u4E00\u822C syntax plugin \u90FD\u662F\u8FD9\u6837\u7684\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">import</span> { declare } <span class="hljs-keyword">from</span> <span class="hljs-string">"@babel/helper-plugin-utils"</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> declare(<span class="hljs-function"><span class="hljs-params">api</span> =&gt;</span> {
  api.assertVersion(<span class="hljs-number">7</span>);

  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">name</span>: <span class="hljs-string">"syntax-function-bind"</span>,

    <span class="hljs-function"><span class="hljs-title">manipulateOptions</span>(<span class="hljs-params">opts, parserOpts</span>)</span> {
      parserOpts.plugins.push(<span class="hljs-string">"functionBind"</span>);
    },
  };
});

</code></pre>
<p>\u8FD9\u4E9B\u63D2\u4EF6\u7684\u76EE\u7684\u5C31\u662F\u8BA9 parser \u80FD\u591F\u6B63\u786E\u7684\u89E3\u6790\u5BF9\u5E94\u7684\u8BED\u6CD5\u6210 AST\u3002</p>
<h4 data-id="heading-10">transform plugin</h4>
<p>transform plugin \u662F\u5BF9 AST \u7684\u8F6C\u6362\uFF0C\u5404\u79CD es20xx \u8BED\u8A00\u7279\u6027\u3001typescript\u3001jsx \u7B49\u7684\u8F6C\u6362\u90FD\u662F\u5728 transform plugin \u91CC\u9762\u5B9E\u73B0\u7684\u3002</p>
<p>\u6709\u7684\u65F6\u5019\u9700\u8981\u7ED3\u5408 syntax plugin \u548C transform plugin\uFF0C \u6BD4\u5982 typescript \u7684\u8BED\u6CD5\u89E3\u6790\u8981\u4F7F\u7528 @babel/plugin-syntax-typescript \u5728 parserOptions \u653E\u5165\u89E3\u6790 typescript \u8BED\u6CD5\u7684\u9009\u9879\uFF0C\u7136\u540E\u4F7F\u7528 @babel/plugin-transform-typescript \u6765\u8F6C\u6362\u89E3\u6790\u51FA\u7684 typescript \u5BF9\u5E94\u7684 AST \u7684\u8F6C\u6362\u3002\u4F46\u5E73\u65F6\u6211\u4EEC\u4E00\u822C\u4F7F\u7528 @babel/preset-typescript\uFF0C\u5B83\u5BF9\u4E0A\u9762\u4E24\u4E2A\u63D2\u4EF6\u505A\u4E86\u5C01\u88C5\u3002</p>
<h4 data-id="heading-11">proposal plugin</h4>
<p>\u672A\u52A0\u5165\u8BED\u8A00\u6807\u51C6\u7684\u7279\u6027\u7684 AST \u8F6C\u6362\u63D2\u4EF6\u53EB proposal plugin\uFF0C\u5176\u5B9E\u4ED6\u4E5F\u662F transform plugin\uFF0C\u4F46\u662F\u4E3A\u4E86\u548C\u6807\u51C6\u7279\u6027\u533A\u5206\uFF0C\u6240\u4EE5\u8FD9\u6837\u53EB\u3002</p>
<p>\u5B8C\u6210 proposal \u7279\u6027\u7684\u652F\u6301\uFF0C\u6709\u65F6\u540C\u6837\u9700\u8981 \u7EFC\u5408 syntax plugin \u548C proposal plugin\uFF0C\u6BD4\u5982 function bind \uFF08:: \u64CD\u4F5C\u7B26\uFF09\u5C31\u9700\u8981\u540C\u65F6\u4F7F\u7528 @babel/plugin-syntax-function-bind \u548C @babel/plugin-proposal-function-bind\u3002</p>
<p>\u603B\u4E4B\uFF0C<strong>babel \u7684 plugin\uFF0C\u5C31 @babel/plugin-syntax-xxx, @babel/plugin-transform-xxx\u3001@babel/plugin-proposal-xxx 3\u79CD\u3002</strong></p>
<h3 data-id="heading-12">preset</h3>
<p>babel \u7684\u63D2\u4EF6\u6709\u5F88\u591A\uFF0C\u7528\u4E8E\u4E0D\u540C\u7684\u76EE\u7684\u9700\u8981\u4E0D\u540C\u7684\u63D2\u4EF6\uFF1A</p>
<ul>
<li>\u4E0D\u540C\u7248\u672C\u7684\u8BED\u8A00\u6807\u51C6\u652F\u6301\uFF1A preset-es2015\u3001preset-es2016 \u7B49\uFF0Cbabel7 \u540E\u7528 preset-env \u4EE3\u66FF</li>
<li>\u672A\u52A0\u5165\u6807\u51C6\u7684\u8BED\u8A00\u7279\u6027\u7684\u652F\u6301\uFF1A \u7528\u4E8E stage0\u3001stage1\u3001stage2 \u7684\u7279\u6027\uFF0Cbabel7 \u540E\u5355\u72EC\u5F15\u5165 proposal plugin</li>
<li>\u7528\u4E8E react\u3001jsx\u3001flow \u7684\u652F\u6301\uFF1A\u5206\u522B\u5C01\u88C5\u76F8\u5E94\u7684\u63D2\u4EF6\u4E3A preset-react\u3001preset-jsx\u3001preset-flow\uFF0C\u76F4\u63A5\u4F7F\u7528\u5BF9\u5E94 preset \u5373\u53EF</li>
</ul>
<h3 data-id="heading-13">helper</h3>
<p>\u6BCF\u4E2A\u7279\u6027\u7684\u5B9E\u73B0\u7528\u4E00\u4E2A babel \u63D2\u4EF6\u5B9E\u73B0\uFF0C\u5F53 babel \u63D2\u4EF6\u591A\u4E86\uFF0C\u81EA\u7136\u4F1A\u6709\u4E00\u4E9B\u5171\u540C\u7684\u903B\u8F91\u3002\u8FD9\u90E8\u5206\u903B\u8F91\u600E\u4E48\u5171\u4EAB\u5462\uFF1F</p>
<p>babel \u8BBE\u8BA1\u4E86\u63D2\u4EF6\u4E4B\u95F4\u5171\u4EAB\u903B\u8F91\u7684\u673A\u5236\uFF0C\u5C31\u662F helper\u3002</p>
<p>helper \u5206\u4E3A\u4E24\u79CD\uFF1A</p>
<ul>
<li>\u4E00\u79CD\u662F\u6CE8\u5165\u5230 AST \u7684\u8FD0\u884C\u65F6\u7528\u7684\u5168\u5C40\u51FD\u6570</li>
<li>\u4E00\u79CD\u662F\u64CD\u4F5C AST \u7684\u5DE5\u5177\u51FD\u6570\uFF0C\u6BD4\u5982\u53D8\u91CF\u63D0\u5347\u8FD9\u79CD\u901A\u7528\u903B\u8F91</li>
</ul>
<h5 data-id="heading-14">\u6CE8\u5165\u5230 AST \u7684\u5168\u5C40\u51FD\u6570</h5>
<p>\u6CE8\u5165\u5230 AST \u7684\u8FD0\u884C\u65F6\u7528\u7684\u5168\u5C40\u51FD\u6570\uFF0C\u6BD4\u5982</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Guang</span> </span>{}

</code></pre>
<p>\u4F1A\u88AB\u8F6C\u6362\u6210</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_classCallCheck</span>(<span class="hljs-params">instance, Constructor</span>) </span>{
  <span class="hljs-comment">//...</span>
}

<span class="hljs-keyword">var</span> Guang = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Guang</span>(<span class="hljs-params"></span>) </span>{
  _classCallCheck(<span class="hljs-built_in">this</span>, Guang);
};
</code></pre>
<p>\u8FD9\u91CC\u7684 _classCallCheck \u5C31\u662F helper \u6CE8\u5165\u7684\u3002</p>
<p>\u8FD9\u7C7B helper \u6570\u91CF\u6BD4\u8F83\u591A\uFF0Cbabel7 \u6709 80 \u591A\u4E2A\uFF0C\u90FD\u5728 @babel/helpers \u91CC\u9762\u3002\u5728\u63D2\u4EF6\u91CC\u4F7F\u7528\u7684\u8BDD\uFF0C\u76F4\u63A5\u8C03\u7528 this.addHelper\uFF0C\u4F1A\u5728\u9876\u5C42\u4F5C\u7528\u57DF\u58F0\u660E\u5BF9\u5E94\u7684 helper\uFF0C\u7136\u540E\u8FD4\u56DE\u5BF9\u5E94\u7684 identifier\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">var</span> transformObjectSetPrototypeOfToAssign = declare(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">api</span>) </span>{
    api.assertVersion(<span class="hljs-number">7</span>);
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">name</span>: <span class="hljs-string">"transform-object-set-prototype-of-to-assign"</span>,
      <span class="hljs-attr">visitor</span>: {
        <span class="hljs-attr">CallExpression</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">CallExpression</span>(<span class="hljs-params">path</span>) </span>{
          <span class="hljs-keyword">if</span> (path.get(<span class="hljs-string">"callee"</span>).matchesPattern(<span class="hljs-string">"Object.setPrototypeOf"</span>)) {
            path.node.callee = <span class="hljs-built_in">this</span>.addHelper(<span class="hljs-string">"defaults"</span>);
          }
        }
      }
    };
});
</code></pre>
<p>\u8FD9\u79CD helper \u662F\u7528\u4E8E\u7528\u4F4E\u7248\u672C\u7279\u6027\u5B9E\u73B0\u9AD8\u7248\u672C\u7279\u6027\u7684\uFF0C\u6BD4\u5982\u7528 function \u548C prototype \u5B9E\u73B0 class\uFF0C\u5185\u90E8\u5B9E\u73B0\u65B9\u5F0F\u662F\u901A\u8FC7 babel template \u7684\u65B9\u5F0F\u3002</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6142017e4f7740f0a41c12a50ca6881b~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u4F60\u53EF\u80FD\u4F1A\u53D1\u73B0\u8FD9\u4E9B\u51FD\u6570\u5728 babel runtime \u91CC\u9762\u4E5F\u6709\u540C\u6837\u7684\u4E00\u4EFD\uFF0C\u6CA1\u9519\uFF0C\u786E\u5B9E\u662F\u4E00\u6837\u7684\u4EE3\u7801\u653E\u5728\u4E86\u4E24\u4E2A\u4F4D\u7F6E\u3002\u4E3A\u4EC0\u4E48\u4F1A\u8FD9\u6837\u5462\uFF1F \u56E0\u4E3A\u4E00\u4E2A\u662F\u5728\u7F16\u8BD1\u671F\u95F4\u6CE8\u5165\u5230 AST \u7684\uFF0C\u800C\u53E6\u4E00\u4E2A\u662F\u5728\u8FD0\u884C\u65F6 require \u7684\uFF0C\u6240\u4EE5\u867D\u7136\u90FD\u662F\u8F6C\u6362\u7528\u7684\u5DE5\u5177\u51FD\u6570\uFF0C\u4F46\u8981\u5199\u4E24\u4EFD\u3002\uFF08\u540E\u8005\u662F\u901A\u8FC7  @babel/plugin-transform-runtime \u8F6C\u6362\u4E4B\u540E\u5728\u8FD0\u884C\u65F6\u5F15\u5165\u7684\uFF09</p>
<p>\u8FD9\u662F @babel/runtime \u5305\u4E0B\u7684\u76F8\u540C\u7684 api\uFF0C\u533A\u522B\u662F helper \u662F\u5728\u7F16\u8BD1\u65F6\u6CE8\u5165 AST\uFF0Cruntime \u4F1A\u968F\u4EE3\u7801\u4E00\u8D77\u88AB\u6253\u5305\uFF0C\u5728\u8FD0\u884C\u65F6\u88AB\u5F15\u5165\u3002</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7fcd40ca6013400797041e3006e7203d~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png" loading="lazy" class="medium-zoom-image"></p>
<h5 data-id="heading-15">\u64CD\u4F5C AST \u7684\u5DE5\u5177\u51FD\u6570</h5>
<p>\u64CD\u4F5C AST \u7684\u5DE5\u5177\u51FD\u6570\uFF0C\u6BD4\u5982</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> hoistVariables = <span class="hljs-built_in">require</span>(<span class="hljs-string">'@babel/helper-hoist-variables'</span>).default;

cosnt plugin = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
    <span class="hljs-attr">visitor</span>: {
        <span class="hljs-function"><span class="hljs-title">VariableDeclaration</span>(<span class="hljs-params">path</span>)</span> {
            hoistVariables(path.parentPath, <span class="hljs-function">(<span class="hljs-params">id</span>) =&gt;</span> {
                path.scope.parent.push({
                    <span class="hljs-attr">id</span>: path.scope.generateUidIdentifier(id.name)
                });
                <span class="hljs-keyword">return</span> id;
            }, <span class="hljs-string">'const'</span> );
        }
    }
}
</code></pre>
<p>\u5F53\u8F93\u5165\u4E3A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">func</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">const</span> a = <span class="hljs-number">1</span>;
    <span class="hljs-keyword">const</span> b = <span class="hljs-number">2</span>;
}
</code></pre>
<p>\u8F93\u51FA\u4E3A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">var</span> _a, _b;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">func</span>(<span class="hljs-params"></span>) </span>{
  a = <span class="hljs-number">1</span>;
  b = <span class="hljs-number">2</span>;
}
</code></pre>
<p>\u6211\u4EEC\u501F\u52A9 @babel/helper-hoist-variables \u8F7B\u677E\u5B9E\u73B0\u4E86\u53D8\u91CF\u63D0\u5347\u7684\u903B\u8F91\u3002</p>
<p>\u518D\u4E3E\u4E00\u4E2A\u4F8B\u5B50</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> importModule = <span class="hljs-built_in">require</span>(<span class="hljs-string">'@babel/helper-module-imports'</span>);

cosnt plugin = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">{ template }</span>) </span>{
    <span class="hljs-attr">visitor</span>: {
        <span class="hljs-function"><span class="hljs-title">Program</span>(<span class="hljs-params">path</span>)</span> {
            <span class="hljs-keyword">const</span> reactIdentifier = importModule.addDefault(path, <span class="hljs-string">'lodash'</span>,{
                <span class="hljs-attr">nameHint</span>: <span class="hljs-string">'_'</span>
            });
            path.node.body.push(template.ast(<span class="hljs-string">\`const get = _.get\`</span>));
        }
    }
}                   
</code></pre>
<p>\u4F1A\u5728\u4EE3\u7801\u4E2D\u52A0\u5165\u6A21\u5757\u5F15\u5165\u548C\u53D8\u91CF\u58F0\u660E\u7684\u4EE3\u7801</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">var</span> _ = _interopRequireDefault(<span class="hljs-built_in">require</span>(<span class="hljs-string">"lodash"</span>)).default;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_interopRequireDefault</span>(<span class="hljs-params">obj</span>) </span>{ <span class="hljs-keyword">return</span> obj &amp;&amp; obj.__esModule ? obj : { <span class="hljs-attr">default</span>: obj }; }

<span class="hljs-keyword">const</span> get = _.get;
</code></pre>
<p>\u6211\u4EEC\u501F\u52A9 @babel/helper-module-imports \u53EF\u4EE5\u5F88\u8F7B\u677E\u7684\u5F15\u5165\u4E00\u4E2A\u6A21\u5757\uFF0C\u901A\u8FC7 named import\u3001default import \u6216\u8005 namespace import \u7684\u65B9\u5F0F\u3002</p>
<p>\u8FD9\u7C7B helper \u7684\u7279\u70B9\u662F\u9700\u8981\u624B\u52A8\u5F15\u5165\u5BF9\u5E94\u7684\u5305\uFF0C\u8C03\u7528 api\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5 this.addHelper \u5C31\u884C\u3002</p>
<p><strong>\u603B\u4E4B\uFF0Cbabel helpers \u662F\u7528\u4E8E babel plugin \u903B\u8F91\u590D\u7528\u7684\u4E00\u4E9B\u5DE5\u5177\u51FD\u6570\uFF0C\u5206\u4E3A\u7528\u4E8E\u6CE8\u5165 runtime \u4EE3\u7801\u7684 helper \u548C\u7528\u4E8E\u7B80\u5316 AST \u64CD\u4F5C \u7684 helper\u4E24\u79CD\u3002\u7B2C\u4E00\u79CD\u90FD\u5728 @babel/helpers \u5305\u91CC\uFF0C\u76F4\u63A5 this.addHelper(name) \u5C31\u53EF\u4EE5\u5F15\u5165\uFF0C \u800C\u7B2C\u4E8C\u79CD\u9700\u8981\u624B\u52A8\u5F15\u5165\u5305\u548C\u8C03\u7528 api\u3002</strong></p>
<h3 data-id="heading-16">babel runtime</h3>
<p>babel runtime \u91CC\u9762\u653E\u8FD0\u884C\u65F6\u52A0\u8F7D\u7684\u6A21\u5757\uFF0C\u4F1A\u88AB\u6253\u5305\u5DE5\u5177\u6253\u5305\u5230\u4EA7\u7269\u4E2D\uFF0C\u4E0B\u9762\u653E\u7740\u5404\u79CD\u9700\u8981\u5728 runtime \u4F7F\u7528\u7684\u51FD\u6570\uFF0C\u5305\u62EC\u4E09\u90E8\u5206\uFF1Aregenerator\u3001corejs\u3001helper\u3002</p>
<ul>
<li>corejs \u8FD9\u5C31\u662F\u65B0\u7684 api \u7684 polyfill\uFF0C\u5206\u4E3A 2 \u548C 3 \u4E24\u4E2A\u7248\u672C\uFF0C3 \u624D\u5B9E\u73B0\u4E86\u5B9E\u4F8B\u65B9\u6CD5\u7684polyfill</li>
<li>regenerator \u662F facebook \u5B9E\u73B0\u7684 aync \u7684 runtime \u5E93\uFF0Cbabel \u4F7F\u7528 <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Ffacebook%2Fregenerator%2Ftree%2Fmaster%2Fpackages%2Fruntime" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/facebook/regenerator/tree/master/packages/runtime" ref="nofollow noopener noreferrer">regenerator-runtime</a>\u6765\u652F\u6301\u5B9E\u73B0 async await \u7684\u652F\u6301\u3002</li>
<li>helper \u662F babel \u505A\u8BED\u6CD5\u8F6C\u6362\u65F6\u7528\u5230\u7684\u51FD\u6570\uFF0C\u6BD4\u5982 _typeof\u3001_extends \u7B49</li>
</ul>
<p>babel \u505A\u8BED\u6CD5\u8F6C\u6362\u548C api \u7684 polyfill\uFF0C\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0\u4E00\u90E8\u5206 runtime \u7684\u51FD\u6570\uFF0C\u5C31\u662F helper \u90E8\u5206\uFF0C\u6709\u7684\u4E5F\u6CA1\u6709\u81EA\u5DF1\u5B9E\u73B0\uFF0C\u7528\u7684\u7B2C\u4E09\u65B9\u7684\uFF0C\u6BD4\u5982 regenerator \u662F\u7528\u7684 facebook \u7684\u3002api \u7684 polyfill \u4E5F\u662F\u7528\u7684 core-js \u7684\uFF0Cbabel \u5BF9\u5B83\u4EEC\u505A\u4E86\u6574\u5408\u3002</p>
<h2 data-id="heading-17">\u603B\u7ED3</h2>
<p>\u8FD9\u4E00\u8282\u6211\u4EEC\u4E86\u89E3\u4E86 babel \u5185\u7F6E\u63D2\u4EF6\u7684\u5206\u7C7B\uFF08transform\u3001proposal\u3001syntax\uFF09\uFF0C\u7136\u540E\u4ECB\u7ECD\u4E86 babel6 \u4E0D\u540C\u7684 preset\uFF0C\u4E4B\u540E\u4E86\u89E3\u4E86 babel \u63D2\u4EF6\u7684\u590D\u7528\u4EE3\u7801\u7684\u65B9\u5F0F\uFF1Ahelper\u3002helper \u5206\u4E3A\u7528\u4E8E runtime \u7684 helper \u548C\u7528\u4E8E\u64CD\u4F5C AST \u7684helper\u3002\u8FD8\u6709 babel runtime\uFF0C\u8FD9\u4E2A\u5305\u4E0B\u7684\u4EE3\u7801\u4F1A\u88AB\u6253\u5305\u5230\u4EA7\u7269\u4E2D\uFF0C\u8FD0\u884C\u65F6\u52A0\u8F7D\uFF0C\u5305\u62EC helper\u3001regenerator\u3001core-js 3\u90E8\u5206\u3002</p>
<p>\u5B66\u5B8C\u8FD9\u4E00\u8282\uFF0C\u6211\u4EEC\u77E5\u9053\u4E86 babel \u5185\u7F6E\u529F\u80FD\u7684\u5927\u6982\u5B9E\u73B0\uFF0C\u80FD\u5B8C\u6210\u8F6C\u6362\u8BED\u6CD5\u548C\u5F15\u5165 polyfill \u7684\u529F\u80FD\uFF0C\u4E0B\u4E00\u8282\uFF0C\u6211\u4EEC\u7EE7\u7EED\u6DF1\u5165\u63A2\u7A76\uFF0C\u600E\u4E48\u8BA9\u5B83\u53D8\u5F97\u66F4\u597D\u3002</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
