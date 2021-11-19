var o={name:"24\u3001\u624B\u5199 Babel\uFF1A\u601D\u8DEF\u7BC7",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>\u5B66\u5230\u8FD9\u91CC\uFF0C\u6211\u4EEC\u5BF9 babel \u63D2\u4EF6\u7684\u5199\u6CD5\u548C babel \u5185\u7F6E\u7684 preset \u7684\u5B9E\u73B0\u90FD\u6709\u4E86\u6BD4\u8F83\u591A\u7684\u4E86\u89E3\uFF0C\u4F46\u662F\u5BF9 babel \u672C\u8EAB\u7684\u5B9E\u73B0\u53EF\u80FD\u8FD8\u4E0D\u662F\u7279\u522B\u6E05\u6670\u3002\u6240\u4EE5\uFF0C\u6211\u4EEC\u901A\u8FC7\u5199\u4E00\u4E2A\u7B80\u5355\u7684 babel \u6765\u6DF1\u5165\u63A2\u7D22\u4E0B babel \u7684\u5B9E\u73B0\u539F\u7406\u3002</p>
<p>\u5E0C\u671B\u5B8C\u6210\u8FD9\u4E2A\u6848\u4F8B\u4E4B\u540E\uFF0C\u80FD\u591F\u5E2E\u4F60\u771F\u6B63\u638C\u63E1 babel\u3002</p>
<h2 data-id="heading-0">\u6574\u4F53\u601D\u8DEF</h2>
<h3 data-id="heading-1">babel \u7684\u7F16\u8BD1\u6D41\u7A0B</h3>
<p>\u6211\u4EEC\u77E5\u9053\uFF0Cbabel \u7684\u4E3B\u8981\u7F16\u8BD1\u6D41\u7A0B\u662F parse\u3001transform\u3001generate\u3002</p>
<ul>
<li>parse \u662F\u628A\u6E90\u7801\u8F6C\u6210 AST</li>
<li>transform \u662F\u5BF9 AST \u505A\u589E\u5220\u6539</li>
<li>generate \u662F\u6253\u5370 AST \u6210\u76EE\u6807\u4EE3\u7801\u5E76\u751F\u6210 sourcemap</li>
</ul>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/63717d7589cf415680373ede5f4f7089~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<h3 data-id="heading-2">babel7 \u5185\u7F6E\u7684\u5305</h3>
<p>babel 7 \u628A\u8FD9\u4E9B\u529F\u80FD\u7684\u5B9E\u73B0\u653E\u5230\u4E86\u4E0D\u540C\u7684\u5305\u91CC\u9762\uFF1A</p>
<ul>
<li><code>@babel/parser</code> \u89E3\u6790\u6E90\u7801\u6210 AST\uFF0C\u5BF9\u5E94 parse \u9636\u6BB5</li>
<li><code>@babel/traverse</code> \u904D\u5386 AST \u5E76\u8C03\u7528 visitor \u51FD\u6570\uFF0C\u5BF9\u5E94 transform \u9636\u6BB5</li>
<li><code>@babel/generate</code> \u6253\u5370 AST\uFF0C\u751F\u6210\u76EE\u6807\u4EE3\u7801\u548C sorucemap\uFF0C\u5BF9\u5E94 generate \u9636\u6BB5</li>
</ul>
<p>\u5176\u4E2D\uFF0C\u904D\u5386\u8FC7\u7A0B\u4E2D\u9700\u8981\u521B\u5EFA AST\uFF0C\u4F1A\u7528\u5230\uFF1A</p>
<ul>
<li><code>@babel/types</code> \u521B\u5EFA\u3001\u5224\u65AD AST</li>
<li><code>@babel/template</code>  \u6839\u636E\u6A21\u5757\u6279\u91CF\u521B\u5EFA AST</li>
</ul>
<p>\u4E0A\u9762\u662F\u6BCF\u4E00\u4E2A\u9636\u6BB5\u7684\u529F\u80FD\uFF0C babel \u6574\u4F53\u529F\u80FD\u7684\u5165\u53E3\u662F\u5728\uFF1A</p>
<ul>
<li><code>@babel/core</code> \u89E3\u6790\u914D\u7F6E\u3001\u5E94\u7528 plugin\u3001preset\uFF0C\u6574\u4F53\u6574\u4F53\u7F16\u8BD1\u6D41\u7A0B</li>
</ul>
<p>\u63D2\u4EF6\u548C\u63D2\u4EF6\u4E4B\u95F4\u6709\u4E00\u4E9B\u516C\u5171\u51FD\u6570\uFF0C\u8FD9\u4E9B\u90FD\u662F\u5728\uFF1A</p>
<ul>
<li><code>@babel/helpers</code> \u7528\u4E8E\u8F6C\u6362 es next \u4EE3\u7801\u9700\u8981\u7684\u901A\u8FC7\u6A21\u677F\u521B\u5EFA\u7684 AST\uFF0C\u6BD4\u5982 _typeof\u3001_defineProperties \u7B49</li>
<li><code>@babel/helper-xxx</code> \u5176\u4ED6\u7684\u63D2\u4EF6\u4E4B\u95F4\u5171\u4EAB\u7684\u7528\u4E8E\u64CD\u4F5C AST \u7684\u516C\u5171\u51FD\u6570</li>
</ul>
<p>\u5F53\u7136\uFF0C\u9664\u4E86\u7F16\u8BD1\u671F\u8F6C\u6362\u7684\u65F6\u5019\u4F1A\u6709\u516C\u5171\u51FD\u6570\u4EE5\u5916\uFF0C\u8FD0\u884C\u65F6\u4E5F\u6709\uFF0C\u8FD9\u90E8\u5206\u662F\u653E\u5728\uFF1A</p>
<ul>
<li><code>@babel/runtime</code> \u4E3B\u8981\u662F\u5305\u542B corejs\u3001helpers\u3001regenerator \u8FD9 3 \u90E8\u5206\uFF1A
<ul>
<li>helper\uFF1A helper \u51FD\u6570\u7684\u8FD0\u884C\u65F6\u7248\u672C\uFF08\u4E0D\u662F\u901A\u8FC7 AST \u6CE8\u5165\u4E86\uFF0C\u800C\u662F\u8FD0\u884C\u65F6\u5F15\u5165\u4EE3\u7801\uFF09</li>
<li>corejs\uFF1A es next \u7684 api \u7684\u5B9E\u73B0\uFF0Ccorejs 2 \u53EA\u652F\u6301\u9759\u6001\u65B9\u6CD5\uFF0Ccorejs 3 \u8FD8\u652F\u6301\u5B9E\u4F8B\u65B9\u6CD5</li>
<li>regenerator\uFF1Aasync await \u7684\u5B9E\u73B0\uFF0C\u7531 facebook \u7EF4\u62A4</li>
</ul>
</li>
</ul>
<p>\uFF08babel \u505A\u8BED\u6CD5\u8F6C\u6362\u662F\u81EA\u5DF1\u5B9E\u73B0\u7684 helper\uFF0C\u4F46\u662F\u505A polyfill \u90FD\u4E0D\u662F\u81EA\u5DF1\u5B9E\u73B0\u7684\uFF0C\u800C\u662F\u501F\u52A9\u4E86\u7B2C\u4E09\u65B9\u7684 corejs\u3001regenerator\uFF09</p>
<ul>
<li><code>@babel/cli</code> babel \u7684\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u652F\u6301\u901A\u8FC7 glob \u5B57\u7B26\u4E32\u6765\u7F16\u8BD1\u591A\u4E2A\u6587\u4EF6</li>
</ul>
<h3 data-id="heading-3">\u6211\u4EEC\u8981\u5B9E\u73B0\u54EA\u4E9B\u5305</h3>
<p>\u4E0A\u9762\u4ECB\u7ECD\u7684\u662F babel \u5B8C\u6210\u529F\u80FD\u6240\u5185\u7F6E\u7684\u4E00\u4E9B\u5305\uFF0C\u6211\u4EEC\u5982\u679C\u8981\u5199\u4E00\u4E2A\u7B80\u6613\u7684 babel\uFF0C\u4E5F\u5F97\u5B9E\u73B0\u8FD9\u4E9B\u5305\uFF0C\u4F46\u53EF\u4EE5\u505A\u4E00\u4E9B\u7B80\u5316\u3002</p>
<ul>
<li><code>parser \u5305</code>\u662F\u80AF\u5B9A\u8981\u5B9E\u73B0\u7684\uFF0Cbabel parser \u662F\u57FA\u4E8E acorn fork \u7684\uFF0C\u6211\u4EEC\u4E5F\u57FA\u4E8E acorn\uFF0C\u505A\u4E00\u70B9\u6269\u5C55\u3002\u5B8C\u6210\u4ECE\u6E90\u7801\u5230 AST \u7684\u8F6C\u6362\u3002</li>
<li><code>traverse \u5305</code>\u662F\u5BF9 AST \u7684\u904D\u5386\uFF0C\u9700\u8981\u77E5\u9053\u4E0D\u540C\u7C7B\u578B\u7684 AST \u90FD\u904D\u5386\u54EA\u4E9B key\uFF0C\u8FD9\u4E9B\u662F\u5728 @babel/types \u5305\u91CC\u9762\u5B9A\u4E49\u7684\uFF0C\u6211\u4EEC\u4E5F\u7528\u7C7B\u4F3C\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u5E76\u4E14\u4F1A\u8C03\u7528\u5BF9\u5E94\u7684 visitor\uFF0C\u5B9E\u73B0 path \u548C path.scope \u7684\u4E00\u4E9B api \u7136\u540E\u4F20\u5165\u3002</li>
<li><code>generate \u5305</code>\u662F\u6253\u5370 AST \u6210\u76EE\u6807\u4EE3\u7801\uFF0C\u751F\u6210 sourcemap\u3002\u6253\u5370\u8FD9\u90E8\u5206\u6BCF\u4E2A AST \u7C7B\u578B\u90FD\u8981\u5199\u4E00\u4E2A\u5BF9\u5E94\u7684\u51FD\u6570\u6765\u5904\u7406\uFF0C\u751F\u6210 sourcemap \u4F7F\u7528 source-map \u8FD9\u4E2A\u5305\uFF0C\u5173\u8054 parse \u65F6\u8BB0\u5F55\u7684 loc \u548C\u6253\u5370\u65F6\u8BA1\u7B97\u7684\u4F4D\u7F6E\u6765\u751F\u6210\u6BCF\u4E00\u4E2A mapping\u3002</li>
<li><code>types \u5305</code>\u7528\u4E8E\u521B\u5EFA AST\uFF0C\u4F1A\u7EF4\u62A4\u521B\u5EFA\u548C\u5224\u65AD\u5404\u79CD AST \u7684 api\uFF0C\u5E76\u4E14\u63D0\u4F9B\u6BCF\u79CD AST \u9700\u8981\u904D\u5386\u7684\u5C5E\u6027\u662F\u54EA\u4E9B\uFF0C\u7528\u4E8E traverse \u7684\u8FC7\u7A0B</li>
<li><code>template \u5305</code>\u662F\u6279\u91CF\u521B\u5EFA AST \u7684\uFF0C\u8FD9\u91CC\u6211\u4EEC\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684\u7248\u672C\uFF0C\u4F20\u5165\u5B57\u7B26\u4E32\uFF0Cparse \u6210 AST \u8FD4\u56DE\u3002</li>
<li><code>core \u5305</code>\u662F\u6574\u4F53\u6D41\u7A0B\u7684\u4E32\u8054\uFF0C\u652F\u6301 plugins \u548C presets\uFF0C\u8C03\u7528\u63D2\u4EF6\uFF0C\u5408\u5E76\u6210\u6700\u7EC8\u7684 visitors\uFF0C\u7136\u540E\u518D traverse\u3002</li>
<li><code>helper \u5305</code>\u6211\u4EEC\u4E5F\u4F1A\u5B9E\u73B0\u4E00\u4E2A\uFF0C\u56E0\u4E3A\u652F\u6301\u4E86 plugin\uFF0C\u90A3\u4E48\u4E2D\u6709\u4E00\u4E9B\u516C\u5171\u7684\u51FD\u6570\u53EF\u4EE5\u590D\u7528</li>
<li><code>runtime \u5305</code>\u6211\u4EEC\u4E5F\u63D0\u4F9B\u4E00\u4E0B\uFF0C\u4E0D\u8FC7\u53EA\u52A0\u5165\u4E00\u4E9B\u7528\u4E8E\u505A\u8BED\u6CD5\u8F6C\u6362\u7684\u8F85\u52A9\u51FD\u6570\u5C31\u597D\u4E86</li>
<li><code>cli \u5305</code> \u5B9E\u73B0\u4E00\u4E2A\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u6765\u8C03\u7528 core \u5305\u7684\u529F\u80FD</li>
</ul>
<p>\u8FD9\u662F\u6211\u4EEC\u5927\u6982\u4F1A\u505A\u7684\u4E8B\u60C5\uFF0C\u628A\u8FD9\u4E9B\u90FD\u5B9E\u73B0\u4E00\u904D\u5C31\u7B97\u4E00\u4E2A\u6BD4\u8F83\u5B8C\u6574\u7684 babel \u4E86\u3002\u5B9E\u73B0\u7684\u8FC7\u7A0B\u4E2D\u66F4\u80FD\u52A0\u6DF1\u6211\u4EEC\u5BF9 babel\u3001\u5BF9\u8F6C\u8BD1\u5668\u7684\u8BA4\u8BC6\uFF0C\u4E0D\u53EA\u662F\u638C\u63E1 babel \u672C\u8EAB\u3002</p>
<h2 data-id="heading-4">\u603B\u7ED3</h2>
<p>\u8FD9\u4E00\u8282\u8BB2\u4E86\u4E0B\u6574\u4F53\u7684\u601D\u8DEF\uFF0C\u540E\u9762\u7AE0\u8282\u4F1A\u4E00\u6B65\u6B65\u5B9E\u73B0\uFF0C\u5E0C\u671B\u80FD\u591F\u5E2E\u52A9\u5927\u5BB6\u6DF1\u5165 babel \u7684\u672C\u8D28\u3002</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{o as default};
