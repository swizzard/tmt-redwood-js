import type { EditTabById, UpdateTabInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

type FormTab = NonNullable<EditTabById['tab']>

interface TabFormProps {
  tab?: EditTabById['tab']
  onSave: (data: UpdateTabInput, id?: FormTab['id']) => void
  error: RWGqlError
  loading: boolean
}

const TabForm = (props: TabFormProps) => {
  const onSubmit = ({ tags, ...data }: FormTab) => {
    const tagNames = (tags ?? []).map((tag) => tag.tag.name)
    props.onSave(
      { ...data, userId: context.currentUser.id as string, tags: tagNames },
      props?.tab?.id
    )
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormTab> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url
        </Label>

        <TextField
          name="url"
          defaultValue={props.tab?.url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="url" className="rw-field-error" />

        <Label
          name="notes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Notes
        </Label>

        <TextField
          name="notes"
          defaultValue={props.tab?.notes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="notes" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TabForm
