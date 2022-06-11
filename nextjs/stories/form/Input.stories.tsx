import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Input from '../../components/theme/plain/Form/Input'

export default {
  title: 'Form/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
	label: 'Name',
  name: 'Your name',
  placeholder: 'Name',
  required: true,
  value: ''
} 
