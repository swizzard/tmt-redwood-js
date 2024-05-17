import type { Meta, StoryObj } from '@storybook/react'

import LoggedinLayout from './LoggedinLayout'

const meta: Meta<typeof LoggedinLayout> = {
  component: LoggedinLayout,
}

export default meta

type Story = StoryObj<typeof LoggedinLayout>

export const Primary: Story = {}
