# 参与 Python 脚本编写

## 开发环境及库

Python 版本：[Python 3.8.2](https://www.python.org/downloads/release/python-382/)（版本不同时应注意兼容性问题）

Python 库：

- [beautifulsoup4](https://www.crummy.com/software/BeautifulSoup/)（处理 html 数据）。
- [html5lib](https://pypi.org/project/html5lib/)（这里仅用于配合 beautifulsoup4 进行 html 页面解析，不需要了解其使用方法）。
- [requests](https://requests.readthedocs.io/en/master/)（http 请求发送）。

## 相关文件介绍

### [/app/server/hubs/library/hub_list.py](https://github.com/DUpdateSystem/Server/blob/master/app/server/hubs/library/hub_list.py)

Python 脚本列表。Server 通过该文件实现软件源的类的实例化。  
因此，在你新增或删除软件源脚本后，应当修改该文件中的 hub_dict 对象。具体格式为：

```python
from .github import Github
from .fdroid import FDroid
from .coolapk import CoolApk

hub_dict = {
    "fd9b2602-62c5-4d55-bd1e-0d6537714ca0": Github(),
    "6a6d590b-1809-41bf-8ce3-7e3f6c8da945": FDroid(),
    "1c010cc9-cff8-4461-8993-a86cd190d377": CoolApk()，
    "<软件源的 UUID（应与软件源配置文件相同）>": <对应的软件源的实例化的类>
}
```

### [/app/server/hubs/base_hub.py](https://github.com/DUpdateSystem/Server/blob/master/app/server/hubs/base_hub.py)

此文件为 Python 脚本应该继承的抽象基类。  
基类规定了你的 Python 脚本应该实现的供 Server 调用的接口，函数实现方法不做限制，接口函数的注释详细地说明了这些函数的输入输出值。

### 待编写的 Python 脚本

文件名与类名：相应软件源的英文名称。  
文件路径：`/app/server/hubs/library/<your_script_name>.py`
::: tip 提示
你需要在这个文件中继承 base_hub 并实现它。  
脚本文件内部结构不做要求，能够正常实例化就行。  
理论上来说，你可以为将软件源的实现~~拆分为多个脚本文件~~，但为了保持目录结构的整洁，我们非常希望您不要这样做。
:::

## Python 脚本接口函数

### get_release_info

获取更新版本信息

- **输入**

app_id（包含字典的数组）：

```python
# Github 源
[
    {key : "owner", value : "DUpdateSystem"},
    {key : "repo", value : "UpgradeAll"}
]
# CoolApk 源
[
    {key : "android_app_package", value : "net.xzos.upgradeall"}
]
```

这是一个包含多个相同格式的字典的数组。  
每个字典的格式是固定的，它表示了一个可以确定软件的属性。

::: tip 提示
你可以通过[软件源配置文件](./app-rules.html#api-keywords)指定你所需要的属性值。  
你可以将它视为一种字典，我们为你准备了便捷解析它的函数 [get_value_from_app_id](#get_value_from_app_id)
:::

- **输出**

Python 数组或 JSON 数组：

```python
[{
   "version_number": "1.0",
   "change_log": "这是更新日志（咕咕咕）",
   "assets": [
       {
           "name": "example.apk",
           "download_url": "example.com/download",
           "file_type": "application/vnd.android.package-archive"
       }
   ]
}]
```

这是一个包含多个相同格式的字典的数组。  
每个字典的格式是固定的，它表示了一个版本的信息（版本号、更新日志、安装文件）。

### get_download_info

- **输入**

1. app_id（包含字典的数组）。与 [get_release_info 函数](#get-release-info)相同
2. asset_index（下载文件索引数组）：

   ```python
   [0, 0]  # 最新版本的第二个文件
   ```

   这是一个由数字组成的数组。  
   从左到右分别表示版本号索引和下载文件索引（从 0 开始数）。

- **输出**

Python 数组或 JSON 数组：

```python
{
    url: "example.com/download",
    request_header : {
        "Cookie": "user=user_name;example_arg=gugugu"
    }
}
```

这是一个包含基本下载信息的字典。  
它只包含下载地址与下载时使用的请求头。  
客户端将使用这些信息下载文件（如果 url 不为空，将使用这里提供的 url，而忽略 get_release_info 函数提供的下载地址）。

## 预置函数

UpgradeAll 目前提供了一些简单封装的常用操作，以函数的形式提供。

### 打印日志（[logging](https://docs.python.org/zh-cn/3.8/library/logging.html)）

函数位置：[app.server.utils](https://github.com/DUpdateSystem/Server/blob/master/app/server/utils.py)

- `logging.debug(msg, *args, **kwargs)`
- `logging.info(msg, *args, **kwargs)`
- `logging.warning(msg, *args, **kwargs)`
- `logging.error(msg, *args, **kwargs)`
- `logging.critical(msg, *args, **kwargs)`

函数使用参考 [Python logging 官方文档](https://docs.python.org/zh-cn/3.8/library/logging.html#logging.debug)

::: tip 提示
一般来说，你只需要根据日志等级选择需要的函数，并输入需要打印的日志字符串即可。  
建议：如果你不习惯使用 logging 函数，直接使用 print 函数也是不错的选择。
:::

::: danger 警告
因服务端暂未实现日志分类，为了保持服务端日志清晰，当您调试完成提交之前，请注释在软件源脚本中的所有日志函数
:::

### 数据处理

函数位置：[app.server.hubs.hub_script_utils](https://github.com/DUpdateSystem/Server/blob/master/app/server/hubs/hub_script_utils.py)

#### parsing_http_page

简易包装的获取并解析网页操作。

- **输入**

1. uri（字符串），目标网页的网址。
2. payload（字典），使用 Git 方法访问时的请求头。

- **输出**

由 BeautifulSoup4 解析的网页节点树  
使用参考 [BeautifulSoup4 官方文档](https://www.crummy.com/software/BeautifulSoup/bs4/doc.zh/#id15) 与[一些常用方法介绍](./bs4-function.html)

- **异常处理**

  - HTTP 状态异常：  
   当 HTTP 请求返回不正常的状态码时，抛出异常。详细信息参考 [requests 官方文档](https://requests.readthedocs.io/en/master/user/quickstart/#response-status-codes)

#### get_response

简易包装的 get 方法。

- **输入**

1. uri（字符串），访问的网址。
2. payload（字典），请求头。
3. throw_error（布尔值），是否抛出 HTTP 状态码异常。

- **输出**

包装网站响应的 Request 对象。  
大部分情况下，你可能用到 Request 对象的 text()、[json()](https://requests.readthedocs.io/zh_CN/latest/user/quickstart.html#json)。  
使用参考 [requests 官方文档](https://requests.readthedocs.io/zh_CN/latest/user/quickstart.html#id3)。

- **异常处理**

**仅当 throw_error 为 True（默认值）时，函数可能抛出错误。**  
其行为参考 [parsing_http_page](#parsing-http-page) 中异常处理。

#### get_session

获取默认 Session 对象。

- **输入**

无

- **输出**

默认的全局 Session 对象。  
如果你需要使用除了 GET 方法外的其他方法，或是需要进行身份认证等高级功能时，你需要通过该函数获得 Session。  
使用参考 [requests 官方文档](https://requests.readthedocs.io/zh_CN/latest/user/quickstart.html#id3)。

#### search_version_number_string

在字符串中匹配 x.y.z 版本号。

- **输入**

string：需匹配的字符串。

- **输出**

匹配到的字符串。  
若输入不为 None，使用 re 库匹配输入字符串。  
若匹配成功不为空，返回符合正则表达式的字符串。  
若未找到满足条件的字符串，返回 None。
::: tip 提示
该函数一般用于 _校验_ 获取的数据是否正确。
:::

#### get_value_from_app_id

获取 app_id 中的值。

- **输入**

1. app_id
2. key，搜索的键。例如：owner、android_app_package。

- **输出**

搜索到的键值，若没有符合的键则返回 None。

### NOTE

预置函数只包含了一些预测会经常使用的数据操作模式，它非常有可能不能满足你的需求.  
如果你认为某种数据操作模式是通用的，请给我们发送 [issue](https://github.com/DUpdateSystem/Server/issues/new/choose)与我们讨论后
提交你的 [pull requests](https://github.com/DUpdateSystem/Server/pulls) 或 让我们来实现它 :)
