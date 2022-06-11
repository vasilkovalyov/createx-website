import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CVForm from '../../components/theme/plain/Form/CVForm'

export default {
  title: 'Form/CVForm',
  component: CVForm,
} as ComponentMeta<typeof CVForm>

const Template: ComponentStory<typeof CVForm> = (args) => <CVForm />

export const Default = Template.bind({})

Default.args = {
} 
