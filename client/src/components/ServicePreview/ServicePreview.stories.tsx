import type { Meta, StoryObj } from '@storybook/react'
import ServicePreview from '.'

import { model } from './ServicePreview.model'

const meta: Meta<typeof ServicePreview> = {
  title: 'Components/Service Preview',
  component: ServicePreview,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof ServicePreview>

export const Default: Story = {
  args: {
    ...model,
  },
}
