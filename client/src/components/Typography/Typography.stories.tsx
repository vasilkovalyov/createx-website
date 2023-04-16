import type { Meta, StoryObj } from '@storybook/react'
import Typography from '.'

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Typography>

export const Default: Story = {
  args: {
    level: 'h1',
    children: 'Typography H1',
  },
}
