import { render } from '@redwoodjs/testing/web'

import TaggedTabsPage from './TaggedTabsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TaggedTabsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TaggedTabsPage tagId={'42'} />)
    }).not.toThrow()
  })
})
