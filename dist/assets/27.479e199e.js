var s={name:"27\u3001\u624B\u5199 Babel\uFF1A traverse -- path\u7BC7",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>path \u8BB0\u5F55\u4E86\u904D\u5386\u8DEF\u5F84\uFF0C\u5E76\u4E14\u8FD8\u5B9E\u73B0\u4E86\u4E00\u7CFB\u5217\u589E\u5220\u6539\u7684 api\uFF0C\u4F1A\u5728\u904D\u5386 ast \u7684\u65F6\u5019\u4F20\u9012\u7ED9 visitor \u7684\u56DE\u8C03\u51FD\u6570\u3002</p>
<p>\u8FD9\u8282\u6211\u4EEC\u6765\u5B9E\u73B0\u4E0B path\u3002</p>
<h2 data-id="heading-0">\u601D\u8DEF\u5206\u6790</h2>
<p>path \u662F\u8282\u70B9\u4E4B\u95F4\u7684\u5173\u8054\uFF0C\u6BCF\u4E00\u4E2A path \u8BB0\u5F55\u4E86\u5F53\u524D\u8282\u70B9\u548C\u7236\u8282\u70B9\uFF0C\u5E76\u4E14 path \u548C path \u4E4B\u95F4\u4E5F\u6709\u5173\u8054\u3002</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5883d27d78054a72a9c650023b2ba481~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u901A\u8FC7 path \u6211\u4EEC\u53EF\u4EE5\u627E\u5230\u7236\u8282\u70B9\u3001\u7236\u8282\u70B9\u7684\u7236\u8282\u70B9\uFF0C\u4E00\u76F4\u5230\u6839\u8282\u70B9\u3002</p>
<p>path \u7684\u5B9E\u73B0\u5C31\u662F\u5728 traverse \u7684\u65F6\u5019\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u6765\u4FDD\u5B58\u5F53\u524D\u8282\u70B9\u548C\u7236\u8282\u70B9\uFF0C\u5E76\u4E14\u80FD\u591F\u62FF\u5230\u8282\u70B9\u4E5F\u5C31\u80FD\u5BF9\u8282\u70B9\u8FDB\u884C\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u57FA\u4E8E\u8282\u70B9\u6765\u63D0\u4F9B\u4E00\u7CFB\u5217\u589E\u5220\u6539\u7684 api\u3002</p>
<h2 data-id="heading-1">\u4EE3\u7801\u5B9E\u73B0</h2>
<p>\u9996\u5148\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A path \u7684\u7C7B\uFF0C\u8BB0\u5F55\u5F53\u524D\u8282\u70B9 node\uFF0C\u7236\u8282\u70B9 parent \u4EE5\u53CA\u7236\u8282\u70B9\u7684 path\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">NodePath</span> </span>{
    <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params">node, parent, parentPath</span>)</span> {
        <span class="hljs-built_in">this</span>.node = node;
        <span class="hljs-built_in">this</span>.parent = parent;
        <span class="hljs-built_in">this</span>.parentPath = parentPath;
    }
}
</code></pre>
<p>\u7136\u540E\u5728\u904D\u5386\u7684\u65F6\u5019\u521B\u5EFA path \u5BF9\u8C61\uFF0C\u4F20\u5165 visitor\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">traverse</span>(<span class="hljs-params">node, visitors, parent, parentPath</span>) </span>{
    <span class="hljs-keyword">const</span> defination = astDefinationsMap.get(node.type);

    <span class="hljs-keyword">let</span> visitorFuncs = visitors[node.type] || {};

    <span class="hljs-keyword">if</span>(<span class="hljs-keyword">typeof</span> visitorFuncs === <span class="hljs-string">'function'</span>) {
        visitorFuncs = {
            <span class="hljs-attr">enter</span>: visitorFuncs
        }
    }
    <span class="hljs-keyword">const</span> path = <span class="hljs-keyword">new</span> NodePath(node, parent, parentPath);

    visitorFuncs.enter &amp;&amp; visitorFuncs.enter(path);

    <span class="hljs-keyword">if</span> (defination.visitor) {
        defination.visitor.forEach(<span class="hljs-function"><span class="hljs-params">key</span> =&gt;</span> {
            <span class="hljs-keyword">const</span> prop = node[key];
            <span class="hljs-keyword">if</span> (<span class="hljs-built_in">Array</span>.isArray(prop)) { <span class="hljs-comment">// \u5982\u679C\u8BE5\u5C5E\u6027\u662F\u6570\u7EC4</span>
                prop.forEach(<span class="hljs-function"><span class="hljs-params">childNode</span> =&gt;</span> {
                    traverse(childNode, visitors, node, path);
                })
            } <span class="hljs-keyword">else</span> {
                traverse(prop, visitors, node, path);
            }
        })
    }
    visitorFuncs.exit &amp;&amp; visitorFuncs.exit(path);
}
</code></pre>
<p>\u4E4B\u540E visitor \u91CC\u9762\u5C31\u53EF\u4EE5\u62FF\u5230 path \u4E86\u3002</p>
<p>\u6BD4\u5982\u6211\u4EEC\u53EF\u4EE5\u5728 visotor \u91CC\u4ECE\u5F53\u524D\u8282\u70B9\u4E00\u76F4\u67E5\u627E\u5230\u6839\u8282\u70B9\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript">traverse(ast, {
    <span class="hljs-attr">Identifier</span>: {
        <span class="hljs-function"><span class="hljs-title">exit</span>(<span class="hljs-params">path</span>)</span> {
            path.node.name = <span class="hljs-string">'b'</span>;
            <span class="hljs-keyword">let</span> curPath = path;
            <span class="hljs-keyword">while</span> (curPath) {
                <span class="hljs-built_in">console</span>.log(curPath.node.type);
                curPath = curPath.parentPath;
            }
        }
    }
});
</code></pre>
<p>\u63A5\u4E0B\u6765\u662F\u5B9E\u73B0 api\uFF0Cpath \u7684 api \u5C31\u662F\u5BF9 AST \u7684\u589E\u5220\u6539\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E0B replaceWith\u3001remove\u3001findParent\u3001find\u3001traverse\u3001skip \u8FD9\u4E9B api\u3002</p>
<h3 data-id="heading-2">\u5B9E\u73B0 path api</h3>
<p>replaceWith \u5C31\u662F\u5728\u7236\u8282\u70B9\u66FF\u6362\u5F53\u524D\u8282\u70B9\u4E3A\u53E6\u4E00\u4E2A\u8282\u70B9\u3002\u4F46\u662F\u6211\u4EEC\u73B0\u5728\u5E76\u4E0D\u77E5\u9053\u5F53\u524D\u8282\u70B9\u5728\u7236\u8282\u70B9\u7684\u4EC0\u4E48\u5C5E\u6027\u4E0A\uFF0C\u6240\u4EE5\u5728\u904D\u5386\u7684\u65F6\u5019\u8981\u8BB0\u5F55\u5C5E\u6027\u540D\u7684\u4FE1\u606F\u3002</p>
<p>\u8FD9\u91CC\u8981\u8BB0\u5F55\u4E24\u4E2A\u5C5E\u6027 key \u548C listkey\uFF0C\u56E0\u4E3A\u5C5E\u6027\u53EF\u4EE5\u662F\u6570\u7EC4\uFF0C\u5982\u679C\u662F\u6570\u7EC4\u7684\u8BDD\u5C31\u8981\u77E5\u9053\u662F\u4EC0\u4E48\u5C5E\u6027\u7684\u4EC0\u4E48\u4E0B\u6807\uFF0C\u6BD4\u5982 params \u7684\u7B2C 2 \u4E2A\u5143\u7D20\uFF0C\u8FD9\u65F6\u5019 key \u662F params \u800C listkey \u662F 2\u3002\u5982\u679C\u4E0D\u662F\u6570\u7EC4\u7684\u8BDD\uFF0Clistkey \u4E3A\u7A7A\u3002</p>
<p>\u5728\u8BB2 path \u7684\u90A3\u4E00\u8282\uFF0C\u6211\u4EEC\u8BB2\u8FC7 key \u548C listkey\uFF0C\u5F88\u591A\u540C\u5B66\u90FD\u4E0D\u660E\u767D\u4E3A\u4EC0\u4E48\u8981\u8BB0\u5F55\u8FD9\u4E2A\uFF0C\u73B0\u5728\u5C31\u77E5\u9053\u4E86\uFF0C\u662F\u4E3A\u4E86\u5B9E\u73B0\u5BF9 AST \u589E\u5220\u6539\u7684 api \u7528\u7684\u3002</p>
<p>\u6211\u4EEC\u5BF9 traverse \u7684\u5B9E\u73B0\u505A\u4E0B\u6539\u52A8\uFF0C\u4F20\u5165 key \u548C\u6570\u7EC4\u4E0B\u6807\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-built_in">module</span>.exports = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">traverse</span>(<span class="hljs-params">node, visitors, parent, parentPath, key, listKey</span>) </span>{

    <span class="hljs-keyword">const</span> defination = visitorKeys.get(node.type);
    <span class="hljs-keyword">let</span> visitorFuncs = visitors[node.type] || {};

    <span class="hljs-keyword">if</span>(<span class="hljs-keyword">typeof</span> visitorFuncs === <span class="hljs-string">'function'</span>) {
        visitorFuncs = {
            <span class="hljs-attr">enter</span>: visitorFuncs
        }
    }
    <span class="hljs-keyword">const</span> path = <span class="hljs-keyword">new</span> NodePath(node, parent, parentPath, key, listKey);
    visitorFuncs.enter &amp;&amp; visitorFuncs.enter(path);

    <span class="hljs-keyword">if</span> (defination.visitor) {
        defination.visitor.forEach(<span class="hljs-function"><span class="hljs-params">key</span> =&gt;</span> {
            <span class="hljs-keyword">const</span> prop = node[key];
            <span class="hljs-keyword">if</span> (<span class="hljs-built_in">Array</span>.isArray(prop)) { <span class="hljs-comment">// \u5982\u679C\u8BE5\u5C5E\u6027\u662F\u6570\u7EC4</span>
                prop.forEach(<span class="hljs-function">(<span class="hljs-params">childNode, index</span>) =&gt;</span> {
                    traverse(childNode, visitors, node, path, key, index);
                })
            } <span class="hljs-keyword">else</span> {
                traverse(prop, visitors, node, path, key);
            }
        })
    }
    visitorFuncs.exit &amp;&amp; visitorFuncs.exit(path);
}

</code></pre>
<p>path \u4E5F\u8981\u505A\u76F8\u5E94\u7684\u6539\u52A8\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">NodePath</span> </span>{
    <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params">node, parent, parentPath, key, listKey</span>)</span> {
        <span class="hljs-built_in">this</span>.node = node;
        <span class="hljs-built_in">this</span>.parent = parent;
        <span class="hljs-built_in">this</span>.parentPath = parentPath;
        <span class="hljs-built_in">this</span>.key = key;
        <span class="hljs-built_in">this</span>.listKey = listKey;
    }
}
</code></pre>
<h4 data-id="heading-3">path.replaceWith</h4>
<p>\u7136\u540E\u57FA\u4E8E key \u548C listkey \u5B9E\u73B0 replaceWith \u7684 api\uFF0C\u5982\u679C\u662F\u6570\u7EC4\u7684\u8BDD\uFF0C\u5C31\u4FEE\u6539\u90A3\u4E2A\u5143\u7D20\uFF0C\u5426\u5219\u5C31\u4FEE\u6539\u8BE5\u5C5E\u6027\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-title">replaceWith</span>(<span class="hljs-params">node</span>)</span> {
    <span class="hljs-keyword">if</span> (<span class="hljs-built_in">this</span>.listKey != <span class="hljs-literal">undefined</span>) {
        <span class="hljs-built_in">this</span>.parent[<span class="hljs-built_in">this</span>.key].splice(<span class="hljs-built_in">this</span>.listKey, <span class="hljs-number">1</span>, node);
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-built_in">this</span>.parent[<span class="hljs-built_in">this</span>.key] = node
    }
}
</code></pre>
<h4 data-id="heading-4">path.remove</h4>
<p>\u540C\u7406\uFF0Cremove \u4E5F\u662F\u4E00\u6837\u7684\u601D\u8DEF\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript">remove () {
    <span class="hljs-keyword">if</span> (<span class="hljs-built_in">this</span>.listKey != <span class="hljs-literal">undefined</span>) {
        <span class="hljs-built_in">this</span>.parent[<span class="hljs-built_in">this</span>.key].splice(<span class="hljs-built_in">this</span>.listKey, <span class="hljs-number">1</span>);
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-built_in">this</span>.parent[<span class="hljs-built_in">this</span>.key] = <span class="hljs-literal">null</span>;
    }
}
</code></pre>
<h4 data-id="heading-5">path.find\u3001path.findParent</h4>
<p>find \u548C findParent \u662F\u987A\u7740 path \u94FE\u5411\u4E0A\u67E5\u627E AST\uFF0C\u5E76\u4E14\u628A\u8282\u70B9\u4F20\u5165\u56DE\u8C03\u51FD\u6570\uFF0C\u5982\u679C\u627E\u5230\u4E86\u5C31\u8FD4\u56DE\u8282\u70B9\u7684 path\u3002\u533A\u522B\u662F find \u5305\u542B\u5F53\u524D\u8282\u70B9\uFF0CfindParent \u4E0D\u5305\u542B\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-title">findParent</span>(<span class="hljs-params">callback</span>)</span> {
    <span class="hljs-keyword">let</span> curPath = <span class="hljs-built_in">this</span>.parentPath;
    <span class="hljs-keyword">while</span> (curPath &amp;&amp; !callback(curPath)) {
        curPath = curPath.parentPath; 
    }
    <span class="hljs-keyword">return</span> curPath;
}
<span class="hljs-function"><span class="hljs-title">find</span>(<span class="hljs-params">callback</span>)</span> {
    <span class="hljs-keyword">let</span> curPath = <span class="hljs-built_in">this</span>;
    <span class="hljs-keyword">while</span> (curPath &amp;&amp; !callback(curPath)) {
        curPath = curPath.parentPath; 
    }
    <span class="hljs-keyword">return</span> curPath;
}
</code></pre>
<h4 data-id="heading-6">path.traverse</h4>
<p>traverse \u7684 api \u662F\u57FA\u4E8E\u4E0A\u9762\u5B9E\u73B0\u7684 traverse\uFF0C\u4F46\u662F\u6709\u4E00\u70B9\u4E0D\u540C\uFF0Cpath.traverse \u4E0D\u9700\u8981\u518D\u904D\u5386\u5F53\u524D\u8282\u70B9\uFF0C\u76F4\u63A5\u904D\u5386\u5B50\u8282\u70B9\u5373\u53EF\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-title">traverse</span>(<span class="hljs-params">visitors</span>)</span> {
    <span class="hljs-keyword">const</span> traverse = <span class="hljs-built_in">require</span>(<span class="hljs-string">'../index'</span>);
    <span class="hljs-keyword">const</span> defination = types.visitorKeys.get(<span class="hljs-built_in">this</span>.node.type);

    <span class="hljs-keyword">if</span> (defination.visitor) {
        defination.visitor.forEach(<span class="hljs-function"><span class="hljs-params">key</span> =&gt;</span> {
            <span class="hljs-keyword">const</span> prop = <span class="hljs-built_in">this</span>.node[key];
            <span class="hljs-keyword">if</span> (<span class="hljs-built_in">Array</span>.isArray(prop)) { <span class="hljs-comment">// \u5982\u679C\u8BE5\u5C5E\u6027\u662F\u6570\u7EC4</span>
                prop.forEach(<span class="hljs-function">(<span class="hljs-params">childNode, index</span>) =&gt;</span> {
                    traverse(childNode, visitors, <span class="hljs-built_in">this</span>.node, <span class="hljs-built_in">this</span>);
                })
            } <span class="hljs-keyword">else</span> {
                traverse(prop, visitors, <span class="hljs-built_in">this</span>.node, <span class="hljs-built_in">this</span>);
            }
        })
    }
}
</code></pre>
<h4 data-id="heading-7">path.skip</h4>
<p>skip \u7684\u5B9E\u73B0\u53EF\u4EE5\u7ED9\u8282\u70B9\u52A0\u4E2A\u6807\u8BB0\uFF0C\u904D\u5386\u7684\u8FC7\u7A0B\u4E2D\u5982\u679C\u53D1\u73B0\u4E86\u8FD9\u4E2A\u6807\u8BB0\u5C31\u8DF3\u8FC7\u5B50\u8282\u70B9\u904D\u5386\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-title">skip</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.node.__shouldSkip = <span class="hljs-literal">true</span>;
}
</code></pre>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-built_in">module</span>.exports = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">traverse</span>(<span class="hljs-params">node, visitors, parent, parentPath, key, listKey</span>) </span>{

    <span class="hljs-keyword">const</span> defination = visitorKeys.get(node.type);
    <span class="hljs-keyword">let</span> visitorFuncs = visitors[node.type] || {};

    <span class="hljs-keyword">if</span>(<span class="hljs-keyword">typeof</span> visitorFuncs === <span class="hljs-string">'function'</span>) {
        visitorFuncs = {
            <span class="hljs-attr">enter</span>: visitorFuncs
        }
    }
    <span class="hljs-keyword">const</span> path = <span class="hljs-keyword">new</span> NodePath(node, parent, parentPath, key, listKey);
    visitorFuncs.enter &amp;&amp; visitorFuncs.enter(path);

    <span class="hljs-keyword">if</span>(node.__shouldSkip) {
        <span class="hljs-keyword">delete</span> node.__shouldSkip;
        <span class="hljs-keyword">return</span>;
    }

    <span class="hljs-keyword">if</span> (defination.visitor) {
        defination.visitor.forEach(<span class="hljs-function"><span class="hljs-params">key</span> =&gt;</span> {
            <span class="hljs-keyword">const</span> prop = node[key];
            <span class="hljs-keyword">if</span> (<span class="hljs-built_in">Array</span>.isArray(prop)) { <span class="hljs-comment">// \u5982\u679C\u8BE5\u5C5E\u6027\u662F\u6570\u7EC4</span>
                prop.forEach(<span class="hljs-function">(<span class="hljs-params">childNode, index</span>) =&gt;</span> {
                    traverse(childNode, visitors, node, path, key, index);
                })
            } <span class="hljs-keyword">else</span> {
                traverse(prop, visitors, node, path, key);
            }
        })
    }
    visitorFuncs.exit &amp;&amp; visitorFuncs.exit(path);
}
</code></pre>
<h4 data-id="heading-8">path.toString</h4>
<p>toString \u662F\u628A\u5F53\u524D\u8282\u70B9\u6253\u5370\u6210\u76EE\u6807\u4EE3\u7801\uFF0C\u4F1A\u8C03\u7528 generator\uFF0Cgenerator \u7684\u5B9E\u73B0\u5728\u540E\u9762\u7684\u7AE0\u8282\u4F1A\u8BB2\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-title">toString</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> generate(<span class="hljs-built_in">this</span>.node).code;
}
</code></pre>
<h4 data-id="heading-9">path.isXxx</h4>
<p>\u6211\u4EEC\u8BB0\u5F55\u4E86\u4E0D\u540C ast \u600E\u4E48\u904D\u5386\uFF0C\u90A3\u4E48\u4E5F\u53EF\u4EE5\u57FA\u4E8E\u8FD9\u4E9B\u6570\u636E\u5B9E\u73B0\u5404\u79CD\u5224\u65AD AST \u7C7B\u578B\u7684 api\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> validations = {};

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> name <span class="hljs-keyword">of</span> astDefinationsMap.keys()) {
    validations[<span class="hljs-string">'is'</span> + name] = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">node</span>) </span>{
        <span class="hljs-keyword">return</span> node.type === name;
    }
}
</code></pre>
<p>\u8FD9\u4E9B\u4F1A\u62BD\u79BB\u5230 types \u5305\u91CC\u9762\uFF0C\u7136\u540E\u5728 path \u4E2D\u505A\u76F8\u5E94\u7684\u5C01\u88C5\uFF0C\u901A\u8FC7 bind \u7ED9\u65B9\u6CD5\u6DFB\u52A0\u4E00\u4E2A\u53C2\u6570\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> types = <span class="hljs-built_in">require</span>(<span class="hljs-string">'../../types'</span>);

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">NodePath</span> </span>{
    <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params">node, parent, parentPath, key, listKey</span>)</span> {
        <span class="hljs-built_in">this</span>.node = node;
        <span class="hljs-built_in">this</span>.parent = parent;
        <span class="hljs-built_in">this</span>.parentPath = parentPath;
        <span class="hljs-built_in">this</span>.key = key;
        <span class="hljs-built_in">this</span>.listKey = listKey;

        <span class="hljs-built_in">Object</span>.keys(types).forEach(<span class="hljs-function"><span class="hljs-params">key</span> =&gt;</span> {
            <span class="hljs-keyword">if</span> (key.startsWith(<span class="hljs-string">'is'</span>)) {
                <span class="hljs-built_in">this</span>[key] = types[key].bind(<span class="hljs-built_in">this</span>, node);
            }
        })
    }
}
</code></pre>
<p>\u5B9E\u73B0\u4E86\u8FD9\u4E9B API \u4E4B\u540E\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728 visitor \u91CC\u4F7F\u7528 path \u7684 api \u6765\u64CD\u4F5C ast \u4E86\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript">traverse(ast, {
    <span class="hljs-function"><span class="hljs-title">Identifier</span>(<span class="hljs-params">path</span>)</span> {
        <span class="hljs-keyword">if</span>(path.findParent(<span class="hljs-function"><span class="hljs-params">p</span> =&gt;</span> p.isCallExpression())) {
            path.replaceWith({ <span class="hljs-attr">type</span>: <span class="hljs-string">'Identifier'</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">'bbbbbbb'</span> });
        }
    }
})
</code></pre>
<h2 data-id="heading-10">\u603B\u7ED3</h2>
<p>path \u7684 api \u5C31\u662F\u5BF9 AST \u8FDB\u884C\u589E\u5220\u6539\uFF0C\u6211\u4EEC\u8BB0\u5F55\u4E86 node\uFF08\u5F53\u524D\u8282\u70B9\uFF09\u3001parent\uFF08\u7236\u8282\u70B9\uFF09\u3001parentPath\uFF08\u7236 path\uFF09 \u7B49\u4FE1\u606F\uFF0C\u8FD8\u4F1A\u8BB0\u5F55 key\uFF08\u7236\u8282\u70B9\u5C5E\u6027\uFF09 \u548C listkey\uFF08\u7236\u8282\u70B9\u4E0B\u6807\uFF09\u3002\u57FA\u4E8E\u8FD9\u4E9B\u5C31\u53EF\u4EE5\u5B9E\u73B0 replaceWith\u3001remove\u3001find\u3001findParent\u3001skip \u7B49 api\u3002</p>
<p>\uFF08\u4EE3\u7801\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FQuarkGluonPlasma%2Fbabel-plugin-exercize" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/QuarkGluonPlasma/babel-plugin-exercize" ref="nofollow noopener noreferrer">\u8FD9\u91CC</a>\uFF0C\u5EFA\u8BAE git clone \u4E0B\u6765\u901A\u8FC7 node \u8DD1\u4E00\u4E0B\uFF09</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
