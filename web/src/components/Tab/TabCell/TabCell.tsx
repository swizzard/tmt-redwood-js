import type { FindTabById, FindTabByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Tab from 'src/components/Tab/Tab'

export const QUERY: TypedDocumentNode<FindTabById, FindTabByIdVariables> = gql`
  query FindTabById($id: String!) {
    tab: tab(id: $id) {
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

export const Empty = () => <div>Tab not found</div>

export const Failure = ({ error }: CellFailureProps<FindTabByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  tab,
}: CellSuccessProps<FindTabById, FindTabByIdVariables>) => {
  return <Tab tab={tab} />
}
