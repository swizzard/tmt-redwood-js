import type {
  DeleteTabMutation,
  DeleteTabMutationVariables,
  FindTabById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_TAB_MUTATION: TypedDocumentNode<
  DeleteTabMutation,
  DeleteTabMutationVariables
> = gql`
  mutation DeleteTabMutation($id: String!) {
    deleteTab(id: $id) {
      id
    }
  }
`

interface Props {
  tab: NonNullable<FindTabById['tab']>
}

const Tab = ({ tab }: Props) => {
  const [deleteTab] = useMutation(DELETE_TAB_MUTATION, {
    onCompleted: () => {
      toast.success('Tab deleted')
      navigate(routes.tabs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteTabMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete tab ' + id + '?')) {
      deleteTab({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Tab {tab.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{tab.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{tab.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTab({ id: tab.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(tab.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Tab
