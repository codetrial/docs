# Element Admin

使用 Vue CLI 3 及 Element UI 闪电般构建一个企业级后台管理系统。

在线预览：

- [Element Admin](https://element-admin.now.sh)

![Screen Capture](/preview/element-admin.gif)

仓库地址：

- Plugin - [codetrial/vue-cli-plugin-element](https://github.com/codetrial/vue-cli-plugin-element)
- Demo - [Element Admin](https://github.com/codetrial/element-admin)

主要技术：

- Vue CLI 3
- Element UI

## 使用指南

### 前置依赖

在开始前，你需要先安装 Vue CLI 3：

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

### 安装

#### Preset

你可以通过 preset 的方式直接创建你的项目，它已经包含了 ESLint 等插件的配置。

```bash
vue create --preset codetrial/vue-cli-plugin-element your-awesome-project
```

如果你不想使用 preset 的方式，你也可以先通过 vue-cli 手动创建一个空的项目。

```bash
# 确保你创建的项目选择了以下功能：
# - Babel
# - PWA
# - Router
# - Vuex
# - CSS Pre-processors + Sass
# - Linter - Formatter
vue create your-awesome-project
```

#### Plugin

然后通过 vue 将插件添加到你的项目中。

```bash
vue add @codetrial/element
```

## 核心功能

:camera: **最小依赖**：仅依赖 Vue 官方库及 ElementUI 组件库，未额外引入其它第三方库，为你提供自由发挥的空间。

:tv: **目录结构**：根据项目实战经验，设计了合理、清晰的目录结构。

:telephone_receiver: **页面布局**：使用 Vue Router 嵌套路由及 ElementUI 内置组件进行布局。

:pager: **数据处理**：添加独立的 api 及 service 层，将业务逻辑从组件中抽离。

:watch: **权限控制**：为路由添加配置式拦截器，默认支持用户登录鉴权及角色鉴权。

:radio: **列表示例**：一个相对比较完整的列表页示例，包含字段查询（过滤），字段排序，页码跳转，批量操作等等。

:mag_right: **表单示例**：一个相对比较完整的表单页示例，包含表单校验、提交等操作。

:ghost: **错误页面**：内置简单的（其实是偷懒） 403、404 及 500 错误页。

## 目录结构

```bash
.
├── App.vue
├── api    # 远程接口服务
│   └── index.js
├── assets
│   └── logo.png
├── components
│   ├── errors    # 错误组件
│   │   ├── 403.vue
│   │   ├── 404.vue
│   │   ├── 500.vue
│   │   ├── index.js
│   │   └── index.scss
│   └── layout    # 布局组件
│       ├── AppBreadcrumb.vue
│       ├── AppFooter.vue
│       ├── AppHeader.vue
│       ├── AppLayout.vue
│       └── BlankLayout.vue
├── constants    # 常量及配置
│   └── index.js
├── main.js
├── registerElementUI.js
├── registerServiceWorker.js
├── router    # Router
│   ├── index.js
│   └── interceptors    # 拦截器（路由守卫）
│       ├── role.js
│       └── user.js
├── services    # 业务数据处理层
│   └── index.js
├── store    # Store
│   ├── index.js
│   └── modules    # Store 子模块
│       └── example.js
├── styles    # 样式
│   ├── app
│   │   ├── base    # 通用、布局样式
│   │   │   └── index.scss
│   │   ├── form    # 表单相关
│   │   │   └── index.scss
│   │   ├── helper    # 辅助样式
│   │   │   └── index.scss
│   │   ├── index.scss
│   │   └── table    # 列表样式
│   │       └── index.scss
│   └── theme    # 主题覆盖
│       └── element-variables.scss
├── utils    # 工具函数
│   └── request.js
└── views    # 页面视图
    ├── About.vue
    ├── Home.vue
    ├── Login.vue
    └── example
        ├── AdminAuthorized.vue
        ├── Form.vue
        ├── Table.vue
        └── config.js
```
