import type { Meta, StoryObj } from '@storybook/react'
import BlockRecentNews from '.'

import { model } from './BlockRecentNews.model'

const meta: Meta<typeof BlockRecentNews> = {
  title: 'Blocks/Block Recent News',
  component: BlockRecentNews,
  parameters: {
    layout: '',
  },
}
export default meta

type Story = StoryObj<typeof BlockRecentNews>

export const Default: Story = {
  args: {
    ...model,
  },
}
