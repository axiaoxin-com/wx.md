# 人言兑.md-公众号排版编辑器核心功能详解

请使用 **Chrome** 浏览器。

请阅读下方文本熟悉工具使用方法，本文可直接拷贝到微信中预览。

欢迎使用「人言兑.md」这款免费公众号文章排版编辑器，该编辑器使用 Markdown 语法进行微信图文排版。

人言兑.md 支持将 Markdown 文章转为微信公众号、知乎和稀土掘金等自媒体平台的文章排版编辑，同时支持将编辑的文章内容到处为 PDF 或 Markdown 文件，同时精选制作了不同排版风格的文章主题，这些主题都是经过精心挑选优化。

希望这个免费的公众号排版工具能为你在微信公众号文章的编辑排版上给到一点帮助，如有使用问题或 BUG ，可通过我的微信公众号联系。

![欢迎扫码关注我的公众号](https://pic.rmb.bdstatic.com/bjh/3eacca401b/241115/e37c7891297fd64d6d690e59adc9eac0.png)

## Markdown 转公众号图文基础排版

下面是「人言兑.md」微信公众号图文排版编辑器的基本 Markdown 语法排版说明。

### 标题

在文字前书写不同数量的`#`可以完成不同的标题，如下：

```markdown
#  一级标题

#  二级标题

##  三级标题
```

**SEO 优化建议**：如果文章发布时已有填写标题的位置，则不建议在文章内部再次添加一级标题。合理使用不同级别的标题，让你的文章结构更加清晰。

### 无序列表

无序列表的使用，在符号`-`后加空格使用。如下：

```markdown
-  无序列表  1
-  无序列表  2
-  无序列表  3
```

- 无序列表 1
- 无序列表 2
- 无序列表 3

如果要控制列表的层级，则需要在符号`-`前使用空格。如下：

```markdown
-  无序列表  1
-  无序列表  2
   -  无序列表  2.1
   -  无序列表  2.2
```

- 无序列表 1
- 无序列表 2
  - 无序列表 2.1
  - 无序列表 2.2

**由于微信原因，最多支持到二级列表**。

### 有序列表

有序列表的使用，在数字及符号`.`后加空格后输入内容，如下：

```markdown
1.  有序列表  1
2.  有序列表  2
3.  有序列表  3
```

1.  有序列表 1
2.  有序列表 2
3.  有序列表 3

### 粗体和斜体

粗体的使用是在需要加粗的文字前后各加两个`*`。

而斜体的使用则是在需要斜体的文字前后各加一个`*`。

如果要使用粗体和斜体，那么就是在需要操作的文字前后加三个`*`。如下：

```markdown
**这个是粗体**

_这个是斜体_

**_这个是粗体加斜体_**
```

**这个是粗体**

_这个是斜体_

**_这个是粗体加斜体_**

### 链接

微信公众号仅支持公众号文章链接，即域名为`https://mp.weixin.qq.com/`的合法链接。使用方法如下所示：

在 Markdown 转公众号排版编辑器中，使用以下语法来为文字添加链接：

```markdown
[初识「人言兑」](https://mp.weixin.qq.com/s/k6P0Sk96VPGo6D59tMM95Q)
```

效果：[初识「人言兑」](https://mp.weixin.qq.com/s/k6P0Sk96VPGo6D59tMM95Q)

链接如果不是 `https://mp.weixin.qq.com/` 开头的合法微信公众号文章链接，则无法在公众号文章内点击跳转，微信公众号文章中的站外链接可以通过“微信外链转脚注”功能，在文章底部以参考资料的形式列出该链接。

比如站外链接：[免费 Markdown 转微信公众号图文排版编辑器：「人言兑.md」](https://blog.axiaoxin.com/post/md2wechat/)

### 引用

引用的格式是在符号 `>` 后面书写文字，文字的内容可以包含标题、链接、图片、粗体和斜体等。

引用语法及效果如下：

> **引用示例**
>
> 读一本好书，就是在和高尚的人谈话。 **——歌德**
>
> [免费 Markdown 转微信公众号图文排版编辑器：「人言兑.md」](https://blog.axiaoxin.com/post/md2wechat/)
>
> ![这里写图片描述](https://pic.rmb.bdstatic.com/bjh/3eacca401b/241115/e37c7891297fd64d6d690e59adc9eac0.png)

### 分割线

可以在一行中用三个以上的减号来建立一个分隔线，同时需要在分隔线的上面空一行。如下：

```markdown
---
```

分割线效果如下：

---

使用分割线时需注意，必须换行，上面要有一个空行，否则`---`上方的文字将会解析为标题。

### 删除线

删除线的使用，在需要删除的文字前后各使用两个`~`，如下：

```markdown
~~这是要被删除的内容。~~
```

~~这是要被删除的内容。~~

### 表格

可以使用冒号来定义表格的对齐方式，如下：

```markdown
| 姓名       | 年龄 |         工作 |
| :--------- | :--: | -----------: |
| 小可爱     |  18  |     吃可爱多 |
| 小小勇敢   |  20  |   爬棵勇敢树 |
| 小小小机智 |  22  | 看一本机智书 |
```

表格效果：

| 姓名       | 年龄 |         工作 |
| :--------- | :--: | -----------: |
| 小可爱     |  18  |     吃可爱多 |
| 小小勇敢   |  20  |   爬棵勇敢树 |
| 小小小机智 |  22  | 看一本机智书 |

宽度过长的表格可以滚动，可在自定义主题中调节宽度：

```markdown
| 姓名       | 年龄 |         工作 |      邮箱       |    手机     |
| :--------- | :--: | -----------: | :-------------: | :---------: |
| 小可爱     |  18  |     吃可爱多 | lovely@test.com | 18812345678 |
| 小小勇敢   |  20  |   爬棵勇敢树 | brave@test.com  | 17712345678 |
| 小小小机智 |  22  | 看一本机智书 | smart@test.com  | 16612345678 |
```

表格效果：

| 姓名       | 年龄 |         工作 |      邮箱       |    手机     |
| :--------- | :--: | -----------: | :-------------: | :---------: |
| 小可爱     |  18  |     吃可爱多 | lovely@test.com | 18812345678 |
| 小小勇敢   |  20  |   爬棵勇敢树 | brave@test.com  | 17712345678 |
| 小小小机智 |  22  | 看一本机智书 | smart@test.com  | 16612345678 |

### 图片

插入图片，如果是行内图片则无图例，否则有图例，格式如下：

```markdown
![这里写图片描述](https://pic.rmb.bdstatic.com/bjh/3eacca401b/241115/e37c7891297fd64d6d690e59adc9eac0.png)
```

![这里写图片描述](https://pic.rmb.bdstatic.com/bjh/3eacca401b/241115/e37c7891297fd64d6d690e59adc9eac0.png)

### 更多 Markdown 语法

更多 Markdown 标准语法请阅读：[Markdown 标准语法使用指南](https://blog.axiaoxin.com/post/markdown-guide/)

## 「人言兑.md」Markdown 特殊语法

### 脚注

**支持平台**：微信公众号、知乎。

脚注与链接的区别如下所示：

```markdown
链接：[文字](链接)
脚注：[文字](脚注解释 "脚注名字")
```

具体示例如下：

Markdown 转微信公众号文章排版用什么工具？为你推荐[人言兑.md](https://md.axiaoxin.com "最好用的Markdown转微信公众号排版编辑器")，一个免费的在线公众号排版工具。

[人言兑.md-公众号排版编辑器](“人言兑.md”是一个支持Markdown转微信公众号文章排版的编辑器。 "人言兑.md")免费有好用，包含大量主题供您选择。

脚注内容脚注内容会在文章末尾以参考资料的形式列出，请拉到最下面观看。

### 代码块

**支持平台**：微信公众号、知乎。

如果在一个行内需要引用代码，只要用反引号引起来就好，如下：

Use the `printf()` function.

在需要高亮的代码块的前一行及后一行使用三个反引号，同时**第一行反引号后面表示代码块所使用的语言**，如下：

```java
// FileName: HelloWorld.java
public class HelloWorld {
  // Java 入口程序，程序从此入口
  public static void main(String[] args) {
    System.out.println("Hello,World!"); // 向控制台打印一条语句
  }
}
```

支持以下语言种类：

```text
bash
clojure，cpp，cs，css
dart，dockerfile, diff
erlang
go，gradle，groovy
haskell
java，javascript，json，julia
kotlin
lisp，lua
makefile，markdown，matlab
objectivec
perl，php，python
r，ruby，rust
scala，shell，sql，swift
tex，typescript
verilog，vhdl
xml
yaml
```

如果想要更换代码主题，可在上方挑选，不支持代码主题自定义。

其中**微信代码主题与微信官方一致**，有以下注意事项：

- 带行号且不换行，代码大小与官方一致
- 需要在代码块处标志语言，否则无法高亮
- 粘贴到公众号后，用鼠标点代码块内外一次，完成高亮

diff 不能同时和其他语言的高亮同时显示，且需要调整代码主题为微信代码主题以外的代码主题才能看到 diff 效果，使用效果如下:

```diff
+ 新增项
- 删除项
```

**其他主题不带行号，可自定义是否换行，代码大小与当前编辑器一致**

### 数学公式

**支持平台**：微信公众号、知乎。

行内公式使用方法，比如这个化学公式：

```markdown
$\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}$
```

展示效果：

$\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}$

块公式使用方法如下：

```markdown
$$H(D_2) = -\left(\frac{2}{4}\log_2 \frac{2}{4} + \frac{2}{4}\log_2 \frac{2}{4}\right) = 1$$
```

展示效果：

$$H(D_2) = -\left(\frac{2}{4}\log_2 \frac{2}{4} + \frac{2}{4}\log_2 \frac{2}{4}\right) = 1$$

矩阵：

```markdown
$$
  \begin{pmatrix}
  1 & a_1 & a_1^2 & \cdots & a_1^n \\
  1 & a_2 & a_2^2 & \cdots & a_2^n \\
  \vdots & \vdots & \vdots & \ddots & \vdots \\
  1 & a_m & a_m^2 & \cdots & a_m^n \\
  \end{pmatrix}
$$
```

展示效果：

$$
  \begin{pmatrix}
  1 & a_1 & a_1^2 & \cdots & a_1^n \\
  1 & a_2 & a_2^2 & \cdots & a_2^n \\
  \vdots & \vdots & \vdots & \ddots & \vdots \\
  1 & a_m & a_m^2 & \cdots & a_m^n \\
  \end{pmatrix}
$$

目前测试如果公式量过大，在 Chrome 下会存在粘贴后无响应，但是在 Firefox 中始终能够成功。

### TOC

**支持平台**：微信公众号、知乎。

TOC 全称为 **Table of Content**，列出全部标题。在文章中加入标签 `[TOC]` 即可自动生成文章目录。

目录效果如下：

[TOC]

由于微信只支持到二级列表，本工具仅支持二级标题和三级标题的显示。

### 注音符号

**支持平台**：微信公众号。

支持注音符号，用法如下：

```markdown
公众号 “{人言兑|rén yán duì}” 是阿小信的个人博客同名公众号，主要用于记录日常生活中的思考、学习过程中的收获与自由职业实践经验。如果您对我的文章感兴趣，不妨订阅关注一下。
```

公众号 “{人言兑|rén yán duì}” 是阿小信的个人博客同名公众号，主要用于记录日常生活中的思考、学习过程中的收获与自由职业实践经验。如果您对我的文章感兴趣，不妨订阅关注一下。

### 横滑布局

**支持平台**：微信公众号。

通过`<![](url),![](url)>`这种语法设置横滑布局，具体用法如下：

```markdown
<![图1](https://mmbiz.qpic.cn/mmbiz_png/fzrfwxVqKtgJ5tgRNPfSbnjFYOiaTKqfwdpI9MbcwZzicCzVicD6eIJ1Jpcjv5iaheOO8C8obGoeS8XRWXhvFBxtxA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1),![图2](https://pic.rmb.bdstatic.com/bjh/3eacca401b/241115/e37c7891297fd64d6d690e59adc9eac0.png)>
```

<![图1](https://mmbiz.qpic.cn/mmbiz_png/fzrfwxVqKtgJ5tgRNPfSbnjFYOiaTKqfwdpI9MbcwZzicCzVicD6eIJ1Jpcjv5iaheOO8C8obGoeS8XRWXhvFBxtxA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1),![图2](https://pic.rmb.bdstatic.com/bjh/3eacca401b/241115/e37c7891297fd64d6d690e59adc9eac0.png)>

### 设置图片尺寸

在「人言兑.md」中，可以通过在图片尾部添加宽度和高度控制 Markdown 中的图片大小，用法如下：

```
![同时设置宽度和高度](https://pic.rmb.bdstatic.com/bjh/3eacca401b/241115/e37c7891297fd64d6d690e59adc9eac0.png =240x120)
```

![同时设置宽度和高度](https://pic.rmb.bdstatic.com/bjh/3eacca401b/241115/e37c7891297fd64d6d690e59adc9eac0.png =240x120)

```
![只设置宽度，推荐使用百分比](https://pic.rmb.bdstatic.com/bjh/3eacca401b/241115/e37c7891297fd64d6d690e59adc9eac0.png =40%x)
```

![只设置宽度，推荐使用百分比](https://pic.rmb.bdstatic.com/bjh/3eacca401b/241115/e37c7891297fd64d6d690e59adc9eac0.png =40%x)

该语法比较特殊，其他 Markdown 编辑器不完全通用。

支持 jpg、png、gif、svg 等图片格式，**其中 svg 文件仅可在微信公众平台中使用**，svg 文件示例如下：

```
![](https://upload.wikimedia.org/wikipedia/commons/SVG_Logo.svg)
```

**免费图床链接**：关于图片链接需要先上传图片才能获取链接，可以先以草稿形式将图片保存到一篇公众号文章草稿内，进入草稿箱点击草稿预览文章图片，复制图片链接即可。

### 图片卡片链接

图片还可以和链接嵌套使用，能够实现推荐卡片的效果，用法如下：

```markdown
[![人言兑.md-公众号排版编辑器功能介绍](https://pic.rmb.bdstatic.com/bjh/3eacca401b/241115/e37c7891297fd64d6d690e59adc9eac0.png)](https://blog.axiaoxin.com/post/md2wechat/)
```

[![人言兑.md-公众号排版编辑器功能介绍](https://pic.rmb.bdstatic.com/bjh/3eacca401b/241115/e37c7891297fd64d6d690e59adc9eac0.png)](https://blog.axiaoxin.com/post/md2wechat/)

### HTML

支持原生 HTML 语法，请写内联样式，如下：

```markdown
<span style="display:block;text-align:right;color:orangered;">橙色居右</span>
<span style="display:block;text-align:center;color:orangered;">橙色居中</span>
```

<span style="display:block;text-align:right;color:orangered;">橙色居右</span>
<span style="display:block;text-align:center;color:orangered;">橙色居中</span>

## 更多文档

更多文档请参考 [免费 Markdown 转微信公众号图文排版编辑器：「人言兑.md」](https://blog.axiaoxin.com/post/md2wechat/)
