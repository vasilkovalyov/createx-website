import type { Meta, StoryObj } from '@storybook/react'
import Hero from '.'

import { model } from './Hero.model'

const meta: Meta<typeof Hero> = {
  title: 'Blocks/Hero',
  component: Hero,
  parameters: {
    layout: '',
  },
}
export default meta

type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {
    ...model,
  },
}
