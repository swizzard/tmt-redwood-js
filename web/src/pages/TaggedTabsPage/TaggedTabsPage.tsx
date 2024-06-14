import { Metadata } from '@redwoodjs/web'
import TaggedTabsCell from 'src/components/TaggedTabsCell'

type TaggedTabsPageProps = {
  tagId: string
}

const TaggedTabsPage = ({ tagId }: TaggedTabsPageProps) => {
  return (
    <>
      <TaggedTabsCell tagId={tagId} />
    </>
  )
}

export default TaggedTabsPage
