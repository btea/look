var e={name:"\u67E5\u8BE2\u4F18\u5316\u7684\u767E\u79D1\u5168\u4E66 \u2014\u2014 Explain \u8BE6\u89E3\uFF08\u4E0A\uFF09",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h1 data-id="heading-0">Explain \u8BE6\u89E3\uFF08\u4E0A\uFF09</h1>
<p>\u6807\u7B7E\uFF1A MySQL \u662F\u600E\u6837\u8FD0\u884C\u7684</p>
<hr>
<p>\u4E00\u6761\u67E5\u8BE2\u8BED\u53E5\u5728\u7ECF\u8FC7<code>MySQL</code>\u67E5\u8BE2\u4F18\u5316\u5668\u7684\u5404\u79CD\u57FA\u4E8E\u6210\u672C\u548C\u89C4\u5219\u7684\u4F18\u5316\u4F1A\u540E\u751F\u6210\u4E00\u4E2A\u6240\u8C13\u7684<code>\u6267\u884C\u8BA1\u5212</code>\uFF0C\u8FD9\u4E2A\u6267\u884C\u8BA1\u5212\u5C55\u793A\u4E86\u63A5\u4E0B\u6765\u5177\u4F53\u6267\u884C\u67E5\u8BE2\u7684\u65B9\u5F0F\uFF0C\u6BD4\u5982\u591A\u8868\u8FDE\u63A5\u7684\u987A\u5E8F\u662F\u4EC0\u4E48\uFF0C\u5BF9\u4E8E\u6BCF\u4E2A\u8868\u91C7\u7528\u4EC0\u4E48\u8BBF\u95EE\u65B9\u6CD5\u6765\u5177\u4F53\u6267\u884C\u67E5\u8BE2\u7B49\u7B49\u3002\u8BBE\u8BA1<code>MySQL</code>\u7684\u5927\u53D4\u8D34\u5FC3\u7684\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86<code>EXPLAIN</code>\u8BED\u53E5\u6765\u5E2E\u52A9\u6211\u4EEC\u67E5\u770B\u67D0\u4E2A\u67E5\u8BE2\u8BED\u53E5\u7684\u5177\u4F53\u6267\u884C\u8BA1\u5212\uFF0C\u672C\u7AE0\u7684\u5185\u5BB9\u5C31\u662F\u4E3A\u4E86\u5E2E\u52A9\u5927\u5BB6\u770B\u61C2<code>EXPLAIN</code>\u8BED\u53E5\u7684\u5404\u4E2A\u8F93\u51FA\u9879\u90FD\u662F\u5E72\u561B\u4F7F\u7684\uFF0C\u4ECE\u800C\u53EF\u4EE5\u6709\u9488\u5BF9\u6027\u7684\u63D0\u5347\u6211\u4EEC\u67E5\u8BE2\u8BED\u53E5\u7684\u6027\u80FD\u3002</p>
<p>\u5982\u679C\u6211\u4EEC\u60F3\u770B\u770B\u67D0\u4E2A\u67E5\u8BE2\u7684\u6267\u884C\u8BA1\u5212\u7684\u8BDD\uFF0C\u53EF\u4EE5\u5728\u5177\u4F53\u7684\u67E5\u8BE2\u8BED\u53E5\u524D\u8FB9\u52A0\u4E00\u4E2A<code>EXPLAIN</code>\uFF0C\u5C31\u50CF\u8FD9\u6837\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT 1;
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+----------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key  | key_len | ref  | rows | filtered | Extra          |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+----------------+
|  1 | SIMPLE      | NULL  | NULL       | NULL | NULL          | NULL | NULL    | NULL | NULL |     NULL | No tables used |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+----------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.01 sec)
</code></pre><p>\u7136\u540E\u8FD9\u8F93\u51FA\u7684\u4E00\u5927\u5768\u4E1C\u897F\u5C31\u662F\u6240\u8C13\u7684<code>\u6267\u884C\u8BA1\u5212</code>\uFF0C\u6211\u7684\u4EFB\u52A1\u5C31\u662F\u5E26\u9886\u5927\u5BB6\u770B\u61C2\u8FD9\u4E00\u5927\u5768\u4E1C\u897F\u91CC\u8FB9\u7684\u6BCF\u4E2A\u5217\u90FD\u662F\u5E72\u5565\u7528\u7684\uFF0C\u4EE5\u53CA\u5728\u8FD9\u4E2A<code>\u6267\u884C\u8BA1\u5212</code>\u7684\u8F85\u52A9\u4E0B\uFF0C\u6211\u4EEC\u5E94\u8BE5\u600E\u6837\u6539\u8FDB\u81EA\u5DF1\u7684\u67E5\u8BE2\u8BED\u53E5\u4EE5\u4F7F\u67E5\u8BE2\u6267\u884C\u8D77\u6765\u66F4\u9AD8\u6548\u3002\u5176\u5B9E\u9664\u4E86\u4EE5<code>SELECT</code>\u5F00\u5934\u7684\u67E5\u8BE2\u8BED\u53E5\uFF0C\u5176\u4F59\u7684<code>DELETE</code>\u3001<code>INSERT</code>\u3001<code>REPLACE</code>\u4EE5\u53CA<code>UPDATE</code>\u8BED\u53E5\u524D\u8FB9\u90FD\u53EF\u4EE5\u52A0\u4E0A<code>EXPLAIN</code>\u8FD9\u4E2A\u8BCD\u513F\uFF0C\u7528\u6765\u67E5\u770B\u8FD9\u4E9B\u8BED\u53E5\u7684\u6267\u884C\u8BA1\u5212\uFF0C\u4E0D\u8FC7\u6211\u4EEC\u8FD9\u91CC\u5BF9<code>SELECT</code>\u8BED\u53E5\u66F4\u611F\u5174\u8DA3\uFF0C\u6240\u4EE5\u540E\u8FB9\u53EA\u4F1A\u4EE5<code>SELECT</code>\u8BED\u53E5\u4E3A\u4F8B\u6765\u63CF\u8FF0<code>EXPLAIN</code>\u8BED\u53E5\u7684\u7528\u6CD5\u3002\u4E3A\u4E86\u8BA9\u5927\u5BB6\u5148\u6709\u4E00\u4E2A\u611F\u6027\u7684\u8BA4\u8BC6\uFF0C\u6211\u4EEC\u628A<code>EXPLAIN</code>\u8BED\u53E5\u8F93\u51FA\u7684\u5404\u4E2A\u5217\u7684\u4F5C\u7528\u5148\u5927\u81F4\u7F57\u5217\u4E00\u4E0B\uFF1A</p>
<table>
<thead>
<tr>
<th>\u5217\u540D</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>id</code></td>
<td>\u5728\u4E00\u4E2A\u5927\u7684\u67E5\u8BE2\u8BED\u53E5\u4E2D\u6BCF\u4E2A<code>SELECT</code>\u5173\u952E\u5B57\u90FD\u5BF9\u5E94\u4E00\u4E2A\u552F\u4E00\u7684<code>id</code></td>
</tr>
<tr>
<td><code>select_type</code></td>
<td><code>SELECT</code>\u5173\u952E\u5B57\u5BF9\u5E94\u7684\u90A3\u4E2A\u67E5\u8BE2\u7684\u7C7B\u578B</td>
</tr>
<tr>
<td><code>table</code></td>
<td>\u8868\u540D</td>
</tr>
<tr>
<td><code>partitions</code></td>
<td>\u5339\u914D\u7684\u5206\u533A\u4FE1\u606F</td>
</tr>
<tr>
<td><code>type</code></td>
<td>\u9488\u5BF9\u5355\u8868\u7684\u8BBF\u95EE\u65B9\u6CD5</td>
</tr>
<tr>
<td><code>possible_keys</code></td>
<td>\u53EF\u80FD\u7528\u5230\u7684\u7D22\u5F15</td>
</tr>
<tr>
<td><code>key</code></td>
<td>\u5B9E\u9645\u4E0A\u4F7F\u7528\u7684\u7D22\u5F15</td>
</tr>
<tr>
<td><code>key_len</code></td>
<td>\u5B9E\u9645\u4F7F\u7528\u5230\u7684\u7D22\u5F15\u957F\u5EA6</td>
</tr>
<tr>
<td><code>ref</code></td>
<td>\u5F53\u4F7F\u7528\u7D22\u5F15\u5217\u7B49\u503C\u67E5\u8BE2\u65F6\uFF0C\u4E0E\u7D22\u5F15\u5217\u8FDB\u884C\u7B49\u503C\u5339\u914D\u7684\u5BF9\u8C61\u4FE1\u606F</td>
</tr>
<tr>
<td><code>rows</code></td>
<td>\u9884\u4F30\u7684\u9700\u8981\u8BFB\u53D6\u7684\u8BB0\u5F55\u6761\u6570</td>
</tr>
<tr>
<td><code>filtered</code></td>
<td>\u67D0\u4E2A\u8868\u7ECF\u8FC7\u641C\u7D22\u6761\u4EF6\u8FC7\u6EE4\u540E\u5269\u4F59\u8BB0\u5F55\u6761\u6570\u7684\u767E\u5206\u6BD4</td>
</tr>
<tr>
<td><code>Extra</code></td>
<td>\u4E00\u4E9B\u989D\u5916\u7684\u4FE1\u606F</td>
</tr>
</tbody>
</table>
<p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C<span>\u5927\u5BB6\u5982\u679C\u770B\u4E0D\u61C2\u4E0A\u8FB9\u8F93\u51FA\u5217\u542B\u4E49\uFF0C\u90A3\u662F\u6B63\u5E38\u7684\uFF0C\u5343\u4E07\u4E0D\u8981\u7EA0\u7ED3\uFF5E</span>\u3002\u6211\u5728\u8FD9\u91CC\u628A\u5B83\u4EEC\u90FD\u5217\u51FA\u6765\u53EA\u662F\u4E3A\u4E86\u63CF\u8FF0\u4E00\u4E2A\u8F6E\u5ED3\uFF0C\u8BA9\u5927\u5BB6\u6709\u4E00\u4E2A\u5927\u81F4\u7684\u5370\u8C61\uFF0C\u4E0B\u8FB9\u4F1A\u7EC6\u7EC6\u9053\u6765\uFF0C\u7B49\u4F1A\u513F\u8BF4\u5B8C\u4E86\u4E0D\u4FE1\u4F60\u4E0D\u4F1A\uFF5E \u4E3A\u4E86\u6545\u4E8B\u7684\u987A\u5229\u53D1\u5C55\uFF0C\u6211\u4EEC\u8FD8\u662F\u8981\u8BF7\u51FA\u6211\u4EEC\u524D\u8FB9\u5DF2\u7ECF\u7528\u4E86n\u904D\u7684<code>single_table</code>\u8868\uFF0C\u4E3A\u4E86\u9632\u6B62\u5927\u5BB6\u5FD8\u4E86\uFF0C\u518D\u628A\u5B83\u7684\u7ED3\u6784\u63CF\u8FF0\u4E00\u904D\uFF1A</p>
<pre><code lang="bash" class="">CREATE TABLE single_table (
    id INT NOT NULL AUTO_INCREMENT,
    key1 VARCHAR(100),
    key2 INT,
    key3 VARCHAR(100),
    key_part1 VARCHAR(100),
    key_part2 VARCHAR(100),
    key_part3 VARCHAR(100),
    common_field VARCHAR(100),
    PRIMARY KEY (id),
    KEY idx_key1 (key1),
    UNIQUE KEY idx_key2 (key2),
    KEY idx_key3 (key3),
    KEY idx_key_part(key_part1, key_part2, key_part3)
) Engine=InnoDB CHARSET=utf8;
</code></pre><p>\u6211\u4EEC\u4ECD\u7136\u5047\u8BBE\u6709\u4E24\u4E2A\u548C<code>single_table</code>\u8868\u6784\u9020\u4E00\u6A21\u4E00\u6837\u7684<code>s1</code>\u3001<code>s2</code>\u8868\uFF0C\u800C\u4E14\u8FD9\u4E24\u4E2A\u8868\u91CC\u8FB9\u513F\u670910000\u6761\u8BB0\u5F55\uFF0C\u9664id\u5217\u5916\u5176\u4F59\u7684\u5217\u90FD\u63D2\u5165\u968F\u673A\u503C\u3002\u4E3A\u4E86\u8BA9\u5927\u5BB6\u6709\u6BD4\u8F83\u597D\u7684\u9605\u8BFB\u4F53\u9A8C\uFF0C\u6211\u4EEC\u4E0B\u8FB9\u5E76\u4E0D\u51C6\u5907\u4E25\u683C\u6309\u7167<code>EXPLAIN</code>\u8F93\u51FA\u5217\u7684\u987A\u5E8F\u6765\u4ECB\u7ECD\u8FD9\u4E9B\u5217\u5206\u522B\u662F\u5E72\u561B\u7684\uFF0C\u5927\u5BB6\u6CE8\u610F\u4E00\u4E0B\u5C31\u597D\u4E86\u3002</p>
<h2 data-id="heading-1">\u6267\u884C\u8BA1\u5212\u8F93\u51FA\u4E2D\u5404\u5217\u8BE6\u89E3</h2>
<h3 data-id="heading-2">table</h3>
<p>\u4E0D\u8BBA\u6211\u4EEC\u7684\u67E5\u8BE2\u8BED\u53E5\u6709\u591A\u590D\u6742\uFF0C\u91CC\u8FB9\u513F\u5305\u542B\u4E86\u591A\u5C11\u4E2A\u8868\uFF0C\u5230\u6700\u540E\u4E5F\u662F\u9700\u8981\u5BF9\u6BCF\u4E2A\u8868\u8FDB\u884C\u5355\u8868\u8BBF\u95EE\u7684\uFF0C\u6240\u4EE5\u8BBE\u8BA1<code>MySQL</code>\u7684\u5927\u53D4\u89C4\u5B9A<span>EXPLAIN\u8BED\u53E5\u8F93\u51FA\u7684\u6BCF\u6761\u8BB0\u5F55\u90FD\u5BF9\u5E94\u7740\u67D0\u4E2A\u5355\u8868\u7684\u8BBF\u95EE\u65B9\u6CD5\uFF0C\u8BE5\u6761\u8BB0\u5F55\u7684table\u5217\u4EE3\u8868\u7740\u8BE5\u8868\u7684\u8868\u540D</span>\u3002\u6240\u4EE5\u6211\u4EEC\u770B\u4E00\u6761\u6BD4\u8F83\u7B80\u5355\u7684\u67E5\u8BE2\u8BED\u53E5\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1;
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key  | key_len | ref  | rows | filtered | Extra |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------+
|  1 | SIMPLE      | s1    | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9688 |   100.00 | NULL  |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u8FD9\u4E2A\u67E5\u8BE2\u8BED\u53E5\u53EA\u6D89\u53CA\u5BF9<code>s1</code>\u8868\u7684\u5355\u8868\u67E5\u8BE2\uFF0C\u6240\u4EE5<code>EXPLAIN</code>\u8F93\u51FA\u4E2D\u53EA\u6709\u4E00\u6761\u8BB0\u5F55\uFF0C\u5176\u4E2D\u7684<code>table</code>\u5217\u7684\u503C\u662F<code>s1</code>\uFF0C\u8868\u660E\u8FD9\u6761\u8BB0\u5F55\u662F\u7528\u6765\u8BF4\u660E\u5BF9<code>s1</code>\u8868\u7684\u5355\u8868\u8BBF\u95EE\u65B9\u6CD5\u7684\u3002</p>
<p>\u4E0B\u8FB9\u6211\u4EEC\u770B\u4E00\u4E0B\u4E00\u4E2A\u8FDE\u63A5\u67E5\u8BE2\u7684\u6267\u884C\u8BA1\u5212\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 INNER JOIN s2;
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+---------------------------------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key  | key_len | ref  | rows | filtered | Extra                                 |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+---------------------------------------+
|  1 | SIMPLE      | s1    | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9688 |   100.00 | NULL                                  |
|  1 | SIMPLE      | s2    | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9954 |   100.00 | Using join buffer (Block Nested Loop) |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+---------------------------------------+
2 rows <span>in</span> <span>set</span>, 1 warning (0.01 sec)
</code></pre><p>\u53EF\u4EE5\u770B\u5230\u8FD9\u4E2A\u8FDE\u63A5\u67E5\u8BE2\u7684\u6267\u884C\u8BA1\u5212\u4E2D\u6709\u4E24\u6761\u8BB0\u5F55\uFF0C\u8FD9\u4E24\u6761\u8BB0\u5F55\u7684<code>table</code>\u5217\u5206\u522B\u662F<code>s1</code>\u548C<code>s2</code>\uFF0C\u8FD9\u4E24\u6761\u8BB0\u5F55\u7528\u6765\u5206\u522B\u8BF4\u660E\u5BF9<code>s1</code>\u8868\u548C<code>s2</code>\u8868\u7684\u8BBF\u95EE\u65B9\u6CD5\u662F\u4EC0\u4E48\u3002</p>
<h3 data-id="heading-3">id</h3>
<p>\u6211\u4EEC\u77E5\u9053\u6211\u4EEC\u5199\u7684\u67E5\u8BE2\u8BED\u53E5\u4E00\u822C\u90FD\u4EE5<code>SELECT</code>\u5173\u952E\u5B57\u5F00\u5934\uFF0C\u6BD4\u8F83\u7B80\u5355\u7684\u67E5\u8BE2\u8BED\u53E5\u91CC\u53EA\u6709\u4E00\u4E2A<code>SELECT</code>\u5173\u952E\u5B57\uFF0C\u6BD4\u5982\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\u8BED\u53E5\uFF1A</p>
<pre><code lang="bash" class="">SELECT * FROM s1 WHERE key1 = <span>'a'</span>;
</code></pre><p>\u7A0D\u5FAE\u590D\u6742\u4E00\u70B9\u7684\u8FDE\u63A5\u67E5\u8BE2\u4E2D\u4E5F\u53EA\u6709\u4E00\u4E2A<code>SELECT</code>\u5173\u952E\u5B57\uFF0C\u6BD4\u5982\uFF1A</p>
<pre><code lang="bash" class="">SELECT * FROM s1 INNER JOIN s2
    ON s1.key1 = s2.key1
    WHERE s1.common_field = <span>'a'</span>;
</code></pre><p>\u4F46\u662F\u4E0B\u8FB9\u4E24\u79CD\u60C5\u51B5\u4E0B\u5728\u4E00\u6761\u67E5\u8BE2\u8BED\u53E5\u4E2D\u4F1A\u51FA\u73B0\u591A\u4E2A<code>SELECT</code>\u5173\u952E\u5B57\uFF1A</p>
<ul>
<li>
<p>\u67E5\u8BE2\u4E2D\u5305\u542B\u5B50\u67E5\u8BE2\u7684\u60C5\u51B5</p>
<p>\u6BD4\u5982\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\u8BED\u53E5\u4E2D\u5C31\u5305\u542B2\u4E2A<code>SELECT</code>\u5173\u952E\u5B57\uFF1A</p>
<pre><code lang="bash" class="">SELECT * FROM s1 
    WHERE key1 IN (SELECT key3 FROM s2);
</code></pre></li>
<li>
<p>\u67E5\u8BE2\u4E2D\u5305\u542B<code>UNION</code>\u8BED\u53E5\u7684\u60C5\u51B5</p>
<p>\u6BD4\u5982\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\u8BED\u53E5\u4E2D\u4E5F\u5305\u542B2\u4E2A<code>SELECT</code>\u5173\u952E\u5B57\uFF1A</p>
<pre><code lang="bash" class="">SELECT * FROM s1  UNION SELECT * FROM s2;
</code></pre></li>
</ul>
<p>\u67E5\u8BE2\u8BED\u53E5\u4E2D\u6BCF\u51FA\u73B0\u4E00\u4E2A<code>SELECT</code>\u5173\u952E\u5B57\uFF0C\u8BBE\u8BA1<code>MySQL</code>\u7684\u5927\u53D4\u5C31\u4F1A\u4E3A\u5B83\u5206\u914D\u4E00\u4E2A\u552F\u4E00\u7684<code>id</code>\u503C\u3002\u8FD9\u4E2A<code>id</code>\u503C\u5C31\u662F<code>EXPLAIN</code>\u8BED\u53E5\u7684\u7B2C\u4E00\u4E2A\u5217\uFF0C\u6BD4\u5982\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\u4E2D\u53EA\u6709\u4E00\u4E2A<code>SELECT</code>\u5173\u952E\u5B57\uFF0C\u6240\u4EE5<code>EXPLAIN</code>\u7684\u7ED3\u679C\u4E2D\u4E5F\u5C31\u53EA\u6709\u4E00\u6761<code>id</code>\u5217\u4E3A<code>1</code>\u7684\u8BB0\u5F55\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 = <span>'a'</span>;
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key      | key_len | ref   | rows | filtered | Extra |
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------+
|  1 | SIMPLE      | s1    | NULL       | ref  | idx_key1      | idx_key1 | 303     | const |    8 |   100.00 | NULL  |
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------+
1 row <span>in</span> <span>set</span>, 1 warning (0.03 sec)
</code></pre><p>\u5BF9\u4E8E\u8FDE\u63A5\u67E5\u8BE2\u6765\u8BF4\uFF0C\u4E00\u4E2A<code>SELECT</code>\u5173\u952E\u5B57\u540E\u8FB9\u7684<code>FROM</code>\u5B50\u53E5\u4E2D\u53EF\u4EE5\u8DDF\u968F\u591A\u4E2A\u8868\uFF0C\u6240\u4EE5\u5728\u8FDE\u63A5\u67E5\u8BE2\u7684\u6267\u884C\u8BA1\u5212\u4E2D\uFF0C<span>\u6BCF\u4E2A\u8868\u90FD\u4F1A\u5BF9\u5E94\u4E00\u6761\u8BB0\u5F55\uFF0C\u4F46\u662F\u8FD9\u4E9B\u8BB0\u5F55\u7684id\u503C\u90FD\u662F\u76F8\u540C\u7684</span>\uFF0C\u6BD4\u5982\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 INNER JOIN s2;
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+---------------------------------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key  | key_len | ref  | rows | filtered | Extra                                 |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+---------------------------------------+
|  1 | SIMPLE      | s1    | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9688 |   100.00 | NULL                                  |
|  1 | SIMPLE      | s2    | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9954 |   100.00 | Using join buffer (Block Nested Loop) |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+---------------------------------------+
2 rows <span>in</span> <span>set</span>, 1 warning (0.01 sec)
</code></pre><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u4E0A\u8FF0\u8FDE\u63A5\u67E5\u8BE2\u4E2D\u53C2\u4E0E\u8FDE\u63A5\u7684<code>s1</code>\u548C<code>s2</code>\u8868\u5206\u522B\u5BF9\u5E94\u4E00\u6761\u8BB0\u5F55\uFF0C\u4F46\u662F\u8FD9\u4E24\u6761\u8BB0\u5F55\u5BF9\u5E94\u7684<code>id</code>\u503C\u90FD\u662F<code>1</code>\u3002\u8FD9\u91CC\u9700\u8981\u5927\u5BB6\u8BB0\u4F4F\u7684\u662F\uFF0C<span>\u5728\u8FDE\u63A5\u67E5\u8BE2\u7684\u6267\u884C\u8BA1\u5212\u4E2D\uFF0C\u6BCF\u4E2A\u8868\u90FD\u4F1A\u5BF9\u5E94\u4E00\u6761\u8BB0\u5F55\uFF0C\u8FD9\u4E9B\u8BB0\u5F55\u7684id\u5217\u7684\u503C\u662F\u76F8\u540C\u7684\uFF0C\u51FA\u73B0\u5728\u524D\u8FB9\u7684\u8868\u8868\u793A\u9A71\u52A8\u8868\uFF0C\u51FA\u73B0\u5728\u540E\u8FB9\u7684\u8868\u8868\u793A\u88AB\u9A71\u52A8\u8868</span>\u3002\u6240\u4EE5\u4ECE\u4E0A\u8FB9\u7684<code>EXPLAIN</code>\u8F93\u51FA\u4E2D\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\uFF0C\u67E5\u8BE2\u4F18\u5316\u5668\u51C6\u5907\u8BA9<code>s1</code>\u8868\u4F5C\u4E3A\u9A71\u52A8\u8868\uFF0C\u8BA9<code>s2</code>\u8868\u4F5C\u4E3A\u88AB\u9A71\u52A8\u8868\u6765\u6267\u884C\u67E5\u8BE2\u3002</p>
<p>\u5BF9\u4E8E\u5305\u542B\u5B50\u67E5\u8BE2\u7684\u67E5\u8BE2\u8BED\u53E5\u6765\u8BF4\uFF0C\u5C31\u53EF\u80FD\u6D89\u53CA\u591A\u4E2A<code>SELECT</code>\u5173\u952E\u5B57\uFF0C\u6240\u4EE5\u5728\u5305\u542B\u5B50\u67E5\u8BE2\u7684\u67E5\u8BE2\u8BED\u53E5\u7684\u6267\u884C\u8BA1\u5212\u4E2D\uFF0C\u6BCF\u4E2A<code>SELECT</code>\u5173\u952E\u5B57\u90FD\u4F1A\u5BF9\u5E94\u4E00\u4E2A\u552F\u4E00\u7684<code>id</code>\u503C\uFF0C\u6BD4\u5982\u8FD9\u6837\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 IN (SELECT key1 FROM s2) OR key3 = <span>'a'</span>;
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-------------+
| id | select_type | table | partitions | <span>type</span>  | possible_keys | key      | key_len | ref  | rows | filtered | Extra       |
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-------------+
|  1 | PRIMARY     | s1    | NULL       | ALL   | idx_key3      | NULL     | NULL    | NULL | 9688 |   100.00 | Using <span>where</span> |
|  2 | SUBQUERY    | s2    | NULL       | index | idx_key1      | idx_key1 | 303     | NULL | 9954 |   100.00 | Using index |
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-------------+
2 rows <span>in</span> <span>set</span>, 1 warning (0.02 sec)
</code></pre><p>\u4ECE\u8F93\u51FA\u7ED3\u679C\u4E2D\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C<code>s1</code>\u8868\u5728\u5916\u5C42\u67E5\u8BE2\u4E2D\uFF0C\u5916\u5C42\u67E5\u8BE2\u6709\u4E00\u4E2A\u72EC\u7ACB\u7684<code>SELECT</code>\u5173\u952E\u5B57\uFF0C\u6240\u4EE5\u7B2C\u4E00\u6761\u8BB0\u5F55\u7684<code>id</code>\u503C\u5C31\u662F<code>1</code>\uFF0C<code>s2</code>\u8868\u5728\u5B50\u67E5\u8BE2\u4E2D\uFF0C\u5B50\u67E5\u8BE2\u6709\u4E00\u4E2A\u72EC\u7ACB\u7684<code>SELECT</code>\u5173\u952E\u5B57\uFF0C\u6240\u4EE5\u7B2C\u4E8C\u6761\u8BB0\u5F55\u7684<code>id</code>\u503C\u5C31\u662F<code>2</code>\u3002</p>
<p>\u4F46\u662F\u8FD9\u91CC\u5927\u5BB6\u9700\u8981\u7279\u522B\u6CE8\u610F\uFF0C<span>\u67E5\u8BE2\u4F18\u5316\u5668\u53EF\u80FD\u5BF9\u6D89\u53CA\u5B50\u67E5\u8BE2\u7684\u67E5\u8BE2\u8BED\u53E5\u8FDB\u884C\u91CD\u5199\uFF0C\u4ECE\u800C\u8F6C\u6362\u4E3A\u8FDE\u63A5\u67E5\u8BE2</span>\u3002\u6240\u4EE5\u5982\u679C\u6211\u4EEC\u60F3\u77E5\u9053\u67E5\u8BE2\u4F18\u5316\u5668\u5BF9\u67D0\u4E2A\u5305\u542B\u5B50\u67E5\u8BE2\u7684\u8BED\u53E5\u662F\u5426\u8FDB\u884C\u4E86\u91CD\u5199\uFF0C\u76F4\u63A5\u67E5\u770B\u6267\u884C\u8BA1\u5212\u5C31\u597D\u4E86\uFF0C\u6BD4\u5982\u8BF4\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 IN (SELECT key3 FROM s2 WHERE common_field = <span>'a'</span>);
+----+-------------+-------+------------+------+---------------+----------+---------+-------------------+------+----------+------------------------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key      | key_len | ref               | rows | filtered | Extra                        |
+----+-------------+-------+------------+------+---------------+----------+---------+-------------------+------+----------+------------------------------+
|  1 | SIMPLE      | s2    | NULL       | ALL  | idx_key3      | NULL     | NULL    | NULL              | 9954 |    10.00 | Using <span>where</span>; Start temporary |
|  1 | SIMPLE      | s1    | NULL       | ref  | idx_key1      | idx_key1 | 303     | xiaohaizi.s2.key3 |    1 |   100.00 | End temporary                |
+----+-------------+-------+------------+------+---------------+----------+---------+-------------------+------+----------+------------------------------+
2 rows <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u867D\u7136\u6211\u4EEC\u7684\u67E5\u8BE2\u8BED\u53E5\u662F\u4E00\u4E2A\u5B50\u67E5\u8BE2\uFF0C\u4F46\u662F\u6267\u884C\u8BA1\u5212\u4E2D<code>s1</code>\u548C<code>s2</code>\u8868\u5BF9\u5E94\u7684\u8BB0\u5F55\u7684<code>id</code>\u503C\u5168\u90E8\u662F<code>1</code>\uFF0C\u8FD9\u5C31\u8868\u660E\u4E86<span>\u67E5\u8BE2\u4F18\u5316\u5668\u5C06\u5B50\u67E5\u8BE2\u8F6C\u6362\u4E3A\u4E86\u8FDE\u63A5\u67E5\u8BE2</span>\u3002</p>
<p>\u5BF9\u4E8E\u5305\u542B<code>UNION</code>\u5B50\u53E5\u7684\u67E5\u8BE2\u8BED\u53E5\u6765\u8BF4\uFF0C\u6BCF\u4E2A<code>SELECT</code>\u5173\u952E\u5B57\u5BF9\u5E94\u4E00\u4E2A<code>id</code>\u503C\u4E5F\u662F\u6CA1\u9519\u7684\uFF0C\u4E0D\u8FC7\u8FD8\u662F\u6709\u70B9\u513F\u7279\u522B\u7684\u4E1C\u897F\uFF0C\u6BD4\u65B9\u8BF4\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1  UNION SELECT * FROM s2;
+----+--------------+------------+------------+------+---------------+------+---------+------+------+----------+-----------------+
| id | select_type  | table      | partitions | <span>type</span> | possible_keys | key  | key_len | ref  | rows | filtered | Extra           |
+----+--------------+------------+------------+------+---------------+------+---------+------+------+----------+-----------------+
|  1 | PRIMARY      | s1         | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9688 |   100.00 | NULL            |
|  2 | UNION        | s2         | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9954 |   100.00 | NULL            |
| NULL | UNION RESULT | &lt;union1,2&gt; | NULL       | ALL  | NULL          | NULL | NULL    | NULL | NULL |     NULL | Using temporary |
+----+--------------+------------+------------+------+---------------+------+---------+------+------+----------+-----------------+
3 rows <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u8FD9\u4E2A\u8BED\u53E5\u7684\u6267\u884C\u8BA1\u5212\u7684\u7B2C\u4E09\u6761\u8BB0\u5F55\u662F\u4E2A\u4EC0\u4E48\u9B3C\uFF1F\u4E3A\u6BDB<code>id</code>\u503C\u662F<code>NULL</code>\uFF0C\u800C\u4E14<code>table</code>\u5217\u957F\u7684\u4E5F\u602A\u602A\u7684\uFF1F\u5927\u5BB6\u522B\u5FD8\u4E86<code>UNION</code>\u5B50\u53E5\u662F\u5E72\u561B\u7528\u7684\uFF0C\u5B83\u4F1A\u628A\u591A\u4E2A\u67E5\u8BE2\u7684\u7ED3\u679C\u96C6\u5408\u5E76\u8D77\u6765\u5E76\u5BF9\u7ED3\u679C\u96C6\u4E2D\u7684\u8BB0\u5F55\u8FDB\u884C\u53BB\u91CD\uFF0C\u600E\u4E48\u53BB\u91CD\u5462\uFF1F<code>MySQL</code>\u4F7F\u7528\u7684\u662F\u5185\u90E8\u7684\u4E34\u65F6\u8868\u3002\u6B63\u5982\u4E0A\u8FB9\u7684\u67E5\u8BE2\u8BA1\u5212\u4E2D\u6240\u793A\uFF0C<code>UNION</code>\u5B50\u53E5\u662F\u4E3A\u4E86\u628A<code>id</code>\u4E3A<code>1</code>\u7684\u67E5\u8BE2\u548C<code>id</code>\u4E3A<code>2</code>\u7684\u67E5\u8BE2\u7684\u7ED3\u679C\u96C6\u5408\u5E76\u8D77\u6765\u5E76\u53BB\u91CD\uFF0C\u6240\u4EE5\u5728\u5185\u90E8\u521B\u5EFA\u4E86\u4E00\u4E2A\u540D\u4E3A<code>&lt;union1, 2&gt;</code>\u7684\u4E34\u65F6\u8868\uFF08\u5C31\u662F\u6267\u884C\u8BA1\u5212\u7B2C\u4E09\u6761\u8BB0\u5F55\u7684<code>table</code>\u5217\u7684\u540D\u79F0\uFF09\uFF0C<code>id</code>\u4E3A<code>NULL</code>\u8868\u660E\u8FD9\u4E2A\u4E34\u65F6\u8868\u662F\u4E3A\u4E86\u5408\u5E76\u4E24\u4E2A\u67E5\u8BE2\u7684\u7ED3\u679C\u96C6\u800C\u521B\u5EFA\u7684\u3002</p>
<p>\u8DDF<code>UNION</code>\u5BF9\u6BD4\u8D77\u6765\uFF0C<code>UNION ALL</code>\u5C31\u4E0D\u9700\u8981\u4E3A\u6700\u7EC8\u7684\u7ED3\u679C\u96C6\u8FDB\u884C\u53BB\u91CD\uFF0C\u5B83\u53EA\u662F\u5355\u7EAF\u7684\u628A\u591A\u4E2A\u67E5\u8BE2\u7684\u7ED3\u679C\u96C6\u4E2D\u7684\u8BB0\u5F55\u5408\u5E76\u6210\u4E00\u4E2A\u5E76\u8FD4\u56DE\u7ED9\u7528\u6237\uFF0C\u6240\u4EE5\u4E5F\u5C31\u4E0D\u9700\u8981\u4F7F\u7528\u4E34\u65F6\u8868\u3002\u6240\u4EE5\u5728\u5305\u542B<code>UNION ALL</code>\u5B50\u53E5\u7684\u67E5\u8BE2\u7684\u6267\u884C\u8BA1\u5212\u4E2D\uFF0C\u5C31\u6CA1\u6709\u90A3\u4E2A<code>id</code>\u4E3A<code>NULL</code>\u7684\u8BB0\u5F55\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1  UNION ALL SELECT * FROM s2;
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key  | key_len | ref  | rows | filtered | Extra |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------+
|  1 | PRIMARY     | s1    | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9688 |   100.00 | NULL  |
|  2 | UNION       | s2    | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9954 |   100.00 | NULL  |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------+
2 rows <span>in</span> <span>set</span>, 1 warning (0.01 sec)
</code></pre><h3 data-id="heading-4">select_type</h3>
<p>\u901A\u8FC7\u4E0A\u8FB9\u7684\u5185\u5BB9\u6211\u4EEC\u77E5\u9053\uFF0C\u4E00\u6761\u5927\u7684\u67E5\u8BE2\u8BED\u53E5\u91CC\u8FB9\u53EF\u4EE5\u5305\u542B\u82E5\u5E72\u4E2A<code>SELECT</code>\u5173\u952E\u5B57\uFF0C\u6BCF\u4E2A<code>SELECT</code>\u5173\u952E\u5B57\u4EE3\u8868\u7740\u4E00\u4E2A\u5C0F\u7684\u67E5\u8BE2\u8BED\u53E5\uFF0C\u800C\u6BCF\u4E2A<code>SELECT</code>\u5173\u952E\u5B57\u7684<code>FROM</code>\u5B50\u53E5\u4E2D\u90FD\u53EF\u4EE5\u5305\u542B\u82E5\u5E72\u5F20\u8868\uFF08\u8FD9\u4E9B\u8868\u7528\u6765\u505A\u8FDE\u63A5\u67E5\u8BE2\uFF09\uFF0C\u6BCF\u4E00\u5F20\u8868\u90FD\u5BF9\u5E94\u7740\u6267\u884C\u8BA1\u5212\u8F93\u51FA\u4E2D\u7684\u4E00\u6761\u8BB0\u5F55\uFF0C\u5BF9\u4E8E\u5728\u540C\u4E00\u4E2A<code>SELECT</code>\u5173\u952E\u5B57\u4E2D\u7684\u8868\u6765\u8BF4\uFF0C\u5B83\u4EEC\u7684<code>id</code>\u503C\u662F\u76F8\u540C\u7684\u3002</p>
<p>\u8BBE\u8BA1<code>MySQL</code>\u7684\u5927\u53D4\u4E3A\u6BCF\u4E00\u4E2A<code>SELECT</code>\u5173\u952E\u5B57\u4EE3\u8868\u7684\u5C0F\u67E5\u8BE2\u90FD\u5B9A\u4E49\u4E86\u4E00\u4E2A\u79F0\u4E4B\u4E3A<code>select_type</code>\u7684\u5C5E\u6027\uFF0C\u610F\u601D\u662F\u6211\u4EEC\u53EA\u8981\u77E5\u9053\u4E86\u67D0\u4E2A\u5C0F\u67E5\u8BE2\u7684<code>select_type</code>\u5C5E\u6027\uFF0C\u5C31\u77E5\u9053\u4E86\u8FD9\u4E2A\u5C0F\u67E5\u8BE2\u5728\u6574\u4E2A\u5927\u67E5\u8BE2\u4E2D\u626E\u6F14\u4E86\u4E00\u4E2A\u4EC0\u4E48\u89D2\u8272\uFF0C\u53E3\u8BF4\u65E0\u51ED\uFF0C\u6211\u4EEC\u8FD8\u662F\u5148\u6765\u89C1\u8BC6\u89C1\u8BC6\u8FD9\u4E2A<code>select_type</code>\u90FD\u80FD\u53D6\u54EA\u4E9B\u503C\uFF08\u4E3A\u4E86\u7CBE\u786E\u8D77\u89C1\uFF0C\u6211\u4EEC\u76F4\u63A5\u4F7F\u7528\u6587\u6863\u4E2D\u7684\u82F1\u6587\u505A\u7B80\u8981\u63CF\u8FF0\uFF0C\u968F\u540E\u4F1A\u8FDB\u884C\u8BE6\u7EC6\u89E3\u91CA\u7684\uFF09\uFF1A</p>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>SIMPLE</code></td>
<td>Simple SELECT (not using UNION or subqueries)</td>
</tr>
<tr>
<td><code>PRIMARY</code></td>
<td>Outermost SELECT</td>
</tr>
<tr>
<td><code>UNION</code></td>
<td>Second or later SELECT statement in a UNION</td>
</tr>
<tr>
<td><code>UNION RESULT</code></td>
<td>Result of a UNION</td>
</tr>
<tr>
<td><code>SUBQUERY</code></td>
<td>First SELECT in subquery</td>
</tr>
<tr>
<td><code>DEPENDENT SUBQUERY</code></td>
<td>First SELECT in subquery, dependent on outer query</td>
</tr>
<tr>
<td><code>DEPENDENT UNION</code></td>
<td>Second or later SELECT statement in a UNION, dependent on outer query</td>
</tr>
<tr>
<td><code>DERIVED</code></td>
<td>Derived table</td>
</tr>
<tr>
<td><code>MATERIALIZED</code></td>
<td>Materialized subquery</td>
</tr>
<tr>
<td><code>UNCACHEABLE SUBQUERY</code></td>
<td>A subquery for which the result cannot be cached and must be re-evaluated for each row of the outer query</td>
</tr>
<tr>
<td><code>UNCACHEABLE UNION</code></td>
<td>The second or later select in a UNION that belongs to an uncacheable subquery (see UNCACHEABLE SUBQUERY)</td>
</tr>
</tbody>
</table>
<p>\u82F1\u6587\u63CF\u8FF0\u592A\u7B80\u5355\uFF0C\u4E0D\u77E5\u9053\u8BF4\u4E86\u5565\uFF1F\u6765\u8BE6\u7EC6\u7785\u7785\u91CC\u8FB9\u513F\u7684\u6BCF\u4E2A\u503C\u90FD\u662F\u5E72\u5565\u5403\u7684\uFF1A</p>
<ul>
<li>
<p><code>SIMPLE</code></p>
<p>\u67E5\u8BE2\u8BED\u53E5\u4E2D\u4E0D\u5305\u542B<code>UNION</code>\u6216\u8005\u5B50\u67E5\u8BE2\u7684\u67E5\u8BE2\u90FD\u7B97\u4F5C\u662F<code>SIMPLE</code>\u7C7B\u578B\uFF0C\u6BD4\u65B9\u8BF4\u4E0B\u8FB9\u8FD9\u4E2A\u5355\u8868\u67E5\u8BE2\u7684<code>select_type</code>\u7684\u503C\u5C31\u662F<code>SIMPLE</code>\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1;
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key  | key_len | ref  | rows | filtered | Extra |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------+
|  1 | SIMPLE      | s1    | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9688 |   100.00 | NULL  |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u5F53\u7136\uFF0C\u8FDE\u63A5\u67E5\u8BE2\u4E5F\u7B97\u662F<code>SIMPLE</code>\u7C7B\u578B\uFF0C\u6BD4\u5982\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 INNER JOIN s2;
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+---------------------------------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key  | key_len | ref  | rows | filtered | Extra                                 |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+---------------------------------------+
|  1 | SIMPLE      | s1    | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9688 |   100.00 | NULL                                  |
|  1 | SIMPLE      | s2    | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9954 |   100.00 | Using join buffer (Block Nested Loop) |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+---------------------------------------+
2 rows <span>in</span> <span>set</span>, 1 warning (0.01 sec)
</code></pre></li>
<li>
<p><code>PRIMARY</code></p>
<p>\u5BF9\u4E8E\u5305\u542B<code>UNION</code>\u3001<code>UNION ALL</code>\u6216\u8005\u5B50\u67E5\u8BE2\u7684\u5927\u67E5\u8BE2\u6765\u8BF4\uFF0C\u5B83\u662F\u7531\u51E0\u4E2A\u5C0F\u67E5\u8BE2\u7EC4\u6210\u7684\uFF0C\u5176\u4E2D\u6700\u5DE6\u8FB9\u7684\u90A3\u4E2A\u67E5\u8BE2\u7684<code>select_type</code>\u503C\u5C31\u662F<code>PRIMARY</code>\uFF0C\u6BD4\u65B9\u8BF4\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 UNION SELECT * FROM s2;
+----+--------------+------------+------------+------+---------------+------+---------+------+------+----------+-----------------+
| id | select_type  | table      | partitions | <span>type</span> | possible_keys | key  | key_len | ref  | rows | filtered | Extra           |
+----+--------------+------------+------------+------+---------------+------+---------+------+------+----------+-----------------+
|  1 | PRIMARY      | s1         | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9688 |   100.00 | NULL            |
|  2 | UNION        | s2         | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9954 |   100.00 | NULL            |
| NULL | UNION RESULT | &lt;union1,2&gt; | NULL       | ALL  | NULL          | NULL | NULL    | NULL | NULL |     NULL | Using temporary |
+----+--------------+------------+------------+------+---------------+------+---------+------+------+----------+-----------------+
3 rows <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u4ECE\u7ED3\u679C\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C\u6700\u5DE6\u8FB9\u7684\u5C0F\u67E5\u8BE2<code>SELECT * FROM s1</code>\u5BF9\u5E94\u7684\u662F\u6267\u884C\u8BA1\u5212\u4E2D\u7684\u7B2C\u4E00\u6761\u8BB0\u5F55\uFF0C\u5B83\u7684<code>select_type</code>\u503C\u5C31\u662F<code>PRIMARY</code>\u3002</p>
</li>
<li>
<p><code>UNION</code></p>
<p>\u5BF9\u4E8E\u5305\u542B<code>UNION</code>\u6216\u8005<code>UNION ALL</code>\u7684\u5927\u67E5\u8BE2\u6765\u8BF4\uFF0C\u5B83\u662F\u7531\u51E0\u4E2A\u5C0F\u67E5\u8BE2\u7EC4\u6210\u7684\uFF0C\u5176\u4E2D\u9664\u4E86\u6700\u5DE6\u8FB9\u7684\u90A3\u4E2A\u5C0F\u67E5\u8BE2\u4EE5\u5916\uFF0C\u5176\u4F59\u7684\u5C0F\u67E5\u8BE2\u7684<code>select_type</code>\u503C\u5C31\u662F<code>UNION</code>\uFF0C\u53EF\u4EE5\u5BF9\u6BD4\u4E0A\u4E00\u4E2A\u4F8B\u5B50\u7684\u6548\u679C\uFF0C\u8FD9\u5C31\u4E0D\u591A\u4E3E\u4F8B\u5B50\u4E86\u3002</p>
</li>
<li>
<p><code>UNION RESULT</code></p>
<p><code>MySQL</code>\u9009\u62E9\u4F7F\u7528\u4E34\u65F6\u8868\u6765\u5B8C\u6210<code>UNION</code>\u67E5\u8BE2\u7684\u53BB\u91CD\u5DE5\u4F5C\uFF0C\u9488\u5BF9\u8BE5\u4E34\u65F6\u8868\u7684\u67E5\u8BE2\u7684<code>select_type</code>\u5C31\u662F<code>UNION RESULT</code>\uFF0C\u4F8B\u5B50\u4E0A\u8FB9\u6709\uFF0C\u5C31\u4E0D\u8D58\u8FF0\u4E86\u3002</p>
</li>
<li>
<p><code>SUBQUERY</code></p>
<p>\u5982\u679C\u5305\u542B\u5B50\u67E5\u8BE2\u7684\u67E5\u8BE2\u8BED\u53E5\u4E0D\u80FD\u591F\u8F6C\u4E3A\u5BF9\u5E94\u7684<code>semi-join</code>\u7684\u5F62\u5F0F\uFF0C\u5E76\u4E14\u8BE5\u5B50\u67E5\u8BE2\u662F\u4E0D\u76F8\u5173\u5B50\u67E5\u8BE2\uFF0C\u5E76\u4E14\u67E5\u8BE2\u4F18\u5316\u5668\u51B3\u5B9A\u91C7\u7528\u5C06\u8BE5\u5B50\u67E5\u8BE2\u7269\u5316\u7684\u65B9\u6848\u6765\u6267\u884C\u8BE5\u5B50\u67E5\u8BE2\u65F6\uFF0C\u8BE5\u5B50\u67E5\u8BE2\u7684\u7B2C\u4E00\u4E2A<code>SELECT</code>\u5173\u952E\u5B57\u4EE3\u8868\u7684\u90A3\u4E2A\u67E5\u8BE2\u7684<code>select_type</code>\u5C31\u662F<code>SUBQUERY</code>\uFF0C\u6BD4\u5982\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 IN (SELECT key1 FROM s2) OR key3 = <span>'a'</span>;
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-------------+
| id | select_type | table | partitions | <span>type</span>  | possible_keys | key      | key_len | ref  | rows | filtered | Extra       |
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-------------+
|  1 | PRIMARY     | s1    | NULL       | ALL   | idx_key3      | NULL     | NULL    | NULL | 9688 |   100.00 | Using <span>where</span> |
|  2 | SUBQUERY    | s2    | NULL       | index | idx_key1      | idx_key1 | 303     | NULL | 9954 |   100.00 | Using index |
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-------------+
2 rows <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u5916\u5C42\u67E5\u8BE2\u7684<code>select_type</code>\u5C31\u662F<code>PRIMARY</code>\uFF0C\u5B50\u67E5\u8BE2\u7684<code>select_type</code>\u5C31\u662F<code>SUBQUERY</code>\u3002\u9700\u8981\u5927\u5BB6\u6CE8\u610F\u7684\u662F\uFF0C<span>\u7531\u4E8Eselect_type\u4E3ASUBQUERY\u7684\u5B50\u67E5\u8BE2\u4F1A\u88AB\u7269\u5316\uFF0C\u6240\u4EE5\u53EA\u9700\u8981\u6267\u884C\u4E00\u904D</span>\u3002</p>
</li>
<li>
<p><code>DEPENDENT SUBQUERY</code></p>
<p>\u5982\u679C\u5305\u542B\u5B50\u67E5\u8BE2\u7684\u67E5\u8BE2\u8BED\u53E5\u4E0D\u80FD\u591F\u8F6C\u4E3A\u5BF9\u5E94\u7684<code>semi-join</code>\u7684\u5F62\u5F0F\uFF0C\u5E76\u4E14\u8BE5\u5B50\u67E5\u8BE2\u662F\u76F8\u5173\u5B50\u67E5\u8BE2\uFF0C\u5219\u8BE5\u5B50\u67E5\u8BE2\u7684\u7B2C\u4E00\u4E2A<code>SELECT</code>\u5173\u952E\u5B57\u4EE3\u8868\u7684\u90A3\u4E2A\u67E5\u8BE2\u7684<code>select_type</code>\u5C31\u662F<code>DEPENDENT SUBQUERY</code>\uFF0C\u6BD4\u5982\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 IN (SELECT key1 FROM s2 WHERE s1.key2 = s2.key2) OR key3 = <span>'a'</span>;
+----+--------------------+-------+------------+------+-------------------+----------+---------+-------------------+------+----------+-------------+
| id | select_type        | table | partitions | <span>type</span> | possible_keys     | key      | key_len | ref               | rows | filtered | Extra       |
+----+--------------------+-------+------------+------+-------------------+----------+---------+-------------------+------+----------+-------------+
|  1 | PRIMARY            | s1    | NULL       | ALL  | idx_key3          | NULL     | NULL    | NULL              | 9688 |   100.00 | Using <span>where</span> |
|  2 | DEPENDENT SUBQUERY | s2    | NULL       | ref  | idx_key2,idx_key1 | idx_key2 | 5       | xiaohaizi.s1.key2 |    1 |    10.00 | Using <span>where</span> |
+----+--------------------+-------+------------+------+-------------------+----------+---------+-------------------+------+----------+-------------+
2 rows <span>in</span> <span>set</span>, 2 warnings (0.00 sec)
</code></pre><p>\u9700\u8981\u5927\u5BB6\u6CE8\u610F\u7684\u662F\uFF0C<span>select_type\u4E3ADEPENDENT SUBQUERY\u7684\u67E5\u8BE2\u53EF\u80FD\u4F1A\u88AB\u6267\u884C\u591A\u6B21</span>\u3002</p>
</li>
<li>
<p><code>DEPENDENT UNION</code></p>
<p>\u5728\u5305\u542B<code>UNION</code>\u6216\u8005<code>UNION ALL</code>\u7684\u5927\u67E5\u8BE2\u4E2D\uFF0C\u5982\u679C\u5404\u4E2A\u5C0F\u67E5\u8BE2\u90FD\u4F9D\u8D56\u4E8E\u5916\u5C42\u67E5\u8BE2\u7684\u8BDD\uFF0C\u90A3\u9664\u4E86\u6700\u5DE6\u8FB9\u7684\u90A3\u4E2A\u5C0F\u67E5\u8BE2\u4E4B\u5916\uFF0C\u5176\u4F59\u7684\u5C0F\u67E5\u8BE2\u7684<code>select_type</code>\u7684\u503C\u5C31\u662F<code>DEPENDENT UNION</code>\u3002\u8BF4\u7684\u6709\u4E9B\u7ED5\u54C8\uFF0C\u6BD4\u65B9\u8BF4\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 IN (SELECT key1 FROM s2 WHERE key1 = <span>'a'</span> UNION SELECT key1 FROM s1 WHERE key1 = <span>'b'</span>);
+----+--------------------+------------+------------+------+---------------+----------+---------+-------+------+----------+--------------------------+
| id | select_type        | table      | partitions | <span>type</span> | possible_keys | key      | key_len | ref   | rows | filtered | Extra                    |
+----+--------------------+------------+------------+------+---------------+----------+---------+-------+------+----------+--------------------------+
|  1 | PRIMARY            | s1         | NULL       | ALL  | NULL          | NULL     | NULL    | NULL  | 9688 |   100.00 | Using <span>where</span>              |
|  2 | DEPENDENT SUBQUERY | s2         | NULL       | ref  | idx_key1      | idx_key1 | 303     | const |   12 |   100.00 | Using <span>where</span>; Using index |
|  3 | DEPENDENT UNION    | s1         | NULL       | ref  | idx_key1      | idx_key1 | 303     | const |    8 |   100.00 | Using <span>where</span>; Using index |
| NULL | UNION RESULT       | &lt;union2,3&gt; | NULL       | ALL  | NULL          | NULL     | NULL    | NULL  | NULL |     NULL | Using temporary          |
+----+--------------------+------------+------------+------+---------------+----------+---------+-------+------+----------+--------------------------+
4 rows <span>in</span> <span>set</span>, 1 warning (0.03 sec)
</code></pre><p>\u8FD9\u4E2A\u67E5\u8BE2\u6BD4\u8F83\u590D\u6742\u554A\uFF0C\u5927\u67E5\u8BE2\u91CC\u5305\u542B\u4E86\u4E00\u4E2A\u5B50\u67E5\u8BE2\uFF0C\u5B50\u67E5\u8BE2\u91CC\u53C8\u662F\u7531<code>UNION</code>\u8FDE\u8D77\u6765\u7684\u4E24\u4E2A\u5C0F\u67E5\u8BE2\u3002\u4ECE\u6267\u884C\u8BA1\u5212\u4E2D\u53EF\u4EE5\u770B\u51FA\u6765\uFF0C<code>SELECT key1 FROM s2 WHERE key1 = 'a'</code>\u8FD9\u4E2A\u5C0F\u67E5\u8BE2\u7531\u4E8E\u662F\u5B50\u67E5\u8BE2\u4E2D\u7B2C\u4E00\u4E2A\u67E5\u8BE2\uFF0C\u6240\u4EE5\u5B83\u7684<code>select_type</code>\u662F<code>DEPENDENT SUBQUERY</code>\uFF0C\u800C<code>SELECT key1 FROM s1 WHERE key1 = 'b'</code>\u8FD9\u4E2A\u67E5\u8BE2\u7684<code>select_type</code>\u5C31\u662F<code>DEPENDENT UNION</code>\u3002</p>
</li>
<li>
<p><code>DERIVED</code></p>
<p>\u5BF9\u4E8E\u91C7\u7528\u7269\u5316\u7684\u65B9\u5F0F\u6267\u884C\u7684\u5305\u542B\u6D3E\u751F\u8868\u7684\u67E5\u8BE2\uFF0C\u8BE5\u6D3E\u751F\u8868\u5BF9\u5E94\u7684\u5B50\u67E5\u8BE2\u7684<code>select_type</code>\u5C31\u662F<code>DERIVED</code>\uFF0C\u6BD4\u65B9\u8BF4\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM (SELECT key1, count(*) as c FROM s1 GROUP BY key1) AS derived_s1 <span>where</span> c &gt; 1;
+----+-------------+------------+------------+-------+---------------+----------+---------+------+------+----------+-------------+
| id | select_type | table      | partitions | <span>type</span>  | possible_keys | key      | key_len | ref  | rows | filtered | Extra       |
+----+-------------+------------+------------+-------+---------------+----------+---------+------+------+----------+-------------+
|  1 | PRIMARY     | &lt;derived2&gt; | NULL       | ALL   | NULL          | NULL     | NULL    | NULL | 9688 |    33.33 | Using <span>where</span> |
|  2 | DERIVED     | s1         | NULL       | index | idx_key1      | idx_key1 | 303     | NULL | 9688 |   100.00 | Using index |
+----+-------------+------------+------------+-------+---------------+----------+---------+------+------+----------+-------------+
2 rows <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u4ECE\u6267\u884C\u8BA1\u5212\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C<code>id</code>\u4E3A<code>2</code>\u7684\u8BB0\u5F55\u5C31\u4EE3\u8868\u5B50\u67E5\u8BE2\u7684\u6267\u884C\u65B9\u5F0F\uFF0C\u5B83\u7684<code>select_type</code>\u662F<code>DERIVED</code>\uFF0C\u8BF4\u660E\u8BE5\u5B50\u67E5\u8BE2\u662F\u4EE5\u7269\u5316\u7684\u65B9\u5F0F\u6267\u884C\u7684\u3002<code>id</code>\u4E3A<code>1</code>\u7684\u8BB0\u5F55\u4EE3\u8868\u5916\u5C42\u67E5\u8BE2\uFF0C\u5927\u5BB6\u6CE8\u610F\u770B\u5B83\u7684<code>table</code>\u5217\u663E\u793A\u7684\u662F<code>&lt;derived2&gt;</code>\uFF0C\u8868\u793A\u8BE5\u67E5\u8BE2\u662F\u9488\u5BF9\u5C06\u6D3E\u751F\u8868\u7269\u5316\u4E4B\u540E\u7684\u8868\u8FDB\u884C\u67E5\u8BE2\u7684\u3002</p>
<blockquote><p>\u5C0F\u8D34\u58EB\uFF1A

\u5982\u679C\u6D3E\u751F\u8868\u53EF\u4EE5\u901A\u8FC7\u548C\u5916\u5C42\u67E5\u8BE2\u5408\u5E76\u7684\u65B9\u5F0F\u6267\u884C\u7684\u8BDD\uFF0C\u6267\u884C\u8BA1\u5212\u53C8\u662F\u53E6\u4E00\u756A\u666F\u8C61\uFF0C\u5927\u5BB6\u53EF\u4EE5\u8BD5\u8BD5\u54C8\uFF5E
</p></blockquote></li>
<li>
<p><code>MATERIALIZED</code></p>
<p>\u5F53\u67E5\u8BE2\u4F18\u5316\u5668\u5728\u6267\u884C\u5305\u542B\u5B50\u67E5\u8BE2\u7684\u8BED\u53E5\u65F6\uFF0C\u9009\u62E9\u5C06\u5B50\u67E5\u8BE2\u7269\u5316\u4E4B\u540E\u4E0E\u5916\u5C42\u67E5\u8BE2\u8FDB\u884C\u8FDE\u63A5\u67E5\u8BE2\u65F6\uFF0C\u8BE5\u5B50\u67E5\u8BE2\u5BF9\u5E94\u7684<code>select_type</code>\u5C5E\u6027\u5C31\u662F<code>MATERIALIZED</code>\uFF0C\u6BD4\u5982\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 IN (SELECT key1 FROM s2);
+----+--------------+-------------+------------+--------+---------------+------------+---------+-------------------+------+----------+-------------+
| id | select_type  | table       | partitions | <span>type</span>   | possible_keys | key        | key_len | ref               | rows | filtered | Extra       |
+----+--------------+-------------+------------+--------+---------------+------------+---------+-------------------+------+----------+-------------+
|  1 | SIMPLE       | s1          | NULL       | ALL    | idx_key1      | NULL       | NULL    | NULL              | 9688 |   100.00 | Using <span>where</span> |
|  1 | SIMPLE       | &lt;subquery2&gt; | NULL       | eq_ref | &lt;auto_key&gt;    | &lt;auto_key&gt; | 303     | xiaohaizi.s1.key1 |    1 |   100.00 | NULL        |
|  2 | MATERIALIZED | s2          | NULL       | index  | idx_key1      | idx_key1   | 303     | NULL              | 9954 |   100.00 | Using index |
+----+--------------+-------------+------------+--------+---------------+------------+---------+-------------------+------+----------+-------------+
3 rows <span>in</span> <span>set</span>, 1 warning (0.01 sec)
</code></pre><p>\u6267\u884C\u8BA1\u5212\u7684\u7B2C\u4E09\u6761\u8BB0\u5F55\u7684<code>id</code>\u503C\u4E3A<code>2</code>\uFF0C\u8BF4\u660E\u8BE5\u6761\u8BB0\u5F55\u5BF9\u5E94\u7684\u662F\u4E00\u4E2A\u5355\u8868\u67E5\u8BE2\uFF0C\u4ECE\u5B83\u7684<code>select_type</code>\u503C\u4E3A<code>MATERIALIZED</code>\u53EF\u4EE5\u770B\u51FA\uFF0C\u67E5\u8BE2\u4F18\u5316\u5668\u662F\u8981\u628A\u5B50\u67E5\u8BE2\u5148\u8F6C\u6362\u6210\u7269\u5316\u8868\u3002\u7136\u540E\u770B\u6267\u884C\u8BA1\u5212\u7684\u524D\u4E24\u6761\u8BB0\u5F55\u7684<code>id</code>\u503C\u90FD\u4E3A<code>1</code>\uFF0C\u8BF4\u660E\u8FD9\u4E24\u6761\u8BB0\u5F55\u5BF9\u5E94\u7684\u8868\u8FDB\u884C\u8FDE\u63A5\u67E5\u8BE2\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u7B2C\u4E8C\u6761\u8BB0\u5F55\u7684<code>table</code>\u5217\u7684\u503C\u662F<code>&lt;subquery2&gt;</code>\uFF0C\u8BF4\u660E\u8BE5\u8868\u5176\u5B9E\u5C31\u662F<code>id</code>\u4E3A<code>2</code>\u5BF9\u5E94\u7684\u5B50\u67E5\u8BE2\u6267\u884C\u4E4B\u540E\u4EA7\u751F\u7684\u7269\u5316\u8868\uFF0C\u7136\u540E\u5C06<code>s1</code>\u548C\u8BE5\u7269\u5316\u8868\u8FDB\u884C\u8FDE\u63A5\u67E5\u8BE2\u3002</p>
</li>
<li>
<p><code>UNCACHEABLE SUBQUERY</code></p>
<p>\u4E0D\u5E38\u7528\uFF0C\u5C31\u4E0D\u591A\u5520\u53E8\u4E86\u3002</p>
</li>
<li>
<p><code>UNCACHEABLE UNION</code></p>
<p>\u4E0D\u5E38\u7528\uFF0C\u5C31\u4E0D\u591A\u5520\u53E8\u4E86\u3002</p>
</li>
</ul>
<h3 data-id="heading-5">partitions</h3>
<p>\u7531\u4E8E\u6211\u4EEC\u538B\u6839\u513F\u5C31\u6CA1\u5520\u53E8\u8FC7\u5206\u533A\u662F\u4E2A\u5565\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u8F93\u51FA\u5217\u6211\u4EEC\u4E5F\u5C31\u4E0D\u8BF4\u4E86\u54C8\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u6211\u4EEC\u7684\u67E5\u8BE2\u8BED\u53E5\u7684\u6267\u884C\u8BA1\u5212\u7684<code>partitions</code>\u5217\u7684\u503C\u90FD\u662F<code>NULL</code>\u3002</p>
<h3 data-id="heading-6">type</h3>
<p>\u6211\u4EEC\u524D\u8FB9\u8BF4\u8FC7\u6267\u884C\u8BA1\u5212\u7684\u4E00\u6761\u8BB0\u5F55\u5C31\u4EE3\u8868\u7740<code>MySQL</code>\u5BF9\u67D0\u4E2A\u8868\u7684\u6267\u884C\u67E5\u8BE2\u65F6\u7684\u8BBF\u95EE\u65B9\u6CD5\uFF0C\u5176\u4E2D\u7684<code>type</code>\u5217\u5C31\u8868\u660E\u4E86\u8FD9\u4E2A\u8BBF\u95EE\u65B9\u6CD5\u662F\u4E2A\u5565\uFF0C\u6BD4\u65B9\u8BF4\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 = <span>'a'</span>;
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key      | key_len | ref   | rows | filtered | Extra |
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------+
|  1 | SIMPLE      | s1    | NULL       | ref  | idx_key1      | idx_key1 | 303     | const |    8 |   100.00 | NULL  |
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------+
1 row <span>in</span> <span>set</span>, 1 warning (0.04 sec)
</code></pre><p>\u53EF\u4EE5\u770B\u5230<code>type</code>\u5217\u7684\u503C\u662F<code>ref</code>\uFF0C\u8868\u660E<code>MySQL</code>\u5373\u5C06\u4F7F\u7528<code>ref</code>\u8BBF\u95EE\u65B9\u6CD5\u6765\u6267\u884C\u5BF9<code>s1</code>\u8868\u7684\u67E5\u8BE2\u3002\u4F46\u662F\u6211\u4EEC\u4E4B\u524D\u53EA\u5520\u53E8\u8FC7\u5BF9\u4F7F\u7528<code>InnoDB</code>\u5B58\u50A8\u5F15\u64CE\u7684\u8868\u8FDB\u884C\u5355\u8868\u8BBF\u95EE\u7684\u4E00\u4E9B\u8BBF\u95EE\u65B9\u6CD5\uFF0C\u5B8C\u6574\u7684\u8BBF\u95EE\u65B9\u6CD5\u5982\u4E0B\uFF1A<code>system</code>\uFF0C<code>const</code>\uFF0C<code>eq_ref</code>\uFF0C<code>ref</code>\uFF0C<code>fulltext</code>\uFF0C<code>ref_or_null</code>\uFF0C<code>index_merge</code>\uFF0C<code>unique_subquery</code>\uFF0C<code>index_subquery</code>\uFF0C<code>range</code>\uFF0C<code>index</code>\uFF0C<code>ALL</code>\u3002\u5F53\u7136\u6211\u4EEC\u8FD8\u8981\u8BE6\u7EC6\u5520\u53E8\u4E00\u4E0B\u54C8\uFF1A</p>
<ul>
<li>
<p><code>system</code></p>
<p>\u5F53\u8868\u4E2D\u53EA\u6709\u4E00\u6761\u8BB0\u5F55\u5E76\u4E14<span>\u8BE5\u8868\u4F7F\u7528\u7684\u5B58\u50A8\u5F15\u64CE\u7684\u7EDF\u8BA1\u6570\u636E\u662F\u7CBE\u786E\u7684\uFF0C\u6BD4\u5982MyISAM\u3001Memory</span>\uFF0C\u90A3\u4E48\u5BF9\u8BE5\u8868\u7684\u8BBF\u95EE\u65B9\u6CD5\u5C31\u662F<code>system</code>\u3002\u6BD4\u65B9\u8BF4\u6211\u4EEC\u65B0\u5EFA\u4E00\u4E2A<code>MyISAM</code>\u8868\uFF0C\u5E76\u4E3A\u5176\u63D2\u5165\u4E00\u6761\u8BB0\u5F55\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; CREATE TABLE t(i int) Engine=MyISAM;
Query OK, 0 rows affected (0.05 sec)

mysql&gt; INSERT INTO t VALUES(1);
Query OK, 1 row affected (0.01 sec)
</code></pre><p>\u7136\u540E\u6211\u4EEC\u770B\u4E00\u4E0B\u67E5\u8BE2\u8FD9\u4E2A\u8868\u7684\u6267\u884C\u8BA1\u5212\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM t;
+----+-------------+-------+------------+--------+---------------+------+---------+------+------+----------+-------+
| id | select_type | table | partitions | <span>type</span>   | possible_keys | key  | key_len | ref  | rows | filtered | Extra |
+----+-------------+-------+------------+--------+---------------+------+---------+------+------+----------+-------+
|  1 | SIMPLE      | t     | NULL       | system | NULL          | NULL | NULL    | NULL |    1 |   100.00 | NULL  |
+----+-------------+-------+------------+--------+---------------+------+---------+------+------+----------+-------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u53EF\u4EE5\u770B\u5230<code>type</code>\u5217\u7684\u503C\u5C31\u662F<code>system</code>\u4E86\u3002</p>
<blockquote><p>\u5C0F\u8D34\u58EB\uFF1A

\u4F60\u53EF\u4EE5\u628A\u8868\u6539\u6210\u4F7F\u7528InnoDB\u5B58\u50A8\u5F15\u64CE\uFF0C\u8BD5\u8BD5\u770B\u6267\u884C\u8BA1\u5212\u7684type\u5217\u662F\u4EC0\u4E48\u3002
</p></blockquote></li>
<li>
<p><code>const</code></p>
<p>\u8FD9\u4E2A\u6211\u4EEC\u524D\u8FB9\u5520\u53E8\u8FC7\uFF0C\u5C31\u662F\u5F53\u6211\u4EEC\u6839\u636E\u4E3B\u952E\u6216\u8005\u552F\u4E00\u4E8C\u7EA7\u7D22\u5F15\u5217\u4E0E\u5E38\u6570\u8FDB\u884C\u7B49\u503C\u5339\u914D\u65F6\uFF0C\u5BF9\u5355\u8868\u7684\u8BBF\u95EE\u65B9\u6CD5\u5C31\u662F<code>const</code>\uFF0C\u6BD4\u5982\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE id = 5;
+----+-------------+-------+------------+-------+---------------+---------+---------+-------+------+----------+-------+
| id | select_type | table | partitions | <span>type</span>  | possible_keys | key     | key_len | ref   | rows | filtered | Extra |
+----+-------------+-------+------------+-------+---------------+---------+---------+-------+------+----------+-------+
|  1 | SIMPLE      | s1    | NULL       | const | PRIMARY       | PRIMARY | 4       | const |    1 |   100.00 | NULL  |
+----+-------------+-------+------------+-------+---------------+---------+---------+-------+------+----------+-------+
1 row <span>in</span> <span>set</span>, 1 warning (0.01 sec)
</code></pre></li>
<li>
<p><code>eq_ref</code></p>
<p>\u5728\u8FDE\u63A5\u67E5\u8BE2\u65F6\uFF0C\u5982\u679C\u88AB\u9A71\u52A8\u8868\u662F\u901A\u8FC7\u4E3B\u952E\u6216\u8005\u552F\u4E00\u4E8C\u7EA7\u7D22\u5F15\u5217\u7B49\u503C\u5339\u914D\u7684\u65B9\u5F0F\u8FDB\u884C\u8BBF\u95EE\u7684\uFF08\u5982\u679C\u8BE5\u4E3B\u952E\u6216\u8005\u552F\u4E00\u4E8C\u7EA7\u7D22\u5F15\u662F\u8054\u5408\u7D22\u5F15\u7684\u8BDD\uFF0C\u6240\u6709\u7684\u7D22\u5F15\u5217\u90FD\u5FC5\u987B\u8FDB\u884C\u7B49\u503C\u6BD4\u8F83\uFF09\uFF0C\u5219\u5BF9\u8BE5\u88AB\u9A71\u52A8\u8868\u7684\u8BBF\u95EE\u65B9\u6CD5\u5C31\u662F<code>eq_ref</code>\uFF0C\u6BD4\u65B9\u8BF4\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 INNER JOIN s2 ON s1.id = s2.id;
+----+-------------+-------+------------+--------+---------------+---------+---------+-----------------+------+----------+-------+
| id | select_type | table | partitions | <span>type</span>   | possible_keys | key     | key_len | ref             | rows | filtered | Extra |
+----+-------------+-------+------------+--------+---------------+---------+---------+-----------------+------+----------+-------+
|  1 | SIMPLE      | s1    | NULL       | ALL    | PRIMARY       | NULL    | NULL    | NULL            | 9688 |   100.00 | NULL  |
|  1 | SIMPLE      | s2    | NULL       | eq_ref | PRIMARY       | PRIMARY | 4       | xiaohaizi.s1.id |    1 |   100.00 | NULL  |
+----+-------------+-------+------------+--------+---------------+---------+---------+-----------------+------+----------+-------+
2 rows <span>in</span> <span>set</span>, 1 warning (0.01 sec)
</code></pre><p>\u4ECE\u6267\u884C\u8BA1\u5212\u7684\u7ED3\u679C\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C<code>MySQL</code>\u6253\u7B97\u5C06<code>s1</code>\u4F5C\u4E3A\u9A71\u52A8\u8868\uFF0C<code>s2</code>\u4F5C\u4E3A\u88AB\u9A71\u52A8\u8868\uFF0C\u91CD\u70B9\u5173\u6CE8<code>s2</code>\u7684\u8BBF\u95EE\u65B9\u6CD5\u662F<code>eq_ref</code>\uFF0C\u8868\u660E\u5728\u8BBF\u95EE<code>s2</code>\u8868\u7684\u65F6\u5019\u53EF\u4EE5\u901A\u8FC7\u4E3B\u952E\u7684\u7B49\u503C\u5339\u914D\u6765\u8FDB\u884C\u8BBF\u95EE\u3002</p>
</li>
<li>
<p><code>ref</code></p>
<p>\u5F53\u901A\u8FC7\u666E\u901A\u7684\u4E8C\u7EA7\u7D22\u5F15\u5217\u4E0E\u5E38\u91CF\u8FDB\u884C\u7B49\u503C\u5339\u914D\u65F6\u6765\u67E5\u8BE2\u67D0\u4E2A\u8868\uFF0C\u90A3\u4E48\u5BF9\u8BE5\u8868\u7684\u8BBF\u95EE\u65B9\u6CD5\u5C31<span>\u53EF\u80FD</span>\u662F<code>ref</code>\uFF0C\u6700\u5F00\u59CB\u4E3E\u8FC7\u4F8B\u5B50\u4E86\uFF0C\u5C31\u4E0D\u91CD\u590D\u4E3E\u4F8B\u4E86\u3002</p>
</li>
<li>
<p><code>fulltext</code></p>
<p>\u5168\u6587\u7D22\u5F15\uFF0C\u6211\u4EEC\u6CA1\u6709\u7EC6\u8BB2\u8FC7\uFF0C\u8DF3\u8FC7\uFF5E</p>
</li>
<li>
<p><code>ref_or_null</code></p>
<p>\u5F53\u5BF9\u666E\u901A\u4E8C\u7EA7\u7D22\u5F15\u8FDB\u884C\u7B49\u503C\u5339\u914D\u67E5\u8BE2\uFF0C\u8BE5\u7D22\u5F15\u5217\u7684\u503C\u4E5F\u53EF\u4EE5\u662F<code>NULL</code>\u503C\u65F6\uFF0C\u90A3\u4E48\u5BF9\u8BE5\u8868\u7684\u8BBF\u95EE\u65B9\u6CD5\u5C31<span>\u53EF\u80FD</span>\u662F<code>ref_or_null</code>\uFF0C\u6BD4\u5982\u8BF4\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 = <span>'a'</span> OR key1 IS NULL;
+----+-------------+-------+------------+-------------+---------------+----------+---------+-------+------+----------+-----------------------+
| id | select_type | table | partitions | <span>type</span>        | possible_keys | key      | key_len | ref   | rows | filtered | Extra                 |
+----+-------------+-------+------------+-------------+---------------+----------+---------+-------+------+----------+-----------------------+
|  1 | SIMPLE      | s1    | NULL       | ref_or_null | idx_key1      | idx_key1 | 303     | const |    9 |   100.00 | Using index condition |
+----+-------------+-------+------------+-------------+---------------+----------+---------+-------+------+----------+-----------------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.01 sec)
</code></pre></li>
<li>
<p><code>index_merge</code></p>
<p>\u4E00\u822C\u60C5\u51B5\u4E0B\u5BF9\u4E8E\u67D0\u4E2A\u8868\u7684\u67E5\u8BE2\u53EA\u80FD\u4F7F\u7528\u5230\u4E00\u4E2A\u7D22\u5F15\uFF0C\u4F46\u6211\u4EEC\u5520\u53E8\u5355\u8868\u8BBF\u95EE\u65B9\u6CD5\u65F6\u7279\u610F\u5F3A\u8C03\u4E86\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\u53EF\u4EE5\u4F7F\u7528<code>Intersection</code>\u3001<code>Union</code>\u3001<code>Sort-Union</code>\u8FD9\u4E09\u79CD\u7D22\u5F15\u5408\u5E76\u7684\u65B9\u5F0F\u6765\u6267\u884C\u67E5\u8BE2\uFF0C\u5FD8\u6389\u7684\u56DE\u53BB\u8865\u4E00\u4E0B\u54C8\uFF0C\u6211\u4EEC\u770B\u4E00\u4E0B\u6267\u884C\u8BA1\u5212\u4E2D\u662F\u600E\u4E48\u4F53\u73B0<code>MySQL</code>\u4F7F\u7528\u7D22\u5F15\u5408\u5E76\u7684\u65B9\u5F0F\u6765\u5BF9\u67D0\u4E2A\u8868\u6267\u884C\u67E5\u8BE2\u7684\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 = <span>'a'</span> OR key3 = <span>'a'</span>;
+----+-------------+-------+------------+-------------+-------------------+-------------------+---------+------+------+----------+---------------------------------------------+
| id | select_type | table | partitions | <span>type</span>        | possible_keys     | key               | key_len | ref  | rows | filtered | Extra                                       |
+----+-------------+-------+------------+-------------+-------------------+-------------------+---------+------+------+----------+---------------------------------------------+
|  1 | SIMPLE      | s1    | NULL       | index_merge | idx_key1,idx_key3 | idx_key1,idx_key3 | 303,303 | NULL |   14 |   100.00 | Using union(idx_key1,idx_key3); Using <span>where</span> |
+----+-------------+-------+------------+-------------+-------------------+-------------------+---------+------+------+----------+---------------------------------------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.01 sec)
</code></pre><p>\u4ECE\u6267\u884C\u8BA1\u5212\u7684<code>type</code>\u5217\u7684\u503C\u662F<code>index_merge</code>\u5C31\u53EF\u4EE5\u770B\u51FA\uFF0C<code>MySQL</code>\u6253\u7B97\u4F7F\u7528\u7D22\u5F15\u5408\u5E76\u7684\u65B9\u5F0F\u6765\u6267\u884C\u5BF9<code>s1</code>\u8868\u7684\u67E5\u8BE2\u3002</p>
</li>
<li>
<p><code>unique_subquery</code></p>
<p>\u7C7B\u4F3C\u4E8E\u4E24\u8868\u8FDE\u63A5\u4E2D\u88AB\u9A71\u52A8\u8868\u7684<code>eq_ref</code>\u8BBF\u95EE\u65B9\u6CD5\uFF0C<code>unique_subquery</code>\u662F\u9488\u5BF9\u5728\u4E00\u4E9B\u5305\u542B<code>IN</code>\u5B50\u67E5\u8BE2\u7684\u67E5\u8BE2\u8BED\u53E5\u4E2D\uFF0C\u5982\u679C\u67E5\u8BE2\u4F18\u5316\u5668\u51B3\u5B9A\u5C06<code>IN</code>\u5B50\u67E5\u8BE2\u8F6C\u6362\u4E3A<code>EXISTS</code>\u5B50\u67E5\u8BE2\uFF0C\u800C\u4E14\u5B50\u67E5\u8BE2\u53EF\u4EE5\u4F7F\u7528\u5230\u4E3B\u952E\u8FDB\u884C\u7B49\u503C\u5339\u914D\u7684\u8BDD\uFF0C\u90A3\u4E48\u8BE5\u5B50\u67E5\u8BE2\u6267\u884C\u8BA1\u5212\u7684<code>type</code>\u5217\u7684\u503C\u5C31\u662F<code>unique_subquery</code>\uFF0C\u6BD4\u5982\u4E0B\u8FB9\u7684\u8FD9\u4E2A\u67E5\u8BE2\u8BED\u53E5\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key2 IN (SELECT id FROM s2 <span>where</span> s1.key1 = s2.key1) OR key3 = <span>'a'</span>;
+----+--------------------+-------+------------+-----------------+------------------+---------+---------+------+------+----------+-------------+
| id | select_type        | table | partitions | <span>type</span>            | possible_keys    | key     | key_len | ref  | rows | filtered | Extra       |
+----+--------------------+-------+------------+-----------------+------------------+---------+---------+------+------+----------+-------------+
|  1 | PRIMARY            | s1    | NULL       | ALL             | idx_key3         | NULL    | NULL    | NULL | 9688 |   100.00 | Using <span>where</span> |
|  2 | DEPENDENT SUBQUERY | s2    | NULL       | unique_subquery | PRIMARY,idx_key1 | PRIMARY | 4       | func |    1 |    10.00 | Using <span>where</span> |
+----+--------------------+-------+------------+-----------------+------------------+---------+---------+------+------+----------+-------------+
2 rows <span>in</span> <span>set</span>, 2 warnings (0.00 sec)
</code></pre><p>\u53EF\u4EE5\u770B\u5230\u6267\u884C\u8BA1\u5212\u7684\u7B2C\u4E8C\u6761\u8BB0\u5F55\u7684<code>type</code>\u503C\u5C31\u662F<code>unique_subquery</code>\uFF0C\u8BF4\u660E\u5728\u6267\u884C\u5B50\u67E5\u8BE2\u65F6\u4F1A\u4F7F\u7528\u5230<code>id</code>\u5217\u7684\u7D22\u5F15\u3002</p>
</li>
<li>
<p><code>index_subquery</code></p>
<p><code>index_subquery</code>\u4E0E<code>unique_subquery</code>\u7C7B\u4F3C\uFF0C\u53EA\u4E0D\u8FC7\u8BBF\u95EE\u5B50\u67E5\u8BE2\u4E2D\u7684\u8868\u65F6\u4F7F\u7528\u7684\u662F\u666E\u901A\u7684\u7D22\u5F15\uFF0C\u6BD4\u5982\u8FD9\u6837\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE common_field IN (SELECT key3 FROM s2 <span>where</span> s1.key1 = s2.key1) OR key3 = <span>'a'</span>;
+----+--------------------+-------+------------+----------------+-------------------+----------+---------+------+------+----------+-------------+
| id | select_type        | table | partitions | <span>type</span>           | possible_keys     | key      | key_len | ref  | rows | filtered | Extra       |
+----+--------------------+-------+------------+----------------+-------------------+----------+---------+------+------+----------+-------------+
|  1 | PRIMARY            | s1    | NULL       | ALL            | idx_key3          | NULL     | NULL    | NULL | 9688 |   100.00 | Using <span>where</span> |
|  2 | DEPENDENT SUBQUERY | s2    | NULL       | index_subquery | idx_key1,idx_key3 | idx_key3 | 303     | func |    1 |    10.00 | Using <span>where</span> |
+----+--------------------+-------+------------+----------------+-------------------+----------+---------+------+------+----------+-------------+
2 rows <span>in</span> <span>set</span>, 2 warnings (0.01 sec)
</code></pre></li>
<li>
<p><code>range</code></p>
<p>\u5982\u679C\u4F7F\u7528\u7D22\u5F15\u83B7\u53D6\u67D0\u4E9B<code>\u8303\u56F4\u533A\u95F4</code>\u7684\u8BB0\u5F55\uFF0C\u90A3\u4E48\u5C31<span>\u53EF\u80FD</span>\u4F7F\u7528\u5230<code>range</code>\u8BBF\u95EE\u65B9\u6CD5\uFF0C\u6BD4\u5982\u4E0B\u8FB9\u7684\u8FD9\u4E2A\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 IN (<span>'a'</span>, <span>'b'</span>, <span>'c'</span>);
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-----------------------+
| id | select_type | table | partitions | <span>type</span>  | possible_keys | key      | key_len | ref  | rows | filtered | Extra                 |
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-----------------------+
|  1 | SIMPLE      | s1    | NULL       | range | idx_key1      | idx_key1 | 303     | NULL |   27 |   100.00 | Using index condition |
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-----------------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.01 sec)
</code></pre><p>\u6216\u8005\uFF1A</p>
<pre><code lang="bash" class="">
mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 &gt; <span>'a'</span> AND key1 &lt; <span>'b'</span>;
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-----------------------+
| id | select_type | table | partitions | <span>type</span>  | possible_keys | key      | key_len | ref  | rows | filtered | Extra                 |
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-----------------------+
|  1 | SIMPLE      | s1    | NULL       | range | idx_key1      | idx_key1 | 303     | NULL |  294 |   100.00 | Using index condition |
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-----------------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre></li>
<li>
<p><code>index</code></p>
<p>\u5F53\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u7D22\u5F15\u8986\u76D6\uFF0C\u4F46\u9700\u8981\u626B\u63CF\u5168\u90E8\u7684\u7D22\u5F15\u8BB0\u5F55\u65F6\uFF0C\u8BE5\u8868\u7684\u8BBF\u95EE\u65B9\u6CD5\u5C31\u662F<code>index</code>\uFF0C\u6BD4\u5982\u8FD9\u6837\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT key_part2 FROM s1 WHERE key_part3 = <span>'a'</span>;
+----+-------------+-------+------------+-------+---------------+--------------+---------+------+------+----------+--------------------------+
| id | select_type | table | partitions | <span>type</span>  | possible_keys | key          | key_len | ref  | rows | filtered | Extra                    |
+----+-------------+-------+------------+-------+---------------+--------------+---------+------+------+----------+--------------------------+
|  1 | SIMPLE      | s1    | NULL       | index | NULL          | idx_key_part | 909     | NULL | 9688 |    10.00 | Using <span>where</span>; Using index |
+----+-------------+-------+------------+-------+---------------+--------------+---------+------+------+----------+--------------------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u4E0A\u8FF0\u67E5\u8BE2\u4E2D\u7684\u641C\u7D22\u5217\u8868\u4E2D\u53EA\u6709<code>key_part2</code>\u4E00\u4E2A\u5217\uFF0C\u800C\u4E14\u641C\u7D22\u6761\u4EF6\u4E2D\u4E5F\u53EA\u6709<code>key_part3</code>\u4E00\u4E2A\u5217\uFF0C\u8FD9\u4E24\u4E2A\u5217\u53C8\u6070\u597D\u5305\u542B\u5728<code>idx_key_part</code>\u8FD9\u4E2A\u7D22\u5F15\u4E2D\uFF0C\u53EF\u662F\u641C\u7D22\u6761\u4EF6<code>key_part3</code>\u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528\u8BE5\u7D22\u5F15\u8FDB\u884C<code>ref</code>\u6216\u8005<code>range</code>\u65B9\u5F0F\u7684\u8BBF\u95EE\uFF0C\u53EA\u80FD\u626B\u63CF\u6574\u4E2A<code>idx_key_part</code>\u7D22\u5F15\u7684\u8BB0\u5F55\uFF0C\u6240\u4EE5\u67E5\u8BE2\u8BA1\u5212\u7684<code>type</code>\u5217\u7684\u503C\u5C31\u662F<code>index</code>\u3002</p>
<blockquote><p>\u5C0F\u8D34\u58EB\uFF1A

\u518D\u4E00\u6B21\u5F3A\u8C03\uFF0C\u5BF9\u4E8E\u4F7F\u7528InnoDB\u5B58\u50A8\u5F15\u64CE\u7684\u8868\u6765\u8BF4\uFF0C\u4E8C\u7EA7\u7D22\u5F15\u7684\u8BB0\u5F55\u53EA\u5305\u542B\u7D22\u5F15\u5217\u548C\u4E3B\u952E\u5217\u7684\u503C\uFF0C\u800C\u805A\u7C07\u7D22\u5F15\u4E2D\u5305\u542B\u7528\u6237\u5B9A\u4E49\u7684\u5168\u90E8\u5217\u4EE5\u53CA\u4E00\u4E9B\u9690\u85CF\u5217\uFF0C\u6240\u4EE5\u626B\u63CF\u4E8C\u7EA7\u7D22\u5F15\u7684\u4EE3\u4EF7\u6BD4\u76F4\u63A5\u5168\u8868\u626B\u63CF\uFF0C\u4E5F\u5C31\u662F\u626B\u63CF\u805A\u7C07\u7D22\u5F15\u7684\u4EE3\u4EF7\u66F4\u4F4E\u4E00\u4E9B\u3002
</p></blockquote></li>
<li>
<p><code>ALL</code></p>
<p>\u6700\u719F\u6089\u7684\u5168\u8868\u626B\u63CF\uFF0C\u5C31\u4E0D\u591A\u5520\u53E8\u4E86\uFF0C\u76F4\u63A5\u770B\u4F8B\u5B50\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1;
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key  | key_len | ref  | rows | filtered | Extra |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------+
|  1 | SIMPLE      | s1    | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 9688 |   100.00 | NULL  |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre></li>
</ul>
<p>\u4E00\u822C\u6765\u8BF4\uFF0C\u8FD9\u4E9B\u8BBF\u95EE\u65B9\u6CD5\u6309\u7167\u6211\u4EEC\u4ECB\u7ECD\u5B83\u4EEC\u7684\u987A\u5E8F\u6027\u80FD\u4F9D\u6B21\u53D8\u5DEE\u3002\u5176\u4E2D\u9664\u4E86<code>All</code>\u8FD9\u4E2A\u8BBF\u95EE\u65B9\u6CD5\u5916\uFF0C\u5176\u4F59\u7684\u8BBF\u95EE\u65B9\u6CD5\u90FD\u80FD\u7528\u5230\u7D22\u5F15\uFF0C\u9664\u4E86<code>index_merge</code>\u8BBF\u95EE\u65B9\u6CD5\u5916\uFF0C\u5176\u4F59\u7684\u8BBF\u95EE\u65B9\u6CD5\u90FD\u6700\u591A\u53EA\u80FD\u7528\u5230\u4E00\u4E2A\u7D22\u5F15\u3002</p>
<h3 data-id="heading-7">possible_keys\u548Ckey</h3>
<p>\u5728<code>EXPLAIN</code>\u8BED\u53E5\u8F93\u51FA\u7684\u6267\u884C\u8BA1\u5212\u4E2D\uFF0C<code>possible_keys</code>\u5217\u8868\u793A\u5728\u67D0\u4E2A\u67E5\u8BE2\u8BED\u53E5\u4E2D\uFF0C\u5BF9\u67D0\u4E2A\u8868\u6267\u884C\u5355\u8868\u67E5\u8BE2\u65F6\u53EF\u80FD\u7528\u5230\u7684\u7D22\u5F15\u6709\u54EA\u4E9B\uFF0C<code>key</code>\u5217\u8868\u793A\u5B9E\u9645\u7528\u5230\u7684\u7D22\u5F15\u6709\u54EA\u4E9B\uFF0C\u6BD4\u65B9\u8BF4\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 &gt; <span>'z'</span> AND key3 = <span>'a'</span>;
+----+-------------+-------+------------+------+-------------------+----------+---------+-------+------+----------+-------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys     | key      | key_len | ref   | rows | filtered | Extra       |
+----+-------------+-------+------------+------+-------------------+----------+---------+-------+------+----------+-------------+
|  1 | SIMPLE      | s1    | NULL       | ref  | idx_key1,idx_key3 | idx_key3 | 303     | const |    6 |     2.75 | Using <span>where</span> |
+----+-------------+-------+------------+------+-------------------+----------+---------+-------+------+----------+-------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.01 sec)
</code></pre><p>\u4E0A\u8FF0\u6267\u884C\u8BA1\u5212\u7684<code>possible_keys</code>\u5217\u7684\u503C\u662F<code>idx_key1,idx_key3</code>\uFF0C\u8868\u793A\u8BE5\u67E5\u8BE2\u53EF\u80FD\u4F7F\u7528\u5230<code>idx_key1,idx_key3</code>\u4E24\u4E2A\u7D22\u5F15\uFF0C\u7136\u540E<code>key</code>\u5217\u7684\u503C\u662F<code>idx_key3</code>\uFF0C\u8868\u793A\u7ECF\u8FC7\u67E5\u8BE2\u4F18\u5316\u5668\u8BA1\u7B97\u4F7F\u7528\u4E0D\u540C\u7D22\u5F15\u7684\u6210\u672C\u540E\uFF0C\u6700\u540E\u51B3\u5B9A\u4F7F\u7528<code>idx_key3</code>\u6765\u6267\u884C\u67E5\u8BE2\u6BD4\u8F83\u5212\u7B97\u3002</p>
<p>\u4E0D\u8FC7\u6709\u4E00\u70B9\u6BD4\u8F83\u7279\u522B\uFF0C\u5C31\u662F\u5728\u4F7F\u7528<code>index</code>\u8BBF\u95EE\u65B9\u6CD5\u6765\u67E5\u8BE2\u67D0\u4E2A\u8868\u65F6\uFF0C<code>possible_keys</code>\u5217\u662F\u7A7A\u7684\uFF0C\u800C<code>key</code>\u5217\u5C55\u793A\u7684\u662F\u5B9E\u9645\u4F7F\u7528\u5230\u7684\u7D22\u5F15\uFF0C\u6BD4\u5982\u8FD9\u6837\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT key_part2 FROM s1 WHERE key_part3 = <span>'a'</span>;
+----+-------------+-------+------------+-------+---------------+--------------+---------+------+------+----------+--------------------------+
| id | select_type | table | partitions | <span>type</span>  | possible_keys | key          | key_len | ref  | rows | filtered | Extra                    |
+----+-------------+-------+------------+-------+---------------+--------------+---------+------+------+----------+--------------------------+
|  1 | SIMPLE      | s1    | NULL       | index | NULL          | idx_key_part | 909     | NULL | 9688 |    10.00 | Using <span>where</span>; Using index |
+----+-------------+-------+------------+-------+---------------+--------------+---------+------+------+----------+--------------------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u53E6\u5916\u9700\u8981\u6CE8\u610F\u7684\u4E00\u70B9\u662F\uFF0C<span>possible_keys\u5217\u4E2D\u7684\u503C\u5E76\u4E0D\u662F\u8D8A\u591A\u8D8A\u597D\uFF0C\u53EF\u80FD\u4F7F\u7528\u7684\u7D22\u5F15\u8D8A\u591A\uFF0C\u67E5\u8BE2\u4F18\u5316\u5668\u8BA1\u7B97\u67E5\u8BE2\u6210\u672C\u65F6\u5C31\u5F97\u82B1\u8D39\u66F4\u957F\u65F6\u95F4\uFF0C\u6240\u4EE5\u5982\u679C\u53EF\u4EE5\u7684\u8BDD\uFF0C\u5C3D\u91CF\u5220\u9664\u90A3\u4E9B\u7528\u4E0D\u5230\u7684\u7D22\u5F15</span>\u3002</p>
<h3 data-id="heading-8">key_len</h3>
<p><code>key_len</code>\u5217\u8868\u793A\u5F53\u4F18\u5316\u5668\u51B3\u5B9A\u4F7F\u7528\u67D0\u4E2A\u7D22\u5F15\u6267\u884C\u67E5\u8BE2\u65F6\uFF0C\u8BE5\u7D22\u5F15\u8BB0\u5F55\u7684\u6700\u5927\u957F\u5EA6\uFF0C\u5B83\u662F\u7531\u8FD9\u4E09\u4E2A\u90E8\u5206\u6784\u6210\u7684\uFF1A</p>
<ul>
<li>
<p>\u5BF9\u4E8E\u4F7F\u7528\u56FA\u5B9A\u957F\u5EA6\u7C7B\u578B\u7684\u7D22\u5F15\u5217\u6765\u8BF4\uFF0C\u5B83\u5B9E\u9645\u5360\u7528\u7684\u5B58\u50A8\u7A7A\u95F4\u7684\u6700\u5927\u957F\u5EA6\u5C31\u662F\u8BE5\u56FA\u5B9A\u503C\uFF0C\u5BF9\u4E8E\u6307\u5B9A\u5B57\u7B26\u96C6\u7684\u53D8\u957F\u7C7B\u578B\u7684\u7D22\u5F15\u5217\u6765\u8BF4\uFF0C\u6BD4\u5982\u67D0\u4E2A\u7D22\u5F15\u5217\u7684\u7C7B\u578B\u662F<code>VARCHAR(100)</code>\uFF0C\u4F7F\u7528\u7684\u5B57\u7B26\u96C6\u662F<code>utf8</code>\uFF0C\u90A3\u4E48\u8BE5\u5217\u5B9E\u9645\u5360\u7528\u7684\u6700\u5927\u5B58\u50A8\u7A7A\u95F4\u5C31\u662F<code>100 \xD7 3 = 300</code>\u4E2A\u5B57\u8282\u3002</p>
</li>
<li>
<p>\u5982\u679C\u8BE5\u7D22\u5F15\u5217\u53EF\u4EE5\u5B58\u50A8<code>NULL</code>\u503C\uFF0C\u5219<code>key_len</code>\u6BD4\u4E0D\u53EF\u4EE5\u5B58\u50A8<code>NULL</code>\u503C\u65F6\u591A1\u4E2A\u5B57\u8282\u3002</p>
</li>
<li>
<p>\u5BF9\u4E8E\u53D8\u957F\u5B57\u6BB5\u6765\u8BF4\uFF0C\u90FD\u4F1A\u67092\u4E2A\u5B57\u8282\u7684\u7A7A\u95F4\u6765\u5B58\u50A8\u8BE5\u53D8\u957F\u5217\u7684\u5B9E\u9645\u957F\u5EA6\u3002</p>
</li>
</ul>
<p>\u6BD4\u5982\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE id = 5;
+----+-------------+-------+------------+-------+---------------+---------+---------+-------+------+----------+-------+
| id | select_type | table | partitions | <span>type</span>  | possible_keys | key     | key_len | ref   | rows | filtered | Extra |
+----+-------------+-------+------------+-------+---------------+---------+---------+-------+------+----------+-------+
|  1 | SIMPLE      | s1    | NULL       | const | PRIMARY       | PRIMARY | 4       | const |    1 |   100.00 | NULL  |
+----+-------------+-------+------------+-------+---------------+---------+---------+-------+------+----------+-------+
1 row <span>in</span> <span>set</span>, 1 warning (0.01 sec)
</code></pre><p>\u7531\u4E8E<code>id</code>\u5217\u7684\u7C7B\u578B\u662F<code>INT</code>\uFF0C\u5E76\u4E14\u4E0D\u53EF\u4EE5\u5B58\u50A8<code>NULL</code>\u503C\uFF0C\u6240\u4EE5\u5728\u4F7F\u7528\u8BE5\u5217\u7684\u7D22\u5F15\u65F6<code>key_len</code>\u5927\u5C0F\u5C31\u662F<code>4</code>\u3002\u5F53\u7D22\u5F15\u5217\u53EF\u4EE5\u5B58\u50A8<code>NULL</code>\u503C\u65F6\uFF0C\u6BD4\u5982\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key2 = 5;
+----+-------------+-------+------------+-------+---------------+----------+---------+-------+------+----------+-------+
| id | select_type | table | partitions | <span>type</span>  | possible_keys | key      | key_len | ref   | rows | filtered | Extra |
+----+-------------+-------+------------+-------+---------------+----------+---------+-------+------+----------+-------+
|  1 | SIMPLE      | s1    | NULL       | const | idx_key2      | idx_key2 | 5       | const |    1 |   100.00 | NULL  |
+----+-------------+-------+------------+-------+---------------+----------+---------+-------+------+----------+-------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u53EF\u4EE5\u770B\u5230<code>key_len</code>\u5217\u5C31\u53D8\u6210\u4E86<code>5</code>\uFF0C\u6BD4\u4F7F\u7528<code>id</code>\u5217\u7684\u7D22\u5F15\u65F6\u591A\u4E86<code>1</code>\u3002</p>
<p>\u5BF9\u4E8E\u53EF\u53D8\u957F\u5EA6\u7684\u7D22\u5F15\u5217\u6765\u8BF4\uFF0C\u6BD4\u5982\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 = <span>'a'</span>;
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key      | key_len | ref   | rows | filtered | Extra |
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------+
|  1 | SIMPLE      | s1    | NULL       | ref  | idx_key1      | idx_key1 | 303     | const |    8 |   100.00 | NULL  |
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u7531\u4E8E<code>key1</code>\u5217\u7684\u7C7B\u578B\u662F<code>VARCHAR(100)</code>\uFF0C\u6240\u4EE5\u8BE5\u5217\u5B9E\u9645\u6700\u591A\u5360\u7528\u7684\u5B58\u50A8\u7A7A\u95F4\u5C31\u662F<code>300</code>\u5B57\u8282\uFF0C\u53C8\u56E0\u4E3A\u8BE5\u5217\u5141\u8BB8\u5B58\u50A8<code>NULL</code>\u503C\uFF0C\u6240\u4EE5<code>key_len</code>\u9700\u8981\u52A0<code>1</code>\uFF0C\u53C8\u56E0\u4E3A\u8BE5\u5217\u662F\u53EF\u53D8\u957F\u5EA6\u5217\uFF0C\u6240\u4EE5<code>key_len</code>\u9700\u8981\u52A0<code>2</code>\uFF0C\u6240\u4EE5\u6700\u540E<code>ken_len</code>\u7684\u503C\u5C31\u662F<code>303</code>\u3002</p>
<p>\u6709\u7684\u540C\u5B66\u53EF\u80FD\u6709\u7591\u95EE\uFF1A\u4F60\u5728\u524D\u8FB9\u5520\u53E8<code>InnoDB</code>\u884C\u683C\u5F0F\u7684\u65F6\u5019\u4E0D\u662F\u8BF4\uFF0C\u5B58\u50A8\u53D8\u957F\u5B57\u6BB5\u7684\u5B9E\u9645\u957F\u5EA6\u4E0D\u662F\u53EF\u80FD\u5360\u75281\u4E2A\u5B57\u8282\u6216\u80052\u4E2A\u5B57\u8282\u4E48\uFF1F\u4E3A\u4EC0\u4E48\u73B0\u5728\u4E0D\u7BA1\u4E09\u4E03\u4E8C\u5341\u4E00\u90FD\u7528\u4E86<code>2</code>\u4E2A\u5B57\u8282\uFF1F\u8FD9\u91CC\u9700\u8981\u5F3A\u8C03\u7684\u4E00\u70B9\u662F\uFF0C\u6267\u884C\u8BA1\u5212\u7684\u751F\u6210\u662F\u5728<code>MySQL server</code>\u5C42\u4E2D\u7684\u529F\u80FD\uFF0C\u5E76\u4E0D\u662F\u9488\u5BF9\u5177\u4F53\u67D0\u4E2A\u5B58\u50A8\u5F15\u64CE\u7684\u529F\u80FD\uFF0C\u8BBE\u8BA1<code>MySQL</code>\u7684\u5927\u53D4\u5728\u6267\u884C\u8BA1\u5212\u4E2D\u8F93\u51FA<code>key_len</code>\u5217\u4E3B\u8981\u662F\u4E3A\u4E86\u8BA9\u6211\u4EEC\u533A\u5206\u67D0\u4E2A\u4F7F\u7528\u8054\u5408\u7D22\u5F15\u7684\u67E5\u8BE2\u5177\u4F53\u7528\u4E86\u51E0\u4E2A\u7D22\u5F15\u5217\uFF0C\u800C\u4E0D\u662F\u4E3A\u4E86\u51C6\u786E\u7684\u8BF4\u660E\u9488\u5BF9\u67D0\u4E2A\u5177\u4F53\u5B58\u50A8\u5F15\u64CE\u5B58\u50A8\u53D8\u957F\u5B57\u6BB5\u7684\u5B9E\u9645\u957F\u5EA6\u5360\u7528\u7684\u7A7A\u95F4\u5230\u5E95\u662F\u5360\u75281\u4E2A\u5B57\u8282\u8FD8\u662F2\u4E2A\u5B57\u8282\u3002\u6BD4\u65B9\u8BF4\u4E0B\u8FB9\u8FD9\u4E2A\u4F7F\u7528\u5230\u8054\u5408\u7D22\u5F15<code>idx_key_part</code>\u7684\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key_part1 = <span>'a'</span>;
+----+-------------+-------+------------+------+---------------+--------------+---------+-------+------+----------+-------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key          | key_len | ref   | rows | filtered | Extra |
+----+-------------+-------+------------+------+---------------+--------------+---------+-------+------+----------+-------+
|  1 | SIMPLE      | s1    | NULL       | ref  | idx_key_part  | idx_key_part | 303     | const |   12 |   100.00 | NULL  |
+----+-------------+-------+------------+------+---------------+--------------+---------+-------+------+----------+-------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u6211\u4EEC\u53EF\u4EE5\u4ECE\u6267\u884C\u8BA1\u5212\u7684<code>key_len</code>\u5217\u4E2D\u770B\u5230\u503C\u662F<code>303</code>\uFF0C\u8FD9\u610F\u5473\u7740<code>MySQL</code>\u5728\u6267\u884C\u4E0A\u8FF0\u67E5\u8BE2\u4E2D\u53EA\u80FD\u7528\u5230<code>idx_key_part</code>\u7D22\u5F15\u7684\u4E00\u4E2A\u7D22\u5F15\u5217\uFF0C\u800C\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key_part1 = <span>'a'</span> AND key_part2 = <span>'b'</span>;
+----+-------------+-------+------------+------+---------------+--------------+---------+-------------+------+----------+-------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key          | key_len | ref         | rows | filtered | Extra |
+----+-------------+-------+------------+------+---------------+--------------+---------+-------------+------+----------+-------+
|  1 | SIMPLE      | s1    | NULL       | ref  | idx_key_part  | idx_key_part | 606     | const,const |    1 |   100.00 | NULL  |
+----+-------------+-------+------------+------+---------------+--------------+---------+-------------+------+----------+-------+
1 row <span>in</span> <span>set</span>, 1 warning (0.01 sec)
</code></pre><p>\u8FD9\u4E2A\u67E5\u8BE2\u7684\u6267\u884C\u8BA1\u5212\u7684<code>ken_len</code>\u5217\u7684\u503C\u662F<code>606</code>\uFF0C\u8BF4\u660E\u6267\u884C\u8FD9\u4E2A\u67E5\u8BE2\u7684\u65F6\u5019\u53EF\u4EE5\u7528\u5230\u8054\u5408\u7D22\u5F15<code>idx_key_part</code>\u7684\u4E24\u4E2A\u7D22\u5F15\u5217\u3002</p>
<h3 data-id="heading-9">ref</h3>
<p>\u5F53\u4F7F\u7528\u7D22\u5F15\u5217\u7B49\u503C\u5339\u914D\u7684\u6761\u4EF6\u53BB\u6267\u884C\u67E5\u8BE2\u65F6\uFF0C\u4E5F\u5C31\u662F\u5728\u8BBF\u95EE\u65B9\u6CD5\u662F<code>const</code>\u3001<code>eq_ref</code>\u3001<code>ref</code>\u3001<code>ref_or_null</code>\u3001<code>unique_subquery</code>\u3001<code>index_subquery</code>\u5176\u4E2D\u4E4B\u4E00\u65F6\uFF0C<code>ref</code>\u5217\u5C55\u793A\u7684\u5C31\u662F\u4E0E\u7D22\u5F15\u5217\u4F5C\u7B49\u503C\u5339\u914D\u7684\u4E1C\u4E1C\u662F\u4E2A\u5565\uFF0C\u6BD4\u5982\u53EA\u662F\u4E00\u4E2A\u5E38\u6570\u6216\u8005\u662F\u67D0\u4E2A\u5217\u3002\u5927\u5BB6\u770B\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 = <span>'a'</span>;
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key      | key_len | ref   | rows | filtered | Extra |
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------+
|  1 | SIMPLE      | s1    | NULL       | ref  | idx_key1      | idx_key1 | 303     | const |    8 |   100.00 | NULL  |
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------+
1 row <span>in</span> <span>set</span>, 1 warning (0.01 sec)
</code></pre><p>\u53EF\u4EE5\u770B\u5230<code>ref</code>\u5217\u7684\u503C\u662F<code>const</code>\uFF0C\u8868\u660E\u5728\u4F7F\u7528<code>idx_key1</code>\u7D22\u5F15\u6267\u884C\u67E5\u8BE2\u65F6\uFF0C\u4E0E<code>key1</code>\u5217\u4F5C\u7B49\u503C\u5339\u914D\u7684\u5BF9\u8C61\u662F\u4E00\u4E2A\u5E38\u6570\uFF0C\u5F53\u7136\u6709\u65F6\u5019\u66F4\u590D\u6742\u4E00\u70B9\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 INNER JOIN s2 ON s1.id = s2.id;
+----+-------------+-------+------------+--------+---------------+---------+---------+-----------------+------+----------+-------+
| id | select_type | table | partitions | <span>type</span>   | possible_keys | key     | key_len | ref             | rows | filtered | Extra |
+----+-------------+-------+------------+--------+---------------+---------+---------+-----------------+------+----------+-------+
|  1 | SIMPLE      | s1    | NULL       | ALL    | PRIMARY       | NULL    | NULL    | NULL            | 9688 |   100.00 | NULL  |
|  1 | SIMPLE      | s2    | NULL       | eq_ref | PRIMARY       | PRIMARY | 4       | xiaohaizi.s1.id |    1 |   100.00 | NULL  |
+----+-------------+-------+------------+--------+---------------+---------+---------+-----------------+------+----------+-------+
2 rows <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u53EF\u4EE5\u770B\u5230\u5BF9\u88AB\u9A71\u52A8\u8868<code>s2</code>\u7684\u8BBF\u95EE\u65B9\u6CD5\u662F<code>eq_ref</code>\uFF0C\u800C\u5BF9\u5E94\u7684<code>ref</code>\u5217\u7684\u503C\u662F<code>xiaohaizi.s1.id</code>\uFF0C\u8FD9\u8BF4\u660E\u5728\u5BF9\u88AB\u9A71\u52A8\u8868\u8FDB\u884C\u8BBF\u95EE\u65F6\u4F1A\u7528\u5230<code>PRIMARY</code>\u7D22\u5F15\uFF0C\u4E5F\u5C31\u662F\u805A\u7C07\u7D22\u5F15\u4E0E\u4E00\u4E2A\u5217\u8FDB\u884C\u7B49\u503C\u5339\u914D\u7684\u6761\u4EF6\uFF0C\u4E8E<code>s2</code>\u8868\u7684<code>id</code>\u4F5C\u7B49\u503C\u5339\u914D\u7684\u5BF9\u8C61\u5C31\u662F<code>xiaohaizi.s1.id</code>\u5217\uFF08\u6CE8\u610F\u8FD9\u91CC\u628A\u6570\u636E\u5E93\u540D\u4E5F\u5199\u51FA\u6765\u4E86\uFF09\u3002</p>
<p>\u6709\u7684\u65F6\u5019\u4E0E\u7D22\u5F15\u5217\u8FDB\u884C\u7B49\u503C\u5339\u914D\u7684\u5BF9\u8C61\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u6BD4\u65B9\u8BF4\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 INNER JOIN s2 ON s2.key1 = UPPER(s1.key1);
+----+-------------+-------+------------+------+---------------+----------+---------+------+------+----------+-----------------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key      | key_len | ref  | rows | filtered | Extra                 |
+----+-------------+-------+------------+------+---------------+----------+---------+------+------+----------+-----------------------+
|  1 | SIMPLE      | s1    | NULL       | ALL  | NULL          | NULL     | NULL    | NULL | 9688 |   100.00 | NULL                  |
|  1 | SIMPLE      | s2    | NULL       | ref  | idx_key1      | idx_key1 | 303     | func |    1 |   100.00 | Using index condition |
+----+-------------+-------+------------+------+---------------+----------+---------+------+------+----------+-----------------------+
2 rows <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u6211\u4EEC\u770B\u6267\u884C\u8BA1\u5212\u7684\u7B2C\u4E8C\u6761\u8BB0\u5F55\uFF0C\u53EF\u4EE5\u770B\u5230\u5BF9<code>s2</code>\u8868\u91C7\u7528<code>ref</code>\u8BBF\u95EE\u65B9\u6CD5\u6267\u884C\u67E5\u8BE2\uFF0C\u7136\u540E\u5728\u67E5\u8BE2\u8BA1\u5212\u7684<code>ref</code>\u5217\u91CC\u8F93\u51FA\u7684\u662F<code>func</code>\uFF0C\u8BF4\u660E\u4E0E<code>s2</code>\u8868\u7684<code>key1</code>\u5217\u8FDB\u884C\u7B49\u503C\u5339\u914D\u7684\u5BF9\u8C61\u662F\u4E00\u4E2A\u51FD\u6570\u3002</p>
<h3 data-id="heading-10">rows</h3>
<p>\u5982\u679C\u67E5\u8BE2\u4F18\u5316\u5668\u51B3\u5B9A\u4F7F\u7528\u5168\u8868\u626B\u63CF\u7684\u65B9\u5F0F\u5BF9\u67D0\u4E2A\u8868\u6267\u884C\u67E5\u8BE2\u65F6\uFF0C\u6267\u884C\u8BA1\u5212\u7684<code>rows</code>\u5217\u5C31\u4EE3\u8868\u9884\u8BA1\u9700\u8981\u626B\u63CF\u7684\u884C\u6570\uFF0C\u5982\u679C\u4F7F\u7528\u7D22\u5F15\u6765\u6267\u884C\u67E5\u8BE2\u65F6\uFF0C\u6267\u884C\u8BA1\u5212\u7684<code>rows</code>\u5217\u5C31\u4EE3\u8868\u9884\u8BA1\u626B\u63CF\u7684\u7D22\u5F15\u8BB0\u5F55\u884C\u6570\u3002\u6BD4\u5982\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 &gt; <span>'z'</span>;
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-----------------------+
| id | select_type | table | partitions | <span>type</span>  | possible_keys | key      | key_len | ref  | rows | filtered | Extra                 |
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-----------------------+
|  1 | SIMPLE      | s1    | NULL       | range | idx_key1      | idx_key1 | 303     | NULL |  266 |   100.00 | Using index condition |
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+-----------------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u6211\u4EEC\u770B\u5230\u6267\u884C\u8BA1\u5212\u7684<code>rows</code>\u5217\u7684\u503C\u662F<code>266</code>\uFF0C\u8FD9\u610F\u5473\u7740\u67E5\u8BE2\u4F18\u5316\u5668\u5728\u7ECF\u8FC7\u5206\u6790\u4F7F\u7528<code>idx_key1</code>\u8FDB\u884C\u67E5\u8BE2\u7684\u6210\u672C\u4E4B\u540E\uFF0C\u89C9\u5F97\u6EE1\u8DB3<code>key1 &gt; 'z'</code>\u8FD9\u4E2A\u6761\u4EF6\u7684\u8BB0\u5F55\u53EA\u6709<code>266</code>\u6761\u3002</p>
<h3 data-id="heading-11">filtered</h3>
<p>\u4E4B\u524D\u5728\u5206\u6790\u8FDE\u63A5\u67E5\u8BE2\u7684\u6210\u672C\u65F6\u63D0\u51FA\u8FC7\u4E00\u4E2A<code>condition filtering</code>\u7684\u6982\u5FF5\uFF0C\u5C31\u662F<code>MySQL</code>\u5728\u8BA1\u7B97\u9A71\u52A8\u8868\u6247\u51FA\u65F6\u91C7\u7528\u7684\u4E00\u4E2A\u7B56\u7565\uFF1A</p>
<ul>
<li>
<p>\u5982\u679C\u4F7F\u7528\u7684\u662F\u5168\u8868\u626B\u63CF\u7684\u65B9\u5F0F\u6267\u884C\u7684\u5355\u8868\u67E5\u8BE2\uFF0C\u90A3\u4E48\u8BA1\u7B97\u9A71\u52A8\u8868\u6247\u51FA\u65F6\u9700\u8981\u4F30\u8BA1\u51FA\u6EE1\u8DB3\u641C\u7D22\u6761\u4EF6\u7684\u8BB0\u5F55\u5230\u5E95\u6709\u591A\u5C11\u6761\u3002</p>
</li>
<li>
<p>\u5982\u679C\u4F7F\u7528\u7684\u662F\u7D22\u5F15\u6267\u884C\u7684\u5355\u8868\u626B\u63CF\uFF0C\u90A3\u4E48\u8BA1\u7B97\u9A71\u52A8\u8868\u6247\u51FA\u7684\u65F6\u5019\u9700\u8981\u4F30\u8BA1\u51FA\u6EE1\u8DB3\u9664\u4F7F\u7528\u5230\u5BF9\u5E94\u7D22\u5F15\u7684\u641C\u7D22\u6761\u4EF6\u5916\u7684\u5176\u4ED6\u641C\u7D22\u6761\u4EF6\u7684\u8BB0\u5F55\u6709\u591A\u5C11\u6761\u3002</p>
</li>
</ul>
<p>\u6BD4\u65B9\u8BF4\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE key1 &gt; <span>'z'</span> AND common_field = <span>'a'</span>;
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+------------------------------------+
| id | select_type | table | partitions | <span>type</span>  | possible_keys | key      | key_len | ref  | rows | filtered | Extra                              |
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+------------------------------------+
|  1 | SIMPLE      | s1    | NULL       | range | idx_key1      | idx_key1 | 303     | NULL |  266 |    10.00 | Using index condition; Using <span>where</span> |
+----+-------------+-------+------------+-------+---------------+----------+---------+------+------+----------+------------------------------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u4ECE\u6267\u884C\u8BA1\u5212\u7684<code>key</code>\u5217\u4E2D\u53EF\u4EE5\u770B\u51FA\u6765\uFF0C\u8BE5\u67E5\u8BE2\u4F7F\u7528<code>idx_key1</code>\u7D22\u5F15\u6765\u6267\u884C\u67E5\u8BE2\uFF0C\u4ECE<code>rows</code>\u5217\u53EF\u4EE5\u770B\u51FA\u6EE1\u8DB3<code>key1 &gt; 'z'</code>\u7684\u8BB0\u5F55\u6709<code>266</code>\u6761\u3002\u6267\u884C\u8BA1\u5212\u7684<code>filtered</code>\u5217\u5C31\u4EE3\u8868\u67E5\u8BE2\u4F18\u5316\u5668\u9884\u6D4B\u5728\u8FD9<code>266</code>\u6761\u8BB0\u5F55\u4E2D\uFF0C\u6709\u591A\u5C11\u6761\u8BB0\u5F55\u6EE1\u8DB3\u5176\u4F59\u7684\u641C\u7D22\u6761\u4EF6\uFF0C\u4E5F\u5C31\u662F<code>common_field = 'a'</code>\u8FD9\u4E2A\u6761\u4EF6\u7684\u767E\u5206\u6BD4\u3002\u6B64\u5904<code>filtered</code>\u5217\u7684\u503C\u662F<code>10.00</code>\uFF0C\u8BF4\u660E\u67E5\u8BE2\u4F18\u5316\u5668\u9884\u6D4B\u5728<code>266</code>\u6761\u8BB0\u5F55\u4E2D\u6709<code>10.00%</code>\u7684\u8BB0\u5F55\u6EE1\u8DB3<code>common_field = 'a'</code>\u8FD9\u4E2A\u6761\u4EF6\u3002</p>
<p>\u5BF9\u4E8E\u5355\u8868\u67E5\u8BE2\u6765\u8BF4\uFF0C\u8FD9\u4E2A<code>filtered</code>\u5217\u7684\u503C\u6CA1\u4EC0\u4E48\u610F\u4E49\uFF0C\u6211\u4EEC\u66F4\u5173\u6CE8\u5728\u8FDE\u63A5\u67E5\u8BE2\u4E2D\u9A71\u52A8\u8868\u5BF9\u5E94\u7684\u6267\u884C\u8BA1\u5212\u8BB0\u5F55\u7684<code>filtered</code>\u503C\uFF0C\u6BD4\u65B9\u8BF4\u4E0B\u8FB9\u8FD9\u4E2A\u67E5\u8BE2\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 INNER JOIN s2 ON s1.key1 = s2.key1 WHERE s1.common_field = <span>'a'</span>;
+----+-------------+-------+------------+------+---------------+----------+---------+-------------------+------+----------+-------------+
| id | select_type | table | partitions | <span>type</span> | possible_keys | key      | key_len | ref               | rows | filtered | Extra       |
+----+-------------+-------+------------+------+---------------+----------+---------+-------------------+------+----------+-------------+
|  1 | SIMPLE      | s1    | NULL       | ALL  | idx_key1      | NULL     | NULL    | NULL              | 9688 |    10.00 | Using <span>where</span> |
|  1 | SIMPLE      | s2    | NULL       | ref  | idx_key1      | idx_key1 | 303     | xiaohaizi.s1.key1 |    1 |   100.00 | NULL        |
+----+-------------+-------+------------+------+---------------+----------+---------+-------------------+------+----------+-------------+
2 rows <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u4ECE\u6267\u884C\u8BA1\u5212\u4E2D\u53EF\u4EE5\u770B\u51FA\u6765\uFF0C\u67E5\u8BE2\u4F18\u5316\u5668\u6253\u7B97\u628A<code>s1</code>\u5F53\u4F5C\u9A71\u52A8\u8868\uFF0C<code>s2</code>\u5F53\u4F5C\u88AB\u9A71\u52A8\u8868\u3002\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u9A71\u52A8\u8868<code>s1</code>\u8868\u7684\u6267\u884C\u8BA1\u5212\u7684<code>rows</code>\u5217\u4E3A<code>9688</code>\uFF0C <code>filtered</code>\u5217\u4E3A<code>10.00</code>\uFF0C\u8FD9\u610F\u5473\u7740\u9A71\u52A8\u8868<code>s1</code>\u7684\u6247\u51FA\u503C\u5C31\u662F<code>9688 \xD7 10.00% = 968.8</code>\uFF0C\u8FD9\u8BF4\u660E\u8FD8\u8981\u5BF9\u88AB\u9A71\u52A8\u8868\u6267\u884C\u5927\u7EA6<code>968</code>\u6B21\u67E5\u8BE2\u3002</p>
`};export{e as default};
