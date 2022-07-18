import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockServices from '../../components/theme/plain/BlockServices'

export default {
  title: 'Blocks/BlockServices',
  component: BlockServices,
} as ComponentMeta<typeof BlockServices>

const Template: ComponentStory<typeof BlockServices> = (args) => <BlockServices {...args} />

export const Default = Template.bind({})
Default.args = {}
