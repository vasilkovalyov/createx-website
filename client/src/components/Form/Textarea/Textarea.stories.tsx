import type { Meta, StoryObj } from '@storybook/react'
import Textarea from '.'

import { model } from './Textarea.model'

const meta: Meta<typeof Textarea> = {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  render: () => <Textarea {...model} />,
}
