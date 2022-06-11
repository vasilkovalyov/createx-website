import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import LeaveCommentForm from '../../components/theme/plain/Form/LeaveCommentForm'

export default {
  title: 'Form/LeaveCommentForm',
  component: LeaveCommentForm,
} as ComponentMeta<typeof LeaveCommentForm>

const Template: ComponentStory<typeof LeaveCommentForm> = (args) => <LeaveCommentForm />

export const Default = Template.bind({})

Default.args = {
} 
