import type { Meta, StoryObj } from '@storybook/react'
import Header from '.'

import { model } from './Header.model'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    ...model,
  },
}
