var s={name:"31\u3001\u624B\u5199 Babel\uFF1A cli\u7BC7",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>\u4E0A\u8282\u6211\u4EEC\u5B9E\u73B0\u4E86\u5B8C\u6574\u7684\u7F16\u8BD1\u6D41\u7A0B\uFF0C\u652F\u6301\u4E86\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5F15\u5165\u6A21\u5757\u7684\u65B9\u5F0F\u4F7F\u7528\uFF0C\u8FD9\u4E00\u8282\u6211\u4EEC\u5B9E\u73B0\u4E0B\u547D\u4EE4\u884C\u7684\u65B9\u5F0F\u3002</p>
<p>\u6211\u4EEC\u4F1A\u5B9E\u73B0\u4EE5\u4E0B\u529F\u80FD\uFF1A</p>
<ul>
<li>\u652F\u6301\u547D\u4EE4\u884C\u6307\u5B9A\u53C2\u6570\uFF0C\u6307\u5B9A\u8981\u7F16\u8BD1\u7684\u6587\u4EF6\u3001\u8F93\u51FA\u76EE\u5F55\u3001\u662F\u5426 watch \u7B49</li>
<li>\u652F\u6301\u914D\u7F6E\u6587\u4EF6</li>
<li>\u7F16\u8BD1\u6587\u4EF6\u7684\u8DEF\u5F84\u652F\u6301 glob\uFF0C\u53EF\u4EE5\u6A21\u7CCA\u5339\u914D</li>
<li>\u751F\u6210 sourcemap\uFF0C\u81EA\u52A8\u6DFB\u52A0 sourceMapUrl \u5230\u6587\u4EF6\u5185\u5BB9\u4E2D</li>
<li>\u652F\u6301 watch\uFF0C\u6587\u4EF6\u53D8\u52A8\u7ACB\u5373\u91CD\u65B0\u7F16\u8BD1</li>
</ul>
<h2 data-id="heading-0">\u601D\u8DEF\u5206\u6790</h2>
<p>\u547D\u4EE4\u884C\u5DE5\u5177\u5C31\u662F\u901A\u8FC7\u547D\u4EE4\u884C\u542F\u52A8\u7684\uFF0C\u8981\u652F\u6301\u547D\u4EE4\u884C\u542F\u52A8\u9700\u8981\u5728 js \u6587\u4EF6\u5F00\u5934\u52A0\u4E0A</p>
<pre><code class="">#!/usr/bin/env node
</code></pre>
<p>\u547D\u4EE4\u884C\u53C2\u6570\u7684\u89E3\u6790\u53EF\u4EE5\u4F7F\u7528 <a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fcommander" target="_blank" rel="nofollow noopener noreferrer" title="https://www.npmjs.com/package/commander" ref="nofollow noopener noreferrer">commander</a>\uFF0C\u5B83\u53EF\u4EE5\u89E3\u6790\u547D\u4EE4\u884C\u53C2\u6570\uFF0C\u7136\u540E\u53EF\u4EE5\u76F4\u63A5\u62FF\u5230 parse \u4E4B\u540E\u7684\u7ED3\u679C\u3002</p>
<p>\u914D\u7F6E\u6587\u4EF6\u7684\u6307\u5B9A\u53EF\u4EE5\u4F7F\u7528 <a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fcosmiconfig" target="_blank" rel="nofollow noopener noreferrer" title="https://www.npmjs.com/package/cosmiconfig" ref="nofollow noopener noreferrer">cosmiconfig</a>\uFF0C\u5B83\u652F\u6301\u5982\u4E0B\u7684\u67E5\u627E\u65B9\u5F0F\uFF1A</p>
<ul>
<li><code>package.json</code> \u7684\u5C5E\u6027</li>
<li>\u6269\u5C55\u540D\u4E3A rc \u7684 JSON \u6216\u8005 YAML</li>
<li>\u6269\u5C55\u540D\u4E3A <code>.json</code>\u3001&nbsp;<code>.yaml</code>\u3001&nbsp;<code>.yml</code>\u3001&nbsp;<code>.js</code>\u3001<code>.cjs</code> \u3001<code>.config.js</code>\u3001<code>.config.cjs</code> \u7684 rc \u6587\u4EF6</li>
<li><code>.config.js</code>&nbsp;\u6216\u8005 <code>.config.cjs</code> \u7684 commonjs \u6A21\u5757</li>
</ul>
<p>\u8FD9\u79CD\u914D\u7F6E\u6587\u4EF6\u67E5\u627E\u673A\u5236\u5728 eslint\u3001babel \u7B49\u5F88\u591A\u5DE5\u5177\u4E2D\u90FD\u6709\u5E94\u7528\uFF0C\u6211\u4EEC\u4E5F\u91C7\u7528\u8FD9\u79CD\u65B9\u5F0F\u3002</p>
<p>\u6587\u4EF6\u6A21\u7CCA\u5339\u914D\u4F7F\u7528 <a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fglob" target="_blank" rel="nofollow noopener noreferrer" title="https://www.npmjs.com/package/glob" ref="nofollow noopener noreferrer">glob</a> \u6765\u5339\u914D\uFF0C\u5B83\u4F1A\u8FD4\u56DE\u5339\u914D\u540E\u7684\u6587\u4EF6\u8DEF\u5F84\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript">glob(<span class="hljs-string">"**/*.js"</span>, options, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">er, files</span>) </span>{})
</code></pre>
<p>watch \u7684\u5B9E\u73B0\u4F7F\u7528 <a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fchokidar" target="_blank" rel="nofollow noopener noreferrer" title="https://www.npmjs.com/package/chokidar" ref="nofollow noopener noreferrer">chokidar</a>\uFF0C\u5B83\u4F1A\u76D1\u542C\u6587\u4EF6\u7684\u53D8\u52A8\uFF0C\u5305\u62EC\u6587\u4EF6\u589E\u52A0\u3001\u5220\u9664\u3001\u4FEE\u6539\u3001\u91CD\u547D\u540D\uFF0C\u76EE\u5F55\u589E\u52A0\u3001\u5220\u9664\u7B49\uFF0C\u7136\u540E\u628A\u53D8\u52A8\u7684\u6587\u4EF6\u8DEF\u5F84\u4F20\u5165\u56DE\u8C03\u51FD\u6570\u3002\u76D1\u542C\u7684\u6587\u4EF6\u4E5F\u652F\u6301\u901A\u8FC7 glob \u5B57\u7B26\u4E32\u6765\u6307\u5B9A\u3002</p>
<p>\u77E5\u9053\u4E86 watch\u3001\u547D\u4EE4\u884C\u53C2\u6570\u89E3\u6790\u3001\u914D\u7F6E\u6587\u4EF6\u67E5\u627E\u3001\u6587\u4EF6\u6A21\u7CCA\u5339\u914D\u90FD\u600E\u4E48\u505A\u4E4B\u540E\uFF0C\u6211\u4EEC\u6765\u4E32\u8054\u4E0B\u6574\u4F53\u6D41\u7A0B\uFF1A</p>
<ul>
<li>\u901A\u8FC7 commander \u89E3\u6790\u547D\u4EE4\u884C\u53C2\u6570\uFF0C\u62FF\u5230 outDir\uFF08\u8F93\u51FA\u76EE\u5F55\uFF09\u3001watch\uFF08\u662F\u5426\u76D1\u542C\uFF09\u4EE5\u53CA glob \u5B57\u7B26\u4E32</li>
<li>\u89E3\u6790 glob \u5B57\u7B26\u4E32\uFF0C\u62FF\u5230\u8981\u7F16\u8BD1\u7684\u6587\u4EF6\u8DEF\u5F84</li>
<li>\u67E5\u627E\u914D\u7F6E\u6587\u4EF6\uFF0C\u62FF\u5230\u914D\u7F6E\u4FE1\u606F</li>
<li>\u4F9D\u6B21\u7F16\u8BD1\u6BCF\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4F20\u5165\u914D\u7F6E\u4FE1\u606F\uFF0C\u8F93\u51FA\u5230 outDir \u76EE\u5F55\uFF0C\u5E76\u4E14\u6DFB\u52A0 sourcemap \u7684\u5173\u8054</li>
<li>\u5982\u679C\u5F00\u542F\u4E86 watch\uFF0C\u5219\u76D1\u542C\u6587\u4EF6\u53D8\u52A8\uFF0C\u6BCF\u6B21\u53D8\u52A8\u90FD\u91CD\u65B0\u7F16\u8BD1\u8BE5\u6587\u4EF6</li>
</ul>
<p>\u4E4B\u540E\u8FD8\u9700\u8981\u5728 package.json \u4E2D\u914D\u7F6E\u4E0B bin \u5C5E\u6027\uFF0C\u8FD9\u6837\u624D\u53EF\u4EE5\u4F5C\u4E3A\u547D\u4EE4\u884C\u5DE5\u5177\u6765\u6CE8\u518C\u3002</p>
<p>\u4E0B\u9762\u6211\u4EEC\u5B9E\u73B0\u4E00\u4E0B\uFF1A</p>
<h2 data-id="heading-1">\u4EE3\u7801\u5B9E\u73B0\uFF1A</h2>
<p>\u5F15\u5165 commander\uFF0C\u58F0\u660E outDir\u3001watch \u7B49\u53C2\u6570\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> commander = <span class="hljs-built_in">require</span>(<span class="hljs-string">'commander'</span>);

commander.option(<span class="hljs-string">'--out-dir &lt;outDir&gt;'</span>, <span class="hljs-string">'\u8F93\u51FA\u76EE\u5F55'</span>);
commander.option(<span class="hljs-string">'--watch'</span>, <span class="hljs-string">'\u76D1\u542C\u6587\u4EF6\u53D8\u52A8'</span>);

commander.parse(process.argv);
</code></pre>
<p>\u5BF9\u4F20\u5165\u7684\u53C2\u6570 process.argv \u505A parse \u4E4B\u540E\u5C31\u53EF\u4EE5\u62FF\u5230\u5177\u4F53\u7684\u503C\uFF1A</p>
<p>\u6BD4\u5982\u6211\u4EEC\u4F20\u5165\uFF1A</p>
<pre><code class="hljs language-shell" lang="shell">my-babel ./input/*.js --out-dir ./dist --watch
</code></pre>
<p>\u5728\u4EE3\u7801\u91CC\u5C31\u53EF\u4EE5\u62FF\u5230</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> cliOpts = commander.opts();

cliOptions.outDir;<span class="hljs-comment">// ./dist</span>
cliOptions.watch <span class="hljs-comment">// true</span>
commander.args[<span class="hljs-number">0</span>] <span class="hljs-comment">// ./input/*.js</span>
</code></pre>
<p>\u6211\u4EEC\u8981\u5BF9\u8F93\u5165\u7684\u53C2\u6570\u505A\u4E0B\u6821\u9A8C\uFF0C\u7136\u540E\u6253\u5370\u63D0\u793A\u4FE1\u606F\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">if</span> (process.argv.length &lt;=<span class="hljs-number">2</span> ) {
    commander.outputHelp();
    process.exit(<span class="hljs-number">0</span>);
}

<span class="hljs-keyword">const</span> cliOpts = commander.opts();

<span class="hljs-keyword">if</span> (!commander.args[<span class="hljs-number">0</span>]) {
    <span class="hljs-built_in">console</span>.error(<span class="hljs-string">'\u6CA1\u6709\u6307\u5B9A\u5F85\u7F16\u8BD1\u6587\u4EF6'</span>);
    commander.outputHelp();
    process.exit(<span class="hljs-number">1</span>);
}

<span class="hljs-keyword">if</span>(!cliOpts.outDir) {
    <span class="hljs-built_in">console</span>.error(<span class="hljs-string">'\u6CA1\u6709\u6307\u5B9A\u8F93\u51FA\u76EE\u5F55'</span>);
    commander.outputHelp();
    process.exit(<span class="hljs-number">1</span>);
}
</code></pre>
<p>\u8FD9\u6837\uFF0C\u6211\u4EEC\u5C31\u5B8C\u6210\u4E86\u5BF9\u547D\u4EE4\u884C\u53C2\u6570\u7684\u5904\u7406\u3002</p>
<p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5BF9 glob \u5B57\u7B26\u4E32\u505A\u89E3\u6790\uFF0C\u62FF\u5230\u5177\u4F53\u7684\u6587\u4EF6\u8DEF\u5F84\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> filenames = glob.sync(commander.args[<span class="hljs-number">0</span>]);
</code></pre>
<p>\u7136\u540E\u67E5\u627E\u914D\u7F6E\u6587\u4EF6\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> explorerSync = cosmiconfigSync(<span class="hljs-string">'myBabel'</span>);
<span class="hljs-keyword">const</span> searchResult = explorerSync.search();
</code></pre>
<p>\u6211\u4EEC\u901A\u8FC7 options \u6765\u96C6\u4E2D\u5B58\u653E\u547D\u4EE4\u884C\u53C2\u6570\u548C\u89E3\u6790\u540E\u7684\u914D\u7F6E\u6587\u4EF6\u7684\u53C2\u6570\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> options = {
    <span class="hljs-attr">babelOptions</span>: searchResult.config,
    <span class="hljs-attr">cliOptions</span>:  {
        ...cliOpts,
        filenames
    }
}
</code></pre>
<p>\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u5F00\u59CB\u7F16\u8BD1\u4E86\u3002\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2A compile \u65B9\u6CD5\uFF0C\u4F20\u5165\u6587\u4EF6\u8DEF\u5F84\u7684\u6570\u7EC4\uFF0C\u7136\u540E\uFF0C\u5BF9\u6BCF\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9\u8FDB\u884C\u8BFB\u53D6\uFF0C\u7136\u540E\u8FDB\u884C\u7F16\u8BD1\uFF0C\u4E4B\u540E\u8F93\u51FA\u5230\u76EE\u6807\u76EE\u5F55\u3002</p>
<p>\u8FD9\u91CC\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C outDir \u4E0D\u5B58\u5728\uFF0C\u9700\u8981\u5148\u521B\u5EFA\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">compile</span>(<span class="hljs-params">fileNames</span>) </span>{
    fileNames.forEach(<span class="hljs-keyword">async</span> filename =&gt; {
        <span class="hljs-keyword">const</span> fileContent = <span class="hljs-keyword">await</span> fsPromises.readFile(filename, <span class="hljs-string">'utf-8'</span>);
        <span class="hljs-keyword">const</span> baseFileName = path.basename(filename);
        <span class="hljs-keyword">const</span> sourceMapFileName = baseFileName + <span class="hljs-string">'.map.json'</span>;

        <span class="hljs-comment">// \u7F16\u8BD1\u7684\u8FC7\u7A0B\uFF0C\u540E\u9762\u8865\u5145</span>
        
        <span class="hljs-comment">//\u5982\u679C\u76EE\u5F55\u4E0D\u5B58\u5728\u5219\u521B\u5EFA</span>
         <span class="hljs-keyword">try</span> {
            <span class="hljs-keyword">await</span> fsPromises.access(options.cliOptions.outDir);
         } <span class="hljs-keyword">catch</span>(e) {
            <span class="hljs-keyword">await</span> fsPromises.mkdir(options.cliOptions.outDir);
         }
         <span class="hljs-comment">// \u62FC\u63A5\u8F93\u51FA\u7684\u8DEF\u5F84</span>
         <span class="hljs-keyword">const</span> distFilePath = path.join(options.cliOptions.outDir, baseFileName);
         <span class="hljs-keyword">const</span> distSourceMapPath = path.join(options.cliOptions.outDir, baseFileName + <span class="hljs-string">'.map.json'</span>);
 
         <span class="hljs-keyword">await</span> fsPromises.writeFile(distFilePath, generatedFile);
         <span class="hljs-keyword">await</span> fsPromises.writeFile(distSourceMapPath, res.map);
     })
}
</code></pre>
<p>\u7F16\u8BD1\u5C31\u662F\u4F7F\u7528\u6211\u4EEC\u4E4B\u524D\u5B9E\u73B0\u7684 babel core\uFF0C\u628A\u751F\u6210\u7684 sourcemap \u5173\u8054\u5230\u76EE\u6807\u4EE3\u7801\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> res = myBabel.transformSync(fileContent, {
    ...options.babelOptions,
    <span class="hljs-attr">fileName</span>: baseFileName
 });
 <span class="hljs-keyword">const</span> generatedFile = res.code + <span class="hljs-string">'\\n'</span> + <span class="hljs-string">'//# sourceMappingURL='</span>\\n<span class="hljs-string">' + sourceMapFileName;
</span></code></pre>
<p>\u4E4B\u540E\uFF0C\u5982\u679C\u6307\u5B9A\u4E86 watch\uFF0C\u4E5F\u9700\u8981\u91CD\u65B0\u7F16\u8BD1\u4E00\u6B21\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript">
<span class="hljs-keyword">if</span>(cliOpts.watch) {
    <span class="hljs-keyword">const</span> chokidar = <span class="hljs-built_in">require</span>(<span class="hljs-string">'chokidar'</span>);

    chokidar.watch(commander.args[<span class="hljs-number">0</span>]).on(<span class="hljs-string">'all'</span>, <span class="hljs-function">(<span class="hljs-params">event, path</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'\u68C0\u6D4B\u5230\u6587\u4EF6\u53D8\u52A8\uFF0C\u7F16\u8BD1\uFF1A'</span> + path);
        compile([path]);
    });
}
</code></pre>
<p>\u8FD9\u6837\uFF0C\u6211\u4EEC\u5C31\u5B9E\u73B0\u4E86\u547D\u4EE4\u884C\u53C2\u6570\u7684\u89E3\u6790\uFF0C\u7F16\u8BD1\u591A\u4E2A\u6587\u4EF6\uFF0Cwatch \u6587\u4EF6\u53D8\u52A8\u589E\u91CF\u7F16\u8BD1\u7684\u529F\u80FD\u3002</p>
<p>\u4E0B\u9762\u6211\u4EEC\u6765\u6D4B\u8BD5\u4E00\u4E0B\uFF1A</p>
<h2 data-id="heading-2">\u6D4B\u8BD5</h2>
<p>\u6211\u4EEC\u5728 test \u76EE\u5F55\u4E0B\u65B0\u5EFA\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6 myBabel.config.js:</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">plugin2</span>(<span class="hljs-params">api, options</span>) </span>{
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">visitor</span>: {
            <span class="hljs-function"><span class="hljs-title">Program</span>(<span class="hljs-params">path</span>)</span> {
                <span class="hljs-built_in">Object</span>.entries(path.scope.bindings).forEach(<span class="hljs-function">(<span class="hljs-params">[id, binding]</span>) =&gt;</span> {
                    <span class="hljs-keyword">if</span> (!binding.referenced) {
                        binding.path.remove();
                    }
                });
            },
            <span class="hljs-function"><span class="hljs-title">FunctionDeclaration</span>(<span class="hljs-params">path</span>)</span> {
                <span class="hljs-built_in">Object</span>.entries(path.scope.bindings).forEach(<span class="hljs-function">(<span class="hljs-params">[id, binding]</span>) =&gt;</span> {
                    <span class="hljs-keyword">if</span> (!binding.referenced) {
                        binding.path.remove();
                    }
                });
            }
        }
    }
}

<span class="hljs-built_in">module</span>.exports = {
    <span class="hljs-attr">parserOpts</span>: {
        <span class="hljs-attr">plugins</span>: [<span class="hljs-string">'literal'</span>, <span class="hljs-string">'guangKeyword'</span>]
    },
    <span class="hljs-attr">plugins</span>: [
        [
            plugin2
        ]
    ]
}
</code></pre>
<p>\u7136\u540E\u6DFB\u52A0\u4E00\u4E2A input \u76EE\u5F55\uFF0C\u91CC\u9762\u653E\u4E0A\u4E24\u4E2A\u6587\u4EF6\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-comment">// input1.js</span>
<span class="hljs-keyword">const</span> c = <span class="hljs-number">1</span>;
<span class="hljs-keyword">const</span> d = <span class="hljs-number">2</span>;
<span class="hljs-keyword">const</span> e = <span class="hljs-number">4</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params">a, b</span>) </span>{
    <span class="hljs-keyword">const</span> tmp = <span class="hljs-number">1</span>;
    <span class="hljs-keyword">return</span> a + b;
}

add(c, d);
</code></pre>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-comment">// input2.js</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">minus</span>(<span class="hljs-params">a, b</span>) </span>{
    <span class="hljs-keyword">return</span> a - b;
}

minus(<span class="hljs-number">3</span>, <span class="hljs-number">4</span>);
</code></pre>
<p>\u4E4B\u540E\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u65B9\u5F0F\u6765\u6D4B\u8BD5\uFF1A</p>
<pre><code class="">node ../src/cli/index.js ./input/*.js --out-dir ./dist --watch
</code></pre>
<p>\u4E5F\u53EF\u4EE5\u7528 vscode \u7684 debugger \u6765\u8DD1\uFF0C\u8FD9\u6837\u80FD\u6253\u65AD\u70B9\u8C03\u8BD5\uFF0C\u5728 .vscode/launch.json \u4E2D\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E\uFF1A</p>
<pre><code class="hljs language-json" lang="json">{
    <span class="hljs-attr">"name"</span>: <span class="hljs-string">"\u6D4B\u8BD5 babel cli"</span>,
    <span class="hljs-attr">"program"</span>: <span class="hljs-string">"\${workspaceFolder}/exercize-babel/src/cli/index.js"</span>,<span class="hljs-comment">//\u8FD0\u884C\u7684\u4EE3\u7801</span>
    <span class="hljs-attr">"request"</span>: <span class="hljs-string">"launch"</span>,
    <span class="hljs-attr">"type"</span>: <span class="hljs-string">"node"</span>,
    <span class="hljs-attr">"args"</span>: [
        <span class="hljs-string">"./input/*.js"</span>, <span class="hljs-string">"--out-dir"</span>, <span class="hljs-string">"./dist"</span>,
        <span class="hljs-string">"--watch"</span>,
    ],<span class="hljs-comment">//\u547D\u4EE4\u884C\u53C2\u6570</span>
    <span class="hljs-attr">"cwd"</span>: <span class="hljs-string">"\${workspaceFolder}/exercize-babel/test"</span><span class="hljs-comment">//\u8FD0\u884C\u7684\u76EE\u5F55</span>
},
</code></pre>
<p>\u7136\u540E\u70B9\u51FB debug \u6309\u94AE\u5C31\u53EF\u4EE5\u8DD1\u4E86\u3002
\u4F46\u662F\u8FD9\u6837\u6D4B\u8BD5\u9700\u8981\u6307\u5B9A\u8DEF\u5F84\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u628A\u8FD9\u4E2A\u547D\u4EE4\u6CE8\u518C\u5230\u672C\u5730\u7684\u5168\u5C40\u76EE\u5F55\uFF1A</p>
<p>\u5728 cli/index.js \u6587\u4EF6\u5F00\u5934\u52A0\u4E0A:</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-meta">#!/usr/bin/env node</span>
</code></pre>
<p>\u5728 package.json \u4E2D\u6CE8\u518C\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-string">"bin"</span>: {
    <span class="hljs-string">"my-babel"</span>: <span class="hljs-string">"./src/cli/index.js"</span>
}
</code></pre>
<p>\u7136\u540E\u6267\u884C npm link\uFF0C\u6CE8\u518C\u5230\u5168\u5C40\uFF0C\u4E4B\u540E\u5C31\u53EF\u4EE5\u76F4\u63A5\u8FD9\u6837\u4F7F\u7528\u4E86\uFF1A</p>
<pre><code class="">myBabel ./input/*.js --out-dir ./dist --watch

</code></pre>
<p>\u6548\u679C\u5982\u4E0B\uFF1A</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6c292a99939741daafe31b3e66b3cb29~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u5F53\u7136\uFF0C\u5982\u679C\u662F\u6B63\u5F0F\u7684\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u9700\u8981\u53D1\u5E03\u5230 npm \u4ED3\u5E93\uFF0C\u7136\u540E npm install \u7684\u65B9\u5F0F\u6765\u5B89\u88C5\u548C\u4F7F\u7528\u3002</p>
<p>\u5982\u679C npm link \u4E4B\u540E\u8FD8\u662F\u627E\u4E0D\u5230 my-babel \u7684\u547D\u4EE4\uFF0C\u90A3\u4E48\u53EF\u80FD\u662F\u4F60\u6CA1\u6709\u628A\u5168\u5C40bin \u7684\u4F4D\u7F6E\u6DFB\u52A0\u5230\u73AF\u5883\u53D8\u91CF\u7684 PATH \u4E2D\uFF0C\u53EF\u4EE5\u8FD9\u6837\u505A\uFF1A</p>
<pre><code class="">export PATH = $PATH:\`npm get prefix\`/bin
</code></pre>
<p>\u628A\u8FD9\u884C\u547D\u4EE4\u6DFB\u52A0\u5230 ~/.bashrc \u4E0B\uFF0C\u7136\u540E source ~/.bashrc \u5C31\u53EF\u4EE5\u4E86\u3002</p>
<p>\u539F\u7406\u662F\uFF1A npm get prefix \u662F\u67E5\u770B\u672C\u5730 npm \u7684\u5168\u5C40\u8DEF\u5F84\uFF0C\u800C bin \u5C31\u662F\u547D\u4EE4\u7684\u8DEF\u5F84\uFF0C\u6DFB\u52A0\u5230 PATH \u4E2D\u5C31\u53EF\u4EE5\u67E5\u627E\u5230\u4E86\u3002</p>
<h2 data-id="heading-3">\u603B\u7ED3</h2>
<p>\u6211\u4EEC\u5B9E\u73B0\u4E86 babel cli \u7684\u547D\u4EE4\u884C\u53C2\u6570\u7684\u89E3\u6790\uFF08commander\uFF09\uFF0C\u6A21\u7CCA\u5339\u914D\u6587\u4EF6\uFF08glob\uFF09\u3001\u914D\u7F6E\u6587\u4EF6\u67E5\u627E\uFF08cosmiconfig\uFF09\u3001\u76D1\u542C\u6587\u4EF6\u53D8\u52A8\uFF08chokidar\uFF09\u7B49\u529F\u80FD\u3002\u4E4B\u540E\u5728 package.json \u4E2D\u7684 bin \u6765\u6CE8\u518C\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E86\u3002</p>
<p>\u672C\u5730\u6D4B\u8BD5\u7684\u65F6\u5019\u53EF\u4EE5 link \u5230\u5168\u5C40\u76EE\u5F55\uFF0C\u5F53\u7136\u5168\u5C40\u76EE\u5F55\u9700\u8981\u5728 PATH \u4E2D\uFF0C\u5982\u679C\u4E0D\u5728\u7684\u8BDD\uFF0C\u9700\u8981 npm get prefix \u770B\u4E00\u4E0B\u5168\u5C40 npm \u8DEF\u5F84\uFF0C\u7136\u540E\u6DFB\u52A0\u5230 PATH\u3002</p>
<p>\uFF08\u4EE3\u7801\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FQuarkGluonPlasma%2Fbabel-plugin-exercize" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/QuarkGluonPlasma/babel-plugin-exercize" ref="nofollow noopener noreferrer">\u8FD9\u91CC</a>\uFF0C\u5EFA\u8BAE git clone \u4E0B\u6765\u901A\u8FC7 node \u8DD1\u4E00\u4E0B\uFF09</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
