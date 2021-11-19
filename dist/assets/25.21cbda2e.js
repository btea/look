var n={name:"25\u3001\u624B\u5199 Babel\uFF1A parser \u7BC7",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>parser \u7684\u529F\u80FD\u662F\u628A\u6E90\u7801\u8F6C\u6210 AST\uFF0C\u652F\u6301\u5404\u79CD\u8BED\u6CD5\u7684 parse\u3002</p>
<p>babel \u7684 parser \u5E76\u4E0D\u662F\u4ECE\u96F6\u81EA\u5DF1\u5B9E\u73B0\u7684\uFF0C\u800C\u662F\u57FA\u4E8E acron \u505A\u4E86\u6269\u5C55\u3002\u5728 <a href="https://juejin.cn/book/6946117847848321055/section/6947682728200372232" target="_blank" title="https://juejin.cn/book/6946117847848321055/section/6947682728200372232">\u300Ajs parser \u7684\u5386\u53F2\u300B</a>\u90A3\u4E00\u8282\u5927\u90E8\u5206\u8BB2\u8FC7 js parser \u90FD\u662F estree \u6807\u51C6\u7684\uFF0Cacorn \u4E5F\u662F estree \u6807\u51C6\u7684\u5B9E\u73B0\uFF0C\u652F\u6301\u63D2\u4EF6\uFF0C</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/08bfa0a1014d452a9b8d9940e106bf25~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>babel \u5B9E\u73B0\u4E86 jsx\u3001typescript\u3001flow \u7B49\u8BED\u6CD5\u63D2\u4EF6\u7684\u6269\u5C55\uFF0C\u5E76\u4E14\u4FEE\u6539\u4E86\u4E00\u4E9B AST\uFF0C\u6BD4\u5982 Literal \u6269\u5C55\u4E3A\u4E86 StringLitreal\u3001NumericLiteral \u7B49\u3002</p>
<p>\u6240\u4EE5\uFF0C\u6211\u4EEC\u4E5F\u4E0D\u4F1A\u4ECE\u96F6\u5B9E\u73B0 parser\uFF0C\u4E5F\u4F1A\u91C7\u7528\u57FA\u4E8E acron \u6269\u4E0B\u6269\u5C55\u7684\u65B9\u5F0F\u3002</p>
<h2 data-id="heading-0">\u601D\u8DEF\u5206\u6790</h2>
<p>acorn \u63D2\u4EF6\u7684\u5B9E\u73B0\u65B9\u5F0F\u662F\u7EE7\u627F\u4E4B\u524D\u7684 Parser \u8FD4\u56DE\u65B0\u7684 Parser\uFF0C\u91CD\u5199\u4E00\u4E9B\u65B9\u6CD5\u6765\u505A AST \u4FEE\u6539\u548C\u6269\u5145\u3002</p>
<p>\u6BD4\u5982\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-built_in">module</span>.exports = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">Parser</span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Parser</span> </span>{
        parseLiteral (...args) {
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
    }
}
</code></pre>
<p>\u8FD9\u662F\u6211\u4EEC\u4E4B\u524D\u5B9E\u73B0\u8FC7\u7684\uFF0C\u628A Literal \u6269\u5C55\u4E3A StringLiteral\u3001NumericLiteral \u7B49\u7684\u4E00\u4E2A\u63D2\u4EF6\u3002</p>
<p>\u4E4B\u524D\u8FD8\u5B9E\u73B0\u8FC7\u6269\u5C55\u4E00\u4E2A guang \u7684\u5173\u952E\u5B57\u7684\u63D2\u4EF6\u3002</p>
<p>\u6211\u4EEC\u5E0C\u671B\u63D0\u4F9B\u8FD9\u79CD api\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> ast = parser.parse(sourceCode, {
    <span class="hljs-attr">plugins</span>: [<span class="hljs-string">'literal'</span>, <span class="hljs-string">'guangKeyword'</span>]
});
</code></pre>
<p>\u4E5F\u5C31\u662F\u6839\u636E\u4F20\u5165\u7684 plugins \u6765\u786E\u5B9A\u4F7F\u7528\u4EC0\u4E48\u63D2\u4EF6\uFF0C\u7136\u540E\u8FD4\u56DE\u6269\u5C55\u4EE5\u540E\u7684 parser\u3002\u5B9E\u73B0\u65B9\u5F0F\u5C31\u662F\u4FDD\u5B58\u4E00\u4E2A\u63D2\u4EF6\u7684 map\uFF0C\u6309\u7167\u4F20\u5165\u7684\u63D2\u4EF6\u540D\u4F7F\u7528\u5C31\u884C\u3002</p>
<h2 data-id="heading-1">\u4EE3\u7801\u5B9E\u73B0</h2>
<p>\u6211\u4EEC\u628A\u63D2\u4EF6\u653E\u5230\u4E0D\u540C\u7684\u6A21\u5757\u4E2D\uFF0C\u7136\u540E\u901A\u8FC7 map \u6765\u7EF4\u62A4\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> syntaxPlugins = {
    <span class="hljs-string">'literal'</span>: <span class="hljs-built_in">require</span>(<span class="hljs-string">'./plugins/literal'</span>),
    <span class="hljs-string">'guangKeyword'</span>: <span class="hljs-built_in">require</span>(<span class="hljs-string">'./plugins/guangKeyword'</span>)
}
</code></pre>
<p>\u4E4B\u540E\u5B9E\u73B0 parse \u7684\u65F6\u5019\uFF0C\u5148\u628A options \u505A\u5408\u5E76\uFF0C\u4E4B\u540E\u6839\u636E plugin \u6765\u4F9D\u6B64\u542F\u7528\u4E0D\u540C\u7684\u63D2\u4EF6\u3002</p>
<pre><code class="">const defaultOptions = {
    plugins: []
}

function parse(code, options) {
    const resolvedOptions  = Object.assign({}, defaultOptions, options);

    const newParser = resolvedOptions.plugins.reduce((Parser, pluginName) =&gt; {
        let plugin = syntaxPlugins[pluginName]
        return plugin ? Parser.extend(plugin) : Parser; 
    }, acorn.Parser);

    return newParser.parse(code, {
        locations: true
    });
}
</code></pre>
<p>\u8FD9\u91CC\u8981\u6307\u5B9A locations \u4E3A true\uFF0C\u4E5F\u5C31\u662F\u4FDD\u7559 AST \u5728\u6E90\u7801\u4E2D\u7684\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u8FD9\u4E2A\u5728\u751F\u6210 sourcemap \u7684\u65F6\u5019\u4F1A\u7528\u7684\u3002</p>
<p>\u8FD9\u6837\u5C31\u5B9E\u73B0\u4E86 parse \u548C\u8BED\u6CD5\u63D2\u4EF6\u529F\u80FD\u3002</p>
<h2 data-id="heading-2">\u603B\u7ED3</h2>
<p>parser \u8D1F\u8D23\u628A\u6E90\u7801\u8F6C\u6210 AST\uFF0Cjs parser \u5927\u591A\u662F\u7B26\u5408 estree \u7684\u6807\u51C6\u7684\uFF0Cacorn \u4E5F\u662F\u5BF9\u5B83\u7684\u5B9E\u73B0\u3002</p>
<p>acorn \u652F\u6301\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u6269\u5C55\u8BED\u6CD5\uFF0Cbabel parser \u5C31\u662F fork \u4E86 acorn \u505A\u4E86\u6269\u5C55\uFF0C\u6211\u4EEC\u4E5F\u901A\u8FC7\u7C7B\u4F3C\u7684\u65B9\u5F0F\uFF0C\u5B9E\u73B0\u4E86\u4E24\u4E2A\u8BED\u6CD5\u63D2\u4EF6\uFF0C\u7136\u540E\u901A\u8FC7 options \u542F\u7528\u3002</p>
<p>\u5F53\u7136\uFF0C\u6211\u4EEC\u6CA1\u6709\u5B9E\u73B0\u7C7B\u4F3C jsx\u3001typescript \u8FD9\u79CD\u590D\u6742\u8BED\u6CD5\u63D2\u4EF6\u3002\u6211\u4EEC\u7684\u76EE\u7684\u53EA\u662F\u7406\u6E05 babel \u5B9E\u73B0\u601D\u8DEF\uFF0C\u800C\u4E0D\u662F\u505A\u4E00\u4E2A\u5B8C\u5584\u7684 babel\u3002</p>
<p>\uFF08\u4EE3\u7801\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FQuarkGluonPlasma%2Fbabel-plugin-exercize" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/QuarkGluonPlasma/babel-plugin-exercize" ref="nofollow noopener noreferrer">\u8FD9\u91CC</a>\uFF0C\u5EFA\u8BAE git clone \u4E0B\u6765\u901A\u8FC7 node \u8DD1\u4E00\u4E0B\uFF09</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{n as default};
