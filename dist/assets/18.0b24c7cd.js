var n={name:"\u795E\u5175\u5229\u5668 \u2014\u2014 optimizer trace \u7684\u795E\u5947\u529F\u6548",content:`<style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:30px;margin-bottom:5px}.markdown-body h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:15px}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h1 data-id="heading-0">optimizer trace \u8868\u7684\u795E\u5947\u529F\u6548</h1>
<p>\u6807\u7B7E\uFF1A MySQL \u662F\u600E\u6837\u8FD0\u884C\u7684</p>
<hr>
<p>\u5BF9\u4E8E<code>MySQL 5.6</code>\u4EE5\u53CA\u4E4B\u524D\u7684\u7248\u672C\u6765\u8BF4\uFF0C\u67E5\u8BE2\u4F18\u5316\u5668\u5C31\u50CF\u662F\u4E00\u4E2A\u9ED1\u76D2\u5B50\u4E00\u6837\uFF0C\u4F60\u53EA\u80FD\u901A\u8FC7<code>EXPLAIN</code>\u8BED\u53E5\u67E5\u770B\u5230\u6700\u540E\u4F18\u5316\u5668\u51B3\u5B9A\u4F7F\u7528\u7684\u6267\u884C\u8BA1\u5212\uFF0C\u5374\u65E0\u6CD5\u77E5\u9053\u5B83\u4E3A\u4EC0\u4E48\u505A\u8FD9\u4E2A\u51B3\u7B56\u3002\u8FD9\u5BF9\u4E8E\u4E00\u90E8\u5206\u559C\u6B22\u5228\u6839\u95EE\u5E95\u7684\u5C0F\u4F19\u4F34\u6765\u8BF4\u7B80\u76F4\u662F\u707E\u96BE\uFF1A\u201C\u6211\u5C31\u89C9\u5F97\u4F7F\u7528\u5176\u4ED6\u7684\u6267\u884C\u65B9\u6848\u6BD4<code>EXPLAIN</code>\u8F93\u51FA\u7684\u8FD9\u79CD\u65B9\u6848\u5F3A\uFF0C\u51ED\u4EC0\u4E48\u4F18\u5316\u5668\u505A\u7684\u51B3\u5B9A\u548C\u6211\u60F3\u7684\u4E0D\u4E00\u6837\u5462\uFF1F\u201D</p>
<p>\u5728<code>MySQL 5.6</code>\u4EE5\u53CA\u4E4B\u540E\u7684\u7248\u672C\u4E2D\uFF0C\u8BBE\u8BA1<code>MySQL</code>\u7684\u5927\u53D4\u8D34\u5FC3\u7684\u4E3A\u8FD9\u90E8\u5206\u5C0F\u4F19\u4F34\u63D0\u51FA\u4E86\u4E00\u4E2A<code>optimizer trace</code>\u7684\u529F\u80FD\uFF0C\u8FD9\u4E2A\u529F\u80FD\u53EF\u4EE5\u8BA9\u6211\u4EEC\u65B9\u4FBF\u7684\u67E5\u770B\u4F18\u5316\u5668\u751F\u6210\u6267\u884C\u8BA1\u5212\u7684\u6574\u4E2A\u8FC7\u7A0B\uFF0C\u8FD9\u4E2A\u529F\u80FD\u7684\u5F00\u542F\u4E0E\u5173\u95ED\u7531\u7CFB\u7EDF\u53D8\u91CF<code>optimizer_trace</code>\u51B3\u5B9A\uFF0C\u6211\u4EEC\u770B\u4E00\u4E0B\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; SHOW VARIABLES LIKE <span>'optimizer_trace'</span>;
+-----------------+--------------------------+
| Variable_name   | Value                    |
+-----------------+--------------------------+
| optimizer_trace | enabled=off,one_line=off |
+-----------------+--------------------------+
1 row <span>in</span> <span>set</span> (0.02 sec)
</code></pre><p>\u53EF\u4EE5\u770B\u5230<code>enabled</code>\u503C\u4E3A<code>off</code>\uFF0C\u8868\u660E\u8FD9\u4E2A\u529F\u80FD\u9ED8\u8BA4\u662F\u5173\u95ED\u7684\u3002</p>
<blockquote><p>\u5C0F\u8D34\u58EB\uFF1A

one_line\u7684\u503C\u662F\u63A7\u5236\u8F93\u51FA\u683C\u5F0F\u7684\uFF0C\u5982\u679C\u4E3Aon\u90A3\u4E48\u6240\u6709\u8F93\u51FA\u90FD\u5C06\u5728\u4E00\u884C\u4E2D\u5C55\u793A\uFF0C\u4E0D\u9002\u5408\u4EBA\u9605\u8BFB\uFF0C\u6240\u4EE5\u6211\u4EEC\u5C31\u4FDD\u6301\u5176\u9ED8\u8BA4\u503C\u4E3Aoff\u5427\u3002
</p></blockquote><p>\u5982\u679C\u60F3\u6253\u5F00\u8FD9\u4E2A\u529F\u80FD\uFF0C\u5FC5\u987B\u9996\u5148\u628A<code>enabled</code>\u7684\u503C\u6539\u4E3A<code>on</code>\uFF0C\u5C31\u50CF\u8FD9\u6837\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; SET optimizer_trace=<span>"enabled=on"</span>;
Query OK, 0 rows affected (0.00 sec)
</code></pre><p>\u7136\u540E\u6211\u4EEC\u5C31\u53EF\u4EE5\u8F93\u5165\u6211\u4EEC\u60F3\u8981\u67E5\u770B\u4F18\u5316\u8FC7\u7A0B\u7684\u67E5\u8BE2\u8BED\u53E5\uFF0C\u5F53\u8BE5\u67E5\u8BE2\u8BED\u53E5\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u5C31\u53EF\u4EE5\u5230<code>information_schema</code>\u6570\u636E\u5E93\u4E0B\u7684<code>OPTIMIZER_TRACE</code>\u8868\u4E2D\u67E5\u770B\u5B8C\u6574\u7684\u4F18\u5316\u8FC7\u7A0B\u3002\u8FD9\u4E2A<code>OPTIMIZER_TRACE</code>\u8868\u67094\u4E2A\u5217\uFF0C\u5206\u522B\u662F\uFF1A</p>
<ul>
<li>
<p><code>QUERY</code>\uFF1A\u8868\u793A\u6211\u4EEC\u7684\u67E5\u8BE2\u8BED\u53E5\u3002</p>
</li>
<li>
<p><code>TRACE</code>\uFF1A\u8868\u793A\u4F18\u5316\u8FC7\u7A0B\u7684JSON\u683C\u5F0F\u6587\u672C\u3002</p>
</li>
<li>
<p><code>MISSING_BYTES_BEYOND_MAX_MEM_SIZE</code>\uFF1A\u7531\u4E8E\u4F18\u5316\u8FC7\u7A0B\u53EF\u80FD\u4F1A\u8F93\u51FA\u5F88\u591A\uFF0C\u5982\u679C\u8D85\u8FC7\u67D0\u4E2A\u9650\u5236\u65F6\uFF0C\u591A\u4F59\u7684\u6587\u672C\u5C06\u4E0D\u4F1A\u88AB\u663E\u793A\uFF0C\u8FD9\u4E2A\u5B57\u6BB5\u5C55\u793A\u4E86\u88AB\u5FFD\u7565\u7684\u6587\u672C\u5B57\u8282\u6570\u3002</p>
</li>
<li>
<p><code>INSUFFICIENT_PRIVILEGES</code>\uFF1A\u8868\u793A\u662F\u5426\u6CA1\u6709\u6743\u9650\u67E5\u770B\u4F18\u5316\u8FC7\u7A0B\uFF0C\u9ED8\u8BA4\u503C\u662F0\uFF0C\u53EA\u6709\u67D0\u4E9B\u7279\u6B8A\u60C5\u51B5\u4E0B\u624D\u4F1A\u662F<code>1</code>\uFF0C\u6211\u4EEC\u6682\u65F6\u4E0D\u5173\u5FC3\u8FD9\u4E2A\u5B57\u6BB5\u7684\u503C\u3002</p>
</li>
</ul>
<p>\u5B8C\u6574\u7684\u4F7F\u7528<code>optimizer trace</code>\u529F\u80FD\u7684\u6B65\u9AA4\u603B\u7ED3\u5982\u4E0B\uFF1A</p>
<pre><code lang="bash" class=""><span># 1. \u6253\u5F00optimizer trace\u529F\u80FD (\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5B83\u662F\u5173\u95ED\u7684):</span>
SET optimizer_trace=<span>"enabled=on"</span>;

<span># 2. \u8FD9\u91CC\u8F93\u5165\u4F60\u81EA\u5DF1\u7684\u67E5\u8BE2\u8BED\u53E5</span>
SELECT ...; 

<span># 3. \u4ECEOPTIMIZER_TRACE\u8868\u4E2D\u67E5\u770B\u4E0A\u4E00\u4E2A\u67E5\u8BE2\u7684\u4F18\u5316\u8FC7\u7A0B</span>
SELECT * FROM information_schema.OPTIMIZER_TRACE;

<span># 4. \u53EF\u80FD\u4F60\u8FD8\u8981\u89C2\u5BDF\u5176\u4ED6\u8BED\u53E5\u6267\u884C\u7684\u4F18\u5316\u8FC7\u7A0B\uFF0C\u91CD\u590D\u4E0A\u8FB9\u7684\u7B2C2\u30013\u6B65</span>
...

<span># 5. \u5F53\u4F60\u505C\u6B62\u67E5\u770B\u8BED\u53E5\u7684\u4F18\u5316\u8FC7\u7A0B\u65F6\uFF0C\u628Aoptimizer trace\u529F\u80FD\u5173\u95ED</span>
SET optimizer_trace=<span>"enabled=off"</span>;
</code></pre><p>\u73B0\u5728\u6211\u4EEC\u6709\u4E00\u4E2A\u641C\u7D22\u6761\u4EF6\u6BD4\u8F83\u591A\u7684\u67E5\u8BE2\u8BED\u53E5\uFF0C\u5B83\u7684\u6267\u884C\u8BA1\u5212\u5982\u4E0B\uFF1A</p>
<pre><code lang="bash" class="">mysql&gt; EXPLAIN SELECT * FROM s1 WHERE
    -&gt;     key1 &gt; <span>'z'</span> AND
    -&gt;     key2 &lt; 1000000 AND
    -&gt;     key3 IN (<span>'a'</span>, <span>'b'</span>, <span>'c'</span>) AND
    -&gt;     common_field = <span>'abc'</span>;
+----+-------------+-------+------------+-------+----------------------------+----------+---------+------+------+----------+------------------------------------+
| id | select_type | table | partitions | <span>type</span>  | possible_keys              | key      | key_len | ref  | rows | filtered | Extra                              |
+----+-------------+-------+------------+-------+----------------------------+----------+---------+------+------+----------+------------------------------------+
|  1 | SIMPLE      | s1    | NULL       | range | idx_key2,idx_key1,idx_key3 | idx_key2 | 5       | NULL |   12 |     0.42 | Using index condition; Using <span>where</span> |
+----+-------------+-------+------------+-------+----------------------------+----------+---------+------+------+----------+------------------------------------+
1 row <span>in</span> <span>set</span>, 1 warning (0.00 sec)
</code></pre><p>\u53EF\u4EE5\u770B\u5230\u8BE5\u67E5\u8BE2\u53EF\u80FD\u4F7F\u7528\u5230\u7684\u7D22\u5F15\u67093\u4E2A\uFF0C\u90A3\u4E48\u4E3A\u4EC0\u4E48\u4F18\u5316\u5668\u6700\u7EC8\u9009\u62E9\u4E86<code>idx_key2</code>\u800C\u4E0D\u9009\u62E9\u5176\u4ED6\u7684\u7D22\u5F15\u6216\u8005\u76F4\u63A5\u5168\u8868\u626B\u63CF\u5462\uFF1F\u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u901A\u8FC7<code>otpimzer trace</code>\u529F\u80FD\u6765\u67E5\u770B\u4F18\u5316\u5668\u7684\u5177\u4F53\u5DE5\u4F5C\u8FC7\u7A0B\uFF1A</p>
<pre><code lang="bash" class="">SET optimizer_trace=<span>"enabled=on"</span>;

SELECT * FROM s1 WHERE 
    key1 &gt; <span>'z'</span> AND 
    key2 &lt; 1000000 AND 
    key3 IN (<span>'a'</span>, <span>'b'</span>, <span>'c'</span>) AND 
    common_field = <span>'abc'</span>;
    
SELECT * FROM information_schema.OPTIMIZER_TRACE\\G    
</code></pre><p>\u6211\u4EEC\u76F4\u63A5\u770B\u4E00\u4E0B\u901A\u8FC7\u67E5\u8BE2<code>OPTIMIZER_TRACE</code>\u8868\u5F97\u5230\u7684\u8F93\u51FA\uFF08\u6211\u4F7F\u7528<code>#</code>\u540E\u8DDF\u968F\u6CE8\u91CA\u7684\u5F62\u5F0F\u4E3A\u5927\u5BB6\u89E3\u91CA\u4E86\u4F18\u5316\u8FC7\u7A0B\u4E2D\u7684\u4E00\u4E9B\u6BD4\u8F83\u91CD\u8981\u7684\u70B9\uFF0C\u5927\u5BB6\u91CD\u70B9\u5173\u6CE8\u4E00\u4E0B\uFF09\uFF1A</p>
<pre><code lang="bash" class="">*************************** 1. row ***************************
<span># \u5206\u6790\u7684\u67E5\u8BE2\u8BED\u53E5\u662F\u4EC0\u4E48</span>
QUERY: SELECT * FROM s1 WHERE
    key1 &gt; <span>'z'</span> AND
    key2 &lt; 1000000 AND
    key3 IN (<span>'a'</span>, <span>'b'</span>, <span>'c'</span>) AND
    common_field = <span>'abc'</span>

<span># \u4F18\u5316\u7684\u5177\u4F53\u8FC7\u7A0B</span>
TRACE: {
  <span>"steps"</span>: [
    {
      <span>"join_preparation"</span>: {     <span># prepare\u9636\u6BB5</span>
        <span>"select#"</span>: 1,
        <span>"steps"</span>: [
          {
            <span>"IN_uses_bisection"</span>: <span>true</span>
          },
          {
            <span>"expanded_query"</span>: <span>"/* select#1 */ select \`s1\`.\`id\` AS \`id\`,\`s1\`.\`key1\` AS \`key1\`,\`s1\`.\`key2\` AS \`key2\`,\`s1\`.\`key3\` AS \`key3\`,\`s1\`.\`key_part1\` AS \`key_part1\`,\`s1\`.\`key_part2\` AS \`key_part2\`,\`s1\`.\`key_part3\` AS \`key_part3\`,\`s1\`.\`common_field\` AS \`common_field\` from \`s1\` where ((\`s1\`.\`key1\` &gt; 'z') and (\`s1\`.\`key2\` &lt; 1000000) and (\`s1\`.\`key3\` in ('a','b','c')) and (\`s1\`.\`common_field\` = 'abc'))"</span>
          }
        ] /* steps */
      } /* join_preparation */
    },
    {
      <span>"join_optimization"</span>: {    <span># optimize\u9636\u6BB5</span>
        <span>"select#"</span>: 1,
        <span>"steps"</span>: [
          {
            <span>"condition_processing"</span>: {   <span># \u5904\u7406\u641C\u7D22\u6761\u4EF6</span>
              <span>"condition"</span>: <span>"WHERE"</span>,
              <span># \u539F\u59CB\u641C\u7D22\u6761\u4EF6</span>
              <span>"original_condition"</span>: <span>"((\`s1\`.\`key1\` &gt; 'z') and (\`s1\`.\`key2\` &lt; 1000000) and (\`s1\`.\`key3\` in ('a','b','c')) and (\`s1\`.\`common_field\` = 'abc'))"</span>,
              <span>"steps"</span>: [
                {
                  <span># \u7B49\u503C\u4F20\u9012\u8F6C\u6362</span>
                  <span>"transformation"</span>: <span>"equality_propagation"</span>,
                  <span>"resulting_condition"</span>: <span>"((\`s1\`.\`key1\` &gt; 'z') and (\`s1\`.\`key2\` &lt; 1000000) and (\`s1\`.\`key3\` in ('a','b','c')) and (\`s1\`.\`common_field\` = 'abc'))"</span>
                },
                {
                  <span># \u5E38\u91CF\u4F20\u9012\u8F6C\u6362    </span>
                  <span>"transformation"</span>: <span>"constant_propagation"</span>,
                  <span>"resulting_condition"</span>: <span>"((\`s1\`.\`key1\` &gt; 'z') and (\`s1\`.\`key2\` &lt; 1000000) and (\`s1\`.\`key3\` in ('a','b','c')) and (\`s1\`.\`common_field\` = 'abc'))"</span>
                },
                {
                  <span># \u53BB\u9664\u6CA1\u7528\u7684\u6761\u4EF6</span>
                  <span>"transformation"</span>: <span>"trivial_condition_removal"</span>,
                  <span>"resulting_condition"</span>: <span>"((\`s1\`.\`key1\` &gt; 'z') and (\`s1\`.\`key2\` &lt; 1000000) and (\`s1\`.\`key3\` in ('a','b','c')) and (\`s1\`.\`common_field\` = 'abc'))"</span>
                }
              ] /* steps */
            } /* condition_processing */
          },
          {
            <span># \u66FF\u6362\u865A\u62DF\u751F\u6210\u5217</span>
            <span>"substitute_generated_columns"</span>: {
            } /* substitute_generated_columns */
          },
          {
            <span># \u8868\u7684\u4F9D\u8D56\u4FE1\u606F</span>
            <span>"table_dependencies"</span>: [
              {
                <span>"table"</span>: <span>"\`s1\`"</span>,
                <span>"row_may_be_null"</span>: <span>false</span>,
                <span>"map_bit"</span>: 0,
                <span>"depends_on_map_bits"</span>: [
                ] /* depends_on_map_bits */
              }
            ] /* table_dependencies */
          },
          {
            <span>"ref_optimizer_key_uses"</span>: [
            ] /* ref_optimizer_key_uses */
          },
          {
          
            <span># \u9884\u4F30\u4E0D\u540C\u5355\u8868\u8BBF\u95EE\u65B9\u6CD5\u7684\u8BBF\u95EE\u6210\u672C</span>
            <span>"rows_estimation"</span>: [
              {
                <span>"table"</span>: <span>"\`s1\`"</span>,
                <span>"range_analysis"</span>: {
                  <span>"table_scan"</span>: {   <span># \u5168\u8868\u626B\u63CF\u7684\u884C\u6570\u4EE5\u53CA\u6210\u672C</span>
                    <span>"rows"</span>: 9688,
                    <span>"cost"</span>: 2036.7
                  } /* table_scan */,
                  
                  <span># \u5206\u6790\u53EF\u80FD\u4F7F\u7528\u7684\u7D22\u5F15</span>
                  <span>"potential_range_indexes"</span>: [
                    {
                      <span>"index"</span>: <span>"PRIMARY"</span>,   <span># \u4E3B\u952E\u4E0D\u53EF\u7528</span>
                      <span>"usable"</span>: <span>false</span>,
                      <span>"cause"</span>: <span>"not_applicable"</span>
                    },
                    {
                      <span>"index"</span>: <span>"idx_key2"</span>,  <span># idx_key2\u53EF\u80FD\u88AB\u4F7F\u7528</span>
                      <span>"usable"</span>: <span>true</span>,
                      <span>"key_parts"</span>: [
                        <span>"key2"</span>
                      ] /* key_parts */
                    },
                    {
                      <span>"index"</span>: <span>"idx_key1"</span>,  <span># idx_key1\u53EF\u80FD\u88AB\u4F7F\u7528</span>
                      <span>"usable"</span>: <span>true</span>,
                      <span>"key_parts"</span>: [
                        <span>"key1"</span>,
                        <span>"id"</span>
                      ] /* key_parts */
                    },
                    {
                      <span>"index"</span>: <span>"idx_key3"</span>,  <span># idx_key3\u53EF\u80FD\u88AB\u4F7F\u7528</span>
                      <span>"usable"</span>: <span>true</span>,
                      <span>"key_parts"</span>: [
                        <span>"key3"</span>,
                        <span>"id"</span>
                      ] /* key_parts */
                    },
                    {
                      <span>"index"</span>: <span>"idx_key_part"</span>,  <span># idx_keypart\u4E0D\u53EF\u7528</span>
                      <span>"usable"</span>: <span>false</span>,
                      <span>"cause"</span>: <span>"not_applicable"</span>
                    }
                  ] /* potential_range_indexes */,
                  <span>"setup_range_conditions"</span>: [
                  ] /* setup_range_conditions */,
                  <span>"group_index_range"</span>: {
                    <span>"chosen"</span>: <span>false</span>,
                    <span>"cause"</span>: <span>"not_group_by_or_distinct"</span>
                  } /* group_index_range */,
                  
                  <span># \u5206\u6790\u5404\u79CD\u53EF\u80FD\u4F7F\u7528\u7684\u7D22\u5F15\u7684\u6210\u672C</span>
                  <span>"analyzing_range_alternatives"</span>: {
                    <span>"range_scan_alternatives"</span>: [
                      {
                        <span># \u4F7F\u7528idx_key2\u7684\u6210\u672C\u5206\u6790</span>
                        <span>"index"</span>: <span>"idx_key2"</span>,
                        <span># \u4F7F\u7528idx_key2\u7684\u8303\u56F4\u533A\u95F4</span>
                        <span>"ranges"</span>: [
                          <span>"NULL &lt; key2 &lt; 1000000"</span>
                        ] /* ranges */,
                        <span>"index_dives_for_eq_ranges"</span>: <span>true</span>,   <span># \u662F\u5426\u4F7F\u7528index dive</span>
                        <span>"rowid_ordered"</span>: <span>false</span>,     <span># \u4F7F\u7528\u8BE5\u7D22\u5F15\u83B7\u53D6\u7684\u8BB0\u5F55\u662F\u5426\u6309\u7167\u4E3B\u952E\u6392\u5E8F</span>
                        <span>"using_mrr"</span>: <span>false</span>,     <span># \u662F\u5426\u4F7F\u7528mrr</span>
                        <span>"index_only"</span>: <span>false</span>,    <span># \u662F\u5426\u662F\u7D22\u5F15\u8986\u76D6\u8BBF\u95EE</span>
                        <span>"rows"</span>: 12,     <span># \u4F7F\u7528\u8BE5\u7D22\u5F15\u83B7\u53D6\u7684\u8BB0\u5F55\u6761\u6570</span>
                        <span>"cost"</span>: 15.41,  <span># \u4F7F\u7528\u8BE5\u7D22\u5F15\u7684\u6210\u672C</span>
                        <span>"chosen"</span>: <span>true</span>  <span># \u662F\u5426\u9009\u62E9\u8BE5\u7D22\u5F15</span>
                      },
                      {
                        <span># \u4F7F\u7528idx_key1\u7684\u6210\u672C\u5206\u6790</span>
                        <span>"index"</span>: <span>"idx_key1"</span>,
                        <span># \u4F7F\u7528idx_key1\u7684\u8303\u56F4\u533A\u95F4</span>
                        <span>"ranges"</span>: [
                          <span>"z &lt; key1"</span>
                        ] /* ranges */,
                        <span>"index_dives_for_eq_ranges"</span>: <span>true</span>,   <span># \u540C\u4E0A</span>
                        <span>"rowid_ordered"</span>: <span>false</span>,   <span># \u540C\u4E0A</span>
                        <span>"using_mrr"</span>: <span>false</span>,   <span># \u540C\u4E0A</span>
                        <span>"index_only"</span>: <span>false</span>,   <span># \u540C\u4E0A</span>
                        <span>"rows"</span>: 266,   <span># \u540C\u4E0A</span>
                        <span>"cost"</span>: 320.21,   <span># \u540C\u4E0A</span>
                        <span>"chosen"</span>: <span>false</span>,   <span># \u540C\u4E0A</span>
                        <span>"cause"</span>: <span>"cost"</span>   <span># \u56E0\u4E3A\u6210\u672C\u592A\u5927\u6240\u4EE5\u4E0D\u9009\u62E9\u8BE5\u7D22\u5F15</span>
                      },
                      {
                        <span># \u4F7F\u7528idx_key3\u7684\u6210\u672C\u5206\u6790</span>
                        <span>"index"</span>: <span>"idx_key3"</span>,
                        <span># \u4F7F\u7528idx_key3\u7684\u8303\u56F4\u533A\u95F4</span>
                        <span>"ranges"</span>: [
                          <span>"a &lt;= key3 &lt;= a"</span>,
                          <span>"b &lt;= key3 &lt;= b"</span>,
                          <span>"c &lt;= key3 &lt;= c"</span>
                        ] /* ranges */,
                        <span>"index_dives_for_eq_ranges"</span>: <span>true</span>,   <span># \u540C\u4E0A</span>
                        <span>"rowid_ordered"</span>: <span>false</span>,   <span># \u540C\u4E0A</span>
                        <span>"using_mrr"</span>: <span>false</span>,   <span># \u540C\u4E0A</span>
                        <span>"index_only"</span>: <span>false</span>,   <span># \u540C\u4E0A</span>
                        <span>"rows"</span>: 21,   <span># \u540C\u4E0A</span>
                        <span>"cost"</span>: 28.21,   <span># \u540C\u4E0A</span>
                        <span>"chosen"</span>: <span>false</span>,   <span># \u540C\u4E0A</span>
                        <span>"cause"</span>: <span>"cost"</span>   <span># \u540C\u4E0A</span>
                      }
                    ] /* range_scan_alternatives */,
                    
                    <span># \u5206\u6790\u4F7F\u7528\u7D22\u5F15\u5408\u5E76\u7684\u6210\u672C</span>
                    <span>"analyzing_roworder_intersect"</span>: {
                      <span>"usable"</span>: <span>false</span>,
                      <span>"cause"</span>: <span>"too_few_roworder_scans"</span>
                    } /* analyzing_roworder_intersect */
                  } /* analyzing_range_alternatives */,
                  
                  <span># \u5BF9\u4E8E\u4E0A\u8FF0\u5355\u8868\u67E5\u8BE2s1\u6700\u4F18\u7684\u8BBF\u95EE\u65B9\u6CD5</span>
                  <span>"chosen_range_access_summary"</span>: {
                    <span>"range_access_plan"</span>: {
                      <span>"type"</span>: <span>"range_scan"</span>,
                      <span>"index"</span>: <span>"idx_key2"</span>,
                      <span>"rows"</span>: 12,
                      <span>"ranges"</span>: [
                        <span>"NULL &lt; key2 &lt; 1000000"</span>
                      ] /* ranges */
                    } /* range_access_plan */,
                    <span>"rows_for_plan"</span>: 12,
                    <span>"cost_for_plan"</span>: 15.41,
                    <span>"chosen"</span>: <span>true</span>
                  } /* chosen_range_access_summary */
                } /* range_analysis */
              }
            ] /* rows_estimation */
          },
          {
            
            <span># \u5206\u6790\u5404\u79CD\u53EF\u80FD\u7684\u6267\u884C\u8BA1\u5212</span>
            <span>#\uFF08\u5BF9\u591A\u8868\u67E5\u8BE2\u8FD9\u53EF\u80FD\u6709\u5F88\u591A\u79CD\u4E0D\u540C\u7684\u65B9\u6848\uFF0C\u5355\u8868\u67E5\u8BE2\u7684\u65B9\u6848\u4E0A\u8FB9\u5DF2\u7ECF\u5206\u6790\u8FC7\u4E86\uFF0C\u76F4\u63A5\u9009\u53D6idx_key2\u5C31\u597D\uFF09</span>
            <span>"considered_execution_plans"</span>: [
              {
                <span>"plan_prefix"</span>: [
                ] /* plan_prefix */,
                <span>"table"</span>: <span>"\`s1\`"</span>,
                <span>"best_access_path"</span>: {
                  <span>"considered_access_paths"</span>: [
                    {
                      <span>"rows_to_scan"</span>: 12,
                      <span>"access_type"</span>: <span>"range"</span>,
                      <span>"range_details"</span>: {
                        <span>"used_index"</span>: <span>"idx_key2"</span>
                      } /* range_details */,
                      <span>"resulting_rows"</span>: 12,
                      <span>"cost"</span>: 17.81,
                      <span>"chosen"</span>: <span>true</span>
                    }
                  ] /* considered_access_paths */
                } /* best_access_path */,
                <span>"condition_filtering_pct"</span>: 100,
                <span>"rows_for_plan"</span>: 12,
                <span>"cost_for_plan"</span>: 17.81,
                <span>"chosen"</span>: <span>true</span>
              }
            ] /* considered_execution_plans */
          },
          {
            <span># \u5C1D\u8BD5\u7ED9\u67E5\u8BE2\u6DFB\u52A0\u4E00\u4E9B\u5176\u4ED6\u7684\u67E5\u8BE2\u6761\u4EF6</span>
            <span>"attaching_conditions_to_tables"</span>: {
              <span>"original_condition"</span>: <span>"((\`s1\`.\`key1\` &gt; 'z') and (\`s1\`.\`key2\` &lt; 1000000) and (\`s1\`.\`key3\` in ('a','b','c')) and (\`s1\`.\`common_field\` = 'abc'))"</span>,
              <span>"attached_conditions_computation"</span>: [
              ] /* attached_conditions_computation */,
              <span>"attached_conditions_summary"</span>: [
                {
                  <span>"table"</span>: <span>"\`s1\`"</span>,
                  <span>"attached"</span>: <span>"((\`s1\`.\`key1\` &gt; 'z') and (\`s1\`.\`key2\` &lt; 1000000) and (\`s1\`.\`key3\` in ('a','b','c')) and (\`s1\`.\`common_field\` = 'abc'))"</span>
                }
              ] /* attached_conditions_summary */
            } /* attaching_conditions_to_tables */
          },
          {
            <span># \u518D\u7A0D\u7A0D\u7684\u6539\u8FDB\u4E00\u4E0B\u6267\u884C\u8BA1\u5212</span>
            <span>"refine_plan"</span>: [
              {
                <span>"table"</span>: <span>"\`s1\`"</span>,
                <span>"pushed_index_condition"</span>: <span>"(\`s1\`.\`key2\` &lt; 1000000)"</span>,
                <span>"table_condition_attached"</span>: <span>"((\`s1\`.\`key1\` &gt; 'z') and (\`s1\`.\`key3\` in ('a','b','c')) and (\`s1\`.\`common_field\` = 'abc'))"</span>
              }
            ] /* refine_plan */
          }
        ] /* steps */
      } /* join_optimization */
    },
    {
      <span>"join_execution"</span>: {    <span># execute\u9636\u6BB5</span>
        <span>"select#"</span>: 1,
        <span>"steps"</span>: [
        ] /* steps */
      } /* join_execution */
    }
  ] /* steps */
}

<span># \u56E0\u4F18\u5316\u8FC7\u7A0B\u6587\u672C\u592A\u591A\u800C\u4E22\u5F03\u7684\u6587\u672C\u5B57\u8282\u5927\u5C0F\uFF0C\u503C\u4E3A0\u65F6\u8868\u793A\u5E76\u6CA1\u6709\u4E22\u5F03</span>
MISSING_BYTES_BEYOND_MAX_MEM_SIZE: 0

<span># \u6743\u9650\u5B57\u6BB5</span>
INSUFFICIENT_PRIVILEGES: 0

1 row <span>in</span> <span>set</span> (0.00 sec)
</code></pre><p>\u5927\u5BB6\u770B\u5230\u8FD9\u4E2A\u8F93\u51FA\u7684\u7B2C\u4E00\u611F\u89C9\u5C31\u662F\u8FD9\u6587\u672C\u4E5F\u592A\u591A\u4E86\u70B9\u513F\u5427\uFF0C\u5176\u5B9E\u8FD9\u53EA\u662F\u4F18\u5316\u5668\u6267\u884C\u8FC7\u7A0B\u4E2D\u7684\u4E00\u5C0F\u90E8\u5206\uFF0C\u8BBE\u8BA1<code>MySQL</code>\u7684\u5927\u53D4\u53EF\u80FD\u4F1A\u5728\u4E4B\u540E\u7684\u7248\u672C\u4E2D\u6DFB\u52A0\u66F4\u591A\u7684\u4F18\u5316\u8FC7\u7A0B\u4FE1\u606F\u3002\u4E0D\u8FC7\u6742\u4E71\u4E4B\u4E2D\u5176\u5B9E\u8FD8\u662F\u86EE\u6709\u89C4\u5F8B\u7684\uFF0C\u4F18\u5316\u8FC7\u7A0B\u5927\u81F4\u5206\u4E3A\u4E86\u4E09\u4E2A\u9636\u6BB5\uFF1A</p>
<ul>
<li>
<p><code>prepare</code>\u9636\u6BB5</p>
</li>
<li>
<p><code>optimize</code>\u9636\u6BB5</p>
</li>
<li>
<p><code>execute</code>\u9636\u6BB5</p>
</li>
</ul>
<p>\u6211\u4EEC\u6240\u8BF4\u7684\u57FA\u4E8E\u6210\u672C\u7684\u4F18\u5316\u4E3B\u8981\u96C6\u4E2D\u5728<code>optimize</code>\u9636\u6BB5\uFF0C\u5BF9\u4E8E\u5355\u8868\u67E5\u8BE2\u6765\u8BF4\uFF0C\u6211\u4EEC\u4E3B\u8981\u5173\u6CE8<code>optimize</code>\u9636\u6BB5\u7684<code>"rows_estimation"</code>\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u6DF1\u5165\u5206\u6790\u4E86\u5BF9\u5355\u8868\u67E5\u8BE2\u7684\u5404\u79CD\u6267\u884C\u65B9\u6848\u7684\u6210\u672C\uFF1B\u5BF9\u4E8E\u591A\u8868\u8FDE\u63A5\u67E5\u8BE2\u6765\u8BF4\uFF0C\u6211\u4EEC\u66F4\u591A\u9700\u8981\u5173\u6CE8<code>"considered_execution_plans"</code>\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u91CC\u4F1A\u5199\u660E\u5404\u79CD\u4E0D\u540C\u7684\u8FDE\u63A5\u65B9\u5F0F\u6240\u5BF9\u5E94\u7684\u6210\u672C\u3002\u53CD\u6B63\u4F18\u5316\u5668\u6700\u7EC8\u4F1A\u9009\u62E9\u6210\u672C\u6700\u4F4E\u7684\u90A3\u79CD\u65B9\u6848\u6765\u4F5C\u4E3A\u6700\u7EC8\u7684\u6267\u884C\u8BA1\u5212\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u4F7F\u7528<code>EXPLAIN</code>\u8BED\u53E5\u6240\u5C55\u73B0\u51FA\u7684\u90A3\u79CD\u65B9\u6848\u3002</p>
<p>\u5982\u679C\u6709\u5C0F\u4F19\u4F34\u5BF9\u4F7F\u7528<code>EXPLAIN</code>\u8BED\u53E5\u5C55\u793A\u51FA\u7684\u5BF9\u67D0\u4E2A\u67E5\u8BE2\u7684\u6267\u884C\u8BA1\u5212\u5F88\u4E0D\u7406\u89E3\uFF0C\u5927\u5BB6\u53EF\u4EE5\u5C1D\u8BD5\u4F7F\u7528<code>optimizer trace</code>\u529F\u80FD\u6765\u8BE6\u7EC6\u4E86\u89E3\u6BCF\u4E00\u79CD\u6267\u884C\u65B9\u6848\u5BF9\u5E94\u7684\u6210\u672C\uFF0C\u76F8\u4FE1\u8FD9\u4E2A\u529F\u80FD\u80FD\u8BA9\u5927\u5BB6\u66F4\u6DF1\u5165\u7684\u4E86\u89E3<code>MySQL</code>\u67E5\u8BE2\u4F18\u5316\u5668\u3002</p>
`};export{n as default};
