# 项目名称
这是一个视频会议项目，使用React、MobX和TypeScript开发。

## 开始
1. 克隆代码到本地：`git clone gitlab@gitlab.talk-cloud.com:tk_h5_source/web-meeting-pc.git`
2. 进入项目目录：`cd web-meeting-pc`
3. 安装依赖：`npm install`
4. 启动开发服务器：`npm start`

## 构建
运行以下命令构建项目：
npm run build



## 测试
运行以下命令进行单元测试：
npm run test


## 代码风格
使用ESLint进行代码风格检查，运行以下命令进行检查：
npm run lint


## 技术栈
- React
- MobX
- TypeScript

## 目录结构
```
├── public/                 # 存放静态资源文件的目录，如index.html、favicon.ico、manifest.json等
├── src/                    # 存放源代码的目录
│   ├── App.tsx            # 项目的入口文件，渲染整个应用程序的根组件
│   ├── index.tsx          # 项目的webpack入口文件
│   ├── components/        # 存放所有的React组件的目录
│   ├── models/            # 存放定义项目中所有数据模型的目录
│   ├── stores/            # 存放所有Mobx的store的目录
│   ├── services/          # 存放所有API服务的目录
│   ├── styles/            # 存放所有样式文件的目录
│   └── utils/             # 存放所有通用工具函数的目录
├── tests/                  # 存放所有测试代码的目录
├── .gitignore              # Git忽略文件配置
├── package.json            # npm包配置文件
├── tsconfig.json           # TypeScript配置文件
└── README.md               # 项目的说明文档

```

## 许可证
MIT