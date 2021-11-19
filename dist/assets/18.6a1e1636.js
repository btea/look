var n={name:"\u5B9E\u73B0\u5C0F\u578B\u6253\u5305\u5DE5\u5177",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h1 data-id="heading-0">\u5B9E\u73B0\u5C0F\u578B\u6253\u5305\u5DE5\u5177</h1>
<p>\u539F\u672C\u5C0F\u518C\u8BA1\u5212\u4E2D\u662F\u6CA1\u6709\u8FD9\u4E00\u7AE0\u8282\u7684\uFF0CWebpack \u5DE5\u4F5C\u539F\u7406\u5E94\u8BE5\u662F\u4E0A\u4E00\u7AE0\u8282\u5305\u542B\u7684\u5185\u5BB9\u3002\u4F46\u662F\u8003\u8651\u5230\u65E2\u7136\u8BB2\u5230\u5DE5\u4F5C\u539F\u7406\uFF0C\u5FC5\u7136\u9700\u8981\u8BB2\u89E3\u6E90\u7801\uFF0C\u4F46\u662F Webpack \u7684\u6E90\u7801\u5F88\u96BE\u8BFB\uFF0C\u4E0D\u7ED3\u5408\u6E90\u7801\u5E72\u5DF4\u5DF4\u8BB2\u539F\u7406\u53C8\u6CA1\u6709\u4EC0\u4E48\u4EF7\u503C\u3002\u6240\u4EE5\u5728\u8FD9\u4E00\u7AE0\u8282\u4E2D\uFF0C\u6211\u5C06\u4F1A\u5E26\u5927\u5BB6\u6765\u5B9E\u73B0\u4E00\u4E2A\u51E0\u5341\u884C\u7684\u8FF7\u4F60\u6253\u5305\u5DE5\u5177\uFF0C\u8BE5\u5DE5\u5177\u53EF\u4EE5\u5B9E\u73B0\u4EE5\u4E0B\u4E24\u4E2A\u529F\u80FD</p>
<ul>
<li>\u5C06 ES6 \u8F6C\u6362\u4E3A ES5</li>
<li>\u652F\u6301\u5728 JS \u6587\u4EF6\u4E2D <code>import</code> CSS \u6587\u4EF6</li>
</ul>
<p>\u901A\u8FC7\u8FD9\u4E2A\u5DE5\u5177\u7684\u5B9E\u73B0\uFF0C\u5927\u5BB6\u53EF\u4EE5\u7406\u89E3\u5230\u6253\u5305\u5DE5\u5177\u7684<strong>\u539F\u7406</strong>\u5230\u5E95\u662F\u4EC0\u4E48\u3002</p>
<h2 data-id="heading-1">\u5B9E\u73B0</h2>
<p>\u56E0\u4E3A\u6D89\u53CA\u5230 ES6 \u8F6C ES5\uFF0C\u6240\u4EE5\u6211\u4EEC\u9996\u5148\u9700\u8981\u5B89\u88C5\u4E00\u4E9B Babel \u76F8\u5173\u7684\u5DE5\u5177</p>
<pre><code lang="bash" class="">yarn add babylon babel-traverse babel-core babel-preset-env  
</code></pre><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u8FD9\u4E9B\u5DE5\u5177\u5F15\u5165\u6587\u4EF6\u4E2D</p>
<pre><code lang="js" class=""><span>const</span> fs = <span>require</span>(<span>'fs'</span>)
<span>const</span> path = <span>require</span>(<span>'path'</span>)
<span>const</span> babylon = <span>require</span>(<span>'babylon'</span>)
<span>const</span> traverse = <span>require</span>(<span>'babel-traverse'</span>).default
<span>const</span> { transformFromAst } = <span>require</span>(<span>'babel-core'</span>)
</code></pre><p>\u9996\u5148\uFF0C\u6211\u4EEC\u5148\u6765\u5B9E\u73B0\u5982\u4F55\u4F7F\u7528 Babel \u8F6C\u6362\u4EE3\u7801</p>
<pre><code lang="js" class=""><span><span>function</span> <span>readCode</span>(<span>filePath</span>) </span>{
  <span>// \u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9</span>
  <span>const</span> content = fs.readFileSync(filePath, <span>'utf-8'</span>)
  <span>// \u751F\u6210 AST</span>
  <span>const</span> ast = babylon.parse(content, {
    <span>sourceType</span>: <span>'module'</span>
  })
  <span>// \u5BFB\u627E\u5F53\u524D\u6587\u4EF6\u7684\u4F9D\u8D56\u5173\u7CFB</span>
  <span>const</span> dependencies = []
  traverse(ast, {
    <span>ImportDeclaration</span>: <span>(<span>{ node }</span>) =&gt;</span> {
      dependencies.push(node.source.value)
    }
  })
  <span>// \u901A\u8FC7 AST \u5C06\u4EE3\u7801\u8F6C\u4E3A ES5</span>
  <span>const</span> { code } = transformFromAst(ast, <span>null</span>, {
    <span>presets</span>: [<span>'env'</span>]
  })
  <span>return</span> {
    filePath,
    dependencies,
    code
  }
}
</code></pre><ul>
<li>\u9996\u5148\u6211\u4EEC\u4F20\u5165\u4E00\u4E2A\u6587\u4EF6\u8DEF\u5F84\u53C2\u6570\uFF0C\u7136\u540E\u901A\u8FC7 <code>fs</code> \u5C06\u6587\u4EF6\u4E2D\u7684\u5185\u5BB9\u8BFB\u53D6\u51FA\u6765</li>
<li>\u63A5\u4E0B\u6765\u6211\u4EEC\u901A\u8FC7 <code>babylon</code> \u89E3\u6790\u4EE3\u7801\u83B7\u53D6 AST\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u5206\u6790\u4EE3\u7801\u4E2D\u662F\u5426\u8FD8\u5F15\u5165\u4E86\u522B\u7684\u6587\u4EF6</li>
<li>\u901A\u8FC7 <code>dependencies</code> \u6765\u5B58\u50A8\u6587\u4EF6\u4E2D\u7684\u4F9D\u8D56\uFF0C\u7136\u540E\u518D\u5C06 AST \u8F6C\u6362\u4E3A ES5 \u4EE3\u7801</li>
<li>\u6700\u540E\u51FD\u6570\u8FD4\u56DE\u4E86\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u4E2D\u5305\u542B\u4E86\u5F53\u524D\u6587\u4EF6\u8DEF\u5F84\u3001\u5F53\u524D\u6587\u4EF6\u4F9D\u8D56\u548C\u5F53\u524D\u6587\u4EF6\u8F6C\u6362\u540E\u7684\u4EE3\u7801</li>
</ul>
<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u9700\u8981\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u7684\u529F\u80FD\u6709\u4EE5\u4E0B\u51E0\u70B9</p>
<ul>
<li>\u8C03\u7528 <code>readCode</code> \u51FD\u6570\uFF0C\u4F20\u5165\u5165\u53E3\u6587\u4EF6</li>
<li>\u5206\u6790\u5165\u53E3\u6587\u4EF6\u7684\u4F9D\u8D56</li>
<li>\u8BC6\u522B JS \u548C CSS \u6587\u4EF6</li>
</ul>
<pre><code lang="js" class=""><span><span>function</span> <span>getDependencies</span>(<span>entry</span>) </span>{
  <span>// \u8BFB\u53D6\u5165\u53E3\u6587\u4EF6</span>
  <span>const</span> entryObject = readCode(entry)
  <span>const</span> dependencies = [entryObject]
  <span>// \u904D\u5386\u6240\u6709\u6587\u4EF6\u4F9D\u8D56\u5173\u7CFB</span>
  <span>for</span> (<span>const</span> asset <span>of</span> dependencies) {
    <span>// \u83B7\u5F97\u6587\u4EF6\u76EE\u5F55</span>
    <span>const</span> dirname = path.dirname(asset.filePath)
    <span>// \u904D\u5386\u5F53\u524D\u6587\u4EF6\u4F9D\u8D56\u5173\u7CFB</span>
    asset.dependencies.forEach(<span><span>relativePath</span> =&gt;</span> {
      <span>// \u83B7\u5F97\u7EDD\u5BF9\u8DEF\u5F84</span>
      <span>const</span> absolutePath = path.join(dirname, relativePath)
      <span>// CSS \u6587\u4EF6\u903B\u8F91\u5C31\u662F\u5C06\u4EE3\u7801\u63D2\u5165\u5230 \`style\` \u6807\u7B7E\u4E2D</span>
      <span>if</span> (<span>/\\.css$/</span>.test(absolutePath)) {
        <span>const</span> content = fs.readFileSync(absolutePath, <span>'utf-8'</span>)
        <span>const</span> code = <span>\`
          const style = document.createElement('style')
          style.innerText = <span>\${<span>JSON</span>.stringify(content).replace(<span>/\\\\r\\\\n/g</span>, <span>''</span>)}</span>
          document.head.appendChild(style)
        \`</span>
        dependencies.push({
          <span>filePath</span>: absolutePath,
          relativePath,
          <span>dependencies</span>: [],
          code
        })
      } <span>else</span> {
        <span>// JS \u4EE3\u7801\u9700\u8981\u7EE7\u7EED\u67E5\u627E\u662F\u5426\u6709\u4F9D\u8D56\u5173\u7CFB</span>
        <span>const</span> child = readCode(absolutePath)
        child.relativePath = relativePath
        dependencies.push(child)
      }
    })
  }
  <span>return</span> dependencies
}
</code></pre><ul>
<li>\u9996\u5148\u6211\u4EEC\u8BFB\u53D6\u5165\u53E3\u6587\u4EF6\uFF0C\u7136\u540E\u521B\u5EFA\u4E00\u4E2A\u6570\u7EC4\uFF0C\u8BE5\u6570\u7EC4\u7684\u76EE\u7684\u662F\u5B58\u50A8\u4EE3\u7801\u4E2D\u6D89\u53CA\u5230\u7684\u6240\u6709\u6587\u4EF6</li>
<li>\u63A5\u4E0B\u6765\u6211\u4EEC\u904D\u5386\u8FD9\u4E2A\u6570\u7EC4\uFF0C\u4E00\u5F00\u59CB\u8FD9\u4E2A\u6570\u7EC4\u4E2D\u53EA\u6709\u5165\u53E3\u6587\u4EF6\uFF0C\u5728\u904D\u5386\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u5165\u53E3\u6587\u4EF6\u6709\u4F9D\u8D56\u5176\u4ED6\u7684\u6587\u4EF6\uFF0C\u90A3\u4E48\u5C31\u4F1A\u88AB <code>push</code> \u5230\u8FD9\u4E2A\u6570\u7EC4\u4E2D</li>
<li>\u5728\u904D\u5386\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u5148\u83B7\u5F97\u8BE5\u6587\u4EF6\u5BF9\u5E94\u7684\u76EE\u5F55\uFF0C\u7136\u540E\u904D\u5386\u5F53\u524D\u6587\u4EF6\u7684\u4F9D\u8D56\u5173\u7CFB</li>
<li>\u5728\u904D\u5386\u5F53\u524D\u6587\u4EF6\u4F9D\u8D56\u5173\u7CFB\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u9996\u5148\u751F\u6210\u4F9D\u8D56\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u7136\u540E\u5224\u65AD\u5F53\u524D\u6587\u4EF6\u662F CSS \u6587\u4EF6\u8FD8\u662F JS \u6587\u4EF6
<ul>
<li>\u5982\u679C\u662F CSS \u6587\u4EF6\u7684\u8BDD\uFF0C\u6211\u4EEC\u5C31\u4E0D\u80FD\u7528 Babel \u53BB\u7F16\u8BD1\u4E86\uFF0C\u53EA\u9700\u8981\u8BFB\u53D6 CSS \u6587\u4EF6\u4E2D\u7684\u4EE3\u7801\uFF0C\u7136\u540E\u521B\u5EFA\u4E00\u4E2A <code>style</code> \u6807\u7B7E\uFF0C\u5C06\u4EE3\u7801\u63D2\u5165\u8FDB\u6807\u7B7E\u5E76\u4E14\u653E\u5165 <code>head</code> \u4E2D\u5373\u53EF</li>
<li>\u5982\u679C\u662F JS \u6587\u4EF6\u7684\u8BDD\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u5206\u6790 JS \u6587\u4EF6\u662F\u5426\u8FD8\u6709\u522B\u7684\u4F9D\u8D56\u5173\u7CFB</li>
<li>\u6700\u540E\u5C06\u8BFB\u53D6\u6587\u4EF6\u540E\u7684\u5BF9\u8C61 <code>push</code> \u8FDB\u6570\u7EC4\u4E2D</li>
</ul>
</li>
</ul>
<p>\u73B0\u5728\u6211\u4EEC\u5DF2\u7ECF\u83B7\u53D6\u5230\u4E86\u6240\u6709\u7684\u4F9D\u8D56\u6587\u4EF6\uFF0C\u63A5\u4E0B\u6765\u5C31\u662F\u5B9E\u73B0\u6253\u5305\u7684\u529F\u80FD\u4E86</p>
<pre><code lang="js" class=""><span><span>function</span> <span>bundle</span>(<span>dependencies, entry</span>) </span>{
  <span>let</span> modules = <span>''</span>
  <span>// \u6784\u5EFA\u51FD\u6570\u53C2\u6570\uFF0C\u751F\u6210\u7684\u7ED3\u6784\u4E3A</span>
  <span>// { './entry.js': function(module, exports, require) { \u4EE3\u7801 } }</span>
  dependencies.forEach(<span><span>dep</span> =&gt;</span> {
    <span>const</span> filePath = dep.relativePath || entry
    modules += <span>\`'<span>\${filePath}</span>': (
      function (module, exports, require) { <span>\${dep.code}</span> }
    ),\`</span>
  })
  <span>// \u6784\u5EFA require \u51FD\u6570\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u83B7\u53D6\u6A21\u5757\u66B4\u9732\u51FA\u6765\u7684\u5185\u5BB9</span>
  <span>const</span> result = <span>\`
    (function(modules) {
      function require(id) {
        const module = { exports : {} }
        modules[id](module, module.exports, require)
        return module.exports
      }
      require('<span>\${entry}</span>')
    })({<span>\${modules}</span>})
  \`</span>
  <span>// \u5F53\u751F\u6210\u7684\u5185\u5BB9\u5199\u5165\u5230\u6587\u4EF6\u4E2D</span>
  fs.writeFileSync(<span>'./bundle.js'</span>, result)
}
</code></pre><p>\u8FD9\u6BB5\u4EE3\u7801\u9700\u8981\u7ED3\u5408\u7740 Babel \u8F6C\u6362\u540E\u7684\u4EE3\u7801\u6765\u770B\uFF0C\u8FD9\u6837\u5927\u5BB6\u5C31\u80FD\u7406\u89E3\u4E3A\u4EC0\u4E48\u9700\u8981\u8FD9\u6837\u5199\u4E86</p>
<pre><code lang="js" class=""><span>// entry.js</span>
<span>var</span> _a = <span>require</span>(<span>'./a.js'</span>)
<span>var</span> _a2 = _interopRequireDefault(_a)
<span><span>function</span> <span>_interopRequireDefault</span>(<span>obj</span>) </span>{
    <span>return</span> obj &amp;&amp; obj.__esModule ? obj : { <span>default</span>: obj }
}
<span>console</span>.log(_a2.default)
<span>// a.js</span>
<span>Object</span>.defineProperty(exports, <span>'__esModule'</span>, {
    <span>value</span>: <span>true</span>
})
<span>var</span> a = <span>1</span>
exports.default = a
</code></pre><p>Babel \u5C06\u6211\u4EEC ES6 \u7684\u6A21\u5757\u5316\u4EE3\u7801\u8F6C\u6362\u4E3A\u4E86 CommonJS\uFF08\u5982\u679C\u4F60\u4E0D\u719F\u6089 CommonJS \u7684\u8BDD\uFF0C\u53EF\u4EE5\u9605\u8BFB\u8FD9\u4E00\u7AE0\u8282\u4E2D\u5173\u4E8E <a target="_blank" href="https://juejin.cn/book/6844733763675488269/section/6844733763759374344" title="https://juejin.cn/book/6844733763675488269/section/6844733763759374344">\u6A21\u5757\u5316\u7684\u77E5\u8BC6\u70B9</a>\uFF09 \u7684\u4EE3\u7801\uFF0C\u4F46\u662F\u6D4F\u89C8\u5668\u662F\u4E0D\u652F\u6301 CommonJS \u7684\uFF0C\u6240\u4EE5\u5982\u679C\u8FD9\u6BB5\u4EE3\u7801\u9700\u8981\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u8FD0\u884C\u7684\u8BDD\uFF0C\u6211\u4EEC\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0 CommonJS \u76F8\u5173\u7684\u4EE3\u7801\uFF0C\u8FD9\u5C31\u662F <code>bundle</code> \u51FD\u6570\u505A\u7684\u5927\u90E8\u5206\u4E8B\u60C5\u3002</p>
<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u518D\u6765\u9010\u884C\u89E3\u6790 <code>bundle</code> \u51FD\u6570</p>
<ul>
<li>\u9996\u5148\u904D\u5386\u6240\u6709\u4F9D\u8D56\u6587\u4EF6\uFF0C\u6784\u5EFA\u51FA\u4E00\u4E2A\u51FD\u6570\u53C2\u6570\u5BF9\u8C61</li>
<li>\u5BF9\u8C61\u7684\u5C5E\u6027\u5C31\u662F\u5F53\u524D\u6587\u4EF6\u7684\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u5C5E\u6027\u503C\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u4F53\u662F\u5F53\u524D\u6587\u4EF6\u4E0B\u7684\u4EE3\u7801\uFF0C\u51FD\u6570\u63A5\u53D7\u4E09\u4E2A\u53C2\u6570 <code>module</code>\u3001<code>exports</code>\u3001 <code>require</code>
<ul>
<li><code>module</code> \u53C2\u6570\u5BF9\u5E94 CommonJS \u4E2D\u7684 <code>module</code></li>
<li><code>exports</code> \u53C2\u6570\u5BF9\u5E94 CommonJS \u4E2D\u7684 <code>module.export</code></li>
<li><code>require</code> \u53C2\u6570\u5BF9\u5E94\u6211\u4EEC\u81EA\u5DF1\u521B\u5EFA\u7684 <code>require</code> \u51FD\u6570</li>
</ul>
</li>
<li>\u63A5\u4E0B\u6765\u5C31\u662F\u6784\u9020\u4E00\u4E2A\u4F7F\u7528\u53C2\u6570\u7684\u51FD\u6570\u4E86\uFF0C\u51FD\u6570\u505A\u7684\u4E8B\u60C5\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u5185\u90E8\u521B\u5EFA\u4E00\u4E2A <code>require</code> \u51FD\u6570\uFF0C\u7136\u540E\u8C03\u7528 <code>require(entry)</code>\uFF0C\u4E5F\u5C31\u662F <code>require('./entry.js')</code>\uFF0C\u8FD9\u6837\u5C31\u4F1A\u4ECE\u51FD\u6570\u53C2\u6570\u4E2D\u627E\u5230 <code>./entry.js</code> \u5BF9\u5E94\u7684\u51FD\u6570\u5E76\u6267\u884C\uFF0C\u6700\u540E\u5C06\u5BFC\u51FA\u7684\u5185\u5BB9\u901A\u8FC7 <code>module.export</code> \u7684\u65B9\u5F0F\u8BA9\u5916\u90E8\u83B7\u53D6\u5230</li>
<li>\u6700\u540E\u518D\u5C06\u6253\u5305\u51FA\u6765\u7684\u5185\u5BB9\u5199\u5165\u5230\u5355\u72EC\u7684\u6587\u4EF6\u4E2D</li>
</ul>
<p>\u5982\u679C\u4F60\u5BF9\u4E8E\u4E0A\u9762\u7684\u5B9E\u73B0\u8FD8\u6709\u7591\u60D1\u7684\u8BDD\uFF0C\u53EF\u4EE5\u9605\u8BFB\u4E0B\u6253\u5305\u540E\u7684\u90E8\u5206\u7B80\u5316\u4EE3\u7801</p>
<pre><code lang="js" class="">;(<span><span>function</span>(<span>modules</span>) </span>{
  <span><span>function</span> <span>require</span>(<span>id</span>) </span>{
    <span>// \u6784\u9020\u4E00\u4E2A CommonJS \u5BFC\u51FA\u4EE3\u7801</span>
    <span>const</span> <span>module</span> = { <span>exports</span>: {} }
    <span>// \u53BB\u53C2\u6570\u4E2D\u83B7\u53D6\u6587\u4EF6\u5BF9\u5E94\u7684\u51FD\u6570\u5E76\u6267\u884C</span>
    modules[id](<span>module</span>, <span>module</span>.exports, <span>require</span>)
    <span>return</span> <span>module</span>.exports
  }
  <span>require</span>(<span>'./entry.js'</span>)
})({
  <span>'./entry.js'</span>: <span><span>function</span>(<span>module, exports, require</span>) </span>{
    <span>// \u8FD9\u91CC\u7EE7\u7EED\u901A\u8FC7\u6784\u9020\u7684 require \u53BB\u627E\u5230 a.js \u6587\u4EF6\u5BF9\u5E94\u7684\u51FD\u6570</span>
    <span>var</span> _a = <span>require</span>(<span>'./a.js'</span>)
    <span>console</span>.log(_a2.default)
  },
  <span>'./a.js'</span>: <span><span>function</span>(<span>module, exports, require</span>) </span>{
    <span>var</span> a = <span>1</span>
    <span>// \u5C06 require \u51FD\u6570\u4E2D\u7684\u53D8\u91CF module \u53D8\u6210\u4E86\u8FD9\u6837\u7684\u7ED3\u6784</span>
    <span>// module.exports = 1</span>
    <span>// \u8FD9\u6837\u5C31\u80FD\u5728\u5916\u90E8\u53D6\u5230\u5BFC\u51FA\u7684\u5185\u5BB9\u4E86</span>
    exports.default = a
  }
  <span>// \u7701\u7565</span>
})
</code></pre><h2 data-id="heading-2">\u5C0F\u7ED3</h2>
<p>\u867D\u7136\u5B9E\u73B0\u8FD9\u4E2A\u5DE5\u5177\u53EA\u5199\u4E86\u4E0D\u5230 100 \u884C\u7684\u4EE3\u7801\uFF0C\u4F46\u662F\u6253\u5305\u5DE5\u5177\u7684\u6838\u5FC3\u539F\u7406\u5C31\u662F\u8FD9\u4E9B\u4E86</p>
<ol>
<li>\u627E\u51FA\u5165\u53E3\u6587\u4EF6\u6240\u6709\u7684\u4F9D\u8D56\u5173\u7CFB</li>
<li>\u7136\u540E\u901A\u8FC7\u6784\u5EFA CommonJS \u4EE3\u7801\u6765\u83B7\u53D6 <code>exports</code> \u5BFC\u51FA\u7684\u5185\u5BB9</li>
</ol>
<p>\u5982\u679C\u5927\u5BB6\u5BF9\u4E8E\u8FD9\u4E2A\u7AE0\u8282\u7684\u5185\u5BB9\u5B58\u5728\u7591\u95EE\uFF0C\u6B22\u8FCE\u5728\u8BC4\u8BBA\u533A\u4E0E\u6211\u4E92\u52A8\u3002</p>
`};export{n as default};
