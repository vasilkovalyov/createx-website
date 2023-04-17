import type { Meta, StoryObj } from '@storybook/react'
import NewsPost from '.'

import { model } from './NewsPost.model'

const meta: Meta<typeof NewsPost> = {
  title: 'Components/News Post',
  component: NewsPost,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof NewsPost>

export const Default: Story = {
  args: {
    ...model,
  },
}
