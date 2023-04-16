import type { Meta, StoryObj } from '@storybook/react'
import Button from '.'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Learn more about us',
  },
  argTypes: {
    fill: { control: 'select' },
    color: { control: 'select' },
    size: { control: 'select' },
    fullwidth: { control: 'boolean' },
  },
}
