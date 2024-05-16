import type {
  DeleteTabTagMutation,
  DeleteTabTagMutationVariables,
  FindTabTagById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

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

interface Props {
  tabTag: NonNullable<FindTabTagById['tabTag']>
}

const TabTag = ({ tabTag }: Props) => {
  const [deleteTabTag] = useMutation(DELETE_TAB_TAG_MUTATION, {
    onCompleted: () => {
      toast.success('TabTag deleted')
      navigate(routes.tabTags())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteTabTagMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete tabTag ' + id + '?')) {
      deleteTabTag({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            TabTag {tabTag.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{tabTag.id}</td>
            </tr>
            <tr>
              <th>Tab id</th>
              <td>{tabTag.tabId}</td>
            </tr>
            <tr>
              <th>Tag id</th>
              <td>{tabTag.tagId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTabTag({ id: tabTag.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(tabTag.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default TabTag
