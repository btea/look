var s={name:"22\u3001\u5B9E\u6218\u6848\u4F8B_ \u6A21\u5757\u904D\u5386\u5668",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>babel \u80FD\u591F\u505A\u9759\u6001\u5206\u6790\uFF0C\u5206\u6790\u4EE3\u7801\u7136\u540E\u5F97\u51FA\u4E00\u4E9B\u4FE1\u606F\u3002\u6211\u4EEC\u7ECF\u5E38\u7528\u7684\u6253\u5305\u5DE5\u5177\u5C31\u9700\u8981\u901A\u8FC7\u9759\u6001\u5206\u6790\u7684\u65B9\u5F0F\u5F97\u51FA\u6A21\u5757\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7136\u540E\u6784\u9020\u6210\u4F9D\u8D56\u56FE\uFF0C\u4E4B\u540E\u5BF9\u8FD9\u4E2A\u4F9D\u8D56\u56FE\u505A\u5404\u79CD\u5904\u7406\uFF0C\u6700\u540E\u8F93\u51FA\u6210\u6587\u4EF6\u3002</p>
<p>\u6BD4\u5982 webpack \u7684\u6253\u5305\u8FC7\u7A0B\uFF1A\u4ECE\u5165\u53E3\u6A21\u5757\u5206\u6790\u4F9D\u8D56\uFF0C\u6784\u9020\u6A21\u5757\u4F9D\u8D56\u56FE\uFF0C\u7136\u540E\u628A\u4E00\u4E9B\u6A21\u5757\u5408\u5E76\u5230\u540C\u4E2A\u5206\u7EC4\uFF08chunk\uFF09\u91CC\uFF0C\u751F\u6210 chunk \u4F9D\u8D56\u56FE\uFF0C\u6700\u540E\u628A chunk \u901A\u8FC7\u6A21\u7248\u6253\u5370\u4E3A assets\uFF0C\u8F93\u51FA\u4E3A\u6587\u4EF6\u3002</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ad6cc6cb7e84f3da779adf1f79a773d~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u4ECE\u5165\u53E3\u6A21\u5757\u5F00\u59CB\uFF0C\u5BF9\u6BCF\u4E2A\u6A21\u5757\u7684\u4F9D\u8D56\u5173\u7CFB\u7684\u5206\u6790\u5C31\u662F\u57FA\u4E8E AST\uFF0C\u8FD9\u79CD\u5C31\u53EF\u4EE5\u7528 babel parser \uFF08\u6216\u8005\u76F4\u63A5\u7528 acorn\uFF09\u6765\u5904\u7406\u3002</p>
<p>\u8FD9\u4E00\u8282\u6211\u4EEC\u5C31\u6765\u5B9E\u73B0\u4E0B\u4F9D\u8D56\u5206\u6790\u7684\u529F\u80FD\uFF0C\u4E5F\u5C31\u662F\u904D\u5386\u6240\u6709\u7684\u6A21\u5757\u3002</p>
<p>\u5199\u8FD9\u4E2A\u7684\u597D\u5904\u4E00\u4E2A\u662F\u80FD\u591F\u52A0\u6DF1\u6211\u4EEC\u5BF9\u6253\u5305\u5DE5\u5177\u7684\u8BA4\u8BC6\uFF0C\u4E8C\u662F\u5F53\u505A\u4E00\u4E9B\u72EC\u7ACB\u7684\u5DE5\u5177\u7684\u65F6\u5019\uFF0C\u53EF\u80FD\u4E5F\u9700\u8981\u5206\u6790\u6A21\u5757\u4F9D\u8D56\u5173\u7CFB\u3002</p>
<h2 data-id="heading-0">\u601D\u8DEF\u5206\u6790</h2>
<p>\u6A21\u5757\u4F9D\u8D56\u5206\u6790\u4E5F\u5C31\u662F\u8981\u5206\u6790 import \u548C export\uFF0C\u4ECE\u5165\u53E3\u6A21\u5757\u5F00\u59CB\uFF0C\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\uFF0C\u901A\u8FC7 babel parser \u628A\u5185\u5BB9 parse \u6210 ast\uFF0C\u4E4B\u540E\u901A\u8FC7 babel traverse \u6765\u5BF9 AST \u8FDB\u884C\u904D\u5386\u3002\u5206\u522B\u5BF9 ImportDeclaration\u3001ExportDeclaration \u505A\u5904\u7406\uFF1A</p>
<p>ImportDeclaration\uFF1A\u6536\u96C6 import \u4FE1\u606F\uFF0C\u786E\u5B9A\u4F9D\u8D56\u7684\u6A21\u5757\u548C\u5F15\u5165\u7684\u53D8\u91CF\uFF0C\u4E4B\u540E\u518D\u9012\u5F52\u5904\u7406\u8BE5\u6A21\u5757
ExportDeclaration\uFF1A\u6536\u96C6 export \u4FE1\u606F\uFF0C\u786E\u5B9A\u5BFC\u51FA\u7684\u53D8\u91CF</p>
<p>\u6211\u4EEC\u53EF\u4EE5\u8BBE\u8BA1\u8FD9\u6837\u4E00\u4E2A\u7ED3\u6784\u6765\u8868\u793A\u6BCF\u4E2A\u6A21\u5757\u7684\u4FE1\u606F\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">DependencyNode</span> </span>{
    <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params">path = <span class="hljs-string">''</span>, imports = {}, <span class="hljs-built_in">exports</span> = []</span>)</span> {
        <span class="hljs-built_in">this</span>.path = path;
        <span class="hljs-built_in">this</span>.imports = imports;
        <span class="hljs-built_in">this</span>.exports = <span class="hljs-built_in">exports</span>;
        <span class="hljs-built_in">this</span>.subModules = {};
    }
}
</code></pre>
<p>path \u8868\u793A\u5F53\u524D\u6A21\u5757\u8DEF\u5F84\uFF0C imports \u8868\u793A\u4ECE\u4EC0\u4E48\u6A21\u5757\u5F15\u5165\u4E86\u4EC0\u4E48\u53D8\u91CF\uFF0Cexports \u8868\u793A\u5BFC\u51FA\u4E86\u4EC0\u4E48\u53D8\u91CF\u3002</p>
<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u8981\u5B8C\u6210 traverseModule \u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u4E5F\u5C31\u662F\u5BF9\u6BCF\u4E2A\u6A21\u5757\u7684\u5904\u7406</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> dependencyGraph = traverseModule(\u5165\u53E3\u6A21\u5757\u8DEF\u5F84);
</code></pre>
<p>\u5177\u4F53\u5904\u7406\u7684\u8FC7\u7A0B\u5C31\u662F\uFF1A</p>
<ul>
<li>\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9</li>
<li>\u901A\u8FC7 babel parser \u628A\u6587\u4EF6\u5185\u5BB9 parse \u6210 ast</li>
<li>\u904D\u5386 AST\uFF0C\u5BF9 ImportDeclaration\u3001ExportDeclaration \u5206\u522B\u505A\u5904\u7406</li>
<li>\u5BF9\u5206\u6790\u51FA\u7684\u4F9D\u8D56\u8DEF\u5F84\u8FDB\u884C\u5904\u7406\uFF0C\u53D8\u6210\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5E76\u5C1D\u8BD5\u8865\u5168</li>
<li>\u9012\u5F52\u5904\u7406\u5206\u6790\u51FA\u6765\u7684\u4F9D\u8D56\u8DEF\u5F84</li>
</ul>
<p>\u5982\u679C\u6CA1\u6709\u540E\u7F00\u540D\u7684\u4F9D\u8D56\u8DEF\u5F84\uFF0C\u8981\u5206\u522B\u5C1D\u8BD5 .js\u3001.jsx\u3001.ts\u3001.tsx \u7684\u8DEF\u5F84\uFF0C\u5982\u679C\u5B58\u5728\u5C31\u8865\u5168\u6210\u8BE5\u8DEF\u5F84\uFF0C\u5E76\u4E14\u76EE\u5F55\u8FD8\u8981\u8865\u5168 index \u6587\u4EF6\u540D\u3002</p>
<p>\u901A\u8FC7\u9012\u5F52\u5904\u7406\u4F9D\u8D56\u6A21\u5757\uFF0C\u5C31\u53EF\u4EE5\u5B8C\u6210\u4F9D\u8D56\u56FE\u7684\u6784\u5EFA\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4FDD\u5B58\u6839\u8282\u70B9\u548C\u6240\u6709\u6A21\u5757\u7684\u4FE1\u606F\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> dependencyGraph = {
    <span class="hljs-attr">root</span>: <span class="hljs-keyword">new</span> DependencyNode(),
    <span class="hljs-attr">allModules</span>: {}
};
</code></pre>
<p>\u5F53\u5904\u7406\u5B8C\u6240\u6709\u6A21\u5757\u540E\uFF0C\u5C31\u5F97\u5230\u4E86\u5B8C\u6574\u7684 dependencyGraph\u3002</p>
<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u5199\u4E0B\u4EE3\u7801\u3002</p>
<h2 data-id="heading-1">\u4EE3\u7801\u5B9E\u73B0</h2>
<p>\u9996\u5148\u6211\u4EEC\u5B9A\u4E49\u8981\u8FD4\u56DE\u7684 dependencyGraph\uFF0C</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">DependencyNode</span> </span>{
    <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params">path = <span class="hljs-string">''</span>, imports = {}, <span class="hljs-built_in">exports</span> = []</span>)</span> {
        <span class="hljs-built_in">this</span>.path = path;
        <span class="hljs-built_in">this</span>.imports = imports;
        <span class="hljs-built_in">this</span>.exports = <span class="hljs-built_in">exports</span>;
        <span class="hljs-built_in">this</span>.subModules = {};
    }
}

<span class="hljs-built_in">module</span>.exports = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">curModulePath</span>) </span>{
    <span class="hljs-keyword">const</span> dependencyGraph = {
        <span class="hljs-attr">root</span>: <span class="hljs-keyword">new</span> DependencyNode(),
        <span class="hljs-attr">allModules</span>: {}
    };
    traverseJsModule(curModulePath, dependencyGraph.root, dependencyGraph.allModules);
    <span class="hljs-keyword">return</span> dependencyGraph;
}
</code></pre>
<p>\u63A5\u4E0B\u6765\u5B9E\u73B0\u904D\u5386\u7684\u65B9\u6CD5\uFF0C\u4E5F\u5C31\u662F\u4E4B\u524D\u5206\u6790\u7684 <strong>\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\u3001parse \u6210 AST\u3001travese AST \u63D0\u53D6\u6A21\u5757\u4FE1\u606F\u548C\u4F9D\u8D56\u4FE1\u606F\u3001\u9012\u5F52\u904D\u5386\u4F9D\u8D56\uFF08\u5148\u628A\u8DEF\u5F84\u5904\u7406\u6210\u7EDD\u5BF9\u8DEF\u5F84\uFF09</strong> \u7684\u8FC7\u7A0B\u3002</p>
<blockquote>
<p>\u8981\u6CE8\u610F\u7684\u662F\uFF0Cts\u3001jsx\u3001tsx \u7B49\u7528\u7684 babel \u63D2\u4EF6\u4E0D\u540C\uFF0C\u8981\u6839\u636E extname \u6765\u505A\u4E0D\u540C\u7684\u63D2\u4EF6\u7684\u5F15\u5165\u3002</p>
</blockquote>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">resolveBabelSyntaxtPlugins</span>(<span class="hljs-params">modulePath</span>) </span>{
    <span class="hljs-keyword">const</span> plugins = [];
    <span class="hljs-keyword">if</span> ([<span class="hljs-string">'.tsx'</span>, <span class="hljs-string">'.jsx'</span>].some(<span class="hljs-function"><span class="hljs-params">ext</span> =&gt;</span> modulePath.endsWith(ext))) {
        plugins.push(<span class="hljs-string">'jsx'</span>);
    }
    <span class="hljs-keyword">if</span> ([<span class="hljs-string">'.ts'</span>, <span class="hljs-string">'.tsx'</span>].some(<span class="hljs-function"><span class="hljs-params">ext</span> =&gt;</span> modulePath.endsWith(ext))) {
        plugins.push(<span class="hljs-string">'typescript'</span>);
    }
    <span class="hljs-keyword">return</span> plugins;
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">traverseJsModule</span>(<span class="hljs-params">curModulePath, dependencyGrapthNode, allModules</span>) </span>{
    <span class="hljs-keyword">const</span> moduleFileContent = fs.readFileSync(curModulePath, {
        <span class="hljs-attr">encoding</span>: <span class="hljs-string">'utf-8'</span>
    });
    dependencyGrapthNode.path = curModulePath;

    <span class="hljs-keyword">const</span> ast = parser.parse(moduleFileContent, {
        <span class="hljs-attr">sourceType</span>: <span class="hljs-string">'unambiguous'</span>,
        <span class="hljs-attr">plugins</span>: resolveBabelSyntaxtPlugins(curModulePath)
    });

    traverse(ast, {
        <span class="hljs-function"><span class="hljs-title">ImportDeclaration</span>(<span class="hljs-params">path</span>)</span> {
            <span class="hljs-comment">// \u6536\u96C6import \u4FE1\u606F</span>
            <span class="hljs-comment">// \u9012\u5F52\u5904\u7406\u4F9D\u8D56\u6A21\u5757</span>
            traverseJsModule(subModulePath, subModule, allModules);
            dependencyGrapthNode.subModules[subModule.path] = subModule;
        },
        <span class="hljs-function"><span class="hljs-title">ExportDeclaration</span>(<span class="hljs-params">path</span>)</span> {
            <span class="hljs-comment">//\u6536\u96C6 export \u4FE1\u606F</span>
        }
    });
    allModules[curModulePath] = dependencyGrapthNode;
}
</code></pre>
<p>\u4E0A\u9762\u7701\u7565\u4E86\u5BF9 ImportDeclaration \u548C ExportDeclaration \u7684\u5904\u7406\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u5206\u522B\u5904\u7406\u4E0B\u8FD9\u4E24\u79CD\u8282\u70B9\uFF1A</p>
<p>ImportDeclaration \u5206\u4E3A\u4E09\u79CD\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-comment">// \u8FD9\u79CD\u6211\u4EEC\u53EB deconstruct import\uFF08\u89E3\u6784\u5F15\u5165\uFF09</span>
<span class="hljs-keyword">import</span> { a, b <span class="hljs-keyword">as</span> bb} <span class="hljs-keyword">from</span> <span class="hljs-string">'aa'</span>;
<span class="hljs-comment">// \u8FD9\u79CD\u6211\u4EEC\u53EB namespace import\uFF08\u547D\u540D\u7A7A\u95F4\u5F15\u5165\uFF09</span>
<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> c <span class="hljs-keyword">from</span> <span class="hljs-string">'cc'</span>;
<span class="hljs-comment">// \u8FD9\u79CD\u6211\u4EEC\u53EB default import\uFF08\u9ED8\u8BA4\u5F15\u5165\uFF09</span>
<span class="hljs-keyword">import</span> b <span class="hljs-keyword">from</span> <span class="hljs-string">'b'</span>;
</code></pre>
<p>\u90A3\u4E48\u6211\u4EEC\u5C31\u8981\u6839\u636E\u5177\u4F53\u7684\u7C7B\u578B\u6765\u63D0\u53D6\u4FE1\u606F\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> IMPORT_TYPE = {
    <span class="hljs-attr">deconstruct</span>: <span class="hljs-string">'deconstruct'</span>,
    <span class="hljs-attr">default</span>: <span class="hljs-string">'default'</span>,
    <span class="hljs-attr">namespace</span>: <span class="hljs-string">'namespace'</span>
}
</code></pre>
<pre><code class="hljs language-javascript" lang="javascript"> <span class="hljs-function"><span class="hljs-title">ImportDeclaration</span>(<span class="hljs-params">path</span>)</span> {
    <span class="hljs-keyword">const</span> subModulePath = moduleResolver(curModulePath, path.get(<span class="hljs-string">'source.value'</span>).node);
    <span class="hljs-keyword">if</span> (!subModulePath) {
        <span class="hljs-keyword">return</span>;
    }

    <span class="hljs-keyword">const</span> specifierPaths = path.get(<span class="hljs-string">'specifiers'</span>);
    dependencyGrapthNode.imports[subModulePath] = specifierPaths.map(<span class="hljs-function"><span class="hljs-params">specifierPath</span> =&gt;</span> {
        <span class="hljs-keyword">if</span> (specifierPath.isImportSpecifier()) {
            <span class="hljs-keyword">return</span> {
                <span class="hljs-attr">type</span>: IMPORT_TYPE.deconstruct,
                <span class="hljs-attr">imported</span>: specifierPath.get(<span class="hljs-string">'imported'</span>).node.name,
                <span class="hljs-attr">local</span>: specifierPath.get(<span class="hljs-string">'local'</span>).node.name
            }
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (specifierPath.isImportDefaultSpecifier()) {
            <span class="hljs-keyword">return</span> {
                <span class="hljs-attr">type</span>: IMPORT_TYPE.default,
                <span class="hljs-attr">local</span>: specifierPath.get(<span class="hljs-string">'local'</span>).node.name
            }
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-keyword">return</span> {
                <span class="hljs-attr">type</span>: IMPORT_TYPE.namespace,
                <span class="hljs-attr">local</span>: specifierPath.get(<span class="hljs-string">'local'</span>).node.name
            }
        }
    });

    <span class="hljs-keyword">const</span> subModule = <span class="hljs-keyword">new</span> DependencyNode();
    traverseJsModule(subModulePath, subModule, allModules);
    dependencyGrapthNode.subModules[subModule.path] = subModule;
}
</code></pre>
<p>\u4E0A\u9762\u6211\u4EEC\u901A\u8FC7\u8BB0\u5F55\u4E86 import \u4FE1\u606F\u5230  dependencyGrapthNode.imports \u4E2D\uFF0C\u5E76\u4E14\u9012\u5F52\u5904\u7406\u4E86\u4F9D\u8D56\u6A21\u5757\u3002\u800C\u4E14\u5728\u5904\u7406\u4F9D\u8D56\u6A21\u5757\u4E4B\u524D\uFF0C\u6211\u4EEC\u505A\u4E86\u628A\u8DEF\u5F84\u8F6C\u6210\u7EDD\u5BF9\u8DEF\u5F84\u548C\u8DEF\u5F84\u8865\u5168\u7684\u5904\u7406\u3002</p>
<p>\u8DEF\u5F84\u8865\u5168\u7684\u5904\u7406\u5C31\u662F\u5206\u522B\u5C1D\u8BD5 .tsx,.ts,.jsx,.js\u7684\u8DEF\u5F84\u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u662F\u76EE\u5F55\u7684\u8BDD\uFF0C\u8FD8\u8981\u8FDE\u540C index \u4E00\u8D77\u8865\u5168\uFF0C\u4E5F\u5C31\u662F index.tsx\u3001index.ts\u3001index.jsx\u3001index.js</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">completeModulePath</span> (<span class="hljs-params">modulePath</span>) </span>{
    <span class="hljs-keyword">const</span> EXTS = [<span class="hljs-string">'.tsx'</span>,<span class="hljs-string">'.ts'</span>,<span class="hljs-string">'.jsx'</span>,<span class="hljs-string">'.js'</span>];
    <span class="hljs-keyword">if</span> (modulePath.match(<span class="hljs-regexp">/\\.[a-zA-Z]+$/</span>)) {
        <span class="hljs-keyword">return</span> modulePath;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">tryCompletePath</span> (<span class="hljs-params">resolvePath</span>) </span>{
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; EXTS.length; i ++) {
            <span class="hljs-keyword">let</span> tryPath = resolvePath(EXTS[i]);
            <span class="hljs-keyword">if</span> (fs.existsSync(tryPath)) {
                <span class="hljs-keyword">return</span> tryPath;
            }
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">reportModuleNotFoundError</span> (<span class="hljs-params">modulePath</span>) </span>{
        <span class="hljs-keyword">throw</span> <span class="hljs-string">'module not found: '</span> + modulePath;
    }

    <span class="hljs-keyword">if</span> (isDirectory(modulePath)) {<span class="hljs-comment">//\u5982\u679C\u662F\u76EE\u5F55</span>
        <span class="hljs-keyword">const</span> tryModulePath = tryCompletePath(<span class="hljs-function">(<span class="hljs-params">ext</span>) =&gt;</span> path.join(modulePath, <span class="hljs-string">'index'</span> + ext));
        <span class="hljs-keyword">if</span> (!tryModulePath) {
            reportModuleNotFoundError(modulePath);
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-keyword">return</span> tryModulePath;
        }
    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (!EXTS.some(<span class="hljs-function"><span class="hljs-params">ext</span> =&gt;</span> modulePath.endsWith(ext))) {<span class="hljs-comment">//\u5982\u679C\u8865\u5168\u540E\u7684\u8DEF\u5F84\u5B58\u5728</span>
        <span class="hljs-keyword">const</span> tryModulePath = tryCompletePath(<span class="hljs-function">(<span class="hljs-params">ext</span>) =&gt;</span> modulePath + ext);
        <span class="hljs-keyword">if</span> (!tryModulePath) {
            reportModuleNotFoundError(modulePath);
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-keyword">return</span> tryModulePath;
        }
    }
    <span class="hljs-keyword">return</span> modulePath;
}
</code></pre>
<p>\u5F53\u7136\uFF0C\u6211\u4EEC\u8FD8\u8981\u6536\u96C6\u4E0B export \u7684\u4FE1\u606F\uFF0C\u4E5F\u662F\u5206\u4E3A\u4E09\u79CD\u7C7B\u578B\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-comment">// \u5168\u90E8\u5BFC\u51FA(all export)</span>
<span class="hljs-keyword">export</span> * <span class="hljs-keyword">from</span> <span class="hljs-string">'a'</span>;
<span class="hljs-comment">// \u9ED8\u8BA4\u5BFC\u51FA (default export)</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> b;
<span class="hljs-comment">// \u547D\u540D\u5BFC\u51FA (named export)</span>
<span class="hljs-keyword">export</span> { c <span class="hljs-keyword">as</span> cc };
</code></pre>
<p>\u7136\u540E\u5206\u522B\u5BF9\u8FD9\u4E09\u79CD AST \u505A\u4E0D\u540C\u7684\u4FE1\u606F\u6536\u96C6\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-title">ExportDeclaration</span>(<span class="hljs-params">path</span>)</span> {
    <span class="hljs-keyword">if</span>(path.isExportNamedDeclaration()) {
        <span class="hljs-keyword">const</span> specifiers = path.get(<span class="hljs-string">'specifiers'</span>);
        dependencyGrapthNode.exports = specifiers.map(<span class="hljs-function"><span class="hljs-params">specifierPath</span> =&gt;</span> ({
            <span class="hljs-attr">type</span>: EXPORT_TYPE.named,
            <span class="hljs-attr">exported</span>: specifierPath.get(<span class="hljs-string">'exported'</span>).node.name,
            <span class="hljs-attr">local</span>: specifierPath.get(<span class="hljs-string">'local'</span>).node.name
        }));
    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (path.isExportDefaultDeclaration()) {
        <span class="hljs-keyword">let</span> exportName;
        <span class="hljs-keyword">const</span> declarationPath = path.get(<span class="hljs-string">'declaration'</span>);
        <span class="hljs-keyword">if</span>(declarationPath.isAssignmentExpression()) {
            exportName = declarationPath.get(<span class="hljs-string">'left'</span>).toString();
        } <span class="hljs-keyword">else</span> {
            exportName = declarationPath.toString()
        }
        dependencyGrapthNode.exports.push({
            <span class="hljs-attr">type</span>: EXPORT_TYPE.default,
            <span class="hljs-attr">exported</span>: exportName
        });
    } <span class="hljs-keyword">else</span> {
        dependencyGrapthNode.exports.push({
            <span class="hljs-attr">type</span>: EXPORT_TYPE.all,
            <span class="hljs-attr">exported</span>: path.get(<span class="hljs-string">'exported'</span>).node.name,
            <span class="hljs-attr">source</span>: path.get(<span class="hljs-string">'source'</span>).node.value
        });
    }
}
</code></pre>
<p>\u9012\u5F52\u5904\u7406\u6BCF\u4E00\u4E2A\u6A21\u5757\u5C31\u5B8C\u6210\u4E86\u4F9D\u8D56\u56FE\u7684\u6784\u5EFA\u3002</p>
<h2 data-id="heading-2">\u6548\u679C\u6F14\u793A</h2>
<p>\u9996\u5148\u6211\u4EEC\u5199\u4E00\u4E2A\u6D4B\u8BD5\u9879\u76EE\uFF1A</p>
<p><strong>index.js</strong></p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">import</span> { aa1, aa2 } <span class="hljs-keyword">from</span> <span class="hljs-string">'./a'</span>;

<span class="hljs-built_in">console</span>.log(aa1);
</code></pre>
<p><strong>a.js</strong></p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">import</span> b <span class="hljs-keyword">from</span> <span class="hljs-string">'./b'</span>;

<span class="hljs-keyword">const</span> aa1 = <span class="hljs-number">1</span>;
<span class="hljs-keyword">const</span> aa2 = <span class="hljs-number">2</span>;

<span class="hljs-built_in">console</span>.log(b);

<span class="hljs-keyword">export</span> {
    aa1,
    aa2
}
</code></pre>
<p><strong>b.js</strong></p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">import</span> { cc  <span class="hljs-keyword">as</span> renamedCc } <span class="hljs-keyword">from</span> <span class="hljs-string">'./c'</span>;
 
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> b = <span class="hljs-number">4</span>;

</code></pre>
<p><strong>c/index.js</strong></p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> cc = <span class="hljs-number">5</span>;

<span class="hljs-keyword">export</span> {
    cc
};
</code></pre>
<p>\u7136\u540E\u4F7F\u7528 traverseModule \u65B9\u6CD5\u5BF9\u5165\u53E3\u6A21\u5757 index \u8FDB\u884C\u5904\u7406\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> traverseModule = <span class="hljs-built_in">require</span>(<span class="hljs-string">'./traverseModule'</span>);
<span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">'path'</span>);

<span class="hljs-keyword">const</span> dependencyGraph = traverseModule(path.resolve(__dirname, <span class="hljs-string">'../test-project/index.js'</span>));
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">JSON</span>.stringify(dependencyGraph, <span class="hljs-literal">null</span>, <span class="hljs-number">4</span>));
</code></pre>
<p>\u7ED3\u679C\u5982\u4E0B\uFF0C\u6211\u4EEC\u6210\u529F\u6784\u5EFA\u51FA\u4E86\u6574\u4E2A\u4F9D\u8D56\u56FE\uFF1A</p>
<pre><code class="">{
    "root": {
        "path": "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/index.js",
        "imports": {
            "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/a.js": [
                {
                    "type": "deconstruct",
                    "imported": "aa1",
                    "local": "aa1"
                },
                {
                    "type": "deconstruct",
                    "imported": "aa2",
                    "local": "aa2"
                }
            ]
        },
        "exports": [],
        "subModules": {
            "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/a.js": {
                "path": "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/a.js",
                "imports": {
                    "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js": [
                        {
                            "type": "default",
                            "local": "b"
                        }
                    ]
                },
                "exports": [
                    {
                        "type": "named",
                        "exported": "aa1",
                        "local": "aa1"
                    },
                    {
                        "type": "named",
                        "exported": "aa2",
                        "local": "aa2"
                    }
                ],
                "subModules": {
                    "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js": {
                        "path": "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js",
                        "imports": {
                            "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js": [
                                {
                                    "type": "deconstruct",
                                    "imported": "cc",
                                    "local": "renamedCc"
                                }
                            ]
                        },
                        "exports": [
                            {
                                "type": "default",
                                "exported": "b"
                            }
                        ],
                        "subModules": {
                            "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js": {
                                "path": "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js",
                                "imports": {},
                                "exports": [
                                    {
                                        "type": "named",
                                        "exported": "cc",
                                        "local": "cc"
                                    }
                                ],
                                "subModules": {}
                            }
                        }
                    }
                }
            }
        }
    },
    "allModules": {
        "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js": {
            "path": "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js",
            "imports": {},
            "exports": [
                {
                    "type": "named",
                    "exported": "cc",
                    "local": "cc"
                }
            ],
            "subModules": {}
        },
        "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js": {
            "path": "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js",
            "imports": {
                "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js": [
                    {
                        "type": "deconstruct",
                        "imported": "cc",
                        "local": "renamedCc"
                    }
                ]
            },
            "exports": [
                {
                    "type": "default",
                    "exported": "b"
                }
            ],
            "subModules": {
                "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js": {
                    "path": "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js",
                    "imports": {},
                    "exports": [
                        {
                            "type": "named",
                            "exported": "cc",
                            "local": "cc"
                        }
                    ],
                    "subModules": {}
                }
            }
        },
        "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/a.js": {
            "path": "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/a.js",
            "imports": {
                "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js": [
                    {
                        "type": "default",
                        "local": "b"
                    }
                ]
            },
            "exports": [
                {
                    "type": "named",
                    "exported": "aa1",
                    "local": "aa1"
                },
                {
                    "type": "named",
                    "exported": "aa2",
                    "local": "aa2"
                }
            ],
            "subModules": {
                "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js": {
                    "path": "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js",
                    "imports": {
                        "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js": [
                            {
                                "type": "deconstruct",
                                "imported": "cc",
                                "local": "renamedCc"
                            }
                        ]
                    },
                    "exports": [
                        {
                            "type": "default",
                            "exported": "b"
                        }
                    ],
                    "subModules": {
                        "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js": {
                            "path": "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js",
                            "imports": {},
                            "exports": [
                                {
                                    "type": "named",
                                    "exported": "cc",
                                    "local": "cc"
                                }
                            ],
                            "subModules": {}
                        }
                    }
                }
            }
        },
        "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/index.js": {
            "path": "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/index.js",
            "imports": {
                "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/a.js": [
                    {
                        "type": "deconstruct",
                        "imported": "aa1",
                        "local": "aa1"
                    },
                    {
                        "type": "deconstruct",
                        "imported": "aa2",
                        "local": "aa2"
                    }
                ]
            },
            "exports": [],
            "subModules": {
                "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/a.js": {
                    "path": "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/a.js",
                    "imports": {
                        "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js": [
                            {
                                "type": "default",
                                "local": "b"
                            }
                        ]
                    },
                    "exports": [
                        {
                            "type": "named",
                            "exported": "aa1",
                            "local": "aa1"
                        },
                        {
                            "type": "named",
                            "exported": "aa2",
                            "local": "aa2"
                        }
                    ],
                    "subModules": {
                        "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js": {
                            "path": "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js",
                            "imports": {
                                "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js": [
                                    {
                                        "type": "deconstruct",
                                        "imported": "cc",
                                        "local": "renamedCc"
                                    }
                                ]
                            },
                            "exports": [
                                {
                                    "type": "default",
                                    "exported": "b"
                                }
                            ],
                            "subModules": {
                                "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js": {
                                    "path": "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js",
                                    "imports": {},
                                    "exports": [
                                        {
                                            "type": "named",
                                            "exported": "cc",
                                            "local": "cc"
                                        }
                                    ],
                                    "subModules": {}
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</code></pre>
<p>\u6709\u4E86\u4F9D\u8D56\u56FE\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u505A\u8FDB\u4E00\u6B65\u7684\u5904\u7406\uFF0C\u6BD4\u5982\uFF1A</p>
<ul>
<li>\u5408\u5E76\u4E00\u4E9B\u6A21\u5757\u6210 chunk graph</li>
<li>\u901A\u8FC7 export \u548C import \u7684\u5173\u7CFB\u7684\u5206\u6790\uFF0C\u5B9E\u73B0 treeshking</li>
</ul>
<h2 data-id="heading-3">\u603B\u7ED3</h2>
<p>\u6253\u5305\u5DE5\u5177 webpack \u5C31\u662F\u57FA\u4E8E AST \u6765\u505A\u7684\u4F9D\u8D56\u5206\u6790\uFF0C\u901A\u8FC7\u6784\u5EFA\u6A21\u5757\u4F9D\u8D56\u56FE\uFF0C\u4E4B\u540E\u8FDB\u4E00\u6B65\u7684\u5904\u7406\u3002\u8FD9\u8282\u6211\u4EEC\u57FA\u4E8E babel parser \u548C babel traverse \u505A\u4E86\u6A21\u5757\u7684\u904D\u5386\u548C\u4F9D\u8D56\u56FE\u7684\u751F\u6210\u3002</p>
<p>\u6BCF\u4E2A\u6A21\u5757\u7684\u5904\u7406\u90FD\u662F <strong>\u8BFB\u53D6\u5185\u5BB9\u3001parse\u3001\u904D\u5386 AST\u63D0\u53D6 import \u548C export \u4FE1\u606F\u3001\u9012\u5F52\u904D\u5386\u4F9D\u8D56</strong> \u7684\u8FC7\u7A0B\u3002</p>
<p>\u5176\u4E2D\u8981\u6CE8\u610F\u7684\u662Fparse \u7684\u63D2\u4EF6\u8981\u6839\u636E\u540E\u7F00\u540D\u6765\u51B3\u5B9A\uFF0C\u8DEF\u5F84\u8981\u505A\u4E0B\u8865\u5168\u3002</p>
<p>\u904D\u5386 AST \u662F\u8981\u786E\u5B9A\u4EC0\u4E48\u5C5E\u6027\uFF0C\u904D\u5386\u6A21\u5757\u5219\u662F\u8981\u89E3\u6790 require\uFF0C\u7136\u540E\u5904\u7406\u8DEF\u5F84\u3002</p>
<p>\u4F9D\u8D56\u56FE\u5206\u6790\u5B8C\u4E4B\u540E\u5C31\u53EF\u4EE5\u505A\u8FDB\u4E00\u6B65\u7684\u5904\u7406\uFF0C\u6BD4\u5982\u5408\u5E76 chunk\u3001treeshking \u7B49\uFF0C\u7136\u540E\u8F93\u51FA\u6210\u6587\u4EF6\uFF0C\u8FD9\u5C31\u662F\u6253\u5305\u5DE5\u5177\u3002</p>
<p>\uFF08\u4EE3\u7801\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FQuarkGluonPlasma%2Fbabel-plugin-exercize" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/QuarkGluonPlasma/babel-plugin-exercize" ref="nofollow noopener noreferrer">\u8FD9\u91CC</a>\uFF0C\u5EFA\u8BAE git clone \u4E0B\u6765\u901A\u8FC7 node \u8DD1\u4E00\u4E0B\uFF09</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
