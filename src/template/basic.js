export default `/*默认样式，最佳实践*/

/*全局属性*/
#nice {
  font-size: 16px;
  color: black;
  padding: 0 8px;
  line-height: 1.6;
  word-spacing: 0px;
  letter-spacing: 0px;
  word-break: break-word;
  word-wrap: break-word;
  text-align: left;
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", "WenQuanYi Micro Hei", "Microsoft JhengHei", system-ui, sans-serif, Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  /* margin-top: -10px; 解决开头空隙过大问题*/
}

/*段落*/
#nice p {
  font-size: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  line-height: 26px;
  color: black;
}

/*标题*/
#nice h1,
#nice h2,
#nice h3,
#nice h4,
#nice h5,
#nice h6 {
  margin-top: 30px;
  margin-bottom: 15px;
  padding: 0px;
  font-weight: bold;
  color: black;
}
#nice h1 {
  font-size: 24px;
}
#nice h2 {
  font-size: 22px;
}
#nice h3 {
  font-size: 20px;
}
#nice h4 {
  font-size: 18px;
}
#nice h5 {
  font-size: 16px;
}
#nice h6 {
  font-size: 16px;
}

#nice h1 .prefix,
#nice h2 .prefix,
#nice h3 .prefix,
#nice h4 .prefix,
#nice h5 .prefix,
#nice h6 .prefix {
  display: none;
}

#nice h1 .suffix
#nice h2 .suffix,
#nice h3 .suffix,
#nice h4 .suffix,
#nice h5 .suffix,
#nice h6 .suffix {
  display: none;
}

/*列表*/
#nice ul,
#nice ol {
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 25px;
  color: black;
}
#nice ul {
  list-style-type: disc;
}
#nice ul ul {
  list-style-type: square;
}

#nice ol {
  list-style-type: decimal;
}

#nice li section {
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: 26px;
  text-align: left;
  color: rgb(1,1,1); /* 只要是纯黑色微信编辑器就会把color这个属性吞掉。。。*/
}

/*引用*/
#nice blockquote {
  display: block;
  font-size: 0.9em;
  overflow: auto;
  overflow-scrolling: touch;
  border-left: 3px solid rgba(0, 0, 0, 0.4);
  background: rgba(0, 0, 0, 0.05);
  color: #6a737d;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
}

#nice blockquote p {
  margin: 0px;
  color: black;
  line-height: 26px;
}

#nice .table-of-contents li {
  font-size: 15px;
}
#nice .table-of-contents a {
  border: none;
  color: black;
  font-weight: normal;
}
#nice .table-of-contents::before {
    content: "文章目录"; /* 设置显示的标题 */
    display: block; /* 将伪元素设置为块级元素 */
    font-size: 20px; /* 设置标题的字体大小 */
    font-weight: bold; /* 设置标题为加粗 */
    margin-bottom: 12px; /* 设置与目录内容之间的间距 */
    color: black; /* 设置标题颜色 */
}
#nice .table-of-contents > ul li,
#nice .table-of-contents > ol li {
  margin-bottom: 4px;
}
#nice .table-of-contents > ul li section,
#nice .table-of-contents > ol li section {
  font-size: 15px;
}
#nice .table-of-contents > ul ul,#nice .table-of-contents > ol ol {
  margin-top: 2px;
  margin-bottom: 4px;
}
#nice .table-of-contents > ul ul li,
#nice .table-of-contents > ol ol li {
  margin-bottom: 2px
}

/*链接*/
#nice a {
  text-decoration: none;
  color: #1e6bb8;
  word-wrap: break-word;
  font-weight: bold;
  border-bottom: 1px solid #1e6bb8;
}

/*加粗*/
#nice strong {
  font-weight: bold;
  color: black;
}

/*斜体*/
#nice em {
  font-style: italic;
  color: black;
}

/*加粗斜体*/
#nice em strong {
  font-weight: bold;
  color: black;
}

/*删除线*/
#nice del {
  font-style: italic;
  color: black;
}

/*分隔线*/
#nice hr {
  height: 1px;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  border-top: 1px solid black;
}

/*代码块*/
#nice pre {
  margin-top: 10px;
  margin-bottom: 10px;
}
#nice pre code {
  display: -webkit-box;
  font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;
  border-radius: 0px;
  font-size: 12px;
  -webkit-overflow-scrolling: touch;
}
#nice pre code span {
  line-height: 26px;
}

/*行内代码*/
#nice p code,
#nice li code {
  font-size: 14px;
  word-wrap: break-word;
  padding: 2px 4px;
  border-radius: 4px;
  margin: 0 2px;
  color: #1e6bb8;
  background-color: rgba(27,31,35,.05);
  font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;
  word-break: break-all;
}

/*图片*/
#nice img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}

/*图片*/
#nice figure {
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
}

/*图片描述文字*/
#nice figcaption {
  margin-top: 4px;
  text-align: center;
  color: #888;
  font-size: 12px;
}


/*表格容器 */
#nice .table-container{
  overflow-x: auto;
}

/*表格*/
#nice table {
  display: table;
  text-align: left;
}
#nice tbody {
  border: 0;
}

#nice table tr {
  border: 0;
  border-top: 1px solid #ccc;
  background-color: white;
}

#nice table tr:nth-child(2n) {
  background-color: #F8F8F8;
}

#nice table tr th,
#nice table tr td {
  font-size: 16px;
  border: 1px solid #ccc;
  padding: 5px 10px;
  text-align: left;
}

#nice table tr th {
  font-weight: bold;
  background-color: #f0f0f0;
}

/* 表格最小列宽4个汉字 */
#nice table tr th:nth-of-type(n),
#nice table tr td:nth-of-type(n){
  min-width:85px;
}

/* 微信代码块 */
#nice .code-snippet__fix {
  word-wrap: break-word !important;
  font-size: 14px;
  margin: 10px 0;
  display: block;
  color: #333;
  position: relative;
  background-color: rgba(0,0,0,0.03);
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  display: flex;
  line-height: 20px;
}
#nice .code-snippet__fix pre {
  margin-bottom: 10px;
  margin-top: 0px;
}
#nice .code-snippet__fix .code-snippet__line-index {
  flex-shrink: 0;
  height: 100%;
  padding: 1em;
  list-style-type: none;
  padding: 16px;
  margin: 0;
}
#nice .code-snippet__fix .code-snippet__line-index li {
  list-style-type: none;
  text-align: right;
  line-height: 26px;
  color: black;
  margin: 0;
}
#nice .code-snippet__fix .code-snippet__line-index li::before {
  min-width: 1.5em;
  text-align: right;
  left: -2.5em;
  display: inline;
  color: rgba(0,0,0,0.3);
}
#nice .code-snippet__fix pre {
  overflow-x: auto;
  padding: 16px;
  padding-left: 0;
  white-space: normal;
  flex: 1;
  -webkit-overflow-scrolling: touch;
}
#nice .code-snippet__fix code {
  text-align: left;
  font-size: 14px;
  display: block;
  white-space: pre;
  display: flex;
  position: relative;
  font-family: Consolas,"Liberation Mono",Menlo,Courier,monospace;
  padding: 0px;
}

#nice .footnote-word {
  color: #1e6bb8;
  font-weight: bold;
}

#nice .footnote-ref {
  color: #1e6bb8;
  font-weight: bold;
}

#nice .footnote-item {
  display: flex;
}

#nice .footnote-num {
  display: inline;
  width: 10%; /*神奇，50px就不可以*/
  background: none;
  font-size: 80%;
  opacity: 0.6;
  line-height: 26px;
  font-family: ptima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

#nice .footnote-item p {
  display: inline;
  font-size: 14px;
  width: 90%;
  padding: 0px;
  margin: 0;
  line-height: 26px;
  color: black;
  word-break:break-all;
  width: calc(100%-50)
}

#nice sub, sup {
  line-height: 0;
}

#nice .footnotes-sep {
  margin-top: 48px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
}
#nice .footnotes-sep:before {
  content: "参考资料";
  display: block;
}

/* 解决公式问题 */
#nice .block-equation {
  display:block;
  text-align: center;
  overflow: auto;
  display: block;
  -webkit-overflow-scrolling: touch;
}

#nice .block-equation svg {
  max-width: 300% !important;
  -webkit-overflow-scrolling: touch;
}

#nice .inline-equation {
}

#nice .inline-equation svg {
}

#nice .imageflow-layer1 {
  margin-top: 1em;
  margin-bottom: 0.5em;
  white-space: normal;
  border: 0px none;
  padding: 0px;
  overflow: hidden;
}

#nice .imageflow-layer2 {
  white-space: nowrap;
  width: 100%;
  overflow-x: scroll;
}

#nice .imageflow-layer3 {
  display: inline-block;
  word-wrap: break-word;
  white-space: normal;
  vertical-align: middle;
  width: 100%;
}

#nice .imageflow-img {
  display: inline-block;
}

#nice .imageflow-caption {
  text-align: center;
  margin-top: 0px;
  padding-top: 0px;
  color: #888;
  font-size: 12px;
}

#nice .nice-suffix-juejin-container {
  margin-top: 20px !important;
}

#nice figure a {
  border: none;
}

#nice figure a img {
  margin: 0px;
}

#nice figure {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* 图片链接嵌套 */
#nice figure a {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 图片链接嵌套，图片解释 */
#nice figure a + figcaption {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: -35px;
  background: rgba(0,0,0,0.7);
  color: white;
  line-height: 35px;
  z-index: 20;
}


/** 文章结尾 **/
#nice:after{
  content:'- 本文采用「人言兑.md」自动排版 -';
  font-size:10px;
  display:block;
  text-align:center;
  margin-top:50px;
  color:#999;
  border-bottom:1px solid #eee;
}
`;
