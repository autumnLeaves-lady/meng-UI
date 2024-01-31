---
# Frontmatter 配置：可以通过 Vue 表达式中的全局 $frontmatter 访问 frontmatter 数据

# 页面的布局。当为home时，可设置hero和features向首页添加多个不同的预模板"部分"。如果未指定任何内容，则该页面将被视为doc页面，拥有以下功能：编辑连接、上一页下一页、大纲、carbon ads广告。page表示"空白页"。false表示不需要任何布局。还可以设置为一个自定义的vue组件，该组件需全局注册。
layout: home
# 标签页主标题（前）。
title: 首页
# 标题的后缀。它与 config.titleTemplate 相同，并且覆盖站点级配置。
titleTemplate: 首页后缀
# 页面的描述。它与 config.description 相同，并且覆盖站点级配置。
description: 一个基于 Vue 的 UI 设计语言。

# 指定要为当前页面注入的额外头标签。将附加在站点级配置注入的头标签之后。（在head里加入标签）
# head:
#   - - meta
#     - name: description
#       content: hello
#   - - meta
#     - name: keywords
#       content: super duper SEO

# 是否显示导航栏（默认值: true）
navbar: true

# 是否显示侧边栏（默认值: true）（不知道有什么作用）
sidebar: true

# 定义doc布局中旁注组件的位置（默认值: true）true-将旁边渲染到右侧，false-防止渲染旁边容器，left-将一侧呈现在左侧
aside: true

# 页面显示的大纲中标题的级别（默认值: 2）
outline: 3

# 是否在当前页面的页脚显示上次更新时间文本（显示的是themeConfig.lastUpdated配置）（默认值: true）
lastUpdated: true

# 是否在当前页面的页脚显示编辑链接（显示的是themeConfig.editLink配置）。（默认值: true）
editLink: true

# 是否显示页脚（显示的是themeConfig.footer配置的页脚）。（默认值: true）
footer: true

# Hero 部分位于首页顶部
hero:
  # 首页名称，例如产品名称，自带颜色
  name: meng-ui

  # 首页的主要文本，定义为h1标签
  text: Vue3 定制组件库

  # 标语显示在“文本”下面。
  tagline: 组件库描述 / SLOGAN

  # 图像，显示在文本和标语区域旁边。
  image:
    src: /grt.png
    alt: meng-ui

  # 动作按钮，显示在“文本”和“标语”下方。
  actions:
    - theme: brand # 按钮的颜色主题。默认为“brand”。
      text: 快速开始 # 按钮标签
      link: /guide/index # 按钮的目标链接
    - theme: alt
      text: 组件
      link: /components/meng-table

# 在features部分中，您可以在hero部分之后列出您想要显示的任意数量的功能。
features:
  - icon: ✈️  # 可以为每个功能提供一个图标，可以是表情符号或任何类型的图像。当配置的图标是图像（svg、png、jpeg...）时，您必须为图标提供适当的宽度和高度
    title: 功能/特点 1 # 功能的标题
    details: 功能/特点 1 具体描述信息。 # 功能的描述信息
    link: /guide/ # 点击特性组件时链接。链接可以是内部的，也可以是外部的。
    linkText: 快速开始 # 链接文本将显示在功能组件内。最好与“link”选项一起使用。
    rel: external
  - icon: ✈️
    title: 功能/特点 2
    details: 功能/特点 2 具体描述信息。
  - icon: ✈️
    title: 功能/特点 3。
    details: 功能/特点 3 具体描述信息。
---

<script setup>
  import { useData, useRoute, useRouter, withBase } from 'vitepress'
  import { useSidebar } from 'vitepress/theme'

// const console = window.console

// 返回特定于页面的数据。返回的对象具有以下类型
const data = useData()

// 返回当前路由对象
const route = useRoute()

// 返回 VitePress 路由器实例，以便您可以以编程方式导航到另一个页面。
const router = useRouter()

// 将配置的 base 附加到给定的 URL 路径。另请参阅基本 URL
const base = withBase('http://localhost:5173/meng-UI/guide/')

// 侧边栏相关信息
const { hasSidebar } = useSidebar()

</script>

<template>
  <!-- <div>{{ data.theme }}</div> -->

  <!-- 在Vue表达式中直接访问当前页面的frontmatter数据。注意：md里随处可以使用vue表达式 -->
  <!-- <div>{{ $frontmatter }}</div> -->

  <!-- 在Vue表达式中直接访问当前页面的动态路由参数。注意：md里随处可以使用vue表达式 -->
  <!-- <div>{{ $params }}</div> -->
</template>

<style>
  :root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}
</style>
