export const schema = gql`
  type User {
    id: String!
    externalAuthProvider: String!
    externalAuthId: String!
    tabs: [Tab]!
    tags: [Tag]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    externalAuthProvider: String!
    externalAuthId: String!
  }

  input UpdateUserInput {
    externalAuthProvider: String
    externalAuthId: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
