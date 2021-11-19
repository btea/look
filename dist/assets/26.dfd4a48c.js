var s={name:"26\u3001\u624B\u5199 Babel\uFF1A traverse \u7BC7",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>traverse \u662F\u904D\u5386 AST\uFF0C\u5E76\u4E14\u904D\u5386\u7684\u8FC7\u7A0B\u4E2D\u652F\u6301 visitor \u7684\u8C03\u7528\uFF0C\u5728 visitor \u91CC\u5B9E\u73B0\u5BF9 AST \u7684\u589E\u5220\u6539\u3002</p>
<p>\u6211\u4EEC\u8FD9\u4E00\u8282\u7684\u76EE\u7684\u662F\u5B9E\u73B0\u8FD9\u6837\u7684 api\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript">traverse(ast, {
    <span class="hljs-function"><span class="hljs-title">Identifier</span>(<span class="hljs-params">node</span>)</span> {
        node.name = <span class="hljs-string">'b'</span>;
    }
});
</code></pre>
<p>path \u653E\u5230\u4E0B\u4E00\u8282\u5B9E\u73B0\u3002</p>
<h2 data-id="heading-0">\u601D\u8DEF\u5206\u6790</h2>
<p>AST \u7684\u904D\u5386\u5C31\u662F\u6811\u7684\u904D\u5386\uFF0C\u6811\u7684\u904D\u5386\u5C31\u6DF1\u5EA6\u4F18\u5148\u3001\u5E7F\u5EA6\u4F18\u5148\u4E24\u79CD\u65B9\u5F0F\uFF0C\u800C\u8FD9\u91CC\u660E\u663E\u662F\u6DF1\u5EA6\u4F18\u5148\u904D\u5386\u3002</p>
<p>\u6DF1\u5EA6\u4F18\u5148\u904D\u5386\u8981\u9012\u5F52\u7684\u904D\u5386\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u90A3\u4E48\u6211\u4EEC\u600E\u4E48\u77E5\u9053\u5BF9\u8C61\u7684\u5C5E\u6027\u662F\u53EF\u4EE5\u904D\u5386\u7684\u5B50\u8282\u70B9\u5462\uFF1F</p>
<p>\u53EF\u4EE5\u7EF4\u62A4\u4E00\u4EFD\u6570\u636E\u6765\u4FDD\u5B58\u4E0D\u540C AST \u7684\u4EC0\u4E48\u5C5E\u6027\u662F\u53EF\u4EE5\u904D\u5386\u7684\uFF0C\u7136\u540E\u5728\u904D\u5386\u4E0D\u540C\u8282\u70B9\u7684\u65F6\u5019\u4ECE\u4E2D\u67E5\u627E\u5E94\u8BE5\u7EE7\u7EED\u904D\u5386\u4EC0\u4E48\u5C5E\u6027\u3002\u8FD9\u6837\u5C31\u5B9E\u73B0\u4E86\u6DF1\u5EA6\u4F18\u5148\u904D\u5386\u3002</p>
<p>\u5728\u904D\u5386\u7684\u8FC7\u7A0B\u4E2D\u53EF\u4EE5\u6839\u636E\u7C7B\u578B\u8C03\u7528\u4E0D\u540C\u7684 visitor\uFF0C\u7136\u540E\u4F20\u5165\u5F53\u524D\u8282\u70B9\u3002</p>
<h2 data-id="heading-1">\u4EE3\u7801\u5B9E\u73B0</h2>
<p>\u9996\u5148\uFF0C\u6211\u4EEC\u7EF4\u62A4\u8FD9\u6837\u4E00\u4EFD\u6570\u636E\uFF1A\u4E0D\u540C\u7684 AST \u6709\u54EA\u4E9B\u53EF\u4EE5\u904D\u5386\u7684\u5C5E\u6027\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> astDefinationsMap = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Map</span>();

astDefinationsMap.set(<span class="hljs-string">'Program'</span>, {
    <span class="hljs-attr">visitor</span>: [<span class="hljs-string">'body'</span>]
});
astDefinationsMap.set(<span class="hljs-string">'VariableDeclaration'</span>, {
    <span class="hljs-attr">visitor</span>: [<span class="hljs-string">'declarations'</span>]
});
astDefinationsMap.set(<span class="hljs-string">'VariableDeclarator'</span>, {
    <span class="hljs-attr">visitor</span>: [<span class="hljs-string">'id'</span>, <span class="hljs-string">'init'</span>]
});
astDefinationsMap.set(<span class="hljs-string">'Identifier'</span>, {});
astDefinationsMap.set(<span class="hljs-string">'NumericLiteral'</span>, {});
astDefinationsMap.set(<span class="hljs-string">'FunctionDeclaration'</span>, {
    <span class="hljs-attr">visitor</span>: [<span class="hljs-string">'id'</span>, <span class="hljs-string">'params'</span>, <span class="hljs-string">'body'</span>]
});
astDefinationsMap.set(<span class="hljs-string">'BlockStatement'</span>, {
    <span class="hljs-attr">visitor</span>: [<span class="hljs-string">'body'</span>]
});
astDefinationsMap.set(<span class="hljs-string">'ReturnStatement'</span>, {
    <span class="hljs-attr">visitor</span>: [<span class="hljs-string">'argument'</span>]
});
astDefinationsMap.set(<span class="hljs-string">'BinaryExpression'</span>, {
    <span class="hljs-attr">visitor</span>: [<span class="hljs-string">'left'</span>, <span class="hljs-string">'right'</span>]
});
astDefinationsMap.set(<span class="hljs-string">'ExpressionStatement'</span>, {
    <span class="hljs-attr">visitor</span>: [<span class="hljs-string">'expression'</span>]
});
astDefinationsMap.set(<span class="hljs-string">'CallExpression'</span>, {
    <span class="hljs-attr">visitor</span>: [<span class="hljs-string">'callee'</span>, <span class="hljs-string">'arguments'</span>]
});
</code></pre>
<p>\u7136\u540E\u5B9E\u73B0\u9012\u5F52\u7684\u904D\u5386\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">traverse</span>(<span class="hljs-params">node, visitors</span>) </span>{
    <span class="hljs-keyword">const</span> defination = astDefinationsMap.get(node.type);
    
    <span class="hljs-keyword">if</span> (defination.visitor) {
        defination.visitor.forEach(<span class="hljs-function"><span class="hljs-params">key</span> =&gt;</span> {
            <span class="hljs-keyword">const</span> prop = node[key];
            <span class="hljs-keyword">if</span> (<span class="hljs-built_in">Array</span>.isArray(prop)) { <span class="hljs-comment">// \u5982\u679C\u8BE5\u5C5E\u6027\u662F\u6570\u7EC4</span>
                prop.forEach(<span class="hljs-function"><span class="hljs-params">childNode</span> =&gt;</span> {
                    traverse(childNode, visitors);
                })
            } <span class="hljs-keyword">else</span> {
                traverse(prop, visitors);
            }
        })
    }
}
</code></pre>
<p>\u5176\u4E2D\u8981\u6CE8\u610F\u7684\u662F\u5982\u679C\u5C5E\u6027\u662F\u6570\u7EC4\u7684\u8BDD\u5C31\u4F9D\u6B21\u904D\u5386\u6BCF\u4E00\u4E2A\u5143\u7D20\uFF0C\u5426\u5219\u76F4\u63A5\u9012\u5F52\u904D\u5386\u8BE5\u5C5E\u6027\u3002</p>
<p>\u7136\u540E\u5B9E\u73B0 visitor\u3002</p>
<p>visitor \u652F\u6301 enter \u548C exit \u9636\u6BB5\uFF0C\u4E5F\u5C31\u662F\u8FDB\u5165\u8282\u70B9\u8C03\u7528 enter\uFF0C\u4E4B\u540E\u904D\u5386\u5B50\u8282\u70B9\uFF0C\u4E4B\u540E\u518D\u8C03\u7528 exit\u3002</p>
<p>\u90A3\u4E48\u5206\u522B\u5728\u904D\u5386\u524D\u540E\u8C03\u7528\u5C31\u53EF\u4EE5\uFF0C\u9ED8\u8BA4\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u54EA\u4E2A\u9636\u6BB5\u5C31\u5728 enter \u9636\u6BB5\u8C03\u7528\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">traverse</span>(<span class="hljs-params">node, visitors</span>) </span>{
    <span class="hljs-keyword">const</span> defination = astDefinationsMap.get(node.type);

    <span class="hljs-keyword">let</span> visitorFuncs = visitors[node.type] || {};

    <span class="hljs-keyword">if</span>(<span class="hljs-keyword">typeof</span> visitorFuncs === <span class="hljs-string">'function'</span>) {
        visitorFuncs = {
            <span class="hljs-attr">enter</span>: visitorFuncs
        }
    }

    visitorFuncs.enter &amp;&amp; visitorFuncs.enter(node);

    <span class="hljs-keyword">if</span> (defination.visitor) {
        defination.visitor.forEach(<span class="hljs-function"><span class="hljs-params">key</span> =&gt;</span> {
            <span class="hljs-keyword">const</span> prop = node[key];
            <span class="hljs-keyword">if</span> (<span class="hljs-built_in">Array</span>.isArray(prop)) { <span class="hljs-comment">// \u5982\u679C\u8BE5\u5C5E\u6027\u662F\u6570\u7EC4</span>
                prop.forEach(<span class="hljs-function"><span class="hljs-params">childNode</span> =&gt;</span> {
                    traverse(childNode, visitors);
                })
            } <span class="hljs-keyword">else</span> {
                traverse(prop, visitors);
            }
        })
    }
    visitorFuncs.exit &amp;&amp; visitorFuncs.exit(node);
}
</code></pre>
<p>\u8FD9\u6837\uFF0C\u6211\u4EEC\u5C31\u5B9E\u73B0\u4E86 AST \u7684\u904D\u5386\u548C enter\u3001exit \u9636\u6BB5\u7684 visitor \u8C03\u7528\u3002</p>
<p><strong>\u4E3A\u4EC0\u4E48\u8981\u5206 enter \u548C exit \u4E24\u4E2A\u9636\u6BB5\u5462\uFF1F</strong></p>
<p>\u56E0\u4E3A enter \u9636\u6BB5\u5728\u904D\u5386\u5B50\u8282\u70B9\u4E4B\u524D\uFF0C\u90A3\u4E48\u4FEE\u6539\u4E4B\u540E\u5C31\u53EF\u4EE5\u7ACB\u523B\u904D\u5386\u5B50\u8282\u70B9\uFF0C\u800C exit \u662F\u5728\u904D\u5386\u7ED3\u675F\u4E4B\u540E\u4E86\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u7EE7\u7EED\u904D\u5386\u5B50\u8282\u70B9\u3002\u5982\u679C enter \u9636\u6BB5\u4FEE\u6539\u4E86 AST \u4F46\u662F\u4E0D\u60F3\u904D\u5386\u65B0\u751F\u6210\u7684\u5B50\u8282\u70B9\uFF0C\u53EF\u4EE5\u7528 path.skip \u8DF3\u8FC7\u904D\u5386\u3002</p>
<p>\u53EF\u4EE5\u8FD9\u6837\u6765\u904D\u5386\u548C\u4FEE\u6539 AST\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript">traverse(ast, {
    <span class="hljs-function"><span class="hljs-title">Identifier</span>(<span class="hljs-params">node</span>)</span> {
        node.name = <span class="hljs-string">'b'</span>;
    }
});
</code></pre>
<h2 data-id="heading-2">\u603B\u7ED3</h2>
<p>traverse \u5C31\u662F AST \u7684\u904D\u5386\uFF0C\u800C\u6811\u7684\u904D\u5386\u5C31\u6DF1\u5EA6\u4F18\u5148\u548C\u5E7F\u5EA6\u4F18\u5148\u4E24\u79CD\uFF0C\u8FD9\u91CC\u662F\u6DF1\u5EA6\u4F18\u5148\uFF0C\u6211\u4EEC\u7EF4\u62A4\u4E86\u4E00\u4EFD\u4EC0\u4E48 AST \u904D\u5386\u4EC0\u4E48\u5C5E\u6027\u7684\u6570\u636E\uFF0C\u7136\u540E\u904D\u5386\u7684\u65F6\u5019\u5C31\u53EF\u4EE5\u77E5\u9053\u5982\u4F55\u904D\u5386\u6BCF\u4E00\u4E2A\u8282\u70B9\u3002</p>
<p>\u904D\u5386\u7684\u65F6\u5019\u8C03\u7528 visitor \u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5206\u4E3A enter \u548C exit \u9636\u6BB5\u6765\u8C03\u7528\uFF0C\u9ED8\u8BA4\u662F enter \u9636\u6BB5\u3002</p>
<p>\uFF08\u4EE3\u7801\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FQuarkGluonPlasma%2Fbabel-plugin-exercize" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/QuarkGluonPlasma/babel-plugin-exercize" ref="nofollow noopener noreferrer">\u8FD9\u91CC</a>\uFF0C\u5EFA\u8BAE git clone \u4E0B\u6765\u901A\u8FC7 node \u8DD1\u4E00\u4E0B\uFF09</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
