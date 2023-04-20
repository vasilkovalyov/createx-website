import type { Meta, StoryObj } from '@storybook/react'
import BlockConstructiveDecisions from '.'

import { model } from './BlockConstructiveDecisions.model'

const meta: Meta<typeof BlockConstructiveDecisions> = {
  title: 'Blocks/Block Constructive Decisions',
  component: BlockConstructiveDecisions,
  parameters: {
    layout: '',
  },
}
export default meta

type Story = StoryObj<typeof BlockConstructiveDecisions>

export const Default: Story = {
  args: {
    ...model,
  },
}
