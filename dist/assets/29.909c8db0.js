var s={name:"29\u3001\u624B\u5199 Babel\uFF1A generator\u7BC7",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>generator \u662F\u6253\u5370 AST \u4E3A\u76EE\u6807\u4EE3\u7801\uFF0C\u5E76\u751F\u6210 sourcemap\u3002</p>
<p>\u8FD9\u8282\u6211\u4EEC\u5B9E\u73B0\u4E00\u4E0B generator\u3002</p>
<h2 data-id="heading-0">\u601D\u8DEF\u5206\u6790</h2>
<p>generator \u4F1A\u904D\u5386 AST \u8FDB\u884C\u6253\u5370\uFF0C\u5BF9\u4E8E\u6BCF\u79CD AST \u6211\u4EEC\u662F\u77E5\u9053\u5982\u4F55\u6253\u5370\u7684\uFF0C\u6BD4\u5982 while \u8BED\u53E5\uFF1A</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5653db28cc24c3ca0bba75dfb4ccb4a~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u5148\u6253\u5370 while\u3001\u518D\u6253\u5370\u7A7A\u683C\uFF0C\u518D\u6253\u5370 ( \uFF0C\u7136\u540E\u6253\u5370 test \u90E8\u5206\uFF0C\u4E4B\u540E\u6253\u5370 \uFF09\uFF0C\u6700\u540E\u6253\u5370 block \u90E8\u5206\u3002</p>
<p>\u90A3\u4E48\u5B9E\u73B0\u4E86\u6BCF\u79CD AST \u7684\u6253\u5370\u5C31\u53EF\u4EE5\u62FC\u63A5\u51FA\u76EE\u6807\u4EE3\u7801\u3002</p>
<p>\u800C sourcemap \u662F\u8BB0\u5F55\u6E90\u7801\u4F4D\u7F6E\u548C\u76EE\u6807\u4EE3\u7801\u4F4D\u7F6E\u7684\u5173\u8054\uFF0C\u5728\u6253\u5370\u7684\u8BB0\u5F55\u4E0B\u5F53\u524D\u6253\u5370\u7684\u884C\u5217\uFF0C\u5C31\u662F\u76EE\u6807\u4EE3\u7801\u4F4D\u7F6E\uFF0C\u800C\u6E90\u7801\u4F4D\u7F6E parse \u7684\u65F6\u5019\u5C31\u6709\u4E86\uFF0C\u8FD9\u6837\u5C31\u751F\u6210\u4E86\u4E00\u4E2A mapping\u3002</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5b0045e0f063488da7ea2b30922160b9~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>sourcemap \u5C31\u662F\u7531\u4E00\u4E2A\u4E2A mapping \u7EC4\u6210\u7684\uFF0C\u6253\u5370\u6BCF\u4E2A AST \u8282\u70B9\u7684\u65F6\u5019\u6DFB\u52A0\u4E00\u4E0B mapping\uFF0C\u6700\u7EC8\u5C31\u751F\u6210\u4E86 sourcemap\u3002</p>
<h2 data-id="heading-1">\u4EE3\u7801\u5B9E\u73B0</h2>
<p>\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2A Printer \u7C7B\u505A\u6253\u5370\uFF0C\u5B9E\u73B0\u6BCF\u79CD AST \u7684\u6253\u5370\u903B\u8F91\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Printer</span> </span>{
    <span class="hljs-title">constructor</span> (<span class="hljs-params">source, fileName</span>) {
        <span class="hljs-built_in">this</span>.buf = <span class="hljs-string">''</span>;
        <span class="hljs-built_in">this</span>.printLine = <span class="hljs-number">1</span>;
        <span class="hljs-built_in">this</span>.printColumn = <span class="hljs-number">0</span>;
    }

    <span class="hljs-function"><span class="hljs-title">addMapping</span>(<span class="hljs-params">node</span>)</span> {
        <span class="hljs-comment">// \u5F85\u5B9E\u73B0</span>
    }

    <span class="hljs-function"><span class="hljs-title">space</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-built_in">this</span>.buf += <span class="hljs-string">' '</span>;
        <span class="hljs-built_in">this</span>.printColumn ++;
    }

    <span class="hljs-function"><span class="hljs-title">nextLine</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-built_in">this</span>.buf += <span class="hljs-string">'\\n'</span>;
        <span class="hljs-built_in">this</span>.printLine ++;
        <span class="hljs-built_in">this</span>.printColumn = <span class="hljs-number">0</span>;
    }

    Program (node) {
        <span class="hljs-built_in">this</span>.addMapping(node);
        node.body.forEach(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
            <span class="hljs-built_in">this</span>[item.type](item) + <span class="hljs-string">';'</span>;
            <span class="hljs-built_in">this</span>.printColumn ++;
            <span class="hljs-built_in">this</span>.nextLine();
        });
    }

    <span class="hljs-function"><span class="hljs-title">VariableDeclaration</span>(<span class="hljs-params">node</span>)</span> {
        <span class="hljs-keyword">if</span>(!node.declarations.length) {
            <span class="hljs-keyword">return</span>;
        }
        <span class="hljs-built_in">this</span>.addMapping(node);

        <span class="hljs-built_in">this</span>.buf += node.kind;
        <span class="hljs-built_in">this</span>.space();
        node.declarations.forEach(<span class="hljs-function">(<span class="hljs-params">declaration, index</span>) =&gt;</span> {
            <span class="hljs-keyword">if</span> (index != <span class="hljs-number">0</span>) {
                <span class="hljs-built_in">this</span>.buf += <span class="hljs-string">','</span>;
                <span class="hljs-built_in">this</span>.printColumn ++;
            }
            <span class="hljs-built_in">this</span>[declaration.type](declaration);
        });
        <span class="hljs-built_in">this</span>.buf += <span class="hljs-string">';'</span>;
        <span class="hljs-built_in">this</span>.printColumn ++;

    }
    <span class="hljs-function"><span class="hljs-title">VariableDeclarator</span>(<span class="hljs-params">node</span>)</span> {
        <span class="hljs-built_in">this</span>.addMapping(node);
        <span class="hljs-built_in">this</span>[node.id.type](node.id);
        <span class="hljs-built_in">this</span>.buf += <span class="hljs-string">'='</span>;
        <span class="hljs-built_in">this</span>.printColumn ++;
        <span class="hljs-built_in">this</span>[node.init.type](node.init);
    }
    <span class="hljs-function"><span class="hljs-title">Identifier</span>(<span class="hljs-params">node</span>)</span> {
        <span class="hljs-built_in">this</span>.addMapping(node);
        <span class="hljs-built_in">this</span>.buf += node.name;
    }
    <span class="hljs-function"><span class="hljs-title">FunctionDeclaration</span>(<span class="hljs-params">node</span>)</span> {
        <span class="hljs-built_in">this</span>.addMapping(node);

        <span class="hljs-built_in">this</span>.buf += <span class="hljs-string">'function '</span>;
        <span class="hljs-built_in">this</span>.buf += node.id.name;
        <span class="hljs-built_in">this</span>.buf += <span class="hljs-string">'('</span>;
        <span class="hljs-built_in">this</span>.buf += node.params.map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.name).join(<span class="hljs-string">','</span>);
        <span class="hljs-built_in">this</span>.buf += <span class="hljs-string">'){'</span>;
        <span class="hljs-built_in">this</span>.nextLine();
        <span class="hljs-built_in">this</span>[node.body.type](node.body);
        <span class="hljs-built_in">this</span>.buf += <span class="hljs-string">'}'</span>;
        <span class="hljs-built_in">this</span>.nextLine();
    }
    <span class="hljs-function"><span class="hljs-title">CallExpression</span>(<span class="hljs-params">node</span>)</span> {
        <span class="hljs-built_in">this</span>.addMapping(node);

        <span class="hljs-built_in">this</span>[node.callee.type](node.callee);
        <span class="hljs-built_in">this</span>.buf += <span class="hljs-string">'('</span>;
        node.arguments.forEach(<span class="hljs-function">(<span class="hljs-params">item, index</span>) =&gt;</span> {
            <span class="hljs-keyword">if</span>(index &gt; <span class="hljs-number">0</span> ) <span class="hljs-built_in">this</span>.buf += <span class="hljs-string">', '</span>;
            <span class="hljs-built_in">this</span>[item.type](item);
        })
        <span class="hljs-built_in">this</span>.buf += <span class="hljs-string">')'</span>;

    }
    <span class="hljs-function"><span class="hljs-title">ExpressionStatement</span>(<span class="hljs-params">node</span>)</span> {
        <span class="hljs-built_in">this</span>.addMapping(node);

        <span class="hljs-built_in">this</span>[node.expression.type](node.expression);

    }
    <span class="hljs-function"><span class="hljs-title">ReturnStatement</span>(<span class="hljs-params">node</span>)</span> {
       <span class="hljs-built_in">this</span>.addMapping(node);

        <span class="hljs-built_in">this</span>.buf += <span class="hljs-string">'return '</span>;
        <span class="hljs-built_in">this</span>[node.argument.type](node.argument); 

    }
    <span class="hljs-function"><span class="hljs-title">BinaryExpression</span>(<span class="hljs-params">node</span>)</span> {
       <span class="hljs-built_in">this</span>.addMapping(node);

        <span class="hljs-built_in">this</span>[node.left.type](node.left);
        <span class="hljs-built_in">this</span>.buf += node.operator;
        <span class="hljs-built_in">this</span>[node.right.type](node.right);

    }
    <span class="hljs-function"><span class="hljs-title">BlockStatement</span>(<span class="hljs-params">node</span>)</span> {
       <span class="hljs-built_in">this</span>.addMapping(node);

        node.body.forEach(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
            <span class="hljs-built_in">this</span>.buf += <span class="hljs-string">'    '</span>;
            <span class="hljs-built_in">this</span>.printColumn += <span class="hljs-number">4</span>;
            <span class="hljs-built_in">this</span>[item.type](item);
            <span class="hljs-built_in">this</span>.nextLine();
        });

    }
    <span class="hljs-function"><span class="hljs-title">NumericLiteral</span>(<span class="hljs-params">node</span>)</span> {
       <span class="hljs-built_in">this</span>.addMapping(node);

        <span class="hljs-built_in">this</span>.buf += node.value;

    }
}
</code></pre>
<p>\u8FD9\u6837\u9012\u5F52\u8FDB\u884C\u6253\u5370\u5C31\u53EF\u4EE5\u751F\u6210\u5B8C\u6574\u7684\u76EE\u6807\u4EE3\u7801\uFF0C\u6211\u4EEC\u628A\u5B83\u8BB0\u5F55\u5230\u4E86 this.buf \u5C5E\u6027\u3002</p>
<p>\u540C\u65F6\uFF0C\u6211\u4EEC\u5728\u6253\u5370\u7684\u65F6\u5019\u8BB0\u5F55\u4E86 printLine\u3001printColumn \u7684\u4FE1\u606F\uFF0C\u4E5F\u5C31\u662F\u5F53\u524D\u6253\u5370\u5230\u4E86\u7B2C\u51E0\u884C\uFF0C\u8FD9\u6837\u5728 addMapping \u91CC\u9762\u5C31\u53EF\u4EE5\u62FF\u5230 AST \u5728\u76EE\u6807\u4EE3\u7801\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u800C\u6E90\u7801\u4F4D\u7F6E\u662F\u5728 parse \u7684\u65F6\u5019\u8BB0\u5F55\u5230 loc \u5C5E\u6027\u7684\uFF0C\u6709\u4E86\u8FD9\u4E24\u4E2A\u4F4D\u7F6E\u5C31\u53EF\u4EE5\u751F\u6210\u4E00\u4E2A mapping\u3002</p>
<p>sourcemap \u7684\u751F\u6210\u662F\u4F7F\u7528 source-map \u5305\uFF0C\u8FD9\u4E2A mozilla \u7EF4\u62A4\u7684\uFF0C\u56E0\u4E3A sourcemap \u7684\u6807\u51C6\u4E5F\u662F\u4ED6\u4EEC\u63D0\u51FA\u6765\u7684\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> { SourceMapGenerator } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'source-map'</span>);

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Printer</span> </span>{
    <span class="hljs-title">constructor</span> (<span class="hljs-params">source, fileName</span>) {
        <span class="hljs-built_in">this</span>.buf = <span class="hljs-string">''</span>;
  
        <span class="hljs-built_in">this</span>.sourceMapGenerator = <span class="hljs-keyword">new</span> SourceMapGenerator({
            <span class="hljs-attr">file</span>: fileName + <span class="hljs-string">".map.json"</span>,
        });
        <span class="hljs-built_in">this</span>.fileName = fileName;
        <span class="hljs-built_in">this</span>.sourceMapGenerator.setSourceContent(fileName, source);

        <span class="hljs-built_in">this</span>.printLine = <span class="hljs-number">1</span>;
        <span class="hljs-built_in">this</span>.printColumn = <span class="hljs-number">0</span>;
    }
}
</code></pre>
<p>sourcemap \u9700\u8981\u6307\u5B9A\u6E90\u6587\u4EF6\u540D\uFF0C\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u6211\u4EEC\u8981\u4F20\u5165 fileName\u3002</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42cce7786c464573a506ca2843bad213~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u4E4B\u540E\u5B9E\u73B0 addMapping \u65B9\u6CD5\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-title">addMapping</span>(<span class="hljs-params">node</span>)</span> {
    <span class="hljs-keyword">if</span> (node.loc) {
        <span class="hljs-built_in">this</span>.sourceMapGenerator.addMapping({
            <span class="hljs-attr">generated</span>: {
              <span class="hljs-attr">line</span>: <span class="hljs-built_in">this</span>.printLine,
              <span class="hljs-attr">column</span>: <span class="hljs-built_in">this</span>.printColumn
            },
            <span class="hljs-attr">source</span>: <span class="hljs-built_in">this</span>.fileName,
            <span class="hljs-attr">original</span>: node.loc &amp;&amp; node.loc.start
        })
    }
}
</code></pre>
<p>\u6700\u540E\uFF0C\u6211\u4EEC\u5B9A\u4E49 Generator \u7C7B\uFF0C\u5728 generate \u65B9\u6CD5\u91CC\u9762\u8C03\u7528 printer \u7684\u6253\u5370\u903B\u8F91\u6765\u751F\u6210\u76EE\u6807\u4EE3\u7801\uFF0C\u5E76\u4E14\u8C03\u7528 this.sourceMapGenerator.toString() \u6765\u751F\u6210 sourcemap\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Generator</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Printer</span></span>{

    <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params">source, fileName</span>)</span> {
        <span class="hljs-built_in">super</span>(source, fileName);
    }

    <span class="hljs-function"><span class="hljs-title">generate</span>(<span class="hljs-params">node</span>)</span> {
        <span class="hljs-built_in">this</span>[node.type](node);

        <span class="hljs-keyword">return</span> {
            <span class="hljs-attr">code</span>: <span class="hljs-built_in">this</span>.buf,
            <span class="hljs-attr">map</span>: <span class="hljs-built_in">this</span>.sourceMapGenerator.toString()
        }
    }
}

</code></pre>
<p>\u7136\u540E\u66B4\u9732\u51FA generate \u7684 api\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">generate</span> (<span class="hljs-params">node, source, fileName</span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> Generator(source, fileName).generate(node);
}
</code></pre>
<p>\u8FD9\u6837\uFF0C\u6211\u4EEC\u5C31\u5B9E\u73B0\u4E86 babel generator \u7684\u529F\u80FD\uFF0C\u4E5F\u5C31\u662F\u6253\u5370\u76EE\u6807\u4EE3\u7801\u548C\u751F\u6210 sourcemap\u3002</p>
<p>\u53EF\u4EE5\u5728\u751F\u6210\u7684\u4EE3\u7801\u4E2D\u6DFB\u52A0 sourceMappingURL \u5C31\u53EF\u4EE5\u6620\u5C04\u56DE\u6E90\u7801\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6253\u65AD\u70B9\u6216\u8005\u8FD0\u884C\u4EE3\u7801 throw error \u7684\u65B9\u5F0F\u6765\u6D4B\u8BD5 \u6D4B\u8BD5 sourcemap\u7684\u529F\u80FD\u3002</p>
<pre><code class="">//# sourceMappingURL=./xxx.map.json
</code></pre>
<h2 data-id="heading-2">\u603B\u7ED3</h2>
<p>generator \u662F\u6253\u5370 AST \u4E3A\u76EE\u6807\u4EE3\u7801\uFF0C\u6211\u4EEC\u77E5\u9053\u6BCF\u79CD AST \u662F\u5982\u4F55\u6253\u5370\u7684\uFF0C\u90A3\u4E48\u9012\u5F52\u6253\u5370 AST\uFF0C\u62FC\u63A5\u5B57\u7B26\u4E32\uFF0C\u5C31\u53EF\u4EE5\u751F\u6210\u76EE\u6807\u4EE3\u7801\u3002</p>
<p>sourcemap \u662F\u8C03\u8BD5\u4EE3\u7801\u548C\u7EBF\u4E0A\u62A5\u9519\u5B9A\u4F4D\u6E90\u7801\u5FC5\u4E0D\u53EF\u5C11\u7684\u529F\u80FD\uFF0C\u6211\u4EEC\u57FA\u4E8E source-map \u5305\u6765\u751F\u6210\uFF0C\u8BB0\u5F55\u4E00\u4E2A\u4E2A mapping\u3002</p>
<p>\u5177\u4F53\u7684 mapping \u5C31\u662F\u6E90\u4EE3\u7801\u4F4D\u7F6E\u548C\u76EE\u6807\u4EE3\u7801\u4F4D\u7F6E\u7684\u5173\u8054\uFF0CAST \u5728\u6E90\u7801\u7684\u4F4D\u7F6E\u8BB0\u5F55\u5728 loc \u5C5E\u6027\uFF0C\u800C\u5728\u76EE\u6807\u4EE3\u7801\u7684\u4F4D\u7F6E\u4F4D\u7F6E\u53EF\u4EE5\u8BA1\u7B97\u51FA\u6765\u3002\u8FD9\u6837\u5C31\u53EF\u4EE5\u751F\u6210 sourcemap\u3002</p>
<p>\uFF08\u4EE3\u7801\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FQuarkGluonPlasma%2Fbabel-plugin-exercize" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/QuarkGluonPlasma/babel-plugin-exercize" ref="nofollow noopener noreferrer">\u8FD9\u91CC</a>\uFF0C\u5EFA\u8BAE git clone \u4E0B\u6765\u901A\u8FC7 node \u8DD1\u4E00\u4E0B\uFF09</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
