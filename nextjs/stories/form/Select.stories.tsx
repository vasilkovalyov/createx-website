import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Select from '../../components/theme/plain/Form/Select'

export default {
  title: 'Form/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Default = Template.bind({})

Default.args = {
	label: 'Select',
  name: 'select',
  placeholder: 'Select',
  required: true,
  value: '',
	options: [
		{
			name: 'One',
			value: '1'
		},
		{
			name: 'Two',
			value: '2'
		},
		{
			name: 'Three',
			value: '3'
		},
	]
} 
