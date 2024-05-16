import type { FindTabTagById, FindTabTagByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import TabTag from 'src/components/TabTag/TabTag'

export const QUERY: TypedDocumentNode<
  FindTabTagById,
  FindTabTagByIdVariables
> = gql`
  query FindTabTagById($id: String!) {
    tabTag: tabTag(id: $id) {
      id
      tabId
      tagId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>TabTag not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindTabTagByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  tabTag,
}: CellSuccessProps<FindTabTagById, FindTabTagByIdVariables>) => {
  return <TabTag tabTag={tabTag} />
}
