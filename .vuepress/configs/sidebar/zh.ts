import type { SidebarConfig } from '@vuepress/theme-default';

export const zh: SidebarConfig = [
  '/guide/README.md',
  '/faq/README.md',
  {
    text: 'Developer Documention',
    link: '/dev/',
    collapsible: true,
    children: [
      '/dev/README.md',
      '/dev/contributing.md',
      '/dev/file-dir-structure.md',
      '/dev/app-json-rules.md',
      '/dev/hub-json-rules.md',
      '/dev/python-scripts.md',
      '/dev/bs4-function.md',
      '/dev/docs.md',
    ],
  },
  '/discussion/README.md',
];
