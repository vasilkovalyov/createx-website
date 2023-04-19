import type { Meta, StoryObj } from '@storybook/react'
import Navigation from '.'

import { model } from './Navigation.model'

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof Navigation>

export const Default: Story = {
  args: {
    ...model,
  },
}
