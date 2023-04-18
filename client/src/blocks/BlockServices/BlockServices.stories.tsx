import type { Meta, StoryObj } from '@storybook/react'
import BlockServices from '.'

import { model } from './BlockServices.model'

const meta: Meta<typeof BlockServices> = {
  title: 'Blocks/Block Services',
  component: BlockServices,
  parameters: {
    layout: '',
  },
}
export default meta

type Story = StoryObj<typeof BlockServices>

export const Default: Story = {
  args: {
    ...model,
  },
}
