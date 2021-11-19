var s={name:"18\u3001\u5B9E\u6218\u6848\u4F8B_ linter",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>lint \u662F\u4EC0\u4E48\uFF1F \u7EF4\u57FA\u767E\u79D1\u4E2D\u662F\u8FD9\u6837\u8BF4\u7684</p>
<blockquote>
<p>\u5728\u8BA1\u7B97\u673A\u79D1\u5B66\u4E2D\uFF0Clint\u662F\u4E00\u79CD\u5DE5\u5177\u7A0B\u5E8F\u7684\u540D\u79F0\uFF0C\u5B83\u7528\u6765\u6807\u8BB0\u6E90\u4EE3\u7801\u4E2D\uFF0C\u67D0\u4E9B\u53EF\u7591\u7684\u3001\u4E0D\u5177\u7ED3\u6784\u6027\u7684\u6BB5\u843D\u3002\u5B83\u662F\u4E00\u79CD\u9759\u6001\u7A0B\u5E8F\u5206\u6790\u5DE5\u5177\uFF0C\u6700\u65E9\u9002\u7528\u4E8EC\u8BED\u8A00\uFF0C\u5728UNIX\u5E73\u53F0\u4E0A\u5F00\u53D1\u51FA\u6765\u3002\u540E\u6765\u5B83\u6210\u4E3A\u901A\u7528\u672F\u8BED\uFF0C\u53EF\u7528\u4E8E\u63CF\u8FF0\u5728\u4EFB\u4F55\u4E00\u79CD\u8BA1\u7B97\u673A\u7A0B\u5E8F\u8BED\u8A00\u4E2D\uFF0C\u7528\u6765\u6807\u8BB0\u6E90\u4EE3\u7801\u4E2D\u6709\u7591\u4E49\u6BB5\u843D\u7684\u5DE5\u5177\u3002</p>
</blockquote>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/deb79b45fa8b4ffe858521418e32a2b6~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>lint \u5176\u5B9E\u662F c \u8BED\u8A00\u4E2D\u7684\u4E00\u4E2A\u5DE5\u5177\uFF0C\u5728 1979 \u5E74\u7531\u8D1D\u5C14\u5B9E\u9A8C\u5BA4\u53D1\u5E03\u7684\u3002\u5B83\u662F\u901A\u8FC7\u9759\u6001\u5206\u6790\u4EE3\u7801\u6765\u68C0\u67E5\u9519\u8BEF\u7684\u5DE5\u5177\u3002\u540E\u6765\u5404\u9886\u57DF\u7684\u7C7B\u4F3C\u5DE5\u5177\u90FD\u53EB\u505A xx lint\u3002\u6BD4\u5982\u524D\u7AEF\u9886\u57DF\u7684 eslint\u3001stylelint \u7B49\u3002</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bcc263751e8e44b1a51b6db83c4debde~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>lint \u901A\u8FC7\u9759\u6001\u5206\u6790\u6E90\u7801\uFF0C\u5BF9 AST \u8FDB\u884C\u68C0\u67E5\uFF0C\u53D1\u73B0\u5176\u4E2D\u7684\u4E00\u4E9B\u4EE3\u7801\u7ED3\u6784\u7684\u9519\u8BEF\uFF0C\u6216\u8005\u4EE3\u7801\u683C\u5F0F\u7684\u9519\u8BEF\u3002</p>
<p>\u4EE3\u7801\u7ED3\u6784\u7684\u9519\u8BEF\u5305\u62EC\u4E24\u79CD\u60C5\u51B5\uFF1A \u4EE3\u7801\u6709\u903B\u8F91\u6216\u8005\u8BED\u6CD5\u9519\u8BEF\uFF0C\u4EE3\u7801\u6CA1\u9519\u8BEF\u4F46\u662F\u4E0D\u7B26\u5408\u4EE3\u7801\u89C4\u8303\uFF1B</p>
<p>\u4EE3\u7801\u683C\u5F0F\u7684\u9519\u8BEF\u5219\u662F\uFF1A\u4EE3\u7801\u7ED3\u6784\u662F\u5BF9\u7684\uFF0C\u4F46\u662F\u7A7A\u683C\u3001\u6362\u884C\u7B49\u683C\u5F0F\u4E0D\u5BF9\u3002</p>
<p>\u8FD9\u4E9B\u90FD\u9700\u8981\u8FDB\u884C lint\u3002</p>
<blockquote>
<p>\u9759\u6001\u5206\u6790\uFF1A\u52A8\u6001\u6307\u7684\u662F\u4EE3\u7801\u8FD0\u884C\u7684\u65F6\u5019\uFF0C\u800C\u9759\u6001\u5219\u4E0D\u4F1A\u8FD0\u884C\u4EE3\u7801\u3002\u9759\u6001\u662F\u901A\u8FC7\u7F16\u8BD1\u7684\u65B9\u5F0F\u6765\u5206\u6790\u6E90\u4EE3\u7801\u3002\u5B83\u7684\u76EE\u7684\u4E0D\u662F\u4E3A\u4E86\u751F\u6210\u76EE\u6807\u4EE3\u7801\uFF0C\u800C\u662F\u4E3A\u4E86\u63D0\u53D6\u4E00\u4E9B\u60F3\u8981\u7684\u4FE1\u606F\uFF0C\u8FD9\u662F\u548C\u7F16\u8BD1\u7684\u4E0D\u540C\u4E4B\u5904\u3002</p>
</blockquote>
<p>parse \u6210 AST\uFF0C\u5BF9 AST \u8FDB\u884C\u68C0\u67E5\uFF0C\u8FD9\u4E2A\u4E8B\u60C5\u7528 babel \u4E5F\u53EF\u4EE5\u505A\uFF0C\u8FD9\u8282\u6211\u4EEC\u5C31\u7528 babel \u5199\u4E00\u4E2A lint \u63D2\u4EF6\u3002</p>
<h2 data-id="heading-0">\u68C0\u67E5\u51FA\u9519\u8BEF\u7684\u4EE3\u7801</h2>
<p>\u4EE3\u7801\u7684\u9519\u8BEF\u5199\u6CD5\u53EF\u80FD\u5F88\u591A\uFF0C\u5C31\u50CF eslint \u6709\u4E00\u7CFB\u5217\u7684 rule\uFF0C\u6211\u4EEC\u53EA\u6311\u4E24\u4E2A\u6765\u5B9E\u73B0\u3002</p>
<h3 data-id="heading-1">\u9519\u8BEF\u7684 for direction</h3>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i--) {
}

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">10</span>; i &gt;= <span class="hljs-number">0</span>; i++) {
}
</code></pre>
<p>\u4E0A\u9762\u4E24\u79CD\u4EE3\u7801\u904D\u5386\u65B9\u5411\u662F\u9519\u8BEF\u7684\uFF0C\u4F1A\u5BFC\u81F4\u6B7B\u5FAA\u73AF\u3002\u800C\u5F00\u53D1\u8005\u5199\u4EE3\u7801\u7684\u65F6\u5019\u4E00\u4E2A\u4E0D\u6CE8\u610F\u5C31\u6709\u53EF\u80FD\u5199\u9519\u4E86\uFF0C\u6211\u4EEC\u5E0C\u671B\u9759\u6001\u5206\u6790\u51FA\u8FD9\u79CD\u9519\u8BEF\u4EE3\u7801\uFF0C\u5E76\u8FDB\u884C\u7F16\u8BD1\u65F6\u62A5\u9519\u3002</p>
<h4 data-id="heading-2">\u601D\u8DEF\u5206\u6790</h4>
<p>for \u8BED\u53E5\u7684 AST \u662F ForStatement\uFF0C\u6211\u4EEC\u5728 <a href="https://link.juejin.cn?target=https%3A%2F%2Fastexplorer.net%2F" target="_blank" rel="nofollow noopener noreferrer" title="https://astexplorer.net/" ref="nofollow noopener noreferrer">astexplorer.net</a> \u4E2D\u6765\u67E5\u770B\u4E00\u4E0B\u5B83\u7684\u7ED3\u6784</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa528fd0b3af45f4a45b6180fb94cc06~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69571ea3186a42e492a40ae8ca0611e8~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>init \u90E8\u5206\u662F\u4E00\u4E2A\u53D8\u91CF\u58F0\u660E\u8BED\u53E5 VariableDeclaration\u3002</p>
<p>test \u90E8\u5206\u662F\u4E00\u4E2A\u4E8C\u5143\u8868\u8FBE\u5F0F BinaryExpression\uFF0Coperator \u5C5E\u6027\u4E3A &lt;\u3002</p>
<p>update \u90E8\u5206\u662F\u4E00\u4E2A\u4E00\u5143\u8868\u8FBE\u5F0F UpdateExpression\uFF0Coperator \u5C5E\u6027\u4E3A --\u3002</p>
<p>body \u90E8\u5206\u662F\u5757\u8BED\u53E5 BlockStatement\u3002</p>
<p><strong>\u6211\u4EEC\u7684\u76EE\u6807\u662F\u68C0\u67E5\u51FA\u904D\u5386\u65B9\u5411\u662F\u5426\u548C\u7EC8\u6B62\u6761\u4EF6\u7684\u5224\u65AD\u4E00\u81F4\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5F53 update \u4E3A ++ \u65F6\uFF0Ctest \u5E94\u4E3A\u4E3A &lt;\u3001&lt;=\uFF1B\u5F53 update \u4E3A -- \u65F6\uFF0Ctest \u5E94\u4E3A &gt;\u3001&gt;=\u3002\u5982\u679C\u4E0D\u4E00\u81F4\u5C31\u62A5\u9519\u3002</strong></p>
<h4 data-id="heading-3">\u4EE3\u7801\u5B9E\u73B0</h4>
<p>\u9996\u5148\uFF0C\u5BF9 ForStatement \u7684 update \u548C test \u505A\u68C0\u67E5\uFF0C\u5982\u679C\u4E0D\u4E00\u81F4\u5C31\u62A5\u9519\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript">visitor: {
    <span class="hljs-function"><span class="hljs-title">ForStatement</span>(<span class="hljs-params">path, state</span>)</span> {
        <span class="hljs-keyword">const</span> testOperator = path.node.test.operator
        <span class="hljs-keyword">const</span> udpateOperator = path.node.update.operator;

        <span class="hljs-keyword">let</span> sholdUpdateOperator;
        <span class="hljs-keyword">if</span> ([<span class="hljs-string">'&lt;'</span>, <span class="hljs-string">'&lt;='</span>].includes(testOperator)) {
            sholdUpdateOperator = <span class="hljs-string">'++'</span>;
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> ([<span class="hljs-string">'&gt;'</span>, <span class="hljs-string">'&gt;='</span>].includes(testOperator)) {
            sholdUpdateOperator = <span class="hljs-string">'--'</span>;
        }

        <span class="hljs-keyword">if</span> (sholdUpdateOperator !== udpateOperator) {
            <span class="hljs-comment">// \u62A5\u9519\uFF1A\u904D\u5386\u65B9\u5411\u9519\u8BEF</span>
        }
    }
}
</code></pre>
<p>\u62A5\u9519\u6211\u4EEC\u4F7F\u7528 path \u7684 buildCodeFrameError \u65B9\u6CD5\uFF0C\u4ED6\u4F1A\u6784\u9020\u4E00\u4E2A code frame\uFF0C\u6807\u8BB0\u51FA\u5F53\u524D node \u7684\u4F4D\u7F6E\u3002\uFF08\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u9519\u8BEF\u4FE1\u606F\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F Error \u5BF9\u8C61\uFF09</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">throw</span> path.get(<span class="hljs-string">'update'</span>).buildCodeFrameError(<span class="hljs-string">"for direction error"</span>, <span class="hljs-built_in">Error</span>);
</code></pre>
<p>\u8FD9\u6837\uFF0C\u5F53\u53D1\u73B0 for \u7684\u904D\u5386\u65B9\u5411\u9519\u8BEF\u7684\u65F6\u5019\u5C31\u4F1A\u62A5\u9519\uFF1A</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/61e25bc7d2d2483aa7239a29a830e870~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u8FD9\u4E2A\u62A5\u9519\u6709\u70B9\u4E11\uFF0C\u800C\u4E14\u4E5F\u4E0D\u5E94\u8BE5\u76F4\u63A5 throw\uFF0C\u6211\u4EEC\u6539\u8FDB\u4E00\u4E0B\uFF1A</p>
<ul>
<li>\u8BBE\u7F6E Error.stackTraceLimit \u4E3A 0 \uFF0C\u8FD9\u6837\u53EF\u4EE5\u53BB\u6389 stack \u7684\u4FE1\u606F</li>
<li>\u628A\u9519\u8BEF\u4FE1\u606F\u6536\u96C6\u5728\u5168\u5C40 file \u5BF9\u8C61\u4E2D\uFF0C\u5728 post \u9636\u6BB5\u53BB\u96C6\u4E2D\u6253\u5370\u9519\u8BEF</li>
</ul>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> { declare } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'@babel/helper-plugin-utils'</span>);

<span class="hljs-keyword">const</span> forDirectionLint = declare(<span class="hljs-function">(<span class="hljs-params">api, options, dirname</span>) =&gt;</span> {
    api.assertVersion(<span class="hljs-number">7</span>);

    <span class="hljs-keyword">return</span> {
        <span class="hljs-function"><span class="hljs-title">pre</span>(<span class="hljs-params">file</span>)</span> {
            file.set(<span class="hljs-string">'errors'</span>, []);
        },
        <span class="hljs-attr">visitor</span>: {
            <span class="hljs-function"><span class="hljs-title">ForStatement</span>(<span class="hljs-params">path, state</span>)</span> {
                <span class="hljs-keyword">const</span> errors = state.file.get(<span class="hljs-string">'errors'</span>);
                <span class="hljs-keyword">const</span> testOperator = path.node.test.operator
                <span class="hljs-keyword">const</span> udpateOperator = path.node.update.operator;

                <span class="hljs-keyword">let</span> sholdUpdateOperator;
                <span class="hljs-keyword">if</span> ([<span class="hljs-string">'&lt;'</span>, <span class="hljs-string">'&lt;='</span>].includes(testOperator)) {
                    sholdUpdateOperator = <span class="hljs-string">'++'</span>;
                } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> ([<span class="hljs-string">'&gt;'</span>, <span class="hljs-string">'&gt;='</span>].includes(testOperator)) {
                    sholdUpdateOperator = <span class="hljs-string">'--'</span>;
                }

                <span class="hljs-keyword">if</span> (sholdUpdateOperator !== udpateOperator) {
                    <span class="hljs-keyword">const</span> tmp = <span class="hljs-built_in">Error</span>.stackTraceLimit;
                    <span class="hljs-built_in">Error</span>.stackTraceLimit = <span class="hljs-number">0</span>;
                    errors.push(path.get(<span class="hljs-string">'update'</span>).buildCodeFrameError(<span class="hljs-string">"for direction error"</span>, <span class="hljs-built_in">Error</span>));
                    <span class="hljs-built_in">Error</span>.stackTraceLimit = tmp;
                }
            }
        },
        <span class="hljs-function"><span class="hljs-title">post</span>(<span class="hljs-params">file</span>)</span> {
            <span class="hljs-built_in">console</span>.log(file.get(<span class="hljs-string">'errors'</span>));
        }
    }
});
</code></pre>
<p>\u8FD9\u6837\uFF0C\u5F53\u8F93\u5165\u7684\u4EE3\u7801\u5982\u4E0B\u65F6\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
}

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">10</span>; i &gt;= <span class="hljs-number">0</span>; i--) {
}
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i--) {
}

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">10</span>; i &gt;= <span class="hljs-number">0</span>; i++) {
}
</code></pre>
<p>\u4F1A\u6253\u5370\u62A5\u9519\uFF1A</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71adc8c7312545d0a1c91998551aeff0~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u8FD9\u6837\uFF0C\u6211\u4EEC\u5C31\u5B8C\u6210\u4E86\u7B2C\u4E00\u4E2A lint \u63D2\u4EF6\uFF0C\u5B83\u53EF\u4EE5\u68C0\u67E5\u51FA\u4EE3\u7801\u4E2D\u5FAA\u73AF\u8BED\u53E5\u904D\u5386\u65B9\u5411\u7684\u9519\u8BEF\u3002</p>
<h3 data-id="heading-4">\u51FD\u6570\u4E0D\u80FD\u91CD\u65B0\u8D4B\u503C</h3>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{}
<span class="hljs-comment">// xxx</span>
foo = <span class="hljs-string">'guang'</span>;
<span class="hljs-comment">// xxx</span>
foo();

</code></pre>
<p>\u51FD\u6570\u58F0\u660E\u4E4B\u540E\u6709\u53EF\u80FD\u88AB\u91CD\u65B0\u8D4B\u503C\uFF0C\u56E0\u4E3A\u51FD\u6570\u652F\u6301 FunctionDeclaration \u548C FunctionExpression \u4E24\u79CD\u65B9\u5F0F\u58F0\u660E\uFF0C\u800C\u7B2C\u4E8C\u79CD\u58F0\u660E\u65B9\u5F0F\u5C31\u662F\u8D4B\u503C\u8BED\u53E5\u7684\u5F62\u5F0F\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">guang</span>(<span class="hljs-params"></span>)</span>{}   <span class="hljs-comment">// FunctionDeclaration</span>
<span class="hljs-keyword">const</span> ssh = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{} <span class="hljs-comment">// FunctionExpression</span>
</code></pre>
<p>\u4F46\u662F\u6211\u4EEC\u901A\u5E38\u60C5\u51B5\u4E0B\u53EA\u5E0C\u671B\u58F0\u660E\u4E00\u6B21\uFF0C\u4E0D\u5E0C\u671B\u4E4B\u540E\u88AB\u4FEE\u6539\uFF0C\u8FD9\u65F6\u5019\u5C31\u8981\u901A\u8FC7\u9759\u6001\u5206\u6790\u627E\u51FA\u4FEE\u6539\u7684\u5730\u65B9\uFF0C\u7136\u540E\u62A5\u9519\u3002</p>
<h4 data-id="heading-5">\u601D\u8DEF\u5206\u6790</h4>
<p>\u8981\u5904\u7406\u7684\u662F\u8D4B\u503C\u8868\u8FBE\u5F0F\uFF0C\u5BF9\u5E94\u7684 AST \u662F AssignmentExpression\uFF08\u8D4B\u503C\u8868\u8FBE\u5F0F\u53EF\u4EE5\u72EC\u7ACB\u4F5C\u4E3A\u8BED\u53E5\uFF0C\u6784\u6210\u8868\u8FBE\u5F0F\u8BED\u53E5 ExpressionStatement\uFF09\uFF0C\u8981\u5224\u65AD left \u5C5E\u6027\u662F\u5426\u5F15\u7528\u7684\u662F\u4E00\u4E2A\u51FD\u6570\u3002</p>
<p>\u83B7\u53D6\u53D8\u91CF\u7684\u5F15\u7528\u9700\u8981\u7528 path.scope.getBinding \u7684 api\uFF0C\u4ECE\u4F5C\u7528\u57DF\u4E2D\u67E5\u627E binding\uFF0C\u7136\u540E\u5224\u65AD\u58F0\u660E\u7684\u8282\u70B9\u662F\u5426\u662F\u4E00\u4E2A FunctionDeclaration \u6216 FunctionExpression\u3002\u5982\u679C\u662F\uFF0C\u8BF4\u660E\u5BF9\u51FD\u6570\u8FDB\u884C\u4E86\u91CD\u65B0\u8D4B\u503C\uFF0C\u5C31\u62A5\u9519\u3002</p>
<h4 data-id="heading-6">\u4EE3\u7801\u5B9E\u73B0</h4>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> { declare } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'@babel/helper-plugin-utils'</span>);

<span class="hljs-keyword">const</span> noFuncAssignLint = declare(<span class="hljs-function">(<span class="hljs-params">api, options, dirname</span>) =&gt;</span> {
    api.assertVersion(<span class="hljs-number">7</span>);

    <span class="hljs-keyword">return</span> {
        <span class="hljs-function"><span class="hljs-title">pre</span>(<span class="hljs-params">file</span>)</span> {
            file.set(<span class="hljs-string">'errors'</span>, []);
        },
        <span class="hljs-attr">visitor</span>: {
            <span class="hljs-function"><span class="hljs-title">AssignmentExpression</span>(<span class="hljs-params">path, state</span>)</span> {
                <span class="hljs-keyword">const</span> errors = state.file.get(<span class="hljs-string">'errors'</span>);
 
                <span class="hljs-keyword">const</span> assignTarget = path.get(<span class="hljs-string">'left'</span>).toString()\uFF1B
                <span class="hljs-keyword">const</span> binding = path.scope.getBinding(assignTarget);
                <span class="hljs-keyword">if</span> (binding) {
                    <span class="hljs-comment">// \u67E5\u627E\u5230\u4E86\u5DE6\u503C\u5BF9\u5E94\u7684\u58F0\u660E\uFF0C\u662F\u51FD\u6570\u58F0\u660E</span>
                    <span class="hljs-keyword">if</span> (binding.path.isFunctionDeclaration() || binding.path.isFunctionExpression()) {
                        <span class="hljs-keyword">const</span> tmp = <span class="hljs-built_in">Error</span>.stackTraceLimit;
                        <span class="hljs-built_in">Error</span>.stackTraceLimit = <span class="hljs-number">0</span>;
                        errors.push(path.buildCodeFrameError(<span class="hljs-string">'can not reassign to function'</span>, <span class="hljs-built_in">Error</span>));
                        <span class="hljs-built_in">Error</span>.stackTraceLimit = tmp;
                    }
                }
            }
        },
        <span class="hljs-function"><span class="hljs-title">post</span>(<span class="hljs-params">file</span>)</span> {
            <span class="hljs-built_in">console</span>.log(file.get(<span class="hljs-string">'errors'</span>));
        }
    }
});
</code></pre>
<p>\u5F53\u8F93\u5165\u4E3A\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{
    foo = bar;
}

<span class="hljs-keyword">var</span> a = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">hello</span>(<span class="hljs-params"></span>) </span>{
    hello = <span class="hljs-number">123</span>;
};
</code></pre>
<p>\u6548\u679C\u5982\u4E0B\uFF1A</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/01b397915b9341ac9326556c893e0bf8~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u4F1A\u5BF9\u8D4B\u503C\u7ED9\u51FD\u6570\u7684\u8BED\u53E5\u62A5\u9519\uFF0C\u800C\u5176\u4ED6\u8D4B\u503C\u8BED\u53E5\u4E0D\u4F1A\u62A5\u9519\u3002</p>
<h2 data-id="heading-7">\u68C0\u67E5\u51FA\u6CA1\u6709\u9519\u8BEF\u4F46\u4E0D\u7B26\u5408\u89C4\u8303\u7684\u4EE3\u7801</h2>
<p>\u9700\u8981 lint \u7684\u53EF\u80FD\u662F\u4EE3\u7801\u7684\u9519\u8BEF\uFF0C\u4F46\u6709\u7684\u65F6\u5019\u4EE3\u7801\u6CA1\u6709\u9519\u8BEF\uFF0C\u53EA\u662F\u4E0D\u7B26\u5408\u6211\u4EEC\u7684\u89C4\u8303\uFF0C\u8FD9\u79CD\u4E5F\u8981\u68C0\u67E5\u3002\u6BD4\u5982 == \u548C === \u7684\u4F7F\u7528\u3002</p>
<h3 data-id="heading-8">\u7528 === \u4EE3\u66FF ==</h3>
<p>== \u5219\u53EA\u6BD4\u8F83\u503C\uFF0C\u5982\u679C\u7C7B\u578B\u4E0D\u4E00\u6837\u4F1A\u5C1D\u8BD5\u81EA\u52A8\u7C7B\u578B\u8F6C\u6362\uFF0C \u800C === \u8FD0\u7B97\u7B26\u4F1A\u540C\u65F6\u6BD4\u8F83\u7C7B\u578B\u548C\u503C\uFF0C\u4E0D\u4F1A\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-string">''</span> == <span class="hljs-literal">false</span> <span class="hljs-comment">// true</span>
<span class="hljs-string">''</span> === <span class="hljs-literal">false</span> <span class="hljs-comment">// false</span>
</code></pre>
<p>\u663E\u7136\uFF0C\u7528 === \u8FD0\u7B97\u7B26\u66F4\u5B89\u5168\u4E00\u4E9B\uFF0C\u6240\u4EE5\u6211\u4EEC\u4F1A\u628A\u5B83\u4F5C\u4E3A\u4EE3\u7801\u89C4\u8303\uFF0Clint \u7684\u65F6\u5019\u505A\u68C0\u67E5\u3002</p>
<h3 data-id="heading-9">\u601D\u8DEF\u5206\u6790</h3>
<p>\u5904\u7406\u7684\u76EE\u6807\u662F BinaryExpression\uFF0C\u5F53 operator \u4E3A == \u6216\u8005 != \u7684\u65F6\u5019\uFF0C\u5C31\u8FDB\u884C\u62A5\u9519\u5E76\u81EA\u52A8\u4FEE\u590D\uFF08\u4FEE\u6539 operator \u7684\u503C\u4E3A === \u6216 !==\uFF09\u3002\u4F46\u8981\u6392\u9664\u4E00\u79CD\u60C5\u51B5\uFF1A\u5DE6\u503C\u548C\u53F3\u503C\u7C7B\u578B\u90FD\u4E3A Literal\uFF08\u5B57\u9762\u91CF\uFF09\u4E14\u503C\u7684\u7C7B\u578B\u4E5F\u4E00\u6837\uFF0C\u6BD4\u5982 <code>'guang' == 'ssh'</code>\uFF0C\u4E24\u8FB9\u90FD\u662F\u5B57\u9762\u91CF\u7C7B\u578B\uFF0C\u800C\u4E14\u7C7B\u578B\u662F\u4E00\u6837\u7684\uFF0C\u5C31\u6CA1\u5FC5\u8981\u8F6C\u6210 === \u4E86\u3002</p>
<h3 data-id="heading-10">\u4EE3\u7801\u5B9E\u73B0</h3>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> { declare } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'@babel/helper-plugin-utils'</span>);

<span class="hljs-keyword">const</span> forDirectionLint = declare(<span class="hljs-function">(<span class="hljs-params">api, options, dirname</span>) =&gt;</span> {
    api.assertVersion(<span class="hljs-number">7</span>);

    <span class="hljs-keyword">return</span> {
        <span class="hljs-function"><span class="hljs-title">pre</span>(<span class="hljs-params">file</span>)</span> {
            file.set(<span class="hljs-string">'errors'</span>, []);
        },
        <span class="hljs-attr">visitor</span>: {
            <span class="hljs-function"><span class="hljs-title">BinaryExpression</span>(<span class="hljs-params">path, state</span>)</span> {
                <span class="hljs-keyword">const</span> errors = state.file.get(<span class="hljs-string">'errors'</span>);
                <span class="hljs-keyword">if</span> ([<span class="hljs-string">'=='</span>, <span class="hljs-string">'!='</span>].includes(path.node.operator)) {
                    <span class="hljs-keyword">const</span> left = path.get(<span class="hljs-string">'left'</span>);
                    <span class="hljs-keyword">const</span> right = path.get(<span class="hljs-string">'right'</span>);
                    <span class="hljs-comment">// \u5982\u679C\u4E24\u8FB9\u90FD\u662F\u5B57\u9762\u91CF\u4E14\u503C\u7684\u7C7B\u578B\u4E00\u6837</span>
                    <span class="hljs-keyword">if</span> (!(left.isLiteral() &amp;&amp; right.isLiteral() 
                    &amp;&amp; <span class="hljs-keyword">typeof</span> left.node.value === <span class="hljs-keyword">typeof</span> right.node.value)) {
                        <span class="hljs-keyword">const</span> tmp = <span class="hljs-built_in">Error</span>.stackTraceLimit;
                        <span class="hljs-built_in">Error</span>.stackTraceLimit = <span class="hljs-number">0</span>;
                        errors.push(path.buildCodeFrameError(<span class="hljs-string">\`please replace <span class="hljs-subst">\${path.node.operator}</span> with <span class="hljs-subst">\${path.node.operator + <span class="hljs-string">'='</span>}</span>\`</span>, <span class="hljs-built_in">Error</span>));
                        <span class="hljs-built_in">Error</span>.stackTraceLimit = tmp;
                        <span class="hljs-comment">// \u81EA\u52A8\u4FEE\u590D</span>
                        <span class="hljs-keyword">if</span> (state.opts.fix) {
                            path.node.operator = path.node.operator + <span class="hljs-string">'='</span>;
                        }
                    }
                }
            }
        },
        <span class="hljs-function"><span class="hljs-title">post</span>(<span class="hljs-params">file</span>)</span> {
            <span class="hljs-built_in">console</span>.log(file.get(<span class="hljs-string">'errors'</span>));
        }
    }
});
</code></pre>
<p>\u8FD9\u91CC\u7279\u6B8A\u7684\u5730\u65B9\u5C31\u662F\u652F\u6301\u81EA\u52A8 fix\u3002eslint \u53EF\u4EE5\u901A\u8FC7 --fix \u6765\u81EA\u52A8\u4FEE\u590D\u4E00\u4E9B rule \u7684\u62A5\u9519\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u505A\u5230\uFF0C\u56E0\u4E3A\u6211\u4EEC\u77E5\u9053\u600E\u4E48\u4FEE\u6539\u628A AST \u4FEE\u6539\u6210\u6B63\u786E\u7684\uFF0C\u5F53\u7528\u6237\u6307\u5B9A\u4E86 fix \u53C2\u6570\u7684\u65F6\u5019\uFF0C\u5C31\u53EF\u4EE5\u81EA\u52A8\u8FDB\u884C\u4FEE\u590D\u3002</p>
<p>\u6211\u4EEC\u6765\u6D4B\u8BD5\u4E00\u4E0B\u8FD9\u4E2A\u63D2\u4EF6\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> { transformFromAstSync } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'@babel/core'</span>);
<span class="hljs-keyword">const</span>  parser = <span class="hljs-built_in">require</span>(<span class="hljs-string">'@babel/parser'</span>);
<span class="hljs-keyword">const</span> eqLintPlugin = <span class="hljs-built_in">require</span>(<span class="hljs-string">'./plugin/eq-lint'</span>);

<span class="hljs-keyword">const</span> sourceCode = <span class="hljs-string">\`
a == b
foo == true
bananas != 1
value == undefined
typeof foo == 'undefined'
'hello' != 'world'
0 == 0
true == true
\`</span>;

<span class="hljs-keyword">const</span> ast = parser.parse(sourceCode, {
    <span class="hljs-attr">sourceType</span>: <span class="hljs-string">'unambiguous'</span>
});

<span class="hljs-keyword">const</span> { code } = transformFromAstSync(ast, sourceCode, {
    <span class="hljs-attr">plugins</span>: [[eqLintPlugin, {
        <span class="hljs-attr">fix</span>: <span class="hljs-literal">true</span>
    }]],
});

<span class="hljs-built_in">console</span>.log(code);
</code></pre>
<p>\u7ED3\u679C\u5982\u4E0B\uFF1A</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b858df6267ce4a5da8e9f188f0ab1f3d~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u53EF\u4EE5\u770B\u5230\uFF0C\u6B63\u786E\u8BC6\u522B\u51FA\u4E86 == \u548C != \u7684 BinaryExprssion\uFF0C\u5E76\u4E14\u53EA\u5BF9\u9700\u8981\u8F6C\u6362\u7684\u8FDB\u884C\u4E86\u81EA\u52A8\u7684\u4FEE\u590D\u3002</p>
<h2 data-id="heading-11">\u68C0\u67E5\u51FA\u683C\u5F0F\u4E0D\u5BF9\u7684\u4EE3\u7801</h2>
<p>\u4E0A\u9762\u7684\u4E24\u79CD\u60C5\u51B5\u90FD\u662F\u4EE3\u7801\u7ED3\u6784\u6709\u9519\u8BEF\uFF0C\u800C\u5BF9\u4E8E\u4EE3\u7801\u683C\u5F0F\u7684\u9519\u8BEF\u6211\u4EEC\u540C\u6837\u9700\u8981 lint\u3002</p>
<p>\u6BD4\u5982\u4E0B\u9762\u4E00\u6BB5\u4EE3\u7801</p>
<pre><code class="">function foo() {return true;}
</code></pre>
<p>\u5728\u51FD\u6570\u4F53\u7684\u5927\u62EC\u53F7\u5185\u4FA7\u6CA1\u6709\u7A7A\u683C\uFF0C\u89C4\u8303\u7684\u683C\u5F0F\u5E94\u8BE5\u662F\u8981\u6709\u7A7A\u683C\u3002</p>
<pre><code class="">function foo() { return true; }
</code></pre>
<p>\u6211\u4EEC\u600E\u4E48\u6821\u9A8C\u8FD9\u79CD\u9519\u8BEF\u5462\uFF1F</p>
<p>\u6211\u4EEC\u53BB\u770B\u770B eslint \u662F\u600E\u4E48\u505A\u7684\uFF1A</p>
<ol>
<li>\u62FF\u5230\u51FD\u6570\u4F53\u7684\u5DE6\u62EC\u53F7\u7684 token</li>
<li>\u62FF\u5230\u5DE6\u62EC\u53F7\u540E\u7684\u7B2C\u4E00\u4E2A token</li>
<li>\u5BF9\u6BD4\u4E0B\u4E24\u4E2A token \u7684\u4F4D\u7F6E\uFF0C\u5982\u679C\u4E0D\u5728\u540C\u4E00\u884C\uFF0C\u6216\u8005\u4E4B\u95F4\u6709\u7A7A\u683C\u5C31\u662F\u7B26\u5408\u89C4\u8303\u7684\u3002</li>
</ol>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d41609875fa84747bf3021477cddcd80~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/21ede0396a244dc5bfc0f78442215817~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png" loading="lazy" class="medium-zoom-image"></p>
<p>\u4F46\u662F\uFF0Cbabel \u5E76\u6CA1\u6709\u83B7\u53D6 AST \u5173\u8054\u7684 token \u7684 api\uFF0C\u53EA\u80FD\u83B7\u53D6\u5173\u8054\u7684 comments\uFF0C\u901A\u8FC7 leadingComments\u3001tailingComments\u3001innerComments \u8FD9\u4E09\u4E2A\u5C5E\u6027\u3002</p>
<p>\u6240\u4EE5\uFF0Cbabel \u65E0\u6CD5\u505A\u8FD9\u79CD\u6821\u9A8C\u3002\u6211\u4EEC\u5728 js parser \u7684\u5386\u53F2\u90A3\u4E00\u8282\u8BB2\u8FC7 eslint \u6709\u81EA\u5DF1\u7684 parser\uFF1Aespree\uFF0Cespree \u5C31\u505A\u4E86 AST \u548C\u5BF9\u5E94\u7684 comments\u3001token \u7684\u5173\u8054\uFF0C\u5B83\u505A\u4EE3\u7801\u683C\u5F0F\u7684\u68C0\u67E5\u9700\u8981\u8FD9\u6837\u7684\u80FD\u529B\uFF0C\u800C babel \u53EA\u63D0\u4F9B\u4E86\u5173\u8054 comments \u7684\u80FD\u529B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 path.addComment('leading', '@__PURE__', false) \u6765\u5728\u8282\u70B9\u524D\u6DFB\u52A0\u4E00\u4E2A\u5757\u6CE8\u91CA\uFF0C\u56E0\u4E3A babel \u8F6C\u8BD1\u7684\u7ED3\u679C\u53EF\u80FD\u8FD8\u8981\u4EA4\u7ED9 terser \u6765\u538B\u7F29\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD9\u6837\u7684\u65B9\u5F0F\u6765\u6807\u8BC6\u4E00\u4E2A\u51FD\u6570\u662F\u65E0\u526F\u4F5C\u7528\u7684\uFF0C\u5982\u679C\u6CA1\u6709\u7528\u5230\u5C31\u53EF\u4EE5\u653E\u5FC3\u7684\u5220\u9664\u3002</p>
<p>babel \u63D2\u4EF6\u548C eslint \u63D2\u4EF6\u7684\u4E0D\u540C\u53EF\u4EE5\u770B\u8FD9\u7BC7\u6587\u7AE0\uFF1A<a href="https://juejin.cn/post/7003204313292128264" target="_blank" title="https://juejin.cn/post/7003204313292128264">\u6DF1\u5165\u5BF9\u6BD4 eslint \u63D2\u4EF6 \u548C babel \u63D2\u4EF6\u7684\u5F02\u540C\u70B9</a></p>
<h2 data-id="heading-12">\u603B\u7ED3</h2>
<p>\u8FD9\u4E00\u8282\uFF0C\u6211\u4EEC\u4ECE lint \u8FD9\u4E2A\u5386\u53F2\u60A0\u4E45\u7684 c \u8BED\u8A00\u7684\u9759\u6001\u68C0\u67E5\u5DE5\u5177\u804A\u8D77\uFF0C\u4ECB\u7ECD\u4E86 eslint\u3001stylelint\uFF0C\u5B83\u4EEC\u90FD\u662F\u901A\u8FC7\u9759\u6001\u5206\u6790\u7684\u65B9\u5F0F\u53D1\u73B0\u4EE3\u7801\u4E2D\u7684\u9519\u8BEF\uFF0C\u5F53\u7136\u8981 lint \u7684\u9664\u4E86\u9519\u8BEF\uFF0C\u8FD8\u6709\u89C4\u8303\u548C\u683C\u5F0F\u3002</p>
<p>\u540E\u9762\u6211\u4EEC\u5206\u522B\u5B9E\u73B0\u4E86\u9519\u8BEF\u7684 for \u8FED\u4EE3\u65B9\u5411\u3001\u51FD\u6570\u91CD\u65B0\u8D4B\u503C\u3001\u66FF\u6362 == \u4E3A === \u7B49 lint\uFF0C\u5E76\u652F\u6301\u4E86 fix\u3002 \u4E4B\u540E\u5206\u6790\u4E86\u4E3A\u5565 babel \u505A\u4E0D\u5230\u50CF eslint \u4E00\u6837\u7684\u4EE3\u7801\u683C\u5F0F\u7684\u6821\u9A8C\u548C\u4FEE\u590D\uFF0C\u4E86\u89E3\u4E86 babel parser\uFF08babylon\uFF09\u548C espree \u7684\u533A\u522B\u3002</p>
<p>\u5B66\u5B8C\u8FD9\u4E00\u8282\uFF0C\u6211\u4EEC\u5BF9 babel \u63D2\u4EF6\u7684\u4E66\u5199\uFF0Cbabel \u7684 api \u6709\u66F4\u8FDB\u4E00\u6B65\u7684\u638C\u63E1\u3002\u5E76\u4E14\u7406\u89E3 lint \u662F\u600E\u4E48\u5B9E\u73B0\u7684\uFF0C\u4EE5\u540E\u5982\u679C\u53BB\u5199 eslint \u63D2\u4EF6\u5927\u6982\u662F\u4EC0\u4E48\u6837\u7684\u601D\u8DEF\u3002</p>
<p>\uFF08\u4EE3\u7801\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FQuarkGluonPlasma%2Fbabel-plugin-exercize" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/QuarkGluonPlasma/babel-plugin-exercize" ref="nofollow noopener noreferrer">\u8FD9\u91CC</a>\uFF0C\u5EFA\u8BAE git clone \u4E0B\u6765\u901A\u8FC7 node \u8DD1\u4E00\u4E0B\uFF09</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
