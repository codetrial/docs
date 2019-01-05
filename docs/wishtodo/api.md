# 接口管理

## Todo

### GET /api/todos

描述：查询 TODO 列表。

返回值：

```json
[
  {
    "id": 1,
    "title": "Be professional",
    "status": "UNDERWAY"
  },
  {
    "id": 2,
    "title": "Be dedicated",
    "status": "COMPLETE"
  },
  {
    "id": 3,
    "title": "Be what you want to be",
    "status": "UNDERWAY"
  }
]
```

### GET /api/todos/:id

描述：查询单个 TODO。

返回值：

```json
{
  "id": 3,
  "title": "Be what you want to be",
  "status": "UNDERWAY",
  "wisher": {
    "id": 1,
    "name": "Felix Yang"
  }
}
```

## Wisher

### GET /api/wishers

描述：查询 Wisher 列表。

返回值：

```json
[
  {
    "id": 1,
    "name": "Felix Yang"
  }
]
```

### GET /api/wishers/:id

描述：查询单个 Wisher。

返回值：

```json
{
  "id": 1,
  "name": "Felix Yang",
  "todos": [
    {
      "id": 1,
      "title": "Be professional",
      "status": "UNDERWAY"
    },
    {
      "id": 2,
      "title": "Be dedicated",
      "status": "COMPLETE"
    },
    {
      "id": 3,
      "title": "Be what you want to be",
      "status": "UNDERWAY"
    }
  ]
}
```
