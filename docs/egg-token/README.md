# Egg.js Token Plugin

基于加密 Token 的 Egg.js 接口鉴权中间件。

仓库地址：

- Plugin - [codetrial/egg-token](https://github.com/codetrial/egg-token)
- Example - [GOT Auth Service](https://github.com/codetrial/got-auth-service)

主要技术：

- Koa
- Egg.js

## 安装

```bash
npm i egg-token
# or
yarn add egg-token
```

## 使用方法

```js
// {app_root}/config/plugin.js
exports.token = {
  enable: true,
  package: 'egg-token'
}
```

## 配置

### 插件选项

```js
exports.token = {
  type: 'md5',

  apps: {
    felixpy: {
      secret: 'XnMib79vzwP01gtr',
      expires: 30000
    },
    codetrial: {
      secret: 'mi9yNGT6zwrqMv8z',
      expires: 30000
    }
  }
}
```

::: tip
`type` 是用来加密的 hash 算法类型。参考 [crypto.createHash](https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options) 查看更多详情。

`apps` 中的每个键名是分配给应用方的 code, `secret` 是用来生成 token 的密钥，而 `expires` 则是每个 token 的有效期。
:::

### 全局开启

```js
// {app_root}/config/config.default.js
exports.middleware = ['token']
```

### 部分开启

```js
// {app_root}/app/router.js
module.exports = app => {
  const { router, controller, middlewares, config } = app
  const token = middlewares.token(config.token, app)

  router.get('/', token, controller.home.index)
}
```

生成 token 的方式如下：

```js
const ts = Date.now()
const md5Value = md5(`${APP_CODE}:${ts}:${APP_SECRET}`)
const token = base64Encode(`${APP_CODE}:${ts}:${md5Value}`)
```

## 示例

以下是一个使用 axios 请求 API 接口的示例：

```js
const crypto = require('crypto')
const axios = require('axios')

const hash = crypto.createHash('md5')

const APP_CODE = 'felixpy'
const APP_SECRET = 'XnMib79vzwP01gtr'

const ts = Date.now()
const md5Value = hash.update(`${APP_CODE}:${ts}:${APP_SECRET}`).digest('hex')

const token = Buffer.from(`${APP_CODE}:${ts}:${md5Value}`).toString('base64')

axios.get('/url/to/your/egg/service', {
  headers: {
    'egg-api-token': token
  }
})
```
