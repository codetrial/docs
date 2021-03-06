# 功能简介

GOT Auth 是一个专为企业级后台管理系统打造的基于角色的专业鉴权服务（也支持资源和分组）。既可以用于后台 URI 访问权限，也可以用于控制前端页面展现。

在线预览：

- 接口服务 - [Got Auth Service](https://gotauth-api.felixpy.com)

![Screen Capture](https://user-images.githubusercontent.com/2902215/50770005-bc14a080-12c0-11e9-8a8d-fabb2077eb11.gif)

仓库地址：

- Service - [codetrial/got-auth-service](https://github.com/codetrial/got-auth-service)

后端主要技术：

- Node.js
- Egg.js
- MySQL
- GraphQL

## 系统划分

### 应用方

使用鉴权系统的相关系统，下面的资源、角色和分组都必须属于某个应用方。

### 资源

用于描述被鉴权的基本单元，可以被分成多种类型，比如 URI、按钮等。需要注意的是，资源不可以单独分配给用户。

### 角色

一个角色可以包含多个资源，本身也可以单独用于鉴权。可以直接分配给用户。

### 分组

把多个角色聚合为一个分组，从而可以更快的进行授权。本身也可以单独用于鉴权。可以直接分配给用户。

### 用户

业务系统的用户，可以为用户授予分组或角色。
