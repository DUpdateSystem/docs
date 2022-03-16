module.exports = {
  title: 'Distributed Update System',
  description: 'Upgrade anything any where',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  locales: {
    '/': {
      lang: 'en-US',
    },
  },
  themeConfig: {
    nav: [
      { text: 'User Guide', link: '/guide/' },
      { text: 'FAQ', link: '/faq/' },
      { text: 'Developer Documentation', link: '/dev/' },
      { text: 'Join Us', link: '/joinus/' },
      {
        text: 'Downloads',
        items: [
          {
            text: 'Coolapk',
            link: 'https://www.coolapk.com/apk/net.xzos.upgradeall',
          },
          {
            text: 'Github',
            link: 'https://github.com/DUpdateSystem/UpgradeAll/releases',
          },
          {
            text: 'F-Droid',
            link: 'https://f-droid.org/packages/net.xzos.upgradeall',
          },
          {
            text: 'Telegram CI',
            link: 'https://t.me/upallci',
          },
        ],
      },
      { text: 'GitHub', link: 'https://github.com/DUpdateSystem' },
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'User Guide',
        path: '/guide/',
        children: ['/guide/', '/guide/magisk'],
      },
      {
        title: 'FAQ',
        path: '/faq/',
      },
      {
        title: 'Developer Documentation',
        path: '/dev/',
        children: [
          '/dev/',
          '/dev/file-dir-structure',
          '/dev/app-json-rules',
          '/dev/hub-json-rules',
          '/dev/python-scripts',
          '/dev/bs4-function',
          '/dev/contributing',
        ],
      },
      {
        title: 'Join Us',
        path: '/joinus/',
        children: ['/joinus/', '/joinus/docs'],
      },
    ],
    lastUpdated: 'Latest Update',
  },
  plugins: [['@vuepress/active-header-links'], ['@vuepress/back-to-top']],
};
