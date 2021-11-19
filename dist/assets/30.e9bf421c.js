var s={name:"30\u3001\u624B\u5199 Babel\uFF1A core\u7BC7",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>core \u5305\u7684\u529F\u80FD\u662F\u4E32\u8054\u6574\u4E2A\u7F16\u8BD1\u6D41\u7A0B\uFF0C\u5E76\u4E14\u5B9E\u73B0\u63D2\u4EF6\u548C preset\u3002</p>
<p>\u8FD9\u8282\u6211\u4EEC\u6765\u5B9E\u73B0\u4E00\u4E0B core \u5305\u3002</p>
<h2 data-id="heading-0">\u601D\u8DEF\u5206\u6790</h2>
<p>\u524D\u9762\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E86 parser\u3001traverse\u3001generator \u5305\uFF0C\u4F7F\u7528\u65B9\u5F0F\u662F\u8FD9\u6837\u7684\uFF1A</p>
<p>\u5206\u522B\u8C03\u7528 parse\u3001traverse\u3001generate\uFF0C\u6765\u5B8C\u6210\u6E90\u7801\u7684 parse\u3001AST \u7684\u904D\u5386\u548C\u4FEE\u6539\uFF0C\u4EE5\u53CA\u76EE\u6807\u4EE3\u7801\u548C sourcemap \u7684\u6253\u5370\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> sourceCode = <span class="hljs-string">\`
const c = 1;
const d = 2;
const e = 4;

function add(a, b) {
    const tmp = 1;
    return a + b;
}

add(c, d);
\`</span>;

<span class="hljs-keyword">const</span> ast = parser.parse(sourceCode, {
    <span class="hljs-attr">plugins</span>: [<span class="hljs-string">'literal'</span>, <span class="hljs-string">'guangKeyword'</span>]
});

traverse(ast, {
    <span class="hljs-function"><span class="hljs-title">Program</span>(<span class="hljs-params">path</span>)</span> {
       <span class="hljs-built_in">Object</span>.entries(path.scope.bindings).forEach(<span class="hljs-function">(<span class="hljs-params">[id, binding]</span>) =&gt;</span> {
        <span class="hljs-keyword">if</span> (!binding.referenced) {
            binding.path.remove();
        }
       });
    }
});

<span class="hljs-keyword">const</span> { code, map} = generate(ast, sourceCode, <span class="hljs-string">'foo.js'</span>);
<span class="hljs-built_in">console</span>.log(code);
<span class="hljs-built_in">console</span>.log(map);
</code></pre>
<p>\u800C\u5982\u679C\u7528\u4E86 core \u5305\uFF0C\u4F7F\u7528\u65B9\u5F0F\u662F\u8FD9\u6837\u7684\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">plugin1</span>(<span class="hljs-params">api, options</span>) </span>{
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">visitor</span>: {
            <span class="hljs-function"><span class="hljs-title">Program</span>(<span class="hljs-params">path</span>)</span> {
               <span class="hljs-built_in">Object</span>.entries(path.scope.bindings).forEach(<span class="hljs-function">(<span class="hljs-params">[id, binding]</span>) =&gt;</span> {
                    <span class="hljs-keyword">if</span> (!binding.referenced) {
                        binding.path.remove();
                    }
                });
            }
    }
}
<span class="hljs-keyword">const</span> { code, map } = transformSync(sourceCode, {
    <span class="hljs-attr">parserOpts</span>: {
        <span class="hljs-attr">plugins</span>: [<span class="hljs-string">'literal'</span>]
    },
    <span class="hljs-attr">fileName</span>: <span class="hljs-string">'foo.js'</span>,
    <span class="hljs-attr">plugins</span>: [
        [plugin1, {}]
    ],
    <span class="hljs-attr">presets</span>: []
});
</code></pre>
<p>\u53EF\u4EE5\u770B\u5230\uFF0CtransformSync \u5C01\u88C5\u4E86 parse\u3001traverse\u3001generate \u7684\u903B\u8F91\uFF0C\u5E76\u4E14\u8FD8\u5B9E\u73B0\u4E86\u63D2\u4EF6\u548C preset \u673A\u5236\u3002</p>
<p>\u96C6\u6210 parse\u3001traverse\u3001generate \u6BD4\u8F83\u7B80\u5355\uFF0C\u4F46\u63D2\u4EF6\u548C preset \u662F\u600E\u4E48\u5B9E\u73B0\u7684\u5462\uFF1F</p>
<p>\u63D2\u4EF6\u662F\u4E00\u4E2A\u51FD\u6570\u8FD4\u56DE\u5305\u542B visitor \u7684\u5BF9\u8C61\uFF0C\u6211\u4EEC\u53EA\u8981\u628A\u5404\u79CD\u901A\u8FC7 options \u4F20\u5165\u7684\u63D2\u4EF6\uFF0C\u5728 transformSync \u91CC\u9762\u5408\u5E76\uFF0C\u4E4B\u540E\u628A\u5408\u5E76\u540E\u7684 visitors \u4F20\u5165  traverse \u65B9\u6CD5\u5C31\u53EF\u4EE5\u4E86\u3002</p>
<p>\u800C preset \u662F\u63D2\u4EF6\u7684\u96C6\u5408\uFF0C\u8C03\u7528\u51FD\u6570\u8FD4\u56DE\u63D2\u4EF6\u6570\u7EC4\uFF0C\u4E4B\u540E\u518D\u8C03\u7528\u63D2\u4EF6\u8FD4\u56DE visitor \u7B49\uFF0C\u7136\u540E visitor\uFF0C\u8C03\u7528 traverse\u3002</p>
<p>\u6B64\u5916\u8981\u6CE8\u610F\u7684\u662F babel \u63D2\u4EF6\u7684\u987A\u5E8F\u662F\u5148 plugin \u540E preset\uFF0Cplugin \u4ECE\u524D\u5F80\u540E\u3001preset \u4ECE\u540E\u5F80\u524D\u3002</p>
<h2 data-id="heading-1">\u4EE3\u7801\u5B9E\u73B0</h2>
<p>\u9996\u5148\u6211\u4EEC\u96C6\u6210 parse\u3001traverse\u3001generate 3\u6B65\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transformSync</span>(<span class="hljs-params">code, options</span>) </span>{
    <span class="hljs-keyword">const</span> ast = parser.parse(code, options.parserOpts);

    <span class="hljs-keyword">const</span> visitors = {};

    traverse(ast, visitors);
    <span class="hljs-keyword">return</span> generate(ast, code, options.fileName);
}
</code></pre>
<p>\u8FD9\u91CC\u7684 visitor \u5C31\u662F\u63D2\u4EF6\u91CC\u9762 visitor \u7684\u5408\u5E76\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E0B\u63D2\u4EF6\u673A\u5236\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transformSync</span>(<span class="hljs-params">code, options</span>) </span>{
    <span class="hljs-keyword">const</span> ast = parser.parse(code, options.parserOpts);

    <span class="hljs-keyword">const</span> pluginApi = {
        template
    }
    <span class="hljs-keyword">const</span> visitors = {};
    options.plugins &amp;&amp; options.plugins.forEach(<span class="hljs-function">(<span class="hljs-params">[plugin, options]</span>) =&gt;</span> {
        <span class="hljs-keyword">const</span> res = plugin(pluginApi, options);
        <span class="hljs-built_in">Object</span>.assign(visitors, res.visitor);
    });

    traverse(ast, visitors);
    <span class="hljs-keyword">return</span> generate(ast, code, options.fileName);
}
</code></pre>
<p>\u5176\u5B9E\u6BD4\u8F83\u7B80\u5355\uFF0C\u5C31\u662F\u8C03\u7528 options \u91CC\u9762\u7684 plugin\uFF0C\u4F20\u5165 options\u3001api\uFF0C\u7136\u540E\u628A\u8FD4\u56DE\u7684 visitor \u5408\u5E76\uFF0C\u4E4B\u540E\u4F20\u5165 traverse\u3002</p>
<p>\u800C preset \u662F\u63D2\u4EF6\u7684\u96C6\u5408\uFF0C\u6240\u4EE5\u8981\u591A\u8C03\u7528\u4E00\u5C42\uFF0C\u5E76\u4E14\u56E0\u4E3A\u987A\u5E8F\u662F\u4ECE\u53F3\u5F80\u5DE6\uFF0C\u6240\u4EE5\u8981 reverse \u4E00\u4E0B\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript">options.presets &amp;&amp; options.presets.reverse().forEach(<span class="hljs-function">(<span class="hljs-params">[preset, options]</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> plugins = preset(pluginApi, options);
    plugins.forEach(<span class="hljs-function">(<span class="hljs-params">[plugin, options]</span>)=&gt;</span> {
        <span class="hljs-keyword">const</span> res = plugin(pluginApi, options);
        <span class="hljs-built_in">Object</span>.assign(visitors, res.visitor);
    })
})
</code></pre>
<p>\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transformSync</span>(<span class="hljs-params">code, options</span>) </span>{
    <span class="hljs-keyword">const</span> ast = parser.parse(code, options.parserOpts);

    <span class="hljs-keyword">const</span> pluginApi = {
        template
    }
    <span class="hljs-keyword">const</span> visitors = {};
    options.plugins &amp;&amp; options.plugins.forEach(<span class="hljs-function">(<span class="hljs-params">[plugin, options]</span>) =&gt;</span> {
        <span class="hljs-keyword">const</span> res = plugin(pluginApi, options);
        <span class="hljs-built_in">Object</span>.assign(visitors, res.visitor);
    });
    options.presets &amp;&amp; options.presets.reverse().forEach(<span class="hljs-function">(<span class="hljs-params">[preset, options]</span>) =&gt;</span> {
        <span class="hljs-keyword">const</span> plugins = preset(pluginApi, options);
        plugins.forEach(<span class="hljs-function">(<span class="hljs-params">[plugin, options]</span>)=&gt;</span> {
            <span class="hljs-keyword">const</span> res = plugin(pluginApi, options);
            <span class="hljs-built_in">Object</span>.assign(visitors, res.visitor);
        })
    })

    traverse(ast, visitors);
    <span class="hljs-keyword">return</span> generate(ast, code, options.fileName);
}
</code></pre>
<h2 data-id="heading-2">\u603B\u7ED3</h2>
<p>core \u5305\u96C6\u6210\u4E86 parser\u3001traverse\u3001generator \u7B49\u5305\uFF0C\u5E76\u4E14\u5B9E\u73B0\u4E86 plugin\u3001preset \u673A\u5236\u3002</p>
<p>\u6211\u4EEC\u4F1A\u628A\u63D2\u4EF6\u8FD4\u56DE\u7684 visitor \u505A\u5408\u5E76\uFF0C\u7136\u540E\u4F5C\u4E3A visitor \u8C03\u7528 traverse\u3002</p>
<p>\u63D2\u4EF6\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F20\u5165\u53EF\u7528\u7684 api \u4EE5\u53CA\u8C03\u7528\u65F6\u4F20\u5165\u7684 options\uFF0C\u8FD4\u56DE visitor \u7B49\uFF0C\u800C preset \u662F\u63D2\u4EF6\u7684\u96C6\u5408\uFF0C\u8981\u8C03\u7528 preset \u4E4B\u540E\u62FF\u5230\u63D2\u4EF6\u96C6\u5408\uFF0C\u4E4B\u540E\u518D\u8C03\u7528\u5177\u4F53\u7684\u63D2\u4EF6\uFF0C\u6700\u540E\u628A\u6240\u6709 visitor \u505A\u5408\u5E76\u3002</p>
<p>babel \u662F\u5FAE\u5185\u6838\u67B6\u6784\uFF0C\u5C31\u662F\u56E0\u4E3A\u6838\u5FC3\u53EA\u5B9E\u73B0\u4E86\u7F16\u8BD1\u6D41\u7A0B\uFF0C\u5177\u4F53\u7684\u8F6C\u6362\u529F\u80FD\u90FD\u662F\u901A\u8FC7\u63D2\u4EF6\u6765\u5B9E\u73B0\u7684\uFF0C\u800C preset \u5219\u662F\u4E3A\u4E86\u7B80\u5316\u7528\u6237\u4F7F\u7528 babel \u7684\u6210\u672C\u800C\u5F15\u5165\u7684\u4E00\u79CD\u673A\u5236\uFF0C\u662F\u63D2\u4EF6\u7684\u96C6\u5408\uFF0C\u8BA9\u7528\u6237\u4E0D\u9700\u8981\u76F4\u63A5\u914D\u7F6E\u5177\u4F53\u7684\u63D2\u4EF6\uFF0C\u9009\u62E9\u4E0D\u540C\u7684 preset \u5373\u53EF\u3002</p>
<p>\uFF08\u4EE3\u7801\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FQuarkGluonPlasma%2Fbabel-plugin-exercize" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/QuarkGluonPlasma/babel-plugin-exercize" ref="nofollow noopener noreferrer">\u8FD9\u91CC</a>\uFF0C\u5EFA\u8BAE git clone \u4E0B\u6765\u901A\u8FC7 node \u8DD1\u4E00\u4E0B\uFF09</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
