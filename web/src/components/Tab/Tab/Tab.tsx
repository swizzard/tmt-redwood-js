import type {
  DeleteTabMutation,
  DeleteTabMutationVariables,
  FindTabById,
} from 'types/graphql'

import { Link, routes, navigate, back } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { TabTagsList } from 'src/components/Tab/Tabs/Tabs'
import { tabTitle } from 'src/lib/formatters'

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
    if (confirm('Are you sure you want to delete this tab?')) {
      deleteTab({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Tab Details</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>URL</th>
              <td>{tabTitle(tab)}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{tab.notes}</td>
            </tr>
            <tr>
              <th>Tags</th>
              <td>
                <TabTagsList tags={tab.tags} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link to={routes.editTab({ id: tab.id })}>
          <button className="mx-3 rounded bg-blue-500 px-4 py-2 text-white">
            Edit
          </button>
        </Link>
        <button
          type="button"
          className="mx-3 rounded bg-red-500 px-4 py-2 text-white"
          onClick={() => onDeleteClick(tab.id)}
        >
          Delete
        </button>
        <button
          onClick={back}
          className="mx-3 rounded bg-slate-500 p-2 text-white md:hidden"
        >
          Back
        </button>
      </nav>
    </>
  )
}

export default Tab
