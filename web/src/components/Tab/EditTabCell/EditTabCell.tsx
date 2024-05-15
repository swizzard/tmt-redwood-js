import type {
  EditTabById,
  UpdateTabInput,
  UpdateTabMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TabForm from 'src/components/Tab/TabForm'

export const QUERY: TypedDocumentNode<EditTabById> = gql`
  query EditTabById($id: String!) {
    tab: tab(id: $id) {
      id
      url
      notes
      userId
    }
  }
`

const UPDATE_TAB_MUTATION: TypedDocumentNode<
  EditTabById,
  UpdateTabMutationVariables
> = gql`
  mutation UpdateTabMutation($id: String!, $input: UpdateTabInput!) {
    updateTab(id: $id, input: $input) {
      id
      url
      notes
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tab }: CellSuccessProps<EditTabById>) => {
  const [updateTab, { loading, error }] = useMutation(UPDATE_TAB_MUTATION, {
    onCompleted: () => {
      toast.success('Tab updated')
      navigate(routes.tabs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdateTabInput, id: EditTabById['tab']['id']) => {
    updateTab({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Tab {tab?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TabForm tab={tab} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
