import type { DefaultThemeOptions } from 'vuepress';
import { defineUserConfig } from 'vuepress';
import { navbar, sidebar } from './configs';

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: 'Distributed Update System',
  description: 'Upgrade anything any where',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],

  // 语言配置
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Distributed Update System',
      description: 'Upgrade anything any where',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Distributed Update System',
      description: 'Upgrade anything any where',
    },
  },

  // 主题配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo.png',
    repo: 'DUpdateSystem',
    locales: {
      '/': {
        // navbar
        navbar: navbar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },

      '/en/': {
        // navbar
        navbar: navbar.en,
        selectLanguageName: 'English',

        // sidebar
        sidebar: sidebar.en,

        // page meta
        editLinkText: 'Edit this page on GitHub',
      },
    },

    docsRepo: 'DUpdateSystem/docs',
    docsBranch: 'master',
  },
});
