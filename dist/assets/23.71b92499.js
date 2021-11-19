var o={name:"React \u5E38\u8003\u8FDB\u9636\u77E5\u8BC6\u70B9",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h1 data-id="heading-0">React \u5E38\u8003\u8FDB\u9636\u77E5\u8BC6\u70B9</h1>
<p>\u8FD9\u4E00\u7AE0\u8282\u6211\u4EEC\u5C06\u6765\u5B66\u4E60 React \u7684\u4E00\u4E9B\u7ECF\u5E38\u8003\u5230\u7684\u8FDB\u9636\u77E5\u8BC6\u70B9\uFF0C\u5E76\u4E14\u8FD9\u7AE0\u8282\u8FD8\u9700\u8981\u914D\u5408\u7B2C\u5341\u4E5D\u7AE0\u9605\u8BFB\uFF0C\u5176\u4E2D\u7684\u5185\u5BB9\u7ECF\u5E38\u4F1A\u8003\u5230\u3002</p>
<h2 data-id="heading-1">HOC \u662F\u4EC0\u4E48\uFF1F\u76F8\u6BD4 mixins \u6709\u4EC0\u4E48\u4F18\u70B9\uFF1F</h2>
<p>\u5F88\u591A\u4EBA\u770B\u5230\u9AD8\u9636\u7EC4\u4EF6\uFF08HOC\uFF09\u8FD9\u4E2A\u6982\u5FF5\u5C31\u88AB\u5413\u5230\u4E86\uFF0C\u8BA4\u4E3A\u8FD9\u4E1C\u897F\u5F88\u96BE\uFF0C\u5176\u5B9E\u8FD9\u4E1C\u897F\u6982\u5FF5\u771F\u7684\u5F88\u7B80\u5355\uFF0C\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E2A\u4F8B\u5B50\u3002</p>
<pre><code lang="js" class=""><span><span>function</span> <span>add</span>(<span>a, b</span>) </span>{
    <span>return</span> a + b
}
</code></pre><p>\u73B0\u5728\u5982\u679C\u6211\u60F3\u7ED9\u8FD9\u4E2A <code>add</code> \u51FD\u6570\u6DFB\u52A0\u4E00\u4E2A\u8F93\u51FA\u7ED3\u679C\u7684\u529F\u80FD\uFF0C\u90A3\u4E48\u4F60\u53EF\u80FD\u4F1A\u8003\u8651\u6211\u76F4\u63A5\u4F7F\u7528 <code>console.log</code> \u4E0D\u5C31\u5B9E\u73B0\u4E86\u4E48\u3002\u8BF4\u7684\u6CA1\u9519\uFF0C\u4F46\u662F\u5982\u679C\u6211\u4EEC\u60F3\u505A\u7684\u66F4\u52A0\u4F18\u96C5\u5E76\u4E14\u5BB9\u6613\u590D\u7528\u548C\u6269\u5C55\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u53BB\u505A\uFF1A</p>
<pre><code lang="js" class=""><span><span>function</span> <span>withLog</span> (<span>fn</span>) </span>{
    <span><span>function</span> <span>wrapper</span>(<span>a, b</span>) </span>{
        <span>const</span> result = fn(a, b)
        <span>console</span>.log(result)
        <span>return</span> result
    }
    <span>return</span> wrapper
}
<span>const</span> withLogAdd = withLog(add)
withLogAdd(<span>1</span>, <span>2</span>)
</code></pre><p>\u5176\u5B9E\u8FD9\u4E2A\u505A\u6CD5\u5728\u51FD\u6570\u5F0F\u7F16\u7A0B\u91CC\u79F0\u4E4B\u4E3A\u9AD8\u9636\u51FD\u6570\uFF0C\u5927\u5BB6\u90FD\u77E5\u9053 React \u7684\u601D\u60F3\u4E2D\u662F\u5B58\u5728\u51FD\u6570\u5F0F\u7F16\u7A0B\u7684\uFF0C\u9AD8\u9636\u7EC4\u4EF6\u548C\u9AD8\u9636\u51FD\u6570\u5C31\u662F\u540C\u4E00\u4E2A\u4E1C\u897F\u3002\u6211\u4EEC\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F20\u5165\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u7136\u540E\u5728\u51FD\u6570\u5185\u90E8\u518D\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\u53BB\u6269\u5C55\u4F20\u5165\u7684\u7EC4\u4EF6\uFF0C\u6700\u540E\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u7EC4\u4EF6\uFF0C\u8FD9\u5C31\u662F\u9AD8\u9636\u7EC4\u4EF6\u7684\u6982\u5FF5\uFF0C\u4F5C\u7528\u5C31\u662F\u4E3A\u4E86\u66F4\u597D\u7684\u590D\u7528\u4EE3\u7801\u3002</p>
<p>\u5176\u5B9E HOC \u548C Vue \u4E2D\u7684 mixins \u4F5C\u7528\u662F\u4E00\u81F4\u7684\uFF0C\u5E76\u4E14\u5728\u65E9\u671F React \u4E5F\u662F\u4F7F\u7528 mixins \u7684\u65B9\u5F0F\u3002\u4F46\u662F\u5728\u4F7F\u7528 class \u7684\u65B9\u5F0F\u521B\u5EFA\u7EC4\u4EF6\u4EE5\u540E\uFF0Cmixins \u7684\u65B9\u5F0F\u5C31\u4E0D\u80FD\u4F7F\u7528\u4E86\uFF0C\u5E76\u4E14\u5176\u5B9E mixins \u4E5F\u662F\u5B58\u5728\u4E00\u4E9B\u95EE\u9898\u7684\uFF0C\u6BD4\u5982\uFF1A</p>
<ul>
<li>\u9690\u542B\u4E86\u4E00\u4E9B\u4F9D\u8D56\uFF0C\u6BD4\u5982\u6211\u5728\u7EC4\u4EF6\u4E2D\u5199\u4E86\u67D0\u4E2A <code>state</code> \u5E76\u4E14\u5728 <code>mixin</code> \u4E2D\u4F7F\u7528\u4E86\uFF0C\u5C31\u8FD9\u5B58\u5728\u4E86\u4E00\u4E2A\u4F9D\u8D56\u5173\u7CFB\u3002\u4E07\u4E00\u4E0B\u6B21\u522B\u4EBA\u8981\u79FB\u9664\u5B83\uFF0C\u5C31\u5F97\u53BB <code>mixin</code> \u4E2D\u67E5\u627E\u4F9D\u8D56</li>
<li>\u591A\u4E2A <code>mixin</code> \u4E2D\u53EF\u80FD\u5B58\u5728\u76F8\u540C\u547D\u540D\u7684\u51FD\u6570\uFF0C\u540C\u65F6\u4EE3\u7801\u7EC4\u4EF6\u4E2D\u4E5F\u4E0D\u80FD\u51FA\u73B0\u76F8\u540C\u547D\u540D\u7684\u51FD\u6570\uFF0C\u5426\u5219\u5C31\u662F\u91CD\u5199\u4E86\uFF0C\u5176\u5B9E\u6211\u4E00\u76F4\u89C9\u5F97\u547D\u540D\u771F\u7684\u662F\u4E00\u4EF6\u9EBB\u70E6\u4E8B\u3002\u3002</li>
<li>\u96EA\u7403\u6548\u5E94\uFF0C\u867D\u7136\u6211\u4E00\u4E2A\u7EC4\u4EF6\u8FD8\u662F\u4F7F\u7528\u7740\u540C\u4E00\u4E2A <code>mixin</code>\uFF0C\u4F46\u662F\u4E00\u4E2A <code>mixin</code> \u4F1A\u88AB\u591A\u4E2A\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u53EF\u80FD\u4F1A\u5B58\u5728\u9700\u6C42\u4F7F\u5F97 <code>mixin</code> \u4FEE\u6539\u539F\u672C\u7684\u51FD\u6570\u6216\u8005\u65B0\u589E\u66F4\u591A\u7684\u51FD\u6570\uFF0C\u8FD9\u6837\u53EF\u80FD\u5C31\u4F1A\u4EA7\u751F\u4E00\u4E2A\u7EF4\u62A4\u6210\u672C</li>
</ul>
<p>HOC \u89E3\u51B3\u4E86\u8FD9\u4E9B\u95EE\u9898\uFF0C\u5E76\u4E14\u5B83\u4EEC\u8FBE\u6210\u7684\u6548\u679C\u4E5F\u662F\u4E00\u81F4\u7684\uFF0C\u540C\u65F6\u4E5F\u66F4\u52A0\u7684\u653F\u6CBB\u6B63\u786E\uFF08\u6BD5\u7ADF\u66F4\u52A0\u51FD\u6570\u5F0F\u4E86\uFF09\u3002</p>
<h2 data-id="heading-2">\u4E8B\u4EF6\u673A\u5236</h2>
<p>React \u5176\u5B9E\u81EA\u5DF1\u5B9E\u73B0\u4E86\u4E00\u5957\u4E8B\u4EF6\u673A\u5236\uFF0C\u9996\u5148\u6211\u4EEC\u8003\u8651\u4E00\u4E0B\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p>
<pre><code lang="jsx" class=""><span>const</span> Test = <span>(<span>{ list, handleClick }</span>) =&gt;</span> ({
    list.map(<span>(<span>item, index</span>) =&gt;</span> (
        <span><span>&lt;<span>span</span> <span>onClick</span>=<span>{handleClick}</span> <span>key</span>=<span>{index}</span>&gt;</span>{index}<span>&lt;/<span>span</span>&gt;</span></span>
    ))
})
</code></pre><p>\u4EE5\u4E0A\u7C7B\u4F3C\u4EE3\u7801\u60F3\u5FC5\u5927\u5BB6\u7ECF\u5E38\u4F1A\u5199\u5230\uFF0C\u4F46\u662F\u4F60\u662F\u5426\u8003\u8651\u8FC7\u70B9\u51FB\u4E8B\u4EF6\u662F\u5426\u7ED1\u5B9A\u5728\u4E86\u6BCF\u4E00\u4E2A\u6807\u7B7E\u4E0A\uFF1F\u4E8B\u5B9E\u5F53\u7136\u4E0D\u662F\uFF0CJSX \u4E0A\u5199\u7684\u4E8B\u4EF6\u5E76\u6CA1\u6709\u7ED1\u5B9A\u5728\u5BF9\u5E94\u7684\u771F\u5B9E DOM \u4E0A\uFF0C\u800C\u662F\u901A\u8FC7\u4E8B\u4EF6\u4EE3\u7406\u7684\u65B9\u5F0F\uFF0C\u5C06\u6240\u6709\u7684\u4E8B\u4EF6\u90FD\u7EDF\u4E00\u7ED1\u5B9A\u5728\u4E86 <code>document</code> \u4E0A\u3002\u8FD9\u6837\u7684\u65B9\u5F0F\u4E0D\u4EC5\u51CF\u5C11\u4E86\u5185\u5B58\u6D88\u8017\uFF0C\u8FD8\u80FD\u5728\u7EC4\u4EF6\u6302\u8F7D\u9500\u6BC1\u65F6\u7EDF\u4E00\u8BA2\u9605\u548C\u79FB\u9664\u4E8B\u4EF6\u3002</p>
<p>\u53E6\u5916\u5192\u6CE1\u5230 <code>document</code> \u4E0A\u7684\u4E8B\u4EF6\u4E5F\u4E0D\u662F\u539F\u751F\u6D4F\u89C8\u5668\u4E8B\u4EF6\uFF0C\u800C\u662F React \u81EA\u5DF1\u5B9E\u73B0\u7684\u5408\u6210\u4E8B\u4EF6\uFF08SyntheticEvent\uFF09\u3002\u56E0\u6B64\u6211\u4EEC\u5982\u679C\u4E0D\u60F3\u8981\u4E8B\u4EF6\u5192\u6CE1\u7684\u8BDD\uFF0C\u8C03\u7528 <code>event.stopPropagation</code> \u662F\u65E0\u6548\u7684\uFF0C\u800C\u5E94\u8BE5\u8C03\u7528 <code>event.preventDefault</code>\u3002</p>
<p>\u90A3\u4E48\u5B9E\u73B0\u5408\u6210\u4E8B\u4EF6\u7684\u76EE\u7684\u662F\u4EC0\u4E48\u5462\uFF1F\u603B\u7684\u6765\u8BF4\u5728\u6211\u770B\u6765\u597D\u5904\u6709\u4E24\u70B9\uFF0C\u5206\u522B\u662F\uFF1A</p>
<ul>
<li>\u5408\u6210\u4E8B\u4EF6\u9996\u5148\u62B9\u5E73\u4E86\u6D4F\u89C8\u5668\u4E4B\u95F4\u7684\u517C\u5BB9\u95EE\u9898\uFF0C\u53E6\u5916\u8FD9\u662F\u4E00\u4E2A\u8DE8\u6D4F\u89C8\u5668\u539F\u751F\u4E8B\u4EF6\u5305\u88C5\u5668\uFF0C\u8D4B\u4E88\u4E86\u8DE8\u6D4F\u89C8\u5668\u5F00\u53D1\u7684\u80FD\u529B</li>
<li>\u5BF9\u4E8E\u539F\u751F\u6D4F\u89C8\u5668\u4E8B\u4EF6\u6765\u8BF4\uFF0C\u6D4F\u89C8\u5668\u4F1A\u7ED9\u76D1\u542C\u5668\u521B\u5EFA\u4E00\u4E2A\u4E8B\u4EF6\u5BF9\u8C61\u3002\u5982\u679C\u4F60\u6709\u5F88\u591A\u7684\u4E8B\u4EF6\u76D1\u542C\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u5206\u914D\u5F88\u591A\u7684\u4E8B\u4EF6\u5BF9\u8C61\uFF0C\u9020\u6210\u9AD8\u989D\u7684\u5185\u5B58\u5206\u914D\u95EE\u9898\u3002\u4F46\u662F\u5BF9\u4E8E\u5408\u6210\u4E8B\u4EF6\u6765\u8BF4\uFF0C\u6709\u4E00\u4E2A\u4E8B\u4EF6\u6C60\u4E13\u95E8\u6765\u7BA1\u7406\u5B83\u4EEC\u7684\u521B\u5EFA\u548C\u9500\u6BC1\uFF0C\u5F53\u4E8B\u4EF6\u9700\u8981\u88AB\u4F7F\u7528\u65F6\uFF0C\u5C31\u4F1A\u4ECE\u6C60\u5B50\u4E2D\u590D\u7528\u5BF9\u8C61\uFF0C\u4E8B\u4EF6\u56DE\u8C03\u7ED3\u675F\u540E\uFF0C\u5C31\u4F1A\u9500\u6BC1\u4E8B\u4EF6\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027\uFF0C\u4ECE\u800C\u4FBF\u4E8E\u4E0B\u6B21\u590D\u7528\u4E8B\u4EF6\u5BF9\u8C61\u3002</li>
</ul>
<h2 data-id="heading-3">\u66F4\u65B0\u5185\u5BB9</h2>
<ul>
<li><a target="_blank" href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FKieSun%2FDream%2Fissues%2F15" title="https://github.com/KieSun/Dream/issues/15" ref="nofollow noopener noreferrer">React \u8FDB\u9636\u7CFB\u5217\uFF1AHooks \u8BE5\u600E\u4E48\u7528</a></li>
</ul>
<h2 data-id="heading-4">\u5C0F\u7ED3</h2>
<p>\u4F60\u53EF\u80FD\u4F1A\u60CA\u8BB6\u4E8E\u8FD9\u4E00\u7AE0\u8282\u7684\u5185\u5BB9\u5E76\u4E0D\u591A\u7684\u60C5\u51B5\uFF0C\u5176\u5B9E\u4F60\u5982\u679C\u5C06\u4E24\u7AE0 React \u4EE5\u53CA\u7B2C\u5341\u4E5D\u7AE0\u7684\u5185\u5BB9\u5168\u90E8\u5B66\u4E60\u5B8C\u540E\uFF0C\u57FA\u672C\u4E0A React \u7684\u5927\u90E8\u5206\u9762\u8BD5\u95EE\u9898\u90FD\u53EF\u4EE5\u89E3\u51B3\u3002</p>
<p>\u5F53\u7136\u4F60\u53EF\u80FD\u4F1A\u89C9\u5F97\u770B\u7684\u8FD8\u4E0D\u8FC7\u763E\uFF0C\u8FD9\u4E0D\u9700\u8981\u62C5\u5FC3\u3002\u6211\u5DF2\u7ECF\u51B3\u5B9A\u5199\u4E00\u4E2A\u514D\u8D39\u4E13\u680F\u300CReact \u8FDB\u9636\u300D\uFF0C\u4E13\u95E8\u8BB2\u89E3\u6709\u96BE\u5EA6\u7684\u95EE\u9898\u3002\u6BD4\u5982\u7EC4\u4EF6\u7684\u8BBE\u8BA1\u6A21\u5F0F\u3001\u65B0\u7279\u6027\u3001\u90E8\u5206\u6E90\u7801\u89E3\u6790\u7B49\u7B49\u5185\u5BB9\u3002\u5F53\u7136\u8FD9\u4E9B\u5185\u5BB9\u90FD\u662F\u9700\u8981\u597D\u597D\u6253\u78E8\u7684\uFF0C\u6240\u4EE5\u66F4\u65B0\u7684\u4E0D\u4F1A\u5F88\u5FEB\uFF0C\u6709\u5174\u8DA3\u7684\u53EF\u4EE5\u6301\u7EED\u5173\u6CE8\uFF0C\u90FD\u4F1A\u66F4\u65B0\u94FE\u63A5\u5728\u8FD9\u4E00\u7AE0\u8282\u4E2D\u3002</p>
`};export{o as default};