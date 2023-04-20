import type { Meta, StoryObj } from '@storybook/react'
import BlockOurHistory from '.'

import { model } from './BlockOurHistory.model'

const meta: Meta<typeof BlockOurHistory> = {
  title: 'Blocks/Block Our History',
  component: BlockOurHistory,
  parameters: {
    layout: '',
  },
}
export default meta

type Story = StoryObj<typeof BlockOurHistory>

export const Default: Story = {
  args: {
    ...model,
  },
}
