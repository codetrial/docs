# GraphQL

## Query Schema

```graphql
# page filter 都为 JSON 字符串
input SearchParam {
  page: String
  filter: String
}

type Query {
  app(id: ID!): App
  apps(param: SearchParam): [App]!

  group(id: ID!): Group
  groups(param: SearchParam): [Group]!

  role(id: ID!): Role
  roles(param: SearchParam): [Role]!

  resourceType(id: ID!): ResourceType
  resourceTypes(param: SearchParam): [ResourceType]!

  resource(id: ID!): Resource
  resources(param: SearchParam): [Resource]!

  user(id: ID!): User
  users(param: SearchParam): [User]!
}
```

## Mutation Schema

```graphql
type MutationResponse {
  status: Int
  message: String
}

type Mutation {
  createApp(data: AppEntity!): MutationResponse
  updateApp(id: [ID]!, data: AppEntity!): MutationResponse
  destroyApp(id: [ID]!): MutationResponse

  createGroup(data: GroupEntity!): MutationResponse
  updateGroup(id: [ID]!, data: GroupEntity!): MutationResponse
  destroyGroup(id: [ID]!): MutationResponse
  addGroupRole(id: ID!, roles: [ID]!): MutationResponse
  removeGroupRole(id: ID!, roles: [ID]!): MutationResponse

  createRole(data: RoleEntity!): MutationResponse
  updateRole(id: [ID]!, data: RoleEntity!): MutationResponse
  destroyRole(id: [ID]!): MutationResponse
  addRoleResource(id: ID!, resources: [ID]!): MutationResponse
  removeRoleResource(id: ID!, resources: [ID]!): MutationResponse

  createResource(data: ResourceEntity!): MutationResponse
  updateResource(id: [ID]!, data: ResourceEntity!): MutationResponse
  destroyResource(id: [ID]!): MutationResponse

  createResourceType(data: ResourceTypeEntity!): MutationResponse
  updateResourceType(id: [ID]!, data: ResourceTypeEntity!): MutationResponse
  destroyResourceType(id: [ID]!): MutationResponse

  createUser(data: UserEntity!): MutationResponse
  updateUser(id: [ID]!, data: UserEntity!): MutationResponse
  destroyUser(id: [ID]!): MutationResponse
  addUserGroup(id: ID!, groups: [ID]!): MutationResponse
  removeUserGroup(id: ID!, groups: [ID]!): MutationResponse
  addUserRole(id: ID!, roles: [ID]!): MutationResponse
  removeUserRole(id: ID!, roles: [ID]!): MutationResponse
}
```
