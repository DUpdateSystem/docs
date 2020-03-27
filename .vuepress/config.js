module.exports = {
  lang: 'zh-CN',
  title: 'Distributed Update System',
  description: 'Upgrade anything any where',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    nav: [
      { text: '使用指南', link: '/guide/' },
      { text: 'FAQ', link: '/faq/' },
      { text: '参与我们', link: '/joinus/' },
      {
        text: '客户端下载',
        items: [
          {
            text: 'Android 端（酷安）',
            link: 'https://www.coolapk.com/apk/net.xzos.upgradeall'
          },
          {
            text: 'Android 端（GitHub）',
            link: 'https://github.com/DUpdateSystem/UpgradeAll/releases'
          }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/DUpdateSystem' }
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: '使用指南',
        path: '/guide/'
      },
      {
        title: 'FAQ',
        path: '/faq/'
      },
      {
        title: '参与我们',
        path: '/joinus/',
        children: ['/joinus/', '/joinus/docs']
      }
    ],
    lastUpdated: '最后更新时间'
  },
  plugins: [['@vuepress/active-header-links'], ['@vuepress/back-to-top']]
};
