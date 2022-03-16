import type { NavbarConfig } from '@vuepress/theme-default';

export const en: NavbarConfig = [
  { text: 'User Guide', link: '/en/guide/' },
  { text: 'FAQ', link: '/en/faq/' },
  { text: 'Developer Documentation', link: '/en/dev/' },
  { text: 'Discussion', link: '/en/discussion/' },
  {
    text: 'Client Downloads',
    children: [
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
