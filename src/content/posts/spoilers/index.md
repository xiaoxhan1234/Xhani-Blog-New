---
title: Markdown 剧透块
published: 2026-09-02
description: 在隐藏行内答案的同时,保持剧透内容在 Shirone Markdown 中的可访问性.
tags: [Markdown, 无障碍, Shirone]
category: 指南
lang: zh_CN
draft: false
---

剧透块可以在不从文档中移除内容的前提下,隐藏简短的答案或情节细节.悬停、聚焦或激活原生控件即可显示内容.

## 行内细节

答案是 :spoiler[**42**],而这句话在其周围仍是普通的 Markdown.

剧透块可以包含 `行内代码` 以及 :spoiler[更长的细节内容并带有 **强调**].

## 编写语法

```markdown
The answer is :spoiler[42].
```

生成的 HTML 使用带有 `aria-expanded` 状态的原生按钮.在没有 JavaScript 的情况下,悬停与聚焦仍可显示文本;可选的运行时脚本则额外支持点击与键盘切换.
