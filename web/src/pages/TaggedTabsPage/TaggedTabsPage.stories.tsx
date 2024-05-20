import type { Meta, StoryObj } from '@storybook/react'

import TaggedTabsPage from './TaggedTabsPage'

const meta: Meta<typeof TaggedTabsPage> = {
  component: TaggedTabsPage,
}

export default meta

type Story = StoryObj<typeof TaggedTabsPage>

export const Primary: Story = {}
