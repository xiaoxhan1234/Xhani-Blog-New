---
title: Markdown 缩略语
published: 2026-09-02
description: 一次性定义常见缩略词,让完整含义在正文行文中随时可取.
tags: [Markdown, 排版, Shirone]
category: 指南
lang: zh_CN
draft: false
---

缩略语让技术写作保持简洁,同时又为需要的读者保留完整术语.已定义的术语会渲染为原生 `abbr` 元素,其完整含义在悬停时可见,并可被辅助技术读取.

## 实际效果

在 JavaScript 执行前,SSR 优先的输出就能让初始文档可见.衡量其阅读体验时,LCP 与 CLS 可以揭示首屏内容是否足够快速与稳定.

缩略语也可以与普通 Markdown 相邻出现,例如 **SSR** 相关说明;但字面代码如 `SSR`,以及像 [LCP documentation](https://web.dev/articles/lcp) 这样的链接,则不会被处理.

## 定义术语

定义可放在同一篇 Markdown 文档中的任意位置.它们不会渲染为可见段落,并且只有该文章中匹配的术语才会获得语义化缩略语处理.

```markdown
*[SSR]: Server-Side Rendering
*[LCP]: Largest Contentful Paint
*[CLS]: Cumulative Layout Shift

SSR makes an HTML response available before client code runs.
```

*[SSR]: Server-Side Rendering
*[LCP]: Largest Contentful Paint
*[CLS]: Cumulative Layout Shift

## 编写边界

术语必须以字母或数字开头,可包含字母、数字、句点、下划线、加号和连字符.每条定义仅作用于当前文章;无效或重复的定义将保持为普通 Markdown,而不会静默替换其他术语.
