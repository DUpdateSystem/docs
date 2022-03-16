# 文档编写

::: tip
请先了解[贡献准则](./contributing.html)，若已查看请忽略。
:::

本文档使用 [vuepress](https://vuepress.vuejs.org/zh/) 生成，目前托管于 [ZEIT](https://zeit.co/)。

## 基础知识

1. 基础的 markdown 知识
2. 会安装和简单的使用 [nodejs](https://nodejs.org/zh-cn/)
3. 会安装和简单的使用 [yarn](https://yarnpkg.com/)
4. 会简单的使用 [vuepress](https://vuepress.vuejs.org/zh/)

## 参与步骤

1. fork 并 clone docs 仓库到本地
2. `yarn install` 安装依赖到本地
3. 添加或修改 md 格式的文档
4. `yarn dev` 实时预览网页
5. 修改完成后 push 到自己的仓库
6. pull request

## 部分文件说明

- `.vuepress`: 用于存放全局的配置、组件、静态资源等
- `.vuepress/public`: 静态资源目录
- `.vuepress/config.js`: 配置文件的入口文件

## 配置文件部分说明

::: tip
修改配置后重新运行 `yarn dev` 才会生效。
:::

### head

额外的需要被注入到当前页面的 HTML `<head>` 中的标签，每个标签都可以以 `[tagName, { attrName: attrValue }, innerHTML]` 的格式指定。

### themeConfig.nav

页面右上角的导航栏链接。示例：

```js config.js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      {
        text: '客户端下载',
        items: [
          {
            text: 'Android 端（酷安）',
            link: 'https://www.coolapk.com/apk/net.xzos.upgradeall',
          },
          {
            text: 'Android 端（GitHub）',
            link: 'https://github.com/DUpdateSystem/UpgradeAll/releases',
          },
        ],
      },
      { text: 'GitHub', link: 'https://github.com/DUpdateSystem' },
    ],
  },
};
```

### themeConfig.sidebar

侧边栏的目录

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: 'FAQ',
        path: '/faq/',
      },
      {
        title: '参与我们',
        path: '/joinus/',
        children: ['/joinus/', '/joinus/docs'],
      },
    ],
  },
};
```
