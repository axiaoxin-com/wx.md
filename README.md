# 人言兑.md ｜Markdown 转微信公众号文章-免费图文排版神器

人言兑.md - 专业的 Markdown 在线编辑器，支持一键转换微信公众号、知乎、稀土掘金等文章排版。特色功能：多图上传、语法高亮、自定义样式、公式渲染、HTML 转换、PDF 导出。免费使用，无需注册。

点击体验：<https://md.axiaoxin.com>

## 简介

Fork 自 [Markdown2Html](https://github.com/shenweiyan/Markdown2Html)，略有调整。

原出处：<https://github.com/mdnice/markdown-nice>

## 主题

```
src/template/index.js
src/template/markdown/xxx.js
```

<https://product.mdnice.com/themes>

## 开发部署

### 依赖 yarn：

```bash
npm install -g yarn
yarn upgrade
yarn install
```

### 本地运行

```bash
export NODE_OPTIONS=--openssl-legacy-provider
yarn start
```

### 编译

```bash
export NODE_OPTIONS=--openssl-legacy-provider
yarn run build
```

