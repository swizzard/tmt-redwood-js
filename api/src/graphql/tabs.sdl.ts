export const schema = gql`
  type Tab {
    id: String!
    url: String!
    title: String
    notes: String
    userId: String!
    user: User!
    tags: [TabTag]!
  }

  type Query {
    tabs: [Tab!]! @requireAuth
    tab(id: String!): Tab @requireAuth
  }

  input CreateTabInput {
    url: String!
    notes: String
    title: String
    userId: String!
    tags: [String]!
  }

  input UpdateTabInput {
    url: String
    notes: String
    title: String
    userId: String
    tags: [String]!
  }

  type Mutation {
    createTab(input: CreateTabInput!): Tab! @requireAuth
    updateTab(id: String!, input: UpdateTabInput!): Tab! @requireAuth
    deleteTab(id: String!): Tab! @requireAuth
  }
`
