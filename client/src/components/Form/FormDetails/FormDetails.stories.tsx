import type { Meta, StoryObj } from '@storybook/react'
import FormDetails from '.'

const meta: Meta<typeof FormDetails> = {
  title: 'Forms/Form Details',
  component: FormDetails,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof FormDetails>

export const Default: Story = {
  args: {
    heading: 'A quick way to discuss details',
  },
}
