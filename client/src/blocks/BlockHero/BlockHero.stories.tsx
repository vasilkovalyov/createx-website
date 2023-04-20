import type { Meta, StoryObj } from '@storybook/react'
import BlockHero from '.'

import { model } from './BlockHero.model'
import Breadcrumbs from '../../components/Breadcrumbs'
import { model as modelBreadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs.model'

const meta: Meta<typeof BlockHero> = {
  title: 'Blocks/Block Hero',
  component: BlockHero,
  parameters: {
    layout: '',
  },
}
export default meta

type Story = StoryObj<typeof BlockHero>

export const Default: Story = {
  render: () => <BlockHero {...model} />,
}

export const WithBreadcrubms: Story = {
  render: () => (
    <BlockHero {...model}>
      <Breadcrumbs {...modelBreadcrumbs} className="mb-16 md:mb-24" />
    </BlockHero>
  ),
}
