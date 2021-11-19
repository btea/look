var s={name:"28\u3001\u624B\u5199 Babel\uFF1A traverse -- scope\u7BC7",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>path.scope \u4E2D\u8BB0\u5F55\u7740\u4F5C\u7528\u57DF\u76F8\u5173\u7684\u6570\u636E\uFF0C\u901A\u8FC7 scope \u53EF\u4EE5\u62FF\u5230\u6574\u6761\u4F5C\u7528\u57DF\u94FE\uFF0C\u5305\u62EC\u58F0\u660E\u7684\u53D8\u91CF\u548C\u5BF9\u8BE5\u58F0\u660E\u7684\u5F15\u7528\u3002</p>
<p>\u8FD9\u8282\u6211\u4EEC\u5B9E\u73B0\u4E0B scope\u3002</p>
<h2 data-id="heading-0">\u601D\u8DEF\u5206\u6790</h2>
<p>\u524D\u9762\u6211\u4EEC\u5B9E\u73B0\u4E86 traverse \u548C path\uFF0C\u80FD\u591F\u904D\u5386 AST \u548C\u5BF9 AST \u589E\u5220\u6539\u4E86\uFF0C\u800C scope \u548C path \u4E00\u6837\u4E5F\u662F\u904D\u5386\u8FC7\u7A0B\u4E2D\u8BB0\u5F55\u7684\u4FE1\u606F\u3002</p>
<p>\u80FD\u751F\u6210 scope \u7684 AST \u53EB\u505A block\uFF0C\u6BD4\u5982 FunctionDeclaration \u5C31\u662F block\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u751F\u6210\u4E00\u4E2A\u65B0\u7684 scope\u3002</p>
<p>\u6211\u4EEC\u628A\u8FD9\u7C7B\u8282\u70B9\u8BB0\u5F55\u4E0B\u6765\uFF0C\u904D\u5386\u7684\u65F6\u5019\u9047\u5230 block \u8282\u70B9\u4F1A\u751F\u6210\u65B0\u7684 scope\uFF0C\u5426\u5219\u62FF\u4E4B\u524D\u7684 scope\u3002</p>
<p>scope \u4E2D\u8BB0\u5F55\u7740 bindings\uFF0C\u4E5F\u5C31\u662F\u58F0\u660E\uFF0C\u6BCF\u4E2A\u58F0\u660E\u4F1A\u8BB0\u5F55\u5728\u54EA\u91CC\u58F0\u660E\u7684\uFF0C\u88AB\u54EA\u91CC\u5F15\u7528\u7684\u3002</p>
<p>\u9047\u5230 block \u8282\u70B9\uFF0C\u521B\u5EFA scope \u7684\u65F6\u5019\uFF0C\u8981\u904D\u5386\u4F5C\u7528\u57DF\u4E2D\u7684\u6240\u6709\u58F0\u660E\uFF08VariableDeclaraion\u3001FunctionDeclaration\uFF09\uFF0C\u8BB0\u5F55\u8BE5 binding \u5230 scope \u4E2D\u3002</p>
<p>\u8BB0\u5F55\u5B8C bindings \u4E4B\u540E\u8FD8\u8981\u518D\u904D\u5386\u4E00\u6B21\u8BB0\u5F55\u5F15\u7528\u8FD9\u4E9B binding \u7684 reference\u3002</p>
<p>\u57FA\u4E8E\u8FD9\u79CD\u601D\u8DEF\u6211\u4EEC\u5C31\u80FD\u5B9E\u73B0 scope \u7684\u529F\u80FD\u3002</p>
<h2 data-id="heading-1">\u4EE3\u7801\u5B9E\u73B0</h2>
<p>\u9996\u5148\uFF0C\u521B\u5EFA Binding \u7C7B\u548C Scope \u7C7B\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Binding</span> </span>{
    <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params">id, path, scope, kind</span>)</span> {
        <span class="hljs-built_in">this</span>.id = id;
        <span class="hljs-built_in">this</span>.path = path;
        <span class="hljs-built_in">this</span>.referenced = <span class="hljs-literal">false</span>;
        <span class="hljs-built_in">this</span>.referencePaths = [];
    }
}
</code></pre>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Scope</span> </span>{
    <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params">parentScope, path</span>)</span> {
        <span class="hljs-built_in">this</span>.parent = parentScope;
        <span class="hljs-built_in">this</span>.bindings = {};
        <span class="hljs-built_in">this</span>.path = path;
    }

    <span class="hljs-function"><span class="hljs-title">registerBinding</span>(<span class="hljs-params">id, path</span>)</span> {
        <span class="hljs-built_in">this</span>.bindings[id] = <span class="hljs-keyword">new</span> Binding(id, path);
    }

    <span class="hljs-function"><span class="hljs-title">getOwnBinding</span>(<span class="hljs-params">id</span>)</span> {
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.bindings[id];
    }

    <span class="hljs-function"><span class="hljs-title">getBinding</span>(<span class="hljs-params">id</span>)</span> {
        <span class="hljs-keyword">let</span> res = <span class="hljs-built_in">this</span>.getOwnBinding(id);
        <span class="hljs-keyword">if</span> (res === <span class="hljs-literal">undefined</span> &amp;&amp; <span class="hljs-built_in">this</span>.parent) {
            res = <span class="hljs-built_in">this</span>.parent.getOwnBinding(id);
        }
        <span class="hljs-keyword">return</span> res;
    }

    <span class="hljs-function"><span class="hljs-title">hasBinding</span>(<span class="hljs-params">id</span>)</span> {
        <span class="hljs-keyword">return</span> !!<span class="hljs-built_in">this</span>.getBinding(id);
    }
}
</code></pre>
<p>bindings \u662F\u8BB0\u5F55\u4F5C\u7528\u57DF\u4E2D\u7684\u6BCF\u4E00\u4E2A\u58F0\u660E\uFF0C\u540C\u65F6\u6211\u4EEC\u8FD8\u53EF\u4EE5\u5B9E\u73B0 \u6DFB\u52A0\u58F0\u660E registerBinding\u3001\u67E5\u627E\u58F0\u660E getBinding\u3001getOwnBinding\u3001hasBidning \u7684\u65B9\u6CD5\u3002</p>
<p>getOwnBing \u662F\u53EA\u4ECE\u5F53\u524D scope \u67E5\u627E\uFF0C\u800C getBinding \u5219\u662F\u987A\u7740\u4F5C\u7528\u57DF\u94FE\u5411\u4E0A\u67E5\u627E\u3002</p>
<p>\u4E4B\u540E\u6211\u4EEC\u5728 path \u91CC\u9762\u5B9A\u4E49\u4E00\u4E2A  scope \u7684 get \u7684\u65B9\u6CD5\uFF0C\u5F53\u9700\u8981\u7528\u5230 scope \u7684\u65F6\u5019\u624D\u4F1A\u521B\u5EFA\uFF0C\u56E0\u4E3A scope \u521B\u5EFA\u4E4B\u540E\u8FD8\u8981\u904D\u5386\u67E5\u627E bindings\uFF0C\u662F\u6BD4\u8F83\u8017\u65F6\u7684\uFF0C\u5B9E\u73B0 get \u53EF\u4EE5\u505A\u5230\u7528\u5230\u7684\u65F6\u5019\u624D\u521B\u5EFA\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">get</span> <span class="hljs-title">scope</span>() {
    <span class="hljs-keyword">if</span> (<span class="hljs-built_in">this</span>.__scope) {
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.__scope;
    }
    <span class="hljs-keyword">const</span> isBlock = <span class="hljs-built_in">this</span>.isBlock();
    <span class="hljs-keyword">const</span> parentScope = <span class="hljs-built_in">this</span>.parentPath &amp;&amp; <span class="hljs-built_in">this</span>.parentPath.scope;
    <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.__scope = isBlock ? <span class="hljs-keyword">new</span> Scope(parentScope, <span class="hljs-built_in">this</span>) : parentScope;
}
</code></pre>
<p>\u8FD9\u91CC\u7684 isBlock \u65B9\u6CD5\u7684\u5B9E\u73B0\u5C31\u662F\u4ECE\u6211\u4EEC\u8BB0\u5F55\u7684\u6570\u636E\u4E2D\u67E5\u627E\u8BE5\u8282\u70B9\u662F\u5426\u662F block\uFF0C\u4E5F\u5C31\u662F\u662F\u5426\u662F\u51FD\u6570\u58F0\u660E\u8FD9\u79CD\u80FD\u751F\u6210\u4F5C\u7528\u57DF\u7684\u8282\u70B9\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-title">isBlock</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> types.visitorKeys.get(<span class="hljs-built_in">this</span>.node.type).isBlock;
}
</code></pre>
<p>\u6211\u4EEC\u5728\u8BB0\u5F55\u8282\u70B9\u7684\u904D\u5386\u7684\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u4E5F\u8BB0\u5F55\u4E86\u8BE5\u8282\u70B9\u662F\u5426\u662F block\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript">astDefinationsMap.set(<span class="hljs-string">'Program'</span>, {
    <span class="hljs-attr">visitor</span>: [<span class="hljs-string">'body'</span>],
    <span class="hljs-attr">isBlock</span>: <span class="hljs-literal">true</span>
});
astDefinationsMap.set(<span class="hljs-string">'FunctionDeclaration'</span>, {
    <span class="hljs-attr">visitor</span>: [<span class="hljs-string">'id'</span>, <span class="hljs-string">'params'</span>, <span class="hljs-string">'body'</span>],
    <span class="hljs-attr">isBlock</span>: <span class="hljs-literal">true</span>
});
</code></pre>
<p>\u8FD9\u6837\uFF0C\u5F53\u904D\u5386\u5230 block \u8282\u70B9\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u521B\u5EFA Scope \u5BF9\u8C61\uFF0C\u7136\u540E\u548C\u5F53\u524D Scope \u5173\u8054\u8D77\u6765\uFF0C\u5F62\u6210\u4F5C\u7528\u57DF\u94FE\u3002</p>
<p>scope \u521B\u5EFA\u5B8C\u6210\u4E4B\u540E\u6211\u4EEC\u8981\u626B\u63CF\u4F5C\u7528\u57DF\u4E2D\u6240\u6709\u7684\u58F0\u660E\uFF0C\u8BB0\u5F55\u5230 scope\u3002\u8FD9\u91CC\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u56E0\u4E3A\u9047\u5230\u51FD\u6570\u4F5C\u7528\u57DF\u8981\u8DF3\u8FC7\u904D\u5386\uFF0C\u56E0\u4E3A\u5B83\u6709\u81EA\u5DF1\u72EC\u7ACB\u7684\u4F5C\u7528\u57DF\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript">path.traverse({
    <span class="hljs-attr">VariableDeclarator</span>: <span class="hljs-function">(<span class="hljs-params">childPath</span>) =&gt;</span> {
        <span class="hljs-built_in">this</span>.registerBinding(childPath.node.id.name, childPath);
    },
    <span class="hljs-attr">FunctionDeclaration</span>: <span class="hljs-function">(<span class="hljs-params">childPath</span>) =&gt;</span> {
        childPath.skip();
        <span class="hljs-built_in">this</span>.registerBinding(childPath.node.id.name, childPath);
    }
});
</code></pre>
<p>\u8BB0\u5F55\u5B8C binding \u4E4B\u540E\uFF0C\u518D\u626B\u63CF\u6240\u6709\u5F15\u7528\u8BE5 binding \u7684\u5730\u65B9\uFF0C\u4E5F\u5C31\u662F\u626B\u63CF\u6240\u6709\u7684 identifier\u3002</p>
<p>\u8FD9\u91CC\u8981\u6392\u9664\u58F0\u660E\u8BED\u53E5\u91CC\u9762\u7684 identifier\uFF0C\u90A3\u4E2A\u662F\u5B9A\u4E49\u53D8\u91CF\u4E0D\u662F\u5F15\u7528\u53D8\u91CF\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript">path.traverse({
    <span class="hljs-attr">Identifier</span>: <span class="hljs-function"><span class="hljs-params">childPath</span> =&gt;</span>  {
        <span class="hljs-keyword">if</span> (!childPath.findParent(<span class="hljs-function"><span class="hljs-params">p</span> =&gt;</span> p.isVariableDeclarator() || p.isFunctionDeclaration())) {
            <span class="hljs-keyword">const</span> id = childPath.node.name;
            <span class="hljs-keyword">const</span> binding = <span class="hljs-built_in">this</span>.getBinding(id);
            <span class="hljs-keyword">if</span> (binding) {
                binding.referenced = <span class="hljs-literal">true</span>;
                binding.referencePaths.push(childPath);
            }
        }
    }
});
</code></pre>
<p>\u8FD9\u6837\uFF0C\u6211\u4EEC\u5C31\u5B9E\u73B0\u4E86\u4F5C\u7528\u57DF\u94FE path.scope\uFF0C\u53EF\u4EE5\u5728 visitor \u4E2D\u5206\u6790\u4F5C\u7528\u57DF\u4E86\u3002</p>
<p>\u6BD4\u5982\u5220\u9664\u6389\u672A\u88AB\u5F15\u7528\u7684\u53D8\u91CF\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript">traverse(ast, {
    <span class="hljs-function"><span class="hljs-title">Program</span>(<span class="hljs-params">path</span>)</span> {
        <span class="hljs-built_in">Object</span>.entries(path.scope.bindings).forEach(<span class="hljs-function">(<span class="hljs-params">[id, binding]</span>) =&gt;</span> {
            <span class="hljs-keyword">if</span> (!binding.referenced) {
                binding.path.remove();
            }
        });
    },
    <span class="hljs-function"><span class="hljs-title">FunctionDeclaration</span>(<span class="hljs-params">path</span>)</span> {
        <span class="hljs-built_in">Object</span>.entries(path.scope.bindings).forEach(<span class="hljs-function">(<span class="hljs-params">[id, binding]</span>) =&gt;</span> {
            <span class="hljs-keyword">if</span> (!binding.referenced) {
                binding.path.remove();
            }
        });
    }
});
</code></pre>
<h2 data-id="heading-2">\u603B\u7ED3</h2>
<p>scope \u662F\u4F5C\u7528\u57DF\u76F8\u5173\u7684\u4FE1\u606F\uFF0C\u8BB0\u5F55\u7740\u6BCF\u4E00\u4E2A\u58F0\u660E\uFF08binding\uFF09\u548C\u5BF9\u8BE5\u58F0\u660E\u7684\u5F15\u7528\uFF08reference\uFF09\u3002</p>
<p>\u53EA\u6709 block \u8282\u70B9\u9700\u8981\u751F\u6210 scope\uFF0C\u6240\u4EE5\u6211\u4EEC\u4F1A\u8BB0\u5F55\u4EC0\u4E48\u8282\u70B9\u662F block \u8282\u70B9\uFF0C\u9047\u5230 block \u8282\u70B9\u4F1A\u751F\u6210 scope\uFF0C\u5426\u5219\u62FF\u4E4B\u524D\u7684\u3002</p>
<p>\u56E0\u4E3A scope \u4F1A\u904D\u5386 AST \u6765\u6CE8\u518C binding\uFF0C\u8FD8\u662F\u6BD4\u8F83\u8017\u65F6\u7684\u3002\u6211\u4EEC\u5728 path \u4E2D\u5B9A\u4E49\u4E86 scope \u7684 get \u65B9\u6CD5\uFF0C\u7528\u5230\u7684\u65F6\u5019\u624D\u4F1A\u521B\u5EFA scope\u3002</p>
<p>\u521B\u5EFA scope \u65F6\u4F1A\u626B\u63CF\u4F5C\u7528\u57DF\u4E2D\u7684\u51FD\u6570\u58F0\u660E\u3001\u53D8\u91CF\u58F0\u660E\uFF0C\u8BB0\u5F55\u5230 bindings \u4E2D\uFF0C\u5E76\u4E14\u63D0\u4F9B\u4E86 getBinding\u3001getOwnBinding\u3001hasBinding\u3001registerBinding \u7B49\u65B9\u6CD5\u3002</p>
<p>\u4E4B\u540E\u518D\u6B21\u626B\u63CF\u4F5C\u7528\u57DF\uFF0C\u627E\u5230\u6240\u6709\u5F15\u7528\u8FD9\u4E9B binding \u7684 identifier\uFF0C\u8BB0\u5F55\u5230 reference \u4E2D\u3002</p>
<p>\u4E4B\u540E\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728 visitor \u4E2D\u5206\u6790 scope \u6765\u5B9E\u73B0\u7C7B\u4F3C\u6B7B\u4EE3\u7801\u5220\u9664\u7B49\u529F\u80FD\u4E86\u3002</p>
<p>\uFF08\u4EE3\u7801\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FQuarkGluonPlasma%2Fbabel-plugin-exercize" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/QuarkGluonPlasma/babel-plugin-exercize" ref="nofollow noopener noreferrer">\u8FD9\u91CC</a>\uFF0C\u5EFA\u8BAE git clone \u4E0B\u6765\u901A\u8FC7 node \u8DD1\u4E00\u4E0B\uFF09</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
