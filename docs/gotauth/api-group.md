# 分组接口

## 分组管理

### GET /api/group

描述：查询分组列表。支持分页及查询条件。

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
        "code": "BOOK_SUPER_GROUP",
        "name": "Book Super Group",
        "create_time": "2018-12-08T11:23:23.000Z",
        "update_time": "2018-12-08T11:23:26.000Z"
      }
    ],
    "pagination": {}
  }
}
```

### GET /api/group/:id

描述：查询单个分组。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": {
    "id": 1,
    "app_id": 1,
    "code": "BOOK_SUPER_GROUP",
    "name": "Book Super Group",
    "create_time": "2018-12-08T11:23:23.000Z",
    "update_time": "2018-12-08T11:23:26.000Z"
  }
}
```

### POST /api/group/:id

描述：创建分组。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": {
    "id": 1,
    "app_id": 1,
    "code": "BOOK_SUPER_GROUP",
    "name": "Book Super Group",
    "create_time": "2018-12-08T11:23:23.000Z",
    "update_time": "2018-12-08T11:23:26.000Z"
  }
}
```

### PUT /api/group/:id

描述：修改分组。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": [1]
}
```

### DELETE /api/group/:id

描述：删除分组。同时会删除分组与角色、用户的关联关系。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": [1]
}
```

## 分组下的角色管理

### GET /api/group/:id/role

描述：查询分组下的角色。

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

### POST /api/group/:id/role

描述：为分组新增角色。可传递一个 ID 数组逗号分割的 ID 字符串。

返回值：

```json
{
  "status": "200",
  "message": "success"
}
```

### DELETE /api/group/:id/role

描述：删除分组下的角色。可传递一个 ID 数组逗号分割的 ID 字符串，不传则全部删除。

返回值：

```json
{
  "status": "200",
  "message": "success"
}
```
