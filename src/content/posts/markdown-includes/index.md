---
title: "Markdown 文件嵌入"
published: 2026-09-02
description: "构建时的 Markdown 文件与片段嵌入."
tags: [Markdown, Shirone]
category: 指南
draft: false
---

Shirone 可以嵌入一个本地 Markdown 文件,或其中经过安全校验的片段.

<!-- @include: src/content/snippets/include-example.md#public-api -->

完整文件形式与行范围形式同样受支持:

```markdown
<!-- @include: src/content/snippets/include-example.md -->
<!-- @include: src/content/snippets/include-example.md{1-4} -->
<!-- @include: src/content/snippets/include-example.md{5-} -->
<!-- @include: src/content/snippets/include-example.md{-4} -->
```

围栏代码块中的 include 注释将保持字面文本,不会被解析.
