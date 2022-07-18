import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockProjectDescription from '../../components/theme/plain/BlockProjectDescription'

export default {
  title: 'Blocks/BlockProjectDescription',
  component: BlockProjectDescription,
} as ComponentMeta<typeof BlockProjectDescription>

const Template: ComponentStory<typeof BlockProjectDescription> = (args) => <BlockProjectDescription {...args} />

export const Default = Template.bind({})
Default.args = {}
