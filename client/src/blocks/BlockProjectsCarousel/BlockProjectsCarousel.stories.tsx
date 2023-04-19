import type { Meta, StoryObj } from '@storybook/react'
import BlockProjectsCarousel from '.'

import { model } from './BlockProjectsCarousel.model'

const meta: Meta<typeof BlockProjectsCarousel> = {
  title: 'Blocks/Block Projects Carousel',
  component: BlockProjectsCarousel,
  parameters: {
    layout: '',
  },
}
export default meta

type Story = StoryObj<typeof BlockProjectsCarousel>

export const Default: Story = {
  args: {
    ...model,
  },
}
