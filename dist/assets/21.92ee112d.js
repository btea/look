var n={name:"Vue \u5E38\u8003\u8FDB\u9636\u77E5\u8BC6\u70B9",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h1 data-id="heading-0">Vue \u5E38\u8003\u8FDB\u9636\u77E5\u8BC6\u70B9</h1>
<p>\u8FD9\u4E00\u7AE0\u8282\u6211\u4EEC\u5C06\u6765\u5B66\u4E60 Vue \u7684\u4E00\u4E9B\u7ECF\u5E38\u8003\u5230\u7684\u8FDB\u9636\u77E5\u8BC6\u70B9\u3002\u8FD9\u4E9B\u77E5\u8BC6\u70B9\u76F8\u5BF9\u800C\u8A00\u7406\u89E3\u8D77\u6765\u4F1A\u5F88\u6709\u96BE\u5EA6\uFF0C\u53EF\u80FD\u9700\u8981\u591A\u6B21\u9605\u8BFB\u624D\u80FD\u7406\u89E3\u3002</p>
<h2 data-id="heading-1">\u54CD\u5E94\u5F0F\u539F\u7406</h2>
<p>Vue \u5185\u90E8\u4F7F\u7528\u4E86 <code>Object.defineProperty()</code> \u6765\u5B9E\u73B0\u6570\u636E\u54CD\u5E94\u5F0F\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u51FD\u6570\u53EF\u4EE5\u76D1\u542C\u5230 <code>set</code> \u548C <code>get</code> \u7684\u4E8B\u4EF6\u3002</p>
<pre><code lang="js" class=""><span>var</span> data = { <span>name</span>: <span>'yck'</span> }
observe(data)
<span>let</span> name = data.name <span>// -&gt; get value</span>
data.name = <span>'yyy'</span> <span>// -&gt; change value</span>

<span><span>function</span> <span>observe</span>(<span>obj</span>) </span>{
  <span>// \u5224\u65AD\u7C7B\u578B</span>
  <span>if</span> (!obj || <span>typeof</span> obj !== <span>'object'</span>) {
    <span>return</span>
  }
  <span>Object</span>.keys(obj).forEach(<span><span>key</span> =&gt;</span> {
    defineReactive(obj, key, obj[key])
  })
}

<span><span>function</span> <span>defineReactive</span>(<span>obj, key, val</span>) </span>{
  <span>// \u9012\u5F52\u5B50\u5C5E\u6027</span>
  observe(val)
  <span>Object</span>.defineProperty(obj, key, {
    <span>// \u53EF\u679A\u4E3E</span>
    enumerable: <span>true</span>,
    <span>// \u53EF\u914D\u7F6E</span>
    configurable: <span>true</span>,
    <span>// \u81EA\u5B9A\u4E49\u51FD\u6570</span>
    get: <span><span>function</span> <span>reactiveGetter</span>(<span></span>) </span>{
      <span>console</span>.log(<span>'get value'</span>)
      <span>return</span> val
    },
    <span>set</span>: <span><span>function</span> <span>reactiveSetter</span>(<span>newVal</span>) </span>{
      <span>console</span>.log(<span>'change value'</span>)
      val = newVal
    }
  })
}
</code></pre><p>\u4EE5\u4E0A\u4EE3\u7801\u7B80\u5355\u7684\u5B9E\u73B0\u4E86\u5982\u4F55\u76D1\u542C\u6570\u636E\u7684 <code>set</code> \u548C <code>get</code> \u7684\u4E8B\u4EF6\uFF0C\u4F46\u662F\u4EC5\u4EC5\u5982\u6B64\u662F\u4E0D\u591F\u7684\uFF0C\u56E0\u4E3A\u81EA\u5B9A\u4E49\u7684\u51FD\u6570\u4E00\u5F00\u59CB\u662F\u4E0D\u4F1A\u6267\u884C\u7684\u3002\u53EA\u6709\u5148\u6267\u884C\u4E86\u4F9D\u8D56\u6536\u96C6\uFF0C\u624D\u80FD\u5728\u5C5E\u6027\u66F4\u65B0\u7684\u65F6\u5019\u6D3E\u53D1\u66F4\u65B0\uFF0C\u6240\u4EE5\u63A5\u4E0B\u6765\u6211\u4EEC\u9700\u8981\u5148\u89E6\u53D1\u4F9D\u8D56\u6536\u96C6\u3002</p>
<pre><code lang="html" class=""><span>&lt;<span>div</span>&gt;</span>
    {{name}}
<span>&lt;/<span>div</span>&gt;</span>
</code></pre><p>\u5728\u89E3\u6790\u5982\u4E0A\u6A21\u677F\u4EE3\u7801\u65F6\uFF0C\u9047\u5230 <code>{{name}}</code> \u5C31\u4F1A\u8FDB\u884C\u4F9D\u8D56\u6536\u96C6\u3002</p>
<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5148\u6765\u5B9E\u73B0\u4E00\u4E2A <code>Dep</code> \u7C7B\uFF0C\u7528\u4E8E\u89E3\u8026\u5C5E\u6027\u7684\u4F9D\u8D56\u6536\u96C6\u548C\u6D3E\u53D1\u66F4\u65B0\u64CD\u4F5C\u3002</p>
<pre><code lang="js" class=""><span>// \u901A\u8FC7 Dep \u89E3\u8026\u5C5E\u6027\u7684\u4F9D\u8D56\u548C\u66F4\u65B0\u64CD\u4F5C</span>
<span><span>class</span> <span>Dep</span> </span>{
  <span>constructor</span>() {
    <span>this</span>.subs = []
  }
  <span>// \u6DFB\u52A0\u4F9D\u8D56</span>
  addSub(sub) {
    <span>this</span>.subs.push(sub)
  }
  <span>// \u66F4\u65B0</span>
  notify() {
    <span>this</span>.subs.forEach(<span><span>sub</span> =&gt;</span> {
      sub.update()
    })
  }
}
<span>// \u5168\u5C40\u5C5E\u6027\uFF0C\u901A\u8FC7\u8BE5\u5C5E\u6027\u914D\u7F6E Watcher</span>
Dep.target = <span>null</span>
</code></pre><p>\u4EE5\u4E0A\u7684\u4EE3\u7801\u5B9E\u73B0\u5F88\u7B80\u5355\uFF0C\u5F53\u9700\u8981\u4F9D\u8D56\u6536\u96C6\u7684\u65F6\u5019\u8C03\u7528 <code>addSub</code>\uFF0C\u5F53\u9700\u8981\u6D3E\u53D1\u66F4\u65B0\u7684\u65F6\u5019\u8C03\u7528 <code>notify</code>\u3002</p>
<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5148\u6765\u7B80\u5355\u7684\u4E86\u89E3\u4E0B Vue \u7EC4\u4EF6\u6302\u8F7D\u65F6\u6DFB\u52A0\u54CD\u5E94\u5F0F\u7684\u8FC7\u7A0B\u3002\u5728\u7EC4\u4EF6\u6302\u8F7D\u65F6\uFF0C\u4F1A\u5148\u5BF9\u6240\u6709\u9700\u8981\u7684\u5C5E\u6027\u8C03\u7528 <code>Object.defineProperty()</code>\uFF0C\u7136\u540E\u5B9E\u4F8B\u5316 <code>Watcher</code>\uFF0C\u4F20\u5165\u7EC4\u4EF6\u66F4\u65B0\u7684\u56DE\u8C03\u3002\u5728\u5B9E\u4F8B\u5316\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u5BF9\u6A21\u677F\u4E2D\u7684\u5C5E\u6027\u8FDB\u884C\u6C42\u503C\uFF0C\u89E6\u53D1\u4F9D\u8D56\u6536\u96C6\u3002</p>
<p>\u56E0\u4E3A\u8FD9\u4E00\u5C0F\u8282\u4E3B\u8981\u76EE\u7684\u662F\u5B66\u4E60\u54CD\u5E94\u5F0F\u539F\u7406\u7684\u7EC6\u8282\uFF0C\u6240\u4EE5\u63A5\u4E0B\u6765\u7684\u4EE3\u7801\u4F1A\u7B80\u7565\u7684\u8868\u8FBE\u89E6\u53D1\u4F9D\u8D56\u6536\u96C6\u65F6\u7684\u64CD\u4F5C\u3002</p>
<pre><code lang="js" class=""><span><span>class</span> <span>Watcher</span> </span>{
  <span>constructor</span>(obj, key, cb) {
    <span>// \u5C06 Dep.target \u6307\u5411\u81EA\u5DF1</span>
    <span>// \u7136\u540E\u89E6\u53D1\u5C5E\u6027\u7684 getter \u6DFB\u52A0\u76D1\u542C</span>
    <span>// \u6700\u540E\u5C06 Dep.target \u7F6E\u7A7A</span>
    Dep.target = <span>this</span>
    <span>this</span>.cb = cb
    <span>this</span>.obj = obj
    <span>this</span>.key = key
    <span>this</span>.value = obj[key]
    Dep.target = <span>null</span>
  }
  update() {
    <span>// \u83B7\u5F97\u65B0\u503C</span>
    <span>this</span>.value = <span>this</span>.obj[<span>this</span>.key]
    <span>// \u8C03\u7528 update \u65B9\u6CD5\u66F4\u65B0 Dom</span>
    <span>this</span>.cb(<span>this</span>.value)
  }
}
</code></pre><p>\u4EE5\u4E0A\u5C31\u662F <code>Watcher</code> \u7684\u7B80\u5355\u5B9E\u73B0\uFF0C\u5728\u6267\u884C\u6784\u9020\u51FD\u6570\u7684\u65F6\u5019\u5C06 <code>Dep.target</code> \u6307\u5411\u81EA\u8EAB\uFF0C\u4ECE\u800C\u4F7F\u5F97\u6536\u96C6\u5230\u4E86\u5BF9\u5E94\u7684 <code>Watcher</code>\uFF0C\u5728\u6D3E\u53D1\u66F4\u65B0\u7684\u65F6\u5019\u53D6\u51FA\u5BF9\u5E94\u7684 <code>Watcher</code> \u7136\u540E\u6267\u884C <code>update</code> \u51FD\u6570\u3002</p>
<p>\u63A5\u4E0B\u6765\uFF0C\u9700\u8981\u5BF9 <code>defineReactive</code> \u51FD\u6570\u8FDB\u884C\u6539\u9020\uFF0C\u5728\u81EA\u5B9A\u4E49\u51FD\u6570\u4E2D\u6DFB\u52A0\u4F9D\u8D56\u6536\u96C6\u548C\u6D3E\u53D1\u66F4\u65B0\u76F8\u5173\u7684\u4EE3\u7801\u3002</p>
<pre><code lang="js" class=""><span><span>function</span> <span>defineReactive</span>(<span>obj, key, val</span>) </span>{
  <span>// \u9012\u5F52\u5B50\u5C5E\u6027</span>
  observe(val)
  <span>let</span> dp = <span>new</span> Dep()
  <span>Object</span>.defineProperty(obj, key, {
    <span>enumerable</span>: <span>true</span>,
    <span>configurable</span>: <span>true</span>,
    <span>get</span>: <span><span>function</span> <span>reactiveGetter</span>(<span></span>) </span>{
      <span>console</span>.log(<span>'get value'</span>)
      <span>// \u5C06 Watcher \u6DFB\u52A0\u5230\u8BA2\u9605</span>
      <span>if</span> (Dep.target) {
        dp.addSub(Dep.target)
      }
      <span>return</span> val
    },
    <span>set</span>: <span><span>function</span> <span>reactiveSetter</span>(<span>newVal</span>) </span>{
      <span>console</span>.log(<span>'change value'</span>)
      val = newVal
      <span>// \u6267\u884C watcher \u7684 update \u65B9\u6CD5</span>
      dp.notify()
    }
  })
}
</code></pre><p>\u4EE5\u4E0A\u6240\u6709\u4EE3\u7801\u5B9E\u73B0\u4E86\u4E00\u4E2A\u7B80\u6613\u7684\u6570\u636E\u54CD\u5E94\u5F0F\uFF0C\u6838\u5FC3\u601D\u8DEF\u5C31\u662F\u624B\u52A8\u89E6\u53D1\u4E00\u6B21\u5C5E\u6027\u7684 getter \u6765\u5B9E\u73B0\u4F9D\u8D56\u6536\u96C6\u3002</p>
<p>\u73B0\u5728\u6211\u4EEC\u5C31\u6765\u6D4B\u8BD5\u4E0B\u4EE3\u7801\u7684\u6548\u679C\uFF0C\u53EA\u9700\u8981\u628A\u6240\u6709\u7684\u4EE3\u7801\u590D\u5236\u5230\u6D4F\u89C8\u5668\u4E2D\u6267\u884C\uFF0C\u5C31\u4F1A\u53D1\u73B0\u9875\u9762\u7684\u5185\u5BB9\u5168\u90E8\u88AB\u66FF\u6362\u4E86\u3002</p>
<pre><code lang="js" class=""><span>var</span> data = { <span>name</span>: <span>'yck'</span> }
observe(data)
<span><span>function</span> <span>update</span>(<span>value</span>) </span>{
  <span>document</span>.querySelector(<span>'div'</span>).innerText = value
}
<span>// \u6A21\u62DF\u89E3\u6790\u5230 \`{{name}}\` \u89E6\u53D1\u7684\u64CD\u4F5C</span>
<span>new</span> Watcher(data, <span>'name'</span>, update)
<span>// update Dom innerText</span>
data.name = <span>'yyy'</span> 
</code></pre><h3 data-id="heading-2">Object.defineProperty \u7684\u7F3A\u9677</h3>
<p>\u4EE5\u4E0A\u5DF2\u7ECF\u5206\u6790\u5B8C\u4E86 Vue \u7684\u54CD\u5E94\u5F0F\u539F\u7406\uFF0C\u63A5\u4E0B\u6765\u8BF4\u4E00\u70B9 <code>Object.defineProperty</code> \u4E2D\u7684\u7F3A\u9677\u3002</p>
<p>\u5982\u679C\u901A\u8FC7\u4E0B\u6807\u65B9\u5F0F\u4FEE\u6539\u6570\u7EC4\u6570\u636E\u6216\u8005\u7ED9\u5BF9\u8C61\u65B0\u589E\u5C5E\u6027\u5E76\u4E0D\u4F1A\u89E6\u53D1\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\uFF0C\u56E0\u4E3A <code>Object.defineProperty</code> \u4E0D\u80FD\u62E6\u622A\u5230\u8FD9\u4E9B\u64CD\u4F5C\uFF0C\u66F4\u7CBE\u786E\u7684\u6765\u8BF4\uFF0C\u5BF9\u4E8E\u6570\u7EC4\u800C\u8A00\uFF0C\u5927\u90E8\u5206\u64CD\u4F5C\u90FD\u662F\u62E6\u622A\u4E0D\u5230\u7684\uFF0C\u53EA\u662F Vue \u5185\u90E8\u901A\u8FC7\u91CD\u5199\u51FD\u6570\u7684\u65B9\u5F0F\u89E3\u51B3\u4E86\u8FD9\u4E2A\u95EE\u9898\u3002</p>
<p>\u5BF9\u4E8E\u7B2C\u4E00\u4E2A\u95EE\u9898\uFF0CVue \u63D0\u4F9B\u4E86\u4E00\u4E2A API \u89E3\u51B3</p>
<pre><code lang="js" class=""><span>export</span> <span><span>function</span> <span>set</span> (<span>target: Array&lt;any&gt; | Object, key: any, val: any</span>): <span>any</span> </span>{
  <span>// \u5224\u65AD\u662F\u5426\u4E3A\u6570\u7EC4\u4E14\u4E0B\u6807\u662F\u5426\u6709\u6548</span>
  <span>if</span> (<span>Array</span>.isArray(target) &amp;&amp; isValidArrayIndex(key)) {
    <span>// \u8C03\u7528 splice \u51FD\u6570\u89E6\u53D1\u6D3E\u53D1\u66F4\u65B0</span>
    <span>// \u8BE5\u51FD\u6570\u5DF2\u88AB\u91CD\u5199</span>
    target.length = <span>Math</span>.max(target.length, key)
    target.splice(key, <span>1</span>, val)
    <span>return</span> val
  }
  <span>// \u5224\u65AD key \u662F\u5426\u5DF2\u7ECF\u5B58\u5728</span>
  <span>if</span> (key <span>in</span> target &amp;&amp; !(key <span>in</span> <span>Object</span>.prototype)) {
    target[key] = val
    <span>return</span> val
  }
  <span>const</span> ob = (target: any).__ob__
  <span>// \u5982\u679C\u5BF9\u8C61\u4E0D\u662F\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u5C31\u8D4B\u503C\u8FD4\u56DE</span>
  <span>if</span> (!ob) {
    target[key] = val
    <span>return</span> val
  }
  <span>// \u8FDB\u884C\u53CC\u5411\u7ED1\u5B9A</span>
  defineReactive(ob.value, key, val)
  <span>// \u624B\u52A8\u6D3E\u53D1\u66F4\u65B0</span>
  ob.dep.notify()
  <span>return</span> val
}
</code></pre><p>\u5BF9\u4E8E\u6570\u7EC4\u800C\u8A00\uFF0CVue \u5185\u90E8\u91CD\u5199\u4E86\u4EE5\u4E0B\u51FD\u6570\u5B9E\u73B0\u6D3E\u53D1\u66F4\u65B0</p>
<pre><code lang="js" class=""><span>// \u83B7\u5F97\u6570\u7EC4\u539F\u578B</span>
<span>const</span> arrayProto = <span>Array</span>.prototype
<span>export</span> <span>const</span> arrayMethods = <span>Object</span>.create(arrayProto)
<span>// \u91CD\u5199\u4EE5\u4E0B\u51FD\u6570</span>
<span>const</span> methodsToPatch = [
  <span>'push'</span>,
  <span>'pop'</span>,
  <span>'shift'</span>,
  <span>'unshift'</span>,
  <span>'splice'</span>,
  <span>'sort'</span>,
  <span>'reverse'</span>
]
methodsToPatch.forEach(<span><span>function</span> (<span>method</span>) </span>{
  <span>// \u7F13\u5B58\u539F\u751F\u51FD\u6570</span>
  <span>const</span> original = arrayProto[method]
  <span>// \u91CD\u5199\u51FD\u6570</span>
  def(arrayMethods, method, <span><span>function</span> <span>mutator</span> (<span>...args</span>) </span>{
  <span>// \u5148\u8C03\u7528\u539F\u751F\u51FD\u6570\u83B7\u5F97\u7ED3\u679C</span>
    <span>const</span> result = original.apply(<span>this</span>, args)
    <span>const</span> ob = <span>this</span>.__ob__
    <span>let</span> inserted
    <span>// \u8C03\u7528\u4EE5\u4E0B\u51E0\u4E2A\u51FD\u6570\u65F6\uFF0C\u76D1\u542C\u65B0\u6570\u636E</span>
    <span>switch</span> (method) {
      <span>case</span> <span>'push'</span>:
      <span>case</span> <span>'unshift'</span>:
        inserted = args
        <span>break</span>
      <span>case</span> <span>'splice'</span>:
        inserted = args.slice(<span>2</span>)
        <span>break</span>
    }
    <span>if</span> (inserted) ob.observeArray(inserted)
    <span>// \u624B\u52A8\u6D3E\u53D1\u66F4\u65B0</span>
    ob.dep.notify()
    <span>return</span> result
  })
})
</code></pre><h2 data-id="heading-3">\u7F16\u8BD1\u8FC7\u7A0B</h2>
<p>\u60F3\u5FC5\u5927\u5BB6\u5728\u4F7F\u7528 Vue \u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u57FA\u672C\u90FD\u662F\u4F7F\u7528\u6A21\u677F\u7684\u65B9\u5F0F\u3002\u90A3\u4E48\u4F60\u6709\u8FC7\u300C\u6A21\u677F\u662F\u600E\u4E48\u5728\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\u7684\u300D\u8FD9\u79CD\u7591\u8651\u561B\uFF1F</p>
<p>\u9996\u5148\u76F4\u63A5\u628A\u6A21\u677F\u4E22\u5230\u6D4F\u89C8\u5668\u4E2D\u80AF\u5B9A\u662F\u4E0D\u80FD\u8FD0\u884C\u7684\uFF0C\u6A21\u677F\u53EA\u662F\u4E3A\u4E86\u65B9\u4FBF\u5F00\u53D1\u8005\u8FDB\u884C\u5F00\u53D1\u3002Vue \u4F1A\u901A\u8FC7\u7F16\u8BD1\u5668\u5C06\u6A21\u677F\u901A\u8FC7\u51E0\u4E2A\u9636\u6BB5\u6700\u7EC8\u7F16\u8BD1\u4E3A <code>render</code> \u51FD\u6570\uFF0C\u7136\u540E\u901A\u8FC7\u6267\u884C <code>render</code> \u51FD\u6570\u751F\u6210 Virtual DOM \u6700\u7EC8\u6620\u5C04\u4E3A\u771F\u5B9E DOM\u3002</p>
<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u6765\u5B66\u4E60\u8FD9\u4E2A\u7F16\u8BD1\u7684\u8FC7\u7A0B\uFF0C\u4E86\u89E3\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\u5927\u6982\u53D1\u751F\u4E86\u4EC0\u4E48\u4E8B\u60C5\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u5176\u4E2D\u53C8\u5206\u4E3A\u4E09\u4E2A\u9636\u6BB5\uFF0C\u5206\u522B\u4E3A\uFF1A</p>
<ol>
<li>\u5C06\u6A21\u677F\u89E3\u6790\u4E3A AST</li>
<li>\u4F18\u5316 AST</li>
<li>\u5C06 AST \u8F6C\u6362\u4E3A <code>render</code> \u51FD\u6570</li>
</ol>
<p>\u5728\u7B2C\u4E00\u4E2A\u9636\u6BB5\u4E2D\uFF0C\u6700\u4E3B\u8981\u7684\u4E8B\u60C5\u8FD8\u662F\u901A\u8FC7\u5404\u79CD\u5404\u6837\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u53BB\u5339\u914D\u6A21\u677F\u4E2D\u7684\u5185\u5BB9\uFF0C\u7136\u540E\u5C06\u5185\u5BB9\u63D0\u53D6\u51FA\u6765\u505A\u5404\u79CD\u903B\u8F91\u64CD\u4F5C\uFF0C\u63A5\u4E0B\u6765\u4F1A\u751F\u6210\u4E00\u4E2A\u6700\u57FA\u672C\u7684 AST \u5BF9\u8C61</p>
<pre><code lang="js" class="">{
    <span>// \u7C7B\u578B</span>
    type: <span>1</span>,
    <span>// \u6807\u7B7E</span>
    tag,
    <span>// \u5C5E\u6027\u5217\u8868</span>
    attrsList: attrs,
    <span>// \u5C5E\u6027\u6620\u5C04</span>
    attrsMap: makeAttrsMap(attrs),
    <span>// \u7236\u8282\u70B9</span>
    parent,
    <span>// \u5B50\u8282\u70B9</span>
    children: []
}
</code></pre><p>\u7136\u540E\u4F1A\u6839\u636E\u8FD9\u4E2A\u6700\u57FA\u672C\u7684 AST \u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\uFF0C\u8FDB\u4E00\u6B65\u6269\u5C55 AST\u3002</p>
<p>\u5F53\u7136\u5728\u8FD9\u4E00\u9636\u6BB5\u4E2D\uFF0C\u8FD8\u4F1A\u8FDB\u884C\u5176\u4ED6\u7684\u4E00\u4E9B\u5224\u65AD\u903B\u8F91\u3002\u6BD4\u5982\u8BF4\u5BF9\u6BD4\u524D\u540E\u5F00\u95ED\u6807\u7B7E\u662F\u5426\u4E00\u81F4\uFF0C\u5224\u65AD\u6839\u7EC4\u4EF6\u662F\u5426\u53EA\u5B58\u5728\u4E00\u4E2A\uFF0C\u5224\u65AD\u662F\u5426\u7B26\u5408 HTML5 <a target="_blank" href="https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FGuide%2FHTML%2FContent_categories" title="https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Content_categories" ref="nofollow noopener noreferrer">Content Model</a> \u89C4\u8303\u7B49\u7B49\u95EE\u9898\u3002</p>
<p>\u63A5\u4E0B\u6765\u5C31\u662F\u4F18\u5316 AST \u7684\u9636\u6BB5\u3002\u5728\u5F53\u524D\u7248\u672C\u4E0B\uFF0CVue \u8FDB\u884C\u7684\u4F18\u5316\u5185\u5BB9\u5176\u5B9E\u8FD8\u662F\u4E0D\u591A\u7684\u3002\u53EA\u662F\u5BF9\u8282\u70B9\u8FDB\u884C\u4E86\u9759\u6001\u5185\u5BB9\u63D0\u53D6\uFF0C\u4E5F\u5C31\u662F\u5C06\u6C38\u8FDC\u4E0D\u4F1A\u53D8\u52A8\u7684\u8282\u70B9\u63D0\u53D6\u4E86\u51FA\u6765\uFF0C\u5B9E\u73B0\u590D\u7528 Virtual DOM\uFF0C\u8DF3\u8FC7\u5BF9\u6BD4\u7B97\u6CD5\u7684\u529F\u80FD\u3002\u5728\u4E0B\u4E00\u4E2A\u5927\u7248\u672C\u4E2D\uFF0CVue \u4F1A\u5728\u4F18\u5316 AST \u7684\u9636\u6BB5\u7EE7\u7EED\u53D1\u529B\uFF0C\u5B9E\u73B0\u66F4\u591A\u7684\u4F18\u5316\u529F\u80FD\uFF0C\u5C3D\u53EF\u80FD\u7684\u5728\u7F16\u8BD1\u9636\u6BB5\u538B\u69A8\u66F4\u591A\u7684\u6027\u80FD\uFF0C\u6BD4\u5982\u8BF4\u63D0\u53D6\u9759\u6001\u7684\u5C5E\u6027\u7B49\u7B49\u4F18\u5316\u884C\u4E3A\u3002</p>
<p>\u6700\u540E\u4E00\u4E2A\u9636\u6BB5\u5C31\u662F\u901A\u8FC7 AST \u751F\u6210 <code>render</code> \u51FD\u6570\u4E86\u3002\u5176\u5B9E\u8FD9\u4E00\u9636\u6BB5\u867D\u7136\u5206\u652F\u6709\u5F88\u591A\uFF0C\u4F46\u662F\u6700\u4E3B\u8981\u7684\u76EE\u7684\u5C31\u662F\u904D\u5386\u6574\u4E2A AST\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u6761\u4EF6\u751F\u6210\u4E0D\u540C\u7684\u4EE3\u7801\u7F62\u4E86\u3002</p>
<h2 data-id="heading-4">NextTick \u539F\u7406\u5206\u6790</h2>
<p><code>nextTick</code> \u53EF\u4EE5\u8BA9\u6211\u4EEC\u5728\u4E0B\u6B21 DOM \u66F4\u65B0\u5FAA\u73AF\u7ED3\u675F\u4E4B\u540E\u6267\u884C\u5EF6\u8FDF\u56DE\u8C03\uFF0C\u7528\u4E8E\u83B7\u5F97\u66F4\u65B0\u540E\u7684 DOM\u3002</p>
<p>\u5728 Vue 2.4 \u4E4B\u524D\u90FD\u662F\u4F7F\u7528\u7684 microtasks\uFF0C\u4F46\u662F microtasks \u7684\u4F18\u5148\u7EA7\u8FC7\u9AD8\uFF0C\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u51FA\u73B0\u6BD4\u4E8B\u4EF6\u5192\u6CE1\u66F4\u5FEB\u7684\u60C5\u51B5\uFF0C\u4F46\u5982\u679C\u90FD\u4F7F\u7528 macrotasks \u53C8\u53EF\u80FD\u4F1A\u51FA\u73B0\u6E32\u67D3\u7684\u6027\u80FD\u95EE\u9898\u3002\u6240\u4EE5\u5728\u65B0\u7248\u672C\u4E2D\uFF0C\u4F1A\u9ED8\u8BA4\u4F7F\u7528 microtasks\uFF0C\u4F46\u5728\u7279\u6B8A\u60C5\u51B5\u4E0B\u4F1A\u4F7F\u7528 macrotasks\uFF0C\u6BD4\u5982 v-on\u3002</p>
<p>\u5BF9\u4E8E\u5B9E\u73B0 macrotasks \uFF0C\u4F1A\u5148\u5224\u65AD\u662F\u5426\u80FD\u4F7F\u7528 <code>setImmediate</code> \uFF0C\u4E0D\u80FD\u7684\u8BDD\u964D\u7EA7\u4E3A <code>MessageChannel</code> \uFF0C\u4EE5\u4E0A\u90FD\u4E0D\u884C\u7684\u8BDD\u5C31\u4F7F\u7528 <code>setTimeout</code></p>
<pre><code lang="js" class=""><span>if</span> (<span>typeof</span> setImmediate !== <span>'undefined'</span> &amp;&amp; isNative(setImmediate)) {
  macroTimerFunc = <span><span>()</span> =&gt;</span> {
    setImmediate(flushCallbacks)
  }
} <span>else</span> <span>if</span> (
  <span>typeof</span> MessageChannel !== <span>'undefined'</span> &amp;&amp;
  (isNative(MessageChannel) ||
    <span>// PhantomJS</span>
    MessageChannel.toString() === <span>'[object MessageChannelConstructor]'</span>)
) {
  <span>const</span> channel = <span>new</span> MessageChannel()
  <span>const</span> port = channel.port2
  channel.port1.onmessage = flushCallbacks
  macroTimerFunc = <span><span>()</span> =&gt;</span> {
    port.postMessage(<span>1</span>)
  }
} <span>else</span> {
  macroTimerFunc = <span><span>()</span> =&gt;</span> {
    setTimeout(flushCallbacks, <span>0</span>)
  }
}
</code></pre><p>\u4EE5\u4E0A\u4EE3\u7801\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u5224\u65AD\u80FD\u4E0D\u80FD\u4F7F\u7528\u76F8\u5E94\u7684 API\u3002</p>
<h2 data-id="heading-5">\u5C0F\u7ED3</h2>
<p>\u4EE5\u4E0A\u5C31\u662F Vue \u7684\u51E0\u4E2A\u9AD8\u9891\u6838\u5FC3\u95EE\u9898\u4E86\uFF0C\u5982\u679C\u4F60\u8FD8\u60F3\u4E86\u89E3\u66F4\u591A\u7684\u6E90\u7801\u76F8\u5173\u7684\u7EC6\u8282\uFF0C\u5F3A\u70C8\u63A8\u8350\u9EC4\u8001\u5E08\u7684 <a target="_blank" href="https://link.juejin.cn?target=https%3A%2F%2Fustbhuangyi.github.io%2Fvue-analysis%2F" title="https://ustbhuangyi.github.io/vue-analysis/" ref="nofollow noopener noreferrer">Vue \u6280\u672F\u63ED\u79D8</a>\u3002</p>
`};export{n as default};
