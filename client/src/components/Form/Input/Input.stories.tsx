import type { Meta, StoryObj } from '@storybook/react'
import Input from '.'

import { model } from './Input.model'

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: () => <Input {...model} />,
}
