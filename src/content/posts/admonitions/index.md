---
title: Markdown 提示框
published: 2026-09-02
description: 使用 Shirone 的 M3E Markdown 容器来呈现注释、警告与可选详情.
tags: [Markdown, 提示框, Shirone]
category: 指南
lang: zh_CN
draft: false
---

提示框能让辅助说明在视觉上与正文区分开来,同时又不打断文章的阅读节奏.所有形态都在服务端渲染,并复用同一个紧凑的 M3E 组件.

## 语义化变体

::: note 部署上下文
空格分隔的写法允许使用纯文本自定义标题,同时仍与参考语法保持兼容.
:::

:::info
信息块用于承载中立的背景说明,帮助读者理解所在章节的内容.
:::

:::tip[现有 **label** 语法]
原有的方括号标题依然可用,并且支持行内 Markdown 强调.
:::

> [!IMPORTANT]
> GitHub Alert 语法会进入同一套渲染器,因此既有文章能保持统一的视觉语言.

:::warning
在运行生产构建前,请先检查环境变量.
:::

:::caution
请勿随示例一同发布凭据、本地配置或私钥.
:::

## 可选详情

::: details 查看完整命令
该披露组件采用浏览器原生语义,无需客户端 JavaScript 也能通过键盘访问.

```powershell
npx.cmd astro check
pnpm.cmd build
```

- 默认处于关闭状态.
- 较长的代码可在其代码块内部独立滚动.
- 在窄屏设备上,容器仍会保持在文章宽度之内.
:::

## 编写语法

```markdown
:::note[Existing title syntax]
Content
:::

::: warning Plume-compatible title syntax
Content
:::

> [!TIP]
> GitHub Alert syntax

::: details Optional content
Hidden until the reader opens it.
:::
```
