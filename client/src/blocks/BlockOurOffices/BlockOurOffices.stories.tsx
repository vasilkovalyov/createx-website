import type { Meta, StoryObj } from '@storybook/react'
import BlockOurOffices from '.'

import { model } from './BlockOurOffices.model'

const meta: Meta<typeof BlockOurOffices> = {
  title: 'Blocks/Block Our Offices',
  component: BlockOurOffices,
  parameters: {
    layout: '',
  },
}
export default meta

type Story = StoryObj<typeof BlockOurOffices>

export const Default: Story = {
  args: {
    ...model,
  },
}
