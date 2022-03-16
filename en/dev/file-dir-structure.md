# 云端仓库的目录结构

```text
.
├── LICENSE
├── README.md
└── rules
    ├── apps
    │   ├── [Magisk_Module]Riru Core.json
    │   ├── MiPushFramework.json
    │   └── UpgradeAll.json
    ├── hub
    │   ├── CoolApk.json
    │   ├── GitHub.json
    │   ├── zlive.json
    │   ├── js
    │   │   ├── CoolApk.js
    │   │   ├── GitHub.js
    │   │   └── zlive.js
    └── rules_list.json
```

## 子目录功能解释

### rules

存放所有云端规则相关文件

### rules/rules_list.json

存放所有规则相关的配置，用于软件索引云端仓库

### rules/apps

存放所有 App（跟踪项）相关文件

### rules/hub

存放所有软件源相关文件  
该目录下的 json 文件用于提供软件源的基本信息，并标识相关的脚本

### rules/hub/js

存放所有软件源相关的 JavaScript 脚本
