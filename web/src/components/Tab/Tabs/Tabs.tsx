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
import { tabTitle, truncate } from 'src/lib/formatters'
import { useState } from 'react'

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

const TabsList = ({ tabs, fromTags }: FindTabs & { fromTags?: boolean }) => {
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
    if (confirm('Are you sure you want to delete this tab?')) {
      deleteTab({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive bg-slate-100">
      <TabsTable tabs={tabs} onDeleteClick={onDeleteClick} />
      <TabsCards tabs={tabs} onDeleteClick={onDeleteClick} />
      {fromTags && (
        <div className="rw-button-group">
          <Link to={routes.tags()} className="rw-button">
            Back to Tags
          </Link>
        </div>
      )}
    </div>
  )
}

const TabsTable = ({
  tabs,
  onDeleteClick,
}: FindTabs & { onDeleteClick: Function }) => {
  return (
    <table className="rw-table hidden md:table">
      <thead>
        <tr>
          <th>Title/URL</th>
          <th>Notes</th>
          <th>Tags</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {tabs.map((tab) => (
          <tr key={`table-${tab.id}`}>
            <td>{tabTitle(tab)}</td>
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
  )
}

const TabsCards = ({
  tabs,
  onDeleteClick,
}: FindTabs & { onDeleteClick: Function }) => {
  return (
    <div className="mt-5 flex flex-col gap-x-5 gap-y-10 md:hidden">
      {tabs.map((tab) => (
        <TabCard
          key={`card-${tab.id}`}
          tab={tab}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  )
}

export const TabTagsList = ({
  tags,
}: {
  tags: Array<{ tag: { name: string; id: string } }>
}) => {
  return (
    <ul>
      {tags.map((tag) => (
        <TTLI key={`ttli-${tag.tag.id}`} tag={tag.tag} />
      ))}
    </ul>
  )
}

const TTLI = ({ tag: { name, id } }: { tag: { name: string; id: string } }) => {
  const tagName = truncate(name, 20)
  return (
    <li key={`ttli-li-${id}`}>
      <Link
        to={routes.taggedTabs({ tagId: id })}
        title={`Tabs tagged "${name}"`}
      >
        {tagName}
      </Link>
    </li>
  )
}

const TabCard = ({
  tab,
  onDeleteClick,
}: {
  tab: FindTabs['tabs'][number]
  onDeleteClick: Function
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border border-solid border-gray-500">
      <div className="grid grid-cols-12 border-b border-solid border-gray-500 text-center">
        <div
          className="col-span-1 mb-auto ml-5 mt-auto flex"
          onClick={() => {
            console.log('clicked')
            setIsOpen(!isOpen)
          }}
        >
          <i className={`fa fa-thin ${isOpen ? 'fa-minus' : 'fa-plus'}`} />
        </div>
        <div className="col-span-11">
          <span className="ml-5 text-lg font-bold">{tabTitle(tab)}</span>
        </div>
      </div>
      <div>
        {!isOpen ? null : tab.title ? (
          <div className="ml-5 mt-5">
            <b>URL:</b>{' '}
            <a href={tab.url} target="_blank" title={`Visit ${tab.url}`}>
              {truncate(tab.url, 90)}
            </a>
          </div>
        ) : null}
        {isOpen && (
          <>
            <div className="ml-5 mt-5">
              <b>Notes:</b> {truncate(tab.notes)}
            </div>
            <div className="ml-5 mt-5">
              <b>Tags:</b>
              <TabTagsList tags={tab.tags} />
            </div>
            <div>
              <nav className="rw-button-group">
                <Link
                  to={routes.tab({ id: tab.id })}
                  title="Show tab detail"
                  className="rw-button rw-button-small"
                >
                  Show
                </Link>
                <Link
                  to={routes.editTab({ id: tab.id })}
                  title="Edit tab"
                  className="rw-button rw-button-small rw-button-blue"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  title="Delete tab"
                  className="rw-button rw-button-small rw-button-red"
                  onClick={() => onDeleteClick(tab.id)}
                >
                  Delete
                </button>
              </nav>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default TabsList
