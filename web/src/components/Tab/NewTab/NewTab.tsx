import type {
  CreateTabMutation,
  CreateTabInput,
  CreateTabMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TabForm from 'src/components/Tab/TabForm'

const CREATE_TAB_MUTATION: TypedDocumentNode<
  CreateTabMutation,
  CreateTabMutationVariables
> = gql`
  mutation CreateTabMutation($input: CreateTabInput!) {
    createTab(input: $input) {
      id
    }
  }
`

const NewTab = () => {
  const [createTab, { loading, error }] = useMutation(CREATE_TAB_MUTATION, {
    onCompleted: () => {
      toast.success('Tab created')
      navigate(routes.tabs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateTabInput) => {
    createTab({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Tab</h2>
      </header>
      <div className="rw-segment-main">
        <TabForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTab
