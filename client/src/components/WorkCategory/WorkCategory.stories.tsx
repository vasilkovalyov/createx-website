import type { Meta, StoryObj } from '@storybook/react'
import WorkCategory from '.'

import { model } from './WorkCategory.model'

const meta: Meta<typeof WorkCategory> = {
  title: 'Components/Work Category',
  component: WorkCategory,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof WorkCategory>

export const Default: Story = {
  args: {
    ...model,
  },
}
