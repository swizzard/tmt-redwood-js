import type {
  DeleteTabTagMutation,
  DeleteTabTagMutationVariables,
  FindTabTags,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/TabTag/TabTagsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_TAB_TAG_MUTATION: TypedDocumentNode<
  DeleteTabTagMutation,
  DeleteTabTagMutationVariables
> = gql`
  mutation DeleteTabTagMutation($id: String!) {
    deleteTabTag(id: $id) {
      id
    }
  }
`

const TabTagsList = ({ tabTags }: FindTabTags) => {
  const [deleteTabTag] = useMutation(DELETE_TAB_TAG_MUTATION, {
    onCompleted: () => {
      toast.success('TabTag deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteTabTagMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete tabTag ' + id + '?')) {
      deleteTabTag({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tab id</th>
            <th>Tag id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tabTags.map((tabTag) => (
            <tr key={tabTag.id}>
              <td>{truncate(tabTag.id)}</td>
              <td>{truncate(tabTag.tabId)}</td>
              <td>{truncate(tabTag.tagId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.tabTag({ id: tabTag.id })}
                    title={'Show tabTag ' + tabTag.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTabTag({ id: tabTag.id })}
                    title={'Edit tabTag ' + tabTag.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete tabTag ' + tabTag.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(tabTag.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TabTagsList
