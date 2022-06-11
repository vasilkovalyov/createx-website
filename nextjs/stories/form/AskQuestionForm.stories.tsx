import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AskQuestionForm from '../../components/theme/plain/Form/AskQuestionForm'

export default {
  title: 'Form/AskQuestionForm',
  component: AskQuestionForm,
} as ComponentMeta<typeof AskQuestionForm>

const Template: ComponentStory<typeof AskQuestionForm> = (args) => <AskQuestionForm />

export const Default = Template.bind({})

Default.args = {
} 
