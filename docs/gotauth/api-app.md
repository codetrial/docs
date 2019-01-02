# 应用方接口

## 应用方管理

### GET /api/app

描述：查询应用方列表。支持分页及查询条件。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": {
    "list": [
      {
        "id": 1,
        "code": "SystemX",
        "name": "The System X",
        "create_time": "2018-11-17T08:39:57.000Z",
        "update_time": "2018-11-17T08:41:09.000Z"
      }
    ],
    "pagination": {}
  }
}
```

### GET /api/app/:id

描述：查询单个应用方。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": {
    "id": 1,
    "code": "SystemX",
    "name": "The System X",
    "create_time": "2018-11-17T08:39:57.000Z",
    "update_time": "2018-11-17T08:41:09.000Z"
  }
}
```

### POST /api/app

描述：创建应用方。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": {
    "id": 1,
    "code": "SystemX",
    "name": "The System X",
    "create_time": "2018-11-17T08:39:57.000Z",
    "update_time": "2018-11-17T08:41:09.000Z"
  }
}
```

### PUT /api/app/:id

描述：修改应用方。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": [1]
}
```

### DELETE /api/app/:id

描述：删除应用方。会关联删除应用方下面的分组、角色和资源。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": [1]
}
```

## 应用方的资源、角色及分组

### GET /api/app/:id/resource

描述：查询应用方下的资源。

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

### GET /api/app/:id/role

描述：查询应用方下的资源。

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

### GET /api/app/:id/group

描述：查询应用方下的资源。

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
