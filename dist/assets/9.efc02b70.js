var s={name:"\u7ED3\u6784\u578B\uFF1A\u88C5\u9970\u5668\u6A21\u5F0F\u2014\u2014\u6DF1\u5165\u88C5\u9970\u5668\u539F\u7406\u4E0E\u4F18\u79C0\u6848\u4F8B",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h2 data-id="heading-0">\u524D\u7F6E\u77E5\u8BC6\uFF1AES7 \u4E2D\u7684\u88C5\u9970\u5668</h2>
<p>\u5C0F\u518C\u5728\u77E5\u8BC6\u50A8\u5907\u4E0A\u4E0D\u8981\u6C42\u6240\u6709\u540C\u5B66\u638C\u63E1 ES6+ \u8BED\u6CD5\uFF0C\u6240\u4EE5\u5148\u5E26\u5927\u5BB6\u4E00\u8D77\u8FC7\u4E00\u904D\u88C5\u9970\u5668\u7684\u57FA\u672C\u64CD\u4F5C~</p>
<p>\u5728 ES7 \u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u50CF\u5199 python \u4E00\u6837\u901A\u8FC7\u4E00\u4E2A@\u8BED\u6CD5\u7CD6\u8F7B\u677E\u5730\u7ED9\u4E00\u4E2A\u7C7B\u88C5\u4E0A\u88C5\u9970\u5668\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-comment">// \u88C5\u9970\u5668\u51FD\u6570\uFF0C\u5B83\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u76EE\u6807\u7C7B</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">classDecorator</span>(<span class="hljs-params">target</span>) </span>{
    target.hasDecorator = <span class="hljs-literal">true</span>
  	<span class="hljs-keyword">return</span> target
}

<span class="hljs-comment">// \u5C06\u88C5\u9970\u5668\u201C\u5B89\u88C5\u201D\u5230Button\u7C7B\u4E0A</span>
@classDecorator
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Button</span> </span>{
    <span class="hljs-comment">// Button\u7C7B\u7684\u76F8\u5173\u903B\u8F91</span>
}

<span class="hljs-comment">// \u9A8C\u8BC1\u88C5\u9970\u5668\u662F\u5426\u751F\u6548</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Button \u662F\u5426\u88AB\u88C5\u9970\u4E86\uFF1A'</span>, Button.hasDecorator)
</code></pre>
<p>\u4E5F\u53EF\u4EE5\u7528\u540C\u6837\u7684\u8BED\u6CD5\u7CD6\u53BB\u88C5\u9970\u7C7B\u91CC\u9762\u7684\u65B9\u6CD5\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-comment">// \u5177\u4F53\u7684\u53C2\u6570\u610F\u4E49\uFF0C\u5728\u4E0B\u4E2A\u5C0F\u8282\uFF0C\u8FD9\u91CC\u5927\u5BB6\u5148\u611F\u77E5\u4E00\u4E0B\u64CD\u4F5C</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">funcDecorator</span>(<span class="hljs-params">target, name, descriptor</span>) </span>{
    <span class="hljs-keyword">let</span> originalMethod = descriptor.value
    descriptor.value = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'\u6211\u662FFunc\u7684\u88C5\u9970\u5668\u903B\u8F91'</span>)
    <span class="hljs-keyword">return</span> originalMethod.apply(<span class="hljs-built_in">this</span>, <span class="hljs-built_in">arguments</span>)
  }
  <span class="hljs-keyword">return</span> descriptor
}

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Button</span> </span>{
    @funcDecorator
    <span class="hljs-function"><span class="hljs-title">onClick</span>(<span class="hljs-params"></span>)</span> { 
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'\u6211\u662FFunc\u7684\u539F\u6709\u903B\u8F91'</span>)
    }
}

<span class="hljs-comment">// \u9A8C\u8BC1\u88C5\u9970\u5668\u662F\u5426\u751F\u6548</span>
<span class="hljs-keyword">const</span> button = <span class="hljs-keyword">new</span> Button()
button.onClick()
</code></pre>
<p>\u6CE8\uFF1A\u4EE5\u4E0A\u4EE3\u7801\u76F4\u63A5\u653E\u8FDB\u6D4F\u89C8\u5668/Node \u4E2D\u8FD0\u884C\u4F1A\u62A5\u9519\uFF0C\u56E0\u4E3A\u6D4F\u89C8\u5668\u548C Node \u76EE\u524D\u90FD\u4E0D\u652F\u6301\u88C5\u9970\u5668\u8BED\u6CD5\uFF0C\u9700\u8981\u5927\u5BB6\u5B89\u88C5 <a href="https://link.juejin.cn?target=https%3A%2F%2Fbabeljs.io%2F" target="_blank" rel="nofollow noopener noreferrer" title="https://babeljs.io/" ref="nofollow noopener noreferrer">Babel</a> \u8FDB\u884C\u8F6C\u7801\uFF1A</p>
<blockquote>
<p>\u5B89\u88C5 Babel \u53CA\u88C5\u9970\u5668\u76F8\u5173\u7684 Babel \u63D2\u4EF6</p>
</blockquote>
<pre><code class="">npm install babel-preset-env babel-plugin-transform-decorators-legacy --save-dev
</code></pre>
<p>\u6CE8\uFF1A\u5728\u6CA1\u6709\u4EFB\u4F55\u914D\u7F6E\u9009\u9879\u7684\u60C5\u51B5\u4E0B\uFF0Cbabel-preset-env \u4E0E babel-preset-latest\uFF08\u6216\u8005 babel-preset-es2015\uFF0Cbabel-preset-es2016 \u548C babel-preset-es2017 \u4E00\u8D77\uFF09\u7684\u884C\u4E3A\u5B8C\u5168\u76F8\u540C\u3002</p>
<blockquote>
<p>\u7F16\u5199\u914D\u7F6E\u6587\u4EF6.babelrc\uFF1A</p>
</blockquote>
<pre><code class="hljs language-json" lang="json">{
  <span class="hljs-attr">"presets"</span>: [<span class="hljs-string">"env"</span>],
  <span class="hljs-attr">"plugins"</span>: [<span class="hljs-string">"transform-decorators-legacy"</span>]
}
</code></pre>
<p>\u6700\u540E\u522B\u5FD8\u4E86\u4E0B\u8F7D\u5168\u5C40\u7684 Babel \u547D\u4EE4\u884C\u5DE5\u5177\u7528\u4E8E\u8F6C\u7801\uFF1A</p>
<pre><code class="">npm install babel-cli -g
</code></pre>
<p>\u6267\u884C\u5B8C\u8FD9\u6CE2\u64CD\u4F5C\uFF0C\u6211\u4EEC\u9996\u5148\u662F\u5BF9\u76EE\u6807\u6587\u4EF6\u8FDB\u884C\u8F6C\u7801\uFF0C\u6BD4\u5982\u8BF4\u4F60\u7684\u76EE\u6807\u6587\u4EF6\u53EB\u505A <code>test.js</code>\uFF0C\u60F3\u8981\u628A\u5B83\u8F6C\u7801\u540E\u7684\u7ED3\u679C\u8F93\u51FA\u5230 <code>babel_test.js</code>\uFF0C\u5C31\u53EF\u4EE5\u8FD9\u4E48\u5199:</p>
<pre><code class="">babel test.js --out-file babel_test.js
</code></pre>
<blockquote>
<p>\u8FD0\u884Cbabel_test.js</p>
</blockquote>
<pre><code class="">babel_test.js
</code></pre>
<p>\u5C31\u53EF\u4EE5\u770B\u5230\u4F60\u7684\u88C5\u9970\u5668\u662F\u5426\u751F\u6548\u5566~</p>
<p>OK\uFF0C\u77E5\u9053\u4E86\u88C5\u9970\u5668\u957F\u5565\u6837\uFF0C\u6211\u4EEC\u4E00\u8D77\u770B\u770B\u88C5\u9970\u5668\u7684\u5B9E\u73B0\u7EC6\u8282\uFF1A</p>
<h2 data-id="heading-1">\u88C5\u9970\u5668\u8BED\u6CD5\u7CD6\u80CC\u540E\u7684\u6545\u4E8B</h2>
<p>\u6240\u8C13\u8BED\u6CD5\u7CD6\uFF0C\u5F80\u5F80\u610F\u5473\u7740\u201C\u7F8E\u597D\u7684\u8868\u8C61\u201D\u3002\u6B63\u5982 class \u8BED\u6CD5\u7CD6\u80CC\u540E\u662F\u5927\u5BB6\u65E9\u5DF2\u5341\u5206\u719F\u6089\u7684 ES5 \u6784\u9020\u51FD\u6570\u4E00\u6837\uFF0C\u88C5\u9970\u5668\u8BED\u6CD5\u7CD6\u80CC\u540E\u4E5F\u662F\u6211\u4EEC\u7684\u8001\u670B\u53CB\uFF0C\u4E0D\u4FE1\u6211\u4EEC\u4E00\u8D77\u6765\u770B\u770B<code>@decorator</code>\u90FD\u5E2E\u6211\u4EEC\u505A\u4E86\u4E9B\u4EC0\u4E48\uFF1A</p>
<h3 data-id="heading-2">Part1\uFF1A\u51FD\u6570\u4F20\u53C2&amp;\u8C03\u7528</h3>
<p>\u4E0A\u4E00\u8282\u6211\u4EEC\u4F7F\u7528 ES6 \u5B9E\u73B0\u88C5\u9970\u5668\u6A21\u5F0F\u65F6\u66FE\u7ECF\u5C06\u6309\u94AE\u5B9E\u4F8B\u4F20\u7ED9\u4E86 Decorator\uFF0C\u4EE5\u4FBF\u4E8E\u540E\u7EED Decorator \u53EF\u4EE5\u5BF9\u5B83\u8FDB\u884C\u903B\u8F91\u7684\u62D3\u5C55\u3002\u8FD9\u4E5F\u6B63\u662F\u88C5\u9970\u5668\u7684\u6700\u6700\u57FA\u672C\u64CD\u4F5C\u2014\u2014\u5B9A\u4E49\u88C5\u9970\u5668\u51FD\u6570\uFF0C\u5C06\u88AB\u88C5\u9970\u8005\u201C\u4EA4\u7ED9\u201D\u88C5\u9970\u5668\u3002\u8FD9\u4E5F\u6B63\u662F\u88C5\u9970\u5668\u8BED\u6CD5\u7CD6\u9996\u5148\u5E2E\u6211\u4EEC\u505A\u6389\u7684\u5DE5\u4F5C \u2014\u2014 \u51FD\u6570\u4F20\u53C2&amp;\u8C03\u7528\u3002</p>
<h4 data-id="heading-3">\u7C7B\u88C5\u9970\u5668\u7684\u53C2\u6570</h4>
<p>\u5F53\u6211\u4EEC\u7ED9\u4E00\u4E2A\u7C7B\u6DFB\u52A0\u88C5\u9970\u5668\u65F6\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">classDecorator</span>(<span class="hljs-params">target</span>) </span>{
    target.hasDecorator = <span class="hljs-literal">true</span>
  	<span class="hljs-keyword">return</span> target
}

<span class="hljs-comment">// \u5C06\u88C5\u9970\u5668\u201C\u5B89\u88C5\u201D\u5230Button\u7C7B\u4E0A</span>
@classDecorator
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Button</span> </span>{
    <span class="hljs-comment">// Button\u7C7B\u7684\u76F8\u5173\u903B\u8F91</span>
}
</code></pre>
<p>\u6B64\u5904\u7684 target \u5C31\u662F\u88AB\u88C5\u9970\u7684\u7C7B\u672C\u8EAB\u3002</p>
<h4 data-id="heading-4">\u65B9\u6CD5\u88C5\u9970\u5668\u7684\u53C2\u6570</h4>
<p>\u800C\u5F53\u6211\u4EEC\u7ED9\u4E00\u4E2A\u65B9\u6CD5\u6DFB\u52A0\u88C5\u9970\u5668\u65F6\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">funcDecorator</span>(<span class="hljs-params">target, name, descriptor</span>) </span>{
    <span class="hljs-keyword">let</span> originalMethod = descriptor.value
    descriptor.value = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'\u6211\u662FFunc\u7684\u88C5\u9970\u5668\u903B\u8F91'</span>)
    <span class="hljs-keyword">return</span> originalMethod.apply(<span class="hljs-built_in">this</span>, <span class="hljs-built_in">arguments</span>)
  }
  <span class="hljs-keyword">return</span> descriptor
}

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Button</span> </span>{
    @funcDecorator
    <span class="hljs-function"><span class="hljs-title">onClick</span>(<span class="hljs-params"></span>)</span> { 
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'\u6211\u662FFunc\u7684\u539F\u6709\u903B\u8F91'</span>)
    }
}   
</code></pre>
<p>\u6B64\u5904\u7684 target \u53D8\u6210\u4E86<code>Button.prototype</code>\uFF0C\u5373\u7C7B\u7684\u539F\u578B\u5BF9\u8C61\u3002\u8FD9\u662F\u56E0\u4E3A onClick \u65B9\u6CD5\u603B\u662F\u8981\u4F9D\u9644\u5176\u5B9E\u4F8B\u5B58\u5728\u7684\uFF0C\u4FEE\u9970 onClik \u5176\u5B9E\u662F\u4FEE\u9970\u5B83\u7684\u5B9E\u4F8B\u3002\u4F46\u6211\u4EEC\u7684\u88C5\u9970\u5668\u51FD\u6570\u6267\u884C\u7684\u65F6\u5019\uFF0CButton \u5B9E\u4F8B\u8FD8<strong>\u5E76\u4E0D\u5B58\u5728</strong>\u3002\u4E3A\u4E86\u786E\u4FDD\u5B9E\u4F8B\u751F\u6210\u540E\u53EF\u4EE5\u987A\u5229\u8C03\u7528\u88AB\u88C5\u9970\u597D\u7684\u65B9\u6CD5\uFF0C\u88C5\u9970\u5668\u53EA\u80FD\u53BB\u4FEE\u9970 Button \u7C7B\u7684\u539F\u578B\u5BF9\u8C61\u3002</p>
<h4 data-id="heading-5">\u88C5\u9970\u5668\u51FD\u6570\u8C03\u7528\u7684\u65F6\u673A</h4>
<p>\u88C5\u9970\u5668\u51FD\u6570\u6267\u884C\u7684\u65F6\u5019\uFF0CButton \u5B9E\u4F8B\u8FD8\u5E76\u4E0D\u5B58\u5728\u3002\u8FD9\u662F\u56E0\u4E3A\u5B9E\u4F8B\u662F\u5728\u6211\u4EEC\u7684\u4EE3\u7801<strong>\u8FD0\u884C\u65F6</strong>\u52A8\u6001\u751F\u6210\u7684\uFF0C\u800C\u88C5\u9970\u5668\u51FD\u6570\u5219\u662F\u5728<strong>\u7F16\u8BD1\u9636\u6BB5</strong>\u5C31\u6267\u884C\u4E86\u3002\u6240\u4EE5\u8BF4\u88C5\u9970\u5668\u51FD\u6570\u771F\u6B63\u80FD\u89E6\u53CA\u5230\u7684\uFF0C\u5C31\u53EA\u6709\u7C7B\u8FD9\u4E2A\u5C42\u9762\u4E0A\u7684\u5BF9\u8C61\u3002</p>
<h3 data-id="heading-6">Part2\uFF1A\u5C06\u201C\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61\u201D\u4EA4\u5230\u4F60\u624B\u91CC</h3>
<p>\u5728\u7F16\u5199\u7C7B\u88C5\u9970\u5668\u65F6\uFF0C\u6211\u4EEC\u4E00\u822C\u83B7\u53D6\u4E00\u4E2Atarget\u53C2\u6570\u5C31\u8DB3\u591F\u4E86\u3002\u4F46\u5728\u7F16\u5199\u65B9\u6CD5\u88C5\u9970\u5668\u65F6\uFF0C\u6211\u4EEC\u5F80\u5F80\u9700\u8981\u81F3\u5C11\u4E09\u4E2A\u53C2\u6570\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">funcDecorator</span>(<span class="hljs-params">target, name, descriptor</span>) </span>{
    <span class="hljs-keyword">let</span> originalMethod = descriptor.value
    descriptor.value = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'\u6211\u662FFunc\u7684\u88C5\u9970\u5668\u903B\u8F91'</span>)
    <span class="hljs-keyword">return</span> originalMethod.apply(<span class="hljs-built_in">this</span>, <span class="hljs-built_in">arguments</span>)
  }
  <span class="hljs-keyword">return</span> descriptor
}
</code></pre>
<p>\u7B2C\u4E00\u4E2A\u53C2\u6570\u7684\u610F\u4E49\uFF0C\u524D\u6587\u5DF2\u7ECF\u89E3\u91CA\u8FC7\u3002\u7B2C\u4E8C\u4E2A\u53C2 \u6570name\uFF0C\u662F\u6211\u4EEC\u4FEE\u9970\u7684\u76EE\u6807\u5C5E\u6027\u5C5E\u6027\u540D\uFF0C\u4E5F\u6CA1\u5565\u597D\u8BB2\u7684\u3002\u5173\u952E\u5C31\u5728\u8FD9\u4E2A descriptor \u8EAB\u4E0A\uFF0C\u5B83\u4E5F\u662F\u6211\u4EEC\u4F7F\u7528\u9891\u7387\u6700\u9AD8\u7684\u4E00\u4E2A\u53C2\u6570\uFF0C\u5B83\u7684\u771F\u9762\u76EE\u5C31\u662F\u201C\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61\u201D\uFF08attributes object\uFF09\u3002\u8FD9\u4E2A\u540D\u5B57\u5927\u5BB6\u53EF\u80FD\u4E0D\u719F\u6089\uFF0C\u4F46<code>Object.defineProperty</code>\u65B9\u6CD5\u6211\u60F3\u5927\u5BB6\u591A\u5C11\u90FD\u7528\u8FC7\uFF0C\u5B83\u7684\u8C03\u7528\u65B9\u5F0F\u662F\u8FD9\u6837\u7684\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-built_in">Object</span>.defineProperty(obj, prop, descriptor)
</code></pre>
<p>\u6B64\u5904\u7684descriptor\u548C\u88C5\u9970\u5668\u51FD\u6570\u91CC\u7684 descriptor \u662F\u4E00\u4E2A\u4E1C\u897F\uFF0C\u5B83\u662F JavaScript
\u63D0\u4F9B\u7684\u4E00\u4E2A\u5185\u90E8\u6570\u636E\u7ED3\u6784\u3001\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4E13\u95E8\u7528\u6765\u63CF\u8FF0\u5BF9\u8C61\u7684\u5C5E\u6027\u3002\u5B83\u7531\u5404\u79CD\u5404\u6837\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26\u7EC4\u6210\uFF0C\u8FD9\u4E9B\u63CF\u8FF0\u7B26\u53C8\u5206\u4E3A\u6570\u636E\u63CF\u8FF0\u7B26\u548C\u5B58\u53D6\u63CF\u8FF0\u7B26\uFF1A</p>
<ul>
<li>\u6570\u636E\u63CF\u8FF0\u7B26\uFF1A\u5305\u62EC value\uFF08\u5B58\u653E\u5C5E\u6027\u503C\uFF0C\u9ED8\u8BA4\u4E3A\u9ED8\u8BA4\u4E3A undefined\uFF09\u3001writable\uFF08\u8868\u793A\u5C5E\u6027\u503C\u662F\u5426\u53EF\u6539\u53D8\uFF0C\u9ED8\u8BA4\u4E3Atrue\uFF09\u3001enumerable\uFF08\u8868\u793A\u5C5E\u6027\u662F\u5426\u53EF\u679A\u4E3E\uFF0C\u9ED8\u8BA4\u4E3A true\uFF09\u3001configurable\uFF08\u5C5E\u6027\u662F\u5426\u53EF\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u4E3Atrue\uFF09\u3002</li>
<li>\u5B58\u53D6\u63CF\u8FF0\u7B26\uFF1A\u5305\u62EC <code>get</code> \u65B9\u6CD5\uFF08\u8BBF\u95EE\u5C5E\u6027\u65F6\u8C03\u7528\u7684\u65B9\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A undefined\uFF09\uFF0C<code>set</code>\uFF08\u8BBE\u7F6E\u5C5E\u6027\u65F6\u8C03\u7528\u7684\u65B9\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A undefined \uFF09</li>
</ul>
<p>\u5F88\u660E\u663E\uFF0C\u62FF\u5230\u4E86 descriptor\uFF0C\u5C31\u76F8\u5F53\u4E8E\u62FF\u5230\u4E86\u76EE\u6807\u65B9\u6CD5\u7684\u63A7\u5236\u6743\u3002\u901A\u8FC7\u4FEE\u6539 descriptor\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5BF9\u76EE\u6807\u65B9\u6CD5<del>\u4E3A\u6240\u6B32\u4E3A</del>\u7684\u903B\u8F91\u8FDB\u884C\u62D3\u5C55\u4E86~</p>
<p>\u5728\u4E0A\u6587\u7684\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7 descriptor \u83B7\u53D6\u5230\u4E86\u539F\u51FD\u6570\u7684\u51FD\u6570\u4F53\uFF08originalMethod\uFF09\uFF0C\u628A\u539F\u51FD\u6570\u63A8\u8FDF\u5230\u4E86\u65B0\u903B\u8F91\uFF08console\uFF09\u7684\u540E\u9762\u53BB\u6267\u884C\u3002\u8FD9\u79CD\u505A\u6CD5\u548C\u6211\u4EEC\u4E0A\u4E00\u8282\u5728ES5\u4E2D\u5B9E\u73B0\u88C5\u9970\u5668\u6A21\u5F0F\u65F6\u505A\u7684\u4E8B\u60C5\u4E00\u72D7\u4E00\u6837\uFF0C\u6240\u4EE5\u8BF4\u88C5\u9970\u5668\u5C31\u662F\u8FD9\u4E48\u56DE\u4E8B\u513F\uFF0C\u6362\u6C64\u4E0D\u6362\u836F~</p>
<h2 data-id="heading-7">\u751F\u4EA7\u5B9E\u8DF5</h2>
<p>\u88C5\u9970\u5668\u5728\u524D\u7AEF\u4E16\u754C\u7684\u5E94\u7528\u5341\u5206\u5E7F\u6CDB\uFF0C\u5373\u4FBF\u662F\u5728 ES7 \u672A\u8BDE\u751F\u7684\u90A3\u4E9B\u4E2A\u86EE\u8352\u5E74\u4EE3\uFF0C\u4E5F\u6CA1\u80FD\u963B\u6321\u6211\u4EEC\u7528\u88C5\u9970\u5668\u5F00\u6302\u7684\u70ED\u60C5\u3002\u8981\u8BF4\u4F18\u79C0\u7684\u751F\u4EA7\u5B9E\u8DF5\uFF0C\u53EF\u4EE5\u8BF4\u662F\u4E24\u5929\u4E24\u591C\u4E5F\u8BF4\u4E0D\u5B8C\u3002\u4F46\u6709\u4E00\u4E9B\u5B9E\u8DF5\uFF0C\u6211\u76F8\u4FE1\u5927\u5BB6\u53EF\u80FD\u90FD\u7528\u8FC7\uFF0C\u6216\u8005\u8BF4\u81F3\u5C11\u89C1\u8FC7\u3001\u542C\u8BF4\u8FC7\uFF0C\u53EA\u662F\u5F53\u65F6\u5E76\u4E0D\u6E05\u695A\u8FD9\u4E2A\u662F\u88C5\u9970\u5668\u6A21\u5F0F\u3002\u6B64\u5904\u4E3A\u4E86\u5F3A\u5316\u5927\u5BB6\u8111\u888B\u91CC\u5DF2\u6709\u7684\u7ECF\u9A8C\u4E0E\u8BBE\u8BA1\u6A21\u5F0F\u77E5\u8BC6\u4E4B\u95F4\u7684\u5173\u8054\uFF0C\u66F4\u4E3A\u4E86\u8D81\u70ED\u6253\u94C1\u3001\u5C06\u88C5\u9970\u5668\u6A21\u5F0F\u5E38\u89C1\u7684\u7528\u6CD5\u7ED9\u5927\u5BB6\u52A0\u56FA\u4E00\u4E0B\uFF0C\u6211\u4EEC\u4E00\u8D77\u6765\u770B\u51E0\u4E2A\u4E0D\u9519\u7684\u751F\u4EA7\u5B9E\u8DF5\u6848\u4F8B\uFF1A</p>
<h3 data-id="heading-8">React\u4E2D\u7684\u88C5\u9970\u5668\uFF1AHOC</h3>
<blockquote>
<p>\u9AD8\u9636\u7EC4\u4EF6\u5C31\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4E14\u8BE5\u51FD\u6570\u63A5\u53D7\u4E00\u4E2A\u7EC4\u4EF6\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u7EC4\u4EF6\u3002</p>
</blockquote>
<p>HOC (Higher Order Component) \u5373\u9AD8\u9636\u7EC4\u4EF6\u3002\u5B83\u662F\u88C5\u9970\u5668\u6A21\u5F0F\u5728 React \u4E2D\u7684\u5B9E\u8DF5\uFF0C\u540C\u65F6\u4E5F\u662F React \u5E94\u7528\u4E2D\u975E\u5E38\u91CD\u8981\u7684\u4E00\u90E8\u5206\u3002\u901A\u8FC7\u7F16\u5199\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5145\u5206\u590D\u7528\u73B0\u6709\u903B\u8F91\uFF0C\u63D0\u9AD8\u7F16\u7801\u6548\u7387\u548C\u4EE3\u7801\u7684\u5065\u58EE\u6027\u3002</p>
<p>\u6211\u4EEC\u73B0\u5728\u7F16\u5199\u4E00\u4E2A\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u5B83\u7684\u4F5C\u7528\u662F\u628A\u4F20\u5165\u7684\u7EC4\u4EF6<strong>\u4E22\u8FDB\u4E00\u4E2A\u6709\u7EA2\u8272\u8FB9\u6846\u7684\u5BB9\u5668\u91CC</strong>\uFF08\u62D3\u5C55\u5176\u6837\u5F0F\uFF09\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">import</span> React, { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>

<span class="hljs-keyword">const</span> BorderHoc = <span class="hljs-function"><span class="hljs-params">WrappedComponent</span> =&gt;</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Component</span> </span>{
  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">border:</span> '<span class="hljs-attr">solid</span> <span class="hljs-attr">1px</span> <span class="hljs-attr">red</span>' }}&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">WrappedComponent</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  }
}
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> borderHoc
</code></pre>
<p>\u7528\u5B83\u6765\u88C5\u9970\u76EE\u6807\u7EC4\u4EF6</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">import</span> React, { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>
<span class="hljs-keyword">import</span> BorderHoc <span class="hljs-keyword">from</span> <span class="hljs-string">'./BorderHoc'</span>

<span class="hljs-comment">// \u7528BorderHoc\u88C5\u9970\u76EE\u6807\u7EC4\u4EF6</span>
@BorderHoc 
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">TargetComponent</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-comment">// \u76EE\u6807\u7EC4\u4EF6\u5177\u4F53\u7684\u4E1A\u52A1\u903B\u8F91</span>
  }
}

<span class="hljs-comment">// export\u51FA\u53BB\u7684\u5176\u5B9E\u662F\u4E00\u4E2A\u88AB\u5305\u88F9\u540E\u7684\u7EC4\u4EF6</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> TargetComponent
</code></pre>
<p>\u53EF\u4EE5\u770B\u51FA\uFF0C\u9AD8\u9636\u7EC4\u4EF6\u4ECE\u5B9E\u73B0\u5C42\u9762\u6765\u770B\u5176\u5B9E\u5C31\u662F\u4E0A\u6587\u6211\u4EEC\u63D0\u5230\u7684\u7C7B\u88C5\u9970\u5668\u3002\u5728\u9AD8\u9636\u7EC4\u4EF6\u7684\u8F85\u52A9\u4E0B\uFF0C\u6211\u4EEC\u4E0D\u5FC5\u56E0\u4E3A\u4E00\u4E2A\u5C0F\u5C0F\u7684\u62D3\u5C55\u800C\u5927\u8D39\u5468\u6298\u5730\u7F16\u5199\u65B0\u7EC4\u4EF6\u6216\u8005\u628A\u4E00\u4E2A\u65B0\u903B\u8F91\u91CD\u5199 N \u591A\u6B21\uFF0C\u53EA\u9700\u8981\u8F7B\u8F7B @ \u4E00\u4E0B\u88C5\u9970\u5668\u5373\u53EF\u3002</p>
<h3 data-id="heading-9">\u4F7F\u7528\u88C5\u9970\u5668\u6539\u5199 Redux connect</h3>
<p>Redux \u662F\u70ED\u95E8\u7684\u72B6\u6001\u7BA1\u7406\u5DE5\u5177\u3002\u5728 React \u4E2D\uFF0C\u5F53\u6211\u4EEC\u60F3\u8981\u5F15\u5165 Redux \u65F6\uFF0C\u901A\u5E38\u9700\u8981\u8C03\u7528 connect \u65B9\u6CD5\u6765\u628A\u72B6\u6001\u548C\u7EC4\u4EF6\u7ED1\u5728\u4E00\u8D77\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">import</span> React, { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>
<span class="hljs-keyword">import</span> { connect } <span class="hljs-keyword">from</span> <span class="hljs-string">'react-redux'</span>
<span class="hljs-keyword">import</span> { bindActionCreators } <span class="hljs-keyword">from</span> <span class="hljs-string">'redux'</span>
<span class="hljs-keyword">import</span> action <span class="hljs-keyword">from</span> <span class="hljs-string">'./action.js'</span>

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">App</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Component</span> </span>{
  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-comment">// App\u7684\u4E1A\u52A1\u903B\u8F91</span>
  }
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mapStateToProps</span>(<span class="hljs-params">state</span>) </span>{
  <span class="hljs-comment">// \u5047\u8BBEApp\u7684\u72B6\u6001\u5BF9\u5E94\u72B6\u6001\u6811\u4E0A\u7684app\u8282\u70B9</span>
  <span class="hljs-keyword">return</span> state.app
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mapDispatchToProps</span>(<span class="hljs-params">dispatch</span>) </span>{
  <span class="hljs-comment">// \u8FD9\u6BB5\u770B\u4E0D\u61C2\u4E5F\u6CA1\u5173\u7CFB\uFF0C\u4E0B\u9762\u4F1A\u6709\u89E3\u91CA\u3002\u91CD\u70B9\u7406\u89E3connect\u7684\u8C03\u7528\u5373\u53EF</span>
  <span class="hljs-keyword">return</span> bindActionCreators(action, dispatch)
}

<span class="hljs-comment">// \u628AApp\u7EC4\u4EF6\u4E0ERedux\u7ED1\u5728\u4E00\u8D77</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> connect(mapStateToProps, mapDispatchToProps)(App)
</code></pre>
<p>\u8FD9\u91CC\u7ED9\u6CA1\u7528\u8FC7 redux \u7684\u540C\u5B66\u89E3\u91CA\u4E00\u4E0B connect \u7684\u4E24\u4E2A\u5165\u53C2\uFF1A<code>mapStateToProps</code> \u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u53EF\u4EE5\u5EFA\u7ACB\u7EC4\u4EF6\u548C\u72B6\u6001\u4E4B\u95F4\u7684\u6620\u5C04\u5173\u7CFB\uFF1B<code>mapDispatchToProps</code>\u4E5F\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u7528\u4E8E\u5EFA\u7ACB\u7EC4\u4EF6\u548C<code>store.dispatch</code>\u7684\u5173\u7CFB\uFF0C\u4F7F\u7EC4\u4EF6\u5177\u5907\u901A\u8FC7 dispatch \u6765\u6D3E\u53D1\u72B6\u6001\u7684\u80FD\u529B\u3002</p>
<p>\u603B\u800C\u8A00\u4E4B\uFF0C\u6211\u4EEC\u8C03\u7528 connect \u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A<strong>\u5177\u6709\u88C5\u9970\u4F5C\u7528\u7684\u51FD\u6570</strong>\uFF0C\u8FD9\u4E2A\u51FD\u6570\u53EF\u4EE5\u63A5\u6536\u4E00 \u4E2AReact \u7EC4\u4EF6\u4F5C\u4E3A\u53C2\u6570\uFF0C\u4F7F\u8FD9\u4E2A\u76EE\u6807\u7EC4\u4EF6\u548C Redux \u7ED3\u5408\u3001\u5177\u5907 Redux \u63D0\u4F9B\u7684\u6570\u636E\u548C\u80FD\u529B\u3002\u65E2\u7136\u6709\u88C5\u9970\u4F5C\u7528\uFF0C\u65E2\u7136\u662F<strong>\u80FD\u529B\u7684\u62D3\u5C55</strong>\uFF0C\u90A3\u4E48\u5C31\u4E00\u5B9A\u80FD\u7528\u88C5\u9970\u5668\u6765\u6539\u5199\uFF1A<br>
\u628A connect \u62BD\u51FA\u6765\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">import</span> { connect } <span class="hljs-keyword">from</span> <span class="hljs-string">'react-redux'</span>
<span class="hljs-keyword">import</span> { bindActionCreators } <span class="hljs-keyword">from</span> <span class="hljs-string">'redux'</span>
<span class="hljs-keyword">import</span> action <span class="hljs-keyword">from</span> <span class="hljs-string">'./action.js'</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mapStateToProps</span>(<span class="hljs-params">state</span>) </span>{
  <span class="hljs-keyword">return</span> state.app
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mapDispatchToProps</span>(<span class="hljs-params">dispatch</span>) </span>{
  <span class="hljs-keyword">return</span> bindActionCreators(action, dispatch)
}

<span class="hljs-comment">// \u5C06connect\u8C03\u7528\u540E\u7684\u7ED3\u679C\u4F5C\u4E3A\u4E00\u4E2A\u88C5\u9970\u5668\u5BFC\u51FA</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> connect(mapStateToProps, mapDispatchToProps)
</code></pre>
<p>\u5728\u7EC4\u4EF6\u6587\u4EF6\u91CC\u5F15\u5165connect\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">import</span> React, { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>
<span class="hljs-keyword">import</span> connect <span class="hljs-keyword">from</span> <span class="hljs-string">'./connect.js'</span>   

@connect
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">App</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Component</span> </span>{
  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-comment">// App\u7684\u4E1A\u52A1\u903B\u8F91</span>
  }
}
</code></pre>
<p>\u8FD9\u6837\u4E00\u6765\uFF0C\u6211\u4EEC\u7684\u4EE3\u7801\u7ED3\u6784\u662F\u4E0D\u662F\u6E05\u6670\u4E86\u5F88\u591A\uFF1F\u53EF\u7EF4\u62A4\u6027\u3001\u53EF\u8BFB\u6027\u90FD\u4E0A\u5347\u4E86\u4E00\u4E2Alevel\uFF0C\u4EE4\u4EBA\u8D4F\u5FC3\u60A6\u76EE~</p>
<pre><code class="hljs language-!" lang="!">Tips\uFF1A \u56DE\u5FC6\u4E00\u4E0B\u4E0A\u9762\u4E00\u4E2A\u5C0F\u8282\u7684\u8BB2\u89E3\uFF0C\u5BF9\u53F7\u5165\u5EA7\u770B\u4E00\u770B\uFF0Cconnect\u88C5\u9970\u5668\u4ECE\u5B9E\u73B0\u548C\u8C03\u7528\u65B9\u5F0F\u4E0A\u6765\u770B\uFF0C\u662F\u4E0D\u662F\u540C\u65F6\u4E5F\u662F\u4E00\u4E2A\u9AD8\u9636\u7EC4\u4EF6\u5462\uFF1F
</code></pre>
<h3 data-id="heading-10">\u4F18\u8D28\u7684\u6E90\u7801\u9605\u8BFB\u6750\u6599\u2014\u2014core-decorators</h3>
<p>\u524D\u9762\u90FD\u5728\u6559\u5927\u5BB6\u600E\u4E48\u5199\u88C5\u9970\u5668\u6A21\u5F0F\uFF0C\u8FD9\u91CC\u6765\u804A\u804A\u600E\u4E48<strong>\u7528\u597D</strong>\u88C5\u9970\u5668\u6A21\u5F0F\u3002</p>
<p>\u88C5\u9970\u5668\u6A21\u5F0F\u7684\u4F18\u52BF\u5728\u4E8E\u5176\u6781\u5F3A\u7684\u7075\u6D3B\u6027\u548C\u53EF\u590D\u7528\u6027\u2014\u2014\u5B83\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u800C\u4E14\u5F80\u5F80\u4E0D\u4F9D\u8D56\u4E8E\u4EFB\u4F55\u903B\u8F91\u800C\u5B58\u5728\u3002\u8FD9\u4E00\u70B9\u63D0\u9192\u4E86\u6211\u4EEC\uFF0C\u5F53\u6211\u4EEC\u9700\u8981\u7528\u5230\u67D0\u4E2A\u53CD\u590D\u51FA\u73B0\u7684\u62D3\u5C55\u903B\u8F91\u65F6\uFF0C\u6BD4\u8D77\u81EA\u5DF1\u95F7\u5934\u641E\uFF0C\u4E0D\u5982\u53BB\u770B\u4E00\u770B\u56E2\u961F\uFF08\u793E\u533A\uFF09\u91CC\u6709\u6CA1\u6709\u73B0\u6210\u7684\u5B9E\u73B0\uFF0C\u5982\u679C\u6709\uFF0C\u90A3\u4E48\u8D2F\u5F7B\u201C\u62FF\u6765\u4E3B\u4E49\u201D\uFF0C\u76F4\u63A5@\u5C31\u53EF\u4EE5\u4E86\u3002\u6240\u4EE5\u8BF4\u88C5\u9970\u5668\u6A21\u5F0F\u662F\u4E2A\u597D\u540C\u5FD7\uFF0C\u5B83\u53EF\u4EE5\u5E2E\u6211\u4EEC\u7701\u6389\u5927\u91CF\u590D\u5236\u7C98\u8D34\u7684\u65F6\u95F4\u3002</p>
<p>\u8FD9\u91CC\u5C31\u8981\u7ED9\u5927\u5BB6\u63A8\u8350\u4E00\u4E2A\u975E\u5E38\u8D5E\u7684\u88C5\u9970\u6A21\u5F0F\u5E93 \u2014\u2014 <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fjayphelps%2Fcore-decorators" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/jayphelps/core-decorators" ref="nofollow noopener noreferrer">core-decorators</a>\u3002core-decorators \u5E2E\u6211\u4EEC\u5B9E\u73B0\u597D\u4E86\u4E00\u4E9B\u4F7F\u7528\u9891\u7387\u8F83\u9AD8\u7684\u88C5\u9970\u5668\uFF0C\u6BD4\u5982<code>@readonly</code>(\u4F7F\u76EE\u6807\u5C5E\u6027\u53EA\u8BFB)\u3001<code>@deprecate</code>(\u5728\u63A7\u5236\u53F0\u8F93\u51FA\u8B66\u544A\uFF0C\u63D0\u793A\u7528\u6237\u67D0\u4E2A\u6307\u5B9A\u7684\u65B9\u6CD5\u5DF2\u88AB\u5E9F\u9664)\u7B49\u7B49\u7B49\u7B49\u3002\u8FD9\u91CC\u5F3A\u70C8\u5EFA\u8BAE\u5927\u5BB6\u628A core-decorators \u4F5C\u4E3A\u81EA\u5DF1\u7684\u6E90\u7801\u9605\u8BFB\u6750\u6599\uFF0C\u4F60\u80FD\u6536\u83B7\u7684\u6216\u8BB8\u6BD4\u4F60\u60F3\u8C61\u4E2D\u66F4\u591A~</p>
<p>\uFF08\u9605\u8BFB\u8FC7\u7A0B\u4E2D\u6709\u4EFB\u4F55\u60F3\u6CD5\u6216\u7591\u95EE\uFF0C\u6216\u8005\u5355\u7EAF\u5E0C\u671B\u548C\u7B14\u8005\u4EA4\u4E2A\u670B\u53CB\u5565\u7684\uFF0C\u6B22\u8FCE\u5927\u5BB6\u6DFB\u52A0\u6211\u7684\u5FAE\u4FE1xyalinode\u4E0E\u6211\u4EA4\u6D41\u54C8~\uFF09</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
