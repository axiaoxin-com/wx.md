export default `/* 自定义样式，实时生效，浏览器实时缓存 */

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
 #nice {
  font-size:16px;
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", "WenQuanYi Micro Hei", "Microsoft JhengHei", system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

/*图片下提示*/
#nice figcaption,
#nice .imageflow-caption{
  font-size:12px;
  margin-bottom: 4px;
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  font-size:16px;
}

/* 二级标题 */
#nice h2 {
  	text-align:center;
  	position:relative;
    font-size: 20px;
    color: black;
    line-height: 1.2;
    padding-top: 8px;
    padding-bottom: 8px;
    margin: 64px 32px 32px;
    border: 1px solid #000;
}

#nice h2:before{
  content: ' ';
  float: left;
  display: block;
  width: 90%;
  border-top: 1px solid #000;
  height: 1px;
  line-height: 1px;
  margin-left: -6px;
  margin-top: -12px;
}
#nice h2:after{
  content: ' ';
  float: right;
  display: block;
  width: 90%;
  border-bottom: 1px solid #000;
  height: 1px;
  line-height: 1px;
  margin-right: -6px;
  margin-top: 12px;
}
/* 二级标题内容 */
#nice h2 .content {
  display: block;
  margin: 6px 2px;
}
#nice h2 strong {
  color: #fff;
}
/* 二级标题前缀 */
#nice h2 .prefix {
  display: block;
  width: 3px;
  margin: 0 0 0 5%;
  height: 3px;
  line-height: 3px;
  overflow: hidden;
  background-color: #000;
  box-shadow:3px 0 #000,
    0 3px #000,
    -3px 0 #000,
    0 -3px #000;
}

/* 二级标题后缀 */
#nice h2 .suffix {
  display: block;
  width: 3px;
  margin: 0 0 0 95%;
  height: 3px;
  line-height: 3px;
  overflow: hidden;
  background-color: #000;
  box-shadow:3px 0 #000,
    0 3px #000,
    -3px 0 #000,
    0 -3px #000;
}

/* 三级标题 */
#nice h3 {
    background-color: #000;
    color: #fff;
    padding: 4px 8px;
    width: fit-content;
    font-size: 19px;
    margin: 32px auto 20px;
}
#nice h3 strong {
  color:#fff;
}

/* 四级标题 */
#nice h4 {
  padding-left: 8px;
  border-left: 4px solid #404040;
	font-size: 18px;
  margin: 20px 0px 8px;
}
#nice h4 strong {
  color:#fff;
}

/* 五、六级标题 */
#nice h5, #nice h6 {
	font-size: 17px;
  margin: 16px 0px 8px;
  padding: 0px 2px;
  border-bottom: 1px solid #000;
  display: table;
}
#nice h5 strong, #nice h6 strong {
  color:#fff;
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
  list-style-type: square;
}
/* 无序二级列表
 */
#nice ul li ul li{
  list-style-type: circle;
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}

/* 列表内容，不要设置li
 */
#nice li section {
  	font-weight: normal;
    font-size:16px;
}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice blockquote {
  border-left: 3px solid rgba(0, 0, 0, 0.65);
  border-right: 1px solid rgba(0, 0, 0, 0.65);
  background: rgb(249, 249, 249);
  font-style: italic;
  font-size: 15px;
}

/* 引用文字 */
#nice blockquote p {
}

/* 链接
 * border-bottom: 1px solid #009688;
 */
#nice a span {
}

/* 加粗 */
#nice strong {
}

/* 斜体 */
#nice em {
}

/* 加粗斜体 */
#nice em strong {
}

/* 删除线 */
#nice del {
}

/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
#nice img {
  box-shadow: rgba(170, 170, 170, 0.48) 0px 0px 6px 0px;
  border-radius:2px;
  margin-top:16px;
}
/* 行内代码 */
#nice p code, #nice li code {
  color:#ff6441;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre.custom {
  box-shadow: rgba(170, 170, 170, 0.48) 0px 0px 6px 0px;
  max-width: 100%;
  border-radius:4px;
  margin: 10px auto 0 auto;
}
#nice pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
  font-size:15px;
}

/* 脚注文字 */
#nice .footnote-word {
}

/* 脚注上标 */
#nice .footnote-ref {
}

/* "参考资料"四个字
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep {
  font-size: 15px;
  color: #888;
  border-top: 1px solid #eee;
  padding: 30px 0 10px 0px;
  background-color: transparent;
  margin: 0;
  width: 100%;
}
#nice .footnotes-sep:before {
  content:'参考资料';
}
#nice .footnotes{
  border-left:5px solid #eee;
  padding-left:10px;
}

/* 参考资料编号 */
#nice .footnote-num {
  font-size:14px;
  color:#999;
}

/* 参考资料文字 */
#nice .footnote-item p {
  font-size:14px;
  color:#999;
}

/* 参考资料解释 */
#nice .footnote-item p em {
  font-size:14px;
  color:#999;
  font-style: normal;
  border-bottom: 1px dashed #888;
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {
}

/*滑动幻灯片*/
#nice .imageflow-layer1 img{
  margin:0;
  box-shadow: none;
  border-radius: 0;
}

#nice .table-of-contents::after {
    content: ""; /* 无文本内容，只是一个分割线 */
    display: block; /* 将伪元素作为块级元素显示 */
    height: 1px; /* 设置分割线的高度 */
    background-color: #ccc; /* 设置分割线的颜色 */
    margin-top: 24px; /* 设置分割线与目录内容之间的间距 */
    width: 100%; /* 设置分割线的宽度为100% */
}
`;
