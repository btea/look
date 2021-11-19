var s={name:"\u521B\u5EFA\u578B\uFF1A\u5355\u4F8B\u6A21\u5F0F\u2014\u2014\u9762\u8BD5\u771F\u9898\u624B\u628A\u624B\u6559\u5B66",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h2 data-id="heading-0">\u5B9E\u73B0\u4E00\u4E2A Storage</h2>
<h3 data-id="heading-1">\u63CF\u8FF0</h3>
<blockquote>
<p>\u5B9E\u73B0Storage\uFF0C\u4F7F\u5F97\u8BE5\u5BF9\u8C61\u4E3A\u5355\u4F8B\uFF0C\u57FA\u4E8E localStorage \u8FDB\u884C\u5C01\u88C5\u3002\u5B9E\u73B0\u65B9\u6CD5 setItem(key,value) \u548C getItem(key)\u3002</p>
</blockquote>
<h3 data-id="heading-2">\u601D\u8DEF</h3>
<p>\u62FF\u5230\u5355\u4F8B\u6A21\u5F0F\u76F8\u5173\u7684\u9762\u8BD5\u9898\uFF0C\u5927\u5BB6\u9996\u5148\u8981\u505A\u7684\u662F\u56DE\u5FC6\u6211\u4EEC\u4E0A\u4E2A\u5C0F\u8282\u7684\u201C\u57FA\u672C\u601D\u8DEF\u201D\u90E8\u5206\u2014\u2014\u81F3\u5C11\u8981\u8BB0\u8D77\u6765<code>getInstance</code>\u65B9\u6CD5\u548C<code>instance</code>\u8FD9\u4E2A\u53D8\u91CF\u662F\u5E72\u5565\u7684\u3002</p>
<p>\u5177\u4F53\u5B9E\u73B0\u4E0A\uFF0C\u628A\u5224\u65AD\u903B\u8F91\u5199\u5165\u9759\u6001\u65B9\u6CD5\u6216\u8005\u6784\u9020\u51FD\u6570\u91CC\u90FD\u6CA1\u5173\u7CFB\uFF0C\u6700\u597D\u80FD\u628A\u95ED\u5305\u7684\u7248\u672C\u4E5F\u5199\u51FA\u6765\uFF0C\u591A\u591A\u76CA\u5584\u3002</p>
<p>\u603B\u4E4B\u6709\u4E86\u4E0A\u8282\u7684\u57FA\u7840\uFF0C\u8FD9\u4E2A\u9898\u7B80\u76F4\u662F\u9ED8\u5199\uFF01</p>
<blockquote>
<p>\u5B9E\u73B0\uFF1A\u9759\u6001\u65B9\u6CD5\u7248</p>
</blockquote>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-comment">// \u5B9A\u4E49Storage</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Storage</span> </span>{
    <span class="hljs-keyword">static</span> <span class="hljs-function"><span class="hljs-title">getInstance</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-comment">// \u5224\u65AD\u662F\u5426\u5DF2\u7ECFnew\u8FC71\u4E2A\u5B9E\u4F8B</span>
        <span class="hljs-keyword">if</span> (!Storage.instance) {
            <span class="hljs-comment">// \u82E5\u8FD9\u4E2A\u552F\u4E00\u7684\u5B9E\u4F8B\u4E0D\u5B58\u5728\uFF0C\u90A3\u4E48\u5148\u521B\u5EFA\u5B83</span>
            Storage.instance = <span class="hljs-keyword">new</span> Storage()
        }
        <span class="hljs-comment">// \u5982\u679C\u8FD9\u4E2A\u552F\u4E00\u7684\u5B9E\u4F8B\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE</span>
        <span class="hljs-keyword">return</span> Storage.instance
    }
    getItem (key) {
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">localStorage</span>.getItem(key)
    }
    setItem (key, value) {
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">localStorage</span>.setItem(key, value)
    }
}

<span class="hljs-keyword">const</span> storage1 = Storage.getInstance()
<span class="hljs-keyword">const</span> storage2 = Storage.getInstance()

storage1.setItem(<span class="hljs-string">'name'</span>, <span class="hljs-string">'\u674E\u96F7'</span>)
<span class="hljs-comment">// \u674E\u96F7</span>
storage1.getItem(<span class="hljs-string">'name'</span>)
<span class="hljs-comment">// \u4E5F\u662F\u674E\u96F7</span>
storage2.getItem(<span class="hljs-string">'name'</span>)

<span class="hljs-comment">// \u8FD4\u56DEtrue</span>
storage1 === storage2
</code></pre>
<blockquote>
<p>\u5B9E\u73B0\uFF1A \u95ED\u5305\u7248</p>
</blockquote>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-comment">// \u5148\u5B9E\u73B0\u4E00\u4E2A\u57FA\u7840\u7684StorageBase\u7C7B\uFF0C\u628AgetItem\u548CsetItem\u65B9\u6CD5\u653E\u5728\u5B83\u7684\u539F\u578B\u94FE\u4E0A</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">StorageBase</span> (<span class="hljs-params"></span>) </span>{}
StorageBase.prototype.getItem = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">key</span>)</span>{
    <span class="hljs-keyword">return</span> <span class="hljs-built_in">localStorage</span>.getItem(key)
}
StorageBase.prototype.setItem = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">key, value</span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-built_in">localStorage</span>.setItem(key, value)
}

<span class="hljs-comment">// \u4EE5\u95ED\u5305\u7684\u5F62\u5F0F\u521B\u5EFA\u4E00\u4E2A\u5F15\u7528\u81EA\u7531\u53D8\u91CF\u7684\u6784\u9020\u51FD\u6570</span>
<span class="hljs-keyword">const</span> Storage = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">let</span> instance = <span class="hljs-literal">null</span>
    <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
        <span class="hljs-comment">// \u5224\u65AD\u81EA\u7531\u53D8\u91CF\u662F\u5426\u4E3Anull</span>
        <span class="hljs-keyword">if</span>(!instance) {
            <span class="hljs-comment">// \u5982\u679C\u4E3Anull\u5219new\u51FA\u552F\u4E00\u5B9E\u4F8B</span>
            instance = <span class="hljs-keyword">new</span> StorageBase()
        }
        <span class="hljs-keyword">return</span> instance
    }
})()

<span class="hljs-comment">// \u8FD9\u91CC\u5176\u5B9E\u4E0D\u7528 new Storage \u7684\u5F62\u5F0F\u8C03\u7528\uFF0C\u76F4\u63A5 Storage() \u4E5F\u4F1A\u6709\u4E00\u6837\u7684\u6548\u679C </span>
<span class="hljs-keyword">const</span> storage1 = <span class="hljs-keyword">new</span> Storage()
<span class="hljs-keyword">const</span> storage2 = <span class="hljs-keyword">new</span> Storage()

storage1.setItem(<span class="hljs-string">'name'</span>, <span class="hljs-string">'\u674E\u96F7'</span>)
<span class="hljs-comment">// \u674E\u96F7</span>
storage1.getItem(<span class="hljs-string">'name'</span>)
<span class="hljs-comment">// \u4E5F\u662F\u674E\u96F7</span>
storage2.getItem(<span class="hljs-string">'name'</span>)

<span class="hljs-comment">// \u8FD4\u56DEtrue</span>
storage1 === storage2
</code></pre>
<h2 data-id="heading-3">\u5B9E\u73B0\u4E00\u4E2A\u5168\u5C40\u7684\u6A21\u6001\u6846</h2>
<h3 data-id="heading-4">\u63CF\u8FF0</h3>
<blockquote>
<p>\u5B9E\u73B0\u4E00\u4E2A\u5168\u5C40\u552F\u4E00\u7684Modal\u5F39\u6846</p>
</blockquote>
<h3 data-id="heading-5">\u601D\u8DEF</h3>
<p>\u8FD9\u9053\u9898\u6BD4\u8F83\u7ECF\u5178\uFF0C\u57FA\u672C\u4E0A\u6240\u6709\u8BB2\u5355\u4F8B\u6A21\u5F0F\u7684\u6587\u7AE0\u90FD\u4F1A\u4EE5\u6B64\u4E3A\u4F8B\uFF0C\u540C\u65F6\u5B83\u4E5F\u662F\u65E9\u671F\u5355\u4F8B\u6A21\u5F0F\u5728\u524D\u7AEF\u9886\u57DF\u7684\u6700\u96C6\u4E2D\u4F53\u73B0\u3002</p>
<p>\u4E07\u53D8\u4E0D\u79BB\u5176\u8E2A\uFF0C\u8BB0\u4F4F<code>getInstance</code>\u65B9\u6CD5\u3001\u8BB0\u4F4F<code>instance</code>\u53D8\u91CF\u3001\u8BB0\u4F4F\u95ED\u5305\u548C\u9759\u6001\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u9898\u9664\u4E86\u8981\u591A\u5199\u70B9 HTML \u548C CSS \u4E4B\u5916\uFF0C\u5BF9\u5927\u5BB6\u6765\u8BF4\u5B8C\u5168\u4E0D\u6210\u95EE\u9898\u3002</p>
<h3 data-id="heading-6">\u5B9E\u73B0</h3>
<p>\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><code class="hljs language-html" lang="html"><span class="hljs-meta">&lt;!DOCTYPE <span class="hljs-meta-keyword">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"en"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>\u5355\u4F8B\u6A21\u5F0F\u5F39\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
    <span class="hljs-selector-id">#modal</span> {
        <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;
        <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
        <span class="hljs-attribute">line-height</span>: <span class="hljs-number">200px</span>;
        <span class="hljs-attribute">position</span>: fixed;
        <span class="hljs-attribute">left</span>: <span class="hljs-number">50%</span>;
        <span class="hljs-attribute">top</span>: <span class="hljs-number">50%</span>;
        <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(-<span class="hljs-number">50%</span>, -<span class="hljs-number">50%</span>);
        <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid black;
        <span class="hljs-attribute">text-align</span>: center;
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">'open'</span>&gt;</span>\u6253\u5F00\u5F39\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">'close'</span>&gt;</span>\u5173\u95ED\u5F39\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-comment">// \u6838\u5FC3\u903B\u8F91\uFF0C\u8FD9\u91CC\u91C7\u7528\u4E86\u95ED\u5305\u601D\u8DEF\u6765\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F</span>
    <span class="hljs-keyword">const</span> Modal = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    	<span class="hljs-keyword">let</span> modal = <span class="hljs-literal">null</span>
    	<span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-keyword">if</span>(!modal) {
            	modal = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">'div'</span>)
            	modal.innerHTML = <span class="hljs-string">'\u6211\u662F\u4E00\u4E2A\u5168\u5C40\u552F\u4E00\u7684Modal'</span>
            	modal.id = <span class="hljs-string">'modal'</span>
            	modal.style.display = <span class="hljs-string">'none'</span>
            	<span class="hljs-built_in">document</span>.body.appendChild(modal)
            }
            <span class="hljs-keyword">return</span> modal
    	}
    })()
    
    <span class="hljs-comment">// \u70B9\u51FB\u6253\u5F00\u6309\u94AE\u5C55\u793A\u6A21\u6001\u6846</span>
    <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">'open'</span>).addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-comment">// \u672A\u70B9\u51FB\u5219\u4E0D\u521B\u5EFAmodal\u5B9E\u4F8B\uFF0C\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u5185\u5B58\u5360\u7528;\u6B64\u5904\u4E0D\u7528 new Modal \u7684\u5F62\u5F0F\u8C03\u7528\u4E5F\u53EF\u4EE5\uFF0C\u548C Storage \u540C\u7406</span>
    	<span class="hljs-keyword">const</span> modal = <span class="hljs-keyword">new</span> Modal()
    	modal.style.display = <span class="hljs-string">'block'</span>
    })
    
    <span class="hljs-comment">// \u70B9\u51FB\u5173\u95ED\u6309\u94AE\u9690\u85CF\u6A21\u6001\u6846</span>
    <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">'close'</span>).addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    	<span class="hljs-keyword">const</span> modal = <span class="hljs-keyword">new</span> Modal()
    	<span class="hljs-keyword">if</span>(modal) {
    	    modal.style.display = <span class="hljs-string">'none'</span>
    	}
    })
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre>
<p>\u662F\u4E0D\u662F\u53D1\u73B0\u53C8\u662F\u719F\u6089\u7684\u5957\u8DEF\uFF1F\u53C8\u53EF\u4EE5\u9ED8\u5199\u4E86\uFF1F\uFF08ES6 \u7248\u672C\u7684\u5B9E\u73B0\u5927\u5BB6\u81EA\u5DF1\u5C1D\u8BD5\u9ED8\u5199\u4E00\u4E0B\uFF0C\u76F8\u4FE1\u5BF9\u73B0\u5728\u7684\u4F60\u6765\u8BF4\u5DF2\u7ECF\u975E\u5E38\u7B80\u5355\u4E86\uFF09\u3002</p>
<p>\u8FD9\u5C31\u662F\u5355\u4F8B\u6A21\u5F0F\u9762\u8BD5\u9898\u7684\u7279\u70B9\uFF0C\u51C6\u786E\u5730\u8BF4\uFF0C\u662F\u6240\u6709\u8BBE\u8BA1\u6A21\u5F0F\u76F8\u5173\u9762\u8BD5\u9898\u7684\u7279\u70B9\u2014\u2014\u7262\u8BB0\u6838\u5FC3\u601D\u8DEF\uFF0C\u5C31\u80FD\u4E3E\u4E00\u53CD\u4E09\u3002\u6240\u4EE5\u8BF4\u8BBE\u8BA1\u6A21\u5F0F\u7684\u5B66\u4E60\u662F\u5178\u578B\u7684\u4E00\u5206\u8015\u8018\u4E00\u5206\u6536\u83B7\uFF0C\u6027\u4EF7\u6BD4\u6781\u9AD8\u3002</p>
<p>\uFF08\u9605\u8BFB\u8FC7\u7A0B\u4E2D\u6709\u4EFB\u4F55\u60F3\u6CD5\u6216\u7591\u95EE\uFF0C\u6216\u8005\u5355\u7EAF\u5E0C\u671B\u548C\u7B14\u8005\u4EA4\u4E2A\u670B\u53CB\u5565\u7684\uFF0C\u6B22\u8FCE\u5927\u5BB6\u6DFB\u52A0\u6211\u7684\u5FAE\u4FE1xyalinode\u4E0E\u6211\u4EA4\u6D41\u54C8~\uFF09</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{s as default};
