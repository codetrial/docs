# 角色接口

## 角色管理

### GET /api/role

描述：查询角色列表。支持分页及查询条件。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": {
    "list": [
      {
        "id": 1,
        "app_id": 1,
        "code": "BOOK_ADMIN",
        "name": "Book Admin",
        "create_time": "2018-12-08T11:19:53.000Z",
        "update_time": "2018-12-08T11:20:01.000Z"
      }
    ],
    "pagination": {}
  }
}
```

### GET /api/role/:id

描述：查询角色列表。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": {
    "id": 1,
    "app_id": 1,
    "code": "BOOK_ADMIN",
    "name": "Book Admin",
    "create_time": "2018-12-08T11:19:53.000Z",
    "update_time": "2018-12-08T11:20:01.000Z"
  }
}
```

### POST /api/role/:id

描述：创建角色。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": {
    "id": 1,
    "app_id": 1,
    "code": "BOOK_ADMIN",
    "name": "Book Admin",
    "create_time": "2018-12-08T11:19:53.000Z",
    "update_time": "2018-12-08T11:20:01.000Z"
  }
}
```

### PUT /api/role/:id

描述：修改角色。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": [1]
}
```

### DELETE /api/role/:id

描述：删除角色。同时会清除角色与分组、资源和用户的关联关系。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": [1]
}
```

## 角色下的资源管理

### GET /api/role/:id/resource

描述：查询角色下的资源。

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
    }
  ]
}
```

### POST /api/role/:id/resource

描述：为角色新增资源。可传递一个 ID 数组逗号分割的 ID 字符串。

返回值：

```json
{
  "status": "200",
  "message": "success"
}
```

### DELETE /api/role/:id/resource

描述：删除角色下的资源。可传递一个 ID 数组逗号分割的 ID 字符串，不传则全部删除。

返回值：

```json
{
  "status": "200",
  "message": "success"
}
```
