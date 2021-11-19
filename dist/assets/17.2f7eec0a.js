var n={name:"\u67E5\u8BE2\u4F18\u5316\u7684\u767E\u79D1\u5168\u4E66 \u2014\u2014 Explain \u8BE6\u89E3\uFF08\u4E0B\uFF09",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h1 data-id="heading-0">Explain \u8BE6\u89E3\uFF08\u4E0B\uFF09</h1>
<p>\u6807\u7B7E\uFF1A MySQL \u662F\u600E\u6837\u8FD0\u884C\u7684</p>
<hr>
<h2 data-id="heading-1">\u6267\u884C\u8BA1\u5212\u8F93\u51FA\u4E2D\u5404\u5217\u8BE6\u89E3</h2>
<p>\u672C\u7AE0\u7D27\u63A5\u7740\u4E0A\u4E00\u8282\u7684\u5185\u5BB9\uFF0C\u7EE7\u7EED\u5520\u53E8<code>EXPLAIN</code>\u8BED\u53E5\u8F93\u51FA\u7684\u5404\u4E2A\u5217\u7684\u610F\u601D\u3002</p>
<h3 data-id="heading-2">Extra</h3>
<p>\u987E\u540D\u601D\u4E49\uFF0C<code>Extra</code>\u5217\u662F\u7528\u6765\u8BF4\u660E\u4E00\u4E9B\u989D\u5916\u4FE1\u606F\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E9B\u989D\u5916\u4FE1\u606F\u6765\u66F4\u51C6\u786E\u7684\u7406\u89E3<code>MySQL</code>\u5230\u5E95\u5C06\u5982\u4F55\u6267\u884C\u7ED9\u5B9A\u7684\u67E5\u8BE2\u8BED\u53E5\u3002<code>MySQL</code>\u63D0\u4F9B\u7684\u989D\u5916\u4FE1\u606F\u6709\u597D\u51E0\u5341\u4E2A\uFF0C\u6211\u4EEC\u5C31\u4E0D\u4E00\u4E2A\u4E00\u4E2A\u4ECB\u7ECD\u4E86\uFF08\u90FD\u4ECB\u7ECD\u4E86\u611F\u89C9\u6211\u4EEC\u7684\u6587\u7AE0\u5C31\u8DDF\u6587\u6863\u5DEE\u4E0D\u591A\u4E86\uFF5E\uFF09\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EA\u6311\u4E00\u4E9B\u5E73\u65F6\u5E38\u89C1\u7684\u6216\u8005\u6BD4\u8F83\u91CD\u8981\u7684\u989D\u5916\u4FE1\u606F\u4ECB\u7ECD\u7ED9\u5927\u5BB6\u54C8\u3002</p>
<ul>
<li>
<p><code>No tables used</code></p>
<p>\u5F53\u67E5\u8BE2\u8BED\u53E5\u7684\u6CA1\u6709<code>FROM</code>\u5B50\u53E5\u65F6\u5C06\u4F1A\u63D0\u793A\u8BE5\u989D\u5916\u4FE1\u606F\uFF0C\u6BD4\u5982\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT 1;
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+----------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key  | key_len | ref  | rows | filtered | Extra          |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+----------------+
|  1 | SIMPLE      | NULL  | NULL       | NULL | NULL          | NULL | NULL    | NULL | NULL |     NULL | No tables used |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+----------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre></li>
<li>
<p><code>Impossible WHERE</code></p>
<p>\u67E5\u8BE2\u8BED\u53E5\u7684<code>WHERE</code>\u5B50\u53E5\u6C38\u8FDC\u4E3A<code>FALSE</code>\u65F6\u5C06\u4F1A\u63D0\u793A\u8BE5\u989D\u5916\u4FE1\u606F\uFF0C\u6BD4\u65B9\u8BF4\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE 1 != 1;
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+------------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key  | key_len | ref  | rows | filtered | Extra            |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+------------------+
|  1 | SIMPLE      | NULL  | NULL       | NULL | NULL          | NULL | NULL    | NULL | NULL |     NULL | Impossible WHERE |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+------------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.01 sec)
</code></pre></li>
<li>
<p><code>No matching min/max row</code></p>
<p>\u5F53\u67E5\u8BE2\u5217\u8868\u5904\u6709<code>MIN</code>\u6216\u8005<code>MAX</code>\u805A\u96C6\u51FD\u6570\uFF0C\u4F46\u662F\u5E76\u6CA1\u6709\u7B26\u5408<code>WHERE</code>\u5B50\u53E5\u4E2D\u7684\u641C\u7D22\u6761\u4EF6\u7684\u8BB0\u5F55\u65F6\uFF0C\u5C06\u4F1A\u63D0\u793A\u8BE5\u989D\u5916\u4FE1\u606F\uFF0C\u6BD4\u65B9\u8BF4\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT MIN(key1) FROM s1 WHERE key1 = <span>'abcdefg'</span>;
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key  | key_len | ref  | rows | filtered | Extra                   |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------------------+
|  1 | SIMPLE      | NULL  | NULL       | NULL | NULL          | NULL | NULL    | NULL | NULL |     NULL | No matching min/max row |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre></li>
<li>
<p><code>Using index</code></p>
<p>\u5F53\u6211\u4EEC\u7684\u67E5\u8BE2\u5217\u8868\u4EE5\u53CA\u641C\u7D22\u6761\u4EF6\u4E2D\u53EA\u5305\u542B\u5C5E\u4E8E\u67D0\u4E2A\u7D22\u5F15\u7684\u5217\uFF0C\u4E5F\u5C31\u662F\u5728\u53EF\u4EE5\u4F7F\u7528\u7D22\u5F15\u8986\u76D6\u7684\u60C5\u51B5\u4E0B\uFF0C\u5728<code>Extra</code>\u5217\u5C06\u4F1A\u63D0\u793A\u8BE5\u989D\u5916\u4FE1\u606F\u3002\u6BD4\u65B9\u8BF4\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\u4E2D\u53EA\u9700\u8981\u7528\u5230<code>idx_key1</code>\u800C\u4E0D\u9700\u8981\u56DE\u8868\u64CD\u4F5C\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT key1 FROM s1 WHERE key1 = <span>'a'</span>;
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key      | key_len | ref   | rows | filtered | Extra       |
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------------+
|  1 | SIMPLE      | s1    | NULL       | ref  | idx_key1      | idx_key1 | 303     | const |    8 |   100.00 | Using index |
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre></li>
<li>
<p><code>Using index condition</code></p>
<p>\u6709\u4E9B\u641C\u7D22\u6761\u4EF6\u4E2D\u867D\u7136\u51FA\u73B0\u4E86\u7D22\u5F15\u5217\uFF0C\u4F46\u5374\u4E0D\u80FD\u4F7F\u7528\u5230\u7D22\u5F15\uFF0C\u6BD4\u5982\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">SELECT * FROM s1 WHERE key1 &gt; <span>'z'</span> AND key1 LIKE <span>'%a'</span>;
</code></pre><p>\u5176\u4E2D\u7684<code>key1 &gt; 'z'</code>\u53EF\u4EE5\u4F7F\u7528\u5230\u7D22\u5F15\uFF0C\u4F46\u662F<code>key1 LIKE '%a'</code>\u5374\u65E0\u6CD5\u4F7F\u7528\u5230\u7D22\u5F15\uFF0C\u5728\u4EE5\u524D\u7248\u672C\u7684<code>MySQL</code>\u4E2D\uFF0C\u662F\u6309\u7167\u4E0B\u8FB9\u6B65\u9AA4\u6765\u6267\u884C\u8FD9\u4E2A\u67E5\u8BE2\u7684\uFF1A</p>
<ul>
<li>
<p>\u5148\u6839\u636E<code>key1 &gt; 'z'</code>\u8FD9\u4E2A\u6761\u4EF6\uFF0C\u4ECE\u4E8C\u7EA7\u7D22\u5F15<code>idx_key1</code>\u4E2D\u83B7\u53D6\u5230\u5BF9\u5E94\u7684\u4E8C\u7EA7\u7D22\u5F15\u8BB0\u5F55\u3002</p>
</li>
<li>
<p>\u6839\u636E\u4E0A\u4E00\u6B65\u9AA4\u5F97\u5230\u7684\u4E8C\u7EA7\u7D22\u5F15\u8BB0\u5F55\u4E2D\u7684\u4E3B\u952E\u503C\u8FDB\u884C\u56DE\u8868\uFF0C\u627E\u5230\u5B8C\u6574\u7684\u7528\u6237\u8BB0\u5F55\u518D\u68C0\u6D4B\u8BE5\u8BB0\u5F55\u662F\u5426\u7B26\u5408<code>key1 LIKE '%a'</code>\u8FD9\u4E2A\u6761\u4EF6\uFF0C\u5C06\u7B26\u5408\u6761\u4EF6\u7684\u8BB0\u5F55\u52A0\u5165\u5230\u6700\u540E\u7684\u7ED3\u679C\u96C6\u3002</p>
</li>
</ul>
<p>\u4F46\u662F\u867D\u7136<code>key1 LIKE '%a'</code>\u4E0D\u80FD\u7EC4\u6210\u8303\u56F4\u533A\u95F4\u53C2\u4E0E<code>range</code>\u8BBF\u95EE\u65B9\u6CD5\u7684\u6267\u884C\uFF0C\u4F46\u8FD9\u4E2A\u6761\u4EF6\u6BD5\u7ADF\u53EA\u6D89\u53CA\u5230\u4E86<code>key1</code>\u5217\uFF0C\u6240\u4EE5\u8BBE\u8BA1<code>MySQL</code>\u7684\u5927\u53D4\u628A\u4E0A\u8FB9\u7684\u6B65\u9AA4\u6539\u8FDB\u4E86\u4E00\u4E0B\uFF1A</p>
<ul>
<li>
<p>\u5148\u6839\u636E<code>key1 &gt; 'z'</code>\u8FD9\u4E2A\u6761\u4EF6\uFF0C\u5B9A\u4F4D\u5230\u4E8C\u7EA7\u7D22\u5F15<code>idx_key1</code>\u4E2D\u5BF9\u5E94\u7684\u4E8C\u7EA7\u7D22\u5F15\u8BB0\u5F55\u3002</p>
</li>
<li>
<p>\u5BF9\u4E8E\u6307\u5B9A\u7684\u4E8C\u7EA7\u7D22\u5F15\u8BB0\u5F55\uFF0C\u5148\u4E0D\u7740\u6025\u56DE\u8868\uFF0C\u800C\u662F\u5148\u68C0\u6D4B\u4E00\u4E0B\u8BE5\u8BB0\u5F55\u662F\u5426\u6EE1\u8DB3<code>key1 LIKE '%a'</code>\u8FD9\u4E2A\u6761\u4EF6\uFF0C\u5982\u679C\u8FD9\u4E2A\u6761\u4EF6\u4E0D\u6EE1\u8DB3\uFF0C\u5219\u8BE5\u4E8C\u7EA7\u7D22\u5F15\u8BB0\u5F55\u538B\u6839\u513F\u5C31\u6CA1\u5FC5\u8981\u56DE\u8868\u3002</p>
</li>
<li>
<p>\u5BF9\u4E8E\u6EE1\u8DB3<code>key1 LIKE '%a'</code>\u8FD9\u4E2A\u6761\u4EF6\u7684\u4E8C\u7EA7\u7D22\u5F15\u8BB0\u5F55\u6267\u884C\u56DE\u8868\u64CD\u4F5C\u3002</p>
</li>
</ul>
<p>\u6211\u4EEC\u8BF4\u56DE\u8868\u64CD\u4F5C\u5176\u5B9E\u662F\u4E00\u4E2A\u968F\u673A<code>IO</code>\uFF0C\u6BD4\u8F83\u8017\u65F6\uFF0C\u6240\u4EE5\u4E0A\u8FF0\u4FEE\u6539\u867D\u7136\u53EA\u6539\u8FDB\u4E86\u4E00\u70B9\u70B9\uFF0C\u4F46\u662F\u53EF\u4EE5\u7701\u53BB\u597D\u591A\u56DE\u8868\u64CD\u4F5C\u7684\u6210\u672C\u3002\u8BBE\u8BA1<code>MySQL</code>\u7684\u5927\u53D4\u4EEC\u628A\u4ED6\u4EEC\u7684\u8FD9\u4E2A\u6539\u8FDB\u79F0\u4E4B\u4E3A<code>\u7D22\u5F15\u6761\u4EF6\u4E0B\u63A8</code>\uFF08\u82F1\u6587\u540D\uFF1A<code>Index Condition Pushdown</code>\uFF09\u3002</p>
<p>\u5982\u679C\u5728\u67E5\u8BE2\u8BED\u53E5\u7684\u6267\u884C\u8FC7\u7A0B\u4E2D\u5C06\u8981\u4F7F\u7528<code>\u7D22\u5F15\u6761\u4EF6\u4E0B\u63A8</code>\u8FD9\u4E2A\u7279\u6027\uFF0C\u5728<code>Extra</code>\u5217\u4E2D\u5C06\u4F1A\u663E\u793A<code>Using index condition</code>\uFF0C\u6BD4\u5982\u8FD9\u6837\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 &gt; <span>'z'</span> AND key1 LIKE <span>'%b'</span>;
  +----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-----------------------+
  | id | select_type | table | partitions | <span>type</span>  | possible_keys | key      | key_len | ref  | rows | filtered | Extra                 |
  +----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-----------------------+
  |  1 | SIMPLE      | s1    | NULL       | range | idx_key1      | idx_key1 | 303     | NULL |  266 |   100.00 | Using index condition |
  +----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-----------------------+
  1 row <span>in</span> <span>set</span>, 1 warning (0.01 sec)
</code></pre></li>
<li>
<p><code>Using where</code></p>
<p>\u5F53\u6211\u4EEC\u4F7F\u7528\u5168\u8868\u626B\u63CF\u6765\u6267\u884C\u5BF9\u67D0\u4E2A\u8868\u7684\u67E5\u8BE2\uFF0C\u5E76\u4E14\u8BE5\u8BED\u53E5\u7684<code>WHERE</code>\u5B50\u53E5\u4E2D\u6709\u9488\u5BF9\u8BE5\u8868\u7684\u641C\u7D22\u6761\u4EF6\u65F6\uFF0C\u5728<code>Extra</code>\u5217\u4E2D\u4F1A\u63D0\u793A\u4E0A\u8FF0\u989D\u5916\u4FE1\u606F\u3002\u6BD4\u5982\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE common_field = <span>'a'</span>;
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key  | key_len | ref  | rows | filtered | Extra       |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+
|  1 | SIMPLE      | s1    | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9688 |    10.00 | Using <span>where</span> |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.01 sec)
</code></pre><p>\u5F53\u4F7F\u7528\u7D22\u5F15\u8BBF\u95EE\u6765\u6267\u884C\u5BF9\u67D0\u4E2A\u8868\u7684\u67E5\u8BE2\uFF0C\u5E76\u4E14\u8BE5\u8BED\u53E5\u7684<code>WHERE</code>\u5B50\u53E5\u4E2D\u6709\u9664\u4E86\u8BE5\u7D22\u5F15\u5305\u542B\u7684\u5217\u4E4B\u5916\u7684\u5176\u4ED6\u641C\u7D22\u6761\u4EF6\u65F6\uFF0C\u5728<code>Extra</code>\u5217\u4E2D\u4E5F\u4F1A\u63D0\u793A\u4E0A\u8FF0\u989D\u5916\u4FE1\u606F\u3002\u6BD4\u5982\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\u867D\u7136\u4F7F\u7528<code>idx_key1</code>\u7D22\u5F15\u6267\u884C\u67E5\u8BE2\uFF0C\u4F46\u662F\u641C\u7D22\u6761\u4EF6\u4E2D\u9664\u4E86\u5305\u542B<code>key1</code>\u7684\u641C\u7D22\u6761\u4EF6<code>key1 = 'a'</code>\uFF0C\u8FD8\u6709\u5305\u542B<code>common_field</code>\u7684\u641C\u7D22\u6761\u4EF6\uFF0C\u6240\u4EE5<code>Extra</code>\u5217\u4F1A\u663E\u793A<code>Using where</code>\u7684\u63D0\u793A\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 = <span>'a'</span> AND common_field = <span>'a'</span>;
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key      | key_len | ref   | rows | filtered | Extra       |
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------------+
|  1 | SIMPLE      | s1    | NULL       | ref  | idx_key1      | idx_key1 | 303     | const |    8 |    10.00 | Using <span>where</span> |
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre></li>
<li>
<p><code>Using join buffer (Block Nested Loop)</code></p>
<p>\u5728\u8FDE\u63A5\u67E5\u8BE2\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u5F53\u88AB\u9A71\u52A8\u8868\u4E0D\u80FD\u6709\u6548\u7684\u5229\u7528\u7D22\u5F15\u52A0\u5FEB\u8BBF\u95EE\u901F\u5EA6\uFF0C<code>MySQL</code>\u4E00\u822C\u4F1A\u4E3A\u5176\u5206\u914D\u4E00\u5757\u540D\u53EB<code>join buffer</code>\u7684\u5185\u5B58\u5757\u6765\u52A0\u5FEB\u67E5\u8BE2\u901F\u5EA6\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u6240\u8BB2\u7684<code>\u57FA\u4E8E\u5757\u7684\u5D4C\u5957\u5FAA\u73AF\u7B97\u6CD5</code>\uFF0C\u6BD4\u5982\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\u8BED\u53E5\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 INNER JOIN s2 ON s1.common_field = s2.common_field;
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+----------------------------------------------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key  | key_len | ref  | rows | filtered | Extra                                              |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+----------------------------------------------------+
|  1 | SIMPLE      | s1    | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9688 |   100.00 | NULL                                               |
|  1 | SIMPLE      | s2    | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9954 |    10.00 | Using <span>where</span>; Using join buffer (Block Nested Loop) |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+----------------------------------------------------+
2 rows <span>in</span> <span>set</span>, 1 warning (0.03 sec)
</code></pre><p>\u53EF\u4EE5\u5728\u5BF9<code>s2</code>\u8868\u7684\u6267\u884C\u8BA1\u5212\u7684<code>Extra</code>\u5217\u663E\u793A\u4E86\u4E24\u4E2A\u63D0\u793A\uFF1A</p>
<ul>
<li>
<p><code>Using join buffer (Block Nested Loop)</code>\uFF1A\u8FD9\u662F\u56E0\u4E3A\u5BF9\u8868<code>s2</code>\u7684\u8BBF\u95EE\u4E0D\u80FD\u6709\u6548\u5229\u7528\u7D22\u5F15\uFF0C\u53EA\u597D\u9000\u800C\u6C42\u5176\u6B21\uFF0C\u4F7F\u7528<code>join buffer</code>\u6765\u51CF\u5C11\u5BF9<code>s2</code>\u8868\u7684\u8BBF\u95EE\u6B21\u6570\uFF0C\u4ECE\u800C\u63D0\u9AD8\u6027\u80FD\u3002</p>
</li>
<li>
<p><code>Using where</code>\uFF1A\u53EF\u4EE5\u770B\u5230\u67E5\u8BE2\u8BED\u53E5\u4E2D\u6709\u4E00\u4E2A<code>s1.common_field = s2.common_field</code>\u6761\u4EF6\uFF0C\u56E0\u4E3A<code>s1</code>\u662F\u9A71\u52A8\u8868\uFF0C<code>s2</code>\u662F\u88AB\u9A71\u52A8\u8868\uFF0C\u6240\u4EE5\u5728\u8BBF\u95EE<code>s2</code>\u8868\u65F6\uFF0C<code>s1.common_field</code>\u7684\u503C\u5DF2\u7ECF\u786E\u5B9A\u4E0B\u6765\u4E86\uFF0C\u6240\u4EE5\u5B9E\u9645\u4E0A\u67E5\u8BE2<code>s2</code>\u8868\u7684\u6761\u4EF6\u5C31\u662F<code>s2.common_field = \u4E00\u4E2A\u5E38\u6570</code>\uFF0C\u6240\u4EE5\u63D0\u793A\u4E86<code>Using where</code>\u989D\u5916\u4FE1\u606F\u3002</p>
</li>
</ul>
</li>
<li>
<p><code>Not exists</code></p>
<p>\u5F53\u6211\u4EEC\u4F7F\u7528\u5DE6\uFF08\u5916\uFF09\u8FDE\u63A5\u65F6\uFF0C\u5982\u679C<code>WHERE</code>\u5B50\u53E5\u4E2D\u5305\u542B\u8981\u6C42\u88AB\u9A71\u52A8\u8868\u7684\u67D0\u4E2A\u5217\u7B49\u4E8E<code>NULL</code>\u503C\u7684\u641C\u7D22\u6761\u4EF6\uFF0C\u800C\u4E14\u90A3\u4E2A\u5217\u53C8\u662F\u4E0D\u5141\u8BB8\u5B58\u50A8<code>NULL</code>\u503C\u7684\uFF0C\u90A3\u4E48\u5728\u8BE5\u8868\u7684\u6267\u884C\u8BA1\u5212\u7684<code>Extra</code>\u5217\u5C31\u4F1A\u63D0\u793A<code>Not exists</code>\u989D\u5916\u4FE1\u606F\uFF0C\u6BD4\u5982\u8FD9\u6837\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 LEFT JOIN s2 ON s1.key1 = s2.key1 WHERE s2.id IS NULL;
+----+-------------+-------+------------+------+---------------+----------+---------+-------------------+------+----------+-------------------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key      | key_len | ref               | rows | filtered | Extra                   |
+----+-------------+-------+------------+------+---------------+----------+---------+-------------------+------+----------+-------------------------+
|  1 | SIMPLE      | s1    | NULL       | ALL  | NULL          | NULL     | NULL    | NULL              | 9688 |   100.00 | NULL                    |
|  1 | SIMPLE      | s2    | NULL       | ref  | idx_key1      | idx_key1 | 303     | xiaohaizi.s1.key1 |    1 |    10.00 | Using <span>where</span>; Not exists |
+----+-------------+-------+------------+------+---------------+----------+---------+-------------------+------+----------+-------------------------+
2 rows <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u4E0A\u8FF0\u67E5\u8BE2\u4E2D<code>s1</code>\u8868\u662F\u9A71\u52A8\u8868\uFF0C<code>s2</code>\u8868\u662F\u88AB\u9A71\u52A8\u8868\uFF0C<code>s2.id</code>\u5217\u662F\u4E0D\u5141\u8BB8\u5B58\u50A8<code>NULL</code>\u503C\u7684\uFF0C\u800C<code>WHERE</code>\u5B50\u53E5\u4E2D\u53C8\u5305\u542B<code>s2.id IS NULL</code>\u7684\u641C\u7D22\u6761\u4EF6\uFF0C\u8FD9\u610F\u5473\u7740\u5FC5\u5B9A\u662F\u9A71\u52A8\u8868\u7684\u8BB0\u5F55\u5728\u88AB\u9A71\u52A8\u8868\u4E2D\u627E\u4E0D\u5230\u5339\u914D<code>ON</code>\u5B50\u53E5\u6761\u4EF6\u7684\u8BB0\u5F55\u624D\u4F1A\u628A\u8BE5\u9A71\u52A8\u8868\u7684\u8BB0\u5F55\u52A0\u5165\u5230\u6700\u7EC8\u7684\u7ED3\u679C\u96C6\uFF0C\u6240\u4EE5\u5BF9\u4E8E\u67D0\u6761\u9A71\u52A8\u8868\u4E2D\u7684\u8BB0\u5F55\u6765\u8BF4\uFF0C\u5982\u679C\u80FD\u5728\u88AB\u9A71\u52A8\u8868\u4E2D\u627E\u52301\u6761\u7B26\u5408<code>ON</code>\u5B50\u53E5\u6761\u4EF6\u7684\u8BB0\u5F55\uFF0C\u90A3\u4E48\u8BE5\u9A71\u52A8\u8868\u7684\u8BB0\u5F55\u5C31\u4E0D\u4F1A\u88AB\u52A0\u5165\u5230\u6700\u7EC8\u7684\u7ED3\u679C\u96C6\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6211\u4EEC<span>\u6CA1\u6709\u5FC5\u8981\u5230\u88AB\u9A71\u52A8\u8868\u4E2D\u627E\u5230\u5168\u90E8\u7B26\u5408ON\u5B50\u53E5\u6761\u4EF6\u7684\u8BB0\u5F55</span>\uFF0C\u8FD9\u6837\u53EF\u4EE5\u7A0D\u5FAE\u8282\u7701\u4E00\u70B9\u6027\u80FD\u3002</p>
<blockquote><p>\u5C0F\u8D34\u58EB\uFF1A

\u53F3\uFF08\u5916\uFF09\u8FDE\u63A5\u53EF\u4EE5\u88AB\u8F6C\u6362\u4E3A\u5DE6\uFF08\u5916\uFF09\u8FDE\u63A5\uFF0C\u6240\u4EE5\u5C31\u4E0D\u63D0\u53F3\uFF08\u5916\uFF09\u8FDE\u63A5\u7684\u60C5\u51B5\u4E86\u3002
</p></blockquote></li>
<li>
<p><code>Using intersect(...)</code>\u3001<code>Using union(...)</code>\u548C<code>Using sort_union(...)</code></p>
<p>\u5982\u679C\u6267\u884C\u8BA1\u5212\u7684<code>Extra</code>\u5217\u51FA\u73B0\u4E86<code>Using intersect(...)</code>\u63D0\u793A\uFF0C\u8BF4\u660E\u51C6\u5907\u4F7F\u7528<code>Intersect</code>\u7D22\u5F15\u5408\u5E76\u7684\u65B9\u5F0F\u6267\u884C\u67E5\u8BE2\uFF0C\u62EC\u53F7\u4E2D\u7684<code>...</code>\u8868\u793A\u9700\u8981\u8FDB\u884C\u7D22\u5F15\u5408\u5E76\u7684\u7D22\u5F15\u540D\u79F0\uFF1B\u5982\u679C\u51FA\u73B0\u4E86<code>Using union(...)</code>\u63D0\u793A\uFF0C\u8BF4\u660E\u51C6\u5907\u4F7F\u7528<code>Union</code>\u7D22\u5F15\u5408\u5E76\u7684\u65B9\u5F0F\u6267\u884C\u67E5\u8BE2\uFF1B\u51FA\u73B0\u4E86<code>Using sort_union(...)</code>\u63D0\u793A\uFF0C\u8BF4\u660E\u51C6\u5907\u4F7F\u7528<code>Sort-Union</code>\u7D22\u5F15\u5408\u5E76\u7684\u65B9\u5F0F\u6267\u884C\u67E5\u8BE2\u3002\u6BD4\u5982\u8FD9\u4E2A\u67E5\u8BE2\u7684\u6267\u884C\u8BA1\u5212\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 = <span>'a'</span> AND key3 = <span>'a'</span>;
+----+-------------+-------+------------+-------------+-------------------+-------------------+---------+------+------+----------+-------------------------------------------------+
| id | select_type | table | partitions | <span>type</span>        | possible_keys     | key               | key_len | ref  | rows | filtered | Extra                                           |
+----+-------------+-------+------------+-------------+-------------------+-------------------+---------+------+------+----------+-------------------------------------------------+
|  1 | SIMPLE      | s1    | NULL       | index_merge | idx_key1,idx_key3 | idx_key3,idx_key1 | 303,303 | NULL |    1 |   100.00 | Using intersect(idx_key3,idx_key1); Using <span>where</span> |
+----+-------------+-------+------------+-------------+-------------------+-------------------+---------+------+------+----------+-------------------------------------------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.01 sec)
</code></pre><p>\u5176\u4E2D<code>Extra</code>\u5217\u5C31\u663E\u793A\u4E86<code>Using intersect(idx_key3,idx_key1)</code>\uFF0C\u8868\u660E<code>MySQL</code>\u5373\u5C06\u4F7F\u7528<code>idx_key3</code>\u548C<code>idx_key1</code>\u8FD9\u4E24\u4E2A\u7D22\u5F15\u8FDB\u884C<code>Intersect</code>\u7D22\u5F15\u5408\u5E76\u7684\u65B9\u5F0F\u6267\u884C\u67E5\u8BE2\u3002</p>
<blockquote><p>\u5C0F\u8D34\u58EB\uFF1A

\u5269\u4E0B\u4E24\u79CD\u7C7B\u578B\u7684\u7D22\u5F15\u5408\u5E76\u7684Extra\u5217\u4FE1\u606F\u5C31\u4E0D\u4E00\u4E00\u4E3E\u4F8B\u5B50\u4E86\uFF0C\u81EA\u5DF1\u5199\u4E2A\u67E5\u8BE2\u7785\u7785\u5457\uFF5E
</p></blockquote></li>
<li>
<p><code>Zero limit</code></p>
<p>\u5F53\u6211\u4EEC\u7684<code>LIMIT</code>\u5B50\u53E5\u7684\u53C2\u6570\u4E3A<code>0</code>\u65F6\uFF0C\u8868\u793A\u538B\u6839\u513F\u4E0D\u6253\u7B97\u4ECE\u8868\u4E2D\u8BFB\u51FA\u4EFB\u4F55\u8BB0\u5F55\uFF0C\u5C06\u4F1A\u63D0\u793A\u8BE5\u989D\u5916\u4FE1\u606F\uFF0C\u6BD4\u5982\u8FD9\u6837\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 LIMIT 0;
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key  | key_len | ref  | rows | filtered | Extra      |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+------------+
|  1 | SIMPLE      | NULL  | NULL       | NULL | NULL          | NULL | NULL    | NULL | NULL |     NULL | Zero <span>limit</span> |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre></li>
<li>
<p><code>Using filesort</code></p>
<p>\u6709\u4E00\u4E9B\u60C5\u51B5\u4E0B\u5BF9\u7ED3\u679C\u96C6\u4E2D\u7684\u8BB0\u5F55\u8FDB\u884C\u6392\u5E8F\u662F\u53EF\u4EE5\u4F7F\u7528\u5230\u7D22\u5F15\u7684\uFF0C\u6BD4\u5982\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 ORDER BY key1 LIMIT 10;
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-------+
| id | select_type | table | partitions | <span>type</span>  | possible_keys | key      | key_len | ref  | rows | filtered | Extra |
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-------+
|  1 | SIMPLE      | s1    | NULL       | index | NULL          | idx_key1 | 303     | NULL |   10 |   100.00 | NULL  |
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-------+
1 row <span>in</span> <span>set</span>, 1 warning (0.03 sec)
</code></pre><p>\u8FD9\u4E2A\u67E5\u8BE2\u8BED\u53E5\u53EF\u4EE5\u5229\u7528<code>idx_key1</code>\u7D22\u5F15\u76F4\u63A5\u53D6\u51FA<code>key1</code>\u5217\u768410\u6761\u8BB0\u5F55\uFF0C\u7136\u540E\u518D\u8FDB\u884C\u56DE\u8868\u64CD\u4F5C\u5C31\u597D\u4E86\u3002\u4F46\u662F\u5F88\u591A\u60C5\u51B5\u4E0B\u6392\u5E8F\u64CD\u4F5C\u65E0\u6CD5\u4F7F\u7528\u5230\u7D22\u5F15\uFF0C\u53EA\u80FD\u5728\u5185\u5B58\u4E2D\uFF08\u8BB0\u5F55\u8F83\u5C11\u7684\u65F6\u5019\uFF09\u6216\u8005\u78C1\u76D8\u4E2D\uFF08\u8BB0\u5F55\u8F83\u591A\u7684\u65F6\u5019\uFF09\u8FDB\u884C\u6392\u5E8F\uFF0C\u8BBE\u8BA1<code>MySQL</code>\u7684\u5927\u53D4\u628A\u8FD9\u79CD\u5728\u5185\u5B58\u4E2D\u6216\u8005\u78C1\u76D8\u4E0A\u8FDB\u884C\u6392\u5E8F\u7684\u65B9\u5F0F\u7EDF\u79F0\u4E3A\u6587\u4EF6\u6392\u5E8F\uFF08\u82F1\u6587\u540D\uFF1A<code>filesort</code>\uFF09\u3002\u5982\u679C\u67D0\u4E2A\u67E5\u8BE2\u9700\u8981\u4F7F\u7528\u6587\u4EF6\u6392\u5E8F\u7684\u65B9\u5F0F\u6267\u884C\u67E5\u8BE2\uFF0C\u5C31\u4F1A\u5728\u6267\u884C\u8BA1\u5212\u7684<code>Extra</code>\u5217\u4E2D\u663E\u793A<code>Using filesort</code>\u63D0\u793A\uFF0C\u6BD4\u5982\u8FD9\u6837\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 ORDER BY common_field LIMIT 10;
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+----------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key  | key_len | ref  | rows | filtered | Extra          |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+----------------+
|  1 | SIMPLE      | s1    | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9688 |   100.00 | Using filesort |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+----------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u67E5\u8BE2\u4E2D\u9700\u8981\u4F7F\u7528<code>filesort</code>\u7684\u65B9\u5F0F\u8FDB\u884C\u6392\u5E8F\u7684\u8BB0\u5F55\u975E\u5E38\u591A\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u8FC7\u7A0B\u662F\u5F88\u8017\u8D39\u6027\u80FD\u7684\uFF0C\u6211\u4EEC\u6700\u597D\u60F3\u529E\u6CD5\u5C06\u4F7F\u7528<code>\u6587\u4EF6\u6392\u5E8F</code>\u7684\u6267\u884C\u65B9\u5F0F\u6539\u4E3A\u4F7F\u7528\u7D22\u5F15\u8FDB\u884C\u6392\u5E8F\u3002</p>
</li>
<li>
<p><code>Using temporary</code></p>
<p>\u5728\u8BB8\u591A\u67E5\u8BE2\u7684\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C<code>MySQL</code>\u53EF\u80FD\u4F1A\u501F\u52A9\u4E34\u65F6\u8868\u6765\u5B8C\u6210\u4E00\u4E9B\u529F\u80FD\uFF0C\u6BD4\u5982\u53BB\u91CD\u3001\u6392\u5E8F\u4E4B\u7C7B\u7684\uFF0C\u6BD4\u5982\u6211\u4EEC\u5728\u6267\u884C\u8BB8\u591A\u5305\u542B<code>DISTINCT</code>\u3001<code>GROUP BY</code>\u3001<code>UNION</code>\u7B49\u5B50\u53E5\u7684\u67E5\u8BE2\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u4E0D\u80FD\u6709\u6548\u5229\u7528\u7D22\u5F15\u6765\u5B8C\u6210\u67E5\u8BE2\uFF0C<code>MySQL</code>\u5F88\u6709\u53EF\u80FD\u5BFB\u6C42\u901A\u8FC7\u5EFA\u7ACB\u5185\u90E8\u7684\u4E34\u65F6\u8868\u6765\u6267\u884C\u67E5\u8BE2\u3002\u5982\u679C\u67E5\u8BE2\u4E2D\u4F7F\u7528\u5230\u4E86\u5185\u90E8\u7684\u4E34\u65F6\u8868\uFF0C\u5728\u6267\u884C\u8BA1\u5212\u7684<code>Extra</code>\u5217\u5C06\u4F1A\u663E\u793A<code>Using temporary</code>\u63D0\u793A\uFF0C\u6BD4\u65B9\u8BF4\u8FD9\u6837\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT DISTINCT common_field FROM s1;
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-----------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key  | key_len | ref  | rows | filtered | Extra           |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-----------------+
|  1 | SIMPLE      | s1    | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9688 |   100.00 | Using temporary |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-----------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u518D\u6BD4\u5982\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT common_field, COUNT(*) AS amount FROM s1 GROUP BY common_field;
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+---------------------------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key  | key_len | ref  | rows | filtered | Extra                           |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+---------------------------------+
|  1 | SIMPLE      | s1    | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9688 |   100.00 | Using temporary; Using filesort |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+---------------------------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u4E0D\u77E5\u9053\u5927\u5BB6\u6CE8\u610F\u5230\u6CA1\u6709\uFF0C\u4E0A\u8FF0\u6267\u884C\u8BA1\u5212\u7684<code>Extra</code>\u5217\u4E0D\u4EC5\u4EC5\u5305\u542B<code>Using temporary</code>\u63D0\u793A\uFF0C\u8FD8\u5305\u542B<code>Using filesort</code>\u63D0\u793A\uFF0C\u53EF\u662F\u6211\u4EEC\u7684\u67E5\u8BE2\u8BED\u53E5\u4E2D\u660E\u660E\u6CA1\u6709\u5199<code>ORDER BY</code>\u5B50\u53E5\u5440\uFF1F\u8FD9\u662F\u56E0\u4E3A<code>MySQL</code>\u4F1A\u5728\u5305\u542B<code>GROUP BY</code>\u5B50\u53E5\u7684\u67E5\u8BE2\u4E2D\u9ED8\u8BA4\u6DFB\u52A0\u4E0A<code>ORDER BY</code>\u5B50\u53E5\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4E0A\u8FF0\u67E5\u8BE2\u5176\u5B9E\u548C\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\u7B49\u4EF7\uFF1A</p>
<pre><code lang="bash" class="">EXPLAIN SELECT common_field, COUNT(*) AS amount FROM s1 GROUP BY common_field ORDER BY common_field;
</code></pre><p>\u5982\u679C\u6211\u4EEC\u5E76\u4E0D\u60F3\u4E3A\u5305\u542B<code>GROUP BY</code>\u5B50\u53E5\u7684\u67E5\u8BE2\u8FDB\u884C\u6392\u5E8F\uFF0C\u9700\u8981\u6211\u4EEC\u663E\u5F0F\u7684\u5199\u4E0A<code>ORDER BY NULL</code>\uFF0C\u5C31\u50CF\u8FD9\u6837\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT common_field, COUNT(*) AS amount FROM s1 GROUP BY common_field ORDER BY NULL;
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-----------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key  | key_len | ref  | rows | filtered | Extra           |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-----------------+
|  1 | SIMPLE      | s1    | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9688 |   100.00 | Using temporary |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-----------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u8FD9\u56DE\u6267\u884C\u8BA1\u5212\u4E2D\u5C31\u6CA1\u6709<code>Using filesort</code>\u7684\u63D0\u793A\u4E86\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u6267\u884C\u67E5\u8BE2\u65F6\u53EF\u4EE5\u7701\u53BB\u5BF9\u8BB0\u5F55\u8FDB\u884C\u6587\u4EF6\u6392\u5E8F\u7684\u6210\u672C\u4E86\u3002</p>
<p>\u53E6\u5916\uFF0C\u6267\u884C\u8BA1\u5212\u4E2D\u51FA\u73B0<code>Using temporary</code>\u5E76\u4E0D\u662F\u4E00\u4E2A\u597D\u7684\u5F81\u5146\uFF0C\u56E0\u4E3A\u5EFA\u7ACB\u4E0E\u7EF4\u62A4\u4E34\u65F6\u8868\u8981\u4ED8\u51FA\u5F88\u5927\u6210\u672C\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u6700\u597D\u80FD\u4F7F\u7528\u7D22\u5F15\u6765\u66FF\u4EE3\u6389\u4F7F\u7528\u4E34\u65F6\u8868\uFF0C\u6BD4\u65B9\u8BF4\u4E0B\u8FB9\u8FD9\u4E2A\u5305\u542B<code>GROUP BY</code>\u5B50\u53E5\u7684\u67E5\u8BE2\u5C31\u4E0D\u9700\u8981\u4F7F\u7528\u4E34\u65F6\u8868\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT key1, COUNT(*) AS amount FROM s1 GROUP BY key1;
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-------------+
| id | select_type | table | partitions | <span>type</span>  | possible_keys | key      | key_len | ref  | rows | filtered | Extra       |
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-------------+
|  1 | SIMPLE      | s1    | NULL       | index | idx_key1      | idx_key1 | 303     | NULL | 9688 |   100.00 | Using index |
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u4ECE<code>Extra</code>\u7684<code>Using index</code>\u7684\u63D0\u793A\u91CC\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\uFF0C\u4E0A\u8FF0\u67E5\u8BE2\u53EA\u9700\u8981\u626B\u63CF<code>idx_key1</code>\u7D22\u5F15\u5C31\u53EF\u4EE5\u641E\u5B9A\u4E86\uFF0C\u4E0D\u518D\u9700\u8981\u4E34\u65F6\u8868\u4E86\u3002</p>
</li>
<li>
<p><code>Start temporary, End temporary</code></p>
<p>\u6211\u4EEC\u524D\u8FB9\u5520\u53E8\u5B50\u67E5\u8BE2\u7684\u65F6\u5019\u8BF4\u8FC7\uFF0C\u67E5\u8BE2\u4F18\u5316\u5668\u4F1A\u4F18\u5148\u5C1D\u8BD5\u5C06<code>IN</code>\u5B50\u67E5\u8BE2\u8F6C\u6362\u6210<code>semi-join</code>\uFF0C\u800C<code>semi-join</code>\u53C8\u6709\u597D\u591A\u79CD\u6267\u884C\u7B56\u7565\uFF0C\u5F53\u6267\u884C\u7B56\u7565\u4E3A<code>DuplicateWeedout</code>\u65F6\uFF0C\u4E5F\u5C31\u662F\u901A\u8FC7\u5EFA\u7ACB\u4E34\u65F6\u8868\u6765\u5B9E\u73B0\u4E3A\u5916\u5C42\u67E5\u8BE2\u4E2D\u7684\u8BB0\u5F55\u8FDB\u884C\u53BB\u91CD\u64CD\u4F5C\u65F6\uFF0C\u9A71\u52A8\u8868\u67E5\u8BE2\u6267\u884C\u8BA1\u5212\u7684<code>Extra</code>\u5217\u5C06\u663E\u793A<code>Start temporary</code>\u63D0\u793A\uFF0C\u88AB\u9A71\u52A8\u8868\u67E5\u8BE2\u6267\u884C\u8BA1\u5212\u7684<code>Extra</code>\u5217\u5C06\u663E\u793A<code>End temporary</code>\u63D0\u793A\uFF0C\u5C31\u662F\u8FD9\u6837\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 IN (SELECT key3 FROM s2 WHERE common_field = <span>'a'</span>);
+----+-------------+-------+------------+------+---------------+----------+---------+-------------------+------+----------+------------------------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key      | key_len | ref               | rows | filtered | Extra                        |
+----+-------------+-------+------------+------+---------------+----------+---------+-------------------+------+----------+------------------------------+
|  1 | SIMPLE      | s2    | NULL       | ALL  | idx_key3      | NULL     | NULL    | NULL              | 9954 |    10.00 | Using <span>where</span>; Start temporary |
|  1 | SIMPLE      | s1    | NULL       | ref  | idx_key1      | idx_key1 | 303     | xiaohaizi.s2.key3 |    1 |   100.00 | End temporary                |
+----+-------------+-------+------------+------+---------------+----------+---------+-------------------+------+----------+------------------------------+
2 rows <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre></li>
<li>
<p><code>LooseScan</code></p>
<p>\u5728\u5C06<code>In</code>\u5B50\u67E5\u8BE2\u8F6C\u4E3A<code>semi-join</code>\u65F6\uFF0C\u5982\u679C\u91C7\u7528\u7684\u662F<code>LooseScan</code>\u6267\u884C\u7B56\u7565\uFF0C\u5219\u5728\u9A71\u52A8\u8868\u6267\u884C\u8BA1\u5212\u7684<code>Extra</code>\u5217\u5C31\u662F\u663E\u793A<code>LooseScan</code>\u63D0\u793A\uFF0C\u6BD4\u5982\u8FD9\u6837\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key3 IN (SELECT key1 FROM s2 WHERE key1 &gt; <span>'z'</span>);
+----+-------------+-------+------------+-------+---------------+----------+---------+-------------------+------+----------+-------------------------------------+
| id | select_type | table | partitions | <span>type</span>  | possible_keys | key      | key_len | ref               | rows | filtered | Extra                               |
+----+-------------+-------+------------+-------+---------------+----------+---------+-------------------+------+----------+-------------------------------------+
|  1 | SIMPLE      | s2    | NULL       | range | idx_key1      | idx_key1 | 303     | NULL              |  270 |   100.00 | Using <span>where</span>; Using index; LooseScan |
|  1 | SIMPLE      | s1    | NULL       | ref   | idx_key3      | idx_key3 | 303     | xiaohaizi.s2.key1 |    1 |   100.00 | NULL                                |
+----+-------------+-------+------------+-------+---------------+----------+---------+-------------------+------+----------+-------------------------------------+
2 rows <span>in</span> <span>set</span>, 1 warning (0.01 sec)
</code></pre></li>
<li>
<p><code>FirstMatch(tbl_name)</code></p>
<p>\u5728\u5C06<code>In</code>\u5B50\u67E5\u8BE2\u8F6C\u4E3A<code>semi-join</code>\u65F6\uFF0C\u5982\u679C\u91C7\u7528\u7684\u662F<code>FirstMatch</code>\u6267\u884C\u7B56\u7565\uFF0C\u5219\u5728\u88AB\u9A71\u52A8\u8868\u6267\u884C\u8BA1\u5212\u7684<code>Extra</code>\u5217\u5C31\u662F\u663E\u793A<code>FirstMatch(tbl_name)</code>\u63D0\u793A\uFF0C\u6BD4\u5982\u8FD9\u6837\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE common_field IN (SELECT key1 FROM s2 <span>where</span> s1.key3 = s2.key3);
+----+-------------+-------+------------+------+-------------------+----------+---------+-------------------+------+----------+-----------------------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys     | key      | key_len | ref               | rows | filtered | Extra                       |
+----+-------------+-------+------------+------+-------------------+----------+---------+-------------------+------+----------+-----------------------------+
|  1 | SIMPLE      | s1    | NULL       | ALL  | idx_key3          | NULL     | NULL    | NULL              | 9688 |   100.00 | Using <span>where</span>                 |
|  1 | SIMPLE      | s2    | NULL       | ref  | idx_key1,idx_key3 | idx_key3 | 303     | xiaohaizi.s1.key3 |    1 |     4.87 | Using <span>where</span>; FirstMatch(s1) |
+----+-------------+-------+------------+------+-------------------+----------+---------+-------------------+------+----------+-----------------------------+
2 rows <span>in</span> <span>set</span>, 2 warnings (0.00 sec)
</code></pre></li>
</ul>
<h2 data-id="heading-3">Json\u683C\u5F0F\u7684\u6267\u884C\u8BA1\u5212</h2>
<p>\u6211\u4EEC\u4E0A\u8FB9\u4ECB\u7ECD\u7684<code>EXPLAIN</code>\u8BED\u53E5\u8F93\u51FA\u4E2D\u7F3A\u5C11\u4E86\u4E00\u4E2A\u8861\u91CF\u6267\u884C\u8BA1\u5212\u597D\u574F\u7684\u91CD\u8981\u5C5E\u6027 \u2014\u2014 <span>\u6210\u672C</span>\u3002\u4E0D\u8FC7\u8BBE\u8BA1<code>MySQL</code>\u7684\u5927\u53D4\u8D34\u5FC3\u7684\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u79CD\u67E5\u770B\u67D0\u4E2A\u6267\u884C\u8BA1\u5212\u82B1\u8D39\u7684\u6210\u672C\u7684\u65B9\u5F0F\uFF1A</p>
<ul>
<li>\u5728<code>EXPLAIN</code>\u5355\u8BCD\u548C\u771F\u6B63\u7684\u67E5\u8BE2\u8BED\u53E5\u4E2D\u95F4\u52A0\u4E0A<code>FORMAT=JSON</code>\u3002</li>
</ul>
<p>\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u5F97\u5230\u4E00\u4E2A<code>json</code>\u683C\u5F0F\u7684\u6267\u884C\u8BA1\u5212\uFF0C\u91CC\u8FB9\u513F\u5305\u542B\u8BE5\u8BA1\u5212\u82B1\u8D39\u7684\u6210\u672C\uFF0C\u6BD4\u5982\u8FD9\u6837\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN FORMAT=JSON SELECT * FROM s1 INNER JOIN s2 ON s1.key1 = s2.key2 WHERE s1.common_field = <span>'a'</span>\\G
*************************** 1. row ***************************

EXPLAIN: {
  <span>"query_block"</span>: {
    <span>"select_id"</span>: 1,     <span># \u6574\u4E2A\u67E5\u8BE2\u8BED\u53E5\u53EA\u67091\u4E2ASELECT\u5173\u952E\u5B57\uFF0C\u8BE5\u5173\u952E\u5B57\u5BF9\u5E94\u7684id\u53F7\u4E3A1</span>
    <span>"cost_info"</span>: {
      <span>"query_cost"</span>: <span>"3197.16"</span>   <span># \u6574\u4E2A\u67E5\u8BE2\u7684\u6267\u884C\u6210\u672C\u9884\u8BA1\u4E3A3197.16</span>
    },
    <span>"nested_loop"</span>: [    <span># \u51E0\u4E2A\u8868\u4E4B\u95F4\u91C7\u7528\u5D4C\u5957\u5FAA\u73AF\u8FDE\u63A5\u7B97\u6CD5\u6267\u884C</span>
    
    <span># \u4EE5\u4E0B\u662F\u53C2\u4E0E\u5D4C\u5957\u5FAA\u73AF\u8FDE\u63A5\u7B97\u6CD5\u7684\u5404\u4E2A\u8868\u7684\u4FE1\u606F</span>
      {
        <span>"table"</span>: {
          <span>"table_name"</span>: <span>"s1"</span>,   <span># s1\u8868\u662F\u9A71\u52A8\u8868</span>
          <span>"access_type"</span>: <span>"ALL"</span>,     <span># \u8BBF\u95EE\u65B9\u6CD5\u4E3AALL\uFF0C\u610F\u5473\u7740\u4F7F\u7528\u5168\u8868\u626B\u63CF\u8BBF\u95EE</span>
          <span>"possible_keys"</span>: [    <span># \u53EF\u80FD\u4F7F\u7528\u7684\u7D22\u5F15</span>
            <span>"idx_key1"</span>
          ],
          <span>"rows_examined_per_scan"</span>: 9688,   <span># \u67E5\u8BE2\u4E00\u6B21s1\u8868\u5927\u81F4\u9700\u8981\u626B\u63CF9688\u6761\u8BB0\u5F55</span>
          <span>"rows_produced_per_join"</span>: 968,    <span># \u9A71\u52A8\u8868s1\u7684\u6247\u51FA\u662F968</span>
          <span>"filtered"</span>: <span>"10.00"</span>,  <span># condition filtering\u4EE3\u8868\u7684\u767E\u5206\u6BD4</span>
          <span>"cost_info"</span>: {
            <span>"read_cost"</span>: <span>"1840.84"</span>,     <span># \u7A0D\u540E\u89E3\u91CA</span>
            <span>"eval_cost"</span>: <span>"193.76"</span>,      <span># \u7A0D\u540E\u89E3\u91CA</span>
            <span>"prefix_cost"</span>: <span>"2034.60"</span>,   <span># \u5355\u6B21\u67E5\u8BE2s1\u8868\u603B\u5171\u7684\u6210\u672C</span>
            <span>"data_read_per_join"</span>: <span>"1M"</span>  <span># \u8BFB\u53D6\u7684\u6570\u636E\u91CF</span>
          },
          <span>"used_columns"</span>: [     <span># \u6267\u884C\u67E5\u8BE2\u4E2D\u6D89\u53CA\u5230\u7684\u5217</span>
            <span>"id"</span>,
            <span>"key1"</span>,
            <span>"key2"</span>,
            <span>"key3"</span>,
            <span>"key_part1"</span>,
            <span>"key_part2"</span>,
            <span>"key_part3"</span>,
            <span>"common_field"</span>
          ],
          
          <span># \u5BF9s1\u8868\u8BBF\u95EE\u65F6\u9488\u5BF9\u5355\u8868\u67E5\u8BE2\u7684\u6761\u4EF6</span>
          <span>"attached_condition"</span>: <span>"((\`xiaohaizi\`.\`s1\`.\`common_field\` = 'a') and (\`xiaohaizi\`.\`s1\`.\`key1\` is not null))"</span>
        }
      },
      {
        <span>"table"</span>: {
          <span>"table_name"</span>: <span>"s2"</span>,   <span># s2\u8868\u662F\u88AB\u9A71\u52A8\u8868</span>
          <span>"access_type"</span>: <span>"ref"</span>,     <span># \u8BBF\u95EE\u65B9\u6CD5\u4E3Aref\uFF0C\u610F\u5473\u7740\u4F7F\u7528\u7D22\u5F15\u7B49\u503C\u5339\u914D\u7684\u65B9\u5F0F\u8BBF\u95EE</span>
          <span>"possible_keys"</span>: [    <span># \u53EF\u80FD\u4F7F\u7528\u7684\u7D22\u5F15</span>
            <span>"idx_key2"</span>
          ],
          <span>"key"</span>: <span>"idx_key2"</span>,    <span># \u5B9E\u9645\u4F7F\u7528\u7684\u7D22\u5F15</span>
          <span>"used_key_parts"</span>: [   <span># \u4F7F\u7528\u5230\u7684\u7D22\u5F15\u5217</span>
            <span>"key2"</span>
          ],
          <span>"key_length"</span>: <span>"5"</span>,    <span># key_len</span>
          <span>"ref"</span>: [      <span># \u4E0Ekey2\u5217\u8FDB\u884C\u7B49\u503C\u5339\u914D\u7684\u5BF9\u8C61</span>
            <span>"xiaohaizi.s1.key1"</span>
          ],
          <span>"rows_examined_per_scan"</span>: 1,  <span># \u67E5\u8BE2\u4E00\u6B21s2\u8868\u5927\u81F4\u9700\u8981\u626B\u63CF1\u6761\u8BB0\u5F55</span>
          <span>"rows_produced_per_join"</span>: 968,    <span># \u88AB\u9A71\u52A8\u8868s2\u7684\u6247\u51FA\u662F968\uFF08\u7531\u4E8E\u540E\u8FB9\u6CA1\u6709\u591A\u4F59\u7684\u8868\u8FDB\u884C\u8FDE\u63A5\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u503C\u4E5F\u6CA1\u5565\u7528\uFF09</span>
          <span>"filtered"</span>: <span>"100.00"</span>,     <span># condition filtering\u4EE3\u8868\u7684\u767E\u5206\u6BD4</span>
          
          <span># s2\u8868\u4F7F\u7528\u7D22\u5F15\u8FDB\u884C\u67E5\u8BE2\u7684\u641C\u7D22\u6761\u4EF6</span>
          <span>"index_condition"</span>: <span>"(\`xiaohaizi\`.\`s1\`.\`key1\` = \`xiaohaizi\`.\`s2\`.\`key2\`)"</span>,
          <span>"cost_info"</span>: {
            <span>"read_cost"</span>: <span>"968.80"</span>,      <span># \u7A0D\u540E\u89E3\u91CA</span>
            <span>"eval_cost"</span>: <span>"193.76"</span>,      <span># \u7A0D\u540E\u89E3\u91CA</span>
            <span>"prefix_cost"</span>: <span>"3197.16"</span>,   <span># \u5355\u6B21\u67E5\u8BE2s1\u3001\u591A\u6B21\u67E5\u8BE2s2\u8868\u603B\u5171\u7684\u6210\u672C</span>
            <span>"data_read_per_join"</span>: <span>"1M"</span>  <span># \u8BFB\u53D6\u7684\u6570\u636E\u91CF</span>
          },
          <span>"used_columns"</span>: [     <span># \u6267\u884C\u67E5\u8BE2\u4E2D\u6D89\u53CA\u5230\u7684\u5217</span>
            <span>"id"</span>,
            <span>"key1"</span>,
            <span>"key2"</span>,
            <span>"key3"</span>,
            <span>"key_part1"</span>,
            <span>"key_part2"</span>,
            <span>"key_part3"</span>,
            <span>"common_field"</span>
          ]
        }
      }
    ]
  }
}
1 row <span>in</span> <span>set</span>, 2 warnings (0.00 sec)
</code></pre><p>\u6211\u4EEC\u4F7F\u7528<code>#</code>\u540E\u8FB9\u8DDF\u968F\u6CE8\u91CA\u7684\u5F62\u5F0F\u4E3A\u5927\u5BB6\u89E3\u91CA\u4E86<code>EXPLAIN FORMAT=JSON</code>\u8BED\u53E5\u7684\u8F93\u51FA\u5185\u5BB9\uFF0C\u4F46\u662F\u5927\u5BB6\u53EF\u80FD\u6709\u7591\u95EE<code>"cost_info"</code>\u91CC\u8FB9\u7684\u6210\u672C\u770B\u7740\u602A\u602A\u7684\uFF0C\u5B83\u4EEC\u662F\u600E\u4E48\u8BA1\u7B97\u51FA\u6765\u7684\uFF1F\u5148\u770B<code>s1</code>\u8868\u7684<code>"cost_info"</code>\u90E8\u5206\uFF1A</p>
<pre><code lang="bash" class=""><span>"cost_info"</span>: {
    <span>"read_cost"</span>: <span>"1840.84"</span>,
    <span>"eval_cost"</span>: <span>"193.76"</span>,
    <span>"prefix_cost"</span>: <span>"2034.60"</span>,
    <span>"data_read_per_join"</span>: <span>"1M"</span>
}
</code></pre><ul>
<li>
<p><code>read_cost</code>\u662F\u7531\u4E0B\u8FB9\u8FD9\u4E24\u90E8\u5206\u7EC4\u6210\u7684\uFF1A</p>
<ul>
<li><code>IO</code>\u6210\u672C</li>
<li>\u68C0\u6D4B<code>rows \xD7 (1 - filter)</code>\u6761\u8BB0\u5F55\u7684<code>CPU</code>\u6210\u672C</li>
</ul>
<blockquote><p>\u5C0F\u8D34\u58EB\uFF1A

rows\u548Cfilter\u90FD\u662F\u6211\u4EEC\u524D\u8FB9\u4ECB\u7ECD\u6267\u884C\u8BA1\u5212\u7684\u8F93\u51FA\u5217\uFF0C\u5728JSON\u683C\u5F0F\u7684\u6267\u884C\u8BA1\u5212\u4E2D\uFF0Crows\u76F8\u5F53\u4E8Erows_examined_per_scan\uFF0Cfiltered\u540D\u79F0\u4E0D\u53D8\u3002
</p></blockquote></li>
<li>
<p><code>eval_cost</code>\u662F\u8FD9\u6837\u8BA1\u7B97\u7684\uFF1A</p>
<p>\u68C0\u6D4B <code>rows \xD7 filter</code>\u6761\u8BB0\u5F55\u7684\u6210\u672C\u3002</p>
</li>
<li>
<p><code>prefix_cost</code>\u5C31\u662F\u5355\u72EC\u67E5\u8BE2<code>s1</code>\u8868\u7684\u6210\u672C\uFF0C\u4E5F\u5C31\u662F\uFF1A</p>
<p><code>read_cost + eval_cost</code></p>
</li>
<li>
<p><code>data_read_per_join</code>\u8868\u793A\u5728\u6B64\u6B21\u67E5\u8BE2\u4E2D\u9700\u8981\u8BFB\u53D6\u7684\u6570\u636E\u91CF\uFF0C\u6211\u4EEC\u5C31\u4E0D\u591A\u5520\u53E8\u8FD9\u4E2A\u4E86\u3002</p>
</li>
</ul>
<blockquote><p>\u5C0F\u8D34\u58EB\uFF1A

\u5927\u5BB6\u5176\u5B9E\u6CA1\u5FC5\u8981\u5173\u6CE8MySQL\u4E3A\u5565\u4F7F\u7528\u8FD9\u4E48\u53E4\u602A\u7684\u65B9\u5F0F\u8BA1\u7B97\u51FAread_cost\u548Ceval_cost\uFF0C\u5173\u6CE8prefix_cost\u662F\u67E5\u8BE2s1\u8868\u7684\u6210\u672C\u5C31\u597D\u4E86\u3002
</p></blockquote><p>\u5BF9\u4E8E<code>s2</code>\u8868\u7684<code>"cost_info"</code>\u90E8\u5206\u662F\u8FD9\u6837\u7684\uFF1A</p>
<pre><code lang="bash" class=""><span>"cost_info"</span>: {
    <span>"read_cost"</span>: <span>"968.80"</span>,
    <span>"eval_cost"</span>: <span>"193.76"</span>,
    <span>"prefix_cost"</span>: <span>"3197.16"</span>,
    <span>"data_read_per_join"</span>: <span>"1M"</span>
}
</code></pre><p>\u7531\u4E8E<code>s2</code>\u8868\u662F\u88AB\u9A71\u52A8\u8868\uFF0C\u6240\u4EE5\u53EF\u80FD\u88AB\u8BFB\u53D6\u591A\u6B21\uFF0C\u8FD9\u91CC\u7684<code>read_cost</code>\u548C<code>eval_cost</code>\u662F\u8BBF\u95EE\u591A\u6B21<code>s2</code>\u8868\u540E\u7D2F\u52A0\u8D77\u6765\u7684\u503C\uFF0C\u5927\u5BB6\u4E3B\u8981\u5173\u6CE8\u91CC\u8FB9\u513F\u7684<code>prefix_cost</code>\u7684\u503C\u4EE3\u8868\u7684\u662F\u6574\u4E2A\u8FDE\u63A5\u67E5\u8BE2\u9884\u8BA1\u7684\u6210\u672C\uFF0C\u4E5F\u5C31\u662F\u5355\u6B21\u67E5\u8BE2<code>s1</code>\u8868\u548C\u591A\u6B21\u67E5\u8BE2<code>s2</code>\u8868\u540E\u7684\u6210\u672C\u7684\u548C\uFF0C\u4E5F\u5C31\u662F\uFF1A</p>
<pre><code lang="bash" class="">968.80 + 193.76 + 2034.60 = 3197.16
</code></pre><h2 data-id="heading-4">Extented EXPLAIN</h2>
<p>\u6700\u540E\uFF0C\u8BBE\u8BA1<code>MySQL</code>\u7684\u5927\u53D4\u8FD8\u4E3A\u6211\u4EEC\u7559\u4E86\u4E2A\u5F69\u86CB\uFF0C\u5728\u6211\u4EEC\u4F7F\u7528<code>EXPLAIN</code>\u8BED\u53E5\u67E5\u770B\u4E86\u67D0\u4E2A\u67E5\u8BE2\u7684\u6267\u884C\u8BA1\u5212\u540E\uFF0C\u7D27\u63A5\u7740\u8FD8\u53EF\u4EE5\u4F7F\u7528<code>SHOW WARNINGS</code>\u8BED\u53E5\u67E5\u770B\u4E0E\u8FD9\u4E2A\u67E5\u8BE2\u7684\u6267\u884C\u8BA1\u5212\u6709\u5173\u7684\u4E00\u4E9B\u6269\u5C55\u4FE1\u606F\uFF0C\u6BD4\u5982\u8FD9\u6837\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT s1.key1, s2.key1 FROM s1 LEFT JOIN s2 ON s1.key1 = s2.key1 WHERE s2.common_field IS NOT NULL;
+----+-------------+-------+------------+------+---------------+----------+---------+-------------------+------+----------+-------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key      | key_len | ref               | rows | filtered | Extra       |
+----+-------------+-------+------------+------+---------------+----------+---------+-------------------+------+----------+-------------+
|  1 | SIMPLE      | s2    | NULL       | ALL  | idx_key1      | NULL     | NULL    | NULL              | 9954 |    90.00 | Using <span>where</span> |
|  1 | SIMPLE      | s1    | NULL       | ref  | idx_key1      | idx_key1 | 303     | xiaohaizi.s2.key1 |    1 |   100.00 | Using index |
+----+-------------+-------+------------+------+---------------+----------+---------+-------------------+------+----------+-------------+
2 rows <span>in</span> <span>set</span>, 1 warning (0.00 sec)

mysql&gt; SHOW WARNINGS\\G
*************************** 1. row ***************************
  Level: Note
   Code: 1003
Message: /* select<span>#1 */ select \`xiaohaizi\`.\`s1\`.\`key1\` AS \`key1\`,\`xiaohaizi\`.\`s2\`.\`key1\` AS \`key1\` from \`xiaohaizi\`.\`s1\` join \`xiaohaizi\`.\`s2\` where ((\`xiaohaizi\`.\`s1\`.\`key1\` = \`xiaohaizi\`.\`s2\`.\`key1\`) and (\`xiaohaizi\`.\`s2\`.\`common_field\` is not null))</span>
1 row <span>in</span> <span>set</span> (0.00 sec)
</code></pre><p>\u5927\u5BB6\u53EF\u4EE5\u770B\u5230<code>SHOW WARNINGS</code>\u5C55\u793A\u51FA\u6765\u7684\u4FE1\u606F\u6709\u4E09\u4E2A\u5B57\u6BB5\uFF0C\u5206\u522B\u662F<code>Level</code>\u3001<code>Code</code>\u3001<code>Message</code>\u3002\u6211\u4EEC\u6700\u5E38\u89C1\u7684\u5C31\u662F<code>Code</code>\u4E3A<code>1003</code>\u7684\u4FE1\u606F\uFF0C\u5F53<code>Code</code>\u503C\u4E3A<code>1003</code>\u65F6\uFF0C<code>Message</code>\u5B57\u6BB5\u5C55\u793A\u7684\u4FE1\u606F<span>\u7C7B\u4F3C\u4E8E</span>\u67E5\u8BE2\u4F18\u5316\u5668\u5C06\u6211\u4EEC\u7684\u67E5\u8BE2\u8BED\u53E5\u91CD\u5199\u540E\u7684\u8BED\u53E5\u3002\u6BD4\u5982\u6211\u4EEC\u4E0A\u8FB9\u7684\u67E5\u8BE2\u672C\u6765\u662F\u4E00\u4E2A\u5DE6\uFF08\u5916\uFF09\u8FDE\u63A5\u67E5\u8BE2\uFF0C\u4F46\u662F\u6709\u4E00\u4E2A<code>s2.common_field IS NOT NULL</code>\u7684\u6761\u4EF6\uFF0C\u7740\u5C31\u4F1A\u5BFC\u81F4\u67E5\u8BE2\u4F18\u5316\u5668\u628A\u5DE6\uFF08\u5916\uFF09\u8FDE\u63A5\u67E5\u8BE2\u4F18\u5316\u4E3A\u5185\u8FDE\u63A5\u67E5\u8BE2\uFF0C\u4ECE<code>SHOW WARNINGS</code>\u7684<code>Message</code>\u5B57\u6BB5\u4E5F\u53EF\u4EE5\u770B\u51FA\u6765\uFF0C\u539F\u672C\u7684<code>LEFT JOIN</code>\u5DF2\u7ECF\u53D8\u6210\u4E86<code>JOIN</code>\u3002</p>
<p>\u4F46\u662F\u5927\u5BB6\u4E00\u5B9A\u8981\u6CE8\u610F\uFF0C\u6211\u4EEC\u8BF4<code>Message</code>\u5B57\u6BB5\u5C55\u793A\u7684\u4FE1\u606F<span>\u7C7B\u4F3C\u4E8E</span>\u67E5\u8BE2\u4F18\u5316\u5668\u5C06\u6211\u4EEC\u7684\u67E5\u8BE2\u8BED\u53E5\u91CD\u5199\u540E\u7684\u8BED\u53E5\uFF0C\u5E76\u4E0D\u662F\u7B49\u4EF7\u4E8E\uFF0C\u4E5F\u5C31\u662F\u8BF4<code>Message</code>\u5B57\u6BB5\u5C55\u793A\u7684\u4FE1\u606F\u5E76\u4E0D\u662F\u6807\u51C6\u7684\u67E5\u8BE2\u8BED\u53E5\uFF0C\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\u5E76\u4E0D\u80FD\u76F4\u63A5\u62FF\u5230\u9ED1\u6846\u6846\u4E2D\u8FD0\u884C\uFF0C\u5B83\u53EA\u80FD\u4F5C\u4E3A\u5E2E\u52A9\u6211\u4EEC\u7406\u89E3\u67E5<code>MySQL</code>\u5C06\u5982\u4F55\u6267\u884C\u67E5\u8BE2\u8BED\u53E5\u7684\u4E00\u4E2A\u53C2\u8003\u4F9D\u636E\u800C\u5DF2\u3002</p>
`};export{n as default};
