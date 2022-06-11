import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TextArea from '../../components/theme/plain/Form/TextArea'

export default {
  title: 'Form/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />

export const Default = Template.bind({})

Default.args = {
	label: 'Message',
	name: 'message',
	placeholder: 'Your message',
	value: ''
} 
