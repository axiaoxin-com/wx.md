export default `
/* 自定义样式，实时生效，浏览器实时缓存 */

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#nice {
  line-height: 1.75;
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
}

/* 二级标题 */
#nice h2 {
  text-align: center;
  line-height: 1.75;
  font-size: 19.2px;
  display: table;
  padding: 0 0.4em;
  margin: 4em auto 2em;
  color: #fff;
  background: #009874;
  font-weight: bold
}

/* 三级标题 */
#nice h3 {
  text-align: center;
  line-height: 1.2;
  font-size: 17.6px;
  display: table;
  padding: 2px 8px;
  border-bottom: 3px solid #009874;
  margin: 2em auto 1em;
  color: hsl(0 0% 3.9%);
  font-weight: bold;
}

/* 四级标题 */
#nice h4 {
  text-align: left;
  line-height: 1.1;
  font-size: 17px;
  padding-left: 6px;
  border-left: 3px solid #009874;
  margin: 2em 0px 0.5em;
  font-weight: bold
}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice blockquote {
  text-align: left;
  line-height: 1.75;
  font-size: 16px;
  font-style: normal;
  padding: 1em;
  border-left: 4px solid #009874;
  border-radius: 6px;
  color: rgba(0,0,0,0.5);
  background: #f7f7f7;
  margin-bottom: 1em;
}

/* 引用文字 */
#nice blockquote p {
  text-align: left;
  line-height: 1.75;
  font-size: 1em;
  display: block;
  letter-spacing: 0.1em;
  color: hsl(0 0% 3.9%);
}

/* 链接
 * border-bottom: 1px solid #009688;
 */
#nice a span {
  color: #009874;
  border-bottom: 1px solid #009874;
  font-weight: normal;
}

/* 加粗 */
#nice strong {
  color: #009874;
  font-weight: bold;
}

/* 加粗斜体 */
#nice em strong {
  color: #009874;
  font-weight: bold;
}

/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
#nice hr {
  border-style: solid;
  border-width: 2px 0 0;
  border-color: rgba(0,0,0,0.1);
  -webkit-transform-origin: 0 0;
  -webkit-transform: scale(1, 0.5);
  transform-origin: 0 0;
  transform: scale(1, 0.5);
  height: 0.4em;
  margin: 1.5em 0
}

/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
#nice img {
  display: block;
  width: 100% !important;
  margin: 0.1em auto 0px;
  border-radius: 4px
}

/* 行内代码 */
#nice p code, #nice li code {
  font-size: 90%; color: #d14; background: rgba(27,31,35,.05); padding: 3px 5px; border-radius: 4px
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
#nice .footnotes-sep:before {
  color: #009874;
}
`;
