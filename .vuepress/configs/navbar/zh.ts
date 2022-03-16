import type { NavbarConfig } from '@vuepress/theme-default';

export const zh: NavbarConfig = [
  { text: '用户指南', link: '/guide/' },
  { text: '常见问题', link: '/faq/' },
  { text: '开发者文档', link: '/dev/' },
  { text: '参与讨论', link: '/discussion/' },
  {
    text: '客户端下载',
    children: [
      {
        text: '酷安',
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
];
