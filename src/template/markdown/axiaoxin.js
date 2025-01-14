export default `
/**全局设置**/
#nice {
  font-size:18px;
  margin: 20px 0;
}
#nice p {
  line-height: 1.8;
  font-size:18px;
  margin: 6px 0;
}
#nice p + p {
  margin: 24px 0 6px 0;
}
#nice a {
  color: #008aff;
  border-bottom: 1px solid #008aff;
  text-decoration: none;
  font-weight: normal;
}
#nice a span {
  color: #008aff;
  border-bottom: 1px solid #008aff;
}

/**TOC**/
#nice .table-of-contents li {
  font-size: 16px;
}

/**图片**/
#nice img {
  box-shadow: rgba(170, 170, 170, 0.48) 0px 0px 6px 0px;
  border-radius: 6px;
  margin: 18px auto 0;
}
#nice figcaption,
#nice .imageflow-caption{
  font-size:12px;
  margin-bottom: 12px;
  margin-top: 2px;
}
#nice .imageflow-layer1 img{
  margin:0;
  box-shadow: none;
  border-radius: 0;
}

/**标题**/
#nice h1,
#nice h2,
#nice h3,
#nice h4,
#nice h5,
#nice h6 {
  margin: 36px auto 27px;
  line-height: 1.4;
}
#nice h2 {
  font-size: 24px;
  text-align: center;
  display: table;
  font-weight: bolder;
  margin: 54px auto 36px;
  padding: 6px 0;
  border-bottom: 4px solid #404040;

}
#nice h3 {
  font-size: 22px;
  display: inline-block;
  padding: 3px 0;
  border-bottom: 2px dashed #404040;
}
#nice h4 {
  font-size: 20px;
  padding-left: 8px;
  border-left: 2px solid #404040;
}
#nice h5,
#nice h6 {
  font-size: 19px;
}

/**列表**/
#nice > ul, #nice > ol {
  margin-top: 18px;
  margin-bottom: 18px;
}
#nice .table-of-contents > ul,
#nice .table-of-contents > ol {
  border: 1px solid #ddd;
  font-size: 16px;
  padding: 16px 8px 16px 32px;
}

#nice .table-of-contents > ul li,
#nice .table-of-contents > ol li {
  margin-bottom: 4px;
  font-size: 16px;
}
#nice .table-of-contents > ul li section,
#nice .table-of-contents > ol li section {
  font-size: 16px;
}
#nice .table-of-contents > ul ul,#nice .table-of-contents > ol ol {
  margin-top: 2px;
  margin-bottom: 4px;
}
#nice .table-of-contents > ul ul li,
#nice .table-of-contents > ol ol li {
  margin-bottom: 2px
}

#nice > ol {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px 36px;
}
#nice > ul > li, #nice > ol > li{
    margin: 10px 0;
}


/**引用**/
#nice blockquote {
  color: #444;
  border-left: none;
  font-style: italic;
  font-size: 16px;
  position: relative;
  background: #fafafa;
  border-radius: 8px;
  padding-top: 0px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom:16px;
}
#nice > blockquote {
  border-left: 6px solid #07C160;
  margin: 18px auto;
}
#nice blockquote p {
  font-size: 16px;
}
#nice blockquote p + p {
    margin: 0;
}
#nice blockquote::before {
  font-family: Arial;
  content: "“";
  color: #07C160;
  font-size: 40px;
  font-weight: bold;
  display: block;
  height: 48px;
}

/** 行内代码 **/
#nice p code, #nice li code {
    padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px;
}

/**表格**/
#nice table tr th,
#nice table tr td {
  font-size:15px;
}

/**参考资料**/
#nice .footnotes-sep {
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
}
#nice .footnote-word {
    color: #008aff;
    font-weight: normal;
}
#nice .footnote-ref {
  font-weight: normal;
  color: #008aff;
}
#nice .footnote-item p em {
  font-style: normal;
  border-bottom: 1px dashed #888;
}
#nice .footnote-num {
  width: 22px;
}
`;
