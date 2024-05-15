import type { FindTabs, FindTabsVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Tabs from 'src/components/Tab/Tabs'

export const QUERY: TypedDocumentNode<FindTabs, FindTabsVariables> = gql`
  query FindTabs {
    tabs {
      id
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tabs yet. '}
      <Link to={routes.newTab()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindTabs>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  tabs,
}: CellSuccessProps<FindTabs, FindTabsVariables>) => {
  return <Tabs tabs={tabs} />
}
