var n={name:"7\u3001traverse \u7684 visitor \u548C path",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>\u6E90\u7801 parse \u6210 AST \u4E4B\u540E\uFF0C\u9700\u8981\u8FDB\u884C AST \u7684\u904D\u5386\u548C\u589E\u5220\u6539\uFF08transform\uFF09\u3002\u90A3\u4E48 transform \u7684\u6D41\u7A0B\u662F\u4EC0\u4E48\u6837\u7684\uFF1F</p>
<p>babel \u4F1A\u9012\u5F52\u904D\u5386 AST\uFF0C\u904D\u5386\u8FC7\u7A0B\u4E2D\u5904\u7406\u5230\u4E0D\u540C\u7684 AST \u4F1A\u8C03\u7528\u4E0D\u540C\u7684 visitor \u51FD\u6570\u6765\u5B9E\u73B0 transform\u3002\u8FD9\u662F visitor \u6A21\u5F0F\u7684\u5E94\u7528\u3002</p>
<h2 data-id="heading-0">visitor\u6A21\u5F0F</h2>
<p>visitor \u6A21\u5F0F\uFF08\u8BBF\u95EE\u8005\u6A21\u5F0F\uFF09\u662F 23 \u79CD\u7ECF\u5178\u8BBE\u8BA1\u6A21\u5F0F\u4E2D\u7684\u4E00\u79CD\u3002\u5F53\u88AB\u64CD\u4F5C\u7684\u5BF9\u8C61\u7ED3\u6784\u6BD4\u8F83\u7A33\u5B9A\uFF0C\u800C\u64CD\u4F5C\u5BF9\u8C61\u7684\u903B\u8F91\u7ECF\u5E38\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u901A\u8FC7\u5206\u79BB\u903B\u8F91\u548C\u5BF9\u8C61\u7ED3\u6784\uFF0C\u4F7F\u5F97\u4ED6\u4EEC\u80FD\u72EC\u7ACB\u6269\u5C55\u3002\u8FD9\u5C31\u662F visitor \u6A21\u5F0F\u7684\u601D\u60F3\u3002</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3a89899432b549d198a98f404e791a97~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png" loading="lazy" class="medium-zoom-image"></p>
<p>\u5982\u56FE\uFF0CElement \u548C Visitor \u5206\u522B\u4EE3\u8868\u5BF9\u8C61\u7ED3\u6784\u548C\u64CD\u4F5C\u903B\u8F91\uFF0C\u4E24\u8005\u53EF\u4EE5\u72EC\u7ACB\u6269\u5C55\uFF0C\u5728 Client \u91CC\u9762\u6765\u7EC4\u5408\u4E24\u8005\uFF0C\u4F7F\u7528 visitor \u64CD\u4F5C element\u3002\u8FD9\u5C31\u662F visitor \u6A21\u5F0F\u3002</p>
<p>\u5BF9\u5E94\u5230 babel traverse \u7684\u5B9E\u73B0\uFF0C\u5C31\u662F AST \u548C visitor \u5206\u79BB\uFF0C\u5728 traverse\uFF08\u904D\u5386\uFF09AST \u7684\u65F6\u5019\uFF0C\u8C03\u7528\u6CE8\u518C\u7684 visitor \u6765\u5BF9\u5176\u8FDB\u884C\u5904\u7406\u3002</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c592dedef6ff429ebbcb350e0afa404d~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png" loading="lazy" class="medium-zoom-image"></p>
<p>\u8FD9\u6837\u4F7F\u5F97 AST \u7684\u7ED3\u6784\u548C\u904D\u5386\u7B97\u6CD5\u56FA\u5B9A\uFF0Cvisitor \u53EF\u4EE5\u901A\u8FC7\u63D2\u4EF6\u72EC\u7ACB\u6269\u5C55\u3002</p>
<h2 data-id="heading-1">\u8DEF\u5F84\u548C\u4F5C\u7528\u57DF</h2>
<p>babel AST \u4E2D\u53EA\u5305\u542B\u6E90\u7801\u7684\u4E00\u4E9B\u4FE1\u606F\uFF0C\u4F46\u662F\u64CD\u4F5C AST \u65F6\u8981\u62FF\u5230\u7236\u8282\u70B9\u7684\u4FE1\u606F\uFF0C\u5E76\u4E14\u4E5F\u9700\u8981\u5BF9 AST \u589E\u5220\u6539\u7684\u65B9\u6CD5\uFF0C\u8FD9\u4E9B\u90FD\u5728 path \u5BF9\u8C61\u91CC\u3002</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/293327a616cc4c90b7fa40c7e28761a0~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png" loading="lazy" class="medium-zoom-image"></p>
<p>babel \u4F1A\u5728 traverse \u7684\u8FC7\u7A0B\u4E2D\u5728 path \u91CC\u7EF4\u62A4\u8282\u70B9\u7684\u7236\u8282\u70B9\u5F15\u7528\uFF0C\u5728\u5176\u4E2D\u4FDD\u5B58 scope\uFF08\u4F5C\u7528\u57DF\uFF09\u7684\u4FE1\u606F\uFF0C\u540C\u65F6\u4E5F\u4F1A\u63D0\u4F9B\u589E\u5220\u6539 AST \u7684\u65B9\u6CD5\u3002</p>
<h3 data-id="heading-2">path \u7684\u5C5E\u6027</h3>
<p>path \u5927\u6982\u6709\u8FD9\u4E9B\u5C5E\u6027\u548C\u65B9\u6CD5</p>
<pre><code class="hljs language-javascript" lang="javascript">path {
    <span class="hljs-comment">// \u5C5E\u6027\uFF1A</span>
    node 
    parent
    parentPath
    scope
    hub
    container
    key
    listKey
    
    <span class="hljs-comment">// \u65B9\u6CD5</span>
    get(key) 
    set(key, node)
    inList()
    getSibling(key) 
    getNextSibling()
    getPrevSibling()
    getAllPrevSiblings()
    getAllNextSiblings()
    isXxx(opts)
    assertXxx(opts)
    find(callback)
    findParent(callback)
    
    insertBefore(nodes)
    insertAfter(nodes)
    replaceWith(replacement)
    replaceWithMultiple(nodes)
    replaceWithSourceString(replacement)
    remove()
    
    traverse(visitor, state)
    skip()
    stop()
}
</code></pre>
<p>\u5B83\u4EEC\u5404\u81EA\u7684\u542B\u4E49\uFF1A</p>
<ul>
<li>path.node \u5F53\u524D AST \u8282\u70B9</li>
<li>path.parent \u7236 AST \u8282\u70B9</li>
<li>path.parentPath \u7236 AST \u8282\u70B9\u7684 path</li>
<li>path.scope \u4F5C\u7528\u57DF\uFF0C\u89C1\u4E0B\u6587\u8BE6\u89E3</li>
<li>path.hub \u53EF\u4EE5\u901A\u8FC7 path.hub.file \u62FF\u5230\u6700\u5916\u5C42 File \u5BF9\u8C61\uFF0C path.hub.getScope \u62FF\u5230\u6700\u5916\u5C42\u4F5C\u7528\u57DF\uFF0Cpath.hub.getCode \u62FF\u5230\u6E90\u7801\u5B57\u7B26\u4E32</li>
<li>path.container \u5F53\u524D AST \u8282\u70B9\u6240\u5728\u7684\u7236\u8282\u70B9\u5C5E\u6027\u7684\u5C5E\u6027\u503C</li>
<li>path.key \u5F53\u524D AST \u8282\u70B9\u6240\u5728\u7236\u8282\u70B9\u5C5E\u6027\u7684\u5C5E\u6027\u540D\u6216\u6240\u5728\u6570\u7EC4\u7684\u4E0B\u6807</li>
<li>path.listkey \u5F53\u524D AST \u8282\u70B9\u6240\u5728\u7236\u8282\u70B9\u5C5E\u6027\u7684\u5C5E\u6027\u503C\u4E3A\u6570\u7EC4\u65F6 listkey \u4E3A\u8BE5\u5C5E\u6027\u540D\uFF0C\u5426\u5219\u4E3A undefined</li>
</ul>
<h4 data-id="heading-3">container\u3001listkey\u3001key\uFF08\u4E0D\u5E38\u7528\uFF0C\u53EF\u7565\u8FC7\uFF09</h4>
<p>container\u3001listkey\u3001key \u8FD9\u4E09\u4E2A\u5C5E\u6027\u6709\u70B9\u7ED5\uFF08\u4E5F\u4E0D\u592A\u5E38\u7528\uFF0C\u53EF\u4EE5\u8DF3\u8FC7\uFF0C\u540E\u9762\u5B9E\u73B0\u624B\u5199 babel  \u7684\u65F6\u5019\u624D\u4F1A\u7528\u5230\uFF09\uFF0C\u89E3\u91CA\u4E00\u4E0B\uFF1A</p>
<p>\u56E0\u4E3A AST \u8282\u70B9\u8981\u6302\u5728\u7236 AST \u8282\u70B9\u7684\u67D0\u4E2A\u5C5E\u6027\u4E0A\uFF0C\u90A3\u4E2A\u5C5E\u6027\u7684\u5C5E\u6027\u503C\u5C31\u662F\u8FD9\u4E2A AST \u8282\u70B9\u7684 container\u3002</p>
<p>\u6BD4\u5982 CallExpression \u6709 callee \u548C arguments \u5C5E\u6027\uFF0C\u90A3\u4E48\u5BF9\u4E8E callee \u7684 AST \u8282\u70B9\u6765\u8BF4\uFF0Ccallee \u7684\u5C5E\u6027\u503C\u5C31\u662F\u5B83\u7684 container\uFF0C\u800C callee \u5C31\u662F\u5B83\u7684 key\u3002</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ce55f6c749d4e35ad6460de6f5be71a~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u800C BlockStatement \u6709 body \u5C5E\u6027\uFF0C\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5BF9\u4E8E\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u4E2A AST \u6765\u8BF4\uFF0C\u8FD9\u4E2A\u6570\u7EC4\u5C31\u662F\u5B83\u4EEC\u7684 container\uFF0C\u800C listKey \u662F body\uFF0Ckey \u5219\u662F\u4E0B\u6807\u3002</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b48a0cdddb4344d1b9343e04818460ad~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<h3 data-id="heading-4">path \u7684\u65B9\u6CD5</h3>
<p>path \u6709\u5982\u4E0B\u65B9\u6CD5</p>
<ul>
<li>inList() \u5224\u65AD\u8282\u70B9\u662F\u5426\u5728\u6570\u7EC4\u4E2D\uFF0C\u5982\u679C container \u4E3A\u6570\u7EC4\uFF0C\u4E5F\u5C31\u662F\u6709 listkey \u7684\u65F6\u5019\uFF0C\u8FD4\u56DE true</li>
<li>get(key) \u83B7\u53D6\u67D0\u4E2A\u5C5E\u6027\u7684 path</li>
<li>set(key, node) \u8BBE\u7F6E\u67D0\u4E2A\u5C5E\u6027\u7684\u503C</li>
<li>getSibling(key) \u83B7\u53D6\u67D0\u4E2A\u4E0B\u6807\u7684\u5144\u5F1F\u8282\u70B9</li>
<li>getNextSibling() \u83B7\u53D6\u4E0B\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9</li>
<li>getPrevSibling() \u83B7\u53D6\u4E0A\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9</li>
<li>getAllPrevSiblings() \u83B7\u53D6\u4E4B\u524D\u7684\u6240\u6709\u5144\u5F1F\u8282\u70B9</li>
<li>getAllNextSiblings() \u83B7\u53D6\u4E4B\u540E\u7684\u6240\u6709\u5144\u5F1F\u8282\u70B9</li>
<li>find(callback) \u4ECE\u5F53\u524D\u8282\u70B9\u5230\u6839\u8282\u70B9\u6765\u67E5\u627E\u8282\u70B9\uFF08\u5305\u62EC\u5F53\u524D\u8282\u70B9\uFF09\uFF0C\u8C03\u7528 callback\uFF08\u4F20\u5165 path\uFF09\u6765\u51B3\u5B9A\u662F\u5426\u7EC8\u6B62\u67E5\u627E</li>
<li>findParent(callback) \u4ECE\u5F53\u524D\u8282\u70B9\u5230\u6839\u8282\u70B9\u6765\u67E5\u627E\u8282\u70B9\uFF08\u4E0D\u5305\u62EC\u5F53\u524D\u8282\u70B9\uFF09\uFF0C\u8C03\u7528 callback\uFF08\u4F20\u5165 path\uFF09\u6765\u51B3\u5B9A\u662F\u5426\u7EC8\u6B62\u67E5\u627E</li>
<li>isXxx(opts) \u5224\u65AD\u5F53\u524D\u8282\u70B9\u662F\u5426\u662F\u67D0\u4E2A\u7C7B\u578B\uFF0C\u53EF\u4EE5\u4F20\u5165\u5C5E\u6027\u548C\u5C5E\u6027\u503C\u8FDB\u4E00\u6B65\u5224\u65AD\uFF0C\u6BD4\u5982path.isIdentifier({name: 'a'})</li>
<li>assertXxx(opts) \u540C isXxx\uFF0C\u4F46\u662F\u4E0D\u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u800C\u662F\u629B\u51FA\u5F02\u5E38</li>
<li>insertBefore(nodes) \u5728\u4E4B\u524D\u63D2\u5165\u8282\u70B9\uFF0C\u53EF\u4EE5\u662F\u5355\u4E2A\u8282\u70B9\u6216\u8005\u8282\u70B9\u6570\u7EC4</li>
<li>insertAfter(nodes) \u5728\u4E4B\u540E\u63D2\u5165\u8282\u70B9\uFF0C\u53EF\u4EE5\u662F\u5355\u4E2A\u8282\u70B9\u6216\u8005\u8282\u70B9\u6570\u7EC4</li>
<li>replaceWith(replacement) \u7528\u67D0\u4E2A\u8282\u70B9\u66FF\u6362\u5F53\u524D\u8282\u70B9</li>
<li>replaceWithMultiple(nodes) \u7528\u591A\u4E2A\u8282\u70B9\u66FF\u6362\u5F53\u524D\u8282\u70B9</li>
<li>replaceWithSourceString(replacement) \u89E3\u6790\u6E90\u7801\u6210 AST\uFF0C\u7136\u540E\u66FF\u6362\u5F53\u524D\u8282\u70B9</li>
<li>remove() \u5220\u9664\u5F53\u524D\u8282\u70B9</li>
<li>traverse(visitor, state) \u904D\u5386\u5F53\u524D\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u4F20\u5165 visitor \u548C state\uFF08state \u662F\u4E0D\u540C\u8282\u70B9\u95F4\u4F20\u9012\u6570\u636E\u7684\u65B9\u5F0F\uFF09</li>
<li>skip() \u8DF3\u8FC7\u5F53\u524D\u8282\u70B9\u7684\u5B50\u8282\u70B9\u7684\u904D\u5386</li>
<li>stop() \u7ED3\u675F\u6240\u6709\u904D\u5386</li>
</ul>
<h3 data-id="heading-5">\u4F5C\u7528\u57DF path.scope</h3>
<p>scope \u662F\u4F5C\u7528\u57DF\u4FE1\u606F\uFF0Cjavascript \u4E2D\u80FD\u751F\u6210\u4F5C\u7528\u57DF\u7684\u5C31\u662F\u6A21\u5757\u3001\u51FD\u6570\u3001\u5757\u7B49\uFF0C\u800C\u4E14\u4F5C\u7528\u57DF\u4E4B\u95F4\u4F1A\u5F62\u6210\u5D4C\u5957\u5173\u7CFB\uFF0C\u4E5F\u5C31\u662F\u4F5C\u7528\u57DF\u94FE\u3002babel \u5728\u904D\u5386\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u751F\u6210\u4F5C\u7528\u57DF\u94FE\u4FDD\u5B58\u5728 path.scope \u4E2D\u3002</p>
<p>\u5C5E\u6027\u548C\u65B9\u6CD5\u5927\u6982\u6709\u8FD9\u4E9B</p>
<pre><code class="">path.scope {
    bindings
    block
    parent
    parentBlock
    path
    references
 
    dump()
    parentBlock()
    getAllBindings()
    getBinding(name)
    hasBinding(name)
    getOwnBinding(name)
    parentHasBinding(name)
    removeBinding(name)
    moveBindingTo(name, scope)
    generateUid(name)
}
</code></pre>
<p>\u5404\u81EA\u7684\u542B\u4E49\uFF1A</p>
<ul>
<li>scope.bindings \u5F53\u524D\u4F5C\u7528\u57DF\u5185\u58F0\u660E\u7684\u6240\u6709\u53D8\u91CF</li>
<li>scope.block \u751F\u6210\u4F5C\u7528\u57DF\u7684 block\uFF0C\u8BE6\u89C1\u4E0B\u6587</li>
<li>scope.path \u751F\u6210\u4F5C\u7528\u57DF\u7684\u8282\u70B9\u5BF9\u5E94\u7684 path</li>
<li>scope.references \u6240\u6709 binding \u7684\u5F15\u7528\u5BF9\u5E94\u7684 path\uFF0C\u8BE6\u89C1\u4E0B\u6587</li>
<li>scope.dump() \u6253\u5370\u4F5C\u7528\u57DF\u94FE\u7684\u6240\u6709 binding \u5230\u63A7\u5236\u53F0</li>
<li>scope.parentBlock() \u7236\u7EA7\u4F5C\u7528\u57DF\u7684 block</li>
<li>getAllBindings() \u4ECE\u5F53\u524D\u4F5C\u7528\u57DF\u5230\u6839\u4F5C\u7528\u57DF\u7684\u6240\u6709 binding \u7684\u5408\u5E76</li>
<li>getBinding(name) \u67E5\u627E\u67D0\u4E2A binding\uFF0C\u4ECE\u5F53\u524D\u4F5C\u7528\u57DF\u4E00\u76F4\u67E5\u627E\u5230\u6839\u4F5C\u7528\u57DF</li>
<li>getOwnBinding(name) \u4ECE\u5F53\u524D\u4F5C\u7528\u57DF\u67E5\u627E binding</li>
<li>parentHasBinding(name, noGlobals) \u67E5\u627E\u67D0\u4E2A binding\uFF0C\u4ECE\u7236\u4F5C\u7528\u57DF\u67E5\u5230\u6839\u4F5C\u7528\u57DF\uFF0C\u4E0D\u5305\u62EC\u5F53\u524D\u4F5C\u7528\u57DF\u3002\u53EF\u4EE5\u901A\u8FC7 noGlobals \u53C2\u6570\u6307\u5B9A\u662F\u5426\u7B97\u4E0A\u5168\u5C40\u53D8\u91CF\uFF08\u6BD4\u5982console\uFF0C\u4E0D\u9700\u8981\u58F0\u660E\u5C31\u53EF\u7528\uFF09\uFF0C\u9ED8\u8BA4\u662F false</li>
<li>removeBinding(name)  \u5220\u9664\u67D0\u4E2A binding</li>
<li>hasBinding(name, noGlobals) \u4ECE\u5F53\u524D\u4F5C\u7528\u57DF\u67E5\u627E binding\uFF0C\u53EF\u4EE5\u6307\u5B9A\u662F\u5426\u7B97\u4E0A\u5168\u5C40\u53D8\u91CF\uFF0C\u9ED8\u8BA4\u662F false</li>
<li>moveBindingTo(name, scope) \u628A\u5F53\u524D\u4F5C\u7528\u57DF\u4E2D\u7684\u67D0\u4E2A binding \u79FB\u52A8\u5230\u5176\u4ED6\u4F5C\u7528\u57DF</li>
<li>generateUid(name) \u751F\u6210\u4F5C\u7528\u57DF\u5185\u552F\u4E00\u7684\u540D\u5B57\uFF0C\u6839\u636E name \u6DFB\u52A0\u4E0B\u5212\u7EBF\uFF0C\u6BD4\u5982 name \u4E3A a\uFF0C\u4F1A\u5C1D\u8BD5\u751F\u6210 _a\uFF0C\u5982\u679C\u88AB\u5360\u7528\u5C31\u4F1A\u751F\u6210 __a\uFF0C\u76F4\u5230\u751F\u6210\u6CA1\u6709\u88AB\u4F7F\u7528\u7684\u540D\u5B57\u3002</li>
</ul>
<h4 data-id="heading-6">scope.block</h4>
<p>\u80FD\u5F62\u6210 scope \u7684\u6709\u8FD9\u4E9B\u8282\u70B9\uFF0C\u8FD9\u4E9B\u8282\u70B9\u4E5F\u53EB block \u8282\u70B9\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">export</span> type Scopable =
  | BlockStatement
  | CatchClause
  | DoWhileStatement
  | ForInStatement
  | ForStatement
  | FunctionDeclaration
  | FunctionExpression
  | Program
  | ObjectMethod
  | SwitchStatement
  | WhileStatement
  | ArrowFunctionExpression
  | ClassExpression
  | ClassDeclaration
  | ForOfStatement
  | ClassMethod
  | ClassPrivateMethod
  | StaticBlock
  | TSModuleBlock;
</code></pre>
<p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 path.scope.block \u6765\u62FF\u5230\u6240\u5728\u7684\u5757\u5BF9\u5E94\u7684\u8282\u70B9\uFF0C\u901A\u8FC7 path.scope.parentBlock \u62FF\u5230\u7236\u4F5C\u7528\u57DF\u5BF9\u5E94\u7684\u5757\u8282\u70B9\u3002</p>
<p>\u4E00\u822C\u60C5\u51B5\u4E0B\u6211\u4EEC\u4E0D\u9700\u8981\u62FF\u5230\u751F\u6210\u4F5C\u7528\u57DF\u7684\u5757\u8282\u70B9\uFF0C\u53EA\u9700\u8981\u901A\u8FC7 path.scope \u62FF\u5230\u4F5C\u7528\u57DF\u7684\u4FE1\u606F\uFF0C\u901A\u8FC7 path.scope.parent \u62FF\u5230\u7236\u4F5C\u7528\u57DF\u7684\u4FE1\u606F\u3002</p>
<h4 data-id="heading-7">scope.bindings\u3001scope.references\uFF08\u91CD\u70B9\uFF09</h4>
<p>\u4F5C\u7528\u57DF\u4E2D\u4FDD\u5B58\u7684\u662F\u58F0\u660E\u7684\u53D8\u91CF\u548C\u5BF9\u5E94\u7684\u503C\uFF0C\u6BCF\u4E00\u4E2A\u58F0\u660E\u53EB\u505A\u4E00\u4E2Abinding\uFF08\u7ED1\u5B9A\uFF09\u3002</p>
<p>\u6BD4\u5982\u8FD9\u6837\u4E00\u6BB5\u4EE3\u7801</p>
<pre><code class="hljs language-javascript" lang="javascript"><span class="hljs-keyword">const</span> a = <span class="hljs-number">1</span>;
</code></pre>
<p>\u5B83\u7684 path.scope.bindings \u662F\u8FD9\u6837\u7684</p>
<pre><code class="hljs language-javascript" lang="javascript">bindings: {
    <span class="hljs-attr">a</span>: {
        <span class="hljs-attr">constant</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">constantViolations</span>: [],
        <span class="hljs-attr">identifier</span>: {<span class="hljs-attr">type</span>: <span class="hljs-string">'Identifier'</span>, ...}
        <span class="hljs-attr">kind</span>:<span class="hljs-string">'const'</span>,
        <span class="hljs-attr">path</span>: {node,...}
        <span class="hljs-attr">referenced</span>: <span class="hljs-literal">false</span>
        <span class="hljs-attr">referencePaths</span>: [],
        <span class="hljs-attr">references</span>: <span class="hljs-number">0</span>,
        <span class="hljs-attr">scope</span>: ...
    }
}
</code></pre>
<p>\u56E0\u4E3A\u6211\u4EEC\u5728\u5F53\u524D scope \u4E2D\u58F0\u660E\u4E86 a \u8FD9\u4E2A\u53D8\u91CF\uFF0C\u6240\u4EE5 bindings \u4E2D\u6709 a \u7684 binding\uFF0C\u6BCF\u4E00\u4E2A binding \u90FD\u6709 kind\uFF0C\u8FD9\u4EE3\u8868\u7ED1\u5B9A\u7684\u7C7B\u578B\uFF1A</p>
<ul>
<li>var\u3001let\u3001const \u5206\u522B\u4EE3\u8868 var\u3001let\u3001const \u5F62\u5F0F\u58F0\u660E\u7684\u53D8\u91CF</li>
<li>param \u4EE3\u8868\u53C2\u6570\u7684\u58F0\u660E</li>
<li>module \u4EE3\u8868 import \u7684\u53D8\u91CF\u7684\u58F0\u660E</li>
</ul>
<p>binding \u6709\u591A\u79CD kind\uFF0C\u4EE3\u8868\u4E0D\u540C\u7684\u58F0\u660E\u65B9\u5F0F\u3002</p>
<p>binding.identifier \u548C binding.path\uFF0C\u5206\u522B\u4EE3\u8868\u6807\u8BC6\u7B26\u7684 AST\u3001\u6574\u4E2A\u58F0\u660E\u8BED\u53E5\u7684 AST\u3002</p>
<p>\u58F0\u660E\u4E4B\u540E\u7684\u53D8\u91CF\u4F1A\u88AB\u5F15\u7528\u548C\u4FEE\u6539\uFF0Cbinding.referenced \u4EE3\u8868\u58F0\u660E\u7684\u53D8\u91CF\u662F\u5426\u88AB\u5F15\u7528\uFF0Cbinding.constant \u4EE3\u8868\u53D8\u91CF\u662F\u5426\u88AB\u4FEE\u6539\u8FC7\u3002\u5982\u679C\u88AB\u5F15\u7528\u4E86\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7 binding.referencePaths \u62FF\u5230\u6240\u6709\u5F15\u7528\u7684\u8BED\u53E5\u7684 path\u3002\u5982\u679C\u88AB\u4FEE\u6539\u4E86\uFF0C\u53EF\u4EE5\u901A\u8FC7 binding.constViolations \u62FF\u5230\u6240\u6709\u4FEE\u6539\u7684\u8BED\u53E5\u7684 path\u3002</p>
<p>path \u7684 api \u8FD8\u662F\u6BD4\u8F83\u591A\u7684\uFF0C\u8FD9\u4E5F\u662F babel \u6700\u5F3A\u5927\u7684\u5730\u65B9\u3002\u4E3B\u8981\u662F\u64CD\u4F5C\u5F53\u524D\u8282\u70B9\u3001\u5F53\u524D\u8282\u70B9\u7684\u7236\u8282\u70B9\u3001\u5144\u5F1F\u8282\u70B9\uFF0C\u4F5C\u7528\u57DF\uFF0C\u4EE5\u53CA\u589E\u5220\u6539\u7684\u65B9\u6CD5\u3002</p>
<h3 data-id="heading-8">node \u94FE\u3001block \u94FE\u3001scope \u94FE</h3>
<p>\u4ECE\u67D0\u4E00\u4E2A\u8282\u70B9\u51FA\u53D1\u6709 3 \u6761\u94FE\uFF0Cpath \u548C path.parent \u4E32\u8054\u8D77\u6765\u7684 AST node \u94FE\uFF0Cpath.scope \u548C path.scope.parent \u4E32\u8054\u8D77\u6765\u7684\u4F5C\u7528\u57DF scope \u94FE\uFF0Cpath.scope.block \u548C path.scope.parentBlock \u4E32\u8054\u8D77\u6765\u7684\u5757 AST block \u94FE\u3002</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0c2bddf922742fe98d0928e98d020df~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u6CE8\u610F\uFF0C\u8FD9\u4E09\u6761\u94FE\u53EA\u662F\u4ECE\u67D0\u4E2A\u8282\u70B9\u51FA\u53D1\u5230\u7236\u8282\u70B9\u7684\u8DEF\u5F84\uFF0C\u6574\u4E2A AST \u4E2D\u7684\u8DEF\u5F84\u4E0D\u6B62\u4E00\u6761\uFF0C\u6574\u4F53\u6765\u770B\u5C31\u662F ast \u6811\u3001scope \u6811\u3001block \u6811\uFF0C\u4E0D\u8FC7\u6211\u4EEC\u5199\u63D2\u4EF6\u4E00\u822C\u53EA\u7528\u5230\u67D0\u4E00\u6761\u8DEF\u5F84\u3002</p>
<h2 data-id="heading-9">state</h2>
<p>state \u662F\u904D\u5386\u8FC7\u7A0B\u4E2D AST \u8282\u70B9\u4E4B\u95F4\u4F20\u9012\u6570\u636E\u7684\u65B9\u5F0F\uFF0C\u63D2\u4EF6\u7684 visitor \u4E2D\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F path\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5C31\u662F state\u3002\u63D2\u4EF6\u53EF\u4EE5\u4ECE state \u4E2D\u62FF\u5230 opts\uFF0C\u4E5F\u5C31\u662F\u63D2\u4EF6\u7684\u914D\u7F6E\u9879\uFF0C\u4E5F\u53EF\u4EE5\u62FF\u5230 file \u5BF9\u8C61\uFF0Cfile \u4E2D\u6709\u4E00\u4E9B\u6587\u4EF6\u7EA7\u522B\u7684\u4FE1\u606F\uFF0C\u8FD9\u4E2A\u4E5F\u53EF\u4EE5\u4ECE path.hub.file \u4E2D\u62FF\u3002</p>
<pre><code class="">state {
    file
    opts
}
</code></pre>
<p>\u53EF\u4EE5\u5728\u904D\u5386\u7684\u8FC7\u7A0B\u4E2D\u5728 state \u4E2D\u5B58\u4E00\u4E9B\u72B6\u6001\u4FE1\u606F\uFF0C\u7528\u4E8E\u540E\u7EED\u7684 AST \u5904\u7406\u3002\u4E0D\u662F\u904D\u5386\u8FC7\u7A0B\u4E2D\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u901A\u8FC7 file.set\u3001file.get \u6765\u4FDD\u5B58\u3002</p>
<h2 data-id="heading-10">AST \u7684\u522B\u540D</h2>
<p>\u904D\u5386\u7684\u65F6\u5019\u8981\u6307\u5B9A visitor \u5904\u7406\u7684 AST\uFF0C\u6709\u7684\u65F6\u5019\u9700\u8981\u5BF9\u591A\u4E2A\u8282\u70B9\u505A\u540C\u6837\u7684\u5904\u7406\uFF0Cbabel \u652F\u6301\u6307\u5B9A\u591A\u4E2A AST \u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u522B\u540D\u6307\u5B9A\u4E00\u7CFB\u5217\u7C7B\u578B\u3002</p>
<pre><code class="hljs language-javascript" lang="javascript">  <span class="hljs-comment">// \u5355\u4E2A AST \u7C7B\u578B</span>
  <span class="hljs-function"><span class="hljs-title">FunctionDeclaration</span>(<span class="hljs-params">path, state</span>)</span> {},
  <span class="hljs-comment">// \u591A\u4E2A AST \u7C7B\u578B</span>
  <span class="hljs-string">'FunctionDeclaration|VariableDeclaration'</span>(path, state) {}
  <span class="hljs-comment">// AST \u7C7B\u578B\u522B\u540D</span>
  <span class="hljs-function"><span class="hljs-title">Declaration</span>(<span class="hljs-params"></span>)</span>{}
</code></pre>
<p>\u53EF\u4EE5\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-types" target="_blank" rel="nofollow noopener noreferrer" title="https://babeljs.io/docs/en/babel-types" ref="nofollow noopener noreferrer">\u6587\u6863\u4E2D</a>\u67E5\u5230\u67D0\u4E2A AST \u7C7B\u578B\u7684\u522B\u540D\u662F\u5565\uFF0C\u67D0\u4E2A\u522B\u540D\u90FD\u5305\u542B\u54EA\u4E9B AST \u7C7B\u578B\u53EF\u4EE5\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel%2Fblob%2Fmain%2Fpackages%2Fbabel-types%2Fsrc%2Fast-types%2Fgenerated%2Findex.ts%23L2489-L2535" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/babel/babel/blob/main/packages/babel-types/src/ast-types/generated/index.ts#L2489-L2535" ref="nofollow noopener noreferrer">babel-types\u7684\u7C7B\u578B\u5B9A\u4E49</a>\u5904\u67E5\u3002</p>
<p>\u5EFA\u8BAE\u628A @babel/types \u6E90\u7801\u4E0B\u8F7D\u4E0B\u6765\u770B\uFF0C\u7C7B\u578B\u5B9A\u4E49\u5728 src/ast-types/generated \u76EE\u5F55\u4E0B\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5229\u7528 ide \u7684\u529F\u80FD\u65B9\u4FBF\u7684\u67E5\u770B\u6BCF\u79CD alias \u7684\u5177\u4F53 AST \u7C7B\u578B\u3002</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7ce124c18bd4e5c95760212e5e16078~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u6240\u6709\u7684 AST \u76F8\u5173\u7684\u4FE1\u606F\u90FD\u53EF\u4EE5\u5728<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel%2Fblob%2Fmain%2Fpackages%2Fbabel-types%2Fsrc%2Fdefinitions%2Fcore.ts" target="_blank" rel="nofollow noopener noreferrer" title="https://github.com/babel/babel/blob/main/packages/babel-types/src/definitions/core.ts" ref="nofollow noopener noreferrer">babel-types</a>\u91CC\u67E5\u770B\uFF0C\u6BCF\u4E00\u4E2A AST \u8282\u70B9\u600E\u4E48\u521B\u5EFA\u3001\u600E\u4E48\u6821\u9A8C\u3001\u600E\u4E48\u904D\u5386\uFF0C\u5176\u5B9E\u90FD\u4E0E AST \u7684\u7ED3\u6784\u6709\u5173\u7CFB\uFF0C\u8FD9\u4E9B\u90FD\u5728 babel-types \u91CC\u9762\u5B9A\u4E49\u3002</p>
<p>\u6BD4\u5982if\u5C31\u5B9A\u4E49\u4E86\u6709\u54EA\u4E9B\u5C5E\u6027\u53EF\u4EE5\u904D\u5386\u3001\u522B\u540D\u662F\u4EC0\u4E48\uFF0C\u6BCF\u4E00\u4E2A\u5C5E\u6027\u600E\u4E48\u6821\u9A8C\uFF0C\u7136\u540E\u4F1A\u6839\u636E\u8FD9\u4E9B\u89C4\u5219\u751F\u6210xxx\uFF0CisXxx\uFF0CassertXxx\u7B49api\u7528\u4E8E\u521B\u5EFA\u3001\u5224\u65ADAST\u8282\u70B9\u3002</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/004cb659aeaa4c749cfff6b2187383a4~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png" loading="lazy" class="medium-zoom-image"></p>
<h2 data-id="heading-11">\u603B\u7ED3</h2>
<p>\u8FD9\u4E00\u8282\u6211\u4EEC\u5B66\u4E60\u4E86 visitor \u6A21\u5F0F\uFF0C\u901A\u8FC7\u5BF9\u8C61\u548C\u64CD\u4F5C\u5206\u79BB\u7684\u65B9\u5F0F\u4F7F\u5F97 visitor \u53EF\u4EE5\u72EC\u7ACB\u6269\u5C55\uFF0C\u7136\u540E\u5B66\u4E60\u4E86babel \u5F3A\u5927\u7684 path\uFF0C\u5305\u62EC\u5B83\u7684\u5C5E\u6027\u548C\u64CD\u4F5C AST \u7684 api\uFF0C\u4EE5\u53CA\u4F5C\u7528\u57DF scope \u7684\u4E00\u4E9B\u6982\u5FF5\u548C api\u3002\u5B66\u4E60\u4E86 3 \u6761\u94FE\uFF0CAST \u94FE\u3001\u4F5C\u7528\u57DF\u94FE\u3001block \u94FE\u3002\u4E4B\u540E\u4E86\u89E3\u4E86 AST \u7684\u522B\u540D\uFF0C\u53EF\u4EE5\u901A\u8FC7 babel-types \u7684\u7C7B\u578B\u5B9A\u4E49\u6765\u67E5\u770B\u6240\u6709\u7684 AST \u7684\u522B\u540D\u7B49\u4FE1\u606F\u3002</p>
<p>\u5B66\u5B8C\u8FD9\u4E00\u8282\uFF0C\u6211\u4EEC\u638C\u63E1\u4E86\u5F3A\u5927\u7684 path api\uFF0C\u5BF9 babel \u63D2\u4EF6\u7684\u638C\u63E1\u5C31\u7B97\u5B8C\u6210\u4E86\u4E00\u5927\u534A\u4E86\u3002</p>
<p>api \u6BD4\u8F83\u591A\uFF0C\u9A6C\u4E0A\u6D88\u5316\u4E0D\u592A\u73B0\u5B9E\uFF0C\u4E0D\u7528\u7740\u6025\uFF0C\u540E\u9762\u5B9E\u6218\u4F1A\u5927\u91CF\u7528\u5230\u3002</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{n as default};
