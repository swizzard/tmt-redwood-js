import EditTabTagCell from 'src/components/TabTag/EditTabTagCell'

type TabTagPageProps = {
  id: string
}

const EditTabTagPage = ({ id }: TabTagPageProps) => {
  return <EditTabTagCell id={id} />
}

export default EditTabTagPage
