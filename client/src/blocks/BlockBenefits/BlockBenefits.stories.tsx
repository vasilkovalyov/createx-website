import type { Meta, StoryObj } from '@storybook/react'
import BlockBenefits from '.'

import { model } from './BlockBenefits.model'

const meta: Meta<typeof BlockBenefits> = {
  title: 'Blocks/Block Benefits',
  component: BlockBenefits,
  parameters: {
    layout: '',
  },
}
export default meta

type Story = StoryObj<typeof BlockBenefits>

export const Default: Story = {
  args: {
    ...model,
  },
}
