var e={name:"13\u3001Babel \u7684\u5185\u7F6E\u529F\u80FD\uFF08\u4E0B\uFF09",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>\u4E0A\u4E00\u8282\u6211\u4EEC\u5B66\u4E60\u4E86 babel \u63D2\u4EF6\u7684\u5206\u7C7B\u3001babel \u7684 preset\u3001helper\u3001runtime\u3002babel \u7684\u529F\u80FD\u57FA\u672C\u90FD\u5EFA\u7ACB\u5728\u8FD9\u4E9B\u4E4B\u4E0A\uFF0Cbabel 6 \u5230 babel 7 \u8FD8\u6709\u672A\u6765\u7684 babel 8 \u57FA\u4E8E\u8FD9\u4E9B\u505A\u4E86\u4E0D\u540C\u7684\u8BBE\u8BA1\u3002</p>
<h2 data-id="heading-0">\u4ECE\u76EE\u6807\u8BED\u8A00\u7248\u672C\u5230\u76EE\u6807\u6D4F\u89C8\u5668</h2>
<p>\u6211\u4EEC\u901A\u8FC7\u63D2\u4EF6\u5B8C\u6210\u4E86\u5404\u79CD\u4EE3\u7801\uFF08es next\u3001proposal\u3001typescript/flow/jsx...\uFF09\u5230 es5 \u7684\u8F6C\u6362\uFF0C\u7136\u540E\u628A\u4E0D\u540C\u7684\u8F6C\u6362\u63D2\u4EF6\u5C01\u88C5\u5230\u4E0D\u540C\u7684 preset \uFF08preset-env\u3001preset-typescript\u3001preset-react...\uFF09\u91CC\uFF0C\u800C\u4E14\u8FD8\u628A\u63D2\u4EF6\u5185\u90E8\u7684\u516C\u5171\u903B\u8F91\u62BD\u6210 helper \u6765\u590D\u7528\uFF0C\u5E76\u4E14\u63D0\u4F9B\u4E86 runtime \u5305\u7528\u4E8E\u6CE8\u5165\u8FD0\u884C\u65F6\u7684 api\u3002\u8FD9\u6837\u5DF2\u7ECF\u80FD\u591F\u8FBE\u5230\u4E0D\u540C\u8BED\u6CD5\u7684\u4EE3\u7801\u8F6C es5 \u540C\u65F6\u5BF9 api \u8FDB\u884C polyfill \u7684\u76EE\u6807\u4E86\u3002 \u4F46\u662F\u8FD9\u6837\u5C31\u591F\u4E86\u4E48\uFF1F\u8FD8\u6709\u54EA\u4E9B\u95EE\u9898\uFF1F</p>
<ul>
<li>
<p>\u6211\u4EEC\u73B0\u5728\u662F\u6307\u5B9A\u4E86\u76EE\u6807\u73AF\u5883\u652F\u6301 es5\uFF0C\u90A3\u4E48\u5982\u679C\u76EE\u6807\u73AF\u5883\u652F\u6301\u4E86\u90E8\u5206 es6\uFF08es2015\uFF09\u3001es7\uFF08es2016\uFF09\u7B49\uFF0C\u90A3\u5C82\u4E0D\u662F\u505A\u4E86\u5F88\u591A\u65E0\u7528\u529F\uFF1F</p>
</li>
<li>
<p>preset-es2015\u3001preset-es2016\u3001preset-stage-x \u8FD9\u79CD preset \u8DDF\u968F\u7248\u672C\u8D70\u7684\uFF0C\u90A3\u5C82\u4E0D\u662F\u7ECF\u5E38\u53D8\uFF0C\u5F97\u7ECF\u5E38\u6539\u8FD9\u4E9B preset \u7684\u5185\u5BB9 \uFF08\u5F53\u67D0\u4E2A\u63D0\u6848\u4ECE stage 0 \u8FDB\u5165\u5230 stage 1 \u5C31\u5F97\u6539\u4E0B\uFF09\uFF0C\u8FD9\u6837\u591A\u7D2F\u554A\uFF0C\u800C\u4E14\u7528\u6237\u4E5F\u5F97\u7ECF\u5E38\u6539\u914D\u7F6E\uFF0Cstage-x \u5BF9\u4ED6\u6765\u8BF4\u662F\u4E2A\u9ED1\u76D2\uFF0C\u4E0D\u9760\u8C31\u3002</p>
</li>
</ul>
<p><strong>\u600E\u4E48\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898\u5462\uFF1F</strong></p>
<p>babel6 \u5230 babel7 \u7684\u53D8\u5316\u7ED9\u51FA\u4E86\u7B54\u6848\uFF1A</p>
<p>preset \u7ECF\u5E38\u53D8\u7684\u95EE\u9898\u901A\u8FC7\u5E9F\u5F03 stage-x \u548C es20xx \u7684 preset\uFF0C\u6539\u6210 preset-env \u548C plugin-proposal-xx \u7684\u65B9\u5F0F\u6765\u89E3\u51B3\uFF0C \u8FD9\u6837\u4E0D\u9700\u8981\u6307\u5B9A\u7528\u7684\u662F es \u51E0\u4E86\uFF0C\u9ED8\u8BA4\u4F1A\u5168\u90E8\u652F\u6301\uFF0C\u5305\u542B<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel%2Fblob%2Fmaster%2Fpackages%2Fbabel-compat-data%2Fscripts%2Fdata%2Fplugin-features.js" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/babel/babel/blob/master/packages/babel-compat-data/scripts/data/plugin-features.js" ref="nofollow noopener noreferrer">\u6240\u6709\u7684\u5DF2\u7ECF\u662F\u8BED\u8A00\u6807\u51C6\u7279\u6027\u7684 transform plugin</a>\uFF0C \u800C\u4E14 stage-x \u6709\u54EA\u4E9B\u4E0D\u518D\u662F\u9ED1\u76D2\uFF0C\u7528\u6237\u60F3\u7528\u5565\u8FD8\u5728 proposal \u7684\u7279\u6027\u76F4\u63A5\u663E\u793A\u5F15\u5165\u5BF9\u5E94\u7684 plugin\u3002</p>
<p>\u591A\u8F6C\u6362\u4E86\u76EE\u6807\u73AF\u5883\u652F\u6301\u7684\u8BED\u6CD5\u6216 api \u7684\u95EE\u9898\u662F\u8981\u89E3\u51B3\u8F6C\u6362\u7684\u7CBE\u51C6\u5EA6\u7684\u95EE\u9898\uFF0C\u53EF\u662F\u76EE\u6807\u73AF\u5883\u90A3\u4E48\u591A\uFF0C\u6D4F\u89C8\u5668\u7248\u672C\u3001node \u7248\u672C\u3001electron \u7248\u672C\u6BCF\u5E74\u90FD\u5728\u53D8\uFF0C\u600E\u4E48\u505A\u5230\u7CBE\u51C6\uFF1F</p>
<h5 data-id="heading-1">comat-table</h5>
<p>\u7B54\u6848\u662F compat-table \u7684\u6570\u636E\uFF0Ccompat-table \u63D0\u4F9B\u4E86\u6BCF\u4E2A\u7279\u6027\u5728\u4E0D\u540C\u73AF\u5883\u4E2D\u7684\u652F\u6301\u7248\u672C\u3002</p>
<p>\u6BD4\u5982<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fkangax%2Fcompat-table%2Fblob%2Fgh-pages%2Fdata-es6.js%23L1864-L1904" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/kangax/compat-table/blob/gh-pages/data-es6.js#L1864-L1904" ref="nofollow noopener noreferrer">\u9ED8\u8BA4\u53C2\u6570</a>\u8FD9\u4E2A es2015 \u7684\u7279\u6027\uFF0C\u53EF\u4EE5\u67E5\u5230\u5728 babel6 \u4E14 corejs2 \u4EE5\u4E0A\u652F\u6301\uFF0C\u5728 chrome \u4E2D\u662F 49 \u4EE5\u4E0A\u652F\u6301\uFF0Cchrome48 \u4E2D\u8FD8\u662F\u5B9E\u9A8C\u7279\u6027\uFF0C\u5728 node6 \u4EE5\u4E0A\u652F\u6301\uFF0C\u7B49\u7B49\u3002</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f1adc5fc56d4ec1ad4cb757eb3356c5~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u5149\u662F\u8FD9\u4E9B\u6570\u636E\u8FD8\u4E0D\u591F\uFF0Celectron \u6709\u81EA\u5DF1\u7684\u7248\u672C\uFF0C\u8981\u652F\u6301 electron \u5F97\u9700\u8981 electron \u7248\u672C\u548C\u5B83\u7528\u7684 chromuim \u7684\u7248\u672C\u7684\u5BF9\u5E94\u5173\u7CFB\u3002</p>
<p>\u4E07\u5E78\u6709 electron-to-chromium \u8FD9\u4E2A\u9879\u76EE\uFF0C\u5B83\u7EF4\u62A4\u4E86 <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FKilian%2Felectron-to-chromium%2Fblob%2Fmaster%2Ffull-versions.js" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/Kilian/electron-to-chromium/blob/master/full-versions.js" ref="nofollow noopener noreferrer">electron \u7248\u672C\u5230 chromium \u7248\u672C\u7684\u6620\u5C04\u5173\u7CFB</a>\u3002</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/87e37c9049544f429cd2a48afb434a81~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u4E5F\u53EF\u4EE5\u53CD\u8FC7\u6765\u67E5\u8BE2 <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FKilian%2Felectron-to-chromium%2Fblob%2Fmaster%2Ffull-chromium-versions.js" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/Kilian/electron-to-chromium/blob/master/full-chromium-versions.js" ref="nofollow noopener noreferrer">chromium \u7248\u672C\u5728\u54EA\u4E9B electron \u7248\u672C\u4E2D\u4F7F\u7528</a>\u3002</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d759abbb6a8f422aa791f6ce6e2dd918~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u6709\u4E86\u8FD9\u4E9B\u6570\u636E\uFF0C\u6211\u4EEC\u5C31\u80FD\u77E5\u9053\u6BCF\u4E00\u4E2A\u7279\u6027\u5728\u54EA\u4E9B\u73AF\u5883\u7684\u4EC0\u4E48\u7248\u672C\u652F\u6301\u3002</p>
<p>babel7 \u5728 @babel/compat-data \u8FD9\u4E2A\u5305\u91CC\u9762\u7EF4\u62A4\u4E86\u8FD9\u79CD\u7279\u6027\u5230\u73AF\u5883\u652F\u6301\u7248\u672C\u7684\u6620\u5C04\u5173\u7CFB\uFF0C\u5305\u62EC <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel%2Fblob%2Fmain%2Fpackages%2Fbabel-compat-data%2Fdata%2Fplugins.json" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/babel/babel/blob/main/packages/babel-compat-data/data/plugins.json" ref="nofollow noopener noreferrer">plugin \u5B9E\u73B0\u7684\u7279\u6027\u7684\u7248\u672C\u652F\u6301\u60C5\u51B5</a>\uFF08\u5305\u62EC transform \u548C proposal \uFF09\uFF0C\u4E5F\u5305\u62EC <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel%2Fblob%2Fmain%2Fpackages%2Fbabel-compat-data%2Fdata%2Fcorejs2-built-ins.json" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/babel/babel/blob/main/packages/babel-compat-data/data/corejs2-built-ins.json" ref="nofollow noopener noreferrer">corejs \u6240 polyfill \u7684\u7279\u6027\u7684\u7248\u672C\u652F\u6301\u60C5\u51B5</a>\u3002</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/39ed0641db8a4547a8c857306c22e286~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u8FD9\u6837\u6211\u4EEC\u5C31\u77E5\u9053\u6BCF\u4E00\u4E2A\u7279\u6027\u662F\u5728\u4EC0\u4E48\u73AF\u5883\u4E2D\u652F\u6301\u7684\u4E86\uFF0C\u63A5\u4E0B\u6765\u53EA\u8981\u7528\u6237\u6307\u5B9A\u4E00\u4E2A\u73AF\u5883\uFF0C\u6211\u4EEC\u5C31\u80FD\u505A\u5230\u6309\u9700\u8F6C\u6362\uFF01</p>
<h5 data-id="heading-2">browserslist</h5>
<p>\u90A3\u5F00\u53D1\u8005\u600E\u4E48\u6307\u5B9A\u73AF\u5883\u5462\uFF1F</p>
<p>\u8BA9\u5F00\u53D1\u8005\u5199\u6BCF\u4E2A\u73AF\u5883\u7684\u7248\u672C\u662F\u5565\u80AF\u5B9A\u4E0D\u9760\u8C31\uFF0C\u8FD9\u65F6\u5019\u5C31\u8981\u501F\u52A9 browerslist \u4E86\uFF0C\u5B83\u63D0\u4F9B\u4E86\u4E00\u4E2A\u4ECE query \uFF08\u67E5\u8BE2\u8868\u8FBE\u5F0F\uFF09 \u5230\u5BF9\u5E94\u73AF\u5883\u7248\u672C\u7684\u8F6C\u6362\u3002</p>
<p>\u6BD4\u5982\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 last 1 version \u6765\u67E5\u8BE2\u6700\u65B0\u7684\u5404\u73AF\u5883\u7684\u7248\u672C</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e6aa23bc2102480894c72916418b3eb1~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u4E5F\u53EF\u4EE5\u901A\u8FC7 supports es6-module \u67E5\u8BE2\u6240\u6709\u652F\u6301 es module \u7684\u73AF\u5883\u7248\u672C</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/db1cf4c0f5294a268043e03e0d866327~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u5177\u4F53\u67E5\u8BE2\u7684\u8BED\u6CD5\u6709\u5F88\u591A\uFF0C\u53EF\u4EE5\u53BB <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fbrowserslist%2Fbrowserslist%23queries" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/browserslist/browserslist#queries" ref="nofollow noopener noreferrer">browserslist \u7684 query \u6587\u6863</a>\u4E2D\u5B66\u4E60\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u5C55\u5F00\u4E86\u3002</p>
<h5 data-id="heading-3">@babel/preset-env</h5>
<p>\u73B0\u5728\u6709\u4E86\u4EC0\u4E48\u7279\u6027\u5728\u4EC0\u4E48\u73AF\u5883\u7248\u672C\u4E2D\u652F\u6301\uFF0C\u6709\u4E86\u53EF\u4EE5\u901A\u8FC7 query \u6307\u5B9A\u76EE\u6807\u73AF\u5883\u7248\u672C\u7684\u5DE5\u5177\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u4E0A\u624B\u6539\u4E86\uFF0C\u4ECE\u90FD\u8F6C\u6210 es5 \u5230\u6839\u636E\u76EE\u6807\u73AF\u5883\u786E\u5B9A\u4E0D\u652F\u6301\u7684\u7279\u6027\uFF0C\u53EA\u8F6C\u6362\u8FD9\u90E8\u5206\u7279\u6027\uFF0C\u8FD9\u5C31\u662F @babel/preset-env \u505A\u7684\u4E8B\u60C5\u3002</p>
<p>\u6709\u4E86 @babel/compat-data \u7684\u6570\u636E\uFF0C\u90A3\u4E48\u53EA\u8981\u7528\u6237\u6307\u5B9A\u4ED6\u7684\u76EE\u6807\u73AF\u5883\u662F\u5565\u5C31\u53EF\u4EE5\u4E86\uFF0C\u8FD9\u65F6\u5019\u53EF\u4EE5\u7528 browserslist \u7684 query \u6765\u5199\uFF0C\u6BD4\u5982 <code>last 1 version, &gt; 1%</code> \u8FD9\u79CD\u5B57\u7B26\u4E32\uFF0Cbabel \u4F1A\u4F7F\u7528 brwoserslist \u6765\u628A\u5B83\u4EEC\u8F6C\u6210\u76EE\u6807\u73AF\u5883\u5177\u4F53\u7248\u672C\u7684\u6570\u636E\u3002</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a318db95f7cb4f139981f2f453bdc39e~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u6709\u4E86\u4E0D\u540C\u7279\u6027\u652F\u6301\u7684\u73AF\u5883\u7684\u6700\u4F4E\u7248\u672C\u7684\u6570\u636E\uFF0C\u6709\u4E86\u5177\u4F53\u7684\u7248\u672C\uFF0C\u90A3\u4E48\u8FC7\u6EE4\u51FA\u6765\u7684\u5C31\u662F\u76EE\u6807\u73AF\u5883\u4E0D\u652F\u6301\u7684\u7279\u6027\uFF0C\u7136\u540E\u5F15\u5165\u5B83\u4EEC\u5BF9\u5E94\u7684\u63D2\u4EF6\u5373\u53EF\u3002\u8FD9\u5C31\u662F preset-env \u505A\u7684\u4E8B\u60C5(\u6309\u7167\u76EE\u6807\u73AF\u5883\u6309\u9700\u5F15\u5165\u63D2\u4EF6)\u3002</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ccb1144f8924fb99cc6073859289124~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u914D\u7F6E\u65B9\u5F0F\u6BD4\u5982\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript">{
    <span class="hljs-string">"presets"</span>: [[<span class="hljs-string">"@babel/preset-env"</span>, { <span class="hljs-string">"targets"</span>: <span class="hljs-string">"&gt; 0.25%, not dead"</span> }]]
}
</code></pre>
<p>\u8FD9\u6837\u5C31\u901A\u8FC7 preset-env \u89E3\u51B3\u4E86\u591A\u8F6C\u6362\u4E86\u76EE\u6807\u73AF\u5883\u5DF2\u7ECF\u652F\u6301\u7684\u7279\u6027\u7684\u95EE\u9898\u3002</p>
<p>\u5176\u5B9E polyfill \u4E5F\u53EF\u4EE5\u901A\u8FC7 targets \u6765\u8FC7\u6EE4\u3002</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d8df3916feb4da7b445e8771e779353~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u4E0D\u518D\u624B\u52A8\u5F15\u5165 polyfill\uFF0C\u90A3\u4E48\u600E\u4E48\u5F15\u5165\uFF1F \u5F53\u7136\u662F\u7528 preset-env \u81EA\u52A8\u5F15\u5165\u4E86\u3002\u4F46\u662F\u4E0D\u662F\u9ED8\u8BA4\u5C31\u4F1A\u542F\u7528\u8FD9\u4E2A\u529F\u80FD\uFF0C\u9700\u8981\u914D\u7F6E\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript">{
    <span class="hljs-string">"presets"</span>: [[<span class="hljs-string">"@babel/preset-env"</span>, { 
        <span class="hljs-string">"targets"</span>: <span class="hljs-string">"&gt; 0.25%, not dead"</span>,
        <span class="hljs-string">"useBuiltIns"</span>: <span class="hljs-string">"usage"</span>,<span class="hljs-comment">// or "entry" or "false"</span>
        <span class="hljs-string">"corejs"</span>: <span class="hljs-number">3</span>
    }]]
}
</code></pre>
<p>\u914D\u7F6E\u4E0B corejs \u548C useBuiltIns\u3002</p>
<ul>
<li>
<p>corejs \u5C31\u662F babel 7 \u6240\u7528\u7684 polyfill\uFF0C\u9700\u8981\u6307\u5B9A\u4E0B\u7248\u672C\uFF0Ccorejs 3 \u624D\u652F\u6301\u5B9E\u4F8B\u65B9\u6CD5\uFF08\u6BD4\u5982 Array.prototype.fill \uFF09\u7684 polyfill\u3002</p>
</li>
<li>
<p>useBuiltIns \u5C31\u662F\u4F7F\u7528 polyfill \uFF08corejs\uFF09\u7684\u65B9\u5F0F\uFF0C\u662F\u5728\u5165\u53E3\u5904\u5168\u90E8\u5F15\u5165\uFF08entry\uFF09\uFF0C\u8FD8\u662F\u6BCF\u4E2A\u6587\u4EF6\u5F15\u5165\u7528\u5230\u7684\uFF08usage\uFF09\uFF0C\u6216\u8005\u4E0D\u5F15\u5165\uFF08false\uFF09\u3002</p>
</li>
</ul>
<p>\u914D\u7F6E\u4E86\u8FD9\u4E24\u4E2A option \u5C31\u53EF\u4EE5\u81EA\u52A8\u5F15\u5165 polyfill \u4E86\u3002</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ea48ded51f04512bac80b8e4db809cb~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<h4 data-id="heading-4">@babel/preset-env \u7684\u914D\u7F6E</h4>
<p>\u8FD9\u4E2A\u5305\u7684\u914D\u7F6E\u6BD4\u8F83\u591A\uFF0C\u9996\u5148\u6211\u4EEC\u8981\u6307\u5B9A\u7684\u662F targets\uFF0C\u4E5F\u5C31\u662F browserslist \u7684 query\uFF0C\u8FD9\u4E2A\u540C\u6837\u53EF\u4EE5\u5728 .browserslistrc \u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u6307\u5B9A\uFF08\u522B\u7684\u5DE5\u5177\u4E5F\u53EF\u80FD\u7528\u5230\uFF09\u3002</p>
<h5 data-id="heading-5">targets</h5>
<p>targets \u914D\u5565\u5462\uFF1F</p>
<p>\u53EF\u4EE5\u914D query \u6216\u8005\u76F4\u63A5\u6307\u5B9A\u73AF\u5883\u7248\u672C\uFF08query \u7684\u7ED3\u679C\u4E5F\u662F\u73AF\u5883\u7248\u672C\uFF09\u3002</p>
<p>\u73AF\u5883\u6709\u8FD9\u4E9B\uFF1A</p>
<p>chrome, opera, edge, firefox, safari, ie, ios, android, node, electron</p>
<p>\u53EF\u4EE5\u6307\u5B9A query\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript">{
  <span class="hljs-string">"targets"</span>: <span class="hljs-string">"&gt; 0.25%, not dead"</span>
}
</code></pre>
<p>\u4E5F\u53EF\u4EE5\u76F4\u63A5\u6307\u5B9A\u73AF\u5883\u7248\u672C\uFF1B</p>
<pre><code class="hljs language-javascript" lang="javascript">{
  <span class="hljs-string">"targets"</span>: {
    <span class="hljs-string">"chrome"</span>: <span class="hljs-string">"58"</span>,
    <span class="hljs-string">"ie"</span>: <span class="hljs-string">"11"</span>
  }
}
</code></pre>
<p>\u8981\u6307\u5B9A\u652F\u6301 es module \u7684\u73AF\u5883\uFF0C\u53EF\u4EE5\u4F7F\u7528 query\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 esmodules option\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript">{
    <span class="hljs-string">"targets"</span>: {
        <span class="hljs-string">"esmodules"</span>: <span class="hljs-literal">true</span>
    }
}
</code></pre>
<h5 data-id="heading-6">include &amp; exclude</h5>
<p>\u901A\u8FC7 targets \u7684\u6307\u5B9A\uFF0Cbabel \u4F1A\u81EA\u52A8\u5F15\u5165<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel%2Fblob%2Fmaster%2Fpackages%2Fbabel-compat-data%2Fscripts%2Fdata%2Fplugin-features.js" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/babel/babel/blob/master/packages/babel-compat-data/scripts/data/plugin-features.js" ref="nofollow noopener noreferrer">\u4E00\u4E9B\u63D2\u4EF6</a>\uFF0C\u4F46\u5F53\u9700\u8981\u624B\u52A8\u6307\u5B9A\u8981 include \u6216\u8005 exclude \u4EC0\u4E48\u63D2\u4EF6\u7684\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A option\u3002</p>
<p>\u4E0D\u8FC7\u8FD9\u4E2A\u53EA\u662F\u9488\u5BF9 transform plugin\uFF0C\u5BF9\u4E8E proposal plugin\uFF0C\u8981\u5728 plugins\u7684 option \u5355\u72EC\u5F15\u5165\u3002</p>
<p>\u4E00\u822C\u60C5\u51B5\u4E0B\u5E76\u4E0D\u9700\u8981\u5355\u72EC include \u5565\uFF0C\u7528 babel \u6839\u636E targets \u81EA\u52A8\u5F15\u5165\u7684 transform plugin \u5373\u53EF\uFF0C\u53EA\u662F\u6709\u4E00\u4E9B\u7279\u6B8A\u573A\u666F\u4E0B\u53EF\u80FD\u4F1A\u7528\u5230\u3002</p>
<h5 data-id="heading-7">modules</h5>
<p>targets \u662F\u6307\u5B9A\u76EE\u6807\u73AF\u5883\uFF0Cmodules \u662F\u6307\u5B9A\u76EE\u6807\u6A21\u5757\u89C4\u8303\uFF0C\u53D6\u503C\u6709 amd\u3001umd\u3001systemjs\u3001commonjs (cjs)\u3001auto\u3001false\u3002</p>
<ul>
<li>
<p>amd\u3001umd\u3001systemjs\u3001commonjs (cjs) \u8FD9\u56DB\u4E2A\u5206\u522B\u6307\u5B9A\u4E0D\u540C\u7684\u76EE\u6807\u6A21\u5757\u89C4\u8303</p>
</li>
<li>
<p>false \u662F\u4E0D\u8F6C\u6362\u6A21\u5757\u89C4\u8303</p>
</li>
<li>
<p>auto \u5219\u662F\u81EA\u52A8\u63A2\u6D4B\uFF0C\u9ED8\u8BA4\u503C\u4E5F\u662F\u8FD9\u4E2A\u3002</p>
</li>
</ul>
<p>\u5176\u5B9E\u4E00\u822C\u8FD9\u4E2A option \u90FD\u662F bundler \u6765\u8BBE\u7F6E\u7684\uFF0C\u56E0\u4E3A bundler \u8D1F\u8D23\u6A21\u5757\u8F6C\u6362\uFF0C\u81EA\u7136\u77E5\u9053\u8981\u8F6C\u6362\u6210\u4EC0\u4E48\u6A21\u5757\u89C4\u8303\u3002\u6211\u4EEC\u5E73\u65F6\u5C31\u7528\u9ED8\u8BA4\u503C auto \u5373\u53EF\u3002</p>
<p>\u7C7B\u4F3C babel parser \u53EF\u4EE5\u8BBE\u7F6E moduleType \u4E3A unambiguous\uFF0C\u8BA9 babel \u6839\u636E\u662F\u5426\u5305\u542B import / export \u8BED\u6CD5\u6765\u81EA\u52A8\u8BBE\u7F6E\u4E3A\u5177\u4F53\u7684\u503C\u3002 \u8FD9\u4E2A auto \u4E5F\u662F\u4E00\u6837\uFF0C\u4F1A\u6839\u636E\u63A2\u6D4B\u5230\u7684\u76EE\u6807\u73AF\u5883\u652F\u6301\u7684\u6A21\u5757\u89C4\u8303\u6765\u505A\u8F6C\u6362\u3002\u4F9D\u636E\u662F\u5728 transform \u7684\u65F6\u5019\u4F20\u5165\u7684 caller \u6570\u636E\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript">babel.transformFileSync(<span class="hljs-string">"example.js"</span>, {
  <span class="hljs-attr">caller</span>: {
    <span class="hljs-attr">name</span>: <span class="hljs-string">"my-custom-tool"</span>,
    <span class="hljs-attr">supportsStaticESM</span>: <span class="hljs-literal">true</span>,
  },
});
</code></pre>
<p>\u6BD4\u5982\u5728\u8C03\u7528 transformFile \u7684 api \u7684\u65F6\u5019\u4F20\u5165\u4E86 caller \u662F\u652F\u6301 esm \u7684\uFF0C\u90A3\u4E48\u5728 targets \u7684 modules \u5C31\u4F1A\u81EA\u52A8\u8BBE\u7F6E\u4E3A esm\u3002</p>
<h5 data-id="heading-8">debug</h5>
<p>debug \u8FD9\u4E2A\u53C2\u6570\u914D\u7F6E\u6BD4\u8F83\u7B80\u5355\uFF0C\u5C31\u662F true \u6216\u8005 false\uFF0C\u4F46\u662F\u610F\u4E49\u5374\u5F88\u5927\u3002\u6211\u4EEC\u77E5\u9053 babel \u4F1A\u6839\u636E targets \u652F\u6301\u7684\u7279\u6027\u6765\u8FC7\u6EE4 transform plugins \u548C polyfills\uFF08core-js\uFF09\u3002\u60F3\u77E5\u9053\u6700\u7EC8\u4F7F\u7528\u7684 transform plugin \u548C\u5F15\u5165\u7684 core-js \u6A21\u5757\u662F\u5426\u5BF9\uFF0C\u90A3\u5C31\u53EF\u4EE5\u628A debug \u8BBE\u4E3A true\uFF0C\u8FD9\u6837\u5728\u63A7\u5236\u53F0\u6253\u5370\u8FD9\u4E9B\u6570\u636E\u3002</p>
<p>\u6BD4\u5982</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> sourceCode = <span class="hljs-string">\`
  import "core-js";
  new Array(5).fill('111');
\`</span>;

<span class="hljs-keyword">const</span> { code, map } = babel.transformSync(sourceCode, {
    <span class="hljs-attr">filename</span>: <span class="hljs-string">'a.mjs'</span>,
    <span class="hljs-attr">targets</span>: {
        <span class="hljs-attr">browsers</span>: <span class="hljs-string">'Chrome 45'</span>,
    },
    <span class="hljs-attr">presets</span>: [
        [<span class="hljs-string">'@babel/env'</span>, {
            <span class="hljs-attr">debug</span>: <span class="hljs-literal">true</span>,
            <span class="hljs-attr">useBuiltIns</span>: <span class="hljs-string">'usage'</span>,
            <span class="hljs-attr">corejs</span>: <span class="hljs-number">3</span>
        }]
    ]
});

</code></pre>
<p>\u8BBE\u7F6E debug \u4E3A true\uFF0C\u4F1A\u6253\u5370 targets \u548C\u6839\u636E tragets \u8FC7\u6EE4\u51FA\u7684\u7684 plugin \u548C preset\uFF1A</p>
<pre><code class="">@babel/preset-env: \`DEBUG\` option

Using targets:
{
  "chrome": "45"
}

Using modules transform: auto

Using plugins:
  proposal-numeric-separator { chrome &lt; 75 }
  proposal-logical-assignment-operators { chrome &lt; 85 }
  proposal-nullish-coalescing-operator { chrome &lt; 80 }
  proposal-optional-chaining { chrome }
  proposal-json-strings { chrome &lt; 66 }
  proposal-optional-catch-binding { chrome &lt; 66 }
  transform-parameters { chrome &lt; 49 }
  proposal-async-generator-functions { chrome &lt; 63 }
  proposal-object-rest-spread { chrome &lt; 60 }
  transform-dotall-regex { chrome &lt; 62 }
  proposal-unicode-property-regex { chrome &lt; 64 }
  transform-named-capturing-groups-regex { chrome &lt; 64 }
  transform-async-to-generator { chrome &lt; 55 }
  transform-exponentiation-operator { chrome &lt; 52 }
  transform-function-name { chrome &lt; 51 }
  transform-arrow-functions { chrome &lt; 47 }
  transform-classes { chrome &lt; 46 }
  transform-object-super { chrome &lt; 46 }
  transform-for-of { chrome &lt; 51 }
  transform-sticky-regex { chrome &lt; 49 }
  transform-unicode-regex { chrome &lt; 50 }
  transform-spread { chrome &lt; 46 }
  transform-destructuring { chrome &lt; 51 }
  transform-block-scoping { chrome &lt; 49 }
  transform-new-target { chrome &lt; 46 }
  transform-regenerator { chrome &lt; 50 }
  proposal-export-namespace-from { chrome &lt; 72 }
  transform-modules-commonjs
  proposal-dynamic-import
corejs3: \`DEBUG\` option

Using targets: {
  "chrome": "45"
}

Using polyfills with \`usage-global\` method:
regenerator: \`DEBUG\` option

Using targets: {
  "chrome": "45"
}

Using polyfills with \`usage-global\` method:

  When setting \`useBuiltIns: 'usage'\`, polyfills are automatically imported when needed.
  Please remove the direct import of \`core-js\` or use \`useBuiltIns: 'entry'\` instead.

[/Users/zhaixuguang/code/research/babel/a.mjs]
Based on your code and targets, the corejs3 polyfill did not add any polyfill.

[/Users/zhaixuguang/code/research/babel/a.mjs]
Based on your code and targets, the regenerator polyfill did not add any polyfill.

</code></pre>
<p>\u7528\u5230\u4E86\u54EA\u4E9B\u63D2\u4EF6\u4E00\u76EE\u4E86\u7136\uFF0C\u5F00\u53D1\u65F6\u53EF\u4EE5\u5F00\u542F\u8FD9\u4E2A\u914D\u7F6E\u9879\u3002</p>
<p>\u66F4\u591A\u914D\u7F6E\u9879\u53EF\u4EE5\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-preset-env%23options" target="_blank" rel="nofollow noopener noreferrer" title="https://babeljs.io/docs/en/babel-preset-env#options" ref="nofollow noopener noreferrer">\u6587\u6863\u4E2D</a>\u67E5\u770B\u3002</p>
<h2 data-id="heading-9">\u4ECE\u6CE8\u5165\u5230\u62BD\u79BB</h2>
<p>preset-env \u4F1A\u5728\u4F7F\u7528\u5230\u65B0\u7279\u6027\u7684\u5730\u65B9\u6CE8\u5165 helper \u5230 AST \u4E2D\uFF0C\u5E76\u4E14\u4F1A\u5F15\u5165\u7528\u5230\u7684\u7279\u6027\u7684 polyfill \uFF08corejs + regenerator\uFF09\uFF0C\u8FD9\u6837\u4F1A\u5BFC\u81F4\u4E24\u4E2A\u95EE\u9898\uFF1A</p>
<ul>
<li>\u91CD\u590D\u6CE8\u5165 helper \u7684\u5B9E\u73B0\uFF0C\u5BFC\u81F4\u4EE3\u7801\u5197\u4F59</li>
<li>polyfill \u6C61\u67D3\u5168\u5C40\u73AF\u5883</li>
</ul>
<p>\u89E3\u51B3\u8FD9\u4E24\u4E2A\u95EE\u9898\u7684\u601D\u8DEF\u5C31\u662F\u62BD\u79BB\u51FA\u6765\uFF0C\u7136\u540E\u4F5C\u4E3A\u6A21\u5757\u5F15\u5165\uFF0C\u8FD9\u6837\u591A\u4E2A\u6A21\u5757\u590D\u7528\u540C\u4E00\u4EFD\u4EE3\u7801\u5C31\u4E0D\u4F1A\u5197\u4F59\u4E86\uFF0C\u800C\u4E14 polyfill \u662F\u6A21\u5757\u5316\u5F15\u5165\u7684\u4E5F\u4E0D\u4F1A\u6C61\u67D3\u5168\u5C40\u73AF\u5883\u3002</p>
<p>\u8FD9\u4E2A\u903B\u8F91\u662F\u5728 @babel/plugin-transform-runtime \u5305\u91CC\u5B9E\u73B0\u7684\u3002\u5B83\u53EF\u4EE5\u628A\u76F4\u63A5\u6CE8\u5165\u5168\u5C40\u7684\u65B9\u5F0F\u6539\u6210\u6A21\u5757\u5316\u5F15\u5165\u3002</p>
<p>\u6BD4\u5982\u4F7F\u7528 preset-env \u7684\u65F6\u5019\u662F\u5168\u5C40\u5F15\u5165\u7684\uFF1A</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ea48ded51f04512bac80b8e4db809cb~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u5F53\u5F15\u5165 @babel/plugin-transform-runtime \u5C31\u53EF\u4EE5\u6A21\u5757\u5316\u5F15\u5165\uFF1A</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/64df84f32f6945c19bac48cc7185dee7~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u8FD9\u6837\u5C31\u4E0D\u518D\u6C61\u67D3\u5168\u5C40\u73AF\u5883\u4E86\u3002</p>
<h3 data-id="heading-10">babel7 \u7684\u95EE\u9898</h3>
<p>\u6211\u4EEC\u5148\u6765\u8BD5\u9A8C\u4E00\u4E0B\uFF1A</p>
<p>\u770B\u4E00\u4E0B Array.prototype.fill \u7684\u73AF\u5883\u652F\u6301\u60C5\u51B5\uFF1A</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0cae7d0873384728a404963eff4861c4~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u53EF\u4EE5\u770B\u5230\u5728 Chrome 45 \u53CA\u4EE5\u4E0A\u652F\u6301\u8FD9\u4E2A\u7279\u6027\uFF0C\u800C\u5728 Chrome 44 \u5C31\u4E0D\u652F\u6301\u4E86\u3002</p>
<p>\u6211\u4EEC\u5148\u5355\u72EC\u8BD5\u4E00\u4E0B preset-env\uFF1A</p>
<p>\u5F53\u6307\u5B9A targets \u4E3A Chrome 44 \u65F6\uFF0C\u5E94\u8BE5\u81EA\u52A8\u5F15\u5165polyfill\uFF1A</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f7d43b57304a4d2f9f64af086f5d6098~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u5F53\u6307\u5B9A targets \u4E3A Chrome 45 \u65F6\uFF0C\u4E0D\u9700\u8981\u5F15\u5165polyfill\uFF1A</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f68b5ad95f644518c8419c1847f7765~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u7ED3\u679C\u90FD\u7B26\u5408\u9884\u671F\uFF0C44 \u5F15\u5165\uFF0C45 \u4E0D\u5F15\u5165\u3002</p>
<p>\u6211\u4EEC\u518D\u6765\u8BD5\u8BD5 @babel/plugin-transform-runtime\uFF1A</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9677f1aaba654728aec933b31e632fe0~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u662F\u4E0D\u662F\u53D1\u73B0\u95EE\u9898\u4E86\uFF0CChrome 45 \u4E0D\u662F\u652F\u6301 Array.prototype.fill \u65B9\u6CD5\u4E48\uFF0C\u4E3A\u5565\u8FD8\u662F\u5F15\u5165\u4E86 polyfill\u3002</p>
<p>\u56E0\u4E3A babel \u4E2D\u63D2\u4EF6\u7684\u5E94\u7528\u987A\u5E8F\u662F\uFF1A\u5148 plugin \u518D preset\uFF0Cplugin \u4ECE\u5DE6\u5230\u53F3\uFF0Cpreset \u4ECE\u53F3\u5230\u5DE6\uFF0C\u8FD9\u6837 plugin-transform-runtime \u662F\u5728 preset-env \u524D\u9762\u7684\u3002\u7B49 @babel/plugin-transform-runtime \u8F6C\u5B8C\u4E86\u4E4B\u540E\uFF0C\u518D\u4EA4\u7ED9 preset-env \u8FD9\u65F6\u5019\u5DF2\u7ECF\u505A\u4E86\u65E0\u7528\u7684\u8F6C\u6362\u4E86\u3002\u800C @babel/plugin-transform-runtime \u5E76\u4E0D\u652F\u6301 targets \u7684\u914D\u7F6E\uFF0C\u5C31\u4F1A\u505A\u4E00\u4E9B\u591A\u4F59\u7684\u8F6C\u6362\u548C polyfill\u3002</p>
<p>\u8FD9\u4E2A\u95EE\u9898\u5728\u5373\u5C06\u5230\u6765\u7684 babel8 \u4E2D\u5F97\u5230\u4E86\u89E3\u51B3\u3002</p>
<h3 data-id="heading-11">babel8</h3>
<p>babel8 \u63D0\u4F9B\u4E86 <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel-polyfills" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/babel/babel-polyfills" ref="nofollow noopener noreferrer">\u4E00\u7CFB\u5217 babel polyfill \u7684\u5305 </a>  \uFF0C\u89E3\u51B3\u4E86 babel7 \u7684 @babel/plugin-transform-runtime \u7684\u9057\u7559\u95EE\u9898\uFF0C\u53EF\u4EE5\u901A\u8FC7 targets \u6765\u6309\u9700\u7CBE\u51C6\u5F15\u5165 polyfill\u3002</p>
<p>babel8 \u652F\u6301\u914D\u7F6E\u4E00\u4E2A polyfill provider\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F60\u53EF\u4EE5\u6307\u5B9A corejs2\u3001corejs3\u3001es-shims \u7B49 polyfill\uFF0C\u8FD8\u53EF\u4EE5\u81EA\u5B9A\u4E49 polyfil\u3002</p>
<p>\u6709\u4E86 polyfill \u6E90\u4E4B\u540E\uFF0C\u4F7F\u7528 polyfill \u7684\u65B9\u5F0F\u4E5F\u628A\u4E4B\u524D transform-runtime \u505A\u7684\u4E8B\u60C5\u5185\u7F6E\u4E86\uFF0C\u4ECE\u4E4B\u524D\u7684 useBuiltIns: entry\u3001 useBuiltIns: usage \u7684\u4E24\u79CD\uFF0C\u53D8\u6210\u4E86 3 \u79CD\uFF1A</p>
<ul>
<li>entry-global: \u8FD9\u4E2A\u548C\u4E4B\u524D\u7684 useBuiltIns: entry \u5BF9\u6807\uFF0C\u5C31\u662F\u5168\u5C40\u5F15\u5165 polyfill\u3002</li>
</ul>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/202c38690dfe455b8c033d6e54ede9b2~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<ul>
<li>usage-entry: \u8FD9\u4E2A\u548C useBuiltIns: usage \u5BF9\u6807\uFF0C\u5C31\u662F\u5177\u4F53\u6A21\u5757\u5F15\u5165\u7528\u5230\u7684 polyfill\u3002</li>
</ul>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/21d206affa374e53a786592e6a0cfa6e~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<ul>
<li>usage-pure\uFF1A\u8FD9\u4E2A\u5C31\u662F\u4E4B\u524D\u9700\u8981 transform-runtime \u63D2\u4EF6\u505A\u7684\u4E8B\u60C5\uFF0C\u4F7F\u7528\u4E0D\u6C61\u67D3\u5168\u5C40\u53D8\u91CF\u7684 pure \u7684\u65B9\u5F0F\u5F15\u5165\u5177\u4F53\u6A21\u5757\u7528\u5230\u7684 polyfill.</li>
</ul>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/51c65f9672d34c04814142bf04ccc8b9~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u5176\u5B9E\u8FD9\u4E09\u79CD\u65B9\u5F0F babel 7 \u4E5F\u652F\u6301\uFF0C\u4F46\u662F babel8 \u4E0D\u518D\u9700\u8981 transform-runtime \u63D2\u4EF6\u4E86\uFF0C\u800C\u4E14\u8FD8\u652F\u6301\u4E86 polyfill provider \u7684\u914D\u7F6E\u3002</p>
<h2 data-id="heading-12">\u601D\u8DEF\u68B3\u7406</h2>
<p>babel \u7684\u529F\u80FD\u90FD\u662F\u901A\u8FC7\u63D2\u4EF6\u5B8C\u6210\u7684\uFF0C\u4F46\u662F\u76F4\u63A5\u6307\u5B9A\u63D2\u4EF6\u592A\u8FC7\u9EBB\u70E6\uFF0C\u6240\u4EE5\u8BBE\u8BA1\u51FA\u4E86 preset\uFF0C\u6211\u4EEC\u5B66\u4E60 babel \u7684\u5185\u7F6E\u529F\u80FD\u57FA\u672C\u7B49\u4EF7\u4E8E\u5B66\u4E60 preset \u7684\u4F7F\u7528\u3002\u4E3B\u8981\u662F preset-env\u3001preset-typescript \u8FD9\u4E9B\u3002</p>
<p>\u4F46\u662F\u4E00\u4E9B proposal \u7684\u63D2\u4EF6\u9700\u8981\u5355\u72EC\u5F15\u5165\uFF0C\u5E76\u4E14 @babel/plugin-transform-runtime\u4E5F\u8981\u5355\u72EC\u5F15\u5165\u3002</p>
<p>\u5B66\u4E60\u5185\u7F6E\u529F\u80FD\u7684\u8BDD preset \u662F\u91CD\u70B9\uFF0C\u4F46\u662F\u6700\u7EC8\u5B8C\u6210\u529F\u80FD\u7684\u8FD8\u662F\u901A\u8FC7\u63D2\u4EF6\u3002\u5C0F\u518C\u7684\u91CD\u70B9\u5728\u4E8E\u63D2\u4EF6\u4E0A\uFF0C\u4ECB\u7ECD\u5185\u7F6E\u7684 preset \u53EA\u662F\u68B3\u7406\u4E0B babel \u5B9E\u73B0\u7F16\u8BD1\u7684\u601D\u8DEF\u3002</p>
<h2 data-id="heading-13">\u603B\u7ED3</h2>
<p>\u4E0A\u4E00\u8282\u6211\u4EEC\u57FA\u4E8E plugin \u548C preset \u5DF2\u7ECF\u80FD\u591F\u5B8C\u6210 esnext \u7B49\u4EE3\u7801\u8F6C\u76EE\u6807\u73AF\u5883 js \u4EE3\u7801\u7684\u529F\u80FD\uFF0C\u4F46\u662F\u8FD8\u4E0D\u5B8C\u7F8E\u3002</p>
<p>\u8FD9\u4E00\u8282\u6211\u4EEC\u4ECB\u7ECD\u4E86 @babel/preset-env\uFF0C\u5B83\u57FA\u4E8E\u6BCF\u79CD\u7279\u6027\u7684\u5728\u4E0D\u540C\u73AF\u5883\u7684\u6700\u4F4E\u652F\u6301\u7248\u672C\u7684\u6570\u636E\u548C\u914D\u7F6E\u7684 targets \u6765\u8FC7\u6EE4\u63D2\u4EF6\uFF0C\u8FD9\u6837\u80FD\u51CF\u5C11\u5F88\u591A\u6CA1\u5FC5\u8981\u7684\u8F6C\u6362\u548C polyfill\u3002</p>
<p>\u5982\u679C\u5E0C\u671B\u628A\u4E00\u4E9B\u516C\u5171\u7684 helper\u3001core-js\u3001regenerator \u7B49\u6CE8\u5165\u7684 runtime \u51FD\u6570\u62BD\u79BB\u51FA\u6765\uFF0C\u5E76\u4E14\u4EE5\u6A21\u5757\u5316\u7684\u65B9\u5F0F\u5F15\u5165\uFF0C\u90A3\u4E48\u9700\u8981\u7528 @babel/plugin-transform-runtime \u8FD9\u4E2A\u5305\u3002</p>
<p>@babel/plugin-transform-runtime \u4E0D\u652F\u6301\u6839\u636E targets \u7684\u8FC7\u6EE4\uFF0C\u548C @babel/preset-env \u914D\u5408\u65F6\u6709\u95EE\u9898\uFF0C\u8FD9\u4E2A\u5728 babel8 \u4E2D\u5F97\u5230\u4E86\u89E3\u51B3\u3002babel8 \u63D0\u4F9B\u4E86\u5F88\u591A babel polyfill \u5305\uFF0C\u652F\u6301\u4E86 polyfill provider \u7684\u914D\u7F6E\uFF0C\u800C\u4E14\u8FD8\u53EF\u4EE5\u9009\u62E9\u6CE8\u5165\u65B9\u5F0F\u3002\u4E0D\u518D\u9700\u8981 @babel/plugin-transform-runtime \u63D2\u4EF6\u4E86\u3002</p>
<p>\u5B66\u5B8C\u8FD9\u4E00\u8282\uFF0C\u6211\u4EEC\u77E5\u9053\u4E86 babel \u5982\u4F55\u57FA\u4E8E\u6570\u636E\u505A\u5230\u7CBE\u51C6\u7684\u8F6C\u6362\uFF0C\u5982\u4F55\u8BBE\u8BA1 preset\uFF0C\u8FD9\u5BF9\u6211\u4EEC\u8BBE\u8BA1 preset \u6216\u8BB8\u4E5F\u6709\u4E00\u4E9B\u542F\u53D1\u3002</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{e as default};
