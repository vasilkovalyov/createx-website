import type { Meta, StoryObj } from '@storybook/react'
import CategoryFilters from '.'

import { model } from './CategoryFilters.model'

const meta: Meta<typeof CategoryFilters> = {
  title: 'Components/CategoryFilters',
  component: CategoryFilters,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof CategoryFilters>

export const Default: Story = {
  args: {
    ...model,
  },
}
