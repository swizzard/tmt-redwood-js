import type {
  EditTabTagById,
  UpdateTabTagInput,
  UpdateTabTagMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TabTagForm from 'src/components/TabTag/TabTagForm'

export const QUERY: TypedDocumentNode<EditTabTagById> = gql`
  query EditTabTagById($id: String!) {
    tabTag: tabTag(id: $id) {
      id
      tabId
      tagId
    }
  }
`

const UPDATE_TAB_TAG_MUTATION: TypedDocumentNode<
  EditTabTagById,
  UpdateTabTagMutationVariables
> = gql`
  mutation UpdateTabTagMutation($id: String!, $input: UpdateTabTagInput!) {
    updateTabTag(id: $id, input: $input) {
      id
      tabId
      tagId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tabTag }: CellSuccessProps<EditTabTagById>) => {
  const [updateTabTag, { loading, error }] = useMutation(
    UPDATE_TAB_TAG_MUTATION,
    {
      onCompleted: () => {
        toast.success('TabTag updated')
        navigate(routes.tabTags())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateTabTagInput,
    id: EditTabTagById['tabTag']['id']
  ) => {
    updateTabTag({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit TabTag {tabTag?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TabTagForm
          tabTag={tabTag}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
