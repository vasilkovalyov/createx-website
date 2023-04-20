import type { Meta, StoryObj } from '@storybook/react'
import BlockPreFooter from '.'

import { model } from './BlockPreFooter.model'

const meta: Meta<typeof BlockPreFooter> = {
  title: 'Blocks/Block Pre Footer',
  component: BlockPreFooter,
  parameters: {
    layout: '',
  },
}
export default meta

type Story = StoryObj<typeof BlockPreFooter>

export const Default: Story = {
  args: {
    ...model,
  },
}
