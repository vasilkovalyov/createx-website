import type { Meta, StoryObj } from '@storybook/react'
import BlockFindUs from '.'

import { model } from './BlockFindUs.model'

const meta: Meta<typeof BlockFindUs> = {
  title: 'Blocks/Block Find Us',
  component: BlockFindUs,
  parameters: {
    layout: '',
  },
}
export default meta

type Story = StoryObj<typeof BlockFindUs>

export const Default: Story = {
  args: {
    ...model,
  },
}
