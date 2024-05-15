export const schema = gql`
  type Tag {
    id: String!
    name: String!
    userId: String!
    user: User!
    tabs: [Tab]!
  }

  type Query {
    tags: [Tag!]! @requireAuth
    tag(id: String!): Tag @requireAuth
  }

  input CreateTagInput {
    name: String!
    userId: String!
  }

  input UpdateTagInput {
    name: String
    userId: String
  }

  type Mutation {
    createTag(input: CreateTagInput!): Tag! @requireAuth
    updateTag(id: String!, input: UpdateTagInput!): Tag! @requireAuth
    deleteTag(id: String!): Tag! @requireAuth
  }
`
