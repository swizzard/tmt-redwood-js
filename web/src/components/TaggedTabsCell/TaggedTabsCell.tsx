import type { TaggedTabsQuery, TaggedTabsQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Tabs from 'src/components/Tab/Tabs'

export const QUERY: TypedDocumentNode<
  TaggedTabsQuery,
  TaggedTabsQueryVariables
> = gql`
  query TaggedTabsQuery($tagId: String!) {
    tag(id: $tagId) {
      name
    }
    taggedTabs(id: $tagId) {
      id
      url
      notes
      userId
      tags {
        tag {
          id
          name
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  tag,
  taggedTabs,
}: CellSuccessProps<TaggedTabsQuery>) => {
  return (
    <div>
      <h1>Tabs tagged "{tag.name}"</h1>
      <Tabs tabs={taggedTabs} fromTags={true} />
    </div>
  )
}
