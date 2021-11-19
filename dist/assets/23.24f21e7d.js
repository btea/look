var s={name:"23\u3001Babel Macros",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>babel macro \u662F\u4FEE\u6539 AST \u7684\u4E00\u79CD\u65B0\u7684\u65B9\u5F0F\uFF0C\u5176\u5B9E\u548C babel plugin \u5DEE\u522B\u4E0D\u5927\uFF0C\u4F1A\u4E86 plugin\uFF0Cmacro \u4E5F\u5C31\u4F1A\u4E86\u3002</p>
<p>\u8FD9\u8282\u6211\u4EEC\u6765\u63A2\u7A76\u4E00\u4E0B babel macro\u3002</p>
<h2 data-id="heading-0">babel macro \u4ECB\u7ECD</h2>
<p>babel macro \u662F\u901A\u8FC7\u5728\u6E90\u7801\u4E2D\u5F15\u5165 macro \u6A21\u5757\uFF0C\u5728\u8981\u8F6C\u6362\u7684\u5730\u65B9\u8C03\u7528\u76F8\u5E94\u7684 api\uFF0Cmacro \u5185\u90E8\u4F1A\u62FF\u5230\u76F8\u5E94\u7684 ast\uFF0C\u7136\u540E\u8FDB\u884C\u8F6C\u6362\u7684\u4E00\u79CD\u65B9\u5F0F\u3002</p>
<p>\u6BD4\u5982\u6E90\u7801\u4E3A\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> files = <span class="hljs-built_in">require</span>(<span class="hljs-string">'../macros/files.macro'</span>);

<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'src files:'</span>);
<span class="hljs-built_in">console</span>.log(files(<span class="hljs-string">'../src'</span>));
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'macro files:'</span>);
<span class="hljs-built_in">console</span>.log(files(<span class="hljs-string">'../macros'</span>));
</code></pre>
<p>\u76EE\u6807\u4EE3\u7801\u4E3A\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-built_in">console</span>.log(<span class="hljs-string">'src files:'</span>);
<span class="hljs-built_in">console</span>.log([<span class="hljs-string">"index.js"</span>, <span class="hljs-string">"sourceCode.js"</span>]);
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'macro files:'</span>);
<span class="hljs-built_in">console</span>.log([<span class="hljs-string">"files.macro.js"</span>]);
</code></pre>
<p>\u5982\u679C\u6211\u4EEC\u5199\u63D2\u4EF6\uFF0C\u90A3\u4E48\u5C31\u662F\u901A\u8FC7 visitor \u627E\u5230 files \u7684\u51FD\u6570\u8C03\u7528\uFF0C\u7136\u540E\u6267\u884C fs.readdirSync \u67E5\u8BE2\u51FA\u6587\u4EF6\u5217\u8868\uFF0C\u4E4B\u540E\u66FF\u6362\u8BE5\u5904\u7684 ast \u4E3A StringLiteral \u7684\u6570\u7EC4\u3002</p>
<p>\u90A3\u5982\u679C\u7528 macro \u600E\u4E48\u5199\u5462\uFF1F</p>
<p>\u4E5F\u662F\u4E00\u6837\u7684\u601D\u8DEF\uFF0C\u53EA\u4E0D\u8FC7 macro \u4E0D\u9700\u8981 visitor\uFF0C\u800C\u662F\u76F4\u63A5\u80FD\u627E\u5230\u8C03\u7528 macro \u7684\u5BF9\u5E94\u7684 ast\uFF0C\u4E4B\u540E\u8FDB\u884C\u4FEE\u6539\u3002</p>
<p>\u4E0B\u9762\u6211\u4EEC\u6765\u5B9E\u73B0\u4E00\u4E0B\u4E0A\u9762\u7684 macro\u3002</p>
<h2 data-id="heading-1">babel macro \u5B9E\u4F8B</h2>
<p>babel macro \u7684\u529F\u80FD\u662F\u901A\u8FC7\u63D2\u4EF6\u5B9E\u73B0\u7684\uFF0C\u6240\u4EE5\u8981\u542F\u7528 macro\uFF0C\u8981\u5148\u5F15\u5165 babel-plugin-macros \u63D2\u4EF6\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> { transformFileSync } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'@babel/core'</span>);
<span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">'path'</span>);

<span class="hljs-keyword">const</span> sourceFilePath = path.resolve(__dirname, <span class="hljs-string">'./sourceCode.js'</span>);

<span class="hljs-keyword">const</span> { code } = transformFileSync(sourceFilePath, {
    <span class="hljs-attr">plugins</span>: [
        [
            <span class="hljs-string">'babel-plugin-macros'</span>
        ]
    ]
});

<span class="hljs-built_in">console</span>.log(code);
</code></pre>
<p>\u4E4B\u540E\uFF0C\u6211\u4EEC\u5728\u6E90\u7801\u4E2D\u5F15\u5165\u4E86 macro\uFF0C\u7EA6\u5B9A .macro \u7ED3\u5C3E\u7684\u5C31\u662F macro\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> files = <span class="hljs-built_in">require</span>(<span class="hljs-string">'../macros/files.macro'</span>);

<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'src files:'</span>);
<span class="hljs-built_in">console</span>.log(files(<span class="hljs-string">'../src'</span>));
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'macro files:'</span>);
<span class="hljs-built_in">console</span>.log(files(<span class="hljs-string">'../macros'</span>));
</code></pre>
<p>\u7136\u540E\u5C31\u4F1A\u8C03\u7528\u5230\u6211\u4EEC\u5B9A\u4E49\u7684 macro\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> { createMacro } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'babel-plugin-macros'</span>)
<span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">'path'</span>);
<span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">'fs'</span>);

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">logMacro</span>(<span class="hljs-params">{ references, state, babel}</span>) </span>{
  <span class="hljs-keyword">const</span> { <span class="hljs-attr">default</span>: referredPaths = [] } = references;

  referredPaths.forEach(<span class="hljs-function"><span class="hljs-params">referredPath</span> =&gt;</span> {
    <span class="hljs-keyword">const</span> dirPath =path.join(path.dirname(state.filename), referredPath.parentPath.get(<span class="hljs-string">'arguments.0'</span>).node.value);
    <span class="hljs-keyword">const</span> fileNames = fs.readdirSync(dirPath);

    <span class="hljs-keyword">const</span> ast = babel.types.arrayExpression(fileNames.map(<span class="hljs-function"><span class="hljs-params">fileName</span> =&gt;</span> babel.types.stringLiteral(fileName)));

    referredPath.parentPath.replaceWith(ast);
  });
}

<span class="hljs-built_in">module</span>.exports = createMacro(logMacro);
</code></pre>
<p>macro \u7684\u5F62\u5F0F\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4E4B\u540E\u8C03\u7528 createMacro \u7684 api\uFF0C\u6765\u521B\u5EFA macro\u3002</p>
<p>\u5F53 babel \u7F16\u8BD1\u65F6\uFF0C\u4F1A\u6267\u884C babel macro plugin \u63D2\u4EF6\uFF0C\u800C\u63D2\u4EF6\u91CC\u5B9E\u73B0\u4E86\u8C03\u7528 macro \u7684\u903B\u8F91\uFF0C\u5C31\u4F1A\u628A\u76F8\u5E94\u7684 ast \u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u5230 macro\uFF0C\u4E5F\u5C31\u662F references \u53C2\u6570\u3002</p>
<p>references \u53C2\u6570\u662F\u6240\u6709\u8C03\u7528\u8BE5 macro \u7684 ast \u7684 path \u6570\u7EC4\uFF0C\u6709\u4E86 path \u4E4B\u540E\u540E\u9762\u7684\u6211\u4EEC\u5C31\u4F1A\u4E86\uFF0C\u5C31\u662F\u901A\u8FC7 path \u7684 api \u8FDB\u884C ast \u7684\u589E\u5220\u6539\u3002</p>
<p>\u8FD9\u91CC\u7684\u4FEE\u6539 ast \u7684\u903B\u8F91\u5C31\u662F\u8BFB\u53D6\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\uFF0C\u7136\u540E\u7528\u6587\u4EF6\u5217\u8868\u66FF\u6362 macro \u7684 ast\u3002</p>
<p>macro \u7B2C\u4E00\u4E2A\u53C2\u6570\u6709\u4E09\u4E2A\u5C5E\u6027\uFF1A</p>
<ul>
<li>references\uFF1A \u6240\u6709\u5F15\u7528 macro \u7684 path</li>
<li>state\uFF1A macro \u4E4B\u95F4\u4F20\u9012\u6570\u636E\u7684\u65B9\u5F0F\uFF0C\u80FD\u62FF\u5230 filename</li>
<li>babel\uFF1A\u5404\u79CD api\uFF0C\u548C babel plugin \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E00\u6837\u3002</li>
</ul>
<p>\u8FD9\u6837\uFF0C\u6211\u4EEC\u5C31\u5B9E\u73B0\u4E86\u4E00\u4E2A macro\u3002</p>
<h2 data-id="heading-2">\u4F18\u7F3A\u70B9</h2>
<p>babel macro \u4F18\u70B9\u662F\u4E0D\u7528\u518D\u901A\u8FC7 visitor \u67E5\u627E ast \u4E86\uFF0C\u53EA\u9700\u8981\u5728\u9700\u8981\u8F6C\u6362\u7684\u5730\u65B9\u8C03\u7528\u4E0B macro \u7684 api\uFF0C\u5C31\u53EF\u4EE5\u627E\u5230\u5BF9\u5E94 ast\u3002</p>
<p>\u4F46\u7B80\u5316\u7684\u4EE3\u4EF7\u5C31\u662F\u67E5\u627E\u5176\u4ED6 ast \u5C31\u4E0D\u662F\u90A3\u4E48\u65B9\u4FBF\u4E86\uFF0C\u56E0\u4E3A\u662F\u4ECE\u4E00\u4E2A\u70B9\u7684 ast \u9010\u6B65\u5411\u4E0A\u67E5\u627E\u7684\u8FC7\u7A0B\u3002</p>
<h2 data-id="heading-3">\u603B\u7ED3</h2>
<p>babel macro \u662F\u57FA\u4E8E babel plugin \u5C01\u88C5\u51FA\u6765\u7684\uFF0C\u4E0D\u518D\u662F\u901A\u8FC7 visitor \u6765\u67E5\u627E ast\uFF0C\u800C\u662F\u5728\u6E90\u7801\u8C03\u7528 macro \u7684 api\uFF0C\u7136\u540E\u5728 macro \u7684\u5B9E\u73B0\u91CC\u5C31\u80FD\u62FF\u5230\u6240\u6709\u8C03\u7528 macro \u7684 path\uFF0C\u4E4B\u540E\u5C31\u53EF\u4EE5\u5BF9 ast \u505A\u4FEE\u6539\u4E86\u3002</p>
<p>macro \u7684\u4F7F\u7528\u9700\u8981\u5F15\u5165 babel-plugin-macros \u6765\u542F\u7528 macro \u529F\u80FD\uFF0C\u5728\u6E90\u7801\u4E2D\u5F15\u5165 .macro\u7ED3\u5C3E\u7684\u6A21\u5757\uFF0C\u4E4B\u540E\u5728 macro \u5B9E\u73B0\u91CC\u9762\u8C03\u7528 crateMacro \u6765\u521B\u5EFA macro\u3002</p>
<p>macro \u4F1A\u4F20\u5165\u4E00\u4E2A\u53C2\u6570\uFF0C\u5305\u542B references\u3001state\u3001babel 3\u4E2A\u5C5E\u6027\uFF0C\u5206\u522B\u662F path \u6570\u7EC4\u3001macro \u4E4B\u95F4\u4F20\u9012\u6570\u636E\u7684 state\uFF0C\u4EE5\u53CA\u5404\u79CD api\u3002</p>
<p>macro \u53EA\u662F\u4E00\u79CD\u5C01\u88C5\u51FA\u6765\u7684\u65B0\u7684\u4FEE\u6539 ast \u7684\u65B9\u5F0F\uFF0C\u4F18\u70B9\u662F\u4E0D\u9700\u8981\u4F7F\u7528 visitor \u67E5\u627E\uFF0C\u4F46\u7F3A\u70B9\u662F\u67E5\u627E\u5176\u4ED6 ast \u4E0D\u65B9\u4FBF\u3002</p>
<p>\uFF08\u4EE3\u7801\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FQuarkGluonPlasma%2Fbabel-plugin-exercize" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/QuarkGluonPlasma/babel-plugin-exercize" ref="nofollow noopener noreferrer">\u8FD9\u91CC</a>\uFF0C\u5EFA\u8BAE git clone \u4E0B\u6765\u901A\u8FC7 node \u8DD1\u4E00\u4E0B\uFF09</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
