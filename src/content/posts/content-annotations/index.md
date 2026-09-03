---
title: 内容注释
published: 2026-09-02
description: 为 Shirone 文章添加紧凑、无障碍的辅助注释,同时不打断阅读节奏.
tags: [Markdown, 注释, Shirone]
category: 指南
lang: zh_CN
draft: false
---

内容注释让辅助性的上下文紧邻某个句子,又不直接置于阅读流之中.激活这个小小的注释标记即可显示其内容.

## 基础语法

在普通行文中添加一个 `[+label]` 引用,然后在同一篇文章的其他位置定义与之匹配的注释.

```markdown
Astro renders most of a page ahead of time and hydrates **interactive islands** [+islands] only when they need to become interactive.

[+islands]:
  An island is an interactive UI component surrounded by static HTML. This keeps the default page lightweight while preserving focused interactivity.
```

Astro 会提前渲染页面的大部分内容,只在 **交互式孤岛** [+islands] 需要变为可交互时才对其进行水合.

[+islands]:
  孤岛是指被静态 HTML 包围的交互式 UI 组件.这能在保持页面默认轻量化的同时,保留定向的交互能力.

## 富文本内容

定义中可以包含段落、强调、链接、列表以及行内代码 [+rich-note],而其所在的句子仍能正常继续.

[+rich-note]:
  **编写建议**

  - 让第一句话自身就能独立表意.
  - 当读者可能需要一手来源时,使用链接.
  - 优先使用简短的示例,例如 `client:visible`.

  完整的模型说明请参阅 [Astro 孤岛文档](https://docs.astro.build/en/concepts/islands/).

## 多处定义

复用同一个标签 [+review],即可在一个标记背后依次呈现一组相关的简短注释.

[+review]: 从那个会改变读者下一步行动的决定开始.
[+review]: 将实现层面的证据与背景上下文分开.
[+review]: 删去那些本应放在正文、而非注释中的细节.

像 `[+missing]` 这样未定义的引用会保持为普通文本,因此未写完的定义永远不会生成一个空白控件.
