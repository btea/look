var n={name:"\u7279\u6B8A\u7684\u4E8C\u53C9\u6811\u2014\u2014\u5E73\u8861\u4E8C\u53C9\u6811\u4E13\u9898",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p>\u4E8C\u53C9\u641C\u7D22\u6811\u662F\u4E8C\u53C9\u6811\u7684\u7279\u4F8B\uFF0C\u5E73\u8861\u4E8C\u53C9\u6811\u5219\u662F\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u7279\u4F8B\u3002</p>
<h2 data-id="heading-0">\u4EC0\u4E48\u662F\u5E73\u8861\u4E8C\u53C9\u6811</h2>
<p>\u5728\u4E0A\u4E00\u8282\u7684\u672B\u5C3E\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u901A\u8FC7\u4E00\u9053\u771F\u9898\u548C\u5E73\u8861\u4E8C\u53C9\u6811\u6253\u8FC7\u4EA4\u9053\u3002\u6B63\u5982\u9898\u76EE\u4E2D\u6240\u8BF4\uFF0C\u5E73\u8861\u4E8C\u53C9\u6811\uFF08\u53C8\u79F0 AVL Tree\uFF09\u6307\u7684<strong>\u662F\u4EFB\u610F\u7ED3\u70B9</strong>\u7684<strong>\u5DE6\u53F3\u5B50\u6811\u9AD8\u5EA6\u5DEE\u7EDD\u5BF9\u503C\u90FD\u4E0D\u5927\u4E8E1</strong>\u7684\u4E8C\u53C9<strong>\u641C\u7D22\u6811</strong>\u3002</p>
<h2 data-id="heading-1">\u4E3A\u4EC0\u4E48\u8981\u6709\u5E73\u8861\u4E8C\u53C9\u6811</h2>
<p>\u5E73\u8861\u4E8C\u53C9\u6811\u7684\u51FA\u73B0\uFF0C\u662F\u4E3A\u4E86\u964D\u4F4E\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u67E5\u627E\u65F6\u95F4\u590D\u6742\u5EA6\u3002<br>
\u5927\u5BB6\u77E5\u9053\uFF0C\u5BF9\u4E8E\u540C\u6837\u4E00\u4E2A\u904D\u5386\u5E8F\u5217\uFF0C\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u9020\u578B\u53EF\u4EE5\u6709\u5F88\u591A\u79CD\u3002\u62FF <code>[1,2,3,4,5]</code>\u8FD9\u4E2A\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u6765\u8BF4\uFF0C\u57FA\u4E8E\u5B83\u53EF\u4EE5\u6784\u9020\u51FA\u7684\u4E8C\u53C9\u641C\u7D22\u6811\u5C31\u5305\u62EC\u4EE5\u4E0B\u4E24\u79CD\u9020\u578B\uFF1A</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/24/17245d06f50d1e9f~tplv-t2oaga2asx-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/24/17245d2227c126fc~tplv-t2oaga2asx-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image">
\u7ED3\u5408\u5E73\u8861\u4E8C\u53C9\u6811\u7684\u5B9A\u4E49\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\uFF0C\u7B2C\u4E00\u68F5\u4E8C\u53C9\u6811\u662F\u5E73\u8861\u4E8C\u53C9\u6811\uFF0C\u7B2C\u4E8C\u68F5\u4E8C\u53C9\u6811\u662F\u666E\u901A\u7684\u4E8C\u53C9\u641C\u7D22\u6811\u3002<br>
\u73B0\u5728\uFF0C\u5982\u679C\u8981\u4F60\u57FA\u4E8E\u4E0A\u4E00\u8282\u5B66\u8FC7\u7684\u4E8C\u53C9\u641C\u7D22\u6811\u67E5\u627E\u7B97\u6CD5\uFF0C\u5728\u56FE\u4E0A\u4E24\u68F5\u6811\u4E0A\u5206\u522B\u627E\u51FA\u503C\u4E3A1\u7684\u7ED3\u70B9\uFF0C\u95EE\u4F60\u5404\u9700\u8981\u67E5\u627E\u51E0\u6B21\uFF1F\u57281\u53F7\u4E8C\u53C9\u6811\u4E2D\uFF0C\u5305\u62EC\u6839\u7ED3\u70B9\u5728\u5185\uFF0C\u53EA\u9700\u8981\u67E5\u627E3\u6B21\uFF1B\u800C\u57282\u53F7\u4E8C\u53C9\u6811\u4E2D\uFF0C\u5305\u62EC\u6839\u7ED3\u70B9\u5728\u5185\uFF0C\u4E00\u5171\u9700\u8981\u67E5\u627E5\u6B21\u3002</p>
<p>\u6211\u4EEC\u53D1\u73B0\uFF0C\u5728\u8FD9\u4E2A\u4F8B\u5B50\u91CC\uFF0C\u5BF9\u4E8E\u540C\u4E00\u4E2A\u904D\u5386\u5E8F\u5217\u6765\u8BF4\uFF0C\u5E73\u8861\u4E8C\u53C9\u6811\u6BD4\u975E\u5E73\u8861\u4E8C\u53C9\u6811\uFF08\u56FE\u4E0A\u7684\u7ED3\u6784\u53EF\u4EE5\u79F0\u4E3A\u94FE\u5F0F\u4E8C\u53C9\u6811\uFF09\u7684\u67E5\u627E\u6548\u7387\u66F4\u9AD8\u3002\u8FD9\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1F</p>
<p>\u5927\u5BB6\u53EF\u4EE5\u4ED4\u7EC6\u60F3\u60F3\uFF0C\u4E3A\u4EC0\u4E48\u79D1\u5B66\u5BB6\u4EEC\u4F1A\u65E0\u4E2D\u751F\u6709\uFF0C\u7ED9\u4E8C\u53C9\u6811\u7684\u5DE6\u53F3\u5B50\u6811\u548C\u6839\u7ED3\u70B9\u4E4B\u95F4\u5F3A\u52A0\u4E0A\u6392\u5E8F\u5173\u7CFB\u4F5C\u4E3A\u7EA6\u675F\uFF0C\u8FDB\u800C\u521B\u9020\u51FA\u4E8C\u53C9\u641C\u7D22\u6811\u8FD9\u79CD\u4E1C\u897F\u5462\uFF1F\u96BE\u9053\u53EA\u662F\u4E3A\u4E86\u88C5x\u5417\uFF1F\u5F53\u7136\u4E0D\u662F\u5566\u3002<strong>\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u5999\u5904\u5C31\u5728\u4E8E\u5B83\u628A\u201C\u4E8C\u5206\u201D\u8FD9\u79CD\u601D\u60F3\u4EE5\u6570\u636E\u7ED3\u6784\u7684\u5F62\u5F0F\u8868\u8FBE\u4E86\u51FA\u6765</strong>\u3002\u5728\u4E00\u4E2A\u6784\u9020\u5408\u7406\u7684\u4E8C\u53C9\u641C\u7D22\u6811\u91CC\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5BF9\u6BD4\u5F53\u524D\u7ED3\u70B9\u548C\u76EE\u6807\u503C\u4E4B\u95F4\u7684\u5927\u5C0F\u5173\u7CFB\uFF0C\u7F29\u5C0F\u4E0B\u4E00\u6B65\u7684\u641C\u7D22\u8303\u56F4\uFF08\u6BD4\u5982\u53EA\u641C\u7D22\u5DE6\u5B50\u6811\u6216\u8005\u53EA\u641C\u7D22\u53F3\u5B50\u6811\uFF09\uFF0C\u8FDB\u800C\u89C4\u907F\u6389\u4E0D\u5FC5\u8981\u7684\u67E5\u627E\u6B65\u9AA4\uFF0C\u964D\u4F4E\u641C\u7D22\u8FC7\u7A0B\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u3002\u4F46\u662F\u5982\u679C\u4E00\u4E2A\u4E8C\u53C9\u641C\u7D22\u6811\u4E25\u91CD\u4E0D\u5E73\u8861\uFF0C\u6BD4\u5982\u8BF4\u4E0A\u9762\u8FD9\u68F5\u94FE\u5F0F\u641C\u7D22\u6811\uFF1A<br>
<img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/24/17245d2227c126fc~tplv-t2oaga2asx-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<p>\u6BCF\u4E00\u4E2A\u7ED3\u70B9\u7684\u53F3\u5B50\u6811\u90FD\u662F\u7A7A\u7684\uFF0C\u8FD9\u6837\u7684\u7ED3\u6784\u975E\u5E38\u4E0D\u5408\u7406\uFF0C\u5B83\u4F1A\u5E26\u6765\u9AD8\u8FBEO(N)\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u3002\u800C\u5E73\u8861\u4E8C\u53C9\u6811\u7531\u4E8E\u5229\u7528\u4E86\u4E8C\u5206\u601D\u60F3\uFF0C\u67E5\u627E\u64CD\u4F5C\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4EC5\u4E3A O(logN)\u3002\u56E0\u6B64\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u4E8C\u53C9\u641C\u7D22\u6811\u80FD\u591F\u786E\u5B9E\u4E3A\u67E5\u627E\u64CD\u4F5C\u5E26\u6765\u6548\u7387\u4E0A\u7684\u63D0\u5347\uFF0C\u6211\u4EEC\u6709\u5FC5\u8981\u5728\u6784\u9020\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u8FC7\u7A0B\u4E2D\u7EF4\u6301\u5176\u5E73\u8861\u5EA6\uFF0C\u8FD9\u5C31\u662F\u5E73\u8861\u4E8C\u53C9\u6811\u7684\u6765\u7531\u3002</p>
<h2 data-id="heading-2">\u547D\u9898\u601D\u8DEF\u89E3\u8BFB</h2>
<p>\u5E73\u8861\u4E8C\u53C9\u6811\u548C\u4E8C\u53C9\u641C\u7D22\u6811\u4E00\u6837\uFF0C\u90FD\u88AB\u5F52\u7C7B\u4E3A\u201C\u7279\u6B8A\u201D\u7684\u4E8C\u53C9\u6811\u3002\u5BF9\u4E8E\u8FD9\u6837\u7684\u6570\u636E\u7ED3\u6784\u6765\u8BF4\uFF0C\u5176\u201C\u7279\u6B8A\u201D\u4E4B\u5904\u4E5F\u6B63\u662F\u5176\u8003\u70B9\u6240\u5728\uFF0C\u56E0\u6B64\u771F\u9898\u5F80\u5F80\u7A33\u5B9A\u5730\u5206\u5E03\u5728\u4EE5\u4E0B\u4E24\u4E2A\u65B9\u5411\uFF1A</p>
<ul>
<li>
<p>\u5BF9\u7279\u6027\u7684\u8003\u5BDF\uFF08\u672C\u8282\u4EE5\u5E73\u8861\u4E8C\u53C9\u6811\u7684\u5224\u5B9A\u4E3A\u4F8B\uFF09</p>
</li>
<li>
<p>\u5BF9\u64CD\u4F5C\u7684\u8003\u5BDF\uFF08\u672C\u8282\u4EE5\u5E73\u8861\u4E8C\u53C9\u6811\u7684\u6784\u9020\u4E3A\u4F8B\uFF09</p>
</li>
</ul>
<h2 data-id="heading-3">\u5E73\u8861\u4E8C\u53C9\u6811\u7684\u5224\u5B9A</h2>
<blockquote>
<p>\u9898\u76EE\u63CF\u8FF0\uFF1A\u7ED9\u5B9A\u4E00\u4E2A\u4E8C\u53C9\u6811\uFF0C\u5224\u65AD\u5B83\u662F\u5426\u662F\u9AD8\u5EA6\u5E73\u8861\u7684\u4E8C\u53C9\u6811\u3002</p>
</blockquote>
<p>\u672C\u9898\u4E2D\uFF0C\u4E00\u68F5\u9AD8\u5EA6\u5E73\u8861\u4E8C\u53C9\u6811\u5B9A\u4E49\u4E3A\uFF1A
\u4E00\u4E2A\u4E8C\u53C9\u6811\u6BCF\u4E2A\u8282\u70B9 \u7684\u5DE6\u53F3\u4E24\u4E2A\u5B50\u6811\u7684\u9AD8\u5EA6\u5DEE\u7684\u7EDD\u5BF9\u503C\u4E0D\u8D85\u8FC71\u3002</p>
<blockquote>
<p>\u793A\u4F8B 1:</p>
</blockquote>
<p>\u7ED9\u5B9A\u4E8C\u53C9\u6811 [3,9,20,null,null,15,7]</p>
<pre><code class="">    3
   / \\
  9  20
    /  \\
   15   7
</code></pre>
<blockquote>
<p>\u8FD4\u56DE true \u3002</p>
</blockquote>
<blockquote>
<p>\u793A\u4F8B 2:</p>
</blockquote>
<p>\u7ED9\u5B9A\u4E8C\u53C9\u6811 [1,2,2,3,3,null,null,4,4]</p>
<pre><code class="">       1
      / \\
     2   2
    / \\
   3   3
  / \\
 4   4
</code></pre>
<blockquote>
<p>\u8FD4\u56DE&nbsp;false \u3002</p>
</blockquote>
<h3 data-id="heading-4">\u601D\u8DEF\u5206\u6790</h3>
<p>\u6765\uFF0C\u6211\u4EEC\u590D\u4E60\u4E00\u904D\u5E73\u8861\u4E8C\u53C9\u6811\u7684\u5B9A\u4E49\uFF1A</p>
<blockquote>
<p>\u5E73\u8861\u4E8C\u53C9\u6811<strong>\u662F\u4EFB\u610F\u7ED3\u70B9</strong>\u7684<strong>\u5DE6\u53F3\u5B50\u6811\u9AD8\u5EA6\u5DEE\u7EDD\u5BF9\u503C\u90FD\u4E0D\u5927\u4E8E1</strong>\u7684\u4E8C\u53C9<strong>\u641C\u7D22\u6811</strong>\u3002</p>
</blockquote>
<p>\u6293\u4F4F\u5176\u4E2D\u7684\u4E09\u4E2A\u5173\u952E\u5B57\uFF1A</p>
<ol>
<li>\u4EFB\u610F\u7ED3\u70B9</li>
<li>\u5DE6\u53F3\u5B50\u6811\u9AD8\u5EA6\u5DEE\u7EDD\u5BF9\u503C\u90FD\u4E0D\u5927\u4E8E1</li>
<li>\u4E8C\u53C9\u641C\u7D22\u6811</li>
</ol>
<p>\u6CE8\u610F\uFF0C\u7ED3\u5408\u9898\u610F\uFF0C\u4E0A\u97623\u4E2A\u5173\u952E\u5B57\u4E2D\u76843\u5BF9\u8FD9\u9053\u9898\u6765\u8BF4\u662F\u4E0D\u9002\u7528\u7684\uFF0C\u56E0\u6B64\u6211\u4EEC\u4E0D\u5FC5\u5BF9\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u6027\u8D28\u8FDB\u884C\u6821\u9A8C\u3002\u73B0\u5728\u53EA\u770B 1 \u548C 2\uFF0C\u5148\u7ED9\u81EA\u5DF1\u4E00\u5206\u949F\u601D\u8003\u4E00\u4E0B\u2014\u2014\u4F60\u53EF\u4EE5\u63D0\u53D6\u51FA\u4EC0\u4E48\u7EBF\u7D22\uFF1F</p>
<p>\u201C\u4EFB\u610F\u7ED3\u70B9\u201D\u4EC0\u4E48\u610F\u601D\uFF1F\u6BCF\u4E00\u4E2A\u7ED3\u70B9\u90FD\u9700\u8981\u7B26\u5408\u67D0\u4E2A\u6761\u4EF6\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6BCF\u4E00\u4E2A\u7ED3\u70B9\u5728\u88AB\u904D\u5386\u5230\u7684\u65F6\u5019\u90FD\u9700\u8981\u91CD\u590D\u67D0\u4E2A\u6821\u9A8C\u6D41\u7A0B\uFF0C\u5BF9\u4E0D\u5BF9\uFF1F<br>
\u54CE\uFF0C\u6211\u521A\u521A\u662F\u4E0D\u662F\u8BF4\u4E86\u4EC0\u4E48\u4E0D\u5F97\u4E86\u7684\u52A8\u8BCD\u4E86\uFF1F\u554A\uFF0C\u662F<strong>\u91CD\u590D</strong>\uFF01\u662Ftmd\u7684<strong>\u91CD\u590D\u554A</strong>\uFF01\uFF01\uFF01\u6765\uFF0C\u5B66\u5230\u4E86\u7B2C18\u8282\uFF0C\u4E3A\u4E86\u5411\u6211\u8BC1\u660E\u4F60\u6CA1\u6709\u8DF3\u8BFB\uFF0C\u8BF7\u5927\u58F0\u558A\u51FA\u4E0B\u9762\u8FD9\u4E24\u4E2A\u5B57\uFF1A</p>
<p> \u9012\u5F52\uFF01</p>
\u6CA1\u9519\uFF0C\u201C\u4EFB\u610F\u7ED3\u70B9\u201D\u8FD9\u56DB\u4E2A\u5B57\uFF0C\u5C31\u662F\u5728\u6697\u793A\u4F60\u7528\u9012\u5F52\u3002\u800C\u201C\u5DE6\u53F3\u5B50\u6811\u9AD8\u5EA6\u5DEE\u7EDD\u5BF9\u503C\u90FD\u4E0D\u5927\u4E8E1\u201D\u8FD9\u4E2A\u6821\u9A8C\u89C4\u5219\uFF0C\u5C31\u662F\u9012\u5F52\u5F0F\u3002   
<p>\u554A\uFF0C\u771F\u8BA9\u4EBA\u6FC0\u52A8\u5462\uFF0C\u89E3\u51B3\u8FD9\u9053\u9898\u7684\u601D\u8DEF\u7ADF\u7136\u5DF2\u7ECF\u6162\u6162\u6D6E\u73B0\u51FA\u6765\u4E86\uFF0C\u90A3\u5C31\u662F\uFF1A\u4ECE\u4E0B\u5F80\u4E0A\u9012\u5F52\u904D\u5386\u6811\u4E2D\u7684\u6BCF\u4E00\u4E2A\u7ED3\u70B9\uFF0C\u8BA1\u7B97\u5176\u5DE6\u53F3\u5B50\u6811\u7684\u9AD8\u5EA6\u5E76\u8FDB\u884C\u5BF9\u6BD4\uFF0C\u53EA\u8981\u6709\u4E00\u4E2A\u9AD8\u5EA6\u5DEE\u7684\u7EDD\u5BF9\u503C\u5927\u4E8E1\uFF0C\u90A3\u4E48\u6574\u68F5\u6811\u90FD\u4F1A\u88AB\u5224\u4E3A\u4E0D\u5E73\u8861\u3002</p>
<h3 data-id="heading-5">\u7F16\u7801\u5B9E\u73B0</h3>
<pre><code class="hljs language-js" lang="js"><span class="hljs-keyword">const</span> isBalanced = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">root</span>) </span>{
  <span class="hljs-comment">// \u7ACB\u4E00\u4E2Aflag\uFF0C\u53EA\u8981\u6709\u4E00\u4E2A\u9AD8\u5EA6\u5DEE\u7EDD\u5BF9\u503C\u5927\u4E8E1\uFF0C\u8FD9\u4E2Aflag\u5C31\u4F1A\u88AB\u7F6E\u4E3Afalse</span>
  <span class="hljs-keyword">let</span> flag = <span class="hljs-literal">true</span>
  <span class="hljs-comment">// \u5B9A\u4E49\u9012\u5F52\u903B\u8F91</span>
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">dfs</span>(<span class="hljs-params">root</span>) </span>{
      <span class="hljs-comment">// \u5982\u679C\u662F\u7A7A\u6811\uFF0C\u9AD8\u5EA6\u8BB0\u4E3A0\uFF1B\u5982\u679Cflag\u5DF2\u7ECFfalse\u4E86\uFF0C\u90A3\u4E48\u5C31\u6CA1\u5FC5\u8981\u5F80\u4E0B\u8D70\u4E86\uFF0C\u76F4\u63A5return</span>
      <span class="hljs-keyword">if</span>(!root || !flag) {
          <span class="hljs-keyword">return</span> <span class="hljs-number">0</span> 
      }
      <span class="hljs-comment">// \u8BA1\u7B97\u5DE6\u5B50\u6811\u7684\u9AD8\u5EA6</span>
      <span class="hljs-keyword">const</span> left = dfs(root.left)  
      <span class="hljs-comment">// \u8BA1\u7B97\u53F3\u5B50\u6811\u7684\u9AD8\u5EA6</span>
      <span class="hljs-keyword">const</span> right = dfs(root.right)  
      <span class="hljs-comment">// \u5982\u679C\u5DE6\u53F3\u5B50\u6811\u7684\u9AD8\u5EA6\u5DEE\u7EDD\u5BF9\u503C\u5927\u4E8E1\uFF0Cflag\u5C31\u7834\u529F\u4E86</span>
      <span class="hljs-keyword">if</span>(<span class="hljs-built_in">Math</span>.abs(left-right) &gt; <span class="hljs-number">1</span>) {
          flag = <span class="hljs-literal">false</span>
          <span class="hljs-comment">// \u540E\u9762\u518D\u53D1\u751F\u4EC0\u4E48\u5DF2\u7ECF\u4E0D\u91CD\u8981\u4E86\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u4E0D\u5F71\u54CD\u56DE\u6EAF\u8BA1\u7B97\u7684\u503C</span>
          <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>
      }
      <span class="hljs-comment">// \u8FD4\u56DE\u5F53\u524D\u5B50\u6811\u7684\u9AD8\u5EA6</span>
      <span class="hljs-keyword">return</span> <span class="hljs-built_in">Math</span>.max(left, right) + <span class="hljs-number">1</span>
  }
  
  <span class="hljs-comment">// \u9012\u5F52\u5165\u53E3</span>
  dfs(root) 
  <span class="hljs-comment">// \u8FD4\u56DEflag\u7684\u503C</span>
  <span class="hljs-keyword">return</span> flag
};
</code></pre>
<h2 data-id="heading-6">\u5E73\u8861\u4E8C\u53C9\u6811\u7684\u6784\u9020</h2>
<blockquote>
<p>\u9898\u76EE\u63CF\u8FF0\uFF1A\u7ED9\u4F60\u4E00\u68F5\u4E8C\u53C9\u641C\u7D22\u6811\uFF0C\u8BF7\u4F60\u8FD4\u56DE\u4E00\u68F5\u5E73\u8861\u540E\u7684\u4E8C\u53C9\u641C\u7D22\u6811\uFF0C\u65B0\u751F\u6210\u7684\u6811\u5E94\u8BE5\u4E0E\u539F\u6765\u7684\u6811\u6709\u7740\u76F8\u540C\u7684\u8282\u70B9\u503C\u3002</p>
</blockquote>
<p>\u5982\u679C\u4E00\u68F5\u4E8C\u53C9\u641C\u7D22\u6811\u4E2D\uFF0C\u6BCF\u4E2A\u8282\u70B9\u7684\u4E24\u68F5\u5B50\u6811\u9AD8\u5EA6\u5DEE\u4E0D\u8D85\u8FC7 1 \uFF0C\u6211\u4EEC\u5C31\u79F0\u8FD9\u68F5\u4E8C\u53C9\u641C\u7D22\u6811\u662F\u5E73\u8861\u7684\u3002<br>
\u5982\u679C\u6709\u591A\u79CD\u6784\u9020\u65B9\u6CD5\uFF0C\u8BF7\u4F60\u8FD4\u56DE\u4EFB\u610F\u4E00\u79CD\u3002</p>
<blockquote>
<p>\u793A\u4F8B\uFF1A</p>
</blockquote>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/4/171e046bc8287d8b~tplv-t2oaga2asx-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image">
<img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/4/171e046d9a086675~tplv-t2oaga2asx-watermark.awebp" alt="" loading="lazy" class="medium-zoom-image"></p>
<blockquote>
<p>\u8F93\u5165\uFF1Aroot = [1,null,2,null,3,null,4,null,null]</p>
</blockquote>
<p>\u8F93\u51FA\uFF1A[2,1,3,null,null,null,4]<br>
\u89E3\u91CA\uFF1A\u8FD9\u4E0D\u662F\u552F\u4E00\u7684\u6B63\u786E\u7B54\u6848\uFF0C[3,1,4,null,2,null,null] \u4E5F\u662F\u4E00\u4E2A\u53EF\u884C\u7684\u6784\u9020\u65B9\u6848\u3002<br>
</p>
<blockquote>
<p>\u63D0\u793A\uFF1A</p>
</blockquote>
<p>\u6811\u8282\u70B9\u7684\u6570\u76EE\u5728&nbsp;1&nbsp;\u5230&nbsp;10^4&nbsp;\u4E4B\u95F4\u3002
\u6811\u8282\u70B9\u7684\u503C\u4E92\u4E0D\u76F8\u540C\uFF0C\u4E14\u5728&nbsp;1&nbsp;\u5230&nbsp;10^5 \u4E4B\u95F4\u3002</p>
<h3 data-id="heading-7">\u601D\u8DEF\u5206\u6790</h3>
<p>\u8FD9\u9053\u9898\u4E4D\u4E00\u770B\u6709\u70B9\u552C\u4EBA\uFF0C\u53EF\u80FD\u4F1A\u76F4\u63A5\u5E72\u61F5\u4E00\u90E8\u5206\u540C\u5B66\u3002\u4E0D\u8FC7\u4E0D\u7528\u614C\u2014\u2014\u9898\u76EE\u518D\u65B0\uFF0C\u5957\u8DEF\u4F9D\u65E7\u3002\u53EA\u8981\u4F60\u5BF9\u6838\u5FC3\u8003\u70B9\u628A\u63E1\u5F97\u8DB3\u591F\u624E\u5B9E\uFF0C\u5B83\u5C31\u96BE\u4E0D\u5012\u4F60\u3002</p>
<p>\u6211\u4EEC\u6765\u5206\u6790\u4E00\u4E0B\u8FD9\u9053\u9898\u7684\u6838\u5FC3\u8BC9\u6C42\uFF1A\u8981\u6C42\u6211\u4EEC\u6784\u9020\u4E00\u68F5\u5E73\u8861\u7684\u4E8C\u53C9\u641C\u7D22\u6811\u3002\u5148\u629B\u5F00\u9898\u5E72\u4E2D\u5404\u79CD\u524D\u7F6E\u6761\u4EF6\u4E0D\u8C08\uFF0C\u5355\u770B\u8FD9\u4E2A\u8F93\u51FA\u7ED3\u679C\uFF0C\u4F60\u4F1A\u4E0D\u4F1A\u6709\u4E00\u79CD\u4F3C\u66FE\u76F8\u8BC6\u7684\u611F\u89C9\u5462\uFF1F\u6CA1\u9519\uFF0C\u5728\u4E0A\u4E00\u8282\u7684\u6700\u540E\u4E00\u9053\u771F\u9898\u4E2D\uFF0C\u6211\u4EEC\u4E5F\u6784\u9020\u8FC7\u8FD9\u6837\u7684\u4E00\u68F5\u4E8C\u53C9\u6811\u3002</p>
<p>\u90A3\u4E48\u8FD9\u4E24\u9053\u9898\u4E4B\u95F4\u4F1A\u4E0D\u4F1A\u6709\u4EC0\u4E48\u5FAE\u5999\u7684\u8054\u7CFB\u5462\uFF1F\u7B54\u6848\u662F\u4F1A\uFF0C\u4E0D\u7136\uFF0C\u7B14\u8005\u4E5F\u4E0D\u4F1A\u628A\u5B83\u4EEC\u653E\u5F97\u8FD9\u4E48\u8FD1\uFF08\u75AF\u72C2\u6697\u793A\uFF09\u3002\u4E24\u9053\u9898\u4E4B\u95F4\u552F\u4E00\u7684\u5DEE\u522B\u5728\u4E8E\u8F93\u5165\uFF1A\u5728\u6211\u4EEC\u5DF2\u7ECF\u505A\u8FC7\u7684\u90A3\u9053\u9898\u4E2D\uFF0C\u8F93\u5165\u53C2\u6570\u662F\u4E00\u4E2A\u6709\u5E8F\u6570\u7EC4\uFF1B\u800C\u8FD9\u9053\u9898\u4E2D\uFF0C\u8F93\u5165\u53C2\u6570\u662F\u4E00\u4E2A\u4E8C\u53C9\u641C\u7D22\u6811\u3002</p>
<p>\u5514\uFF0C\u518D\u60F3\u60F3\uFF01\u4E0A\u4E00\u8282\u90A3\u9053\u9898\u91CC\u7684\u201C\u6709\u5E8F\u6570\u7EC4\u201D\uFF0C\u548C\u773C\u524D\u8FD9\u9053\u9898\u91CC\u7684\u201C\u4E8C\u53C9\u641C\u7D22\u6811\u201D\u4E4B\u95F4\uFF0C\u4F1A\u4E0D\u4F1A\u6709\u4EC0\u4E48\u5999\u4E0D\u53EF\u8A00\u7684\u5173\u7CFB\u5462\uFF1F</p>
<p>\u522B\u5FD8\u4E86\uFF0C<strong>\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u662F\u6709\u5E8F\u7684</strong>\uFF01\u6240\u8C13\u6709\u5E8F\u6570\u7EC4\uFF0C\u5B8C\u5168\u53EF\u4EE5\u7406\u89E3\u4E3A\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u554A\uFF0C\u5BF9\u4E0D\u5BF9\uFF1F\u73B0\u5728\u6811\u90FD\u7ED9\u5230\u54B1\u4EEC\u624B\u91CC\u4E86\uFF0C\u6C42\u5B83\u7684\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u662F\u4E0D\u662F\u975E\u5E38 easy\uFF1F\u5982\u679C\u80FD\u628A\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u6C42\u51FA\u6765\uFF0C\u8FD9\u9053\u9898\u662F\u4E0D\u662F\u5C31\u8DDF\u4E4B\u524D\u505A\u8FC7\u90A3\u9053\u662F\u4E00\u6A21\u4E00\u6837\u7684\u89E3\u6CD5\u4E86\uFF1F</p>
<p>\u6CA1\u9519\uFF0C\u8FD9\u9053\u9898\u7684\u89E3\u9898\u601D\u8DEF\u6B63\u662F\uFF1A</p>
<ol>
<li>\u4E2D\u5E8F\u904D\u5386\u6C42\u51FA\u6709\u5E8F\u6570\u7EC4</li>
<li>\u9010\u4E2A\u5C06\u4E8C\u5206\u51FA\u6765\u7684\u6570\u7EC4\u5B50\u5E8F\u5217\u201C\u63D0\u201D\u8D77\u6765\u53D8\u6210\u4E8C\u53C9\u641C\u7D22\u6811</li>
</ol>
<h3 data-id="heading-8">\u7F16\u7801\u5B9E\u73B0</h3>
<pre><code class="hljs language-js" lang="js"><span class="hljs-comment">/**
 * <span class="hljs-doctag">@param <span class="hljs-type">{TreeNode}</span> <span class="hljs-variable">root</span></span>
 * <span class="hljs-doctag">@return <span class="hljs-type">{TreeNode}</span></span>
 */</span>
<span class="hljs-keyword">const</span> balanceBST = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">root</span>) </span>{
    <span class="hljs-comment">// \u521D\u59CB\u5316\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u6570\u7EC4</span>
    <span class="hljs-keyword">const</span> nums = []
    <span class="hljs-comment">// \u5B9A\u4E49\u4E2D\u5E8F\u904D\u5386\u4E8C\u53C9\u6811\uFF0C\u5F97\u5230\u6709\u5E8F\u6570\u7EC4</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">inorder</span>(<span class="hljs-params">root</span>) </span>{
        <span class="hljs-keyword">if</span>(!root) {
            <span class="hljs-keyword">return</span> 
        }
        inorder(root.left)  
        nums.push(root.val)  
        inorder(root.right)
    }
    
    <span class="hljs-comment">// \u8FD9\u5768\u4EE3\u7801\u7684\u903B\u8F91\u548C\u4E0A\u4E00\u8282\u6700\u540E\u4E00\u9898\u7684\u4EE3\u7801\u4E00\u6A21\u4E00\u6837</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">buildAVL</span>(<span class="hljs-params">low, high</span>) </span>{
        <span class="hljs-comment">// \u82E5 low &gt; high\uFF0C\u5219\u8D8A\u754C\uFF0C\u8BF4\u660E\u5F53\u524D\u7D22\u5F15\u8303\u56F4\u5BF9\u5E94\u7684\u5B50\u6811\u5DF2\u7ECF\u6784\u5EFA\u5B8C\u6BD5</span>
        <span class="hljs-keyword">if</span>(low&gt;high) {
            <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>
        }
        <span class="hljs-comment">// \u53D6\u6570\u7EC4\u7684\u4E2D\u95F4\u503C\u4F5C\u4E3A\u6839\u7ED3\u70B9\u503C</span>
        <span class="hljs-keyword">const</span> mid = <span class="hljs-built_in">Math</span>.floor(low + (high -low)/<span class="hljs-number">2</span>)
        <span class="hljs-comment">// \u521B\u9020\u5F53\u524D\u6811\u7684\u6839\u7ED3\u70B9</span>
        <span class="hljs-keyword">const</span> cur = <span class="hljs-keyword">new</span> TreeNode(nums[mid])  
        <span class="hljs-comment">// \u6784\u5EFA\u5DE6\u5B50\u6811</span>
        cur.left = buildAVL(low, mid-<span class="hljs-number">1</span>) 
        <span class="hljs-comment">// \u6784\u5EFA\u53F3\u5B50\u6811</span>
        cur.right = buildAVL(mid+<span class="hljs-number">1</span>, high)  
        <span class="hljs-comment">// \u8FD4\u56DE\u5F53\u524D\u6811\u7684\u6839\u7ED3\u70B9 </span>
        <span class="hljs-keyword">return</span> cur
    }
    <span class="hljs-comment">// \u8C03\u7528\u4E2D\u5E8F\u904D\u5386\u65B9\u6CD5\uFF0C\u6C42\u51FA nums</span>
    inorder(root)
    <span class="hljs-comment">// \u57FA\u4E8E nums\uFF0C\u6784\u9020\u5E73\u8861\u4E8C\u53C9\u6811</span>
    <span class="hljs-keyword">return</span> buildAVL(<span class="hljs-number">0</span>, nums.length-<span class="hljs-number">1</span>)
};
</code></pre><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`};export{n as default};
