import type { SidebarOptions } from '@vuepress/theme-default';

export const en: SidebarOptions = [
  '/en/guide/README.md',
  '/en/faq/README.md',
  {
    text: 'Developer Documention',
    link: '/en/dev/',
    collapsible: true,
    children: [
      '/en/dev/README.md',
      '/en/dev/contributing.md',
      '/en/dev/file-dir-structure.md',
      '/en/dev/app-json-rules.md',
      '/en/dev/hub-json-rules.md',
      '/en/dev/python-scripts.md',
      '/en/dev/bs4-function.md',
      '/en/dev/docs.md',
    ],
  },
  '/en/discussion/README.md',
];
