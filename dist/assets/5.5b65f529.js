var s={name:"\u521B\u5EFA\u578B\uFF1A\u5355\u4F8B\u6A21\u5F0F\u2014\u2014Vuex\u7684\u6570\u636E\u7BA1\u7406\u54F2\u5B66",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p><strong>\u4FDD\u8BC1\u4E00\u4E2A\u7C7B\u4EC5\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E2A\u8BBF\u95EE\u5B83\u7684\u5168\u5C40\u8BBF\u95EE\u70B9</strong>\uFF0C\u8FD9\u6837\u7684\u6A21\u5F0F\u5C31\u53EB\u505A\u5355\u4F8B\u6A21\u5F0F\u3002</p>
<p>\u5355\u4F8B\u6A21\u5F0F\u662F\u8BBE\u8BA1\u6A21\u5F0F\u4E2D\u76F8\u5BF9\u8F83\u4E3A\u5BB9\u6613\u7406\u89E3\u3001\u5BB9\u6613\u4E0A\u624B\u7684\u4E00\u79CD\u6A21\u5F0F\uFF0C\u540C\u65F6\u56E0\u4E3A\u5176\u5177\u6709\u5E7F\u6CDB\u7684\u5E94\u7528\u573A\u666F\uFF0C\u4E5F\u662F<strong>\u9762\u8BD5\u9898\u91CC\u7684\u5E38\u5BA2</strong>\u3002\u56E0\u6B64\u5355\u4F8B\u6A21\u5F0F\u8FD9\u5757\u6211\u4EEC\u9664\u4E86\u8BB2\u89E3\u5355\u4F8B\u6A21\u5F0F\u7684\u539F\u7406\u53CA\u5176\u5728 Vuex \u4E2D\u7684\u5E94\u7528\u5B9E\u8DF5(\u672C\u8282)\uFF0C\u8FD8\u4F1A\u9644\u4E0A\u4E24\u9053\u9762\u8BD5\u771F\u9898\u4F9B\u5927\u5BB6\u7EC3\u624B(\u4E0B\u8282)\u3002</p>
<h2 data-id="heading-0">\u5355\u4F8B\u6A21\u5F0F\u7684\u5B9E\u73B0\u601D\u8DEF</h2>
<p>\u73B0\u5728\u6211\u4EEC\u5148\u4E0D\u8003\u8651\u5355\u4F8B\u6A21\u5F0F\u7684\u5E94\u7528\u573A\u666F\uFF0C\u5355\u770B\u5B83\u7684\u5B9E\u73B0\uFF0C\u601D\u8003\u8FD9\u6837\u4E00\u4E2A\u95EE\u9898\uFF1A\u5982\u4F55\u624D\u80FD\u4FDD\u8BC1\u4E00\u4E2A\u7C7B\u4EC5\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF1F<br>
\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u5F53\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A\u7C7B\uFF08\u672C\u8D28\u662F\u6784\u9020\u51FD\u6570\uFF09\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7new\u5173\u952E\u5B57\u8C03\u7528\u6784\u9020\u51FD\u6570\u8FDB\u800C\u751F\u6210\u4EFB\u610F\u591A\u7684\u5B9E\u4F8B\u5BF9\u8C61\u3002\u50CF\u8FD9\u6837\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">SingleDog</span> </span>{
    <span class="hljs-function"><span class="hljs-title">show</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'\u6211\u662F\u4E00\u4E2A\u5355\u4F8B\u5BF9\u8C61'</span>)
    }
}

<span class="hljs-keyword">const</span> s1 = <span class="hljs-keyword">new</span> SingleDog()
<span class="hljs-keyword">const</span> s2 = <span class="hljs-keyword">new</span> SingleDog()

<span class="hljs-comment">// false</span>
s1 === s2
</code></pre>
<p>\u697C\u4E0A\u6211\u4EEC\u5148 new \u4E86\u4E00\u4E2A s1\uFF0C\u53C8 new \u4E86\u4E00\u4E2A s2\uFF0C\u5F88\u660E\u663E s1 \u548C s2 \u4E4B\u95F4\u6CA1\u6709\u4EFB\u4F55\u74DC\u845B\uFF0C\u4E24\u8005\u662F\u76F8\u4E92\u72EC\u7ACB\u7684\u5BF9\u8C61\uFF0C\u5404\u5360\u4E00\u5757\u5185\u5B58\u7A7A\u95F4\u3002\u800C\u5355\u4F8B\u6A21\u5F0F\u60F3\u8981\u505A\u5230\u7684\u662F\uFF0C<strong>\u4E0D\u7BA1\u6211\u4EEC\u5C1D\u8BD5\u53BB\u521B\u5EFA\u591A\u5C11\u6B21\uFF0C\u5B83\u90FD\u53EA\u7ED9\u4F60\u8FD4\u56DE\u7B2C\u4E00\u6B21\u6240\u521B\u5EFA\u7684\u90A3\u552F\u4E00\u7684\u4E00\u4E2A\u5B9E\u4F8B</strong>\u3002</p>
<p>\u8981\u505A\u5230\u8FD9\u4E00\u70B9\uFF0C\u5C31\u9700\u8981\u6784\u9020\u51FD\u6570<strong>\u5177\u5907\u5224\u65AD\u81EA\u5DF1\u662F\u5426\u5DF2\u7ECF\u521B\u5EFA\u8FC7\u4E00\u4E2A\u5B9E\u4F8B</strong>\u7684\u80FD\u529B\u3002\u6211\u4EEC\u73B0\u5728\u628A\u8FD9\u6BB5\u5224\u65AD\u903B\u8F91\u5199\u6210\u4E00\u4E2A\u9759\u6001\u65B9\u6CD5(\u5176\u5B9E\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5199\u5165\u6784\u9020\u51FD\u6570\u7684\u51FD\u6570\u4F53\u91CC\uFF09\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">SingleDog</span> </span>{
    <span class="hljs-function"><span class="hljs-title">show</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'\u6211\u662F\u4E00\u4E2A\u5355\u4F8B\u5BF9\u8C61'</span>)
    }
    <span class="hljs-keyword">static</span> <span class="hljs-function"><span class="hljs-title">getInstance</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-comment">// \u5224\u65AD\u662F\u5426\u5DF2\u7ECFnew\u8FC71\u4E2A\u5B9E\u4F8B</span>
        <span class="hljs-keyword">if</span> (!SingleDog.instance) {
            <span class="hljs-comment">// \u82E5\u8FD9\u4E2A\u552F\u4E00\u7684\u5B9E\u4F8B\u4E0D\u5B58\u5728\uFF0C\u90A3\u4E48\u5148\u521B\u5EFA\u5B83</span>
            SingleDog.instance = <span class="hljs-keyword">new</span> SingleDog()
        }
        <span class="hljs-comment">// \u5982\u679C\u8FD9\u4E2A\u552F\u4E00\u7684\u5B9E\u4F8B\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE</span>
        <span class="hljs-keyword">return</span> SingleDog.instance
    }
}

<span class="hljs-keyword">const</span> s1 = SingleDog.getInstance()
<span class="hljs-keyword">const</span> s2 = SingleDog.getInstance()

<span class="hljs-comment">// true</span>
s1 === s2
</code></pre>
<p>\u9664\u4E86\u697C\u4E0A\u8FD9\u79CD\u5B9E\u73B0\u65B9\u5F0F\u4E4B\u5916\uFF0CgetInstance\u7684\u903B\u8F91\u8FD8\u53EF\u4EE5\u7528<strong>\u95ED\u5305</strong>\u6765\u5B9E\u73B0\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript">SingleDog.getInstance = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-comment">// \u5B9A\u4E49\u81EA\u7531\u53D8\u91CFinstance\uFF0C\u6A21\u62DF\u79C1\u6709\u53D8\u91CF</span>
    <span class="hljs-keyword">let</span> instance = <span class="hljs-literal">null</span>
    <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-comment">// \u5224\u65AD\u81EA\u7531\u53D8\u91CF\u662F\u5426\u4E3Anull</span>
        <span class="hljs-keyword">if</span>(!instance) {
            <span class="hljs-comment">// \u5982\u679C\u4E3Anull\u5219new\u51FA\u552F\u4E00\u5B9E\u4F8B</span>
            instance = <span class="hljs-keyword">new</span> SingleDog()
        }
        <span class="hljs-keyword">return</span> instance
    }
})()
</code></pre>
<p>\u53EF\u4EE5\u770B\u51FA\uFF0C\u5728getInstance\u65B9\u6CD5\u7684\u5224\u65AD\u548C\u62E6\u622A\u4E0B\uFF0C\u6211\u4EEC\u4E0D\u7BA1\u8C03\u7528\u591A\u5C11\u6B21\uFF0CSingleDog\u90FD\u53EA\u4F1A\u7ED9\u6211\u4EEC\u8FD4\u56DE\u4E00\u4E2A\u5B9E\u4F8B\uFF0Cs1\u548Cs2\u73B0\u5728\u90FD\u6307\u5411\u8FD9\u4E2A\u552F\u4E00\u7684\u5B9E\u4F8B\u3002</p>
<h2 data-id="heading-1">\u751F\u4EA7\u5B9E\u8DF5\uFF1AVuex\u4E2D\u7684\u5355\u4F8B\u6A21\u5F0F</h2>
<p>\u8FD1\u5E74\u6765\uFF0C\u57FA\u4E8E Flux \u67B6\u6784\u7684\u72B6\u6001\u7BA1\u7406\u5DE5\u5177\u5C42\u51FA\u4E0D\u7A77\uFF0C\u5176\u4E2D\u5E94\u7528\u6700\u5E7F\u6CDB\u7684\u8981\u6570 Redux \u548C Vuex\u3002\u65E0\u8BBA\u662F Redux \u548C Vuex\uFF0C\u5B83\u4EEC\u90FD\u5B9E\u73B0\u4E86\u4E00\u4E2A\u5168\u5C40\u7684 Store \u7528\u4E8E\u5B58\u50A8\u5E94\u7528\u7684\u6240\u6709\u72B6\u6001\u3002\u8FD9\u4E2A Store \u7684\u5B9E\u73B0\uFF0C\u6B63\u662F\u5355\u4F8B\u6A21\u5F0F\u7684\u5178\u578B\u5E94\u7528\u3002\u8FD9\u91CC\u6211\u4EEC\u4EE5 Vuex \u4E3A\u4F8B\uFF0C\u7814\u7A76\u4E00\u4E0B\u5355\u4F8B\u6A21\u5F0F\u662F\u600E\u4E48\u53D1\u5149\u53D1\u70ED\u7684\uFF1A</p>
<h3 data-id="heading-2">\u7406\u89E3 Vuex \u4E2D\u7684 Store</h3>
<blockquote>
<p>Vuex \u4F7F\u7528\u5355\u4E00\u72B6\u6001\u6811\uFF0C\u7528\u4E00\u4E2A\u5BF9\u8C61\u5C31\u5305\u542B\u4E86\u5168\u90E8\u7684\u5E94\u7528\u5C42\u7EA7\u72B6\u6001\u3002\u81F3\u6B64\u5B83\u4FBF\u4F5C\u4E3A\u4E00\u4E2A\u201C\u552F\u4E00\u6570\u636E\u6E90 (SSOT)\u201D\u800C\u5B58\u5728\u3002\u8FD9\u4E5F\u610F\u5473\u7740\uFF0C\u6BCF\u4E2A\u5E94\u7528\u5C06\u4EC5\u4EC5\u5305\u542B\u4E00\u4E2A store \u5B9E\u4F8B\u3002\u5355\u4E00\u72B6\u6001\u6811\u8BA9\u6211\u4EEC\u80FD\u591F\u76F4\u63A5\u5730\u5B9A\u4F4D\u4EFB\u4E00\u7279\u5B9A\u7684\u72B6\u6001\u7247\u6BB5\uFF0C\u5728\u8C03\u8BD5\u7684\u8FC7\u7A0B\u4E2D\u4E5F\u80FD\u8F7B\u6613\u5730\u53D6\u5F97\u6574\u4E2A\u5F53\u524D\u5E94\u7528\u72B6\u6001\u7684\u5FEB\u7167\u3002       \u2014\u2014Vuex\u5B98\u65B9\u6587\u6863</p>
</blockquote>
<p>\u5728Vue\u4E2D\uFF0C\u7EC4\u4EF6\u4E4B\u95F4\u662F\u72EC\u7ACB\u7684\uFF0C\u7EC4\u4EF6\u95F4\u901A\u4FE1\u6700\u5E38\u7528\u7684\u529E\u6CD5\u662F props\uFF08\u9650\u4E8E\u7236\u7EC4\u4EF6\u548C\u5B50\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1\uFF09\uFF0C\u7A0D\u5FAE\u590D\u6742\u4E00\u70B9\u7684\uFF08\u6BD4\u5982\u5144\u5F1F\u7EC4\u4EF6\u95F4\u7684\u901A\u4FE1\uFF09\u6211\u4EEC\u901A\u8FC7\u81EA\u5DF1\u5B9E\u73B0\u7B80\u5355\u7684\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570\u4E5F\u80FD\u89E3\u51B3\u6389\u3002</p>
<p>\u4F46\u5F53\u7EC4\u4EF6\u975E\u5E38\u591A\u3001\u7EC4\u4EF6\u95F4\u5173\u7CFB\u590D\u6742\u3001\u4E14\u5D4C\u5957\u5C42\u7EA7\u5F88\u6DF1\u7684\u65F6\u5019\uFF0C\u8FD9\u79CD\u539F\u59CB\u7684\u901A\u4FE1\u65B9\u5F0F\u4F1A\u4F7F\u6211\u4EEC\u7684\u903B\u8F91\u53D8\u5F97\u590D\u6742\u96BE\u4EE5\u7EF4\u62A4\u3002\u8FD9\u65F6\u6700\u597D\u7684\u505A\u6CD5\u662F\u5C06\u5171\u4EAB\u7684\u6570\u636E\u62BD\u51FA\u6765\u3001\u653E\u5728\u5168\u5C40\uFF0C\u4F9B\u7EC4\u4EF6\u4EEC\u6309\u7167\u4E00\u5B9A\u7684\u7684\u89C4\u5219\u53BB\u5B58\u53D6\u6570\u636E\uFF0C\u4FDD\u8BC1\u72B6\u6001\u4EE5\u4E00\u79CD\u53EF\u9884\u6D4B\u7684\u65B9\u5F0F\u53D1\u751F\u53D8\u5316\u3002\u4E8E\u662F\u4FBF\u6709\u4E86 Vuex\uFF0C\u8FD9\u4E2A\u7528\u6765\u5B58\u653E\u5171\u4EAB\u6570\u636E\u7684\u552F\u4E00\u6570\u636E\u6E90\uFF0C\u5C31\u662F Store\u3002</p>
<p>\u5173\u4E8E Vuex \u7684\u7EC6\u8282\uFF0C\u5927\u5BB6\u53EF\u4EE5\u53C2\u8003<a href="https://link.juejin.cn?target=https%3A%2F%2Fvuex.vuejs.org%2Fzh%2F" target="_blank" rel="nofollow noopener noreferrer" title="https://vuex.vuejs.org/zh/" ref="nofollow noopener noreferrer">Vuex\u7684\u5B98\u65B9\u6587\u6863</a>\uFF0C\u6B64\u5904\u63D0\u53CA Vuex\uFF0C\u9664\u4E86\u4E3A\u4E86\u62D3\u5BBD\u5927\u5BB6\u7684\u77E5\u8BC6\u9762\uFF0C\u66F4\u91CD\u8981\u7684\u662F\u4E3A\u4E86\u8BF4\u660E\u5355\u4F8B\u6A21\u5F0F\u5728\u751F\u4EA7\u5B9E\u8DF5\u4E2D\u5E7F\u6CDB\u7684\u5E94\u7528\u548C\u4E0D\u53EF\u6216\u7F3A\u7684\u5730\u4F4D\u3002\u5982\u679C\u5BF9 Vuex \u6CA1\u6709\u5174\u8DA3\uFF0C\u90A3\u4E48\u5927\u5BB6\u53EA\u9700\u5173\u6CE8\u201C\u4E00\u4E2A Vue \u5B9E\u4F8B\u53EA\u80FD\u5BF9\u5E94\u4E00\u4E2A Store\u201D\u8FD9\u4E00\u70B9\u5373\u53EF\u3002</p>
<h3 data-id="heading-3">Vuex\u5982\u4F55\u786E\u4FDDStore\u7684\u552F\u4E00\u6027</h3>
<p>\u6211\u4EEC\u5148\u6765\u770B\u770B\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u5F15\u5165 Vuex\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-comment">// \u5B89\u88C5vuex\u63D2\u4EF6</span>
Vue.use(Vuex)

<span class="hljs-comment">// \u5C06store\u6CE8\u5165\u5230Vue\u5B9E\u4F8B\u4E2D</span>
<span class="hljs-keyword">new</span> Vue({
    <span class="hljs-attr">el</span>: <span class="hljs-string">'#app'</span>,
    store
})
</code></pre>
<p>\u901A\u8FC7\u8C03\u7528<code>Vue.use()</code>\u65B9\u6CD5\uFF0C\u6211\u4EEC\u5B89\u88C5\u4E86 Vuex \u63D2\u4EF6\u3002Vuex \u63D2\u4EF6\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5B83\u5728\u5185\u90E8\u5B9E\u73B0\u4E86\u4E00\u4E2A install \u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u5728\u63D2\u4EF6\u5B89\u88C5\u65F6\u88AB\u8C03\u7528\uFF0C\u4ECE\u800C\u628A Store \u6CE8\u5165\u5230Vue\u5B9E\u4F8B\u91CC\u53BB\u3002\u4E5F\u5C31\u662F\u8BF4\u6BCF install \u4E00\u6B21\uFF0C\u90FD\u4F1A\u5C1D\u8BD5\u7ED9 Vue \u5B9E\u4F8B\u6CE8\u5165\u4E00\u4E2A Store\u3002</p>
<p>\u5728 install \u65B9\u6CD5\u91CC\uFF0C\u6709\u4E00\u6BB5\u903B\u8F91\u548C\u6211\u4EEC\u697C\u4E0A\u7684 <code>getInstance</code> \u975E\u5E38\u76F8\u4F3C\u7684\u903B\u8F91\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">let</span> Vue <span class="hljs-comment">// \u8FD9\u4E2AVue\u7684\u4F5C\u7528\u548C\u697C\u4E0A\u7684instance\u4F5C\u7528\u4E00\u6837</span>
...

<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">install</span> (<span class="hljs-params">_Vue</span>) </span>{
  <span class="hljs-comment">// \u5224\u65AD\u4F20\u5165\u7684Vue\u5B9E\u4F8B\u5BF9\u8C61\u662F\u5426\u5DF2\u7ECF\u88ABinstall\u8FC7Vuex\u63D2\u4EF6\uFF08\u662F\u5426\u6709\u4E86\u552F\u4E00\u7684state\uFF09</span>
  <span class="hljs-keyword">if</span> (Vue &amp;&amp; _Vue === Vue) {
    <span class="hljs-keyword">if</span> ("production" !== <span class="hljs-string">'production'</span>) {
      <span class="hljs-built_in">console</span>.error(
        <span class="hljs-string">'[vuex] already installed. Vue.use(Vuex) should be called only once.'</span>
      )
    }
    <span class="hljs-keyword">return</span>
  }
  <span class="hljs-comment">// \u82E5\u6CA1\u6709\uFF0C\u5219\u4E3A\u8FD9\u4E2AVue\u5B9E\u4F8B\u5BF9\u8C61install\u4E00\u4E2A\u552F\u4E00\u7684Vuex</span>
  Vue = _Vue
  <span class="hljs-comment">// \u5C06Vuex\u7684\u521D\u59CB\u5316\u903B\u8F91\u5199\u8FDBVue\u7684\u94A9\u5B50\u51FD\u6570\u91CC</span>
  applyMixin(Vue)
}
</code></pre>
<p>\u697C\u4E0A\u4FBF\u662F Vuex \u6E90\u7801\u4E2D\u5355\u4F8B\u6A21\u5F0F\u7684\u5B9E\u73B0\u529E\u6CD5\u4E86\uFF0C\u5957\u8DEF\u53EF\u4EE5\u8BF4\u548C\u6211\u4EEC\u7684<code>getInstance</code>\u5982\u51FA\u4E00\u8F99\u3002\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u4E00\u4E2A Vue \u5B9E\u4F8B\uFF08\u5373\u4E00\u4E2A Vue \u5E94\u7528\uFF09\u53EA\u4F1A\u88AB install \u4E00\u6B21 Vuex \u63D2\u4EF6\uFF0C\u6240\u4EE5\u6BCF\u4E2A Vue \u5B9E\u4F8B\u53EA\u4F1A\u62E5\u6709\u4E00\u4E2A\u5168\u5C40\u7684 Store\u3002</p>
<h2 data-id="heading-4">\u5C0F\u7ED3</h2>
<p>\u8FD9\u91CC\u5927\u5BB6\u4E0D\u59A8\u5F00\u4E2A\u8111\u6D1E\uFF0C\u601D\u8003\u4E00\u4E0B\uFF1A\u5982\u679C\u6211\u5728 install \u91CC\u6CA1\u6709\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F\uFF0C\u4F1A\u5E26\u6765\u4EC0\u4E48\u6837\u7684\u9EBB\u70E6\uFF1F</p>
<p>\u6211\u4EEC\u901A\u8FC7\u4E0A\u9762\u7684\u6E90\u7801\u89E3\u6790\u53EF\u4EE5\u770B\u51FA\uFF0C\u6BCF\u6B21 install \u90FD\u4F1A\u4E3AVue\u5B9E\u4F8B\u521D\u59CB\u5316\u4E00\u4E2A Store\u3002\u5047\u5982 install \u91CC\u6CA1\u6709\u5355\u4F8B\u6A21\u5F0F\u7684\u903B\u8F91\uFF0C\u90A3\u6211\u4EEC\u5982\u679C\u5728\u4E00\u4E2A\u5E94\u7528\u91CC\u4E0D\u5C0F\u5FC3\u591A\u6B21\u5B89\u88C5\u4E86\u63D2\u4EF6\uFF1A</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-comment">// \u5728\u4E3B\u6587\u4EF6\u91CC\u5B89\u88C5Vuex</span>
Vue.use(Vuex)

...(\u4E2D\u95F4\u6DFB\u52A0/\u4FEE\u6539\u4E86\u4E00\u4E9Bstore\u7684\u6570\u636E)

<span class="hljs-comment">// \u5728\u540E\u7EED\u7684\u903B\u8F91\u91CC\u4E0D\u5C0F\u5FC3\u53C8\u5B89\u88C5\u4E86\u4E00\u6B21</span>
Vue.use(Vuex)
</code></pre>
<p>\u5931\u53BB\u4E86\u5355\u4F8B\u5224\u65AD\u80FD\u529B\u7684 install \u65B9\u6CD5\uFF0C\u4F1A\u4E3A\u5F53\u524D\u7684Vue\u5B9E\u4F8B\u91CD\u65B0\u6CE8\u5165\u4E00\u4E2A\u65B0\u7684 Store\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F60\u4E2D\u95F4\u7684\u90A3\u4E9B\u6570\u636E\u64CD\u4F5C\u5168\u90FD\u6CA1\u4E86\uFF0C\u4E00\u5207\u5F52 0\u3002\u56E0\u6B64\uFF0C\u5355\u4F8B\u6A21\u5F0F\u5728\u6B64\u5904\u662F\u975E\u5E38\u5FC5\u8981\u7684\u3002</p>
<p>\u9664\u4E86\u8BF4\u5728 Vuex \u4E2D\u5927\u5C55\u8EAB\u624B\uFF0C\u6211\u4EEC\u5728 Redux\u3001jQuery \u7B49\u8BB8\u591A\u4F18\u79C0\u7684\u524D\u7AEF\u5E93\u91CC\u4E5F\u90FD\u80FD\u770B\u5230\u5355\u4F8B\u6A21\u5F0F\u7684\u8EAB\u5F71\u3002\u91CD\u8981\u7684\u5355\u4F8B\u6A21\u5F0F\u81EA\u7136\u5728\u9762\u8BD5\u4E2D\u6709\u4E86\u91CD\u8981\u7684\u5730\u4F4D\uFF0C\u4E0B\u4E00\u8282\uFF0C\u6211\u4EEC\u5C31\u6765\u770B\u4E24\u9053\u9762\u8BD5\u771F\u9898~</p>
<p>\uFF08\u9605\u8BFB\u8FC7\u7A0B\u4E2D\u6709\u4EFB\u4F55\u60F3\u6CD5\u6216\u7591\u95EE\uFF0C\u6216\u8005\u5355\u7EAF\u5E0C\u671B\u548C\u7B14\u8005\u4EA4\u4E2A\u670B\u53CB\u5565\u7684\uFF0C\u6B22\u8FCE\u5927\u5BB6\u6DFB\u52A0\u6211\u7684\u5FAE\u4FE1xyalinode\u4E0E\u6211\u4EA4\u6D41\u54C8~\uFF09</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
