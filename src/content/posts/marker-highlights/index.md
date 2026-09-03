---
title: Markdown 标记高亮
published: 2026-09-02
description: 在 Shirone Markdown 中使用由设计令牌驱动的标记语法高亮关键短语.
tags: [Markdown, 排版, Shirone]
category: 指南
lang: zh_CN
draft: false
---

标记高亮能让某个特定短语获得关注,同时又不会让所在段落变成独立组件.它们在构建时渲染为原生 `<mark>` 元素,并继承当前激活的 M3E 色彩系统.

## 默认强调

当希望由文章的主色来承载强调时,请使用 `==text==` 这在普通段落中突出 ==读者应当记住的一个结论== 时非常有用.

当短语需要更强的层级时,标记中还可包含 ==嵌套的 **Markdown 强调**==.

## 语义化颜色

当语义需要不同的色调角色时,请添加后缀.可用的变体包括 `primary`、`secondary`、`tertiary`、`error` 和 `tip`.

- ==Primary 将短语与当前主题关联=={.primary}
- ==Secondary 保持辅助性区分的低调=={.secondary}
- ==Tertiary 增添独立的编辑信号=={.tertiary}
- ==Error 标识需要修正的情况=={.error}
- ==Tip 突出实用的操作指导=={.tip}

## 编写语法

```markdown
==Primary marker==

==Secondary marker=={.secondary}
==Tertiary marker=={.tertiary}
==Error marker=={.error}
==Tip marker=={.tip}
```

行内代码（如 `==literal marker syntax==`）与围栏示例会保持字面文本,因此文档可以讲解该语法而不会触发它.
