import { Metadata } from '@redwoodjs/web'
import TaggedTabsCell from 'src/components/TaggedTabsCell'

type TaggedTabsPageProps = {
  tagId: string
}

const TaggedTabsPage = ({ tagId }: TaggedTabsPageProps) => {
  return (
    <>
      <Metadata title="Tagged Tabs" description="Tagged Tabs" />
      <TaggedTabsCell tagId={tagId} />
    </>
  )
}

export default TaggedTabsPage
