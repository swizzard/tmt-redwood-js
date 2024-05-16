import type {
  CreateTabTagMutation,
  CreateTabTagInput,
  CreateTabTagMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TabTagForm from 'src/components/TabTag/TabTagForm'

const CREATE_TAB_TAG_MUTATION: TypedDocumentNode<
  CreateTabTagMutation,
  CreateTabTagMutationVariables
> = gql`
  mutation CreateTabTagMutation($input: CreateTabTagInput!) {
    createTabTag(input: $input) {
      id
    }
  }
`

const NewTabTag = () => {
  const [createTabTag, { loading, error }] = useMutation(
    CREATE_TAB_TAG_MUTATION,
    {
      onCompleted: () => {
        toast.success('TabTag created')
        navigate(routes.tabTags())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateTabTagInput) => {
    createTabTag({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New TabTag</h2>
      </header>
      <div className="rw-segment-main">
        <TabTagForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTabTag
