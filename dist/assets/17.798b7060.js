var n={name:"Webpack \u6027\u80FD\u4F18\u5316",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h1 data-id="heading-0">Webpack \u6027\u80FD\u4F18\u5316</h1>
<p>\u5728\u8FD9\u4E00\u7684\u7AE0\u8282\u4E2D\uFF0C\u6211\u4E0D\u4F1A\u6D6A\u8D39\u7BC7\u5E45\u7ED9\u5927\u5BB6\u8BB2\u5982\u4F55\u5199\u914D\u7F6E\u6587\u4EF6\u3002<strong>\u5982\u679C\u4F60\u60F3\u5B66\u4E60\u8FD9\u65B9\u9762\u7684\u5185\u5BB9\uFF0C\u90A3\u4E48\u5B8C\u5168\u53EF\u4EE5\u53BB\u5B98\u7F51\u5B66\u4E60</strong>\u3002\u5728\u8FD9\u90E8\u5206\u7684\u5185\u5BB9\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u805A\u7126\u4E8E\u4EE5\u4E0B\u4E24\u4E2A\u77E5\u8BC6\u70B9\uFF0C\u5E76\u4E14\u6BCF\u4E00\u4E2A\u77E5\u8BC6\u70B9\u90FD\u5C5E\u4E8E\u9AD8\u9891\u8003\u70B9\uFF1A</p>
<ul>
<li>\u6709\u54EA\u4E9B\u65B9\u5F0F\u53EF\u4EE5\u51CF\u5C11 Webpack \u7684\u6253\u5305\u65F6\u95F4</li>
<li>\u6709\u54EA\u4E9B\u65B9\u5F0F\u53EF\u4EE5\u8BA9 Webpack \u6253\u51FA\u6765\u7684\u5305\u66F4\u5C0F</li>
</ul>
<h2 data-id="heading-1">\u51CF\u5C11 Webpack \u6253\u5305\u65F6\u95F4</h2>
<h3 data-id="heading-2">\u4F18\u5316 Loader</h3>
<p>\u5BF9\u4E8E Loader \u6765\u8BF4\uFF0C\u5F71\u54CD\u6253\u5305\u6548\u7387\u9996\u5F53\u5176\u51B2\u5FC5\u5C5E Babel \u4E86\u3002\u56E0\u4E3A Babel \u4F1A\u5C06\u4EE3\u7801\u8F6C\u4E3A\u5B57\u7B26\u4E32\u751F\u6210 AST\uFF0C\u7136\u540E\u5BF9 AST \u7EE7\u7EED\u8FDB\u884C\u8F6C\u53D8\u6700\u540E\u518D\u751F\u6210\u65B0\u7684\u4EE3\u7801\uFF0C\u9879\u76EE\u8D8A\u5927\uFF0C<strong>\u8F6C\u6362\u4EE3\u7801\u8D8A\u591A\uFF0C\u6548\u7387\u5C31\u8D8A\u4F4E</strong>\u3002\u5F53\u7136\u4E86\uFF0C\u6211\u4EEC\u662F\u6709\u529E\u6CD5\u4F18\u5316\u7684\u3002</p>
<p>\u9996\u5148\u6211\u4EEC\u53EF\u4EE5<strong>\u4F18\u5316 Loader \u7684\u6587\u4EF6\u641C\u7D22\u8303\u56F4</strong></p>
<pre><code lang="js" class=""><span>module</span>.exports = {
  <span>module</span>: {
    <span>rules</span>: [
      {
        <span>// js \u6587\u4EF6\u624D\u4F7F\u7528 babel</span>
        test: <span>/\\.js$/</span>,
        <span>loader</span>: <span>'babel-loader'</span>,
        <span>// \u53EA\u5728 src \u6587\u4EF6\u5939\u4E0B\u67E5\u627E</span>
        include: [resolve(<span>'src'</span>)],
        <span>// \u4E0D\u4F1A\u53BB\u67E5\u627E\u7684\u8DEF\u5F84</span>
        exclude: <span>/node_modules/</span>
      }
    ]
  }
}
</code></pre><p>\u5BF9\u4E8E Babel \u6765\u8BF4\uFF0C\u6211\u4EEC\u80AF\u5B9A\u662F\u5E0C\u671B\u53EA\u4F5C\u7528\u5728 JS \u4EE3\u7801\u4E0A\u7684\uFF0C\u7136\u540E <code>node_modules</code> \u4E2D\u4F7F\u7528\u7684\u4EE3\u7801\u90FD\u662F\u7F16\u8BD1\u8FC7\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E5F\u5B8C\u5168\u6CA1\u6709\u5FC5\u8981\u518D\u53BB\u5904\u7406\u4E00\u904D\u3002</p>
<p>\u5F53\u7136\u8FD9\u6837\u505A\u8FD8\u4E0D\u591F\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u5C06 Babel \u7F16\u8BD1\u8FC7\u7684\u6587\u4EF6<strong>\u7F13\u5B58</strong>\u8D77\u6765\uFF0C\u4E0B\u6B21\u53EA\u9700\u8981\u7F16\u8BD1\u66F4\u6539\u8FC7\u7684\u4EE3\u7801\u6587\u4EF6\u5373\u53EF\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5927\u5E45\u5EA6\u52A0\u5FEB\u6253\u5305\u65F6\u95F4</p>
<pre><code lang="js" class="">loader: <span>'babel-loader?cacheDirectory=true'</span>
</code></pre><h3 data-id="heading-3">HappyPack</h3>
<p>\u53D7\u9650\u4E8E Node \u662F\u5355\u7EBF\u7A0B\u8FD0\u884C\u7684\uFF0C\u6240\u4EE5 Webpack \u5728\u6253\u5305\u7684\u8FC7\u7A0B\u4E2D\u4E5F\u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u7279\u522B\u662F\u5728\u6267\u884C Loader \u7684\u65F6\u5019\uFF0C\u957F\u65F6\u95F4\u7F16\u8BD1\u7684\u4EFB\u52A1\u5F88\u591A\uFF0C\u8FD9\u6837\u5C31\u4F1A\u5BFC\u81F4\u7B49\u5F85\u7684\u60C5\u51B5\u3002</p>
<p><strong>HappyPack \u53EF\u4EE5\u5C06 Loader \u7684\u540C\u6B65\u6267\u884C\u8F6C\u6362\u4E3A\u5E76\u884C\u7684</strong>\uFF0C\u8FD9\u6837\u5C31\u80FD\u5145\u5206\u5229\u7528\u7CFB\u7EDF\u8D44\u6E90\u6765\u52A0\u5FEB\u6253\u5305\u6548\u7387\u4E86</p>
<pre><code lang="js" class=""><span>module</span>: {
  <span>loaders</span>: [
    {
      <span>test</span>: <span>/\\.js$/</span>,
      <span>include</span>: [resolve(<span>'src'</span>)],
      <span>exclude</span>: <span>/node_modules/</span>,
      <span>// id \u540E\u9762\u7684\u5185\u5BB9\u5BF9\u5E94\u4E0B\u9762</span>
      loader: <span>'happypack/loader?id=happybabel'</span>
    }
  ]
},
<span>plugins</span>: [
  <span>new</span> HappyPack({
    <span>id</span>: <span>'happybabel'</span>,
    <span>loaders</span>: [<span>'babel-loader?cacheDirectory'</span>],
    <span>// \u5F00\u542F 4 \u4E2A\u7EBF\u7A0B</span>
    threads: <span>4</span>
  })
]
</code></pre><h3 data-id="heading-4">DllPlugin</h3>
<p><strong>DllPlugin \u53EF\u4EE5\u5C06\u7279\u5B9A\u7684\u7C7B\u5E93\u63D0\u524D\u6253\u5305\u7136\u540E\u5F15\u5165</strong>\u3002\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u6781\u5927\u7684\u51CF\u5C11\u6253\u5305\u7C7B\u5E93\u7684\u6B21\u6570\uFF0C\u53EA\u6709\u5F53\u7C7B\u5E93\u66F4\u65B0\u7248\u672C\u624D\u6709\u9700\u8981\u91CD\u65B0\u6253\u5305\uFF0C\u5E76\u4E14\u4E5F\u5B9E\u73B0\u4E86\u5C06\u516C\u5171\u4EE3\u7801\u62BD\u79BB\u6210\u5355\u72EC\u6587\u4EF6\u7684\u4F18\u5316\u65B9\u6848\u3002</p>
<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u6765\u5B66\u4E60\u5982\u4F55\u4F7F\u7528 DllPlugin</p>
<pre><code lang="js" class=""><span>// \u5355\u72EC\u914D\u7F6E\u5728\u4E00\u4E2A\u6587\u4EF6\u4E2D</span>
<span>// webpack.dll.conf.js</span>
<span>const</span> path = <span>require</span>(<span>'path'</span>)
<span>const</span> webpack = <span>require</span>(<span>'webpack'</span>)
<span>module</span>.exports = {
  <span>entry</span>: {
    <span>// \u60F3\u7EDF\u4E00\u6253\u5305\u7684\u7C7B\u5E93</span>
    vendor: [<span>'react'</span>]
  },
  <span>output</span>: {
    <span>path</span>: path.join(__dirname, <span>'dist'</span>),
    <span>filename</span>: <span>'[name].dll.js'</span>,
    <span>library</span>: <span>'[name]-[hash]'</span>
  },
  <span>plugins</span>: [
    <span>new</span> webpack.DllPlugin({
      <span>// name \u5FC5\u987B\u548C output.library \u4E00\u81F4</span>
      name: <span>'[name]-[hash]'</span>,
      <span>// \u8BE5\u5C5E\u6027\u9700\u8981\u4E0E DllReferencePlugin \u4E2D\u4E00\u81F4</span>
      context: __dirname,
      <span>path</span>: path.join(__dirname, <span>'dist'</span>, <span>'[name]-manifest.json'</span>)
    })
  ]
}
</code></pre><p>\u7136\u540E\u6211\u4EEC\u9700\u8981\u6267\u884C\u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\u751F\u6210\u4F9D\u8D56\u6587\u4EF6\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u9700\u8981\u4F7F\u7528 <code>DllReferencePlugin</code> \u5C06\u4F9D\u8D56\u6587\u4EF6\u5F15\u5165\u9879\u76EE\u4E2D</p>
<pre><code lang="js" class=""><span>// webpack.conf.js</span>
<span>module</span>.exports = {
  <span>// ...\u7701\u7565\u5176\u4ED6\u914D\u7F6E</span>
  plugins: [
    <span>new</span> webpack.DllReferencePlugin({
      <span>context</span>: __dirname,
      <span>// manifest \u5C31\u662F\u4E4B\u524D\u6253\u5305\u51FA\u6765\u7684 json \u6587\u4EF6</span>
      manifest: <span>require</span>(<span>'./dist/vendor-manifest.json'</span>),
    })
  ]
}
</code></pre><h3 data-id="heading-5">\u4EE3\u7801\u538B\u7F29</h3>
<p>\u5728 Webpack3 \u4E2D\uFF0C\u6211\u4EEC\u4E00\u822C\u4F7F\u7528 <code>UglifyJS</code> \u6765\u538B\u7F29\u4EE3\u7801\uFF0C\u4F46\u662F\u8FD9\u4E2A\u662F\u5355\u7EBF\u7A0B\u8FD0\u884C\u7684\uFF0C\u4E3A\u4E86\u52A0\u5FEB\u6548\u7387\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>webpack-parallel-uglify-plugin</code> \u6765\u5E76\u884C\u8FD0\u884C <code>UglifyJS</code>\uFF0C\u4ECE\u800C\u63D0\u9AD8\u6548\u7387\u3002</p>
<p>\u5728 Webpack4 \u4E2D\uFF0C\u6211\u4EEC\u5C31\u4E0D\u9700\u8981\u4EE5\u4E0A\u8FD9\u4E9B\u64CD\u4F5C\u4E86\uFF0C\u53EA\u9700\u8981\u5C06 <code>mode</code> \u8BBE\u7F6E\u4E3A <code>production</code> \u5C31\u53EF\u4EE5\u9ED8\u8BA4\u5F00\u542F\u4EE5\u4E0A\u529F\u80FD\u3002\u4EE3\u7801\u538B\u7F29\u4E5F\u662F\u6211\u4EEC\u5FC5\u505A\u7684\u6027\u80FD\u4F18\u5316\u65B9\u6848\uFF0C\u5F53\u7136\u6211\u4EEC\u4E0D\u6B62\u53EF\u4EE5\u538B\u7F29 JS \u4EE3\u7801\uFF0C\u8FD8\u53EF\u4EE5\u538B\u7F29 HTML\u3001CSS \u4EE3\u7801\uFF0C\u5E76\u4E14\u5728\u538B\u7F29 JS \u4EE3\u7801\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u5B9E\u73B0\u6BD4\u5982\u5220\u9664 <code>console.log</code> \u8FD9\u7C7B\u4EE3\u7801\u7684\u529F\u80FD\u3002</p>
<h3 data-id="heading-6">\u4E00\u4E9B\u5C0F\u7684\u4F18\u5316\u70B9</h3>
<p>\u6211\u4EEC\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E9B\u5C0F\u7684\u4F18\u5316\u70B9\u6765\u52A0\u5FEB\u6253\u5305\u901F\u5EA6</p>
<ul>
<li><code>resolve.extensions</code>\uFF1A\u7528\u6765\u8868\u660E\u6587\u4EF6\u540E\u7F00\u5217\u8868\uFF0C\u9ED8\u8BA4\u67E5\u627E\u987A\u5E8F\u662F <code>['.js', '.json']</code>\uFF0C\u5982\u679C\u4F60\u7684\u5BFC\u5165\u6587\u4EF6\u6CA1\u6709\u6DFB\u52A0\u540E\u7F00\u5C31\u4F1A\u6309\u7167\u8FD9\u4E2A\u987A\u5E8F\u67E5\u627E\u6587\u4EF6\u3002\u6211\u4EEC\u5E94\u8BE5\u5C3D\u53EF\u80FD\u51CF\u5C11\u540E\u7F00\u5217\u8868\u957F\u5EA6\uFF0C\u7136\u540E\u5C06\u51FA\u73B0\u9891\u7387\u9AD8\u7684\u540E\u7F00\u6392\u5728\u524D\u9762</li>
<li><code>resolve.alias</code>\uFF1A\u53EF\u4EE5\u901A\u8FC7\u522B\u540D\u7684\u65B9\u5F0F\u6765\u6620\u5C04\u4E00\u4E2A\u8DEF\u5F84\uFF0C\u80FD\u8BA9 Webpack \u66F4\u5FEB\u627E\u5230\u8DEF\u5F84</li>
<li><code>module.noParse</code>\uFF1A\u5982\u679C\u4F60\u786E\u5B9A\u4E00\u4E2A\u6587\u4EF6\u4E0B\u6CA1\u6709\u5176\u4ED6\u4F9D\u8D56\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u8BE5\u5C5E\u6027\u8BA9 Webpack \u4E0D\u626B\u63CF\u8BE5\u6587\u4EF6\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u5BF9\u4E8E\u5927\u578B\u7684\u7C7B\u5E93\u5F88\u6709\u5E2E\u52A9</li>
</ul>
<h2 data-id="heading-7">\u51CF\u5C11 Webpack \u6253\u5305\u540E\u7684\u6587\u4EF6\u4F53\u79EF</h2>
<blockquote><p>\u6CE8\u610F\uFF1A\u8BE5\u5185\u5BB9\u4E5F\u5C5E\u4E8E\u6027\u80FD\u4F18\u5316\u9886\u57DF\u3002
</p></blockquote><h3 data-id="heading-8">\u6309\u9700\u52A0\u8F7D</h3>
<p>\u60F3\u5FC5\u5927\u5BB6\u5728\u5F00\u53D1 SPA \u9879\u76EE\u7684\u65F6\u5019\uFF0C\u9879\u76EE\u4E2D\u90FD\u4F1A\u5B58\u5728\u5341\u51E0\u751A\u81F3\u66F4\u591A\u7684\u8DEF\u7531\u9875\u9762\u3002\u5982\u679C\u6211\u4EEC\u5C06\u8FD9\u4E9B\u9875\u9762\u5168\u90E8\u6253\u5305\u8FDB\u4E00\u4E2A JS \u6587\u4EF6\u7684\u8BDD\uFF0C\u867D\u7136\u5C06\u591A\u4E2A\u8BF7\u6C42\u5408\u5E76\u4E86\uFF0C\u4F46\u662F\u540C\u6837\u4E5F\u52A0\u8F7D\u4E86\u5F88\u591A\u5E76\u4E0D\u9700\u8981\u7684\u4EE3\u7801\uFF0C\u8017\u8D39\u4E86\u66F4\u957F\u7684\u65F6\u95F4\u3002\u90A3\u4E48\u4E3A\u4E86\u9996\u9875\u80FD\u66F4\u5FEB\u5730\u5448\u73B0\u7ED9\u7528\u6237\uFF0C\u6211\u4EEC\u80AF\u5B9A\u662F\u5E0C\u671B\u9996\u9875\u80FD\u52A0\u8F7D\u7684\u6587\u4EF6\u4F53\u79EF\u8D8A\u5C0F\u8D8A\u597D\uFF0C<strong>\u8FD9\u65F6\u5019\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528\u6309\u9700\u52A0\u8F7D\uFF0C\u5C06\u6BCF\u4E2A\u8DEF\u7531\u9875\u9762\u5355\u72EC\u6253\u5305\u4E3A\u4E00\u4E2A\u6587\u4EF6</strong>\u3002\u5F53\u7136\u4E0D\u4EC5\u4EC5\u8DEF\u7531\u53EF\u4EE5\u6309\u9700\u52A0\u8F7D\uFF0C\u5BF9\u4E8E <code>loadash</code> \u8FD9\u79CD\u5927\u578B\u7C7B\u5E93\u540C\u6837\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u529F\u80FD\u3002</p>
<p>\u6309\u9700\u52A0\u8F7D\u7684\u4EE3\u7801\u5B9E\u73B0\u8FD9\u91CC\u5C31\u4E0D\u8BE6\u7EC6\u5C55\u5F00\u4E86\uFF0C\u56E0\u4E3A\u9274\u4E8E\u7528\u7684\u6846\u67B6\u4E0D\u540C\uFF0C\u5B9E\u73B0\u8D77\u6765\u90FD\u662F\u4E0D\u4E00\u6837\u7684\u3002\u5F53\u7136\u4E86\uFF0C\u867D\u7136\u4ED6\u4EEC\u7684\u7528\u6CD5\u53EF\u80FD\u4E0D\u540C\uFF0C\u4F46\u662F\u5E95\u5C42\u7684\u673A\u5236\u90FD\u662F\u4E00\u6837\u7684\u3002\u90FD\u662F\u5F53\u4F7F\u7528\u7684\u65F6\u5019\u518D\u53BB\u4E0B\u8F7D\u5BF9\u5E94\u6587\u4EF6\uFF0C\u8FD4\u56DE\u4E00\u4E2A <code>Promise</code>\uFF0C\u5F53 <code>Promise</code> \u6210\u529F\u4EE5\u540E\u53BB\u6267\u884C\u56DE\u8C03\u3002</p>
<h3 data-id="heading-9">Scope Hoisting</h3>
<p><strong>Scope Hoisting \u4F1A\u5206\u6790\u51FA\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u5C3D\u53EF\u80FD\u7684\u628A\u6253\u5305\u51FA\u6765\u7684\u6A21\u5757\u5408\u5E76\u5230\u4E00\u4E2A\u51FD\u6570\u4E2D\u53BB\u3002</strong></p>
<p>\u6BD4\u5982\u6211\u4EEC\u5E0C\u671B\u6253\u5305\u4E24\u4E2A\u6587\u4EF6</p>
<pre><code lang="js" class=""><span>// test.js</span>
<span>export</span> <span>const</span> a = <span>1</span>
<span>// index.js</span>
<span>import</span> { a } <span>from</span> <span>'./test.js'</span>
</code></pre><p>\u5BF9\u4E8E\u8FD9\u79CD\u60C5\u51B5\uFF0C\u6211\u4EEC\u6253\u5305\u51FA\u6765\u7684\u4EE3\u7801\u4F1A\u7C7B\u4F3C\u8FD9\u6837</p>
<pre><code lang="js" class="">[
  <span>/* 0 */</span>
  <span><span>function</span> (<span>module, exports, require</span>) </span>{
    <span>//...</span>
  },
  <span>/* 1 */</span>
  <span><span>function</span> (<span>module, exports, require</span>) </span>{
    <span>//...</span>
  }
]
</code></pre><p>\u4F46\u662F\u5982\u679C\u6211\u4EEC\u4F7F\u7528 Scope Hoisting \u7684\u8BDD\uFF0C\u4EE3\u7801\u5C31\u4F1A\u5C3D\u53EF\u80FD\u7684\u5408\u5E76\u5230\u4E00\u4E2A\u51FD\u6570\u4E2D\u53BB\uFF0C\u4E5F\u5C31\u53D8\u6210\u4E86\u8FD9\u6837\u7684\u7C7B\u4F3C\u4EE3\u7801</p>
<pre><code lang="js" class="">[
  <span>/* 0 */</span>
  <span><span>function</span> (<span>module, exports, require</span>) </span>{
    <span>//...</span>
  }
]
</code></pre><p>\u8FD9\u6837\u7684\u6253\u5305\u65B9\u5F0F\u751F\u6210\u7684\u4EE3\u7801\u660E\u663E\u6BD4\u4E4B\u524D\u7684\u5C11\u591A\u4E86\u3002\u5982\u679C\u5728 Webpack4 \u4E2D\u4F60\u5E0C\u671B\u5F00\u542F\u8FD9\u4E2A\u529F\u80FD\uFF0C\u53EA\u9700\u8981\u542F\u7528 <code>optimization.concatenateModules</code> \u5C31\u53EF\u4EE5\u4E86\u3002</p>
<pre><code lang="js" class=""><span>module</span>.exports = {
  <span>optimization</span>: {
    <span>concatenateModules</span>: <span>true</span>
  }
}
</code></pre><h3 data-id="heading-10">Tree Shaking</h3>
<p><strong>Tree Shaking \u53EF\u4EE5\u5B9E\u73B0\u5220\u9664\u9879\u76EE\u4E2D\u672A\u88AB\u5F15\u7528\u7684\u4EE3\u7801</strong>\uFF0C\u6BD4\u5982</p>
<pre><code lang="js" class=""><span>// test.js</span>
<span>export</span> <span>const</span> a = <span>1</span>
<span>export</span> <span>const</span> b = <span>2</span>
<span>// index.js</span>
<span>import</span> { a } <span>from</span> <span>'./test.js'</span>
</code></pre><p>\u5BF9\u4E8E\u4EE5\u4E0A\u60C5\u51B5\uFF0C<code>test</code> \u6587\u4EF6\u4E2D\u7684\u53D8\u91CF <code>b</code> \u5982\u679C\u6CA1\u6709\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\u5230\u7684\u8BDD\uFF0C\u5C31\u4E0D\u4F1A\u88AB\u6253\u5305\u5230\u6587\u4EF6\u4E2D\u3002</p>
<p>\u5982\u679C\u4F60\u4F7F\u7528 Webpack 4 \u7684\u8BDD\uFF0C\u5F00\u542F\u751F\u4EA7\u73AF\u5883\u5C31\u4F1A\u81EA\u52A8\u542F\u52A8\u8FD9\u4E2A\u4F18\u5316\u529F\u80FD\u3002</p>
<h2 data-id="heading-11">\u5C0F\u7ED3</h2>
<p>\u5728\u8FD9\u4E00\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u5B66\u4E60\u4E86\u5982\u4F55\u4F7F\u7528 Webpack \u53BB\u8FDB\u884C\u6027\u80FD\u4F18\u5316\u4EE5\u53CA\u5982\u4F55\u51CF\u5C11\u6253\u5305\u65F6\u95F4\u3002</p>
<p>Webpack \u7684\u7248\u672C\u66F4\u65B0\u5F88\u5FEB\uFF0C\u5404\u4E2A\u7248\u672C\u4E4B\u95F4\u5B9E\u73B0\u4F18\u5316\u7684\u65B9\u5F0F\u53EF\u80FD\u90FD\u4F1A\u6709\u533A\u522B\uFF0C\u6240\u4EE5\u6211\u6CA1\u6709\u4F7F\u7528\u8FC7\u591A\u7684\u4EE3\u7801\u53BB\u5C55\u793A\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2A\u529F\u80FD\u3002<strong>\u8FD9\u4E00\u7AE0\u8282\u7684\u91CD\u70B9\u662F\u5B66\u4E60\u5230\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EC0\u4E48\u65B9\u5F0F\u53BB\u4F18\u5316\uFF0C\u5177\u4F53\u7684\u4EE3\u7801\u5B9E\u73B0\u53EF\u4EE5\u67E5\u627E\u5177\u4F53\u7248\u672C\u5BF9\u5E94\u7684\u4EE3\u7801\u5373\u53EF\u3002</strong></p>
`};export{n as default};
