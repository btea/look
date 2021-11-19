var s={name:"8\u3001generator \u548C sourcemap \u7684\u5965\u79D8",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>AST \u8F6C\u6362\u5B8C\u4E4B\u540E\u5C31\u5230\u4E86 generate \u9636\u6BB5\uFF0Cgenenrate \u662F\u600E\u4E48\u751F\u6210\u76EE\u6807\u4EE3\u7801\u548C sourcemap \u7684\u5462\uFF1Fsourcemap \u6709\u5565\u4F5C\u7528\u5462\uFF1F</p>
<p>\u672C\u8282\u5C31\u6765\u63A2\u7D22\u4E00\u4E0B generate \u7684\u5965\u79D8\u3002</p>
<h2 data-id="heading-0">generate</h2>
<p>generate \u662F\u628A AST \u6253\u5370\u6210\u5B57\u7B26\u4E32\uFF0C\u662F\u4E00\u4E2A\u4ECE\u6839\u8282\u70B9\u9012\u5F52\u6253\u5370\u7684\u8FC7\u7A0B\uFF0C\u5BF9\u4E0D\u540C\u7684 AST \u8282\u70B9\u505A\u4E0D\u540C\u7684\u5904\u7406\uFF0C\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\u628A\u62BD\u8C61\u8BED\u6CD5\u6811\u4E2D\u7701\u7565\u6389\u7684\u4E00\u4E9B\u5206\u9694\u7B26\u91CD\u65B0\u52A0\u56DE\u6765\u3002</p>
<p>\u6BD4\u5982 while \u8BED\u53E5 WhileStatement \u5C31\u662F\u5148\u6253\u5370 while\uFF0C\u7136\u540E\u6253\u5370\u4E00\u4E2A\u7A7A\u683C\u548C '('\uFF0C\u7136\u540E\u6253\u5370 node.test \u5C5E\u6027\u7684\u8282\u70B9\uFF0C\u7136\u540E\u6253\u5370 ')'\uFF0C\u4E4B\u540E\u6253\u5370 block \u90E8\u5206</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/04d9befc0ad54eb2822d3fb086a50cd7~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u6BD4\u5982\u6761\u4EF6\u8868\u8FBE\u5F0F ConditionExpression \u5C31\u662F\u5206\u522B\u6253\u5370 node.test\u3001node.consequent\u3001node.alternate \u5C5E\u6027\uFF0C\u4E2D\u95F4\u63D2\u5165 <code>?</code> <code>:</code> \u548C\u7A7A\u683C\u3002</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/47676f74a3a944c190fd51ecedbee9d4~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u901A\u8FC7\u8FD9\u6837\u7684\u65B9\u5F0F\u9012\u5F52\u6253\u5370\u6574\u4E2A AST\uFF0C\u5C31\u53EF\u4EE5\u751F\u6210\u76EE\u6807\u4EE3\u7801\u3002</p>
<p>@babel/generator \u7684 <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel%2Ftree%2Fmain%2Fpackages%2Fbabel-generator%2Fsrc%2Fgenerators" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/babel/babel/tree/main/packages/babel-generator/src/generators" ref="nofollow noopener noreferrer">src/generators</a> \u4E0B\u5B9A\u4E49\u4E86\u6BCF\u4E00\u79CDAST\u8282\u70B9\u7684\u6253\u5370\u65B9\u5F0F\uFF0C\u611F\u5174\u8DA3\u7684\u8BDD\u53EF\u4EE5\u53BB\u770B\u4E00\u4E0B\u3002</p>
<h2 data-id="heading-1">sourcemap</h2>
<p>\u6211\u4EEC\u77E5\u9053\u53EF\u4EE5\u5728 generate \u7684\u65F6\u5019\u9009\u62E9\u662F\u5426\u751F\u6210 sourcemap\uFF0C\u90A3\u4E3A\u4EC0\u4E48\u8981\u751F\u6210 sourcemap \u5462\uFF1F</p>
<h4 data-id="heading-2">sourcemap \u7684\u4F5C\u7528</h4>
<p>babel \u5BF9\u6E90\u7801\u8FDB\u884C\u4E86\u4FEE\u6539\uFF0C\u751F\u6210\u7684\u76EE\u6807\u4EE3\u7801\u53EF\u80FD\u6539\u52A8\u5F88\u5927\uFF0C\u5982\u679C\u76F4\u63A5\u8C03\u8BD5\u76EE\u6807\u4EE3\u7801\uFF0C\u60F3\u624B\u52A8\u5B9A\u4F4D\u56DE\u6E90\u7801\u6BD4\u8F83\u96BE\u3002\u6240\u4EE5\u9700\u8981\u4E00\u79CD\u81EA\u52A8\u5173\u8054\u6E90\u7801\u7684\u65B9\u5F0F\uFF0C\u5C31\u662F sourcemap\u3002</p>
<p>\u6211\u4EEC\u5E73\u65F6\u7528 sourcemap \u4E3B\u8981\u7528\u4E24\u4E2A\u76EE\u7684\uFF1A</p>
<h5 data-id="heading-3">\u8C03\u8BD5\u4EE3\u7801\u65F6\u5B9A\u4F4D\u5230\u6E90\u7801</h5>
<p>chrome\u3001firefox \u7B49\u6D4F\u89C8\u5668\u652F\u6301\u5728\u6587\u4EF6\u672B\u5C3E\u52A0\u4E0A<a href="https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FTools%2FDebugger%2FHow_to%2FUse_a_source_map" target="_blank" rel="nofollow noopener noreferrer" title="https://developer.mozilla.org/zh-CN/docs/Tools/Debugger/How_to/Use_a_source_map" ref="nofollow noopener noreferrer">\u4E00\u884C\u6CE8\u91CA</a></p>
<pre><code class="">//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
</code></pre>
<p>\u53EF\u4EE5\u901A\u8FC7 url \u7684\u65B9\u5F0F\u6216\u8005\u8F6C\u6210 base64 \u5185\u8054\u7684\u65B9\u5F0F\u6765\u5173\u8054 sourcemap\u3002\u8C03\u8BD5\u5DE5\u5177\uFF08\u6D4F\u89C8\u5668\u3001vscode \u7B49\u4F1A\u81EA\u52A8\u89E3\u6790 sourcemap\uFF0C\u5173\u8054\u5230\u6E90\u7801\u3002\u8FD9\u6837\u6253\u65AD\u70B9\u3001\u9519\u8BEF\u5806\u6808\u7B49\u90FD\u4F1A\u5BF9\u5E94\u5230\u76F8\u5E94\u6E90\u7801\u3002</p>
<h5 data-id="heading-4">\u7EBF\u4E0A\u62A5\u9519\u5B9A\u4F4D\u5230\u6E90\u7801</h5>
<p>\u5F00\u53D1\u65F6\u4F1A\u4F7F\u7528 sourcemap \u6765\u8C03\u8BD5\uFF0C\u4F46\u662F\u751F\u4EA7\u53EF\u4E0D\u4F1A\uFF0C\u8981\u662F\u628A sourcemap \u4F20\u5230\u751F\u4EA7\u7B97\u662F\u5927\u4E8B\u6545\u4E86\u3002\u4F46\u662F\u7EBF\u4E0A\u62A5\u9519\u7684\u65F6\u5019\u786E\u5B9E\u4E5F\u9700\u8981\u5B9A\u4F4D\u5230\u6E90\u7801\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E00\u822C\u90FD\u662F\u5355\u72EC\u4E0A\u4F20 sourcemap \u5230\u9519\u8BEF\u6536\u96C6\u5E73\u53F0\u3002</p>
<p>\u6BD4\u5982 sentry \u5C31\u63D0\u4F9B\u4E86\u4E00\u4E2A sentry webpack plugin \u652F\u6301\u5728\u6253\u5305\u5B8C\u6210\u540E\u628A sourcemap \u81EA\u52A8\u4E0A\u4F20\u5230 sentry \u540E\u53F0\uFF0C\u7136\u540E\u628A\u672C\u5730 sourcemap \u5220\u6389\u3002\u8FD8\u63D0\u4F9B\u4E86 sentry-cli \u8BA9\u7528\u6237\u53EF\u4EE5\u624B\u52A8\u4E0A\u4F20\u3002</p>
<p>\u5E73\u65F6\u6211\u4EEC\u81F3\u5C11\u5728\u8FD9\u4E24\u4E2A\u573A\u666F\uFF08\u5F00\u53D1\u65F6\u8C03\u8BD5\u6E90\u7801\uFF0C\u751F\u4EA7\u65F6\u5B9A\u4F4D\u9519\u8BEF\uFF09\u4E0B\u4F1A\u7528\u5230 sourcemap\u3002</p>
<h4 data-id="heading-5">sourcemap\u7684\u683C\u5F0F</h4>
<pre><code class="hljs language-javascript" lang="javascript">{
\u3000\u3000<span class="hljs-attr">version</span> : <span class="hljs-number">3</span>,
   <span class="hljs-attr">file</span>: <span class="hljs-string">"out.js"</span>,
   <span class="hljs-attr">sourceRoot</span> : <span class="hljs-string">""</span>,
   <span class="hljs-attr">sources</span>: [<span class="hljs-string">"foo.js"</span>, <span class="hljs-string">"bar.js"</span>],
   <span class="hljs-attr">names</span>: [<span class="hljs-string">"src"</span>, <span class="hljs-string">"maps"</span>, <span class="hljs-string">"are"</span>, <span class="hljs-string">"fun"</span>],
   <span class="hljs-attr">mappings</span>: <span class="hljs-string">"AAgBC,SAAQ,CAAEA"</span>
}
</code></pre>
<p>\u6BD4\u5982\u4E0A\u9762\u5C31\u662F\u4E00\u4E2A sourcemap \u6587\u4EF6\uFF0C\u5BF9\u5E94\u5B57\u6BB5\u7684\u542B\u4E49\u5982\u4E0B\uFF1A</p>
<ul>
<li>
<p>version\uFF1Asource map\u7684\u7248\u672C\uFF0C\u76EE\u524D\u4E3A3\u3002</p>
</li>
<li>
<p>file\uFF1A\u8F6C\u6362\u540E\u7684\u6587\u4EF6\u540D\u3002</p>
</li>
<li>
<p>sourceRoot\uFF1A\u8F6C\u6362\u524D\u7684\u6587\u4EF6\u6240\u5728\u7684\u76EE\u5F55\u3002\u5982\u679C\u4E0E\u8F6C\u6362\u524D\u7684\u6587\u4EF6\u5728\u540C\u4E00\u76EE\u5F55\uFF0C\u8BE5\u9879\u4E3A\u7A7A\u3002</p>
</li>
<li>
<p>sources\uFF1A\u8F6C\u6362\u524D\u7684\u6587\u4EF6\u3002\u8BE5\u9879\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u56E0\u4E3A\u53EF\u80FD\u662F\u591A\u4E2A\u6E90\u6587\u4EF6\u5408\u5E76\u6210\u4E00\u4E2A\u76EE\u6807\u6587\u4EF6\u3002</p>
</li>
<li>
<p>names\uFF1A\u8F6C\u6362\u524D\u7684\u6240\u6709\u53D8\u91CF\u540D\u548C\u5C5E\u6027\u540D\uFF0C\u628A\u6240\u6709\u53D8\u91CF\u540D\u63D0\u53D6\u51FA\u6765\uFF0C\u4E0B\u9762\u7684 mapping \u76F4\u63A5\u4F7F\u7528\u4E0B\u6807\u5F15\u7528\uFF0C\u53EF\u4EE5\u51CF\u5C11\u4F53\u79EF\u3002</p>
</li>
<li>
<p>mappings\uFF1A\u8F6C\u6362\u524D\u4EE3\u7801\u548C\u8F6C\u6362\u540E\u4EE3\u7801\u7684\u6620\u5C04\u5173\u7CFB\u7684\u96C6\u5408\uFF0C\u7528\u5206\u53F7\u4EE3\u8868\u4E00\u884C\uFF0C\u6BCF\u884C\u7684 mapping \u7528\u9017\u53F7\u5206\u9694\u3002</p>
</li>
</ul>
<p>\u91CD\u70B9\u770B mappping \u90E8\u5206</p>
<pre><code class="hljs language-javascript" lang="javascript">\u3000\u3000mappings:<span class="hljs-string">"AAAAA,BBBBB;;;;CCCCC,DDDDD"</span>
</code></pre>
<p>\u6BCF\u4E00\u4E2A\u5206\u53F7 <code>;</code> \u8868\u793A\u4E00\u884C\uFF0C\u591A\u4E2A\u7A7A\u884C\u5C31\u662F\u591A\u4E2A <code>;</code>\uFF0Cmapping \u901A\u8FC7 <code>,</code> \u5206\u5272\u3002</p>
<p>mapping\u6709\u4E94\u4F4D\uFF1A</p>
<pre><code class=""> \u7B2C\u4E00\u4F4D\u662F\u76EE\u6807\u4EE3\u7801\u4E2D\u7684\u5217\u6570
 \u7B2C\u4E8C\u4F4D\u662F\u6E90\u7801\u6240\u5728\u7684\u6587\u4EF6\u540D
 \u7B2C\u4E09\u4F4D\u662F\u6E90\u7801\u5BF9\u5E94\u7684\u884C\u6570
 \u7B2C\u56DB\u4F4D\u662F\u6E90\u7801\u5BF9\u5E94\u7684\u5217\u6570
 \u7B2C\u4E94\u4F4D\u662F\u6E90\u7801\u5BF9\u5E94\u7684 names\uFF0C\u4E0D\u4E00\u5B9A\u6709
</code></pre>
<p>\u6BCF\u4E00\u4F4D\u662F\u901A\u8FC7 VLQ \u7F16\u7801\u7684\uFF0C\u4E00\u4E2A\u5B57\u7B26\u5C31\u80FD\u8868\u793A\u884C\u5217\u6570\uFF0C\u5177\u4F53 VLQ \u7684\u7F16\u7801\u65B9\u5F0F\u611F\u5174\u8DA3\u53EF\u4EE5\u67E5\u4E00\u4E0B\u76F8\u5173\u8D44\u6599\u3002</p>
<p>sourcemap \u901A\u8FC7 <code>names</code> \u548C <code>;</code> \u7684\u8BBE\u8BA1\u7701\u7565\u6389\u4E86\u4E00\u4E9B\u53D8\u91CF\u540D\u548C\u884C\u6570\u6240\u5360\u7684\u7A7A\u95F4\uFF0C\u53C8\u901A\u8FC7 VLQ \u7F16\u7801\u4F7F\u5F97\u4E00\u4E2A\u5B57\u7B26\u5C31\u53EF\u4EE5\u8868\u793A\u884C\u5217\u6570\u7B49\u4FE1\u606F\u3002\u901A\u8FC7\u4E0D\u5927\u7684\u7A7A\u95F4\u5360\u7528\u5B8C\u6210\u4E86\u6E90\u7801\u5230\u76EE\u6807\u4EE3\u7801\u7684\u6620\u5C04\u3002</p>
<p><strong>\u90A3\u4E48 sourcemap \u7684\u6E90\u7801\u548C\u76EE\u6807\u4EE3\u7801\u7684\u884C\u5217\u6570\u662F\u600E\u4E48\u6765\u7684\u5462\uFF1F</strong></p>
<p>\u5176\u5B9E\u6211\u4EEC\u5728 parse \u7684\u65F6\u5019\u5C31\u5728 AST \u8282\u70B9\u4E2D\u4FDD\u5B58\u4E86 loc \u5C5E\u6027\uFF0C\u8FD9\u5C31\u662F\u6E90\u7801\u4E2D\u7684\u884C\u5217\u53F7\uFF0C\u5728\u540E\u9762 transform \u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5E76\u4E0D\u4F1A\u53BB\u4FEE\u6539\u5B83\uFF0C\u6240\u4EE5\u8F6C\u6362\u5B8C\u4EE5\u540E\u8282\u70B9\u4E2D\u4ECD\u7136\u4FDD\u7559\u6709\u6E90\u7801\u4E2D\u7684\u884C\u5217\u53F7\u4FE1\u606F\uFF0C\u5728 generate \u6253\u5370\u6210\u76EE\u6807\u4EE3\u7801\u7684\u65F6\u5019\u4F1A\u8BA1\u7B97\u51FA\u65B0\u7684\u884C\u5217\u53F7\uFF0C\u8FD9\u6837\u4E24\u8005\u5173\u8054\u5C31\u53EF\u4EE5\u751F\u6210 sourcemap\u3002</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a1f09b8512db4269ab9fdad56cfeb36b~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u5177\u4F53\u751F\u6210 sourcemap \u7684\u8FC7\u7A0B\u662F\u7528 mozilla \u7EF4\u62A4\u7684 <a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fsource-map" target="_blank" rel="nofollow noopener noreferrer" title="https://www.npmjs.com/package/source-map" ref="nofollow noopener noreferrer">source-map</a> \u8FD9\u4E2A\u5305\uFF0C\u5176\u4ED6\u5DE5\u5177\u505A sourcemap \u7684\u89E3\u6790\u548C\u751F\u6210\u4E5F\u662F\u57FA\u4E8E\u8FD9\u4E2A\u5305\u3002</p>
<h2 data-id="heading-6">soruce-map</h2>
<p><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fsource-map" target="_blank" rel="nofollow noopener noreferrer" title="https://www.npmjs.com/package/source-map" ref="nofollow noopener noreferrer">source-map</a> \u53EF\u4EE5\u7528\u4E8E\u751F\u6210\u548C\u89E3\u6790 sourcemap\uFF0C\u9700\u8981\u624B\u52A8\u64CD\u4F5C sourcemap \u7684\u65F6\u5019\u53EF\u4EE5\u7528\u3002\u6211\u4EEC\u901A\u8FC7\u5B83\u7684 api \u6765\u611F\u53D7\u4E0B babel \u662F\u600E\u4E48\u751F\u6210 sourcemap \u7684\u3002</p>
<p>source-map \u66B4\u9732\u4E86 SourceMapConsumer\u3001SourceMapGenerator\u3001SourceNode 3\u4E2A\u7C7B\uFF0C\u5206\u522B\u7528\u4E8E\u6D88\u8D39 sourcemap\u3001\u751F\u6210 sourcemap\u3001\u521B\u5EFA\u6E90\u7801\u8282\u70B9\u3002</p>
<h5 data-id="heading-7">\u751F\u6210 sourcemap</h5>
<p>\u751F\u6210 sourcemap \u7684\u6D41\u7A0B\u662F\uFF1A</p>
<ol>
<li>\u521B\u5EFA\u4E00\u4E2A SourceMapGenerator \u5BF9\u8C61</li>
<li>\u901A\u8FC7 addMapping \u65B9\u6CD5\u6DFB\u52A0\u4E00\u4E2A\u6620\u5C04</li>
<li>\u901A\u8FC7 toString \u8F6C\u4E3A sourcemap \u5B57\u7B26\u4E32</li>
</ol>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">var</span> map = <span class="hljs-keyword">new</span> SourceMapGenerator({
  <span class="hljs-attr">file</span>: <span class="hljs-string">"source-mapped.js"</span>
});

map.addMapping({
  <span class="hljs-attr">generated</span>: {
    <span class="hljs-attr">line</span>: <span class="hljs-number">10</span>,
    <span class="hljs-attr">column</span>: <span class="hljs-number">35</span>
  },
  <span class="hljs-attr">source</span>: <span class="hljs-string">"foo.js"</span>,
  <span class="hljs-attr">original</span>: {
    <span class="hljs-attr">line</span>: <span class="hljs-number">33</span>,
    <span class="hljs-attr">column</span>: <span class="hljs-number">2</span>
  },
  <span class="hljs-attr">name</span>: <span class="hljs-string">"christopher"</span>
});

<span class="hljs-built_in">console</span>.log(map.toString());
<span class="hljs-comment">// '{"version":3,"file":"source-mapped.js",</span>
<span class="hljs-comment">//   "sources":["foo.js"],"names":["christopher"],"mappings":";;;;;;;;;mCAgCEA"}'</span>
</code></pre>
<h5 data-id="heading-8">\u6D88\u8D39sourcemap</h5>
<p>SourceMapConsumer.with \u7684\u56DE\u8C03\u91CC\u9762\u53EF\u4EE5\u62FF\u5230 consumer \u7684 api\uFF0C\u8C03\u7528 originalPositionFor \u548C generatedPositionFor \u53EF\u4EE5\u5206\u522B\u7528\u76EE\u6807\u4EE3\u7801\u4F4D\u7F6E\u67E5\u6E90\u7801\u4F4D\u7F6E\u548C\u7528\u6E90\u7801\u4F4D\u7F6E\u67E5\u76EE\u6807\u4EE3\u7801\u4F4D\u7F6E\u3002\u8FD8\u53EF\u4EE5\u901A\u8FC7 eachMapping \u904D\u5386\u6240\u6709 mapping\uFF0C\u5BF9\u6BCF\u4E2A\u8FDB\u884C\u5904\u7406\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> rawSourceMap = {
  <span class="hljs-attr">version</span>: <span class="hljs-number">3</span>,
  <span class="hljs-attr">file</span>: <span class="hljs-string">"min.js"</span>,
  <span class="hljs-attr">names</span>: [<span class="hljs-string">"bar"</span>, <span class="hljs-string">"baz"</span>, <span class="hljs-string">"n"</span>],
  <span class="hljs-attr">sources</span>: [<span class="hljs-string">"one.js"</span>, <span class="hljs-string">"two.js"</span>],
  <span class="hljs-attr">sourceRoot</span>: <span class="hljs-string">"http://example.com/www/js/"</span>,
  <span class="hljs-attr">mappings</span>: <span class="hljs-string">"CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID;CCDb,IAAI,IAAM,SAAUE,GAClB,OAAOA"</span>
};

<span class="hljs-keyword">const</span> whatever = <span class="hljs-keyword">await</span> SourceMapConsumer.with(rawSourceMap, <span class="hljs-literal">null</span>, <span class="hljs-function"><span class="hljs-params">consumer</span> =&gt;</span> {
   <span class="hljs-comment">// \u76EE\u6807\u4EE3\u7801\u4F4D\u7F6E\u67E5\u8BE2\u6E90\u7801\u4F4D\u7F6E</span>
  consumer.originalPositionFor({
    <span class="hljs-attr">line</span>: <span class="hljs-number">2</span>,
    <span class="hljs-attr">column</span>: <span class="hljs-number">28</span>
  })
  <span class="hljs-comment">// { source: 'http://example.com/www/js/two.js',</span>
  <span class="hljs-comment">//   line: 2,</span>
  <span class="hljs-comment">//   column: 10,</span>
  <span class="hljs-comment">//   name: 'n' }</span>
  
  <span class="hljs-comment">// \u6E90\u7801\u4F4D\u7F6E\u67E5\u8BE2\u76EE\u6807\u4EE3\u7801\u4F4D\u7F6E</span>
  consumer.generatedPositionFor({
    <span class="hljs-attr">source</span>: <span class="hljs-string">"http://example.com/www/js/two.js"</span>,
    <span class="hljs-attr">line</span>: <span class="hljs-number">2</span>,
    <span class="hljs-attr">column</span>: <span class="hljs-number">10</span>
  })
  <span class="hljs-comment">// { line: 2, column: 28 }</span>
  
  <span class="hljs-comment">// \u904D\u5386 mapping</span>
  consumer.eachMapping(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">m</span>) </span>{
    <span class="hljs-comment">// ...</span>
  });

  <span class="hljs-keyword">return</span> computeWhatever();
});
</code></pre>
<p>babel \u5C31\u662F\u7528\u8FD9\u4E9B api \u6765\u751F\u6210 sourcemap \u7684\u3002</p>
<h2 data-id="heading-9">\u603B\u7ED3</h2>
<p>\u8FD9\u4E00\u8282\u6211\u4EEC\u63A2\u7D22\u4E86\u4E0B generator \u548C sourcemap \u7684\u539F\u7406\uFF0Cgenerate \u5C31\u662F\u9012\u5F52\u6253\u5370 AST \u6210\u5B57\u7B26\u4E32\uFF0C\u5728\u9012\u5F52\u6253\u5370\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u6839\u636E\u6E90\u7801\u4F4D\u7F6E\u548C\u8BA1\u7B97\u51FA\u7684\u76EE\u6807\u4EE3\u7801\u7684\u4F4D\u7F6E\u6765\u751F\u6210 mapping\uFF0C\u52A0\u5230 sourcemap \u4E2D\u3002 sourcemap \u662F\u6E90\u7801\u548C\u76EE\u6807\u4EE3\u7801\u7684\u6620\u5C04\uFF0C\u7528\u4E8E\u5F00\u53D1\u65F6\u8C03\u8BD5\u6E90\u7801\u548C\u751F\u4EA7\u65F6\u5B9A\u4F4D\u7EBF\u4E0A\u9519\u8BEF\u3002 babel \u901A\u8FC7 source-map \u8FD9\u4E2A\u5305\u6765\u751F\u6210\u7684 sourcemap\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86\u4E0B source-map \u5305\u7684 api\uFF0C\u5BF9 sourcemap \u7684\u751F\u6210\u548C\u6D88\u8D39\u6709\u4E86\u4E00\u4E2A\u76F4\u89C2\u7684\u8BA4\u8BC6\u3002</p>
<p>\u5B66\u5B8C\u8FD9\u4E00\u8282\u4E4B\u540E\uFF0C\u6211\u4EEC\u77E5\u9053\u4E86 AST \u662F\u600E\u4E48\u751F\u6210\u76EE\u6807\u4EE3\u7801\u548C sourcemap\u7684\uFF0C\u52A0\u4E0A\u524D\u4E24\u8282\u7684\u5185\u5BB9\uFF0C\u628A\u6574\u4E2A babel \u7684\u7F16\u8BD1\u6D41\u7A0B\u4E32\u8054\u4E86\u8D77\u6765\u3002</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
