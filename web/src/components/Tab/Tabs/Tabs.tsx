import type {
  DeleteTabMutation,
  DeleteTabMutationVariables,
  FindTabs,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Tab/TabsCell'
import { truncate } from 'src/lib/formatters'

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

const TabsList = ({ tabs }: FindTabs) => {
  const [deleteTab] = useMutation(DELETE_TAB_MUTATION, {
    onCompleted: () => {
      toast.success('Tab deleted')
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

  const onDeleteClick = (id: DeleteTabMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete tab ' + id + '?')) {
      deleteTab({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>URL</th>
            <th>Notes</th>
            <th>Tags</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tabs.map((tab) => (
            <tr key={tab.id}>
              <td>
                <a href={tab.url} title={'Visit site'} target="_blank">
                  {tab.url}
                </a>
              </td>
              <td>{truncate(tab.notes)}</td>
              {
                <td>
                  <TabTagsList tags={tab.tags} />
                </td>
              }
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.tab({ id: tab.id })}
                    title={'Show tab detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTab({ id: tab.id })}
                    title={'Edit tab ' + tab.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete tab ' + tab.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(tab.id)}
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

const TabTagsList = ({
  tags,
}: {
  tags: Array<{ tag: { name: string; id: string } }>
}) => {
  return (
    <ul>
      {tags.map((tag) => (
        <TTLI tag={tag.tag} />
      ))}
    </ul>
  )
}

const TTLI = ({ tag: { name, id } }: { tag: { name: string; id: string } }) => {
  const tagName = truncate(name, 20)
  return (
    <li key={id}>
      <Link
        to={routes.taggedTabs({ tagId: id })}
        title={`Tabs tagged "${name}"`}
      >
        {tagName}
      </Link>
    </li>
  )
}

export default TabsList
