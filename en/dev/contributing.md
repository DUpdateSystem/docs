# 贡献准则

👍🎉 首先，感谢您抽出宝贵的时间！ 🎉👍

## Issue 准则

- 提出问题时尽可能使用 issue 模板。
- Issue 模板中 `<!-- -->`标签包裹的内容为注释，请认真查看并在空白处填写对应的内容。
- 提出问题尽量使用清晰准确简洁的语句。
- 填写信息尽量准确丰富，可以帮助我们更快的定位和解决问题。
- 没有可供使用的模板请条理清晰，语言准确简洁的描述您的问题。
- 无意义不遵循模板的 issue 可能会被关闭！

## Pull request 准则

- Pull request 时请使用模板。
- 没有可供使用的模板时请条理化，准确清晰的描述。
- commit 信息需遵守规范。
- 无能有无意义的 commit，比如 `merge`。
- 无意义不遵循模板的 pull request 可能会被关闭！

## Commit 规范

**Commit 请务必遵守规范！** 本规范基于 [Angular 规范](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)。如果觉得手动规范格式麻烦的话可以选用一些插件或软件来规范 commit。

每条 commit 由 header（必填），body（可选） 和 footer（可选） 三部分组成。Header 由 type（必填），scope（可选） 和 subject（必填） 组成：

```
<type>(<scope>): <subject> //英文冒号加空格！
<空一行>
<body>
<空一行>
<footer>
```

### Type

Type 必须为以下几种之一：

- `feat`：增加新功能
- `fix`：错误修复
- `docs`：文档修改
- `style`：不会影响代码含义的修改（空白、格式化等等）
- `refactor`：既无 bug 修复又无新功能添加的代码更改
- `perf`：更改代码以提升性能
- `test`：代码测试相关
- `build`：依赖相关的内容（使用 `chore` 好像差不多）
- `ci`：ci 配置相关，例如对 k8s、docker 或者 actions 等配置文件的修改
- `chore`：改变构建流程或者更改依赖库、工具等等

### Scope

`scope` 用于说明 commit影响的范围，比如数据层、控制层、视图层等等，因项目不同而不同。

### Subject

`subject` 是 commit 目的的简短描述，不超过 50 字符。

- 句首为英文时不要大写
- 句尾不要加符号（。等）
- 使用现在时，祈使句

### Body

`body` 是对本次 commit 的详细描述，注意点同 subject 应说明代码改变的动机以及前后的对比。

**大多数情况下可以不用填写 body**

### Footer

1. 不兼容变动（Breaking Changes）：footer 部分以 `BREAKING CHANGE` 开头，后面是对变动的描述、理由和迁移方法等内容。
2. 关闭 issue：`close #111`、`fix #111 #222`

### Revert

当前 commit 用于撤销以前的 commit，必须以 `revert:` 开头，后面跟着被撤销 commit 的 **header**。Body 的格式是固定的，必须写成 `This reverts commit <hash>.`，其中 `hash` 是被撤销 commit 的 SHA 标识符。
