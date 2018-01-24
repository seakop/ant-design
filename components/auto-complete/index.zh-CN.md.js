webpackJsonp([212],{1639:function(t,a){t.exports={content:["section",["p","\u8f93\u5165\u6846\u81ea\u52a8\u5b8c\u6210\u529f\u80fd\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["p","\u9700\u8981\u81ea\u52a8\u5b8c\u6210\u65f6\u3002"]],meta:{category:"Components",subtitle:"\u81ea\u52a8\u5b8c\u6210",type:"Data Entry",cols:2,title:"AutoComplete",filename:"components/auto-complete/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f55\u65f6\u4f7f\u7528",title:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u65b9\u6cd5",title:"\u65b9\u6cd5"},"\u65b9\u6cd5"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> dataSource <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'12345\'</span><span class="token punctuation">,</span> <span class="token string">\'23456\'</span><span class="token punctuation">,</span> <span class="token string">\'34567\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AutoComplete</span> <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dataSource<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","const dataSource = ['12345', '23456', '34567'];\n<AutoComplete dataSource={dataSource} />"]],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","allowClear"],["td","\u652f\u6301\u6e05\u9664, \u5355\u9009\u6a21\u5f0f\u6709\u6548"],["td","boolean"],["td","false"]],["tr",["td","autoFocus"],["td","\u81ea\u52a8\u83b7\u53d6\u7126\u70b9"],["td","boolean"],["td","false"]],["tr",["td","backfill"],["td","\u4f7f\u7528\u952e\u76d8\u9009\u62e9\u9009\u9879\u7684\u65f6\u5019\u628a\u9009\u4e2d\u9879\u56de\u586b\u5230\u8f93\u5165\u6846\u4e2d"],["td","boolean"],["td","false"]],["tr",["td","children (\u81ea\u52a8\u5b8c\u6210\u7684\u6570\u636e\u6e90)"],["td","\u81ea\u52a8\u5b8c\u6210\u7684\u6570\u636e\u6e90"],["td","React.ReactElement",["optionprops"]," / Array","<","React.ReactElement",["optionprops"],">"],["td","-"]],["tr",["td","children (\u81ea\u5b9a\u4e49\u8f93\u5165\u6846)"],["td","\u81ea\u5b9a\u4e49\u8f93\u5165\u6846"],["td","HTMLInputElement / HTMLTextAreaElement / React.ReactElement",["inputprops"]],["td",["code","<Input />"]]],["tr",["td","dataSource"],["td","\u81ea\u52a8\u5b8c\u6210\u7684\u6570\u636e\u6e90"],["td",["a",{title:null,href:"https://git.io/vMMKF"},"DataSourceItemType"],"[","]"],["td"]],["tr",["td","defaultActiveFirstOption"],["td","\u662f\u5426\u9ed8\u8ba4\u9ad8\u4eae\u7b2c\u4e00\u4e2a\u9009\u9879\u3002"],["td","boolean"],["td","true"]],["tr",["td","defaultValue"],["td","\u6307\u5b9a\u9ed8\u8ba4\u9009\u4e2d\u7684\u6761\u76ee"],["td","string","|","string","[","]","|","{ key: string, label: string","|","ReactNode }","|","Array","<","{ key: string, label: string","|","ReactNode}>"],["td","\u65e0"]],["tr",["td","disabled"],["td","\u662f\u5426\u7981\u7528"],["td","boolean"],["td","false"]],["tr",["td","filterOption"],["td","\u662f\u5426\u6839\u636e\u8f93\u5165\u9879\u8fdb\u884c\u7b5b\u9009\u3002\u5f53\u5176\u4e3a\u4e00\u4e2a\u51fd\u6570\u65f6\uff0c\u4f1a\u63a5\u6536 ",["code","inputValue"]," ",["code","option"]," \u4e24\u4e2a\u53c2\u6570\uff0c\u5f53 ",["code","option"]," \u7b26\u5408\u7b5b\u9009\u6761\u4ef6\u65f6\uff0c\u5e94\u8fd4\u56de ",["code","true"],"\uff0c\u53cd\u4e4b\u5219\u8fd4\u56de ",["code","false"],"\u3002"],["td","boolean or function(inputValue, option)"],["td","true"]],["tr",["td","optionLabelProp"],["td","\u56de\u586b\u5230\u9009\u62e9\u6846\u7684 Option \u7684\u5c5e\u6027\u503c\uff0c\u9ed8\u8ba4\u662f Option \u7684\u5b50\u5143\u7d20\u3002\u6bd4\u5982\u5728\u5b50\u5143\u7d20\u9700\u8981\u9ad8\u4eae\u6548\u679c\u65f6\uff0c\u6b64\u503c\u53ef\u4ee5\u8bbe\u4e3a ",["code","value"],"\u3002"],["td","string"],["td",["code","children"]]],["tr",["td","placeholder"],["td","\u8f93\u5165\u6846\u63d0\u793a"],["td","string"],["td","-"]],["tr",["td","value"],["td","\u6307\u5b9a\u5f53\u524d\u9009\u4e2d\u7684\u6761\u76ee"],["td","string","|","string","[","]","|","{ key: string, label: string","|","ReactNode }","|","Array","<","{ key: string, label: string","|","ReactNode }>"],["td","\u65e0"]],["tr",["td","onChange"],["td","\u9009\u4e2d option\uff0c\u6216 input \u7684 value \u53d8\u5316\u65f6\uff0c\u8c03\u7528\u6b64\u51fd\u6570"],["td","function(value)"],["td","\u65e0"]],["tr",["td","onSearch"],["td","\u641c\u7d22\u8865\u5168\u9879\u7684\u65f6\u5019\u8c03\u7528"],["td","function(value)"],["td","\u65e0"]],["tr",["td","onSelect"],["td","\u88ab\u9009\u4e2d\u65f6\u8c03\u7528\uff0c\u53c2\u6570\u4e3a\u9009\u4e2d\u9879\u7684 value \u503c"],["td","function(value, option)"],["td","\u65e0"]]]],["h2","\u65b9\u6cd5"],["table",["thead",["tr",["th","\u540d\u79f0"],["th","\u63cf\u8ff0"]]],["tbody",["tr",["td","blur()"],["td","\u79fb\u9664\u7126\u70b9"]],["tr",["td","focus()"],["td","\u83b7\u53d6\u7126\u70b9"]]]]]}}});