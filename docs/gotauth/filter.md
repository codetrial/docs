# 分页及过滤条件

对于支持分页和过滤的列表接口，可以通过查询参数获取对应的结果。

## 分页

请求形式：`/api/app?page=XXX`

参数格式：

```json
{
  "page": {
    "order": "id,name",
    "orderBy": "desc,asc",
    "pageNo": 1,
    "pageSize": 10
  }
}
```

::: tip
排序参数可以有多个，以逗号分割即可。
:::

::: warning
接口查询时，`page` 需要转为 JSON 字符串。
:::

## 过滤

请求形式：`/api/app?filter=XXX`

参数格式：

```json
{
  "filter": {
    "EQ_id": "1"
  }
}
```

::: tip
参数格式为 `操作符_字段名`，SequelizeJS 的所有操作符，详情情查看：[Where Operators](http://docs.sequelizejs.com/manual/tutorial/querying.html#operators)
:::

::: warning
接口查询时，`filter` 需要转为 JSON 字符串。
:::
