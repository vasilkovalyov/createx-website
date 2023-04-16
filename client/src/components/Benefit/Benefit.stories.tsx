import type { Meta, StoryObj } from '@storybook/react'
import Benefit from '.'

import { model } from './Benefit.model'

const meta: Meta<typeof Benefit> = {
  title: 'Components/Benefit',
  component: Benefit,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof Benefit>

export const Default: Story = {
  args: {
    ...model,
  },
}
