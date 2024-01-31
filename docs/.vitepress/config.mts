import { DefaultTheme, defineConfig } from 'vitepress'
// import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'

/*
  顶部导航
  导航链接也可以是下拉菜单。在选项上设置items键。
  link：实际md文件的路径，不带.md后缀，并始终以/开头。如果在链接末尾添加尾部斜杠，它将显示相应目录的index.md。（以srcDir目录为基础）
  高亮：默认只有当前页面与link相同时才会高亮。为使该导航下的所有页面都可以高亮，需使用activeMatch自定义匹配路径
  注意：activeMatch 应该是正则表达式字符串，但必须将其定义为字符串。不能在这里使用实际的 RegExp 对象，因为它在构建期间不可序列化。
*/
const nav: DefaultTheme.NavItem[] = [
  { text: '指南', link: '/guide/', activeMatch: '/guide/' },
  { text: '组件', link: '/components/meng-table', activeMatch: '/components/' }
]

/*
  侧边栏：数组形式的侧边栏是固定的，路径变化则高亮不同的菜单
  侧边栏菜单最简单的形式是传递单个链接数组。第一级定义侧边栏的"部分"。它应该包含text（该部分的标题）和items（实际的导航链接）。（最多 6 层深度）
  link：实际md文件的路径，不带.md后缀，并始终以/开头。如果在链接末尾添加尾部斜杠，它将显示相应目录的index.md。（以srcDir目录为基础）
  高亮：当前页面与link相同时才会高亮。

  多个侧边栏：可以根据页面路径显示不同的侧边栏。最常用的是根据顶部导航设置不同的侧边栏
  应该传递一个对象而不是数组

  可折叠侧边栏组：向侧边栏组添加collapsed选项，它会显示一个切换按钮来隐藏/显示每个部分。默认是false（打开）。如果要默认折叠，则设为true
*/
const sidebar: DefaultTheme.Sidebar = {
  '/guide/': [
    {
      text: '指南',
      collapsed: false,
      items: [
        { text: '组件库介绍', link: '/guide/' },
        { text: '快速开始', link: '/guide/quickstart' },
        { text: '团队介绍', link: '/guide/team' },
      ]
    }
  ],
  '/components/': [
    {
      text: '封装组件',
      items: [
        { text: 'meng-table', link: '/components/meng-table' },
        { text: 'meng-buttons', link: '/components/meng-buttons' }
      ]
    }
  ]
}

export default defineConfig({
  // 全局title，标签页标题。若站点有title，则该全局title为后缀。若站点没有title，则该全局title就为整个标题
  // 首页标题：index.md的title | 全局title。其他页标题：第一个<h1>标头的文本内容 | 全局title
  title: 'meng-ui',
  // 自定义标题后缀（覆盖上面的title），或自定义整个标题。有:title符号-自定义整个标题。为false-禁止标题后缀
  titleTemplate: ':title - meng-ui后缀',
  // 网站的描述。页面 HTML 中呈现为<meta>标记。
  description: 'Vue3 个人组件库',
  // 在head里添加其他的元素，例如link,script等。下面例子为：添加 favicon 图标
  head: [['link', { rel: 'icon', href: '/meng-UI/674孟.svg' }]],
  // 站点的 lang 属性。页面 HTML 中呈现为<html lang="en-US">标记。
  lang: 'cn-ZH',
  // 站点将部署到的基本 URL。始终以斜线开头和结尾
  base: '/meng-UI/',
  // 当设置为true时，VitePress 将从 URL 中删除尾随的.html（启用此功能可能需要在您的托管平台上进行额外配置。为了让它工作，您的服务器必须能够在访问/foo时提供/foo.html而无需重定向。）
  cleanUrls: true,
  // 路由重写，自定义源目录结构和生成的页面之间的映射（启用重写后，相对链接应基于重写的路径）
  // rewrites: {
  //   'source/:page': 'destination/:page'
  //   'packages/:pkg/src/(.*)': ':pkg/index.md'
  // },
  // 源目录（包括运行时和打包时使用的目录）：Markdown 源文件所在的位置，默认是项目根目录。将已该目录为基础搜寻.md文件进行构建
  srcDir: './markdown',
  // 构建时，不构建哪些md文件
  srcExclude: ['**/README.md'],

  // 站点的打包构建输出位置，相对于项目根目录。默认: ./.vitepress/dist
  // outDir: './dist',

  // 打包后用于存放资源文件的目录。默认：assetsDir
  // assetsDir: 'static',

  // 缓存文件的目录，相对于项目根目录。默认: ./.vitepress/cache
  // cacheDir: './.vitepress/.vite',

  // 当设置为true时，VitePress 不会因死链接而导致构建失败
  // ignoreDeadLinks:true,

  // 主题:默认: true。是否启用深色模式（通过将.dark类添加到<html>元素）。true-启用深色，dark-默认深色，false-禁止切换
  // appearance: true,

  // 是否使用 Git 获取每个页面的最后更新时间戳。时间戳将包含在每个页面的页面数据中，可通过 useData 访问。
  lastUpdated: true,

  /*
  配置 Markdown 解析器选项。 VitePress 使用 Markdown-it 作为解析器

   */
  markdown: {
    // 自定义主体的语法突出显示，使用已有的主题
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    // 代码块显示行号
    lineNumbers: true,
    // markdown-it-anchor 插件的 options
    anchor: {
      slugify(str) {
        return encodeURIComponent(str)
      }
    },

    // 配置Markdown-it实例
    config(md) {
      // md.use(componentPreview)
      // md.use(containerPreview)
    }
  },

  // 将原始 Vite Config 传递到内部 Vite 开发服务器/捆绑器
  vite: {
    // Vite config options
  },

  // 将原始 @vitejs/plugin-vue选项 传递到内部插件实例
  vue: {
    // @vitejs/plugin-vue options
  },

  // 默认主题配置
  themeConfig: {
    // 将语言环境更改为zh会将 URL 从/foo（或/en/foo/）更改为/zh/foo
    // i18nRouting: true,

    // 导航栏左侧的标题之前的logo。接受路径字符串或对象来为亮/暗模式设置不同的logo。
    logo: '/logo.svg',

    // 导航栏左侧的标题（默认引用 config.title 值的站点标题）
    siteTitle: 'meng ui',

    // 导航菜单项的配置
    nav,

    // 侧边栏菜单项的配置
    sidebar,

    // false可防止渲染旁路容器，true会将旁边渲染到右侧，left会将一侧呈现在左侧（默认值: true）
    aside: true,

    // 在大纲中显示的标题级别。（默认值: 2）'deep'等于[2, 6]，表示除h1之外的所有标题级别都显示在大纲中
    outline: 'deep',

    // 自定义右侧边栏的标题（位于大纲链接的顶部）（默认值: On this page）
    outlineTitle: '当前页导航',

    // 定义此选项以在导航中显示带有图标的社交帐户链接
    socialLinks: [{ icon: 'github', link: 'https://github.com/autumnLeaves-lady/meng-UI' }],

    // 页脚配置。您可以在页脚上添加消息或版权文本，但是，只有当页面不包含侧边栏时才会显示它。这是由于设计方面的考虑。（注意：当 SideBar 可见时，页脚将不会显示。）
    footer: {
      // 版权前显示的信息 （支持 HTML 字符串。注意：只能内联元素，因为该内容渲染在p元素内）
      message: 'Released under the MIT License.',
      // 实际的版权文本 （支持 HTML 字符串。注意：只能内联元素，因为该内容渲染在p元素内）
      copyright: 'Copyright © 2024-present Evan You'
    },

    // 编辑链接允许您显示用于编辑 Git 管理服务（例如 GitHub 或 GitLab）上的页面的链接。（位于每篇md文档的左下角）
    editLink: {
      pattern: 'https://github.com/autumnLeaves-lady/meng-UI/tree/main/docs/:path',
      text: '在github上编辑该页'
    },

    // 自定义最后更新文本和日期格式。
    lastUpdated: {
      text: '上次更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    // 支持使用 Algolia DocSearch 搜索文档网站的选项
    // algolia

    // 显示 Carbon 广告 的选项。
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // },

    // 可用于自定义上一个和下一个链接上方显示的文本。也可用于全局禁用上一个/下一个链接。
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 可用于自定义深色模式开关标签。该标签仅显示在移动视图中。（移动端）（默认值: Appearance）
    darkModeSwitchLabel: '切换主题',
    // 可用于自定义侧边栏菜单标签。该标签仅显示在移动视图中。（默认值: Menu）
    sidebarMenuLabel: '菜单',
    // 可用于自定义返回顶部按钮的标签。该标签仅显示在移动视图中。（默认值: Return to top）
    returnToTopLabel: '返回顶部',
    // 是否在Markdown中的外部链接旁显示外部链接图标。
    externalLinkIcon: true,
    // 可用于自定义导航栏中语言切换按钮的 aria-label。仅当您使用 i18n 时才使用此选项。（默认值: Change language）
    langMenuLabel: '切换语言',

    // VitePress支持使用浏览器内置索引进行模糊全文搜索，这得益于minisearch。
    search: {
      provider: 'local' // 本地搜索
    }

    // 时间戳的自定义文本
    // lastUpdatedText:
  },

  // 打包完成前钩子（执行一次）
  async buildEnd(siteConfig) {
    // console.log('打包结束执行')
  },

  /*
   * 构建钩子，在 SSG 渲染完成时调用。它将允许您在 SSG 期间处理传送内容。(每一个md文件构建成html文件时的钩子，content是构建后的html内容。要构建多少个md就执行多少次)
   * 注意：打包时才会执行。
   */
  async postRender(context) {
    // console.log('执行---------每个md文件打包构建时都会执行')
    // ...
  },

  /*
   * 构建钩子，用于在生成每个页面之前转换头部。它将允许您添加无法静态添加到 VitePress 配置中的头条目
   * 注意：打包时才会执行。
   */
  async transformHead(context) {
    // context：是整个配置，可以在打包时动态修改head配置（不要改变 context 内的任何内容。）
    // 只需返回要增加的head配置，它们将自动与现有条目合并
    // console.log('返回需要动态增加的head配置')
  },

  /*
   * 构建钩子，用于在保存到磁盘之前转换每个页面的内容
   * 注意：打包时才会执行。
   */
  async transformHtml(code, id, context) {
    // console.log('id: ', id); // html文件名
    // console.log('code: ', code); // html代码
    // ...
  },

  /*
   * 是一个用于转换每个页面的 pageData 的钩子。您可以直接改变 pageData 或返回更改后的值，这些值将合并到 PageData 中
   * 注意：只有该钩子运行和打包时都会执行。
   */
  async transformPageData(pageData, { siteConfig }) {
    // 初始化打开新页面就会执行，类似与vue的mounted钩子
    // pageData.title = pageData.title + '**-*！'
  }
})
