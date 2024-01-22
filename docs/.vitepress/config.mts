import { DefaultTheme, defineConfig } from 'vitepress'
// import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'

const nav: DefaultTheme.NavItem[] = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/meng-table' }
]

const sidebar: DefaultTheme.Sidebar = {
  '/guide': [
    {
      text: '指南',
      items: [
        { text: '组件库介绍', link: '/guide/' },
        { text: '快速开始', link: '/guide/quickstart' }
      ]
    }
  ],
  '/components': [
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
  title: 'yyg-admin-ui',
  description: 'YYG Vue3企业级中后台组件库',
  lang: 'cn-ZH',
  base: '/meng-UI/',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'yyg-admin-ui',
    outline: 3,
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    nav,
    sidebar
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true,
    config(md) {
      // md.use(componentPreview)
      // md.use(containerPreview)
    }
  }
})
