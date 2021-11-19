var n={name:"React \u5E38\u8003\u57FA\u7840\u77E5\u8BC6\u70B9",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h1 data-id="heading-0">React \u5E38\u8003\u57FA\u7840\u77E5\u8BC6\u70B9</h1>
<p>\u8FD9\u4E00\u7AE0\u8282\u6211\u4EEC\u5C06\u6765\u5B66\u4E60 React \u7684\u4E00\u4E9B\u7ECF\u5E38\u8003\u5230\u7684\u57FA\u7840\u77E5\u8BC6\u70B9\u3002</p>
<h2 data-id="heading-1">\u751F\u547D\u5468\u671F</h2>
<p>\u5728 V16 \u7248\u672C\u4E2D\u5F15\u5165\u4E86 Fiber \u673A\u5236\u3002\u8FD9\u4E2A\u673A\u5236\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u7684\u5F71\u54CD\u4E86\u90E8\u5206\u751F\u547D\u5468\u671F\u7684\u8C03\u7528\uFF0C\u5E76\u4E14\u4E5F\u5F15\u5165\u4E86\u65B0\u7684 2 \u4E2A API \u6765\u89E3\u51B3\u95EE\u9898\uFF0C\u5173\u4E8E Fiber \u7684\u5185\u5BB9\u5C06\u4F1A\u5728\u4E0B\u4E00\u7AE0\u8282\u4E2D\u8BB2\u5230\u3002</p>
<p>\u5728\u4E4B\u524D\u7684\u7248\u672C\u4E2D\uFF0C\u5982\u679C\u4F60\u62E5\u6709\u4E00\u4E2A\u5F88\u590D\u6742\u7684\u590D\u5408\u7EC4\u4EF6\uFF0C\u7136\u540E\u6539\u52A8\u4E86\u6700\u4E0A\u5C42\u7EC4\u4EF6\u7684 <code>state</code>\uFF0C\u90A3\u4E48\u8C03\u7528\u6808\u53EF\u80FD\u4F1A\u5F88\u957F</p>
<p></p><figure><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/25/164358b0310f476c~tplv-t2oaga2asx-watermark.awebp" loading="lazy" class="medium-zoom-image"><figcaption></figcaption></figure><p></p>
<p>\u8C03\u7528\u6808\u8FC7\u957F\uFF0C\u518D\u52A0\u4E0A\u4E2D\u95F4\u8FDB\u884C\u4E86\u590D\u6742\u7684\u64CD\u4F5C\uFF0C\u5C31\u53EF\u80FD\u5BFC\u81F4\u957F\u65F6\u95F4\u963B\u585E\u4E3B\u7EBF\u7A0B\uFF0C\u5E26\u6765\u4E0D\u597D\u7684\u7528\u6237\u4F53\u9A8C\u3002Fiber \u5C31\u662F\u4E3A\u4E86\u89E3\u51B3\u8BE5\u95EE\u9898\u800C\u751F\u3002</p>
<p>Fiber \u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u865A\u62DF\u7684\u5806\u6808\u5E27\uFF0C\u65B0\u7684\u8C03\u5EA6\u5668\u4F1A\u6309\u7167\u4F18\u5148\u7EA7\u81EA\u7531\u8C03\u5EA6\u8FD9\u4E9B\u5E27\uFF0C\u4ECE\u800C\u5C06\u4E4B\u524D\u7684\u540C\u6B65\u6E32\u67D3\u6539\u6210\u4E86\u5F02\u6B65\u6E32\u67D3\uFF0C\u5728\u4E0D\u5F71\u54CD\u4F53\u9A8C\u7684\u60C5\u51B5\u4E0B\u53BB\u5206\u6BB5\u8BA1\u7B97\u66F4\u65B0\u3002</p>
<p></p><figure><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/25/164358f89595d56f~tplv-t2oaga2asx-watermark.awebp" loading="lazy" class="medium-zoom-image"><figcaption></figcaption></figure><p></p>
<p>\u5BF9\u4E8E\u5982\u4F55\u533A\u522B\u4F18\u5148\u7EA7\uFF0CReact \u6709\u81EA\u5DF1\u7684\u4E00\u5957\u903B\u8F91\u3002\u5BF9\u4E8E\u52A8\u753B\u8FD9\u79CD\u5B9E\u65F6\u6027\u5F88\u9AD8\u7684\u4E1C\u897F\uFF0C\u4E5F\u5C31\u662F 16 ms \u5FC5\u987B\u6E32\u67D3\u4E00\u6B21\u4FDD\u8BC1\u4E0D\u5361\u987F\u7684\u60C5\u51B5\u4E0B\uFF0CReact \u4F1A\u6BCF 16 ms\uFF08\u4EE5\u5185\uFF09 \u6682\u505C\u4E00\u4E0B\u66F4\u65B0\uFF0C\u8FD4\u56DE\u6765\u7EE7\u7EED\u6E32\u67D3\u52A8\u753B\u3002</p>
<p>\u5BF9\u4E8E\u5F02\u6B65\u6E32\u67D3\uFF0C\u73B0\u5728\u6E32\u67D3\u6709\u4E24\u4E2A\u9636\u6BB5\uFF1A<code>reconciliation</code> \u548C <code>commit</code> \u3002\u524D\u8005\u8FC7\u7A0B\u662F\u53EF\u4EE5\u6253\u65AD\u7684\uFF0C\u540E\u8005\u4E0D\u80FD\u6682\u505C\uFF0C\u4F1A\u4E00\u76F4\u66F4\u65B0\u754C\u9762\u76F4\u5230\u5B8C\u6210\u3002</p>
<p><strong>Reconciliation</strong> \u9636\u6BB5</p>
<ul>
<li><code>componentWillMount</code></li>
<li><code>componentWillReceiveProps</code></li>
<li><code>shouldComponentUpdate</code></li>
<li><code>componentWillUpdate</code></li>
</ul>
<p><strong>Commit</strong> \u9636\u6BB5</p>
<ul>
<li><code>componentDidMount</code></li>
<li><code>componentDidUpdate</code></li>
<li><code>componentWillUnmount</code></li>
</ul>
<p>\u56E0\u4E3A Reconciliation \u9636\u6BB5\u662F\u53EF\u4EE5\u88AB\u6253\u65AD\u7684\uFF0C\u6240\u4EE5 Reconciliation \u9636\u6BB5\u4F1A\u6267\u884C\u7684\u751F\u547D\u5468\u671F\u51FD\u6570\u5C31\u53EF\u80FD\u4F1A\u51FA\u73B0\u8C03\u7528\u591A\u6B21\u7684\u60C5\u51B5\uFF0C\u4ECE\u800C\u5F15\u8D77 Bug\u3002\u7531\u6B64\u5BF9\u4E8E Reconciliation \u9636\u6BB5\u8C03\u7528\u7684\u51E0\u4E2A\u51FD\u6570\uFF0C\u9664\u4E86 <code>shouldComponentUpdate</code> \u4EE5\u5916\uFF0C\u5176\u4ED6\u90FD\u5E94\u8BE5\u907F\u514D\u53BB\u4F7F\u7528\uFF0C\u5E76\u4E14 V16 \u4E2D\u4E5F\u5F15\u5165\u4E86\u65B0\u7684 API \u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002</p>
<p><code>getDerivedStateFromProps</code> \u7528\u4E8E\u66FF\u6362 <code>componentWillReceiveProps</code> \uFF0C\u8BE5\u51FD\u6570\u4F1A\u5728\u521D\u59CB\u5316\u548C <code>update</code> \u65F6\u88AB\u8C03\u7528</p>
<pre><code lang="js" class=""><span><span>class</span> <span>ExampleComponent</span> <span>extends</span> <span>React</span>.<span>Component</span> </span>{
  <span>// Initialize state in constructor,</span>
  <span>// Or with a property initializer.</span>
  state = {};

  <span>static</span> getDerivedStateFromProps(nextProps, prevState) {
    <span>if</span> (prevState.someMirroredValue !== nextProps.someValue) {
      <span>return</span> {
        <span>derivedData</span>: computeDerivedState(nextProps),
        <span>someMirroredValue</span>: nextProps.someValue
      };
    }

    <span>// Return null to indicate no change to state.</span>
    <span>return</span> <span>null</span>;
  }
}
</code></pre><p><code>getSnapshotBeforeUpdate</code> \u7528\u4E8E\u66FF\u6362 <code>componentWillUpdate</code> \uFF0C\u8BE5\u51FD\u6570\u4F1A\u5728 <code>update</code> \u540E DOM \u66F4\u65B0\u524D\u88AB\u8C03\u7528\uFF0C\u7528\u4E8E\u8BFB\u53D6\u6700\u65B0\u7684 DOM \u6570\u636E\u3002</p>
<h2 data-id="heading-2">setState</h2>
<p><code>setState</code> \u5728 React \u4E2D\u662F\u7ECF\u5E38\u4F7F\u7528\u7684\u4E00\u4E2A API\uFF0C\u4F46\u662F\u5B83\u5B58\u5728\u4E00\u4E9B\u7684\u95EE\u9898\u7ECF\u5E38\u4F1A\u5BFC\u81F4\u521D\u5B66\u8005\u51FA\u9519\uFF0C\u6838\u5FC3\u539F\u56E0\u5C31\u662F\u56E0\u4E3A\u8FD9\u4E2A API \u662F\u5F02\u6B65\u7684\u3002</p>
<p>\u9996\u5148 <code>setState</code> \u7684\u8C03\u7528\u5E76\u4E0D\u4F1A\u9A6C\u4E0A\u5F15\u8D77 <code>state</code> \u7684\u6539\u53D8\uFF0C\u5E76\u4E14\u5982\u679C\u4F60\u4E00\u6B21\u8C03\u7528\u4E86\u591A\u4E2A <code>setState</code> \uFF0C\u90A3\u4E48\u7ED3\u679C\u53EF\u80FD\u5E76\u4E0D\u5982\u4F60\u671F\u5F85\u7684\u4E00\u6837\u3002</p>
<pre><code lang="js" class="">handle() {
  <span>// \u521D\u59CB\u5316 \`count\` \u4E3A 0</span>
  <span>console</span>.log(<span>this</span>.state.count) <span>// -&gt; 0</span>
  <span>this</span>.setState({ <span>count</span>: <span>this</span>.state.count + <span>1</span> })
  <span>this</span>.setState({ <span>count</span>: <span>this</span>.state.count + <span>1</span> })
  <span>this</span>.setState({ <span>count</span>: <span>this</span>.state.count + <span>1</span> })
  <span>console</span>.log(<span>this</span>.state.count) <span>// -&gt; 0</span>
}
</code></pre><p>\u7B2C\u4E00\uFF0C\u4E24\u6B21\u7684\u6253\u5370\u90FD\u4E3A 0\uFF0C\u56E0\u4E3A <code>setState</code> \u662F\u4E2A\u5F02\u6B65 API\uFF0C\u53EA\u6709\u540C\u6B65\u4EE3\u7801\u8FD0\u884C\u5B8C\u6BD5\u624D\u4F1A\u6267\u884C\u3002<code>setState</code> \u5F02\u6B65\u7684\u539F\u56E0\u6211\u8BA4\u4E3A\u5728\u4E8E\uFF0C<code>setState</code> \u53EF\u80FD\u4F1A\u5BFC\u81F4 DOM \u7684\u91CD\u7ED8\uFF0C\u5982\u679C\u8C03\u7528\u4E00\u6B21\u5C31\u9A6C\u4E0A\u53BB\u8FDB\u884C\u91CD\u7ED8\uFF0C\u90A3\u4E48\u8C03\u7528\u591A\u6B21\u5C31\u4F1A\u9020\u6210\u4E0D\u5FC5\u8981\u7684\u6027\u80FD\u635F\u5931\u3002\u8BBE\u8BA1\u6210\u5F02\u6B65\u7684\u8BDD\uFF0C\u5C31\u53EF\u4EE5\u5C06\u591A\u6B21\u8C03\u7528\u653E\u5165\u4E00\u4E2A\u961F\u5217\u4E2D\uFF0C\u5728\u6070\u5F53\u7684\u65F6\u5019\u7EDF\u4E00\u8FDB\u884C\u66F4\u65B0\u8FC7\u7A0B\u3002</p>
<p>\u7B2C\u4E8C\uFF0C\u867D\u7136\u8C03\u7528\u4E86\u4E09\u6B21 <code>setState</code> \uFF0C\u4F46\u662F <code>count</code> \u7684\u503C\u8FD8\u662F\u4E3A 1\u3002\u56E0\u4E3A\u591A\u6B21\u8C03\u7528\u4F1A\u5408\u5E76\u4E3A\u4E00\u6B21\uFF0C\u53EA\u6709\u5F53\u66F4\u65B0\u7ED3\u675F\u540E <code>state</code> \u624D\u4F1A\u6539\u53D8\uFF0C\u4E09\u6B21\u8C03\u7528\u7B49\u540C\u4E8E\u5982\u4E0B\u4EE3\u7801</p>
<pre><code lang="js" class=""><span>Object</span>.assign(  
  {},
  { <span>count</span>: <span>this</span>.state.count + <span>1</span> },
  { <span>count</span>: <span>this</span>.state.count + <span>1</span> },
  { <span>count</span>: <span>this</span>.state.count + <span>1</span> },
)w
</code></pre><p>\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5B9E\u73B0\u8C03\u7528\u4E09\u6B21 <code>setState</code> \u4F7F\u5F97 <code>count</code> \u4E3A 3</p>
<pre><code lang="js" class="">handle() {
  <span>this</span>.setState(<span>(<span>prevState</span>) =&gt;</span> ({ <span>count</span>: prevState.count + <span>1</span> }))
  <span>this</span>.setState(<span>(<span>prevState</span>) =&gt;</span> ({ <span>count</span>: prevState.count + <span>1</span> }))
  <span>this</span>.setState(<span>(<span>prevState</span>) =&gt;</span> ({ <span>count</span>: prevState.count + <span>1</span> }))
}
</code></pre><p>\u5982\u679C\u4F60\u60F3\u5728\u6BCF\u6B21\u8C03\u7528 <code>setState</code> \u540E\u83B7\u5F97\u6B63\u786E\u7684 <code>state</code> \uFF0C\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u4EE3\u7801\u5B9E\u73B0</p>
<pre><code lang="js" class="">handle() {
    <span>this</span>.setState(<span>(<span>prevState</span>) =&gt;</span> ({ <span>count</span>: prevState.count + <span>1</span> }), () =&gt; {
        <span>console</span>.log(<span>this</span>.state)
    })
}
</code></pre><h2 data-id="heading-3">\u6027\u80FD\u4F18\u5316</h2>
<p>\u8FD9\u5C0F\u8282\u5185\u5BB9\u96C6\u4E2D\u5728\u7EC4\u4EF6\u7684\u6027\u80FD\u4F18\u5316\u4E0A\uFF0C\u8FD9\u4E00\u65B9\u9762\u7684\u6027\u80FD\u4F18\u5316\u4E5F\u57FA\u672C\u96C6\u4E2D\u5728 <code>shouldComponentUpdate</code> \u8FD9\u4E2A\u94A9\u5B50\u51FD\u6570\u4E0A\u505A\u6587\u7AE0\u3002</p>
<blockquote><p>PS\uFF1A\u4E0B\u6587\u4E2D\u7684 state \u6307\u4EE3\u4E86 state \u53CA props
</p></blockquote><p>\u5728 <code>shouldComponentUpdate</code> \u51FD\u6570\u4E2D\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8FD4\u56DE\u5E03\u5C14\u503C\u6765\u51B3\u5B9A\u5F53\u524D\u7EC4\u4EF6\u662F\u5426\u9700\u8981\u66F4\u65B0\u3002\u8FD9\u5C42\u4EE3\u7801\u903B\u8F91\u53EF\u4EE5\u662F\u7B80\u5355\u5730\u6D45\u6BD4\u8F83\u4E00\u4E0B\u5F53\u524D <code>state</code> \u548C\u4E4B\u524D\u7684 <code>state</code> \u662F\u5426\u76F8\u540C\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5224\u65AD\u67D0\u4E2A\u503C\u66F4\u65B0\u4E86\u624D\u89E6\u53D1\u7EC4\u4EF6\u66F4\u65B0\u3002\u4E00\u822C\u6765\u8BF4\u4E0D\u63A8\u8350\u5B8C\u6574\u5730\u5BF9\u6BD4\u5F53\u524D <code>state</code> \u548C\u4E4B\u524D\u7684 <code>state</code> \u662F\u5426\u76F8\u540C\uFF0C\u56E0\u4E3A\u7EC4\u4EF6\u66F4\u65B0\u89E6\u53D1\u53EF\u80FD\u4F1A\u5F88\u9891\u7E41\uFF0C\u8FD9\u6837\u7684\u5B8C\u6574\u5BF9\u6BD4\u6027\u80FD\u5F00\u9500\u4F1A\u6709\u70B9\u5927\uFF0C\u53EF\u80FD\u4F1A\u9020\u6210\u5F97\u4E0D\u507F\u5931\u7684\u60C5\u51B5\u3002</p>
<p>\u5F53\u7136\u5982\u679C\u771F\u7684\u60F3\u5B8C\u6574\u5BF9\u6BD4\u5F53\u524D <code>state</code> \u548C\u4E4B\u524D\u7684 <code>state</code> \u662F\u5426\u76F8\u540C\uFF0C\u5E76\u4E14\u4E0D\u5F71\u54CD\u6027\u80FD\u4E5F\u662F\u884C\u5F97\u901A\u7684\uFF0C\u53EF\u4EE5\u901A\u8FC7 immutable \u6216\u8005 immer \u8FD9\u4E9B\u5E93\u6765\u751F\u6210\u4E0D\u53EF\u53D8\u5BF9\u8C61\u3002\u8FD9\u7C7B\u5E93\u5BF9\u4E8E\u64CD\u4F5C\u5927\u89C4\u6A21\u7684\u6570\u636E\u6765\u8BF4\u4F1A\u63D0\u5347\u4E0D\u9519\u7684\u6027\u80FD\uFF0C\u5E76\u4E14\u4E00\u65E6\u6539\u53D8\u6570\u636E\u5C31\u4F1A\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u5BF9\u6BD4\u524D\u540E <code>state</code> \u662F\u5426\u4E00\u81F4\u4E5F\u5C31\u65B9\u4FBF\u591A\u4E86\uFF0C\u540C\u65F6\u4E5F\u5F88\u63A8\u8350\u9605\u8BFB\u4E0B immer \u7684\u6E90\u7801\u5B9E\u73B0\u3002</p>
<p>\u53E6\u5916\u5982\u679C\u53EA\u662F\u5355\u7EAF\u7684\u6D45\u6BD4\u8F83\u4E00\u4E0B\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 <code>PureComponent</code>\uFF0C\u5E95\u5C42\u5C31\u662F\u5B9E\u73B0\u4E86\u6D45\u6BD4\u8F83 <code>state</code>\u3002</p>
<pre><code lang="js" class=""><span><span>class</span> <span>Test</span> <span>extends</span> <span>React</span>.<span>PureComponent</span> </span>{
  render() {
    <span>return</span> (
      <span><span>&lt;<span>div</span>&gt;</span>
        PureComponent
      <span>&lt;/<span>div</span>&gt;</span></span>
    )
  }
}
</code></pre><p>\u8FD9\u65F6\u5019\u4F60\u53EF\u80FD\u4F1A\u8003\u8651\u5230\u51FD\u6570\u7EC4\u4EF6\u5C31\u4E0D\u80FD\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u4E86\uFF0C\u5982\u679C\u4F60\u4F7F\u7528 16.6.0 \u4E4B\u540E\u7684\u7248\u672C\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>React.memo</code> \u6765\u5B9E\u73B0\u76F8\u540C\u7684\u529F\u80FD\u3002</p>
<pre><code lang="js" class=""><span>const</span> Test = React.memo(<span><span>()</span> =&gt;</span> (
    <span><span>&lt;<span>div</span>&gt;</span>
        PureComponent
    <span>&lt;/<span>div</span>&gt;</span></span>
))
</code></pre><p>\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u6211\u4EEC\u5C31\u53EF\u4EE5\u65E2\u5B9E\u73B0\u4E86 <code>shouldComponentUpdate</code> \u7684\u6D45\u6BD4\u8F83\uFF0C\u53C8\u80FD\u591F\u4F7F\u7528\u51FD\u6570\u7EC4\u4EF6\u3002</p>
<h2 data-id="heading-4">\u901A\u4FE1</h2>
<p>\u5176\u5B9E React \u4E2D\u7684\u7EC4\u4EF6\u901A\u4FE1\u57FA\u672C\u548C Vue \u4E2D\u7684\u4E00\u81F4\u3002\u540C\u6837\u4E5F\u5206\u4E3A\u4EE5\u4E0B\u4E09\u79CD\u60C5\u51B5\uFF1A</p>
<ul>
<li>\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1</li>
<li>\u5144\u5F1F\u7EC4\u4EF6\u901A\u4FE1</li>
<li>\u8DE8\u591A\u5C42\u7EA7\u7EC4\u4EF6\u901A\u4FE1</li>
<li>\u4EFB\u610F\u7EC4\u4EF6</li>
</ul>
<h3 data-id="heading-5">\u7236\u5B50\u901A\u4FE1</h3>
<p>\u7236\u7EC4\u4EF6\u901A\u8FC7 <code>props</code> \u4F20\u9012\u6570\u636E\u7ED9\u5B50\u7EC4\u4EF6\uFF0C\u5B50\u7EC4\u4EF6\u901A\u8FC7\u8C03\u7528\u7236\u7EC4\u4EF6\u4F20\u6765\u7684\u51FD\u6570\u4F20\u9012\u6570\u636E\u7ED9\u7236\u7EC4\u4EF6\uFF0C\u8FD9\u4E24\u79CD\u65B9\u5F0F\u662F\u6700\u5E38\u7528\u7684\u7236\u5B50\u901A\u4FE1\u5B9E\u73B0\u529E\u6CD5\u3002</p>
<p>\u8FD9\u79CD\u7236\u5B50\u901A\u4FE1\u65B9\u5F0F\u4E5F\u5C31\u662F\u5178\u578B\u7684\u5355\u5411\u6570\u636E\u6D41\uFF0C\u7236\u7EC4\u4EF6\u901A\u8FC7 <code>props</code> \u4F20\u9012\u6570\u636E\uFF0C\u5B50\u7EC4\u4EF6\u4E0D\u80FD\u76F4\u63A5\u4FEE\u6539 <code>props</code>\uFF0C \u800C\u662F\u5FC5\u987B\u901A\u8FC7\u8C03\u7528\u7236\u7EC4\u4EF6\u51FD\u6570\u7684\u65B9\u5F0F\u544A\u77E5\u7236\u7EC4\u4EF6\u4FEE\u6539\u6570\u636E\u3002</p>
<h3 data-id="heading-6">\u5144\u5F1F\u7EC4\u4EF6\u901A\u4FE1</h3>
<p>\u5BF9\u4E8E\u8FD9\u79CD\u60C5\u51B5\u53EF\u4EE5\u901A\u8FC7\u5171\u540C\u7684\u7236\u7EC4\u4EF6\u6765\u7BA1\u7406\u72B6\u6001\u548C\u4E8B\u4EF6\u51FD\u6570\u3002\u6BD4\u5982\u8BF4\u5176\u4E2D\u4E00\u4E2A\u5144\u5F1F\u7EC4\u4EF6\u8C03\u7528\u7236\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u4E8B\u4EF6\u51FD\u6570\u4FEE\u6539\u7236\u7EC4\u4EF6\u4E2D\u7684\u72B6\u6001\uFF0C\u7136\u540E\u7236\u7EC4\u4EF6\u5C06\u72B6\u6001\u4F20\u9012\u7ED9\u53E6\u4E00\u4E2A\u5144\u5F1F\u7EC4\u4EF6\u3002</p>
<h3 data-id="heading-7">\u8DE8\u591A\u5C42\u6B21\u7EC4\u4EF6\u901A\u4FE1</h3>
<p>\u5982\u679C\u4F60\u4F7F\u7528 16.3 \u4EE5\u4E0A\u7248\u672C\u7684\u8BDD\uFF0C\u5BF9\u4E8E\u8FD9\u79CD\u60C5\u51B5\u53EF\u4EE5\u4F7F\u7528 Context API\u3002</p>
<pre><code lang="js" class=""><span>// \u521B\u5EFA Context\uFF0C\u53EF\u4EE5\u5728\u5F00\u59CB\u5C31\u4F20\u5165\u503C</span>
<span>const</span> StateContext = React.createContext()
<span><span>class</span> <span>Parent</span> <span>extends</span> <span>React</span>.<span>Component</span> </span>{
  render () {
    <span>return</span> (
      <span>// value \u5C31\u662F\u4F20\u5165 Context \u4E2D\u7684\u503C</span>
      &lt;StateContext.Provider value=<span>'yck'</span>&gt;
        &lt;Child /&gt;
      &lt;/StateContext.Provider&gt;
    )
  }
}
class Child extends React.Component {
  render () {
    return (
      &lt;ThemeContext.Consumer&gt;
        // \u53D6\u51FA\u503C
        {context =&gt; (
          name is { context }
        )}
      &lt;/ThemeContext.Consumer&gt;
    );
  }
}
</code></pre><h3 data-id="heading-8">\u4EFB\u610F\u7EC4\u4EF6</h3>
<p>\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u901A\u8FC7 Redux \u6216\u8005 Event Bus \u89E3\u51B3\uFF0C\u53E6\u5916\u5982\u679C\u4F60\u4E0D\u6015\u9EBB\u70E6\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u89E3\u51B3\u4E0A\u8FF0\u6240\u6709\u7684\u901A\u4FE1\u60C5\u51B5</p>
<h2 data-id="heading-9">\u5C0F\u7ED3</h2>
<p>\u603B\u7684\u6765\u8BF4\u8FD9\u4E00\u7AE0\u8282\u7684\u5185\u5BB9\u66F4\u591A\u7684\u504F\u5411\u4E8E React \u7684\u57FA\u7840\uFF0C\u53E6\u5916 React \u7684\u9762\u8BD5\u9898\u8FD8\u4F1A\u7ECF\u5E38\u8003\u5230 Virtual DOM \u4E2D\u7684\u5185\u5BB9\uFF0C\u6240\u4EE5\u8FD9\u5757\u5185\u5BB9\u5927\u5BB6\u4E5F\u9700\u8981\u597D\u597D\u51C6\u5907\u3002</p>
<p>\u4E0B\u4E00\u7AE0\u8282\u6211\u4EEC\u5C06\u6765\u4E86\u89E3\u4E00\u4E9B React \u7684\u8FDB\u9636\u77E5\u8BC6\u5185\u5BB9\u3002</p>
`};export{n as default};
