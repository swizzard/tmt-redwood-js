import type { FindTabTags, FindTabTagsVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import TabTags from 'src/components/TabTag/TabTags'

export const QUERY: TypedDocumentNode<FindTabTags, FindTabTagsVariables> = gql`
  query FindTabTags {
    tabTags {
      id
      tabId
      tagId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tabTags yet. '}
      <Link to={routes.newTabTag()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindTabTags>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  tabTags,
}: CellSuccessProps<FindTabTags, FindTabTagsVariables>) => {
  return <TabTags tabTags={tabTags} />
}
