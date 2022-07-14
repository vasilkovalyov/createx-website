import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SubscribeForm from '../../components/theme/plain/Form/SubscribeForm'

export default {
  title: 'Form/SubscribeForm',
  component: SubscribeForm,
} as ComponentMeta<typeof SubscribeForm>

const Template: ComponentStory<typeof SubscribeForm> = (args) => <SubscribeForm />

export const Default = Template.bind({})

Default.args = {}
