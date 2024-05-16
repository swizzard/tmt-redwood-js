import type { EditTabTagById, UpdateTabTagInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

type FormTabTag = NonNullable<EditTabTagById['tabTag']>

interface TabTagFormProps {
  tabTag?: EditTabTagById['tabTag']
  onSave: (data: UpdateTabTagInput, id?: FormTabTag['id']) => void
  error: RWGqlError
  loading: boolean
}

const TabTagForm = (props: TabTagFormProps) => {
  const onSubmit = (data: FormTabTag) => {
    props.onSave(data, props?.tabTag?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormTabTag> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="tabId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tab id
        </Label>

        <TextField
          name="tabId"
          defaultValue={props.tabTag?.tabId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="tabId" className="rw-field-error" />

        <Label
          name="tagId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tag id
        </Label>

        <TextField
          name="tagId"
          defaultValue={props.tabTag?.tagId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="tagId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TabTagForm
