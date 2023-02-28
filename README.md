# 视频会议 Web 应用

## 项目简介

本项目是一个基于 Web 的视频会议应用。用户可以通过浏览器加入视频会议房间，实现实时音视频通讯和屏幕共享。该应用使用 WebRTC 技术实现音视频通讯，使用 React 框架搭建前端页面，使用 Node.js 搭建后台服务。

## 技术栈

- React：https://reactjs.org/
- TypeScript：https://www.typescriptlang.org/
- WebRTC：https://webrtc.org/
- Node.js：https://nodejs.org/

## 项目结构

本项目的文件目录结构如下：
- `public`：包含了应用的入口文件 `index.html`，`favicon.ico` 和 `manifest.json`。
- `src`：包含了应用的所有源码。
  - `components`：组件文件夹。
  - `constants`：常量文件夹。
  - `hooks`：自定义 Hook 文件夹。
  - `i18n`：国际化文件夹。
  - `models`：模型文件夹。
  - `pages`：页面文件夹。
  - `services`：服务文件夹。
  - `stores`：状态管理文件夹。
  - `styles`：样式文件夹。
  - `utils`：工具类文件夹。
  - `App.less`：应用的主样式文件。
  - `App.tsx`：应用的根组件。
  - `index.tsx`：应用的入口文件。
  - `react-app-env.d.ts`：TypeScript 环境配置文件。
  - `setupTests.ts`：测试环境配置文件。
- `.eslintrc.js`：ESLint 配置文件。
- `.gitignore`：Git 忽略文件配置。
- `package-lock.json`：npm 包依赖版本锁定文件。
- `package.json`：npm 包管理文件。
- `README.md`：本文件，项目说明文档。

## 代码分层
本项目的代码分为如下几层：  

src/api: 封装与后端 API 通信的代码。  
src/components: 通用组件。  
src/models: MobX 状态管理器的数据模型。  
src/pages: 页面组件。  
src/routes: 路由配置。  
src/stores: MobX 状态管理器的实例。  
src/utils: 工具类函数和常量。  

## 开发流程
本项目的开发流程如下：  
新建一个 feature 分支（例如 feat-login）。  
完成开发、测试、代码规范检查、代码格式化等工作。  
向 develop 分支发起 pull request，等待管理员审核并合并。  
在 develop 分支测试通过之后，合并到 main 分支并部署上线。  
## 项目规范

本项目代码遵循以下规范：

### 代码规范
本项目使用 ESLint 进行代码规范检查，规范配置文件为 .eslintrc.js。具体配置细节可以查看该文件。

### 代码格式化
本项目使用 Prettier 进行代码格式化，规范配置文件为 .prettierrc。具体配置细节可以查看该文件。

### Git 提交规范
本项目的 Git 提交规范参考了 Angular 团队的提交规范。具体规范如下：
```
<type>(<scope>): <subject>

<body>

<footer>

```
其中，<type> 表示提交的类型，必须为以下几种之一：

feat: 新增功能
fix: 修复问题
docs: 文档变更
style: 代码样式变更（不影响功能）
refactor: 重构代码
perf: 性能优化
test: 测试变更
chore: 构建或辅助工具变更
<scope> 表示本次提交影响的范围，可选。

<subject> 表示本次提交的简要描述。

<body> 表示本次提交的详细描述，可选。

<footer> 表示本次提交的备注信息，可选。

一个完整的示例：
```
feat(login): add remember me checkbox

用户现在可以选择是否记住登录状态。

Closes #123

```