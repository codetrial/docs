# GraphQL

## Query Schema

```graphql
type Query {
  todo(id: ID!): Todo
  todoList: [Todo]!

  wisher(id: ID!): Wisher
  wisherList: [Wisher]!
}

type Todo {
  id: ID!
  title: String!
  status: String!

  wisher: Wisher!
}

type Wisher {
  id: ID!
  name: String!

  todos: [Todo]!
}
```

## Mutation Schema

```graphql
type Mutation {
  saveTodo(todo: TodoEntity!, wisher: WisherEntity!): Todo
  removeTodo(id: ID!): ID

  saveWisher(wisher: WisherEntity!): Wisher
  removeWisher(id: ID!): ID
}

input TodoEntity {
  id: ID
  title: String
  status: String
}

input WisherEntity {
  id: ID
  name: String
}
```
