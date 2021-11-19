var s={name:"21\u3001\u5B9E\u6218\u6848\u4F8B_ js \u89E3\u91CA\u5668",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>\u4EE3\u7801 parse \u6210 AST \u4E4B\u540E\uFF0C\u53EF\u4EE5\u5BF9 AST \u8FDB\u884C transform\uFF0C\u7136\u540E generate \u6210\u76EE\u6807\u4EE3\u7801\uFF0C\u8FD9\u662F\u8F6C\u8BD1\u5668\uFF08transpiler\uFF09\u7684\u6D41\u7A0B\uFF0C\u4E5F\u53EF\u4EE5\u5BF9 AST \u8FDB\u884C\u89E3\u91CA\u6267\u884C\uFF0C\u8FD9\u662F\u89E3\u91CA\u5668\uFF08interpreter\uFF09\u7684\u6D41\u7A0B\u3002\u8FD9\u4E00\u8282\uFF0C\u6211\u4EEC\u6765\u57FA\u4E8E babel parser \u6765\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 js \u89E3\u91CA\u5668\u3002</p>
<h2 data-id="heading-0">v8 \u7684\u7F16\u8BD1\u6D41\u6C34\u7EBF</h2>
<p>v8 \u5305\u62EC 4 \u90E8\u5206\uFF0Cparser\u3001ignation \u89E3\u91CA\u5668\uFF0CJIT \u7F16\u8BD1\u5668\uFF0C\u8FD8\u6709 garbage collector\uFF08\u5783\u573E\u56DE\u6536\u5668\uFF09\u3002</p>
<ul>
<li>parser \u8D1F\u8D23\u628A\u6E90\u7801 parse \u6210 AST\u3002</li>
<li>ignation \u89E3\u91CA\u5668\u8D1F\u8D23\u628A AST \u8F6C\u6210\u5B57\u8282\u7801\uFF0C\u7136\u540E\u89E3\u91CA\u6267\u884C</li>
<li>turbofan \u53EF\u4EE5\u628A\u4EE3\u7801\u7F16\u8BD1\u6210\u673A\u5668\u7801\uFF0C\u76F4\u63A5\u6267\u884C</li>
<li>gc \u8D1F\u8D23\u5806\u5185\u5B58\u7684\u5783\u573E\u56DE\u6536</li>
</ul>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a87438b18ad24893be5cd16ecc87d49d~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png" loading="lazy" class="medium-zoom-image"></p>
<p>\u5176\u5B9E\u6700\u65E9\u671F\u7684 v8 \u662F\u6CA1\u6709\u5B57\u8282\u7801\u7684\uFF0C\u5C31\u662F\u76F4\u63A5\u89E3\u91CA\u6267\u884C AST:</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e54a738f8f3422bbccece5b00903de7~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png" loading="lazy" class="medium-zoom-image"></p>
<p>\u8FD9\u79CD\u76F4\u63A5\u89E3\u91CA\u6267\u884C AST \u7684\u89E3\u91CA\u5668\u53EB\u505A tree walker \u89E3\u91CA\u5668\uFF0C\u8FD9\u4E00\u8282\uFF0C\u6211\u4EEC\u6765\u5B9E\u73B0\u4E00\u4E0B\u8FD9\u79CD js \u89E3\u91CA\u5668\u3002</p>
<h2 data-id="heading-1">\u5B9E\u73B0 JS \u89E3\u91CA\u5668</h2>
<h3 data-id="heading-2">\u601D\u8DEF\u5206\u6790</h3>
<p>\u5F53 parser \u628A \u6E90\u7801 parse \u6210 AST \u4E4B\u540E\uFF0C\u5176\u5B9E\u5DF2\u7ECF\u80FD\u591F\u62FF\u5230\u6E90\u7801\u7684\u5404\u90E8\u5206\u4FE1\u606F\u4E86\uFF0C\u6BD4\u5982</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> a = <span class="hljs-number">1</span> + <span class="hljs-number">2</span>;
</code></pre>
<p>\u5BF9\u5E94\u7684 AST \u662F\u8FD9\u6837\u7684</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/559c01b57e7e4364a7be2fba637092ac~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png" loading="lazy" class="medium-zoom-image"></p>
<p>\u5F53\u6211\u4EEC\u5904\u7406\u5230 BinarayExpression \u8282\u70B9\uFF0Coperator \u662F +\uFF0C\u4F1A\u505A\u52A0\u6CD5\u8FD0\u7B97\uFF0C\u53D6\u5DE6\u53F3\u4E24\u8FB9\u7684\u503C\u76F8\u52A0\u3002</p>
<p>\u5F53\u6211\u4EEC\u5904\u7406\u5230 NumercLiteral \u8282\u70B9\uFF0C\u662F\u6570\u5B57\u5B57\u9762\u91CF\uFF0C\u76F4\u63A5\u8FD4\u56DE\u5B83\u7684\u503C\uFF08value\uFF09\u3002</p>
<p>\u5F53\u6211\u4EEC\u5904\u7406\u5230 Identifier \u8282\u70B9\uFF0C\u662F\u6807\u8BC6\u7B26\uFF0C\u76F4\u63A5\u8FD4\u56DE\u540D\u5B57\uFF08name\uFF09\u3002</p>
<p>\u5F53\u6211\u4EEC\u5904\u7406\u5230 VariableDeclarator\uFF0C\u6211\u4EEC\u5C31\u77E5\u9053\u662F\u4E00\u4E2A\u53D8\u91CF\u58F0\u660E\u8BED\u53E5\uFF0C\u8981\u5728\u4F5C\u7528\u57DF \uFF08scope\uFF09\u4E2D\u653E\u4E00\u4E2A\u5C5E\u6027\uFF0C\u5C5E\u6027\u540D\u4E3A id \u7684\u503C\uFF0C \u5C5E\u6027\u503C\u4E3A init \u7684\u503C\u3002\u800C id \u548C init \u53EF\u4EE5\u6C42\u51FA\u6765\u3002</p>
<p>\u5C31\u8FD9\u6837\uFF0C\u6211\u4EEC\u5C31\u5B8C\u6210\u4E86\u8FD9\u6BB5\u4EE3\u7801\u7684\u89E3\u91CA\u6267\u884C\u3002</p>
<h4 data-id="heading-3">\u4EE3\u7801\u5B9E\u73B0</h4>
<p>\u5148\u642D\u4E00\u4E2A\u57FA\u672C\u7684\u7ED3\u6784\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span>  parser = <span class="hljs-built_in">require</span>(<span class="hljs-string">'@babel/parser'</span>);
<span class="hljs-keyword">const</span> { codeFrameColumns } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'@babel/code-frame'</span>);

<span class="hljs-keyword">const</span> sourceCode = <span class="hljs-string">\`
   const a = 1 + 2;
\`</span>;

<span class="hljs-keyword">const</span> ast = parser.parse(sourceCode, {
    <span class="hljs-attr">sourceType</span>: <span class="hljs-string">'unambiguous'</span>
});

<span class="hljs-keyword">const</span> evaluator = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{

    <span class="hljs-keyword">const</span> astInterpreters = {
        Program (node, scope) {
            node.body.forEach(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
                evaluate(item, scope);
            })
        }
    }

    <span class="hljs-keyword">const</span> evaluate = <span class="hljs-function">(<span class="hljs-params">node, scope</span>) =&gt;</span> {
        <span class="hljs-keyword">try</span> {
            <span class="hljs-keyword">return</span> astInterpreters[node.type](node, scope);
        } <span class="hljs-keyword">catch</span>(e) {
            <span class="hljs-keyword">if</span> (e &amp;&amp; e.message &amp;&amp; e.message.indexOf(<span class="hljs-string">'astInterpreters[node.type] is not a function'</span>) != -<span class="hljs-number">1</span>) {
                <span class="hljs-built_in">console</span>.error(<span class="hljs-string">'unsupported ast type: '</span> + node.type);
                <span class="hljs-built_in">console</span>.error(codeFrameColumns(sourceCode, node.loc, {
                    <span class="hljs-attr">highlightCode</span>: <span class="hljs-literal">true</span>
                }));
            } <span class="hljs-keyword">else</span> {
                <span class="hljs-built_in">console</span>.error(e.message);
                <span class="hljs-built_in">console</span>.error(codeFrameColumns(sourceCode, node.loc, {
                    <span class="hljs-attr">highlightCode</span>: <span class="hljs-literal">true</span>
                }));                
            }
        }
    }
    <span class="hljs-keyword">return</span> {
        evaluate
    }
})();

<span class="hljs-keyword">const</span> globalScope = {};
evaluator.evaluate(ast.program, globalScope);
</code></pre>
<p>\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A evaluator\uFF0C\u8FD9\u4E2A\u5C31\u662F AST \u89E3\u91CA\u5668\u3002\u4ECE\u6839\u8282\u70B9\u6765\u6267\u884C\uFF0C\u6700\u5916\u5C42\u662F File \u8282\u70B9\uFF0C\u53D6 program \u5C5E\u6027\uFF0CProgram \u6709 body \u5C5E\u6027\uFF0C\u662F AST \u7684\u6570\u7EC4\uFF0C\u904D\u5386\u6267\u884C\u3002\u5982\u679C\u6709\u4E0D\u652F\u6301\u7684\u8282\u70B9\u7C7B\u578B\uFF0C\u901A\u8FC7 code frame \u6765\u6253\u5370 AST \u5BF9\u5E94\u7684\u4EE3\u7801\uFF0C\u5E76\u4E14\u63D0\u793A\u4E0D\u652F\u6301\u3002</p>
<p>\u521B\u5EFA\u4E00\u4E2A\u5168\u5C40\u4F5C\u7528\u57DF\u4F20\u5165\u6BCF\u4E2A evaluate \u65B9\u6CD5\uFF0C\u7528\u4E8E\u4F5C\u7528\u57DF\u4E2D\u53D8\u91CF\u7684\u58F0\u660E\u548C\u53D6\u503C\u3002</p>
<p>\u7136\u540E\u6211\u4EEC\u6765\u5B9E\u73B0\u4E00\u4E0B VariableDeclarator \u8282\u70B9\u7684\u89E3\u91CA\uFF0C\u5728 astInterpreters \u6DFB\u52A0\u4E00\u4E0B\u8282\u70B9\u7684\u652F\u6301\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-title">VariableDeclaration</span>(<span class="hljs-params">node, scope</span>)</span> {
    node.declarations.forEach(<span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {
        evaluate(item, scope);
    });
},
<span class="hljs-function"><span class="hljs-title">VariableDeclarator</span>(<span class="hljs-params">node, scope</span>)</span> {
    <span class="hljs-keyword">const</span> declareName = evaluate(node.id);
    <span class="hljs-keyword">if</span> (scope[declareName]) {
        <span class="hljs-keyword">throw</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">'duplicate declare variable\uFF1A'</span> + declareName);
    } <span class="hljs-keyword">else</span> {
        scope[declareName] = evaluate(node.init, scope);
    }
},
<span class="hljs-function"><span class="hljs-title">ExpressionStatement</span>(<span class="hljs-params">node, scope</span>)</span> {
    <span class="hljs-keyword">return</span> evaluate(node.expression, scope);
},
<span class="hljs-function"><span class="hljs-title">BinaryExpression</span>(<span class="hljs-params">node, scope</span>)</span> {
    <span class="hljs-keyword">const</span> leftValue = evaluate(node.left, scope);
    <span class="hljs-keyword">const</span> rightValue = evaluate(node.right, scope);;
    <span class="hljs-keyword">switch</span>(node.operator) {
        <span class="hljs-keyword">case</span> <span class="hljs-string">'+'</span>:
            <span class="hljs-keyword">return</span> leftValue + rightValue;
        <span class="hljs-keyword">case</span> <span class="hljs-string">'-'</span>:
            <span class="hljs-keyword">return</span> leftValue - rightValue;
        <span class="hljs-keyword">case</span> <span class="hljs-string">'*'</span>:
            <span class="hljs-keyword">return</span> leftValue * rightValue;
        <span class="hljs-keyword">case</span> <span class="hljs-string">'/'</span>:
            <span class="hljs-keyword">return</span> leftValue / rightValue;
        <span class="hljs-keyword">default</span>: 
            <span class="hljs-keyword">throw</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">'upsupported operator\uFF1A'</span> + node.operator);
    }
},
<span class="hljs-function"><span class="hljs-title">Identifier</span>(<span class="hljs-params">node, scope</span>)</span> {
    <span class="hljs-keyword">return</span> node.name;
},
<span class="hljs-function"><span class="hljs-title">NumericLiteral</span>(<span class="hljs-params">node, scope</span>)</span> {
    <span class="hljs-keyword">return</span> node.value;
}
</code></pre>
<p>\u56E0\u4E3A\u58F0\u660E\u8BED\u53E5\u53EF\u80FD\u6709 <code>const a = 1, b=2;</code> \u7684\u4E00\u6761\u8BED\u53E5\u591A\u4E2A\u58F0\u660E\u7684\u60C5\u51B5\u5728\uFF0C\u6240\u4EE5\u8FD9\u91CC\u662F VariableDeclaration \u5305\u542B\u591A\u4E2A VariableDeclarator \u7684\u7ED3\u6784\u3002\u6BCF\u4E00\u4E2A\u58F0\u660E\u8981\u68C0\u67E5\u4E0B\u4F5C\u7528\u57DF\u4E2D\u6709\u6CA1\u6709\uFF0C\u5982\u679C\u6709\u7684\u8BDD\u5C31\u62A5\u9519\uFF0C\u6CA1\u6709\u7684\u8BDD\u624D\u53EF\u4EE5\u58F0\u660E\u3002\uFF08\u8FD9\u91CC\u662F\u6309\u7167\u4E25\u683C\u6A21\u5F0F\u7684\u89C4\u5B9A\u6765\u89E3\u91CA\u7684\uFF09</p>
<p>BinaryExpression \u6839\u636E operator \u7684\u4E0D\u540C\u505A\u4E0D\u540C\u7684\u6C42\u503C\uFF0C\u53EA\u652F\u6301\u4E86 +\u3001-\u3001*\u3001/ \u56DB\u79CD\u8FD0\u7B97\u3002</p>
<p>\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u6211\u4EEC\u6253\u5370\u4E00\u4E0B globalScope \u770B\u4E0B\u6548\u679C\u3002</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35841bd724ef42c8b67aae4ef3caadb8~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png" loading="lazy" class="medium-zoom-image"></p>
<p>\u53D1\u73B0 globalScope \u4E2D\u5DF2\u7ECF\u58F0\u660E\u4E86\u4E00\u4E2A\u53D8\u91CF a\uFF0C\u503C\u4E3A 3\u3002</p>
<p>\u4F46\u6211\u4EEC\u80AF\u5B9A\u4E0D\u80FD\u8FD9\u6837\u6765\u67E5\u770B\u7ED3\u679C\uFF0C\u9700\u8981\u652F\u6301 console.log \u7684\u5168\u5C40 api \u548C\u51FD\u6570\u8C03\u7528\u903B\u8F91\u3002</p>
<p>\u8FD9\u4E2A\u9636\u6BB5\u7684\u5168\u90E8\u4EE3\u7801\uFF08\u4E5F\u53EF\u4EE5\u4ECE <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FQuarkGluonPlasma%2Fbabel-plugin-exercize" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/QuarkGluonPlasma/babel-plugin-exercize" ref="nofollow noopener noreferrer">github \u4E0A</a>\u4E0B\u8F7D\u4E0B\u6765\u770B\uFF09\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span>  parser = <span class="hljs-built_in">require</span>(<span class="hljs-string">'@babel/parser'</span>);
<span class="hljs-keyword">const</span> { codeFrameColumns } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'@babel/code-frame'</span>);

<span class="hljs-keyword">const</span> sourceCode = <span class="hljs-string">\`
   const a = 1 + 2;
\`</span>;

<span class="hljs-keyword">const</span> ast = parser.parse(sourceCode, {
    <span class="hljs-attr">sourceType</span>: <span class="hljs-string">'unambiguous'</span>
});

<span class="hljs-keyword">const</span> evaluator = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{

    <span class="hljs-keyword">const</span> astInterpreters = {
        Program (node, scope) {
            node.body.forEach(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
                evaluate(item, scope);
            })
        },
        <span class="hljs-function"><span class="hljs-title">VariableDeclaration</span>(<span class="hljs-params">node, scope</span>)</span> {
            node.declarations.forEach(<span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {
                evaluate(item, scope);
            });
        },
        <span class="hljs-function"><span class="hljs-title">VariableDeclarator</span>(<span class="hljs-params">node, scope</span>)</span> {
            <span class="hljs-keyword">const</span> declareName = evaluate(node.id);
            <span class="hljs-keyword">if</span> (scope[declareName]) {
                <span class="hljs-keyword">throw</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">'duplicate declare variable\uFF1A'</span> + declareName);
            } <span class="hljs-keyword">else</span> {
                scope[declareName] = evaluate(node.init, scope);
            }
        },
        <span class="hljs-function"><span class="hljs-title">ExpressionStatement</span>(<span class="hljs-params">node, scope</span>)</span> {
            <span class="hljs-keyword">return</span> evaluate(node.expression, scope);
        },
        <span class="hljs-function"><span class="hljs-title">BinaryExpression</span>(<span class="hljs-params">node, scope</span>)</span> {
            <span class="hljs-keyword">const</span> leftValue = evaluate(node.left, scope);
            <span class="hljs-keyword">const</span> rightValue = evaluate(node.right, scope);;
            <span class="hljs-keyword">switch</span>(node.operator) {
                <span class="hljs-keyword">case</span> <span class="hljs-string">'+'</span>:
                    <span class="hljs-keyword">return</span> leftValue + rightValue;
                <span class="hljs-keyword">case</span> <span class="hljs-string">'-'</span>:
                    <span class="hljs-keyword">return</span> leftValue - rightValue;
                <span class="hljs-keyword">case</span> <span class="hljs-string">'*'</span>:
                    <span class="hljs-keyword">return</span> leftValue * rightValue;
                <span class="hljs-keyword">case</span> <span class="hljs-string">'/'</span>:
                    <span class="hljs-keyword">return</span> leftValue / rightValue;
                <span class="hljs-keyword">default</span>: 
                    <span class="hljs-keyword">throw</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">'upsupported operator\uFF1A'</span> + node.operator);
            }
        },
        <span class="hljs-function"><span class="hljs-title">Identifier</span>(<span class="hljs-params">node, scope</span>)</span> {
            <span class="hljs-keyword">return</span> node.name;
        },
        <span class="hljs-function"><span class="hljs-title">NumericLiteral</span>(<span class="hljs-params">node, scope</span>)</span> {
            <span class="hljs-keyword">return</span> node.value;
        }
    }

    <span class="hljs-keyword">const</span> evaluate = <span class="hljs-function">(<span class="hljs-params">node, scope</span>) =&gt;</span> {
        <span class="hljs-keyword">try</span> {
            <span class="hljs-keyword">return</span> astInterpreters[node.type](node, scope);
        } <span class="hljs-keyword">catch</span>(e) {
            <span class="hljs-keyword">if</span> (e &amp;&amp; e.message &amp;&amp; e.message.indexOf(<span class="hljs-string">'astInterpreters[node.type] is not a function'</span>) != -<span class="hljs-number">1</span>) {
                <span class="hljs-built_in">console</span>.error(<span class="hljs-string">'unsupported ast type: '</span> + node.type);
                <span class="hljs-built_in">console</span>.error(codeFrameColumns(sourceCode, node.loc, {
                    <span class="hljs-attr">highlightCode</span>: <span class="hljs-literal">true</span>
                }));
            } <span class="hljs-keyword">else</span> {
                <span class="hljs-built_in">console</span>.error(e.message);
                <span class="hljs-built_in">console</span>.error(codeFrameColumns(sourceCode, node.loc, {
                    <span class="hljs-attr">highlightCode</span>: <span class="hljs-literal">true</span>
                }));                
            }
        }
    }
    <span class="hljs-keyword">return</span> {
        evaluate
    }
})();

<span class="hljs-keyword">const</span> globalScope = {};
evaluator.evaluate(ast.program, globalScope);

<span class="hljs-built_in">console</span>.log(globalScope);
</code></pre>
<h3 data-id="heading-4"></h3>
<p>\u8981\u652F\u6301\u51FD\u6570\u8C03\u7528\uFF0C\u9996\u5148\u8981\u652F\u6301\u4F5C\u7528\u57DF\u94FE\uFF0C\u56E0\u4E3A\u51FD\u6570\u6267\u884C\u4F1A\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u4F5C\u7528\u57DF\uFF0C\u5E76\u4E14\u4F1A\u6309\u7167\u4F5C\u7528\u57DF\u94FE\u67E5\u627E\u53D8\u91CF\u3002</p>
<p>\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2A scope \u7C7B\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Scope</span> </span>{
    <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params">parentScope</span>)</span> {
        <span class="hljs-built_in">this</span>.parent = parentScope;
        <span class="hljs-built_in">this</span>.declarations = [];
    }

    <span class="hljs-function"><span class="hljs-title">set</span>(<span class="hljs-params">name, value</span>)</span> {
        <span class="hljs-built_in">this</span>.declarations[name] = value;
    }

    <span class="hljs-function"><span class="hljs-title">getLocal</span>(<span class="hljs-params">name</span>)</span> {
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.declarations[name];
    }

    <span class="hljs-function"><span class="hljs-title">get</span>(<span class="hljs-params">name</span>)</span> {
        <span class="hljs-keyword">let</span> res = <span class="hljs-built_in">this</span>.getLocal(name);
        <span class="hljs-keyword">if</span> (res === <span class="hljs-literal">undefined</span> &amp;&amp; <span class="hljs-built_in">this</span>.parent) {
            res = <span class="hljs-built_in">this</span>.parent.get(name);
        }
        <span class="hljs-keyword">return</span> res;
    }

    <span class="hljs-function"><span class="hljs-title">has</span>(<span class="hljs-params">name</span>)</span> {
        <span class="hljs-keyword">return</span> !!<span class="hljs-built_in">this</span>.getLocal(name);
    }
}
</code></pre>
<p>Scope \u6709 declarations \u5C5E\u6027\uFF0C\u4EE3\u8868\u8FD9\u4E2A scope \u4E2D\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u5E76\u4E14\u8FD8\u6709 parentScope \u5C5E\u6027\u6307\u5411\u7236 scope\uFF0C\u901A\u8FC7 set \u65B9\u6CD5\u5728\u4F5C\u7528\u57DF\u4E2D\u58F0\u660E\u53D8\u91CF\uFF0C\u901A\u8FC7 getLocal \u67E5\u627E\u672C\u4F5C\u7528\u57DF\u7684\u53D8\u91CF\uFF0C\u901A\u8FC7 get \u65B9\u6CD5\u652F\u6301\u6309\u7167\u4F5C\u7528\u57DF\u94FE\u4E0D\u65AD\u5411\u4E0A\u67E5\u627E\u53D8\u91CF\u3002</p>
<p>\u6709\u4E86\u8FD9\u4E2A\u65B9\u6CD5\u4EE5\u540E\uFF0C\u6211\u4EEC\u5168\u5C40 scope \u5C31\u53D8\u6210\u4E86\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> globalScope = <span class="hljs-keyword">new</span> Scope();

evaluator.evaluate(ast.program, globalScope);
</code></pre>
<p>\u6211\u4EEC\u5F80\u5176\u4E2D\u6CE8\u5165\u5168\u5C40\u53D8\u91CF\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> globalScope = <span class="hljs-keyword">new</span> Scope();
globalScope.set(<span class="hljs-string">'console'</span>, {
    <span class="hljs-attr">log</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">...args</span>) </span>{
        <span class="hljs-built_in">console</span>.log(chalk.green(...args));
    },
    <span class="hljs-attr">error</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">...args</span>) </span>{
        <span class="hljs-built_in">console</span>.log(chalk.red(...args));
    },
    <span class="hljs-attr">warn</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">...args</span>) </span>{
        <span class="hljs-built_in">console</span>.log(chalk.orange(...args));
    },
});
evaluator.evaluate(ast.program, globalScope);
</code></pre>
<p>\u8FD9\u91CC\u6211\u4EEC\u901A\u8FC7 chalk \u505A\u4E86\u4E0D\u540C\u989C\u8272\u7684\u6253\u5370\u3002</p>
<p>\u7136\u540E\u9700\u8981\u652F\u6301 CallExpression \u7684\u51FD\u6570\u8C03\u7528\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-title">MemberExpression</span>(<span class="hljs-params">node, scope</span>)</span> {
    <span class="hljs-keyword">const</span> obj = scope.get(evaluate(node.object));
    <span class="hljs-keyword">return</span> obj[evaluate(node.property)]
},
<span class="hljs-function"><span class="hljs-title">CallExpression</span>(<span class="hljs-params">node, scope</span>)</span> {
    <span class="hljs-keyword">const</span> fn = evaluate(node.callee, scope);
    <span class="hljs-keyword">const</span> args = node.arguments.map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
        <span class="hljs-keyword">if</span> (item.type === <span class="hljs-string">'Identifier'</span>) {
            <span class="hljs-keyword">return</span> scope.get(item.name);
        }
        <span class="hljs-keyword">return</span> evaluate(item, scope);
    });
    <span class="hljs-keyword">if</span>(node.callee.type === <span class="hljs-string">'MemberExpression'</span>) {
        <span class="hljs-keyword">const</span> obj = evaluate(node.callee.object, scope);
        <span class="hljs-keyword">return</span> fn.apply(obj, args);
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">return</span> fn.apply(<span class="hljs-literal">null</span>, args);
    }
}
</code></pre>
<p>console.log \u662F\u4E00\u4E2A MemberExpression\uFF0C\u5148\u4ECE scope \u4E2D\u628A object \u5C5E\u6027\u5BF9\u5E94\u7684\u503C\u53D6\u51FA\u6765\uFF0C\u7136\u540E\u518D\u53D6\u6539\u503C\u7684 property \u5BF9\u5E94\u7684\u5C5E\u6027\u3002</p>
<p>\u51FD\u6570\u8C03\u7528 CallExpression \u9700\u8981\u5148\u4ECE scope \u53D6\u51FA callee \u5BF9\u5E94\u7684\u51FD\u6570\uFF0C\u7136\u540E\u5904\u7406\u53C2\u6570\uFF0C\u5982\u679C\u662F\u6807\u8BC6\u7B26 Identifier \u7684\u8BDD\u8981\u4ECE scope \u4E2D\u53D6\u51FA\u5BF9\u5E94\u7684\u503C\uFF0C\u4E4B\u540E\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\uFF0C\u4F20\u5165\u53C2\u6570\u3002\u5982\u679C\u662F obj.xxx \u7684\u5F62\u5F0F\u4E5F\u5C31\u662F\u8C03\u7528\u90E8\u5206\u662F MemberExpresion \u7684\u8BDD\u5219\u8981\u7ED1\u5B9A this \u4E3A\u8BE5 obj\u3002</p>
<p>\u6267\u884C\u4E0B\u770B\u4E0B\u6548\u679C\uFF1A</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/328f630546e24fa486ad1a48747ba46f~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png" loading="lazy" class="medium-zoom-image"></p>
<p>\u80FD\u591F\u6253\u5370\u6B63\u786E\u7684\u7ED3\u679C\uFF0C\u6211\u4EEC\u7684 JS \u89E3\u91CA\u5668\u5DF2\u7ECF\u652F\u6301\u51FD\u6570\u8C03\u7528\u4E86\u3002</p>
<h3 data-id="heading-5">\u51FD\u6570\u8C03\u7528</h3>
<p>\u73B0\u5728\u6211\u4EEC\u53EA\u662F\u5728\u5168\u5C40\u6CE8\u5165\u51FD\u6570\uFF0C\u5982\u679C\u7528\u6237\u60F3\u81EA\u5B9A\u4E49\u51FD\u6570\u5462\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u652F\u6301\u51FD\u6570\u58F0\u660E\u8BED\u53E5 FunctionDeclaration \u7684\u89E3\u91CA\u3002</p>
<p>FunctionDeclaration \u5176\u5B9E\u4E5F\u662F\u5F80\u4F5C\u7528\u57DF\u4E2D\u653E\u4E86\u4E00\u4E2A\u503C\uFF0C\u53EA\u4E0D\u8FC7\u8FD9\u4E2A\u503C\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u6D41\u7A0B\u548C\u53D8\u91CF\u58F0\u660E VariableDeclarator \u7684\u89E3\u91CA\u7C7B\u4F3C\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-title">FunctionDeclaration</span>(<span class="hljs-params">node, scope</span>)</span> {
    <span class="hljs-keyword">const</span> declareName = evaluate(node.id);
    <span class="hljs-keyword">if</span> (scope.get(declareName)) {
        <span class="hljs-keyword">throw</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">'duplicate declare variable\uFF1A'</span> + declareName);
    } <span class="hljs-keyword">else</span> {
        scope.set(declareName, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">...args</span>) </span>{
            <span class="hljs-keyword">const</span> funcScope = <span class="hljs-keyword">new</span> Scope();
            funcScope.parent = scope;

            node.params.forEach(<span class="hljs-function">(<span class="hljs-params">item, index</span>) =&gt;</span> {
                funcScope.set(item.name, args[index]);
            });
            funcScope.set(<span class="hljs-string">'this'</span>, <span class="hljs-built_in">this</span>);
            <span class="hljs-keyword">return</span> evaluate(node.body, funcScope);
        });
    }
},
</code></pre>
<p>\u51FD\u6570\u4F1A\u751F\u6210\u4E00\u4E2A\u65B0\u7684 scope\uFF0C\u6211\u4EEC\u628A\u51FD\u6570\u63A5\u6536\u5230\u7684\u53C2\u6570\u6309\u7167\u58F0\u660E\u7684 params \u7684\u540D\u5B57\uFF0C\u4F9D\u6B21\u8BBE\u7F6E\u5728 scope \u4E2D\uFF0Cthis \u4E5F\u8BBE\u7F6E\u5230\u4F5C\u7528\u57DF\u4E2D\uFF08\u5176\u5B9E\u4F5C\u7528\u57DF\u548C this \u662F\u5E73\u884C\u7684\u5173\u7CFB\uFF0C\u90FD\u5728\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u8FD9\u91CC\u7B80\u5355\u5B9E\u73B0\u4E0B\uFF09\uFF0C\u7136\u540E\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u5C31\u53EF\u4EE5\u5728\u4F5C\u7528\u57DF\u4E2D\u67E5\u627E\u5230\u8FD9\u4E2A\u51FD\u6570\uFF0C\u5E76\u4F20\u5165\u53C2\u6570\u6267\u884C\u4E86\u3002</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/352e6c193f2c4d95aad7977b2a22f30f~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png" loading="lazy" class="medium-zoom-image"></p>
<h2 data-id="heading-6">\u603B\u7ED3</h2>
<p>\u524D\u9762\u7684\u7AE0\u8282\uFF0C\u6211\u4EEC\u5B66\u4E60\u4E86 AST\uFF0C\u77E5\u9053 AST \u53EF\u4EE5\u8FDB\u884C transform \u7136\u540E\u751F\u6210\u4EE3\u7801\uFF0C\u8FD9\u4E00\u8282\uFF0C\u6211\u4EEC\u89E3\u91CA\u6267\u884C\u4E86 AST\uFF0C\u5B9E\u73B0\u4E86\u4E00\u4E2A\u7B80\u5355\u7684 JS \u89E3\u91CA\u5668\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u51FD\u6570\u3001\u53D8\u91CF\uFF0C\u6709\u4F5C\u7528\u57DF\u94FE\uFF0C\u53EF\u4EE5\u6CE8\u5165\u5168\u5C40 api\u3002</p>
<p>v8 \u6700\u65E9\u7684\u5B9E\u73B0\u65B9\u5F0F\u4E5F\u662F\u76F4\u63A5\u89E3\u91CA\u6267\u884C AST\uFF0C\u4F46\u662F\u73B0\u5728\u591A\u4E86\u4E00\u5C42\uFF0C\u4F1A\u5148\u8F6C\u6210\u5B57\u8282\u7801\uFF0C\u7136\u540E\u518D\u89E3\u91CA\u6267\u884C\u3002\u4F46\u662F\u89E3\u91CA\u6267\u884C\u7684\u601D\u8DEF\u548C AST \u7684\u65B9\u5F0F\u7C7B\u4F3C\u3002</p>
<p>\u6211\u4EEC\u662F\u7528 js \u89E3\u91CA\u7684 js\uFF0C\u6240\u4EE5 funciton \u7684 apply \u65B9\u6CD5\u3001\u5168\u5C40 api \u7B49\u90FD\u53EF\u4EE5\u76F4\u63A5\u7528\uFF0C\u5B9E\u9645\u4E0A\u4E00\u822C js \u5F15\u64CE\u90FD\u662F c++ \u5199\u7684\uFF0C\u6CA1\u6709\u8FD9\u4E9B\u4E1C\u897F\uFF0C\u6240\u6709\u7684\u90FD\u8981\u81EA\u5DF1\u53BB\u5B9E\u73B0\uFF0C\u5305\u62EC\u5185\u5B58\u5206\u914D\uFF08\u5806\u3001\u8C03\u7528\u6808\uFF09\u3001\u5168\u5C40 api\u7B49\u3002</p>
<p>\u5E0C\u671B\u8FD9\u4E00\u8282\u80FD\u591F\u8BA9\u4F60\u5BF9\u89E3\u91CA\u5668\u7684\u5B9E\u73B0\u6709\u6240\u7406\u89E3\u3002</p>
<p>\uFF08\u4EE3\u7801\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FQuarkGluonPlasma%2Fbabel-plugin-exercize" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/QuarkGluonPlasma/babel-plugin-exercize" ref="nofollow noopener noreferrer">\u8FD9\u91CC</a>\uFF0C\u5EFA\u8BAE git clone \u4E0B\u6765\u901A\u8FC7 node \u8DD1\u4E00\u4E0B\uFF09</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
