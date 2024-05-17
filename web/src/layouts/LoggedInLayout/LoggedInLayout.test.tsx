import { render } from '@redwoodjs/testing/web'

import LoggedinLayout from './LoggedinLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LoggedinLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoggedinLayout />)
    }).not.toThrow()
  })
})
