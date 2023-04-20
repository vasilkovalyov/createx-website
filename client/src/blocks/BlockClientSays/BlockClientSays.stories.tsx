import type { Meta, StoryObj } from '@storybook/react'
import BlockClientSays from '.'

import { model } from './BlockClientSays.model'

const meta: Meta<typeof BlockClientSays> = {
  title: 'Blocks/Block Client Says',
  component: BlockClientSays,
  parameters: {
    layout: '',
  },
}
export default meta

type Story = StoryObj<typeof BlockClientSays>

export const Default: Story = {
  args: {
    ...model,
  },
}
