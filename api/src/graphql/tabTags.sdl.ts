export const schema = gql`
  type TabTag {
    id: String!
    tabId: String!
    tagId: String!
    tab: Tab!
    tag: Tag!
  }

  type Query {
    tabTags: [TabTag!]! @requireAuth
    tabTag(id: String!): TabTag @requireAuth
  }

  input CreateTabTagInput {
    tabId: String!
    tagId: String!
  }

  input UpdateTabTagInput {
    tabId: String
    tagId: String
  }

  type Mutation {
    createTabTag(input: CreateTabTagInput!): TabTag! @requireAuth
    updateTabTag(id: String!, input: UpdateTabTagInput!): TabTag! @requireAuth
    deleteTabTag(id: String!): TabTag! @requireAuth
  }
`
