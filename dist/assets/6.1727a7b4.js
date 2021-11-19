var s={name:"6\u3001js parser \u7684\u5386\u53F2",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>\u524D\u9762\u6211\u4EEC\u5B66\u4E60\u4E86 babel \u7684 parser \u548C AST\uFF0Cbabel \u7684 parser \u662F\u57FA\u4E8E acorn \u6269\u5C55\u800C\u6765\u7684\uFF0C\u800C acorn \u4E5F\u4E0D\u662F\u6700\u65E9\u7684 js parser\uFF0Cjs parser \u7684\u5386\u53F2\u662F\u600E\u6837\u7684\uFF1F \u5404\u79CD parser \u4E4B\u95F4\u7684\u5173\u7CFB\u662F\u4EC0\u4E48\u6837\u7684\u5462\uFF1F\u8FD9\u8282\u6211\u4EEC\u6765\u68B3\u7406\u4E00\u4E0B\u3002</p>
<h2 data-id="heading-0">JS parser\u7684\u5386\u53F2</h2>
<h3 data-id="heading-1">SpiderMonkey \u548C estree \u6807\u51C6</h3>
<p>\u5728 nodejs \u51FA\u73B0\u4E4B\u540E\uFF0C\u524D\u7AEF\u53EF\u4EE5\u7528 nodejs \u6765\u505A\u4E00\u4E9B\u5DE5\u7A0B\u5316\u7684\u4E8B\u60C5\uFF0C\u4E5F\u5C31\u6709\u4E86\u5BF9 js parser \u7684\u9700\u6C42\uFF0C\u5F53\u65F6 Mozilla \u5728 MDN \u4E0A\u516C\u5E03\u4E86 SpiderMonkey\uFF08c++ \u5199\u7684 js \u5F15\u64CE\uFF09\u7684 parser api \u548C AST \u6807\u51C6\uFF0C\u6240\u4EE5\u5F53\u65F6\u6700\u65E9\u7684 JS parser ---- <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fjquery%2Fesprima" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/jquery/esprima" ref="nofollow noopener noreferrer">esprima</a> \u5C31\u662F\u57FA\u4E8E SpiderMonkey \u7684 AST \u6807\u51C6\u6765\u5B9E\u73B0\u7684\uFF0C\u540E\u6765\u5F62\u6210\u4E86 <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Festree%2Festree" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/estree/estree" ref="nofollow noopener noreferrer">estree \u6807\u51C6</a>\u3002 \u5F53\u65F6\u5F88\u591A\u7684\u524D\u7AEF\u9886\u57DF\u7684\u5DE5\u5177\u90FD\u57FA\u4E8E esprima\u3002</p>
<p>\u4F46\u662F\u5230\u4E86 2015 \u5E74\u4E4B\u540E\uFF0Ces \u6807\u51C6\u4E00\u5E74\u4E00\u4E2A\u7248\u672C\uFF0C\u800C esprima \u7684\u66F4\u65B0\u901F\u5EA6\u8DDF\u4E0D\u4E0A\uFF0C\u5B83\u8DDF\u4E0D\u4E0A\u4E5F\u5C31\u5BFC\u81F4\u4E86\u4F9D\u8D56\u5B83\u7684\u4E00\u7CFB\u5217\u5DE5\u5177\u90FD\u8DDF\u4E0D\u4E0A\uFF0C\u6240\u4EE5 eslint \u5C31 fork \u4E86\u4E00\u4EFD esprima\uFF0C\u505A\u4E86\u4E00\u4E9B\u6269\u5C55\uFF0C\u6765\u81EA\u5DF1\u5B9E\u73B0\u65B0\u8BED\u6CD5\u7684 parse\uFF0C\u8FD9\u5C31\u662F espree\uFF0C\u5B83\u4F9D\u7136\u662F estree \u6807\u51C6\u7684\u3002</p>
<h3 data-id="heading-2">acorn</h3>
<p>\u540E\u9762\u51FA\u73B0\u4E86 <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Facornjs%2Facorn" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/acornjs/acorn" ref="nofollow noopener noreferrer">acorn</a>\uFF0C\u4E5F\u662F estree \u6807\u51C6\u7684\u5B9E\u73B0\uFF0C\u4F46\u662F\u4ED6\u7684\u901F\u5EA6\u6BD4 esprima \u5FEB\uFF0C\u800C\u4E14\u652F\u6301\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u63D2\u4EF6\u6269\u5C55\u8BED\u6CD5\u652F\u6301\u3002\u6B63\u662F\u901F\u5EA6\u5FEB\u52A0\u4E0A\u652F\u6301\u63D2\u4EF6\u8BA9\u5F88\u591A\u5DE5\u5177\u90FD\u8F6C\u800C\u4F7F\u7528 acorn\u3002</p>
<p>eslint \u7684 parser ---- <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Feslint%2Fespree" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/eslint/espree" ref="nofollow noopener noreferrer">espree</a> \u672C\u6765\u662F fork \u81EA esprima\uFF0C\u4F46\u540E\u6765 espree 2.0 \u57FA\u4E8E acorn \u91CD\u65B0\u5B9E\u73B0\u4E86\uFF0C\u4E5F\u4F7F\u7528 acorn \u7684\u63D2\u4EF6\u673A\u5236\u6765\u6269\u5C55\u8BED\u6CD5\u3002</p>
<p>babel parser(babylon) \u4E5F\u662F\u57FA\u4E8E acorn\uFF0C\u5E76\u4E14\u5BF9 AST \u8282\u70B9\u548C\u5C5E\u6027\u90FD\u505A\u4E86\u6269\u5C55\uFF0C\u4E5F\u63D0\u4F9B\u4E86\u4E00\u4E9B\u652F\u6301  typescript\u3001jsx\u3001flow \u7684\u63D2\u4EF6\uFF08\u5C31\u662F\u6211\u4EEC\u53EF\u4EE5\u5728 @babel/parser \u7684 plugins \u91CC\u9762\u6307\u5B9A\u7684\u90A3\u4E9B\uFF09\u3002</p>
<h3 data-id="heading-3">js parser \u4E4B\u95F4\u7684\u5173\u7CFB</h3>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f30072e7a774fbf85539daedb8813ad~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u5B83\u4EEC\u7684\u5173\u7CFB\u5982\u56FE\u6240\u793A\uFF0Cestree \u6807\u51C6\u662F\u57FA\u4E8E SpiderMonkey \u7684 AST \u6807\u51C6\u6269\u5C55\u7684\uFF0C\u5B83\u7684\u5B9E\u73B0\u6709 esprima\u3001acorn \u7B49\uFF0C\u73B0\u5728 espree\u3001babel parser \u90FD\u662F\u57FA\u4E8Eacorn\u505A\u7684\u6269\u5C55\uFF0C\u56E0\u4E3A acorn \u63D0\u4F9B\u4E86\u63D2\u4EF6\u673A\u5236\u3002</p>
<p>\u5F53\u7136\u4E5F\u4E0D\u662F\u6240\u6709\u7684 js parser \u90FD\u662F estree \u6807\u51C6\u7684\uFF0C\u6BD4\u5982 terser\u3001typescript \u7B49\u90FD\u6709\u81EA\u5DF1\u7684 AST \u6807\u51C6\u3002</p>
<h4 data-id="heading-4">babel parser \u5BF9 estree AST \u7684\u6269\u5C55</h4>
<p>babel \u57FA\u4E8E acorn \u63D2\u4EF6\u5BF9 estree AST \u505A\u4E86\u5982\u4E0B\u6269\u5C55</p>
<ul>
<li>\u628A Literal \u66FF\u6362\u6210\u4E86 StringLiteral\u3001NumericLiteral\u3001 BigIntLiteral\u3001 BooleanLiteral\u3001 NullLiteral\u3001 RegExpLiteral</li>
<li>\u628A Property \u66FF\u6362\u6210\u4E86 ObjectProperty \u548C ObjectMethod</li>
<li>\u628A MethodDefinition \u66FF\u6362\u6210\u4E86 ClassMethod</li>
<li>Program \u548C BlockStatement \u652F\u6301\u4E86 directives \u5C5E\u6027\uFF0C\u4E5F\u5C31\u662F 'use strict' \u7B49\u6307\u4EE4\u7684\u89E3\u6790\uFF0C\u5BF9\u5E94\u7684 ast \u662F Directive \u548C DirectiveLiteral</li>
<li>ChainExpression \u66FF\u6362\u4E3A\u4E86 ObjectMemberExpression \u548C OptionalCallExpression</li>
<li>ImportExpression \u66FF\u6362\u4E3A\u4E86 CallExpression \u5E76\u4E14 callee \u5C5E\u6027\u8BBE\u7F6E\u4E3A Import</li>
</ul>
<p>\u8FD9\u4E9B\u53EF\u4EE5\u5728 <a href="https://link.juejin.cn?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-parser%23output" target="_blank" rel="nofollow noopener noreferrer" title="https://babeljs.io/docs/en/babel-parser#output" ref="nofollow noopener noreferrer">babel parser \u7684\u6587\u6863</a>\u91CC\u770B\u5230\u3002</p>
<h2 data-id="heading-5">acorn\u63D2\u4EF6</h2>
<p>babel parser \u57FA\u4E8E acorn \u6269\u5C55\u4E86\u4E00\u4E9B\u8BED\u6CD5\uFF0C\u90A3\u5B83\u662F\u600E\u4E48\u6269\u5C55\u7684\u5462\uFF1F \u6211\u4EEC\u5199\u4E00\u4E2A acorn \u63D2\u4EF6\u6765\u611F\u53D7\u4E00\u4E0B\u3002</p>
<p>acorn \u4E3B\u8981\u662F\u4E00\u4E2A Parser \u7C7B\uFF0C\u4E0D\u540C\u7684\u65B9\u6CD5\u5B9E\u73B0\u4E86\u4E0D\u540C\u7684\u903B\u8F91\uFF0C\u63D2\u4EF6\u6269\u5C55\u5C31\u662F\u7EE7\u627F\u8FD9\u4E2A Parser\uFF0C\u91CD\u5199\u4E00\u4E9B\u65B9\u6CD5\u3002</p>
<p>acorn \u7684 api \u5982\u4E0B\uFF0C\u5176\u4E2D acorn-jsx\u3001acorn-bigint \u5C31\u662F acorn \u63D2\u4EF6</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> { Parser } = <span class="hljs-built_in">require</span>(<span class="hljs-string">"acorn"</span>)

<span class="hljs-keyword">const</span> MyParser = Parser.extend(
  <span class="hljs-built_in">require</span>(<span class="hljs-string">"acorn-jsx"</span>)(),
  <span class="hljs-built_in">require</span>(<span class="hljs-string">"acorn-bigint"</span>)
)
<span class="hljs-built_in">console</span>.log(MyParser.parse(<span class="hljs-string">"// Some bigint + JSX code"</span>))
</code></pre>
<p>\u63D2\u4EF6\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u63A5\u6536\u4E4B\u524D\u7684 Parser\uFF0C\u8FD4\u56DE\u6269\u5C55\u4EE5\u540E\u7684 Parser</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-built_in">module</span>.exports = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">noisyReadToken</span>(<span class="hljs-params">Parser</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Parser</span> </span>{
    <span class="hljs-function"><span class="hljs-title">readToken</span>(<span class="hljs-params">code</span>)</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"Reading a token!"</span>)
      <span class="hljs-built_in">super</span>.readToken(code)
    }
  }
}
</code></pre>
<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5199\u4E00\u4E2A acorn \u63D2\u4EF6\uFF1A</p>
<blockquote>
<p>\u7ED9 javascript \u4E00\u4E2A\u5173\u952E\u5B57 guang\uFF0C\u53EF\u4EE5\u4F5C\u4E3A statement \u5355\u72EC\u4F7F\u7528</p>
</blockquote>
<p>\u6211\u4EEC\u77E5\u9053 parse \u7684\u8FC7\u7A0B\u5176\u5B9E\u5C31\u662F<code>\u5206\u8BCD</code> + <code>\u7EC4\u88C5 AST</code>\u8FD9\u4E24\u6B65\uFF08\u4E00\u822C\u53EB\u8BCD\u6CD5\u5206\u6790\u548C\u8BED\u6CD5\u5206\u6790\uFF09\uFF0C\u6211\u4EEC\u53EA\u8981\u5B9E\u73B0\u8FD9\u4E24\u6B65\u5C31\u53EF\u4EE5\u4E86\u3002</p>
<h4 data-id="heading-6">\u5206\u8BCD\uFF08\u8BCD\u6CD5\u5206\u6790\uFF09</h4>
<p>\u6211\u4EEC\u662F\u60F3\u589E\u52A0\u4E00\u4E2A\u5173\u952E\u5B57\uFF0Cacorn \u6709 keywords \u5C5E\u6027\uFF0C\u662F\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u7528\u6765\u505A\u5173\u952E\u5B57\u62C6\u5206\uFF0C\u6240\u4EE5\u6211\u4EEC\u91CD\u5199 keywords \u5C5E\u6027\u5C31\u53EF\u4EE5\u3002\u5E76\u4E14\u8FD8\u8981\u4E3A\u65B0\u7684\u5173\u952E\u5B57\u6CE8\u518C\u4E00\u4E2A token \u7C7B\u578B\u3002</p>
<p>acorn Parser \u7684\u5165\u53E3\u65B9\u6CD5\u662F parse\uFF0C\u6211\u4EEC\u8981\u5728 parse \u65B9\u6CD5\u91CC\u9762\u8BBE\u7F6E keywords\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-title">parse</span>(<span class="hljs-params">program</span>)</span> {
    <span class="hljs-keyword">var</span> newKeywords = <span class="hljs-string">"break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this const class extends export import super"</span>;
    newKeywords += <span class="hljs-string">" guang"</span>;<span class="hljs-comment">// \u589E\u52A0\u4E00\u4E2A\u5173\u952E\u5B57</span>
    <span class="hljs-built_in">this</span>.keywords = <span class="hljs-keyword">new</span> <span class="hljs-built_in">RegExp</span>(<span class="hljs-string">"^(?:"</span> + newKeywords.replace(<span class="hljs-regexp">/ /g</span>, <span class="hljs-string">"|"</span>) + <span class="hljs-string">")$"</span>)

    <span class="hljs-keyword">return</span>(<span class="hljs-built_in">super</span>.parse(program));
}
</code></pre>
<p>\u7136\u540E\u6CE8\u518C\u4E00\u4E2A\u65B0\u7684 token \u7C7B\u578B\u6765\u6807\u8BC6\u5B83</p>
<pre><code class="hljs language-javascript" lang="javascript">Parser.acorn.keywordTypes[<span class="hljs-string">"guang"</span>] = <span class="hljs-keyword">new</span> TokenType(<span class="hljs-string">"guang"</span>,{<span class="hljs-attr">keyword</span>: <span class="hljs-string">"guang"</span>});
</code></pre>
<p>\u8FD9\u6837 acorn \u5C31\u4F1A\u5728 parse \u7684\u65F6\u5019\u5206\u51FA <code>guang</code> \u8FD9\u4E2A\u5173\u952E\u5B57</p>
<h4 data-id="heading-7">\u7EC4\u88C5AST\uFF08\u8BED\u6CD5\u5206\u6790\uFF09</h4>
<p>\u5149\u5206\u51FA token \u662F\u6CA1\u610F\u4E49\u7684\uFF0C\u8981\u7EC4\u88C5\u5230 AST \u4E2D\u3002</p>
<p>acorn \u5728 parse \u5230\u4E0D\u540C\u7C7B\u578B\u7684\u8282\u70B9\u4F1A\u8C03\u7528\u4E0D\u540C\u7684 parseXxx \u65B9\u6CD5\uFF0C\u56E0\u4E3A\u6211\u4EEC\u662F\u5728 statement \u91CC\u9762\u7528\uFF0C\u90A3\u4E48\u5C31\u8981\u91CD\u5199 parseStatement \u65B9\u6CD5\uFF0C\u5728\u91CC\u9762\u7EC4\u88C5\u65B0\u7684 statement \u8282\u70B9\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-title">parseStatement</span>(<span class="hljs-params">context, topLevel, <span class="hljs-built_in">exports</span></span>)</span> {
  <span class="hljs-keyword">var</span> tokenType = <span class="hljs-built_in">this</span>.type;

  <span class="hljs-keyword">if</span> (tokenType == Parser.acorn.keywordTypes[<span class="hljs-string">"guang"</span>]) {
    <span class="hljs-keyword">var</span> node = <span class="hljs-built_in">this</span>.startNode();
    <span class="hljs-built_in">this</span>.next();
    <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.finishNode({<span class="hljs-attr">value</span>: <span class="hljs-string">'guang'</span>},<span class="hljs-string">'GuangStatement'</span>);
  }
  <span class="hljs-keyword">else</span> {
    <span class="hljs-keyword">return</span>(<span class="hljs-built_in">super</span>.parseStatement(context, topLevel, <span class="hljs-built_in">exports</span>));
  }
}
</code></pre>
<p>this.type \u662F\u5F53\u524D\u5904\u7406\u5230\u7684 token \u7684\u7C7B\u578B\uFF0C this.next \u662F\u6D88\u8D39\u8FD9\u4E2A token\uFF0C\u6211\u4EEC\u8BC6\u522B\u51FA token \u7684\u7C7B\u578B\u4E3A guang \u7684\u65F6\u5019\uFF0C\u5C31\u7EC4\u88C5\u6210\u4E00\u4E2A AST\u3002</p>
<p>\u901A\u8FC7 this.startNode() \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684AST\u8282\u70B9\uFF0C\u7136\u540E this.next() \u6D88\u8D39\u6389\u8FD9\u4E2A token\uFF0C\u4E4B\u540E\u8FD4\u56DE\u65B0\u7684 AST \u8282\u70B9\u3002</p>
<p>\u5982\u679C\u4E0D\u662F\u6211\u4EEC\u6269\u5C55\u7684 token\uFF0C\u5219\u8C03\u7528\u7236\u7C7B\u7684 parseStatement \u5904\u7406\u3002</p>
<p>\u8FD9\u6837\u80FD\u6210\u529F\u5206\u51FAtoken\uFF0C\u4F46\u662F\u6700\u597D\u628A\u5B83\u72EC\u7ACB\u6210\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u8FD9\u6837\u5B50\u7C7B\u53EF\u4EE5\u8986\u76D6\u8FD9\u4E2A\u65B9\u6CD5\u6765\u5BF9 parse \u903B\u8F91\u505A\u4FEE\u6539\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-title">parseStatement</span>(<span class="hljs-params">context, topLevel, <span class="hljs-built_in">exports</span></span>)</span> {
  <span class="hljs-keyword">var</span> tokenType = <span class="hljs-built_in">this</span>.type;

  <span class="hljs-keyword">if</span> (tokenType == Parser.acorn.keywordTypes[<span class="hljs-string">"guang"</span>]) {
    <span class="hljs-keyword">var</span> node = <span class="hljs-built_in">this</span>.startNode();
    <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.parseGuangStatement(node);
  }
  <span class="hljs-keyword">else</span> {
    <span class="hljs-keyword">return</span>(<span class="hljs-built_in">super</span>.parseStatement(context, topLevel, <span class="hljs-built_in">exports</span>));
  }
}

<span class="hljs-function"><span class="hljs-title">parseGuangStatement</span>(<span class="hljs-params">node</span>)</span> {
    <span class="hljs-built_in">this</span>.next();
    <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.finishNode({<span class="hljs-attr">value</span>: <span class="hljs-string">'guang'</span>},<span class="hljs-string">'GuangStatement'</span>);
}
</code></pre>
<p>\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> acorn = <span class="hljs-built_in">require</span>(<span class="hljs-string">"acorn"</span>);

<span class="hljs-keyword">const</span> Parser = acorn.Parser;
<span class="hljs-keyword">const</span> TokenType = acorn.TokenType;

Parser.acorn.keywordTypes[<span class="hljs-string">"guang"</span>] = <span class="hljs-keyword">new</span> TokenType(<span class="hljs-string">"guang"</span>,{<span class="hljs-attr">keyword</span>: <span class="hljs-string">"guang"</span>});

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">wordsRegexp</span>(<span class="hljs-params">words</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">RegExp</span>(<span class="hljs-string">"^(?:"</span> + words.replace(<span class="hljs-regexp">/ /g</span>, <span class="hljs-string">"|"</span>) + <span class="hljs-string">")$"</span>)
}

<span class="hljs-keyword">var</span> guangKeyword = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">Parser</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Parser</span> </span>{
    <span class="hljs-function"><span class="hljs-title">parse</span>(<span class="hljs-params">program</span>)</span> {
      <span class="hljs-keyword">let</span> newKeywords = <span class="hljs-string">"break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this const class extends export import super"</span>;
      newKeywords += <span class="hljs-string">" guang"</span>;
      <span class="hljs-built_in">this</span>.keywords = <span class="hljs-keyword">new</span> <span class="hljs-built_in">RegExp</span>(<span class="hljs-string">"^(?:"</span> + newKeywords.replace(<span class="hljs-regexp">/ /g</span>, <span class="hljs-string">"|"</span>) + <span class="hljs-string">")$"</span>)
      <span class="hljs-keyword">return</span>(<span class="hljs-built_in">super</span>.parse(program));
    }

    <span class="hljs-function"><span class="hljs-title">parseStatement</span>(<span class="hljs-params">context, topLevel, <span class="hljs-built_in">exports</span></span>)</span> {
      <span class="hljs-keyword">var</span> starttype = <span class="hljs-built_in">this</span>.type;

      <span class="hljs-keyword">if</span> (starttype == Parser.acorn.keywordTypes[<span class="hljs-string">"guang"</span>]) {
        <span class="hljs-keyword">var</span> node = <span class="hljs-built_in">this</span>.startNode();
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.parseGuangStatement(node);
      }
      <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">return</span>(<span class="hljs-built_in">super</span>.parseStatement(context, topLevel, <span class="hljs-built_in">exports</span>));
      }
    }

    <span class="hljs-function"><span class="hljs-title">parseGuangStatement</span>(<span class="hljs-params">node</span>)</span> {
      <span class="hljs-built_in">this</span>.next();
      <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.finishNode({<span class="hljs-attr">value</span>: <span class="hljs-string">'guang'</span>},<span class="hljs-string">'GuangStatement'</span>);<span class="hljs-comment">//\u65B0\u589E\u52A0\u7684ssh\u8BED\u53E5</span>
    };
  }
}
<span class="hljs-keyword">const</span> newParser = Parser.extend(guangKeyword);
</code></pre>
<p>\u6211\u4EEC\u6267\u884C\u4E0B\u8BD5\u4E0B\u6548\u679C</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> newParser = Parser.extend(guangKeywordPlugin);

<span class="hljs-keyword">var</span> program = 
<span class="hljs-string">\`
    guang
    const a = 1
\`</span>;

<span class="hljs-keyword">const</span> ast = newParser.parse(program);
<span class="hljs-built_in">console</span>.log(ast);
</code></pre>
<p>\u4EA7\u751F\u7684AST\u5982\u4E0B\uFF1A</p>
<pre><code class="">Node {
  type: 'Program',
  start: 0,
  end: 27,
  body: [
    { value: 'guang', type: 'GuangStatement', end: 10 },
    Node {
      type: 'VariableDeclaration',
      start: 15,
      end: 26,
      declarations: [Array],
      kind: 'const'
    }
  ],
  sourceType: 'script'
}
</code></pre>
<p>\u5C31\u8FD9\u6837\u6211\u4EEC\u5B9E\u73B0\u4E86\u65B0\u7684 AST \u8282\u70B9\u3002</p>
<p>\u901A\u8FC7\u8FD9\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u6211\u4EEC\u80FD\u5927\u6982\u7406\u89E3 babel \u662F\u600E\u4E48\u57FA\u4E8E acorn \u5B9E\u73B0 typescript\u3001jsx\u3001flow \u8BED\u6CD5\u89E3\u6790\u7684\u4E86\u3002</p>
<p>\u6BD4\u5982 Literal \u6269\u5C55\u4E86 StringLiteral\u3001NumericLiteral \u7B49\u8FD9\u4E00\u70B9\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u81EA\u5DF1\u5B9E\u73B0\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript">parseLiteral (...args) {
    <span class="hljs-keyword">const</span> node = <span class="hljs-built_in">super</span>.parseLiteral(...args);
    <span class="hljs-keyword">switch</span>(<span class="hljs-keyword">typeof</span> node.value) {
        <span class="hljs-keyword">case</span> <span class="hljs-string">'number'</span>:
            node.type = <span class="hljs-string">'NumericLiteral'</span>;
            <span class="hljs-keyword">break</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">'string'</span>:
            node.type = <span class="hljs-string">'StringLiteral'</span>;
            <span class="hljs-keyword">break</span>;
    }
    <span class="hljs-keyword">return</span>  node;
}
</code></pre>
<h2 data-id="heading-8">\u603B\u7ED3</h2>
<p>\u8FD9\u4E00\u8282\u6211\u4EEC\u4E86\u89E3\u4E86 js parser \u7684\u5386\u53F2\uFF0C\u4ECE SpiderMonkey \u7684 AST \u6807\u51C6\u5F00\u59CB\uFF0C\u6269\u5C55\u5230 espree \u7684\u6807\u51C6\uFF0C\u6700\u65E9\u7684 estree \u6807\u51C6\u7684\u5B9E\u73B0\u662F esprima\uFF0C\u4F46\u662F\u968F\u7740 es2015 \u5F00\u59CB\u4E00\u5E74\u4E00\u4E2A\u7248\u672C\uFF0Cesprima \u7684\u8FED\u4EE3\u901F\u5EA6\u9010\u6E10\u8DDF\u4E0D\u4E0A\u4E86\uFF0C\u8FD9\u65F6\u5019 acorn \u6D41\u884C\u8D77\u6765\uFF0C\u56E0\u4E3A\u901F\u5EA6\u66F4\u5FEB\uFF0C\u800C\u4E14\u652F\u6301\u63D2\u4EF6\u6269\u5C55\uFF0C\u4E8E\u662F espree\u3001babel parser(babylon) \u7B49\u90FD\u57FA\u4E8E acorn \u6765\u5B9E\u73B0\u5404\u81EA\u7684 parser\u3002\u867D\u7136 estree \u7CFB\u5217\u7684 js parser \u633A\u591A\u7684\uFF0C\u4F46\u4E5F\u4E0D\u662F\u5168\u90E8\uFF0Cterser\u3001typescript \u7B49\u90FD\u662F\u7528\u81EA\u5DF1\u7684AST\u3002</p>
<p>\u5B66\u5B8C\u8FD9\u4E00\u8282\uFF0C\u6211\u4EEC\u66F4\u5168\u9762\u7684\u4E86\u89E3\u4E86 js parser \u7684\u5386\u53F2\uFF0C\u5BF9\u5404\u79CD\u5DE5\u5177\u6240\u7528\u7684 parser \u4E4B\u95F4\u7684\u5173\u7CFB\u6709\u4E86\u4E00\u5B9A\u7684\u4E86\u89E3\uFF0C\u5E76\u4E14\u8FD8\u77E5\u9053\u4E86 acorn \u7684\u8BED\u6CD5\u63D2\u4EF6\u8BE5\u600E\u4E48\u5199\u3002</p>
<p>\uFF08\u4EE3\u7801\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FQuarkGluonPlasma%2Fbabel-plugin-exercize" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/QuarkGluonPlasma/babel-plugin-exercize" ref="nofollow noopener noreferrer">\u8FD9\u91CC</a>\uFF0C\u5EFA\u8BAE git clone \u4E0B\u6765\u901A\u8FC7 node \u8DD1\u4E00\u4E0B\uFF09</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
