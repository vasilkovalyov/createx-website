import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockProjectStatistics from '../../components/theme/plain/BlockProjectStatistics'

export default {
  title: 'Blocks/BlockProjectStatistics',
  component: BlockProjectStatistics,
} as ComponentMeta<typeof BlockProjectStatistics>

const Template: ComponentStory<typeof BlockProjectStatistics> = (args) => <BlockProjectStatistics {...args} />

export const Default = Template.bind({})
Default.args = {}
