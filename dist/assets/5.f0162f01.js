var s={name:"5\u3001\u5B9E\u6218\u6848\u4F8B\uFF1A\u63D2\u5165\u51FD\u6570\u8C03\u7528\u53C2\u6570",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>\u5B66\u4E60\u5B8C\u4E86 babel \u7684\u7F16\u8BD1\u6D41\u7A0B\u3001AST\u3001api \u4E4B\u540E\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u53EF\u4EE5\u505A\u4E00\u4E9B\u6709\u8DA3\u7684\u4E8B\u60C5\u4E86\u3002</p>
<h2 data-id="heading-0">\u9700\u6C42\u63CF\u8FF0</h2>
<p>\u6211\u4EEC\u5148\u505A\u4E00\u4E2A\u7B80\u5355\u7684\u529F\u80FD\u7EC3\u7EC3\u624B\uFF1A</p>
<blockquote>
<p>\u6211\u4EEC\u7ECF\u5E38\u4F1A\u6253\u5370\u4E00\u4E9B\u65E5\u5FD7\u6765\u8F85\u52A9\u8C03\u8BD5\uFF0C\u4F46\u662F\u6709\u7684\u65F6\u5019\u4F1A\u4E0D\u77E5\u9053\u65E5\u5FD7\u662F\u5728\u54EA\u4E2A\u5730\u65B9\u6253\u5370\u7684\u3002\u5E0C\u671B\u901A\u8FC7 babel \u80FD\u591F\u81EA\u52A8\u5728 console.log \u7B49 api \u4E2D\u63D2\u5165\u6587\u4EF6\u540D\u548C\u884C\u5217\u53F7\u7684\u53C2\u6570\uFF0C\u65B9\u4FBF\u5B9A\u4F4D\u5230\u4EE3\u7801\u3002</p>
</blockquote>
<h2 data-id="heading-1">\u5B9E\u73B0\u601D\u8DEF\u5206\u6790</h2>
<p>\u9700\u8981\u505A\u7684\u662F\u5728\u904D\u5386 AST \u7684\u65F6\u5019\u5BF9 console.log\u3001console.info \u7B49 api \u81EA\u52A8\u63D2\u5165\u4E00\u4E9B\u53C2\u6570\uFF0C\u4E5F\u5C31\u662F\u8981\u901A\u8FC7 visitor \u6307\u5B9A\u5BF9\u51FD\u6570\u8C03\u7528\u8868\u8FBE\u5F0F CallExpression\uFF08\u8FD9\u4E2A\u53EF\u4EE5\u901A\u8FC7 <a href="https://link.juejin.cn?target=https%3A%2F%2Fastexplorer.net%2F" target="_blank" rel="nofollow noopener noreferrer" title="https://astexplorer.net/" ref="nofollow noopener noreferrer">astexplorer.net</a> \u6765\u67E5\u770B\uFF09 \u505A\u4E00\u4E9B\u5904\u7406\u3002CallExrpession \u8282\u70B9\u6709\u4E24\u4E2A\u5C5E\u6027\uFF0Ccallee \u548C arguments\uFF0C\u5206\u522B\u5BF9\u5E94\u8C03\u7528\u7684\u51FD\u6570\u540D\u548C\u53C2\u6570\uFF0C \u6240\u4EE5\u6211\u4EEC\u8981\u5224\u65AD\u5F53 callee \u662F console.xx \u65F6\uFF0C\u5728 arguments \u7684\u6570\u7EC4\u4E2D\u4E2D\u63D2\u5165\u4E00\u4E2A AST \u8282\u70B9\u3002</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68a822a904b644e0903ab4e77bdc101d~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<h2 data-id="heading-2">\u4EE3\u7801\u5B9E\u73B0</h2>
<p>\u9996\u5148\u628A parse\u3001transform\u3001generate \u7684\u6846\u67B6\u642D\u597D\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> parser = <span class="hljs-built_in">require</span>(<span class="hljs-string">'@babel/parser'</span>);
<span class="hljs-keyword">const</span> traverse = <span class="hljs-built_in">require</span>(<span class="hljs-string">'@babel/traverse'</span>).default;
<span class="hljs-keyword">const</span> generate = <span class="hljs-built_in">require</span>(<span class="hljs-string">'@babel/generator'</span>).default;

<span class="hljs-keyword">const</span> sourceCode = <span class="hljs-string">\`console.log(1);\`</span>;

<span class="hljs-keyword">const</span> ast = parser.parse(sourceCode, {
  <span class="hljs-attr">sourceType</span>: <span class="hljs-string">'unambiguous'</span>
});

traverse(ast, {
    <span class="hljs-function"><span class="hljs-title">CallExpression</span>(<span class="hljs-params">path, state</span>)</span> {

    }
});

<span class="hljs-keyword">const</span> { code, map } = generate(ast);
<span class="hljs-built_in">console</span>.log(code);
</code></pre>
<p>\uFF08\u56E0\u4E3A <code>@babel/parser</code> \u7B49\u5305\u90FD\u662F\u901A\u8FC7 es module \u5BFC\u51FA\u7684\uFF0C\u6240\u4EE5\u901A\u8FC7 commonjs \u7684\u65B9\u5F0F\u5F15\u5165\u6709\u7684\u65F6\u5019\u8981\u53D6 default \u5C5E\u6027\u3002\uFF09</p>
<p>parser \u9700\u8981\u6307\u5B9A\u4EE3\u7801\u662F\u4E0D\u662F\u5305\u542B import\u3001export \u7B49\uFF0C\u9700\u8981\u8BBE\u7F6E moduleType \u4E3A module \u6216\u8005 script\uFF0C\u6211\u4EEC\u5E72\u8106\u8BBE\u7F6E\u4E3A unambiguous\uFF0C\u8BA9\u5B83\u6839\u636E\u5185\u5BB9\u662F\u5426\u5305\u542B import\u3001export \u6765\u81EA\u52A8\u8BBE\u7F6E moduleType\u3002</p>
<p>\u642D\u597D\u6846\u67B6\u4E4B\u540E\uFF0C\u6211\u4EEC\u5148\u8BBE\u8BA1\u4E00\u4E0B\u8981\u8F6C\u6362\u7684\u4EE3\u7801\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> sourceCode = <span class="hljs-string">\`
    console.log(1);

    function func() {
        console.info(2);
    }

    export default class Clazz {
        say() {
            console.debug(3);
        }
        render() {
            return &lt;div&gt;{console.error(4)}&lt;/div&gt;
        }
    }
\`</span>;
</code></pre>
<p>\u4EE3\u7801\u6CA1\u5565\u5177\u4F53\u542B\u4E49\uFF0C\u4E3B\u8981\u662F\u7528\u4E8E\u6D4B\u8BD5\u529F\u80FD\u3002</p>
<p>\u8FD9\u91CC\u7528\u5230\u4E86 jsx \u7684\u8BED\u6CD5\uFF0C\u6240\u4EE5 parser \u8981\u5F00\u542F jsx \u7684 plugin\u3002</p>
<p>\u6211\u4EEC\u6309\u7167\u524D\u9762\u5206\u6790\u7684\u601D\u8DEF\u6765\u5199\u4E00\u4E0B\u4EE3\u7801\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> ast = parser.parse(sourceCode, {
    <span class="hljs-attr">sourceType</span>: <span class="hljs-string">'unambiguous'</span>,
    <span class="hljs-attr">plugins</span>: [<span class="hljs-string">'jsx'</span>]
});

traverse(ast, {
    CallExpression (path, state) {
        <span class="hljs-keyword">if</span> ( types.isMemberExpression(path.node.callee) 
            &amp;&amp; path.node.callee.object.name === <span class="hljs-string">'console'</span> 
            &amp;&amp; [<span class="hljs-string">'log'</span>, <span class="hljs-string">'info'</span>, <span class="hljs-string">'error'</span>, <span class="hljs-string">'debug'</span>].includes(path.node.callee.property.name) 
           ) {
            <span class="hljs-keyword">const</span> { line, column } = path.node.loc.start;
            path.node.arguments.unshift(types.stringLiteral(<span class="hljs-string">\`filename: (<span class="hljs-subst">\${line}</span>, <span class="hljs-subst">\${column}</span>)\`</span>))
        }
    }
});

</code></pre>
<p>\u5F53\u662F console.xxx \u7684 AST \u65F6\uFF0C\u5728\u53C2\u6570\u4E2D\u63D2\u5165\u6587\u4EF6\u540D\u548C\u884C\u5217\u53F7\uFF0C\u884C\u5217\u53F7\u4ECE AST \u7684\u516C\u5171\u5C5E\u6027 loc \u4E0A\u53D6\u3002</p>
<p>\u8F93\u51FA\u7684\u4EE3\u7801\u7B26\u5408\u9884\u671F\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-built_in">console</span>.log(<span class="hljs-string">"filename: (2, 4)"</span>, <span class="hljs-number">1</span>);

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">func</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-built_in">console</span>.info(<span class="hljs-string">"filename: (5, 8)"</span>, <span class="hljs-number">2</span>);
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Clazz</span> </span>{
  <span class="hljs-function"><span class="hljs-title">say</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">console</span>.debug(<span class="hljs-string">"filename: (10, 12)"</span>, <span class="hljs-number">3</span>);
  }

  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{console.error("filename: (13, 25)", 4)}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>;
  }

}
</code></pre>
<p>\u73B0\u5728\u5224\u65AD\u6761\u4EF6\u6BD4\u8F83\u590D\u6742\uFF0C\u8981\u5148\u5224\u65AD path.node.callee \u7684\u7C7B\u578B\uFF0C\u7136\u540E\u4E00\u5C42\u5C42\u53D6\u5C5E\u6027\u6765\u5224\u65AD\uFF0C\u5176\u5B9E\u6211\u4EEC\u53EF\u4EE5\u7528 generator \u6A21\u5757\u6765\u7B80\u5316.</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> targetCalleeName = [<span class="hljs-string">'log'</span>, <span class="hljs-string">'info'</span>, <span class="hljs-string">'error'</span>, <span class="hljs-string">'debug'</span>].map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> <span class="hljs-string">\`console.<span class="hljs-subst">\${item}</span>\`</span>);
traverse(ast, {
    <span class="hljs-function"><span class="hljs-title">CallExpression</span>(<span class="hljs-params">path, state</span>)</span> {
        <span class="hljs-keyword">const</span> calleeName = generate(path.node.callee).code;
         <span class="hljs-keyword">if</span> (targetCalleeName.includes(calleeName)) {
            <span class="hljs-keyword">const</span> { line, column } = path.node.loc.start;
            path.node.arguments.unshift(types.stringLiteral(<span class="hljs-string">\`filename: (<span class="hljs-subst">\${line}</span>, <span class="hljs-subst">\${column}</span>)\`</span>))
        }
    }
});
</code></pre>
<p>\u4EE3\u7801\u77AC\u95F4\u7CBE\u7B80\u4E86\u5F88\u591A\uFF0C\u8FD8\u53EF\u4EE5\u8C03\u7528 path.get('callee').toString()\uFF0C\u4E00\u6837\u7684\u6548\u679C\u3002</p>
<h2 data-id="heading-3">\u9700\u6C42\u53D8\u66F4</h2>
<blockquote>
<p>\u540E\u6765\u6211\u4EEC\u89C9\u5F97\u5728\u540C\u4E00\u884C\u6253\u5370\u4F1A\u5F71\u54CD\u539F\u672C\u7684\u53C2\u6570\u7684\u5C55\u793A\uFF0C\u6240\u4EE5\u60F3\u6539\u4E3A\u5728 console.xx \u8282\u70B9\u4E4B\u524D\u6253\u5370\u7684\u65B9\u5F0F</p>
</blockquote>
<h2 data-id="heading-4">\u601D\u8DEF\u5206\u6790</h2>
<p>\u8FD9\u4E2A\u9700\u6C42\u7684\u6539\u52A8\u53EA\u662F\u4ECE\u53C2\u6570\u4E2D\u63D2\u5165\u53D8\u6210\u4E86\u5728\u5F53\u524D console.xx \u7684AST\u4E4B\u524D\u63D2\u5165\u4E00\u4E2A console.log \u7684 AST\uFF0C\u6574\u4F53\u6D41\u7A0B\u8FD8\u662F\u4E00\u6837\u3002\u521B\u5EFA\u8FD9\u79CD\u8F83\u590D\u6742\u7684 AST\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>@babel/template</code>\u5305\u3002</p>
<p>\u8FD9\u91CC\u6709\u4E24\u4E2A\u6CE8\u610F\u7684\u70B9\uFF1A</p>
<ol>
<li>JSX \u4E2D\u7684 console \u4EE3\u7801\u4E0D\u80FD\u7B80\u5355\u7684\u5728\u524D\u9762\u63D2\u5165\u4E00\u4E2A\u8282\u70B9\uFF0C\u800C\u8981\u628A\u6574\u4F53\u66FF\u6362\u6210\u4E00\u4E2A\u6570\u7EC4\u8868\u8FBE\u5F0F\uFF0C\u56E0\u4E3A JSX \u4E2D\u53EA\u652F\u6301\u5199\u5355\u4E2A\u8868\u8FBE\u5F0F\u3002</li>
</ol>
<p>\u4E5F\u5C31\u662F</p>
<pre><code class="hljs language-javascript" lang="javascript">&lt;div&gt;{<span class="hljs-built_in">console</span>.log(<span class="hljs-number">111</span>)}&lt;/div&gt;
</code></pre>
<p>\u8981\u66FF\u6362\u6210\u6570\u7EC4\u7684\u5F62\u5F0F</p>
<pre><code class="hljs language-javascript" lang="javascript">&lt;div&gt;{[<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'filename.js(11,22)'</span>), <span class="hljs-built_in">console</span>.log(<span class="hljs-number">111</span>)]}&lt;/div&gt;
</code></pre>
<ol start="2">
<li>\u7528\u65B0\u7684\u8282\u70B9\u66FF\u6362\u4E86\u65E7\u7684\u8282\u70B9\u4E4B\u540E\uFF0Cbabel traverse \u4F1A\u7EE7\u7EED\u904D\u5386\u65B0\u8282\u70B9\uFF0C\u8FD9\u662F\u6CA1\u5FC5\u8981\u7684\uFF0C\u6240\u4EE5\u8981\u8DF3\u8FC7\u65B0\u751F\u6210\u7684\u8282\u70B9\u7684\u5904\u7406\u3002</li>
</ol>
<h2 data-id="heading-5">\u4EE3\u7801\u5B9E\u73B0</h2>
<p>\u63D2\u5165 AST \u53EF\u4EE5\u4F7F\u7528 path.insertBefore \u7684 api\uFF0C \u800C\u66FF\u6362\u6574\u4F53\u8282\u70B9\u7528 path.replaceWith\uFF0C \u5224\u65AD\u662F insertBefore \u8FD8\u662F replaceWith \u8981\u770B\u5F53\u524D\u8282\u70B9\u662F\u5426\u5728 JSXElement \u4E4B\u4E0B\uFF0C\u6240\u4EE5\u8981\u7528path.findParent \u65B9\u6CD5\u987A\u7740 path \u67E5\u627E\u662F\u5426\u6709 JSXElement \u8282\u70B9\u3002replace \u7684\u65B0\u8282\u70B9\u8981\u8C03\u7528 path.skip \u8DF3\u8FC7\u540E\u7EED\u904D\u5386\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">if</span> (path.findParent(<span class="hljs-function"><span class="hljs-params">path</span> =&gt;</span> path.isJSXElement())) {
    path.replaceWith(types.arrayExpression([newNode, path.node]))
    path.skip();<span class="hljs-comment">// \u8DF3\u8FC7\u5B50\u8282\u70B9\u5904\u7406</span>
} <span class="hljs-keyword">else</span> {
    path.insertBefore(newNode);
}
</code></pre>
<p>\u8981\u8DF3\u8FC7\u65B0\u7684\u8282\u70B9\u7684\u5904\u7406\uFF0C\u5C31\u9700\u8981\u5728\u8282\u70B9\u4E0A\u52A0\u4E00\u4E2A\u6807\u8BB0\uFF0C\u5982\u679C\u6709\u8FD9\u4E2A\u6807\u8BB0\u7684\u5C31\u8DF3\u8FC7\u3002</p>
<p>\u6574\u4F53\u4EE3\u7801\u5982\u4E0B</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> targetCalleeName = [<span class="hljs-string">'log'</span>, <span class="hljs-string">'info'</span>, <span class="hljs-string">'error'</span>, <span class="hljs-string">'debug'</span>].map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> <span class="hljs-string">\`console.<span class="hljs-subst">\${item}</span>\`</span>);
traverse(ast, {
    <span class="hljs-function"><span class="hljs-title">CallExpression</span>(<span class="hljs-params">path, state</span>)</span> {
        <span class="hljs-keyword">if</span> (path.node.isNew) {
            <span class="hljs-keyword">return</span>;
        }
        <span class="hljs-keyword">const</span> calleeName = generate(path.node.callee).code;
         <span class="hljs-keyword">if</span> (targetCalleeName.includes(calleeName)) {
            <span class="hljs-keyword">const</span> { line, column } = path.node.loc.start;
            <span class="hljs-keyword">const</span> newNode = template.expression(<span class="hljs-string">\`console.log("filename: (<span class="hljs-subst">\${line}</span>, <span class="hljs-subst">\${column}</span>)")\`</span>)();
            newNode.isNew = <span class="hljs-literal">true</span>;

            <span class="hljs-keyword">if</span> (path.findParent(<span class="hljs-function"><span class="hljs-params">path</span> =&gt;</span> path.isJSXElement())) {
                path.replaceWith(types.arrayExpression([newNode, path.node]))
                path.skip();
            } <span class="hljs-keyword">else</span> {
                path.insertBefore(newNode);
            }
        }
    }
});
</code></pre>
<h2 data-id="heading-6">\u6539\u9020\u6210babel\u63D2\u4EF6</h2>
<p>\u4E0A\u9762\u5B8C\u6210\u7684\u529F\u80FD\u60F3\u8981\u590D\u7528\u5C31\u5F97\u5C01\u88C5\u6210\u63D2\u4EF6\u7684\u5F62\u5F0F\uFF0Cbabel \u652F\u6301 transform \u63D2\u4EF6\uFF0C\u5F62\u5F0F\u662F\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u6709 visitor \u5C5E\u6027\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-built_in">module</span>.exports = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">api, options</span>) </span>{
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">visitor</span>: {
      <span class="hljs-function"><span class="hljs-title">Identifier</span>(<span class="hljs-params">path, state</span>)</span> {},
    },
  };
}
</code></pre>
<p>\u7B2C\u4E00\u4E2A\u53C2\u6570\u53EF\u4EE5\u62FF\u5230 types\u3001template \u7B49\u5E38\u7528\u5305\u7684 api\uFF0C\u4E0D\u9700\u8981\u5355\u72EC\u5F15\u5165\u8FD9\u4E9B\u5305\u3002</p>
<p>\u4F5C\u4E3A\u63D2\u4EF6\u7528\u7684\u65F6\u5019\uFF0C\u5E76\u4E0D\u9700\u8981\u81EA\u5DF1\u8C03\u7528 parse\u3001traverse\u3001generate\uFF0C\u53EA\u9700\u8981\u63D0\u4F9B\u4E00\u4E2A visitor \u51FD\u6570\uFF0C\u5728\u8FD9\u4E2A\u51FD\u6570\u5185\u5B8C\u6210\u8F6C\u6362\u529F\u80FD\u3002</p>
<p>state \u4E2D\u53EF\u4EE5\u62FF\u5230\u7528\u6237\u914D\u7F6E\u4FE1\u606F options \u548C file \u4FE1\u606F\uFF0Cfilename \u5C31\u53EF\u4EE5\u901A\u8FC7 state.filename \u6765\u53D6\u3002</p>
<p>\u4E0A\u9762\u7684\u4EE3\u7801\u5F88\u5BB9\u6613\u53EF\u4EE5\u6539\u9020\u6210\u63D2\u4EF6\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> targetCalleeName = [<span class="hljs-string">'log'</span>, <span class="hljs-string">'info'</span>, <span class="hljs-string">'error'</span>, <span class="hljs-string">'debug'</span>].map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> <span class="hljs-string">\`console.<span class="hljs-subst">\${item}</span>\`</span>);
<span class="hljs-built_in">module</span>.exports = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">{types, template}</span>) </span>{
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">visitor</span>: {
            <span class="hljs-function"><span class="hljs-title">CallExpression</span>(<span class="hljs-params">path, state</span>)</span> {
                <span class="hljs-keyword">if</span> (path.node.isNew) {
                    <span class="hljs-keyword">return</span>;
                }
                <span class="hljs-keyword">const</span> calleeName = generate(path.node.callee).code;
                 <span class="hljs-keyword">if</span> (targetCalleeName.includes(calleeName)) {
                    <span class="hljs-keyword">const</span> { line, column } = path.node.loc.start;
                    <span class="hljs-keyword">const</span> newNode = template.expression(<span class="hljs-string">\`console.log("<span class="hljs-subst">\${state.filename || <span class="hljs-string">'unkown filename'</span>}</span>: (<span class="hljs-subst">\${line}</span>, <span class="hljs-subst">\${column}</span>)")\`</span>)();
                    newNode.isNew = <span class="hljs-literal">true</span>;

                    <span class="hljs-keyword">if</span> (path.findParent(<span class="hljs-function"><span class="hljs-params">path</span> =&gt;</span> path.isJSXElement())) {
                        path.replaceWith(types.arrayExpression([newNode, path.node]))
                        path.skip();
                    } <span class="hljs-keyword">else</span> {
                        path.insertBefore(newNode);
                    }
                }
            }
        }
    }
}
</code></pre>
<p>\u7136\u540E\u901A\u8FC7 <code>@babel/core</code> \u7684 transformSync \u65B9\u6CD5\u6765\u8C03\u7528</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> { transformFileSync } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'@babel/core'</span>);
<span class="hljs-keyword">const</span> insertParametersPlugin = <span class="hljs-built_in">require</span>(<span class="hljs-string">'./plugin/parameters-insert-plugin'</span>);
<span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">'path'</span>);

<span class="hljs-keyword">const</span> { code } = transformFileSync(path.join(__dirname, <span class="hljs-string">'./sourceCode.js'</span>), {
    <span class="hljs-attr">plugins</span>: [insertParametersPlugin],
    <span class="hljs-attr">parserOpts</span>: {
        <span class="hljs-attr">sourceType</span>: <span class="hljs-string">'unambiguous'</span>,
        <span class="hljs-attr">plugins</span>: [<span class="hljs-string">'jsx'</span>]       
    }
});

<span class="hljs-built_in">console</span>.log(code);
</code></pre>
<p>\u8FD9\u6837\u6211\u4EEC\u6210\u529F\u5C31\u628A\u524D\u9762\u8C03\u7528 parse\u3001traverse\u3001generate \u7684\u4EE3\u7801\u6539\u9020\u6210\u4E86 babel \u63D2\u4EF6\u7684\u5F62\u5F0F\uFF0C\u53EA\u9700\u8981\u63D0\u4F9B\u4E00\u4E2A\u8F6C\u6362\u51FD\u6570\uFF0Ctraverse \u7684\u8FC7\u7A0B\u4E2D\u4F1A\u81EA\u52A8\u8C03\u7528\u3002</p>
<p>\u4EE3\u7801\u653E\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FQuarkGluonPlasma%2Fbabel-plugin-exercize" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/QuarkGluonPlasma/babel-plugin-exercize" ref="nofollow noopener noreferrer">github</a> \u4E0A\uFF0C\u53EF\u4EE5\u62C9\u4E0B\u6765\u8DD1\u4E00\u4E0B\u3002</p>
<h2 data-id="heading-7">\u603B\u7ED3</h2>
<p>\u8FD9\u4E00\u8282\u6211\u4EEC\u901A\u8FC7\u4E00\u4E2A\u5728 console.xxx \u4E2D\u63D2\u5165\u53C2\u6570\u7684\u5B9E\u6218\u6848\u4F8B\u7EC3\u4E60\u4E86\u4E0B babel \u7684 api\u3002</p>
<p>\u9996\u5148\u901A\u8FC7 <code>@babel/parser</code>\u3001<code>@babel/traverse</code>\u3001<code>@babel/generator</code> \u6765\u7EC4\u7EC7\u7F16\u8BD1\u6D41\u7A0B\uFF0C\u901A\u8FC7<code>@babel/types</code> \u521B\u5EFAAST\uFF0C\u901A\u8FC7 path \u7684\u5404\u79CD api \u5BF9 AST \u8FDB\u884C\u64CD\u4F5C\u3002</p>
<p>\u540E\u6765\u9700\u6C42\u6539\u4E3A\u5728\u524D\u9762\u63D2\u5165 console.xxx \u7684\u65B9\u5F0F\uFF0C\u6211\u4EEC\u5F15\u5165\u4E86 <code>@babel/template</code> \u5305\uFF0C\u901A\u8FC7 path.replaceWith \u548C path.insertBefore \u6765\u64CD\u4F5C AST\uFF0C\u9700\u8981\u901A\u8FC7 path.findParent \u6765\u5224\u65AD AST \u7684\u7236\u5143\u7D20\u662F\u5426\u5305\u542B JSXElement \u7C7B\u578B\u7684 AST\u3002\u5B50\u8282\u70B9\u7684 AST \u8981\u7528 path.skip \u8DF3\u8FC7\u904D\u5386\uFF0C\u800C\u4E14\u8981\u5BF9\u65B0\u7684 AST \u505A\u6807\u8BB0\uFF0C\u8DF3\u8FC7\u5BF9\u65B0\u751F\u6210\u7684\u8282\u70B9\u7684\u5904\u7406\u3002</p>
<p>\u4E4B\u540E\u6211\u4EEC\u628A\u5B83\u6539\u9020\u6210\u4E86 babel \u63D2\u4EF6\uFF0C\u662F\u4E00\u4E2A\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u7684\u683C\u5F0F\uFF0C\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u53EF\u4EE5\u62FF\u5230\u5404\u79CD babel \u5E38\u7528\u5305\u7684 api\uFF0C\u6BD4\u5982 types\u3001template\u3002 \u63D2\u4EF6\u4E0D\u9700\u8981\u8C03\u7528 parse\u3001traverse\u3001generate \u7B49 api\uFF0C\u53EA\u9700\u8981\u63D0\u4F9B visitor \u51FD\u6570\u3002\u6700\u540E\u6211\u4EEC\u901A\u8FC7 @babel/core \u7684 api \u4F7F\u7528\u4E86\u4E0B\u8FD9\u4E2A\u63D2\u4EF6\u3002</p>
<p>\u5B66\u5B8C\u8FD9\u4E00\u8282\uFF0C\u6211\u4EEC\u5BF9\u524D 3 \u8282\u5B66\u4E60\u7684\u7F16\u8BD1\u6D41\u7A0B\u3001AST\u3001api \u90FD\u505A\u4E86\u4E00\u4E9B\u5B9E\u8DF5\uFF0C\u6709\u4E86\u66F4\u5177\u4F53\u7684\u7406\u89E3\u3002</p>
<p>\uFF08\u4EE3\u7801\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FQuarkGluonPlasma%2Fbabel-plugin-exercize" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/QuarkGluonPlasma/babel-plugin-exercize" ref="nofollow noopener noreferrer">\u8FD9\u91CC</a>\uFF0C\u5EFA\u8BAE git clone \u4E0B\u6765\u901A\u8FC7 node \u8DD1\u4E00\u4E0B\uFF09</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
