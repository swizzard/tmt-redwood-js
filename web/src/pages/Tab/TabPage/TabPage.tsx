import TabCell from 'src/components/Tab/TabCell'

type TabPageProps = {
  id: string
}

const TabPage = ({ id }: TabPageProps) => {
  return <TabCell id={id} />
}

export default TabPage
