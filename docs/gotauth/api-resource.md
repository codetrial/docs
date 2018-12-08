# 资源接口

## 资源管理

### GET /api/resource

描述：查询资源列表。支持分页及查询条件。

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
        "code": "/book",
        "resource_type_id": 1,
        "detail": "Book List",
        "create_time": "2018-12-08T11:05:21.000Z",
        "update_time": "2018-12-08T11:05:22.000Z"
      }
    ],
    "pagination": {}
  }
}
```

### GET /api/resource/:id

描述：查询单个资源。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": {
    "id": 1,
    "app_id": 1,
    "code": "/book",
    "resource_type_id": 1,
    "detail": "Book List",
    "create_time": "2018-12-08T11:05:21.000Z",
    "update_time": "2018-12-08T11:05:22.000Z"
  }
}
```

### POST /api/resource/:id

描述：创建资源。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": {
    "id": 1,
    "app_id": 1,
    "code": "/book",
    "resource_type_id": 1,
    "detail": "Book List",
    "create_time": "2018-12-08T11:05:21.000Z",
    "update_time": "2018-12-08T11:05:22.000Z"
  }
}
```

### PUT /api/resource/:id

描述：修改资源。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": [1]
}
```

### DELETE /api/resource/:id

描述：删除资源。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": [1]
}
```

## 资源分类管理

### GET /api/resource-type

描述：查询资源分类列表。支持分页及查询条件。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": {
    "list": [
      {
        "id": 1,
        "code": "URI",
        "name": "HTTP URI",
        "create_time": "2018-12-08T11:03:40.000Z",
        "update_time": "2018-12-08T11:03:56.000Z"
      },
      {
        "id": 2,
        "code": "BUTTON",
        "name": "PAGE BUTTON",
        "create_time": "2018-12-08T11:05:16.000Z",
        "update_time": "2018-12-08T11:05:23.000Z"
      }
    ],
    "pagination": {}
  }
}
```

### GET /api/resource-type/:id

描述：获取单个资源分类。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": {
    "id": 1,
    "code": "URI",
    "name": "HTTP URI",
    "create_time": "2018-12-08T11:03:40.000Z",
    "update_time": "2018-12-08T11:03:56.000Z"
  }
}
```

### POST /api/resource-type

描述：创建资源类型。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": {
    "id": 1,
    "code": "URI",
    "name": "HTTP URI",
    "create_time": "2018-12-08T11:03:40.000Z",
    "update_time": "2018-12-08T11:03:56.000Z"
  }
}
```

### PUT /api/resource-type

描述：修改资源类型。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": [1]
}
```

### DELETE /api/resource-type

描述：删除资源类型。会关联删除该类型下等所有资源。

返回值：

```json
{
  "status": "200",
  "message": "success",
  "data": [1]
}
```
