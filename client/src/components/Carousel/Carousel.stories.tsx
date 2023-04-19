import type { Meta, StoryObj } from '@storybook/react'
import Carousel from '.'

import { model } from './Carousel.model'

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  args: {
    ...model,
  },
}
