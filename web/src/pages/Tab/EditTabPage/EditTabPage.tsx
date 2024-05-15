import EditTabCell from 'src/components/Tab/EditTabCell'

type TabPageProps = {
  id: string
}

const EditTabPage = ({ id }: TabPageProps) => {
  return <EditTabCell id={id} />
}

export default EditTabPage
