var n={name:"\u8BBE\u8BA1\u6A21\u5F0F",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h1 data-id="heading-0">\u8BBE\u8BA1\u6A21\u5F0F</h1>
<p>\u8BBE\u8BA1\u6A21\u5F0F\u603B\u7684\u6765\u8BF4\u662F\u4E00\u4E2A\u62BD\u8C61\u7684\u6982\u5FF5\uFF0C\u524D\u4EBA\u901A\u8FC7\u65E0\u6570\u6B21\u7684\u5B9E\u8DF5\u603B\u7ED3\u51FA\u7684\u4E00\u5957\u5199\u4EE3\u7801\u7684\u65B9\u5F0F\uFF0C\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u5199\u7684\u4EE3\u7801\u53EF\u4EE5\u8BA9\u522B\u4EBA\u66F4\u52A0\u5BB9\u6613\u9605\u8BFB\u3001\u7EF4\u62A4\u4EE5\u53CA\u590D\u7528\u3002</p>
<p>\u8FD9\u4E00\u7AE0\u8282\u6211\u4EEC\u5C06\u6765\u5B66\u4E60\u51E0\u79CD\u6700\u5E38\u7528\u7684\u8BBE\u8BA1\u6A21\u5F0F\u3002</p>
<h2 data-id="heading-1">\u5DE5\u5382\u6A21\u5F0F</h2>
<p>\u5DE5\u5382\u6A21\u5F0F\u5206\u4E3A\u597D\u51E0\u79CD\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u4E00\u4E00\u8BB2\u89E3\u4E86\uFF0C\u4EE5\u4E0B\u662F\u4E00\u4E2A\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\u7684\u4F8B\u5B50</p>
<pre><code lang="js" class=""><span><span>class</span> <span>Man</span> </span>{
  <span>constructor</span>(name) {
    <span>this</span>.name = name
  }
  alertName() {
    alert(<span>this</span>.name)
  }
}

<span><span>class</span> <span>Factory</span> </span>{
  <span>static</span> create(name) {
    <span>return</span> <span>new</span> Man(name)
  }
}

Factory.create(<span>'yck'</span>).alertName()
</code></pre><p>\u5F53\u7136\u5DE5\u5382\u6A21\u5F0F\u5E76\u4E0D\u4EC5\u4EC5\u662F\u7528\u6765 new \u51FA<strong>\u5B9E\u4F8B</strong>\u3002</p>
<p>\u53EF\u4EE5\u60F3\u8C61\u4E00\u4E2A\u573A\u666F\u3002\u5047\u8BBE\u6709\u4E00\u4EFD\u5F88\u590D\u6742\u7684\u4EE3\u7801\u9700\u8981\u7528\u6237\u53BB\u8C03\u7528\uFF0C\u4F46\u662F\u7528\u6237\u5E76\u4E0D\u5173\u5FC3\u8FD9\u4E9B\u590D\u6742\u7684\u4EE3\u7801\uFF0C\u53EA\u9700\u8981\u4F60\u63D0\u4F9B\u7ED9\u6211\u4E00\u4E2A\u63A5\u53E3\u53BB\u8C03\u7528\uFF0C\u7528\u6237\u53EA\u8D1F\u8D23\u4F20\u9012\u9700\u8981\u7684\u53C2\u6570\uFF0C\u81F3\u4E8E\u8FD9\u4E9B\u53C2\u6570\u600E\u4E48\u4F7F\u7528\uFF0C\u5185\u90E8\u6709\u4EC0\u4E48\u903B\u8F91\u662F\u4E0D\u5173\u5FC3\u7684\uFF0C\u53EA\u9700\u8981\u4F60\u6700\u540E\u8FD4\u56DE\u6211\u4E00\u4E2A\u5B9E\u4F8B\u3002\u8FD9\u4E2A\u6784\u9020\u8FC7\u7A0B\u5C31\u662F\u5DE5\u5382\u3002</p>
<p>\u5DE5\u5382\u8D77\u5230\u7684\u4F5C\u7528\u5C31\u662F\u9690\u85CF\u4E86\u521B\u5EFA\u5B9E\u4F8B\u7684\u590D\u6742\u5EA6\uFF0C\u53EA\u9700\u8981\u63D0\u4F9B\u4E00\u4E2A\u63A5\u53E3\uFF0C\u7B80\u5355\u6E05\u6670\u3002</p>
<p>\u5728 Vue \u6E90\u7801\u4E2D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u770B\u5230\u5DE5\u5382\u6A21\u5F0F\u7684\u4F7F\u7528\uFF0C\u6BD4\u5982\u521B\u5EFA\u5F02\u6B65\u7EC4\u4EF6</p>
<pre><code lang="js" class=""><span>export</span> <span><span>function</span> <span>createComponent</span> (<span>
  Ctor: Class&lt;Component&gt; | Function | Object | void,
  data: ?VNodeData,
  context: Component,
  children: ?Array&lt;VNode&gt;,
  tag?: string
</span>): <span>VNode</span> | <span>Array</span>&lt;<span>VNode</span>&gt; | <span>void</span> </span>{
    
    <span>// \u903B\u8F91\u5904\u7406...</span>
  
  <span>const</span> vnode = <span>new</span> VNode(
    <span>\`vue-component-<span>\${Ctor.cid}</span><span>\${name ? <span>\`-<span>\${name}</span>\`</span> : <span>''</span>}</span>\`</span>,
    data, <span>undefined</span>, <span>undefined</span>, <span>undefined</span>, context,
    { Ctor, propsData, listeners, tag, children },
    asyncFactory
  )

  <span>return</span> vnode
}
</code></pre><p>\u5728\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u6211\u4EEC\u53EA\u9700\u8981\u8C03\u7528 <code>createComponent</code> \u4F20\u5165\u53C2\u6570\u5C31\u80FD\u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u4F46\u662F\u521B\u5EFA\u8FD9\u4E2A\u5B9E\u4F8B\u662F\u5F88\u590D\u6742\u7684\u4E00\u4E2A\u8FC7\u7A0B\uFF0C\u5DE5\u5382\u5E2E\u52A9\u6211\u4EEC\u9690\u85CF\u4E86\u8FD9\u4E2A\u590D\u6742\u7684\u8FC7\u7A0B\uFF0C\u53EA\u9700\u8981\u4E00\u53E5\u4EE3\u7801\u8C03\u7528\u5C31\u80FD\u5B9E\u73B0\u529F\u80FD\u3002</p>
<h2 data-id="heading-2">\u5355\u4F8B\u6A21\u5F0F</h2>
<p>\u5355\u4F8B\u6A21\u5F0F\u5F88\u5E38\u7528\uFF0C\u6BD4\u5982\u5168\u5C40\u7F13\u5B58\u3001\u5168\u5C40\u72B6\u6001\u7BA1\u7406\u7B49\u7B49\u8FD9\u4E9B\u53EA\u9700\u8981\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u5355\u4F8B\u6A21\u5F0F\u3002</p>
<p>\u5355\u4F8B\u6A21\u5F0F\u7684\u6838\u5FC3\u5C31\u662F\u4FDD\u8BC1\u5168\u5C40\u53EA\u6709\u4E00\u4E2A\u5BF9\u8C61\u53EF\u4EE5\u8BBF\u95EE\u3002\u56E0\u4E3A JS \u662F\u95E8\u65E0\u7C7B\u7684\u8BED\u8A00\uFF0C\u6240\u4EE5\u522B\u7684\u8BED\u8A00\u5B9E\u73B0\u5355\u4F8B\u7684\u65B9\u5F0F\u5E76\u4E0D\u80FD\u5957\u5165 JS \u4E2D\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u7528\u4E00\u4E2A\u53D8\u91CF\u786E\u4FDD\u5B9E\u4F8B\u53EA\u521B\u5EFA\u4E00\u6B21\u5C31\u884C\uFF0C\u4EE5\u4E0B\u662F\u5982\u4F55\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F\u7684\u4F8B\u5B50</p>
<pre><code lang="js" class=""><span><span>class</span> <span>Singleton</span> </span>{
  <span>constructor</span>() {}
}

Singleton.getInstance = (<span><span>function</span>(<span></span>) </span>{
  <span>let</span> instance
  <span>return</span> <span><span>function</span>(<span></span>) </span>{
    <span>if</span> (!instance) {
      instance = <span>new</span> Singleton()
    }
    <span>return</span> instance
  }
})()

<span>let</span> s1 = Singleton.getInstance()
<span>let</span> s2 = Singleton.getInstance()
<span>console</span>.log(s1 === s2) <span>// true</span>
</code></pre><p>\u5728 Vuex \u6E90\u7801\u4E2D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u770B\u5230\u5355\u4F8B\u6A21\u5F0F\u7684\u4F7F\u7528\uFF0C\u867D\u7136\u5B83\u7684\u5B9E\u73B0\u65B9\u5F0F\u4E0D\u5927\u4E00\u6837\uFF0C\u901A\u8FC7\u4E00\u4E2A\u5916\u90E8\u53D8\u91CF\u6765\u63A7\u5236\u53EA\u5B89\u88C5\u4E00\u6B21 Vuex</p>
<pre><code lang="js" class=""><span>let</span> Vue <span>// bind on install</span>

<span>export</span> <span><span>function</span> <span>install</span> (<span>_Vue</span>) </span>{
  <span>if</span> (Vue &amp;&amp; _Vue === Vue) {
    <span>// \u5982\u679C\u53D1\u73B0 Vue \u6709\u503C\uFF0C\u5C31\u4E0D\u91CD\u65B0\u521B\u5EFA\u5B9E\u4F8B\u4E86</span>
    <span>return</span>
  }
  Vue = _Vue
  applyMixin(Vue)
}
</code></pre><h2 data-id="heading-3">\u9002\u914D\u5668\u6A21\u5F0F</h2>
<p>\u9002\u914D\u5668\u7528\u6765\u89E3\u51B3\u4E24\u4E2A\u63A5\u53E3\u4E0D\u517C\u5BB9\u7684\u60C5\u51B5\uFF0C\u4E0D\u9700\u8981\u6539\u53D8\u5DF2\u6709\u7684\u63A5\u53E3\uFF0C\u901A\u8FC7\u5305\u88C5\u4E00\u5C42\u7684\u65B9\u5F0F\u5B9E\u73B0\u4E24\u4E2A\u63A5\u53E3\u7684\u6B63\u5E38\u534F\u4F5C\u3002</p>
<p>\u4EE5\u4E0B\u662F\u5982\u4F55\u5B9E\u73B0\u9002\u914D\u5668\u6A21\u5F0F\u7684\u4F8B\u5B50</p>
<pre><code lang="js" class=""><span><span>class</span> <span>Plug</span> </span>{
  getName() {
    <span>return</span> <span>'\u6E2F\u7248\u63D2\u5934'</span>
  }
}

<span><span>class</span> <span>Target</span> </span>{
  <span>constructor</span>() {
    <span>this</span>.plug = <span>new</span> Plug()
  }
  getName() {
    <span>return</span> <span>this</span>.plug.getName() + <span>' \u9002\u914D\u5668\u8F6C\u4E8C\u811A\u63D2\u5934'</span>
  }
}

<span>let</span> target = <span>new</span> Target()
target.getName() <span>// \u6E2F\u7248\u63D2\u5934 \u9002\u914D\u5668\u8F6C\u4E8C\u811A\u63D2\u5934</span>
</code></pre><p>\u5728 Vue \u4E2D\uFF0C\u6211\u4EEC\u5176\u5B9E\u7ECF\u5E38\u4F7F\u7528\u5230\u9002\u914D\u5668\u6A21\u5F0F\u3002\u6BD4\u5982\u7236\u7EC4\u4EF6\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u4E00\u4E2A\u65F6\u95F4\u6233\u5C5E\u6027\uFF0C\u7EC4\u4EF6\u5185\u90E8\u9700\u8981\u5C06\u65F6\u95F4\u6233\u8F6C\u4E3A\u6B63\u5E38\u7684\u65E5\u671F\u663E\u793A\uFF0C\u4E00\u822C\u4F1A\u4F7F\u7528 <code>computed</code> \u6765\u505A\u8F6C\u6362\u8FD9\u4EF6\u4E8B\u60C5\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u5C31\u4F7F\u7528\u5230\u4E86\u9002\u914D\u5668\u6A21\u5F0F\u3002</p>
<h2 data-id="heading-4">\u88C5\u9970\u6A21\u5F0F</h2>
<p>\u88C5\u9970\u6A21\u5F0F\u4E0D\u9700\u8981\u6539\u53D8\u5DF2\u6709\u7684\u63A5\u53E3\uFF0C\u4F5C\u7528\u662F\u7ED9\u5BF9\u8C61\u6DFB\u52A0\u529F\u80FD\u3002\u5C31\u50CF\u6211\u4EEC\u7ECF\u5E38\u9700\u8981\u7ED9\u624B\u673A\u6234\u4E2A\u4FDD\u62A4\u5957\u9632\u6454\u4E00\u6837\uFF0C\u4E0D\u6539\u53D8\u624B\u673A\u81EA\u8EAB\uFF0C\u7ED9\u624B\u673A\u6DFB\u52A0\u4E86\u4FDD\u62A4\u5957\u63D0\u4F9B\u9632\u6454\u529F\u80FD\u3002</p>
<p>\u4EE5\u4E0B\u662F\u5982\u4F55\u5B9E\u73B0\u88C5\u9970\u6A21\u5F0F\u7684\u4F8B\u5B50\uFF0C\u4F7F\u7528\u4E86 ES7 \u4E2D\u7684\u88C5\u9970\u5668\u8BED\u6CD5</p>
<pre><code lang="js" class=""><span><span>function</span> <span>readonly</span>(<span>target, key, descriptor</span>) </span>{
  descriptor.writable = <span>false</span>
  <span>return</span> descriptor
}

<span><span>class</span> <span>Test</span> </span>{
  @readonly
  name = <span>'yck'</span>
}

<span>let</span> t = <span>new</span> Test()

t.yck = <span>'111'</span> <span>// \u4E0D\u53EF\u4FEE\u6539</span>
</code></pre><p>\u5728 React \u4E2D\uFF0C\u88C5\u9970\u6A21\u5F0F\u5176\u5B9E\u968F\u5904\u53EF\u89C1</p>
<pre><code lang="js" class=""><span>import</span> { connect } <span>from</span> <span>'react-redux'</span>
<span><span>class</span> <span>MyComponent</span> <span>extends</span> <span>React</span>.<span>Component</span> </span>{
    <span>// ...</span>
}
<span>export</span> <span>default</span> connect(mapStateToProps)(MyComponent)
</code></pre><h2 data-id="heading-5">\u4EE3\u7406\u6A21\u5F0F</h2>
<p>\u4EE3\u7406\u662F\u4E3A\u4E86\u63A7\u5236\u5BF9\u5BF9\u8C61\u7684\u8BBF\u95EE\uFF0C\u4E0D\u8BA9\u5916\u90E8\u76F4\u63A5\u8BBF\u95EE\u5230\u5BF9\u8C61\u3002\u5728\u73B0\u5B9E\u751F\u6D3B\u4E2D\uFF0C\u4E5F\u6709\u5F88\u591A\u4EE3\u7406\u7684\u573A\u666F\u3002\u6BD4\u5982\u4F60\u9700\u8981\u4E70\u4E00\u4EF6\u56FD\u5916\u7684\u4EA7\u54C1\uFF0C\u8FD9\u65F6\u5019\u4F60\u53EF\u4EE5\u901A\u8FC7\u4EE3\u8D2D\u6765\u8D2D\u4E70\u4EA7\u54C1\u3002</p>
<p>\u5728\u5B9E\u9645\u4EE3\u7801\u4E2D\u5176\u5B9E\u4EE3\u7406\u7684\u573A\u666F\u5F88\u591A\uFF0C\u4E5F\u5C31\u4E0D\u4E3E\u6846\u67B6\u4E2D\u7684\u4F8B\u5B50\u4E86\uFF0C\u6BD4\u5982\u4E8B\u4EF6\u4EE3\u7406\u5C31\u7528\u5230\u4E86\u4EE3\u7406\u6A21\u5F0F\u3002</p>
<pre><code lang="html" class=""><span>&lt;<span>ul</span> <span>id</span>=<span>"ul"</span>&gt;</span>
    <span>&lt;<span>li</span>&gt;</span>1<span>&lt;/<span>li</span>&gt;</span>
    <span>&lt;<span>li</span>&gt;</span>2<span>&lt;/<span>li</span>&gt;</span>
    <span>&lt;<span>li</span>&gt;</span>3<span>&lt;/<span>li</span>&gt;</span>
    <span>&lt;<span>li</span>&gt;</span>4<span>&lt;/<span>li</span>&gt;</span>
    <span>&lt;<span>li</span>&gt;</span>5<span>&lt;/<span>li</span>&gt;</span>
<span>&lt;/<span>ul</span>&gt;</span>
<span>&lt;<span>script</span>&gt;</span><span>
    <span>let</span> ul = <span>document</span>.querySelector(<span>'#ul'</span>)
    ul.addEventListener(<span>'click'</span>, (event) =&gt; {
        <span>console</span>.log(event.target);
    })
</span><span>&lt;/<span>script</span>&gt;</span>
</code></pre><p>\u56E0\u4E3A\u5B58\u5728\u592A\u591A\u7684 <code>li</code>\uFF0C\u4E0D\u53EF\u80FD\u6BCF\u4E2A\u90FD\u53BB\u7ED1\u5B9A\u4E8B\u4EF6\u3002\u8FD9\u65F6\u5019\u53EF\u4EE5\u901A\u8FC7\u7ED9\u7236\u8282\u70B9\u7ED1\u5B9A\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u8BA9\u7236\u8282\u70B9\u4F5C\u4E3A\u4EE3\u7406\u53BB\u62FF\u5230\u771F\u5B9E\u70B9\u51FB\u7684\u8282\u70B9\u3002</p>
<h2 data-id="heading-6">\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F</h2>
<p>\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u4E5F\u53EB\u505A\u89C2\u5BDF\u8005\u6A21\u5F0F\u3002\u901A\u8FC7\u4E00\u5BF9\u4E00\u6216\u8005\u4E00\u5BF9\u591A\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u5F53\u5BF9\u8C61\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u8BA2\u9605\u65B9\u90FD\u4F1A\u6536\u5230\u901A\u77E5\u3002\u5728\u73B0\u5B9E\u751F\u6D3B\u4E2D\uFF0C\u4E5F\u6709\u5F88\u591A\u7C7B\u4F3C\u573A\u666F\uFF0C\u6BD4\u5982\u6211\u9700\u8981\u5728\u8D2D\u7269\u7F51\u7AD9\u4E0A\u8D2D\u4E70\u4E00\u4E2A\u4EA7\u54C1\uFF0C\u4F46\u662F\u53D1\u73B0\u8BE5\u4EA7\u54C1\u76EE\u524D\u5904\u4E8E\u7F3A\u8D27\u72B6\u6001\uFF0C\u8FD9\u65F6\u5019\u6211\u53EF\u4EE5\u70B9\u51FB\u6709\u8D27\u901A\u77E5\u7684\u6309\u94AE\uFF0C\u8BA9\u7F51\u7AD9\u5728\u4EA7\u54C1\u6709\u8D27\u7684\u65F6\u5019\u901A\u8FC7\u77ED\u4FE1\u901A\u77E5\u6211\u3002</p>
<p>\u5728\u5B9E\u9645\u4EE3\u7801\u4E2D\u5176\u5B9E\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u4E5F\u5F88\u5E38\u89C1\uFF0C\u6BD4\u5982\u6211\u4EEC\u70B9\u51FB\u4E00\u4E2A\u6309\u94AE\u89E6\u53D1\u4E86\u70B9\u51FB\u4E8B\u4EF6\u5C31\u662F\u4F7F\u7528\u4E86\u8BE5\u6A21\u5F0F</p>
<pre><code lang="html" class=""><span>&lt;<span>ul</span> <span>id</span>=<span>"ul"</span>&gt;</span><span>&lt;/<span>ul</span>&gt;</span>
<span>&lt;<span>script</span>&gt;</span><span>
    <span>let</span> ul = <span>document</span>.querySelector(<span>'#ul'</span>)
    ul.addEventListener(<span>'click'</span>, (event) =&gt; {
        <span>console</span>.log(event.target);
    })
</span><span>&lt;/<span>script</span>&gt;</span>
</code></pre><p>\u5728 Vue \u4E2D\uFF0C\u5982\u4F55\u5B9E\u73B0\u54CD\u5E94\u5F0F\u4E5F\u662F\u4F7F\u7528\u4E86\u8BE5\u6A21\u5F0F\u3002\u5BF9\u4E8E\u9700\u8981\u5B9E\u73B0\u54CD\u5E94\u5F0F\u7684\u5BF9\u8C61\u6765\u8BF4\uFF0C\u5728 <code>get</code> \u7684\u65F6\u5019\u4F1A\u8FDB\u884C\u4F9D\u8D56\u6536\u96C6\uFF0C\u5F53\u6539\u53D8\u4E86\u5BF9\u8C61\u7684\u5C5E\u6027\u65F6\uFF0C\u5C31\u4F1A\u89E6\u53D1\u6D3E\u53D1\u66F4\u65B0\u3002</p>
<h2 data-id="heading-7">\u5916\u89C2\u6A21\u5F0F</h2>
<p>\u5916\u89C2\u6A21\u5F0F\u63D0\u4F9B\u4E86\u4E00\u4E2A\u63A5\u53E3\uFF0C\u9690\u85CF\u4E86\u5185\u90E8\u7684\u903B\u8F91\uFF0C\u66F4\u52A0\u65B9\u4FBF\u5916\u90E8\u8C03\u7528\u3002</p>
<p>\u4E3E\u4E2A\u4F8B\u5B50\u6765\u8BF4\uFF0C\u6211\u4EEC\u73B0\u5728\u9700\u8981\u5B9E\u73B0\u4E00\u4E2A\u517C\u5BB9\u591A\u79CD\u6D4F\u89C8\u5668\u7684\u6DFB\u52A0\u4E8B\u4EF6\u65B9\u6CD5</p>
<pre><code lang="js" class=""><span><span>function</span> <span>addEvent</span>(<span>elm, evType, fn, useCapture</span>) </span>{
  <span>if</span> (elm.addEventListener) {
    elm.addEventListener(evType, fn, useCapture)
    <span>return</span> <span>true</span>
  } <span>else</span> <span>if</span> (elm.attachEvent) {
    <span>var</span> r = elm.attachEvent(<span>"on"</span> + evType, fn)
    <span>return</span> r
  } <span>else</span> {
    elm[<span>"on"</span> + evType] = fn
  }
}
</code></pre><p>\u5BF9\u4E8E\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\uFF0C\u6DFB\u52A0\u4E8B\u4EF6\u7684\u65B9\u5F0F\u53EF\u80FD\u4F1A\u5B58\u5728\u517C\u5BB9\u95EE\u9898\u3002\u5982\u679C\u6BCF\u6B21\u90FD\u9700\u8981\u53BB\u8FD9\u6837\u5199\u4E00\u904D\u7684\u8BDD\u80AF\u5B9A\u662F\u4E0D\u80FD\u63A5\u53D7\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u5C06\u8FD9\u4E9B\u5224\u65AD\u903B\u8F91\u7EDF\u4E00\u5C01\u88C5\u5728\u4E00\u4E2A\u63A5\u53E3\u4E2D\uFF0C\u5916\u90E8\u9700\u8981\u6DFB\u52A0\u4E8B\u4EF6\u53EA\u9700\u8981\u8C03\u7528 <code>addEvent</code> \u5373\u53EF\u3002</p>
<h2 data-id="heading-8">\u5C0F\u7ED3</h2>
<p>\u8FD9\u4E00\u7AE0\u8282\u6211\u4EEC\u5B66\u4E60\u4E86\u51E0\u79CD\u5E38\u7528\u7684\u8BBE\u8BA1\u6A21\u5F0F\u3002\u5176\u5B9E\u8BBE\u8BA1\u6A21\u5F0F\u8FD8\u6709\u5F88\u591A\uFF0C\u6709\u4E00\u4E9B\u5185\u5BB9\u5F88\u7B80\u5355\uFF0C\u6211\u5C31\u6CA1\u6709\u5199\u5728\u7AE0\u8282\u4E2D\u4E86\uFF0C\u6BD4\u5982\u8FED\u4EE3\u5668\u6A21\u5F0F\u3001\u539F\u578B\u6A21\u5F0F\uFF0C\u6709\u4E00\u4E9B\u5185\u5BB9\u4E5F\u662F\u4E0D\u7ECF\u5E38\u4F7F\u7528\uFF0C\u6240\u4EE5\u4E5F\u5C31\u4E0D\u4E00\u4E00\u5217\u4E3E\u4E86\u3002</p>
<p>\u5982\u679C\u4F60\u8FD8\u60F3\u4E86\u89E3\u66F4\u591A\u5173\u4E8E\u8BBE\u8BA1\u6A21\u5F0F\u7684\u5185\u5BB9\uFF0C\u53EF\u4EE5\u9605\u8BFB<a target="_blank" href="https://link.juejin.cn?target=https%3A%2F%2Fbook.douban.com%2Fsubject%2F26382780%2F" title="https://book.douban.com/subject/26382780/" ref="nofollow noopener noreferrer">\u8FD9\u672C\u4E66</a>\u3002</p>
`};export{n as default};
