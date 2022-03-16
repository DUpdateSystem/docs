# 用户指南

## 说明

集中更新您的安卓应用、Magisk 等软件或服务。
Check for Android apps, Magisk modules and more!

UpgradeAll 目前由服务器端和客户端组成。服务器端定期爬取和缓存。客户端通过 api 获取更新的数据并显示出来。

## 如何添加应用

### 添加应用

<img src="../source/screenshot/1.png" alt="ScreenShot" height="520">
<img src="../source/screenshot/2.png" alt="ScreenShot" height="520">

1. 从主页打开`软件源`页面
2. 打开你想要打开的`软件源`
3. 打开带有`应用市场`标签的`软件源`为所有应用获取更新

### 从云仓库添加应用

<img src="../source/screenshot/3.png" alt="ScreenShot" height="520">
<img src="../source/screenshot/4.png" alt="ScreenShot" height="520">

1. 从主页打开`探索`页面
1. 找到你想添加的应用点击下载 (酷安和 F-Droid 已支持应用市场模式，不需要在这里下载)

### 手动添加应用

::: warning
请确保已手动添加对应的软件源！
:::

<img src="../source/screenshot/5.png" alt="ScreenShot" height="520">
<img src="../source/screenshot/6.png" alt="ScreenShot" height="520">

1. 点击应用页面右上角的菜单添加应用

使用 `UpgradeAll` 举个例子:  
`https://github.com/DUpdateSystem/UpgradeAll`

1. `Name` 填写您要设置的跟踪应用的名称（随意）
2. 首先添加属性(我们需要三个属性), 选择 `android_app_package` 选项然后输入包名 `UpgradeAll`: `net.xzos.upgradeall`
3. 选择 `owner` 输入仓库的所有者 `DUpdateSystem`
4. 然后选择 `repo` 输入项目名称 `UpgradeAll`.

### 自动添加应用

<img src="../source/screenshot/7.png" alt="ScreenShot" height="520">
<img src="../source/screenshot/8.png" alt="ScreenShot" height="520">

1. 在编辑跟踪项页面点击右上角的菜单从 URL 解析属性列表
2. 输入应用的 URL，例如：`https://github.com/DUpdateSystem/UpgradeAll`.
3. 在顶部填入跟踪项的名称
