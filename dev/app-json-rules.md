# 跟踪项配置编写
## JSON 内容示意

```json
{
  "base_version": 1,
  "uuid": "f27f71e1-d7a1-4fd1-bbcc-9744380611a1",
  "info": {
    "app_name": "UpgradeAll",
    "config_version": 1,
    "url": "https://github.com/xz-dev/UpgradeAll"
  },
  "app_config": {
    "hub_info": {
      "hub_uuid": "fd9b2602-62c5-4d55-bd1e-0d6537714ca0"
    },
    "target_checker": {
      "api": "App_Package",
      "extra_string": "net.xzos.upgradeall"
    }
  }
}
```

## 节点解释

### base_version

**当前最新版本号：1**  
该值标记该配置文件遵守的跟踪项配置格式标准  
过时的版本号（过低的值）可能导致软件无法读取解析当前配置文件

### uuid

该字符串作为跟踪项配置的唯一识别码(UUID v4)  
若用户从云端仓库拉取了你的配置文件，该 UUID 将一并被软件记录，并且后续检查云端配置更新都将以该值为标准  
**注意**：UUID 与配置文件（包括软件源）一一对应，且作为唯一识别码（你可以理解为身份证号码）

### info

该节点包括软件源的大部分不强制规定书写格式的描述性文本

#### app_name

你认为跟踪项应该叫做的名字（尽量使用大家都了解含义的词语，请不要一味套用相关的项目名称，因为那可能长且无明确意义）

#### config_version

跟踪项配置的版本号，用来告诉 UpgrdeAll 软件是否应该使用云端配置更新本地配置  
一般来说，每次你修改并上传云端，你都应该将该值加一

#### url

跟踪项的软件项目地址

- 在每次 UpgradeAll 检查更新时，软件将会将该值作为变量传入软件源脚本运行环境，以便于软件源脚本获知它应该从哪个网址获取更新信息
- 同时，该地址也会展示在用户界面，以便用户可以访问该网址以查看被跟踪的软件的相关信息

### app_config

跟踪项核心配置相关

#### hub_info

跟踪项调用的软件源相关信息

##### hub_uuid

跟踪项调用的软件源的 UUID（UpgradeAll 软件使用 UUID 识别软件源）  
>软件源UUID:  
>- GITHUB：fd9b2602-62c5-4d55-bd1e-0d6537714ca0  
>- COOLAPK：1c010cc9-cff8-4461-8993-a86cd190d377  
>- 手机乐园：1c010cc9-cff8-4461-8993-a86mm190d377  
>- F-droid：6a6d590b-1809-41bf-8ce3-7e3f6c8da945  
>- GITLAB：a84e2fbe-1478-4db5-80ae-75d00454c7eb  
>- Xposed Module Repository：e02a95a2-af76-426c-9702-c4c39a01f891  

#### target_checker

用于获取跟踪项本地信息

##### api

UpgradeAll 将通过哪个 API 获取被跟踪的软件的本地信息

> 可能的值:
>
> - App_Package（软件包名）
> - Magisk_Module（Magisk 模块文件夹名）
> - Shell（自定义 Shell 命令）
> - Shell_Root（具有 Root 权限的自定义 Shell 命令）

##### extra_string

软件获取被跟踪的软件的本地信息时需要的附加信息
例如：

- 软件包名
- Magisk 模块文件夹名
- Shell 命令

