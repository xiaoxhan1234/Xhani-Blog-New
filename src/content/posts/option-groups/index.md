---
title: Markdown 选项组
published: 2026-09-02
description: 以紧凑、可同步的 M3E 选项组呈现相关的 Markdown 备选方案.
tags: [Markdown, 标签页, Shirone]
category: 指南
lang: zh_CN
draft: false
---

选项组将等效的操作说明归置在一起,而无需重复其周边的解释文字.每个选项都支持完整的块级 Markdown,并且所选的值可以与同一页面上的另一个选项组保持同步.

## 选择包管理器

使用 `@tab:active` 来指定初始选中的选项.`#` 之后的后缀可提供一个稳定的值,同时不改变可见的标题.

::: tabs#package-manager

@tab npm

使用 npm 安装依赖包:

```powershell
npm install astro
```

@tab:active **pnpm**#pnpm

使用 pnpm 安装依赖包:

```powershell
pnpm.cmd add astro
```

@tab Bun#bun

使用 Bun 安装依赖包:

```powershell
bun add astro
```

:::

## 运行项目

该组共用了 `package-manager` 这个 id.在上面选择某个选项时,下方对应的命令会随之更新,并且该选择会被记住,供下次访问时使用.

::: tabs#package-manager

@tab npm

```powershell
npm run dev
```

@tab pnpm

```powershell
pnpm.cmd dev
```

@tab Bun#bun

```powershell
bun run dev
```

:::

## 多个备选方案

较长的选项行会保持在单行内显示,并在窄屏时于其自身的导航区域内横向滚动.

::: tabs

@tab 本地工作站

在开发功能时使用本地工具链.

@tab 托管预览环境

发布一个临时预览以供评审.

@tab 持续集成

对每一次变更执行确定性的校验.

@tab 生产部署

将已验证的构建产物发布到生产环境.

@tab 离线恢复流程

当网络不可用时,从本地产物进行恢复.

:::

## 编写语法

````markdown
::: tabs#package-manager

@tab npm

Use npm instructions here.

@tab:active **pnpm**#pnpm

Use pnpm instructions here.

:::
````

每个选项组至少需要两个 `@tab` 分节,且每个分节都需要有正文内容,并与标记之间以空行分隔.无效或不完整的选项组会保持为普通可读的 Markdown.
