import type { Meta, StoryObj } from '@storybook/react'
import BlockServicePreview from '.'

import { model } from './BlockServicePreview.model'

const meta: Meta<typeof BlockServicePreview> = {
  title: 'Blocks/Block Service Preview',
  component: BlockServicePreview,
  parameters: {
    layout: '',
  },
}
export default meta

type Story = StoryObj<typeof BlockServicePreview>

export const Default: Story = {
  args: {
    ...model,
  },
}
