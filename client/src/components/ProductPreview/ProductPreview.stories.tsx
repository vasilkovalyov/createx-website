import type { Meta, StoryObj } from '@storybook/react'
import ProductPreview from '.'

import { model } from './ProductPreview.model'

const meta: Meta<typeof ProductPreview> = {
  title: 'Components/Product Preview',
  component: ProductPreview,
  parameters: {
    layout: 'padded',
  },
}
export default meta

type Story = StoryObj<typeof ProductPreview>

export const Default: Story = {
  args: {
    ...model,
  },
}
