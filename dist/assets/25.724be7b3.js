var o={name:"UDP",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h1 data-id="heading-0">UDP</h1>
<p>\u7F51\u7EDC\u534F\u8BAE\u662F\u6BCF\u4E2A\u524D\u7AEF\u5DE5\u7A0B\u5E08\u90FD\u5FC5\u987B\u8981\u638C\u63E1\u7684\u77E5\u8BC6\uFF0C\u6211\u4EEC\u5C06\u5148\u6765\u5B66\u4E60\u4F20\u8F93\u5C42\u4E2D\u7684\u4E24\u4E2A\u534F\u8BAE\uFF1AUDP \u4EE5\u53CA TCP\u3002\u5BF9\u4E8E\u5927\u90E8\u5206\u5DE5\u7A0B\u5E08\u6765\u8BF4\u6700\u5E38\u7528\u7684\u534F\u8BAE\u4E5F\u5C31\u662F\u8FD9\u4E24\u4E2A\u4E86\uFF0C\u5E76\u4E14\u9762\u8BD5\u4E2D\u7ECF\u5E38\u4F1A\u63D0\u95EE\u7684\u4E5F\u662F\u5173\u4E8E\u8FD9\u4E24\u4E2A\u534F\u8BAE\u7684\u533A\u522B\u3002</p>
<p>\u6211\u4EEC\u5148\u6765\u89E3\u7B54\u8FD9\u4E2A\u5E38\u8003\u9762\u8BD5\u9898\u5173\u4E8E UDP \u90E8\u5206\u7684\u5185\u5BB9\uFF0C\u7136\u540E\u518D\u8BE6\u7EC6\u53BB\u5B66\u4E60\u8FD9\u4E2A\u534F\u8BAE\u3002</p>
<pre><code class="hljs language-!" lang="!">\u5E38\u8003\u9762\u8BD5\u9898\uFF1AUDP \u4E0E TCP \u7684\u533A\u522B\u662F\u4EC0\u4E48\uFF1F
</code></pre>
<p>\u9996\u5148 UDP \u534F\u8BAE\u662F\u9762\u5411\u65E0\u8FDE\u63A5\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4E0D\u9700\u8981\u5728\u6B63\u5F0F\u4F20\u9012\u6570\u636E\u4E4B\u524D\u5148\u8FDE\u63A5\u8D77\u53CC\u65B9\u3002\u7136\u540E UDP \u534F\u8BAE\u53EA\u662F\u6570\u636E\u62A5\u6587\u7684\u642C\u8FD0\u5DE5\uFF0C\u4E0D\u4FDD\u8BC1\u6709\u5E8F\u4E14\u4E0D\u4E22\u5931\u7684\u4F20\u9012\u5230\u5BF9\u7AEF\uFF0C\u5E76\u4E14UDP \u534F\u8BAE\u4E5F\u6CA1\u6709\u4EFB\u4F55\u63A7\u5236\u6D41\u91CF\u7684\u7B97\u6CD5\uFF0C\u603B\u7684\u6765\u8BF4 UDP \u76F8\u8F83\u4E8E TCP \u66F4\u52A0\u7684\u8F7B\u4FBF\u3002</p>
<h2 data-id="heading-1">\u9762\u5411\u65E0\u8FDE\u63A5</h2>
<p>\u9996\u5148 UDP \u662F\u4E0D\u9700\u8981\u548C TCP \u4E00\u6837\u5728\u53D1\u9001\u6570\u636E\u524D\u8FDB\u884C\u4E09\u6B21\u63E1\u624B\u5EFA\u7ACB\u8FDE\u63A5\u7684\uFF0C\u60F3\u53D1\u6570\u636E\u5C31\u53EF\u4EE5\u5F00\u59CB\u53D1\u9001\u4E86\u3002</p>
<p>\u5E76\u4E14\u4E5F\u53EA\u662F\u6570\u636E\u62A5\u6587\u7684\u642C\u8FD0\u5DE5\uFF0C\u4E0D\u4F1A\u5BF9\u6570\u636E\u62A5\u6587\u8FDB\u884C\u4EFB\u4F55\u62C6\u5206\u548C\u62FC\u63A5\u64CD\u4F5C\u3002</p>
<p>\u5177\u4F53\u6765\u8BF4\u5C31\u662F\uFF1A</p>
<ul>
<li>\u5728\u53D1\u9001\u7AEF\uFF0C\u5E94\u7528\u5C42\u5C06\u6570\u636E\u4F20\u9012\u7ED9\u4F20\u8F93\u5C42\u7684 UDP \u534F\u8BAE\uFF0CUDP \u53EA\u4F1A\u7ED9\u6570\u636E\u589E\u52A0\u4E00\u4E2A UDP \u5934\u6807\u8BC6\u4E0B\u662F UDP \u534F\u8BAE\uFF0C\u7136\u540E\u5C31\u4F20\u9012\u7ED9\u7F51\u7EDC\u5C42\u4E86</li>
<li>\u5728\u63A5\u6536\u7AEF\uFF0C\u7F51\u7EDC\u5C42\u5C06\u6570\u636E\u4F20\u9012\u7ED9\u4F20\u8F93\u5C42\uFF0CUDP \u53EA\u53BB\u9664 IP \u62A5\u6587\u5934\u5C31\u4F20\u9012\u7ED9\u5E94\u7528\u5C42\uFF0C\u4E0D\u4F1A\u4EFB\u4F55\u62FC\u63A5\u64CD\u4F5C</li>
</ul>
<h2 data-id="heading-2">\u4E0D\u53EF\u9760\u6027</h2>
<p>\u9996\u5148\u4E0D\u53EF\u9760\u6027\u4F53\u73B0\u5728\u65E0\u8FDE\u63A5\u4E0A\uFF0C\u901A\u4FE1\u90FD\u4E0D\u9700\u8981\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u60F3\u53D1\u5C31\u53D1\uFF0C\u8FD9\u6837\u7684\u60C5\u51B5\u80AF\u5B9A\u4E0D\u53EF\u9760\u3002</p>
<p>\u5E76\u4E14\u6536\u5230\u4EC0\u4E48\u6570\u636E\u5C31\u4F20\u9012\u4EC0\u4E48\u6570\u636E\uFF0C\u5E76\u4E14\u4E5F\u4E0D\u4F1A\u5907\u4EFD\u6570\u636E\uFF0C\u53D1\u9001\u6570\u636E\u4E5F\u4E0D\u4F1A\u5173\u5FC3\u5BF9\u65B9\u662F\u5426\u5DF2\u7ECF\u6B63\u786E\u63A5\u6536\u5230\u6570\u636E\u4E86\u3002</p>
<p>\u518D\u8005\u7F51\u7EDC\u73AF\u5883\u65F6\u597D\u65F6\u574F\uFF0C\u4F46\u662F UDP \u56E0\u4E3A\u6CA1\u6709\u62E5\u585E\u63A7\u5236\uFF0C\u4E00\u76F4\u4F1A\u4EE5\u6052\u5B9A\u7684\u901F\u5EA6\u53D1\u9001\u6570\u636E\u3002\u5373\u4F7F\u7F51\u7EDC\u6761\u4EF6\u4E0D\u597D\uFF0C\u4E5F\u4E0D\u4F1A\u5BF9\u53D1\u9001\u901F\u7387\u8FDB\u884C\u8C03\u6574\u3002\u8FD9\u6837\u5B9E\u73B0\u7684\u5F0A\u7AEF\u5C31\u662F\u5728\u7F51\u7EDC\u6761\u4EF6\u4E0D\u597D\u7684\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u5BFC\u81F4\u4E22\u5305\uFF0C\u4F46\u662F\u4F18\u70B9\u4E5F\u5F88\u660E\u663E\uFF0C\u5728\u67D0\u4E9B\u5B9E\u65F6\u6027\u8981\u6C42\u9AD8\u7684\u573A\u666F\uFF08\u6BD4\u5982\u7535\u8BDD\u4F1A\u8BAE\uFF09\u5C31\u9700\u8981\u4F7F\u7528 UDP \u800C\u4E0D\u662F TCP\u3002</p>
<h2 data-id="heading-3">\u9AD8\u6548</h2>
<p>\u867D\u7136 UDP \u534F\u8BAE\u4E0D\u662F\u90A3\u4E48\u7684\u53EF\u9760\uFF0C\u4F46\u662F\u6B63\u662F\u56E0\u4E3A\u5B83\u4E0D\u662F\u90A3\u4E48\u7684\u53EF\u9760\uFF0C\u6240\u4EE5\u4E5F\u5C31\u6CA1\u6709 TCP \u90A3\u4E48\u590D\u6742\u4E86\uFF0C\u9700\u8981\u4FDD\u8BC1\u6570\u636E\u4E0D\u4E22\u5931\u4E14\u6709\u5E8F\u5230\u8FBE\u3002</p>
<p>\u56E0\u6B64 UDP \u7684\u5934\u90E8\u5F00\u9500\u5C0F\uFF0C\u53EA\u6709\u516B\u5B57\u8282\uFF0C\u76F8\u6BD4 TCP \u7684\u81F3\u5C11\u4E8C\u5341\u5B57\u8282\u8981\u5C11\u5F97\u591A\uFF0C\u5728\u4F20\u8F93\u6570\u636E\u62A5\u6587\u65F6\u662F\u5F88\u9AD8\u6548\u7684\u3002</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d01631b2ef6640f58bc7647a2bb73007~tplv-k3u1fbpfcp-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>UDP \u5934\u90E8\u5305\u542B\u4E86\u4EE5\u4E0B\u51E0\u4E2A\u6570\u636E</p>
<ul>
<li>\u4E24\u4E2A\u5341\u516D\u4F4D\u7684\u7AEF\u53E3\u53F7\uFF0C\u5206\u522B\u4E3A\u6E90\u7AEF\u53E3\uFF08\u53EF\u9009\u5B57\u6BB5\uFF09\u548C\u76EE\u6807\u7AEF\u53E3</li>
<li>\u6574\u4E2A\u6570\u636E\u62A5\u6587\u7684\u957F\u5EA6</li>
<li>\u6574\u4E2A\u6570\u636E\u62A5\u6587\u7684\u68C0\u9A8C\u548C\uFF08IPv4 \u53EF\u9009 \u5B57\u6BB5\uFF09\uFF0C\u8BE5\u5B57\u6BB5\u7528\u4E8E\u53D1\u73B0\u5934\u90E8\u4FE1\u606F\u548C\u6570\u636E\u4E2D\u7684\u9519\u8BEF</li>
</ul>
<h2 data-id="heading-4">\u4F20\u8F93\u65B9\u5F0F</h2>
<p>UDP \u4E0D\u6B62\u652F\u6301\u4E00\u5BF9\u4E00\u7684\u4F20\u8F93\u65B9\u5F0F\uFF0C\u540C\u6837\u652F\u6301\u4E00\u5BF9\u591A\uFF0C\u591A\u5BF9\u591A\uFF0C\u591A\u5BF9\u4E00\u7684\u65B9\u5F0F\uFF0C\u4E5F\u5C31\u662F\u8BF4 UDP \u63D0\u4F9B\u4E86\u5355\u64AD\uFF0C\u591A\u64AD\uFF0C\u5E7F\u64AD\u7684\u529F\u80FD\u3002</p>
<h2 data-id="heading-5">\u9002\u5408\u4F7F\u7528\u7684\u573A\u666F</h2>
<p>UDP \u867D\u7136\u5BF9\u6BD4 TCP \u6709\u5F88\u591A\u7F3A\u70B9\uFF0C\u4F46\u662F\u6B63\u662F\u56E0\u4E3A\u8FD9\u4E9B\u7F3A\u70B9\u9020\u5C31\u4E86\u5B83\u9AD8\u6548\u7684\u7279\u6027\uFF0C\u5728\u5F88\u591A\u5B9E\u65F6\u6027\u8981\u6C42\u9AD8\u7684\u5730\u65B9\u90FD\u53EF\u4EE5\u770B\u5230 UDP \u7684\u8EAB\u5F71\u3002</p>
<h3 data-id="heading-6">\u76F4\u64AD</h3>
<p>\u60F3\u5FC5\u5927\u5BB6\u90FD\u770B\u8FC7\u76F4\u64AD\u5427\uFF0C\u5927\u5BB6\u53EF\u4EE5\u8003\u8651\u4E0B\u5982\u679C\u76F4\u64AD\u4F7F\u7528\u4E86\u57FA\u4E8E TCP \u7684\u534F\u8BAE\u4F1A\u53D1\u751F\u4EC0\u4E48\u4E8B\u60C5\uFF1F</p>
<p>TCP \u4F1A\u4E25\u683C\u63A7\u5236\u4F20\u8F93\u7684\u6B63\u786E\u6027\uFF0C\u4E00\u65E6\u6709\u67D0\u4E00\u4E2A\u6570\u636E\u5BF9\u7AEF\u6CA1\u6709\u6536\u5230\uFF0C\u5C31\u4F1A\u505C\u6B62\u4E0B\u6765\u76F4\u5230\u5BF9\u7AEF\u6536\u5230\u8FD9\u4E2A\u6570\u636E\u3002\u8FD9\u79CD\u95EE\u9898\u5728\u7F51\u7EDC\u6761\u4EF6\u4E0D\u9519\u7684\u60C5\u51B5\u4E0B\u53EF\u80FD\u5E76\u4E0D\u4F1A\u53D1\u751F\u4EC0\u4E48\u4E8B\u60C5\uFF0C\u4F46\u662F\u5728\u7F51\u7EDC\u60C5\u51B5\u5DEE\u7684\u65F6\u5019\u5C31\u4F1A\u53D8\u6210\u753B\u9762\u5361\u4F4F\uFF0C\u7136\u540E\u518D\u7EE7\u7EED\u64AD\u653E\u4E0B\u4E00\u5E27\u7684\u60C5\u51B5\u3002</p>
<p>\u4F46\u662F\u5BF9\u4E8E\u76F4\u64AD\u6765\u8BF4\uFF0C\u7528\u6237\u80AF\u5B9A\u5173\u6CE8\u7684\u662F\u6700\u65B0\u7684\u753B\u9762\uFF0C\u800C\u4E0D\u662F\u56E0\u4E3A\u7F51\u7EDC\u6761\u4EF6\u5DEE\u800C\u4E22\u5931\u7684\u8001\u65E7\u753B\u9762\uFF0C\u6240\u4EE5 TCP \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u65E0\u7528\u6B66\u4E4B\u5730\uFF0C\u53EA\u4F1A\u964D\u4F4E\u7528\u6237\u4F53\u9A8C\u3002</p>
<h3 data-id="heading-7">\u738B\u8005\u8363\u8000</h3>
<p>\u867D\u7136\u6211\u5177\u4F53\u4E0D\u77E5\u9053\u738B\u8005\u8363\u8000\u5E95\u5C42\u4F7F\u7528\u4E86\u4EC0\u4E48\u534F\u8BAE\uFF0C\u4F46\u662F\u5BF9\u4E8E\u8FD9\u7C7B\u5B9E\u65F6\u6027\u8981\u6C42\u5F88\u9AD8\u7684\u6E38\u620F\u6765\u8BF4\uFF0CUDP \u662F\u8DD1\u4E0D\u4E86\u7684\u3002</p>
<p>\u4E3A\u4EC0\u4E48\u8FD9\u6837\u8BF4\u5462\uFF1F\u9996\u5148\u5BF9\u4E8E\u738B\u8005\u8363\u8000\u6765\u8BF4\uFF0C\u7528\u6237\u4F53\u91CF\u662F\u76F8\u5F53\u5927\u7684\uFF0C\u5982\u679C\u4F7F\u7528 TCP \u8FDE\u63A5\u7684\u8BDD\uFF0C\u5C31\u53EF\u80FD\u4F1A\u51FA\u73B0\u670D\u52A1\u5668\u4E0D\u591F\u7528\u7684\u60C5\u51B5\uFF0C\u56E0\u4E3A\u6BCF\u53F0\u670D\u52A1\u5668\u53EF\u4F9B\u652F\u6491\u7684 TCP \u8FDE\u63A5\u6570\u91CF\u662F\u6709\u9650\u5236\u7684\u3002</p>
<p>\u518D\u8005\uFF0C\u56E0\u4E3A TCP \u4F1A\u4E25\u683C\u63A7\u5236\u4F20\u8F93\u7684\u6B63\u786E\u6027\uFF0C\u5982\u679C\u56E0\u4E3A\u7528\u6237\u7F51\u7EDC\u6761\u4EF6\u4E0D\u597D\u5C31\u9020\u6210\u9875\u9762\u5361\u987F\u7136\u540E\u518D\u4F20\u8F93\u65E7\u7684\u6E38\u620F\u753B\u9762\u662F\u80AF\u5B9A\u4E0D\u80FD\u63A5\u53D7\u7684\uFF0C\u6BD5\u7ADF\u5BF9\u4E8E\u8FD9\u7C7B\u5B9E\u65F6\u6027\u8981\u6C42\u5F88\u9AD8\u7684\u6E38\u620F\u6765\u8BF4\uFF0C\u6700\u65B0\u7684\u6E38\u620F\u753B\u9762\u624D\u662F\u6700\u9700\u8981\u7684\uFF0C\u800C\u4E0D\u662F\u8001\u65E7\u7684\u753B\u9762\uFF0C\u5426\u5219\u89D2\u8272\u90FD\u4E0D\u77E5\u9053\u6B7B\u591A\u5C11\u6B21\u4E86\u3002</p>
<h2 data-id="heading-8">\u5C0F\u7ED3</h2>
<p>\u8FD9\u4E00\u7AE0\u8282\u7684\u5185\u5BB9\u5C31\u5230\u8FD9\u91CC\uFF0C\u56E0\u4E3A UDP \u534F\u8BAE\u76F8\u5BF9\u7B80\u5355\uFF0C\u6240\u4EE5\u5185\u5BB9\u5E76\u4E0D\u662F\u5F88\u591A\uFF0C\u4F46\u662F\u4E0B\u4E00\u7AE0\u8282\u4F1A\u5448\u73B0\u5F88\u591A\u5173\u4E8E TCP \u76F8\u5173\u7684\u5185\u5BB9\uFF0C\u8BF7\u5927\u5BB6\u505A\u597D\u51C6\u5907\u3002</p>
<p>\u6700\u540E\u603B\u7ED3\u4E00\u4E0B\u8FD9\u4E00\u7AE0\u8282\u7684\u5185\u5BB9\uFF1A</p>
<ul>
<li>UDP \u76F8\u6BD4 TCP \u7B80\u5355\u7684\u591A\uFF0C\u4E0D\u9700\u8981\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u4E0D\u9700\u8981\u9A8C\u8BC1\u6570\u636E\u62A5\u6587\uFF0C\u4E0D\u9700\u8981\u6D41\u91CF\u63A7\u5236\uFF0C\u53EA\u4F1A\u628A\u60F3\u53D1\u7684\u6570\u636E\u62A5\u6587\u4E00\u80A1\u8111\u7684\u4E22\u7ED9\u5BF9\u7AEF</li>
<li>\u867D\u7136 UDP \u5E76\u6CA1\u6709 TCP \u4F20\u8F93\u6765\u7684\u51C6\u786E\uFF0C\u4F46\u662F\u4E5F\u80FD\u5728\u5F88\u591A\u5B9E\u65F6\u6027\u8981\u6C42\u9AD8\u7684\u5730\u65B9\u6709\u6240\u4F5C\u4E3A</li>
</ul><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{o as default};
