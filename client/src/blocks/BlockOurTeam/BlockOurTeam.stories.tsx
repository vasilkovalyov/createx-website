import type { Meta, StoryObj } from '@storybook/react'
import BlockOurTeam from '.'

import { model } from './BlockOurTeam.model'

const meta: Meta<typeof BlockOurTeam> = {
  title: 'Blocks/Block Our Team',
  component: BlockOurTeam,
  parameters: {
    layout: '',
  },
}
export default meta

type Story = StoryObj<typeof BlockOurTeam>

export const Default: Story = {
  args: {
    ...model,
  },
}
