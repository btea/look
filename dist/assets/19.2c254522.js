var s={name:"19\u3001\u5B9E\u6218\u6848\u4F8B_ type checker",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>\u6211\u4EEC\u77E5\u9053\uFF0Cbabel \u80FD\u591F\u89E3\u6790 typescript \u8BED\u6CD5\uFF0C\u90A3\u4E48\u80FD\u4E0D\u80FD\u57FA\u4E8E babel \u5B9E\u73B0\u7C7B\u578B\u68C0\u67E5\u5462\uFF1F</p>
<p>\u6211\u4EEC\u7ECF\u5E38\u7528 tsc \u6765\u505A\u7C7B\u578B\u68C0\u67E5\uFF0C\u6709\u6CA1\u6709\u60F3\u8FC7\uFF0C\u7C7B\u578B\u68C0\u67E5\u5177\u4F53\u505A\u4E86\u4EC0\u4E48\uFF1F</p>
<p>\u8FD9\u4E00\u8282\uFF0C\u6211\u4EEC\u6765\u5B66\u4E60\u4E00\u4E0B\u7C7B\u578B\u3001\u7C7B\u578B\u68C0\u67E5\u3001\u600E\u4E48\u5B9E\u73B0 ts \u7684\u7C7B\u578B\u68C0\u67E5\u3002</p>
<h2 data-id="heading-0">\u4EC0\u4E48\u662F\u7C7B\u578B</h2>
<p>\u7C7B\u578B\u4EE3\u8868\u4E86\u53D8\u91CF\u5B58\u50A8\u7684\u5185\u5BB9\uFF0C\u4E5F\u5C31\u662F\u89C4\u5B9A\u4E86\u8FD9\u5757\u5185\u5BB9\u5360\u636E\u591A\u5927\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u5BF9\u5B83\u505A\u4EC0\u4E48\u64CD\u4F5C\u3002\u6BD4\u5982 number \u548C boolean \u5C31\u4F1A\u5206\u914D\u4E0D\u540C\u5B57\u8282\u6570\u7684\u5185\u5B58\uFF0CDate \u548C String \u53EF\u4EE5\u8C03\u7528\u7684\u65B9\u6CD5\u4E5F\u4E0D\u540C\u3002\u8FD9\u5C31\u662F\u7C7B\u578B\u7684\u4F5C\u7528\u3002\u5B83\u4EE3\u8868\u4E86\u4E00\u79CD\u53EF\u80FD\u6027\uFF0C\u4F60\u53EF\u4EE5\u5728\u8FD9\u5757\u5185\u5B58\u653E\u591A\u5C11\u5185\u5BB9\uFF0C\u53EF\u80FD\u5BF9\u5B83\u8FDB\u884C\u4EC0\u4E48\u64CD\u4F5C\u3002</p>
<p>\u7C7B\u578B\u5206\u4E3A<code>\u52A8\u6001\u7C7B\u578B</code>\u548C<code>\u9759\u6001\u7C7B\u578B</code>\u3002</p>
<p><code>\u52A8\u6001\u7C7B\u578B</code>\u662F\u6307\u7C7B\u578B\u662F\u5728\u8FD0\u884C\u65F6\u624D\u786E\u5B9A\u7684\uFF0C\u800C<code>\u9759\u6001\u7C7B\u578B</code>\u662F\u6307\u7F16\u8BD1\u671F\u95F4\u5C31\u77E5\u9053\u4E86\u53D8\u91CF\u7684\u7C7B\u578B\u4FE1\u606F\u3002\u6709\u4E86\u7C7B\u578B\u4FE1\u606F\u81EA\u7136\u5C31\u77E5\u9053\u4E86\u5BF9\u5B83\u800C\u8A00\u4EC0\u4E48\u64CD\u4F5C\u662F\u5408\u6CD5\u7684\uFF0C\u4EC0\u4E48\u64CD\u4F5C\u662F\u4E0D\u5408\u6CD5\u7684\uFF0C\u4EC0\u4E48\u53D8\u91CF\u80FD\u591F\u8D4B\u503C\u7ED9\u4ED6\u3002</p>
<p><code>\u9759\u6001\u7C7B\u578B</code>\u4F1A\u5728\u4EE3\u7801\u4E2D\u4FDD\u7559\u7C7B\u578B\u4FE1\u606F\uFF0C\u8FD9\u4E2A\u7C7B\u578B\u4FE1\u606F\u53EF\u80FD\u662F\u663E\u5F0F\u58F0\u660E\u7684\uFF0C\u4E5F\u53EF\u80FD\u662F\u81EA\u52A8\u63A8\u5BFC\u51FA\u6765\u7684\u3002\u60F3\u505A\u4E00\u4E2A\u5927\u7684\u9879\u76EE\uFF0C\u6CA1\u6709<code>\u9759\u6001\u7C7B\u578B</code>\u6765\u7EA6\u675F\u548C\u63D0\u524D\u68C0\u67E5\u4EE3\u7801\u7684\u8BDD\uFF0C\u592A\u5BB9\u6613\u51FA bug \u4E86\uFF0C\u4F1A\u5F88\u96BE\u7EF4\u62A4\u3002\u8FD9\u4E5F\u662F\u968F\u7740\u524D\u7AEF\u9879\u76EE\u9010\u6E10\u53D8\u5F97\u590D\u6742\uFF0C\u51FA\u73B0\u4E86 typescript \u4EE5\u53CA typescript \u8D8A\u6765\u8D8A\u706B\u7684\u539F\u56E0\u3002</p>
<p>typescript \u5C31\u662F\u7ED9 javascript \u589E\u52A0\u4E86<code>\u9759\u6001\u7C7B\u578B</code>\u7684\u8BED\u6CD5\u548C\u76F8\u5E94\u7684\u8BED\u4E49\u3002</p>
<h2 data-id="heading-1">\u5982\u4F55\u68C0\u67E5\u7C7B\u578B</h2>
<p>\u6211\u4EEC\u77E5\u9053\u4E86\u4EC0\u4E48\u662F\u7C7B\u578B\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u8981\u505A\u9759\u6001\u7684\u7C7B\u578B\u68C0\u67E5\uFF0C\u90A3\u4E48\u600E\u4E48\u68C0\u67E5\u5462\uFF1F</p>
<p>\u68C0\u67E5\u7C7B\u578B\u5C31\u662F\u68C0\u67E5\u53D8\u91CF\u7684\u5185\u5BB9\uFF0C\u800C\u7406\u89E3\u4EE3\u7801\u7684\u8BDD\u9700\u8981\u628A\u4EE3\u7801 parse \u6210 AST\uFF0C\u6240\u4EE5\u7C7B\u578B\u68C0\u67E5\u4E5F\u5C31\u53D8\u6210\u4E86\u5BF9 AST \u7ED3\u6784\u7684\u68C0\u67E5\u3002</p>
<p>\u6BD4\u5982\u4E00\u4E2A\u53D8\u91CF\u58F0\u660E\u4E3A\u4E86 number\uFF0C\u90A3\u4E48\u7ED9\u5B83\u8D4B\u503C\u7684\u662F\u4E00\u4E2A string \u5C31\u662F\u6709\u7C7B\u578B\u9519\u8BEF\u3002</p>
<p>\u518D\u590D\u6742\u4E00\u70B9\uFF0C\u5982\u679C\u7C7B\u578B\u6709\u6CDB\u578B\uFF0C\u4E5F\u5C31\u662F\u6709\u7C7B\u578B\u53C2\u6570\uFF0C\u90A3\u4E48\u9700\u8981\u4F20\u5165\u5177\u4F53\u7684\u53C2\u6570\u6765\u786E\u5B9A\u7C7B\u578B\uFF0C\u786E\u5B9A\u4E86\u7C7B\u578B\u4E4B\u540E\u518D\u53BB\u548C\u5B9E\u9645\u7684 AST \u5BF9\u6BD4\u3002</p>
<p>typescript \u8FD8\u652F\u6301\u9AD8\u7EA7\u7C7B\u578B\uFF0C\u4E5F\u5C31\u662F\u7C7B\u578B\u53EF\u4EE5\u505A\u5404\u79CD\u8FD0\u7B97\uFF0C\u8FD9\u79CD\u5C31\u9700\u8981\u4F20\u5165\u7C7B\u578B\u53C2\u6570\u6C42\u51FA\u5177\u4F53\u7684\u7C7B\u578B\u518D\u53BB\u548C AST \u5BF9\u6BD4\u3002</p>
<p>\u6211\u4EEC\u6765\u5199\u4EE3\u7801\u5B9E\u73B0\u4E00\u4E0B\uFF1A</p>
<h2 data-id="heading-2">\u4EE3\u7801\u5B9E\u73B0</h2>
<h3 data-id="heading-3">\u5B9E\u73B0\u7B80\u5355\u7C7B\u578B\u7684\u7C7B\u578B\u68C0\u67E5</h3>
<h4 data-id="heading-4">\u8D4B\u503C\u8BED\u53E5\u7684\u7C7B\u578B\u68C0\u67E5</h4>
<p>\u6BD4\u5982\u8FD9\u6837\u4E00\u6BB5\u4EE3\u7801\uFF0C\u58F0\u660E\u7684\u503C\u662F\u4E00\u4E2A string\uFF0C\u4F46\u662F\u8D4B\u503C\u4E3A\u4E86 number\uFF0C\u660E\u663E\u662F\u6709\u7C7B\u578B\u9519\u8BEF\u7684\uFF0C\u6211\u4EEC\u600E\u4E48\u68C0\u67E5\u51FA\u5B83\u7684\u9519\u8BEF\u7684\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">let</span> name: string;

name = <span class="hljs-number">111</span>;
</code></pre>
<p>\u9996\u5148\u6211\u4EEC\u4F7F\u7528 babel \u628A\u8FD9\u6BB5\u4EE3\u7801 parse \u6210 AST\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span>  parser = <span class="hljs-built_in">require</span>(<span class="hljs-string">'@babel/parser'</span>);

<span class="hljs-keyword">const</span> sourceCode = <span class="hljs-string">\`
    let name: string;

    name = 111;
\`</span>;

<span class="hljs-keyword">const</span> ast = parser.parse(sourceCode, {
    <span class="hljs-attr">plugins</span>: [<span class="hljs-string">'typescript'</span>]
});
</code></pre>
<p>\u4F7F\u7528 babel parser \u6765 parse\uFF0C\u542F\u7528 typescript \u8BED\u6CD5\u63D2\u4EF6\u3002</p>
<p>\u53EF\u4EE5\u4F7F\u7528 <a href="https://link.juejin.cn?target=https%3A%2F%2Fastexplorer.net%2F" target="_blank" rel="nofollow noopener noreferrer" title="https://astexplorer.net/" ref="nofollow noopener noreferrer">astexplerer.net</a> \u6765\u67E5\u770B\u5B83\u7684 AST\uFF1A</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ae7a3f0df639438cb2aa5a6314bfb701~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png" loading="lazy" class="medium-zoom-image"></p>
<h5 data-id="heading-5">\u5B9E\u73B0\u7C7B\u578B\u68C0\u67E5</h5>
<p>\u6211\u4EEC\u9700\u8981\u68C0\u67E5\u7684\u662F\u8FD9\u4E2A\u8D4B\u503C\u8BED\u53E5 AssignmentExpression\uFF0C\u5DE6\u53F3\u4E24\u8FB9\u7684\u7C7B\u578B\u662F\u5426\u5339\u914D\u3002</p>
<p>\u53F3\u8FB9\u662F\u4E00\u4E2A\u6570\u5B57\u5B57\u9762\u91CF NumericLiteral\uFF0C\u5F88\u5BB9\u6613\u62FF\u5230\u7C7B\u578B\uFF0C\u800C\u5DE6\u8FB9\u5219\u662F\u4E00\u4E2A\u5F15\u7528\uFF0C\u8981\u4ECE\u4F5C\u7528\u57DF\u4E2D\u62FF\u5230\u5B83\u58F0\u660E\u7684\u7C7B\u578B\uFF0C\u4E4B\u540E\u624D\u80FD\u505A\u7C7B\u578B\u5BF9\u6BD4\u3002</p>
<p>babel \u63D0\u4F9B\u4E86 scope \u7684 api \u53EF\u4EE5\u7528\u4E8E\u67E5\u627E\u4F5C\u7528\u57DF\u4E2D\u7684\u7C7B\u578B\u58F0\u660E\uFF08binding\uFF09\uFF0C\u5E76\u4E14\u8FD8\u53EF\u4EE5\u901A\u8FC7 path.getTypeAnnotation \u83B7\u5F97\u58F0\u660E\u65F6\u7684\u7C7B\u578B\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"> <span class="hljs-function"><span class="hljs-title">AssignmentExpression</span>(<span class="hljs-params">path, state</span>)</span> {
    <span class="hljs-keyword">const</span> leftBinding = path.scope.getBinding(path.get(<span class="hljs-string">'left'</span>));
    <span class="hljs-keyword">const</span> leftType = leftBinding.path.get(<span class="hljs-string">'id'</span>).getTypeAnnotation();<span class="hljs-comment">// \u5DE6\u8FB9\u7684\u503C\u58F0\u660E\u7684\u7C7B\u578B</span>
}
</code></pre>
<p>\u8FD9\u4E2A\u8FD4\u56DE\u7684\u7C7B\u578B\u662F TSTypeAnnotation \u7684\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6211\u4EEC\u9700\u8981\u505A\u4E0B\u5904\u7406\uFF0C\u8F6C\u4E3A\u7C7B\u578B\u5B57\u7B26\u4E32\uFF0C\u4E5F\u5C31\u662F string\u3001number \u8FD9\u79CD\u3002</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/adaad85b1de341e58d719810894bfc5c~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u5C01\u88C5\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u4F20\u5165\u7C7B\u578B\u5BF9\u8C61\uFF0C\u8FD4\u56DE number\u3001string \u7B49\u7C7B\u578B\u5B57\u7B26\u4E32</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">resolveType</span>(<span class="hljs-params">targetType</span>) </span>{
    <span class="hljs-keyword">const</span> tsTypeAnnotationMap = {
        <span class="hljs-string">'TSStringKeyword'</span>: <span class="hljs-string">'string'</span>
    }
    <span class="hljs-keyword">switch</span> (targetType.type) {
        <span class="hljs-keyword">case</span> <span class="hljs-string">'TSTypeAnnotation'</span>:
            <span class="hljs-keyword">return</span> tsTypeAnnotationMap[targetType.typeAnnotation.type];
        <span class="hljs-keyword">case</span> <span class="hljs-string">'NumberTypeAnnotation'</span>: 
            <span class="hljs-keyword">return</span> <span class="hljs-string">'number'</span>;
    }
}
</code></pre>
<p>\u8FD9\u6837\u6211\u4EEC\u62FF\u5230\u4E86\u5DE6\u53F3\u4E24\u8FB9\u7684\u7C7B\u578B\uFF0C\u63A5\u4E0B\u6765\u5C31\u7B80\u5355\u4E86\uFF0C\u5BF9\u6BD4\u4E0B\u5C31\u77E5\u9053\u4E86\u7C7B\u578B\u662F\u5426\u5339\u914D\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-title">AssignmentExpression</span>(<span class="hljs-params">path, state</span>)</span> {
    <span class="hljs-keyword">const</span> rightType = resolveType(path.get(<span class="hljs-string">'right'</span>).getTypeAnnotation());
    <span class="hljs-keyword">const</span> leftBinding = path.scope.getBinding(path.get(<span class="hljs-string">'left'</span>));
    <span class="hljs-keyword">const</span> leftType = resolveType(leftBinding.path.get(<span class="hljs-string">'id'</span>).getTypeAnnotation());
    <span class="hljs-keyword">if</span> (leftType !== rightType ) {
        <span class="hljs-comment">// error: \u7C7B\u578B\u4E0D\u5339\u914D</span>
    }
}
</code></pre>
<h5 data-id="heading-6">\u9519\u8BEF\u6253\u5370\u4F18\u5316</h5>
<p>\u62A5\u9519\u4FE1\u606F\u600E\u4E48\u6253\u5370\u5462\uFF1F\u53EF\u4EE5\u4F7F\u7528 @babel/code-frame\uFF0C\u5B83\u652F\u6301\u6253\u5370\u67D0\u4E00\u7247\u6BB5\u7684\u9AD8\u4EAE\u4EE3\u7801\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript">path.get(<span class="hljs-string">'right'</span>).buildCodeFrameError(<span class="hljs-string">\`<span class="hljs-subst">\${rightType}</span> can not assign to <span class="hljs-subst">\${leftType}</span>\`</span>, <span class="hljs-built_in">Error</span>)
</code></pre>
<p>\u6548\u679C\u5982\u4E0B\uFF1A</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b7f4107058d4a67ae40b7d1f23aa3ea~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png" loading="lazy" class="medium-zoom-image"></p>
<p>\u8FD9\u4E2A\u9519\u8BEF\u5806\u6808\u4E5F\u592A\u4E11\u4E86\uFF0C\u6211\u4EEC\u628A\u5B83\u53BB\u6389\uFF0C\u8BBE\u7F6E Error.stackTraceLimit \u4E3A 0 \u5C31\u884C\u4E86</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-built_in">Error</span>.stackTraceLimit = <span class="hljs-number">0</span>;
path.get(<span class="hljs-string">'right'</span>).buildCodeFrameError(<span class="hljs-string">\`<span class="hljs-subst">\${rightType}</span> can not assign to <span class="hljs-subst">\${leftType}</span>\`</span>, <span class="hljs-built_in">Error</span>));
</code></pre>
<p>\u4F46\u662F\u8FD9\u91CC\u6539\u4E86\u4E4B\u540E\u8FD8\u8981\u6539\u56DE\u6765\uFF0C\u4E5F\u5C31\u662F:</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> tmp = <span class="hljs-built_in">Error</span>.stackTraceLimit;
<span class="hljs-built_in">Error</span>.stackTraceLimit = <span class="hljs-number">0</span>;
<span class="hljs-built_in">console</span>.log(path.get(<span class="hljs-string">'right'</span>).buildCodeFrameError(<span class="hljs-string">\`<span class="hljs-subst">\${rightType}</span> can not assign to <span class="hljs-subst">\${leftType}</span>\`</span>, <span class="hljs-built_in">Error</span>));
<span class="hljs-built_in">Error</span>.stackTraceLimit = tmp;
</code></pre>
<p>\u518D\u6765\u8DD1\u4E00\u4E0B\uFF1A</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e3e18ea42dd4f3aae0e13d65756430f~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u597D\u770B\u591A\u4E86\uFF01</p>
<h5 data-id="heading-7">\u9519\u8BEF\u6536\u96C6</h5>
<p>\u8FD8\u6709\u4E00\u4E2A\u95EE\u9898\uFF0C\u73B0\u5728\u662F\u9047\u5230\u7C7B\u578B\u9519\u8BEF\u5C31\u62A5\u9519\uFF0C\u4F46\u6211\u4EEC\u5E0C\u671B\u662F\u5728\u9047\u5230\u7C7B\u578B\u9519\u8BEF\u65F6\u6536\u96C6\u8D77\u6765\uFF0C\u6700\u540E\u7EDF\u4E00\u62A5\u9519\u3002</p>
<p>\u600E\u4E48\u5B9E\u73B0\u5462\uFF1F\u9519\u8BEF\u653E\u5728\u54EA\uFF1F</p>
<p>babel \u63D2\u4EF6\u4E2D\u53EF\u4EE5\u62FF\u5230 file \u5BF9\u8C61\uFF0C\u6709 set \u548C get \u65B9\u6CD5\u7528\u6765\u5B58\u53D6\u4E00\u4E9B\u5168\u5C40\u7684\u4FE1\u606F\u3002\u53EF\u4EE5\u5728\u63D2\u4EF6\u8C03\u7528\u524D\u540E\uFF0C\u4E5F\u5C31\u662F pre \u548C post \u9636\u6BB5\u62FF\u5230 file \u5BF9\u8C61\u3002</p>
<p>\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u505A\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-title">pre</span>(<span class="hljs-params">file</span>)</span> {
    file.set(<span class="hljs-string">'errors'</span>, []);
},
<span class="hljs-attr">visitor</span>: {
    <span class="hljs-function"><span class="hljs-title">AssignmentExpression</span>(<span class="hljs-params">path, state</span>)</span> {
        <span class="hljs-keyword">const</span> errors = state.file.get(<span class="hljs-string">'errors'</span>);

        <span class="hljs-keyword">const</span> rightType = resolveType(path.get(<span class="hljs-string">'right'</span>).getTypeAnnotation());
        <span class="hljs-keyword">const</span> leftBinding = path.scope.getBinding(path.get(<span class="hljs-string">'left'</span>));
        <span class="hljs-keyword">const</span> leftType = resolveType(leftBinding.path.get(<span class="hljs-string">'id'</span>).getTypeAnnotation());
        <span class="hljs-keyword">if</span> (leftType !== rightType ) {
            <span class="hljs-keyword">const</span> tmp = <span class="hljs-built_in">Error</span>.stackTraceLimit;
            <span class="hljs-built_in">Error</span>.stackTraceLimit = <span class="hljs-number">0</span>;
            errors.push(path.get(<span class="hljs-string">'right'</span>).buildCodeFrameError(<span class="hljs-string">\`<span class="hljs-subst">\${rightType}</span> can not assign to <span class="hljs-subst">\${leftType}</span>\`</span>, <span class="hljs-built_in">Error</span>));
            <span class="hljs-built_in">Error</span>.stackTraceLimit = tmp;
        } 
    }
},
<span class="hljs-function"><span class="hljs-title">post</span>(<span class="hljs-params">file</span>)</span> {
    <span class="hljs-built_in">console</span>.log(file.get(<span class="hljs-string">'errors'</span>));
}
</code></pre>
<p>\u8FD9\u6837\u5C31\u53EF\u4EE5\u505A\u5230\u8FC7\u7A0B\u4E2D\u6536\u96C6\u9519\u8BEF\uFF0C\u6700\u540E\u7EDF\u4E00\u6253\u5370\uFF1A</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/917ee6d6f4da4c739d4b7a0ffe742b26~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u8FD9\u6837\uFF0C\u6211\u4EEC\u5C31\u5B9E\u73B0\u4E86\u7B80\u5355\u7684\u8D4B\u503C\u8BED\u53E5\u7684\u7C7B\u578B\u68C0\u67E5\u3002</p>
<h4 data-id="heading-8">\u51FD\u6570\u8C03\u7528\u7684\u7C7B\u578B\u68C0\u67E5</h4>
<p>\u8D4B\u503C\u8BED\u53E5\u7684\u68C0\u67E5\u6BD4\u8F83\u7B80\u5355\uFF0C\u6211\u4EEC\u6765\u8FDB\u9636\u4E00\u4E0B\uFF0C\u5B9E\u73B0\u51FD\u6570\u8C03\u7528\u53C2\u6570\u7684\u7C7B\u578B\u68C0\u67E5</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params">a: number, b: number</span>): <span class="hljs-title">number</span></span>{
    <span class="hljs-keyword">return</span> a + b;
}
add(<span class="hljs-number">1</span>, <span class="hljs-string">'2'</span>);
</code></pre>
<p>\u8FD9\u91CC\u6211\u4EEC\u8981\u68C0\u67E5\u7684\u5C31\u662F\u51FD\u6570\u8C03\u7528\u8BED\u53E5 CallExpression \u7684\u53C2\u6570\u548C\u5B83\u58F0\u660E\u7684\u662F\u5426\u4E00\u81F4\u3002</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/38286e5076cf4609b0cb66bfa34b66ef~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>CallExpression \u6709 callee \u548C arguments \u4E24\u90E8\u5206\uFF0C\u6211\u4EEC\u9700\u8981\u6839\u636E callee \u4ECE\u4F5C\u7528\u57DF\u4E2D\u67E5\u627E\u51FD\u6570\u58F0\u660E\uFF0C\u7136\u540E\u518D\u628A arguments \u7684\u7C7B\u578B\u548C\u51FD\u6570\u58F0\u660E\u8BED\u53E5\u7684 params \u7684\u7C7B\u578B\u8FDB\u884C\u9010\u4E00\u5BF9\u6BD4\uFF0C\u8FD9\u6837\u5C31\u5B9E\u73B0\u4E86\u51FD\u6570\u8C03\u7528\u53C2\u6570\u7684\u7C7B\u578B\u68C0\u67E5\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-title">pre</span>(<span class="hljs-params">file</span>)</span> {
    file.set(<span class="hljs-string">'errors'</span>, []);
},
<span class="hljs-attr">visitor</span>: {
    <span class="hljs-function"><span class="hljs-title">CallExpression</span>(<span class="hljs-params">path, state</span>)</span> {
        <span class="hljs-keyword">const</span> errors = state.file.get(<span class="hljs-string">'errors'</span>);
        <span class="hljs-comment">// \u8C03\u7528\u53C2\u6570\u7684\u7C7B\u578B</span>
        <span class="hljs-keyword">const</span> argumentsTypes = path.get(<span class="hljs-string">'arguments'</span>).map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
            <span class="hljs-keyword">return</span> resolveType(item.getTypeAnnotation());
        });
        <span class="hljs-keyword">const</span> calleeName = path.get(<span class="hljs-string">'callee'</span>).toString();
        <span class="hljs-comment">// \u6839\u636E callee \u67E5\u627E\u51FD\u6570\u58F0\u660E</span>
        <span class="hljs-keyword">const</span> functionDeclarePath = path.scope.getBinding(calleeName).path;
        <span class="hljs-comment">// \u62FF\u5230\u58F0\u660E\u65F6\u53C2\u6570\u7684\u7C7B\u578B</span>
        <span class="hljs-keyword">const</span> declareParamsTypes = functionDeclarePath.get(<span class="hljs-string">'params'</span>).map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
            <span class="hljs-keyword">return</span> resolveType(item.getTypeAnnotation());
        })

        argumentsTypes.forEach(<span class="hljs-function">(<span class="hljs-params">item, index</span>) =&gt;</span> {
            <span class="hljs-keyword">if</span> (item !== declareParamsTypes[index]) {
                <span class="hljs-comment">// \u7C7B\u578B\u4E0D\u4E00\u81F4\uFF0C\u62A5\u9519</span>
            }
        });
    }
},
<span class="hljs-function"><span class="hljs-title">post</span>(<span class="hljs-params">file</span>)</span> {
    <span class="hljs-built_in">console</span>.log(file.get(<span class="hljs-string">'errors'</span>));
}
</code></pre>
<p>\u8FD0\u884C\u4E00\u4E0B\uFF0C\u6548\u679C\u5982\u4E0B\uFF1A</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/be28b2a2b76f4587ade7f6caf5d6144c~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u6211\u4EEC\u5B9E\u73B0\u4E86\u51FD\u6570\u8C03\u7528\u53C2\u6570\u7684\u7C7B\u578B\u68C0\u67E5\uFF01\u5B9E\u9645\u4E0A\u601D\u8DEF\u8FD8\u662F\u633A\u6E05\u6670\u7684\uFF0C\u68C0\u67E5\u522B\u7684 AST \u4E5F\u662F\u7C7B\u4F3C\u7684\u601D\u8DEF\u3002</p>
<h3 data-id="heading-9">\u5B9E\u73B0\u5E26\u6CDB\u578B\u7684\u7C7B\u578B\u68C0\u67E5</h3>
<p>\u6CDB\u578B\u662F\u4EC0\u4E48\uFF0C\u5176\u5B9E\u5C31\u662F\u7C7B\u578B\u53C2\u6570\uFF0C\u4F7F\u5F97\u7C7B\u578B\u53EF\u4EE5\u6839\u636E\u4F20\u5165\u7684\u53C2\u6570\u52A8\u6001\u786E\u5B9A\uFF0C\u7C7B\u578B\u5B9A\u4E49\u66F4\u52A0\u7075\u6D3B\u3002</p>
<p>\u6BD4\u5982\u8FD9\u6837\u4E00\u6BB5\u4EE3\u7801\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>&lt;<span class="hljs-title">T</span>&gt;(<span class="hljs-params">a: T, b: T</span>) </span>{
    <span class="hljs-keyword">return</span> a + b;
}
add&lt;number&gt;(<span class="hljs-number">1</span>, <span class="hljs-string">'2'</span>);
</code></pre>
<p>\u600E\u4E48\u505A\u7C7B\u578B\u68C0\u67E5\u5462\uFF1F</p>
<p>\u8FD9\u8FD8\u662F\u51FD\u6570\u8C03\u7528\u8BED\u53E5\u7684\u7C7B\u578B\u68C0\u67E5\uFF0C\u6211\u4EEC\u4E0A\u9762\u5B9E\u73B0\u8FC7\u4E86\uFF0C\u533A\u522B\u4E0D\u8FC7\u662F\u591A\u4E86\u4E2A\u53C2\u6570\uFF0C\u90A3\u4E48\u6211\u4EEC\u53D6\u51FA\u7C7B\u578B\u53C2\u6570\u6765\u4F20\u8FC7\u53BB\u5C31\u884C\u4E86\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-title">CallExpression</span>(<span class="hljs-params">path, state</span>)</span> {
    <span class="hljs-comment">// \u5148\u62FF\u5230\u7C7B\u578B\u53C2\u6570\u7684\u503C\uFF0C\u4E5F\u5C31\u662F\u771F\u5B9E\u7C7B\u578B</span>
    <span class="hljs-keyword">const</span> realTypes = path.node.typeParameters.params.map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
        <span class="hljs-keyword">return</span> resolveType(item);
    });
    <span class="hljs-comment">//\u5B9E\u53C2\u7684\u7C7B\u578B</span>
    <span class="hljs-keyword">const</span> argumentsTypes = path.get(<span class="hljs-string">'arguments'</span>).map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
        <span class="hljs-keyword">return</span> resolveType(item.getTypeAnnotation());
    });
    <span class="hljs-keyword">const</span> calleeName = path.get(<span class="hljs-string">'callee'</span>).toString();
    <span class="hljs-comment">// \u6839\u636E\u51FD\u6570\u540D\u67E5\u627E\u51FD\u6570\u58F0\u660E</span>
    <span class="hljs-keyword">const</span> functionDeclarePath = path.scope.getBinding(calleeName).path;
    <span class="hljs-keyword">const</span> realTypeMap = {};

  <span class="hljs-comment">// \u628A\u7C7B\u578B\u53C2\u6570\u7684\u503C\u8D4B\u503C\u7ED9\u51FD\u6570\u58F0\u660E\u8BED\u53E5\u7684\u6CDB\u578B\u53C2\u6570</span>
   functionDeclarePath.node.typeParameters.params.map(<span class="hljs-function">(<span class="hljs-params">item, index</span>) =&gt;</span> {
        realTypeMap[item.name] = realTypes[index];
    });
    <span class="hljs-keyword">const</span> declareParamsTypes = functionDeclarePath.get(<span class="hljs-string">'params'</span>).map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
        <span class="hljs-keyword">return</span> resolveType(item.getTypeAnnotation(), realTypeMap);
    })
    <span class="hljs-comment">// \u505A\u7C7B\u578B\u68C0\u67E5\u7684\u65F6\u5019\u53D6\u5177\u4F53\u7684\u7C7B\u578B\u6765\u5BF9\u6BD4</span>
    argumentsTypes.forEach(<span class="hljs-function">(<span class="hljs-params">item, index</span>) =&gt;</span> { 
        <span class="hljs-keyword">if</span> (item !== declareParamsTypes[index]) {
            <span class="hljs-comment">// \u62A5\u9519\uFF0C\u7C7B\u578B\u4E0D\u4E00\u81F4</span>
        }
    });
}
</code></pre>
<p>\u591A\u4E86\u4E00\u6B65\u786E\u5B9A\u6CDB\u578B\u53C2\u6570\u7684\u5177\u4F53\u7C7B\u578B\u7684\u8FC7\u7A0B\u3002</p>
<p>\u6267\u884C\u770B\u4E0B\u6548\u679C\uFF1A</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4126833b7eed45eca7b461179aa4ecfb~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u6211\u4EEC\u6210\u529F\u652F\u6301\u4E86\u5E26\u6CDB\u578B\u7684\u51FD\u6570\u8C03\u7528\u8BED\u53E5\u7684\u7C7B\u578B\u68C0\u67E5\uFF01</p>
<h3 data-id="heading-10">\u5B9E\u73B0\u5E26\u9AD8\u7EA7\u7C7B\u578B\u7684\u51FD\u6570\u8C03\u7528\u8BED\u53E5\u7684\u7C7B\u578B\u68C0\u67E5</h3>
<p>typescript \u652F\u6301\u9AD8\u7EA7\u7C7B\u578B\uFF0C\u4E5F\u5C31\u662F\u652F\u6301\u5BF9\u7C7B\u578B\u53C2\u6570\u505A\u5404\u79CD\u8FD0\u7B97\u7136\u540E\u8FD4\u56DE\u6700\u7EC8\u7C7B\u578B</p>
<pre><code class="hljs language-javascript" lang="javascript">type Res&lt;Param&gt; = Param <span class="hljs-keyword">extends</span> <span class="hljs-number">1</span> ? number : string;
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>&lt;<span class="hljs-title">T</span>&gt;(<span class="hljs-params">a: T, b: T</span>) </span>{
    <span class="hljs-keyword">return</span> a + b;
}
add&lt;Res&lt;<span class="hljs-number">1</span>&gt;&gt;(<span class="hljs-number">1</span>, <span class="hljs-string">'2'</span>);
</code></pre>
<p>\u6BD4\u5982\u8FD9\u6BB5\u4EE3\u7801\u4E2D\uFF0CRes \u5C31\u662F\u4E00\u4E2A\u9AD8\u7EA7\u7C7B\u578B\uFF0C\u5BF9\u4F20\u5165\u7684\u7C7B\u578B\u53C2\u6570 Param \u8FDB\u884C\u5904\u7406\u4E4B\u540E\u8FD4\u56DE\u65B0\u7C7B\u578B\u3002</p>
<p>\u8FD9\u4E2A\u51FD\u6570\u8C03\u7528\u8BED\u53E5\u7684\u7C7B\u578B\u68C0\u67E5\uFF0C\u6BD4\u6CDB\u578B\u53C2\u6570\u4F20\u5177\u4F53\u7684\u7C7B\u578B\u53C8\u590D\u6742\u4E86\u4E00\u4E9B\uFF0C\u9700\u8981\u5148\u6C42\u51FA\u5177\u4F53\u7684\u7C7B\u578B\uFF0C\u7136\u540E\u518D\u4F20\u5165\u53C2\u6570\uFF0C\u4E4B\u540E\u518D\u53BB\u5BF9\u6BD4\u53C2\u6570\u7684\u7C7B\u578B\u3002</p>
<p>\u90A3\u4E48\u8FD9\u4E2A Res \u7684\u9AD8\u7EA7\u7C7B\u578B\u600E\u4E48\u6C42\u503C\u5462\uFF1F</p>
<p>\u6211\u4EEC\u6765\u770B\u4E00\u4E0B\u8FD9\u4E2A Res \u7C7B\u578B\u7684 AST\uFF1A</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d715c4b197474eea9847eae1720a6965~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png" loading="lazy" class="medium-zoom-image"></p>
<p>\u5B83\u6709\u7C7B\u578B\u53C2\u6570\u90E8\u5206\uFF08typeParameters\uFF09\uFF0C\u548C\u5177\u4F53\u7684\u7C7B\u578B\u8BA1\u7B97\u903B\u8F91\u90E8\u5206\uFF08typeAnnotation\uFF09\uFF0C\u53F3\u8FB9\u7684 <code>Param extends 1 ? number : string;</code> \u662F\u4E00\u4E2A condition \u8BED\u53E5\uFF0C\u6709 Params \u548C 1 \u5206\u522B\u5BF9\u5E94 checkType\u3001extendsType\uFF0Cnumber \u548C string \u5219\u5206\u522B\u5BF9\u5E94 trueType\u3001falseType\u3002</p>
<p>\u6211\u4EEC\u53EA\u9700\u8981\u5BF9\u4F20\u5165\u7684 Param \u5224\u65AD\u4E0B\u662F\u5426\u662F 1\uFF0C\u5C31\u53EF\u4EE5\u6C42\u51FA\u5177\u4F53\u7684\u7C7B\u578B\u662F trueType \u8FD8\u662F falseType\u3002</p>
<p>\u5177\u4F53\u7C7B\u578B\u4F20\u53C2\u7684\u903B\u8F91\u548C\u4E0A\u9762\u4E00\u6837\uFF0C\u5C31\u4E0D\u8D58\u8FF0\u4E86\uFF0C\u6211\u4EEC\u770B\u4E00\u4E0B\u6839\u636E\u7C7B\u578B\u53C2\u6570\u6765\u503C\u7684\u903B\u8F91\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">typeEval</span>(<span class="hljs-params">node, params</span>) </span>{
    <span class="hljs-keyword">let</span> checkType;
    <span class="hljs-keyword">if</span>(node.checkType.type === <span class="hljs-string">'TSTypeReference'</span>) {
        checkType = params[node.checkType.typeName.name];<span class="hljs-comment">// \u5982\u679C\u53C2\u6570\u662F\u6CDB\u578B\uFF0C\u5219\u4ECE\u4F20\u5165\u7684\u53C2\u6570\u53D6\u503C</span>
    } <span class="hljs-keyword">else</span> {
        checkType = resolveType(node.checkType); <span class="hljs-comment">// \u5426\u5219\u76F4\u63A5\u53D6\u5B57\u9762\u91CF\u53C2\u6570</span>
    }
    <span class="hljs-keyword">const</span> extendsType = resolveType(node.extendsType);
    <span class="hljs-keyword">if</span> (checkType === extendsType || checkType <span class="hljs-keyword">instanceof</span> extendsType) { <span class="hljs-comment">// \u5982\u679C extends \u903B\u8F91\u6210\u7ACB</span>
        <span class="hljs-keyword">return</span> resolveType(node.trueType);
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">return</span> resolveType(node.falseType);
    }
}
</code></pre>
<p>\u8FD9\u6837\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u6C42\u51FA\u8FD9\u4E2A Res \u7684\u9AD8\u7EA7\u7C7B\u578B\u5F53\u4F20\u5165 Params \u4E3A 1 \u65F6\u6C42\u51FA\u7684\u6700\u7EC8\u7C7B\u578B\u3002</p>
<p>\u6709\u4E86\u6700\u7EC8\u7C7B\u578B\u4E4B\u540E\uFF0C\u5C31\u548C\u76F4\u63A5\u4F20\u5165\u5177\u4F53\u7C7B\u578B\u7684\u51FD\u6570\u8C03\u7528\u7684\u7C7B\u578B\u68C0\u67E5\u4E00\u6837\u4E86\u3002\uFF08\u4E0A\u9762\u6211\u4EEC\u5B9E\u73B0\u8FC7\uFF09</p>
<p>\u6267\u884C\u4E00\u4E0B\uFF0C\u6548\u679C\u5982\u4E0B\uFF1A</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/04e79c469f2147d7bf9ce40733ec08ba~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png" loading="lazy" class="medium-zoom-image"></p>
<p>\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\uFF08\u6709\u4E9B\u957F\uFF0C\u53EF\u4EE5\u5148\u8DF3\u8FC7\u5F80\u540E\u770B\uFF09\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> { declare } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'@babel/helper-plugin-utils'</span>);

<span class="hljs-comment">// \u89E3\u6790\u9AD8\u7EA7\u7C7B\u578B\u7684\u503C\uFF0C\u4F20\u5165\u6CDB\u578B\u53C2\u6570\u7684\u503C</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">typeEval</span>(<span class="hljs-params">node, params</span>) </span>{
    <span class="hljs-keyword">let</span> checkType;
    <span class="hljs-keyword">if</span>(node.checkType.type === <span class="hljs-string">'TSTypeReference'</span>) {
        checkType = params[node.checkType.typeName.name];
    } <span class="hljs-keyword">else</span> {
        checkType = resolveType(node.checkType);
    }
    <span class="hljs-keyword">const</span> extendsType = resolveType(node.extendsType);
    <span class="hljs-comment">// \u5982\u679C condition \u8868\u8FBE\u5F0F \u7684 check \u90E8\u5206\u4E3A true\uFF0C\u5219\u8FD4\u56DE trueType\uFF0C\u5426\u5219\u8FD4\u56DE falseType</span>
    <span class="hljs-keyword">if</span> (checkType === extendsType || checkType <span class="hljs-keyword">instanceof</span> extendsType) {
        <span class="hljs-keyword">return</span> resolveType(node.trueType);
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">return</span> resolveType(node.falseType);
    }
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">resolveType</span>(<span class="hljs-params">targetType, referenceTypesMap = {}, scope</span>) </span>{
    <span class="hljs-keyword">const</span> tsTypeAnnotationMap = {
        <span class="hljs-attr">TSStringKeyword</span>: <span class="hljs-string">'string'</span>,
        <span class="hljs-attr">TSNumberKeyword</span>: <span class="hljs-string">'number'</span>
    }
    <span class="hljs-keyword">switch</span> (targetType.type) {
        <span class="hljs-keyword">case</span> <span class="hljs-string">'TSTypeAnnotation'</span>:
            <span class="hljs-keyword">if</span> (targetType.typeAnnotation.type === <span class="hljs-string">'TSTypeReference'</span>) {
                <span class="hljs-keyword">return</span> referenceTypesMap[targetType.typeAnnotation.typeName.name]
            }
            <span class="hljs-keyword">return</span> tsTypeAnnotationMap[targetType.typeAnnotation.type];
        <span class="hljs-keyword">case</span> <span class="hljs-string">'NumberTypeAnnotation'</span>: 
            <span class="hljs-keyword">return</span> <span class="hljs-string">'number'</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">'StringTypeAnnotation'</span>:
            <span class="hljs-keyword">return</span> <span class="hljs-string">'string'</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">'TSNumberKeyword'</span>:
            <span class="hljs-keyword">return</span> <span class="hljs-string">'number'</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">'TSTypeReference'</span>:
            <span class="hljs-keyword">const</span> typeAlias = scope.getData(targetType.typeName.name);
            <span class="hljs-keyword">const</span> paramTypes = targetType.typeParameters.params.map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
                <span class="hljs-keyword">return</span> resolveType(item);
            });
            <span class="hljs-keyword">const</span> params = typeAlias.paramNames.reduce(<span class="hljs-function">(<span class="hljs-params">obj, name, index</span>) =&gt;</span> {
                obj[name] = paramTypes[index]; 
                <span class="hljs-keyword">return</span> obj;
            },{});
            <span class="hljs-keyword">return</span> typeEval(typeAlias.body, params);
        <span class="hljs-keyword">case</span> <span class="hljs-string">'TSLiteralType'</span>:
            <span class="hljs-keyword">return</span> targetType.literal.value;
    }
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">noStackTraceWrapper</span>(<span class="hljs-params">cb</span>) </span>{
    <span class="hljs-keyword">const</span> tmp = <span class="hljs-built_in">Error</span>.stackTraceLimit;
    <span class="hljs-built_in">Error</span>.stackTraceLimit = <span class="hljs-number">0</span>;
    cb &amp;&amp; cb(<span class="hljs-built_in">Error</span>);
    <span class="hljs-built_in">Error</span>.stackTraceLimit = tmp;
}

<span class="hljs-keyword">const</span> noFuncAssignLint = declare(<span class="hljs-function">(<span class="hljs-params">api, options, dirname</span>) =&gt;</span> {
    api.assertVersion(<span class="hljs-number">7</span>);

    <span class="hljs-keyword">return</span> {
        <span class="hljs-function"><span class="hljs-title">pre</span>(<span class="hljs-params">file</span>)</span> {
            file.set(<span class="hljs-string">'errors'</span>, []);
        },
        <span class="hljs-attr">visitor</span>: {
            <span class="hljs-function"><span class="hljs-title">TSTypeAliasDeclaration</span>(<span class="hljs-params">path</span>)</span> {
                path.scope.setData(path.get(<span class="hljs-string">'id'</span>).toString(), {
                    <span class="hljs-attr">paramNames</span>: path.node.typeParameters.params.map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
                        <span class="hljs-keyword">return</span> item.name;
                    }),
                    <span class="hljs-attr">body</span>: path.getTypeAnnotation()
                });
                path.scope.setData(path.get(<span class="hljs-string">'params'</span>))
            },
            <span class="hljs-function"><span class="hljs-title">CallExpression</span>(<span class="hljs-params">path, state</span>)</span> {
                <span class="hljs-keyword">const</span> errors = state.file.get(<span class="hljs-string">'errors'</span>);
                <span class="hljs-comment">// \u6CDB\u578B\u53C2\u6570</span>
                <span class="hljs-keyword">const</span> realTypes = path.node.typeParameters.params.map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
                    <span class="hljs-keyword">return</span> resolveType(item, {}, path.scope);
                });
                <span class="hljs-comment">// \u5B9E\u53C2\u7C7B\u578B</span>
                <span class="hljs-keyword">const</span> argumentsTypes = path.get(<span class="hljs-string">'arguments'</span>).map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
                    <span class="hljs-keyword">return</span> resolveType(item.getTypeAnnotation());
                });
                <span class="hljs-keyword">const</span> calleeName = path.get(<span class="hljs-string">'callee'</span>).toString();
                <span class="hljs-comment">// \u6839\u636E\u51FD\u6570\u540D\u67E5\u627E\u5230\u51FD\u6570\u58F0\u660E</span>
                <span class="hljs-keyword">const</span> functionDeclarePath = path.scope.getBinding(calleeName).path;
                <span class="hljs-keyword">const</span> realTypeMap = {};
                functionDeclarePath.node.typeParameters.params.map(<span class="hljs-function">(<span class="hljs-params">item, index</span>) =&gt;</span> {
                    realTypeMap[item.name] = realTypes[index];
                });
                <span class="hljs-comment">// \u628A\u6CDB\u578B\u53C2\u6570\u4F20\u9012\u7ED9\u5177\u4F53\u7684\u6CDB\u578B</span>
                <span class="hljs-keyword">const</span> declareParamsTypes = functionDeclarePath.get(<span class="hljs-string">'params'</span>).map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
                    <span class="hljs-keyword">return</span> resolveType(item.getTypeAnnotation(), realTypeMap);
                })

                <span class="hljs-comment">// \u58F0\u660E\u7C7B\u578B\u548C\u5177\u4F53\u7684\u7C7B\u578B\u7684\u5BF9\u6BD4\uFF08\u7C7B\u578B\u68C0\u67E5\uFF09</span>
                argumentsTypes.forEach(<span class="hljs-function">(<span class="hljs-params">item, index</span>) =&gt;</span> {
                    <span class="hljs-keyword">if</span> (item !== declareParamsTypes[index]) {
                        noStackTraceWrapper(<span class="hljs-function"><span class="hljs-params">Error</span> =&gt;</span> {
                            errors.push(path.get(<span class="hljs-string">'arguments.'</span> + index ).buildCodeFrameError(<span class="hljs-string">\`<span class="hljs-subst">\${item}</span> can not assign to <span class="hljs-subst">\${declareParamsTypes[index]}</span>\`</span>,<span class="hljs-built_in">Error</span>));
                        });
                    }
                });
            }
        },
        <span class="hljs-function"><span class="hljs-title">post</span>(<span class="hljs-params">file</span>)</span> {
            <span class="hljs-built_in">console</span>.log(file.get(<span class="hljs-string">'errors'</span>));
        }
    }
});

<span class="hljs-built_in">module</span>.exports = noFuncAssignLint;

</code></pre>
<p>\u5C31\u8FD9\u6837\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E86 typescript \u9AD8\u7EA7\u7C7B\u578B\uFF01</p>
<h2 data-id="heading-11">\u603B\u7ED3</h2>
<p>\u7C7B\u578B\u4EE3\u8868\u4E86\u53D8\u91CF\u7684\u5185\u5BB9\u548C\u80FD\u5BF9\u5B83\u8FDB\u884C\u7684\u64CD\u4F5C\uFF0C\u9759\u6001\u7C7B\u578B\u8BA9\u68C0\u67E5\u53EF\u4EE5\u5728\u7F16\u8BD1\u671F\u95F4\u505A\uFF0C\u968F\u7740\u524D\u7AEF\u9879\u76EE\u8D8A\u6765\u8D8A\u91CD\uFF0C\u8D8A\u6765\u8D8A\u9700\u8981  typescript \u8FD9\u7C7B\u9759\u6001\u7C7B\u578B\u8BED\u8A00\u3002</p>
<p>\u7C7B\u578B\u68C0\u67E5\u5C31\u662F\u505A AST \u7684\u5BF9\u6BD4\uFF0C\u5224\u65AD\u58F0\u660E\u7684\u548C\u5B9E\u9645\u7684\u662F\u5426\u4E00\u81F4\uFF1A</p>
<ul>
<li>\u7B80\u5355\u7C7B\u578B\u5C31\u76F4\u63A5\u5BF9\u6BD4\uFF0C\u76F8\u5F53\u4E8E if else</li>
<li>\u5E26\u6CDB\u578B\u7684\u8981\u5148\u628A\u7C7B\u578B\u53C2\u6570\u4F20\u9012\u8FC7\u53BB\u624D\u80FD\u786E\u5B9A\u7C7B\u578B\uFF0C\u4E4B\u540E\u5BF9\u6BD4\uFF0C\u76F8\u5F53\u4E8E\u51FD\u6570\u8C03\u7528\u5305\u88F9 if else</li>
<li>\u5E26\u9AD8\u7EA7\u7C7B\u578B\u7684\u6CDB\u578B\u7684\u7C7B\u578B\u68C0\u67E5\uFF0C\u591A\u4E86\u4E00\u4E2A\u5BF9\u7C7B\u578B\u6C42\u503C\u7684\u8FC7\u7A0B\uFF0C\u76F8\u5F53\u4E8E\u591A\u7EA7\u51FD\u6570\u8C03\u7528\u4E4B\u540E\u518D\u5224\u65AD if else</li>
</ul>
<p>\u5B9E\u73B0\u4E00\u4E2A\u5B8C\u6574\u7684 typescript type cheker \u8FD8\u662F\u5F88\u590D\u6742\u7684\uFF0C\u4E0D\u7136 typescript checker \u90E8\u5206\u7684\u4EE3\u7801\u4E5F\u4E0D\u81F3\u4E8E\u597D\u51E0\u4E07\u884C\u4E86\u3002\u4F46\u662F\u601D\u8DEF\u5176\u5B9E\u6CA1\u6709\u90A3\u4E48\u96BE\uFF0C\u6309\u7167\u6211\u4EEC\u6587\u4E2D\u7684\u601D\u8DEF\u6765\uFF0C\u662F\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E2A\u5B8C\u6574\u7684 type checker \u7684\u3002</p>
<p>\u8FD9\u4E00\u8282\u4E3B\u8981\u662F\u7528\u5230\u4E86 path.getTypeAnnotation \u7684 api \u6765\u83B7\u53D6\u58F0\u660E\u7684\u7C7B\u578B\uFF0C\u7136\u540E\u8FDB\u884C AST \u7684\u68C0\u67E5\uFF0C\u5E0C\u671B\u80FD\u591F\u5E2E\u52A9\u4F60\u7406\u89E3 type checker \u7684\u5B9E\u73B0\u539F\u7406\u3002</p>
<p>\uFF08\u5F53\u7136\uFF0C\u6587\u4E2D\u53EA\u662F\u5B9E\u73B0\u4E86\u72EC\u7ACB\u7684\u4E00\u4E2A\u4E2A\u7C7B\u578B\u7684\u68C0\u67E5\uFF0Ctsc \u4F1A\u9012\u5F52\u5730\u505A\u591A\u4E2A\u6587\u4EF6\u7684\u5168\u6587\u7684\u7C7B\u578B\u68C0\u67E5\uFF0C\u4F46\u662F\u5177\u4F53\u7684\u6BCF\u4E00\u90E8\u5206\u90FD\u662F\u7C7B\u4F3C\u7684\u601D\u8DEF\u3002\uFF09</p>
<p>\uFF08\u4EE3\u7801\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FQuarkGluonPlasma%2Fbabel-plugin-exercize" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/QuarkGluonPlasma/babel-plugin-exercize" ref="nofollow noopener noreferrer">\u8FD9\u91CC</a>\uFF0C\u5EFA\u8BAE git clone \u4E0B\u6765\u901A\u8FC7 node \u8DD1\u4E00\u4E0B\uFF09</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
