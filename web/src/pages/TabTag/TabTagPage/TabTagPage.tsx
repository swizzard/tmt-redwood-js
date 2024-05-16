import TabTagCell from 'src/components/TabTag/TabTagCell'

type TabTagPageProps = {
  id: string
}

const TabTagPage = ({ id }: TabTagPageProps) => {
  return <TabTagCell id={id} />
}

export default TabTagPage
