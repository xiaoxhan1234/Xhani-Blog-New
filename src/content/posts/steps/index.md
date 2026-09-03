---
title: Markdown 步骤
published: 2026-09-02
description: 在 Shirone 中将顺序性操作说明呈现为紧凑、无障碍的步骤流程.
tags: [Markdown, 步骤, Shirone]
category: 指南
lang: zh_CN
draft: false
---

对于顺序至关重要的流程,请使用步骤组件.它能保持文章连贯的阅读节奏:一条内敛的序号栏提供方位指引,而标题、段落、链接、列表与代码都保留其原生的 Markdown 语义.

## 有序列表语法

将一个 Markdown 有序列表包裹在 `:::steps` 容器中.每个顶层列表项即成为一个步骤.

````markdown
:::steps[Production deployment]
1. **Clone and prepare the workspace**

   Clone the repository and enter the project directory.

   ```powershell
   git clone https://github.com/LyraVoid/Shirone.git
   Set-Location Shirone
   ```

2. **Install dependencies**

   Use the repository's pinned package manager.

   ```powershell
   pnpm.cmd install
   ```

3. **Run project checks**

   Confirm Astro diagnostics and TypeScript checks pass.

   ```powershell
   npx.cmd astro check
   pnpm.cmd type-check
   ```

4. **Build the production site**

   Generate the static site and search index.

   ```powershell
   pnpm.cmd build
   ```
:::
````

:::steps[生产环境部署]
1. **克隆并准备工作区**

   克隆仓库并进入项目目录.

   ```powershell
   git clone https://github.com/LyraVoid/Shirone.git
   Set-Location Shirone
   ```

2. **安装依赖**

   使用仓库中锁定的包管理器.

   ```powershell
   pnpm.cmd install
   ```

3. **运行项目检查**

   确认 Astro 诊断与 TypeScript 类型检查均通过.

   ```powershell
   npx.cmd astro check
   pnpm.cmd type-check
   ```

4. **构建生产站点**

   生成静态站点与搜索索引.

   ```powershell
   pnpm.cmd build
   ```
:::

## 选项

- `:::steps[标题]` 或 `title="标题"` 可添加可见标签与无障碍名称.
- `start=4` 可更改首个显示步骤的序号.
- 容器中必须且只能包含一个有序列表.无效或混用的输入会保持为普通可读的 Markdown,而不会被启发式地解析.
- 渲染在站点构建期间完成,不会增加任何客户端 JavaScript 或网络请求.
