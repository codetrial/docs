# 用户接口

## 用户管理

### GET /api/user

描述：查询用户列表。支持分页及查询条件。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": {
    "list": [
      {
        "id": 1,
        "email": "felixpy.1993@gmail.com",
        "name": "Felix Yang",
        "create_time": "2018-12-08T11:24:42.000Z",
        "update_time": "2018-12-08T11:24:44.000Z"
      }
    ],
    "pagination": {}
  }
}
```

### GET /api/user/:id

描述：查询单个用户。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": {
    "list": [
      {
        "id": 1,
        "email": "felixpy.1993@gmail.com",
        "name": "Felix Yang",
        "create_time": "2018-12-08T11:24:42.000Z",
        "update_time": "2018-12-08T11:24:44.000Z"
      }
    ],
    "pagination": {}
  }
}
```

### POST /api/user/:id

描述：创建用户。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": {
    "id": 1,
    "email": "felixpy.1993@gmail.com",
    "name": "Felix Yang",
    "create_time": "2018-12-08T11:24:42.000Z",
    "update_time": "2018-12-08T11:24:44.000Z"
  }
}
```

### PUT /api/user/:id

描述：修改用户。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": [1]
}
```

### DELETE /api/user/:id

描述：删除用户。同时会删除用户与分组、角色的关联关系。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": [1]
}
```

## 用户的分组管理

### GET /api/user/:id/group

描述：查询用户下的分组。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": [
    {
      "id": 1,
      "app_id": 1,
      "code": "BOOK_SUPER_GROUP",
      "name": "Book Super Group",
      "create_time": "2018-12-08T11:23:23.000Z",
      "update_time": "2018-12-08T11:23:26.000Z"
    }
  ]
}
```

### POST /api/user/:id/group

描述：为用户新增分组。可传递一个 ID 数组逗号分割的 ID 字符串。

返回值：

```json
{
  "status": "200",
  "message": "success"
}
```

### DELETE /api/user/:id/group

描述：删除用户下的分组。可传递一个 ID 数组逗号分割的 ID 字符串，不传则全部删除。

返回值：

```json
{
  "status": "200",
  "message": "success"
}
```

## 用户的角色管理

### GET /api/user/:id/role

描述：查询用户下的角色。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": [
    {
      "id": 1,
      "app_id": 1,
      "code": "BOOK_ADMIN",
      "name": "Book Admin",
      "create_time": "2018-12-08T11:19:53.000Z",
      "update_time": "2018-12-08T11:20:01.000Z"
    },
    {
      "id": 2,
      "app_id": 1,
      "code": "CHAPTER_ADMIN",
      "name": "Chapter Admin",
      "create_time": "2018-12-08T11:26:38.000Z",
      "update_time": "2018-12-08T11:26:39.000Z"
    }
  ]
}
```

### POST /api/user/:id/role

描述：为用户新增角色。可传递一个 ID 数组逗号分割的 ID 字符串。

返回值：

```json
{
  "status": "200",
  "message": "success"
}
```

### DELETE /api/user/:id/role

描述：删除用户下的角色。可传递一个 ID 数组逗号分割的 ID 字符串，不传则全部删除。

返回值：

```json
{
  "status": "200",
  "message": "success"
}
```

## 用户的资源管理

### GET /api/user/:id/resource

描述：获取用户通过分组、角色授权得到的所有资源。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": [
    {
      "id": 1,
      "app_id": 1,
      "code": "/book",
      "resource_type_id": 1,
      "detail": "Book List",
      "create_time": "2018-12-08T11:05:21.000Z",
      "update_time": "2018-12-08T11:05:22.000Z"
    },
    {
      "id": 2,
      "app_id": 1,
      "code": "BOOK_SAVE_BTN",
      "resource_type_id": 2,
      "detail": "Save Book",
      "create_time": "2018-12-08T11:05:49.000Z",
      "update_time": "2018-12-08T11:05:51.000Z"
    },
    {
      "id": 3,
      "app_id": 1,
      "code": "/chapter",
      "resource_type_id": 1,
      "detail": "Chapter List",
      "create_time": "2018-12-08T11:25:45.000Z",
      "update_time": "2018-12-08T11:25:47.000Z"
    },
    {
      "id": 4,
      "app_id": 1,
      "code": "CHAPTER_SAVE_BTN",
      "resource_type_id": 2,
      "detail": "Save Chapter",
      "create_time": "2018-12-08T11:26:12.000Z",
      "update_time": "2018-12-08T11:26:14.000Z"
    }
  ]
}
```
