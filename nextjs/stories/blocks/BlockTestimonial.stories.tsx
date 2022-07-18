import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockTestimonial from '../../components/theme/plain/BlockTestimonial'

export default {
  title: 'Blocks/BlockTestimonial',
  component: BlockTestimonial,
} as ComponentMeta<typeof BlockTestimonial>

const Template: ComponentStory<typeof BlockTestimonial> = (args) => <BlockTestimonial {...args} />

export const Default = Template.bind({})
Default.args = {}
