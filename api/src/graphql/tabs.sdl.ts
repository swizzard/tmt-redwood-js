export const schema = gql`
  type Tab {
    id: String!
    url: String!
    notes: String
    userId: String!
    user: User!
    tags: [Tag]!
  }

  type Query {
    tabs: [Tab!]! @requireAuth
    tab(id: String!): Tab @requireAuth
  }

  input CreateTabInput {
    url: String!
    notes: String
    userId: String!
  }

  input UpdateTabInput {
    url: String
    notes: String
    userId: String
  }

  type Mutation {
    createTab(input: CreateTabInput!): Tab! @requireAuth
    updateTab(id: String!, input: UpdateTabInput!): Tab! @requireAuth
    deleteTab(id: String!): Tab! @requireAuth
  }
`
