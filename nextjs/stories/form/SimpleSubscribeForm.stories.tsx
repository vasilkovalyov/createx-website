import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SimpleSubscribeForm from '../../components/theme/plain/Form/SimpleSubscribeForm'

export default {
  title: 'Form/SimpleSubscribeForm',
  component: SimpleSubscribeForm,
} as ComponentMeta<typeof SimpleSubscribeForm>

const Template: ComponentStory<typeof SimpleSubscribeForm> = (args) => <SimpleSubscribeForm />

export const Default = Template.bind({})

Default.args = {}
