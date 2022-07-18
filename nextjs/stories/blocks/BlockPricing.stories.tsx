import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockPricing from '../../components/theme/plain/BlockPricing'

export default {
  title: 'Blocks/BlockPricing',
  component: BlockPricing,
} as ComponentMeta<typeof BlockPricing>

const Template: ComponentStory<typeof BlockPricing> = (args) => <BlockPricing {...args} />

export const Default = Template.bind({})
Default.args = {}
