# CLAUDE.md

## 项目概述

个人博客站点，部署在 GitHub Pages，域名 wangdonghui.com。纯静态 HTML + CSS，无构建工具。

## 项目结构

```
index.html                  # 首页，文章卡片列表
posts/<slug>.html           # 文章页面
css/style.css               # 全局样式
images/<name>.jpg           # 文章配图
CNAME                       # 自定义域名
```

## 文章页面模板

每篇文章是独立 HTML 文件，结构：
- `<nav>` 导航栏
- `<article>` 内含 `article-header`（标题+标签）和 `article-content`（正文）
- `<footer>`
- 样式引用路径：`../css/style.css`
- 图片引用路径：`../images/<name>.jpg`

## 添加新文章的流程

1. 创建 `posts/<slug>.html`，使用已有文章作为模板
2. 在 `index.html` 的 `.post-list` 中添加对应的文章卡片（按时间倒序）
3. 配图放入 `images/` 目录，文件名用英文小写短横线命名

## 图片获取

使用 Playwright 从 Bing 图片搜索抓取：
1. 导航到 `https://cn.bing.com/images/search?q=<关键词>`
2. 用 `document.querySelectorAll('.iusc')` 获取结果，解析 `m` 属性中的 `murl` 字段
3. 用 curl 下载到 `images/` 目录
4. 文件名格式：英文小写，短横线分隔，如 `xigang-garden.jpg`

## 样式约定

- 最大内容宽度 720px
- 图片全宽、圆角 6px
- 图片下方用 `<p class="img-caption">` 添加说明
- 多图并排用 `<div class="img-group">`（grid 两列）
- 标签用 `<span class="tag">`

## 提交规范

- 中文 commit message
- 直接推送到 main 分支
- 一次改动一个 commit

## 常用命令

```bash
# 本地预览
npx serve .

# 推送
git add <files>
git commit -m "描述"
git push
```
