import type { Meta, StoryObj } from '@storybook/react'
import ClientQuote from '.'

import { model } from './ClientQuote.model'

const meta: Meta<typeof ClientQuote> = {
  title: 'Components/Client Quote',
  component: ClientQuote,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof ClientQuote>

export const Default: Story = {
  args: {
    ...model,
  },
}
