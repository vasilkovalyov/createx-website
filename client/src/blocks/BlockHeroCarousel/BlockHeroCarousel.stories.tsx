import type { Meta, StoryObj } from '@storybook/react'
import BlockHeroCarousel from '.'

import { model } from './BlockHeroCarousel.model'

const meta: Meta<typeof BlockHeroCarousel> = {
  title: 'Blocks/Block Hero Carousel',
  component: BlockHeroCarousel,
  parameters: {
    layout: '',
  },
}
export default meta

type Story = StoryObj<typeof BlockHeroCarousel>

export const Default: Story = {
  args: {
    ...model,
  },
}
