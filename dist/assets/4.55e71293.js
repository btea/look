var a={name:"4\u3001Babel \u7684 api",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>\u5B66\u4E60\u4E86 babel \u7684\u7F16\u8BD1\u6D41\u7A0B\u548C AST \u4E4B\u540E\uFF0C\u6211\u4EEC\u6765\u5B66\u4E60\u4E0B babel \u7684 api\uFF0C\u901A\u8FC7\u8FD9\u4E9B api \u6765\u64CD\u4F5C AST\uFF0C\u5B8C\u6210\u4EE3\u7801\u7684\u8F6C\u6362\u3002</p>
<blockquote>
<p>\u6CE8\u610F\uFF0C\u6211\u4EEC\u5B66\u4E60\u7684 api \u662F babel 7.x \u7684\uFF0Cbabel 6 \u7684 api \u8FD8\u6CA1\u6709\u6309\u7167 scope \u6765\u5212\u5206\uFF0C\u662F babel-parser \u8FD9\u79CD\uFF0C\u800C babel 7 \u53D8\u6210\u4E86@babel/parser \u8FD9\u79CD\u3002\u4F46\u5177\u4F53 api \u5DEE\u4E0D\u591A\uFF0C\u6211\u4EEC\u5B66\u7684\u662F\u4E00\u4E9B\u539F\u7406\u6027\u7684\u4E1C\u897F\uFF0C\u8FD9\u4E9B\u4E1C\u897F\u5728\u7248\u672C\u8FED\u4EE3\u4E2D\u662F\u4E0D\u4F1A\u53D8\u7684\u3002</p>
</blockquote>
<h2 data-id="heading-0">babel \u7684 api \u6709\u54EA\u4E9B</h2>
<p>\u6211\u4EEC\u77E5\u9053 babel \u7684\u7F16\u8BD1\u6D41\u7A0B\u5206\u4E3A\u4E09\u6B65\uFF1Aparse\u3001transform\u3001generate\uFF0C\u6BCF\u4E00\u6B65\u90FD\u66B4\u9732\u4E86\u4E00\u4E9B api \u51FA\u6765\u3002</p>
<ul>
<li>parse \u9636\u6BB5\u6709<code>@babel/parser</code>\uFF0C\u529F\u80FD\u662F\u628A\u6E90\u7801\u8F6C\u6210 AST</li>
<li>transform \u9636\u6BB5\u6709 <code>@babel/traverse</code>\uFF0C\u53EF\u4EE5\u904D\u5386 AST\uFF0C\u5E76\u8C03\u7528 visitor \u51FD\u6570\u4FEE\u6539 AST\uFF0C\u4FEE\u6539 AST \u81EA\u7136\u6D89\u53CA\u5230 AST \u7684\u5224\u65AD\u3001\u521B\u5EFA\u3001\u4FEE\u6539\u7B49\uFF0C\u8FD9\u65F6\u5019\u5C31\u9700\u8981 <code>@babel/types</code> \u4E86\uFF0C\u5F53\u9700\u8981\u6279\u91CF\u521B\u5EFA AST \u7684\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528  <code>@babel/template</code> \u6765\u7B80\u5316 AST \u521B\u5EFA\u903B\u8F91\u3002</li>
<li>generate \u9636\u6BB5\u4F1A\u628A AST \u6253\u5370\u4E3A\u76EE\u6807\u4EE3\u7801\u5B57\u7B26\u4E32\uFF0C\u540C\u65F6\u751F\u6210 sourcemap\uFF0C\u9700\u8981 <code>@babel/generate</code> \u5305</li>
<li>\u4E2D\u9014\u9047\u5230\u9519\u8BEF\u60F3\u6253\u5370\u4EE3\u7801\u4F4D\u7F6E\u7684\u65F6\u5019\uFF0C\u4F7F\u7528 <code>@babel/code-frame</code> \u5305</li>
<li>babel \u7684\u6574\u4F53\u529F\u80FD\u901A\u8FC7 <code>@babel/core</code> \u63D0\u4F9B\uFF0C\u57FA\u4E8E\u4E0A\u9762\u7684\u5305\u5B8C\u6210 babel \u6574\u4F53\u7684\u7F16\u8BD1\u6D41\u7A0B\uFF0C\u5E76\u5B9E\u73B0\u63D2\u4EF6\u529F\u80FD\u3002</li>
</ul>
<p>\u6211\u4EEC\u4E3B\u8981\u5B66\u4E60\u7684\u5C31\u662F <code>@babel/parser</code>\uFF0C<code>@babel/traverse</code>\uFF0C<code>@babel/generator</code>\uFF0C<code>@babel/types</code>\uFF0C<code>@babel/template</code> \u8FD9\u4E94\u4E2A\u5305\u7684 api \u7684\u4F7F\u7528\u3002</p>
<h2 data-id="heading-1">@babel/parser</h2>
<p>babel parser \u53EB babylon\uFF0C\u662F\u57FA\u4E8E acorn \u5B9E\u73B0\u7684\uFF0C\u6269\u5C55\u4E86\u5F88\u591A\u8BED\u6CD5\uFF0C\u53EF\u4EE5\u652F\u6301 es next\uFF08\u73B0\u5728\u652F\u6301\u5230 es2020\uFF09\u3001jsx\u3001flow\u3001typescript \u7B49\u8BED\u6CD5\u7684\u89E3\u6790\uFF0C\u5176\u4E2D jsx\u3001flow\u3001typescript \u8FD9\u4E9B\u975E\u6807\u51C6\u7684\u8BED\u6CD5\u7684\u89E3\u6790\u9700\u8981\u6307\u5B9A\u8BED\u6CD5\u63D2\u4EF6\u3002</p>
<p>\u5B83\u63D0\u4F9B\u4E86\u6709\u4E24\u4E2A api\uFF1Aparse \u548C parseExpression\u3002\u4E24\u8005\u90FD\u662F\u628A\u6E90\u7801\u8F6C\u6210 AST\uFF0C\u4E0D\u8FC7 parse \u8FD4\u56DE\u7684 AST \u6839\u8282\u70B9\u662F File\uFF08\u6574\u4E2A AST\uFF09\uFF0CparseExpression \u8FD4\u56DE\u7684 AST \u6839\u8282\u70B9\u662F\u662F Expression\uFF08\u8868\u8FBE\u5F0F\u7684 AST\uFF09\uFF0C\u7C92\u5EA6\u4E0D\u540C\u3002</p>
<pre><code class="hljs language-typescript" lang="typescript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">parse</span>(<span class="hljs-params">input: <span class="hljs-built_in">string</span>, options?: ParserOptions</span>): <span class="hljs-title">File</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">parseExpression</span>(<span class="hljs-params">input: <span class="hljs-built_in">string</span>, options?: ParserOptions</span>): <span class="hljs-title">Expression</span>
</span></span></code></pre>
<p>\u8BE6\u7EC6\u7684 options \u53EF\u4EE5\u67E5\u770B<a href="https://link.juejin.cn?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-parser%23options" target="_blank" rel="nofollow noopener noreferrer" title="https://babeljs.io/docs/en/babel-parser#options" ref="nofollow noopener noreferrer">\u6587\u6863</a>\u3002\u5176\u5B9E\u4E3B\u8981\u5206\u4E3A\u4E24\u7C7B\uFF0C\u4E00\u662F parse \u7684\u5185\u5BB9\u662F\u4EC0\u4E48\uFF0C\u4E8C\u662F\u4EE5\u4EC0\u4E48\u65B9\u5F0F\u53BB parse</p>
<p><strong>parse \u7684\u5185\u5BB9\u662F\u4EC0\u4E48\uFF1A</strong></p>
<ul>
<li><code>plugins</code>\uFF1A \u6307\u5B9Ajsx\u3001typescript\u3001flow \u7B49\u63D2\u4EF6\u6765\u89E3\u6790\u5BF9\u5E94\u7684\u8BED\u6CD5</li>
<li><code>allowXxx</code>\uFF1A \u6307\u5B9A\u4E00\u4E9B\u8BED\u6CD5\u662F\u5426\u5141\u8BB8\uFF0C\u6BD4\u5982\u51FD\u6570\u5916\u7684 await\u3001\u6CA1\u58F0\u660E\u7684 export\u7B49</li>
<li><code>sourceType</code>\uFF1A \u6307\u5B9A\u662F\u5426\u652F\u6301\u89E3\u6790\u6A21\u5757\u8BED\u6CD5\uFF0C\u6709 module\u3001script\u3001unambiguous 3\u4E2A\u53D6\u503C\uFF0Cmodule \u662F\u89E3\u6790 es module \u8BED\u6CD5\uFF0Cscript \u5219\u4E0D\u89E3\u6790 es module \u8BED\u6CD5\uFF0C\u5F53\u4F5C\u811A\u672C\u6267\u884C\uFF0Cunambiguous \u5219\u662F\u6839\u636E\u5185\u5BB9\u662F\u5426\u6709 import \u548C export \u6765\u786E\u5B9A\u662F\u5426\u89E3\u6790 es module \u8BED\u6CD5\u3002</li>
</ul>
<p><strong>\u4EE5\u4EC0\u4E48\u65B9\u5F0F parse</strong></p>
<ul>
<li><code>strictMode</code> \u662F\u5426\u662F\u4E25\u683C\u6A21\u5F0F</li>
<li><code>startLine</code> \u4ECE\u6E90\u7801\u54EA\u4E00\u884C\u5F00\u59CB parse</li>
<li><code>errorRecovery</code> \u51FA\u9519\u65F6\u662F\u5426\u8BB0\u5F55\u9519\u8BEF\u5E76\u7EE7\u7EED\u5F80\u4E0B parse</li>
<li><code>tokens</code> parse \u7684\u65F6\u5019\u662F\u5426\u4FDD\u7559 token \u4FE1\u606F</li>
<li><code>ranges</code> \u662F\u5426\u5728 ast \u8282\u70B9\u4E2D\u6DFB\u52A0 ranges \u5C5E\u6027</li>
</ul>
<p>\u5176\u5B9E\u6700\u5E38\u7528\u7684 option \u5C31\u662F plugins\u3001sourceType \u8FD9\u4E24\u4E2A\uFF0C\u6BD4\u5982\u8981 parse tsx \u6A21\u5757\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u8FD9\u6837\u6765\u5199</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-built_in">require</span>(<span class="hljs-string">"@babel/parser"</span>).parse(<span class="hljs-string">"code"</span>, {
  <span class="hljs-attr">sourceType</span>: <span class="hljs-string">"module"</span>,
  <span class="hljs-attr">plugins</span>: [
    <span class="hljs-string">"jsx"</span>,
    <span class="hljs-string">"typescript"</span>
  ]
});
</code></pre>
<h2 data-id="heading-2">@babel/traverse</h2>
<p>parse \u51FA\u7684 AST \u7531 <code>@babel/traverse</code> \u6765\u904D\u5386\u548C\u4FEE\u6539\uFF0Cbabel traverse \u5305\u63D0\u4F9B\u4E86 traverse \u65B9\u6CD5\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">traverse</span>(<span class="hljs-params">parent, opts</span>)
</span></code></pre>
<p>\u5E38\u7528\u7684\u5C31\u524D\u9762\u4E24\u4E2A\u53C2\u6570\uFF0Cparent \u6307\u5B9A\u8981\u904D\u5386\u7684 AST \u8282\u70B9\uFF0Copts \u6307\u5B9A visitor \u51FD\u6570\u3002babel \u4F1A\u5728\u904D\u5386 parent \u5BF9\u5E94\u7684 AST \u65F6\u8C03\u7528\u76F8\u5E94\u7684 visitor \u51FD\u6570\u3002</p>
<h4 data-id="heading-3">\u904D\u5386\u8FC7\u7A0B</h4>
<p>visitor \u5BF9\u8C61\u7684 value \u662F\u5BF9\u8C61\u6216\u8005\u51FD\u6570\uFF1A</p>
<ul>
<li>\u5982\u679C value \u4E3A\u51FD\u6570\uFF0C\u90A3\u4E48\u5C31\u76F8\u5F53\u4E8E\u662F enter \u65F6\u8C03\u7528\u7684\u51FD\u6570\u3002</li>
<li>\u5982\u679C value \u4E3A\u5BF9\u8C61\uFF0C\u5219\u53EF\u4EE5\u660E\u786E\u6307\u5B9A enter \u6216\u8005 exit \u65F6\u7684\u5904\u7406\u51FD\u6570\u3002</li>
</ul>
<p>\u51FD\u6570\u4F1A\u63A5\u6536\u4E24\u4E2A\u53C2\u6570 path \u548C state\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript">visitor: {
    Identifier (path, state) {},
    <span class="hljs-attr">StringLiteral</span>: {
        enter (path, state) {},
        exit (path, state) {}
    }
}
</code></pre>
<p>enter \u65F6\u8C03\u7528\u662F\u5728\u904D\u5386\u5F53\u524D\u8282\u70B9\u7684\u5B50\u8282\u70B9\u524D\u8C03\u7528\uFF0Cexit \u65F6\u8C03\u7528\u662F\u904D\u5386\u5B8C\u5F53\u524D\u8282\u70B9\u7684\u5B50\u8282\u70B9\u540E\u8C03\u7528\u3002</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5768a7c151914586ab2a5b09b698b4d7~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u53EF\u4EE5\u4E3A\u5355\u4E2A\u8282\u70B9\u7684\u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u662F\u591A\u4E2A\u8282\u70B9\u7C7B\u578B\u901A\u8FC7 <code>|</code> \u8FDE\u63A5\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u522B\u540D\u6307\u5B9A\u4E00\u7CFB\u5217\u8282\u70B9\u7C7B\u578B\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-comment">// \u8FDB\u5165 FunctionDeclaration \u8282\u70B9\u65F6\u8C03\u7528</span>
traverse(ast, {
  <span class="hljs-attr">FunctionDeclaration</span>: {
      <span class="hljs-function"><span class="hljs-title">enter</span>(<span class="hljs-params">path, state</span>)</span> {}
  }
})

<span class="hljs-comment">// \u9ED8\u8BA4\u662F\u8FDB\u5165\u8282\u70B9\u65F6\u8C03\u7528\uFF0C\u548C\u4E0A\u9762\u7B49\u4EF7</span>
traverse(ast, {
  <span class="hljs-function"><span class="hljs-title">FunctionDeclaration</span>(<span class="hljs-params">path, state</span>)</span> {}
})

<span class="hljs-comment">// \u8FDB\u5165 FunctionDeclaration \u548C VariableDeclaration \u8282\u70B9\u65F6\u8C03\u7528</span>
traverse(ast, {
  <span class="hljs-string">'FunctionDeclaration|VariableDeclaration'</span>(path, state) {}
})

<span class="hljs-comment">// \u901A\u8FC7\u522B\u540D\u6307\u5B9A\u79BB\u5F00\u5404\u79CD Declaration \u8282\u70B9\u65F6\u8C03\u7528</span>
traverse(ast, {
  <span class="hljs-attr">Declaration</span>: {
      <span class="hljs-function"><span class="hljs-title">exit</span>(<span class="hljs-params">path, state</span>)</span> {}
  }
})

</code></pre>
<p>\u5177\u4F53\u7684\u522B\u540D\u6709\u54EA\u4E9B\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel%2Fblob%2Fmain%2Fpackages%2Fbabel-types%2Fsrc%2Fast-types%2Fgenerated%2Findex.ts%23L2489-L2535" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/babel/babel/blob/main/packages/babel-types/src/ast-types/generated/index.ts#L2489-L2535" ref="nofollow noopener noreferrer">babel-types \u7684\u7C7B\u578B\u5B9A\u4E49</a>\u53EF\u4EE5\u67E5\u3002</p>
<h4 data-id="heading-4">path</h4>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/538aefbdff92426c98c7f1da1feeb246~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>path \u662F\u904D\u5386\u8FC7\u7A0B\u4E2D\u7684\u8DEF\u5F84\uFF0C\u4F1A\u4FDD\u7559\u4E0A\u4E0B\u6587\u4FE1\u606F\uFF0C\u6709\u5F88\u591A\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u6BD4\u5982:</p>
<ul>
<li>path.node \u6307\u5411\u5F53\u524D AST \u8282\u70B9</li>
<li>path.get\u3001path.set \u83B7\u53D6\u548C\u8BBE\u7F6E\u5F53\u524D\u8282\u70B9\u5C5E\u6027\u7684 path</li>
<li>path.parent \u6307\u5411\u7236\u7EA7 AST \u8282\u70B9</li>
<li>path.getSibling\u3001path.getNextSibling\u3001path.getPrevSibling \u83B7\u53D6\u5144\u5F1F\u8282\u70B9</li>
<li>path.find \u4ECE\u5F53\u524D\u8282\u70B9\u5411\u4E0A\u67E5\u627E\u8282\u70B9</li>
</ul>
<p>\u8FD9\u4E9B\u5C5E\u6027\u548C\u65B9\u6CD5\u662F\u83B7\u53D6\u5F53\u524D\u8282\u70B9\u4EE5\u53CA\u5B83\u7684\u5173\u8054\u8282\u70B9\u7684</p>
<ul>
<li>path.scope \u83B7\u53D6\u5F53\u524D\u8282\u70B9\u7684\u4F5C\u7528\u57DF\u4FE1\u606F</li>
</ul>
<p>\u8FD9\u4E2A\u5C5E\u6027\u53EF\u4EE5\u83B7\u53D6\u4F5C\u7528\u57DF\u7684\u4FE1\u606F</p>
<ul>
<li>path.isXxx \u5224\u65AD\u5F53\u524D\u8282\u70B9\u662F\u4E0D\u662F xx \u7C7B\u578B</li>
<li>path.assertXxx \u5224\u65AD\u5F53\u524D\u8282\u70B9\u662F\u4E0D\u662F xx \u7C7B\u578B\uFF0C\u4E0D\u662F\u5219\u629B\u51FA\u5F02\u5E38</li>
</ul>
<p>isXxx\u3001assertXxx \u7CFB\u5217\u65B9\u6CD5\u53EF\u4EE5\u7528\u4E8E\u5224\u65AD AST \u7C7B\u578B</p>
<ul>
<li>path.insertBefore\u3001path.insertAfter \u63D2\u5165\u8282\u70B9</li>
<li>path.replaceWith\u3001path.replaceWithMultiple\u3001replaceWithSourceString \u66FF\u6362\u8282\u70B9</li>
<li>path.remove \u5220\u9664\u8282\u70B9</li>
</ul>
<p>\u8FD9\u4E9B\u65B9\u6CD5\u53EF\u4EE5\u5BF9 AST \u8FDB\u884C\u589E\u5220\u6539</p>
<ul>
<li>path.skip \u8DF3\u8FC7\u5F53\u524D\u8282\u70B9\u7684\u5B50\u8282\u70B9\u7684\u904D\u5386</li>
<li>path.stop \u7ED3\u675F\u540E\u7EED\u904D\u5386</li>
</ul>
<p>\u8FD9\u4FE9\u65B9\u6CD5\u53EF\u4EE5\u8DF3\u8FC7\u4E00\u4E9B\u904D\u5386</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96ed2f4589d341de9b407ef7e58e58a0~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u4E0A\u9762\u7F57\u5217\u4E86\u51E0\u4E2A\u5E38\u7528\u7684 api\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E9B api \u5B8C\u6210\u5BF9 AST \u7684\u64CD\u4F5C\u3002\u5F53\u7136\uFF0Cpath \u7684 api \u4E0D\u662F\u53EA\u6709\u8FD9\u4E9B\uFF0C\u540E\u9762\u5B9E\u6218\u6848\u4F8B\u7528\u5230\u4E86\u518D\u4ECB\u7ECD\u3002</p>
<h4 data-id="heading-5">state</h4>
<p>\u7B2C\u4E8C\u4E2A\u53C2\u6570 state \u5219\u662F\u904D\u5386\u8FC7\u7A0B\u4E2D\u5728\u4E0D\u540C\u8282\u70B9\u4E4B\u95F4\u4F20\u9012\u6570\u636E\u7684\u673A\u5236\uFF0C\u63D2\u4EF6\u4F1A\u901A\u8FC7 state \u4F20\u9012 options \u548C file \u4FE1\u606F\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u901A\u8FC7 state \u5B58\u50A8\u4E00\u4E9B\u904D\u5386\u8FC7\u7A0B\u4E2D\u7684\u5171\u4EAB\u6570\u636E\u3002</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee26748e8dd54dcca660e593271411be~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<h2 data-id="heading-6">@babel/types</h2>
<p>\u904D\u5386 AST \u7684\u8FC7\u7A0B\u4E2D\u9700\u8981\u521B\u5EFA\u4E00\u4E9B AST \u548C\u5224\u65AD AST \u7684\u7C7B\u578B\uFF0C\u8FD9\u65F6\u5019\u5C31\u9700\u8981 <code>@babel/types</code> \u5305\u3002</p>
<p>\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u5982\u679C\u8981\u521B\u5EFAIfStatement\u5C31\u53EF\u4EE5\u8C03\u7528</p>
<pre><code class="hljs language-javascript" lang="javascript">t.ifStatement(test, consequent, alternate);
</code></pre>
<p>\u800C\u5224\u65AD\u8282\u70B9\u662F\u5426\u662F IfStatement \u5C31\u53EF\u4EE5\u8C03\u7528 isIfStatement \u6216\u8005 assertIfStatement</p>
<pre><code class="hljs language-javascript" lang="javascript">t.isIfStatement(node, opts);
t.assertIfStatement(node, opts);
</code></pre>
<p>opts \u53EF\u4EE5\u6307\u5B9A\u4E00\u4E9B\u5C5E\u6027\u662F\u4EC0\u4E48\u503C\uFF0C\u589E\u52A0\u66F4\u591A\u9650\u5236\u6761\u4EF6\uFF0C\u505A\u66F4\u7CBE\u786E\u7684\u5224\u65AD\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript">t.isIdentifier(node, { <span class="hljs-attr">name</span>: <span class="hljs-string">"paths"</span> })
</code></pre>
<p>isXxx \u4F1A\u8FD4\u56DE boolean \u8868\u793A\u7ED3\u679C\uFF0C\u800C assertXxx \u5219\u4F1A\u5728\u7C7B\u578B\u4E0D\u4E00\u81F4\u65F6\u629B\u5F02\u5E38\u3002</p>
<p>\u6240\u6709\u7684 AST \u7684 build\u3001assert \u7684 api \u53EF\u4EE5\u5728 <a href="https://link.juejin.cn?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-types%23api" target="_blank" rel="nofollow noopener noreferrer" title="https://babeljs.io/docs/en/babel-types#api" ref="nofollow noopener noreferrer">babel types \u6587\u6863</a>\u4E2D\u67E5\u3002</p>
<h2 data-id="heading-7">@babel/template</h2>
<p>\u901A\u8FC7 @babel/types \u521B\u5EFA AST \u8FD8\u662F\u6BD4\u8F83\u9EBB\u70E6\u7684\uFF0C\u8981\u4E00\u4E2A\u4E2A\u7684\u521B\u5EFA\u7136\u540E\u7EC4\u88C5\uFF0C\u5982\u679C AST \u8282\u70B9\u6BD4\u8F83\u591A\u7684\u8BDD\u9700\u8981\u5199\u5F88\u591A\u4EE3\u7801\uFF0C\u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u4F7F\u7528 <code>@babel/template</code> \u5305\u6765\u6279\u91CF\u521B\u5EFA\u3002</p>
<p>\u8FD9\u4E2A\u5305\u6709\u8FD9\u4E9B api\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> ast = template(code, [opts])(args);
<span class="hljs-keyword">const</span> ast = template.ast(code, [opts]);
<span class="hljs-keyword">const</span> ast = template.program(code, [opts]);
</code></pre>
<p>\u5982\u679C\u662F\u6839\u636E\u6A21\u7248\u521B\u5EFA\u6574\u4E2A AST\uFF0C\u90A3\u4E48\u7528 template.ast \u6216\u8005 template.program \u65B9\u6CD5\uFF0C\u8FD9\u4FE9\u90FD\u662F\u76F4\u63A5\u8FD4\u56DE ast \u7684\uFF0Ctemplate.program \u8FD4\u56DE\u7684 AST \u7684\u6839\u8282\u70B9\u662F Program\u3002</p>
<p>\u5982\u679C\u77E5\u9053\u5177\u4F53\u521B\u5EFA\u7684 AST \u7684\u7C7B\u578B\uFF0C\u53EF\u4EE5\u4F7F\u7528 template.expression\u3001template.statement\u3001template.statements \u7B49\u65B9\u6CD5\u521B\u5EFA\u5177\u4F53\u7684 AST\u3002</p>
<p>\u9ED8\u8BA4 template.ast \u521B\u5EFA\u7684 Expression \u4F1A\u88AB\u5305\u88F9\u4E00\u5C42 ExpressionStatement \u8282\u70B9\uFF08\u4F1A\u88AB\u5F53\u6210\u8868\u8FBE\u5F0F\u8BED\u53E5\u6765 parse\uFF09\uFF0C\u4F46\u5F53 template.expression \u65B9\u6CD5\u521B\u5EFA\u7684 AST \u5C31\u4E0D\u4F1A\u3002</p>
<p>\u5982\u679C\u6A21\u7248\u4E2D\u6709\u5360\u4F4D\u7B26\uFF0C\u90A3\u4E48\u5C31\u7528 template \u7684 api\uFF0C\u5728\u6A21\u7248\u4E2D\u5199\u4E00\u4E9B\u5360\u4F4D\u7684\u53C2\u6570\uFF0C\u8C03\u7528\u65F6\u4F20\u5165\u8FD9\u4E9B\u5360\u4F4D\u7B26\u53C2\u6570\u5BF9\u5E94\u7684 AST \u8282\u70B9\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> fn = template(<span class="hljs-string">\`console.log(NAME)\`</span>);

<span class="hljs-keyword">const</span> ast = fn({
  <span class="hljs-attr">NAME</span>: t.stringLiteral(<span class="hljs-string">"guang"</span>),
});
</code></pre>
<p>\u6216\u8005</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> fn = template(<span class="hljs-string">\`console.log(%%NAME%%)\`</span>);

<span class="hljs-keyword">const</span> ast = fn({
  <span class="hljs-attr">NAME</span>: t.stringLiteral(<span class="hljs-string">"guang"</span>),
});
</code></pre>
<p>\u8FD9\u4E24\u79CD\u5360\u4F4D\u7B26\u7684\u5199\u6CD5\u90FD\u53EF\u4EE5\uFF0C\u5F53\u5360\u4F4D\u7B26\u548C\u5176\u4ED6\u53D8\u91CF\u540D\u51B2\u7A81\u65F6\u53EF\u4EE5\u7528\u7B2C\u4E8C\u79CD\u3002</p>
<h2 data-id="heading-8">@babel/generator</h2>
<p>AST \u8F6C\u6362\u5B8C\u4E4B\u540E\u5C31\u8981\u6253\u5370\u6210\u76EE\u6807\u4EE3\u7801\u5B57\u7B26\u4E32\uFF0C\u901A\u8FC7 <code>@babel/generator</code> \u5305\u7684 generate api</p>
<pre><code class="">function (ast: Object, opts: Object, code: string): {code, map} 
</code></pre>
<p>\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u8981\u6253\u5370\u7684 AST</p>
<p>\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F options\uFF0C\u6307\u5B9A\u6253\u5370\u7684\u4E00\u4E9B\u7EC6\u8282\uFF0C\u6BD4\u5982\u901A\u8FC7 comments \u6307\u5B9A\u662F\u5426\u5305\u542B\u6CE8\u91CA\uFF0C\u901A\u8FC7 minified \u6307\u5B9A\u662F\u5426\u5305\u542B\u7A7A\u767D\u5B57\u7B26</p>
<p>\u7B2C\u4E09\u4E2A\u53C2\u6570\u5F53<a ref="nofollow noopener noreferrer" href="https://link.juejin.cn?target=undefined">\u591A\u4E2A\u6587\u4EF6\u5408\u5E76\u6253\u5370</a>\u7684\u65F6\u5019\u9700\u8981\u7528\u5230</p>
<p>options \u4E2D\u5E38\u7528\u7684\u662F sourceMaps\uFF0C\u5F00\u542F\u4E86\u8FD9\u4E2A\u9009\u9879\u624D\u4F1A\u751F\u6210 sourcemap</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> { code, map } = generate(ast, { <span class="hljs-attr">sourceMaps</span>: <span class="hljs-literal">true</span> })
</code></pre>
<h2 data-id="heading-9">@babel/code-frame</h2>
<p>\u5F53\u6709\u9519\u8BEF\u4FE1\u606F\u8981\u6253\u5370\u7684\u65F6\u5019\uFF0C\u9700\u8981\u6253\u5370\u9519\u8BEF\u4F4D\u7F6E\u7684\u4EE3\u7801\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>@babel/code-frame</code>\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> result = codeFrameColumns(rawLines, location, {
  <span class="hljs-comment">/* options */</span>
});
</code></pre>
<p>options \u53EF\u4EE5\u8BBE\u7F6E highlighted \uFF08\u662F\u5426\u9AD8\u4EAE\uFF09\u3001message\uFF08\u5C55\u793A\u5565\u9519\u8BEF\u4FE1\u606F\uFF09\u3002</p>
<p>\u6BD4\u5982</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> { codeFrameColumns } = <span class="hljs-built_in">require</span>(<span class="hljs-string">"@babel/code-frame"</span>);

<span class="hljs-keyword">try</span> {
 <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">"xxx \u9519\u8BEF"</span>);
} <span class="hljs-keyword">catch</span> (err) {
  <span class="hljs-built_in">console</span>.error(codeFrameColumns(<span class="hljs-string">\`const name = guang\`</span>, {
      <span class="hljs-attr">start</span>: { <span class="hljs-attr">line</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">column</span>: <span class="hljs-number">14</span> }
  }, {
    <span class="hljs-attr">highlightCode</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">message</span>: err.message
  }));
}
</code></pre>
<p>\u4F1A\u6709\u6BD4\u8F83\u53CB\u597D\u7684\u6253\u5370\u4FE1\u606F</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e31ce65fd2f644439f2848b0e0e94c1b~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png" loading="lazy" class="medium-zoom-image"></p>
<h2 data-id="heading-10">@babel/core</h2>
<p>\u524D\u9762\u7684\u5305\u662F\u5B8C\u6210\u67D0\u4E00\u90E8\u5206\u7684\u529F\u80FD\u7684\uFF0C\u800C <code>@babel/core</code> \u5305\u5219\u662F\u57FA\u4E8E\u5B83\u4EEC\u5B8C\u6210\u6574\u4E2A\u7F16\u8BD1\u6D41\u7A0B\uFF0C\u4ECE\u6E90\u7801\u5230\u76EE\u6807\u4EE3\u7801\uFF0C\u751F\u6210 sourcemap\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript">transformSync(code, options); <span class="hljs-comment">// =&gt; { code, map, ast }</span>
transformFileSync(filename, options); <span class="hljs-comment">// =&gt; { code, map, ast }</span>
transformFromAstSync(
  parsedAst,
  sourceCode,
  options
); <span class="hljs-comment">// =&gt; { code, map, ast }</span>
</code></pre>
<p>\u524D\u4E09\u4E2A transformXxx \u7684 api \u5206\u522B\u662F\u4ECE\u6E90\u4EE3\u7801\u3001\u6E90\u4EE3\u7801\u6587\u4EF6\u3001\u6E90\u4EE3\u7801 AST \u5F00\u59CB\u5904\u7406\uFF0C\u6700\u7EC8\u751F\u6210\u76EE\u6807\u4EE3\u7801\u548C sourcemap\u3002</p>
<p>options \u4E3B\u8981\u914D\u7F6E plugins \u548C presets\uFF0C\u6307\u5B9A\u5177\u4F53\u8981\u505A\u4EC0\u4E48\u8F6C\u6362\u3002</p>
<p>\u8FD9\u4E9B api \u4E5F\u540C\u6837\u63D0\u4F9B\u4E86\u5F02\u6B65\u7684\u7248\u672C\uFF0C\u5F02\u6B65\u5730\u8FDB\u884C\u7F16\u8BD1\uFF0C\u8FD4\u56DE\u4E00\u4E2A promise</p>
<pre><code class="hljs language-javascript" lang="javascript">transformAsync(<span class="hljs-string">"code();"</span>, options).then(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {})
transformFileAsync(<span class="hljs-string">"filename.js"</span>, options).then(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {})
transformFromAstAsync(parsedAst, sourceCode, options).then(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {})
</code></pre>
<p>\u6CE8\u610F\uFF1AtransformXxx \u7684 api\uFF0C\u5DF2\u7ECF\u88AB\u6807\u8BB0\u4E3A\u8FC7\u65F6\u4E86\uFF0C\u540E\u7EED\u4F1A\u5220\u6389\uFF0C\u4E0D\u5EFA\u8BAE\u7528\uFF0C\u76F4\u63A5\u7528 transformXxxSync \u548C transformXxxAsync\u3002</p>
<p>@babel/core \u5305\u8FD8\u6709\u4E00\u4E2A createConfigItem \u7684 api\uFF0C\u7528\u4E8E plugin \u548C preset \u7684\u5C01\u88C5\uFF0C\u540E\u9762\u7AE0\u8282\u4F1A\u6D89\u53CA\u5230\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript">createConfigItem(value, options) <span class="hljs-comment">// configItem</span>
</code></pre>
<h2 data-id="heading-11">\u603B\u7ED3</h2>
<p>\u8FD9\u4E00\u8282\u6211\u4EEC\u4E86\u89E3\u4E86\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u5404\u9636\u6BB5\u7684 api\uFF1A</p>
<ul>
<li><code>@babel/parser</code> \u5BF9\u6E90\u7801\u8FDB\u884C parse\uFF0C\u53EF\u4EE5\u901A\u8FC7 plugins\u3001sourceType \u7B49\u6765\u6307\u5B9A parse \u8BED\u6CD5</li>
<li><code>@babel/traverse</code> \u901A\u8FC7 visitor \u51FD\u6570\u5BF9\u904D\u5386\u5230\u7684 ast \u8FDB\u884C\u5904\u7406\uFF0C\u5206\u4E3A enter \u548C exit \u4E24\u4E2A\u9636\u6BB5\uFF0C\u5177\u4F53\u64CD\u4F5C AST \u4F7F\u7528 path \u7684 api\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7 state \u6765\u5728\u904D\u5386\u8FC7\u7A0B\u4E2D\u4F20\u9012\u4E00\u4E9B\u6570\u636E</li>
<li><code>@babel/types</code> \u7528\u4E8E\u521B\u5EFA\u3001\u5224\u65AD AST \u8282\u70B9\uFF0C\u63D0\u4F9B\u4E86 xxx\u3001isXxx\u3001assertXxx \u7684 api</li>
<li><code>@babel/template</code> \u7528\u4E8E\u6279\u91CF\u521B\u5EFA\u8282\u70B9</li>
<li><code>@babel/code-frame</code> \u53EF\u4EE5\u521B\u5EFA\u53CB\u597D\u7684\u62A5\u9519\u4FE1\u606F</li>
<li><code>@babel/generator</code> \u6253\u5370 AST \u6210\u76EE\u6807\u4EE3\u7801\u5B57\u7B26\u4E32\uFF0C\u652F\u6301 comments\u3001minified\u3001sourceMaps \u7B49\u9009\u9879\u3002</li>
<li><code>@babel/core</code> \u57FA\u4E8E\u4E0A\u9762\u7684\u5305\u6765\u5B8C\u6210 babel \u7684\u7F16\u8BD1\u6D41\u7A0B\uFF0C\u53EF\u4EE5\u4ECE\u6E90\u7801\u5B57\u7B26\u4E32\u3001\u6E90\u7801\u6587\u4EF6\u3001AST \u5F00\u59CB\u3002</li>
</ul>
<p>\u5B66\u5B8C\u8FD9\u4E00\u8282\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7528 babel \u7684 api \u6765\u5B9E\u73B0\u4E00\u4E9B\u529F\u80FD\u4E86\uFF0C\u4E0B\u4E00\u8282\u5F00\u59CB\u7B2C\u4E00\u4E2A\u5B9E\u6218\u6848\u4F8B\u3002</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{a as default};
