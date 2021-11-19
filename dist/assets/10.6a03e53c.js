var s={name:"10\u3001Babel \u63D2\u4EF6\u548C preset",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>\u524D\u9762\u7684\u7AE0\u8282\uFF0C\u6211\u4EEC\u5B66\u4E60\u4E86 babel \u7684\u7F16\u8BD1\u6D41\u7A0B\uFF0C\u4E5F\u6DF1\u5165\u4E86\u4E0B\u539F\u7406\uFF0C\u77E5\u9053\u4E86\u600E\u4E48\u7528 babel \u7684 api \u6765\u5B8C\u6210\u4E00\u4E9B\u4EE3\u7801\u8F6C\u6362\u529F\u80FD\u3002\u4F46\u5E73\u65F6\u6211\u4EEC\u5F88\u5C11\u5355\u72EC\u4F7F\u7528 babel \u7684 api\uFF0C\u66F4\u591A\u662F\u5C01\u88C5\u6210\u63D2\u4EF6\uFF0C\u63D2\u4EF6\u53EF\u4EE5\u4E0A\u4F20\u5230 npm \u4ED3\u5E93\u6765\u590D\u7528\u3002</p>
<p>\u8FD9\u4E00\u8282\uFF0C\u6211\u4EEC\u5B66\u4E60\u4E00\u4E0B babel \u63D2\u4EF6\u7684\u683C\u5F0F\u4EE5\u53CA preset\u3002</p>
<h2 data-id="heading-0">plugin \u7684\u4F7F\u7528</h2>
<p>\u9996\u5148\uFF0C\u6211\u4EEC\u56DE\u987E\u4E00\u4E0B plugin \u7684\u4F7F\u7528\uFF0Cbabel \u7684 plugin \u662F\u5728\u914D\u7F6E\u6587\u4EF6\u91CC\u9762\u901A\u8FC7 plugins \u9009\u9879\u914D\u7F6E\uFF0C\u503C\u4E3A\u5B57\u7B26\u4E32\u6216\u8005\u6570\u7EC4\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript">{
  <span class="hljs-string">"plugins"</span>: [<span class="hljs-string">"pluginA"</span>, [<span class="hljs-string">"pluginB"</span>], [<span class="hljs-string">"pluginC"</span>, {<span class="hljs-comment">/* options */</span>}]]
}
</code></pre>
<p>\u5982\u679C\u9700\u8981\u4F20\u53C2\u5C31\u7528\u6570\u7EC4\u683C\u5F0F\uFF0C\u7B2C\u4E8C\u4E2A\u5143\u7D20\u4E3A\u53C2\u6570\u3002</p>
<h2 data-id="heading-1">plugin\u7684\u683C\u5F0F</h2>
<p>babel plugin \u6709\u4E24\u79CD\u683C\u5F0F\uFF1A</p>
<h3 data-id="heading-2">\u8FD4\u56DE\u5BF9\u8C61\u7684\u51FD\u6570</h3>
<p>\u7B2C\u4E00\u79CD\u662F\u4E00\u4E2A\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u7684\u683C\u5F0F\uFF0C\u5BF9\u8C61\u91CC\u6709 visitor\u3001pre\u3001post\u3001inherits\u3001manipulateOptions \u7B49\u5C5E\u6027\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">api, options, dirname</span>) </span>{
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">inherits</span>: parentPlugin,
    <span class="hljs-function"><span class="hljs-title">manipulateOptions</span>(<span class="hljs-params">options, parserOptions</span>)</span> {
        options.xxx = <span class="hljs-string">''</span>;
    },
    <span class="hljs-function"><span class="hljs-title">pre</span>(<span class="hljs-params">file</span>)</span> {
      <span class="hljs-built_in">this</span>.cache = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Map</span>();
    },
    <span class="hljs-attr">visitor</span>: {
      <span class="hljs-function"><span class="hljs-title">StringLiteral</span>(<span class="hljs-params">path, state</span>)</span> {
        <span class="hljs-built_in">this</span>.cache.set(path.node.value, <span class="hljs-number">1</span>);
      }
    },
    <span class="hljs-function"><span class="hljs-title">post</span>(<span class="hljs-params">file</span>)</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>.cache);
    }
  };
} 
</code></pre>
<p>\u9996\u5148\uFF0C\u63D2\u4EF6\u51FD\u6570\u6709 3 \u4E2A\u53C2\u6570\uFF0Capi\u3001options\u3001dirname\u3002</p>
<ul>
<li>options \u5C31\u662F\u5916\u9762\u4F20\u5165\u7684\u53C2\u6570</li>
<li>dirname \u662F\u76EE\u5F55\u540D\uFF08\u4E0D\u5E38\u7528\uFF09</li>
<li>api \u91CC\u5305\u542B\u4E86\u5404\u79CD babel \u7684 api\uFF0C\u6BD4\u5982 types\u3001template \u7B49\uFF0C\u8FD9\u4E9B\u5305\u5C31\u4E0D\u7528\u5728\u63D2\u4EF6\u91CC\u5355\u72EC\u5355\u72EC\u5F15\u5165\u4E86\uFF0C\u76F4\u63A5\u53D6\u6765\u7528\u5C31\u884C\u3002</li>
</ul>
<p>\u8FD4\u56DE\u7684\u5BF9\u8C61\u6709 inherits\u3001manipulateOptions\u3001pre\u3001visitor\u3001post \u7B49\u5C5E\u6027\u3002</p>
<ul>
<li>inherits \u6307\u5B9A\u7EE7\u627F\u67D0\u4E2A\u63D2\u4EF6\uFF0C\u548C\u5F53\u524D\u63D2\u4EF6\u7684 options \u5408\u5E76\uFF0C\u901A\u8FC7 Object.assign \u7684\u65B9\u5F0F\u3002</li>
<li>visitor \u6307\u5B9A traverse \u65F6\u8C03\u7528\u7684\u51FD\u6570\u3002</li>
<li>pre \u548C post \u5206\u522B\u5728\u904D\u5386\u524D\u540E\u8C03\u7528\uFF0C\u53EF\u4EE5\u505A\u4E00\u4E9B\u63D2\u4EF6\u8C03\u7528\u524D\u540E\u7684\u903B\u8F91\uFF0C\u6BD4\u5982\u53EF\u4EE5\u5F80 file\uFF08\u8868\u793A\u6587\u4EF6\u7684\u5BF9\u8C61\uFF0C\u5728\u63D2\u4EF6\u91CC\u9762\u901A\u8FC7 state.file \u62FF\u5230\uFF09\u4E2D\u653E\u4E00\u4E9B\u4E1C\u897F\uFF0C\u5728\u904D\u5386\u7684\u8FC7\u7A0B\u4E2D\u53D6\u51FA\u6765\u3002</li>
<li>manipulateOptions \u7528\u4E8E\u4FEE\u6539 options\uFF0C\u662F\u5728\u63D2\u4EF6\u91CC\u9762\u4FEE\u6539\u914D\u7F6E\u7684\u65B9\u5F0F\uFF0C\u6BD4\u5982 syntaxt plugin\u4E00\u822C\u90FD\u4F1A\u4FEE\u6539 parser options\uFF1A</li>
</ul>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2512f37b312a4c1a8ddb4c59c4a8f09f~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u63D2\u4EF6\u505A\u7684\u4E8B\u60C5\u5C31\u662F\u901A\u8FC7 api \u62FF\u5230 types\u3001template \u7B49\uFF0C\u901A\u8FC7 state.opts \u62FF\u5230\u53C2\u6570\uFF0C\u7136\u540E\u901A\u8FC7 path \u6765\u4FEE\u6539 AST\u3002\u53EF\u4EE5\u901A\u8FC7 state \u653E\u4E00\u4E9B\u904D\u5386\u8FC7\u7A0B\u4E2D\u5171\u4EAB\u7684\u6570\u636E\uFF0C\u901A\u8FC7 file \u653E\u4E00\u4E9B\u6574\u4E2A\u63D2\u4EF6\u90FD\u80FD\u8BBF\u95EE\u5230\u7684\u4E00\u4E9B\u6570\u636E\uFF0C\u9664\u4E86\u8FD9\u4E24\u79CD\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7 this \u6765\u4F20\u9012\u672C\u5BF9\u8C61\u5171\u4EAB\u7684\u6570\u636E\u3002</p>
<h3 data-id="heading-3">\u5BF9\u8C61</h3>
<p>\u63D2\u4EF6\u7684\u7B2C\u4E8C\u79CD\u683C\u5F0F\u5C31\u662F\u76F4\u63A5\u5199\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4E0D\u7528\u51FD\u6570\u5305\u88F9\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u7528\u4E8E\u4E0D\u9700\u8981\u5904\u7406\u53C2\u6570\u7684\u60C5\u51B5\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> plugin =  {
    <span class="hljs-function"><span class="hljs-title">pre</span>(<span class="hljs-params">state</span>)</span> {
      <span class="hljs-built_in">this</span>.cache = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Map</span>();
    },
    <span class="hljs-attr">visitor</span>: {
      <span class="hljs-function"><span class="hljs-title">StringLiteral</span>(<span class="hljs-params">path, state</span>)</span> {
        <span class="hljs-built_in">this</span>.cache.set(path.node.value, <span class="hljs-number">1</span>);
      }
    },
    <span class="hljs-function"><span class="hljs-title">post</span>(<span class="hljs-params">state</span>)</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>.cache);
    }
};
</code></pre>
<h2 data-id="heading-4">preset</h2>
<p>plugin \u662F\u5355\u4E2A\u8F6C\u6362\u529F\u80FD\u7684\u5B9E\u73B0\uFF0C\u5F53 plugin \u6BD4\u8F83\u591A\u6216\u8005 plugin \u7684 options \u6BD4\u8F83\u591A\u7684\u65F6\u5019\u5C31\u4F1A\u5BFC\u81F4\u4F7F\u7528\u6210\u672C\u5347\u9AD8\u3002\u8FD9\u65F6\u5019\u53EF\u4EE5\u5C01\u88C5\u6210\u4E00\u4E2A preset\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 preset \u6765\u6279\u91CF\u5F15\u5165 plugin \u5E76\u8FDB\u884C\u4E00\u4E9B\u914D\u7F6E\u3002preset \u5C31\u662F\u5BF9 babel \u914D\u7F6E\u7684\u4E00\u5C42\u5C01\u88C5\u3002</p>
<p>\u6BD4\u5982\u5982\u679C\u4F7F\u7528 plugin \u662F\u8FD9\u6837\u7684\uFF0C\u5F00\u53D1\u8005\u9700\u8981\u4E86\u89E3\u6BCF\u4E2A\u63D2\u4EF6\u662F\u5E72\u4EC0\u4E48\u7684\u3002</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f54caa8803e484c92d2c2809ce05ce5~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u800C\u6709\u4E86 preset \u4E4B\u540E\u5C31\u4E0D\u518D\u9700\u8981\u77E5\u9053\u7528\u5230\u4E86\u4EC0\u4E48\u63D2\u4EF6\uFF0C\u53EA\u9700\u8981\u9009\u62E9\u5408\u9002\u7684 preset\uFF0C\u7136\u540E\u914D\u7F6E\u4E00\u4E0B\uFF0C\u5C31\u4F1A\u5F15\u5165\u9700\u8981\u7684\u63D2\u4EF6\uFF0C\u8FD9\u5C31\u662F preset \u7684\u610F\u4E49\u3002\u6211\u4EEC\u5B66 babel \u7684\u5185\u7F6E\u529F\u80FD\uFF0C\u4E3B\u8981\u5C31\u662F\u5B66 preset \u7684\u914D\u7F6E\uFF0C\u6BD4\u5982 preset-env\u3001preset-typescript \u7B49\u3002</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/112d501d641b4e509bd37d821489d72c~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>preset \u683C\u5F0F\u548C plugin \u4E00\u6837\uFF0C\u4E5F\u662F\u53EF\u4EE5\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6216\u8005\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u7684\u53C2\u6570\u4E5F\u662F\u4E00\u6837\u7684 api \u548C options\uFF0C\u533A\u522B\u53EA\u662F preset \u8FD4\u56DE\u7684\u662F\u914D\u7F6E\u5BF9\u8C61\uFF0C\u5305\u542B plugins\u3001presets \u7B49\u914D\u7F6E\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">api, options</span>) </span>{
  <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">plugins</span>: [<span class="hljs-string">'pluginA'</span>],
      <span class="hljs-attr">presets</span>: [[<span class="hljs-string">'presetsB'</span>, { <span class="hljs-attr">options</span>: <span class="hljs-string">'bbb'</span>}]]
  }
}
</code></pre>
<p>\u6216\u8005</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> obj = {
      <span class="hljs-attr">plugins</span>: [<span class="hljs-string">'pluginA'</span>],
      <span class="hljs-attr">presets</span>: [[<span class="hljs-string">'presetsB'</span>, { <span class="hljs-attr">options</span>: <span class="hljs-string">'bbb'</span>}]]
}
</code></pre>
<h2 data-id="heading-5">ConfigItem</h2>
<p>@babel/core \u7684\u5305\u63D0\u4F9B\u4E86 createConfigItem \u7684 api\uFF0C\u7528\u4E8E\u521B\u5EFA\u914D\u7F6E\u9879\u3002\u6211\u4EEC\u4E4B\u524D\u90FD\u662F\u5B57\u9762\u91CF\u7684\u65B9\u5F0F\u521B\u5EFA\u7684\uFF0C\u5F53\u9700\u8981\u628A\u914D\u7F6E\u62BD\u79BB\u51FA\u53BB\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 createConfigItem\u3002</p>
<pre><code class="">const pluginA = createConfigItem('pluginA);
const presetB = createConfigItem('presetsB', { options: 'bbb'})

export default obj = {
      plugins: [ pluginA ],
      presets: [ presetB ]
  }
}
</code></pre>
<h2 data-id="heading-6">\u987A\u5E8F</h2>
<p>preset \u548C plugin \u4ECE\u5F62\u5F0F\u4E0A\u5DEE\u4E0D\u591A\uFF0C\u4F46\u662F\u5E94\u7528\u987A\u5E8F\u4E0D\u540C\u3002</p>
<p>babel \u4F1A\u6309\u7167\u5982\u4E0B\u987A\u5E8F\u5904\u7406\u63D2\u4EF6\u548C preset\uFF1A</p>
<ol>
<li>\u5148\u5E94\u7528 plugin\uFF0C\u518D\u5E94\u7528 preset</li>
<li>plugin \u4ECE\u524D\u5230\u540E\uFF0Cpreset \u4ECE\u540E\u5230\u524D</li>
</ol>
<p>\u8FD9\u4E2A\u987A\u5E8F\u662F babel \u7684\u89C4\u5B9A\u3002</p>
<h2 data-id="heading-7">\u540D\u5B57</h2>
<p>babel \u5BF9\u63D2\u4EF6\u540D\u5B57\u7684\u683C\u5F0F\u6709\u4E00\u5B9A\u7684\u8981\u6C42\uFF0C\u6BD4\u5982\u6700\u597D\u5305\u542B babel-plugin\uFF0C\u5982\u679C\u4E0D\u5305\u542B\u7684\u8BDD\u4E5F\u4F1A\u81EA\u52A8\u8865\u5145\u3002</p>
<p>babel plugin \u540D\u5B57\u7684\u8865\u5168\u6709\u8FD9\u4E9B\u89C4\u5219\uFF1A</p>
<ul>
<li>\u5982\u679C\u662F ./ \u5F00\u5934\u7684\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4E0D\u6DFB\u52A0 babel plugin\uFF0C\u6BD4\u5982 ./dir/plugin.js</li>
<li>\u5982\u679C\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u4E0D\u6DFB\u52A0 babel plugin\uFF0C\u6BD4\u5982 /dir/plugin.js</li>
<li>\u5982\u679C\u662F\u5355\u72EC\u7684\u540D\u5B57 aa\uFF0C\u4F1A\u6DFB\u52A0\u4E3A babel-plugin-aa\uFF0C\u6240\u4EE5\u63D2\u4EF6\u540D\u5B57\u53EF\u4EE5\u7B80\u5199\u4E3A aa</li>
<li>\u5982\u679C\u662F\u5355\u72EC\u7684\u540D\u5B57 aa\uFF0C\u4F46\u4EE5 module \u5F00\u5934\uFF0C\u5219\u4E0D\u6DFB\u52A0 babel plugin\uFF0C\u6BD4\u5982 module:aa</li>
<li>\u5982\u679C @scope \u5F00\u5934\uFF0C\u4E0D\u5305\u542B plugin\uFF0C\u5219\u4F1A\u6DFB\u52A0 babel-plugin\uFF0C\u6BD4\u5982 @scope/mod \u4F1A\u53D8\u4E3A @scope/babel-plugin-mod</li>
<li>babel \u81EA\u5DF1\u7684 @babel \u5F00\u5934\u7684\u5305\uFF0C\u4F1A\u81EA\u52A8\u6DFB\u52A0 plugin\uFF0C\u6BD4\u5982 @babel/aa \u4F1A\u53D8\u6210 @babel/plugin-aa</li>
</ul>
<p>\uFF08preset\u4E5F\u662F\u4E00\u6837\uFF09</p>
<p>\u89C4\u5219\u6BD4\u8F83\u591A\uFF0C\u603B\u7ED3\u4E00\u4E0B\u5C31\u662F babel \u5E0C\u671B\u63D2\u4EF6\u540D\u5B57\u4E2D\u80FD\u5305\u542B babel plugin\uFF0C\u8FD9\u6837\u5199 plugin \u7684\u540D\u5B57\u7684\u65F6\u5019\u5C31\u53EF\u4EE5\u7B80\u5316\uFF0C\u7136\u540E babel \u81EA\u52A8\u53BB\u8865\u5145\u3002\u6240\u4EE5\u6211\u4EEC\u5199\u7684 babel \u63D2\u4EF6\u6700\u597D\u662F babel-plugin-xx \u548C @scope/babel-plugin-xx \u8FD9\u4E24\u79CD\uFF0C\u5C31\u53EF\u4EE5\u7B80\u5355\u5199\u4E3A xx \u548C @scope/xx\u3002</p>
<p>\u5199 babel \u5185\u7F6E\u7684 plugin \u548C preset \u7684\u65F6\u5019\u4E5F\u53EF\u4EE5\u7B80\u5316\uFF0C\u6BD4\u5982 @babel/preset-env \u53EF\u4EE5\u76F4\u63A5\u5199@babel/env\uFF0Cbabel \u4F1A\u81EA\u52A8\u8865\u5145\u4E3A @babel/preset-env\u3002</p>
<h2 data-id="heading-8">\u603B\u7ED3</h2>
<p>\u8FD9\u4E00\u8282\u6211\u4EEC\u5B66\u4E60\u4E86 babel \u7684 plugin \u548C preset \u7684\u683C\u5F0F\uFF0C\u4E24\u8005\u57FA\u672C\u4E00\u6837\uFF0C\u90FD\u662F\u53EF\u4EE5\u5BF9\u8C61\u548C\u51FD\u6570\u4E24\u79CD\u5F62\u5F0F\uFF0C\u51FD\u6570\u7684\u5F62\u5F0F\u63A5\u6536 api \u548C options \u53C2\u6570\uFF0Cbabel7 \u7684\u63D2\u4EF6\u6700\u597D\u4F7F\u7528\u517C\u5BB9\u5199\u6CD5\uFF0C\u5C31\u662F\u7528 declare \u5305\u88F9\u4E00\u5C42\u3002\u8FD8\u53EF\u4EE5\u901A\u8FC7 @babel/core \u5305\u91CC\u7684 createConfigItem \u6765\u521B\u5EFA\u914D\u7F6E\u9879\uFF0C\u65B9\u4FBF\u62BD\u79BB\u51FA\u53BB\u3002 plugin \u548C preset \u662F\u6709\u987A\u5E8F\u7684\uFF0C\u5148 plugin \u518D preset\uFF0Cplugin \u4ECE\u5DE6\u5230\u53F3\uFF0Cpreset \u4ECE\u53F3\u5230\u5DE6\u3002plugin \u548C preset \u8FD8\u6709\u540D\u5B57\u7684\u89C4\u8303\uFF0C\u7B26\u5408\u89C4\u8303\u7684\u540D\u5B57\u53EF\u4EE5\u7B80\u5199\uFF0C\u8FD9\u6837 babel \u4F1A\u81EA\u52A8\u8865\u5145\u4E0A babel plugin \u6216 babel preset\u3002</p>
<p>\u8FD9\u4E00\u8282\u4E3B\u8981\u5B66\u4E60\u63D2\u4EF6\u7684\u7684\u683C\u5F0F\u548C\u89C4\u5219\uFF0C\u5177\u4F53\u8F6C\u6362\u903B\u8F91\u8FD8\u662F\u4E4B\u524D\u7684\u65B9\u5F0F\uFF0C\u7ED3\u5408\u4E4B\u524D\u5B66\u7684 babel api\uFF0C\u5C31\u53EF\u4EE5\u5F00\u53D1\u63D2\u4EF6\u4E86\u3002</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
