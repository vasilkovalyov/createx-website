import type { Meta, StoryObj } from '@storybook/react'
import Service from '.'

import { model } from './Service.model'

const meta: Meta<typeof Service> = {
  title: 'Components/Service',
  component: Service,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof Service>

export const Default: Story = {
  args: {
    ...model,
  },
  argTypes: {
    reversed: { control: 'boolean' },
  },
}
