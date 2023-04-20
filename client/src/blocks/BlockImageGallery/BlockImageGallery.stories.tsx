import type { Meta, StoryObj } from '@storybook/react'
import BlockImageGallery from '.'

import { model } from './BlockImageGallery.model'

const meta: Meta<typeof BlockImageGallery> = {
  title: 'Blocks/Block Image Gallery',
  component: BlockImageGallery,
  parameters: {
    layout: '',
  },
}
export default meta

type Story = StoryObj<typeof BlockImageGallery>

export const Default: Story = {
  args: {
    ...model,
  },
}
