import type { Meta, StoryObj } from '@storybook/react'
import Breadcrumbs from '.'

import { model } from './Breadcrumbs.model'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
  args: {
    ...model,
  },
}
