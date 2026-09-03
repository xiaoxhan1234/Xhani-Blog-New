---
title: Shirone Markdown 增强功能
published: 2026-09-03
description: 探索Shirone的自定义Markdown扩展、富有表现力的组件和创作语法.
tags: [Markdown, 扩展, 主题, Shirone]
category: 指南
lang: zh_CN
draft: false
---

Shirone 提供了一系列主题专属的 Markdown 扩展和自定义语法容器.基于我们原生的unified AST处理管道构建,所有这些扩展在站点构建时都会渲染为无障碍、语义化的HTML **具备零客户端 JavaScript 水合开销** 与 **100% M3E 设计令牌对齐的特性**.

## 文件树

文件树可将多层级项目结构、源码目录层级以及终端目录输出,转换为紧凑且可交互的树状视图,并自动附带扩展名图标、差异高亮与可折叠分支.

### 1. 嵌套列表语法（`:::file-tree`）

当你以 Markdown 嵌套列表的形式直接编写文件层级时,请使用 `:::file-tree` 块指令.

```markdown
:::file-tree{title="Shirone source tree"}
- src
  - components/
    - ++ Navigation.svelte # added component
    - -- Button.astro # removed component
  - content
    - posts/
      - markdown-enhancements.md
  - layouts/
    - PostLayout.astro
  - plugins
    - markdown/
      - rehype-file-tree.mjs
  - styles
    - markdown/
      - trees.css
  - **content.config.ts** # important file
- public/
  - favicon.svg
- package.json
:::
```

:::file-tree{title="Shirone source tree"}
- src
  - components/
    - ++ Navigation.svelte # added component
    - -- Button.astro # removed component
  - content
    - posts/
      - markdown-enhancements.md
  - layouts/
    - PostLayout.astro
  - plugins
    - markdown/
      - rehype-file-tree.mjs
  - styles
    - markdown/
      - trees.css
  - **content.config.ts** # important file
- public/
  - favicon.svg
- package.json
:::

#### 编写规则与标记

- **差异状态（Diff States）**:为条目添加 `++` 前缀（绿色背景与徽章）或 `--` 前缀（红色背景与删除线）,以高亮显示变更.
- **注释（Comments）**:`#` 之后的任意文本都会渲染为弱化的、右对齐的行内注释.
- **强调（Emphasis）**:用 `**bold**` 包裹名称,让关键文件获得更突出的视觉权重.
- **可折叠文件夹（Collapsible Folders）**:由嵌套列表项推断出的目录默认展开.添加尾部斜杠（例如 `components/`）即可创建默认折叠的目录,读者可通过点击或键盘导航展开.

---

### 2. 终端输出语法 (```` ```file-tree ````)

如果你已有由 `tree` 等命令行工具生成的目录树文本,可直接粘贴到 `file-tree` 围栏代码块中.Unicode 分支字符（`├──`、`└──`、`│`）与 ASCII 分支字符都会被自动解析.

````markdown
```file-tree title="Build output" icon="simple"
dist
├── _astro/
│   ├── index.css
│   └── page.js
└── favicon.ico
```
````

```file-tree title="Build output" icon="simple"
dist
├── _astro/
│   ├── index.css
│   └── page.js
└── favicon.ico
```

#### 配置选项

- `title="string"`:为文件树设置自定义标题与无障碍标签.
- `icon="colored" | "simple"`:在多色扩展名图标（`colored`,默认）与极简单色图标（`simple`）之间切换.

---

## 代码树

交互式代码树将左侧的多层级文件导航面板与右侧的即时代码切换面板结合在一起.它为多文件示例、模块或整个目录的逐文件讲解,提供了类 IDE 的阅读体验.

### 1. 容器语法（`:::code-tree`）

在 `:::code-tree` 块指令中组合多个围栏代码块.每个代码块通过 `title="path/to/file"` 指定其路径.

````markdown
:::code-tree{title="Shirone Component Demo" height="380px" entry="src/Button.svelte"}
```svelte title="src/Button.svelte"
<script lang="ts">
  let { label = "Click me" } = $props();
</script>

<button class="m3-btn">{label}</button>
```

```stylus title="src/styles/button.styl"
.m3-btn
  background: var(--primary)
  color: var(--on-primary)
  border-radius: var(--shape-corner-m)
```

```json title="package.json"
{
  "name": "button-demo",
  "version": "1.0.0"
}
```
:::
````

:::code-tree{title="Shirone Component Demo" height="380px" entry="src/Button.svelte"}
```svelte title="src/Button.svelte"
<script lang="ts">
  let { label = "Click me" } = $props();
</script>

<button class="m3-btn">{label}</button>
```

```stylus title="src/styles/button.styl"
.m3-btn
  background: var(--primary)
  color: var(--on-primary)
  border-radius: var(--shape-corner-m)
```

```json title="package.json"
{
  "name": "button-demo",
  "version": "1.0.0"
}
```
:::

#### 配置与标记

- `title="string"`:为代码树设置标题与无障碍标签.
- `height="string"`:设置桌面端视图的高度（默认 `420px`,例如 `380px`、`26rem`）.
- `entry="filepath"`:指定首次加载时默认激活的文件.
- `icon="colored" | "simple"`:在彩色文件图标与极简单色文件图标之间切换.
- `:active`:在任意围栏代码块上添加 `:active`,即可将其指定为默认激活的标签页.

---

### 2. 本地目录自动导入（`@[code-tree]`）

直接指向工作区中的任意本地目录路径,即可在构建时自动扫描并生成交互式代码树,无需手动复制文件内容.

```markdown
@[code-tree title="Anime Utilities" entry="status.ts"](/src/utils/anime)
```

@[code-tree title="Site Configuration" entry="siteConfig.ts"](/src/config)
