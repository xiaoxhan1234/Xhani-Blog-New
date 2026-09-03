---
title: Markdown 折叠面板
published: 2026-09-02
description: 将可选的 Markdown 内容归组到紧凑、无障碍的 M3E 披露面板中.
tags: [Markdown, 折叠, Shirone]
category: 指南
lang: zh_CN
draft: false
---

折叠面板可将相关的可选细节归集到一个紧凑的分组中.标题与正文都保留行内及块级 Markdown 语法,而原生披露语义确保每个面板在无需客户端 JavaScript 的情况下也能正常使用.

## 独立面板

默认情况下,各个条目相互独立地展开.在标题前添加 `:+` 前缀,可使该条目初始即为展开状态；添加 `:-` 前缀,则可在分组使用 `expand` 时让该条目保持关闭.

::: collapse
- **依赖包要求**

  请使用 Node.js 22 或更高版本,并在安装依赖前启用 Corepack.

- :+ 安装依赖

  在仓库根目录运行工作区包管理命令.

  ```powershell
  pnpm.cmd install
  ```

- 校验命令

  在构建生产产物前,先检查内容管道.

  - `pnpm.cmd check:manifest`
  - `npx.cmd astro check`
:::

## 手风琴模式

当只允许一个条目保持展开时,请添加 `accordion`.浏览器会直接对原生披露元素进行分组,因此展开另一项时会自动关闭前一项,且无需水合（hydration）.

::: collapse accordion expand
- 这里的 `expand` 有什么作用？

  当没有任何条目带有 `:+` 标记时,它会让第一个条目初始处于展开状态.

- 标题中可以使用 Markdown 吗？

  可以.标题支持行内**强调**和 `代码`,而面板正文则支持完整的块级 Markdown.

- 在窄屏设备上会怎样？

  内容内边距会自动收紧,长文本自动换行,内嵌代码则保留其独立的横向滚动区域.
:::

## 编写语法

````markdown
::: collapse accordion
- :+ First title

  First panel content.

- Second title with `code`

  Second panel content.
:::
````

容器必须且只能包含一个顶层无序列表.每个条目都需要一个标题段落、一个空行以及正文内容.若输入无效或混用,则会保留为普通可读的 Markdown 列表.
